# Install Cordova and create your project
```
# get modified cli
$ git clone https://github.com/hgross/cordova-xamarin
$ git submodule update --init
$ cd cordova-xamarin-android
$ npm install


# cordova cli is part of the repository

# create your project
$ .\cordova-xamarin\node_modules\cordova\bin\cordova create myApp org.apache.cordova.myApp
$ cd ../myApp


# add the xamarin-android platform
$ ..\cordova-xamarin\node_modules\cordova\bin\cordova platform add ..\cordova-xamarin\cordova-xamarin-android


```


# How to pull submodules?
git submodule update --init --recursive

