
function z(type_of){
    let username = document.getElementById("vinay");
    
    if(type_of === 'home' ){
        console.log(type_of)
        username.innerHTML = "Home";
        username.style.color="red";
    }
    else if(type_of==='team'){
        username.innerHTML = "Team"
        username.style.color="blue"
    }
    else if(type_of==='services'){
        username.innerHTML = "Services"
        username.style.color="black"
    }
    else if(type_of==='contact'){
        username.innerHTML = "Contact"

        username.style.color="brown"
    }
    else if(type_of==='about us'){
        username.innerHTML = "About us"
        username.style.color="green"
    }
    
    
}