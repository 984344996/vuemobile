<template>
    <div id="div_container">
        <mt-header id="id_header" title="用户登录">
            <mt-button icon="more" title="注册" slot="right"></mt-button>
        </mt-header>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username" @input="updateUsername"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" @input="updatePassword"></mt-field>
        <mt-button id="id_btnOk" type="primary" size="normal" @onclick="testLogin">登录</mt-button>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: "index",
        methods: {
            ...mapActions('Login',[
                'actionLogin'
            ]),
            testLogin: function (){
                console.log('');
            },
            updateUsername:(e)=>{
                this.$store.commit('updateUsername', e.target.value)
            },
            updatePassword:(e)=>{
                this.$store.commit('updatePassword', e.target.value)
            }
        },
        computed:{
            ...mapState('Login',[
                'username',
                'password',
                'isLoading',
            ]),
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
</style>