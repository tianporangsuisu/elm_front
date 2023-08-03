const routes = [
    {
        name: "indexPage",
        path: "/indexPage",
        component:() => import("@/components/indexPage")
    },{
        name: "shopList",
        path: "/shopList",
        component:() => import("@/components/shopList")
    },{
        name: "shopPage",
        path: "/shopPage",
        component:() => import("@/components/shopPage")
    },{
        name: "orderPage",
        path: "/orderPage",
        component:() => import("@/components/orderPage")
    },{
        name: "orderList",
        path: "/orderList",
        component:() => import("@/components/orderList")
    },{
        name: "payOrder",
        path: "/payOrder",
        component:() => import("@/components/payOrder")
    },{
        name: "destinationList",
        path: "/destinationList",
        component:() => import("@/components/destinationList")
    },{
        name: "destinationPage",
        path: "/destinationPage",
        component:() => import("@/components/destinationPage")
    },{
        path: "/",
        redirect: "/indexPage"
    },{
        name: "loginPage",
        path: "/loginPage",
        component:() => import("@/components/loginPage")
    }
];



export default routes