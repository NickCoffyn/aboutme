(function () {
  var nav = window.navigator || {};
  if (nav.globalPrivacyControl === true || nav.doNotTrack === '1' || window.doNotTrack === '1') return;
  var _paq = (window._paq = window._paq || []);
  var base = '/_mt/';
  _paq.push(['disableCookies']);
  _paq.push(['setDoNotTrack', true]);
  _paq.push(['disableBrowserFeatureDetection']);
  _paq.push(['setTrackerUrl', base + 'matomo.php']);
  _paq.push(['setSiteId', '5']);
  _paq.push(['setCustomUrl', window.location.origin + window.location.pathname]);
  _paq.push(['setReferrerUrl', '']);
  _paq.push(['trackPageView']);
  var s = document.createElement('script');
  s.async = true;
  s.src = base + 'matomo.js';
  document.head.appendChild(s);
})();
