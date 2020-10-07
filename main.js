function formValidation(){
	
	var firstname , lastname , email , comment , finalmsg , error , head , msg ;
	
	finalmsg = document.getElementById("modalmessage");
	finalmsg.innerHTML = "" ;
	head = document.getElementById("modalhead");
	head.innerHTML = "" ;
	firstname = document.getElementById("fname").value ;
	lastname = document.getElementById("lname").value ;
	email = document.getElementById("useremail").value ;
	comment = document.getElementById("commenttext").value ;
		
	/*Empty field*/
	if(firstname=="" || lastname=="" || email=="" || comment==""){
			error = "Please fill out all necessary fields." ;
			finalmsg.innerHTML = error ;
			msg = "Error!"
			head.innerHTML = msg ;
			document.getElementById("modalmessage").style.color = "red" ;
			document.getElementById("modalhead").style.color = "red" ;
	}
	/*Short comment*/
	else if(comment.length<20){
			error = "Your comment should contain at least 20 characters." ;
			finalmsg.innerHTML = error ;
			msg = "Error!"
			head.innerHTML = msg ;
			document.getElementById("modalmessage").style.color = "red" ;
			document.getElementById("modalhead").style.color = "red" ;
	}
	else {
		error = "Your comment has been submitted successfully." ;
		finalmsg.innerHTML = error ;
		msg = "Thank you!"
		head.innerHTML = msg ;
		document.getElementById("modalmessage").style.color = "green" ;
		document.getElementById("modalhead").style.color = "green" ;
	}
	
	/* Refresh the form values after all */
	document.getElementById("fname").value = "";
	document.getElementById("lname").value = "";
	document.getElementById("useremail").value = "";
	document.getElementById("commenttext").value = "";
	
}

function log(){
	
	var errorMsg , id , pass , alertMsg ;
	
	errorMsg = document.getElementById("msg") ;
	errorMsg.innerHTML = "" ;
	
	id = document.getElementById("usrname").value ;
	pass = document.getElementById("pwd").value ;
	
	/*Empty field*/
	if (id=="" || pass==""){
		alertMsg ="Username or password field is required." ;
		errorMsg.innerHTML = alertMsg ;
		document.getElementById("err").style.display = "block";
	}
	else{
		document.getElementById("err").style.display = "none";
	}
	
	/* Refresh the form values after all */
	document.getElementById("usrname").value = "";
	document.getElementById("pwd").value = "";
	
}

function register(){

	var errorMsg, name, email, psw, rptpsw, check, alertMsg;

	errorMsg = document.getElementById("regmsg");
	errorMsg.innerHTML = "" ;

	name = document.getElementById("fullname").value;
	email = document.getElementById("email").value;
	psw = document.getElementById("password").value;
	rptpsw = document.getElementById("rptpassword").value;
	check = document.getElementById("terms").checked ;

	/*Empty Field*/
	if(name=="" || email=="" || psw=="" || rptpsw==""){
		alertMsg ="All fields are necessary."
		errorMsg.innerHTML= alertMsg;
		document.getElementById("error").style.display = "block";
	}
	/*Different password and password confirmation*/
	else if(psw != rptpsw){
		alertMsg ="Password and its confirmation don't match."
		errorMsg.innerHTML= alertMsg;
		document.getElementById("error").style.display = "block";
	}
	/*Terms and conditions*/

	else{
		document.getElementById("error").style.display = "none";
	}

	/* Refresh the form values after all */
	document.getElementById("fullname").value = "";
	document.getElementById("email").value = "";
	document.getElementById("password").value = "";
	document.getElementById("rptpassword").value = "";

}

function enableBtn(){

	var checked;
	checked = document.getElementById("terms").checked;

	if(checked==true){
		document.getElementById("regbtn").disabled = false;
		document.getElementById("regbtn").style.cursor = "pointer";
	}
	
}