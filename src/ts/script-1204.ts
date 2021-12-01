import UIController from "./modules/UIController";
import WebGLController from "./modules/WebGLController";

let uc, wc;

var startTime;
var time = 0.0;
var tempTime = 0.0;

let canvas;

let canvasWidth, canvasHeight;
let mouseX, mouseY;
let gl;
let uniformLocation = new Array();
let texture;
let video;

let isRunning;
var isVideoReady = false;

let sectionUI, buttonUI;

uc = new UIController();
wc = new WebGLController();

const vertexShaderSource = `
  attribute vec3 position;
  void main(void){
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  uniform float time;
  uniform vec2  mouse;
  uniform vec2  resolution;
  uniform sampler2D map;
  const vec3 chromaKeyColor = vec3(0.0, 1.0, 0.0);
  const float threshold = 0.785;
  void main(void) {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec3 textureColor = texture2D(map, uv).rgb;
    float difference = length(chromaKeyColor - textureColor.rgb);
    gl_FragColor = vec4(textureColor, difference < threshold ? 0 : 1);
  }
`;

window.onload = function () {

  video = setupVideo('../static/video/video-1204.mp4');

  sectionUI = document.getElementById('ui');
  buttonUI = document.getElementById('ui_button');

  buttonUI.addEventListener('click', () => {
    video.pause();
    video.muted = false;
    video.currentTime = 0;
    video.play();
    sectionUI.classList.remove('is-active');
    canvas.classList.add('is-active');

  });

  canvas = document.getElementById("canvas");
  canvasWidth = 1280;
  canvasHeight = 720;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  canvas.addEventListener("mousemove", mouseMove, true);

  wc.initWebGLContext(canvas);
  gl = wc.getWebGLContext();

  let program = wc.createProgram(
    wc.createShader("vertex", vertexShaderSource),
    wc.createShader("fragment", fragmentShaderSource)
  );
  isRunning = program != null;
  uniformLocation[0] = gl.getUniformLocation(program, "time");
  uniformLocation[1] = gl.getUniformLocation(program, "mouse");
  uniformLocation[2] = gl.getUniformLocation(program, "resolution");
  uniformLocation[3] = gl.getUniformLocation(program, "map");

  let position = [-1.0, 1.0, 0.0, 1.0, 1.0, 0.0, -1.0, -1.0, 0.0, 1.0, -1.0, 0.0];
  let index = [0, 2, 1, 1, 2, 3];
  let vPosition = wc.createVbo(position);
  let vIndex = wc.createIbo(index);
  let vAttLocation = gl.getAttribLocation(program, "position");
  gl.bindBuffer(gl.ARRAY_BUFFER, vPosition);
  gl.enableVertexAttribArray(vAttLocation);
  gl.vertexAttribPointer(vAttLocation, 3, gl.FLOAT, false, 0, 0);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vIndex);

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  mouseX = 0.5;
  mouseY = 0.5;
  startTime = new Date().getTime();

  texture = wc.initTexture();

  render();
};

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    location.reload();
  }
});

function mouseMove(e) {
  mouseX = e.offsetX / canvasWidth;
  mouseY = e.offsetY / canvasHeight;
}

function render() {
  if (!isRunning) {
    return;
  }

  time = (new Date().getTime() - startTime) * 0.001;

  if (isVideoReady) {
    wc.updateTexture(texture, video);
  }

  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.activeTexture(gl.TEXTURE0);

  gl.bindTexture(gl.TEXTURE_2D, texture);

  gl.uniform1f(uniformLocation[0], time + tempTime);
  gl.uniform2fv(uniformLocation[1], [mouseX, mouseY]);
  gl.uniform2fv(uniformLocation[2], [canvasWidth, canvasHeight]);
  gl.uniform1i(uniformLocation[3], 0);

  gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
  gl.flush();

  // setTimeout(render, fps);
  requestAnimationFrame(render);
}

function setupVideo(url) {
  const video = document.createElement("video");

  var playing = false;
  var timeupdate = false;

  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.setAttribute("preload", "auto");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");

  video.addEventListener(
    "playing",
    function () {
      playing = true;
      checkReady();
    },
    true
  );

  video.addEventListener(
    "timeupdate",
    function () {
      timeupdate = true;
      checkReady();
    },
    true
  );

  video.src = url;
  video.play();

  function checkReady() {
    if (playing && timeupdate) {
      isVideoReady = true;
    }
  }

  return video;
}
