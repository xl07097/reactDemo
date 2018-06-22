<template>
    <div class="detail">
        {{id}}
    </div>
</template>
<script>
export default {
    name:"carDetail",
    data(){
        return {
            id:this.$route.params.id
        }
    }
}
</script>
<style lang="less" scoped>

</style>


