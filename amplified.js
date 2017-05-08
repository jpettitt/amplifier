setTimeout(function () {
    var amphtml = document.querySelector("html[amp], html[⚡]");
    var amplink = document.querySelector("link[rel='amphtml']");
    var canonical = document.querySelector("link[rel='canonical']");

    var amp = {
        sentinel: "__AMPLIFIER__",
        ampurl: (amplink !== null) ? amplink.href : null,
        canonical: (canonical !== null) ? canonical.href : null,
        isamp: amphtml !== null,
        noredirect: location.hash === "#noredirect=1"
    };

    chrome.runtime.sendMessage(amp, function (response) {
        if (response && response.stop) {
            stop();
        }
    });
}, 0);
