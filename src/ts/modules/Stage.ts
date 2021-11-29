// MEMO: canvasの描画で使用するTSファイルです

import * as THREE from 'three'
import { APP } from '../script'

export default class Stage {

  $stage: HTMLElement
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  mesh: THREE.Mesh

  constructor() {
    this.$stage = document.getElementById('stage')
    this.setUp()
    this.bindEvents()
  }

  setUp() {
    this.setScene()
    this.setCamera()
    this.setObjects()
    this.setLights()
    this.setRenderer()
  }

  setScene() {
    this.scene = new THREE.Scene()
  }

  setCamera() {
    const { W, H } = APP.Info
    this.camera = new THREE.PerspectiveCamera(45, W/H, 0.1, 10000)
    this.camera.position.set(0, 0, -25)
    this.camera.lookAt(new THREE.Vector3())
  }

  setObjects() {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x5C415D })
    this.mesh = new THREE.Mesh( geometry, material ) 
    this.scene.add(this.mesh)
  }

  setLights() {
    // const ambient = new THREE.AmbientLight(0xE5E8C5)
    // this.scene.add(ambient)
    // const frontLight = new THREE.DirectionalLight(0x000000, 0.5)
    // frontLight.position.set(1, 1, 20)
    // this.scene.add(frontLight)
    // const backLight = new THREE.DirectionalLight(0x000000, 1)
    // backLight.position.set(-1, -1, -10)
    // this.scene.add(backLight)
  }

  setRenderer() {
    const { W, H } = APP.Info
    this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: this.$stage })
    this.renderer.setClearColor(0xF6F7EB)
    this.renderer.setSize(W, H)
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setAnimationLoop(() => { this.renderStage() })
  }

  renderStage() {
    this.mesh.rotation.x += 0.01
    this.mesh.rotation.y += 0.01
    this.renderer.render(this.scene, this.camera)
  }

  bindEvents() {
    window.addEventListener('resize', () => { this.onResize() })
  }

  onResize() {
    const { W, H } = APP.Info
    this.camera.aspect = W / H
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(W, H)
  }

}