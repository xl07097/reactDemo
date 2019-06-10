
import { lazy } from 'react';
const Chart = lazy(() => import('../components/Chart'));
// import Chart from '@/components/Chart';
import Other from '@/views/other/other';
import Product1 from '@/views/product/product1/product1';
import Product2 from '@/views/product/product2/product1';
import Product3 from '@/views/product/product3/product';
import Product4 from '@/views/product/product4/product';
const routes = [
    {
        path: '/'
    },
    {
        path: '/dashboard'
    },
    {
        path: '/button'
    },
    {
        path: '/icon'
    },
    {
        path: '/card'
    },
    {
        path: '/form'
    },
    {
        path: '/chart',
        // component: r => require.ensure([], () => r(require('@/components/Chart')), 'Chart'),
        component: Chart
    },
    {
        path: '/other',
        // component: r => require.ensure([], () => r(require('@/views/other/other')), 'Other'),
        component: Other,
        childRoutes:[
            {
                path: 'product1',
                // component: r => require.ensure([], () => r(require('@/components/Chart')), 'Chart'),
                component: Product1
            },
            {
                path: 'product2',
                // component: r => require.ensure([], () => r(require('@/components/Chart')), 'Chart'),
                component: Product2
            },
            {
                path: 'product3',
                // component: r => require.ensure([], () => r(require('@/components/Chart')), 'Chart'),
                component: Product3
            },
            {
                path: 'product4',
                // component: r => require.ensure([], () => r(require('@/components/Chart')), 'Chart'),
                component: Product4
            },
        ]
    }]

export default routes;
