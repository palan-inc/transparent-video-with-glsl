import UIController from "./modules/UIController";
import WebGLController from "./modules/WebGLController";

const vertexShader = `
  varying vec2 vUv;
  void main(void) {
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_Position = projectionMatrix * mvPosition;
  }
`

const fragmentShader = `
  uniform sampler2D texture;
  uniform vec3 color;
  varying vec2 vUv;
  void main(void) {
    vec3 tColor = texture2D( texture, vUv ).rgb;
    float a = (length(tColor - color) - 0.5) * 7.0;
    gl_FragColor = vec4(tColor, a);
  }
`