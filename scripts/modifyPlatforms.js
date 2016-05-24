var fs = require('fs');
var path = require("path");
var shell = require("shelljs");
var PLATFORMS_JSON_PATH = path.resolve(__dirname + "/../node_modules/cordova-lib/src/platforms/platformsConfig.json");
    
var platformsConfig = require(PLATFORMS_JSON_PATH);  
platformsConfig["xamarin-ios"] = {
    "parser_file": "../cordova/metadata/xamarin-android_parser",
    "url": "https://bitbucket.org/henna/cordova-xamarin-ios",
    "version": "~1.0.0",
    "deprecated": false
}; 
platformsConfig["xamarin-android"] = {
    "parser_file": "../cordova/metadata/xamarin-android_parser",
    "url": "https://bitbucket.org/henna/cordova-xamarin-android",
    "version": "~1.0.0",
    "deprecated": false
};   
    
fs.writeFile(PLATFORMS_JSON_PATH, JSON.stringify(platformsConfig, null, 2), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("Modified the platformsConfig.json to enable xamarin ios and android platforms.");
}); 

function copyMetadata() {
    var METADATA_ORIGIN_PATH = path.resolve(__dirname + "/cordova-lib/*");
    var METADATA_PATH = path.resolve(__dirname + "/../node_modules/cordova-lib");
    
    console.log("Copying metdata from " + METADATA_ORIGIN_PATH + " to " + METADATA_PATH);
    shell.cp("-R", METADATA_ORIGIN_PATH, METADATA_PATH);
}

copyMetadata();