function addfac(){
    var Name = document.getElementById("name").value;
    var Qualification = document.getElementById("quali").value;
    var Experience = document.getElementById("expr").value;
    var Skill = document.getElementById("set").value;
    if(Name == "" )
    {
        document.getElementById("fac").innerHTML = "* Please enter your name";
        status = false;
    }    else{
        document.getElementById("fac").innerHTML ="";
    } 
    if(Qualification == "")
    {
        document.getElementById("qual").innerHTML="* Please enetr your Qualification";
        status=false;
    }else{
        document.getElementById("qual").innerHTML="";
    }
    if(Experience == "" ){
        document.getElementById("exp").innerHTML="* Please enter your Experience";
        status=false;
    }
    else{
        document.getElementById("exp").innerHTML="";
    }
    if(Skill == "" ){
        document.getElementById("Skill").innerHTML="* Please enter your Skill";
        status=false;
    }
    else{
        document.getElementById("Skill").innerHTML="";
    }
    if(!Name == "" && !Qualification == "" && !Experience == "" && !Skill == "" ){
        document.getElementById("fac").innerHTML ="";
        document.getElementById("qual").innerHTML="";
        document.getElementById("exp").innerHTML="";
        document.getElementById("Skill").innerHTML="";
        status=true;
        alert(Name  +  " Updated successfully")
        location.reload();    
         return true; 

    }
}
