<template>
    <div class="list">
        车辆列表
        <div class="ff" v-for="list of lists" :key="list.id">
            <img src="list.url" alt="车辆外观">
            <div class="intro">
                <h4><router-link to="/cardetail/list.id">{{list.title}}</router-link></h4>
                <p>{{list.introduction}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"carList",
    data(){
        return {
            lists:[
                {
                    id:"1",
                    title:"奥迪A6",
                    url:"",
                    introduction:"gagagag"
                },
                {
                    id:"2",
                    title:"奥迪A6",
                    url:"",
                    introduction:"gagagag"
                },
                {
                    id:"3",
                    title:"奥迪A6",
                    url:"",
                    introduction:"gagagag"
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
    .ff{
        display:  flex;
        padding: 5px 0;
        border-bottom:1px solid rgba(100, 100, 100, 0.6); 
        img{
            width: 35%;
            min-height: 100px;
        }
        .intro{
            text-align: left;
            padding: 0 10px;
            width: 60%;
        }
        h4{
            margin: 0;
        }
        p{
            margin: 6px 0 0 0;
        }
    }
</style>


