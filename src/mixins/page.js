export default {
    data() {
        return {
            pageConfig: {
                page: 1,
                size: 10,
                total: 0,
                opts: [10, 20, 50, 100]
            }
        }
    },
    methods:{
        pageChange(page) {
            this.pageConfig.page = page;
            this.search();
        },
        sizeChange(size) {
            this.pageConfig.size = size;
            if (this.pageConfig.page === 1) {
                this.pageChange(1);
            }
        },
    }
}