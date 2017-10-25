//RENDERER//////////////////////////////////////////////
var renderer = new THREE.WebGLRenderer({
	canvas: document.getElementById('myCanvas'), antialias: true
});
renderer.setClearColor(0x9A82FF);
renderer.setPixelRatio(window.devidePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//CAMERA//////////////////////////////////////////////
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
//camera.position.set(0,0,0); 


//SCENE//////////////////////////////////////////////
var scene = new THREE.Scene();


//LIGHTS////////////////////////////////////////
var light = new THREE.AmbientLight(0xfffff, 0.5);
scene.add(light);

var light1 = new THREE.PointLight(0xfffff, 1);
scene.add(light1);


//OBJECTS///////////////////////////////////////////


var geometry = new THREE.BoxBufferGeometry(100,100,100);


var geometry2 = new THREE.TorusKnotGeometry(100, 5, 96, 10, 5, 78);

/*VERTICES (TRIANGULO)
var geometry = new THREE.BufferGeometry();
var vertices = new Float32Array([
	-10.0, -10.0, 0.0,
	10.0, -10.0, 0.0,
	10.0, 10.0, 0.0
]);
geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3)) */


//MATERIAL////////////////////////////////////////////////
/*
var spriteLoaded = new THREE.TextureLoader().load('http://localhost:3000/js/texture.jpg')

var spriteMaterial = new THREE.SpriteMaterial({
	map: spriteLoaded
})

var sprite = new THREE.Sprite(spriteMaterial);

sprite.scale.set(100,100,100)
sprite.position.z = -1000;
spriteLoaded.minFilter = THREE.LinearFilter
*/

var material = new THREE.ShaderMaterial({
	vertexShader: document.getElementById('vertexShader').textContent,
	fragmentShader: document.getElementById('fragmentShader').textContent
});

var mesh = new THREE.Mesh(geometry, material);
mesh.position.z = -1000;

var mesh2 = new THREE.Mesh(geometry2, material);
mesh2.position.z = -1500;
mesh2.position.x = 400;


scene.add(mesh2, mesh);
////scene.add(sprite);


//ANIMATION///////////////////////////////////

render();

function render(){
	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;
	mesh2.rotation.x += 0.03;
	mesh2.rotation.y += 0.01;
	renderer.render(scene, camera);
	requestAnimationFrame(render);
}