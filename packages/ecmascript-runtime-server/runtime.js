// The ecmascript-runtime-server package depends on its own copy of
// core-js using Npm.depends, so we don't have to check that core-js is
// available (as we do in ecmascript-runtime-client/runtime.js).

// List of polyfills generated by babel-preset-env with the following
// .babelrc configuration:
//
// {
//   "presets": [
//     ["env", {
//       "targets": {
//         "node": 8
//       },
//       "modules": false,
//       "polyfill": true,
//       "useBuiltIns": true
//     }]
//   ]
// }
//
// Note that the es6.reflect.* and es6.typed.* modules have been commented
// out for bundle size reasons.

require("core-js/modules/es7.string.pad-start");
require("core-js/modules/es7.string.pad-end");
