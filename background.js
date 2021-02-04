
// Sets the color to green on installation
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});

// Petridish restriction
var rulePetri = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostPrefix : 'petridish.pw' },
    })
  ],
  actions: [ new chrome.declarativeContent.ShowPageAction() ]
}

// When the extension is installed or upgraded add rule petridish only
chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([rulePetri]);
  });
});
