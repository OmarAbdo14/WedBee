var header = document.querySelector("header"),
    messagesTable = document.querySelector("#userMessages"),
    tbody = document.querySelector("#userMessagesBody"),
    nav = `<nav class="navbar navbar-expand-md position-absolute">
            <div class="container">
                <img src="images/logoPage.png" alt="">
                <h1><a class="navbar-brand logo" href="#">WedBee</a></h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="navbar-toggler-icon fas fa-bars fa-lg"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        
                    </ul>
                </div> <!-- ./navbar-collapse -->
            </div> <!-- ./container -->
         </nav> <!-- ./navbar -->`,
    flage=1, j=0, i = 0,
    links = ["home", "about", "skills", "experiences", "features", "contact"],
    userMessages = [];

header.innerHTML = nav + header.innerHTML;

var ul= document.querySelector("ul");
links.forEach(link => {
    ul.innerHTML += 
        `<li class="nav-item active">
            <a class="nav-link" href="#${link}">${link} <span class="sr-only">(current)</span></a>
        </li>`;
})


// console.log(messagesTable);



const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('exampleInputEmail1');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const message  = document.getElementById('message');

form.addEventListener('submit', e => {
    
    e.preventDefault();
    var   userMessage = {"username":"", "email":"", "password":"", "confirmPassword":"", "message":""};
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var confirmPasswordValue = confirmPassword.value.trim();
    var messageValue = message.value.trim();

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(confirmPasswordValue === '') {
		setErrorFor(confirmPassword, 'confirm Password cannot be blank');
	} else if(passwordValue !== confirmPasswordValue) {
		setErrorFor(confirmPassword, 'Passwords does not match');
	} else{
		setSuccessFor(confirmPassword);
    }
    
    if(messageValue === '') {
		setErrorFor(message, 'Message cannot be blank');
    }
    //  else if (!isString(messageValue)) {
	// 	setErrorFor(message, 'Not a valid message');
    // }
     else {
		setSuccessFor(message);
    }

    if(flage!=2) {
        userMessage.username = `${usernameValue}`;
        userMessage.email = `${emailValue}`;
        userMessage.password = `${passwordValue}`;
        userMessage.confirmPassword = `${confirmPasswordValue}`;
        userMessage.message = `${messageValue}`;
        userMessages[i] = userMessage;
        tbody.innerHTML += 
            `<tr class="" id="${i}">
            <td>${i+1}</td>
            <td>${userMessages[i].username}</td>
            <td>${userMessages[i].email}</td>
            <td>${userMessages[i].message}</td>
            <td><button id="deleteMessage" onclick="deleteMessage(${i})" class="btn btn-danger">Delete</button></td>`;
        i++; 
    }
    flage = 1;
    if(userMessages != 0) {
        messagesTable.className = 'table table-striped';
    }
    
    console.log(userMessage);
    console.log(userMessages);
    console.log(tbody);
});

function deleteMessage(id){
    userMessages.pop(id);
    let row = document.getElementById(id);
    // row.className = "d-none";
    tbody.removeChild(row);
    if(userMessages == 0) {
        messagesTable.className = 'd-none';
    }
    console.log(userMessages);
}


function setErrorFor(input, message) {
	let formGroup = input.parentElement;
    let small = formGroup.querySelector('small');
	formGroup.className = 'form-group col-8 error';
    small.innerText = message;
    flage = 2;
}

function setSuccessFor(input) {
	const formGroup = input.parentElement;
    formGroup.className = 'form-group col-8 success';

}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// function isString(message) {
// 	return /^((([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(message);
// }


    

    

