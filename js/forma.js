let name = document.querySelector("#name");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let message = document.querySelector('#message');
let forma = document.querySelector("#forma");
var valido1 = false;
var valido2 = false;
var valido3 = false;
var valido4 = false;

emailjs.init("user_zpW6ZBbIgWbvofyXZlDJM");

forma.addEventListener("click", enviarMensaje);
name.addEventListener('input', nameval);
email.addEventListener('input', emailval);
subject.addEventListener('input', subjectval);
message.addEventListener('input', messageval);

function enviarMensaje(e){
	e.preventDefault();

	if ((valido1 == true) && (valido2 == true) && (valido3 == true) && (valido4 == true)){
		alert('Message received');
		emailjs.send("gmail","hola3",{
			from_name: name.value, 
			message_html: email.value,
			to_email: email.value,
			to_subject: subject.value
		});
		valido1 = false;
		valido2 = false;
		valido3 = false;
		valido4 = false;
		name.value = '';
		email.value = '';
		subject.value = '';
		message.value = '';
	}
	else {
		alert("Something is missing");
	}
}

function nameval(){
	if (name.value.match(/.+/)){
		name.style.borderBottom = '1px solid rgba(107, 78, 177, 0.72)';
		valido1 = true;
	}

	else {
		name.style.borderBottom = '1px solid red';
		valido1 = false;
	}
}



function emailval(){
	if (email.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
		email.style.borderBottom = '1px solid rgba(107, 78, 177, 0.72)';
		valido2 = true;
	}

	else {
		email.style.borderBottom = '1px solid red';
		valido2 = false;
	}
}


function subjectval(){
	if (subject.value.match(/.+/)){
		subject.style.borderBottom = '1px solid rgba(107, 78, 177, 0.72)';
		valido3 = true;
	}

	else {
		subject.style.borderBottom = '1px solid red';
		valido4 = false;
	}
}

function messageval(){
	if (message.value.match(/.+/)){
		message.style.borderBottom = '1px solid rgba(107, 78, 177, 0.72)';
		valido4 = true;
	}

	else {
		message.style.borderBottom = '1px solid red';
		valido4 = false;
	}
}
