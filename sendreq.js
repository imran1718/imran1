function sendreq(){
    var Name = document.getElementById("name").value;
    var College = document.getElementById("clg").value;
    var Request = document.getElementById("req").value;
    if(Name == "" )
    {
        document.getElementById("nam").innerHTML = "* Please enter your name";
        status = false;
    }    else{
        document.getElementById("nam").innerHTML ="";
    } 
    if(College == "")
    {
        document.getElementById("clage").innerHTML="* Please enetr your college name";
        status=false;
    }else{
        document.getElementById("clage").innerHTML="";
    }
    if(Request == "" || Request.length < 10){
        document.getElementById("request").innerHTML="* Please enter Request";
        status=false;
    }
    else{
        document.getElementById("request").innerHTML="";
    }
    if(!Name == "" && !College == "" && !Request == "" ){
        document.getElementById("nam").innerHTML ="";
        document.getElementById("clage").innerHTML="";
        document.getElementById("request").innerHTML="";
        status=true;
        alert(Name  +  " Request Send successfully")
        location.reload();    
         return true; 

    }
}