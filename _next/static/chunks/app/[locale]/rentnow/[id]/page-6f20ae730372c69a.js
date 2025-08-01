(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3119],
  {
    26126: (e, s, a) => {
      "use strict";
      a.d(s, { E: () => c });
      var r = a(95155);
      a(12115);
      var t = a(99708),
        l = a(74466),
        n = a(59434);
      let i = (0, l.F)(
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
      function c(e) {
        let { className: s, variant: a, asChild: l = !1, ...c } = e,
          o = l ? t.DX : "span";
        return (0, r.jsx)(o, {
          "data-slot": "badge",
          className: (0, n.cn)(i({ variant: a }), s),
          ...c,
        });
      }
    },
    30745: (e, s, a) => {
      Promise.resolve().then(a.bind(a, 75196));
    },
    75196: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, { default: () => E });
      var r = a(95155),
        t = a(35695),
        l = a(12115),
        n = a(17652),
        i = a(29911);
      let c = (e) => {
        let { gpu: s } = e,
          a = (0, n.c3)("GPUDetails");
        return (0, r.jsxs)("div", {
          className:
            "bg-black text-white border border-orange-500 rounded-xl p-6 max-w-4xl mx-auto shadow-lg",
          children: [
            (0, r.jsxs)("div", {
              className: "flex flex-col md:flex-row justify-between gap-6",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex-1",
                  children: [
                    (0, r.jsx)("h2", {
                      className: "text-3xl font-bold",
                      children: null == s ? void 0 : s.name,
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "flex items-center mt-4 space-x-2 text-orange-400 font-semibold",
                      children: [
                        (0, r.jsx)(i.UIU, {}),
                        (0, r.jsx)("span", {
                          children:
                            (null == s ? void 0 : s.architecture) ||
                            (null == s ? void 0 : s.cudaCores)
                              ? ""
                                  .concat(s.cudaCores, " ")
                                  .concat(a("cudaCores"))
                              : null == s
                              ? void 0
                              : s.manufacturer,
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "bg-white text-black text-lg font-semibold rounded-md w-fit mt-6 px-4 py-2",
                      children: "1x",
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex-1 space-y-2",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "flex justify-between items-center text-sm text-gray-400",
                      children: [
                        (0, r.jsx)("span", {
                          className: "font-bold text-white",
                          children: a("specs"),
                        }),
                        (0, r.jsxs)("span", {
                          className:
                            "bg-orange-500 text-white px-3 py-1 rounded-full",
                          children: [a("region"), " ", s.region],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "mt-2 text-sm space-y-1",
                      children: [
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("span", {
                              className: "text-gray-400",
                              children: a("cores"),
                            }),
                            null == s ? void 0 : s.cores,
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("span", {
                              className: "text-gray-400",
                              children: a("gpuRam"),
                            }),
                            " ",
                            null == s ? void 0 : s.cpuRAM,
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("span", {
                              className: "text-gray-400",
                              children: a("price"),
                            }),
                            " ",
                            null == s ? void 0 : s.pricePerHour,
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("span", {
                              className: "text-gray-400",
                              children: a("storage"),
                            }),
                            " ",
                            null == s ? void 0 : s.storage,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("div", { className: "border-t border-gray-700 my-6" }),
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)("h3", {
                  className: "text-xl font-bold mb-4",
                  children: a("resourceConfiguration"),
                }),
                (0, r.jsxs)("div", {
                  className:
                    "grid grid-cols-1 sm:grid-cols-3 gap-4 text-center",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "bg-gray-900 p-4 rounded-md",
                      children: [
                        (0, r.jsx)("p", {
                          className: "text-sm text-gray-400",
                          children: a("cpu"),
                        }),
                        (0, r.jsxs)("p", {
                          className: "text-xl font-bold",
                          children: [
                            null == s ? void 0 : s.vCPUs,
                            " ",
                            (0, r.jsx)("span", {
                              className: "text-sm font-normal",
                              children: a("cpuCores"),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("p", {
                          className: "text-xs text-gray-500",
                          children: [
                            a("min"),
                            " ",
                            null == s ? void 0 : s.vCPUs,
                            " \xa0\xa0 Max: ",
                            null == s ? void 0 : s.vCPUs,
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "bg-gray-900 p-4 rounded-md",
                      children: [
                        (0, r.jsx)("p", {
                          className: "text-sm text-gray-400",
                          children: a("ram"),
                        }),
                        (0, r.jsxs)("p", {
                          className: "text-xl font-bold",
                          children: [
                            null == s ? void 0 : s.cpuRAM,
                            (0, r.jsx)("span", {
                              className: "text-sm font-normal",
                              children: "GB",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("p", {
                          className: "text-xs text-gray-500",
                          children: [
                            a("min"),
                            " ",
                            null == s ? void 0 : s.cpuRAM,
                            " \xa0\xa0 Max: ",
                            null == s ? void 0 : s.cpuRAM,
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "bg-gray-900 p-4 rounded-md",
                      children: [
                        (0, r.jsx)("p", {
                          className: "text-sm text-gray-400",
                          children: a("storage").toUpperCase(),
                        }),
                        (0, r.jsxs)("p", {
                          className: "text-xl font-bold",
                          children: [
                            null == s ? void 0 : s.storage,
                            "  ",
                            (0, r.jsx)("span", {
                              className: "text-sm font-normal",
                              children: a("storageGb"),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("p", {
                          className: "text-xs text-gray-500",
                          children: [
                            a("min"),
                            " ",
                            null == s ? void 0 : s.storage,
                            "  \xa0\xa0 ",
                            a("max"),
                            ": ",
                            null == s ? void 0 : s.storage,
                            " ",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var o = a(30285),
        d = a(35169),
        u = a(6874),
        x = a.n(u),
        m = a(56671),
        h = a(89074),
        p = a(82478),
        g = a(13845),
        f = a(66695),
        j = a(82230),
        v = a(59434);
      let b = l.forwardRef((e, s) => {
        let { className: a, ...t } = e;
        return (0, r.jsx)(j.bL, {
          className: (0, v.cn)("grid gap-2", a),
          ...t,
          ref: s,
        });
      });
      b.displayName = j.bL.displayName;
      let N = l.forwardRef((e, s) => {
        let { className: a, ...t } = e;
        return (0, r.jsx)(j.q7, {
          ref: s,
          className: (0, v.cn)(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            a
          ),
          ...t,
          children: (0, r.jsx)(j.C1, {
            className: "flex items-center justify-center",
            children: (0, r.jsx)("div", {
              className: "h-2 w-2 rounded-full bg-current",
            }),
          }),
        });
      });
      N.displayName = j.q7.displayName;
      var y = a(30860);
      let w = (0, a(74466).F)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        P = l.forwardRef((e, s) => {
          let { className: a, ...t } = e;
          return (0, r.jsx)(y.b, {
            ref: s,
            className: (0, v.cn)(w(), a),
            ...t,
          });
        });
      function C(e) {
        let { config: s, onChange: a } = e,
          t = (0, n.c3)("LaunchConfig");
        return (0, r.jsxs)(f.Zp, {
          className: "border border-border/50 bg-[#150702]/80 backdrop-blur-sm",
          children: [
            (0, r.jsx)(f.aR, {
              children: (0, r.jsx)(f.ZB, { children: t("title") }),
            }),
            (0, r.jsxs)(f.Wu, {
              className: "space-y-6",
              children: [
                (0, r.jsxs)("div", {
                  className: "space-y-3",
                  children: [
                    (0, r.jsx)("h3", {
                      className: "text-sm font-medium mb-2",
                      children: t("launchType"),
                    }),
                    (0, r.jsxs)(b, {
                      value: s.launchType,
                      onValueChange: (e) => a({ ...s, launchType: e }),
                      className: "flex flex-col space-y-2",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            (0, r.jsx)(N, { value: "VM", id: "vm" }),
                            (0, r.jsx)(P, {
                              htmlFor: "vm",
                              className: "cursor-pointer",
                              children: t("virtualMachine"),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            (0, r.jsx)(N, {
                              value: "Container",
                              id: "container",
                            }),
                            (0, r.jsx)(P, {
                              htmlFor: "container",
                              className: "cursor-pointer",
                              children: t("container"),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "space-y-3",
                  children: [
                    (0, r.jsx)("h3", {
                      className: "text-sm font-medium mb-2",
                      children: t("operatingSystem"),
                    }),
                    (0, r.jsxs)(b, {
                      value: s.osType,
                      onValueChange: (e) => a({ ...s, osType: e }),
                      className: "flex flex-col space-y-2",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            (0, r.jsx)(N, { value: "ubuntu", id: "ubuntu" }),
                            (0, r.jsx)(P, {
                              htmlFor: "ubuntu",
                              className: "cursor-pointer",
                              children: t("ubuntu"),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            (0, r.jsx)(N, { value: "linux", id: "linux" }),
                            (0, r.jsx)(P, {
                              htmlFor: "linux",
                              className: "cursor-pointer",
                              children: t("linux"),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            (0, r.jsx)(N, { value: "windows", id: "windows" }),
                            (0, r.jsx)(P, {
                              htmlFor: "windows",
                              className: "cursor-pointer",
                              children: t("windows"),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      P.displayName = y.b.displayName;
      var R = a(19123),
        k = a(37081),
        T = a(26126),
        U = a(85339),
        F = a(51154);
      function S(e) {
        let { gpu: s, user: a, isRenting: t, onRent: l, launchConfig: i } = e,
          c = (0, n.c3)("SummaryCard"),
          d = a && a.balance >= s.pricePerHour;
        return (0, r.jsxs)(f.Zp, {
          className:
            "sticky top-4 border border-border/50 bg-[#150702]/80 backdrop-blur-sm",
          children: [
            (0, r.jsx)(f.aR, {
              children: (0, r.jsx)(f.ZB, { children: c("title") }),
            }),
            (0, r.jsxs)(f.Wu, {
              className: "space-y-4",
              children: [
                (0, r.jsxs)("div", {
                  className: "space-y-2",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex justify-between",
                      children: [
                        (0, r.jsx)("span", {
                          className: "text-muted-foreground",
                          children: c("gpuModel"),
                        }),
                        (0, r.jsx)("span", {
                          className: "font-semibold",
                          children: s.name,
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex justify-between",
                      children: [
                        (0, r.jsx)("span", {
                          className: "text-muted-foreground",
                          children: c("launchType"),
                        }),
                        (0, r.jsx)(T.E, {
                          variant: "outline",
                          children: i.launchType,
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex justify-between",
                      children: [
                        (0, r.jsx)("span", {
                          className: "text-muted-foreground",
                          children: c("operatingSystem"),
                        }),
                        (0, r.jsx)(T.E, {
                          variant: "outline",
                          children: i.osType,
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex justify-between",
                      children: [
                        (0, r.jsx)("span", {
                          className: "text-muted-foreground",
                          children: c("pricePerHour"),
                        }),
                        (0, r.jsxs)("span", {
                          className: "font-bold text-primary",
                          children: ["$", s.pricePerHour],
                        }),
                      ],
                    }),
                    a &&
                      (0, r.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                          (0, r.jsx)("span", {
                            className: "text-muted-foreground",
                            children: c("yourBalance"),
                          }),
                          (0, r.jsxs)("span", {
                            className: "font-bold ".concat(
                              d ? "text-green-500" : "text-red-500"
                            ),
                            children: ["$", a.balance],
                          }),
                        ],
                      }),
                  ],
                }),
                a &&
                  !d &&
                  (0, r.jsxs)("div", {
                    className: "border-red-500/50 bg-red-500/10",
                    children: [
                      (0, r.jsx)(U.A, { className: "h-4 w-4 text-red-500" }),
                      (0, r.jsx)("div", {
                        children: c("insufficientBalance", {
                          amount: s.pricePerHour,
                        }),
                      }),
                    ],
                  }),
                (0, r.jsx)(o.$, {
                  className: "w-full cursor-pointer hover:bg-orange-600",
                  size: "lg",
                  onClick: l,
                  disabled: t || !d,
                  children: t
                    ? (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(F.A, {
                            className: "mr-2 h-4 w-4 animate-spin",
                          }),
                          c("startingRental"),
                        ],
                      })
                    : c("rentNow"),
                }),
                (0, r.jsx)("p", {
                  className: "text-xs text-muted-foreground text-center",
                  children: c("chargeNotice", { amount: s.pricePerHour }),
                }),
              ],
            }),
          ],
        });
      }
      var G = a(12388);
      function E() {
        let e = (0, t.useParams)(),
          s = (0, G.rd)(),
          [a, i] = (0, l.useState)(null),
          [u, f] = (0, l.useState)(!0),
          [j, v] = (0, l.useState)(!1),
          [b, N] = (0, l.useState)({ launchType: "VM", osType: "ubuntu" }),
          { user: y, setUser: w } = (0, k.Z)(),
          P = (0, n.c3)("GPUDetails");
        (0, l.useEffect)(() => {
          let a = localStorage.getItem("user"),
            r = localStorage.getItem("token");
          if (!a || !r) {
            m.oR.error("Please login to rent GPUX"), s.push("/");
            return;
          }
          w(JSON.parse(a));
          let t = e.id;
          console.log(t, "should I get this"),
            (async () => {
              try {
                f(!0);
                let e = await (0, p.p)(
                  "".concat(g.H$, "/gpus/getone/").concat(t),
                  {},
                  { "Content-Type": "application/json" },
                  "GET"
                );
                e.success && e.data ? i(e.data) : s.push("/coming-soon");
              } catch (e) {
                console.error("Error fetching GPUX:", e),
                  m.oR.error("Failed to load GPUX");
              } finally {
                f(!1);
              }
            })();
        }, [e.id, s, w]);
        let T = async () => {
          if (!a || !y) return;
          let e = localStorage.getItem("token");
          if (!e) {
            m.oR.error("Please login to rent GPUX"), s.push("/");
            return;
          }
          if (y.balance < a.pricePerHour) {
            m.oR.error(
              "Insufficient balance. You need at least $"
                .concat(a.pricePerHour, " to rent this GPUX. Your balance: $")
                .concat(y.balance),
              {
                action: { label: "Deposit", onClick: () => s.push("/deposit") },
              }
            );
            return;
          }
          try {
            v(!0);
            let r = await (0, p.p)(
              "".concat(g.H$, "/rentals/startRental"),
              { gpuId: a._id, launchType: b.launchType, osType: b.osType },
              {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(e),
              },
              "POST"
            );
            if (r.success) {
              m.oR.success("GPUX rental started successfully!");
              let a = await (0, p.p)(
                "".concat(g.H$, "/auth/me"),
                {},
                { Authorization: "Bearer ".concat(e) },
                "GET"
              );
              a.success &&
                (localStorage.setItem("user", JSON.stringify(a.data)),
                w(a.data)),
                m.oR.success("Waiting Redirection"),
                setTimeout(() => {
                  s.push("/running-gpus/?new=true");
                }, 2e3);
            } else throw Error(r.message || "Failed to start rental");
          } catch (s) {
            console.error("Rental error:", s);
            let e =
              s instanceof Error && s.message
                ? s.message
                : "Failed to start GPUX rental";
            m.oR.error(e);
          } finally {
            v(!1);
          }
        };
        return a
          ? !a || u
            ? (0, r.jsx)("div", {
                className: "flex items-center justify-center min-h-screen",
                children: (0, r.jsx)("div", {
                  className: "animate-pulse",
                  children: P("loading"),
                }),
              })
            : (0, r.jsxs)("div", {
                className:
                  "w-full min-h-screen bg-background mx-auto px-4 py-8",
                children: [
                  (0, r.jsx)(R.default, {}),
                  (0, r.jsx)("div", {
                    className: "mb-6",
                    children: (0, r.jsx)(x(), {
                      href: "/",
                      children: (0, r.jsxs)(o.$, {
                        variant: "ghost",
                        className: "flex items-center gap-2 cursor-pointer",
                        children: [
                          (0, r.jsx)(d.A, { className: "h-4 w-4" }),
                          P("backButton"),
                        ],
                      }),
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "lg:col-span-2 space-y-6",
                        children: [
                          (0, r.jsx)("div", {
                            className: "mt-8",
                            children: (0, r.jsx)(c, { gpu: a }),
                          }),
                          (0, r.jsx)("div", {
                            className: "mt-8",
                            children: (0, r.jsx)(C, { config: b, onChange: N }),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "lg:col-span-1",
                        children: (0, r.jsx)(S, {
                          gpu: a,
                          user: y,
                          isRenting: j,
                          onRent: T,
                          launchConfig: b,
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(h.l, {}),
                ],
              })
          : null;
      }
    },
    89074: (e, s, a) => {
      "use strict";
      a.d(s, { l: () => n });
      var r = a(95155),
        t = a(51362),
        l = a(56671);
      let n = (e) => {
        let { ...s } = e,
          { theme: a = "system" } = (0, t.D)();
        return (0, r.jsx)(l.l$, {
          theme: a,
          className: "toaster group bg-[#FF5F2C] text-black",
          style: {
            "--normal-bg": "#ad2b00",
            "--normal-text": "#fff",
            "--normal-border": "var(--border)",
          },
          ...s,
        });
      };
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(
      0,
      [4106, 8451, 6711, 9307, 7106, 2761, 6312, 6226, 3625, 8441, 1684, 7358],
      () => s(30745)
    ),
      (_N_E = e.O());
  },
]);
