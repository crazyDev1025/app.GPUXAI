(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7040],
  {
    62523: (e, s, t) => {
      "use strict";
      t.d(s, { p: () => n });
      var r = t(95155);
      t(12115);
      var a = t(59434);
      function n(e) {
        let { className: s, type: t, ...n } = e;
        return (0, r.jsx)("input", {
          type: t,
          "data-slot": "input",
          className: (0, a.cn)(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            s
          ),
          ...n,
        });
      }
    },
    76650: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { default: () => C });
      var r = t(95155),
        a = t(12115),
        n = t(25561),
        i = t(66695),
        o = t(30285),
        c = t(62523),
        l = t(56671),
        d = t(51154),
        u = t(43453),
        m = t(54861),
        x = t(39785),
        p = t(35169),
        h = t(92138),
        f = t(82478),
        g = t(13845),
        j = t(35695),
        b = t(19123),
        N = t(2145),
        y = t(25179),
        v = t(93597),
        w = t(37081),
        E = t(94524),
        k = t(23843),
        F = t(64997),
        R = t(17652),
        S = t(6874),
        T = t.n(S);
      function C() {
        let e = (0, j.useRouter)(),
          [s, t] = (0, a.useState)(""),
          [S, C] = (0, a.useState)(0),
          [A, D] = (0, a.useState)(!1),
          [H, P] = (0, a.useState)(!1),
          { isConnected: $ } = (0, N.F)(),
          { authStat: B } = (0, w.Z)(),
          { sendTransaction: O, data: _, isPending: G, error: I } = (0, y.s)(),
          {
            isLoading: L,
            isSuccess: U,
            error: W,
          } = (0, v.g)({ hash: _, confirmations: 1 }),
          Z = (0, F.s)(k.$).chainId,
          z = "0xA9a06682baae823a5Fe34c99bc4bECC7d67475B3",
          J = G
            ? "sending"
            : L
            ? "confirming"
            : U
            ? "confirmed"
            : I || W
            ? "error"
            : A
            ? "processing"
            : "idle";
        (0, a.useEffect)(() => {
          I && l.oR.error(I.message || "Failed to send transaction"),
            W && l.oR.error(W.message || "Transaction failed");
        }, [I, W]);
        let Y = (0, a.useCallback)(async () => {
          if (_) {
            if (!s || 0 >= parseFloat(s)) {
              l.oR.error("Please enter a valid amount");
              return;
            }
            try {
              D(!0);
              let e = localStorage.getItem("user"),
                t = localStorage.getItem("token");
              if (!e || !t) {
                l.oR.error("Please connect your wallet first");
                return;
              }
              let r = JSON.parse(e).walletAddress,
                a = g.OK[Z] || "ethereum",
                n = await (0, f.p)(
                  "".concat(g.H$, "/payments/deposit"),
                  {
                    txHash: _,
                    amount: S,
                    amountCrypto: s,
                    chain: a,
                    walletAddress: r,
                  },
                  {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(t),
                  },
                  "POST"
                );
              if (n.success) {
                l.oR.success(
                  "Deposit successful! Your balance has been updated."
                );
                let e = await (0, f.p)(
                  "".concat(g.H$, "/auth/me"),
                  {},
                  { Authorization: "Bearer ".concat(t) },
                  "GET"
                );
                e.success &&
                  localStorage.setItem("user", JSON.stringify(e.data));
              } else throw Error(n.message || "Failed to process deposit");
            } catch (e) {
              e instanceof Error
                ? (console.error("Deposit error:", e),
                  l.oR.error(e.message || "Failed to process deposit"))
                : (console.error("Deposit error:", e),
                  l.oR.error("Failed to process deposit"));
            } finally {
              D(!1);
            }
          }
        }, [_, s, S, Z]);
        (0, a.useEffect)(() => {
          U && _ && !A && Y();
        }, [U, _, A, Y]);
        let K = async () => {
            if (!s || 0 >= parseFloat(s)) {
              l.oR.error("Please enter a valid amount");
              return;
            }
            if (!$) {
              l.oR.error("Please connect your wallet first");
              return;
            }
            if ("authenticated" !== B) {
              l.oR.error("Please authenticate first");
              return;
            }
            try {
              await O({ to: z, value: (0, E.g)(s) }),
                l.oR.info("Transaction sent! Waiting for confirmation...");
            } catch (e) {
              console.error("Error initiating transaction:", e);
            }
          },
          M = async (e) => {
            let s = e.target.value;
            if ((t(s), !s || 0 === parseFloat(s))) {
              C(0);
              return;
            }
            P(!0);
            try {
              let e = g.a4[Z] || "ETH",
                t = await fetch(
                  "https://min-api.cryptocompare.com/data/price?fsym=".concat(
                    e,
                    "&tsyms=USD"
                  ),
                  {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                  }
                );
              if (!t.ok) throw Error("HTTP error! status: ".concat(t.status));
              let r = await t.json();
              if ("Error" === r.Response)
                throw Error(r.Message || "Failed to fetch exchange rate");
              let a = parseFloat(s) * r.USD;
              C(a);
            } catch (e) {
              console.error("Error fetching exchange rate:", e),
                l.oR.error(
                  e instanceof Error
                    ? e.message
                    : "Failed to calculate USD amount"
                ),
                C(0);
            } finally {
              P(!1);
            }
          },
          q = (0, R.c3)("Deposit");
        return (0, r.jsxs)("div", {
          className: "min-h-screen bg-transparent",
          children: [
            (0, r.jsx)(b.default, {}),
            (0, r.jsxs)("div", {
              className: "container mx-auto px-4 py-16 relative",
              children: [
                (0, r.jsx)("div", {
                  className: "mb-4 absolute left-[12%]",
                  children: (0, r.jsx)(T(), {
                    href: "/",
                    children: (0, r.jsxs)(o.$, {
                      variant: "ghost",
                      className: "flex items-center gap-2 cursor-pointer",
                      children: [
                        (0, r.jsx)(p.A, { className: "h-4 w-4" }),
                        q("backButton"),
                      ],
                    }),
                  }),
                }),
                (0, r.jsxs)(n.P.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  className: "max-w-lg mx-auto",
                  children: [
                    (0, r.jsxs)(i.Zp, {
                      className:
                        "border border-border/50 bg-[#150702]/80 backdrop-blur-sm mt-16",
                      children: [
                        (0, r.jsxs)(i.aR, {
                          className: "text-center",
                          children: [
                            (0, r.jsx)("div", {
                              className: "mx-auto mb-4",
                              children: (() => {
                                switch (J) {
                                  case "sending":
                                  case "confirming":
                                  case "processing":
                                    return (0, r.jsx)(d.A, {
                                      className:
                                        "h-8 w-8 animate-spin text-primary",
                                    });
                                  case "confirmed":
                                    return (0, r.jsx)(u.A, {
                                      className: "h-8 w-8 text-green-500",
                                    });
                                  case "error":
                                    return (0, r.jsx)(m.A, {
                                      className: "h-8 w-8 text-red-500",
                                    });
                                  default:
                                    return (0, r.jsx)(x.A, {
                                      className: "h-8 w-8 text-primary",
                                    });
                                }
                              })(),
                            }),
                            (0, r.jsx)(i.ZB, {
                              className: "text-2xl font-bold",
                              children: q("title"),
                            }),
                            (0, r.jsx)(i.BT, {
                              children: q("description", {
                                currency: g.a4[Z] || "ETH",
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsxs)(i.Wu, {
                          className: "space-y-6",
                          children: [
                            "idle" === J &&
                              (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsxs)("div", {
                                    className: "space-y-2",
                                    children: [
                                      (0, r.jsx)("label", {
                                        children: q("amountLabel", {
                                          currency: g.a4[Z] || "ETH",
                                        }),
                                      }),
                                      (0, r.jsx)(c.p, {
                                        id: "amount",
                                        type: "number",
                                        placeholder: "0.1",
                                        value: s,
                                        onChange: (e) => M(e),
                                        step: "0.01",
                                        min: "0.01",
                                        disabled: G,
                                      }),
                                    ],
                                  }),
                                  H
                                    ? (0, r.jsx)("div", {
                                        className: "",
                                        children: q("loading"),
                                      })
                                    : S > 0 &&
                                      (0, r.jsx)("div", {
                                        className: "",
                                        children: q("youGet", {
                                          amount: S.toLocaleString("en-NG", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                          }),
                                        }),
                                      }),
                                  (0, r.jsxs)("div", {
                                    className: "space-y-2",
                                    children: [
                                      (0, r.jsxs)("p", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: [q("adminWalletLabel"), ":"],
                                      }),
                                      (0, r.jsx)("code", {
                                        className:
                                          "block p-2 bg-black/40 rounded text-xs break-all",
                                        children: z,
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)(o.$, {
                                    className: "w-full group cursor-pointer",
                                    onClick: K,
                                    disabled:
                                      G || !s || !$ || "unauthenticated" === B,
                                    children: G
                                      ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                            (0, r.jsx)(d.A, {
                                              className:
                                                "mr-2 h-4 w-4 animate-spin",
                                            }),
                                            q("status.sending"),
                                          ],
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                            q("depositButton", {
                                              currency: g.a4[Z] || "ETH",
                                            }),
                                            (0, r.jsx)(h.A, {
                                              className:
                                                "ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform",
                                            }),
                                          ],
                                        }),
                                  }),
                                ],
                              }),
                            "sending" === J &&
                              (0, r.jsx)("div", {
                                className: "text-center space-y-4",
                                children: (0, r.jsx)("p", {
                                  className: "text-muted-foreground",
                                  children: q("status.sending"),
                                }),
                              }),
                            "confirming" === J &&
                              (0, r.jsxs)("div", {
                                className: "text-center space-y-4",
                                children: [
                                  (0, r.jsx)("p", {
                                    className: "text-muted-foreground",
                                    children: q("status.confirming"),
                                  }),
                                  (0, r.jsx)("p", {
                                    className: "text-xs break-all",
                                    children: q("transactionHash", { hash: _ }),
                                  }),
                                ],
                              }),
                            "processing" === J &&
                              (0, r.jsxs)("div", {
                                className: "text-center space-y-4",
                                children: [
                                  (0, r.jsx)("p", {
                                    className: "text-muted-foreground",
                                    children: q("status.processing"),
                                  }),
                                  (0, r.jsx)("p", {
                                    className: "text-xs text-green-500",
                                    children: q("status.confirmed"),
                                  }),
                                ],
                              }),
                            "confirmed" === J &&
                              (0, r.jsxs)("div", {
                                className: "text-center space-y-4",
                                children: [
                                  (0, r.jsx)("div", {
                                    className: "text-6xl mb-4",
                                    children: "\uD83C\uDF89",
                                  }),
                                  (0, r.jsx)("p", {
                                    className:
                                      "text-green-500 font-semibold text-xl",
                                    children: q("status.success"),
                                  }),
                                  (0, r.jsxs)("p", {
                                    className: "text-muted-foreground",
                                    children: [
                                      "Your deposit of ",
                                      s,
                                      " ",
                                      g.a4[Z] || "ETH",
                                      " ($",
                                      S.toFixed(2),
                                      ") has been successfully processed!",
                                    ],
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "pt-4",
                                    children: (0, r.jsx)(o.$, {
                                      onClick: () => e.push("/"),
                                      className: "w-full",
                                      children: "Continue to Dashboard",
                                    }),
                                  }),
                                ],
                              }),
                            "error" === J &&
                              (0, r.jsxs)("div", {
                                className: "text-center space-y-4",
                                children: [
                                  (0, r.jsx)("p", {
                                    className: "text-red-500 font-semibold",
                                    children: q("status.failed"),
                                  }),
                                  (0, r.jsx)("p", {
                                    className: "text-sm text-muted-foreground",
                                    children:
                                      (null == I ? void 0 : I.message) ||
                                      (null == W ? void 0 : W.message) ||
                                      "Unknown error",
                                  }),
                                  (0, r.jsx)(o.$, {
                                    variant: "outline",
                                    onClick: () => {
                                      t("");
                                    },
                                    children: q("status.tryAgain"),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "mt-8 text-center",
                      children: (0, r.jsxs)("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                          q("support.text"),
                          " ",
                          (0, r.jsx)("a", {
                            href: "mailto:support@gpuai.me",
                            className: "text-primary hover:underline",
                            children: q("support.email"),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    98236: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 76650));
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(
      0,
      [4106, 8451, 9307, 7106, 2761, 6312, 2308, 3625, 8441, 1684, 7358],
      () => s(98236)
    ),
      (_N_E = e.O());
  },
]);
