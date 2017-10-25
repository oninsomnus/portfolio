var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/ window.innerHeight, 0.1, 1000);

document.addEventListener( 'mousemove', onDocumentMouseMove, false );

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor(0x9A82FF);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//window resizer
window.addEventListener('resize', function(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
})




var light = new THREE.SpotLight(0xfffff, 0.5);
var light2 = new THREE.PointLight( 0xfffff, 0.3, 200 );
var light3 = new THREE.PointLight( 0xfffff, 0.3, 200 );
light.castShadow = true;
light.penumbra = 0.215;
light.distance = 300;
light2.position.set( 0, -15, 0 );
light3.position.set( 0, 15, 15 );  


function onDocumentMouseMove( event ) {
	light.position.set( event.clientX-500, 10, 0);

	scene.add(light);
}
scene.add(light2, light3);




var geometry = new THREE.CylinderBufferGeometry( 50, 50, 5, 50 );
var material = new THREE.MeshPhongMaterial( {
					specular: 0x030303,
					side: THREE.DoubleSide,
					alphaTest: 0.5
				} );
var mesh = new THREE.Mesh( geometry, material );
mesh.position.z = -50;
mesh.position.x = -20;
mesh.position.y = 15;


var geometry2 = new THREE.CylinderBufferGeometry( 50, 50, 5, 50 );
var material2 = new THREE.MeshPhongMaterial( {
					specular: 0x030303,
					side: THREE.DoubleSide,
					alphaTest: 0.5
				} );
var mesh2 = new THREE.Mesh( geometry2, material2 );
mesh2.position.z = -50;
mesh2.position.x = 20;
mesh2.position.y = 9;

var geometry3 = new THREE.CylinderBufferGeometry( 50, 50, 5, 50 );
var material3 = new THREE.MeshStandardMaterial( {
					specular: 0x030303,
					side: THREE.DoubleSide,
					alphaTest: 0.5,
					roughness: 0.70,
					metalness: 0.71,

				} );
var mesh3 = new THREE.Mesh( geometry3, material3 );
mesh3.position.z = -50;
mesh3.position.x = -10;
mesh3.position.y = 0;

var geometry4 = new THREE.CylinderBufferGeometry( 50, 50, 5, 50 );
var material4 = new THREE.MeshPhongMaterial( {
					specular: 0x030303,
					side: THREE.DoubleSide,
					alphaTest: 0.5
				} );
var mesh4 = new THREE.Mesh( geometry4, material4 );
mesh4.position.z = -50;
mesh4.position.x = 20;
mesh4.position.y = -7;



var geometry5 = new THREE.CylinderBufferGeometry( 50, 50, 5, 50 );
var material5 = new THREE.MeshPhongMaterial( {
					specular: 0x030303,
					side: THREE.DoubleSide,
					alphaTest: 0.5
				} );
var mesh5 = new THREE.Mesh( geometry5, material5 );
mesh5.position.z = -50;
mesh5.position.x = -20;
mesh5.position.y = -15;



var geometry6 = new THREE.CylinderBufferGeometry( 50, 50, 5, 50 );
var material6 = new THREE.MeshPhongMaterial( {
					specular: 0x030303,
					side: THREE.DoubleSide,
					alphaTest: 0.5
				} );
var mesh6 = new THREE.Mesh( geometry6, material6 );
mesh6.position.z = -50;
mesh6.position.x = 20;
mesh6.position.y = -25;



scene.add( mesh, mesh2, mesh3, mesh4, mesh5, mesh6 );

camera.position.z = 15;


var update = function(){
	mesh3.position.x += 0.01;
	mesh3.position.y = Math.sin( mesh3.rotation.x ) * 20;

};

var render = function(){
	renderer.render(scene,camera);
};



//run game loop (update,render,repeat);
var GameLoop = function(){
	requestAnimationFrame(GameLoop);
	update();
	render();

};

GameLoop();