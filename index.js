
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
function func(){
    
    const username = document.getElementById('uname').value;
    const password = document.getElementById('pwd').value;
    let general=document.getElementById("gen");
    
    let hello = "<p>Username:"+ username + "</p> <p>PassWord:"+ password + "</p>";
    
    general.innerHTML= hello
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
}
let st_time = 0;
function start_function() {
    interval = setInterval(function() {
        st_time++;
        time.innerText = st_time;
    }, 1000);
    document.getElementById("start").disabled = true;
}
function p_f(){
    clearInterval(interval)
    document.getElementById("pause").innerHTML = "RESUME"

}
function s_f(){
    clearInterval(interval)
    st_time = 0;
    time.innerHTML = 0;
    document.getElementById("start").disabled = false;
    document.getElementById("pause").innerHTML = "PAUSE"
}

let a = ["apple", "mango", "banana"];
        let c = '';

        a.forEach(function(hello, index){
            let b = "<li>"+hello+ "<button onclick='delete_1(this, " + index + ")' >Delete</button>"+"</li>";
            c += b;
            document.getElementById("new").innerHTML = c;
        })

        function delete_1(button, index){
            a.splice(index, 1);
            button.parentNode.remove();
        }

const Person = function(firstname,lastname,email){
    this.fname = firstname;
    this.lname = lastname;
    this.mail = email;
    this.full_name = function(){
         return this.fname +" "+this.lname+" "+this.mail;

    }
}
const person =[
    new Person("vinay sai","chelupuri","vinaysai02@gmail.com"),
    new Person("anoosha","sanugala","anooshasanugala@gmail.com"),
    new Person("varun","martha","varunmartha@gmail.com"),
    new Person("usha","gudikandula","ushagudikandula@gmail.com"),
    new Person("sreeja","amuda","sreejaamuda@gmail.com")
]

let table = "<table id = 'table1'><tr><th>First Name</th><th>Last Name</th><th>Email</th></tr>";

// Populate the table with data
person.forEach(person => {
    table += "<tr>";
    table += "<td>" + person.fname + "</td>";
    table += "<td>" + person.lname + "</td>";
    table += "<td>" + person.mail + "</td>";
    table += "</tr>";
});

table += "</table>";
// Insert the table into the HTML document
document.getElementById("table").innerHTML = table;

