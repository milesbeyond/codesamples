window.debug=(function(){var i=this,b=Array.prototype.slice,d=i.console,h={},f,g,m=9,c=["error","warn","info","debug","log"],l="assert clear count dir dirxml exception group groupCollapsed groupEnd profile profileEnd table time timeEnd trace".split(" "),j=l.length,a=[];while(--j>=0){(function(n){h[n]=function(){m!==0&&d&&d[n]&&d[n].apply(d,arguments)}})(l[j])}j=c.length;while(--j>=0){(function(n,o){h[o]=function(){var q=b.call(arguments),p=[o].concat(q);a.push(p);e(p);if(!d||!k(n)){return}d.firebug?d[o].apply(i,q):d[o]?d[o](q):d.log(q)}})(j,c[j])}function e(n){if(f&&(g||!d||!d.log)){f.apply(i,n)}}h.setLevel=function(n){m=typeof n==="number"?n:9};function k(n){return m>0?m>n:c.length+m<=n}h.setCallback=function(){var o=b.call(arguments),n=a.length,p=n;f=o.shift()||null;g=typeof o[0]==="boolean"?o.shift():false;p-=typeof o[0]==="number"?o.shift():n;while(p<n){e(a[p++])}};return h})();

var $$ = jQuery.noConflict();

$$(function() {
  debug.log('Remember to use jQuery noConflict!');
  debug.log('Remember to update the Facebook app ID!');


  $$(document.body).on('click', '#get-submit', function (e) {
    e.preventDefault();
    var gender = $$('#get-gender').val();
    debug.log('get gender: '+ gender);
    $$.getJSON('http://sgh-fall-trends-api.herokuapp.com/get_votes/' + gender + '?callback=?', function (res) {
      debug.log(res);
      $$('#get-results').val(JSON.stringify(res));
    });
  });

  $$(document.body).on('click', '#set-submit', function (e) {
    e.preventDefault();
    var gender = $$('#set-gender').val();
    var upc = $$('#set-id').val();
    var url = 'http://sgh-fall-trends-api.herokuapp.com/vote/' + gender + '/' + upc + '?callback=?';
    debug.log('set gender: '+ gender);
    debug.log('set upc: '+ upc);
    debug.log('url: ' + url);
    $$.getJSON(url, function (res) {
      $$('#set-results').val(JSON.stringify(res));
      debug.log(res);
    });
  });

});