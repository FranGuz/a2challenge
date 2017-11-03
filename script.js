var user={
    name: "Grant Chirpus",
    email: "coolguy@gmail.com",
    password: "ILoveCoffee",
}

function checkLogin(){
    var email = document.querySelector("form")[0].value;
    var pass = document.querySelector("form")[1].value;
    if (user.email === email && user.password === pass){
        document.getElementById("box").style.display = "none";
        document.getElementById("head").style.display = "none";
        document.getElementById("welcome").style.display= "block";
    }else{
        alert("sign in credentials are incorrect")
    }
}
