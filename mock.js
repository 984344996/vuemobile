const Mock = require('mockjs');
//const Random = Mock.Random;

let loginTemp = {
    "status": "@integer(0,0)",
    "data": {
        token:"@string(18)"
    },
    "msg" : function () {
        if (this.status === 0){
            return "登录成功";
        }else{
            return "登录失败";
        }
    }
};

module.exports = {
    loginMock:function () {
       return Mock.mock(loginTemp);
    }
};
