class Login{
    constructor(){
        this.initialize();
    }

    initialize = function(params) {
        //Check login status
        this.CheckLoginStatus();

        let loginBtn = document.getElementById("loginBtn");
        loginBtn.onclick = this.login;
    }

    login = function(){
       console.log("loginBtn"); 
    }

    CheckLoginStatus = function(){
        FB.getLoginStatus(function(response){
            console.log("estado: " + response.status)
        })
    }


}

let currentLogin = new Login();