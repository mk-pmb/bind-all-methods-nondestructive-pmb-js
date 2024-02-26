/* -*- coding: UTF-8, tab-width: 2 -*- */
/* eslint-disable spaced-comment, strict, no-var, one-var */
/*jslint indent: 2, maxlen: 80, browser: true */
/*global define*/
(function init() {
  'use strict';
  var EX = function bindAllMethods(context, origin) {
    return EX.onto({}, context, origin);
  };

  EX.dest = function bindAllMethodsOnto(dest, origin) {
    return EX.onto(dest, dest, origin);
  };

  EX.onto = function bindAllMethodsOnto(dest, context, origin) {
    if (!origin) { return EX.onto(dest, context, context); }
    Object.keys(origin).forEach(function copy(k) {
      // eslint-disable-next-line no-param-reassign
      dest[k] = EX.bindIfFunc(context, origin[k]);
    });
    return dest;
  };

  EX.bindIfFunc = function bindIfFunc(c, x) {
    if ((x && x.bind && typeof x.bind) === 'function') { return x.bind(c); }
    return x;
  };




  (function unifiedExport(e) {
    var d = ((typeof define === 'function') && define),
      m = ((typeof module === 'object') && module);
    if (d && d.amd) { d(function f() { return e; }); }
    if (m && m.exports) { m.exports = e; }
  }(EX));
}());
