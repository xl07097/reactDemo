<template>
    <div class="person">
        个人中心
    </div>
</template>
<script>
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
    name:"person",
    data(){
        return {
            
        }
    },
    methods:{
        getInfo(){
            axios.get("http://192.168.1.49:3000/api/user/info").then(function(data){
                console.log(data);
            })
        }
    },
    created(){
        console.dir(Cookies)
        this.getInfo();
    }
}
</script>

<style scoped lang="less">

</style>


