<template>
    <div class="detail">
        {{id}}
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name:"carDetail",
    data(){
        return {
            id:this.$route.params.id,
            carInfo:{}
        }
    },
    methods:{
        getCarInfo(){
            axios.get('/data/'+this.id+'.json').then(data => {
                window.console.log(data)
            }).catch(err => {
                window.console.log(err)
            })
        }
    },
    created(){
        this.getCarInfo();
    }
}
</script>
<style lang="less" scoped>

</style>


