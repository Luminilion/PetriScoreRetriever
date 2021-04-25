/*
Interacts with chrome tab content.
In our case, gets score info.
*/

// Listen for score request
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.command === 'fetch') {
    sendResponse(document.all[0].outerHTML);
  }
});
