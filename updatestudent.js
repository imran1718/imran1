function registration() {
    var Firstname = document.getElementById('fname').value;
    var Lastname = document.getElementById('lname').value;
    var Username = document.getElementById('username').value;
    var Password = document.getElementById('pword').value;
    var Mobilenumber = document.getElementById('phoneno').value;
    var Email = document.getElementById('email').value;
    var address = document.getElementById('add').value;
    if (Firstname == "") {
        document.getElementById("firstname").innerHTML="* please enter collegename";
        status=false;
    }else {
        document.getElementById("firstname").innerHTML = ""
      
    }
    if (Lastname == "") {
        document.getElementById("lastname").innerHTML="* please enter collegename";
        status=false;
    }else {
        document.getElementById("lastname").innerHTML = ""
      
    }
    if (Username == "") {
        document.getElementById("uname").innerHTML="* please enter username";
        status=false;
    }else if(Username.length <= 4 ){
        document.getElementById("uname").innerHTML = "* Username must be atleast 5 Characters"
        status=false;
    } else if(Username.length > 14){
        document.getElementById("uname").innerHTML = "* Username should not exceeds 14 Characters"
        status=false;
    } else {
        document.getElementById("uname").innerHTML = "";
       
    }             
    if (Password == "") {
        document.getElementById("pass").innerHTML="* please enter password";
        status=false;
    }else if(Password.length <= 4){
        document.getElementById("pass").innerHTML = "* Password must be atleast 5 Characters"
        status=false;
    } else if(Password.length > 10){
        document.getElementById("pass").innerHTML = "* Password should not exceeds 10 Characters"
        status=false;
    } else {
        document.getElementById("pass").innerHTML = "";
        status=true;
       
    }   
    const phoneno = /^\d{10}$/

    if (Mobilenumber == "") {
        document.getElementById("pnum").innerHTML="* please enter phonenumber";
        status=false;
    }  else if(phoneno.test( Mobilenumber)){
        document.getElementById("pnum").innerHTML = "";             
    } 
     else {
        document.getElementById("pnum").innerHTML = "* Invalid Phone Number";
         status=false;
     }
     const emailValidation = /\S+@\S+\.\S+/;
     
     if(Email == "")  {
        document.getElementById("mail").innerHTML="* please enter valid Email address";
        status=false;
     }
    
    else if(emailValidation.test(Email)) {
        document.getElementById("mail").innerHTML = "";
        
     }
     else{
        document.getElementById("mail").innerHTML = "Invalid Emailaddres";
        
     }
    if (address== "") {
        document.getElementById("addr").innerHTML="* please enter address";
        status=false;
    }else {
        document.getElementById("addr").innerHTML = "";       
    }
    
    if(!Firstname == "" && !Lastname == "" && !Username == "" && !Password == "" && !Mobilenumber == "" && !Email == "" && !address== "" ){
        document.getElementById("firstname").value="";
        document.getElementById("lastname").value="";
        document.getElementById("uname").value="";
        document.getElementById("pass").value="";
        document.getElementById("pnum").value="";
        document.getElementById("mail").value="";
        document.getElementById("addr").value="";
        status=true;
        alert("Updated successfully")
        location.reload();    
        return true; 
    }
}

 




