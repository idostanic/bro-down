/**
 * Created by idostanic on 5.9.14..
 */
app.service('signinService',function(){

        //userID=6;
        return {
            getUser :function(){
                return userID;
            },
            signIn : function(userID){
                userID=this.userID;
            },
            signOut: function(){
                userID=null;
            }

        };

});