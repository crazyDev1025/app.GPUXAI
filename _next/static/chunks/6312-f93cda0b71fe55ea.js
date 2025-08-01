"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6312],
  {
    2564: (e, t, n) => {
      n.d(t, { Qg: () => i, bL: () => s });
      var r = n(12115),
        o = n(63655),
        a = n(95155),
        i = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
        }),
        l = r.forwardRef((e, t) =>
          (0, a.jsx)(o.sG.span, { ...e, ref: t, style: { ...i, ...e.style } })
        );
      l.displayName = "VisuallyHidden";
      var s = l;
    },
    5196: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    5534: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("AppWindow", [
        [
          "rect",
          { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
        ],
        ["path", { d: "M10 4v4", key: "pp8u80" }],
        ["path", { d: "M2 8h20", key: "d11cs7" }],
        ["path", { d: "M6 4v4", key: "1svtjw" }],
      ]);
    },
    5845: (e, t, n) => {
      n.d(t, { i: () => l });
      var r,
        o = n(12115),
        a = n(52712),
        i =
          (r || (r = n.t(o, 2)))[" useInsertionEffect ".trim().toString()] ||
          a.N;
      function l({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r,
      }) {
        let [a, l, s] = (function ({ defaultProp: e, onChange: t }) {
            let [n, r] = o.useState(e),
              a = o.useRef(n),
              l = o.useRef(t);
            return (
              i(() => {
                l.current = t;
              }, [t]),
              o.useEffect(() => {
                a.current !== n && (l.current?.(n), (a.current = n));
              }, [n, a]),
              [n, r, l]
            );
          })({ defaultProp: t, onChange: n }),
          u = void 0 !== e,
          d = u ? e : a;
        {
          let t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            let e = t.current;
            if (e !== u) {
              let t = u ? "controlled" : "uncontrolled";
              console.warn(
                `${r} is changing from ${
                  e ? "controlled" : "uncontrolled"
                } to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
              );
            }
            t.current = u;
          }, [u, r]);
        }
        return [
          d,
          o.useCallback(
            (t) => {
              if (u) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && s.current?.(n);
              } else l(t);
            },
            [u, e, l, s]
          ),
        ];
      }
      Symbol("RADIX:SYNC_STATE");
    },
    11275: (e, t, n) => {
      n.d(t, { X: () => a });
      var r = n(12115),
        o = n(52712);
      function a(e) {
        let [t, n] = r.useState(void 0);
        return (
          (0, o.N)(() => {
            if (e) {
              n({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let r, o;
                if (!Array.isArray(t) || !t.length) return;
                let a = t[0];
                if ("borderBoxSize" in a) {
                  let e = a.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (r = t.inlineSize), (o = t.blockSize);
                } else (r = e.offsetWidth), (o = e.offsetHeight);
                n({ width: r, height: o });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            n(void 0);
          }, [e]),
          t
        );
      }
    },
    12486: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("Send", [
        [
          "path",
          {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3",
          },
        ],
        ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
      ]);
    },
    15564: (e, t, n) => {
      var r = n(49509);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return v;
          },
          defaultHead: function () {
            return f;
          },
        });
      let o = n(88229),
        a = n(6966),
        i = n(95155),
        l = a._(n(12115)),
        s = o._(n(85029)),
        u = n(42464),
        d = n(82830),
        c = n(17544);
      function f(e) {
        void 0 === e && (e = !1);
        let t = [(0, i.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          e ||
            t.push(
              (0, i.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          t
        );
      }
      function p(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === l.default.Fragment
          ? e.concat(
              l.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      n(43230);
      let m = ["name", "httpEquiv", "charSet", "itemProp"];
      function h(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(p, [])
          .reverse()
          .concat(f(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (o) => {
                let a = !0,
                  i = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  i = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (a = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = m.length; e < t; e++) {
                      let t = m[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (a = !1) : n.add(t);
                        else {
                          let e = o.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !i) && n.has(e)
                            ? (a = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let o = e.key || t;
            if (
              r.env.__NEXT_OPTIMIZE_FONTS &&
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                l.default.cloneElement(e, t)
              );
            }
            return l.default.cloneElement(e, { key: o });
          });
      }
      let v = function (e) {
        let { children: t } = e,
          n = (0, l.useContext)(u.AmpStateContext),
          r = (0, l.useContext)(d.HeadManagerContext);
        return (0, i.jsx)(s.default, {
          reduceComponentsToState: h,
          headManager: r,
          inAmpMode: (0, c.isInAmpMode)(n),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    17544: (e, t) => {
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    17652: (e, t, n) => {
      n.d(t, { c3: () => a });
      var r = n(46453);
      function o(e, t) {
        return (...e) => {
          try {
            return t(...e);
          } catch {
            throw Error(void 0);
          }
        };
      }
      let a = o(0, r.c3);
      o(0, r.kc);
    },
    19178: (e, t, n) => {
      n.d(t, { qW: () => f });
      var r,
        o = n(12115),
        a = n(85185),
        i = n(63655),
        l = n(6101),
        s = n(39033),
        u = n(95155),
        d = "dismissableLayer.update",
        c = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        f = o.forwardRef((e, t) => {
          var n, f;
          let {
              disableOutsidePointerEvents: h = !1,
              onEscapeKeyDown: v,
              onPointerDownOutside: g,
              onFocusOutside: y,
              onInteractOutside: b,
              onDismiss: w,
              ...x
            } = e,
            E = o.useContext(c),
            [S, C] = o.useState(null),
            k =
              null !== (f = null == S ? void 0 : S.ownerDocument) &&
              void 0 !== f
                ? f
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, R] = o.useState({}),
            P = (0, l.s)(t, (e) => C(e)),
            M = Array.from(E.layers),
            [A] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1),
            T = M.indexOf(A),
            j = S ? M.indexOf(S) : -1,
            N = E.layersWithOutsidePointerEventsDisabled.size > 0,
            L = j >= T,
            _ = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, s.c)(e),
                a = o.useRef(!1),
                i = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !a.current) {
                        let t = function () {
                            m("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", i.current),
                            (i.current = t),
                            n.addEventListener("click", i.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", i.current);
                      a.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", i.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (a.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...E.branches].some((e) => e.contains(t));
              !L ||
                n ||
                (null == g || g(e),
                null == b || b(e),
                e.defaultPrevented || null == w || w());
            }, k),
            O = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, s.c)(e),
                a = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !a.current &&
                      m(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (a.current = !0),
                  onBlurCapture: () => (a.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...E.branches].some((e) => e.contains(t)) ||
                (null == y || y(e),
                null == b || b(e),
                e.defaultPrevented || null == w || w());
            }, k);
          return (
            !(function (e, t = globalThis?.document) {
              let n = (0, s.c)(e);
              o.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              j === E.layers.size - 1 &&
                (null == v || v(e),
                !e.defaultPrevented && w && (e.preventDefault(), w()));
            }, k),
            o.useEffect(() => {
              if (S)
                return (
                  h &&
                    (0 === E.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = k.body.style.pointerEvents),
                      (k.body.style.pointerEvents = "none")),
                    E.layersWithOutsidePointerEventsDisabled.add(S)),
                  E.layers.add(S),
                  p(),
                  () => {
                    h &&
                      1 === E.layersWithOutsidePointerEventsDisabled.size &&
                      (k.body.style.pointerEvents = r);
                  }
                );
            }, [S, k, h, E]),
            o.useEffect(
              () => () => {
                S &&
                  (E.layers.delete(S),
                  E.layersWithOutsidePointerEventsDisabled.delete(S),
                  p());
              },
              [S, E]
            ),
            o.useEffect(() => {
              let e = () => R({});
              return (
                document.addEventListener(d, e),
                () => document.removeEventListener(d, e)
              );
            }, []),
            (0, u.jsx)(i.sG.div, {
              ...x,
              ref: P,
              style: {
                pointerEvents: N ? (L ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, a.m)(e.onFocusCapture, O.onFocusCapture),
              onBlurCapture: (0, a.m)(e.onBlurCapture, O.onBlurCapture),
              onPointerDownCapture: (0, a.m)(
                e.onPointerDownCapture,
                _.onPointerDownCapture
              ),
            })
          );
        });
      function p() {
        let e = new CustomEvent(d);
        document.dispatchEvent(e);
      }
      function m(e, t, n, r) {
        let { discrete: o } = r,
          a = n.originalEvent.target,
          l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && a.addEventListener(e, t, { once: !0 }),
          o ? (0, i.hO)(a, l) : a.dispatchEvent(l);
      }
      (f.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(c),
            r = o.useRef(null),
            a = (0, l.s)(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, u.jsx)(i.sG.div, { ...e, ref: a })
          );
        }).displayName = "DismissableLayerBranch");
    },
    24177: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("Handshake", [
        ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3", key: "efffak" }],
        [
          "path",
          {
            d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
            key: "9pr0kb",
          },
        ],
        ["path", { d: "m21 3 1 11h-2", key: "1tisrp" }],
        ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", key: "1uvwmv" }],
        ["path", { d: "M3 4h8", key: "1ep09j" }],
      ]);
    },
    30981: (e, t, n) => {
      n.d(t, { A: () => p });
      var r = n(35695),
        o = n(12115),
        a = n.t(o, 2),
        i = n(46453),
        l = a["use".trim()],
        s = n(23225),
        u = n(46160),
        d = n(32850),
        c = n(95155),
        f = n(18986);
      function p(e) {
        let {
          Link: t,
          config: n,
          getPathname: a,
          ...p
        } = (function (e, t) {
          var n, a, i;
          let f = {
              ...(n = t || {}),
              localePrefix:
                "object" == typeof (i = n.localePrefix)
                  ? i
                  : { mode: i || "always" },
              localeCookie: !!((a = n.localeCookie) ?? 1) && {
                name: "NEXT_LOCALE",
                sameSite: "lax",
                ...("object" == typeof a && a),
              },
              localeDetection: n.localeDetection ?? !0,
              alternateLinks: n.alternateLinks ?? !0,
            },
            p = f.pathnames,
            m = (0, o.forwardRef)(function ({ href: t, locale: n, ...r }, o) {
              let a, i;
              "object" == typeof t
                ? ((a = t.pathname), (i = t.params))
                : (a = t);
              let d = (0, s._x)(t),
                m = e(),
                v = (0, s.yL)(m) ? l(m) : m,
                g = d
                  ? h({
                      locale: n || v,
                      href: null == p ? a : { pathname: a, params: i },
                      forcePrefix: null != n || void 0,
                    })
                  : a;
              return (0,
              c.jsx)(u.default, { ref: o, href: "object" == typeof t ? { ...t, pathname: g } : g, locale: n, localeCookie: f.localeCookie, ...r });
            });
          function h(e) {
            let t;
            let { forcePrefix: n, href: r, locale: o } = e;
            return (
              null == p
                ? "object" == typeof r
                  ? ((t = r.pathname), r.query && (t += (0, d.Zn)(r.query)))
                  : (t = r)
                : (t = (0, d.FP)({
                    locale: o,
                    ...(0, d.TK)(r),
                    pathnames: f.pathnames,
                  })),
              (0, d.x3)(t, o, f, n)
            );
          }
          function v(e) {
            return function (t, ...n) {
              return e(h(t), ...n);
            };
          }
          return {
            config: f,
            Link: m,
            redirect: v(r.redirect),
            permanentRedirect: v(r.permanentRedirect),
            getPathname: h,
          };
        })(i.Ym, e);
        return {
          ...p,
          Link: t,
          usePathname: function () {
            let e = (function (e) {
                let t = (0, r.usePathname)(),
                  n = (0, i.Ym)();
                return (0, o.useMemo)(() => {
                  if (!t) return t;
                  let r = t,
                    o = (0, s.XP)(n, e.localePrefix);
                  if ((0, s.wO)(o, t)) r = (0, s.MY)(t, o);
                  else if (
                    "as-needed" === e.localePrefix.mode &&
                    e.localePrefix.prefixes
                  ) {
                    let e = (0, s.bL)(n);
                    (0, s.wO)(e, t) && (r = (0, s.MY)(t, e));
                  }
                  return r;
                }, [e.localePrefix, n, t]);
              })(n),
              t = (0, i.Ym)();
            return (0, o.useMemo)(
              () => (e && n.pathnames ? (0, d.aM)(t, e, n.pathnames) : e),
              [t, e]
            );
          },
          useRouter: function () {
            let e = (0, r.useRouter)(),
              t = (0, i.Ym)(),
              l = (0, r.usePathname)();
            return (0, o.useMemo)(() => {
              function r(e) {
                return function (r, o) {
                  let { locale: i, ...s } = o || {},
                    u = [a({ href: r, locale: i || t })];
                  Object.keys(s).length > 0 && u.push(s),
                    e(...u),
                    (0, f.A)(n.localeCookie, l, t, i);
                };
              }
              return {
                ...e,
                push: r(e.push),
                replace: r(e.replace),
                prefetch: r(e.prefetch),
              };
            }, [t, l, e]);
          },
          getPathname: a,
        };
      }
    },
    33063: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let r = n(88229),
        o = n(6966),
        a = n(95155),
        i = o._(n(12115)),
        l = r._(n(47650)),
        s = r._(n(15564)),
        u = n(38883),
        d = n(95840),
        c = n(86752);
      n(43230);
      let f = n(70901),
        p = r._(n(51193)),
        m = n(6654),
        h = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function v(e, t, n, r, o, a, i) {
        let l = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== l &&
          ((e["data-loaded-src"] = l),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    o = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function g(e) {
        return i.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      let y = (0, i.forwardRef)((e, t) => {
        let {
            src: n,
            srcSet: r,
            sizes: o,
            height: l,
            width: s,
            decoding: u,
            className: d,
            style: c,
            fetchPriority: f,
            placeholder: p,
            loading: h,
            unoptimized: y,
            fill: b,
            onLoadRef: w,
            onLoadingCompleteRef: x,
            setBlurComplete: E,
            setShowAltText: S,
            sizesInput: C,
            onLoad: k,
            onError: R,
            ...P
          } = e,
          M = (0, i.useCallback)(
            (e) => {
              e && (R && (e.src = e.src), e.complete && v(e, p, w, x, E, y, C));
            },
            [n, p, w, x, E, R, y, C]
          ),
          A = (0, m.useMergedRef)(t, M);
        return (0, a.jsx)("img", {
          ...P,
          ...g(f),
          loading: h,
          width: s,
          height: l,
          decoding: u,
          "data-nimg": b ? "fill" : "1",
          className: d,
          style: c,
          sizes: o,
          srcSet: r,
          src: n,
          ref: A,
          onLoad: (e) => {
            v(e.currentTarget, p, w, x, E, y, C);
          },
          onError: (e) => {
            S(!0), "empty" !== p && E(!0), R && R(e);
          },
        });
      });
      function b(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...g(n.fetchPriority),
          };
        return t && l.default.preload
          ? (l.default.preload(n.src, r), null)
          : (0, a.jsx)(s.default, {
              children: (0, a.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...r },
                "__nimg-" + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let w = (0, i.forwardRef)((e, t) => {
        let n = (0, i.useContext)(f.RouterContext),
          r = (0, i.useContext)(c.ImageConfigContext),
          o = (0, i.useMemo)(() => {
            var e;
            let t = h || r || d.imageConfigDefault,
              n = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
              o = t.deviceSizes.sort((e, t) => e - t),
              a = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
            return { ...t, allSizes: n, deviceSizes: o, qualities: a };
          }, [r]),
          { onLoad: l, onLoadingComplete: s } = e,
          m = (0, i.useRef)(l);
        (0, i.useEffect)(() => {
          m.current = l;
        }, [l]);
        let v = (0, i.useRef)(s);
        (0, i.useEffect)(() => {
          v.current = s;
        }, [s]);
        let [g, w] = (0, i.useState)(!1),
          [x, E] = (0, i.useState)(!1),
          { props: S, meta: C } = (0, u.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: g,
            showAltText: x,
          });
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(y, {
              ...S,
              unoptimized: C.unoptimized,
              placeholder: C.placeholder,
              fill: C.fill,
              onLoadRef: m,
              onLoadingCompleteRef: v,
              setBlurComplete: w,
              setShowAltText: E,
              sizesInput: e.sizes,
              ref: t,
            }),
            C.priority
              ? (0, a.jsx)(b, { isAppRouter: !n, imgAttributes: S })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    33127: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("Palette", [
        [
          "circle",
          {
            cx: "13.5",
            cy: "6.5",
            r: ".5",
            fill: "currentColor",
            key: "1okk4w",
          },
        ],
        [
          "circle",
          {
            cx: "17.5",
            cy: "10.5",
            r: ".5",
            fill: "currentColor",
            key: "f64h9f",
          },
        ],
        [
          "circle",
          {
            cx: "8.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "fotxhn",
          },
        ],
        [
          "circle",
          {
            cx: "6.5",
            cy: "12.5",
            r: ".5",
            fill: "currentColor",
            key: "qy21gx",
          },
        ],
        [
          "path",
          {
            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
            key: "12rzf8",
          },
        ],
      ]);
    },
    34378: (e, t, n) => {
      n.d(t, { Z: () => s });
      var r = n(12115),
        o = n(47650),
        a = n(63655),
        i = n(52712),
        l = n(95155),
        s = r.forwardRef((e, t) => {
          var n, s;
          let { container: u, ...d } = e,
            [c, f] = r.useState(!1);
          (0, i.N)(() => f(!0), []);
          let p =
            u ||
            (c &&
              (null === (s = globalThis) || void 0 === s
                ? void 0
                : null === (n = s.document) || void 0 === n
                ? void 0
                : n.body));
          return p
            ? o.createPortal((0, l.jsx)(a.sG.div, { ...d, ref: t }), p)
            : null;
        });
      s.displayName = "Portal";
    },
    34869: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("Globe", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        [
          "path",
          {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl",
          },
        ],
        ["path", { d: "M2 12h20", key: "9i4pu4" }],
      ]);
    },
    35152: (e, t, n) => {
      n.d(t, {
        Mz: () => e$,
        i3: () => eJ,
        UC: () => eZ,
        bL: () => eK,
        Bk: () => eL,
      });
      var r = n(12115);
      let o = ["top", "right", "bottom", "left"],
        a = Math.min,
        i = Math.max,
        l = Math.round,
        s = Math.floor,
        u = (e) => ({ x: e, y: e }),
        d = { left: "right", right: "left", bottom: "top", top: "bottom" },
        c = { start: "end", end: "start" };
      function f(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function p(e) {
        return e.split("-")[0];
      }
      function m(e) {
        return e.split("-")[1];
      }
      function h(e) {
        return "x" === e ? "y" : "x";
      }
      function v(e) {
        return "y" === e ? "height" : "width";
      }
      function g(e) {
        return ["top", "bottom"].includes(p(e)) ? "y" : "x";
      }
      function y(e) {
        return e.replace(/start|end/g, (e) => c[e]);
      }
      function b(e) {
        return e.replace(/left|right|bottom|top/g, (e) => d[e]);
      }
      function w(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function x(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function E(e, t, n) {
        let r,
          { reference: o, floating: a } = e,
          i = g(t),
          l = h(g(t)),
          s = v(l),
          u = p(t),
          d = "y" === i,
          c = o.x + o.width / 2 - a.width / 2,
          f = o.y + o.height / 2 - a.height / 2,
          y = o[s] / 2 - a[s] / 2;
        switch (u) {
          case "top":
            r = { x: c, y: o.y - a.height };
            break;
          case "bottom":
            r = { x: c, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: f };
            break;
          case "left":
            r = { x: o.x - a.width, y: f };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (m(t)) {
          case "start":
            r[l] -= y * (n && d ? -1 : 1);
            break;
          case "end":
            r[l] += y * (n && d ? -1 : 1);
        }
        return r;
      }
      let S = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: a = [],
            platform: i,
          } = n,
          l = a.filter(Boolean),
          s = await (null == i.isRTL ? void 0 : i.isRTL(t)),
          u = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: d, y: c } = E(u, r, s),
          f = r,
          p = {},
          m = 0;
        for (let n = 0; n < l.length; n++) {
          let { name: a, fn: h } = l[n],
            {
              x: v,
              y: g,
              data: y,
              reset: b,
            } = await h({
              x: d,
              y: c,
              initialPlacement: r,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: u,
              platform: i,
              elements: { reference: e, floating: t },
            });
          (d = null != v ? v : d),
            (c = null != g ? g : c),
            (p = { ...p, [a]: { ...p[a], ...y } }),
            b &&
              m <= 50 &&
              (m++,
              "object" == typeof b &&
                (b.placement && (f = b.placement),
                b.rects &&
                  (u =
                    !0 === b.rects
                      ? await i.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : b.rects),
                ({ x: d, y: c } = E(u, f, s))),
              (n = -1));
        }
        return { x: d, y: c, placement: f, strategy: o, middlewareData: p };
      };
      async function C(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: a, rects: i, elements: l, strategy: s } = e,
          {
            boundary: u = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: c = "floating",
            altBoundary: p = !1,
            padding: m = 0,
          } = f(t, e),
          h = w(m),
          v = l[p ? ("floating" === c ? "reference" : "floating") : c],
          g = x(
            await a.getClippingRect({
              element:
                null ==
                  (n = await (null == a.isElement ? void 0 : a.isElement(v))) ||
                n
                  ? v
                  : v.contextElement ||
                    (await (null == a.getDocumentElement
                      ? void 0
                      : a.getDocumentElement(l.floating))),
              boundary: u,
              rootBoundary: d,
              strategy: s,
            })
          ),
          y =
            "floating" === c
              ? {
                  x: r,
                  y: o,
                  width: i.floating.width,
                  height: i.floating.height,
                }
              : i.reference,
          b = await (null == a.getOffsetParent
            ? void 0
            : a.getOffsetParent(l.floating)),
          E = ((await (null == a.isElement ? void 0 : a.isElement(b))) &&
            (await (null == a.getScale ? void 0 : a.getScale(b)))) || {
            x: 1,
            y: 1,
          },
          S = x(
            a.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: l,
                  rect: y,
                  offsetParent: b,
                  strategy: s,
                })
              : y
          );
        return {
          top: (g.top - S.top + h.top) / E.y,
          bottom: (S.bottom - g.bottom + h.bottom) / E.y,
          left: (g.left - S.left + h.left) / E.x,
          right: (S.right - g.right + h.right) / E.x,
        };
      }
      function k(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function R(e) {
        return o.some((t) => e[t] >= 0);
      }
      async function P(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          a = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          i = p(n),
          l = m(n),
          s = "y" === g(n),
          u = ["left", "top"].includes(i) ? -1 : 1,
          d = a && s ? -1 : 1,
          c = f(t, e),
          {
            mainAxis: h,
            crossAxis: v,
            alignmentAxis: y,
          } = "number" == typeof c
            ? { mainAxis: c, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: c.mainAxis || 0,
                crossAxis: c.crossAxis || 0,
                alignmentAxis: c.alignmentAxis,
              };
        return (
          l && "number" == typeof y && (v = "end" === l ? -1 * y : y),
          s ? { x: v * d, y: h * u } : { x: h * u, y: v * d }
        );
      }
      function M() {
        return "undefined" != typeof window;
      }
      function A(e) {
        return N(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function T(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function j(e) {
        var t;
        return null ==
          (t = (N(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function N(e) {
        return !!M() && (e instanceof Node || e instanceof T(e).Node);
      }
      function L(e) {
        return !!M() && (e instanceof Element || e instanceof T(e).Element);
      }
      function _(e) {
        return (
          !!M() && (e instanceof HTMLElement || e instanceof T(e).HTMLElement)
        );
      }
      function O(e) {
        return (
          !!M() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof T(e).ShadowRoot)
        );
      }
      function D(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = F(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function I(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function z(e) {
        let t = B(),
          n = L(e) ? F(e) : e;
        return (
          ["transform", "translate", "scale", "rotate", "perspective"].some(
            (e) => !!n[e] && "none" !== n[e]
          ) ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          [
            "transform",
            "translate",
            "scale",
            "rotate",
            "perspective",
            "filter",
          ].some((e) => (n.willChange || "").includes(e)) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function B() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function H(e) {
        return ["html", "body", "#document"].includes(A(e));
      }
      function F(e) {
        return T(e).getComputedStyle(e);
      }
      function W(e) {
        return L(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function Y(e) {
        if ("html" === A(e)) return e;
        let t = e.assignedSlot || e.parentNode || (O(e) && e.host) || j(e);
        return O(t) ? t.host : t;
      }
      function V(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = Y(t);
            return H(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : _(n) && D(n)
              ? n
              : e(n);
          })(e),
          a = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          i = T(o);
        if (a) {
          let e = G(i);
          return t.concat(
            i,
            i.visualViewport || [],
            D(o) ? o : [],
            e && n ? V(e) : []
          );
        }
        return t.concat(o, V(o, [], n));
      }
      function G(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function U(e) {
        let t = F(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = _(e),
          a = o ? e.offsetWidth : n,
          i = o ? e.offsetHeight : r,
          s = l(n) !== a || l(r) !== i;
        return s && ((n = a), (r = i)), { width: n, height: r, $: s };
      }
      function X(e) {
        return L(e) ? e : e.contextElement;
      }
      function q(e) {
        let t = X(e);
        if (!_(t)) return u(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: a } = U(t),
          i = (a ? l(n.width) : n.width) / r,
          s = (a ? l(n.height) : n.height) / o;
        return (
          (i && Number.isFinite(i)) || (i = 1),
          (s && Number.isFinite(s)) || (s = 1),
          { x: i, y: s }
        );
      }
      let K = u(0);
      function $(e) {
        let t = T(e);
        return B() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : K;
      }
      function Z(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let a = e.getBoundingClientRect(),
          i = X(e),
          l = u(1);
        t && (r ? L(r) && (l = q(r)) : (l = q(e)));
        let s = (void 0 === (o = n) && (o = !1), r && (!o || r === T(i)) && o)
            ? $(i)
            : u(0),
          d = (a.left + s.x) / l.x,
          c = (a.top + s.y) / l.y,
          f = a.width / l.x,
          p = a.height / l.y;
        if (i) {
          let e = T(i),
            t = r && L(r) ? T(r) : r,
            n = e,
            o = G(n);
          for (; o && r && t !== n; ) {
            let e = q(o),
              t = o.getBoundingClientRect(),
              r = F(o),
              a = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              i = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (d *= e.x),
              (c *= e.y),
              (f *= e.x),
              (p *= e.y),
              (d += a),
              (c += i),
              (o = G((n = T(o))));
          }
        }
        return x({ width: f, height: p, x: d, y: c });
      }
      function J(e, t) {
        let n = W(e).scrollLeft;
        return t ? t.left + n : Z(j(e)).left + n;
      }
      function Q(e, t, n) {
        void 0 === n && (n = !1);
        let r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : J(e, r)),
          y: r.top + t.scrollTop,
        };
      }
      function ee(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = T(e),
              r = j(e),
              o = n.visualViewport,
              a = r.clientWidth,
              i = r.clientHeight,
              l = 0,
              s = 0;
            if (o) {
              (a = o.width), (i = o.height);
              let e = B();
              (!e || (e && "fixed" === t)) &&
                ((l = o.offsetLeft), (s = o.offsetTop));
            }
            return { width: a, height: i, x: l, y: s };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = j(e),
              n = W(e),
              r = e.ownerDocument.body,
              o = i(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              a = i(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              l = -n.scrollLeft + J(e),
              s = -n.scrollTop;
            return (
              "rtl" === F(r).direction &&
                (l += i(t.clientWidth, r.clientWidth) - o),
              { width: o, height: a, x: l, y: s }
            );
          })(j(e));
        else if (L(t))
          r = (function (e, t) {
            let n = Z(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              a = _(e) ? q(e) : u(1),
              i = e.clientWidth * a.x,
              l = e.clientHeight * a.y;
            return { width: i, height: l, x: o * a.x, y: r * a.y };
          })(t, n);
        else {
          let n = $(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return x(r);
      }
      function et(e) {
        return "static" === F(e).position;
      }
      function en(e, t) {
        if (!_(e) || "fixed" === F(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return j(e) === n && (n = n.ownerDocument.body), n;
      }
      function er(e, t) {
        let n = T(e);
        if (I(e)) return n;
        if (!_(e)) {
          let t = Y(e);
          for (; t && !H(t); ) {
            if (L(t) && !et(t)) return t;
            t = Y(t);
          }
          return n;
        }
        let r = en(e, t);
        for (; r && ["table", "td", "th"].includes(A(r)) && et(r); )
          r = en(r, t);
        return r && H(r) && et(r) && !z(r)
          ? n
          : r ||
              (function (e) {
                let t = Y(e);
                for (; _(t) && !H(t); ) {
                  if (z(t)) return t;
                  if (I(t)) break;
                  t = Y(t);
                }
                return null;
              })(e) ||
              n;
      }
      let eo = async function (e) {
          let t = this.getOffsetParent || er,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = _(t),
                o = j(t),
                a = "fixed" === n,
                i = Z(e, !0, a, t),
                l = { scrollLeft: 0, scrollTop: 0 },
                s = u(0);
              if (r || (!r && !a)) {
                if ((("body" !== A(t) || D(o)) && (l = W(t)), r)) {
                  let e = Z(t, !0, a, t);
                  (s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop);
                } else o && (s.x = J(o));
              }
              let d = !o || r || a ? u(0) : Q(o, l);
              return {
                x: i.left + l.scrollLeft - s.x - d.x,
                y: i.top + l.scrollTop - s.y - d.y,
                width: i.width,
                height: i.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        ea = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              a = "fixed" === o,
              i = j(r),
              l = !!t && I(t.floating);
            if (r === i || (l && a)) return n;
            let s = { scrollLeft: 0, scrollTop: 0 },
              d = u(1),
              c = u(0),
              f = _(r);
            if (
              (f || (!f && !a)) &&
              (("body" !== A(r) || D(i)) && (s = W(r)), _(r))
            ) {
              let e = Z(r);
              (d = q(r)), (c.x = e.x + r.clientLeft), (c.y = e.y + r.clientTop);
            }
            let p = !i || f || a ? u(0) : Q(i, s, !0);
            return {
              width: n.width * d.x,
              height: n.height * d.y,
              x: n.x * d.x - s.scrollLeft * d.x + c.x + p.x,
              y: n.y * d.y - s.scrollTop * d.y + c.y + p.y,
            };
          },
          getDocumentElement: j,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              l = [
                ...("clippingAncestors" === n
                  ? I(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = V(e, [], !1).filter(
                            (e) => L(e) && "body" !== A(e)
                          ),
                          o = null,
                          a = "fixed" === F(e).position,
                          i = a ? Y(e) : e;
                        for (; L(i) && !H(i); ) {
                          let t = F(i),
                            n = z(i);
                          n || "fixed" !== t.position || (o = null),
                            (
                              a
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    !!o &&
                                    ["absolute", "fixed"].includes(
                                      o.position
                                    )) ||
                                  (D(i) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = Y(t);
                                      return (
                                        !(r === n || !L(r) || H(r)) &&
                                        ("fixed" === F(r).position || e(r, n))
                                      );
                                    })(e, i))
                            )
                              ? (r = r.filter((e) => e !== i))
                              : (o = t),
                            (i = Y(i));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              s = l[0],
              u = l.reduce((e, n) => {
                let r = ee(t, n, o);
                return (
                  (e.top = i(r.top, e.top)),
                  (e.right = a(r.right, e.right)),
                  (e.bottom = a(r.bottom, e.bottom)),
                  (e.left = i(r.left, e.left)),
                  e
                );
              }, ee(t, s, o));
            return {
              width: u.right - u.left,
              height: u.bottom - u.top,
              x: u.left,
              y: u.top,
            };
          },
          getOffsetParent: er,
          getElementRects: eo,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = U(e);
            return { width: t, height: n };
          },
          getScale: q,
          isElement: L,
          isRTL: function (e) {
            return "rtl" === F(e).direction;
          },
        };
      function ei(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      let el = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: l,
                platform: s,
                elements: u,
                middlewareData: d,
              } = t,
              { element: c, padding: p = 0 } = f(e, t) || {};
            if (null == c) return {};
            let y = w(p),
              b = { x: n, y: r },
              x = h(g(o)),
              E = v(x),
              S = await s.getDimensions(c),
              C = "y" === x,
              k = C ? "clientHeight" : "clientWidth",
              R = l.reference[E] + l.reference[x] - b[x] - l.floating[E],
              P = b[x] - l.reference[x],
              M = await (null == s.getOffsetParent
                ? void 0
                : s.getOffsetParent(c)),
              A = M ? M[k] : 0;
            (A && (await (null == s.isElement ? void 0 : s.isElement(M)))) ||
              (A = u.floating[k] || l.floating[E]);
            let T = A / 2 - S[E] / 2 - 1,
              j = a(y[C ? "top" : "left"], T),
              N = a(y[C ? "bottom" : "right"], T),
              L = A - S[E] - N,
              _ = A / 2 - S[E] / 2 + (R / 2 - P / 2),
              O = i(j, a(_, L)),
              D =
                !d.arrow &&
                null != m(o) &&
                _ !== O &&
                l.reference[E] / 2 - (_ < j ? j : N) - S[E] / 2 < 0,
              I = D ? (_ < j ? _ - j : _ - L) : 0;
            return {
              [x]: b[x] + I,
              data: {
                [x]: O,
                centerOffset: _ - O - I,
                ...(D && { alignmentOffset: I }),
              },
              reset: D,
            };
          },
        }),
        es = (e, t, n) => {
          let r = new Map(),
            o = { platform: ea, ...n },
            a = { ...o.platform, _c: r };
          return S(e, t, { ...o, platform: a });
        };
      var eu = n(47650),
        ed = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function ec(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!ec(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !ec(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function ef(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function ep(e, t) {
        let n = ef(e);
        return Math.round(t * n) / n;
      }
      function em(e) {
        let t = r.useRef(e);
        return (
          ed(() => {
            t.current = e;
          }),
          t
        );
      }
      let eh = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? el({ element: n.current, padding: r }).fn(t)
                : {}
              : n
              ? el({ element: n, padding: r }).fn(t)
              : {};
          },
        }),
        ev = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = 0),
              {
                name: "offset",
                options: e,
                async fn(t) {
                  var n, r;
                  let { x: o, y: a, placement: i, middlewareData: l } = t,
                    s = await P(t, e);
                  return i ===
                    (null == (n = l.offset) ? void 0 : n.placement) &&
                    null != (r = l.arrow) &&
                    r.alignmentOffset
                    ? {}
                    : { x: o + s.x, y: a + s.y, data: { ...s, placement: i } };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eg = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "shift",
                options: e,
                async fn(t) {
                  let { x: n, y: r, placement: o } = t,
                    {
                      mainAxis: l = !0,
                      crossAxis: s = !1,
                      limiter: u = {
                        fn: (e) => {
                          let { x: t, y: n } = e;
                          return { x: t, y: n };
                        },
                      },
                      ...d
                    } = f(e, t),
                    c = { x: n, y: r },
                    m = await C(t, d),
                    v = g(p(o)),
                    y = h(v),
                    b = c[y],
                    w = c[v];
                  if (l) {
                    let e = "y" === y ? "top" : "left",
                      t = "y" === y ? "bottom" : "right",
                      n = b + m[e],
                      r = b - m[t];
                    b = i(n, a(b, r));
                  }
                  if (s) {
                    let e = "y" === v ? "top" : "left",
                      t = "y" === v ? "bottom" : "right",
                      n = w + m[e],
                      r = w - m[t];
                    w = i(n, a(w, r));
                  }
                  let x = u.fn({ ...t, [y]: b, [v]: w });
                  return {
                    ...x,
                    data: {
                      x: x.x - n,
                      y: x.y - r,
                      enabled: { [y]: l, [v]: s },
                    },
                  };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ey = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                options: e,
                fn(t) {
                  let {
                      x: n,
                      y: r,
                      placement: o,
                      rects: a,
                      middlewareData: i,
                    } = t,
                    {
                      offset: l = 0,
                      mainAxis: s = !0,
                      crossAxis: u = !0,
                    } = f(e, t),
                    d = { x: n, y: r },
                    c = g(o),
                    m = h(c),
                    v = d[m],
                    y = d[c],
                    b = f(l, t),
                    w =
                      "number" == typeof b
                        ? { mainAxis: b, crossAxis: 0 }
                        : { mainAxis: 0, crossAxis: 0, ...b };
                  if (s) {
                    let e = "y" === m ? "height" : "width",
                      t = a.reference[m] - a.floating[e] + w.mainAxis,
                      n = a.reference[m] + a.reference[e] - w.mainAxis;
                    v < t ? (v = t) : v > n && (v = n);
                  }
                  if (u) {
                    var x, E;
                    let e = "y" === m ? "width" : "height",
                      t = ["top", "left"].includes(p(o)),
                      n =
                        a.reference[c] -
                        a.floating[e] +
                        ((t && (null == (x = i.offset) ? void 0 : x[c])) || 0) +
                        (t ? 0 : w.crossAxis),
                      r =
                        a.reference[c] +
                        a.reference[e] +
                        (t
                          ? 0
                          : (null == (E = i.offset) ? void 0 : E[c]) || 0) -
                        (t ? w.crossAxis : 0);
                    y < n ? (y = n) : y > r && (y = r);
                  }
                  return { [m]: v, [c]: y };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eb = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "flip",
                options: e,
                async fn(t) {
                  var n, r, o, a, i;
                  let {
                      placement: l,
                      middlewareData: s,
                      rects: u,
                      initialPlacement: d,
                      platform: c,
                      elements: w,
                    } = t,
                    {
                      mainAxis: x = !0,
                      crossAxis: E = !0,
                      fallbackPlacements: S,
                      fallbackStrategy: k = "bestFit",
                      fallbackAxisSideDirection: R = "none",
                      flipAlignment: P = !0,
                      ...M
                    } = f(e, t);
                  if (null != (n = s.arrow) && n.alignmentOffset) return {};
                  let A = p(l),
                    T = g(d),
                    j = p(d) === d,
                    N = await (null == c.isRTL ? void 0 : c.isRTL(w.floating)),
                    L =
                      S ||
                      (j || !P
                        ? [b(d)]
                        : (function (e) {
                            let t = b(e);
                            return [y(e), t, y(t)];
                          })(d)),
                    _ = "none" !== R;
                  !S &&
                    _ &&
                    L.push(
                      ...(function (e, t, n, r) {
                        let o = m(e),
                          a = (function (e, t, n) {
                            let r = ["left", "right"],
                              o = ["right", "left"];
                            switch (e) {
                              case "top":
                              case "bottom":
                                if (n) return t ? o : r;
                                return t ? r : o;
                              case "left":
                              case "right":
                                return t
                                  ? ["top", "bottom"]
                                  : ["bottom", "top"];
                              default:
                                return [];
                            }
                          })(p(e), "start" === n, r);
                        return (
                          o &&
                            ((a = a.map((e) => e + "-" + o)),
                            t && (a = a.concat(a.map(y)))),
                          a
                        );
                      })(d, P, R, N)
                    );
                  let O = [d, ...L],
                    D = await C(t, M),
                    I = [],
                    z = (null == (r = s.flip) ? void 0 : r.overflows) || [];
                  if ((x && I.push(D[A]), E)) {
                    let e = (function (e, t, n) {
                      void 0 === n && (n = !1);
                      let r = m(e),
                        o = h(g(e)),
                        a = v(o),
                        i =
                          "x" === o
                            ? r === (n ? "end" : "start")
                              ? "right"
                              : "left"
                            : "start" === r
                            ? "bottom"
                            : "top";
                      return (
                        t.reference[a] > t.floating[a] && (i = b(i)), [i, b(i)]
                      );
                    })(l, u, N);
                    I.push(D[e[0]], D[e[1]]);
                  }
                  if (
                    ((z = [...z, { placement: l, overflows: I }]),
                    !I.every((e) => e <= 0))
                  ) {
                    let e =
                        ((null == (o = s.flip) ? void 0 : o.index) || 0) + 1,
                      t = O[e];
                    if (t)
                      return {
                        data: { index: e, overflows: z },
                        reset: { placement: t },
                      };
                    let n =
                      null ==
                      (a = z
                        .filter((e) => e.overflows[0] <= 0)
                        .sort((e, t) => e.overflows[1] - t.overflows[1])[0])
                        ? void 0
                        : a.placement;
                    if (!n)
                      switch (k) {
                        case "bestFit": {
                          let e =
                            null ==
                            (i = z
                              .filter((e) => {
                                if (_) {
                                  let t = g(e.placement);
                                  return t === T || "y" === t;
                                }
                                return !0;
                              })
                              .map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ])
                              .sort((e, t) => e[1] - t[1])[0])
                              ? void 0
                              : i[0];
                          e && (n = e);
                          break;
                        }
                        case "initialPlacement":
                          n = d;
                      }
                    if (l !== n) return { reset: { placement: n } };
                  }
                  return {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ew = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "size",
                options: e,
                async fn(t) {
                  var n, r;
                  let o, l;
                  let { placement: s, rects: u, platform: d, elements: c } = t,
                    { apply: h = () => {}, ...v } = f(e, t),
                    y = await C(t, v),
                    b = p(s),
                    w = m(s),
                    x = "y" === g(s),
                    { width: E, height: S } = u.floating;
                  "top" === b || "bottom" === b
                    ? ((o = b),
                      (l =
                        w ===
                        ((await (null == d.isRTL
                          ? void 0
                          : d.isRTL(c.floating)))
                          ? "start"
                          : "end")
                          ? "left"
                          : "right"))
                    : ((l = b), (o = "end" === w ? "top" : "bottom"));
                  let k = S - y.top - y.bottom,
                    R = E - y.left - y.right,
                    P = a(S - y[o], k),
                    M = a(E - y[l], R),
                    A = !t.middlewareData.shift,
                    T = P,
                    j = M;
                  if (
                    (null != (n = t.middlewareData.shift) &&
                      n.enabled.x &&
                      (j = R),
                    null != (r = t.middlewareData.shift) &&
                      r.enabled.y &&
                      (T = k),
                    A && !w)
                  ) {
                    let e = i(y.left, 0),
                      t = i(y.right, 0),
                      n = i(y.top, 0),
                      r = i(y.bottom, 0);
                    x
                      ? (j =
                          E -
                          2 * (0 !== e || 0 !== t ? e + t : i(y.left, y.right)))
                      : (T =
                          S -
                          2 *
                            (0 !== n || 0 !== r ? n + r : i(y.top, y.bottom)));
                  }
                  await h({ ...t, availableWidth: j, availableHeight: T });
                  let N = await d.getDimensions(c.floating);
                  return E !== N.width || S !== N.height
                    ? { reset: { rects: !0 } }
                    : {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ex = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "hide",
                options: e,
                async fn(t) {
                  let { rects: n } = t,
                    { strategy: r = "referenceHidden", ...o } = f(e, t);
                  switch (r) {
                    case "referenceHidden": {
                      let e = k(
                        await C(t, { ...o, elementContext: "reference" }),
                        n.reference
                      );
                      return {
                        data: {
                          referenceHiddenOffsets: e,
                          referenceHidden: R(e),
                        },
                      };
                    }
                    case "escaped": {
                      let e = k(
                        await C(t, { ...o, altBoundary: !0 }),
                        n.floating
                      );
                      return { data: { escapedOffsets: e, escaped: R(e) } };
                    }
                    default:
                      return {};
                  }
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eE = (e, t) => ({ ...eh(e), options: [e, t] });
      var eS = n(63655),
        eC = n(95155),
        ek = r.forwardRef((e, t) => {
          let { children: n, width: r = 10, height: o = 5, ...a } = e;
          return (0, eC.jsx)(eS.sG.svg, {
            ...a,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? n
              : (0, eC.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      ek.displayName = "Arrow";
      var eR = n(6101),
        eP = n(46081),
        eM = n(39033),
        eA = n(52712),
        eT = n(11275),
        ej = "Popper",
        [eN, eL] = (0, eP.A)(ej),
        [e_, eO] = eN(ej),
        eD = (e) => {
          let { __scopePopper: t, children: n } = e,
            [o, a] = r.useState(null);
          return (0, eC.jsx)(e_, {
            scope: t,
            anchor: o,
            onAnchorChange: a,
            children: n,
          });
        };
      eD.displayName = ej;
      var eI = "PopperAnchor",
        ez = r.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: o, ...a } = e,
            i = eO(eI, n),
            l = r.useRef(null),
            s = (0, eR.s)(t, l);
          return (
            r.useEffect(() => {
              i.onAnchorChange((null == o ? void 0 : o.current) || l.current);
            }),
            o ? null : (0, eC.jsx)(eS.sG.div, { ...a, ref: s })
          );
        });
      ez.displayName = eI;
      var eB = "PopperContent",
        [eH, eF] = eN(eB),
        eW = r.forwardRef((e, t) => {
          var n, o, l, u, d, c, f, p;
          let {
              __scopePopper: m,
              side: h = "bottom",
              sideOffset: v = 0,
              align: g = "center",
              alignOffset: y = 0,
              arrowPadding: b = 0,
              avoidCollisions: w = !0,
              collisionBoundary: x = [],
              collisionPadding: E = 0,
              sticky: S = "partial",
              hideWhenDetached: C = !1,
              updatePositionStrategy: k = "optimized",
              onPlaced: R,
              ...P
            } = e,
            M = eO(eB, m),
            [A, T] = r.useState(null),
            N = (0, eR.s)(t, (e) => T(e)),
            [L, _] = r.useState(null),
            O = (0, eT.X)(L),
            D =
              null !== (f = null == O ? void 0 : O.width) && void 0 !== f
                ? f
                : 0,
            I =
              null !== (p = null == O ? void 0 : O.height) && void 0 !== p
                ? p
                : 0,
            z =
              "number" == typeof E
                ? E
                : { top: 0, right: 0, bottom: 0, left: 0, ...E },
            B = Array.isArray(x) ? x : [x],
            H = B.length > 0,
            F = { padding: z, boundary: B.filter(eU), altBoundary: H },
            {
              refs: W,
              floatingStyles: Y,
              placement: G,
              isPositioned: U,
              middlewareData: q,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: o = [],
                  platform: a,
                  elements: { reference: i, floating: l } = {},
                  transform: s = !0,
                  whileElementsMounted: u,
                  open: d,
                } = e,
                [c, f] = r.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, m] = r.useState(o);
              ec(p, o) || m(o);
              let [h, v] = r.useState(null),
                [g, y] = r.useState(null),
                b = r.useCallback((e) => {
                  e !== S.current && ((S.current = e), v(e));
                }, []),
                w = r.useCallback((e) => {
                  e !== C.current && ((C.current = e), y(e));
                }, []),
                x = i || h,
                E = l || g,
                S = r.useRef(null),
                C = r.useRef(null),
                k = r.useRef(c),
                R = null != u,
                P = em(u),
                M = em(a),
                A = em(d),
                T = r.useCallback(() => {
                  if (!S.current || !C.current) return;
                  let e = { placement: t, strategy: n, middleware: p };
                  M.current && (e.platform = M.current),
                    es(S.current, C.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== A.current };
                      j.current &&
                        !ec(k.current, t) &&
                        ((k.current = t),
                        eu.flushSync(() => {
                          f(t);
                        }));
                    });
                }, [p, t, n, M, A]);
              ed(() => {
                !1 === d &&
                  k.current.isPositioned &&
                  ((k.current.isPositioned = !1),
                  f((e) => ({ ...e, isPositioned: !1 })));
              }, [d]);
              let j = r.useRef(!1);
              ed(
                () => (
                  (j.current = !0),
                  () => {
                    j.current = !1;
                  }
                ),
                []
              ),
                ed(() => {
                  if ((x && (S.current = x), E && (C.current = E), x && E)) {
                    if (P.current) return P.current(x, E, T);
                    T();
                  }
                }, [x, E, T, P, R]);
              let N = r.useMemo(
                  () => ({
                    reference: S,
                    floating: C,
                    setReference: b,
                    setFloating: w,
                  }),
                  [b, w]
                ),
                L = r.useMemo(() => ({ reference: x, floating: E }), [x, E]),
                _ = r.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!L.floating) return e;
                  let t = ep(L.floating, c.x),
                    r = ep(L.floating, c.y);
                  return s
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(ef(L.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, s, L.floating, c.x, c.y]);
              return r.useMemo(
                () => ({
                  ...c,
                  update: T,
                  refs: N,
                  elements: L,
                  floatingStyles: _,
                }),
                [c, T, N, L, _]
              );
            })({
              strategy: "fixed",
              placement: h + ("center" !== g ? "-" + g : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: l = !0,
                      ancestorResize: u = !0,
                      elementResize: d = "function" == typeof ResizeObserver,
                      layoutShift: c = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: f = !1,
                    } = r,
                    p = X(e),
                    m = l || u ? [...(p ? V(p) : []), ...V(t)] : [];
                  m.forEach((e) => {
                    l && e.addEventListener("scroll", n, { passive: !0 }),
                      u && e.addEventListener("resize", n);
                  });
                  let h =
                      p && c
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = j(e);
                            function l() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function u(d, c) {
                                void 0 === d && (d = !1),
                                  void 0 === c && (c = 1),
                                  l();
                                let f = e.getBoundingClientRect(),
                                  { left: p, top: m, width: h, height: v } = f;
                                if ((d || t(), !h || !v)) return;
                                let g = s(m),
                                  y = s(o.clientWidth - (p + h)),
                                  b = {
                                    rootMargin:
                                      -g +
                                      "px " +
                                      -y +
                                      "px " +
                                      -s(o.clientHeight - (m + v)) +
                                      "px " +
                                      -s(p) +
                                      "px",
                                    threshold: i(0, a(1, c)) || 1,
                                  },
                                  w = !0;
                                function x(t) {
                                  let r = t[0].intersectionRatio;
                                  if (r !== c) {
                                    if (!w) return u();
                                    r
                                      ? u(!1, r)
                                      : (n = setTimeout(() => {
                                          u(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  1 !== r ||
                                    ei(f, e.getBoundingClientRect()) ||
                                    u(),
                                    (w = !1);
                                }
                                try {
                                  r = new IntersectionObserver(x, {
                                    ...b,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(x, b);
                                }
                                r.observe(e);
                              })(!0),
                              l
                            );
                          })(p, n)
                        : null,
                    v = -1,
                    g = null;
                  d &&
                    ((g = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === p &&
                        g &&
                        (g.unobserve(t),
                        cancelAnimationFrame(v),
                        (v = requestAnimationFrame(() => {
                          var e;
                          null == (e = g) || e.observe(t);
                        }))),
                        n();
                    })),
                    p && !f && g.observe(p),
                    g.observe(t));
                  let y = f ? Z(e) : null;
                  return (
                    f &&
                      (function t() {
                        let r = Z(e);
                        y && !ei(y, r) && n(),
                          (y = r),
                          (o = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      m.forEach((e) => {
                        l && e.removeEventListener("scroll", n),
                          u && e.removeEventListener("resize", n);
                      }),
                        null == h || h(),
                        null == (e = g) || e.disconnect(),
                        (g = null),
                        f && cancelAnimationFrame(o);
                    }
                  );
                })(...t, { animationFrame: "always" === k });
              },
              elements: { reference: M.anchor },
              middleware: [
                ev({ mainAxis: v + I, alignmentAxis: y }),
                w &&
                  eg({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === S ? ey() : void 0,
                    ...F,
                  }),
                w && eb({ ...F }),
                ew({
                  ...F,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: o,
                      } = e,
                      { width: a, height: i } = n.reference,
                      l = t.floating.style;
                    l.setProperty(
                      "--radix-popper-available-width",
                      "".concat(r, "px")
                    ),
                      l.setProperty(
                        "--radix-popper-available-height",
                        "".concat(o, "px")
                      ),
                      l.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(a, "px")
                      ),
                      l.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(i, "px")
                      );
                  },
                }),
                L && eE({ element: L, padding: b }),
                eX({ arrowWidth: D, arrowHeight: I }),
                C && ex({ strategy: "referenceHidden", ...F }),
              ],
            }),
            [K, $] = eq(G),
            J = (0, eM.c)(R);
          (0, eA.N)(() => {
            U && (null == J || J());
          }, [U, J]);
          let Q = null === (n = q.arrow) || void 0 === n ? void 0 : n.x,
            ee = null === (o = q.arrow) || void 0 === o ? void 0 : o.y,
            et =
              (null === (l = q.arrow) || void 0 === l
                ? void 0
                : l.centerOffset) !== 0,
            [en, er] = r.useState();
          return (
            (0, eA.N)(() => {
              A && er(window.getComputedStyle(A).zIndex);
            }, [A]),
            (0, eC.jsx)("div", {
              ref: W.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...Y,
                transform: U ? Y.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: en,
                "--radix-popper-transform-origin": [
                  null === (u = q.transformOrigin) || void 0 === u
                    ? void 0
                    : u.x,
                  null === (d = q.transformOrigin) || void 0 === d
                    ? void 0
                    : d.y,
                ].join(" "),
                ...((null === (c = q.hide) || void 0 === c
                  ? void 0
                  : c.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, eC.jsx)(eH, {
                scope: m,
                placedSide: K,
                onArrowChange: _,
                arrowX: Q,
                arrowY: ee,
                shouldHideArrow: et,
                children: (0, eC.jsx)(eS.sG.div, {
                  "data-side": K,
                  "data-align": $,
                  ...P,
                  ref: N,
                  style: { ...P.style, animation: U ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      eW.displayName = eB;
      var eY = "PopperArrow",
        eV = { top: "bottom", right: "left", bottom: "top", left: "right" },
        eG = r.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = eF(eY, n),
            a = eV[o.placedSide];
          return (0,
          eC.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [a]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, eC.jsx)(ek, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
        });
      function eU(e) {
        return null !== e;
      }
      eG.displayName = eY;
      var eX = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, a, i;
          let { placement: l, rects: s, middlewareData: u } = t,
            d =
              (null === (n = u.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            c = d ? 0 : e.arrowWidth,
            f = d ? 0 : e.arrowHeight,
            [p, m] = eq(l),
            h = { start: "0%", center: "50%", end: "100%" }[m],
            v =
              (null !==
                (a = null === (r = u.arrow) || void 0 === r ? void 0 : r.x) &&
              void 0 !== a
                ? a
                : 0) +
              c / 2,
            g =
              (null !==
                (i = null === (o = u.arrow) || void 0 === o ? void 0 : o.y) &&
              void 0 !== i
                ? i
                : 0) +
              f / 2,
            y = "",
            b = "";
          return (
            "bottom" === p
              ? ((y = d ? h : "".concat(v, "px")), (b = "".concat(-f, "px")))
              : "top" === p
              ? ((y = d ? h : "".concat(v, "px")),
                (b = "".concat(s.floating.height + f, "px")))
              : "right" === p
              ? ((y = "".concat(-f, "px")), (b = d ? h : "".concat(g, "px")))
              : "left" === p &&
                ((y = "".concat(s.floating.width + f, "px")),
                (b = d ? h : "".concat(g, "px"))),
            { data: { x: y, y: b } }
          );
        },
      });
      function eq(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var eK = eD,
        e$ = ez,
        eZ = eW,
        eJ = eG;
    },
    38883: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        n(43230);
      let r = n(75100),
        o = n(95840);
      function a(e) {
        return void 0 !== e.default;
      }
      function i(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function l(e, t) {
        var n, l;
        let s,
          u,
          d,
          {
            src: c,
            sizes: f,
            unoptimized: p = !1,
            priority: m = !1,
            loading: h,
            className: v,
            quality: g,
            width: y,
            height: b,
            fill: w = !1,
            style: x,
            overrideSrc: E,
            onLoad: S,
            onLoadingComplete: C,
            placeholder: k = "empty",
            blurDataURL: R,
            fetchPriority: P,
            decoding: M = "async",
            layout: A,
            objectFit: T,
            objectPosition: j,
            lazyBoundary: N,
            lazyRoot: L,
            ..._
          } = e,
          { imgConf: O, showAltText: D, blurComplete: I, defaultLoader: z } = t,
          B = O || o.imageConfigDefault;
        if ("allSizes" in B) s = B;
        else {
          let e = [...B.deviceSizes, ...B.imageSizes].sort((e, t) => e - t),
            t = B.deviceSizes.sort((e, t) => e - t),
            r = null == (n = B.qualities) ? void 0 : n.sort((e, t) => e - t);
          s = { ...B, allSizes: e, deviceSizes: t, qualities: r };
        }
        if (void 0 === z)
          throw Object.defineProperty(
            Error(
              "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
            ),
            "__NEXT_ERROR_CODE",
            { value: "E163", enumerable: !1, configurable: !0 }
          );
        let H = _.loader || z;
        delete _.loader, delete _.srcSet;
        let F = "__next_img_default" in H;
        if (F) {
          if ("custom" === s.loader)
            throw Object.defineProperty(
              Error(
                'Image with src "' +
                  c +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              ),
              "__NEXT_ERROR_CODE",
              { value: "E252", enumerable: !1, configurable: !0 }
            );
        } else {
          let e = H;
          H = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (A) {
          "fill" === A && (w = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[A];
          e && (x = { ...x, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[A];
          t && !f && (f = t);
        }
        let W = "",
          Y = i(y),
          V = i(b);
        if ((l = c) && "object" == typeof l && (a(l) || void 0 !== l.src)) {
          let e = a(c) ? c.default : c;
          if (!e.src)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                  JSON.stringify(e)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E460", enumerable: !1, configurable: !0 }
            );
          if (!e.height || !e.width)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                  JSON.stringify(e)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E48", enumerable: !1, configurable: !0 }
            );
          if (
            ((u = e.blurWidth),
            (d = e.blurHeight),
            (R = R || e.blurDataURL),
            (W = e.src),
            !w)
          ) {
            if (Y || V) {
              if (Y && !V) {
                let t = Y / e.width;
                V = Math.round(e.height * t);
              } else if (!Y && V) {
                let t = V / e.height;
                Y = Math.round(e.width * t);
              }
            } else (Y = e.width), (V = e.height);
          }
        }
        let G = !m && ("lazy" === h || void 0 === h);
        (!(c = "string" == typeof c ? c : W) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((p = !0), (G = !1)),
          s.unoptimized && (p = !0),
          F &&
            !s.dangerouslyAllowSVG &&
            c.split("?", 1)[0].endsWith(".svg") &&
            (p = !0);
        let U = i(g),
          X = Object.assign(
            w
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: T,
                  objectPosition: j,
                }
              : {},
            D ? {} : { color: "transparent" },
            x
          ),
          q =
            I || "empty" === k
              ? null
              : "blur" === k
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: Y,
                  heightInt: V,
                  blurWidth: u,
                  blurHeight: d,
                  blurDataURL: R || "",
                  objectFit: X.objectFit,
                }) +
                '")'
              : 'url("' + k + '")',
          K = q
            ? {
                backgroundSize: X.objectFit || "cover",
                backgroundPosition: X.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: q,
              }
            : {},
          $ = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: o,
              quality: a,
              sizes: i,
              loader: l,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: s, kind: u } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: o } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: o.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => o.find((t) => t >= e) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, o, i),
              d = s.length - 1;
            return {
              sizes: i || "w" !== u ? i : "100vw",
              srcSet: s
                .map(
                  (e, r) =>
                    l({ config: t, src: n, quality: a, width: e }) +
                    " " +
                    ("w" === u ? e : r + 1) +
                    u
                )
                .join(", "),
              src: l({ config: t, src: n, quality: a, width: s[d] }),
            };
          })({
            config: s,
            src: c,
            unoptimized: p,
            width: Y,
            quality: U,
            sizes: f,
            loader: H,
          });
        return {
          props: {
            ..._,
            loading: G ? "lazy" : h,
            fetchPriority: P,
            width: Y,
            height: V,
            decoding: M,
            className: v,
            style: { ...X, ...K },
            sizes: $.sizes,
            srcSet: $.srcSet,
            src: E || $.src,
          },
          meta: { unoptimized: p, priority: m, placeholder: k, fill: w },
        };
      }
    },
    39033: (e, t, n) => {
      n.d(t, { c: () => o });
      var r = n(12115);
      function o(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    40288: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("Gamepad2", [
        ["line", { x1: "6", x2: "10", y1: "11", y2: "11", key: "1gktln" }],
        ["line", { x1: "8", x2: "8", y1: "9", y2: "13", key: "qnk9ow" }],
        ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12", key: "krot7o" }],
        ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10", key: "1lcuu1" }],
        [
          "path",
          {
            d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
            key: "mfqc10",
          },
        ],
      ]);
    },
    42464: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(88229)._(n(12115)).default.createContext({});
    },
    43969: (e, t, n) => {
      n.d(t, { _: () => r });
      function r(e, t, n) {
        if (!t.has(e))
          throw TypeError(
            "attempted to " + n + " private field on non-instance"
          );
        return t.get(e);
      }
    },
    45503: (e, t, n) => {
      n.d(t, { Z: () => o });
      var r = n(12115);
      function o(e) {
        let t = r.useRef({ value: e, previous: e });
        return r.useMemo(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    46081: (e, t, n) => {
      n.d(t, { A: () => a });
      var r = n(12115),
        o = n(95155);
      function a(e, t = []) {
        let n = [],
          i = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let o = n?.[e] || t;
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                [n, o]
              );
            };
          };
        return (
          (i.scopeName = e),
          [
            function (t, a) {
              let i = r.createContext(a),
                l = n.length;
              n = [...n, a];
              let s = (t) => {
                let { scope: n, children: a, ...s } = t,
                  u = n?.[e]?.[l] || i,
                  d = r.useMemo(() => s, Object.values(s));
                return (0, o.jsx)(u.Provider, { value: d, children: a });
              };
              return (
                (s.displayName = t + "Provider"),
                [
                  s,
                  function (n, o) {
                    let s = o?.[e]?.[l] || i,
                      u = r.useContext(s);
                    if (u) return u;
                    if (void 0 !== a) return a;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(i, ...t),
          ]
        );
      }
    },
    47863: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("ChevronUp", [
        ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
      ]);
    },
    49984: (e, t, n) => {
      n.d(t, { A: () => r });
      function r(e) {
        return e;
      }
    },
    51193: (e, t) => {
      function n(e) {
        var t;
        let { config: n, src: r, width: o, quality: a } = e,
          i =
            a ||
            (null == (t = n.qualities)
              ? void 0
              : t.reduce((e, t) =>
                  Math.abs(t - 75) < Math.abs(e - 75) ? t : e
                )) ||
            75;
        return r;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    52712: (e, t, n) => {
      n.d(t, { N: () => o });
      var r = n(12115),
        o = globalThis?.document ? r.useLayoutEffect : () => {};
    },
    56671: (e, t, n) => {
      n.d(t, { l$: () => S, oR: () => y });
      var r = n(12115),
        o = n(47650);
      let a = (e) => {
          switch (e) {
            case "success":
              return s;
            case "info":
              return d;
            case "warning":
              return u;
            case "error":
              return c;
            default:
              return null;
          }
        },
        i = Array(12).fill(0),
        l = (e) => {
          let { visible: t, className: n } = e;
          return r.createElement(
            "div",
            {
              className: ["sonner-loading-wrapper", n]
                .filter(Boolean)
                .join(" "),
              "data-visible": t,
            },
            r.createElement(
              "div",
              { className: "sonner-spinner" },
              i.map((e, t) =>
                r.createElement("div", {
                  className: "sonner-loading-bar",
                  key: "spinner-bar-".concat(t),
                })
              )
            )
          );
        },
        s = r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          r.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd",
          })
        ),
        u = r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          r.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd",
          })
        ),
        d = r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          r.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd",
          })
        ),
        c = r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          r.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd",
          })
        ),
        f = r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          r.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          r.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        ),
        p = () => {
          let [e, t] = r.useState(document.hidden);
          return (
            r.useEffect(() => {
              let e = () => {
                t(document.hidden);
              };
              return (
                document.addEventListener("visibilitychange", e),
                () => window.removeEventListener("visibilitychange", e)
              );
            }, []),
            e
          );
        },
        m = 1;
      class h {
        constructor() {
          (this.subscribe = (e) => (
            this.subscribers.push(e),
            () => {
              let t = this.subscribers.indexOf(e);
              this.subscribers.splice(t, 1);
            }
          )),
            (this.publish = (e) => {
              this.subscribers.forEach((t) => t(e));
            }),
            (this.addToast = (e) => {
              this.publish(e), (this.toasts = [...this.toasts, e]);
            }),
            (this.create = (e) => {
              var t;
              let { message: n, ...r } = e,
                o =
                  "number" == typeof (null == e ? void 0 : e.id) ||
                  (null == (t = e.id) ? void 0 : t.length) > 0
                    ? e.id
                    : m++,
                a = this.toasts.find((e) => e.id === o),
                i = void 0 === e.dismissible || e.dismissible;
              return (
                this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
                a
                  ? (this.toasts = this.toasts.map((t) =>
                      t.id === o
                        ? (this.publish({ ...t, ...e, id: o, title: n }),
                          { ...t, ...e, id: o, dismissible: i, title: n })
                        : t
                    ))
                  : this.addToast({ title: n, ...r, dismissible: i, id: o }),
                o
              );
            }),
            (this.dismiss = (e) => (
              e
                ? (this.dismissedToasts.add(e),
                  requestAnimationFrame(() =>
                    this.subscribers.forEach((t) => t({ id: e, dismiss: !0 }))
                  ))
                : this.toasts.forEach((e) => {
                    this.subscribers.forEach((t) =>
                      t({ id: e.id, dismiss: !0 })
                    );
                  }),
              e
            )),
            (this.message = (e, t) => this.create({ ...t, message: e })),
            (this.error = (e, t) =>
              this.create({ ...t, message: e, type: "error" })),
            (this.success = (e, t) =>
              this.create({ ...t, type: "success", message: e })),
            (this.info = (e, t) =>
              this.create({ ...t, type: "info", message: e })),
            (this.warning = (e, t) =>
              this.create({ ...t, type: "warning", message: e })),
            (this.loading = (e, t) =>
              this.create({ ...t, type: "loading", message: e })),
            (this.promise = (e, t) => {
              let n, o;
              if (!t) return;
              void 0 !== t.loading &&
                (o = this.create({
                  ...t,
                  promise: e,
                  type: "loading",
                  message: t.loading,
                  description:
                    "function" != typeof t.description ? t.description : void 0,
                }));
              let a = Promise.resolve(e instanceof Function ? e() : e),
                i = void 0 !== o,
                l = a
                  .then(async (e) => {
                    if (((n = ["resolve", e]), r.isValidElement(e)))
                      (i = !1),
                        this.create({ id: o, type: "default", message: e });
                    else if (g(e) && !e.ok) {
                      i = !1;
                      let n =
                          "function" == typeof t.error
                            ? await t.error(
                                "HTTP error! status: ".concat(e.status)
                              )
                            : t.error,
                        a =
                          "function" == typeof t.description
                            ? await t.description(
                                "HTTP error! status: ".concat(e.status)
                              )
                            : t.description,
                        l =
                          "object" != typeof n || r.isValidElement(n)
                            ? { message: n }
                            : n;
                      this.create({
                        id: o,
                        type: "error",
                        description: a,
                        ...l,
                      });
                    } else if (e instanceof Error) {
                      i = !1;
                      let n =
                          "function" == typeof t.error
                            ? await t.error(e)
                            : t.error,
                        a =
                          "function" == typeof t.description
                            ? await t.description(e)
                            : t.description,
                        l =
                          "object" != typeof n || r.isValidElement(n)
                            ? { message: n }
                            : n;
                      this.create({
                        id: o,
                        type: "error",
                        description: a,
                        ...l,
                      });
                    } else if (void 0 !== t.success) {
                      i = !1;
                      let n =
                          "function" == typeof t.success
                            ? await t.success(e)
                            : t.success,
                        a =
                          "function" == typeof t.description
                            ? await t.description(e)
                            : t.description,
                        l =
                          "object" != typeof n || r.isValidElement(n)
                            ? { message: n }
                            : n;
                      this.create({
                        id: o,
                        type: "success",
                        description: a,
                        ...l,
                      });
                    }
                  })
                  .catch(async (e) => {
                    if (((n = ["reject", e]), void 0 !== t.error)) {
                      i = !1;
                      let n =
                          "function" == typeof t.error
                            ? await t.error(e)
                            : t.error,
                        a =
                          "function" == typeof t.description
                            ? await t.description(e)
                            : t.description,
                        l =
                          "object" != typeof n || r.isValidElement(n)
                            ? { message: n }
                            : n;
                      this.create({
                        id: o,
                        type: "error",
                        description: a,
                        ...l,
                      });
                    }
                  })
                  .finally(() => {
                    i && (this.dismiss(o), (o = void 0)),
                      null == t.finally || t.finally.call(t);
                  }),
                s = () =>
                  new Promise((e, t) =>
                    l
                      .then(() => ("reject" === n[0] ? t(n[1]) : e(n[1])))
                      .catch(t)
                  );
              return "string" != typeof o && "number" != typeof o
                ? { unwrap: s }
                : Object.assign(o, { unwrap: s });
            }),
            (this.custom = (e, t) => {
              let n = (null == t ? void 0 : t.id) || m++;
              return this.create({ jsx: e(n), id: n, ...t }), n;
            }),
            (this.getActiveToasts = () =>
              this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
            (this.subscribers = []),
            (this.toasts = []),
            (this.dismissedToasts = new Set());
        }
      }
      let v = new h(),
        g = (e) =>
          e &&
          "object" == typeof e &&
          "ok" in e &&
          "boolean" == typeof e.ok &&
          "status" in e &&
          "number" == typeof e.status,
        y = Object.assign(
          (e, t) => {
            let n = (null == t ? void 0 : t.id) || m++;
            return v.addToast({ title: e, ...t, id: n }), n;
          },
          {
            success: v.success,
            info: v.info,
            warning: v.warning,
            error: v.error,
            custom: v.custom,
            message: v.message,
            promise: v.promise,
            dismiss: v.dismiss,
            loading: v.loading,
          },
          { getHistory: () => v.toasts, getToasts: () => v.getActiveToasts() }
        );
      function b(e) {
        return void 0 !== e.label;
      }
      function w() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.filter(Boolean).join(" ");
      }
      !(function (e) {
        if (!e || "undefined" == typeof document) return;
        let t = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
        (n.type = "text/css"),
          t.appendChild(n),
          n.styleSheet
            ? (n.styleSheet.cssText = e)
            : n.appendChild(document.createTextNode(e));
      })(
        "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}"
      );
      let x = (e) => {
        var t, n, o, i, s, u, d, c, m, h, v;
        let {
            invert: g,
            toast: y,
            unstyled: x,
            interacting: E,
            setHeights: S,
            visibleToasts: C,
            heights: k,
            index: R,
            toasts: P,
            expanded: M,
            removeToast: A,
            defaultRichColors: T,
            closeButton: j,
            style: N,
            cancelButtonStyle: L,
            actionButtonStyle: _,
            className: O = "",
            descriptionClassName: D = "",
            duration: I,
            position: z,
            gap: B,
            expandByDefault: H,
            classNames: F,
            icons: W,
            closeButtonAriaLabel: Y = "Close toast",
          } = e,
          [V, G] = r.useState(null),
          [U, X] = r.useState(null),
          [q, K] = r.useState(!1),
          [$, Z] = r.useState(!1),
          [J, Q] = r.useState(!1),
          [ee, et] = r.useState(!1),
          [en, er] = r.useState(!1),
          [eo, ea] = r.useState(0),
          [ei, el] = r.useState(0),
          es = r.useRef(y.duration || I || 4e3),
          eu = r.useRef(null),
          ed = r.useRef(null),
          ec = 0 === R,
          ef = R + 1 <= C,
          ep = y.type,
          em = !1 !== y.dismissible,
          eh = y.className || "",
          ev = y.descriptionClassName || "",
          eg = r.useMemo(
            () => k.findIndex((e) => e.toastId === y.id) || 0,
            [k, y.id]
          ),
          ey = r.useMemo(() => {
            var e;
            return null != (e = y.closeButton) ? e : j;
          }, [y.closeButton, j]),
          eb = r.useMemo(() => y.duration || I || 4e3, [y.duration, I]),
          ew = r.useRef(0),
          ex = r.useRef(0),
          eE = r.useRef(0),
          eS = r.useRef(null),
          [eC, ek] = z.split("-"),
          eR = r.useMemo(
            () => k.reduce((e, t, n) => (n >= eg ? e : e + t.height), 0),
            [k, eg]
          ),
          eP = p(),
          eM = y.invert || g,
          eA = "loading" === ep;
        (ex.current = r.useMemo(() => eg * B + eR, [eg, eR])),
          r.useEffect(() => {
            es.current = eb;
          }, [eb]),
          r.useEffect(() => {
            K(!0);
          }, []),
          r.useEffect(() => {
            let e = ed.current;
            if (e) {
              let t = e.getBoundingClientRect().height;
              return (
                el(t),
                S((e) => [
                  { toastId: y.id, height: t, position: y.position },
                  ...e,
                ]),
                () => S((e) => e.filter((e) => e.toastId !== y.id))
              );
            }
          }, [S, y.id]),
          r.useLayoutEffect(() => {
            if (!q) return;
            let e = ed.current,
              t = e.style.height;
            e.style.height = "auto";
            let n = e.getBoundingClientRect().height;
            (e.style.height = t),
              el(n),
              S((e) =>
                e.find((e) => e.toastId === y.id)
                  ? e.map((e) => (e.toastId === y.id ? { ...e, height: n } : e))
                  : [{ toastId: y.id, height: n, position: y.position }, ...e]
              );
          }, [q, y.title, y.description, S, y.id]);
        let eT = r.useCallback(() => {
          Z(!0),
            ea(ex.current),
            S((e) => e.filter((e) => e.toastId !== y.id)),
            setTimeout(() => {
              A(y);
            }, 200);
        }, [y, A, S, ex]);
        r.useEffect(() => {
          let e;
          if (
            (!y.promise || "loading" !== ep) &&
            y.duration !== 1 / 0 &&
            "loading" !== y.type
          )
            return (
              M || E || eP
                ? (() => {
                    if (eE.current < ew.current) {
                      let e = new Date().getTime() - ew.current;
                      es.current = es.current - e;
                    }
                    eE.current = new Date().getTime();
                  })()
                : es.current !== 1 / 0 &&
                  ((ew.current = new Date().getTime()),
                  (e = setTimeout(() => {
                    null == y.onAutoClose || y.onAutoClose.call(y, y), eT();
                  }, es.current))),
              () => clearTimeout(e)
            );
        }, [M, E, y, ep, eP, eT]),
          r.useEffect(() => {
            y.delete && eT();
          }, [eT, y.delete]);
        let ej = y.icon || (null == W ? void 0 : W[ep]) || a(ep);
        return r.createElement(
          "li",
          {
            tabIndex: 0,
            ref: ed,
            className: w(
              O,
              eh,
              null == F ? void 0 : F.toast,
              null == y
                ? void 0
                : null == (t = y.classNames)
                ? void 0
                : t.toast,
              null == F ? void 0 : F.default,
              null == F ? void 0 : F[ep],
              null == y ? void 0 : null == (n = y.classNames) ? void 0 : n[ep]
            ),
            "data-sonner-toast": "",
            "data-rich-colors": null != (h = y.richColors) ? h : T,
            "data-styled": !(y.jsx || y.unstyled || x),
            "data-mounted": q,
            "data-promise": !!y.promise,
            "data-swiped": en,
            "data-removed": $,
            "data-visible": ef,
            "data-y-position": eC,
            "data-x-position": ek,
            "data-index": R,
            "data-front": ec,
            "data-swiping": J,
            "data-dismissible": em,
            "data-type": ep,
            "data-invert": eM,
            "data-swipe-out": ee,
            "data-swipe-direction": U,
            "data-expanded": !!(M || (H && q)),
            style: {
              "--index": R,
              "--toasts-before": R,
              "--z-index": P.length - R,
              "--offset": "".concat($ ? eo : ex.current, "px"),
              "--initial-height": H ? "auto" : "".concat(ei, "px"),
              ...N,
              ...y.style,
            },
            onDragEnd: () => {
              Q(!1), G(null), (eS.current = null);
            },
            onPointerDown: (e) => {
              !eA &&
                em &&
                ((eu.current = new Date()),
                ea(ex.current),
                e.target.setPointerCapture(e.pointerId),
                "BUTTON" !== e.target.tagName &&
                  (Q(!0), (eS.current = { x: e.clientX, y: e.clientY })));
            },
            onPointerUp: () => {
              var e, t, n, r, o;
              if (ee || !em) return;
              eS.current = null;
              let a = Number(
                  (null == (e = ed.current)
                    ? void 0
                    : e.style
                        .getPropertyValue("--swipe-amount-x")
                        .replace("px", "")) || 0
                ),
                i = Number(
                  (null == (t = ed.current)
                    ? void 0
                    : t.style
                        .getPropertyValue("--swipe-amount-y")
                        .replace("px", "")) || 0
                ),
                l =
                  new Date().getTime() -
                  (null == (n = eu.current) ? void 0 : n.getTime()),
                s = "x" === V ? a : i,
                u = Math.abs(s) / l;
              if (Math.abs(s) >= 45 || u > 0.11) {
                ea(ex.current),
                  null == y.onDismiss || y.onDismiss.call(y, y),
                  "x" === V
                    ? X(a > 0 ? "right" : "left")
                    : X(i > 0 ? "down" : "up"),
                  eT(),
                  et(!0);
                return;
              }
              null == (r = ed.current) ||
                r.style.setProperty("--swipe-amount-x", "0px"),
                null == (o = ed.current) ||
                  o.style.setProperty("--swipe-amount-y", "0px"),
                er(!1),
                Q(!1),
                G(null);
            },
            onPointerMove: (t) => {
              var n, r, o, a;
              if (
                !eS.current ||
                !em ||
                (null == (n = window.getSelection())
                  ? void 0
                  : n.toString().length) > 0
              )
                return;
              let i = t.clientY - eS.current.y,
                l = t.clientX - eS.current.x,
                s =
                  null != (a = e.swipeDirections)
                    ? a
                    : (function (e) {
                        let [t, n] = e.split("-"),
                          r = [];
                        return t && r.push(t), n && r.push(n), r;
                      })(z);
              !V &&
                (Math.abs(l) > 1 || Math.abs(i) > 1) &&
                G(Math.abs(l) > Math.abs(i) ? "x" : "y");
              let u = { x: 0, y: 0 },
                d = (e) => 1 / (1.5 + Math.abs(e) / 20);
              if ("y" === V) {
                if (s.includes("top") || s.includes("bottom")) {
                  if (
                    (s.includes("top") && i < 0) ||
                    (s.includes("bottom") && i > 0)
                  )
                    u.y = i;
                  else {
                    let e = i * d(i);
                    u.y = Math.abs(e) < Math.abs(i) ? e : i;
                  }
                }
              } else if (
                "x" === V &&
                (s.includes("left") || s.includes("right"))
              ) {
                if (
                  (s.includes("left") && l < 0) ||
                  (s.includes("right") && l > 0)
                )
                  u.x = l;
                else {
                  let e = l * d(l);
                  u.x = Math.abs(e) < Math.abs(l) ? e : l;
                }
              }
              (Math.abs(u.x) > 0 || Math.abs(u.y) > 0) && er(!0),
                null == (r = ed.current) ||
                  r.style.setProperty("--swipe-amount-x", "".concat(u.x, "px")),
                null == (o = ed.current) ||
                  o.style.setProperty("--swipe-amount-y", "".concat(u.y, "px"));
            },
          },
          ey && !y.jsx && "loading" !== ep
            ? r.createElement(
                "button",
                {
                  "aria-label": Y,
                  "data-disabled": eA,
                  "data-close-button": !0,
                  onClick:
                    eA || !em
                      ? () => {}
                      : () => {
                          eT(), null == y.onDismiss || y.onDismiss.call(y, y);
                        },
                  className: w(
                    null == F ? void 0 : F.closeButton,
                    null == y
                      ? void 0
                      : null == (o = y.classNames)
                      ? void 0
                      : o.closeButton
                  ),
                },
                null != (v = null == W ? void 0 : W.close) ? v : f
              )
            : null,
          (ep || y.icon || y.promise) &&
            null !== y.icon &&
            ((null == W ? void 0 : W[ep]) !== null || y.icon)
            ? r.createElement(
                "div",
                {
                  "data-icon": "",
                  className: w(
                    null == F ? void 0 : F.icon,
                    null == y
                      ? void 0
                      : null == (i = y.classNames)
                      ? void 0
                      : i.icon
                  ),
                },
                y.promise || ("loading" === y.type && !y.icon)
                  ? y.icon ||
                      (function () {
                        var e, t;
                        return (null == W ? void 0 : W.loading)
                          ? r.createElement(
                              "div",
                              {
                                className: w(
                                  null == F ? void 0 : F.loader,
                                  null == y
                                    ? void 0
                                    : null == (t = y.classNames)
                                    ? void 0
                                    : t.loader,
                                  "sonner-loader"
                                ),
                                "data-visible": "loading" === ep,
                              },
                              W.loading
                            )
                          : r.createElement(l, {
                              className: w(
                                null == F ? void 0 : F.loader,
                                null == y
                                  ? void 0
                                  : null == (e = y.classNames)
                                  ? void 0
                                  : e.loader
                              ),
                              visible: "loading" === ep,
                            });
                      })()
                  : null,
                "loading" !== y.type ? ej : null
              )
            : null,
          r.createElement(
            "div",
            {
              "data-content": "",
              className: w(
                null == F ? void 0 : F.content,
                null == y
                  ? void 0
                  : null == (s = y.classNames)
                  ? void 0
                  : s.content
              ),
            },
            r.createElement(
              "div",
              {
                "data-title": "",
                className: w(
                  null == F ? void 0 : F.title,
                  null == y
                    ? void 0
                    : null == (u = y.classNames)
                    ? void 0
                    : u.title
                ),
              },
              y.jsx ? y.jsx : "function" == typeof y.title ? y.title() : y.title
            ),
            y.description
              ? r.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: w(
                      D,
                      ev,
                      null == F ? void 0 : F.description,
                      null == y
                        ? void 0
                        : null == (d = y.classNames)
                        ? void 0
                        : d.description
                    ),
                  },
                  "function" == typeof y.description
                    ? y.description()
                    : y.description
                )
              : null
          ),
          r.isValidElement(y.cancel)
            ? y.cancel
            : y.cancel && b(y.cancel)
            ? r.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: y.cancelButtonStyle || L,
                  onClick: (e) => {
                    b(y.cancel) &&
                      em &&
                      (null == y.cancel.onClick ||
                        y.cancel.onClick.call(y.cancel, e),
                      eT());
                  },
                  className: w(
                    null == F ? void 0 : F.cancelButton,
                    null == y
                      ? void 0
                      : null == (c = y.classNames)
                      ? void 0
                      : c.cancelButton
                  ),
                },
                y.cancel.label
              )
            : null,
          r.isValidElement(y.action)
            ? y.action
            : y.action && b(y.action)
            ? r.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: y.actionButtonStyle || _,
                  onClick: (e) => {
                    b(y.action) &&
                      (null == y.action.onClick ||
                        y.action.onClick.call(y.action, e),
                      e.defaultPrevented || eT());
                  },
                  className: w(
                    null == F ? void 0 : F.actionButton,
                    null == y
                      ? void 0
                      : null == (m = y.classNames)
                      ? void 0
                      : m.actionButton
                  ),
                },
                y.action.label
              )
            : null
        );
      };
      function E() {
        if ("undefined" == typeof window || "undefined" == typeof document)
          return "ltr";
        let e = document.documentElement.getAttribute("dir");
        return "auto" !== e && e
          ? e
          : window.getComputedStyle(document.documentElement).direction;
      }
      let S = r.forwardRef(function (e, t) {
        let {
            invert: n,
            position: a = "bottom-right",
            hotkey: i = ["altKey", "KeyT"],
            expand: l,
            closeButton: s,
            className: u,
            offset: d,
            mobileOffset: c,
            theme: f = "light",
            richColors: p,
            duration: m,
            style: h,
            visibleToasts: g = 3,
            toastOptions: y,
            dir: b = E(),
            gap: w = 14,
            icons: S,
            containerAriaLabel: C = "Notifications",
          } = e,
          [k, R] = r.useState([]),
          P = r.useMemo(
            () =>
              Array.from(
                new Set(
                  [a].concat(k.filter((e) => e.position).map((e) => e.position))
                )
              ),
            [k, a]
          ),
          [M, A] = r.useState([]),
          [T, j] = r.useState(!1),
          [N, L] = r.useState(!1),
          [_, O] = r.useState(
            "system" !== f
              ? f
              : "undefined" != typeof window &&
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"
          ),
          D = r.useRef(null),
          I = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
          z = r.useRef(null),
          B = r.useRef(!1),
          H = r.useCallback((e) => {
            R((t) => {
              var n;
              return (
                (null == (n = t.find((t) => t.id === e.id))
                  ? void 0
                  : n.delete) || v.dismiss(e.id),
                t.filter((t) => {
                  let { id: n } = t;
                  return n !== e.id;
                })
              );
            });
          }, []);
        return (
          r.useEffect(
            () =>
              v.subscribe((e) => {
                if (e.dismiss) {
                  requestAnimationFrame(() => {
                    R((t) =>
                      t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t))
                    );
                  });
                  return;
                }
                setTimeout(() => {
                  o.flushSync(() => {
                    R((t) => {
                      let n = t.findIndex((t) => t.id === e.id);
                      return -1 !== n
                        ? [
                            ...t.slice(0, n),
                            { ...t[n], ...e },
                            ...t.slice(n + 1),
                          ]
                        : [e, ...t];
                    });
                  });
                });
              }),
            [k]
          ),
          r.useEffect(() => {
            if ("system" !== f) {
              O(f);
              return;
            }
            if (
              ("system" === f &&
                (window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? O("dark")
                  : O("light")),
              "undefined" == typeof window)
            )
              return;
            let e = window.matchMedia("(prefers-color-scheme: dark)");
            try {
              e.addEventListener("change", (e) => {
                let { matches: t } = e;
                t ? O("dark") : O("light");
              });
            } catch (t) {
              e.addListener((e) => {
                let { matches: t } = e;
                try {
                  t ? O("dark") : O("light");
                } catch (e) {
                  console.error(e);
                }
              });
            }
          }, [f]),
          r.useEffect(() => {
            k.length <= 1 && j(!1);
          }, [k]),
          r.useEffect(() => {
            let e = (e) => {
              var t, n;
              i.every((t) => e[t] || e.code === t) &&
                (j(!0), null == (n = D.current) || n.focus()),
                "Escape" === e.code &&
                  (document.activeElement === D.current ||
                    (null == (t = D.current)
                      ? void 0
                      : t.contains(document.activeElement))) &&
                  j(!1);
            };
            return (
              document.addEventListener("keydown", e),
              () => document.removeEventListener("keydown", e)
            );
          }, [i]),
          r.useEffect(() => {
            if (D.current)
              return () => {
                z.current &&
                  (z.current.focus({ preventScroll: !0 }),
                  (z.current = null),
                  (B.current = !1));
              };
          }, [D.current]),
          r.createElement(
            "section",
            {
              ref: t,
              "aria-label": "".concat(C, " ").concat(I),
              tabIndex: -1,
              "aria-live": "polite",
              "aria-relevant": "additions text",
              "aria-atomic": "false",
              suppressHydrationWarning: !0,
            },
            P.map((t, o) => {
              var a;
              let [i, f] = t.split("-");
              return k.length
                ? r.createElement(
                    "ol",
                    {
                      key: t,
                      dir: "auto" === b ? E() : b,
                      tabIndex: -1,
                      ref: D,
                      className: u,
                      "data-sonner-toaster": !0,
                      "data-sonner-theme": _,
                      "data-y-position": i,
                      "data-lifted": T && k.length > 1 && !l,
                      "data-x-position": f,
                      style: {
                        "--front-toast-height": "".concat(
                          (null == (a = M[0]) ? void 0 : a.height) || 0,
                          "px"
                        ),
                        "--width": "".concat(356, "px"),
                        "--gap": "".concat(w, "px"),
                        ...h,
                        ...(function (e, t) {
                          let n = {};
                          return (
                            [e, t].forEach((e, t) => {
                              let r = 1 === t,
                                o = r ? "--mobile-offset" : "--offset",
                                a = r ? "16px" : "24px";
                              function i(e) {
                                ["top", "right", "bottom", "left"].forEach(
                                  (t) => {
                                    n["".concat(o, "-").concat(t)] =
                                      "number" == typeof e
                                        ? "".concat(e, "px")
                                        : e;
                                  }
                                );
                              }
                              "number" == typeof e || "string" == typeof e
                                ? i(e)
                                : "object" == typeof e
                                ? ["top", "right", "bottom", "left"].forEach(
                                    (t) => {
                                      void 0 === e[t]
                                        ? (n["".concat(o, "-").concat(t)] = a)
                                        : (n["".concat(o, "-").concat(t)] =
                                            "number" == typeof e[t]
                                              ? "".concat(e[t], "px")
                                              : e[t]);
                                    }
                                  )
                                : i(a);
                            }),
                            n
                          );
                        })(d, c),
                      },
                      onBlur: (e) => {
                        B.current &&
                          !e.currentTarget.contains(e.relatedTarget) &&
                          ((B.current = !1),
                          z.current &&
                            (z.current.focus({ preventScroll: !0 }),
                            (z.current = null)));
                      },
                      onFocus: (e) => {
                        (e.target instanceof HTMLElement &&
                          "false" === e.target.dataset.dismissible) ||
                          B.current ||
                          ((B.current = !0), (z.current = e.relatedTarget));
                      },
                      onMouseEnter: () => j(!0),
                      onMouseMove: () => j(!0),
                      onMouseLeave: () => {
                        N || j(!1);
                      },
                      onDragEnd: () => j(!1),
                      onPointerDown: (e) => {
                        (e.target instanceof HTMLElement &&
                          "false" === e.target.dataset.dismissible) ||
                          L(!0);
                      },
                      onPointerUp: () => L(!1),
                    },
                    k
                      .filter(
                        (e) => (!e.position && 0 === o) || e.position === t
                      )
                      .map((o, a) => {
                        var i, u;
                        return r.createElement(x, {
                          key: o.id,
                          icons: S,
                          index: a,
                          toast: o,
                          defaultRichColors: p,
                          duration:
                            null != (i = null == y ? void 0 : y.duration)
                              ? i
                              : m,
                          className: null == y ? void 0 : y.className,
                          descriptionClassName:
                            null == y ? void 0 : y.descriptionClassName,
                          invert: n,
                          visibleToasts: g,
                          closeButton:
                            null != (u = null == y ? void 0 : y.closeButton)
                              ? u
                              : s,
                          interacting: N,
                          position: t,
                          style: null == y ? void 0 : y.style,
                          unstyled: null == y ? void 0 : y.unstyled,
                          classNames: null == y ? void 0 : y.classNames,
                          cancelButtonStyle:
                            null == y ? void 0 : y.cancelButtonStyle,
                          actionButtonStyle:
                            null == y ? void 0 : y.actionButtonStyle,
                          closeButtonAriaLabel:
                            null == y ? void 0 : y.closeButtonAriaLabel,
                          removeToast: H,
                          toasts: k.filter((e) => e.position == o.position),
                          heights: M.filter((e) => e.position == o.position),
                          setHeights: A,
                          expandByDefault: l,
                          gap: w,
                          expanded: T,
                          swipeDirections: e.swipeDirections,
                        });
                      })
                  )
                : null;
            })
          )
        );
      });
    },
    57340: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("House", [
        [
          "path",
          { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
        ],
        [
          "path",
          {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "1d0kgt",
          },
        ],
      ]);
    },
    57395: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("Headphones", [
        [
          "path",
          {
            d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
            key: "1xhozi",
          },
        ],
      ]);
    },
    57434: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("FileText", [
        [
          "path",
          {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7",
          },
        ],
        ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
        ["path", { d: "M10 9H8", key: "b1mrlr" }],
        ["path", { d: "M16 13H8", key: "t4e002" }],
        ["path", { d: "M16 17H8", key: "z1uh3a" }],
      ]);
    },
    61285: (e, t, n) => {
      n.d(t, { B: () => s });
      var r,
        o = n(12115),
        a = n(52712),
        i =
          (r || (r = n.t(o, 2)))[" useId ".trim().toString()] || (() => void 0),
        l = 0;
      function s(e) {
        let [t, n] = o.useState(i());
        return (
          (0, a.N)(() => {
            e || n((e) => e ?? String(l++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    63655: (e, t, n) => {
      n.d(t, { hO: () => s, sG: () => l });
      var r = n(12115),
        o = n(47650),
        a = n(99708),
        i = n(95155),
        l = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "select",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = (0, a.TL)(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              let { asChild: o, ...a } = e;
              return (
                "undefined" != typeof window &&
                  (window[Symbol.for("radix-ui")] = !0),
                (0, i.jsx)(o ? n : t, { ...a, ref: r })
              );
            });
          return (o.displayName = `Primitive.${t}`), { ...e, [t]: o };
        }, {});
      function s(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    64360: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("LibraryBig", [
        [
          "rect",
          { width: "8", height: "18", x: "3", y: "3", rx: "1", key: "oynpb5" },
        ],
        ["path", { d: "M7 3v18", key: "bbkbws" }],
        [
          "path",
          {
            d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",
            key: "1qboyk",
          },
        ],
      ]);
    },
    66474: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    66766: (e, t, n) => {
      n.d(t, { default: () => o.a });
      var r = n(71469),
        o = n.n(r);
    },
    70901: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(88229)._(n(12115)).default.createContext(null);
    },
    71469: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return s;
          },
          getImageProps: function () {
            return l;
          },
        });
      let r = n(88229),
        o = n(38883),
        a = n(33063),
        i = r._(n(51193));
      function l(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: i.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let s = a.Image;
    },
    72281: (e, t, n) => {
      n.d(t, {
        UC: () => tl,
        In: () => ta,
        q7: () => tu,
        VF: () => tc,
        p4: () => td,
        ZL: () => ti,
        bL: () => tn,
        wn: () => tp,
        PP: () => tf,
        l9: () => tr,
        WT: () => to,
        LM: () => ts,
      });
      var r = n(12115),
        o = n(47650);
      function a(e, [t, n]) {
        return Math.min(n, Math.max(t, e));
      }
      var i = n(85185),
        l = n(82284),
        s = n(6101),
        u = n(46081),
        d = n(94315),
        c = n(19178),
        f = 0;
      function p() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
      var m = n(63655),
        h = n(39033),
        v = n(95155),
        g = "focusScope.autoFocusOnMount",
        y = "focusScope.autoFocusOnUnmount",
        b = { bubbles: !1, cancelable: !0 },
        w = r.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: o = !1,
              onMountAutoFocus: a,
              onUnmountAutoFocus: i,
              ...l
            } = e,
            [u, d] = r.useState(null),
            c = (0, h.c)(a),
            f = (0, h.c)(i),
            p = r.useRef(null),
            w = (0, s.s)(t, (e) => d(e)),
            k = r.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          r.useEffect(() => {
            if (o) {
              let e = function (e) {
                  if (k.paused || !u) return;
                  let t = e.target;
                  u.contains(t)
                    ? (p.current = t)
                    : S(p.current, { select: !0 });
                },
                t = function (e) {
                  if (k.paused || !u) return;
                  let t = e.relatedTarget;
                  null === t || u.contains(t) || S(p.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && S(u);
              });
              return (
                u && n.observe(u, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [o, u, k.paused]),
            r.useEffect(() => {
              if (u) {
                C.add(k);
                let e = document.activeElement;
                if (!u.contains(e)) {
                  let t = new CustomEvent(g, b);
                  u.addEventListener(g, c),
                    u.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (S(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        x(u).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && S(u));
                }
                return () => {
                  u.removeEventListener(g, c),
                    setTimeout(() => {
                      let t = new CustomEvent(y, b);
                      u.addEventListener(y, f),
                        u.dispatchEvent(t),
                        t.defaultPrevented ||
                          S(null != e ? e : document.body, { select: !0 }),
                        u.removeEventListener(y, f),
                        C.remove(k);
                    }, 0);
                };
              }
            }, [u, c, f, k]);
          let R = r.useCallback(
            (e) => {
              if ((!n && !o) || k.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                r = document.activeElement;
              if (t && r) {
                let t = e.currentTarget,
                  [o, a] = (function (e) {
                    let t = x(e);
                    return [E(t, e), E(t.reverse(), e)];
                  })(t);
                o && a
                  ? e.shiftKey || r !== a
                    ? e.shiftKey &&
                      r === o &&
                      (e.preventDefault(), n && S(a, { select: !0 }))
                    : (e.preventDefault(), n && S(o, { select: !0 }))
                  : r === t && e.preventDefault();
              }
            },
            [n, o, k.paused]
          );
          return (0, v.jsx)(m.sG.div, {
            tabIndex: -1,
            ...l,
            ref: w,
            onKeyDown: R,
          });
        });
      function x(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function E(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function S(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      w.displayName = "FocusScope";
      var C = (function () {
        let e = [];
        return {
          add(t) {
            let n = e[0];
            t !== n && (null == n || n.pause()), (e = k(e, t)).unshift(t);
          },
          remove(t) {
            var n;
            null === (n = (e = k(e, t))[0]) || void 0 === n || n.resume();
          },
        };
      })();
      function k(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      var R = n(61285),
        P = n(35152),
        M = n(34378),
        A = n(99708),
        T = n(5845),
        j = n(52712),
        N = n(45503),
        L = n(2564),
        _ = function (e) {
          return "undefined" == typeof document
            ? null
            : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
        },
        O = new WeakMap(),
        D = new WeakMap(),
        I = {},
        z = 0,
        B = function (e) {
          return e && (e.host || B(e.parentNode));
        },
        H = function (e, t, n, r) {
          var o = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = B(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          I[n] || (I[n] = new WeakMap());
          var a = I[n],
            i = [],
            l = new Set(),
            s = new Set(o),
            u = function (e) {
              !(!e || l.has(e)) && (l.add(e), u(e.parentNode));
            };
          o.forEach(u);
          var d = function (e) {
            !(!e || s.has(e)) &&
              Array.prototype.forEach.call(e.children, function (e) {
                if (l.has(e)) d(e);
                else
                  try {
                    var t = e.getAttribute(r),
                      o = null !== t && "false" !== t,
                      s = (O.get(e) || 0) + 1,
                      u = (a.get(e) || 0) + 1;
                    O.set(e, s),
                      a.set(e, u),
                      i.push(e),
                      1 === s && o && D.set(e, !0),
                      1 === u && e.setAttribute(n, "true"),
                      o || e.setAttribute(r, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            d(t),
            l.clear(),
            z++,
            function () {
              i.forEach(function (e) {
                var t = O.get(e) - 1,
                  o = a.get(e) - 1;
                O.set(e, t),
                  a.set(e, o),
                  t || (D.has(e) || e.removeAttribute(r), D.delete(e)),
                  o || e.removeAttribute(n);
              }),
                --z ||
                  ((O = new WeakMap()),
                  (O = new WeakMap()),
                  (D = new WeakMap()),
                  (I = {}));
            }
          );
        },
        F = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || _(e);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              H(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        },
        W = n(39249),
        Y = n(56985),
        V = n(70464),
        G = (0, n(37548).f)(),
        U = function () {},
        X = r.forwardRef(function (e, t) {
          var n = r.useRef(null),
            o = r.useState({
              onScrollCapture: U,
              onWheelCapture: U,
              onTouchMoveCapture: U,
            }),
            a = o[0],
            i = o[1],
            l = e.forwardProps,
            s = e.children,
            u = e.className,
            d = e.removeScrollBar,
            c = e.enabled,
            f = e.shards,
            p = e.sideCar,
            m = e.noIsolation,
            h = e.inert,
            v = e.allowPinchZoom,
            g = e.as,
            y = e.gapMode,
            b = (0, W.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            w = (0, V.S)([n, t]),
            x = (0, W.__assign)((0, W.__assign)({}, b), a);
          return r.createElement(
            r.Fragment,
            null,
            c &&
              r.createElement(p, {
                sideCar: G,
                removeScrollBar: d,
                shards: f,
                noIsolation: m,
                inert: h,
                setCallbacks: i,
                allowPinchZoom: !!v,
                lockRef: n,
                gapMode: y,
              }),
            l
              ? r.cloneElement(
                  r.Children.only(s),
                  (0, W.__assign)((0, W.__assign)({}, x), { ref: w })
                )
              : r.createElement(
                  void 0 === g ? "div" : g,
                  (0, W.__assign)({}, x, { className: u, ref: w }),
                  s
                )
          );
        });
      (X.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (X.classNames = { fullWidth: Y.pN, zeroRight: Y.Mi });
      var q = n(50514),
        K = n(21515),
        $ = n(29874),
        Z = !1;
      if ("undefined" != typeof window)
        try {
          var J = Object.defineProperty({}, "passive", {
            get: function () {
              return (Z = !0), !0;
            },
          });
          window.addEventListener("test", J, J),
            window.removeEventListener("test", J, J);
        } catch (e) {
          Z = !1;
        }
      var Q = !!Z && { passive: !1 },
        ee = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== n[t])
          );
        },
        et = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              en(e, r))
            ) {
              var o = er(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        en = function (e, t) {
          return "v" === e ? ee(t, "overflowY") : ee(t, "overflowX");
        },
        er = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        eo = function (e, t, n, r, o) {
          var a,
            i =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            l = i * r,
            s = n.target,
            u = t.contains(s),
            d = !1,
            c = l > 0,
            f = 0,
            p = 0;
          do {
            var m = er(e, s),
              h = m[0],
              v = m[1] - m[2] - i * h;
            (h || v) && en(e, s) && ((f += v), (p += h)),
              (s = s instanceof ShadowRoot ? s.host : s.parentNode);
          } while (
            (!u && s !== document.body) ||
            (u && (t.contains(s) || t === s))
          );
          return (
            c && ((o && 1 > Math.abs(f)) || (!o && l > f))
              ? (d = !0)
              : !c && ((o && 1 > Math.abs(p)) || (!o && -l > p)) && (d = !0),
            d
          );
        },
        ea = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        ei = function (e) {
          return [e.deltaX, e.deltaY];
        },
        el = function (e) {
          return e && "current" in e ? e.current : e;
        },
        es = 0,
        eu = [];
      let ed = (0, q.m)(G, function (e) {
        var t = r.useRef([]),
          n = r.useRef([0, 0]),
          o = r.useRef(),
          a = r.useState(es++)[0],
          i = r.useState($.T0)[0],
          l = r.useRef(e);
        r.useEffect(
          function () {
            l.current = e;
          },
          [e]
        ),
          r.useEffect(
            function () {
              if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(a));
                var t = (0, W.__spreadArray)(
                  [e.lockRef.current],
                  (e.shards || []).map(el),
                  !0
                ).filter(Boolean);
                return (
                  t.forEach(function (e) {
                    return e.classList.add("allow-interactivity-".concat(a));
                  }),
                  function () {
                    document.body.classList.remove(
                      "block-interactivity-".concat(a)
                    ),
                      t.forEach(function (e) {
                        return e.classList.remove(
                          "allow-interactivity-".concat(a)
                        );
                      });
                  }
                );
              }
            },
            [e.inert, e.lockRef.current, e.shards]
          );
        var s = r.useCallback(function (e, t) {
            if (
              ("touches" in e && 2 === e.touches.length) ||
              ("wheel" === e.type && e.ctrlKey)
            )
              return !l.current.allowPinchZoom;
            var r,
              a = ea(e),
              i = n.current,
              s = "deltaX" in e ? e.deltaX : i[0] - a[0],
              u = "deltaY" in e ? e.deltaY : i[1] - a[1],
              d = e.target,
              c = Math.abs(s) > Math.abs(u) ? "h" : "v";
            if ("touches" in e && "h" === c && "range" === d.type) return !1;
            var f = et(c, d);
            if (!f) return !0;
            if (
              (f ? (r = c) : ((r = "v" === c ? "h" : "v"), (f = et(c, d))), !f)
            )
              return !1;
            if (
              (!o.current &&
                "changedTouches" in e &&
                (s || u) &&
                (o.current = r),
              !r)
            )
              return !0;
            var p = o.current || r;
            return eo(p, t, e, "h" === p ? s : u, !0);
          }, []),
          u = r.useCallback(function (e) {
            if (eu.length && eu[eu.length - 1] === i) {
              var n = "deltaY" in e ? ei(e) : ea(e),
                r = t.current.filter(function (t) {
                  var r;
                  return (
                    t.name === e.type &&
                    (t.target === e.target || e.target === t.shadowParent) &&
                    (r = t.delta)[0] === n[0] &&
                    r[1] === n[1]
                  );
                })[0];
              if (r && r.should) {
                e.cancelable && e.preventDefault();
                return;
              }
              if (!r) {
                var o = (l.current.shards || [])
                  .map(el)
                  .filter(Boolean)
                  .filter(function (t) {
                    return t.contains(e.target);
                  });
                (o.length > 0 ? s(e, o[0]) : !l.current.noIsolation) &&
                  e.cancelable &&
                  e.preventDefault();
              }
            }
          }, []),
          d = r.useCallback(function (e, n, r, o) {
            var a = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: (function (e) {
                for (var t = null; null !== e; )
                  e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                    (e = e.parentNode);
                return t;
              })(r),
            };
            t.current.push(a),
              setTimeout(function () {
                t.current = t.current.filter(function (e) {
                  return e !== a;
                });
              }, 1);
          }, []),
          c = r.useCallback(function (e) {
            (n.current = ea(e)), (o.current = void 0);
          }, []),
          f = r.useCallback(function (t) {
            d(t.type, ei(t), t.target, s(t, e.lockRef.current));
          }, []),
          p = r.useCallback(function (t) {
            d(t.type, ea(t), t.target, s(t, e.lockRef.current));
          }, []);
        r.useEffect(function () {
          return (
            eu.push(i),
            e.setCallbacks({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: p,
            }),
            document.addEventListener("wheel", u, Q),
            document.addEventListener("touchmove", u, Q),
            document.addEventListener("touchstart", c, Q),
            function () {
              (eu = eu.filter(function (e) {
                return e !== i;
              })),
                document.removeEventListener("wheel", u, Q),
                document.removeEventListener("touchmove", u, Q),
                document.removeEventListener("touchstart", c, Q);
            }
          );
        }, []);
        var m = e.removeScrollBar,
          h = e.inert;
        return r.createElement(
          r.Fragment,
          null,
          h
            ? r.createElement(i, {
                styles: "\n  .block-interactivity-"
                  .concat(
                    a,
                    " {pointer-events: none;}\n  .allow-interactivity-"
                  )
                  .concat(a, " {pointer-events: all;}\n"),
              })
            : null,
          m ? r.createElement(K.jp, { gapMode: e.gapMode }) : null
        );
      });
      var ec = r.forwardRef(function (e, t) {
        return r.createElement(
          X,
          (0, W.__assign)({}, e, { ref: t, sideCar: ed })
        );
      });
      ec.classNames = X.classNames;
      var ef = [" ", "Enter", "ArrowUp", "ArrowDown"],
        ep = [" ", "Enter"],
        em = "Select",
        [eh, ev, eg] = (0, l.N)(em),
        [ey, eb] = (0, u.A)(em, [eg, P.Bk]),
        ew = (0, P.Bk)(),
        [ex, eE] = ey(em),
        [eS, eC] = ey(em),
        ek = (e) => {
          let {
              __scopeSelect: t,
              children: n,
              open: o,
              defaultOpen: a,
              onOpenChange: i,
              value: l,
              defaultValue: s,
              onValueChange: u,
              dir: c,
              name: f,
              autoComplete: p,
              disabled: m,
              required: h,
              form: g,
            } = e,
            y = ew(t),
            [b, w] = r.useState(null),
            [x, E] = r.useState(null),
            [S, C] = r.useState(!1),
            k = (0, d.jH)(c),
            [M, A] = (0, T.i)({
              prop: o,
              defaultProp: null != a && a,
              onChange: i,
              caller: em,
            }),
            [j, N] = (0, T.i)({
              prop: l,
              defaultProp: s,
              onChange: u,
              caller: em,
            }),
            L = r.useRef(null),
            _ = !b || g || !!b.closest("form"),
            [O, D] = r.useState(new Set()),
            I = Array.from(O)
              .map((e) => e.props.value)
              .join(";");
          return (0, v.jsx)(P.bL, {
            ...y,
            children: (0, v.jsxs)(ex, {
              required: h,
              scope: t,
              trigger: b,
              onTriggerChange: w,
              valueNode: x,
              onValueNodeChange: E,
              valueNodeHasChildren: S,
              onValueNodeHasChildrenChange: C,
              contentId: (0, R.B)(),
              value: j,
              onValueChange: N,
              open: M,
              onOpenChange: A,
              dir: k,
              triggerPointerDownPosRef: L,
              disabled: m,
              children: [
                (0, v.jsx)(eh.Provider, {
                  scope: t,
                  children: (0, v.jsx)(eS, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: r.useCallback((e) => {
                      D((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: r.useCallback((e) => {
                      D((t) => {
                        let n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, []),
                    children: n,
                  }),
                }),
                _
                  ? (0, v.jsxs)(
                      e9,
                      {
                        "aria-hidden": !0,
                        required: h,
                        tabIndex: -1,
                        name: f,
                        autoComplete: p,
                        value: j,
                        onChange: (e) => N(e.target.value),
                        disabled: m,
                        form: g,
                        children: [
                          void 0 === j
                            ? (0, v.jsx)("option", { value: "" })
                            : null,
                          Array.from(O),
                        ],
                      },
                      I
                    )
                  : null,
              ],
            }),
          });
        };
      ek.displayName = em;
      var eR = "SelectTrigger",
        eP = r.forwardRef((e, t) => {
          let { __scopeSelect: n, disabled: o = !1, ...a } = e,
            l = ew(n),
            u = eE(eR, n),
            d = u.disabled || o,
            c = (0, s.s)(t, u.onTriggerChange),
            f = ev(n),
            p = r.useRef("touch"),
            [h, g, y] = te((e) => {
              let t = f().filter((e) => !e.disabled),
                n = t.find((e) => e.value === u.value),
                r = tt(t, e, n);
              void 0 !== r && u.onValueChange(r.value);
            }),
            b = (e) => {
              d || (u.onOpenChange(!0), y()),
                e &&
                  (u.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  });
            };
          return (0, v.jsx)(P.Mz, {
            asChild: !0,
            ...l,
            children: (0, v.jsx)(m.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": u.contentId,
              "aria-expanded": u.open,
              "aria-required": u.required,
              "aria-autocomplete": "none",
              dir: u.dir,
              "data-state": u.open ? "open" : "closed",
              disabled: d,
              "data-disabled": d ? "" : void 0,
              "data-placeholder": e7(u.value) ? "" : void 0,
              ...a,
              ref: c,
              onClick: (0, i.m)(a.onClick, (e) => {
                e.currentTarget.focus(), "mouse" !== p.current && b(e);
              }),
              onPointerDown: (0, i.m)(a.onPointerDown, (e) => {
                p.current = e.pointerType;
                let t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    "mouse" === e.pointerType &&
                    (b(e), e.preventDefault());
              }),
              onKeyDown: (0, i.m)(a.onKeyDown, (e) => {
                let t = "" !== h.current;
                e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  g(e.key),
                  (!t || " " !== e.key) &&
                    ef.includes(e.key) &&
                    (b(), e.preventDefault());
              }),
            }),
          });
        });
      eP.displayName = eR;
      var eM = "SelectValue",
        eA = r.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              className: r,
              style: o,
              children: a,
              placeholder: i = "",
              ...l
            } = e,
            u = eE(eM, n),
            { onValueNodeHasChildrenChange: d } = u,
            c = void 0 !== a,
            f = (0, s.s)(t, u.onValueNodeChange);
          return (
            (0, j.N)(() => {
              d(c);
            }, [d, c]),
            (0, v.jsx)(m.sG.span, {
              ...l,
              ref: f,
              style: { pointerEvents: "none" },
              children: e7(u.value)
                ? (0, v.jsx)(v.Fragment, { children: i })
                : a,
            })
          );
        });
      eA.displayName = eM;
      var eT = r.forwardRef((e, t) => {
        let { __scopeSelect: n, children: r, ...o } = e;
        return (0, v.jsx)(m.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼",
        });
      });
      eT.displayName = "SelectIcon";
      var ej = (e) => (0, v.jsx)(M.Z, { asChild: !0, ...e });
      ej.displayName = "SelectPortal";
      var eN = "SelectContent",
        eL = r.forwardRef((e, t) => {
          let n = eE(eN, e.__scopeSelect),
            [a, i] = r.useState();
          return ((0, j.N)(() => {
            i(new DocumentFragment());
          }, []),
          n.open)
            ? (0, v.jsx)(eI, { ...e, ref: t })
            : a
            ? o.createPortal(
                (0, v.jsx)(e_, {
                  scope: e.__scopeSelect,
                  children: (0, v.jsx)(eh.Slot, {
                    scope: e.__scopeSelect,
                    children: (0, v.jsx)("div", { children: e.children }),
                  }),
                }),
                a
              )
            : null;
        });
      eL.displayName = eN;
      var [e_, eO] = ey(eN),
        eD = (0, A.TL)("SelectContent.RemoveScroll"),
        eI = r.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              position: o = "item-aligned",
              onCloseAutoFocus: a,
              onEscapeKeyDown: l,
              onPointerDownOutside: u,
              side: d,
              sideOffset: m,
              align: h,
              alignOffset: g,
              arrowPadding: y,
              collisionBoundary: b,
              collisionPadding: x,
              sticky: E,
              hideWhenDetached: S,
              avoidCollisions: C,
              ...k
            } = e,
            R = eE(eN, n),
            [P, M] = r.useState(null),
            [A, T] = r.useState(null),
            j = (0, s.s)(t, (e) => M(e)),
            [N, L] = r.useState(null),
            [_, O] = r.useState(null),
            D = ev(n),
            [I, z] = r.useState(!1),
            B = r.useRef(!1);
          r.useEffect(() => {
            if (P) return F(P);
          }, [P]),
            r.useEffect(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = n[0]) && void 0 !== e ? e : p()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = n[1]) && void 0 !== t ? t : p()
                ),
                f++,
                () => {
                  1 === f &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    f--;
                }
              );
            }, []);
          let H = r.useCallback(
              (e) => {
                let [t, ...n] = D().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  o = document.activeElement;
                for (let n of e)
                  if (
                    n === o ||
                    (null == n || n.scrollIntoView({ block: "nearest" }),
                    n === t && A && (A.scrollTop = 0),
                    n === r && A && (A.scrollTop = A.scrollHeight),
                    null == n || n.focus(),
                    document.activeElement !== o)
                  )
                    return;
              },
              [D, A]
            ),
            W = r.useCallback(() => H([N, P]), [H, N, P]);
          r.useEffect(() => {
            I && W();
          }, [I, W]);
          let { onOpenChange: Y, triggerPointerDownPosRef: V } = R;
          r.useEffect(() => {
            if (P) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var n, r, o, a;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null !==
                          (o =
                            null === (n = V.current) || void 0 === n
                              ? void 0
                              : n.x) && void 0 !== o
                          ? o
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null !==
                          (a =
                            null === (r = V.current) || void 0 === r
                              ? void 0
                              : r.y) && void 0 !== a
                          ? a
                          : 0)
                    ),
                  };
                },
                n = (n) => {
                  e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : P.contains(n.target) || Y(!1),
                    document.removeEventListener("pointermove", t),
                    (V.current = null);
                };
              return (
                null !== V.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", n, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", n, {
                      capture: !0,
                    });
                }
              );
            }
          }, [P, Y, V]),
            r.useEffect(() => {
              let e = () => Y(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [Y]);
          let [G, U] = te((e) => {
              let t = D().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = tt(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            X = r.useCallback(
              (e, t, n) => {
                let r = !B.current && !n;
                ((void 0 !== R.value && R.value === t) || r) &&
                  (L(e), r && (B.current = !0));
              },
              [R.value]
            ),
            q = r.useCallback(() => (null == P ? void 0 : P.focus()), [P]),
            K = r.useCallback(
              (e, t, n) => {
                let r = !B.current && !n;
                ((void 0 !== R.value && R.value === t) || r) && O(e);
              },
              [R.value]
            ),
            $ = "popper" === o ? eB : ez,
            Z =
              $ === eB
                ? {
                    side: d,
                    sideOffset: m,
                    align: h,
                    alignOffset: g,
                    arrowPadding: y,
                    collisionBoundary: b,
                    collisionPadding: x,
                    sticky: E,
                    hideWhenDetached: S,
                    avoidCollisions: C,
                  }
                : {};
          return (0, v.jsx)(e_, {
            scope: n,
            content: P,
            viewport: A,
            onViewportChange: T,
            itemRefCallback: X,
            selectedItem: N,
            onItemLeave: q,
            itemTextRefCallback: K,
            focusSelectedItem: W,
            selectedItemText: _,
            position: o,
            isPositioned: I,
            searchRef: G,
            children: (0, v.jsx)(ec, {
              as: eD,
              allowPinchZoom: !0,
              children: (0, v.jsx)(w, {
                asChild: !0,
                trapped: R.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: (0, i.m)(a, (e) => {
                  var t;
                  null === (t = R.trigger) ||
                    void 0 === t ||
                    t.focus({ preventScroll: !0 }),
                    e.preventDefault();
                }),
                children: (0, v.jsx)(c.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: l,
                  onPointerDownOutside: u,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => R.onOpenChange(!1),
                  children: (0, v.jsx)($, {
                    role: "listbox",
                    id: R.contentId,
                    "data-state": R.open ? "open" : "closed",
                    dir: R.dir,
                    onContextMenu: (e) => e.preventDefault(),
                    ...k,
                    ...Z,
                    onPlaced: () => z(!0),
                    ref: j,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...k.style,
                    },
                    onKeyDown: (0, i.m)(k.onKeyDown, (e) => {
                      let t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ("Tab" === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || U(e.key),
                        ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                      ) {
                        let t = D()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        if (
                          (["ArrowUp", "End"].includes(e.key) &&
                            (t = t.slice().reverse()),
                          ["ArrowUp", "ArrowDown"].includes(e.key))
                        ) {
                          let n = e.target,
                            r = t.indexOf(n);
                          t = t.slice(r + 1);
                        }
                        setTimeout(() => H(t)), e.preventDefault();
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      eI.displayName = "SelectContentImpl";
      var ez = r.forwardRef((e, t) => {
        let { __scopeSelect: n, onPlaced: o, ...i } = e,
          l = eE(eN, n),
          u = eO(eN, n),
          [d, c] = r.useState(null),
          [f, p] = r.useState(null),
          h = (0, s.s)(t, (e) => p(e)),
          g = ev(n),
          y = r.useRef(!1),
          b = r.useRef(!0),
          {
            viewport: w,
            selectedItem: x,
            selectedItemText: E,
            focusSelectedItem: S,
          } = u,
          C = r.useCallback(() => {
            if (l.trigger && l.valueNode && d && f && w && x && E) {
              let e = l.trigger.getBoundingClientRect(),
                t = f.getBoundingClientRect(),
                n = l.valueNode.getBoundingClientRect(),
                r = E.getBoundingClientRect();
              if ("rtl" !== l.dir) {
                let o = r.left - t.left,
                  i = n.left - o,
                  l = e.left - i,
                  s = e.width + l,
                  u = Math.max(s, t.width),
                  c = a(i, [10, Math.max(10, window.innerWidth - 10 - u)]);
                (d.style.minWidth = s + "px"), (d.style.left = c + "px");
              } else {
                let o = t.right - r.right,
                  i = window.innerWidth - n.right - o,
                  l = window.innerWidth - e.right - i,
                  s = e.width + l,
                  u = Math.max(s, t.width),
                  c = a(i, [10, Math.max(10, window.innerWidth - 10 - u)]);
                (d.style.minWidth = s + "px"), (d.style.right = c + "px");
              }
              let i = g(),
                s = window.innerHeight - 20,
                u = w.scrollHeight,
                c = window.getComputedStyle(f),
                p = parseInt(c.borderTopWidth, 10),
                m = parseInt(c.paddingTop, 10),
                h = parseInt(c.borderBottomWidth, 10),
                v = p + m + u + parseInt(c.paddingBottom, 10) + h,
                b = Math.min(5 * x.offsetHeight, v),
                S = window.getComputedStyle(w),
                C = parseInt(S.paddingTop, 10),
                k = parseInt(S.paddingBottom, 10),
                R = e.top + e.height / 2 - 10,
                P = x.offsetHeight / 2,
                M = p + m + (x.offsetTop + P);
              if (M <= R) {
                let e = i.length > 0 && x === i[i.length - 1].ref.current;
                d.style.bottom = "0px";
                let t = Math.max(
                  s - R,
                  P +
                    (e ? k : 0) +
                    (f.clientHeight - w.offsetTop - w.offsetHeight) +
                    h
                );
                d.style.height = M + t + "px";
              } else {
                let e = i.length > 0 && x === i[0].ref.current;
                d.style.top = "0px";
                let t = Math.max(R, p + w.offsetTop + (e ? C : 0) + P);
                (d.style.height = t + (v - M) + "px"),
                  (w.scrollTop = M - R + w.offsetTop);
              }
              (d.style.margin = "".concat(10, "px 0")),
                (d.style.minHeight = b + "px"),
                (d.style.maxHeight = s + "px"),
                null == o || o(),
                requestAnimationFrame(() => (y.current = !0));
            }
          }, [g, l.trigger, l.valueNode, d, f, w, x, E, l.dir, o]);
        (0, j.N)(() => C(), [C]);
        let [k, R] = r.useState();
        (0, j.N)(() => {
          f && R(window.getComputedStyle(f).zIndex);
        }, [f]);
        let P = r.useCallback(
          (e) => {
            e && !0 === b.current && (C(), null == S || S(), (b.current = !1));
          },
          [C, S]
        );
        return (0, v.jsx)(eH, {
          scope: n,
          contentWrapper: d,
          shouldExpandOnScrollRef: y,
          onScrollButtonChange: P,
          children: (0, v.jsx)("div", {
            ref: c,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: k,
            },
            children: (0, v.jsx)(m.sG.div, {
              ...i,
              ref: h,
              style: { boxSizing: "border-box", maxHeight: "100%", ...i.style },
            }),
          }),
        });
      });
      ez.displayName = "SelectItemAlignedPosition";
      var eB = r.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            align: r = "start",
            collisionPadding: o = 10,
            ...a
          } = e,
          i = ew(n);
        return (0, v.jsx)(P.UC, {
          ...i,
          ...a,
          ref: t,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...a.style,
            "--radix-select-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-select-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      eB.displayName = "SelectPopperPosition";
      var [eH, eF] = ey(eN, {}),
        eW = "SelectViewport",
        eY = r.forwardRef((e, t) => {
          let { __scopeSelect: n, nonce: o, ...a } = e,
            l = eO(eW, n),
            u = eF(eW, n),
            d = (0, s.s)(t, l.onViewportChange),
            c = r.useRef(0);
          return (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: o,
              }),
              (0, v.jsx)(eh.Slot, {
                scope: n,
                children: (0, v.jsx)(m.sG.div, {
                  "data-radix-select-viewport": "",
                  role: "presentation",
                  ...a,
                  ref: d,
                  style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...a.style,
                  },
                  onScroll: (0, i.m)(a.onScroll, (e) => {
                    let t = e.currentTarget,
                      { contentWrapper: n, shouldExpandOnScrollRef: r } = u;
                    if ((null == r ? void 0 : r.current) && n) {
                      let e = Math.abs(c.current - t.scrollTop);
                      if (e > 0) {
                        let r = window.innerHeight - 20,
                          o = Math.max(
                            parseFloat(n.style.minHeight),
                            parseFloat(n.style.height)
                          );
                        if (o < r) {
                          let a = o + e,
                            i = Math.min(r, a),
                            l = a - i;
                          (n.style.height = i + "px"),
                            "0px" === n.style.bottom &&
                              ((t.scrollTop = l > 0 ? l : 0),
                              (n.style.justifyContent = "flex-end"));
                        }
                      }
                    }
                    c.current = t.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      eY.displayName = eW;
      var eV = "SelectGroup",
        [eG, eU] = ey(eV);
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = (0, R.B)();
        return (0, v.jsx)(eG, {
          scope: n,
          id: o,
          children: (0, v.jsx)(m.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t,
          }),
        });
      }).displayName = eV;
      var eX = "SelectLabel";
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = eU(eX, n);
        return (0, v.jsx)(m.sG.div, { id: o.id, ...r, ref: t });
      }).displayName = eX;
      var eq = "SelectItem",
        [eK, e$] = ey(eq),
        eZ = r.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              value: o,
              disabled: a = !1,
              textValue: l,
              ...u
            } = e,
            d = eE(eq, n),
            c = eO(eq, n),
            f = d.value === o,
            [p, h] = r.useState(null != l ? l : ""),
            [g, y] = r.useState(!1),
            b = (0, s.s)(t, (e) => {
              var t;
              return null === (t = c.itemRefCallback) || void 0 === t
                ? void 0
                : t.call(c, e, o, a);
            }),
            w = (0, R.B)(),
            x = r.useRef("touch"),
            E = () => {
              a || (d.onValueChange(o), d.onOpenChange(!1));
            };
          if ("" === o)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, v.jsx)(eK, {
            scope: n,
            value: o,
            disabled: a,
            textId: w,
            isSelected: f,
            onItemTextChange: r.useCallback((e) => {
              h((t) => {
                var n;
                return (
                  t ||
                  (null !== (n = null == e ? void 0 : e.textContent) &&
                  void 0 !== n
                    ? n
                    : ""
                  ).trim()
                );
              });
            }, []),
            children: (0, v.jsx)(eh.ItemSlot, {
              scope: n,
              value: o,
              disabled: a,
              textValue: p,
              children: (0, v.jsx)(m.sG.div, {
                role: "option",
                "aria-labelledby": w,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": f && g,
                "data-state": f ? "checked" : "unchecked",
                "aria-disabled": a || void 0,
                "data-disabled": a ? "" : void 0,
                tabIndex: a ? void 0 : -1,
                ...u,
                ref: b,
                onFocus: (0, i.m)(u.onFocus, () => y(!0)),
                onBlur: (0, i.m)(u.onBlur, () => y(!1)),
                onClick: (0, i.m)(u.onClick, () => {
                  "mouse" !== x.current && E();
                }),
                onPointerUp: (0, i.m)(u.onPointerUp, () => {
                  "mouse" === x.current && E();
                }),
                onPointerDown: (0, i.m)(u.onPointerDown, (e) => {
                  x.current = e.pointerType;
                }),
                onPointerMove: (0, i.m)(u.onPointerMove, (e) => {
                  if (((x.current = e.pointerType), a)) {
                    var t;
                    null === (t = c.onItemLeave) || void 0 === t || t.call(c);
                  } else
                    "mouse" === x.current &&
                      e.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: (0, i.m)(u.onPointerLeave, (e) => {
                  if (e.currentTarget === document.activeElement) {
                    var t;
                    null === (t = c.onItemLeave) || void 0 === t || t.call(c);
                  }
                }),
                onKeyDown: (0, i.m)(u.onKeyDown, (e) => {
                  var t;
                  ((null === (t = c.searchRef) || void 0 === t
                    ? void 0
                    : t.current) === "" ||
                    " " !== e.key) &&
                    (ep.includes(e.key) && E(),
                    " " === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      eZ.displayName = eq;
      var eJ = "SelectItemText",
        eQ = r.forwardRef((e, t) => {
          let { __scopeSelect: n, className: a, style: i, ...l } = e,
            u = eE(eJ, n),
            d = eO(eJ, n),
            c = e$(eJ, n),
            f = eC(eJ, n),
            [p, h] = r.useState(null),
            g = (0, s.s)(
              t,
              (e) => h(e),
              c.onItemTextChange,
              (e) => {
                var t;
                return null === (t = d.itemTextRefCallback) || void 0 === t
                  ? void 0
                  : t.call(d, e, c.value, c.disabled);
              }
            ),
            y = null == p ? void 0 : p.textContent,
            b = r.useMemo(
              () =>
                (0, v.jsx)(
                  "option",
                  { value: c.value, disabled: c.disabled, children: y },
                  c.value
                ),
              [c.disabled, c.value, y]
            ),
            { onNativeOptionAdd: w, onNativeOptionRemove: x } = f;
          return (
            (0, j.N)(() => (w(b), () => x(b)), [w, x, b]),
            (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsx)(m.sG.span, { id: c.textId, ...l, ref: g }),
                c.isSelected && u.valueNode && !u.valueNodeHasChildren
                  ? o.createPortal(l.children, u.valueNode)
                  : null,
              ],
            })
          );
        });
      eQ.displayName = eJ;
      var e0 = "SelectItemIndicator",
        e1 = r.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return e$(e0, n).isSelected
            ? (0, v.jsx)(m.sG.span, { "aria-hidden": !0, ...r, ref: t })
            : null;
        });
      e1.displayName = e0;
      var e2 = "SelectScrollUpButton",
        e5 = r.forwardRef((e, t) => {
          let n = eO(e2, e.__scopeSelect),
            o = eF(e2, e.__scopeSelect),
            [a, i] = r.useState(!1),
            l = (0, s.s)(t, o.onScrollButtonChange);
          return (
            (0, j.N)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    i(t.scrollTop > 0);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            a
              ? (0, v.jsx)(e6, {
                  ...e,
                  ref: l,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                  },
                })
              : null
          );
        });
      e5.displayName = e2;
      var e4 = "SelectScrollDownButton",
        e3 = r.forwardRef((e, t) => {
          let n = eO(e4, e.__scopeSelect),
            o = eF(e4, e.__scopeSelect),
            [a, i] = r.useState(!1),
            l = (0, s.s)(t, o.onScrollButtonChange);
          return (
            (0, j.N)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    let e = t.scrollHeight - t.clientHeight;
                    i(Math.ceil(t.scrollTop) < e);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            a
              ? (0, v.jsx)(e6, {
                  ...e,
                  ref: l,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                  },
                })
              : null
          );
        });
      e3.displayName = e4;
      var e6 = r.forwardRef((e, t) => {
        let { __scopeSelect: n, onAutoScroll: o, ...a } = e,
          l = eO("SelectScrollButton", n),
          s = r.useRef(null),
          u = ev(n),
          d = r.useCallback(() => {
            null !== s.current &&
              (window.clearInterval(s.current), (s.current = null));
          }, []);
        return (
          r.useEffect(() => () => d(), [d]),
          (0, j.N)(() => {
            var e;
            let t = u().find((e) => e.ref.current === document.activeElement);
            null == t ||
              null === (e = t.ref.current) ||
              void 0 === e ||
              e.scrollIntoView({ block: "nearest" });
          }, [u]),
          (0, v.jsx)(m.sG.div, {
            "aria-hidden": !0,
            ...a,
            ref: t,
            style: { flexShrink: 0, ...a.style },
            onPointerDown: (0, i.m)(a.onPointerDown, () => {
              null === s.current && (s.current = window.setInterval(o, 50));
            }),
            onPointerMove: (0, i.m)(a.onPointerMove, () => {
              var e;
              null === (e = l.onItemLeave) || void 0 === e || e.call(l),
                null === s.current && (s.current = window.setInterval(o, 50));
            }),
            onPointerLeave: (0, i.m)(a.onPointerLeave, () => {
              d();
            }),
          })
        );
      });
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e;
        return (0, v.jsx)(m.sG.div, { "aria-hidden": !0, ...r, ref: t });
      }).displayName = "SelectSeparator";
      var e8 = "SelectArrow";
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = ew(n),
          a = eE(e8, n),
          i = eO(e8, n);
        return a.open && "popper" === i.position
          ? (0, v.jsx)(P.i3, { ...o, ...r, ref: t })
          : null;
      }).displayName = e8;
      var e9 = r.forwardRef((e, t) => {
        let { __scopeSelect: n, value: o, ...a } = e,
          i = r.useRef(null),
          l = (0, s.s)(t, i),
          u = (0, N.Z)(o);
        return (
          r.useEffect(() => {
            let e = i.current;
            if (!e) return;
            let t = Object.getOwnPropertyDescriptor(
              window.HTMLSelectElement.prototype,
              "value"
            ).set;
            if (u !== o && t) {
              let n = new Event("change", { bubbles: !0 });
              t.call(e, o), e.dispatchEvent(n);
            }
          }, [u, o]),
          (0, v.jsx)(m.sG.select, {
            ...a,
            style: { ...L.Qg, ...a.style },
            ref: l,
            defaultValue: o,
          })
        );
      });
      function e7(e) {
        return "" === e || void 0 === e;
      }
      function te(e) {
        let t = (0, h.c)(e),
          n = r.useRef(""),
          o = r.useRef(0),
          a = r.useCallback(
            (e) => {
              let r = n.current + e;
              t(r),
                (function e(t) {
                  (n.current = t),
                    window.clearTimeout(o.current),
                    "" !== t &&
                      (o.current = window.setTimeout(() => e(""), 1e3));
                })(r);
            },
            [t]
          ),
          i = r.useCallback(() => {
            (n.current = ""), window.clearTimeout(o.current);
          }, []);
        return (
          r.useEffect(() => () => window.clearTimeout(o.current), []), [n, a, i]
        );
      }
      function tt(e, t, n) {
        var r, o;
        let a =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          i = n ? e.indexOf(n) : -1,
          l =
            ((r = e),
            (o = Math.max(i, 0)),
            r.map((e, t) => r[(o + t) % r.length]));
        1 === a.length && (l = l.filter((e) => e !== n));
        let s = l.find((e) =>
          e.textValue.toLowerCase().startsWith(a.toLowerCase())
        );
        return s !== n ? s : void 0;
      }
      e9.displayName = "SelectBubbleInput";
      var tn = ek,
        tr = eP,
        to = eA,
        ta = eT,
        ti = ej,
        tl = eL,
        ts = eY,
        tu = eZ,
        td = eQ,
        tc = e1,
        tf = e5,
        tp = e3;
    },
    74783: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("Menu", [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
      ]);
    },
    75100: (e, t) => {
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: o,
            blurDataURL: a,
            objectFit: i,
          } = e,
          l = r ? 40 * r : t,
          s = o ? 40 * o : n,
          u = l && s ? "viewBox='0 0 " + l + " " + s + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === i
            ? "xMidYMid"
            : "cover" === i
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          a +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    82284: (e, t, n) => {
      n.d(t, { N: () => f });
      var r,
        o = n(94971),
        a = n(95920),
        i = n(86266),
        l = n(12115),
        s = n(46081),
        u = n(6101),
        d = n(99708),
        c = n(95155);
      function f(e) {
        let t = e + "CollectionProvider",
          [n, r] = (0, s.A)(t),
          [o, a] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          i = (e) => {
            let { scope: t, children: n } = e,
              r = l.useRef(null),
              a = l.useRef(new Map()).current;
            return (0, c.jsx)(o, {
              scope: t,
              itemMap: a,
              collectionRef: r,
              children: n,
            });
          };
        i.displayName = t;
        let f = e + "CollectionSlot",
          p = (0, d.TL)(f),
          m = l.forwardRef((e, t) => {
            let { scope: n, children: r } = e,
              o = a(f, n),
              i = (0, u.s)(t, o.collectionRef);
            return (0, c.jsx)(p, { ref: i, children: r });
          });
        m.displayName = f;
        let h = e + "CollectionItemSlot",
          v = "data-radix-collection-item",
          g = (0, d.TL)(h),
          y = l.forwardRef((e, t) => {
            let { scope: n, children: r, ...o } = e,
              i = l.useRef(null),
              s = (0, u.s)(t, i),
              d = a(h, n);
            return (
              l.useEffect(
                () => (
                  d.itemMap.set(i, { ref: i, ...o }),
                  () => void d.itemMap.delete(i)
                )
              ),
              (0, c.jsx)(g, { [v]: "", ref: s, children: r })
            );
          });
        return (
          (y.displayName = h),
          [
            { Provider: i, Slot: m, ItemSlot: y },
            function (t) {
              let n = a(e + "CollectionConsumer", t);
              return l.useCallback(() => {
                let e = n.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll("[".concat(v, "]")));
                return Array.from(n.itemMap.values()).sort(
                  (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                );
              }, [n.collectionRef, n.itemMap]);
            },
            r,
          ]
        );
      }
      var p = new WeakMap();
      function m(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        let n = (function (e, t) {
          let n = e.length,
            r = h(t),
            o = r >= 0 ? r : n + r;
          return o < 0 || o >= n ? -1 : o;
        })(e, t);
        return -1 === n ? void 0 : e[n];
      }
      function h(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e);
      }
      r = new WeakMap();
    },
    85029: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(12115),
        o = r.useLayoutEffect,
        a = r.useEffect;
      function i(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function i() {
          if (t && t.mountedInstances) {
            let o = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(o, e));
          }
        }
        return (
          o(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = i),
              () => {
                t && (t._pendingUpdate = i);
              }
            )
          ),
          a(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    85185: (e, t, n) => {
      n.d(t, { m: () => r });
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
    },
    86266: (e, t, n) => {
      n.d(t, { _: () => o });
      var r = n(43969);
      function o(e, t, n) {
        var o = (0, r._)(e, t, "set");
        return (
          !(function (e, t, n) {
            if (t.set) t.set.call(e, n);
            else {
              if (!t.writable)
                throw TypeError("attempted to set read only private field");
              t.value = n;
            }
          })(e, o, n),
          n
        );
      }
    },
    86752: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(88229)._(n(12115)),
        o = n(95840),
        a = r.default.createContext(o.imageConfigDefault);
    },
    94315: (e, t, n) => {
      n.d(t, { jH: () => a });
      var r = n(12115);
      n(95155);
      var o = r.createContext(void 0);
      function a(e) {
        let t = r.useContext(o);
        return e || t || "ltr";
      }
    },
    94971: (e, t, n) => {
      n.d(t, { _: () => o });
      var r = n(43969);
      function o(e, t) {
        var n = (0, r._)(e, t, "get");
        return n.get ? n.get.call(e) : n.value;
      }
    },
    95840: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          qualities: void 0,
          unoptimized: !1,
        };
    },
    95920: (e, t, n) => {
      n.d(t, { _: () => r });
      function r(e, t, n) {
        !(function (e, t) {
          if (t.has(e))
            throw TypeError(
              "Cannot initialize the same private elements twice on an object"
            );
        })(e, t),
          t.set(e, n);
      }
    },
  },
]);
