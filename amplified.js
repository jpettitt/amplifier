(function() {
    var amplink = document.querySelector("link[rel='amphtml']");
    var canonical = document.querySelector("link[rel='canonical']");
    
    var  amp = {
        sentinel: "__AMPLIFIER__",
        ampurl : null,
        canonical : null,
        isamp : (document.querySelector("html[amp]") !== null ||  document.querySelector("html[⚡]") !== null)
    };

    if (amplink !== null) {
        amp.ampurl = amplink.href;
        
    }
    if (canonical !== null) {
        amp.canonical = canonical.href;
    }
   
    
    chrome.runtime.sendMessage(amp);

})();