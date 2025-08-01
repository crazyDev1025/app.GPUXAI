"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3625],
  {
    12388: (e, t, a) => {
      a.d(t, { DT: () => r, a8: () => l, rd: () => o });
      var s = a(30981);
      let r = (0, a(49984).A)({
          locales: ["en", "fr", "ch"],
          defaultLocale: "en",
        }),
        { Link: n, redirect: i, usePathname: l, useRouter: o } = (0, s.A)(r);
    },
    13845: (e, t, a) => {
      a.d(t, { H$: () => i, M0: () => s, OK: () => r, a4: () => n });
      let s = (e) =>
          e ? "".concat(e.slice(0, 8), "...").concat(e.slice(-7)) : "",
        r = {
          1: "ethereum",
          56: "bsc",
          97: "bsctest",
          137: "polygon",
          42161: "arbitrum",
          146: "sonic",
          43114: "avalanche",
        },
        n = {
          1: "ETH",
          56: "BNB",
          97: "BNB",
          137: "POL",
          42161: "ARB",
          146: "S",
          43114: "AVAX",
        },
        i = "https://gpu-backend-4b9a700454cd.herokuapp.com/api/v1";
    },
    19123: (e, t, a) => {
      a.d(t, { default: () => I });
      var s = a(95155),
        r = a(63439),
        n = a(6874),
        i = a.n(n),
        l = a(35695),
        o = a(25561),
        c = a(30285),
        d = a(40288),
        u = a(54416),
        h = a(57395),
        m = a(74783),
        p = a(12115),
        x = a(66766),
        f = a(57340),
        g = a(5534),
        v = a(64360),
        b = a(24177),
        j = a(33127),
        w = a(12486),
        N = a(57434),
        y = a(13845),
        k = a(37081),
        C = a(82478),
        A = a(2145),
        S = a(17652),
        E = a(46453),
        z = a(12388),
        $ = a(34869),
        _ = a(59409);
      function P(e) {
        let { defaultValue: t, label: a } = e,
          r = (0, z.a8)(),
          n = (0, z.rd)(),
          i = { en: "English", fr: "French", ch: "Chinese" };
        return (0, s.jsxs)(_.l6, {
          defaultValue: t,
          onValueChange: (e) => {
            n.replace(r, { locale: e });
          },
          children: [
            (0, s.jsx)(_.bq, {
              className:
                "w-[110px] border border-white text-white bg-transparent cursor-pointer",
              children: (0, s.jsx)(_.yv, { placeholder: a }),
            }),
            (0, s.jsx)(_.gC, {
              children: z.DT.locales.map((e) =>
                (0, s.jsx)(_.eb, { value: e, children: i[e].toUpperCase() }, e)
              ),
            }),
          ],
        });
      }
      function T() {
        let e = (0, E.Ym)(),
          t = { en: "English", fr: "French", ch: "Chinese" };
        return (0, s.jsxs)("div", {
          className: "flex items-center gap-2 text-white bg-green",
          children: [
            (0, s.jsx)($.A, { className: "h-4 w-4" }),
            
          ],
        });
      }
      function I() {
        let { address: e, isConnected: t } = (0, A.F)(),
          a = (0, l.useParams)(),
          [n, $] = (0, p.useState)(!1),
          [_, P] = (0, p.useState)(""),
          [I, L] = (0, p.useState)(!1),
          D = (0, l.usePathname)(),
          O = (0, z.rd)(),
          { authStat: F, setAuthStat: B, user: H, setUser: U } = (0, k.Z)(),
          G = (0, S.c3)("NavBar"),
          W = (0, E.Ym)(),
          M = (0, p.useCallback)(
            async (e) => {
              let a = await (0, C.p)(
                "".concat(y.H$, "/auth/me"),
                {},
                { Authorization: "Bearer ".concat(e) },
                "GET"
              );
              a.success &&
                (P(e),
                B("authenticated"),
                (null == H ? void 0 : H.balance) !== a.data.balance &&
                  (localStorage.setItem("user", JSON.stringify(a.data)),
                  U(a.data)),
                "authenticated" === F && t && "" !== _ && null !== H && L(!0));
            },
            [_]
          ),
          J = (0, p.useCallback)(() => {
            P(""),
              B("unauthenticated"),
              U(null),
              L(!1),
              localStorage.removeItem("token"),
              localStorage.removeItem("user");
          }, [B, U]);
        (0, p.useEffect)(() => {
          if (!t) {
            J();
            return;
          }
          let e = localStorage.getItem("user"),
            a = localStorage.getItem("token");
          if (e)
            try {
              let t = JSON.parse(e);
              U(t);
            } catch (e) {
              console.error("Error parsing user data:", e);
            }
          a && M(a);
        }, [U, M, e, I, F]);
        let V = [
            {
              label: "Home",
              href: "https://www.gpuxai.pro/",
              icon: f.A,
              external: !0,
            },
            {
              label: "Dapp",
              href: "https://app.gpuxai.pro",
              icon: g.A,
              external: !0,
            },
          ],
          K = [
            {
              label: "X / Twitter",
              href: "https://x.com/GPUXAI_eth",
              icon: u.A,
              external: !0,
            },
            {
              label: "Telegram",
              href: "https://t.me/GPUXAI_eth",
              icon: w.A,
              external: !0,
            },
            {
              label: "Whitepaper",
              href: "https://docs.honeyai.cloud",
              icon: N.A,
              external: !0,
            },
          ];
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              className: "flex fixed top-4 left-[18%] z-50 gap-2 items-center",
              children: (0, s.jsx)(T, {}),
            }),
            (0, s.jsxs)("div", {
              className:
                "hidden md:flex fixed top-4 right-4 z-50 gap-2 items-center",
              children: [
                I &&
                  (0, s.jsxs)("div", {
                    onClick: () => O.push("/deposit"),
                    className: "cursor-pointer text-white",
                    children: [
                      G("balance"),
                      ": $",
                      (null == H
                        ? void 0
                        : H.balance.toLocaleString("en-NG", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })) || "0.00",
                    ],
                  }),
                (0, s.jsx)(r.pK.Custom, {
                  children: (e) => {
                    let {
                        openConnectModal: a,
                        account: r,
                        openAccountModal: n,
                        chain: i,
                        mounted: l,
                        openChainModal: o,
                      } = e,
                      d = l && r && i && t && "" !== _;
                    return (0, s.jsx)("div", {
                      ...(!l && {
                        "aria-hidden": !0,
                        style: {
                          opacity: 0,
                          pointerEvents: "none",
                          userSelect: "none",
                        },
                      }),
                      children: d
                        ? i.unsupported
                          ? (0, s.jsx)(c.$, {
                              onClick: o,
                              className: "cursor-pointer",
                              children: G("chainError"),
                            })
                          : (0, s.jsx)(c.$, {
                              onClick: n,
                              className: "cursor-pointer",
                              children: (0, y.M0)(
                                null == r ? void 0 : r.address
                              ),
                            })
                        : (0, s.jsx)(c.$, {
                            onClick: a,
                            className: "cursor-pointer",
                            disabled: "loading" === F,
                            children:
                              "loading" === F
                                ? G("Authenticating")
                                : G("Connect Wallet"),
                          }),
                    });
                  },
                }),
              ],
            }),
            !a.id &&
              (0, s.jsxs)("aside", {
                className:
                  "hidden md:flex fixed top-0 left-0 h-screen w-64 backdrop-blur-md bg-black/60 border-r border-border flex-col justify-between py-6 px-4 z-40",
                children: [
                  (0, s.jsxs)("div", {
                    className: "space-y-6",
                    children: [
                      (0, s.jsx)(i(), {
                        href: "/",
                        children: (0, s.jsx)(o.P.div, {
                          whileHover: { scale: 1.05 },
                          className: "flex items-center gap-2",
                          children: (0, s.jsx)(x.default, {
                            src: "/assets/logo.png",
                            width: 120,
                            height: 120,
                            alt: "logo",
                          }),
                        }),
                      }),
                      (0, s.jsx)("nav", {
                        className: "space-y-2 mt-6",
                        children: V.map((e) => {
                          let { label: t, href: a, icon: r } = e,
                            n = D === a;
                          return (0, s.jsx)(
                            i(),
                            {
                              href: a,
                              children: (0, s.jsx)(c.$, {
                                variant: n ? "default" : "ghost",
                                className: "w-full justify-start ".concat(
                                  n ? "bg-accent text-accent-foreground" : ""
                                ),
                                children: (0, s.jsxs)("div", {
                                  className:
                                    "flex items-center gap-2 w-full text-left",
                                  children: [
                                    (0, s.jsx)(r, { className: "h-4 w-4" }),
                                    G(t),
                                  ],
                                }),
                              }),
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("nav", {
                    className: "space-y-2",
                    children: K.map((e) => {
                      let { label: t, href: a, icon: r } = e;
                      return (0, s.jsx)(
                        c.$,
                        {
                          variant: "ghost",
                          className: "w-full justify-start",
                          children: (0, s.jsxs)("a", {
                            href: a,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "flex items-center gap-2 w-full text-left",
                            children: [
                              (0, s.jsx)(r, { className: "h-4 w-4" }),
                              G(t),
                            ],
                          }),
                        },
                        t
                      );
                    }),
                  }),
                ],
              }),
            (0, s.jsxs)("nav", {
              className:
                "md:hidden sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "container mx-auto px-4 py-3 flex items-center justify-between",
                  children: [
                    (0, s.jsx)(i(), {
                      href: "/",
                      children: (0, s.jsx)(o.P.div, {
                        whileHover: { scale: 1.05 },
                        className: "flex items-center gap-2",
                        children: (0, s.jsx)(x.default, {
                          src: "/assets/logo.png",
                          width: 100,
                          height: 100,
                          alt: "logo",
                        }),
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "flex fixed top-3 left-[20%] z-50 gap-2 items-center",
                      children: (0, s.jsx)(T, {}),
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        I &&
                          (0, s.jsxs)("div", {
                            className: "text-sm text-white",
                            children: [
                              "$",
                              null == H
                                ? void 0
                                : H.balance.toLocaleString("en-NG", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  }),
                            ],
                          }),
                        (0, s.jsx)(r.pK.Custom, {
                          children: (e) => {
                            let {
                                openConnectModal: a,
                                account: r,
                                openAccountModal: n,
                                mounted: i,
                                chain: l,
                                openChainModal: o,
                              } = e,
                              d = i && r && l && t;
                            return (0, s.jsx)("div", {
                              children: d
                                ? l.unsupported
                                  ? (0, s.jsx)(c.$, {
                                      variant: "default",
                                      onClick: o,
                                      className: "md:hidden cursor-pointer",
                                      children: G("Wrong Network"),
                                    })
                                  : (0, s.jsx)(c.$, {
                                      variant: "default",
                                      onClick: n,
                                      className: "md:hidden cursor-pointer",
                                      children: (0, y.M0)(r.address),
                                    })
                                : (0, s.jsx)(c.$, {
                                    variant: "default",
                                    onClick: a,
                                    className: "md:hidden cursor-pointer",
                                    children: G("Connect Wallet"),
                                  }),
                            });
                          },
                        }),
                        (0, s.jsx)(c.$, {
                          variant: "ghost",
                          size: "icon",
                          className: "md:hidden",
                          onClick: () => $(!n),
                          children: n
                            ? (0, s.jsx)(u.A, { className: "h-5 w-5" })
                            : (0, s.jsx)(m.A, { className: "h-5 w-5" }),
                        }),
                      ],
                    }),
                  ],
                }),
                n &&
                  (0, s.jsxs)(o.P.div, {
                    className:
                      "md:hidden px-4 py-4 space-y-4 bg-background border-b border-border",
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    children: [
                      [...V, ...K].map((e) => {
                        let { label: t, href: a, icon: r, external: n } = e,
                          l = D === a;
                        return n
                          ? (0, s.jsx)(
                              c.$,
                              {
                                variant: "ghost",
                                className: "w-full justify-start",
                                children: (0, s.jsxs)("a", {
                                  href: a,
                                  target: "_blank",
                                  className:
                                    "flex items-center gap-2 w-full text-left",
                                  children: [
                                    (0, s.jsx)(r, { className: "h-4 w-4" }),
                                    G(t),
                                  ],
                                }),
                              },
                              t
                            )
                          : (0, s.jsx)(
                              i(),
                              {
                                href: a,
                                children: (0, s.jsx)(c.$, {
                                  variant: l ? "default" : "ghost",
                                  className: "w-full justify-start ".concat(
                                    l ? "bg-accent text-accent-foreground" : ""
                                  ),
                                  children: (0, s.jsxs)("div", {
                                    className:
                                      "flex items-center gap-2 w-full text-left",
                                    children: [
                                      (0, s.jsx)(r, { className: "h-4 w-4" }),
                                      G(t),
                                    ],
                                  }),
                                }),
                              },
                              t
                            );
                      }),
                      (0, s.jsx)(r.pK.Custom, {
                        children: (e) => {
                          let { openConnectModal: t, account: a } = e;
                          return (0, s.jsx)(c.$, {
                            variant: "default",
                            onClick: t,
                            className: "w-full cursor-pointer",
                            children: a
                              ? (0, y.M0)(a.address)
                              : G("Connect Wallet"),
                          });
                        },
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
    },
    23843: (e, t, a) => {
      a.d(t, { $: () => u }), a(85035);
      var s = a(63439),
        r = a(37200),
        n = a(65730),
        i = a(88353),
        l = a(56886),
        o = a(40016),
        c = a(37120),
        d = a(50299);
      let u = (0, s.Y8)({
        appName: "App",
        projectId: "5a77d58d5cb76266c0f5c1772b5322f4",
        chains: [r.r, n.n, i.m, l.D, o.E, c.N, d.c],
        ssr: !0,
      });
    },
    30285: (e, t, a) => {
      a.d(t, { $: () => o });
      var s = a(95155);
      a(12115);
      var r = a(99708),
        n = a(74466),
        i = a(59434);
      let l = (0, n.F)(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        {
          variants: {
            variant: {
              default:
                "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
              destructive:
                "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
              outline:
                "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
              secondary:
                "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
              ghost:
                "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
              link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
              default: "h-9 px-4 py-2 has-[>svg]:px-3",
              sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
              lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
              icon: "size-9",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        }
      );
      function o(e) {
        let { className: t, variant: a, size: n, asChild: o = !1, ...c } = e,
          d = o ? r.DX : "button";
        return (0, s.jsx)(d, {
          "data-slot": "button",
          className: (0, i.cn)(l({ variant: a, size: n, className: t })),
          ...c,
        });
      }
    },
    37081: (e, t, a) => {
      a.d(t, { Z: () => n });
      var s = a(12115),
        r = a(53956);
      function n() {
        let e = (0, s.useContext)(r.c);
        if (!e)
          throw Error("useAuthContext must be used within a ContextProvider");
        return e;
      }
    },
    53956: (e, t, a) => {
      a.d(t, { c: () => x, ContextProvider: () => g });
      var s = a(95155),
        r = a(12115),
        n = a(63439),
        i = a(87017),
        l = a(26715),
        o = a(83415),
        c = a(23843),
        d = a(13845),
        u = a(32446);
      class h extends EventTarget {
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
      let m = new h(),
        p = (0, n.kT)({
          getNonce: async () => {
            var e;
            let t =
                (null === (e = window.ethereum) || void 0 === e
                  ? void 0
                  : e.selectedAddress) ||
                "0x0000000000000000000000000000000000000000",
              a = await fetch("".concat(d.H$, "/auth/nonce"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ walletAddress: t }),
              });
            return (await a.json()).data.nonce;
          },
          createMessage: (e) => {
            let { nonce: t, address: a, chainId: s } = e;
            return (0, u.o)({
              domain: window.location.host,
              address: a,
              statement: "Sign in with Ethereum to the app.",
              uri: window.location.origin,
              version: "1",
              chainId: s,
              nonce: t,
            });
          },
          verify: async (e) => {
            var t;
            let { message: a, signature: s } = e;
            console.log(a);
            let r =
                (null === (t = window.ethereum) || void 0 === t
                  ? void 0
                  : t.selectedAddress) ||
                "0x0000000000000000000000000000000000000000",
              n = await fetch("".concat(d.H$, "/auth/wallet"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ walletAddress: r, signature: s }),
              }),
              i = await n.json();
            return (
              console.log(i, "from verify oooo"),
              i.success &&
                (localStorage.setItem("token", i.data.token),
                localStorage.setItem("user", JSON.stringify(i.data.user)),
                m.emitAuthChange("authenticated"),
                m.emitSetUser(i.data.user),
                console.log("We have called authenticated")),
              i.success
            );
          },
          signOut: async () => {
            localStorage.removeItem("token"), localStorage.removeItem("user");
          },
        }),
        x = (0, r.createContext)(void 0),
        f = new i.E();
      function g(e) {
        let { children: t } = e,
          [a, i] = (0, r.useState)("unauthenticated"),
          [d, u] = (0, r.useState)();
        return (
          (0, r.useEffect)(() => {
            let e = (e) => {
              i(e.detail.status);
            };
            return (
              m.addEventListener("authChange", e),
              m.addEventListener("setUser", (e) => {
                console.log(e, "lets check if it came in ?????"),
                  u(e.detail.user);
              }),
              () => {
                m.removeEventListener("authChange", e),
                  m.removeEventListener("setUser", e);
              }
            );
          }, []),
          (0, s.jsx)(x.Provider, {
            value: { authStat: a, setAuthStat: i, user: d, setUser: u },
            children: (0, s.jsx)(o.x, {
              config: c.$,
              children: (0, s.jsx)(l.Ht, {
                client: f,
                children: (0, s.jsx)(n.aN, {
                  adapter: p,
                  status: a,
                  children: (0, s.jsx)(n.qL, { children: t }),
                }),
              }),
            }),
          })
        );
      }
    },
    59409: (e, t, a) => {
      a.d(t, {
        bq: () => u,
        eb: () => m,
        gC: () => h,
        l6: () => c,
        yv: () => d,
      });
      var s = a(95155);
      a(12115);
      var r = a(72281),
        n = a(66474),
        i = a(5196),
        l = a(47863),
        o = a(59434);
      function c(e) {
        let { ...t } = e;
        return (0, s.jsx)(r.bL, { "data-slot": "select", ...t });
      }
      function d(e) {
        let { ...t } = e;
        return (0, s.jsx)(r.WT, { "data-slot": "select-value", ...t });
      }
      function u(e) {
        let { className: t, size: a = "default", children: i, ...l } = e;
        return (0, s.jsxs)(r.l9, {
          "data-slot": "select-trigger",
          "data-size": a,
          className: (0, o.cn)(
            "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            t
          ),
          ...l,
          children: [
            i,
            (0, s.jsx)(r.In, {
              asChild: !0,
              children: (0, s.jsx)(n.A, { className: "size-4 opacity-50" }),
            }),
          ],
        });
      }
      function h(e) {
        let { className: t, children: a, position: n = "popper", ...i } = e;
        return (0, s.jsx)(r.ZL, {
          children: (0, s.jsxs)(r.UC, {
            "data-slot": "select-content",
            className: (0, o.cn)(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
              "popper" === n &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              t
            ),
            position: n,
            ...i,
            children: [
              (0, s.jsx)(p, {}),
              (0, s.jsx)(r.LM, {
                className: (0, o.cn)(
                  "p-1",
                  "popper" === n &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
                ),
                children: a,
              }),
              (0, s.jsx)(x, {}),
            ],
          }),
        });
      }
      function m(e) {
        let { className: t, children: a, ...n } = e;
        return (0, s.jsxs)(r.q7, {
          "data-slot": "select-item",
          className: (0, o.cn)(
            "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
            t
          ),
          ...n,
          children: [
            (0, s.jsx)("span", {
              className:
                "absolute right-2 flex size-3.5 items-center justify-center",
              children: (0, s.jsx)(r.VF, {
                children: (0, s.jsx)(i.A, { className: "size-4" }),
              }),
            }),
            (0, s.jsx)(r.p4, { children: a }),
          ],
        });
      }
      function p(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(r.PP, {
          "data-slot": "select-scroll-up-button",
          className: (0, o.cn)(
            "flex cursor-default items-center justify-center py-1",
            t
          ),
          ...a,
          children: (0, s.jsx)(l.A, { className: "size-4" }),
        });
      }
      function x(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(r.wn, {
          "data-slot": "select-scroll-down-button",
          className: (0, o.cn)(
            "flex cursor-default items-center justify-center py-1",
            t
          ),
          ...a,
          children: (0, s.jsx)(n.A, { className: "size-4" }),
        });
      }
    },
    59434: (e, t, a) => {
      a.d(t, { cn: () => n });
      var s = a(52596),
        r = a(39688);
      function n() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, r.QP)((0, s.$)(t));
      }
    },
    66695: (e, t, a) => {
      a.d(t, {
        BT: () => o,
        Wu: () => c,
        ZB: () => l,
        Zp: () => n,
        aR: () => i,
        wL: () => d,
      });
      var s = a(95155);
      a(12115);
      var r = a(59434);
      function n(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          "data-slot": "card",
          className: (0, r.cn)(
            "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
            t
          ),
          ...a,
        });
      }
      function i(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          "data-slot": "card-header",
          className: (0, r.cn)(
            "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
            t
          ),
          ...a,
        });
      }
      function l(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          "data-slot": "card-title",
          className: (0, r.cn)("leading-none font-semibold", t),
          ...a,
        });
      }
      function o(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          "data-slot": "card-description",
          className: (0, r.cn)("text-muted-foreground text-sm", t),
          ...a,
        });
      }
      function c(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          "data-slot": "card-content",
          className: (0, r.cn)("px-6", t),
          ...a,
        });
      }
      function d(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          "data-slot": "card-footer",
          className: (0, r.cn)("flex items-center px-6 [.border-t]:pt-6", t),
          ...a,
        });
      }
    },
    82478: (e, t, a) => {
      a.d(t, { p: () => s });
      let s = async function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          s =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "GET";
        try {
          let r = { method: s, headers: a };
          "GET" !== s &&
            "HEAD" !== s &&
            t &&
            (t instanceof FormData || t instanceof URLSearchParams
              ? (r.body = t)
              : (r.body = JSON.stringify(t)));
          let n = await fetch(e, r),
            i = n.headers.get("content-type");
          if (i && -1 !== i.indexOf("application/json")) return await n.json();
          {
            let e = await n.text();
            return {
              success: n.ok,
              data: e,
              message: n.ok ? "Success" : "Error",
            };
          }
        } catch (e) {
          if (e instanceof Error)
            throw Error("API call failed: ".concat(e.message));
          throw Error("An unknown error occurred");
        }
      };
    },
  },
]);
