const defaultFilters = [
	"*://*.youtube.com/shorts*",
	"*://*.youtube.com/shorts/*",
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
  ];
  
  
  chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
	  return { cancel: true };
	},
	{ urls: defaultFilters },
	["blocking"]
  );
  
  let delay = 1000; //1000 = 1 sec
  
  //removes shorts from side panel
  setTimeout(() => {
	let element = document.querySelectorAll("#endpoint");
	let nonExistentFirstElement = element[2];
	if (nonExistentFirstElement) nonExistentFirstElement.remove();
  }, delay);
  
  function removeShorts() {
	let output = [];
	let regex = /shorts*/gm;
	for (let i of document.querySelectorAll("*")) {
	  if (regex.test(i.href)) {
		output.push(i);
		let bruh = i.parentElement;
		if (bruh){
  
		  bruh.parentElement.remove();
		}
	  }
	}
  
	let shortsPlayer = document.getElementById("shorts-player");
	let shortsPlayerParent;
	if (shortsPlayer) shortsPlayerParent = shortsPlayer.parentElement;
	if (shortsPlayerParent != undefined || null) {
	  shortsPlayerParent.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
	}
  }
  
  let interval = setInterval(function () {
	removeShorts();
  }, delay);
  