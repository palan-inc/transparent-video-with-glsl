export default class WebGLController {
  gl: WebGLRenderingContext | null;

  constructor() {
    this.gl = null;
  }

  // MEMO: WebGLコンテキストを初期化する関数
  initWebGLContext(canvas: HTMLCanvasElement) {
    this.gl = canvas.getContext("webgl");
  }

  // MEMO: WebGLコンテキストを返す関数
  getWebGLContext() {
    return this.gl;
  }

  // MEMO: テクスチャを初期化する関数
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

  // MEMO: テクスチャを更新する関数
  updateTexture(texture: WebGLTexture, video: HTMLVideoElement) {
    const level = 0;
    const internalFormat = this.gl.RGBA;
    const srcFormat = this.gl.RGBA;
    const srcType = this.gl.UNSIGNED_BYTE;
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, video);
  }

  // -----
  // シェーダとは...？
  // 3Dオブジェクトをディスプレイに描画するためのプログラム
  // -----
  // MEMO: シェーダを生成する関数
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

  // -----
  // プログラムオブジェクトとは...？
  // vertexシェーダとfragmentシェーダを紐付けたり
  // JavaScriptからGLSLへ変数を渡す役割をもつオブジェクトのこと
  // ------
  // MEMO: プログラムオブジェクトを生成しシェーダをリンクする関数
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

  // -----
  // VBOとは...？
  // 頂点データの格納オブジェクトのこと
  // ------
  // MEMO: VBOを生成する関数
  createVbo(vboArray: number[]) {
    const vbo = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vbo);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vboArray), this.gl.STATIC_DRAW);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    return vbo;
  }

  // -----
  // IBOとは...？
  // 頂点データの肥大化を抑えるため、
  // 頂点データを使い回すインデックスデータの格納オブジェクトのこと
  // ------
  // MEMO: IBOを生成する関数
  createIbo(iboArray: number[]) {
    const ibo = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, ibo);
    this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Int16Array(iboArray), this.gl.STATIC_DRAW);
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    return ibo;
  }
}
