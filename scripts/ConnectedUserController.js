//Obtaining user page ID
function getUserPages(accesToken)
{
    //https://graph.facebook.com/v20.0/me/accounts?access_token={access-token}
}

class ConnectedUserController{
    /**
     * 
     * @param {*} FB 
     * @param {*} connectedUserData 
     * @description Obtaining the information of the connected user
     */
    constructor(FB, connectedUserData){
        this.fbApi = FB,
        this.connectedUserData = connectedUserData
    }

    /**
     * @description Obtaining the access token of the current connected user
     */
    getUserAccessToken = function(){
        this.accessToken = this.connectedUserData.authResponse.accessToken;
    }

    getUserPages = function(){
        this.fbApi.api(`/me/accounts?access_token=${this.accesToken}`, function(response){
            console.log("Obtained Pages:");
            console.log(response);
        });
    }
}