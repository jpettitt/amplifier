(function() {
    var amplink = document.querySelector("link[rel='amphtml']");
    var isamp = document.querySelector("html[amp]");
    var canonical = document.querySelector("link[rel='canonical']");
    
    var  amp = {
        sentinel: "__AMPLIFIER__",
        ampurl : null,
        canonical : null,
        isamp : false
    };

    if (amplink !== null) {
        amp.ampurl = amplink.href;
        
    }
    if (canonical !== null) {
        amp.canonical = canonical.href;
    }
    if (isamp !== null) {
        amp.isamp = true;
    }
    
    chrome.runtime.sendMessage(amp);

})();