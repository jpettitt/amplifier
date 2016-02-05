// By John Pettitt
// Crreative Commons CC(0)  Plublic domain

var ampTabs = [];


chrome.runtime.onMessage.addListener(function(amp, sender, sendResponse) {
    if (amp.sentinel === undefined || amp.sentinel != "__AMPLIFIER__") {
      return;  //not from amplifier
    }
    if (amp.isamp) {
      chrome.pageAction.setIcon({tabId:sender.tab.id, path: 'canonical.png'});
      chrome.pageAction.setTitle({tabId:sender.tab.id, title: 'Show the Canonical version of this page'});
    } else {
      chrome.pageAction.setIcon({tabId:sender.tab.id, path: 'amplify.png'});
      chrome.pageAction.setTitle({tabId:sender.tab.id, title: 'Show the AMP version of this page'});
    }
    if(amp.ampurl !== null || (amp.canonical !=null && amp.isamp)) {
      chrome.pageAction.show(sender.tab.id);
    }
    ampTabs[sender.tab.id] = amp;
    
    if (localStorage["devMode"] == "true") {
      amp.ampurl += "#development=1";
    }
   
});

//
chrome.pageAction.onClicked.addListener(function(tab){
  var amp = ampTabs[tab.id];
  if (amp.isamp) {
    if (amp.canonical != null) {
      chrome.tabs.update(tab.id, { url: amp.canonical });
    }   
  } else {
    chrome.tabs.update(tab.id, { url: amp.ampurl });
  }
});
