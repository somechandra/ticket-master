const Utils = {
  fcHoldoff: function (fn, interval) {
    var timeout;
    return function (...args) {
      var context = this;
      var laterFn = function () {
        timeout = null;
        fn.apply(context, [...args]);
      };
      clearTimeout(timeout);
      timeout = setTimeout(laterFn, interval || 200);
    };
  }
};

export default Utils;
