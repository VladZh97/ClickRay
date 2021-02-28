// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/sal.js/dist/sal.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.sal = t() : e.sal = t();
}(this, function () {
  return function () {
    "use strict";

    var e = {
      855: function _(e, t, n) {
        function r(e, t) {
          var n = Object.keys(e);

          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, r);
          }

          return n;
        }

        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(n), !0).forEach(function (t) {
              a(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
          }

          return e;
        }

        function a(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e;
        }

        n.d(t, {
          default: function _default() {
            return E;
          }
        });

        var s = "Sal was not initialised! Probably it is used in SSR.",
            i = "Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",
            l = {
          root: null,
          rootMargin: "0% 50%",
          threshold: .5,
          animateClassName: "sal-animate",
          disabledClassName: "sal-disabled",
          enterEventName: "sal:in",
          exitEventName: "sal:out",
          selector: "[data-sal]",
          once: !0,
          disabled: !1
        },
            c = [],
            u = null,
            d = function d(e) {
          e && e !== l && (l = o(o({}, l), e));
        },
            f = function f(e) {
          e.classList.remove(l.animateClassName);
        },
            b = function b(e, t) {
          var n = new CustomEvent(e, {
            bubbles: !0,
            detail: t
          });
          t.target.dispatchEvent(n);
        },
            p = function p() {
          document.body.classList.add(l.disabledClassName);
        },
            m = function m() {
          u.disconnect(), u = null;
        },
            v = function v() {
          return l.disabled || "function" == typeof l.disabled && l.disabled();
        },
            y = function y(e, t) {
          e.forEach(function (e) {
            var n = e.target,
                r = void 0 !== n.dataset.salRepeat,
                o = void 0 !== n.dataset.salOnce,
                a = r || !(o || l.once);
            e.intersectionRatio >= l.threshold ? (function (e) {
              e.target.classList.add(l.animateClassName), b(l.enterEventName, e);
            }(e), a || t.unobserve(n)) : a && function (e) {
              f(e.target), b(l.exitEventName, e);
            }(e);
          });
        },
            O = function O() {
          var e = [].filter.call(document.querySelectorAll(l.selector), function (e) {
            return !function (e) {
              return e.classList.contains(l.animateClassName);
            }(e, l.animateClassName);
          });
          return e.forEach(function (e) {
            return u.observe(e);
          }), e;
        },
            h = function h() {
          p(), m();
        },
            g = function g() {
          document.body.classList.remove(l.disabledClassName), u = new IntersectionObserver(y, {
            root: l.root,
            rootMargin: l.rootMargin,
            threshold: l.threshold
          }), c = O();
        },
            w = function w() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          m(), Array.from(document.querySelectorAll(l.selector)).forEach(f), d(e), g();
        },
            j = function j() {
          var e = O();
          c.push(e);
        };

        var E = function E() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
          if (d(e), "undefined" == typeof window) return console.warn(s), {
            elements: c,
            disable: h,
            enable: g,
            reset: w,
            update: j
          };
          if (!window.IntersectionObserver) throw p(), Error(i);
          return v() ? p() : g(), {
            elements: c,
            disable: h,
            enable: g,
            reset: w,
            update: j
          };
        };
      }
    },
        t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        exports: {}
      };
      return e[r](o, o.exports, n), o.exports;
    }

    return n.d = function (e, t) {
      for (var r in t) {
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
          enumerable: !0,
          get: t[r]
        });
      }
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n(855);
  }().default;
});
},{}],"src/js/modules/tabs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// TESTIMONIAL TABS
var tabs = function tabs() {
  var body = document.querySelector('.testimonial__people'),
      tab = document.querySelectorAll('.testimonial__person-image'),
      content = document.querySelectorAll('.testimonial__item');

  var hideContent = function hideContent() {
    content.forEach(function (item) {
      item.classList.remove('active');
    });
    tab.forEach(function (item) {
      item.classList.remove('active');
    });
  };

  var showContent = function showContent() {
    var _content$i, _tab$i;

    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
    (_content$i = content[i]) === null || _content$i === void 0 ? void 0 : _content$i.classList.add('active');
    (_tab$i = tab[i]) === null || _tab$i === void 0 ? void 0 : _tab$i.classList.add('active');
  };

  hideContent();
  showContent();
  body.addEventListener('click', function (e) {
    var target = e.target;

    if (target && target.classList.contains('testimonial__person-image') || target.parentNode.classList.contains('testimonial__person-image')) {
      tab.forEach(function (item, i) {
        if (target == item || target.parentNode == item) {
          hideContent();
          showContent(i);
        }
      });
    }
  });
};

var _default = tabs;
exports.default = _default;
},{}],"src/js/modules/popup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var popup = function popup() {
  // SHOW POPUP VIDEO
  var videoBtn = document.querySelectorAll('.testimonial__item-btn'),
      popupBody = document.querySelectorAll('.testimonial__video'),
      html = document.querySelector('html');
  videoBtn.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var target = e.target;
      var parentEl = target.parentNode.parentNode.parentNode;
      var videoPopupActive = parentEl.querySelector('.testimonial__video');
      videoPopupActive.classList.add('active');
      html.style.overflowY = 'hidden';
    });
  }); // CLOSE POPUP ON CLICK OUTSIDE

  popupBody.forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (e.target === item) {
        popupBody.forEach(function (item) {
          item.classList.remove('active');
          html.style.overflowY = 'visible';
        });
      }
    });
  });
};

var _default = popup;
exports.default = _default;
},{}],"src/js/modules/burger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var burger = function burger() {
  // Burger menu
  var menuBtn = document.querySelector('.menu-btn'),
      menuTop = document.querySelector('.header__menu');
  var menuOpen = false;
  menuBtn.addEventListener('click', function () {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      menuTop.classList.add('active');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menuTop.classList.remove('active');
      menuOpen = false;
    }
  });
  document.addEventListener('click', function (e) {
    var targetName = e.target.tagName;

    if (e.target !== menuTop && e.target !== menuBtn && targetName !== "INPUT" && targetName !== "A" && targetName !== "I") {
      menuBtn.classList.remove('open');
      menuTop.classList.remove('active');
      menuOpen = false;
    }
  });
};

var _default = burger;
exports.default = _default;
},{}],"src/js/modules/menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var toggleSubMenu = function toggleSubMenu(anchor, toggleBody) {
  var pagesAnchor = document.querySelector(anchor),
      pagesBody = document.querySelector(toggleBody);

  var togglePagesBody = function togglePagesBody() {
    return pagesBody.classList.toggle('active');
  };

  pagesAnchor.addEventListener('click', togglePagesBody);
};

var _default = toggleSubMenu;
exports.default = _default;
},{}],"src/js/script.js":[function(require,module,exports) {
"use strict";

var _sal = _interopRequireDefault(require("sal.js"));

var _tabs = _interopRequireDefault(require("./modules/tabs"));

var _popup = _interopRequireDefault(require("./modules/popup"));

var _burger = _interopRequireDefault(require("./modules/burger"));

var _menu = _interopRequireDefault(require("./modules/menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener("DOMContentLoaded", function () {
  // HEADER SEARCH
  var searchIcon = document.querySelector('.search__icon'),
      searchInput = document.querySelector('.search__input');
  document.addEventListener('click', function (e) {
    if (e.target !== searchIcon && e.target !== searchInput) {
      searchInput.classList.remove('visible');
    }

    console.log(e.target.tagName);
  });

  var showInput = function showInput() {
    return searchInput.classList.toggle('visible');
  };

  searchIcon.addEventListener('click', showInput); // CAROUSEL

  if (window.innerWidth <= 768) {
    var carouselList = document.querySelector('.companies__list');
    carouselList.classList.add('owl-carousel');
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      items: 2,
      dotsEach: 2
    });
  } // MODULES


  (0, _tabs.default)();
  (0, _popup.default)();
  (0, _burger.default)();
  (0, _menu.default)('#pages a', '.header-sub');
  (0, _menu.default)('#about-sub a', '.about-sub'); // SAL INIT

  (0, _sal.default)({
    threshold: 1,
    once: false
  }); // SET STYLE TO BANER TITLE

  var title = document.querySelector('.baner__title'),
      subtitle = document.querySelector('.baner__subtitle');
  setTimeout(function () {
    title.classList.add('active');
    subtitle.classList.add('active');
  }, 1000);
});
},{"sal.js":"node_modules/sal.js/dist/sal.js","./modules/tabs":"src/js/modules/tabs.js","./modules/popup":"src/js/modules/popup.js","./modules/burger":"src/js/modules/burger.js","./modules/menu":"src/js/modules/menu.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49733" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/script.js"], null)