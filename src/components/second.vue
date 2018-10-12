<template>
    <div class="page">
        姓名：{{userInfo.name}}
        年龄：{{userInfo.age}}
    </div>
</template>

import {mapGetters} from "vuex";
export default {
    data(){
        return {

        };
    },
    computed:{
        ...mapGetters(["userInfo"])
    },
    created(){
        console.log(this.userInfo);
    },
    methods: {
        
    }
}