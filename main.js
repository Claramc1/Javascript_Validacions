// const formLogIn = document.getElementById("form_logIn");



/*validacions */

function valida_search(){
	var searchMessage, searchWord;
	searchMessage = document.getElementById("p01");
	searchMessage.innerHTML = "";
	searchWord = document.getElementById("searchTerm").value;
if(searchWord.length<=3){
	searchMessage.innerHTML = "Sisplau, escriu una paraula";
	console.log(searchMessage); }
}

function valida_logIn(){
	var logInEmail, logInEmailWord,logInPassword, logInPasswordWord;
	var emailTest = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	logInEmail = document.getElementById("emailError");
	logInPassword = document.getElementById("passwordError");
	logInEmail.innerHTML = "";
	logInPassword.innerHTML = "";
	logInEmailWord = document.getElementById("inputEmail").value;
	logInPasswordWord = document.getElementById("inputPassword").value;
if(logInEmailWord.length<=3||emailTest.test(logInEmailWord)==false){
	logInEmail.innerHTML = "Sisplau, escriu un correu vàlid";
	console.log(logInEmail);}

if(logInPasswordWord.length<1){
	logInPassword.innerHTML = "Sisplau, escriu una contrasenya";
	console.log(logInPassword);
 }
}

function valida_registre(){
	var registerEmail, registerEmailWord,registerPassword, registerPasswordWord, registerRepeat, registerRepeatWord, registerRegion, registerRegionWord;
	var emailTest = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	registerEmail = document.getElementById("emailRegError");
	registerPassword = document.getElementById("passwordRegError");
	registerRepeat = document.getElementById("repeatError");
	registerRegion = document.getElementById("regionError");
	registerEmail.innerHTML = "";
	registerPassword.innerHTML = "";
	registerRepeat.innerHTML="";
	registerRegion.innerHTML="";
	registerEmailWord = document.getElementById("inputRegEmail").value;
	registerPasswordWord = document.getElementById("inputRegPassword").value;
	registerRepeatWord = document.getElementById("inputRepeatEmail").value;
	registerRegionWord = document.getElementById("inputRegion").value;

if(registerEmailWord.length<=3||emailTest.test(registerEmailWord)==false){
	registerEmail.innerHTML = "Sisplau, escriu un correu vàlid";
	console.log(registerEmail);}

if(registerPasswordWord.length<1){
	registerPassword.innerHTML = "Sisplau, escriu una contrasenya";
	console.log(registerPassword);
 }
 if(registerRegionWord==""){
	registerRegion.innerHTML="Sisplau, escull una opció";
	console.log(registerRegion);
}
if(registerRepeatWord===registerPasswordWord){
	registerRepeat.innerHTML="&nbsp;";
	return true;
	
}
else{
	registerRepeat.innerHTML="La contrasenya no coincideix";
}

}
/* com fer el toggle amb jQuery https://www.youtube.com/watch?v=WhU38HV-Iu8 */

$(document).ready(function(){
	$('#button_logIn').on('click', function(){
		$('#form_logIn').toggle();
		$('#form_register').hide();
	});	
}); 

$(document).ready(function(){
	$('#button_register').on('click', function(){
		$('#form_register').toggle();
		$('#form_logIn').hide();
	});	
}); 	

$(document).ready(function(){
	$('#button_logIn2').on('click', function(){
		$('#form_logIn2').toggle();
		$('#form_register2').hide();
	});	
}); 

$(document).ready(function(){
	$('#button_register2').on('click', function(){
		$('#form_register2').toggle();
		$('#form_logIn2').hide();
	});	
}); 



/*______mòbil________________*/


function valida_logIn2(){
	var logInEmail, logInEmailWord,logInPassword, logInPasswordWord;
	var emailTest = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	logInEmail = document.getElementById("emailError2");
	logInPassword = document.getElementById("passwordError2");
	logInEmail.innerHTML = "";
	logInPassword.innerHTML = "";
	logInEmailWord = document.getElementById("inputEmail2").value;
	logInPasswordWord = document.getElementById("inputPassword2").value;
if(logInEmailWord.length<=3||emailTest.test(logInEmailWord)==false){
	logInEmail.innerHTML = "Sisplau, escriu un correu vàlid";
	console.log(logInEmail);}

if(logInPasswordWord.length<1){
	logInPassword.innerHTML = "Sisplau, escriu una contrasenya";
	console.log(logInPassword);
 }
}


function valida_registre2(){
	var registerEmail, registerEmailWord,registerPassword, registerPasswordWord, registerRepeat, registerRepeatWord, registerRegion, registerRegionWord;
	var emailTest = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	registerEmail = document.getElementById("emailRegError2");
	registerPassword = document.getElementById("passwordRegError2");
	registerRepeat = document.getElementById("repeatError2");
	registerRegion = document.getElementById("regionError2");
	registerEmail.innerHTML = "";
	registerPassword.innerHTML = "";
	registerRepeat.innerHTML="";
	registerRegion.innerHTML="";
	registerEmailWord = document.getElementById("inputRegEmail2").value;
	registerPasswordWord = document.getElementById("inputRegPassword2").value;
	registerRepeatWord = document.getElementById("inputRepeatEmail2").value;
	registerRegionWord = document.getElementById("inputRegion2").value;

if(registerEmailWord.length<=3||emailTest.test(registerEmailWord)==false){
	registerEmail.innerHTML = "Sisplau, escriu un correu vàlid";
	console.log(registerEmail);}

if(registerPasswordWord.length<1){
	registerPassword.innerHTML = "Sisplau, escriu una contrasenya";
	console.log(registerPassword);
 }
 if(registerRegionWord==""){
	registerRegion.innerHTML="Sisplau, escull una opció";
	console.log(registerRegion);
}
if(registerRepeatWord===registerPasswordWord){
	registerRepeat.innerHTML="&nbsp;";
	return true;
	
}
else{
	registerRepeat.innerHTML="La contrasenya no coincideix";
}

}










	/*
    var inputEmail = document.getElementById("inputEmail"); // per què en un es fa d'una manera i en el d'abaix de l'altra?
    var inputPassword = document.forms["form_logIn"]["inputPassword"];

    if (inputEmail.value==""){
        missatge error
        inputEmail.classList.add("is-invalid");
        document.getElementById("emailError").textContent = "Este campo es obligatorio";
        accError ++;
    }
    else if(omplir) {
        què passa si l'email no es un email regular(falta arroba etc...)
        document.getElementById("emailError").textContent = "Por favor, escribe un email válido";
        accError ++;
    }

    if (inputPassword==""){
        missatge error
        document.getElementById("passwordError").textContent = "Este campo es obligatorio";
        accError ++;
    }



}
*/



/*   

Primera part de desarrolloweb

function valida_envia(){
	//valido el nombre
	if (window.document.nav-menu-right.searchTerm.value.length==0){
		   alert("Tiene que escribir su nombre")
		   document.nav-menu-right.searchTerm.focus()
		   return 0;
    }
    



function valida_envia_logIn(){

}*/
 
	//valido la edad. tiene que ser entero mayor que 18
	/*edad = document.fvalida.edad.value
	edad = validarEntero(edad)
	document.fvalida.edad.value=edad
	if (edad==""){
		   alert("Tiene que introducir un número entero en su edad.")
		   document.fvalida.edad.focus()
		   return 0;
	}else{
		   if (edad<18){
				  alert("Debe ser mayor de 18 años.")
				  document.fvalida.edad.focus()
				  return 0;
		   }
	}
 

	//el formulario se envia
	alert("Buscant els resultats de la cerca");
	document.fvalida.submit();
} */