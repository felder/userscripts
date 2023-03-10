// ==UserScript==
// @name         ucb-jira-fix
// @namespace    https://www.feldersoft.com
// @version      1.0
// @description  Sorts jira issue comments by oldest first and loads them all
// @author       Jonathan Felder
// @downloadURL  https://raw.githubusercontent.com/felder/userscripts/main/ucb-jira-fix.user.js
// @include      https://jira-secure.berkeley.edu/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  function clickSort() {
    if (document.getElementById("sort-button").title == "Click to view oldest first") {
      document.getElementById("sort-button").click();
    }
  }

  function clickLoadAll() {
    var loadall = document.querySelector('[data-load-all-message="select to load all"]');
    if (loadall !== null) { loadall.click(); }
  }
  
  waitForKeyElements("#sort-button", clickSort);
  waitForKeyElements(".show-more-tab-items", clickLoadAll);
})();