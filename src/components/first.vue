<template>
    <div class="page">
        <div>姓名：<input type="text" v-model="name"></div>
        <div>年龄：<input type="text" v-model="age"></div>
        <div>
            <button @click="jumpToNextPage">下一页</button>
        </div>
    </div>
</template>

<script>
import {mapMutations,mapActions} from "vuex"; 
export default {
    data(){
        return {
            name:'张三',
            age:'20',
            personInfo: {}
        }
    },
    methods:{
        jumpToNextPage(){
            this.personInfo.name = this.name;
            this.personInfo.age = this.age;
            this.$router.push({
                path:'/second/'
            });
            // this.actionsSetUserInfo(this.personInfo);
        },
        ...mapActions({
            // actionsSetUserInfo
        })
    }
}
</script>


