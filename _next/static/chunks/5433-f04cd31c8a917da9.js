"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5433],
  {
    13052: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("ChevronRight", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]);
    },
    21492: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("ArrowUpDown", [
        ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
        ["path", { d: "M17 20V4", key: "1ejh1v" }],
        ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
        ["path", { d: "M7 4v16", key: "1glfcx" }],
      ]);
    },
    51976: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("Heart", [
        [
          "path",
          {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
            key: "c3ymky",
          },
        ],
      ]);
    },
    55863: (e, t, r) => {
      r.d(t, { C1: () => w, bL: () => k });
      var n = r(12115),
        o = r(46081),
        a = r(63655),
        l = r(95155),
        i = "Progress",
        [s, u] = (0, o.A)(i),
        [c, d] = s(i),
        p = n.forwardRef((e, t) => {
          var r, n, o, i;
          let {
            __scopeProgress: s,
            value: u = null,
            max: d,
            getValueLabel: p = v,
            ...h
          } = e;
          (d || 0 === d) &&
            !m(d) &&
            console.error(
              ((r = "".concat(d)),
              (n = "Progress"),
              "Invalid prop `max` of value `"
                .concat(r, "` supplied to `")
                .concat(
                  n,
                  "`. Only numbers greater than 0 are valid max values. Defaulting to `"
                )
                .concat(100, "`."))
            );
          let f = m(d) ? d : 100;
          null === u ||
            g(u, f) ||
            console.error(
              ((o = "".concat(u)),
              (i = "Progress"),
              "Invalid prop `value` of value `"
                .concat(o, "` supplied to `")
                .concat(
                  i,
                  "`. The `value` prop must be:\n  - a positive number\n  - less than the value passed to `max` (or "
                )
                .concat(
                  100,
                  " if no `max` prop is set)\n  - `null` or `undefined` if the progress is indeterminate.\n\nDefaulting to `null`."
                ))
            );
          let k = g(u, f) ? u : null,
            w = x(k) ? p(k, f) : void 0;
          return (0, l.jsx)(c, {
            scope: s,
            value: k,
            max: f,
            children: (0, l.jsx)(a.sG.div, {
              "aria-valuemax": f,
              "aria-valuemin": 0,
              "aria-valuenow": x(k) ? k : void 0,
              "aria-valuetext": w,
              role: "progressbar",
              "data-state": y(k, f),
              "data-value": null != k ? k : void 0,
              "data-max": f,
              ...h,
              ref: t,
            }),
          });
        });
      p.displayName = i;
      var h = "ProgressIndicator",
        f = n.forwardRef((e, t) => {
          var r;
          let { __scopeProgress: n, ...o } = e,
            i = d(h, n);
          return (0, l.jsx)(a.sG.div, {
            "data-state": y(i.value, i.max),
            "data-value": null !== (r = i.value) && void 0 !== r ? r : void 0,
            "data-max": i.max,
            ...o,
            ref: t,
          });
        });
      function v(e, t) {
        return "".concat(Math.round((e / t) * 100), "%");
      }
      function y(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading";
      }
      function x(e) {
        return "number" == typeof e;
      }
      function m(e) {
        return x(e) && !isNaN(e) && e > 0;
      }
      function g(e, t) {
        return x(e) && !isNaN(e) && e <= t && e >= 0;
      }
      f.displayName = h;
      var k = p,
        w = f;
    },
    58904: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("HeartOff", [
        ["line", { x1: "2", y1: "2", x2: "22", y2: "22", key: "1w4vcy" }],
        [
          "path",
          {
            d: "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",
            key: "3mpagl",
          },
        ],
        [
          "path",
          {
            d: "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",
            key: "1gh3v3",
          },
        ],
      ]);
    },
    60760: (e, t, r) => {
      r.d(t, { N: () => x });
      var n = r(95155),
        o = r(12115),
        a = r(90869),
        l = r(82885),
        i = r(97494),
        s = r(80845),
        u = r(51508);
      class c extends o.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = t.offsetParent,
              r = (e instanceof HTMLElement && e.offsetWidth) || 0,
              n = this.props.sizeRef.current;
            (n.height = t.offsetHeight || 0),
              (n.width = t.offsetWidth || 0),
              (n.top = t.offsetTop),
              (n.left = t.offsetLeft),
              (n.right = r - n.width - n.left);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function d(e) {
        let { children: t, isPresent: r, anchorX: a } = e,
          l = (0, o.useId)(),
          i = (0, o.useRef)(null),
          s = (0, o.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: d } = (0, o.useContext)(u.Q);
        return (
          (0, o.useInsertionEffect)(() => {
            let { width: e, height: t, top: n, left: o, right: u } = s.current;
            if (r || !i.current || !e || !t) return;
            i.current.dataset.motionPopId = l;
            let c = document.createElement("style");
            return (
              d && (c.nonce = d),
              document.head.appendChild(c),
              c.sheet &&
                c.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      l,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            ")
                    .concat(
                      "left" === a ? "left: ".concat(o) : "right: ".concat(u),
                      "px !important;\n            top: "
                    )
                    .concat(n, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(c);
              }
            );
          }, [r]),
          (0, n.jsx)(c, {
            isPresent: r,
            childRef: i,
            sizeRef: s,
            children: o.cloneElement(t, { ref: i }),
          })
        );
      }
      let p = (e) => {
        let {
            children: t,
            initial: r,
            isPresent: a,
            onExitComplete: i,
            custom: u,
            presenceAffectsLayout: c,
            mode: p,
            anchorX: f,
          } = e,
          v = (0, l.M)(h),
          y = (0, o.useId)(),
          x = !0,
          m = (0, o.useMemo)(
            () => (
              (x = !1),
              {
                id: y,
                initial: r,
                isPresent: a,
                custom: u,
                onExitComplete: (e) => {
                  for (let t of (v.set(e, !0), v.values())) if (!t) return;
                  i && i();
                },
                register: (e) => (v.set(e, !1), () => v.delete(e)),
              }
            ),
            [a, v, i]
          );
        return (
          c && x && (m = { ...m }),
          (0, o.useMemo)(() => {
            v.forEach((e, t) => v.set(t, !1));
          }, [a]),
          o.useEffect(() => {
            a || v.size || !i || i();
          }, [a]),
          "popLayout" === p &&
            (t = (0, n.jsx)(d, { isPresent: a, anchorX: f, children: t })),
          (0, n.jsx)(s.t.Provider, { value: m, children: t })
        );
      };
      function h() {
        return new Map();
      }
      var f = r(32082);
      let v = (e) => e.key || "";
      function y(e) {
        let t = [];
        return (
          o.Children.forEach(e, (e) => {
            (0, o.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      let x = (e) => {
        let {
            children: t,
            custom: r,
            initial: s = !0,
            onExitComplete: u,
            presenceAffectsLayout: c = !0,
            mode: d = "sync",
            propagate: h = !1,
            anchorX: x = "left",
          } = e,
          [m, g] = (0, f.xQ)(h),
          k = (0, o.useMemo)(() => y(t), [t]),
          w = h && !m ? [] : k.map(v),
          b = (0, o.useRef)(!0),
          M = (0, o.useRef)(k),
          C = (0, l.M)(() => new Map()),
          [E, T] = (0, o.useState)(k),
          [A, j] = (0, o.useState)(k);
        (0, i.E)(() => {
          (b.current = !1), (M.current = k);
          for (let e = 0; e < A.length; e++) {
            let t = v(A[e]);
            w.includes(t) ? C.delete(t) : !0 !== C.get(t) && C.set(t, !1);
          }
        }, [A, w.length, w.join("-")]);
        let R = [];
        if (k !== E) {
          let e = [...k];
          for (let t = 0; t < A.length; t++) {
            let r = A[t],
              n = v(r);
            w.includes(n) || (e.splice(t, 0, r), R.push(r));
          }
          return "wait" === d && R.length && (e = R), j(y(e)), T(k), null;
        }
        let { forceRender: L } = (0, o.useContext)(a.L);
        return (0, n.jsx)(n.Fragment, {
          children: A.map((e) => {
            let t = v(e),
              o = (!h || !!m) && (k === A || w.includes(t));
            return (0, n.jsx)(
              p,
              {
                isPresent: o,
                initial: (!b.current || !!s) && void 0,
                custom: r,
                presenceAffectsLayout: c,
                mode: d,
                onExitComplete: o
                  ? void 0
                  : () => {
                      if (!C.has(t)) return;
                      C.set(t, !0);
                      let e = !0;
                      C.forEach((t) => {
                        t || (e = !1);
                      }),
                        e &&
                          (null == L || L(),
                          j(M.current),
                          h && (null == g || g()),
                          u && u());
                    },
                anchorX: x,
                children: e,
              },
              t
            );
          }),
        });
      };
    },
    71539: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("Zap", [
        [
          "path",
          {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db",
          },
        ],
      ]);
    },
    73314: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("Cpu", [
        [
          "rect",
          { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" },
        ],
        [
          "rect",
          { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" },
        ],
        ["path", { d: "M15 2v2", key: "13l42r" }],
        ["path", { d: "M15 20v2", key: "15mkzm" }],
        ["path", { d: "M2 15h2", key: "1gxd5l" }],
        ["path", { d: "M2 9h2", key: "1bbxkp" }],
        ["path", { d: "M20 15h2", key: "19e6y8" }],
        ["path", { d: "M20 9h2", key: "19tzq7" }],
        ["path", { d: "M9 2v2", key: "165o2o" }],
        ["path", { d: "M9 20v2", key: "i2bqo8" }],
      ]);
    },
    73558: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("MemoryStick", [
        ["path", { d: "M6 19v-3", key: "1nvgqn" }],
        ["path", { d: "M10 19v-3", key: "iu8nkm" }],
        ["path", { d: "M14 19v-3", key: "kcehxu" }],
        ["path", { d: "M18 19v-3", key: "1vh91z" }],
        ["path", { d: "M8 11V9", key: "63erz4" }],
        ["path", { d: "M16 11V9", key: "fru6f3" }],
        ["path", { d: "M12 11V9", key: "ha00sb" }],
        ["path", { d: "M2 15h20", key: "16ne18" }],
        [
          "path",
          {
            d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",
            key: "lhddv3",
          },
        ],
      ]);
    },
    73980: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("Microscope", [
        ["path", { d: "M6 18h8", key: "1borvv" }],
        ["path", { d: "M3 22h18", key: "8prr45" }],
        ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy" }],
        ["path", { d: "M9 14h2", key: "197e7h" }],
        [
          "path",
          { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", key: "1bmzmy" },
        ],
        [
          "path",
          { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47" },
        ],
      ]);
    },
    89613: (e, t, r) => {
      r.d(t, {
        Kq: () => U,
        UC: () => W,
        ZL: () => G,
        bL: () => F,
        i3: () => Q,
        l9: () => X,
      });
      var n = r(12115),
        o = r(85185),
        a = r(6101),
        l = r(46081),
        i = r(19178),
        s = r(61285),
        u = r(35152),
        c = r(34378),
        d = r(28905),
        p = r(63655),
        h = r(99708),
        f = r(5845),
        v = r(2564),
        y = r(95155),
        [x, m] = (0, l.A)("Tooltip", [u.Bk]),
        g = (0, u.Bk)(),
        k = "TooltipProvider",
        w = "tooltip.open",
        [b, M] = x(k),
        C = (e) => {
          let {
              __scopeTooltip: t,
              delayDuration: r = 700,
              skipDelayDuration: o = 300,
              disableHoverableContent: a = !1,
              children: l,
            } = e,
            i = n.useRef(!0),
            s = n.useRef(!1),
            u = n.useRef(0);
          return (
            n.useEffect(() => {
              let e = u.current;
              return () => window.clearTimeout(e);
            }, []),
            (0, y.jsx)(b, {
              scope: t,
              isOpenDelayedRef: i,
              delayDuration: r,
              onOpen: n.useCallback(() => {
                window.clearTimeout(u.current), (i.current = !1);
              }, []),
              onClose: n.useCallback(() => {
                window.clearTimeout(u.current),
                  (u.current = window.setTimeout(() => (i.current = !0), o));
              }, [o]),
              isPointerInTransitRef: s,
              onPointerInTransitChange: n.useCallback((e) => {
                s.current = e;
              }, []),
              disableHoverableContent: a,
              children: l,
            })
          );
        };
      C.displayName = k;
      var E = "Tooltip",
        [T, A] = x(E),
        j = (e) => {
          let {
              __scopeTooltip: t,
              children: r,
              open: o,
              defaultOpen: a,
              onOpenChange: l,
              disableHoverableContent: i,
              delayDuration: c,
            } = e,
            d = M(E, e.__scopeTooltip),
            p = g(t),
            [h, v] = n.useState(null),
            x = (0, s.B)(),
            m = n.useRef(0),
            k = null != i ? i : d.disableHoverableContent,
            b = null != c ? c : d.delayDuration,
            C = n.useRef(!1),
            [A, j] = (0, f.i)({
              prop: o,
              defaultProp: null != a && a,
              onChange: (e) => {
                e
                  ? (d.onOpen(), document.dispatchEvent(new CustomEvent(w)))
                  : d.onClose(),
                  null == l || l(e);
              },
              caller: E,
            }),
            R = n.useMemo(
              () =>
                A ? (C.current ? "delayed-open" : "instant-open") : "closed",
              [A]
            ),
            L = n.useCallback(() => {
              window.clearTimeout(m.current),
                (m.current = 0),
                (C.current = !1),
                j(!0);
            }, [j]),
            P = n.useCallback(() => {
              window.clearTimeout(m.current), (m.current = 0), j(!1);
            }, [j]),
            N = n.useCallback(() => {
              window.clearTimeout(m.current),
                (m.current = window.setTimeout(() => {
                  (C.current = !0), j(!0), (m.current = 0);
                }, b));
            }, [b, j]);
          return (
            n.useEffect(
              () => () => {
                m.current && (window.clearTimeout(m.current), (m.current = 0));
              },
              []
            ),
            (0, y.jsx)(u.bL, {
              ...p,
              children: (0, y.jsx)(T, {
                scope: t,
                contentId: x,
                open: A,
                stateAttribute: R,
                trigger: h,
                onTriggerChange: v,
                onTriggerEnter: n.useCallback(() => {
                  d.isOpenDelayedRef.current ? N() : L();
                }, [d.isOpenDelayedRef, N, L]),
                onTriggerLeave: n.useCallback(() => {
                  k ? P() : (window.clearTimeout(m.current), (m.current = 0));
                }, [P, k]),
                onOpen: L,
                onClose: P,
                disableHoverableContent: k,
                children: r,
              }),
            })
          );
        };
      j.displayName = E;
      var R = "TooltipTrigger",
        L = n.forwardRef((e, t) => {
          let { __scopeTooltip: r, ...l } = e,
            i = A(R, r),
            s = M(R, r),
            c = g(r),
            d = n.useRef(null),
            h = (0, a.s)(t, d, i.onTriggerChange),
            f = n.useRef(!1),
            v = n.useRef(!1),
            x = n.useCallback(() => (f.current = !1), []);
          return (
            n.useEffect(
              () => () => document.removeEventListener("pointerup", x),
              [x]
            ),
            (0, y.jsx)(u.Mz, {
              asChild: !0,
              ...c,
              children: (0, y.jsx)(p.sG.button, {
                "aria-describedby": i.open ? i.contentId : void 0,
                "data-state": i.stateAttribute,
                ...l,
                ref: h,
                onPointerMove: (0, o.m)(e.onPointerMove, (e) => {
                  "touch" === e.pointerType ||
                    v.current ||
                    s.isPointerInTransitRef.current ||
                    (i.onTriggerEnter(), (v.current = !0));
                }),
                onPointerLeave: (0, o.m)(e.onPointerLeave, () => {
                  i.onTriggerLeave(), (v.current = !1);
                }),
                onPointerDown: (0, o.m)(e.onPointerDown, () => {
                  i.open && i.onClose(),
                    (f.current = !0),
                    document.addEventListener("pointerup", x, { once: !0 });
                }),
                onFocus: (0, o.m)(e.onFocus, () => {
                  f.current || i.onOpen();
                }),
                onBlur: (0, o.m)(e.onBlur, i.onClose),
                onClick: (0, o.m)(e.onClick, i.onClose),
              }),
            })
          );
        });
      L.displayName = R;
      var P = "TooltipPortal",
        [N, D] = x(P, { forceMount: void 0 }),
        I = (e) => {
          let {
              __scopeTooltip: t,
              forceMount: r,
              children: n,
              container: o,
            } = e,
            a = A(P, t);
          return (0, y.jsx)(N, {
            scope: t,
            forceMount: r,
            children: (0, y.jsx)(d.C, {
              present: r || a.open,
              children: (0, y.jsx)(c.Z, {
                asChild: !0,
                container: o,
                children: n,
              }),
            }),
          });
        };
      I.displayName = P;
      var _ = "TooltipContent",
        z = n.forwardRef((e, t) => {
          let r = D(_, e.__scopeTooltip),
            { forceMount: n = r.forceMount, side: o = "top", ...a } = e,
            l = A(_, e.__scopeTooltip);
          return (0, y.jsx)(d.C, {
            present: n || l.open,
            children: l.disableHoverableContent
              ? (0, y.jsx)(V, { side: o, ...a, ref: t })
              : (0, y.jsx)(H, { side: o, ...a, ref: t }),
          });
        }),
        H = n.forwardRef((e, t) => {
          let r = A(_, e.__scopeTooltip),
            o = M(_, e.__scopeTooltip),
            l = n.useRef(null),
            i = (0, a.s)(t, l),
            [s, u] = n.useState(null),
            { trigger: c, onClose: d } = r,
            p = l.current,
            { onPointerInTransitChange: h } = o,
            f = n.useCallback(() => {
              u(null), h(!1);
            }, [h]),
            v = n.useCallback(
              (e, t) => {
                let r = e.currentTarget,
                  n = { x: e.clientX, y: e.clientY },
                  o = (function (e, t) {
                    let r = Math.abs(t.top - e.y),
                      n = Math.abs(t.bottom - e.y),
                      o = Math.abs(t.right - e.x),
                      a = Math.abs(t.left - e.x);
                    switch (Math.min(r, n, o, a)) {
                      case a:
                        return "left";
                      case o:
                        return "right";
                      case r:
                        return "top";
                      case n:
                        return "bottom";
                      default:
                        throw Error("unreachable");
                    }
                  })(n, r.getBoundingClientRect());
                u(
                  (function (e) {
                    let t = e.slice();
                    return (
                      t.sort((e, t) =>
                        e.x < t.x
                          ? -1
                          : e.x > t.x
                          ? 1
                          : e.y < t.y
                          ? -1
                          : +!!(e.y > t.y)
                      ),
                      (function (e) {
                        if (e.length <= 1) return e.slice();
                        let t = [];
                        for (let r = 0; r < e.length; r++) {
                          let n = e[r];
                          for (; t.length >= 2; ) {
                            let e = t[t.length - 1],
                              r = t[t.length - 2];
                            if (
                              (e.x - r.x) * (n.y - r.y) >=
                              (e.y - r.y) * (n.x - r.x)
                            )
                              t.pop();
                            else break;
                          }
                          t.push(n);
                        }
                        t.pop();
                        let r = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                          let n = e[t];
                          for (; r.length >= 2; ) {
                            let e = r[r.length - 1],
                              t = r[r.length - 2];
                            if (
                              (e.x - t.x) * (n.y - t.y) >=
                              (e.y - t.y) * (n.x - t.x)
                            )
                              r.pop();
                            else break;
                          }
                          r.push(n);
                        }
                        return (r.pop(),
                        1 === t.length &&
                          1 === r.length &&
                          t[0].x === r[0].x &&
                          t[0].y === r[0].y)
                          ? t
                          : t.concat(r);
                      })(t)
                    );
                  })([
                    ...(function (e, t) {
                      let r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 5,
                        n = [];
                      switch (t) {
                        case "top":
                          n.push(
                            { x: e.x - r, y: e.y + r },
                            { x: e.x + r, y: e.y + r }
                          );
                          break;
                        case "bottom":
                          n.push(
                            { x: e.x - r, y: e.y - r },
                            { x: e.x + r, y: e.y - r }
                          );
                          break;
                        case "left":
                          n.push(
                            { x: e.x + r, y: e.y - r },
                            { x: e.x + r, y: e.y + r }
                          );
                          break;
                        case "right":
                          n.push(
                            { x: e.x - r, y: e.y - r },
                            { x: e.x - r, y: e.y + r }
                          );
                      }
                      return n;
                    })(n, o),
                    ...(function (e) {
                      let { top: t, right: r, bottom: n, left: o } = e;
                      return [
                        { x: o, y: t },
                        { x: r, y: t },
                        { x: r, y: n },
                        { x: o, y: n },
                      ];
                    })(t.getBoundingClientRect()),
                  ])
                ),
                  h(!0);
              },
              [h]
            );
          return (
            n.useEffect(() => () => f(), [f]),
            n.useEffect(() => {
              if (c && p) {
                let e = (e) => v(e, p),
                  t = (e) => v(e, c);
                return (
                  c.addEventListener("pointerleave", e),
                  p.addEventListener("pointerleave", t),
                  () => {
                    c.removeEventListener("pointerleave", e),
                      p.removeEventListener("pointerleave", t);
                  }
                );
              }
            }, [c, p, v, f]),
            n.useEffect(() => {
              if (s) {
                let e = (e) => {
                  let t = e.target,
                    r = { x: e.clientX, y: e.clientY },
                    n =
                      (null == c ? void 0 : c.contains(t)) ||
                      (null == p ? void 0 : p.contains(t)),
                    o = !(function (e, t) {
                      let { x: r, y: n } = e,
                        o = !1;
                      for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                        let l = t[e],
                          i = t[a],
                          s = l.x,
                          u = l.y,
                          c = i.x,
                          d = i.y;
                        u > n != d > n &&
                          r < ((c - s) * (n - u)) / (d - u) + s &&
                          (o = !o);
                      }
                      return o;
                    })(r, s);
                  n ? f() : o && (f(), d());
                };
                return (
                  document.addEventListener("pointermove", e),
                  () => document.removeEventListener("pointermove", e)
                );
              }
            }, [c, p, s, d, f]),
            (0, y.jsx)(V, { ...e, ref: i })
          );
        }),
        [q, O] = x(E, { isInside: !1 }),
        B = (0, h.Dc)("TooltipContent"),
        V = n.forwardRef((e, t) => {
          let {
              __scopeTooltip: r,
              children: o,
              "aria-label": a,
              onEscapeKeyDown: l,
              onPointerDownOutside: s,
              ...c
            } = e,
            d = A(_, r),
            p = g(r),
            { onClose: h } = d;
          return (
            n.useEffect(
              () => (
                document.addEventListener(w, h),
                () => document.removeEventListener(w, h)
              ),
              [h]
            ),
            n.useEffect(() => {
              if (d.trigger) {
                let e = (e) => {
                  let t = e.target;
                  (null == t ? void 0 : t.contains(d.trigger)) && h();
                };
                return (
                  window.addEventListener("scroll", e, { capture: !0 }),
                  () => window.removeEventListener("scroll", e, { capture: !0 })
                );
              }
            }, [d.trigger, h]),
            (0, y.jsx)(i.qW, {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onEscapeKeyDown: l,
              onPointerDownOutside: s,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: h,
              children: (0, y.jsxs)(u.UC, {
                "data-state": d.stateAttribute,
                ...p,
                ...c,
                ref: t,
                style: {
                  ...c.style,
                  "--radix-tooltip-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-tooltip-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-tooltip-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-tooltip-trigger-width":
                    "var(--radix-popper-anchor-width)",
                  "--radix-tooltip-trigger-height":
                    "var(--radix-popper-anchor-height)",
                },
                children: [
                  (0, y.jsx)(B, { children: o }),
                  (0, y.jsx)(q, {
                    scope: r,
                    isInside: !0,
                    children: (0, y.jsx)(v.bL, {
                      id: d.contentId,
                      role: "tooltip",
                      children: a || o,
                    }),
                  }),
                ],
              }),
            })
          );
        });
      z.displayName = _;
      var S = "TooltipArrow",
        Z = n.forwardRef((e, t) => {
          let { __scopeTooltip: r, ...n } = e,
            o = g(r);
          return O(S, r).isInside
            ? null
            : (0, y.jsx)(u.i3, { ...o, ...n, ref: t });
        });
      Z.displayName = S;
      var U = C,
        F = j,
        X = L,
        G = I,
        W = z,
        Q = Z;
    },
    94498: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("Layers", [
        [
          "path",
          {
            d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
            key: "zw3jo",
          },
        ],
        [
          "path",
          {
            d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
            key: "1wduqc",
          },
        ],
        [
          "path",
          {
            d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
            key: "kqbvx6",
          },
        ],
      ]);
    },
    95880: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("HardDrive", [
        ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
        [
          "path",
          {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
            key: "oot6mr",
          },
        ],
        ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
        ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }],
      ]);
    },
  },
]);
