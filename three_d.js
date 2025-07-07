//THREEJS 
//div i need to refer to intro_ani

import * as THREE from 'three';
const  renderer = new THREE.WebGLRenderer({antialias:true});   // anatialias true = provide edges smooth effect
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';



renderer.outputColorSpace = THREE.SRGBColorSpace;  // tends be default of models colorspacing
renderer.setSize(window.innerWidth/2, window.innerHeight/2);
renderer.toneMapping = 0;
renderer.toneMappingExposure = 1;
renderer.toneMapping = THREE.NoToneMapping;
renderer.setClearColor(0xFFFFFF); //0xFFFFFF white
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('intro_ani').appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(5, 2, 16);
camera.lookAt(0,0,0);

// if view port is on a mobile 


// const groundGeometry = new THREE.PlaneGeometry(8,8,32,32);
// groundGeometry.rotateX(-Math.PI/2) // Sit vertically
// const groundMaterial = new THREE.MeshStandardMaterial({
//   color:0x555555,
//   side: THREE.DoubleSide
// });

// const groundMesh = new THREE.Mesh(groundGeometry,groundMaterial);
// scene.add(groundMesh);

const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);


let mixer;
const loader = new GLTFLoader().setPath('public/text/'); 
// need name of gltf folder with the loader directory & a callback fnction, called when model finished loading
loader.load('version.glb', async function (gltf)  {
  //model
  const mesh = gltf.scene;
  mesh.position.set(0,-2,0);
  mesh.scale.set(1.1,1.5,1.5);  /*NoteToSelf:  potentially change when add animation landing page actaul one */
  scene.add(mesh);

  if (mesh){
    //aniamtion
  mixer = new THREE.AnimationMixer(mesh); // animation player
  const clips = gltf.animations;
  const clip = THREE.AnimationClip.findByName(clips,'TextAction.004'); // calling static method defoned by name 
  const action = mixer.clipAction(clip); // convert clip into playable action
  action.play();
  }

  
}) 


// let mixer;

// const loader = new GLTFLoader();
// loader.load(textAnimation.href, function(gltf){
//   const model = gltf.scene;
  
//   scene.add(model);
//   mixer = new THREE// animation var
// })

const clock = new THREE.Clock();

function animate(){
  if (mixer) {
    mixer.update(clock.getDelta());
  }
  renderer.render(scene,camera);
}

renderer.setAnimationLoop(animate)


//resize 
window.addEventListener("resize",function(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth/2, window.innerHeight/2)
})