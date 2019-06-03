<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<template>
    <div>
        <button @click="show = !show">
            Toggle
        </button>
        <transition name="slide-fade" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
            <p v-if="show">transition</p>
        </transition>
        <transition name="fade" :duration="{ enter: 500, leave: 800 }">
            <p v-if="show">css</p>
        </transition> 
        <transition name="bounce">
            <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
        </transition>
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
            vuex:this.$store.state.collects,
            show: true
        }
    },
    mounted(){
        // this.$store.dispatch('showFooter') 
        // alert(this.$store.state.count)
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

