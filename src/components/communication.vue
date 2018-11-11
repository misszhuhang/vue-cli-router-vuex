<template>
    <div>
        <h1 @click="handleChoose()">{{component1value}}</h1>
        <about></about>
        <home></home>
    </div>
</template>
<script>
import about from './about.vue';
import home from './home.vue';
export default {
    data(){
        return{
            component1value:"1223",
        }
    },
    methods:{
        handleChoose(){
            alert("33")
            let _this = this;
            _this.$eventHub.$on('selectRoom', (value)=>{
            _this.component1value = value;
            _this.$eventHub.$emit('roomChoosed', _this.component1value);
          });
        }
    },
    components:{
        about,
        home
    }
}
</script>

