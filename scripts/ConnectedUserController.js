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
        this.getUserData();
    }

    getUserData = function(){
        this.getUserAccessToken();
        this.getUserMediaObjects().then(this.getInstagramBusinessAccount);  
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
        const that = this;
        return new Promise(function(resolve, reject){
            //Getting the Facebook pages in order to obtain the related Instagram User
            that.fbApi.api(`/me/accounts?access_token=${this.accessToken}`, this.getPageId);
            
            //Obtaining the instagram user account from page Id
            resolve();
        });
    }

    /**
     * @description Callback: Obtaining the Instagram user Id associated to the facebook page
     */
    getPageId = function(response){
        this.pageId = response.data[0].id;
    }

    /** 
     * 
    */
    getInstagramBusinessAccount = function(){
        const that = this;
        return new Promise(function(resolve, reject){
            //Getting the instagram User Id
            that.fbApi.api(`/${this.pageId}?fields=instagram_business_account`, this.getInstagramBussinessAccountId);
                
            //Obtaining the instagram user account from page Id
            resolve();
        });
    }

    getInstagramMediaObjects = function(response){
        console.log(response);
        this.instagramUserId = response.data[0].instagram_business_account.id;
    }
}