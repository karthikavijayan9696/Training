function formvalidation(){
	var vname=document.getElementById("name").value;
	if (vname=="") {
		alert("Enter Your Name");
		return false;
	}
	var x=document.getElementById("email").value;
        if (x==""){
    	alert("Enter Your Email");
		return false;
   		} 
   		var reg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
   		if(x !=" "){
   			if (reg.test(x)==false) {
   				
   				alert("Enter valid Email")
   				return false;
   			} 
   		}
	var age=+document.getElementById("age").value;
	if (age==" ") {
		alert("Enter your age");
		return false;
	}
	else{
		if(age<0 || age>110){
		alert("Enter valid age");
		return false;
		}
	}
	var phone=+document.getElementById("phone").value;
	var regx=/^91[6-9][0-9]{9}$/
	if(phone!=" "){
		if (regx.test(phone)==false) {
			alert("Enter Indian Mobile No")
			return false;

		}
	}
}	