export default {
    methods:{
        initSearch(){ //初始化搜索 //作用：页数初始化到第一页
            this.pageConfig.page = 1;
            this.search();
        },
        ModalClose() {
            this.$emit('close');
        },
        onMin() {
            this.$emit('on-min');
        }
    }
}