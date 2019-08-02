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
