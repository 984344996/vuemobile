<template>
    <div>
    <mt-tab-container v-model="active" :swipeable="false">
        <mt-tab-container-item id="tab-container1">
            <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
            <mt-cell v-for="n in 10" title="tab-container 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
            <mt-cell v-for="n in 10" title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected">
        <mt-tab-item id="mainPage">
            <img slot="icon" src="../../assets/ico_home_page_nochoose.png">
            主页
        </mt-tab-item>
        <mt-tab-item id="discoveryPage">
            <img slot="icon" src="../../assets/ico_manhuatai_nochoose.png">
            发现
        </mt-tab-item>
        <mt-tab-item id="minePage">
            <img slot="icon" src="../../assets/ico_myself_nochoose.png">
            我的
        </mt-tab-item>
    </mt-tabbar>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                tabs:{
                    "mainPage":"tab-container1",
                    "discoveryPage":"tab-container2",
                    "minePage":"tab-container3",
                },
                selected: "主页",
                active: "tab-container1"
            }
        },
        watch:{
            selected:{
                handler(newValue){
                    this.active = this.tabs[newValue];
                }
            }
        }
    }
</script>

<style scoped>
</style>