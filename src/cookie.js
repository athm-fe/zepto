;(function($){

  $.setCookie = function (name, value, option) {
    var str = name + "=" + escape(value);

    if (option) {
      if (option.expireHours) {
        var d = new Date();
        d.setTime(d.getTime() + option.expireHours * 3600 * 1000);
        str += "; expires=" + d.toUTCString();
      }
      if (option.path) {
        str += "; path=" + option.path;
      } else {
        str += "; path=/";
      }
      if (option.domain) {
        str += "; domain=" + option.domain;
      }
      if (option.secure) {
        str += "; true";
      }
    }
    document.cookie = str;
  };

  $.getCookie = function (name, defval) {
    var r = new RegExp("(?:^| )" + name + "=([^;]*)(?:;|$)", "gi");
    var matches = r.exec(document.cookie);
    return matches ? unescape(matches[1]) : defval;
  };

})(Zepto)
