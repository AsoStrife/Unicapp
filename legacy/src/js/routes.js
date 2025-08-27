import { f7 } from 'framework7-vue'

import HomePage from '../pages/HomePage.vue'

import LoginPage from '../pages/LoginPage.vue'
import CareersPage from '../pages/CareersPage.vue'

import BookletPage from '../pages/BookletPage.vue'
import BookletExamPage from '../pages/BookletExamPage.vue'

import TaxesPage from '../pages/TaxesPage.vue'
import TaxPage from '../pages/TaxPage.vue'

import TestsPage from '../pages/TestsPage.vue'
import TestPage from '../pages/TestPage.vue'

import AverageCalculatorPage from '../pages/AverageCalculatorPage.vue'
import InfoPage from '../pages/InfoPage.vue'
import SettingsPage from '../pages/SettingsPage.vue'

import ErrorPage from '../pages/ErrorPage.vue'

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
        name: 'BookletExam',
        path: '/booklet_exam/',
        component: BookletExamPage
    },
    
    {
        name: 'Taxes',
        path: '/taxes/',
        component: TaxesPage
    },
    {
        name: 'Taxes',
        path: '/tax/',
        component: TaxPage
    },

    {
        name: 'Tests',
        path: '/tests/',
        component: TestsPage
    },

    {
        name: 'Test',
        path: '/test/',
        component: TestPage
    },

    {
        name: 'AverageCalculator',
        path: '/average_calculator/',
        component: AverageCalculatorPage
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
    },
    {
        name: 'Error',
        path: '/error/',
        component: ErrorPage
    }
]

export default routes;
