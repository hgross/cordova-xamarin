var fs = require('fs');
var path = require("path");
var PLATFORMS_JSON_PATH = path.resolve(__dirname + "/../node_modules/cordova-lib/src/platforms/platformsConfig.json");
    
var platformsConfig = require(PLATFORMS_JSON_PATH);  
platformsConfig["xamarin-ios"] = {
    "url": "https://bitbucket.org/henna/cordova-xamarin-ios",
    "version": "~1.0.0",
    "deprecated": false
}; 
platformsConfig["xamarin-android"] = {
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