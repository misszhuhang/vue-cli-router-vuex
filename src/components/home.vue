<template>
    <div>
        <h1>
            {{vuex}}
        </h1>
        <h1 @click="invokePushItems(94)">home</h1>
        <p @click="hh()">{{recieve}}</p>
        <p>
            <router-link to="/home/phone">手机</router-link>
            <router-link to="/home/tablet">平板</router-link>
            <router-link to="/home/computer">电脑</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入
import index1 from '../store/index.js';
export default {
    data(){
        return{
            msg: "我是home组件",
            recieve: "qqq",
            vuex:this.$store.state.collects
        }
    },
    mounted(){
        // this.$store.dispatch('showFooter') 
        alert(this.$store.state.count)
        // setTimeout(() => {
        //     alert(this.$store.state.count)
        // }, 3000);
    },
    methods:{
        ...mapActions([ //collection是指modules文件夹下的collection.js
          'invokePushItems'  //collection.js文件中的actions里的方法，在上面的@click中执行并传入实参
        ]),
        hh(){
            this.$eventHub.$on('roomChoosed', (val)=>{
                this.recieve = val;
            });
        }
    }
}
</script>

