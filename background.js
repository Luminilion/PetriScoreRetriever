/*
Sets the PetriDish.pw website restriction
*/

// Petridish website restriction
var rulePetri = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostPrefix : 'petridish.pw' },
    })
  ],
  actions: [ new chrome.declarativeContent.ShowPageAction() ]
}

// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {

  // Add rule petridish only
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([rulePetri]);
  });
});

/*function processStats(domContent) {
  console.log(domContent)
}

chrome.pageAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, {text: 'get_stats'}, processStats);
});*/
