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
curl -X POST https://api.instagram.com/oauth/access_token  -F client_id=395272289839582  -F client_secret=5e184b095eac044f56316f1d5fb216fd  -F grant_type=authorization_code  -F redirect_uri=https://gruguuoc.github.io/  -F code=AQAPQy-mNOxrWYTqlfS3uPHb4bBZgNTwMqLeZqEObmeR6Zgc_Fjir46GkDq9DFSYk0NVV_HBh5FZMBbB8SCD1-VHAxuw4Wzmj1I7UXkfjDWVJtEHGy1Jz5gmpy8bZ1DGBogx6IxAB4wk5zuZR6BhVUWtZt8e0vpfzOOUylK53SFrb03Bgbzta0hAimGNv_mYBtHFC5heprarbhpisqvUFLp0lIMxts7Ngu8BuMqi7pfgIQ

-- Query básica--
curl -X GET "https://graph.instagram.com/8008899302531819?fields=username,id&access_token=IGQWROSXk4eU9ndFBGbEo5dFNjclN2V0ZATZAXJIbDNzVmFZAV0VGWkxqdFdhMV9FaFNHWWhDaTlPbjJNcmxKeFRSVmx5dlMybnNETlVWZAHRxb3VjUG5WaTlCZA2ZADSUdzZAEVrZATBObmwwWFlRMG9SZAHRQOGVfY1hoTTdwcldfZAnR5Qm91UQZDZD"
 
-- Query Media
curl -X GET "https://graph.instagram.com/8008899302531819/media?fields=id,caption,media_url&access_token=IGQWROSXk4eU9ndFBGbEo5dFNjclN2V0ZATZAXJIbDNzVmFZAV0VGWkxqdFdhMV9FaFNHWWhDaTlPbjJNcmxKeFRSVmx5dlMybnNETlVWZAHRxb3VjUG5WaTlCZA2ZADSUdzZAEVrZATBObmwwWFlRMG9SZAHRQOGVfY1hoTTdwcldfZAnR5Qm91UQZDZD"



--Query Media Children

curl -X GET "https://graph.instagram.com/18186947092208572/children?fields=media_url&access_token=IGQWROSXk4eU9ndFBGbEo5dFNjclN2V0ZATZAXJIbDNzVmFZAV0VGWkxqdFdhMV9FaFNHWWhDaTlPbjJNcmxKeFRSVmx5dlMybnNETlVWZAHRxb3VjUG5WaTlCZA2ZADSUdzZAEVrZATBObmwwWFlRMG9SZAHRQOGVfY1hoTTdwcldfZAnR5Qm91UQZDZD"
*/