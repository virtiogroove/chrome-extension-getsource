var button = document.getElementById("myButton");
button.addEventListener("click", function() {
	var tokenValue = document.getElementById("message").innerHTML;
	console.log("button, tokenValue = " + tokenValue);
	navigator.clipboard.writeText(tokenValue);
	close1();
}, false);


function closeWindows(){
	chrome.runtime.onMessage.addListener(function message(msg) {
		    var ctr = 0;
		    ctr = parseInt(msg.text, 0);
		    setTimeout(function() {
			            chrome.tabs.query({ active: true }, function(tabs) {
					                 chrome.tabs.remove(tabs[0].id);
					            });
			        }, ctr);
	});

};

function close1(){
	chrome.tabs.query({ active: true }, function(tabs) {
		             chrome.tabs.remove(tabs[0].id);
		        });
};


var button = document.getElementById("myButton");
button.addEventListener("click", function() {
	var tokenValue = document.getElementById("message").innerHTML;
	console.log("button, tokenValue = " + tokenValue);
	navigator.clipboard.writeText(tokenValue);
	close1();
}, false);


function closeWindows(){
	chrome.runtime.onMessage.addListener(function message(msg) {
		    var ctr = 0;
		    ctr = parseInt(msg.text, 0);
		    setTimeout(function() {
			            chrome.tabs.query({ active: true }, function(tabs) {
					                 chrome.tabs.remove(tabs[0].id);
					            });
			        }, ctr);
	});

};

function close1(){
	chrome.tabs.query({ active: true }, function(tabs) {
		             chrome.tabs.remove(tabs[0].id);
		        });
};



