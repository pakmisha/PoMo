export default ({ $axios, env }) => {
  //   function getJSessionId() {
  //     var jsId = document.cookie.match(/PHPSESSID=[^;]+/);
  //     if (jsId != null) {
  //       if (jsId instanceof Array) jsId = jsId[0].substring(11);
  //       else jsId = jsId.substring(11);
  //     }
  //     return jsId;
  //   }
  $axios.onRequest((config) => {
    // console.log("OnRequest");
    // config.headers.common["X-Session-Id"] = getJSessionId();
  });
};
