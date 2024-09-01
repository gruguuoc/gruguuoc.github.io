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
        this.getUserPages();
    }

    /**
     * @description Obtaining the access token of the current connected user
     */
    getUserAccessToken = function(){
        this.accessToken = this.connectedUserData.authResponse.accessToken;
    }

    /**
     * @description Obtaining the Facebook pages in order to obtain the related Instagram User
     */
    getUserPages = function(){
        this.fbApi.api(`/me/accounts?access_token=${this.accessToken}`, this.getInstagramUserId);
    }

    /**
     * @description Obtaining the Instagram user Id associated to the facebook page
     */
    getInstagramUserId = function(response){
        console.log(response);
        this.instagramUserId = response.data[0].category_list.id;
        console.log(this.instagramUserId);
    }
}