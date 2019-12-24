chrome.storage.sync.get(["ver", "off"], data => {
    if (data.off)
        return;

    const old_ver = location.pathname.match(/\/(\d+(\.\d)*)\//)[1]; // get capturing group
    const new_ver = data.ver || 8;

    if (old_ver == new_ver)
        return;
    
    if (old_ver < 11 && new_ver >= 11)
        return;
    
    const url = new_ver >= 11 
                ? location.href.replace(/\/\d+\//, `/${new_ver}/`) 
                : location.href.replace(/\/en\/java\//, "/")
                               .replace(/\/\d+(\.\d)*\//, `/${new_ver}/`)
                               .replace(/\/java\..+\/java/, "/java");
    location.replace(url);
});