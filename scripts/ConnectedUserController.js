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
        //The user access token is obtained
        this.getUserAccessToken();
        
        this.getUserAccounts().then(this.getInstagramBusinessAccount).then(function(instagramBusinessAccountId){
            console.log("instagramBusinessAccountId:" + instagramBusinessAccountId);
        })
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
    getUserAccounts = function(){
        return new Promise((resolve, reject) => {
            //Getting the Facebook pages in order to obtain the related Instagram User
            this.fbApi.api(`/me/accounts?access_token=${this.accessToken}`, response => {
                resolve(response.data[0].id);
            });
        });
    }

    /** 
     * 
    */
    getInstagramBusinessAccount = function(pageId){
        return new Promise((resolve, reject) => {
            //Getting the instagram User Id
            this.fbApi.api(`/${pageId}?fields=instagram_business_account`, response => {
                resolve(response.data[0].instagram_business_account.id)
            });
        });
    }
}