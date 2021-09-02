function registration() {
    var clgname = document.getElementById('clgname').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('pword').value;
    var address = document.getElementById('Collegeadd').value;
    var phone = document.getElementById('phoneno').value;
    if (clgname == "") {
        document.getElementById("clname").innerHTML="* please enter collegename";
       
        status=false;
    }else {
        document.getElementById("clname").innerHTML = ""
      
    }
    
    if (username == "") {
        document.getElementById("uname").innerHTML="* please enter username";
        status=false;
    }
    else if(username.length <= 4 ){
        document.getElementById("uname").innerHTML = "* Username must be atleast 5 Characters"
        status=false;
    } 
     else if(username.length > 14){
        document.getElementById("uname").innerHTML = "* Username should not exceeds 14 Characters"
        status=false;
    }
    else {
        document.getElementById("uname").innerHTML = ""
      
    }
   
    if (password == "") {
        document.getElementById("pass").innerHTML="* please enter password";
        status=false;
    } 
    else if(password.length <= 4){
        document.getElementById("pass").innerHTML = "* Password must be atleast 5 Characters"
        status=false;
    }
    else if(password.length > 10){
        document.getElementById("pass").innerHTML = "* Password should not exceeds 10 Characters"
        status=false;
    } 
    else {
        document.getElementById("pass").innerHTML = ""
      
    }
   
    if (address== "") {
        document.getElementById("addr").innerHTML="* please enter address";
        status=false;
    }
    else {
        document.getElementById("addr").innerHTML = ""
      
    }
    
    const phoneno = /^\d{10}$/

    if (phone == "") {
        document.getElementById("pnum").innerHTML="* please enter phonenumber";
        status=false;
    }  
     else if(phoneno.test(phone)){
        document.getElementById("pnum").innerHTML = "";     
    } 
    else if(phone == "NULL"){
        document.getElementById("pnum").innerHTML = "* Invalid Phone Number";
         status=false;
     }
     else {
        document.getElementById("pnum").innerHTML = ""
      
    }
    if(!clgname == "" && !username == "" && !password == "" && !address== "" && !phone==""){
        document.getElementById("clname").innerHTML="";
        document.getElementById("uname").innerHTML="";
        document.getElementById("pass").innerHTML="";
        document.getElementById("addr").innerHTML="";
        document.getElementById("pnum").innerHTML="";
         status=true;
         alert( "Updated successfully")
         location.reload();    
          return true; 
    }
}

 




