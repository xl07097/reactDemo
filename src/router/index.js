const routes = {
    path: '/',
    component: r => require.ensure([], () => r(require('@/views/app')), 'App'),
    childRoutes: [
        { 
            path: 'header', 
            component: r => require.ensure([], () => r(require('@/views/header/header')), 'Header') 
        },
        { 
            path: 'footer', 
            component: r => require.ensure([], () => r(require('@/views/footer/footer')), 'Footer') 
        },
    ]
}

export default routes;