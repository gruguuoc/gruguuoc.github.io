class Login{
    constructor(){
        this.initialize();
    }

    initialize = function(params) {
        //Check login status
        this.CheckLoginStatus();
    }

    CheckLoginStatus = function(){
        FB.getLoginStatus(function(response){
            console.log("estado: " + response.status)
        })
    }


}
window.onload = (event) => {
    let currentLogin = new Login();
  };

