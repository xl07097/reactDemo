import { lazy } from 'react';

const Chart = lazy(() => import('../components/charts/Chart'));
const Other = lazy(() => import('../components/charts/Charts'));
const Product1 = lazy(() => import('../views/product/product1/product1'));
const Product2 = lazy(() => import('../views/product/product2/product1'));
const Product3 = lazy(() => import('../views/product/product3/product'));
const Product4 = lazy(() => import('../views/product/product4/product'));

// import Chart from '@/components/Chart';
// import Other from '@/views/other/other';
// import Product1 from '@/views/product/product1/product1';
// import Product2 from '@/views/product/product2/product1';
// import Product3 from '@/views/product/product3/product';
// import Product4 from '@/views/product/product4/product';

const routes = [
    {
        path: '/',
        meta:{
            title: '首页'
        }
    },
    {
        path: '/dashboard',
        meta: {
            title: '仪表盘'
        }
    },
    {
        path: '/button',
        meta: {
            title: '按钮'
        }
    },
    {
        path: '/icon',
        meta: {
            title: '图标'
        }
    },
    {
        path: '/card',
        meta: {
            title: '卡片'
        }
    },
    {
        path: '/form',
        meta: {
            title: '表单'
        }
    },
    {
        path: '/chart',
        meta: {
            title: 'chart'
        },
        component: Chart
    },
    {
        path: '/other',
        meta: {
            title: '其他'
        },
        component: Other,
        childRoutes:[
            {
                path: '/product1',
                meta: {
                    title: '产品'
                },
                component: Product1
            },
            {
                path: '/product2',
                meta: {
                    title: '产品'
                },
                component: Product2
            },
            {
                path: '/product3',
                meta: {
                    title: '产品'
                },
                component: Product3
            },
            {
                path: '/product4',
                meta: {
                    title: '产品'
                },
                component: Product4
            },
        ]
    }]

export default routes;
