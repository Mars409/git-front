import { createRouter, createWebHistory } from "vue-router";

// 引入组件
import Layout from "../views/Layout.vue";
// import Home from "../views/Home.vue";
// import ArticleList from "..iews/ArticleList.vue";
// import ArticleDetail from "..iews/ArticleDetail.vue";
// import UserDashboard from "..iews/UserDashboard.vue";
// import UserProfile from "..iews/UserProfile.vue";
// import UserSetting from "..iews/UserSetting.vue";
// import Login from "..iews/Login.vue";

// 定义路由数组
const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        // 路由懒加载，可以减少初始加载时间，按需加载页面组件
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/Book",
        name: "BookCard",
        component: () => import("../views/BookCard.vue"),
      },
      // 动态路由配置

       {
           path: "/Book/:id",
            name: "BookDetail",
            component: () => import("../views/BookDetail.vue"),
            children: [
              
            ],
          },
        
      // 嵌套路由
      {
        path: "/user",
        component: () => import("../views/UserDashboard.vue"),
        // 重定向到个人信息页面，这样就保证有默认内容
        redirect: "/user/profile",
        children: [
          {
            path: "profile",
            name: "UserProfile",
            component: () => import("../views/UserProfile.vue"),
          },
          {
            path: "setting",
            name: "UserSetting",
            component: () => import("../views/UserSetting.vue"),
          },
        ],
      },
      {
        path: "/Cart/:id",
         name: "Cart",
         component: () => import("../views/Cart.vue"),
         children: [
           {
             path: "Item",
             name: "CartItem",
             component: () => import("../views/CartItem.vue"),
           },
           {
            path: "Info",
            name: "OrderInfo",
            component: () => import("../views/OrderInfo.vue"),
          },
         ],
       },
    ],
  },
  {
    path: "/login",
    name: "Login",
    // 路由懒加载，可以减少初始加载时间，按需加载页面组件
    component: () => import("../views/Login.vue"),
  },
];

// 定义路由对象
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 返回到浏览器保存的滚动位置（当使用浏览器后退时），否则滚动到顶部
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }; // 每次路由切换时滚动到顶部
    }
  },
});

// 配置全局路由导航守卫
router.beforeEach((to, from, next) => {
  // 要去的路由是 /user 开头的
  if (to.path.startsWith("/user") && !localStorage.getItem("token")) {
    alert("请先登录");
    // 跳到 /login 登录页面
    next("/login");
  } else {
    // 直接放行
    next();
  }
});

// 导出路由对象
export default router;
