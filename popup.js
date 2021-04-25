/*
Defines the extension's popup behavior
*/

var getInfoButton = document.getElementById('loginfo')

getInfoButton.onclick = function(element) {
  console.log('It worked !')

  // Ask for game info in DOM content
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {command: 'fetch'}, function(response) {
      console.log(response.value);
    });
  });
}

/*document.addEventListener('DOMContentLoaded', function() {
  getInfoButton.addEventListener('click', function() {
    console.log("It worked !")
  }, false);
}, false);*/
