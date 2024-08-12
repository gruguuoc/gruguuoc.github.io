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

/**
 * 
-- Obtención del código --
https://api.instagram.com/oauth/authorize?client_id=395272289839582&redirect_uri=https://gruguuoc.github.io/&scope=user_profile,user_media&response_type=code

-- Obtención del token--
curl -X POST https://api.instagram.com/oauth/access_token  -F client_id=395272289839582  -F client_secret=5e184b095eac044f56316f1d5fb216fd  -F grant_type=authorization_code  -F redirect_uri=https://gruguuoc.github.io/  -F code=AQDq0lDYzOiitaGfPyt7VdMPwf_S4joE_M2Yx9oEKDfT6pLd7pkqCxz17aKNPzm7luWjTO6Cudh47pMvhh_dfb3FLLt5kst3d-6L4Xigq6s4-L-MOj72IAEs_Z0GXJEbqziyPaEDOCCdgA5mMg9WuCg2zn-75vLiNeh6EKgJD1IOdXatYLLfceHDUdB1gDbu7g7BmMcJTa-yjzzBv5N-Ij6qhqAK2oPQqUOj5_YN1scItA

-- Query básica--
curl -X GET "https://graph.instagram.com/8008899302531819?fields=username&access_token=IGQWRNQ0k4cllnTE9GT25qWDh3djc0bUR4a2ZADNF9KUDk5RE5rNGEyT21GRHVOcjA5SDR2YkhPMjhmeEhCUkxGMWZA3enBSMWJIWF9BWHREVEd3Tm5Bb3VTUDlCS3ZA4ZATFNZAlFuczZAIdzg4RU5yTDhUSzEzWjRFNmc5UURKdmNOZAnNoNlZAWOVEZD"
 */