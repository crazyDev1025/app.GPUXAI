(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [465],
  {
    17313: (e, t, s) => {
      "use strict";
      s.d(t, { Xi: () => o, av: () => d, j7: () => l, tU: () => n });
      var a = s(95155);
      s(12115);
      var i = s(30064),
        r = s(59434);
      function n(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(i.bL, {
          "data-slot": "tabs",
          className: (0, r.cn)("flex flex-col gap-2", t),
          ...s,
        });
      }
      function l(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(i.B8, {
          "data-slot": "tabs-list",
          className: (0, r.cn)(
            "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
            t
          ),
          ...s,
        });
      }
      function o(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(i.l9, {
          "data-slot": "tabs-trigger",
          className: (0, r.cn)(
            "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            t
          ),
          ...s,
        });
      }
      function d(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(i.UC, {
          "data-slot": "tabs-content",
          className: (0, r.cn)("flex-1 outline-none", t),
          ...s,
        });
      }
    },
    26126: (e, t, s) => {
      "use strict";
      s.d(t, { E: () => o });
      var a = s(95155);
      s(12115);
      var i = s(99708),
        r = s(74466),
        n = s(59434);
      let l = (0, r.F)(
        "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
        {
          variants: {
            variant: {
              default:
                "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
              secondary:
                "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
              destructive:
                "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70",
              outline:
                "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
            },
          },
          defaultVariants: { variant: "default" },
        }
      );
      function o(e) {
        let { className: t, variant: s, asChild: r = !1, ...o } = e,
          d = r ? i.DX : "span";
        return (0, a.jsx)(d, {
          "data-slot": "badge",
          className: (0, n.cn)(l({ variant: s }), t),
          ...o,
        });
      }
    },
    41585: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => m });
      var a = s(95155),
        i = s(12115),
        r = s(55863),
        n = s(59434);
      function l(e) {
        let { className: t, value: s, ...i } = e;
        return (0, a.jsx)(r.bL, {
          "data-slot": "progress",
          className: (0, n.cn)(
            "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
            t
          ),
          ...i,
          children: (0, a.jsx)(r.C1, {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: { transform: "translateX(-".concat(100 - (s || 0), "%)") },
          }),
        });
      }
      var o = s(60760),
        d = s(25561),
        c = s(17652);
      function m() {
        let [e, t] = (0, i.useState)(0),
          [s, r] = (0, i.useState)(!0);
        (0, i.useEffect)(() => {
          let e, s;
          let a = Date.now();
          e = setInterval(() => {
            t((e) => {
              let t = 0.1 * (80 - e);
              return Math.min(e + (t > 0.5 ? t : 0.5), 80);
            });
          }, 150);
          let i = () => {
            clearInterval(e),
              (s = setTimeout(() => {
                t(100), setTimeout(() => r(!1), 600);
              }, Math.max(0, 2e3 - (Date.now() - a))));
          };
          return (
            "complete" === document.readyState
              ? i()
              : window.addEventListener("load", i),
            () => {
              clearInterval(e),
                clearTimeout(s),
                window.removeEventListener("load", i);
            }
          );
        }, []);
        let n = (0, c.c3)("Preloader");
        return (0, a.jsx)(o.N, {
          children:
            s &&
            (0, a.jsx)(d.P.div, {
              initial: { opacity: 1 },
              exit: { opacity: 0, transition: { duration: 0.5 } },
              className:
                "fixed inset-0 flex flex-col items-center justify-center bg-background z-50",
              children: (0, a.jsxs)("div", {
                className: "w-full max-w-md px-6",
                children: [
                  (0, a.jsxs)(d.P.div, {
                    initial: { scale: 0.9 },
                    animate: { scale: 1 },
                    transition: { duration: 0.5, type: "spring" },
                    className: "mb-8 text-center",
                    children: [
                      (0, a.jsx)("h2", {
                        className: "text-4xl font-bold text-primary",
                        children: n("header"),
                      }),
                      (0, a.jsx)("p", {
                        className: "text-muted-foreground mt-2",
                        children: n("paragraph"),
                      }),
                    ],
                  }),
                  (0, a.jsx)(l, { value: e, className: "h-3 mb-3" }),
                  (0, a.jsxs)("p", {
                    className: "text-sm text-center text-muted-foreground",
                    children: [Math.round(e), "% ", n("Progress")],
                  }),
                ],
              }),
            }),
        });
      }
    },
    50873: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 76890)),
        Promise.resolve().then(s.bind(s, 62984)),
        Promise.resolve().then(s.bind(s, 19123)),
        Promise.resolve().then(s.bind(s, 41585));
    },
    62523: (e, t, s) => {
      "use strict";
      s.d(t, { p: () => r });
      var a = s(95155);
      s(12115);
      var i = s(59434);
      function r(e) {
        let { className: t, type: s, ...r } = e;
        return (0, a.jsx)("input", {
          type: s,
          "data-slot": "input",
          className: (0, i.cn)(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            t
          ),
          ...r,
        });
      }
    },
    62984: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => g });
      var a = s(95155),
        i = s(25561),
        r = s(30285),
        n = s(47924),
        l = s(62523),
        o = s(12115),
        d = s(67558),
        c = s(53498),
        m = s(81669),
        u = s(42515),
        x = s(44688),
        p = s(66766),
        f = s(17652);
      function h(e) {
        let { scene: t } = (0, c.p)("/assets/3d/gpu.glb");
        return (0, a.jsxs)(m.n, {
          speed: 1.5,
          rotationIntensity: 0.5,
          floatIntensity: 0.5,
          children: [
            (0, a.jsx)("pointLight", {
              position: [0, 3, 0],
              color: "#FF5F2C",
              intensity: 18,
              distance: 12,
            }),
            (0, a.jsx)("pointLight", {
              position: [1, 3, 1],
              color: "#FF5F2C",
              intensity: 4,
              distance: 8,
            }),
            (0, a.jsx)("pointLight", {
              position: [-1, 3, -1],
              color: "#FF5F2C",
              intensity: 4,
              distance: 8,
            }),
            (0, a.jsx)("pointLight", {
              position: [0, 2, 0],
              color: "#FF5F2C",
              intensity: 5,
              distance: 9,
            }),
            (0, a.jsx)("pointLight", {
              position: [0, 4, 0],
              color: "#FF5F2C",
              intensity: 5,
              distance: 9,
            }),
            (0, a.jsx)("pointLight", {
              position: [2, 3, 0],
              color: "#FF5F2C",
              intensity: 3,
              distance: 6,
            }),
            (0, a.jsx)("pointLight", {
              position: [-2, 3, 0],
              color: "#FF5F2C",
              intensity: 3,
              distance: 6,
            }),
            (0, a.jsx)("pointLight", {
              position: [0, 3, 2],
              color: "#FF5F2C",
              intensity: 3,
              distance: 6,
            }),
            (0, a.jsx)("pointLight", {
              position: [0, 3, -2],
              color: "#FF5F2C",
              intensity: 3,
              distance: 6,
            }),
            (0, a.jsx)("spotLight", {
              position: [3, 5, 3],
              angle: 0.25,
              penumbra: 1,
              intensity: 50,
              color: "#FF5F2C",
              distance: 15,
              castShadow: !0,
            }),
            (0, a.jsx)("spotLight", {
              position: [3, 5, 3],
              angle: 0.25,
              penumbra: 1,
              intensity: 100,
              color: "#FFFFFF",
              distance: 5,
              castShadow: !0,
            }),
            (0, a.jsx)("primitive", {
              object: t,
              scale: 1,
              position: [0, 3, 0],
              rotation: [0, Math.PI / 1, 0],
              ...e,
            }),
          ],
        });
      }
      function g() {
        let [e, t] = (0, o.useState)(!1);
        (0, o.useEffect)(() => {
          t(!0);
        }, []);
        let s = (0, f.c3)("Hero");
        return (0, a.jsxs)("section", {
          className: "relative overflow-hidden hero-gradient",
          children: [
            (0, a.jsx)(p.default, {
              alt: "hero top decor",
              width: "864",
              height: "800",
              className:
                "w-1/3 h-auto absolute z-10 top-0 right-0 object-contain opacity-10 pointer-events-none",
              src: "/hero-top-right-decor.png",
            }),
            (0, a.jsx)(p.default, {
              alt: "hero bottom decor",
              width: "605",
              height: "940",
              className:
                "w-1/3 h-auto absolute z-10 bottom-0 left-0 object-contain opacity-10 pointer-events-none",
              src: "/home-bottom-left-decor.png",
            }),
            (0, a.jsx)("div", {
              className: "container mx-auto px-4 py-16 md:py-24",
              children: (0, a.jsxs)("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                children: [
                  (0, a.jsxs)(i.P.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5 },
                    className: "space-y-6",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm",
                        children: [
                          (0, a.jsxs)("span", {
                            className: "relative flex h-2 w-2 mr-2",
                            children: [
                              (0, a.jsx)("span", {
                                className:
                                  "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75",
                              }),
                              (0, a.jsx)("span", {
                                className:
                                  "relative inline-flex rounded-full h-2 w-2 bg-primary",
                              }),
                            ],
                          }),
                          s("topNotification"),
                        ],
                      }),
                      (0, a.jsxs)("h1", {
                        className:
                          "text-4xl md:text-5xl lg:text-6xl z-50 font-bold tracking-tight",
                        children: [
                          s("headerB4Span"),
                          " ",
                          (0, a.jsx)("span", {
                            className: "text-primary",
                            children: s("headerInSpan"),
                          }),
                          " ",
                          s("headerOutSpan"),
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className: "text-lg text-muted-foreground max-w-xl",
                        children: s("subHeader"),
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex flex-col sm:flex-row gap-4 pt-4",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "relative flex-1 max-w-md",
                            children: [
                              (0, a.jsx)(n.A, {
                                className:
                                  "absolute left-3 top-3 h-4 w-4 text-muted-foreground",
                              }),
                              (0, a.jsx)(l.p, {
                                placeholder: "".concat(
                                  s("searchPlaceHolder"),
                                  "..."
                                ),
                                className: "pl-9 pr-4 py-6 rounded-lg",
                              }),
                            ],
                          }),
                          (0, a.jsx)(r.$, {
                            size: "lg",
                            className: "px-8",
                            children: s("SearchButton"),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center gap-6 pt-4 text-sm text-muted-foreground",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)("div", {
                                className: "h-1 w-1 rounded-full bg-primary",
                              }),
                              (0, a.jsx)("span", { children: s("feature1") }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)("div", {
                                className: "h-1 w-1 rounded-full bg-primary",
                              }),
                              (0, a.jsx)("span", { children: s("feature2") }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)("div", {
                                className: "h-1 w-1 rounded-full bg-primary",
                              }),
                              (0, a.jsx)("span", { children: s("feature3") }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(i.P.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.8, delay: 0.2 },
                    className: "h-[400px] lg:h-[500px] relative",
                    children:
                      e &&
                      (0, a.jsxs)(d.Hl, {
                        camera: { position: [0, 0, 10], fov: 35 },
                        children: [
                          (0, a.jsx)("ambientLight", { intensity: 0.8 }),
                          " ",
                          (0, a.jsx)("spotLight", {
                            position: [10, 10, 10],
                            angle: 0.15,
                            penumbra: 1,
                            intensity: 0.8,
                          }),
                          (0, a.jsx)("pointLight", {
                            position: [-10, -10, -10],
                          }),
                          (0, a.jsx)(h, {}),
                          (0, a.jsx)(u.OH, { preset: "city" }),
                          (0, a.jsx)(x.N, {
                            enableZoom: !1,
                            enablePan: !1,
                            autoRotate: !0,
                            autoRotateSpeed: 0.5,
                          }),
                        ],
                      }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    76890: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => I });
      var a = s(95155),
        i = s(12115),
        r = s(60760),
        n = s(25561),
        l = s(66695),
        o = s(30285),
        d = s(26126),
        c = s(17313),
        m = s(21492),
        u = s(51976),
        x = s(58904),
        p = s(73558),
        f = s(95880),
        h = s(73314),
        g = s(71539),
        j = s(94498),
        v = s(73980),
        b = s(13052),
        N = s(59409),
        y = s(89613),
        w = s(59434);
      function F(e) {
        let { delayDuration: t = 0, ...s } = e;
        return (0, a.jsx)(y.Kq, {
          "data-slot": "tooltip-provider",
          delayDuration: t,
          ...s,
        });
      }
      function C(e) {
        let { ...t } = e;
        return (0, a.jsx)(F, {
          children: (0, a.jsx)(y.bL, { "data-slot": "tooltip", ...t }),
        });
      }
      function L(e) {
        let { ...t } = e;
        return (0, a.jsx)(y.l9, { "data-slot": "tooltip-trigger", ...t });
      }
      function P(e) {
        let { className: t, sideOffset: s = 0, children: i, ...r } = e;
        return (0, a.jsx)(y.ZL, {
          children: (0, a.jsxs)(y.UC, {
            "data-slot": "tooltip-content",
            sideOffset: s,
            className: (0, w.cn)(
              "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
              t
            ),
            ...r,
            children: [
              i,
              (0, a.jsx)(y.i3, {
                className:
                  "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
              }),
            ],
          }),
        });
      }
      var k = s(89074),
        S = s(82478),
        A = s(13845),
        _ = s(6874),
        E = s.n(_),
        z = s(56671),
        H = s(17652),
        D = s(46453);
      function I() {
        let [e, t] = (0, i.useState)([]),
          [s, y] = (0, i.useState)(6),
          [w, _] = (0, i.useState)(!1),
          [I, U] = (0, i.useState)(!0),
          [R, G] = (0, i.useState)([]),
          [T, O] = (0, i.useState)("all"),
          [X, B] = (0, i.useState)("default"),
          M = (0, i.useRef)(null),
          $ = (0, H.c3)("GpuCatalog"),
          V = (0, D.Ym)();
        (0, i.useEffect)(() => {
          (async () => {
            try {
              U(!0);
              let e = await (0, S.p)(
                "".concat(A.H$, "/gpus/getAllGpus"),
                {},
                { "Content-Type": "application/json" },
                "GET"
              );
              if (e.success && e.data) t(e.data);
              else throw Error(e.message || "Failed to fetch GPUX");
            } catch (e) {
              console.error("Error fetching GPUX:", e),
                z.oR.error("Failed to load GPUX");
            } finally {
              U(!1);
            }
          })();
        }, []),
          (0, i.useEffect)(() => {
            let e = localStorage.getItem("gpuFavorites");
            e && G(JSON.parse(e));
          }, []);
        let Z = (e) => {
            R.includes(e) ? G(R.filter((t) => t !== e)) : G([...R, e]);
          },
          q = [
            ...e.filter(
              (e) =>
                "all" === T ||
                ("nvidia" === T
                  ? e.name.toLowerCase().includes("nvidia")
                  : "amd" === T
                  ? e.name.toLowerCase().includes("amd")
                  : "favorites" !== T || R.includes(e._id))
            ),
          ].sort((e, t) =>
            "price-asc" === X
              ? e.pricePerHour - t.pricePerHour
              : "price-desc" === X
              ? t.pricePerHour - e.pricePerHour
              : "ram-desc" === X
              ? t.memory - e.memory
              : new Date(t.createdAt).getTime() -
                new Date(e.createdAt).getTime()
          );
        return ((0, i.useEffect)(() => {
          let e = new IntersectionObserver(
            (e) => {
              e[0].isIntersecting &&
                s < q.length &&
                (_(!0),
                setTimeout(() => {
                  y((e) => Math.min(e + 6, q.length)), _(!1);
                }, 800));
            },
            { threshold: 0.5 }
          );
          return M.current && e.observe(M.current), () => e.disconnect();
        }, [s, q.length]),
        !e || I)
          ? (0, a.jsx)("div", {
              className: "flex items-center justify-center min-h-screen",
              children: (0, a.jsx)("div", {
                className: "animate-pulse",
                children: "Loading...",
              }),
            })
          : (0, a.jsxs)("section", {
              className: "container mx-auto px-4 py-16",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-8",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-4",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "text-3xl font-bold tracking-tight",
                          children: $("title"),
                        }),
                        (0, a.jsx)("p", {
                          className: "text-muted-foreground max-w-3xl",
                          children: $("subtitle"),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-col md:flex-row justify-between gap-4",
                      children: [
                        (0, a.jsx)(c.tU, {
                          defaultValue: "all",
                          className: "w-full md:w-auto",
                          onValueChange: O,
                          children: (0, a.jsxs)(c.j7, {
                            className: "grid grid-cols-4 w-full md:w-auto",
                            children: [
                              (0, a.jsx)(c.Xi, {
                                value: "all",
                                children: $("filters.all"),
                              }),
                              (0, a.jsx)(c.Xi, {
                                value: "nvidia",
                                children: $("filters.nvidia"),
                              }),
                              (0, a.jsx)(c.Xi, {
                                value: "amd",
                                children: $("filters.amd"),
                              }),
                              (0, a.jsx)(c.Xi, {
                                value: "favorites",
                                children: $("filters.favorites"),
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "flex gap-2",
                          children: (0, a.jsxs)(N.l6, {
                            value: X,
                            onValueChange: B,
                            children: [
                              (0, a.jsx)(N.bq, {
                                className: "w-[180px]",
                                children: (0, a.jsxs)("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    (0, a.jsx)(m.A, { className: "h-4 w-4" }),
                                    (0, a.jsx)(N.yv, {
                                      placeholder: "Sort by",
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsxs)(N.gC, {
                                children: [
                                  (0, a.jsx)(N.eb, {
                                    value: "default",
                                    children: $("sorting.default"),
                                  }),
                                  (0, a.jsx)(N.eb, {
                                    value: "price-asc",
                                    children: $("sorting.priceAsc"),
                                  }),
                                  (0, a.jsx)(N.eb, {
                                    value: "price-desc",
                                    children: $("sorting.priceDesc"),
                                  }),
                                  (0, a.jsx)(N.eb, {
                                    value: "ram-desc",
                                    children: $("sorting.ramDesc"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                      children: (0, a.jsx)(r.N, {
                        children: q
                          .slice(0, s)
                          .map((e) =>
                            (0, a.jsx)(
                              n.P.div,
                              {
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: -20 },
                                transition: { duration: 0.3 },
                                className: "gpu-card group",
                                children: (0, a.jsxs)("div", {
                                  className: "gpu-card-inner relative h-full",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "absolute inset-0 gpu-card-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl",
                                    }),
                                    (0, a.jsxs)(l.Zp, {
                                      className:
                                        "h-full border border-border/50 bg-[#150702] backdrop-blur-sm overflow-hidden",
                                      children: [
                                        (0, a.jsx)(l.aR, {
                                          className: "pb-2",
                                          children: (0, a.jsxs)("div", {
                                            className:
                                              "flex justify-between items-start",
                                            children: [
                                              (0, a.jsxs)("div", {
                                                children: [
                                                  (0, a.jsx)(d.E, {
                                                    variant: "outline",
                                                    className:
                                                      "mb-2 bg-primary/10 text-primary border-primary/20",
                                                    children:
                                                      e.architecture ||
                                                      e.cudaCores
                                                        ? "".concat(
                                                            e.cudaCores,
                                                            " CUDA Cores"
                                                          )
                                                        : e.manufacturer,
                                                  }),
                                                  (0, a.jsx)(l.ZB, {
                                                    className:
                                                      "text-xl font-bold group-hover:text-primary transition-colors",
                                                    children: e.name,
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsx)(F, {
                                                children: (0, a.jsxs)(C, {
                                                  children: [
                                                    (0, a.jsx)(L, {
                                                      asChild: !0,
                                                      children: (0, a.jsx)(
                                                        o.$,
                                                        {
                                                          variant: "ghost",
                                                          size: "icon",
                                                          onClick: () =>
                                                            Z(e._id),
                                                          className: "h-8 w-8",
                                                          children: R.includes(
                                                            e._id
                                                          )
                                                            ? (0, a.jsx)(u.A, {
                                                                className:
                                                                  "h-4 w-4 fill-primary text-primary",
                                                              })
                                                            : (0, a.jsx)(x.A, {
                                                                className:
                                                                  "h-4 w-4",
                                                              }),
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsx)(P, {
                                                      children: R.includes(
                                                        e._id
                                                      )
                                                        ? "Remove from favorites"
                                                        : "Add to favorites",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, a.jsx)(l.Wu, {
                                          className: "pb-4",
                                          children: (0, a.jsxs)("div", {
                                            className:
                                              "grid grid-cols-2 gap-3 text-sm",
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  (0, a.jsx)(p.A, {
                                                    className:
                                                      "h-4 w-4 text-muted-foreground",
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className:
                                                      "text-muted-foreground",
                                                    children:
                                                      $("cardLabels.gpuRam"),
                                                  }),
                                                  (0, a.jsxs)("span", {
                                                    className: "font-medium",
                                                    children: [e.memory, " GB"],
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  (0, a.jsx)(f.A, {
                                                    className:
                                                      "h-4 w-4 text-muted-foreground",
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className:
                                                      "text-muted-foreground",
                                                    children:
                                                      $("cardLabels.storage"),
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className: "font-medium",
                                                    children: e.storage,
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  (0, a.jsx)(h.A, {
                                                    className:
                                                      "h-4 w-4 text-muted-foreground",
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className:
                                                      "text-muted-foreground",
                                                    children: "vCPU:",
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className: "font-medium",
                                                    children: e.vCPUs,
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  (0, a.jsx)(g.A, {
                                                    className:
                                                      "h-4 w-4 text-muted-foreground",
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className:
                                                      "text-muted-foreground",
                                                    children:
                                                      $("cardLabels.cpuRam"),
                                                  }),
                                                  (0, a.jsxs)("span", {
                                                    className: "font-medium",
                                                    children: [e.cpuRAM, " GB"],
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  (0, a.jsx)(j.A, {
                                                    className:
                                                      "h-4 w-4 text-muted-foreground",
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className:
                                                      "text-muted-foreground",
                                                    children:
                                                      $("cardLabels.cores"),
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className: "font-medium",
                                                    children: e.cores,
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  (0, a.jsx)(v.A, {
                                                    className:
                                                      "h-4 w-4 text-muted-foreground",
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className:
                                                      "text-muted-foreground",
                                                    children:
                                                      $("cardLabels.type"),
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className: "font-medium",
                                                    children: e.modelName,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, a.jsxs)(l.wL, {
                                          className:
                                            "flex justify-between items-center pt-0",
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className:
                                                "text-lg font-bold text-primary",
                                              children: [
                                                e.pricePerHour,
                                                " ",
                                                $("pricing.perHour"),
                                              ],
                                            }),
                                            (0, a.jsx)(o.$, {
                                              className:
                                                "group-hover:bg-primary transition-colors cursor-pointer",
                                              children: (0, a.jsxs)(E(), {
                                                href: ""
                                                  .concat(V, "/rentnow/")
                                                  .concat(e._id),
                                                className: "flex items-center",
                                                children: [
                                                  $("cardLabels.rentNow"),
                                                  " ",
                                                  (0, a.jsx)(b.A, {
                                                    className: "h-4 w-4 ml-1",
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              e._id
                            )
                          ),
                      }),
                    }),
                    w &&
                      (0, a.jsx)("div", {
                        className: "flex justify-center py-8",
                        children: (0, a.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "h-2 w-2 rounded-full bg-primary animate-pulse",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "h-2 w-2 rounded-full bg-primary animate-pulse delay-75",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "h-2 w-2 rounded-full bg-primary animate-pulse delay-150",
                            }),
                            (0, a.jsx)("span", {
                              className: "text-muted-foreground ml-2",
                              children: $("loading.more"),
                            }),
                          ],
                        }),
                      }),
                    s < q.length &&
                      (0, a.jsx)("div", { ref: M, className: "h-10" }),
                  ],
                }),
                (0, a.jsx)(k.l, {}),
              ],
            });
      }
    },
    89074: (e, t, s) => {
      "use strict";
      s.d(t, { l: () => n });
      var a = s(95155),
        i = s(51362),
        r = s(56671);
      let n = (e) => {
        let { ...t } = e,
          { theme: s = "system" } = (0, i.D)();
        return (0, a.jsx)(r.l$, {
          theme: s,
          className: "toaster group bg-[#FF5F2C] text-black",
          style: {
            "--normal-bg": "#ad2b00",
            "--normal-text": "#fff",
            "--normal-border": "var(--border)",
          },
          ...t,
        });
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [
        4106, 8451, 1831, 9367, 8413, 9307, 7106, 2761, 6312, 9524, 9330, 5433,
        3625, 8441, 1684, 7358,
      ],
      () => t(50873)
    ),
      (_N_E = e.O());
  },
]);
