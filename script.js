//your JS code here. If required.
const browserInfo = document.getElementById("browser-info");
const browserName = navigator.userAgent;
const browserVersion = navigator.appVersion;

browserInfo.innerText = "You are using " + browserName + " version " + browserVersion;