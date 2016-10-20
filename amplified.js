(function() {
    var amplink = document.querySelector("link[rel='amphtml']");
    var canonical = document.querySelector("link[rel='canonical']");

    var amp = {
        sentinel: "__AMPLIFIER__",
        ampurl : (amplink !== null) ? amplink.href : null,
        canonical : (canonical !== null) ? canonical.href : null,
        isamp : (document.querySelector("html[amp], html[⚡]") !== null)
    };

    chrome.runtime.sendMessage(amp);
})();
