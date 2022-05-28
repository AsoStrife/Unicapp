import { f7 } from 'framework7-vue'

import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import BookletPage from '../pages/BookletPage.vue';
import CareersPage from '../pages/CareersPage.vue';
import TaxesPage from '../pages/TaxesPage.vue';
import InfoPage from '../pages/InfoPage.vue';
import SettingsPage from '../pages/SettingsPage.vue';

import store from './unicapp/store'

var routes = [
    {
        name: 'Root',
        path: '/',
        redirect: async function ({to, resolve, reject}) {
            
            if(store.getCredentials() != null && store.getSelectedCareer() != null){
                resolve('/home/', {reloadAll: true })
            }
            else if(store.getCredentials() != null && store.getSelectedCareer() == null){
                resolve('/careers/', {reloadAll: true })
            }
            else{
                resolve('/login/', {reloadAll: true })
            }
            
        }
    },

    {
        name: 'Login',
        path: '/login/',
        component: LoginPage,
    },
    {
        name: 'Careers',
        path: '/careers/',
        component: CareersPage,
    },
    {
        name: 'Home',
        path: '/home/', 
        component: HomePage
    },
    {
        name: 'Booklet',
        path: '/booklet/',
        component: BookletPage,
    },
    
    {
        name: 'Taxes',
        path: '/taxes/',
        component: TaxesPage
    },
    {
        name: 'Info',
        path: '/info/',
        component: InfoPage
    },
    {
        name: 'Settings',
        path: '/settings/',
        component: SettingsPage
    },
    {
        name: 'Logout',
        path: '/logout/',
        redirect: async function ({to, resolve, reject}) {
            store.clearAll()
            f7.emit('logout')
            resolve('/login/', {reloadAll: true })
        }
    }
];

export default routes;
