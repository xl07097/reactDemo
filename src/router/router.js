import { lazy } from "react"; // 懒加载

const routes = [

    {
        path: "*",
        meta: {
            title: "404",
            role: "404"
        },
        component: lazy(() => import("@/components/p404"))
    }
];

const asynRouter = [
    {
        path: "/",
        meta: {
            title: "首页",
            role: "index"
        },
        component: lazy(() => import("@/views/index/Index"))
    },
    {
        path: "/button",
        meta: {
            title: "按钮",
            role: "button"
        },
        component: lazy(() => import("@/views/button/index"))
    },
    {
        path: "/icon",
        meta: {
            title: "图标",
            role: "icon"
        },
        component: lazy(() => import("@/views/icons/Icon"))
    },
    {
        path: "/card",
        meta: {
            title: "卡片",
            role: "card"
        },
        component: lazy(() => import("@/views/other/other"))
    },
    {
        path: "/form",
        meta: {
            title: "表单",
            role: "form"
        },
        component: lazy(() => import("@/views/form/FormDemo"))
    },
    {
        path: "/chart",
        meta: {
            title: "图表",
            role: "chart"
        },
        component: lazy(() => import("@/components/charts/Chart"))
    },
    {
        path: "/other",
        meta: {
            title: "其他",
            role: "other"
        },
        component: lazy(() => import("@/components/charts/Charts")),
    },
    {
        path: "/product",
        meta: {
            title: "产品",
            role: "product"
        },
        component: lazy(() => import("@/components/MiddlePage")),
        children: [
            {
                path: "product1",
                meta: {
                    title: "产品1",
                    role: "product1"
                },
                component: lazy(() => import("@/components/MiddlePage")),
                children: [
                    {
                        path: "product1_1",
                        meta: {
                            title: "产品1_1",
                            role: "product1_1"
                        },
                        component: lazy(() => import("@/views/product/product1/product1"))
                    }
                ]
            },
            {
                path: "product2",
                meta: {
                    title: "产品2",
                    role: "product2"
                },
                component: lazy(() => import("@/views/product/product2/product1"))
            },
            {
                path: "product3",
                meta: {
                    title: "产品3",
                    role: "product3"
                },
                component: lazy(() => import("@/views/product/product3/product"))
            },
            {
                path: "product4",
                meta: {
                    title: "产品4",
                    role: "product4"
                },
                component: lazy(() => import("@/views/product/product4/product"))
            },
        ]
    },
];

export { routes, asynRouter };
    
const router = [
    {
        path: '/account',
        meta: {
            name: '账户管理',            
            role: 'account'
        },
        children: [
            {
                path: 'accountInfo',
                meta: {
                    name: '账户信息',
                    role: 'accountInfo'
                }
            }
        ]
    },
    {
        path: '/notice',
        meta: {
            name: '公告管理',
            role: 'notice'
        },
        children: [
            {
                path: 'noticeInfo',
                meta: {
                    name: '公告信息',
                    role: 'noticeInfo'
                }
            }
        ]
    },
    {
        path: '/message',
        meta: {
            name: '短信管理',
            role: 'message'
        },
        children: [
            {
                path: 'messageStatistics',
                meta: {
                    name: '短信统计',
                    role: 'messageStatistics'
                }
            },
            {
                path: 'templateCheck',
                meta: {
                    name: '模板审核',
                    role: 'templateCheck'
                }
            },
            {
                path: 'signatureCheck',
                meta: {
                    name: '签名审核',
                    role: 'signatureCheck'
                }
            }
        ]
    },
    {
        path: 'user',
        meta: {
            name: '用户管理',
            role: 'user'
        },
        children: [
            {
                path: 'department',
                meta: {
                    name: '部门信息',
                    role: 'department'
                },
            },
            {
                path: 'userInfo',
                meta: {
                    name: '用户信息',
                    role: 'userInfo'
                },
            },
            {
                path: 'roleInfo',
                meta: {
                    name: '角色信息',
                    role: 'roleInfo'
                },
            }
        ]
    },
    {
        path: 'monitorCenter',
        meta: {
            name: '监控中心',
            role: 'monitorCenter'
        },
        children: [
            {
                path: 'monitorMsg',
                meta: {
                    name: '监控信息',
                    role: 'monitorMsg'
                },
            },
            {
                path: 'conLog',
                meta: {
                    name: '登录日志',
                    role: 'conLog'
                },
            },
            {
                path: 'operationlog',
                meta: {
                    name: '操作日志',
                    role: 'operationlog'
                },
            }
        ]
    }
]
