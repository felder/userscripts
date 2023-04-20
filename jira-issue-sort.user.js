// ==UserScript==
// @name         jira-issue-sort
// @namespace    https://www.feldersoft.com
// @version      1.0
// @description  Sort open issues by created date
// @author       Jonathan Felder
// @downloadURL  https://raw.githubusercontent.com/felder/userscripts/main/jira-issue-sort.user.js
// @include      https://jira-secure.berkeley.edu/*
// ==/UserScript==

(function() {
  'use strict';

  if (window.location.search.match(/filter=allopenissues$/)) {
    window.location.search = window.location.search.replace(/filter=allopenissues/, 'filter=allopenissues&orderby=created+DESC');
  }
  else if (window.location.href.match(/\/issues$/)) {
    window.location.href = window.location.href.replace(/\/issues$/, '/issues?filter=allopenissues&orderby=created+DESC');
  }
})();