chrome.storage.sync.get(["ver", "off"], ({ver = 8, off}) => {
    if (off)
        return;

    const old_ver = location.pathname.match(/\/(\d+(\.\d)*)\//)[1]; // get capturing group
    const javaee = location.pathname.includes("javaee");
    const javafx = location.pathname.includes("javafx");

    if (javaee && ver > 7)
        ver = 7;

    if (old_ver == ver)
        return;
    
    if (old_ver < 11 && ver >= 11)
        return;
    
    if (javafx && ver < 8)
        return;
    
    const url = getURL({old_ver, ver, javafx});
    location.replace(url);
});

const getURL = ({old_ver, ver, javafx}) => {
    const url = location.href.replace(/\/\d+(\.\d)*\//, `/${ver}/`);
    if (javafx) {
        const newFxUrl = old_ver < 8 ? url.replace(/\/javafx\/(\d+)\/api\//, `/javase/$1/javafx/api/`) : url;
        return ver == 8 ? newFxUrl.replace(/\/docs\//, "/javafx/") : newFxUrl.replace(/\/javafx\//, "/docs/");
    }
    if (ver < 11)
        return url.replace(/\/en\/java\//, "/").replace(/\/java\.\w+\//, "/");
    return url;
}