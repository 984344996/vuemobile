import { axiosInstance } from "@/common/networkTool";

let user = null;
const getUser =  function(){
    if (user != null){
        user = JSON.parse(sessionStorage.getItem("userModel"));
    }
    return user;
};

const setUser = function (model) {
    user = model;
    sessionStorage.setItem("userModel", JSON.stringify(model));
    axiosInstance.defaults.headers.common["Authorization"] = user.token;
};

const logout = function () {
    user = null;
    sessionStorage.setItem("userModel", null);
};
// user{
//     token
//     userid
//     username
//     avatar
//     usersign
// }

export {getUser, setUser, logout};