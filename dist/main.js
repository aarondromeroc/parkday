(function (H) {
  typeof define == "function" && define.amd ? define(H) : H();
})(function () {
  "use strict";
  var H = document.createElement("style");
  (H.textContent = `@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}:root{--swiper-navigation-size: 44px}.swiper-button-prev,.swiper-button-next{position:absolute;top:var(--swiper-navigation-top-offset, 50%);width:calc(var(--swiper-navigation-size) / 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size) / 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color, var(--swiper-theme-color))}.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev.swiper-button-hidden,.swiper-button-next.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-prev,.swiper-navigation-disabled .swiper-button-next{display:none!important}.swiper-button-prev svg,.swiper-button-next svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-prev svg,.swiper-rtl .swiper-button-next svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset, 10px);right:auto}.swiper-button-lock{display:none}.swiper-button-prev:after,.swiper-button-next:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset, 10px);left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:var(--swiper-pagination-bottom, 8px);top:var(--swiper-pagination-top, auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius, 50%);background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:var(--swiper-pagination-right, 8px);left:var(--swiper-pagination-left, auto);top:50%;transform:translate3d(0,-50%,0)}.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color, inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size, 4px);left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:var(--swiper-pagination-progressbar-size, 4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}
/*$vite$:1*/`),
    document.head.appendChild(H);
  function ce(i) {
    return (
      i !== null &&
      typeof i == "object" &&
      "constructor" in i &&
      i.constructor === Object
    );
  }
  function K(i, e) {
    i === void 0 && (i = {}), e === void 0 && (e = {});
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e)
      .filter((s) => t.indexOf(s) < 0)
      .forEach((s) => {
        typeof i[s] > "u"
          ? (i[s] = e[s])
          : ce(e[s]) &&
            ce(i[s]) &&
            Object.keys(e[s]).length > 0 &&
            K(i[s], e[s]);
      });
  }
  const fe = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return { initEvent() {} };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function R() {
    const i = typeof document < "u" ? document : {};
    return K(i, fe), i;
  }
  const Pe = {
    document: fe,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        },
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(i) {
      return typeof setTimeout > "u" ? (i(), null) : setTimeout(i, 0);
    },
    cancelAnimationFrame(i) {
      typeof setTimeout > "u" || clearTimeout(i);
    },
  };
  function G() {
    const i = typeof window < "u" ? window : {};
    return K(i, Pe), i;
  }
  function Ie(i) {
    return (
      i === void 0 && (i = ""),
      i
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function Le(i) {
    const e = i;
    Object.keys(e).forEach((t) => {
      try {
        e[t] = null;
      } catch {}
      try {
        delete e[t];
      } catch {}
    });
  }
  function J(i, e) {
    return e === void 0 && (e = 0), setTimeout(i, e);
  }
  function j() {
    return Date.now();
  }
  function ze(i) {
    const e = G();
    let t;
    return (
      e.getComputedStyle && (t = e.getComputedStyle(i, null)),
      !t && i.currentStyle && (t = i.currentStyle),
      t || (t = i.style),
      t
    );
  }
  function ke(i, e) {
    e === void 0 && (e = "x");
    const t = G();
    let s, n, r;
    const o = ze(i);
    return (
      t.WebKitCSSMatrix
        ? ((n = o.transform || o.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((a) => a.replace(",", "."))
              .join(", ")),
          (r = new t.WebKitCSSMatrix(n === "none" ? "" : n)))
        : ((r =
            o.MozTransform ||
            o.OTransform ||
            o.MsTransform ||
            o.msTransform ||
            o.transform ||
            o
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (s = r.toString().split(","))),
      e === "x" &&
        (t.WebKitCSSMatrix
          ? (n = r.m41)
          : s.length === 16
          ? (n = parseFloat(s[12]))
          : (n = parseFloat(s[4]))),
      e === "y" &&
        (t.WebKitCSSMatrix
          ? (n = r.m42)
          : s.length === 16
          ? (n = parseFloat(s[13]))
          : (n = parseFloat(s[5]))),
      n || 0
    );
  }
  function W(i) {
    return (
      typeof i == "object" &&
      i !== null &&
      i.constructor &&
      Object.prototype.toString.call(i).slice(8, -1) === "Object"
    );
  }
  function Oe(i) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? i instanceof HTMLElement
      : i && (i.nodeType === 1 || i.nodeType === 11);
  }
  function $() {
    const i = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const s = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (s != null && !Oe(s)) {
        const n = Object.keys(Object(s)).filter((r) => e.indexOf(r) < 0);
        for (let r = 0, o = n.length; r < o; r += 1) {
          const a = n[r],
            d = Object.getOwnPropertyDescriptor(s, a);
          d !== void 0 &&
            d.enumerable &&
            (W(i[a]) && W(s[a])
              ? s[a].__swiper__
                ? (i[a] = s[a])
                : $(i[a], s[a])
              : !W(i[a]) && W(s[a])
              ? ((i[a] = {}), s[a].__swiper__ ? (i[a] = s[a]) : $(i[a], s[a]))
              : (i[a] = s[a]));
        }
      }
    }
    return i;
  }
  function X(i, e, t) {
    i.style.setProperty(e, t);
  }
  function ue(i) {
    let { swiper: e, targetPosition: t, side: s } = i;
    const n = G(),
      r = -e.translate;
    let o = null,
      a;
    const d = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      n.cancelAnimationFrame(e.cssModeFrameID);
    const l = t > r ? "next" : "prev",
      c = (g, h) => (l === "next" && g >= h) || (l === "prev" && g <= h),
      u = () => {
        (a = new Date().getTime()), o === null && (o = a);
        const g = Math.max(Math.min((a - o) / d, 1), 0),
          h = 0.5 - Math.cos(g * Math.PI) / 2;
        let m = r + h * (t - r);
        if ((c(m, t) && (m = t), e.wrapperEl.scrollTo({ [s]: m }), c(m, t))) {
          (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [s]: m });
            }),
            n.cancelAnimationFrame(e.cssModeFrameID);
          return;
        }
        e.cssModeFrameID = n.requestAnimationFrame(u);
      };
    u();
  }
  function ee(i) {
    return (
      i.querySelector(".swiper-slide-transform") ||
      (i.shadowRoot && i.shadowRoot.querySelector(".swiper-slide-transform")) ||
      i
    );
  }
  function F(i, e) {
    e === void 0 && (e = "");
    const t = G(),
      s = [...i.children];
    return (
      t.HTMLSlotElement &&
        i instanceof HTMLSlotElement &&
        s.push(...i.assignedElements()),
      e ? s.filter((n) => n.matches(e)) : s
    );
  }
  function Be(i, e) {
    const t = [e];
    for (; t.length > 0; ) {
      const s = t.shift();
      if (i === s) return !0;
      t.push(
        ...s.children,
        ...(s.shadowRoot ? s.shadowRoot.children : []),
        ...(s.assignedElements ? s.assignedElements() : [])
      );
    }
  }
  function Ge(i, e) {
    const t = G();
    let s = e.contains(i);
    return (
      !s &&
        t.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        ((s = [...e.assignedElements()].includes(i)), s || (s = Be(i, e))),
      s
    );
  }
  function Q(i) {
    try {
      console.warn(i);
      return;
    } catch {}
  }
  function _(i, e) {
    e === void 0 && (e = []);
    const t = document.createElement(i);
    return t.classList.add(...(Array.isArray(e) ? e : Ie(e))), t;
  }
  function De(i, e) {
    const t = [];
    for (; i.previousElementSibling; ) {
      const s = i.previousElementSibling;
      e ? s.matches(e) && t.push(s) : t.push(s), (i = s);
    }
    return t;
  }
  function $e(i, e) {
    const t = [];
    for (; i.nextElementSibling; ) {
      const s = i.nextElementSibling;
      e ? s.matches(e) && t.push(s) : t.push(s), (i = s);
    }
    return t;
  }
  function Y(i, e) {
    return G().getComputedStyle(i, null).getPropertyValue(e);
  }
  function U(i) {
    let e = i,
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function me(i, e) {
    const t = [];
    let s = i.parentElement;
    for (; s; )
      e ? s.matches(e) && t.push(s) : t.push(s), (s = s.parentElement);
    return t;
  }
  function Ve(i, e) {
    function t(s) {
      s.target === i &&
        (e.call(i, s), i.removeEventListener("transitionend", t));
    }
    e && i.addEventListener("transitionend", t);
  }
  function te(i, e, t) {
    const s = G();
    return (
      i[e === "width" ? "offsetWidth" : "offsetHeight"] +
      parseFloat(
        s
          .getComputedStyle(i, null)
          .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
      ) +
      parseFloat(
        s
          .getComputedStyle(i, null)
          .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
      )
    );
  }
  function O(i) {
    return (Array.isArray(i) ? i : [i]).filter((e) => !!e);
  }
  function ge(i, e) {
    e === void 0 && (e = ""),
      typeof trustedTypes < "u"
        ? (i.innerHTML = trustedTypes
            .createPolicy("html", { createHTML: (t) => t })
            .createHTML(e))
        : (i.innerHTML = e);
  }
  let ie;
  function Fe() {
    const i = G(),
      e = R();
    return {
      smoothScroll:
        e.documentElement &&
        e.documentElement.style &&
        "scrollBehavior" in e.documentElement.style,
      touch: !!(
        "ontouchstart" in i ||
        (i.DocumentTouch && e instanceof i.DocumentTouch)
      ),
    };
  }
  function he() {
    return ie || (ie = Fe()), ie;
  }
  let se;
  function Ne(i) {
    let { userAgent: e } = i === void 0 ? {} : i;
    const t = he(),
      s = G(),
      n = s.navigator.platform,
      r = e || s.navigator.userAgent,
      o = { ios: !1, android: !1 },
      a = s.screen.width,
      d = s.screen.height,
      l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = r.match(/(iPad).*OS\s([\d_]+)/);
    const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
      g = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      h = n === "Win32";
    let m = n === "MacIntel";
    const w = [
      "1024x1366",
      "1366x1024",
      "834x1194",
      "1194x834",
      "834x1112",
      "1112x834",
      "768x1024",
      "1024x768",
      "820x1180",
      "1180x820",
      "810x1080",
      "1080x810",
    ];
    return (
      !c &&
        m &&
        t.touch &&
        w.indexOf(`${a}x${d}`) >= 0 &&
        ((c = r.match(/(Version)\/([\d.]+)/)),
        c || (c = [0, 1, "13_0_0"]),
        (m = !1)),
      l && !h && ((o.os = "android"), (o.android = !0)),
      (c || g || u) && ((o.os = "ios"), (o.ios = !0)),
      o
    );
  }
  function we(i) {
    return i === void 0 && (i = {}), se || (se = Ne(i)), se;
  }
  let re;
  function Ye() {
    const i = G(),
      e = we();
    let t = !1;
    function s() {
      const a = i.navigator.userAgent.toLowerCase();
      return (
        a.indexOf("safari") >= 0 &&
        a.indexOf("chrome") < 0 &&
        a.indexOf("android") < 0
      );
    }
    if (s()) {
      const a = String(i.navigator.userAgent);
      if (a.includes("Version/")) {
        const [d, l] = a
          .split("Version/")[1]
          .split(" ")[0]
          .split(".")
          .map((c) => Number(c));
        t = d < 16 || (d === 16 && l < 2);
      }
    }
    const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        i.navigator.userAgent
      ),
      r = s(),
      o = r || (n && e.ios);
    return {
      isSafari: t || r,
      needPerspectiveFix: t,
      need3dFix: o,
      isWebView: n,
    };
  }
  function ve() {
    return re || (re = Ye()), re;
  }
  function Re(i) {
    let { swiper: e, on: t, emit: s } = i;
    const n = G();
    let r = null,
      o = null;
    const a = () => {
        !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
      },
      d = () => {
        !e ||
          e.destroyed ||
          !e.initialized ||
          ((r = new ResizeObserver((u) => {
            o = n.requestAnimationFrame(() => {
              const { width: g, height: h } = e;
              let m = g,
                w = h;
              u.forEach((A) => {
                let { contentBoxSize: b, contentRect: p, target: f } = A;
                (f && f !== e.el) ||
                  ((m = p ? p.width : (b[0] || b).inlineSize),
                  (w = p ? p.height : (b[0] || b).blockSize));
              }),
                (m !== g || w !== h) && a();
            });
          })),
          r.observe(e.el));
      },
      l = () => {
        o && n.cancelAnimationFrame(o),
          r && r.unobserve && e.el && (r.unobserve(e.el), (r = null));
      },
      c = () => {
        !e || e.destroyed || !e.initialized || s("orientationchange");
      };
    t("init", () => {
      if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
        d();
        return;
      }
      n.addEventListener("resize", a),
        n.addEventListener("orientationchange", c);
    }),
      t("destroy", () => {
        l(),
          n.removeEventListener("resize", a),
          n.removeEventListener("orientationchange", c);
      });
  }
  function He(i) {
    let { swiper: e, extendParams: t, on: s, emit: n } = i;
    const r = [],
      o = G(),
      a = function (c, u) {
        u === void 0 && (u = {});
        const g = o.MutationObserver || o.WebkitMutationObserver,
          h = new g((m) => {
            if (e.__preventObserver__) return;
            if (m.length === 1) {
              n("observerUpdate", m[0]);
              return;
            }
            const w = function () {
              n("observerUpdate", m[0]);
            };
            o.requestAnimationFrame
              ? o.requestAnimationFrame(w)
              : o.setTimeout(w, 0);
          });
        h.observe(c, {
          attributes: typeof u.attributes > "u" ? !0 : u.attributes,
          childList:
            e.isElement || (typeof u.childList > "u" ? !0 : u).childList,
          characterData: typeof u.characterData > "u" ? !0 : u.characterData,
        }),
          r.push(h);
      },
      d = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            const c = me(e.hostEl);
            for (let u = 0; u < c.length; u += 1) a(c[u]);
          }
          a(e.hostEl, { childList: e.params.observeSlideChildren }),
            a(e.wrapperEl, { attributes: !1 });
        }
      },
      l = () => {
        r.forEach((c) => {
          c.disconnect();
        }),
          r.splice(0, r.length);
      };
    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      s("init", d),
      s("destroy", l);
  }
  var _e = {
    on(i, e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
      const n = t ? "unshift" : "push";
      return (
        i.split(" ").forEach((r) => {
          s.eventsListeners[r] || (s.eventsListeners[r] = []),
            s.eventsListeners[r][n](e);
        }),
        s
      );
    },
    once(i, e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
      function n() {
        s.off(i, n), n.__emitterProxy && delete n.__emitterProxy;
        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
          o[a] = arguments[a];
        e.apply(s, o);
      }
      return (n.__emitterProxy = e), s.on(i, n, t);
    },
    onAny(i, e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || typeof i != "function") return t;
      const s = e ? "unshift" : "push";
      return (
        t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i), t
      );
    },
    offAny(i) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
      const t = e.eventsAnyListeners.indexOf(i);
      return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
    },
    off(i, e) {
      const t = this;
      return (
        !t.eventsListeners ||
          t.destroyed ||
          !t.eventsListeners ||
          i.split(" ").forEach((s) => {
            typeof e > "u"
              ? (t.eventsListeners[s] = [])
              : t.eventsListeners[s] &&
                t.eventsListeners[s].forEach((n, r) => {
                  (n === e || (n.__emitterProxy && n.__emitterProxy === e)) &&
                    t.eventsListeners[s].splice(r, 1);
                });
          }),
        t
      );
    },
    emit() {
      const i = this;
      if (!i.eventsListeners || i.destroyed || !i.eventsListeners) return i;
      let e, t, s;
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return (
        typeof r[0] == "string" || Array.isArray(r[0])
          ? ((e = r[0]), (t = r.slice(1, r.length)), (s = i))
          : ((e = r[0].events), (t = r[0].data), (s = r[0].context || i)),
        t.unshift(s),
        (Array.isArray(e) ? e : e.split(" ")).forEach((d) => {
          i.eventsAnyListeners &&
            i.eventsAnyListeners.length &&
            i.eventsAnyListeners.forEach((l) => {
              l.apply(s, [d, ...t]);
            }),
            i.eventsListeners &&
              i.eventsListeners[d] &&
              i.eventsListeners[d].forEach((l) => {
                l.apply(s, t);
              });
        }),
        i
      );
    },
  };
  function qe() {
    const i = this;
    let e, t;
    const s = i.el;
    typeof i.params.width < "u" && i.params.width !== null
      ? (e = i.params.width)
      : (e = s.clientWidth),
      typeof i.params.height < "u" && i.params.height !== null
        ? (t = i.params.height)
        : (t = s.clientHeight),
      !((e === 0 && i.isHorizontal()) || (t === 0 && i.isVertical())) &&
        ((e =
          e -
          parseInt(Y(s, "padding-left") || 0, 10) -
          parseInt(Y(s, "padding-right") || 0, 10)),
        (t =
          t -
          parseInt(Y(s, "padding-top") || 0, 10) -
          parseInt(Y(s, "padding-bottom") || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(t) && (t = 0),
        Object.assign(i, {
          width: e,
          height: t,
          size: i.isHorizontal() ? e : t,
        }));
  }
  function je() {
    const i = this;
    function e(y, x) {
      return parseFloat(y.getPropertyValue(i.getDirectionLabel(x)) || 0);
    }
    const t = i.params,
      { wrapperEl: s, slidesEl: n, size: r, rtlTranslate: o, wrongRTL: a } = i,
      d = i.virtual && t.virtual.enabled,
      l = d ? i.virtual.slides.length : i.slides.length,
      c = F(n, `.${i.params.slideClass}, swiper-slide`),
      u = d ? i.virtual.slides.length : c.length;
    let g = [];
    const h = [],
      m = [];
    let w = t.slidesOffsetBefore;
    typeof w == "function" && (w = t.slidesOffsetBefore.call(i));
    let A = t.slidesOffsetAfter;
    typeof A == "function" && (A = t.slidesOffsetAfter.call(i));
    const b = i.snapGrid.length,
      p = i.slidesGrid.length;
    let f = t.spaceBetween,
      v = -w,
      S = 0,
      T = 0;
    if (typeof r > "u") return;
    typeof f == "string" && f.indexOf("%") >= 0
      ? (f = (parseFloat(f.replace("%", "")) / 100) * r)
      : typeof f == "string" && (f = parseFloat(f)),
      (i.virtualSize = -f),
      c.forEach((y) => {
        o ? (y.style.marginLeft = "") : (y.style.marginRight = ""),
          (y.style.marginBottom = ""),
          (y.style.marginTop = "");
      }),
      t.centeredSlides &&
        t.cssMode &&
        (X(s, "--swiper-centered-offset-before", ""),
        X(s, "--swiper-centered-offset-after", ""));
    const C = t.grid && t.grid.rows > 1 && i.grid;
    C ? i.grid.initSlides(c) : i.grid && i.grid.unsetSlides();
    let E;
    const I =
      t.slidesPerView === "auto" &&
      t.breakpoints &&
      Object.keys(t.breakpoints).filter(
        (y) => typeof t.breakpoints[y].slidesPerView < "u"
      ).length > 0;
    for (let y = 0; y < u; y += 1) {
      E = 0;
      let x;
      if (
        (c[y] && (x = c[y]),
        C && i.grid.updateSlide(y, x, c),
        !(c[y] && Y(x, "display") === "none"))
      ) {
        if (t.slidesPerView === "auto") {
          I && (c[y].style[i.getDirectionLabel("width")] = "");
          const M = getComputedStyle(x),
            L = x.style.transform,
            z = x.style.webkitTransform;
          if (
            (L && (x.style.transform = "none"),
            z && (x.style.webkitTransform = "none"),
            t.roundLengths)
          )
            E = i.isHorizontal() ? te(x, "width") : te(x, "height");
          else {
            const k = e(M, "width"),
              P = e(M, "padding-left"),
              B = e(M, "padding-right"),
              D = e(M, "margin-left"),
              N = e(M, "margin-right"),
              Me = M.getPropertyValue("box-sizing");
            if (Me && Me === "border-box") E = k + D + N;
            else {
              const { clientWidth: ai, offsetWidth: oi } = x;
              E = k + P + B + D + N + (oi - ai);
            }
          }
          L && (x.style.transform = L),
            z && (x.style.webkitTransform = z),
            t.roundLengths && (E = Math.floor(E));
        } else
          (E = (r - (t.slidesPerView - 1) * f) / t.slidesPerView),
            t.roundLengths && (E = Math.floor(E)),
            c[y] && (c[y].style[i.getDirectionLabel("width")] = `${E}px`);
        c[y] && (c[y].swiperSlideSize = E),
          m.push(E),
          t.centeredSlides
            ? ((v = v + E / 2 + S / 2 + f),
              S === 0 && y !== 0 && (v = v - r / 2 - f),
              y === 0 && (v = v - r / 2 - f),
              Math.abs(v) < 1 / 1e3 && (v = 0),
              t.roundLengths && (v = Math.floor(v)),
              T % t.slidesPerGroup === 0 && g.push(v),
              h.push(v))
            : (t.roundLengths && (v = Math.floor(v)),
              (T - Math.min(i.params.slidesPerGroupSkip, T)) %
                i.params.slidesPerGroup ===
                0 && g.push(v),
              h.push(v),
              (v = v + E + f)),
          (i.virtualSize += E + f),
          (S = E),
          (T += 1);
      }
    }
    if (
      ((i.virtualSize = Math.max(i.virtualSize, r) + A),
      o &&
        a &&
        (t.effect === "slide" || t.effect === "coverflow") &&
        (s.style.width = `${i.virtualSize + f}px`),
      t.setWrapperSize &&
        (s.style[i.getDirectionLabel("width")] = `${i.virtualSize + f}px`),
      C && i.grid.updateWrapperSize(E, g),
      !t.centeredSlides)
    ) {
      const y = [];
      for (let x = 0; x < g.length; x += 1) {
        let M = g[x];
        t.roundLengths && (M = Math.floor(M)),
          g[x] <= i.virtualSize - r && y.push(M);
      }
      (g = y),
        Math.floor(i.virtualSize - r) - Math.floor(g[g.length - 1]) > 1 &&
          g.push(i.virtualSize - r);
    }
    if (d && t.loop) {
      const y = m[0] + f;
      if (t.slidesPerGroup > 1) {
        const x = Math.ceil(
            (i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup
          ),
          M = y * t.slidesPerGroup;
        for (let L = 0; L < x; L += 1) g.push(g[g.length - 1] + M);
      }
      for (
        let x = 0;
        x < i.virtual.slidesBefore + i.virtual.slidesAfter;
        x += 1
      )
        t.slidesPerGroup === 1 && g.push(g[g.length - 1] + y),
          h.push(h[h.length - 1] + y),
          (i.virtualSize += y);
    }
    if ((g.length === 0 && (g = [0]), f !== 0)) {
      const y =
        i.isHorizontal() && o
          ? "marginLeft"
          : i.getDirectionLabel("marginRight");
      c.filter((x, M) =>
        !t.cssMode || t.loop ? !0 : M !== c.length - 1
      ).forEach((x) => {
        x.style[y] = `${f}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let y = 0;
      m.forEach((M) => {
        y += M + (f || 0);
      }),
        (y -= f);
      const x = y > r ? y - r : 0;
      g = g.map((M) => (M <= 0 ? -w : M > x ? x + A : M));
    }
    if (t.centerInsufficientSlides) {
      let y = 0;
      m.forEach((M) => {
        y += M + (f || 0);
      }),
        (y -= f);
      const x = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (y + x < r) {
        const M = (r - y - x) / 2;
        g.forEach((L, z) => {
          g[z] = L - M;
        }),
          h.forEach((L, z) => {
            h[z] = L + M;
          });
      }
    }
    if (
      (Object.assign(i, {
        slides: c,
        snapGrid: g,
        slidesGrid: h,
        slidesSizesGrid: m,
      }),
      t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
    ) {
      X(s, "--swiper-centered-offset-before", `${-g[0]}px`),
        X(
          s,
          "--swiper-centered-offset-after",
          `${i.size / 2 - m[m.length - 1] / 2}px`
        );
      const y = -i.snapGrid[0],
        x = -i.slidesGrid[0];
      (i.snapGrid = i.snapGrid.map((M) => M + y)),
        (i.slidesGrid = i.slidesGrid.map((M) => M + x));
    }
    if (
      (u !== l && i.emit("slidesLengthChange"),
      g.length !== b &&
        (i.params.watchOverflow && i.checkOverflow(),
        i.emit("snapGridLengthChange")),
      h.length !== p && i.emit("slidesGridLengthChange"),
      t.watchSlidesProgress && i.updateSlidesOffset(),
      i.emit("slidesUpdated"),
      !d && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
    ) {
      const y = `${t.containerModifierClass}backface-hidden`,
        x = i.el.classList.contains(y);
      u <= t.maxBackfaceHiddenSlides
        ? x || i.el.classList.add(y)
        : x && i.el.classList.remove(y);
    }
  }
  function We(i) {
    const e = this,
      t = [],
      s = e.virtual && e.params.virtual.enabled;
    let n = 0,
      r;
    typeof i == "number"
      ? e.setTransition(i)
      : i === !0 && e.setTransition(e.params.speed);
    const o = (a) => (s ? e.slides[e.getSlideIndexByData(a)] : e.slides[a]);
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || []).forEach((a) => {
          t.push(a);
        });
      else
        for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
          const a = e.activeIndex + r;
          if (a > e.slides.length && !s) break;
          t.push(o(a));
        }
    else t.push(o(e.activeIndex));
    for (r = 0; r < t.length; r += 1)
      if (typeof t[r] < "u") {
        const a = t[r].offsetHeight;
        n = a > n ? a : n;
      }
    (n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
  }
  function Xe() {
    const i = this,
      e = i.slides,
      t = i.isElement
        ? i.isHorizontal()
          ? i.wrapperEl.offsetLeft
          : i.wrapperEl.offsetTop
        : 0;
    for (let s = 0; s < e.length; s += 1)
      e[s].swiperSlideOffset =
        (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) -
        t -
        i.cssOverflowAdjustment();
  }
  const be = (i, e, t) => {
    e && !i.classList.contains(t)
      ? i.classList.add(t)
      : !e && i.classList.contains(t) && i.classList.remove(t);
  };
  function Qe(i) {
    i === void 0 && (i = (this && this.translate) || 0);
    const e = this,
      t = e.params,
      { slides: s, rtlTranslate: n, snapGrid: r } = e;
    if (s.length === 0) return;
    typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let o = -i;
    n && (o = i), (e.visibleSlidesIndexes = []), (e.visibleSlides = []);
    let a = t.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0
      ? (a = (parseFloat(a.replace("%", "")) / 100) * e.size)
      : typeof a == "string" && (a = parseFloat(a));
    for (let d = 0; d < s.length; d += 1) {
      const l = s[d];
      let c = l.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (c -= s[0].swiperSlideOffset);
      const u =
          (o + (t.centeredSlides ? e.minTranslate() : 0) - c) /
          (l.swiperSlideSize + a),
        g =
          (o - r[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) /
          (l.swiperSlideSize + a),
        h = -(o - c),
        m = h + e.slidesSizesGrid[d],
        w = h >= 0 && h <= e.size - e.slidesSizesGrid[d],
        A =
          (h >= 0 && h < e.size - 1) ||
          (m > 1 && m <= e.size) ||
          (h <= 0 && m >= e.size);
      A && (e.visibleSlides.push(l), e.visibleSlidesIndexes.push(d)),
        be(l, A, t.slideVisibleClass),
        be(l, w, t.slideFullyVisibleClass),
        (l.progress = n ? -u : u),
        (l.originalProgress = n ? -g : g);
    }
  }
  function Ue(i) {
    const e = this;
    if (typeof i > "u") {
      const c = e.rtlTranslate ? -1 : 1;
      i = (e && e.translate && e.translate * c) || 0;
    }
    const t = e.params,
      s = e.maxTranslate() - e.minTranslate();
    let { progress: n, isBeginning: r, isEnd: o, progressLoop: a } = e;
    const d = r,
      l = o;
    if (s === 0) (n = 0), (r = !0), (o = !0);
    else {
      n = (i - e.minTranslate()) / s;
      const c = Math.abs(i - e.minTranslate()) < 1,
        u = Math.abs(i - e.maxTranslate()) < 1;
      (r = c || n <= 0), (o = u || n >= 1), c && (n = 0), u && (n = 1);
    }
    if (t.loop) {
      const c = e.getSlideIndexByData(0),
        u = e.getSlideIndexByData(e.slides.length - 1),
        g = e.slidesGrid[c],
        h = e.slidesGrid[u],
        m = e.slidesGrid[e.slidesGrid.length - 1],
        w = Math.abs(i);
      w >= g ? (a = (w - g) / m) : (a = (w + m - h) / m), a > 1 && (a -= 1);
    }
    Object.assign(e, {
      progress: n,
      progressLoop: a,
      isBeginning: r,
      isEnd: o,
    }),
      (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
        e.updateSlidesProgress(i),
      r && !d && e.emit("reachBeginning toEdge"),
      o && !l && e.emit("reachEnd toEdge"),
      ((d && !r) || (l && !o)) && e.emit("fromEdge"),
      e.emit("progress", n);
  }
  const ne = (i, e, t) => {
    e && !i.classList.contains(t)
      ? i.classList.add(t)
      : !e && i.classList.contains(t) && i.classList.remove(t);
  };
  function Ze() {
    const i = this,
      { slides: e, params: t, slidesEl: s, activeIndex: n } = i,
      r = i.virtual && t.virtual.enabled,
      o = i.grid && t.grid && t.grid.rows > 1,
      a = (u) => F(s, `.${t.slideClass}${u}, swiper-slide${u}`)[0];
    let d, l, c;
    if (r)
      if (t.loop) {
        let u = n - i.virtual.slidesBefore;
        u < 0 && (u = i.virtual.slides.length + u),
          u >= i.virtual.slides.length && (u -= i.virtual.slides.length),
          (d = a(`[data-swiper-slide-index="${u}"]`));
      } else d = a(`[data-swiper-slide-index="${n}"]`);
    else
      o
        ? ((d = e.find((u) => u.column === n)),
          (c = e.find((u) => u.column === n + 1)),
          (l = e.find((u) => u.column === n - 1)))
        : (d = e[n]);
    d &&
      (o ||
        ((c = $e(d, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !c && (c = e[0]),
        (l = De(d, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !l === 0 && (l = e[e.length - 1]))),
      e.forEach((u) => {
        ne(u, u === d, t.slideActiveClass),
          ne(u, u === c, t.slideNextClass),
          ne(u, u === l, t.slidePrevClass);
      }),
      i.emitSlidesClasses();
  }
  const Z = (i, e) => {
      if (!i || i.destroyed || !i.params) return;
      const t = () =>
          i.isElement ? "swiper-slide" : `.${i.params.slideClass}`,
        s = e.closest(t());
      if (s) {
        let n = s.querySelector(`.${i.params.lazyPreloaderClass}`);
        !n &&
          i.isElement &&
          (s.shadowRoot
            ? (n = s.shadowRoot.querySelector(
                `.${i.params.lazyPreloaderClass}`
              ))
            : requestAnimationFrame(() => {
                s.shadowRoot &&
                  ((n = s.shadowRoot.querySelector(
                    `.${i.params.lazyPreloaderClass}`
                  )),
                  n && n.remove());
              })),
          n && n.remove();
      }
    },
    ae = (i, e) => {
      if (!i.slides[e]) return;
      const t = i.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading");
    },
    oe = (i) => {
      if (!i || i.destroyed || !i.params) return;
      let e = i.params.lazyPreloadPrevNext;
      const t = i.slides.length;
      if (!t || !e || e < 0) return;
      e = Math.min(e, t);
      const s =
          i.params.slidesPerView === "auto"
            ? i.slidesPerViewDynamic()
            : Math.ceil(i.params.slidesPerView),
        n = i.activeIndex;
      if (i.params.grid && i.params.grid.rows > 1) {
        const o = n,
          a = [o - e];
        a.push(...Array.from({ length: e }).map((d, l) => o + s + l)),
          i.slides.forEach((d, l) => {
            a.includes(d.column) && ae(i, l);
          });
        return;
      }
      const r = n + s - 1;
      if (i.params.rewind || i.params.loop)
        for (let o = n - e; o <= r + e; o += 1) {
          const a = ((o % t) + t) % t;
          (a < n || a > r) && ae(i, a);
        }
      else
        for (let o = Math.max(n - e, 0); o <= Math.min(r + e, t - 1); o += 1)
          o !== n && (o > r || o < n) && ae(i, o);
    };
  function Ke(i) {
    const { slidesGrid: e, params: t } = i,
      s = i.rtlTranslate ? i.translate : -i.translate;
    let n;
    for (let r = 0; r < e.length; r += 1)
      typeof e[r + 1] < "u"
        ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2
          ? (n = r)
          : s >= e[r] && s < e[r + 1] && (n = r + 1)
        : s >= e[r] && (n = r);
    return t.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
  }
  function Je(i) {
    const e = this,
      t = e.rtlTranslate ? e.translate : -e.translate,
      {
        snapGrid: s,
        params: n,
        activeIndex: r,
        realIndex: o,
        snapIndex: a,
      } = e;
    let d = i,
      l;
    const c = (h) => {
      let m = h - e.virtual.slidesBefore;
      return (
        m < 0 && (m = e.virtual.slides.length + m),
        m >= e.virtual.slides.length && (m -= e.virtual.slides.length),
        m
      );
    };
    if ((typeof d > "u" && (d = Ke(e)), s.indexOf(t) >= 0)) l = s.indexOf(t);
    else {
      const h = Math.min(n.slidesPerGroupSkip, d);
      l = h + Math.floor((d - h) / n.slidesPerGroup);
    }
    if ((l >= s.length && (l = s.length - 1), d === r && !e.params.loop)) {
      l !== a && ((e.snapIndex = l), e.emit("snapIndexChange"));
      return;
    }
    if (d === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = c(d);
      return;
    }
    const u = e.grid && n.grid && n.grid.rows > 1;
    let g;
    if (e.virtual && n.virtual.enabled && n.loop) g = c(d);
    else if (u) {
      const h = e.slides.find((w) => w.column === d);
      let m = parseInt(h.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(m) && (m = Math.max(e.slides.indexOf(h), 0)),
        (g = Math.floor(m / n.grid.rows));
    } else if (e.slides[d]) {
      const h = e.slides[d].getAttribute("data-swiper-slide-index");
      h ? (g = parseInt(h, 10)) : (g = d);
    } else g = d;
    Object.assign(e, {
      previousSnapIndex: a,
      snapIndex: l,
      previousRealIndex: o,
      realIndex: g,
      previousIndex: r,
      activeIndex: d,
    }),
      e.initialized && oe(e),
      e.emit("activeIndexChange"),
      e.emit("snapIndexChange"),
      (e.initialized || e.params.runCallbacksOnInit) &&
        (o !== g && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function et(i, e) {
    const t = this,
      s = t.params;
    let n = i.closest(`.${s.slideClass}, swiper-slide`);
    !n &&
      t.isElement &&
      e &&
      e.length > 1 &&
      e.includes(i) &&
      [...e.slice(e.indexOf(i) + 1, e.length)].forEach((a) => {
        !n &&
          a.matches &&
          a.matches(`.${s.slideClass}, swiper-slide`) &&
          (n = a);
      });
    let r = !1,
      o;
    if (n) {
      for (let a = 0; a < t.slides.length; a += 1)
        if (t.slides[a] === n) {
          (r = !0), (o = a);
          break;
        }
    }
    if (n && r)
      (t.clickedSlide = n),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              n.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = o);
    else {
      (t.clickedSlide = void 0), (t.clickedIndex = void 0);
      return;
    }
    s.slideToClickedSlide &&
      t.clickedIndex !== void 0 &&
      t.clickedIndex !== t.activeIndex &&
      t.slideToClickedSlide();
  }
  var tt = {
    updateSize: qe,
    updateSlides: je,
    updateAutoHeight: We,
    updateSlidesOffset: Xe,
    updateSlidesProgress: Qe,
    updateProgress: Ue,
    updateSlidesClasses: Ze,
    updateActiveIndex: Je,
    updateClickedSlide: et,
  };
  function it(i) {
    i === void 0 && (i = this.isHorizontal() ? "x" : "y");
    const e = this,
      { params: t, rtlTranslate: s, translate: n, wrapperEl: r } = e;
    if (t.virtualTranslate) return s ? -n : n;
    if (t.cssMode) return n;
    let o = ke(r, i);
    return (o += e.cssOverflowAdjustment()), s && (o = -o), o || 0;
  }
  function st(i, e) {
    const t = this,
      { rtlTranslate: s, params: n, wrapperEl: r, progress: o } = t;
    let a = 0,
      d = 0;
    const l = 0;
    t.isHorizontal() ? (a = s ? -i : i) : (d = i),
      n.roundLengths && ((a = Math.floor(a)), (d = Math.floor(d))),
      (t.previousTranslate = t.translate),
      (t.translate = t.isHorizontal() ? a : d),
      n.cssMode
        ? (r[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
            ? -a
            : -d)
        : n.virtualTranslate ||
          (t.isHorizontal()
            ? (a -= t.cssOverflowAdjustment())
            : (d -= t.cssOverflowAdjustment()),
          (r.style.transform = `translate3d(${a}px, ${d}px, ${l}px)`));
    let c;
    const u = t.maxTranslate() - t.minTranslate();
    u === 0 ? (c = 0) : (c = (i - t.minTranslate()) / u),
      c !== o && t.updateProgress(i),
      t.emit("setTranslate", t.translate, e);
  }
  function rt() {
    return -this.snapGrid[0];
  }
  function nt() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function at(i, e, t, s, n) {
    i === void 0 && (i = 0),
      e === void 0 && (e = this.params.speed),
      t === void 0 && (t = !0),
      s === void 0 && (s = !0);
    const r = this,
      { params: o, wrapperEl: a } = r;
    if (r.animating && o.preventInteractionOnTransition) return !1;
    const d = r.minTranslate(),
      l = r.maxTranslate();
    let c;
    if (
      (s && i > d ? (c = d) : s && i < l ? (c = l) : (c = i),
      r.updateProgress(c),
      o.cssMode)
    ) {
      const u = r.isHorizontal();
      if (e === 0) a[u ? "scrollLeft" : "scrollTop"] = -c;
      else {
        if (!r.support.smoothScroll)
          return (
            ue({ swiper: r, targetPosition: -c, side: u ? "left" : "top" }), !0
          );
        a.scrollTo({ [u ? "left" : "top"]: -c, behavior: "smooth" });
      }
      return !0;
    }
    return (
      e === 0
        ? (r.setTransition(0),
          r.setTranslate(c),
          t && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd")))
        : (r.setTransition(e),
          r.setTranslate(c),
          t &&
            (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")),
          r.animating ||
            ((r.animating = !0),
            r.onTranslateToWrapperTransitionEnd ||
              (r.onTranslateToWrapperTransitionEnd = function (g) {
                !r ||
                  r.destroyed ||
                  (g.target === this &&
                    (r.wrapperEl.removeEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    (r.animating = !1),
                    t && r.emit("transitionEnd")));
              }),
            r.wrapperEl.addEventListener(
              "transitionend",
              r.onTranslateToWrapperTransitionEnd
            ))),
      !0
    );
  }
  var ot = {
    getTranslate: it,
    setTranslate: st,
    minTranslate: rt,
    maxTranslate: nt,
    translateTo: at,
  };
  function lt(i, e) {
    const t = this;
    t.params.cssMode ||
      ((t.wrapperEl.style.transitionDuration = `${i}ms`),
      (t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : "")),
      t.emit("setTransition", i, e);
  }
  function Se(i) {
    let { swiper: e, runCallbacks: t, direction: s, step: n } = i;
    const { activeIndex: r, previousIndex: o } = e;
    let a = s;
    a || (r > o ? (a = "next") : r < o ? (a = "prev") : (a = "reset")),
      e.emit(`transition${n}`),
      t && a === "reset"
        ? e.emit(`slideResetTransition${n}`)
        : t &&
          r !== o &&
          (e.emit(`slideChangeTransition${n}`),
          a === "next"
            ? e.emit(`slideNextTransition${n}`)
            : e.emit(`slidePrevTransition${n}`));
  }
  function dt(i, e) {
    i === void 0 && (i = !0);
    const t = this,
      { params: s } = t;
    s.cssMode ||
      (s.autoHeight && t.updateAutoHeight(),
      Se({ swiper: t, runCallbacks: i, direction: e, step: "Start" }));
  }
  function pt(i, e) {
    i === void 0 && (i = !0);
    const t = this,
      { params: s } = t;
    (t.animating = !1),
      !s.cssMode &&
        (t.setTransition(0),
        Se({ swiper: t, runCallbacks: i, direction: e, step: "End" }));
  }
  var ct = { setTransition: lt, transitionStart: dt, transitionEnd: pt };
  function ft(i, e, t, s, n) {
    i === void 0 && (i = 0),
      t === void 0 && (t = !0),
      typeof i == "string" && (i = parseInt(i, 10));
    const r = this;
    let o = i;
    o < 0 && (o = 0);
    const {
      params: a,
      snapGrid: d,
      slidesGrid: l,
      previousIndex: c,
      activeIndex: u,
      rtlTranslate: g,
      wrapperEl: h,
      enabled: m,
    } = r;
    if (
      (!m && !s && !n) ||
      r.destroyed ||
      (r.animating && a.preventInteractionOnTransition)
    )
      return !1;
    typeof e > "u" && (e = r.params.speed);
    const w = Math.min(r.params.slidesPerGroupSkip, o);
    let A = w + Math.floor((o - w) / r.params.slidesPerGroup);
    A >= d.length && (A = d.length - 1);
    const b = -d[A];
    if (a.normalizeSlideIndex)
      for (let C = 0; C < l.length; C += 1) {
        const E = -Math.floor(b * 100),
          I = Math.floor(l[C] * 100),
          y = Math.floor(l[C + 1] * 100);
        typeof l[C + 1] < "u"
          ? E >= I && E < y - (y - I) / 2
            ? (o = C)
            : E >= I && E < y && (o = C + 1)
          : E >= I && (o = C);
      }
    if (
      r.initialized &&
      o !== u &&
      ((!r.allowSlideNext &&
        (g
          ? b > r.translate && b > r.minTranslate()
          : b < r.translate && b < r.minTranslate())) ||
        (!r.allowSlidePrev &&
          b > r.translate &&
          b > r.maxTranslate() &&
          (u || 0) !== o))
    )
      return !1;
    o !== (c || 0) && t && r.emit("beforeSlideChangeStart"),
      r.updateProgress(b);
    let p;
    o > u ? (p = "next") : o < u ? (p = "prev") : (p = "reset");
    const f = r.virtual && r.params.virtual.enabled;
    if (!(f && n) && ((g && -b === r.translate) || (!g && b === r.translate)))
      return (
        r.updateActiveIndex(o),
        a.autoHeight && r.updateAutoHeight(),
        r.updateSlidesClasses(),
        a.effect !== "slide" && r.setTranslate(b),
        p !== "reset" && (r.transitionStart(t, p), r.transitionEnd(t, p)),
        !1
      );
    if (a.cssMode) {
      const C = r.isHorizontal(),
        E = g ? b : -b;
      if (e === 0)
        f &&
          ((r.wrapperEl.style.scrollSnapType = "none"),
          (r._immediateVirtual = !0)),
          f && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
            ? ((r._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                h[C ? "scrollLeft" : "scrollTop"] = E;
              }))
            : (h[C ? "scrollLeft" : "scrollTop"] = E),
          f &&
            requestAnimationFrame(() => {
              (r.wrapperEl.style.scrollSnapType = ""),
                (r._immediateVirtual = !1);
            });
      else {
        if (!r.support.smoothScroll)
          return (
            ue({ swiper: r, targetPosition: E, side: C ? "left" : "top" }), !0
          );
        h.scrollTo({ [C ? "left" : "top"]: E, behavior: "smooth" });
      }
      return !0;
    }
    const T = ve().isSafari;
    return (
      f && !n && T && r.isElement && r.virtual.update(!1, !1, o),
      r.setTransition(e),
      r.setTranslate(b),
      r.updateActiveIndex(o),
      r.updateSlidesClasses(),
      r.emit("beforeTransitionStart", e, s),
      r.transitionStart(t, p),
      e === 0
        ? r.transitionEnd(t, p)
        : r.animating ||
          ((r.animating = !0),
          r.onSlideToWrapperTransitionEnd ||
            (r.onSlideToWrapperTransitionEnd = function (E) {
              !r ||
                r.destroyed ||
                (E.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(t, p)));
            }),
          r.wrapperEl.addEventListener(
            "transitionend",
            r.onSlideToWrapperTransitionEnd
          )),
      !0
    );
  }
  function ut(i, e, t, s) {
    i === void 0 && (i = 0),
      t === void 0 && (t = !0),
      typeof i == "string" && (i = parseInt(i, 10));
    const n = this;
    if (n.destroyed) return;
    typeof e > "u" && (e = n.params.speed);
    const r = n.grid && n.params.grid && n.params.grid.rows > 1;
    let o = i;
    if (n.params.loop)
      if (n.virtual && n.params.virtual.enabled) o = o + n.virtual.slidesBefore;
      else {
        let a;
        if (r) {
          const g = o * n.params.grid.rows;
          a = n.slides.find(
            (h) => h.getAttribute("data-swiper-slide-index") * 1 === g
          ).column;
        } else a = n.getSlideIndexByData(o);
        const d = r
            ? Math.ceil(n.slides.length / n.params.grid.rows)
            : n.slides.length,
          { centeredSlides: l } = n.params;
        let c = n.params.slidesPerView;
        c === "auto"
          ? (c = n.slidesPerViewDynamic())
          : ((c = Math.ceil(parseFloat(n.params.slidesPerView, 10))),
            l && c % 2 === 0 && (c = c + 1));
        let u = d - a < c;
        if (
          (l && (u = u || a < Math.ceil(c / 2)),
          s && l && n.params.slidesPerView !== "auto" && !r && (u = !1),
          u)
        ) {
          const g = l
            ? a < n.activeIndex
              ? "prev"
              : "next"
            : a - n.activeIndex - 1 < n.params.slidesPerView
            ? "next"
            : "prev";
          n.loopFix({
            direction: g,
            slideTo: !0,
            activeSlideIndex: g === "next" ? a + 1 : a - d + 1,
            slideRealIndex: g === "next" ? n.realIndex : void 0,
          });
        }
        if (r) {
          const g = o * n.params.grid.rows;
          o = n.slides.find(
            (h) => h.getAttribute("data-swiper-slide-index") * 1 === g
          ).column;
        } else o = n.getSlideIndexByData(o);
      }
    return (
      requestAnimationFrame(() => {
        n.slideTo(o, e, t, s);
      }),
      n
    );
  }
  function mt(i, e, t) {
    e === void 0 && (e = !0);
    const s = this,
      { enabled: n, params: r, animating: o } = s;
    if (!n || s.destroyed) return s;
    typeof i > "u" && (i = s.params.speed);
    let a = r.slidesPerGroup;
    r.slidesPerView === "auto" &&
      r.slidesPerGroup === 1 &&
      r.slidesPerGroupAuto &&
      (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const d = s.activeIndex < r.slidesPerGroupSkip ? 1 : a,
      l = s.virtual && r.virtual.enabled;
    if (r.loop) {
      if (o && !l && r.loopPreventsSliding) return !1;
      if (
        (s.loopFix({ direction: "next" }),
        (s._clientLeft = s.wrapperEl.clientLeft),
        s.activeIndex === s.slides.length - 1 && r.cssMode)
      )
        return (
          requestAnimationFrame(() => {
            s.slideTo(s.activeIndex + d, i, e, t);
          }),
          !0
        );
    }
    return r.rewind && s.isEnd
      ? s.slideTo(0, i, e, t)
      : s.slideTo(s.activeIndex + d, i, e, t);
  }
  function gt(i, e, t) {
    e === void 0 && (e = !0);
    const s = this,
      {
        params: n,
        snapGrid: r,
        slidesGrid: o,
        rtlTranslate: a,
        enabled: d,
        animating: l,
      } = s;
    if (!d || s.destroyed) return s;
    typeof i > "u" && (i = s.params.speed);
    const c = s.virtual && n.virtual.enabled;
    if (n.loop) {
      if (l && !c && n.loopPreventsSliding) return !1;
      s.loopFix({ direction: "prev" }),
        (s._clientLeft = s.wrapperEl.clientLeft);
    }
    const u = a ? s.translate : -s.translate;
    function g(p) {
      return p < 0 ? -Math.floor(Math.abs(p)) : Math.floor(p);
    }
    const h = g(u),
      m = r.map((p) => g(p)),
      w = n.freeMode && n.freeMode.enabled;
    let A = r[m.indexOf(h) - 1];
    if (typeof A > "u" && (n.cssMode || w)) {
      let p;
      r.forEach((f, v) => {
        h >= f && (p = v);
      }),
        typeof p < "u" && (A = w ? r[p] : r[p > 0 ? p - 1 : p]);
    }
    let b = 0;
    if (
      (typeof A < "u" &&
        ((b = o.indexOf(A)),
        b < 0 && (b = s.activeIndex - 1),
        n.slidesPerView === "auto" &&
          n.slidesPerGroup === 1 &&
          n.slidesPerGroupAuto &&
          ((b = b - s.slidesPerViewDynamic("previous", !0) + 1),
          (b = Math.max(b, 0)))),
      n.rewind && s.isBeginning)
    ) {
      const p =
        s.params.virtual && s.params.virtual.enabled && s.virtual
          ? s.virtual.slides.length - 1
          : s.slides.length - 1;
      return s.slideTo(p, i, e, t);
    } else if (n.loop && s.activeIndex === 0 && n.cssMode)
      return (
        requestAnimationFrame(() => {
          s.slideTo(b, i, e, t);
        }),
        !0
      );
    return s.slideTo(b, i, e, t);
  }
  function ht(i, e, t) {
    e === void 0 && (e = !0);
    const s = this;
    if (!s.destroyed)
      return (
        typeof i > "u" && (i = s.params.speed),
        s.slideTo(s.activeIndex, i, e, t)
      );
  }
  function wt(i, e, t, s) {
    e === void 0 && (e = !0), s === void 0 && (s = 0.5);
    const n = this;
    if (n.destroyed) return;
    typeof i > "u" && (i = n.params.speed);
    let r = n.activeIndex;
    const o = Math.min(n.params.slidesPerGroupSkip, r),
      a = o + Math.floor((r - o) / n.params.slidesPerGroup),
      d = n.rtlTranslate ? n.translate : -n.translate;
    if (d >= n.snapGrid[a]) {
      const l = n.snapGrid[a],
        c = n.snapGrid[a + 1];
      d - l > (c - l) * s && (r += n.params.slidesPerGroup);
    } else {
      const l = n.snapGrid[a - 1],
        c = n.snapGrid[a];
      d - l <= (c - l) * s && (r -= n.params.slidesPerGroup);
    }
    return (
      (r = Math.max(r, 0)),
      (r = Math.min(r, n.slidesGrid.length - 1)),
      n.slideTo(r, i, e, t)
    );
  }
  function vt() {
    const i = this;
    if (i.destroyed) return;
    const { params: e, slidesEl: t } = i,
      s =
        e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
    let n = i.clickedIndex,
      r;
    const o = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
      if (i.animating) return;
      (r = parseInt(
        i.clickedSlide.getAttribute("data-swiper-slide-index"),
        10
      )),
        e.centeredSlides
          ? n < i.loopedSlides - s / 2 ||
            n > i.slides.length - i.loopedSlides + s / 2
            ? (i.loopFix(),
              (n = i.getSlideIndex(
                F(t, `${o}[data-swiper-slide-index="${r}"]`)[0]
              )),
              J(() => {
                i.slideTo(n);
              }))
            : i.slideTo(n)
          : n > i.slides.length - s
          ? (i.loopFix(),
            (n = i.getSlideIndex(
              F(t, `${o}[data-swiper-slide-index="${r}"]`)[0]
            )),
            J(() => {
              i.slideTo(n);
            }))
          : i.slideTo(n);
    } else i.slideTo(n);
  }
  var bt = {
    slideTo: ft,
    slideToLoop: ut,
    slideNext: mt,
    slidePrev: gt,
    slideReset: ht,
    slideToClosest: wt,
    slideToClickedSlide: vt,
  };
  function St(i, e) {
    const t = this,
      { params: s, slidesEl: n } = t;
    if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
    const r = () => {
        F(n, `.${s.slideClass}, swiper-slide`).forEach((g, h) => {
          g.setAttribute("data-swiper-slide-index", h);
        });
      },
      o = t.grid && s.grid && s.grid.rows > 1,
      a = s.slidesPerGroup * (o ? s.grid.rows : 1),
      d = t.slides.length % a !== 0,
      l = o && t.slides.length % s.grid.rows !== 0,
      c = (u) => {
        for (let g = 0; g < u; g += 1) {
          const h = t.isElement
            ? _("swiper-slide", [s.slideBlankClass])
            : _("div", [s.slideClass, s.slideBlankClass]);
          t.slidesEl.append(h);
        }
      };
    if (d) {
      if (s.loopAddBlankSlides) {
        const u = a - (t.slides.length % a);
        c(u), t.recalcSlides(), t.updateSlides();
      } else
        Q(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      r();
    } else if (l) {
      if (s.loopAddBlankSlides) {
        const u = s.grid.rows - (t.slides.length % s.grid.rows);
        c(u), t.recalcSlides(), t.updateSlides();
      } else
        Q(
          "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      r();
    } else r();
    t.loopFix({
      slideRealIndex: i,
      direction: s.centeredSlides ? void 0 : "next",
      initial: e,
    });
  }
  function At(i) {
    let {
      slideRealIndex: e,
      slideTo: t = !0,
      direction: s,
      setTranslate: n,
      activeSlideIndex: r,
      initial: o,
      byController: a,
      byMousewheel: d,
    } = i === void 0 ? {} : i;
    const l = this;
    if (!l.params.loop) return;
    l.emit("beforeLoopFix");
    const {
        slides: c,
        allowSlidePrev: u,
        allowSlideNext: g,
        slidesEl: h,
        params: m,
      } = l,
      { centeredSlides: w, initialSlide: A } = m;
    if (
      ((l.allowSlidePrev = !0),
      (l.allowSlideNext = !0),
      l.virtual && m.virtual.enabled)
    ) {
      t &&
        (!m.centeredSlides && l.snapIndex === 0
          ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
          : m.centeredSlides && l.snapIndex < m.slidesPerView
          ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
          : l.snapIndex === l.snapGrid.length - 1 &&
            l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
        (l.allowSlidePrev = u),
        (l.allowSlideNext = g),
        l.emit("loopFix");
      return;
    }
    let b = m.slidesPerView;
    b === "auto"
      ? (b = l.slidesPerViewDynamic())
      : ((b = Math.ceil(parseFloat(m.slidesPerView, 10))),
        w && b % 2 === 0 && (b = b + 1));
    const p = m.slidesPerGroupAuto ? b : m.slidesPerGroup;
    let f = p;
    f % p !== 0 && (f += p - (f % p)),
      (f += m.loopAdditionalSlides),
      (l.loopedSlides = f);
    const v = l.grid && m.grid && m.grid.rows > 1;
    c.length < b + f || (l.params.effect === "cards" && c.length < b + f * 2)
      ? Q(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : v &&
        m.grid.fill === "row" &&
        Q(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const S = [],
      T = [],
      C = v ? Math.ceil(c.length / m.grid.rows) : c.length,
      E = o && C - A < b && !w;
    let I = E ? A : l.activeIndex;
    typeof r > "u"
      ? (r = l.getSlideIndex(
          c.find((P) => P.classList.contains(m.slideActiveClass))
        ))
      : (I = r);
    const y = s === "next" || !s,
      x = s === "prev" || !s;
    let M = 0,
      L = 0;
    const k = (v ? c[r].column : r) + (w && typeof n > "u" ? -b / 2 + 0.5 : 0);
    if (k < f) {
      M = Math.max(f - k, p);
      for (let P = 0; P < f - k; P += 1) {
        const B = P - Math.floor(P / C) * C;
        if (v) {
          const D = C - B - 1;
          for (let N = c.length - 1; N >= 0; N -= 1)
            c[N].column === D && S.push(N);
        } else S.push(C - B - 1);
      }
    } else if (k + b > C - f) {
      (L = Math.max(k - (C - f * 2), p)), E && (L = Math.max(L, b - C + A + 1));
      for (let P = 0; P < L; P += 1) {
        const B = P - Math.floor(P / C) * C;
        v
          ? c.forEach((D, N) => {
              D.column === B && T.push(N);
            })
          : T.push(B);
      }
    }
    if (
      ((l.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        l.__preventObserver__ = !1;
      }),
      l.params.effect === "cards" &&
        c.length < b + f * 2 &&
        (T.includes(r) && T.splice(T.indexOf(r), 1),
        S.includes(r) && S.splice(S.indexOf(r), 1)),
      x &&
        S.forEach((P) => {
          (c[P].swiperLoopMoveDOM = !0),
            h.prepend(c[P]),
            (c[P].swiperLoopMoveDOM = !1);
        }),
      y &&
        T.forEach((P) => {
          (c[P].swiperLoopMoveDOM = !0),
            h.append(c[P]),
            (c[P].swiperLoopMoveDOM = !1);
        }),
      l.recalcSlides(),
      m.slidesPerView === "auto"
        ? l.updateSlides()
        : v &&
          ((S.length > 0 && x) || (T.length > 0 && y)) &&
          l.slides.forEach((P, B) => {
            l.grid.updateSlide(B, P, l.slides);
          }),
      m.watchSlidesProgress && l.updateSlidesOffset(),
      t)
    ) {
      if (S.length > 0 && x) {
        if (typeof e > "u") {
          const P = l.slidesGrid[I],
            D = l.slidesGrid[I + M] - P;
          d
            ? l.setTranslate(l.translate - D)
            : (l.slideTo(I + Math.ceil(M), 0, !1, !0),
              n &&
                ((l.touchEventsData.startTranslate =
                  l.touchEventsData.startTranslate - D),
                (l.touchEventsData.currentTranslate =
                  l.touchEventsData.currentTranslate - D)));
        } else if (n) {
          const P = v ? S.length / m.grid.rows : S.length;
          l.slideTo(l.activeIndex + P, 0, !1, !0),
            (l.touchEventsData.currentTranslate = l.translate);
        }
      } else if (T.length > 0 && y)
        if (typeof e > "u") {
          const P = l.slidesGrid[I],
            D = l.slidesGrid[I - L] - P;
          d
            ? l.setTranslate(l.translate - D)
            : (l.slideTo(I - L, 0, !1, !0),
              n &&
                ((l.touchEventsData.startTranslate =
                  l.touchEventsData.startTranslate - D),
                (l.touchEventsData.currentTranslate =
                  l.touchEventsData.currentTranslate - D)));
        } else {
          const P = v ? T.length / m.grid.rows : T.length;
          l.slideTo(l.activeIndex - P, 0, !1, !0);
        }
    }
    if (
      ((l.allowSlidePrev = u),
      (l.allowSlideNext = g),
      l.controller && l.controller.control && !a)
    ) {
      const P = {
        slideRealIndex: e,
        direction: s,
        setTranslate: n,
        activeSlideIndex: r,
        byController: !0,
      };
      Array.isArray(l.controller.control)
        ? l.controller.control.forEach((B) => {
            !B.destroyed &&
              B.params.loop &&
              B.loopFix({
                ...P,
                slideTo: B.params.slidesPerView === m.slidesPerView ? t : !1,
              });
          })
        : l.controller.control instanceof l.constructor &&
          l.controller.control.params.loop &&
          l.controller.control.loopFix({
            ...P,
            slideTo:
              l.controller.control.params.slidesPerView === m.slidesPerView
                ? t
                : !1,
          });
    }
    l.emit("loopFix");
  }
  function yt() {
    const i = this,
      { params: e, slidesEl: t } = i;
    if (!e.loop || !t || (i.virtual && i.params.virtual.enabled)) return;
    i.recalcSlides();
    const s = [];
    i.slides.forEach((n) => {
      const r =
        typeof n.swiperSlideIndex > "u"
          ? n.getAttribute("data-swiper-slide-index") * 1
          : n.swiperSlideIndex;
      s[r] = n;
    }),
      i.slides.forEach((n) => {
        n.removeAttribute("data-swiper-slide-index");
      }),
      s.forEach((n) => {
        t.append(n);
      }),
      i.recalcSlides(),
      i.slideTo(i.realIndex, 0);
  }
  var xt = { loopCreate: St, loopFix: At, loopDestroy: yt };
  function Tt(i) {
    const e = this;
    if (
      !e.params.simulateTouch ||
      (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode
    )
      return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
      (t.style.cursor = "move"),
      (t.style.cursor = i ? "grabbing" : "grab"),
      e.isElement &&
        requestAnimationFrame(() => {
          e.__preventObserver__ = !1;
        });
  }
  function Et() {
    const i = this;
    (i.params.watchOverflow && i.isLocked) ||
      i.params.cssMode ||
      (i.isElement && (i.__preventObserver__ = !0),
      (i[
        i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = ""),
      i.isElement &&
        requestAnimationFrame(() => {
          i.__preventObserver__ = !1;
        }));
  }
  var Ct = { setGrabCursor: Tt, unsetGrabCursor: Et };
  function Mt(i, e) {
    e === void 0 && (e = this);
    function t(s) {
      if (!s || s === R() || s === G()) return null;
      s.assignedSlot && (s = s.assignedSlot);
      const n = s.closest(i);
      return !n && !s.getRootNode ? null : n || t(s.getRootNode().host);
    }
    return t(e);
  }
  function Ae(i, e, t) {
    const s = G(),
      { params: n } = i,
      r = n.edgeSwipeDetection,
      o = n.edgeSwipeThreshold;
    return r && (t <= o || t >= s.innerWidth - o)
      ? r === "prevent"
        ? (e.preventDefault(), !0)
        : !1
      : !0;
  }
  function Pt(i) {
    const e = this,
      t = R();
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    const n = e.touchEventsData;
    if (s.type === "pointerdown") {
      if (n.pointerId !== null && n.pointerId !== s.pointerId) return;
      n.pointerId = s.pointerId;
    } else s.type === "touchstart" && s.targetTouches.length === 1 && (n.touchId = s.targetTouches[0].identifier);
    if (s.type === "touchstart") {
      Ae(e, s, s.targetTouches[0].pageX);
      return;
    }
    const { params: r, touches: o, enabled: a } = e;
    if (
      !a ||
      (!r.simulateTouch && s.pointerType === "mouse") ||
      (e.animating && r.preventInteractionOnTransition)
    )
      return;
    !e.animating && r.cssMode && r.loop && e.loopFix();
    let d = s.target;
    if (
      (r.touchEventsTarget === "wrapper" && !Ge(d, e.wrapperEl)) ||
      ("which" in s && s.which === 3) ||
      ("button" in s && s.button > 0) ||
      (n.isTouched && n.isMoved)
    )
      return;
    const l = !!r.noSwipingClass && r.noSwipingClass !== "",
      c = s.composedPath ? s.composedPath() : s.path;
    l && s.target && s.target.shadowRoot && c && (d = c[0]);
    const u = r.noSwipingSelector
        ? r.noSwipingSelector
        : `.${r.noSwipingClass}`,
      g = !!(s.target && s.target.shadowRoot);
    if (r.noSwiping && (g ? Mt(u, d) : d.closest(u))) {
      e.allowClick = !0;
      return;
    }
    if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
    (o.currentX = s.pageX), (o.currentY = s.pageY);
    const h = o.currentX,
      m = o.currentY;
    if (!Ae(e, s, h)) return;
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (o.startX = h),
      (o.startY = m),
      (n.touchStartTime = j()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      r.threshold > 0 && (n.allowThresholdMove = !1);
    let w = !0;
    d.matches(n.focusableElements) &&
      ((w = !1), d.nodeName === "SELECT" && (n.isTouched = !1)),
      t.activeElement &&
        t.activeElement.matches(n.focusableElements) &&
        t.activeElement !== d &&
        (s.pointerType === "mouse" ||
          (s.pointerType !== "mouse" && !d.matches(n.focusableElements))) &&
        t.activeElement.blur();
    const A = w && e.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || A) &&
      !d.isContentEditable &&
      s.preventDefault(),
      r.freeMode &&
        r.freeMode.enabled &&
        e.freeMode &&
        e.animating &&
        !r.cssMode &&
        e.freeMode.onTouchStart(),
      e.emit("touchStart", s);
  }
  function It(i) {
    const e = R(),
      t = this,
      s = t.touchEventsData,
      { params: n, touches: r, rtlTranslate: o, enabled: a } = t;
    if (!a || (!n.simulateTouch && i.pointerType === "mouse")) return;
    let d = i;
    if (
      (d.originalEvent && (d = d.originalEvent),
      d.type === "pointermove" &&
        (s.touchId !== null || d.pointerId !== s.pointerId))
    )
      return;
    let l;
    if (d.type === "touchmove") {
      if (
        ((l = [...d.changedTouches].find((S) => S.identifier === s.touchId)),
        !l || l.identifier !== s.touchId)
      )
        return;
    } else l = d;
    if (!s.isTouched) {
      s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", d);
      return;
    }
    const c = l.pageX,
      u = l.pageY;
    if (d.preventedByNestedSwiper) {
      (r.startX = c), (r.startY = u);
      return;
    }
    if (!t.allowTouchMove) {
      d.target.matches(s.focusableElements) || (t.allowClick = !1),
        s.isTouched &&
          (Object.assign(r, { startX: c, startY: u, currentX: c, currentY: u }),
          (s.touchStartTime = j()));
      return;
    }
    if (n.touchReleaseOnEdges && !n.loop)
      if (t.isVertical()) {
        if (
          (u < r.startY && t.translate <= t.maxTranslate()) ||
          (u > r.startY && t.translate >= t.minTranslate())
        ) {
          (s.isTouched = !1), (s.isMoved = !1);
          return;
        }
      } else {
        if (
          o &&
          ((c > r.startX && -t.translate <= t.maxTranslate()) ||
            (c < r.startX && -t.translate >= t.minTranslate()))
        )
          return;
        if (
          !o &&
          ((c < r.startX && t.translate <= t.maxTranslate()) ||
            (c > r.startX && t.translate >= t.minTranslate()))
        )
          return;
      }
    if (
      (e.activeElement &&
        e.activeElement.matches(s.focusableElements) &&
        e.activeElement !== d.target &&
        d.pointerType !== "mouse" &&
        e.activeElement.blur(),
      e.activeElement &&
        d.target === e.activeElement &&
        d.target.matches(s.focusableElements))
    ) {
      (s.isMoved = !0), (t.allowClick = !1);
      return;
    }
    s.allowTouchCallbacks && t.emit("touchMove", d),
      (r.previousX = r.currentX),
      (r.previousY = r.currentY),
      (r.currentX = c),
      (r.currentY = u);
    const g = r.currentX - r.startX,
      h = r.currentY - r.startY;
    if (t.params.threshold && Math.sqrt(g ** 2 + h ** 2) < t.params.threshold)
      return;
    if (typeof s.isScrolling > "u") {
      let S;
      (t.isHorizontal() && r.currentY === r.startY) ||
      (t.isVertical() && r.currentX === r.startX)
        ? (s.isScrolling = !1)
        : g * g + h * h >= 25 &&
          ((S = (Math.atan2(Math.abs(h), Math.abs(g)) * 180) / Math.PI),
          (s.isScrolling = t.isHorizontal()
            ? S > n.touchAngle
            : 90 - S > n.touchAngle));
    }
    if (
      (s.isScrolling && t.emit("touchMoveOpposite", d),
      typeof s.startMoving > "u" &&
        (r.currentX !== r.startX || r.currentY !== r.startY) &&
        (s.startMoving = !0),
      s.isScrolling ||
        (d.type === "touchmove" && s.preventTouchMoveFromPointerMove))
    ) {
      s.isTouched = !1;
      return;
    }
    if (!s.startMoving) return;
    (t.allowClick = !1),
      !n.cssMode && d.cancelable && d.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && d.stopPropagation();
    let m = t.isHorizontal() ? g : h,
      w = t.isHorizontal()
        ? r.currentX - r.previousX
        : r.currentY - r.previousY;
    n.oneWayMovement &&
      ((m = Math.abs(m) * (o ? 1 : -1)), (w = Math.abs(w) * (o ? 1 : -1))),
      (r.diff = m),
      (m *= n.touchRatio),
      o && ((m = -m), (w = -w));
    const A = t.touchesDirection;
    (t.swipeDirection = m > 0 ? "prev" : "next"),
      (t.touchesDirection = w > 0 ? "prev" : "next");
    const b = t.params.loop && !n.cssMode,
      p =
        (t.touchesDirection === "next" && t.allowSlideNext) ||
        (t.touchesDirection === "prev" && t.allowSlidePrev);
    if (!s.isMoved) {
      if (
        (b && p && t.loopFix({ direction: t.swipeDirection }),
        (s.startTranslate = t.getTranslate()),
        t.setTransition(0),
        t.animating)
      ) {
        const S = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: { bySwiperTouchMove: !0 },
        });
        t.wrapperEl.dispatchEvent(S);
      }
      (s.allowMomentumBounce = !1),
        n.grabCursor &&
          (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
          t.setGrabCursor(!0),
        t.emit("sliderFirstMove", d);
    }
    if (
      (new Date().getTime(),
      n._loopSwapReset !== !1 &&
        s.isMoved &&
        s.allowThresholdMove &&
        A !== t.touchesDirection &&
        b &&
        p &&
        Math.abs(m) >= 1)
    ) {
      Object.assign(r, {
        startX: c,
        startY: u,
        currentX: c,
        currentY: u,
        startTranslate: s.currentTranslate,
      }),
        (s.loopSwapReset = !0),
        (s.startTranslate = s.currentTranslate);
      return;
    }
    t.emit("sliderMove", d),
      (s.isMoved = !0),
      (s.currentTranslate = m + s.startTranslate);
    let f = !0,
      v = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (v = 0),
      m > 0
        ? (b &&
            p &&
            s.allowThresholdMove &&
            s.currentTranslate >
              (n.centeredSlides
                ? t.minTranslate() -
                  t.slidesSizesGrid[t.activeIndex + 1] -
                  (n.slidesPerView !== "auto" &&
                  t.slides.length - n.slidesPerView >= 2
                    ? t.slidesSizesGrid[t.activeIndex + 1] +
                      t.params.spaceBetween
                    : 0) -
                  t.params.spaceBetween
                : t.minTranslate()) &&
            t.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          s.currentTranslate > t.minTranslate() &&
            ((f = !1),
            n.resistance &&
              (s.currentTranslate =
                t.minTranslate() -
                1 +
                (-t.minTranslate() + s.startTranslate + m) ** v)))
        : m < 0 &&
          (b &&
            p &&
            s.allowThresholdMove &&
            s.currentTranslate <
              (n.centeredSlides
                ? t.maxTranslate() +
                  t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                  t.params.spaceBetween +
                  (n.slidesPerView !== "auto" &&
                  t.slides.length - n.slidesPerView >= 2
                    ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                      t.params.spaceBetween
                    : 0)
                : t.maxTranslate()) &&
            t.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                t.slides.length -
                (n.slidesPerView === "auto"
                  ? t.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(n.slidesPerView, 10))),
            }),
          s.currentTranslate < t.maxTranslate() &&
            ((f = !1),
            n.resistance &&
              (s.currentTranslate =
                t.maxTranslate() +
                1 -
                (t.maxTranslate() - s.startTranslate - m) ** v))),
      f && (d.preventedByNestedSwiper = !0),
      !t.allowSlideNext &&
        t.swipeDirection === "next" &&
        s.currentTranslate < s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      !t.allowSlidePrev &&
        t.swipeDirection === "prev" &&
        s.currentTranslate > s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      !t.allowSlidePrev &&
        !t.allowSlideNext &&
        (s.currentTranslate = s.startTranslate),
      n.threshold > 0)
    )
      if (Math.abs(m) > n.threshold || s.allowThresholdMove) {
        if (!s.allowThresholdMove) {
          (s.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (s.currentTranslate = s.startTranslate),
            (r.diff = t.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY);
          return;
        }
      } else {
        s.currentTranslate = s.startTranslate;
        return;
      }
    !n.followFinger ||
      n.cssMode ||
      (((n.freeMode && n.freeMode.enabled && t.freeMode) ||
        n.watchSlidesProgress) &&
        (t.updateActiveIndex(), t.updateSlidesClasses()),
      n.freeMode &&
        n.freeMode.enabled &&
        t.freeMode &&
        t.freeMode.onTouchMove(),
      t.updateProgress(s.currentTranslate),
      t.setTranslate(s.currentTranslate));
  }
  function Lt(i) {
    const e = this,
      t = e.touchEventsData;
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    let n;
    if (s.type === "touchend" || s.type === "touchcancel") {
      if (
        ((n = [...s.changedTouches].find((S) => S.identifier === t.touchId)),
        !n || n.identifier !== t.touchId)
      )
        return;
    } else {
      if (t.touchId !== null || s.pointerId !== t.pointerId) return;
      n = s;
    }
    if (
      ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
        s.type
      ) &&
      !(
        ["pointercancel", "contextmenu"].includes(s.type) &&
        (e.browser.isSafari || e.browser.isWebView)
      )
    )
      return;
    (t.pointerId = null), (t.touchId = null);
    const {
      params: o,
      touches: a,
      rtlTranslate: d,
      slidesGrid: l,
      enabled: c,
    } = e;
    if (!c || (!o.simulateTouch && s.pointerType === "mouse")) return;
    if (
      (t.allowTouchCallbacks && e.emit("touchEnd", s),
      (t.allowTouchCallbacks = !1),
      !t.isTouched)
    ) {
      t.isMoved && o.grabCursor && e.setGrabCursor(!1),
        (t.isMoved = !1),
        (t.startMoving = !1);
      return;
    }
    o.grabCursor &&
      t.isMoved &&
      t.isTouched &&
      (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
      e.setGrabCursor(!1);
    const u = j(),
      g = u - t.touchStartTime;
    if (e.allowClick) {
      const S = s.path || (s.composedPath && s.composedPath());
      e.updateClickedSlide((S && S[0]) || s.target, S),
        e.emit("tap click", s),
        g < 300 &&
          u - t.lastClickTime < 300 &&
          e.emit("doubleTap doubleClick", s);
    }
    if (
      ((t.lastClickTime = j()),
      J(() => {
        e.destroyed || (e.allowClick = !0);
      }),
      !t.isTouched ||
        !t.isMoved ||
        !e.swipeDirection ||
        (a.diff === 0 && !t.loopSwapReset) ||
        (t.currentTranslate === t.startTranslate && !t.loopSwapReset))
    ) {
      (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
      return;
    }
    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
    let h;
    if (
      (o.followFinger
        ? (h = d ? e.translate : -e.translate)
        : (h = -t.currentTranslate),
      o.cssMode)
    )
      return;
    if (o.freeMode && o.freeMode.enabled) {
      e.freeMode.onTouchEnd({ currentPos: h });
      return;
    }
    const m = h >= -e.maxTranslate() && !e.params.loop;
    let w = 0,
      A = e.slidesSizesGrid[0];
    for (
      let S = 0;
      S < l.length;
      S += S < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
    ) {
      const T = S < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
      typeof l[S + T] < "u"
        ? (m || (h >= l[S] && h < l[S + T])) && ((w = S), (A = l[S + T] - l[S]))
        : (m || h >= l[S]) &&
          ((w = S), (A = l[l.length - 1] - l[l.length - 2]));
    }
    let b = null,
      p = null;
    o.rewind &&
      (e.isBeginning
        ? (p =
            o.virtual && o.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (b = 0));
    const f = (h - l[w]) / A,
      v = w < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (g > o.longSwipesMs) {
      if (!o.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (f >= o.longSwipesRatio
          ? e.slideTo(o.rewind && e.isEnd ? b : w + v)
          : e.slideTo(w)),
        e.swipeDirection === "prev" &&
          (f > 1 - o.longSwipesRatio
            ? e.slideTo(w + v)
            : p !== null && f < 0 && Math.abs(f) > o.longSwipesRatio
            ? e.slideTo(p)
            : e.slideTo(w));
    } else {
      if (!o.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation &&
      (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl)
        ? s.target === e.navigation.nextEl
          ? e.slideTo(w + v)
          : e.slideTo(w)
        : (e.swipeDirection === "next" && e.slideTo(b !== null ? b : w + v),
          e.swipeDirection === "prev" && e.slideTo(p !== null ? p : w));
    }
  }
  function ye() {
    const i = this,
      { params: e, el: t } = i;
    if (t && t.offsetWidth === 0) return;
    e.breakpoints && i.setBreakpoint();
    const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = i,
      o = i.virtual && i.params.virtual.enabled;
    (i.allowSlideNext = !0),
      (i.allowSlidePrev = !0),
      i.updateSize(),
      i.updateSlides(),
      i.updateSlidesClasses();
    const a = o && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
    i.isEnd &&
    !i.isBeginning &&
    !i.params.centeredSlides &&
    !a
      ? i.slideTo(i.slides.length - 1, 0, !1, !0)
      : i.params.loop && !o
      ? i.slideToLoop(i.realIndex, 0, !1, !0)
      : i.slideTo(i.activeIndex, 0, !1, !0),
      i.autoplay &&
        i.autoplay.running &&
        i.autoplay.paused &&
        (clearTimeout(i.autoplay.resizeTimeout),
        (i.autoplay.resizeTimeout = setTimeout(() => {
          i.autoplay &&
            i.autoplay.running &&
            i.autoplay.paused &&
            i.autoplay.resume();
        }, 500))),
      (i.allowSlidePrev = n),
      (i.allowSlideNext = s),
      i.params.watchOverflow && r !== i.snapGrid && i.checkOverflow();
  }
  function zt(i) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && i.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (i.stopPropagation(), i.stopImmediatePropagation())));
  }
  function kt() {
    const i = this,
      { wrapperEl: e, rtlTranslate: t, enabled: s } = i;
    if (!s) return;
    (i.previousTranslate = i.translate),
      i.isHorizontal()
        ? (i.translate = -e.scrollLeft)
        : (i.translate = -e.scrollTop),
      i.translate === 0 && (i.translate = 0),
      i.updateActiveIndex(),
      i.updateSlidesClasses();
    let n;
    const r = i.maxTranslate() - i.minTranslate();
    r === 0 ? (n = 0) : (n = (i.translate - i.minTranslate()) / r),
      n !== i.progress && i.updateProgress(t ? -i.translate : i.translate),
      i.emit("setTranslate", i.translate, !1);
  }
  function Ot(i) {
    const e = this;
    Z(e, i.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function Bt() {
    const i = this;
    i.documentTouchHandlerProceeded ||
      ((i.documentTouchHandlerProceeded = !0),
      i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"));
  }
  const xe = (i, e) => {
    const t = R(),
      { params: s, el: n, wrapperEl: r, device: o } = i,
      a = !!s.nested,
      d = e === "on" ? "addEventListener" : "removeEventListener",
      l = e;
    !n ||
      typeof n == "string" ||
      (t[d]("touchstart", i.onDocumentTouchStart, { passive: !1, capture: a }),
      n[d]("touchstart", i.onTouchStart, { passive: !1 }),
      n[d]("pointerdown", i.onTouchStart, { passive: !1 }),
      t[d]("touchmove", i.onTouchMove, { passive: !1, capture: a }),
      t[d]("pointermove", i.onTouchMove, { passive: !1, capture: a }),
      t[d]("touchend", i.onTouchEnd, { passive: !0 }),
      t[d]("pointerup", i.onTouchEnd, { passive: !0 }),
      t[d]("pointercancel", i.onTouchEnd, { passive: !0 }),
      t[d]("touchcancel", i.onTouchEnd, { passive: !0 }),
      t[d]("pointerout", i.onTouchEnd, { passive: !0 }),
      t[d]("pointerleave", i.onTouchEnd, { passive: !0 }),
      t[d]("contextmenu", i.onTouchEnd, { passive: !0 }),
      (s.preventClicks || s.preventClicksPropagation) &&
        n[d]("click", i.onClick, !0),
      s.cssMode && r[d]("scroll", i.onScroll),
      s.updateOnWindowResize
        ? i[l](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            ye,
            !0
          )
        : i[l]("observerUpdate", ye, !0),
      n[d]("load", i.onLoad, { capture: !0 }));
  };
  function Gt() {
    const i = this,
      { params: e } = i;
    (i.onTouchStart = Pt.bind(i)),
      (i.onTouchMove = It.bind(i)),
      (i.onTouchEnd = Lt.bind(i)),
      (i.onDocumentTouchStart = Bt.bind(i)),
      e.cssMode && (i.onScroll = kt.bind(i)),
      (i.onClick = zt.bind(i)),
      (i.onLoad = Ot.bind(i)),
      xe(i, "on");
  }
  function Dt() {
    xe(this, "off");
  }
  var $t = { attachEvents: Gt, detachEvents: Dt };
  const Te = (i, e) => i.grid && e.grid && e.grid.rows > 1;
  function Vt() {
    const i = this,
      { realIndex: e, initialized: t, params: s, el: n } = i,
      r = s.breakpoints;
    if (!r || (r && Object.keys(r).length === 0)) return;
    const o = R(),
      a =
        s.breakpointsBase === "window" || !s.breakpointsBase
          ? s.breakpointsBase
          : "container",
      d =
        ["window", "container"].includes(s.breakpointsBase) ||
        !s.breakpointsBase
          ? i.el
          : o.querySelector(s.breakpointsBase),
      l = i.getBreakpoint(r, a, d);
    if (!l || i.currentBreakpoint === l) return;
    const u = (l in r ? r[l] : void 0) || i.originalParams,
      g = Te(i, s),
      h = Te(i, u),
      m = i.params.grabCursor,
      w = u.grabCursor,
      A = s.enabled;
    g && !h
      ? (n.classList.remove(
          `${s.containerModifierClass}grid`,
          `${s.containerModifierClass}grid-column`
        ),
        i.emitContainerClasses())
      : !g &&
        h &&
        (n.classList.add(`${s.containerModifierClass}grid`),
        ((u.grid.fill && u.grid.fill === "column") ||
          (!u.grid.fill && s.grid.fill === "column")) &&
          n.classList.add(`${s.containerModifierClass}grid-column`),
        i.emitContainerClasses()),
      m && !w ? i.unsetGrabCursor() : !m && w && i.setGrabCursor(),
      ["navigation", "pagination", "scrollbar"].forEach((T) => {
        if (typeof u[T] > "u") return;
        const C = s[T] && s[T].enabled,
          E = u[T] && u[T].enabled;
        C && !E && i[T].disable(), !C && E && i[T].enable();
      });
    const b = u.direction && u.direction !== s.direction,
      p = s.loop && (u.slidesPerView !== s.slidesPerView || b),
      f = s.loop;
    b && t && i.changeDirection(), $(i.params, u);
    const v = i.params.enabled,
      S = i.params.loop;
    Object.assign(i, {
      allowTouchMove: i.params.allowTouchMove,
      allowSlideNext: i.params.allowSlideNext,
      allowSlidePrev: i.params.allowSlidePrev,
    }),
      A && !v ? i.disable() : !A && v && i.enable(),
      (i.currentBreakpoint = l),
      i.emit("_beforeBreakpoint", u),
      t &&
        (p
          ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides())
          : !f && S
          ? (i.loopCreate(e), i.updateSlides())
          : f && !S && i.loopDestroy()),
      i.emit("breakpoint", u);
  }
  function Ft(i, e, t) {
    if ((e === void 0 && (e = "window"), !i || (e === "container" && !t)))
      return;
    let s = !1;
    const n = G(),
      r = e === "window" ? n.innerHeight : t.clientHeight,
      o = Object.keys(i).map((a) => {
        if (typeof a == "string" && a.indexOf("@") === 0) {
          const d = parseFloat(a.substr(1));
          return { value: r * d, point: a };
        }
        return { value: a, point: a };
      });
    o.sort((a, d) => parseInt(a.value, 10) - parseInt(d.value, 10));
    for (let a = 0; a < o.length; a += 1) {
      const { point: d, value: l } = o[a];
      e === "window"
        ? n.matchMedia(`(min-width: ${l}px)`).matches && (s = d)
        : l <= t.clientWidth && (s = d);
    }
    return s || "max";
  }
  var Nt = { setBreakpoint: Vt, getBreakpoint: Ft };
  function Yt(i, e) {
    const t = [];
    return (
      i.forEach((s) => {
        typeof s == "object"
          ? Object.keys(s).forEach((n) => {
              s[n] && t.push(e + n);
            })
          : typeof s == "string" && t.push(e + s);
      }),
      t
    );
  }
  function Rt() {
    const i = this,
      { classNames: e, params: t, rtl: s, el: n, device: r } = i,
      o = Yt(
        [
          "initialized",
          t.direction,
          { "free-mode": i.params.freeMode && t.freeMode.enabled },
          { autoheight: t.autoHeight },
          { rtl: s },
          { grid: t.grid && t.grid.rows > 1 },
          {
            "grid-column":
              t.grid && t.grid.rows > 1 && t.grid.fill === "column",
          },
          { android: r.android },
          { ios: r.ios },
          { "css-mode": t.cssMode },
          { centered: t.cssMode && t.centeredSlides },
          { "watch-progress": t.watchSlidesProgress },
        ],
        t.containerModifierClass
      );
    e.push(...o), n.classList.add(...e), i.emitContainerClasses();
  }
  function Ht() {
    const i = this,
      { el: e, classNames: t } = i;
    !e ||
      typeof e == "string" ||
      (e.classList.remove(...t), i.emitContainerClasses());
  }
  var _t = { addClasses: Rt, removeClasses: Ht };
  function qt() {
    const i = this,
      { isLocked: e, params: t } = i,
      { slidesOffsetBefore: s } = t;
    if (s) {
      const n = i.slides.length - 1,
        r = i.slidesGrid[n] + i.slidesSizesGrid[n] + s * 2;
      i.isLocked = i.size > r;
    } else i.isLocked = i.snapGrid.length === 1;
    t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked),
      t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked),
      e && e !== i.isLocked && (i.isEnd = !1),
      e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock");
  }
  var jt = { checkOverflow: qt },
    Ee = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      swiperElementNodeName: "SWIPER-CONTAINER",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: "swiper",
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-blank",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideFullyVisibleClass: "swiper-slide-fully-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
  function Wt(i, e) {
    return function (s) {
      s === void 0 && (s = {});
      const n = Object.keys(s)[0],
        r = s[n];
      if (typeof r != "object" || r === null) {
        $(e, s);
        return;
      }
      if (
        (i[n] === !0 && (i[n] = { enabled: !0 }),
        n === "navigation" &&
          i[n] &&
          i[n].enabled &&
          !i[n].prevEl &&
          !i[n].nextEl &&
          (i[n].auto = !0),
        ["pagination", "scrollbar"].indexOf(n) >= 0 &&
          i[n] &&
          i[n].enabled &&
          !i[n].el &&
          (i[n].auto = !0),
        !(n in i && "enabled" in r))
      ) {
        $(e, s);
        return;
      }
      typeof i[n] == "object" && !("enabled" in i[n]) && (i[n].enabled = !0),
        i[n] || (i[n] = { enabled: !1 }),
        $(e, s);
    };
  }
  const le = {
      eventsEmitter: _e,
      update: tt,
      translate: ot,
      transition: ct,
      slide: bt,
      loop: xt,
      grabCursor: Ct,
      events: $t,
      breakpoints: Nt,
      checkOverflow: jt,
      classes: _t,
    },
    de = {};
  class V {
    constructor() {
      let e, t;
      for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++)
        n[r] = arguments[r];
      n.length === 1 &&
      n[0].constructor &&
      Object.prototype.toString.call(n[0]).slice(8, -1) === "Object"
        ? (t = n[0])
        : ([e, t] = n),
        t || (t = {}),
        (t = $({}, t)),
        e && !t.el && (t.el = e);
      const o = R();
      if (
        t.el &&
        typeof t.el == "string" &&
        o.querySelectorAll(t.el).length > 1
      ) {
        const c = [];
        return (
          o.querySelectorAll(t.el).forEach((u) => {
            const g = $({}, t, { el: u });
            c.push(new V(g));
          }),
          c
        );
      }
      const a = this;
      (a.__swiper__ = !0),
        (a.support = he()),
        (a.device = we({ userAgent: t.userAgent })),
        (a.browser = ve()),
        (a.eventsListeners = {}),
        (a.eventsAnyListeners = []),
        (a.modules = [...a.__modules__]),
        t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
      const d = {};
      a.modules.forEach((c) => {
        c({
          params: t,
          swiper: a,
          extendParams: Wt(t, d),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a),
        });
      });
      const l = $({}, Ee, d);
      return (
        (a.params = $({}, l, de, t)),
        (a.originalParams = $({}, a.params)),
        (a.passedParams = $({}, t)),
        a.params &&
          a.params.on &&
          Object.keys(a.params.on).forEach((c) => {
            a.on(c, a.params.on[c]);
          }),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        Object.assign(a, {
          enabled: a.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return a.params.direction === "horizontal";
          },
          isVertical() {
            return a.params.direction === "vertical";
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: a.params.allowSlideNext,
          allowSlidePrev: a.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: a.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            pointerId: null,
            touchId: null,
          },
          allowClick: !0,
          allowTouchMove: a.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
      );
    }
    getDirectionLabel(e) {
      return this.isHorizontal()
        ? e
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[e];
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: s } = this,
        n = F(t, `.${s.slideClass}, swiper-slide`),
        r = U(n[0]);
      return U(e) - r;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.find(
          (t) => t.getAttribute("data-swiper-slide-index") * 1 === e
        )
      );
    }
    recalcSlides() {
      const e = this,
        { slidesEl: t, params: s } = e;
      e.slides = F(t, `.${s.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const n = s.minTranslate(),
        o = (s.maxTranslate() - n) * e + n;
      s.translateTo(o, typeof t > "u" ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (s) =>
            s.indexOf("swiper") === 0 ||
            s.indexOf(e.params.containerModifierClass) === 0
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (s) =>
                s.indexOf("swiper-slide") === 0 ||
                s.indexOf(t.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((s) => {
        const n = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: n }), e.emit("_slideClass", s, n);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      e === void 0 && (e = "current"), t === void 0 && (t = !1);
      const s = this,
        {
          params: n,
          slides: r,
          slidesGrid: o,
          slidesSizesGrid: a,
          size: d,
          activeIndex: l,
        } = s;
      let c = 1;
      if (typeof n.slidesPerView == "number") return n.slidesPerView;
      if (n.centeredSlides) {
        let u = r[l] ? Math.ceil(r[l].swiperSlideSize) : 0,
          g;
        for (let h = l + 1; h < r.length; h += 1)
          r[h] &&
            !g &&
            ((u += Math.ceil(r[h].swiperSlideSize)),
            (c += 1),
            u > d && (g = !0));
        for (let h = l - 1; h >= 0; h -= 1)
          r[h] &&
            !g &&
            ((u += r[h].swiperSlideSize), (c += 1), u > d && (g = !0));
      } else if (e === "current")
        for (let u = l + 1; u < r.length; u += 1)
          (t ? o[u] + a[u] - o[l] < d : o[u] - o[l] < d) && (c += 1);
      else for (let u = l - 1; u >= 0; u -= 1) o[l] - o[u] < d && (c += 1);
      return c;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      s.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
          o.complete && Z(e, o);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
      function n() {
        const o = e.rtlTranslate ? e.translate * -1 : e.translate,
          a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
        e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let r;
      if (s.freeMode && s.freeMode.enabled && !s.cssMode)
        n(), s.autoHeight && e.updateAutoHeight();
      else {
        if (
          (s.slidesPerView === "auto" || s.slidesPerView > 1) &&
          e.isEnd &&
          !s.centeredSlides
        ) {
          const o =
            e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
          r = e.slideTo(o.length - 1, 0, !1, !0);
        } else r = e.slideTo(e.activeIndex, 0, !1, !0);
        r || n();
      }
      s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      t === void 0 && (t = !0);
      const s = this,
        n = s.params.direction;
      return (
        e || (e = n === "horizontal" ? "vertical" : "horizontal"),
        e === n ||
          (e !== "horizontal" && e !== "vertical") ||
          (s.el.classList.remove(`${s.params.containerModifierClass}${n}`),
          s.el.classList.add(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.forEach((r) => {
            e === "vertical" ? (r.style.width = "") : (r.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && e === "rtl") ||
        (!t.rtl && e === "ltr") ||
        ((t.rtl = e === "rtl"),
        (t.rtlTranslate = t.params.direction === "horizontal" && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let s = e || t.params.el;
      if ((typeof s == "string" && (s = document.querySelector(s)), !s))
        return !1;
      (s.swiper = t),
        s.parentNode &&
          s.parentNode.host &&
          s.parentNode.host.nodeName ===
            t.params.swiperElementNodeName.toUpperCase() &&
          (t.isElement = !0);
      const n = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let o =
        s && s.shadowRoot && s.shadowRoot.querySelector
          ? s.shadowRoot.querySelector(n())
          : F(s, n())[0];
      return (
        !o &&
          t.params.createElements &&
          ((o = _("div", t.params.wrapperClass)),
          s.append(o),
          F(s, `.${t.params.slideClass}`).forEach((a) => {
            o.append(a);
          })),
        Object.assign(t, {
          el: s,
          wrapperEl: o,
          slidesEl:
            t.isElement && !s.parentNode.host.slideSlots
              ? s.parentNode.host
              : o,
          hostEl: t.isElement ? s.parentNode.host : s,
          mounted: !0,
          rtl: s.dir.toLowerCase() === "rtl" || Y(s, "direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (s.dir.toLowerCase() === "rtl" || Y(s, "direction") === "rtl"),
          wrongRTL: Y(o, "display") === "-webkit-box",
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized || t.mount(e) === !1) return t;
      t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled
          ? t.slideTo(
              t.params.initialSlide + t.virtual.slidesBefore,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
        t.params.loop && t.loopCreate(void 0, !0),
        t.attachEvents();
      const n = [...t.el.querySelectorAll('[loading="lazy"]')];
      return (
        t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        n.forEach((r) => {
          r.complete
            ? Z(t, r)
            : r.addEventListener("load", (o) => {
                Z(t, o.target);
              });
        }),
        oe(t),
        (t.initialized = !0),
        oe(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
      );
    }
    destroy(e, t) {
      e === void 0 && (e = !0), t === void 0 && (t = !0);
      const s = this,
        { params: n, el: r, wrapperEl: o, slides: a } = s;
      return (
        typeof s.params > "u" ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          n.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            r && typeof r != "string" && r.removeAttribute("style"),
            o && o.removeAttribute("style"),
            a &&
              a.length &&
              a.forEach((d) => {
                d.classList.remove(
                  n.slideVisibleClass,
                  n.slideFullyVisibleClass,
                  n.slideActiveClass,
                  n.slideNextClass,
                  n.slidePrevClass
                ),
                  d.removeAttribute("style"),
                  d.removeAttribute("data-swiper-slide-index");
              })),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((d) => {
            s.off(d);
          }),
          e !== !1 &&
            (s.el && typeof s.el != "string" && (s.el.swiper = null), Le(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      $(de, e);
    }
    static get extendedDefaults() {
      return de;
    }
    static get defaults() {
      return Ee;
    }
    static installModule(e) {
      V.prototype.__modules__ || (V.prototype.__modules__ = []);
      const t = V.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => V.installModule(t)), V)
        : (V.installModule(e), V);
    }
  }
  Object.keys(le).forEach((i) => {
    Object.keys(le[i]).forEach((e) => {
      V.prototype[e] = le[i][e];
    });
  }),
    V.use([Re, He]);
  function Ce(i, e, t, s) {
    return (
      i.params.createElements &&
        Object.keys(s).forEach((n) => {
          if (!t[n] && t.auto === !0) {
            let r = F(i.el, `.${s[n]}`)[0];
            r || ((r = _("div", s[n])), (r.className = s[n]), i.el.append(r)),
              (t[n] = r),
              (e[n] = r);
          }
        }),
      t
    );
  }
  function Xt(i) {
    let { swiper: e, extendParams: t, on: s, emit: n } = i;
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (e.navigation = { nextEl: null, prevEl: null });
    function r(m) {
      let w;
      return m &&
        typeof m == "string" &&
        e.isElement &&
        ((w = e.el.querySelector(m) || e.hostEl.querySelector(m)), w)
        ? w
        : (m &&
            (typeof m == "string" && (w = [...document.querySelectorAll(m)]),
            e.params.uniqueNavElements &&
            typeof m == "string" &&
            w &&
            w.length > 1 &&
            e.el.querySelectorAll(m).length === 1
              ? (w = e.el.querySelector(m))
              : w && w.length === 1 && (w = w[0])),
          m && !w ? m : w);
    }
    function o(m, w) {
      const A = e.params.navigation;
      (m = O(m)),
        m.forEach((b) => {
          b &&
            (b.classList[w ? "add" : "remove"](...A.disabledClass.split(" ")),
            b.tagName === "BUTTON" && (b.disabled = w),
            e.params.watchOverflow &&
              e.enabled &&
              b.classList[e.isLocked ? "add" : "remove"](A.lockClass));
        });
    }
    function a() {
      const { nextEl: m, prevEl: w } = e.navigation;
      if (e.params.loop) {
        o(w, !1), o(m, !1);
        return;
      }
      o(w, e.isBeginning && !e.params.rewind),
        o(m, e.isEnd && !e.params.rewind);
    }
    function d(m) {
      m.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
          (e.slidePrev(), n("navigationPrev"));
    }
    function l(m) {
      m.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) &&
          (e.slideNext(), n("navigationNext"));
    }
    function c() {
      const m = e.params.navigation;
      if (
        ((e.params.navigation = Ce(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(m.nextEl || m.prevEl))
      )
        return;
      let w = r(m.nextEl),
        A = r(m.prevEl);
      Object.assign(e.navigation, { nextEl: w, prevEl: A }),
        (w = O(w)),
        (A = O(A));
      const b = (p, f) => {
        p && p.addEventListener("click", f === "next" ? l : d),
          !e.enabled && p && p.classList.add(...m.lockClass.split(" "));
      };
      w.forEach((p) => b(p, "next")), A.forEach((p) => b(p, "prev"));
    }
    function u() {
      let { nextEl: m, prevEl: w } = e.navigation;
      (m = O(m)), (w = O(w));
      const A = (b, p) => {
        b.removeEventListener("click", p === "next" ? l : d),
          b.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      m.forEach((b) => A(b, "next")), w.forEach((b) => A(b, "prev"));
    }
    s("init", () => {
      e.params.navigation.enabled === !1 ? h() : (c(), a());
    }),
      s("toEdge fromEdge lock unlock", () => {
        a();
      }),
      s("destroy", () => {
        u();
      }),
      s("enable disable", () => {
        let { nextEl: m, prevEl: w } = e.navigation;
        if (((m = O(m)), (w = O(w)), e.enabled)) {
          a();
          return;
        }
        [...m, ...w]
          .filter((A) => !!A)
          .forEach((A) => A.classList.add(e.params.navigation.lockClass));
      }),
      s("click", (m, w) => {
        let { nextEl: A, prevEl: b } = e.navigation;
        (A = O(A)), (b = O(b));
        const p = w.target;
        let f = b.includes(p) || A.includes(p);
        if (e.isElement && !f) {
          const v = w.path || (w.composedPath && w.composedPath());
          v && (f = v.find((S) => A.includes(S) || b.includes(S)));
        }
        if (e.params.navigation.hideOnClick && !f) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === p || e.pagination.el.contains(p))
          )
            return;
          let v;
          A.length
            ? (v = A[0].classList.contains(e.params.navigation.hiddenClass))
            : b.length &&
              (v = b[0].classList.contains(e.params.navigation.hiddenClass)),
            n(v === !0 ? "navigationShow" : "navigationHide"),
            [...A, ...b]
              .filter((S) => !!S)
              .forEach((S) =>
                S.classList.toggle(e.params.navigation.hiddenClass)
              );
        }
      });
    const g = () => {
        e.el.classList.remove(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          c(),
          a();
      },
      h = () => {
        e.el.classList.add(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          u();
      };
    Object.assign(e.navigation, {
      enable: g,
      disable: h,
      update: a,
      init: c,
      destroy: u,
    });
  }
  function q(i) {
    return (
      i === void 0 && (i = ""),
      `.${i
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function Qt(i) {
    let { swiper: e, extendParams: t, on: s, emit: n } = i;
    const r = "swiper-pagination";
    t({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (p) => p,
        formatFractionTotal: (p) => p,
        bulletClass: `${r}-bullet`,
        bulletActiveClass: `${r}-bullet-active`,
        modifierClass: `${r}-`,
        currentClass: `${r}-current`,
        totalClass: `${r}-total`,
        hiddenClass: `${r}-hidden`,
        progressbarFillClass: `${r}-progressbar-fill`,
        progressbarOppositeClass: `${r}-progressbar-opposite`,
        clickableClass: `${r}-clickable`,
        lockClass: `${r}-lock`,
        horizontalClass: `${r}-horizontal`,
        verticalClass: `${r}-vertical`,
        paginationDisabledClass: `${r}-disabled`,
      },
    }),
      (e.pagination = { el: null, bullets: [] });
    let o,
      a = 0;
    function d() {
      return (
        !e.params.pagination.el ||
        !e.pagination.el ||
        (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
      );
    }
    function l(p, f) {
      const { bulletActiveClass: v } = e.params.pagination;
      p &&
        ((p = p[`${f === "prev" ? "previous" : "next"}ElementSibling`]),
        p &&
          (p.classList.add(`${v}-${f}`),
          (p = p[`${f === "prev" ? "previous" : "next"}ElementSibling`]),
          p && p.classList.add(`${v}-${f}-${f}`)));
    }
    function c(p, f, v) {
      if (((p = p % v), (f = f % v), f === p + 1)) return "next";
      if (f === p - 1) return "previous";
    }
    function u(p) {
      const f = p.target.closest(q(e.params.pagination.bulletClass));
      if (!f) return;
      p.preventDefault();
      const v = U(f) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === v) return;
        const S = c(e.realIndex, v, e.slides.length);
        S === "next"
          ? e.slideNext()
          : S === "previous"
          ? e.slidePrev()
          : e.slideToLoop(v);
      } else e.slideTo(v);
    }
    function g() {
      const p = e.rtl,
        f = e.params.pagination;
      if (d()) return;
      let v = e.pagination.el;
      v = O(v);
      let S, T;
      const C =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        E = e.params.loop
          ? Math.ceil(C / e.params.slidesPerGroup)
          : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((T = e.previousRealIndex || 0),
            (S =
              e.params.slidesPerGroup > 1
                ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                : e.realIndex))
          : typeof e.snapIndex < "u"
          ? ((S = e.snapIndex), (T = e.previousSnapIndex))
          : ((T = e.previousIndex || 0), (S = e.activeIndex || 0)),
        f.type === "bullets" &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const I = e.pagination.bullets;
        let y, x, M;
        if (
          (f.dynamicBullets &&
            ((o = te(I[0], e.isHorizontal() ? "width" : "height")),
            v.forEach((L) => {
              L.style[e.isHorizontal() ? "width" : "height"] = `${
                o * (f.dynamicMainBullets + 4)
              }px`;
            }),
            f.dynamicMainBullets > 1 &&
              T !== void 0 &&
              ((a += S - (T || 0)),
              a > f.dynamicMainBullets - 1
                ? (a = f.dynamicMainBullets - 1)
                : a < 0 && (a = 0)),
            (y = Math.max(S - a, 0)),
            (x = y + (Math.min(I.length, f.dynamicMainBullets) - 1)),
            (M = (x + y) / 2)),
          I.forEach((L) => {
            const z = [
              ...[
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main",
              ].map((k) => `${f.bulletActiveClass}${k}`),
            ]
              .map((k) =>
                typeof k == "string" && k.includes(" ") ? k.split(" ") : k
              )
              .flat();
            L.classList.remove(...z);
          }),
          v.length > 1)
        )
          I.forEach((L) => {
            const z = U(L);
            z === S
              ? L.classList.add(...f.bulletActiveClass.split(" "))
              : e.isElement && L.setAttribute("part", "bullet"),
              f.dynamicBullets &&
                (z >= y &&
                  z <= x &&
                  L.classList.add(...`${f.bulletActiveClass}-main`.split(" ")),
                z === y && l(L, "prev"),
                z === x && l(L, "next"));
          });
        else {
          const L = I[S];
          if (
            (L && L.classList.add(...f.bulletActiveClass.split(" ")),
            e.isElement &&
              I.forEach((z, k) => {
                z.setAttribute("part", k === S ? "bullet-active" : "bullet");
              }),
            f.dynamicBullets)
          ) {
            const z = I[y],
              k = I[x];
            for (let P = y; P <= x; P += 1)
              I[P] &&
                I[P].classList.add(...`${f.bulletActiveClass}-main`.split(" "));
            l(z, "prev"), l(k, "next");
          }
        }
        if (f.dynamicBullets) {
          const L = Math.min(I.length, f.dynamicMainBullets + 4),
            z = (o * L - o) / 2 - M * o,
            k = p ? "right" : "left";
          I.forEach((P) => {
            P.style[e.isHorizontal() ? k : "top"] = `${z}px`;
          });
        }
      }
      v.forEach((I, y) => {
        if (
          (f.type === "fraction" &&
            (I.querySelectorAll(q(f.currentClass)).forEach((x) => {
              x.textContent = f.formatFractionCurrent(S + 1);
            }),
            I.querySelectorAll(q(f.totalClass)).forEach((x) => {
              x.textContent = f.formatFractionTotal(E);
            })),
          f.type === "progressbar")
        ) {
          let x;
          f.progressbarOpposite
            ? (x = e.isHorizontal() ? "vertical" : "horizontal")
            : (x = e.isHorizontal() ? "horizontal" : "vertical");
          const M = (S + 1) / E;
          let L = 1,
            z = 1;
          x === "horizontal" ? (L = M) : (z = M),
            I.querySelectorAll(q(f.progressbarFillClass)).forEach((k) => {
              (k.style.transform = `translate3d(0,0,0) scaleX(${L}) scaleY(${z})`),
                (k.style.transitionDuration = `${e.params.speed}ms`);
            });
        }
        f.type === "custom" && f.renderCustom
          ? (ge(I, f.renderCustom(e, S + 1, E)),
            y === 0 && n("paginationRender", I))
          : (y === 0 && n("paginationRender", I), n("paginationUpdate", I)),
          e.params.watchOverflow &&
            e.enabled &&
            I.classList[e.isLocked ? "add" : "remove"](f.lockClass);
      });
    }
    function h() {
      const p = e.params.pagination;
      if (d()) return;
      const f =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.grid && e.params.grid.rows > 1
          ? e.slides.length / Math.ceil(e.params.grid.rows)
          : e.slides.length;
      let v = e.pagination.el;
      v = O(v);
      let S = "";
      if (p.type === "bullets") {
        let T = e.params.loop
          ? Math.ceil(f / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && T > f && (T = f);
        for (let C = 0; C < T; C += 1)
          p.renderBullet
            ? (S += p.renderBullet.call(e, C, p.bulletClass))
            : (S += `<${p.bulletElement} ${
                e.isElement ? 'part="bullet"' : ""
              } class="${p.bulletClass}"></${p.bulletElement}>`);
      }
      p.type === "fraction" &&
        (p.renderFraction
          ? (S = p.renderFraction.call(e, p.currentClass, p.totalClass))
          : (S = `<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`)),
        p.type === "progressbar" &&
          (p.renderProgressbar
            ? (S = p.renderProgressbar.call(e, p.progressbarFillClass))
            : (S = `<span class="${p.progressbarFillClass}"></span>`)),
        (e.pagination.bullets = []),
        v.forEach((T) => {
          p.type !== "custom" && ge(T, S || ""),
            p.type === "bullets" &&
              e.pagination.bullets.push(
                ...T.querySelectorAll(q(p.bulletClass))
              );
        }),
        p.type !== "custom" && n("paginationRender", v[0]);
    }
    function m() {
      e.params.pagination = Ce(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const p = e.params.pagination;
      if (!p.el) return;
      let f;
      typeof p.el == "string" && e.isElement && (f = e.el.querySelector(p.el)),
        !f &&
          typeof p.el == "string" &&
          (f = [...document.querySelectorAll(p.el)]),
        f || (f = p.el),
        !(!f || f.length === 0) &&
          (e.params.uniqueNavElements &&
            typeof p.el == "string" &&
            Array.isArray(f) &&
            f.length > 1 &&
            ((f = [...e.el.querySelectorAll(p.el)]),
            f.length > 1 && (f = f.find((v) => me(v, ".swiper")[0] === e.el))),
          Array.isArray(f) && f.length === 1 && (f = f[0]),
          Object.assign(e.pagination, { el: f }),
          (f = O(f)),
          f.forEach((v) => {
            p.type === "bullets" &&
              p.clickable &&
              v.classList.add(...(p.clickableClass || "").split(" ")),
              v.classList.add(p.modifierClass + p.type),
              v.classList.add(
                e.isHorizontal() ? p.horizontalClass : p.verticalClass
              ),
              p.type === "bullets" &&
                p.dynamicBullets &&
                (v.classList.add(`${p.modifierClass}${p.type}-dynamic`),
                (a = 0),
                p.dynamicMainBullets < 1 && (p.dynamicMainBullets = 1)),
              p.type === "progressbar" &&
                p.progressbarOpposite &&
                v.classList.add(p.progressbarOppositeClass),
              p.clickable && v.addEventListener("click", u),
              e.enabled || v.classList.add(p.lockClass);
          }));
    }
    function w() {
      const p = e.params.pagination;
      if (d()) return;
      let f = e.pagination.el;
      f &&
        ((f = O(f)),
        f.forEach((v) => {
          v.classList.remove(p.hiddenClass),
            v.classList.remove(p.modifierClass + p.type),
            v.classList.remove(
              e.isHorizontal() ? p.horizontalClass : p.verticalClass
            ),
            p.clickable &&
              (v.classList.remove(...(p.clickableClass || "").split(" ")),
              v.removeEventListener("click", u));
        })),
        e.pagination.bullets &&
          e.pagination.bullets.forEach((v) =>
            v.classList.remove(...p.bulletActiveClass.split(" "))
          );
    }
    s("changeDirection", () => {
      if (!e.pagination || !e.pagination.el) return;
      const p = e.params.pagination;
      let { el: f } = e.pagination;
      (f = O(f)),
        f.forEach((v) => {
          v.classList.remove(p.horizontalClass, p.verticalClass),
            v.classList.add(
              e.isHorizontal() ? p.horizontalClass : p.verticalClass
            );
        });
    }),
      s("init", () => {
        e.params.pagination.enabled === !1 ? b() : (m(), h(), g());
      }),
      s("activeIndexChange", () => {
        typeof e.snapIndex > "u" && g();
      }),
      s("snapIndexChange", () => {
        g();
      }),
      s("snapGridLengthChange", () => {
        h(), g();
      }),
      s("destroy", () => {
        w();
      }),
      s("enable disable", () => {
        let { el: p } = e.pagination;
        p &&
          ((p = O(p)),
          p.forEach((f) =>
            f.classList[e.enabled ? "remove" : "add"](
              e.params.pagination.lockClass
            )
          ));
      }),
      s("lock unlock", () => {
        g();
      }),
      s("click", (p, f) => {
        const v = f.target,
          S = O(e.pagination.el);
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          S &&
          S.length > 0 &&
          !v.classList.contains(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && v === e.navigation.nextEl) ||
              (e.navigation.prevEl && v === e.navigation.prevEl))
          )
            return;
          const T = S[0].classList.contains(e.params.pagination.hiddenClass);
          n(T === !0 ? "paginationShow" : "paginationHide"),
            S.forEach((C) =>
              C.classList.toggle(e.params.pagination.hiddenClass)
            );
        }
      });
    const A = () => {
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let { el: p } = e.pagination;
        p &&
          ((p = O(p)),
          p.forEach((f) =>
            f.classList.remove(e.params.pagination.paginationDisabledClass)
          )),
          m(),
          h(),
          g();
      },
      b = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: p } = e.pagination;
        p &&
          ((p = O(p)),
          p.forEach((f) =>
            f.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          w();
      };
    Object.assign(e.pagination, {
      enable: A,
      disable: b,
      render: h,
      update: g,
      init: m,
      destroy: w,
    });
  }
  function Ut(i) {
    const {
      effect: e,
      swiper: t,
      on: s,
      setTranslate: n,
      setTransition: r,
      overwriteParams: o,
      perspective: a,
      recreateShadows: d,
      getEffectParams: l,
    } = i;
    s("beforeInit", () => {
      if (t.params.effect !== e) return;
      t.classNames.push(`${t.params.containerModifierClass}${e}`),
        a && a() && t.classNames.push(`${t.params.containerModifierClass}3d`);
      const u = o ? o() : {};
      Object.assign(t.params, u), Object.assign(t.originalParams, u);
    }),
      s("setTranslate _virtualUpdated", () => {
        t.params.effect === e && n();
      }),
      s("setTransition", (u, g) => {
        t.params.effect === e && r(g);
      }),
      s("transitionEnd", () => {
        if (t.params.effect === e && d) {
          if (!l || !l().slideShadows) return;
          t.slides.forEach((u) => {
            u.querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            ).forEach((g) => g.remove());
          }),
            d();
        }
      });
    let c;
    s("virtualUpdate", () => {
      t.params.effect === e &&
        (t.slides.length || (c = !0),
        requestAnimationFrame(() => {
          c && t.slides && t.slides.length && (n(), (c = !1));
        }));
    });
  }
  function Zt(i, e) {
    const t = ee(e);
    return (
      t !== e &&
        ((t.style.backfaceVisibility = "hidden"),
        (t.style["-webkit-backface-visibility"] = "hidden")),
      t
    );
  }
  function Kt(i) {
    let { swiper: e, duration: t, transformElements: s, allSlides: n } = i;
    const { activeIndex: r } = e,
      o = (a) =>
        a.parentElement
          ? a.parentElement
          : e.slides.find((l) => l.shadowRoot && l.shadowRoot === a.parentNode);
    if (e.params.virtualTranslate && t !== 0) {
      let a = !1,
        d;
      n
        ? (d = s)
        : (d = s.filter((l) => {
            const c = l.classList.contains("swiper-slide-transform") ? o(l) : l;
            return e.getSlideIndex(c) === r;
          })),
        d.forEach((l) => {
          Ve(l, () => {
            if (a || !e || e.destroyed) return;
            (a = !0), (e.animating = !1);
            const c = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            e.wrapperEl.dispatchEvent(c);
          });
        });
    }
  }
  function Jt(i, e, t) {
    const s = `swiper-slide-shadow${` swiper-slide-shadow-${i}`}`,
      n = ee(e);
    let r = n.querySelector(`.${s.split(" ").join(".")}`);
    return r || ((r = _("div", s.split(" "))), n.append(r)), r;
  }
  function ei(i) {
    let { swiper: e, extendParams: t, on: s } = i;
    t({
      cardsEffect: {
        slideShadows: !0,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    }),
      Ut({
        effect: "cards",
        swiper: e,
        on: s,
        setTranslate: () => {
          const { slides: o, activeIndex: a, rtlTranslate: d } = e,
            l = e.params.cardsEffect,
            { startTranslate: c, isTouched: u } = e.touchEventsData,
            g = d ? -e.translate : e.translate;
          for (let h = 0; h < o.length; h += 1) {
            const m = o[h],
              w = m.progress,
              A = Math.min(Math.max(w, -4), 4);
            let b = m.swiperSlideOffset;
            e.params.centeredSlides &&
              !e.params.cssMode &&
              (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
              e.params.centeredSlides &&
                e.params.cssMode &&
                (b -= o[0].swiperSlideOffset);
            let p = e.params.cssMode ? -b - e.translate : -b,
              f = 0;
            const v = -100 * Math.abs(A);
            let S = 1,
              T = -l.perSlideRotate * A,
              C = l.perSlideOffset - Math.abs(A) * 0.75;
            const E =
                e.virtual && e.params.virtual.enabled ? e.virtual.from + h : h,
              I =
                (E === a || E === a - 1) &&
                A > 0 &&
                A < 1 &&
                (u || e.params.cssMode) &&
                g < c,
              y =
                (E === a || E === a + 1) &&
                A < 0 &&
                A > -1 &&
                (u || e.params.cssMode) &&
                g > c;
            if (I || y) {
              const z = (1 - Math.abs((Math.abs(A) - 0.5) / 0.5)) ** 0.5;
              (T += -28 * A * z),
                (S += -0.5 * z),
                (C += 96 * z),
                (f = `${-25 * z * Math.abs(A)}%`);
            }
            if (
              (A < 0
                ? (p = `calc(${p}px ${d ? "-" : "+"} (${C * Math.abs(A)}%))`)
                : A > 0
                ? (p = `calc(${p}px ${d ? "-" : "+"} (-${C * Math.abs(A)}%))`)
                : (p = `${p}px`),
              !e.isHorizontal())
            ) {
              const z = f;
              (f = p), (p = z);
            }
            const x = A < 0 ? `${1 + (1 - S) * A}` : `${1 - (1 - S) * A}`,
              M = `
        translate3d(${p}, ${f}, ${v}px)
        rotateZ(${l.rotate ? (d ? -T : T) : 0}deg)
        scale(${x})
      `;
            if (l.slideShadows) {
              let z = m.querySelector(".swiper-slide-shadow");
              z || (z = Jt("cards", m)),
                z &&
                  (z.style.opacity = Math.min(
                    Math.max((Math.abs(A) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            m.style.zIndex = -Math.abs(Math.round(w)) + o.length;
            const L = Zt(l, m);
            L.style.transform = M;
          }
        },
        setTransition: (o) => {
          const a = e.slides.map((d) => ee(d));
          a.forEach((d) => {
            (d.style.transitionDuration = `${o}ms`),
              d.querySelectorAll(".swiper-slide-shadow").forEach((l) => {
                l.style.transitionDuration = `${o}ms`;
              });
          }),
            Kt({ swiper: e, duration: o, transformElements: a });
        },
        perspective: () => !0,
        overwriteParams: () => ({
          _loopSwapReset: !1,
          watchSlidesProgress: !0,
          loopAdditionalSlides: e.params.cardsEffect.rotate ? 3 : 2,
          centeredSlides: !0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
  }
  const pe = function (i, e, t = 600, s, n, r = null) {
    const o = i.closest(
        "[data-grid-swiper], [data-features-swiper], [data-restaurant-swiper]"
      ),
      a = o ? o.querySelector("[data-swiper-nav]") : null,
      d = a ? a.querySelector("[data-swiper-prev]") : null,
      l = a ? a.querySelector("[data-swiper-next]") : null,
      c = {
        modules: [Xt, Qt, ei],
        direction: "horizontal",
        speed: t,
        mousewheel: !0,
        keyboard: !0,
        loop: e,
        slidesPerView: s,
        spaceBetween: n,
      };
    r && (c.effect = r), d && l && (c.navigation = { nextEl: l, prevEl: d });
    try {
      return new V(i, c);
    } catch {
      return null;
    }
  };
  function ti() {
    const i = document.querySelector("[data-grid-swiper]");
    if (i) {
      const e = i.querySelector(".swiper");
      e && pe(e, !0, 600, 1, 24);
    }
  }
  function ii() {
    document.querySelectorAll("[data-features-swiper]").forEach((e, t) => {
      const s = e.querySelector(".swiper");
      s && pe(s, !1, 600, 3, 16);
    });
  }
  function si(i = !0, e = 300, t = 1, s = 0, n = null) {
    const r = document.querySelector("[data-restaurant-swiper]");
    if (r) {
      const o = r.querySelector(".swiper");
      o && pe(o, !1, e, t, s, "cards");
    }
  }
  function ri() {
    ti(), ii(), si();
  }
  function ni() {
    ri();
  }
  document.addEventListener("DOMContentLoaded", function () {
    ni();
  });
});
