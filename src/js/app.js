// Import Vue
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';

// Import Framework7 Styles
import 'framework7/css/bundle';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
import './i18n.css';

// Import App Component
import App from '../components/app.vue';

// i18n
import i18nMessages from './unicapp/i18n';
import constants from './unicapp/constants';
import store from './unicapp/store';

// Plugins
import Firebase from './unicapp/VuePlugin/firebase';
import ErrorHandling from './unicapp/VuePlugin/errorHandling';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
const app = createApp(App);

// i18n
app.use(createI18n({
	locale: store.getCurrentI18n ? (store.getCurrentI18n() || constants.i18n.fallback) : 'it',
	fallbackLocale: constants?.i18n?.fallback || 'it',
	messages: i18nMessages,
}));

// Plugins
app.use(Firebase);
app.use(ErrorHandling);

// Register Framework7 Vue components
registerComponents(app);

// Mount the app
app.mount('#app');