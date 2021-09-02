function back(){
    var feedback = document.getElementById("feed").value;
    
   
    if(feedback  == "" || feedback.length < 1){
        document.getElementById("back").innerHTML="* Please enter feedback";
        status=false;
    }
    // else if(feedback.length < 10){
    //     document.getElementById("back").innerHTML="* Please enter feedback more than 450 charcters";
    //     status=false;
    // }
    else{
        document.getElementById("back").innerHTML="";
    }
    if(!feedback == "" && !feedback.length < 10){
        document.getElementById("back").innerHTML ="";
        status=true;
        alert(" Feed Back Send successfully")
        location.reload();    
         return true; 

    }
}