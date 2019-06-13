import { lazy } from 'react'; // 懒加载

const Chart = lazy(() => import('@/components/charts/Chart'));
const Charts = lazy(() => import('@/components/charts/Charts'));
const Other = lazy(() => import('@/views/other/other'));
const Product1 = lazy(() => import('@/views/product/product1/product1'));
const Product2 = lazy(() => import('@/views/product/product2/product1'));
const Product3 = lazy(() => import('@/views/product/product3/product'));
const Product4 = lazy(() => import('@/views/product/product4/product'));
const NoPage = lazy(() => import('@/components/p404'));
const routes = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        component: Chart
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
        },
        component: Other
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
        component: Charts,
    },
    {
        path: '/product',
        meta: {
            title: '产品'
        },
        childRoutes: [
            {
                path: 'product1',
                meta: {
                    title: '产品1'
                },
                component: Product1
            },
            {
                path: 'product2',
                meta: {
                    title: '产品2'
                },
                component: Product2
            },
            {
                path: 'product3',
                meta: {
                    title: '产品3'
                },
                component: Product3
            },
            {
                path: '/product4',
                meta: {
                    title: '产品4'
                },
                component: Product4
            },
        ]
    },
    {
        path: '*',
        meta: {
            title: '404'
        },
        component: NoPage
    }
]

export default routes;
