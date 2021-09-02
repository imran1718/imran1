function validation(){
      var username =document.getElementById('usern').value;
      var password=document.getElementById('pword').value;
if(username == "" || username.length > 9) {
    document.getElementById("name1").innerHTML="please enter username";
    status=false;
} 
if(password ==""  || password.length > 9){
    document.getElementById("password").innerHTML="please enter password";
    status="false";
}
else{
    document.getElementById("name1").innerHTML="";
    document.getElementById("password").innerHTML="";
    status=true;
    alert("login successfully",)
    window.open("admin.html"); 
    location.reload(); 
          
    return true;   
    
}

}




   

