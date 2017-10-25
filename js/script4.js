var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/ window.innerHeight, 0.1, 1000);


document.addEventListener( 'mousemove', onDocumentMouseMove, false );

var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});
renderer.setClearColor(0xffffff);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.physicalledBasedShading = true;
renderer.shadowMapEnabled = true;
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

var ambient = new THREE.AmbientLight(0xffffff, 1)
var light = new THREE.SpotLight(0xF14E51, 6);
var light2 = new THREE.PointLight( 0xffffff, 0.8, 200 );
var light3 = new THREE.PointLight( 0xffffff, 0.8, 200 );
light.castShadow = true;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;
light.shadowDarkness = 0.5;
light.penumbra = 0.215;
light.distance = 300;
light2.position.set( 50, -90, 300 );
light3.position.set( 50, 90, 300 );  

function onDocumentMouseMove( event ) {
	light.position.set( event.clientX, 90, 300);

	scene.add(light);

}
scene.add(light2, light3, ambient);

scene.fog = new THREE.Fog( 0x8EA9CE , 0, 1000 );


function addCubes() {
	var xDistance = 20;
    var zDistance = 20;
		var geometry = new THREE.TorusGeometry( 10, 7.9, 23, 100 );
		var texture = new THREE.Texture(generateTexture());
		textureImage = texture.image;
		var texture = new THREE.Texture(generateTexture());
		texture.needsUpdate = true;
		var material = new THREE.MeshStandardMaterial({map: texture, transparent: true, opacity: 0.5});
    
    //initial offset so does not start in middle.
    var xOffset = -80;

    for(var i = 0; i < 40; i++){
        for(var j = 0; j < 40; j++){
        		var mesh  = new THREE.Mesh(geometry, material);
        		mesh.position.x = (xDistance * i / Math.random(2)) + xOffset;
            mesh.position.z = (zDistance * j / Math.random(2));
            mesh.rotation.x = 300;
        		scene.add(mesh);
        }
    };
}

var geometry2 = new THREE.BoxGeometry( 5000, 0, 5000 );
var material2 = new THREE.MeshPhongMaterial( { color: 0xffffff} );
var mesh2 = new THREE.Mesh( geometry2, material2 );
mesh2.position.set( 60, -10, 300 );
mesh2.castShadow = true;
scene.add(mesh2);

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


function generateTexture() {

	var size = 512;

	// create canvas
	canvas = document.createElement( 'canvas' );
	canvas.width = size;
	canvas.height = size;

	// get context
	var context = canvas.getContext( '2d' );

	// draw gradient
	context.rect( 20,100,size,size );
	var gradient = context.createRadialGradient( 75,50,0,90,60,500 );
	gradient.addColorStop(0.9, '#ffffff'); // light blue 
	gradient.addColorStop(1, '#000'); // dark blue
	context.fillStyle = gradient;
	context.fill();

	return canvas;
}