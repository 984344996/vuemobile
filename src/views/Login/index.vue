<template>
    <div id="div_container">
        <mt-header id="id_header" title="用户登录">
            <mt-button icon="more" title="注册" slot="right"></mt-button>
        </mt-header>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username" ></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-button id="id_btnOk" type="primary" size="normal" @click="doLogin">登录</mt-button>
        <span id="id_hint">{{hitText}}</span>
    </div>
</template>

<script>
    import {Indicator, Toast} from 'mint-ui'
    import {mapState, mapActions} from 'vuex'
    export default {
        name: "index",
        data(){
          return {
              username:'',
              password:'',
              hitText:''
          }
        },
        methods: {
            checkInput(){
                if(this.username.length < 2 || this.password.length < 2) {
                    this.hitText = '*请检查用户名密码';
                    return false;
                }
                return true;
            },
            doLogin(){
                if (!this.checkInput()){
                    return;
                }
                this.actionLogin(this.username, this.password).then(res => {
                    ///登录成功
                    this.$router.push({name:"home"});
                }).catch(msg => {
                    ///登录失败
                });
            },
            ...mapActions('Login',[
                'actionLogin'
            ]),
        },
        computed:{
            ...mapState('Login',[
                'isLoading',
                'msg',
                'data'
            ]),
        },
        watch:{
            isLoading:{
                handler(newValue){
                    if (newValue){
                        Indicator.open();
                    }else{
                        Indicator.close();
                    }
                    if (this.msg && this.msg.length > 0){
                        Toast(this.msg);
                    }
                },
                immediate: true
            }
        }
    }
</script>

<style scoped>
    #id_header{
        height: 64px;
    }
    #div_container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    #id_btnOk {
        margin-top: 20px;
        border-radius: 0;
    }
    #id_hint{
        margin-top: 5px;
        margin-left: 5px;
        color: red;
        text-align: left;
        font-size: medium;
    }
</style>