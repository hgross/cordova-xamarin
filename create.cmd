# create a new folder and follow these steps
git clone --recursive https://github.com/hgross/cordova-xamarin
cd cordova-xamarin
git submodule update --init --recursive
npm install
cd cordova-xamarin-android
npm install
cd ..
.\cordova-xamarin\node_modules\cordova\bin\cordova create myApp org.apache.cordova.myApp
cd myApp
..\cordova-xamarin\node_modules\cordova\bin\cordova platform add android
..\cordova-xamarin\node_modules\cordova\bin\cordova platform add ..\cordova-xamarin\cordova-xamarin-android

