class Token{
    constructor(){
        this.initialize();
    }

    initialize = function(params) {

        let tokenBtn = document.getElementById("getTokenBtn");
        tokenBtn.onclick = this.generateUrl;
    }

    generateUrl = function(){
        let authURL = "https://api.instagram.com/oauth/authorize?client_id=395272289839582&redirect_uri=https://gruguuoc.github.io/&scope=user_profile,user_media&response_type=code";

        window.location.href = authURL;
    }

}

let currentToken = new Token();