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
        exact: true,
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
        component: lazy(() => import("@/views/button/Index"))
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
        component: lazy(() => import("@/views/card/Card"))
    },
    {
        path: "/drag",
        meta: {
            title: "拖放",
            role: "drag"
        },
        component: lazy(() => import("@/views/drag/Drag"))
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
        component: lazy(() => import("@/views/charts/Index"))
    },
    {
        path: "/scroll",
        meta: {
            title: "滑动条",
            role: "scroll"
        },
        component: lazy(() => import("@/views/scroll/Scroll")),
    },
    {
        path: "/tree",
        meta: {
            title: "树",
            role: "tree"
        },
        component: lazy(() => import("@/views/tree/Index")),
    },
    {
        path: "/upload",
        meta: {
            title: "上传",
            role: "upload"
        },
        component: lazy(() => import("@/views/upload/Upload")),
    },
    {
        path: "/product",
        meta: {
            title: "一级菜单",
            role: "product"
        },
        component: lazy(() => import("@/components/MiddlePage")),
        children: [
            {
                path: "/product/product1",
                meta: {
                    title: "二级菜单",
                    role: "product1"
                },
                component: lazy(() => import("@/components/MiddlePage")),
                children: [
                    {
                        path: "/product/product1/product1_1",
                        meta: {
                            title: "三级菜单",
                            role: "product1_1"
                        },
                        component: lazy(() => import("@/views/product/product1/Product"))
                    }
                ]
            },
            {
                path: "/product/product2",
                meta: {
                    title: "二级菜单",
                    role: "product2"
                },
                component: lazy(() => import("@/views/product/product2/Product"))
            },
            {
                path: "/product/product3",
                meta: {
                    title: "二级菜单",
                    role: "product3"
                },
                component: lazy(() => import("@/views/product/product3/Product"))
            },
            {
                path: "/product/product4",
                meta: {
                    title: "二级菜单",
                    role: "product4"
                },
                component: lazy(() => import("@/views/product/product4/Product"))
            },
        ]
    },
];

export { routes, asynRouter };
