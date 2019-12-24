const img = document.getElementsByTagName("img")[0];
const opts = document.getElementById("ver");
const save = document.getElementById("save");
const info = document.getElementById("info");
const sw = document.getElementById("switch");

chrome.storage.sync.get(["ver", "off"], ({ver = 8, off}) => {
    opts.value = ver;
    
    sw.className = off ? "off" : "on";
    sw.innerText = off ? "Turn on" : "Turn off";
    chrome.browserAction.setIcon({
        "path": off ? "icon_gray.png" : "icon.png"
    });
    img.src = off ? "banner_gray.png" : "banner.png";
});

opts.addEventListener("change", () => 
    info.innerText = +opts.value >= 11 ? "Conversion to 11+ only works from 11+" : ""
);

save.addEventListener("click", () => 
    chrome.storage.sync.set({
        "ver": +opts.value
    }, () => info.innerText = "Changed successfully")
);

sw.addEventListener("click", () => {
    sw.className = sw.className == "off" ? "on" : "off";

    const isOff = sw.className == "off";
    sw.innerText = isOff ? "Turn on" : "Turn off";
    chrome.browserAction.setIcon({
        "path": isOff ? "icon_gray.png" : "icon.png"
    });
    img.src = isOff ? "banner_gray.png" : "banner.png";

    chrome.storage.sync.set({
        "off": isOff
    });
});