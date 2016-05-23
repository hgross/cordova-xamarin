# Install Cordova and create your project
```
# get modified cli
$ git clone --recursive https://github.com/hgross/cordova-xamarin
$ cd cordova-xamarin
$ git submodule update --init (do this only if you did not specify --recursive on the git clone command above)
$ npm install
$ cd cordova-xamarin-android
$ npm install


# cordova cli is part of the repository

# create your project
$ .\cordova-xamarin\node_modules\cordova\bin\cordova create myApp org.apache.cordova.myApp
$ cd ../myApp

# add the android platform (required)
$ ..\cordova-xamarin\node_modules\cordova\bin\cordova platform add android

# add the xamarin-android platform
$ ..\cordova-xamarin\node_modules\cordova\bin\cordova platform add ..\cordova-xamarin\cordova-xamarin-android


```


# How to pull submodules?
git submodule update --init --recursive

