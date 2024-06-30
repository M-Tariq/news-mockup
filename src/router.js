import { createRouter, createWebHistory } from "vue-router";
import ArticlePage from "./components/ArticlePage.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/Signup.vue";
import ArticleDetail from "./components/ArticleDetail.vue";
import OTPVerification from "./components/OTPVerification.vue";

const routes = [
  { path: "/", component: ArticlePage },
  { path: "/articles", component: ArticlePage },
  {
    path: "/article/:id",
    component: ArticleDetail,
    props: true,
    meta: { requiresAuth: false },
  },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  { path: "/otp", component: OTPVerification },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (
    (to.path === "/login" || to.path === "/signup" || to.path === "/otp") &&
    isLoggedIn
  ) {
    // User is already logged in, redirect to home page or another authorized page
    next("/");
  } else {
    // Proceed to the requested route
    next();
  }
});
export default router;
