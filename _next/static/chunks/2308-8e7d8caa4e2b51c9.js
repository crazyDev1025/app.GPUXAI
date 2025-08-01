"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2308],
  {
    25179: (t, e, a) => {
      a.d(e, { s: () => R });
      var n = a(5041),
        r = a(19405),
        i = a(50431),
        o = a(7441),
        c = a(38597),
        s = a(30445),
        d = a(42264),
        l = a(69432),
        h = a(35020),
        u = a(7671),
        p = a(76743),
        w = a(34524),
        y = a(65003),
        m = a(84062),
        f = a(926),
        g = a(82700),
        v = a(2806);
      let T = new y.A(128);
      async function k(t, e) {
        let {
          account: a = t.account,
          chain: n = t.chain,
          accessList: y,
          authorizationList: k,
          blobs: A,
          data: M,
          gas: C,
          gasPrice: I,
          maxFeePerBlobGas: R,
          maxFeePerGas: $,
          maxPriorityFeePerGas: x,
          nonce: b,
          type: E,
          value: P,
          ...q
        } = e;
        if (void 0 === a)
          throw new i.T({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let F = a ? (0, r.J)(a) : null;
        try {
          (0, m.c)(e);
          let a = await (async () =>
            e.to
              ? e.to
              : null !== e.to && k && k.length > 0
              ? await (0, c.g)({ authorization: k[0] }).catch(() => {
                  throw new o.C(
                    "`to` is required. Could not infer from `authorizationList`."
                  );
                })
              : void 0)();
          if (F?.type === "json-rpc" || null === F) {
            let e;
            null !== n &&
              ((e = await (0, w.T)(t, f.T, "getChainId")({})),
              (function ({ chain: t, currentChainId: e }) {
                if (!t) throw new s.jF();
                if (e !== t.id) throw new s.EH({ chain: t, currentChainId: e });
              })({ currentChainId: e, chain: n }));
            let r = t.chain?.formatters?.transactionRequest?.format,
              i = (r || p.Bv)({
                ...(0, u.o)(q, { format: r }),
                accessList: y,
                authorizationList: k,
                blobs: A,
                chainId: e,
                data: M,
                from: F?.address,
                gas: C,
                gasPrice: I,
                maxFeePerBlobGas: R,
                maxFeePerGas: $,
                maxPriorityFeePerGas: x,
                nonce: b,
                to: a,
                type: E,
                value: P,
              }),
              o = T.get(t.uid);
            try {
              return await t.request(
                {
                  method: o ? "wallet_sendTransaction" : "eth_sendTransaction",
                  params: [i],
                },
                { retryCount: 0 }
              );
            } catch (e) {
              if (!1 === o) throw e;
              if (
                "InvalidInputRpcError" === e.name ||
                "InvalidParamsRpcError" === e.name ||
                "MethodNotFoundRpcError" === e.name ||
                "MethodNotSupportedRpcError" === e.name
              )
                return await t
                  .request(
                    { method: "wallet_sendTransaction", params: [i] },
                    { retryCount: 0 }
                  )
                  .then((e) => (T.set(t.uid, !0), e))
                  .catch((a) => {
                    if (
                      "MethodNotFoundRpcError" === a.name ||
                      "MethodNotSupportedRpcError" === a.name
                    )
                      throw (T.set(t.uid, !1), e);
                    throw a;
                  });
              throw e;
            }
          }
          if (F?.type === "local") {
            let e = await (0, w.T)(
                t,
                g.ft,
                "prepareTransactionRequest"
              )({
                account: F,
                accessList: y,
                authorizationList: k,
                blobs: A,
                chain: n,
                data: M,
                gas: C,
                gasPrice: I,
                maxFeePerBlobGas: R,
                maxFeePerGas: $,
                maxPriorityFeePerGas: x,
                nonce: b,
                nonceManager: F.nonceManager,
                parameters: [...g.MM, "sidecars"],
                type: E,
                value: P,
                ...q,
                to: a,
              }),
              r = n?.serializers?.transaction,
              i = await F.signTransaction(e, { serializer: r });
            return await (0, w.T)(
              t,
              v.L,
              "sendRawTransaction"
            )({ serializedTransaction: i });
          }
          if (F?.type === "smart")
            throw new i.Z({
              metaMessages: [
                "Consider using the `sendUserOperation` Action instead.",
              ],
              docsPath: "/docs/actions/bundler/sendUserOperation",
              type: "smart",
            });
          throw new i.Z({
            docsPath: "/docs/actions/wallet/sendTransaction",
            type: F?.type,
          });
        } catch (t) {
          if (t instanceof i.Z) throw t;
          throw (function (t, { docsPath: e, ...a }) {
            let n = (() => {
              let e = (0, h.l)(t, a);
              return e instanceof d.RM ? t : e;
            })();
            return new l.$s(n, { docsPath: e, ...a });
          })(t, { ...e, account: F, chain: e.chain || void 0 });
        }
      }
      var A = a(70030),
        M = a(95990);
      async function C(t, e) {
        let a;
        let { account: n, chainId: r, connector: i, ...o } = e;
        a =
          "object" == typeof n && n?.type === "local"
            ? t.getClient({ chainId: r })
            : await (0, M.r)(t, {
                account: n ?? void 0,
                chainId: r,
                connector: i,
              });
        let c = (0, A.T)(a, k, "sendTransaction");
        return await c({
          ...o,
          ...(n ? { account: n } : {}),
          chain: r ? { id: r } : null,
          gas: o.gas ?? void 0,
        });
      }
      var I = a(53031);
      function R() {
        var t;
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: a } = e,
          r =
            ((t = (0, I.U)(e)),
            { mutationFn: (e) => C(t, e), mutationKey: ["sendTransaction"] }),
          { mutate: i, mutateAsync: o, ...c } = (0, n.n)({ ...a, ...r });
        return { ...c, sendTransaction: i, sendTransactionAsync: o };
      }
    },
    35169: (t, e, a) => {
      a.d(e, { A: () => n });
      let n = (0, a(19946).A)("ArrowLeft", [
        ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
        ["path", { d: "M19 12H5", key: "x3x0zl" }],
      ]);
    },
    39785: (t, e, a) => {
      a.d(e, { A: () => n });
      let n = (0, a(19946).A)("Wallet", [
        [
          "path",
          {
            d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
            key: "18etb6",
          },
        ],
        [
          "path",
          { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" },
        ],
      ]);
    },
    43453: (t, e, a) => {
      a.d(e, { A: () => n });
      let n = (0, a(19946).A)("CircleCheck", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]);
    },
    51154: (t, e, a) => {
      a.d(e, { A: () => n });
      let n = (0, a(19946).A)("LoaderCircle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    54861: (t, e, a) => {
      a.d(e, { A: () => n });
      let n = (0, a(19946).A)("CircleX", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
        ["path", { d: "m9 9 6 6", key: "z0biqf" }],
      ]);
    },
    92138: (t, e, a) => {
      a.d(e, { A: () => n });
      let n = (0, a(19946).A)("ArrowRight", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    93597: (t, e, a) => {
      a.d(e, { g: () => p });
      var n = a(27493),
        r = a(84014),
        i = a(30106),
        o = a(81946),
        c = a(70030);
      async function s(t, e) {
        let { chainId: a, timeout: s = 0, ...d } = e,
          l = t.getClient({ chainId: a }),
          h = (0, c.T)(l, r.n, "waitForTransactionReceipt"),
          u = await h({ ...d, timeout: s });
        if ("reverted" === u.status) {
          let t = (0, c.T)(l, i.x, "getTransaction"),
            e = await t({ hash: u.transactionHash }),
            a = (0, c.T)(l, o.T, "call"),
            r = await a({
              ...e,
              data: e.input,
              gasPrice: "eip1559" !== e.type ? e.gasPrice : void 0,
              maxFeePerGas: "eip1559" === e.type ? e.maxFeePerGas : void 0,
              maxPriorityFeePerGas:
                "eip1559" === e.type ? e.maxPriorityFeePerGas : void 0,
            });
          throw Error(
            r?.data ? (0, n.IQ)(`0x${r.data.substring(138)}`) : "unknown reason"
          );
        }
        return { ...u, chainId: l.chain.id };
      }
      var d = a(62108),
        l = a(43484),
        h = a(18224),
        u = a(53031);
      function p() {
        var t, e;
        let a =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: n, query: r = {} } = a,
          i = (0, u.U)(a),
          o = (0, h.i)({ config: i }),
          c = (function (t, e = {}) {
            return {
              async queryFn({ queryKey: a }) {
                let { hash: n, ...r } = a[1];
                if (!n) throw Error("hash is required");
                return s(t, { ...r, onReplaced: e.onReplaced, hash: n });
              },
              queryKey: (function (t = {}) {
                let { onReplaced: e, ...a } = t;
                return ["waitForTransactionReceipt", (0, d.xO)(a)];
              })(e),
            };
          })(i, {
            ...a,
            chainId: null !== (t = a.chainId) && void 0 !== t ? t : o,
          }),
          p = !!(n && (null === (e = r.enabled) || void 0 === e || e));
        return (0, l.IT)({ ...r, ...c, enabled: p });
      }
    },
    94524: (t, e, a) => {
      a.d(e, { g: () => o });
      var n = a(77136),
        r = a(7441);
      class i extends r.C {
        constructor({ value: t }) {
          super(`Number \`${t}\` is not a valid decimal number.`, {
            name: "InvalidDecimalNumberError",
          });
        }
      }
      function o(t, e = "wei") {
        return (function (t, e) {
          if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(t)) throw new i({ value: t });
          let [a, n = "0"] = t.split("."),
            r = a.startsWith("-");
          if ((r && (a = a.slice(1)), (n = n.replace(/(0+)$/, "")), 0 === e))
            1 === Math.round(Number(`.${n}`)) && (a = `${BigInt(a) + 1n}`),
              (n = "");
          else if (n.length > e) {
            let [t, r, i] = [n.slice(0, e - 1), n.slice(e - 1, e), n.slice(e)],
              o = Math.round(Number(`${r}.${i}`));
            (n =
              o > 9
                ? `${BigInt(t) + BigInt(1)}0`.padStart(t.length + 1, "0")
                : `${t}${o}`).length > e &&
              ((n = n.slice(1)), (a = `${BigInt(a) + 1n}`)),
              (n = n.slice(0, e));
          } else n = n.padEnd(e, "0");
          return BigInt(`${r ? "-" : ""}${a}${n}`);
        })(t, n.eL[e]);
      }
    },
  },
]);
