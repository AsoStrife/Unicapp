import HomePage from '../pages/Home.vue';
import LoginPage from '../pages/Login.vue';
import BookletPage from '../pages/Booklet.vue';

var routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/login/',
        component: LoginPage,
    },
    {
        path: '/booklet/',
        component: BookletPage,
    },
];

export default routes;
