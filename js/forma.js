let name = document.querySelector("#name");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let message = document.querySelector('#message');

emailjs.init("user_zpW6ZBbIgWbvofyXZlDJM");

document.querySelector("#forma").addEventListener("click", enviarMensaje);

function enviarMensaje(e){
	e.preventDefault();
	console.log("hola")
	emailjs.send("gmail","hola3",{
		from_name: name.value, 
		message_html: email.value,
		to_email: email.value,
		to_subject: subject.value
	});
}