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
        this.getUserAccessToken();
    }

    /**
     * @description Obtaining the access token of the current connected user
     */
    getUserAccessToken = function(){
        this.accessToken = this.connectedUserData.authResponse.accessToken;
    }

    getUserPages = function(){
        console.log("access token:" + this.connectedUserData);
        console.log("access token:" + this.connectedUserData.authResponse);
        console.log("access token:" + this.accesToken);
        this.fbApi.api(`/me/accounts?access_token=${this.accesToken}`, function(response){
            console.log("Obtained Pages:");
            console.log(response);
        });
    }
}