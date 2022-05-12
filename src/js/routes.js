import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import BookletPage from '../pages/BookletPage.vue';
import CareersPage from '../pages/CareersPage.vue';
import TaxesPage from '../pages/TaxesPage.vue';
import InfoPage from '../pages/InfoPage.vue';
import SettingsPage from '../pages/SettingsPage.vue';

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
    {
        path: '/careers/',
        component: CareersPage,
    },
    {
        path: '/taxes/',
        component: TaxesPage
    },
    {
        path: '/info/',
        component: InfoPage
    },
    {
        path: '/settings/',
        component: SettingsPage
    }
];

export default routes;
