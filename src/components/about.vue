<template>
    <div>
        <h1 @click="handleChoosed(35555)">about</h1>
        <p>{{aboutMsg}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            aboutMsg: "我是about组件",
            selectedRoom: "",
        }
    },
    methods:{
        handleChoosed(val){
            alert("2")
            this.selectedRoom = val;
            this.$eventHub.$emit('selectRoom', this.selectedRoom);
        }
    }
}
</script>

