import Vue from "vue";
String.prototype.toHtmlEntities = function () {
  return this.replace(/./gm, function (s) {
    // return "&#" + s.charCodeAt(0) + ";";
    return s.match(/[a-z0-9\s]+/i) ? s : "&#" + s.charCodeAt(0) + ";";
  });
};
String.prototype.fromHtmlEntities = function (string) {
  return (string + "").replace(/&#\d+;/gm, function (s) {
    return String.fromCharCode(s.match(/\d+/gm)[0]);
  });
};
Vue.directive("tr", {
  bind: (el, bindings) => {
    const lang = bindings.value.locale;
    const val = isJson(el.innerHTML);

    if (val) {
      el.innerHTML = val[lang];
    } else {
      el.innerHTML = el.innerHTML;
    }

    function isJson(value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return false;
      }
    }
  },
});
