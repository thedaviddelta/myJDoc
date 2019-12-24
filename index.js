const img = document.getElementsByTagName("img")[0];
const opts = document.getElementById("ver");
const save = document.getElementById("save");
const info = document.getElementById("info");
const sw = document.getElementById("switch");

chrome.storage.sync.get(["ver", "off"], data => {
    opts.value = data.ver || 8;
    
    sw.className = data.off ? "off" : "on";
    sw.innerText = data.off ? "Turn on" : "Turn off";
    chrome.browserAction.setIcon({
        "path": data.off ? "icon_gray.png" : "icon.png"
    });
    img.src = data.off ? "banner_gray.png" : "banner.png";
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