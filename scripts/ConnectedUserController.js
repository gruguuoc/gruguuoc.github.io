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
        this.getUserMediaObjects();
    }

    /**
     * @description Obtaining the access token of the current connected user
     */
    getUserAccessToken = function(){
        this.accessToken = this.connectedUserData.authResponse.accessToken;
    }

    /**
     * @description Obtaining the user media objects to manage data.
     */
    getUserMediaObjects = function(){
        //Getting the Facebook pages in order to obtain the related Instagram User
        this.fbApi.api(`/me/accounts?access_token=${this.accessToken}`, this.getInstagramUserInformation);
    }

    /**
     * @description Callback: Obtaining the Instagram user Id associated to the facebook page
     */
    getInstagramUserInformation = function(response){
        this.pageId = response.data[0].id;

        //Getting the instagram User Id
        this.fbApi.api(`/${this.pageId}?fields=instagram_business_account`, this.getInstagramMediaObjects);
    }

    getInstagramMediaObjects = function(response){
        console.log(response);
        this.instagramUserId = response.data[0].instagram_business_account.id;
    }
}