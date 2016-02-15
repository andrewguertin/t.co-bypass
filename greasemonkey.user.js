// ==UserScript==
// @name        t.co bypass
// @namespace   http://darcsys.com
// @include     https://twitter.com/*
// @include     https://tweetdeck.com/*
// @include     https://tweetdeck.twitter.com/*
// @version     1
// @grant       none
// ==/UserScript==

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    var node = mutation.target;
    var as = node.querySelectorAll('a[href*="//t.co/"]');
    for (var a of as) {
      a.setAttribute("href", a.getAttribute("data-expanded-url")
                          || a.getAttribute("data-full-url")
                          || a.getAttribute("title")
                          || a.getAttribute("href")
      );
    }
  });
});

var config = { 
  childList: true,
  subtree: true
};

observer.observe(document.body, config);
