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
        console.log("data:");
        console.log(this.connectedUserData);
        console.log("authResponse:");
        console.log(this.connectedUserData.authResponse);
        console.log("access token:" + this.accessToken);

        this.fbApi.api(`/me/accounts?access_token=${this.accessToken}`, function(response){
            console.log("Obtained Pages:");
            console.log(response);
        });
    }
}