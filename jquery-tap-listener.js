/*!
 * jQuery special event "tap" using tap-listener.js
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

(function(factory) {
  /*global define: false, module: false, require: false */
  'use strict';
  // universal module definition

  if (typeof define === 'function' && define.amd) {
    // AMD
    define([
      'jquery', './tap-listener'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('jquery'),
      require('./tap-listener')
    );
  } else {
    factory(jQuery, TapListener);
  }
}(function($, TapListener) {
  'use strict';

  $.event.special.tap = (function() {
    var dataKey = 'tap-listener.js';

    function tapper(self) {
      return $.data(self, dataKey);
    }

    function destroy(self) {
      var tap = tapper(self);
      if (tap && tap.destroy) {
        tap.destroy();
        $.removeData(self, dataKey);
      }
    }

    return {
      setup: function(data, namespaces, eventHandle) {
        $.data(this, dataKey, new TapListener(this));
        return false;
      },
      add: function(handleObj) {
        tapper(this).on('tap', handleObj.handler);
      },
      teardown: function() {
        destroy(this);
        return false;
      }
    };
  }());

}));
