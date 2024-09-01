//Initializes the custom favebook APP
window.fbAsyncInit = function() {

    //Init de FB object
    FB.init({
      appId      : '1162813908324155',
      cookie     : true,
      xfbml      : true,
      version    : 'v20.0'
    });
    
    //??
    FB.AppEvents.logPageView();
    
    //Getting current status of the user
    FB.getLoginStatus(function(response) {
      console.log(response);
    });      
};

//Executing the function that starts facebook sdk
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

//Callback that will be executed when clicking facebook login button
function LoadMainBoardIfConnected() {
    FB.getLoginStatus(function(response) {
      console.log(response);
      if(response.status === "connected")
      {
        const connectedUserController = new ConnectedUserController(FB, response);
      }
    });
  }