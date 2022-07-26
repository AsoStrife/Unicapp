# Unicapp

![](https://github.com/AsoStrife/Unicapp/blob/04d521d33385baca46e3b95a87c66e2ba8251296/resources/demo-app.jpg?raw=true)

- [Unicapp](#unicapp)
  * [Install Dependencies](#install-dependencies)
  * [NPM Scripts](#npm-scripts)
  * [Set the app](#set-the-app)
  * [i18n](#i18n)
  * [Vite](#vite)
  * [Capacitor](#capacitor)
  * [Assets](#assets)
  * [Capacitor Assets](#capacitor-assets)
  * [Documentation & Resources](#documentation---resources)
  * [Supported Universities](#supported-universities)
  * [Contacts](#contacts)


Unicapp is an unofficial app for Esse3 Platform for Universities Students.

It works for **Android** and **iOS**.

## Install Dependencies

First of all we need to install dependencies, run in terminal
```
npm install
```

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build` - build web app for production
* 📱 `build-capacitor-ios` - build app and copy it to iOS capacitor project
* 📱 `build-capacitor-android` - build app and copy it to Android capacitor project

## Set the app

In `./src/js/unicapp/constants.js` there are the main constants and configurations of the app. 

- **debug**: if true use `middlewareUrlDebug` and `middlewareUrlPhotoDebug` urls for Api.
- **fallbackLocale**: If some strings are missing, the app will use fallbackLocale as strings. Default value is `en`
- **supportedLanguages**: contains the supported languages
- **middlewareUrlRemote** and **middlewareUrlPhotoRemote**: are the middleware api urls

## i18n 

Unicapp supports internationalization natively. 
Inside the `./src/assets/` folder are the files containing the strings of the app. The folder contains one file for each supported language es `it.js`.


## Vite

There is a [Vite](https://vitejs.dev) bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Vite config located in `vite.config.js`.
## Capacitor

This project created with Capacitor support. And first thing required before start is to add capacitor platforms, run in terminal:

```
npx cap add ios && npx cap add android
```

Folder must have the followings file: 

- Create a `432x432.png` file. Then save it as "icon-background.png". you may decide to make the color transparent or not

- Create another `432x432.png` file and save it as "icon-foreground.png".

```
  resources/
  ├── android/
  │   ├── icon-background.png
  │   └── icon-foreground.png
  ├── icon.png
  └── splash.png
```

Check out [official Capacitor documentation](https://capacitorjs.com) for more examples and usage examples.

## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```

## Capacitor Assets

Capacitor assets are located in `resources` folder which is intended to be used with `cordova-res` tool. To generate  mobile apps assets run in terminal:
```
npx cordova-res

npm install -g cordova-res
cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy
```

Check out [official cordova-res documentation](https://github.com/ionic-team/cordova-res) for more usage examples.

## Firebase Analytics

Firebase should be already install in the package. 

```
npm install firebase --save firebase
npm install @capacitor-firebase/analytics firebase
npx cap sync
```

Inside the `constant.js` add the `firebase` keys values from your Firebase  application.

```
"firebase": {
    "apiKey": "",
    "authDomain": "",
    "projectId": "",
    "storageBucket": "",
    "messagingSenderId": "",
    "appId": "",
    "measurementId": ""
}
```

 Inside `./src/js/unicapp/firebase.js` there are the available methods. It can be used inside every component with the following syntax: 

`this.$firebase.setCurrentScreen("HomePage")`

### Monitored activities

These are the current monitored Firebase Activities. 

- When the user navigate throught pages with `setCurrentScreen("")` api;
- When user perform a login or logout with `logEvent({})` api.s

## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)
* [Framework7 Vue Documentation](https://framework7.io/vue/)


* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)
* [Firebase plugins for Capacitor](https://github.com/capawesome-team/capacitor-firebase)
* [Firebase Analytics for Capacitor](https://github.com/capawesome-team/capacitor-firebase/tree/main/packages/analytics)

## Supported Universities

Esse3 platform has been adopted by many Athenaeums, so Unicapp can handle the following Universities:

- Politecnico di Bari
- Università degli Studi della Basilicata
- Università degli Studi di Bergamo
- Università degli Studi di Brescia
- Università Campus Bio-Medico di Roma
- Università di Camerino
- [V] Università degli Studi di Cagliari
- Università degli Studi di Firenze
- [V] Università degli Studi Guglielmo Marconi
- Università degli Studi di Messina
- Università degli Studi di Milano-Bicocca
- Università degli Studi dell\'Insubria
- Università degli Studi di Perugia
- [V] Università di Pisa
- Università di Parma
- Università degli Studi di Pavia
- Università degli Studi della Repubblica di San Marino
- Università degli Studi del Sannio
- Università di Torino
- Università degli Studi di Trieste
- Università degli Studi di Udine
- Università degli Studi di Urbino Carlo Bo
- Università degli Studi dell\'Aquila
- [V] Università Ca\' Foscari Venezia
- Università Politecnica delle Marche

## Contacts

* E-mail : me@andreacorriga.com
* Website: https://andreacorriga.com
* Github: https://github.com/AsoStrife
* Twitter: https://twitter.com/AsoStrife
* Instagram: http://instagram.com/AsoStrife
