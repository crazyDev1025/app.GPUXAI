(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8450],
  {
    13845: (e, t, s) => {
      "use strict";
      s.d(t, { H$: () => o, M0: () => a, OK: () => n, a4: () => r });
      let a = (e) =>
          e ? "".concat(e.slice(0, 8), "...").concat(e.slice(-7)) : "",
        n = {
          1: "ethereum",
          56: "bsc",
          97: "bsctest",
          137: "polygon",
          42161: "arbitrum",
          146: "sonic",
          43114: "avalanche",
        },
        r = {
          1: "ETH",
          56: "BNB",
          97: "BNB",
          137: "POL",
          42161: "ARB",
          146: "S",
          43114: "AVAX",
        },
        o = "https://gpu-backend-4b9a700454cd.herokuapp.com/api/v1";
    },
    23843: (e, t, s) => {
      "use strict";
      s.d(t, { $: () => m }), s(85035);
      var a = s(63439),
        n = s(37200),
        r = s(65730),
        o = s(88353),
        l = s(56886),
        i = s(40016),
        c = s(37120),
        d = s(50299);
      let m = (0, a.Y8)({
        appName: "App",
        projectId: "5a77d58d5cb76266c0f5c1772b5322f4",
        chains: [n.r, r.n, o.m, l.D, i.E, c.N, d.c],
        ssr: !0,
      });
    },
    33977: (e, t, s) => {
      "use strict";
      s.d(t, { Providers: () => m });
      var a = s(95155),
        n = s(51362);
      function r(e) {
        let { children: t, ...s } = e;
        return (0, a.jsx)(n.N, { ...s, children: t });
      }
      var o = s(12115),
        l = s(47650),
        i = s(54416),
        c = s(59434);
      function d() {
        let { toasts: e, dismissToast: t } = (function () {
            let [e, t] = (0, o.useState)([]),
              s = (0, o.useCallback)((e) => {
                t((t) =>
                  t.map((t) => (t.id === e ? { ...t, visible: !1 } : t))
                ),
                  setTimeout(() => {
                    t((t) => t.filter((t) => t.id !== e));
                  }, 300);
              }, []),
              a = (0, o.useCallback)(
                (e) => {
                  let {
                      title: a,
                      description: n,
                      action: r,
                      duration: o = 5e3,
                    } = e,
                    l = Math.random().toString(36).substring(2, 9);
                  t((e) => [
                    ...e,
                    {
                      id: l,
                      title: a,
                      description: n,
                      action: r,
                      visible: !0,
                      duration: o,
                    },
                  ]),
                    o > 0 &&
                      setTimeout(() => {
                        s(l);
                      }, o);
                },
                [s]
              );
            return (
              (0, o.useEffect)(() => {
                let e = (e) => {
                  "Escape" === e.key &&
                    (t((e) => e.map((e) => ({ ...e, visible: !1 }))),
                    setTimeout(() => {
                      t([]);
                    }, 300));
                };
                return (
                  document.addEventListener("keydown", e),
                  () => document.removeEventListener("keydown", e)
                );
              }, []),
              { toast: a, toasts: e, dismissToast: s }
            );
          })(),
          [s, n] = (0, o.useState)(!1);
        return ((0, o.useEffect)(() => {
          n(!0);
        }, []),
        s)
          ? (0, l.createPortal)(
              (0, a.jsx)("div", {
                className:
                  "fixed top-0 right-0 z-[100] flex flex-col gap-2 w-full max-w-sm p-4",
                children: e.map((e) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className: (0, c.cn)(
                        "bg-background border border-border rounded-lg shadow-lg p-4 transition-all duration-300 transform",
                        e.visible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-full opacity-0"
                      ),
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex justify-between items-start gap-2",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex-1",
                              children: [
                                e.title &&
                                  (0, a.jsx)("div", {
                                    className: "font-semibold text-foreground",
                                    children: e.title,
                                  }),
                                e.description &&
                                  (0, a.jsx)("div", {
                                    className:
                                      "text-sm text-muted-foreground mt-1",
                                    children: e.description,
                                  }),
                              ],
                            }),
                            (0, a.jsxs)("button", {
                              onClick: () => t(e.id),
                              className:
                                "text-muted-foreground hover:text-foreground",
                              children: [
                                (0, a.jsx)(i.A, { className: "h-4 w-4" }),
                                (0, a.jsx)("span", {
                                  className: "sr-only",
                                  children: "Close",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.action &&
                          (0, a.jsx)("div", {
                            className: "mt-2 flex justify-end",
                            children: e.action,
                          }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
              document.body
            )
          : null;
      }
      function m(e) {
        let { children: t } = e;
        return (0, a.jsxs)(r, {
          attribute: "class",
          defaultTheme: "dark",
          enableSystem: !0,
          disableTransitionOnChange: !0,
          children: [t, (0, a.jsx)(d, {})],
        });
      }
    },
    34556: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
          fontStyle: "normal",
        },
        className: "__className_9a8899",
        variable: "__variable_9a8899",
      };
    },
    46096: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => r });
      var a = s(46453),
        n = s(95155);
      function r(e) {
        let { locale: t, ...s } = e;
        if (!t) throw Error(void 0);
        return (0, n.jsx)(a.Dk, { locale: t, ...s });
      }
    },
    47845: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 46160)),
        Promise.resolve().then(s.bind(s, 46096)),
        Promise.resolve().then(s.t.bind(s, 56396, 23)),
        Promise.resolve().then(s.t.bind(s, 34556, 23)),
        Promise.resolve().then(s.t.bind(s, 69674, 23)),
        Promise.resolve().then(s.bind(s, 33977)),
        Promise.resolve().then(s.bind(s, 53956));
    },
    51362: (e, t, s) => {
      "use strict";
      s.d(t, { D: () => c, N: () => d });
      var a = s(12115),
        n = (e, t, s, a, n, r, o, l) => {
          let i = document.documentElement,
            c = ["light", "dark"];
          function d(t) {
            var s;
            (Array.isArray(e) ? e : [e]).forEach((e) => {
              let s = "class" === e,
                a = s && r ? n.map((e) => r[e] || e) : n;
              s
                ? (i.classList.remove(...a),
                  i.classList.add(r && r[t] ? r[t] : t))
                : i.setAttribute(e, t);
            }),
              (s = t),
              l && c.includes(s) && (i.style.colorScheme = s);
          }
          if (a) d(a);
          else
            try {
              let e = localStorage.getItem(t) || s,
                a =
                  o && "system" === e
                    ? window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? "dark"
                      : "light"
                    : e;
              d(a);
            } catch (e) {}
        },
        r = ["light", "dark"],
        o = "(prefers-color-scheme: dark)",
        l = a.createContext(void 0),
        i = { setTheme: (e) => {}, themes: [] },
        c = () => {
          var e;
          return null != (e = a.useContext(l)) ? e : i;
        },
        d = (e) =>
          a.useContext(l)
            ? a.createElement(a.Fragment, null, e.children)
            : a.createElement(u, { ...e }),
        m = ["light", "dark"],
        u = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: s = !1,
              enableSystem: n = !0,
              enableColorScheme: i = !0,
              storageKey: c = "theme",
              themes: d = m,
              defaultTheme: u = n ? "system" : "light",
              attribute: p = "data-theme",
              value: g,
              children: y,
              nonce: w,
              scriptProps: x,
            } = e,
            [E, S] = a.useState(() => v(c, u)),
            [k, C] = a.useState(() => ("system" === E ? b() : E)),
            N = g ? Object.values(g) : d,
            j = a.useCallback(
              (e) => {
                let t = e;
                if (!t) return;
                "system" === e && n && (t = b());
                let a = g ? g[t] : t,
                  o = s ? f(w) : null,
                  l = document.documentElement,
                  c = (e) => {
                    "class" === e
                      ? (l.classList.remove(...N), a && l.classList.add(a))
                      : e.startsWith("data-") &&
                        (a ? l.setAttribute(e, a) : l.removeAttribute(e));
                  };
                if ((Array.isArray(p) ? p.forEach(c) : c(p), i)) {
                  let e = r.includes(u) ? u : null,
                    s = r.includes(t) ? t : e;
                  l.style.colorScheme = s;
                }
                null == o || o();
              },
              [w]
            ),
            T = a.useCallback(
              (e) => {
                let t = "function" == typeof e ? e(E) : e;
                S(t);
                try {
                  localStorage.setItem(c, t);
                } catch (e) {}
              },
              [E]
            ),
            A = a.useCallback(
              (e) => {
                C(b(e)), "system" === E && n && !t && j("system");
              },
              [E, t]
            );
          a.useEffect(() => {
            let e = window.matchMedia(o);
            return e.addListener(A), A(e), () => e.removeListener(A);
          }, [A]),
            a.useEffect(() => {
              let e = (e) => {
                e.key === c && (e.newValue ? S(e.newValue) : T(u));
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [T]),
            a.useEffect(() => {
              j(null != t ? t : E);
            }, [t, E]);
          let _ = a.useMemo(
            () => ({
              theme: E,
              setTheme: T,
              forcedTheme: t,
              resolvedTheme: "system" === E ? k : E,
              themes: n ? [...d, "system"] : d,
              systemTheme: n ? k : void 0,
            }),
            [E, T, t, k, n, d]
          );
          return a.createElement(
            l.Provider,
            { value: _ },
            a.createElement(h, {
              forcedTheme: t,
              storageKey: c,
              attribute: p,
              enableSystem: n,
              enableColorScheme: i,
              defaultTheme: u,
              value: g,
              themes: d,
              nonce: w,
              scriptProps: x,
            }),
            y
          );
        },
        h = a.memo((e) => {
          let {
              forcedTheme: t,
              storageKey: s,
              attribute: r,
              enableSystem: o,
              enableColorScheme: l,
              defaultTheme: i,
              value: c,
              themes: d,
              nonce: m,
              scriptProps: u,
            } = e,
            h = JSON.stringify([r, s, i, t, d, c, o, l]).slice(1, -1);
          return a.createElement("script", {
            ...u,
            suppressHydrationWarning: !0,
            nonce: "",
            dangerouslySetInnerHTML: {
              __html: "(".concat(n.toString(), ")(").concat(h, ")"),
            },
          });
        }),
        v = (e, t) => {
          let s;
          try {
            s = localStorage.getItem(e) || void 0;
          } catch (e) {}
          return s || t;
        },
        f = (e) => {
          let t = document.createElement("style");
          return (
            e && t.setAttribute("nonce", e),
            t.appendChild(
              document.createTextNode(
                "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(t),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(t);
                }, 1);
            }
          );
        },
        b = (e) => (
          e || (e = window.matchMedia(o)), e.matches ? "dark" : "light"
        );
    },
    53956: (e, t, s) => {
      "use strict";
      s.d(t, { c: () => f, ContextProvider: () => p });
      var a = s(95155),
        n = s(12115),
        r = s(63439),
        o = s(87017),
        l = s(26715),
        i = s(83415),
        c = s(23843),
        d = s(13845),
        m = s(32446);
      class u extends EventTarget {
        emitAuthChange(e) {
          this.dispatchEvent(
            new CustomEvent("authChange", { detail: { status: e } })
          );
        }
        emitSetUser(e) {
          this.dispatchEvent(
            new CustomEvent("setUser", { detail: { user: e } })
          );
        }
      }
      let h = new u(),
        v = (0, r.kT)({
          getNonce: async () => {
            var e;
            let t =
                (null === (e = window.ethereum) || void 0 === e
                  ? void 0
                  : e.selectedAddress) ||
                "0x0000000000000000000000000000000000000000",
              s = await fetch("".concat(d.H$, "/auth/nonce"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ walletAddress: t }),
              });
            return (await s.json()).data.nonce;
          },
          createMessage: (e) => {
            let { nonce: t, address: s, chainId: a } = e;
            return (0, m.o)({
              domain: window.location.host,
              address: s,
              statement: "Sign in with Ethereum to the app.",
              uri: window.location.origin,
              version: "1",
              chainId: a,
              nonce: t,
            });
          },
          verify: async (e) => {
            var t;
            let { message: s, signature: a } = e;
            console.log(s);
            let n =
                (null === (t = window.ethereum) || void 0 === t
                  ? void 0
                  : t.selectedAddress) ||
                "0x0000000000000000000000000000000000000000",
              r = await fetch("".concat(d.H$, "/auth/wallet"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ walletAddress: n, signature: a }),
              }),
              o = await r.json();
            return (
              console.log(o, "from verify oooo"),
              o.success &&
                (localStorage.setItem("token", o.data.token),
                localStorage.setItem("user", JSON.stringify(o.data.user)),
                h.emitAuthChange("authenticated"),
                h.emitSetUser(o.data.user),
                console.log("We have called authenticated")),
              o.success
            );
          },
          signOut: async () => {
            localStorage.removeItem("token"), localStorage.removeItem("user");
          },
        }),
        f = (0, n.createContext)(void 0),
        b = new o.E();
      function p(e) {
        let { children: t } = e,
          [s, o] = (0, n.useState)("unauthenticated"),
          [d, m] = (0, n.useState)();
        return (
          (0, n.useEffect)(() => {
            let e = (e) => {
              o(e.detail.status);
            };
            return (
              h.addEventListener("authChange", e),
              h.addEventListener("setUser", (e) => {
                console.log(e, "lets check if it came in ?????"),
                  m(e.detail.user);
              }),
              () => {
                h.removeEventListener("authChange", e),
                  h.removeEventListener("setUser", e);
              }
            );
          }, []),
          (0, a.jsx)(f.Provider, {
            value: { authStat: s, setAuthStat: o, user: d, setUser: m },
            children: (0, a.jsx)(i.x, {
              config: c.$,
              children: (0, a.jsx)(l.Ht, {
                client: b,
                children: (0, a.jsx)(r.aN, {
                  adapter: v,
                  status: s,
                  children: (0, a.jsx)(r.qL, { children: t }),
                }),
              }),
            }),
          })
        );
      }
    },
    56396: (e) => {
      e.exports = {
        style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: "normal" },
        className: "__className_5cfdac",
        variable: "__variable_5cfdac",
      };
    },
    59434: (e, t, s) => {
      "use strict";
      s.d(t, { cn: () => r });
      var a = s(52596),
        n = s(39688);
      function r() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, n.QP)((0, a.$)(t));
      }
    },
    69674: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [4431, 4106, 8451, 9307, 7106, 8441, 1684, 7358], () => t(47845)),
      (_N_E = e.O());
  },
]);
