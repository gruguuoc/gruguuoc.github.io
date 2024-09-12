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
        
        this.getUserAccounts()
            .then(this.getInstagramBusinessAccount())
            .then(this.getInstagramMedia())
            .then(this.managePostInformation());
    }

    /**
     * @description Obtaining the access token of the current connected user
     */
    getUserAccessToken = function(){
        this.accessToken = this.connectedUserData.authResponse.accessToken;
    }

    /**
     * @description Obtaining the user facebook pages accounts.
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
     * @description Obtaining the instagram business Id
    */
    getInstagramBusinessAccount = function(){
        const that = this;

        return function(pageId){
            return new Promise((resolve, reject) => {
                //Getting the instagram User Id
                that.fbApi.api(`/${pageId}?fields=instagram_business_account`, response => {
                    resolve(response.instagram_business_account.id)
                });
            });
        }
    }

    /** 
     * @description Obtaining the instagram business data (user posts)
    */
    getInstagramMedia = function(){
        const that = this;

        return function(instagramBusinessAccountId){
            return new Promise((resolve, reject) => {
                //Getting the instagram User Id
                that.fbApi.api(`/${instagramBusinessAccountId}?fields=media`, response => {
                    resolve(response);
                });
            });
        }
    }

    /**
     * @description For each post Id found in user profile, a fb api call is made asking for information about the post.
     */
    managePostInformation = function(){
        const that = this;

        return function(userPost){
            that.userPosts = userPost.media.data; //Array
            const dataPetitions = [];

            //Finds data about every found post.
            that.userPosts.forEach(element => {
                dataPetitions.push(that.getPostInformationById(element, that));
            });

            //Finds information about all post and then manages it
            Promise.all(dataPetitions).then(response => {
                console.log(that.userPosts);
                that.renderPostInformation(that.userPosts);
            }).catch(err =>{
                console.log("Error");
                console.log(err);
            })
        }    
    }

    /**
     * @description Obtaining the current number of likes the post has
     */
    getPostInformationById = function(post, that){
        return new Promise((resolve, reject) => {
            //Getting the post number of likes
            that.fbApi.api(`/${post.id}?fields=like_count,media_product_type,media_url,timestamp`, response => {
                console.log(response);
                post.likeCount = response.like_count;
                post.mediaProductType = response.media_product_type;
                post.mediaUrl = response.media_url;
                post.timestamp = response.timestamp;

                resolve(post);
            });
        });
    }

    /**
     * @description prints post data
     */
    renderPostInformation = function(postList){
        let cards = '<div>';
        postList.forEach(element =>{
            cards += `<div> ${element.likeCount} </div>`;
        })
        cards = '</div>';
        document.getElementById("postList").innerHTML = cards;
    }
}