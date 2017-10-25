var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/ window.innerHeight, 0.1, 1000);


document.addEventListener( 'mousemove', onDocumentMouseMove, false );

var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});
renderer.setClearColor(0xffffff);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

//window resizer
window.addEventListener('resize', function(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
})


addCubes();

var geometry2 = new THREE.BoxGeometry( 5000, 0, 5000 );
var material2 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var mesh2 = new THREE.Mesh( geometry2, material2 );
mesh2.receiveShadow = true;
mesh2.position.set( 60, -20, 300 );
scene.add(mesh2);

var ambient = new THREE.AmbientLight(0xffffff, 0.8)
var light = new THREE.SpotLight(0x7891D5, 2);
var light2 = new THREE.SpotLight( 0xffffff, 2,500 );
var light3 = new THREE.SpotLight( 0xffffff, 2,500 );
light.castShadow = true;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;
light.penumbra = 0.05;
light.distance = 300;
light2.position.set( 459, 90, 100 );
light3.position.set( 0, 80, 636 );


function onDocumentMouseMove( event ) {
	light.position.set( event.clientX, 90, event.clientY);
	
	scene.add(light);

}
scene.add(light2, light3, ambient);

scene.fog = new THREE.Fog( 0x7891D5 , 0, 1000 );


function addCubes() {
	var xDistance = 20;
    var zDistance = 20;
		var geometry = new THREE.TorusGeometry( 10, 7.9, 23, 100 );


		var material = new THREE.MeshPhongMaterial({color: 0x8864DD, transparent: true, opacity: 1});

    //initial offset so does not start in middle.
    var xOffset = -80;

    for(var i = 0; i < 40; i++){
        for(var j = 0; j < 40; j++){
        		var mesh  = new THREE.Mesh(geometry, material);
        		mesh.position.x = (xDistance * i / Math.random(2)) + xOffset;
            mesh.position.z = (zDistance * j / Math.random(2));
            mesh.rotation.x = 300;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        		scene.add(mesh);
        }
    };
}



camera.position.z = 300;
camera.position.x = 50;
camera.position.y = 90;
camera.rotation.y = -7.01;
camera.rotation.x = 118;


var update = function(){


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