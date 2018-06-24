<template>
    <div class="carlist">
        车辆列表
        <div class="lists" v-for="list of lists" :key="list.id">
            <div class="imgarea">
                <router-link :to="'cardetail/'+list.id">
                    <img :src="list.url" :alt="list.title">
                </router-link>
            </div>
            <div class="intro">
                <h4><router-link :to="'cardetail/'+list.id">{{list.title}}</router-link></h4>
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
                    url:"/images/audi1.jpg",
                    introduction:"gagagag"
                },
                {
                    id:"2",
                    title:"奥迪A6",
                    url:"/images/audi2.jpg",
                    introduction:"gagagag"
                },
                {
                    id:"3",
                    title:"奥迪A6",
                    url:"/images/audi3.jpg",
                    introduction:"gagagag"
                },
                {
                    id:"4",
                    title:"奥迪A6",
                    url:"/images/audi4.jpg",
                    introduction:"gagagag"
                },
                {
                    id:"5",
                    title:"奥迪A6",
                    url:"/images/audi5.jpg",
                    introduction:"gagagag"
                },
                {
                    id:"6",
                    title:"奥迪A6",
                    url:"/images/audi6.jpg",
                    introduction:"gagagag"
                },
                {
                    id:"7",
                    title:"奥迪A6",
                    url:"/images/audi7.jpg",
                    introduction:"gagagag"
                },
                {
                    id:"8",
                    title:"奥迪A6",
                    url:"/images/audi8.jpg",
                    introduction:"gagagag"
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
    .lists{
        display:  flex;
        padding: 5px 0;
        border-bottom:1px solid rgba(100, 100, 100, 0.6); 
        .imgarea{
            width: 35%;
        }
        img{
            width: 100%;
            height: auto;
        }
        .intro{
            text-align: left;
            padding: 0 10px;
            width: 60%;
        }
        h4{
            margin: 0;
        }
        a{
            text-decoration: none;
            color:#000;
        }
        p{
            margin: 6px 0 0 0;
        }
    }
</style>


