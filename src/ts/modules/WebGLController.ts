export default class WebGLController {
  gl: WebGLRenderingContext | null;

  constructor() {
    this.gl = null;
  }

  initWebGLContext(canvas: HTMLCanvasElement) {
    this.gl = canvas.getContext("webgl");
  }

  getWebGLContext() {
    return this.gl;
  }

  initTexture() {
    const texture = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    const level = 0;
    const internalFormat = this.gl.RGBA;
    const width = 1;
    const height = 1;
    const border = 0;
    const srcFormat = this.gl.RGBA;
    const srcType = this.gl.UNSIGNED_BYTE;
    const pixel = new Uint8Array([0, 0, 0, 255]);
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);
    this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, width, height, border, srcFormat, srcType, pixel);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
    return texture;
  }

  updateTexture(texture: WebGLTexture, video: HTMLVideoElement) {
    const level = 0;
    const internalFormat = this.gl.RGBA;
    const srcFormat = this.gl.RGBA;
    const srcType = this.gl.UNSIGNED_BYTE;
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, video);
  }

  createShader(type: "vertex" | "fragment", source: string) {
    let shader;

    switch (type) {
      case "vertex":
        shader = this.gl.createShader(this.gl.VERTEX_SHADER);
        break;

      case "fragment":
        shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        break;
      default:
        return;
    }

    this.gl.shaderSource(shader, source);

    this.gl.compileShader(shader);
    if (this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      return shader;
    } else {
      alert(this.gl.getShaderInfoLog(shader));
      console.log(this.gl.getShaderInfoLog(shader));
    }
  }

  createProgram(vertexShader: string, fragmentShader: string) {
    const program = this.gl.createProgram();
    this.gl.attachShader(program, vertexShader);
    this.gl.attachShader(program, fragmentShader);
    this.gl.linkProgram(program);
    if (this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
      this.gl.useProgram(program);
      return program;
    } else {
      return null;
    }
  }

  createVbo(vboArray: number[]) {
    const vbo = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vbo);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vboArray), this.gl.STATIC_DRAW);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    return vbo;
  }

  createIbo(iboArray: number[]) {
    const ibo = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, ibo);
    this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Int16Array(iboArray), this.gl.STATIC_DRAW);
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    return ibo;
  }
}
