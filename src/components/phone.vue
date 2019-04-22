<template>
    <div>
        <h1>about</h1>
        <p @click="showVuex()">电话</p>
        <div>
            <ul>
            <li v-for="(val,index) in arrList" :key="val">
                <h5>{{val}}</h5>
            </li>
        </ul>
        </div>
    </div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入
export default {
    computed:{
        // ...mapState({  //用mapState来获取collection.js里面的state的属性值
        //    arrList:state=>state.collection.collects
        // }),
        ...mapGetters({ //用mapGetters来获取collection.js里面的getters
            arrList:'renderCollects'
        })
    },
    methods:{
        showVuex(){
            alert(this.$store.state.collects);
        }
    }
}
</script>

