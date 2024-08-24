//Initializes the custom favebook APP
window.fbAsyncInit = function() {
    FB.init({
      appId      : '1659688658203694',
      cookie     : true,
      xfbml      : true,
      version    : 'v20.0'
    });
      
    FB.AppEvents.logPageView();
    
    //Get current status
    FB.getLoginStatus(function(response) {
      console.log(response);
    });      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

//Call back that will be called when clicking facebook login button
function checkLoginState() {
    FB.getLoginStatus(function(response) {
      console.log(response);
    });
  }