import {
  a as sn,
  s as Ye,
  t as Z,
  i as J,
  b as Vr,
  d as $t,
  u as Hr,
  c as Nn,
  e as Rn,
  B as Ze,
  D as Vt,
  _ as qr,
  m as jr,
  P as Wr,
  r as On,
} from "./chunks/BWdGfrob.js"
import {
  A as Zr,
  c as Se,
  s as ve,
  C as ke,
  a as Ht,
  u as Gr,
  b as I,
  d as Ge,
  S as Ce,
  e as Yr,
  f as pe,
  g as zn,
  h as fn,
  o as Xr,
  i as Jr,
  j as Un,
  M as xe,
  k as qt,
  m as Xe,
  l as Qr,
  r as Kr,
  F as ei,
  n as ni,
  p as jt,
  q as $n,
} from "./chunks/B9oOvFnE.js"
import {
  T as ti,
  S as Wt,
  t as ln,
  c as ri,
  u as ii,
} from "./chunks/E394K2IS.js"
import { m as li, B as Zt } from "./chunks/g3Rzinml.js"
import { g as oi } from "./chunks/Cpj98o6Y.js"
function ai(e) {
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", e, { once: !0 })
    : e()
}
function ui(e) {
  document.readyState !== "complete"
    ? document.addEventListener("readystatechange", function n() {
        document.readyState === "complete" &&
          (document.removeEventListener("readystatechange", n), e())
      })
    : e()
}
function Vn(e, n) {
  const t = document.createElement(e),
    r = t.attachShadow({ mode: "open" }),
    i = r.appendChild(document.createElement(`${Zr}-main`))
  return (
    n(t, i, (l, o) => {
      t.appendChild(document.createElement("style")).textContent = o
      try {
        r.adoptedStyleSheets = [l]
      } catch {
        r.appendChild(document.createElement("style")).textContent = Array.from(
          l.cssRules
        ).map((s) => s.cssText).join(`
`)
      }
    }),
    t
  )
}
const si = sn("assets/app.css")
async function Hn() {
  const e = new CSSStyleSheet()
  e.replaceSync(await fetch(si).then((r) => r.text()))
  const n = Array.from(e.cssRules).filter((r) => r instanceof CSSFontFaceRule)
  for (const r of n) e.deleteRule(Array.from(e.cssRules).indexOf(r))
  const t = n.map((r) =>
    r.cssText.replace(/url\("([^)]+)"\)/g, (i, l) => i.replace(l, sn(l)))
  ).join(`
`)
  return { css: e, fontCss: t }
}
function ci() {
  const [e, n] = Se(void 0)
  async function t() {
    const r = document.body.innerHTML
    try {
      const i = await ve(ke.Background, "7b3e0286bf1b21b5c2eac4bdb6799c84", r)
      n(i)
    } catch (i) {
      console.error(i)
    }
  }
  return { quiz: e, parseQuiz: t }
}
var hi = Z(
  '<svg viewBox="0 0 256 256"width=1.2em height=1.2em><g fill=currentColor><path d="M196.3 134.65L68.19 214.77A8 8 0 0 1 56 208.12V47.88a8 8 0 0 1 12.19-6.65l128.11 80.12a7.83 7.83 0 0 1 0 13.3"opacity=.2></path><path d="M200 32a8 8 0 0 0-8 8v69.23L72.43 34.45A15.95 15.95 0 0 0 48 47.88v160.24a16 16 0 0 0 24.43 13.43L192 146.77V216a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8M64 207.93V48.05l127.84 80Z">'
)
const pi = (e = {}) =>
  (() => {
    var n = hi()
    return Ye(n, e, !0, !0), n
  })()
var fi = Z(
  '<svg viewBox="0 0 256 256"width=1.2em height=1.2em><path fill=currentColor d="m232.49 80.49l-128 128a12 12 0 0 1-17 0l-56-56a12 12 0 1 1 17-17L96 183L215.51 63.51a12 12 0 0 1 17 17Z">'
)
const Gt = (e = {}) =>
  (() => {
    var n = fi()
    return Ye(n, e, !0, !0), n
  })()
var di = Z(
  '<svg viewBox="0 0 256 256"width=1.2em height=1.2em><path fill=currentColor d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z">'
)
const Yt = (e = {}) =>
  (() => {
    var n = di()
    return Ye(n, e, !0, !0), n
  })()
Ht(ke.ContentScript)
const De = Gr()
var mi = Z(
    '<div class="fixed bottom-8 left-0 right-0 isolate mx-auto w-fit rounded-full border border-border bg-background shadow-md drop-shadow-lg"><div class="relative grid grid-cols-1 grid-rows-1 justify-items-center"><div class="col-[1/1] row-[1/1] flex items-center gap-1.5 px-1.5 py-1.5"><img role=presentation class="pointer-events-none size-10 shrink-0 select-none rounded-full">'
  ),
  gi = Z("<div>")
function qn(e) {
  return (() => {
    var n = gi()
    return (
      J(
        n,
        I(Ce, {
          get when() {
            return !!De.user()
          },
          get children() {
            var t = mi(),
              r = t.firstChild,
              i = r.firstChild,
              l = i.firstChild
            return (
              J(i, () => e.children, null),
              J(r, () => e.modal, null),
              Ge(() => Vr(l, "src", sn("/assets/icon-128.png"))),
              t
            )
          },
        }),
        null
      ),
      J(n, I(ti, {}), null),
      n
    )
  })()
}
const ot = 5,
  at = 5
function yi() {
  const e = Yr(li(chrome.runtime.id), {
      nextUnlock: void 0,
      remaining: ot,
      remainingUnlock: at,
    }),
    n = pe(() => e().remaining),
    t = pe(() => e().remainingUnlock),
    r = pe(() => (e().nextUnlock ? new Date(e().nextUnlock) : void 0)),
    [i, l] = Se(0)
  zn(() => {
    const u = r()
    if (!u) return
    const c = setInterval(() => {
      const p = fn(() => {
        const m = Math.floor((u.getTime() - Date.now()) / 1e3)
        return m <= 0 ? 0 : m
      })
      fn(() => {
        p === 0 &&
          (fn(() => t()) <= 0 &&
            e.set({
              remainingUnlock: at,
              remaining: ot,
              nextUnlock: void 0,
              nextUnlockCache: void 0,
            }),
          clearInterval(c)),
          l(p)
      })
    }, 1e3)
    Xr(() => clearInterval(c))
  }),
    zn(() => {
      !n() && !r() && e.set({ nextUnlock: o(), nextUnlockCache: a() })
    })
  function o() {
    return new Date(Date.now() + 90 * 1e3).getTime()
  }
  function a() {
    const u = new Date()
    return u.setDate(u.getDate() + 1), u.getTime()
  }
  function s() {
    let u = n(),
      c = t()
    u
      ? (u >= 1 && (u -= 1),
        e.set({
          remaining: u,
          nextUnlock: u < 1 ? o() : void 0,
          nextUnlockCache: u < 1 ? a() : void 0,
        }))
      : (c >= 1 && (c -= 1),
        e.set({ remainingUnlock: c, nextUnlock: c < 1 ? a() : o() }))
  }
  return { remaining: n, nextUnlock: r, seconds: i, useSkip: s }
}
var xi = Z("<span>Upgrade Plan"),
  ki = Z(
    '<dialog class="isolate max-h-screen w-full max-w-[400px] gap-4 border bg-background px-6 py-8.5 shadow-lg sm:rounded-lg"><button class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[expanded]:bg-accent data-[expanded]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"><span class=sr-only>Close</span></button><div class="flex flex-col items-center justify-center text-center"><h1 class="mb-1.5 max-w-[256px] text-base font-medium text-foreground"></h1><p class="max-w-[265px] text-sm text-foreground/80">'
  )
function Xt(e) {
  const [n, t] = Se(!1)
  async function r() {
    if (!(n() || !e.userId)) {
      t(!0)
      try {
        const i = await ve(
          ke.Background,
          "b15bb32bf64c69452d5e519a9aa8a183",
          e.userId
        )
        window.open(i, "_blank")
      } catch (i) {
        ln.error((i == null ? void 0 : i.message) ?? i)
      } finally {
        t(!1)
      }
    }
  }
  return (() => {
    var i = ki(),
      l = i.firstChild,
      o = l.firstChild,
      a = l.nextSibling,
      s = a.firstChild,
      u = s.nextSibling,
      c = e.ref
    return (
      typeof c == "function" ? Hr(c, i) : (e.ref = i),
      (l.$$click = bi),
      J(l, I(Yt, { class: "size-4" }), o),
      J(s, () => e.title ?? "Upgrade Required"),
      J(
        u,
        () =>
          e.description ?? "This feature is only available in paid subscription"
      ),
      J(
        a,
        I(Ze, {
          class: "relative mt-5",
          variant: "secondary",
          onClick: r,
          get disabled() {
            return n()
          },
          get children() {
            return [
              I(Ce, {
                get when() {
                  return n()
                },
                get children() {
                  return I(Wt, { class: "absolute m-auto size-3.5" })
                },
              }),
              (() => {
                var p = xi()
                return Ge(() => Nn(p, Rn(n() && "opacity-0"))), p
              })(),
            ]
          },
        }),
        null
      ),
      i
    )
  })()
}
function bi(e) {
  const n = e.target,
    t = n == null ? void 0 : n.closest("dialog")
  t == null || t.close()
}
$t(["click"])
var wi = Z("<span>"),
  Si = Z("<span> (<!>)")
function Ci(e) {
  const [n, t] = Se(0),
    r = yi()
  let i
  const l = () => e.accountStatus === qt.Subscribed
  Jr(() => {
    Array.from(document.querySelectorAll(".tab-content .tab-pane"))
      .map((u) => u.id.replace("tab", ""))
      .every((u) => {
        var c
        return (
          ((c = document.querySelector(`#hfTabCompletionStatus${u}`)) == null
            ? void 0
            : c.value) === "Completed"
        )
      }) && t(2)
  })
  function o() {
    // if (r.seconds() > 0 && !l()) {
    //   e.userId && (i == null || i.showModal())
    //   return
    // }
    const s = n()
    t(1),
      ve(ke.Background, "fbd13e3c027c7b8a96e29b118c23d395")
        .then((u) => {
          t(u.success ? 2 : 3),
            u.success || ln.error(u.error),
            u.success && s !== 2 && !l() && r.useSkip()
        })
        .catch(() => {
          t(3)
        })
  }
  function a(s) {
    const u = Math.floor(s / 3600),
      c = Math.floor((s % 3600) / 60),
      p = s % 60
    return u > 0
      ? `${u}:${c.toString().padStart(2, "0")}:${p.toString().padStart(2, "0")}`
      : `${c}:${p.toString().padStart(2, "0")}`
  }
  return I(Ce, {
    get when() {
      return e.show
    },
    get children() {
      return I(qn, {
        get modal() {
          return I(Xt, {
            ref(s) {
              var u = i
              typeof u == "function" ? u(s) : (i = s)
            },
            get userId() {
              return e.userId
            },
            title: "Daily Free Limit Reached - 5/5",
            get description() {
              return `You have exceeded the free allowed limit, please wait ${a(
                r.seconds()
              )} seconds to skip next lecture.`
            },
          })
        },
        get children() {
          return I(Ze, {
            class:
              "peer flex h-10 shrink-0 items-center rounded-full border border-input bg-background hover:bg-input/40",
            variant: "secondary",
            onClick: o,
            get disabled() {
              return n() === 1
            },
            get children() {
              return [
                I(Un, {
                  get children() {
                    return [
                      I(xe, {
                        get when() {
                          return n() === 0
                        },
                        get children() {
                          return I(pi, { class: "size-7.5 text-primary" })
                        },
                      }),
                      I(xe, {
                        get when() {
                          return n() === 1
                        },
                        get children() {
                          return I(Wt, { class: "size-7.5 text-primary" })
                        },
                      }),
                      I(xe, {
                        get when() {
                          return n() === 2
                        },
                        get children() {
                          return I(Gt, {
                            class: "size-7.5 text-success-foreground",
                          })
                        },
                      }),
                      I(xe, {
                        get when() {
                          return n() === 3
                        },
                        get children() {
                          return I(Yt, {
                            class: "size-7.5 text-error-foreground",
                          })
                        },
                      }),
                    ]
                  },
                }),
                (() => {
                  var s = wi()
                  return (
                    J(s, () => (n() === 1 ? "Skipping" : "Skip Lecture")), s
                  )
                })(),
                I(Ce, {
                  get when() {
                    return pe(() => r.seconds() > 0)() && !l()
                  },
                  get children() {
                    var s = Si(),
                      u = s.firstChild,
                      c = u.nextSibling
                    return c.nextSibling, J(s, () => a(r.seconds()), c), s
                  },
                }),
              ]
            },
          })
        },
      })
    },
  })
}
const Ii = {}
function Ei(e, n) {
  const t = Ii,
    r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : !0,
    i = typeof t.includeHtml == "boolean" ? t.includeHtml : !0
  return Jt(e, r, i)
}
function Jt(e, n, t) {
  if (zi(e)) {
    if ("value" in e) return e.type === "html" && !t ? "" : e.value
    if (n && "alt" in e && e.alt) return e.alt
    if ("children" in e) return ut(e.children, n, t)
  }
  return Array.isArray(e) ? ut(e, n, t) : ""
}
function ut(e, n, t) {
  const r = []
  let i = -1
  for (; ++i < e.length; ) r[i] = Jt(e[i], n, t)
  return r.join("")
}
function zi(e) {
  return !!(e && typeof e == "object")
}
const st = document.createElement("i")
function jn(e) {
  const n = "&" + e + ";"
  st.innerHTML = n
  const t = st.textContent
  return (t.charCodeAt(t.length - 1) === 59 && e !== "semi") || t === n ? !1 : t
}
function fe(e, n, t, r) {
  const i = e.length
  let l = 0,
    o
  if (
    (n < 0 ? (n = -n > i ? 0 : i + n) : (n = n > i ? i : n),
    (t = t > 0 ? t : 0),
    r.length < 1e4)
  )
    (o = Array.from(r)), o.unshift(n, t), e.splice(...o)
  else
    for (t && e.splice(n, t); l < r.length; )
      (o = r.slice(l, l + 1e4)),
        o.unshift(n, 0),
        e.splice(...o),
        (l += 1e4),
        (n += 1e4)
}
function ie(e, n) {
  return e.length > 0 ? (fe(e, e.length, 0, n), e) : n
}
const ct = {}.hasOwnProperty
function vi(e) {
  const n = {}
  let t = -1
  for (; ++t < e.length; ) Pi(n, e[t])
  return n
}
function Pi(e, n) {
  let t
  for (t in n) {
    const i = (ct.call(e, t) ? e[t] : void 0) || (e[t] = {}),
      l = n[t]
    let o
    if (l)
      for (o in l) {
        ct.call(i, o) || (i[o] = [])
        const a = l[o]
        Li(i[o], Array.isArray(a) ? a : a ? [a] : [])
      }
  }
}
function Li(e, n) {
  let t = -1
  const r = []
  for (; ++t < n.length; ) (n[t].add === "after" ? e : r).push(n[t])
  fe(e, 0, 0, r)
}
function Qt(e, n) {
  const t = Number.parseInt(e, n)
  return t < 9 ||
    t === 11 ||
    (t > 13 && t < 32) ||
    (t > 126 && t < 160) ||
    (t > 55295 && t < 57344) ||
    (t > 64975 && t < 65008) ||
    (t & 65535) === 65535 ||
    (t & 65535) === 65534 ||
    t > 1114111
    ? "�"
    : String.fromCodePoint(t)
}
function Me(e) {
  return e
    .replace(/[\t\n\r ]+/g, " ")
    .replace(/^ | $/g, "")
    .toLowerCase()
    .toUpperCase()
}
const he = Ie(/[A-Za-z]/),
  re = Ie(/[\dA-Za-z]/),
  Ai = Ie(/[#-'*+\--9=?A-Z^-~]/)
function vn(e) {
  return e !== null && (e < 32 || e === 127)
}
const Pn = Ie(/\d/),
  Ti = Ie(/[\dA-Fa-f]/),
  Fi = Ie(/[!-/:-@[-`{-~]/)
function P(e) {
  return e !== null && e < -2
}
function K(e) {
  return e !== null && (e < 0 || e === 32)
}
function B(e) {
  return e === -2 || e === -1 || e === 32
}
const _i = Ie(new RegExp("\\p{P}|\\p{S}", "u")),
  Bi = Ie(/\s/)
function Ie(e) {
  return n
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t))
  }
}
function Re(e) {
  const n = []
  let t = -1,
    r = 0,
    i = 0
  for (; ++t < e.length; ) {
    const l = e.charCodeAt(t)
    let o = ""
    if (l === 37 && re(e.charCodeAt(t + 1)) && re(e.charCodeAt(t + 2))) i = 2
    else if (l < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) ||
        (o = String.fromCharCode(l))
    else if (l > 55295 && l < 57344) {
      const a = e.charCodeAt(t + 1)
      l < 56320 && a > 56319 && a < 57344
        ? ((o = String.fromCharCode(l, a)), (i = 1))
        : (o = "�")
    } else o = String.fromCharCode(l)
    o &&
      (n.push(e.slice(r, t), encodeURIComponent(o)), (r = t + i + 1), (o = "")),
      i && ((t += i), (i = 0))
  }
  return n.join("") + e.slice(r)
}
function O(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY
  let l = 0
  return o
  function o(s) {
    return B(s) ? (e.enter(t), a(s)) : n(s)
  }
  function a(s) {
    return B(s) && l++ < i ? (e.consume(s), a) : (e.exit(t), n(s))
  }
}
const Di = { tokenize: Mi }
function Mi(e) {
  const n = e.attempt(this.parser.constructs.contentInitial, r, i)
  let t
  return n
  function r(a) {
    if (a === null) {
      e.consume(a)
      return
    }
    return (
      e.enter("lineEnding"),
      e.consume(a),
      e.exit("lineEnding"),
      O(e, n, "linePrefix")
    )
  }
  function i(a) {
    return e.enter("paragraph"), l(a)
  }
  function l(a) {
    const s = e.enter("chunkText", { contentType: "text", previous: t })
    return t && (t.next = s), (t = s), o(a)
  }
  function o(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a)
      return
    }
    return P(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), o)
  }
}
const Ni = { tokenize: Ri },
  ht = { tokenize: Oi }
function Ri(e) {
  const n = this,
    t = []
  let r = 0,
    i,
    l,
    o
  return a
  function a(E) {
    if (r < t.length) {
      const $ = t[r]
      return (n.containerState = $[1]), e.attempt($[0].continuation, s, u)(E)
    }
    return u(E)
  }
  function s(E) {
    if ((r++, n.containerState._closeFlow)) {
      ;(n.containerState._closeFlow = void 0), i && L()
      const $ = n.events.length
      let H = $,
        x
      for (; H--; )
        if (n.events[H][0] === "exit" && n.events[H][1].type === "chunkFlow") {
          x = n.events[H][1].end
          break
        }
      y(r)
      let D = $
      for (; D < n.events.length; ) (n.events[D][1].end = { ...x }), D++
      return (
        fe(n.events, H + 1, 0, n.events.slice($)), (n.events.length = D), u(E)
      )
    }
    return a(E)
  }
  function u(E) {
    if (r === t.length) {
      if (!i) return m(E)
      if (i.currentConstruct && i.currentConstruct.concrete) return b(E)
      n.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
    }
    return (n.containerState = {}), e.check(ht, c, p)(E)
  }
  function c(E) {
    return i && L(), y(r), m(E)
  }
  function p(E) {
    return (
      (n.parser.lazy[n.now().line] = r !== t.length), (o = n.now().offset), b(E)
    )
  }
  function m(E) {
    return (n.containerState = {}), e.attempt(ht, h, b)(E)
  }
  function h(E) {
    return r++, t.push([n.currentConstruct, n.containerState]), m(E)
  }
  function b(E) {
    if (E === null) {
      i && L(), y(0), e.consume(E)
      return
    }
    return (
      (i = i || n.parser.flow(n.now())),
      e.enter("chunkFlow", { _tokenizer: i, contentType: "flow", previous: l }),
      S(E)
    )
  }
  function S(E) {
    if (E === null) {
      C(e.exit("chunkFlow"), !0), y(0), e.consume(E)
      return
    }
    return P(E)
      ? (e.consume(E),
        C(e.exit("chunkFlow")),
        (r = 0),
        (n.interrupt = void 0),
        a)
      : (e.consume(E), S)
  }
  function C(E, $) {
    const H = n.sliceStream(E)
    if (
      ($ && H.push(null),
      (E.previous = l),
      l && (l.next = E),
      (l = E),
      i.defineSkip(E.start),
      i.write(H),
      n.parser.lazy[E.start.line])
    ) {
      let x = i.events.length
      for (; x--; )
        if (
          i.events[x][1].start.offset < o &&
          (!i.events[x][1].end || i.events[x][1].end.offset > o)
        )
          return
      const D = n.events.length
      let q = D,
        M,
        U
      for (; q--; )
        if (n.events[q][0] === "exit" && n.events[q][1].type === "chunkFlow") {
          if (M) {
            U = n.events[q][1].end
            break
          }
          M = !0
        }
      for (y(r), x = D; x < n.events.length; )
        (n.events[x][1].end = { ...U }), x++
      fe(n.events, q + 1, 0, n.events.slice(D)), (n.events.length = x)
    }
  }
  function y(E) {
    let $ = t.length
    for (; $-- > E; ) {
      const H = t[$]
      ;(n.containerState = H[1]), H[0].exit.call(n, e)
    }
    t.length = E
  }
  function L() {
    i.write([null]),
      (l = void 0),
      (i = void 0),
      (n.containerState._closeFlow = void 0)
  }
}
function Oi(e, n, t) {
  return O(
    e,
    e.attempt(this.parser.constructs.document, n, t),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  )
}
function pt(e) {
  if (e === null || K(e) || Bi(e)) return 1
  if (_i(e)) return 2
}
function Wn(e, n, t) {
  const r = []
  let i = -1
  for (; ++i < e.length; ) {
    const l = e[i].resolveAll
    l && !r.includes(l) && ((n = l(n, t)), r.push(l))
  }
  return n
}
const Ln = { name: "attention", resolveAll: Ui, tokenize: $i }
function Ui(e, n) {
  let t = -1,
    r,
    i,
    l,
    o,
    a,
    s,
    u,
    c
  for (; ++t < e.length; )
    if (
      e[t][0] === "enter" &&
      e[t][1].type === "attentionSequence" &&
      e[t][1]._close
    ) {
      for (r = t; r--; )
        if (
          e[r][0] === "exit" &&
          e[r][1].type === "attentionSequence" &&
          e[r][1]._open &&
          n.sliceSerialize(e[r][1]).charCodeAt(0) ===
            n.sliceSerialize(e[t][1]).charCodeAt(0)
        ) {
          if (
            (e[r][1]._close || e[t][1]._open) &&
            (e[t][1].end.offset - e[t][1].start.offset) % 3 &&
            !(
              (e[r][1].end.offset -
                e[r][1].start.offset +
                e[t][1].end.offset -
                e[t][1].start.offset) %
              3
            )
          )
            continue
          s =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[t][1].end.offset - e[t][1].start.offset > 1
              ? 2
              : 1
          const p = { ...e[r][1].end },
            m = { ...e[t][1].start }
          ft(p, -s),
            ft(m, s),
            (o = {
              type: s > 1 ? "strongSequence" : "emphasisSequence",
              start: p,
              end: { ...e[r][1].end },
            }),
            (a = {
              type: s > 1 ? "strongSequence" : "emphasisSequence",
              start: { ...e[t][1].start },
              end: m,
            }),
            (l = {
              type: s > 1 ? "strongText" : "emphasisText",
              start: { ...e[r][1].end },
              end: { ...e[t][1].start },
            }),
            (i = {
              type: s > 1 ? "strong" : "emphasis",
              start: { ...o.start },
              end: { ...a.end },
            }),
            (e[r][1].end = { ...o.start }),
            (e[t][1].start = { ...a.end }),
            (u = []),
            e[r][1].end.offset - e[r][1].start.offset &&
              (u = ie(u, [
                ["enter", e[r][1], n],
                ["exit", e[r][1], n],
              ])),
            (u = ie(u, [
              ["enter", i, n],
              ["enter", o, n],
              ["exit", o, n],
              ["enter", l, n],
            ])),
            (u = ie(
              u,
              Wn(n.parser.constructs.insideSpan.null, e.slice(r + 1, t), n)
            )),
            (u = ie(u, [
              ["exit", l, n],
              ["enter", a, n],
              ["exit", a, n],
              ["exit", i, n],
            ])),
            e[t][1].end.offset - e[t][1].start.offset
              ? ((c = 2),
                (u = ie(u, [
                  ["enter", e[t][1], n],
                  ["exit", e[t][1], n],
                ])))
              : (c = 0),
            fe(e, r - 1, t - r + 3, u),
            (t = r + u.length - c - 2)
          break
        }
    }
  for (t = -1; ++t < e.length; )
    e[t][1].type === "attentionSequence" && (e[t][1].type = "data")
  return e
}
function $i(e, n) {
  const t = this.parser.constructs.attentionMarkers.null,
    r = this.previous,
    i = pt(r)
  let l
  return o
  function o(s) {
    return (l = s), e.enter("attentionSequence"), a(s)
  }
  function a(s) {
    if (s === l) return e.consume(s), a
    const u = e.exit("attentionSequence"),
      c = pt(s),
      p = !c || (c === 2 && i) || t.includes(s),
      m = !i || (i === 2 && c) || t.includes(r)
    return (
      (u._open = !!(l === 42 ? p : p && (i || !m))),
      (u._close = !!(l === 42 ? m : m && (c || !p))),
      n(s)
    )
  }
}
function ft(e, n) {
  ;(e.column += n), (e.offset += n), (e._bufferIndex += n)
}
const Vi = { name: "autolink", tokenize: Hi }
function Hi(e, n, t) {
  let r = 0
  return i
  function i(h) {
    return (
      e.enter("autolink"),
      e.enter("autolinkMarker"),
      e.consume(h),
      e.exit("autolinkMarker"),
      e.enter("autolinkProtocol"),
      l
    )
  }
  function l(h) {
    return he(h) ? (e.consume(h), o) : h === 64 ? t(h) : u(h)
  }
  function o(h) {
    return h === 43 || h === 45 || h === 46 || re(h) ? ((r = 1), a(h)) : u(h)
  }
  function a(h) {
    return h === 58
      ? (e.consume(h), (r = 0), s)
      : (h === 43 || h === 45 || h === 46 || re(h)) && r++ < 32
      ? (e.consume(h), a)
      : ((r = 0), u(h))
  }
  function s(h) {
    return h === 62
      ? (e.exit("autolinkProtocol"),
        e.enter("autolinkMarker"),
        e.consume(h),
        e.exit("autolinkMarker"),
        e.exit("autolink"),
        n)
      : h === null || h === 32 || h === 60 || vn(h)
      ? t(h)
      : (e.consume(h), s)
  }
  function u(h) {
    return h === 64 ? (e.consume(h), c) : Ai(h) ? (e.consume(h), u) : t(h)
  }
  function c(h) {
    return re(h) ? p(h) : t(h)
  }
  function p(h) {
    return h === 46
      ? (e.consume(h), (r = 0), c)
      : h === 62
      ? ((e.exit("autolinkProtocol").type = "autolinkEmail"),
        e.enter("autolinkMarker"),
        e.consume(h),
        e.exit("autolinkMarker"),
        e.exit("autolink"),
        n)
      : m(h)
  }
  function m(h) {
    if ((h === 45 || re(h)) && r++ < 63) {
      const b = h === 45 ? m : p
      return e.consume(h), b
    }
    return t(h)
  }
}
const cn = { partial: !0, tokenize: qi }
function qi(e, n, t) {
  return r
  function r(l) {
    return B(l) ? O(e, i, "linePrefix")(l) : i(l)
  }
  function i(l) {
    return l === null || P(l) ? n(l) : t(l)
  }
}
const Kt = {
  continuation: { tokenize: Wi },
  exit: Zi,
  name: "blockQuote",
  tokenize: ji,
}
function ji(e, n, t) {
  const r = this
  return i
  function i(o) {
    if (o === 62) {
      const a = r.containerState
      return (
        a.open || (e.enter("blockQuote", { _container: !0 }), (a.open = !0)),
        e.enter("blockQuotePrefix"),
        e.enter("blockQuoteMarker"),
        e.consume(o),
        e.exit("blockQuoteMarker"),
        l
      )
    }
    return t(o)
  }
  function l(o) {
    return B(o)
      ? (e.enter("blockQuotePrefixWhitespace"),
        e.consume(o),
        e.exit("blockQuotePrefixWhitespace"),
        e.exit("blockQuotePrefix"),
        n)
      : (e.exit("blockQuotePrefix"), n(o))
  }
}
function Wi(e, n, t) {
  const r = this
  return i
  function i(o) {
    return B(o)
      ? O(
          e,
          l,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(o)
      : l(o)
  }
  function l(o) {
    return e.attempt(Kt, n, t)(o)
  }
}
function Zi(e) {
  e.exit("blockQuote")
}
const er = { name: "characterEscape", tokenize: Gi }
function Gi(e, n, t) {
  return r
  function r(l) {
    return (
      e.enter("characterEscape"),
      e.enter("escapeMarker"),
      e.consume(l),
      e.exit("escapeMarker"),
      i
    )
  }
  function i(l) {
    return Fi(l)
      ? (e.enter("characterEscapeValue"),
        e.consume(l),
        e.exit("characterEscapeValue"),
        e.exit("characterEscape"),
        n)
      : t(l)
  }
}
const nr = { name: "characterReference", tokenize: Yi }
function Yi(e, n, t) {
  const r = this
  let i = 0,
    l,
    o
  return a
  function a(p) {
    return (
      e.enter("characterReference"),
      e.enter("characterReferenceMarker"),
      e.consume(p),
      e.exit("characterReferenceMarker"),
      s
    )
  }
  function s(p) {
    return p === 35
      ? (e.enter("characterReferenceMarkerNumeric"),
        e.consume(p),
        e.exit("characterReferenceMarkerNumeric"),
        u)
      : (e.enter("characterReferenceValue"), (l = 31), (o = re), c(p))
  }
  function u(p) {
    return p === 88 || p === 120
      ? (e.enter("characterReferenceMarkerHexadecimal"),
        e.consume(p),
        e.exit("characterReferenceMarkerHexadecimal"),
        e.enter("characterReferenceValue"),
        (l = 6),
        (o = Ti),
        c)
      : (e.enter("characterReferenceValue"), (l = 7), (o = Pn), c(p))
  }
  function c(p) {
    if (p === 59 && i) {
      const m = e.exit("characterReferenceValue")
      return o === re && !jn(r.sliceSerialize(m))
        ? t(p)
        : (e.enter("characterReferenceMarker"),
          e.consume(p),
          e.exit("characterReferenceMarker"),
          e.exit("characterReference"),
          n)
    }
    return o(p) && i++ < l ? (e.consume(p), c) : t(p)
  }
}
const dt = { partial: !0, tokenize: Ji },
  mt = { concrete: !0, name: "codeFenced", tokenize: Xi }
function Xi(e, n, t) {
  const r = this,
    i = { partial: !0, tokenize: H }
  let l = 0,
    o = 0,
    a
  return s
  function s(x) {
    return u(x)
  }
  function u(x) {
    const D = r.events[r.events.length - 1]
    return (
      (l =
        D && D[1].type === "linePrefix"
          ? D[2].sliceSerialize(D[1], !0).length
          : 0),
      (a = x),
      e.enter("codeFenced"),
      e.enter("codeFencedFence"),
      e.enter("codeFencedFenceSequence"),
      c(x)
    )
  }
  function c(x) {
    return x === a
      ? (o++, e.consume(x), c)
      : o < 3
      ? t(x)
      : (e.exit("codeFencedFenceSequence"),
        B(x) ? O(e, p, "whitespace")(x) : p(x))
  }
  function p(x) {
    return x === null || P(x)
      ? (e.exit("codeFencedFence"), r.interrupt ? n(x) : e.check(dt, S, $)(x))
      : (e.enter("codeFencedFenceInfo"),
        e.enter("chunkString", { contentType: "string" }),
        m(x))
  }
  function m(x) {
    return x === null || P(x)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), p(x))
      : B(x)
      ? (e.exit("chunkString"),
        e.exit("codeFencedFenceInfo"),
        O(e, h, "whitespace")(x))
      : x === 96 && x === a
      ? t(x)
      : (e.consume(x), m)
  }
  function h(x) {
    return x === null || P(x)
      ? p(x)
      : (e.enter("codeFencedFenceMeta"),
        e.enter("chunkString", { contentType: "string" }),
        b(x))
  }
  function b(x) {
    return x === null || P(x)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), p(x))
      : x === 96 && x === a
      ? t(x)
      : (e.consume(x), b)
  }
  function S(x) {
    return e.attempt(i, $, C)(x)
  }
  function C(x) {
    return e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), y
  }
  function y(x) {
    return l > 0 && B(x) ? O(e, L, "linePrefix", l + 1)(x) : L(x)
  }
  function L(x) {
    return x === null || P(x)
      ? e.check(dt, S, $)(x)
      : (e.enter("codeFlowValue"), E(x))
  }
  function E(x) {
    return x === null || P(x)
      ? (e.exit("codeFlowValue"), L(x))
      : (e.consume(x), E)
  }
  function $(x) {
    return e.exit("codeFenced"), n(x)
  }
  function H(x, D, q) {
    let M = 0
    return U
    function U(_) {
      return x.enter("lineEnding"), x.consume(_), x.exit("lineEnding"), v
    }
    function v(_) {
      return (
        x.enter("codeFencedFence"),
        B(_)
          ? O(
              x,
              z,
              "linePrefix",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            )(_)
          : z(_)
      )
    }
    function z(_) {
      return _ === a ? (x.enter("codeFencedFenceSequence"), V(_)) : q(_)
    }
    function V(_) {
      return _ === a
        ? (M++, x.consume(_), V)
        : M >= o
        ? (x.exit("codeFencedFenceSequence"),
          B(_) ? O(x, j, "whitespace")(_) : j(_))
        : q(_)
    }
    function j(_) {
      return _ === null || P(_) ? (x.exit("codeFencedFence"), D(_)) : q(_)
    }
  }
}
function Ji(e, n, t) {
  const r = this
  return i
  function i(o) {
    return o === null
      ? t(o)
      : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l)
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? t(o) : n(o)
  }
}
const dn = { name: "codeIndented", tokenize: Ki },
  Qi = { partial: !0, tokenize: el }
function Ki(e, n, t) {
  const r = this
  return i
  function i(u) {
    return e.enter("codeIndented"), O(e, l, "linePrefix", 5)(u)
  }
  function l(u) {
    const c = r.events[r.events.length - 1]
    return c &&
      c[1].type === "linePrefix" &&
      c[2].sliceSerialize(c[1], !0).length >= 4
      ? o(u)
      : t(u)
  }
  function o(u) {
    return u === null
      ? s(u)
      : P(u)
      ? e.attempt(Qi, o, s)(u)
      : (e.enter("codeFlowValue"), a(u))
  }
  function a(u) {
    return u === null || P(u)
      ? (e.exit("codeFlowValue"), o(u))
      : (e.consume(u), a)
  }
  function s(u) {
    return e.exit("codeIndented"), n(u)
  }
}
function el(e, n, t) {
  const r = this
  return i
  function i(o) {
    return r.parser.lazy[r.now().line]
      ? t(o)
      : P(o)
      ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i)
      : O(e, l, "linePrefix", 5)(o)
  }
  function l(o) {
    const a = r.events[r.events.length - 1]
    return a &&
      a[1].type === "linePrefix" &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? n(o)
      : P(o)
      ? i(o)
      : t(o)
  }
}
const nl = { name: "codeText", previous: rl, resolve: tl, tokenize: il }
function tl(e) {
  let n = e.length - 4,
    t = 3,
    r,
    i
  if (
    (e[t][1].type === "lineEnding" || e[t][1].type === "space") &&
    (e[n][1].type === "lineEnding" || e[n][1].type === "space")
  ) {
    for (r = t; ++r < n; )
      if (e[r][1].type === "codeTextData") {
        ;(e[t][1].type = "codeTextPadding"),
          (e[n][1].type = "codeTextPadding"),
          (t += 2),
          (n -= 2)
        break
      }
  }
  for (r = t - 1, n++; ++r <= n; )
    i === void 0
      ? r !== n && e[r][1].type !== "lineEnding" && (i = r)
      : (r === n || e[r][1].type === "lineEnding") &&
        ((e[i][1].type = "codeTextData"),
        r !== i + 2 &&
          ((e[i][1].end = e[r - 1][1].end),
          e.splice(i + 2, r - i - 2),
          (n -= r - i - 2),
          (r = i + 2)),
        (i = void 0))
  return e
}
function rl(e) {
  return (
    e !== 96 ||
    this.events[this.events.length - 1][1].type === "characterEscape"
  )
}
function il(e, n, t) {
  let r = 0,
    i,
    l
  return o
  function o(p) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(p)
  }
  function a(p) {
    return p === 96
      ? (e.consume(p), r++, a)
      : (e.exit("codeTextSequence"), s(p))
  }
  function s(p) {
    return p === null
      ? t(p)
      : p === 32
      ? (e.enter("space"), e.consume(p), e.exit("space"), s)
      : p === 96
      ? ((l = e.enter("codeTextSequence")), (i = 0), c(p))
      : P(p)
      ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), s)
      : (e.enter("codeTextData"), u(p))
  }
  function u(p) {
    return p === null || p === 32 || p === 96 || P(p)
      ? (e.exit("codeTextData"), s(p))
      : (e.consume(p), u)
  }
  function c(p) {
    return p === 96
      ? (e.consume(p), i++, c)
      : i === r
      ? (e.exit("codeTextSequence"), e.exit("codeText"), n(p))
      : ((l.type = "codeTextData"), u(p))
  }
}
class ll {
  constructor(n) {
    ;(this.left = n ? [...n] : []), (this.right = [])
  }
  get(n) {
    if (n < 0 || n >= this.left.length + this.right.length)
      throw new RangeError(
        "Cannot access index `" +
          n +
          "` in a splice buffer of size `" +
          (this.left.length + this.right.length) +
          "`"
      )
    return n < this.left.length
      ? this.left[n]
      : this.right[this.right.length - n + this.left.length - 1]
  }
  get length() {
    return this.left.length + this.right.length
  }
  shift() {
    return this.setCursor(0), this.right.pop()
  }
  slice(n, t) {
    const r = t ?? Number.POSITIVE_INFINITY
    return r < this.left.length
      ? this.left.slice(n, r)
      : n > this.left.length
      ? this.right
          .slice(
            this.right.length - r + this.left.length,
            this.right.length - n + this.left.length
          )
          .reverse()
      : this.left
          .slice(n)
          .concat(
            this.right.slice(this.right.length - r + this.left.length).reverse()
          )
  }
  splice(n, t, r) {
    const i = t || 0
    this.setCursor(Math.trunc(n))
    const l = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY)
    return r && He(this.left, r), l.reverse()
  }
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop()
  }
  push(n) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n)
  }
  pushMany(n) {
    this.setCursor(Number.POSITIVE_INFINITY), He(this.left, n)
  }
  unshift(n) {
    this.setCursor(0), this.right.push(n)
  }
  unshiftMany(n) {
    this.setCursor(0), He(this.right, n.reverse())
  }
  setCursor(n) {
    if (
      !(
        n === this.left.length ||
        (n > this.left.length && this.right.length === 0) ||
        (n < 0 && this.left.length === 0)
      )
    )
      if (n < this.left.length) {
        const t = this.left.splice(n, Number.POSITIVE_INFINITY)
        He(this.right, t.reverse())
      } else {
        const t = this.right.splice(
          this.left.length + this.right.length - n,
          Number.POSITIVE_INFINITY
        )
        He(this.left, t.reverse())
      }
  }
}
function He(e, n) {
  let t = 0
  if (n.length < 1e4) e.push(...n)
  else for (; t < n.length; ) e.push(...n.slice(t, t + 1e4)), (t += 1e4)
}
function tr(e) {
  const n = {}
  let t = -1,
    r,
    i,
    l,
    o,
    a,
    s,
    u
  const c = new ll(e)
  for (; ++t < c.length; ) {
    for (; t in n; ) t = n[t]
    if (
      ((r = c.get(t)),
      t &&
        r[1].type === "chunkFlow" &&
        c.get(t - 1)[1].type === "listItemPrefix" &&
        ((s = r[1]._tokenizer.events),
        (l = 0),
        l < s.length && s[l][1].type === "lineEndingBlank" && (l += 2),
        l < s.length && s[l][1].type === "content"))
    )
      for (; ++l < s.length && s[l][1].type !== "content"; )
        s[l][1].type === "chunkText" &&
          ((s[l][1]._isInFirstContentOfListItem = !0), l++)
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(n, ol(c, t)), (t = n[t]), (u = !0))
    else if (r[1]._container) {
      for (
        l = t, i = void 0;
        l-- &&
        ((o = c.get(l)),
        o[1].type === "lineEnding" || o[1].type === "lineEndingBlank");

      )
        o[0] === "enter" &&
          (i && (c.get(i)[1].type = "lineEndingBlank"),
          (o[1].type = "lineEnding"),
          (i = l))
      i &&
        ((r[1].end = { ...c.get(i)[1].start }),
        (a = c.slice(i, t)),
        a.unshift(r),
        c.splice(i, t - i + 1, a))
    }
  }
  return fe(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !u
}
function ol(e, n) {
  const t = e.get(n)[1],
    r = e.get(n)[2]
  let i = n - 1
  const l = [],
    o = t._tokenizer || r.parser[t.contentType](t.start),
    a = o.events,
    s = [],
    u = {}
  let c,
    p,
    m = -1,
    h = t,
    b = 0,
    S = 0
  const C = [S]
  for (; h; ) {
    for (; e.get(++i)[1] !== h; );
    l.push(i),
      h._tokenizer ||
        ((c = r.sliceStream(h)),
        h.next || c.push(null),
        p && o.defineSkip(h.start),
        h._isInFirstContentOfListItem &&
          (o._gfmTasklistFirstContentOfListItem = !0),
        o.write(c),
        h._isInFirstContentOfListItem &&
          (o._gfmTasklistFirstContentOfListItem = void 0)),
      (p = h),
      (h = h.next)
  }
  for (h = t; ++m < a.length; )
    a[m][0] === "exit" &&
      a[m - 1][0] === "enter" &&
      a[m][1].type === a[m - 1][1].type &&
      a[m][1].start.line !== a[m][1].end.line &&
      ((S = m + 1),
      C.push(S),
      (h._tokenizer = void 0),
      (h.previous = void 0),
      (h = h.next))
  for (
    o.events = [],
      h ? ((h._tokenizer = void 0), (h.previous = void 0)) : C.pop(),
      m = C.length;
    m--;

  ) {
    const y = a.slice(C[m], C[m + 1]),
      L = l.pop()
    s.push([L, L + y.length - 1]), e.splice(L, 2, y)
  }
  for (s.reverse(), m = -1; ++m < s.length; )
    (u[b + s[m][0]] = b + s[m][1]), (b += s[m][1] - s[m][0] - 1)
  return u
}
const al = { resolve: sl, tokenize: cl },
  ul = { partial: !0, tokenize: hl }
function sl(e) {
  return tr(e), e
}
function cl(e, n) {
  let t
  return r
  function r(a) {
    return (
      e.enter("content"),
      (t = e.enter("chunkContent", { contentType: "content" })),
      i(a)
    )
  }
  function i(a) {
    return a === null ? l(a) : P(a) ? e.check(ul, o, l)(a) : (e.consume(a), i)
  }
  function l(a) {
    return e.exit("chunkContent"), e.exit("content"), n(a)
  }
  function o(a) {
    return (
      e.consume(a),
      e.exit("chunkContent"),
      (t.next = e.enter("chunkContent", {
        contentType: "content",
        previous: t,
      })),
      (t = t.next),
      i
    )
  }
}
function hl(e, n, t) {
  const r = this
  return i
  function i(o) {
    return (
      e.exit("chunkContent"),
      e.enter("lineEnding"),
      e.consume(o),
      e.exit("lineEnding"),
      O(e, l, "linePrefix")
    )
  }
  function l(o) {
    if (o === null || P(o)) return t(o)
    const a = r.events[r.events.length - 1]
    return !r.parser.constructs.disable.null.includes("codeIndented") &&
      a &&
      a[1].type === "linePrefix" &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? n(o)
      : e.interrupt(r.parser.constructs.flow, t, n)(o)
  }
}
function rr(e, n, t, r, i, l, o, a, s) {
  const u = s || Number.POSITIVE_INFINITY
  let c = 0
  return p
  function p(y) {
    return y === 60
      ? (e.enter(r), e.enter(i), e.enter(l), e.consume(y), e.exit(l), m)
      : y === null || y === 32 || y === 41 || vn(y)
      ? t(y)
      : (e.enter(r),
        e.enter(o),
        e.enter(a),
        e.enter("chunkString", { contentType: "string" }),
        S(y))
  }
  function m(y) {
    return y === 62
      ? (e.enter(l), e.consume(y), e.exit(l), e.exit(i), e.exit(r), n)
      : (e.enter(a), e.enter("chunkString", { contentType: "string" }), h(y))
  }
  function h(y) {
    return y === 62
      ? (e.exit("chunkString"), e.exit(a), m(y))
      : y === null || y === 60 || P(y)
      ? t(y)
      : (e.consume(y), y === 92 ? b : h)
  }
  function b(y) {
    return y === 60 || y === 62 || y === 92 ? (e.consume(y), h) : h(y)
  }
  function S(y) {
    return !c && (y === null || y === 41 || K(y))
      ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), n(y))
      : c < u && y === 40
      ? (e.consume(y), c++, S)
      : y === 41
      ? (e.consume(y), c--, S)
      : y === null || y === 32 || y === 40 || vn(y)
      ? t(y)
      : (e.consume(y), y === 92 ? C : S)
  }
  function C(y) {
    return y === 40 || y === 41 || y === 92 ? (e.consume(y), S) : S(y)
  }
}
function ir(e, n, t, r, i, l) {
  const o = this
  let a = 0,
    s
  return u
  function u(h) {
    return e.enter(r), e.enter(i), e.consume(h), e.exit(i), e.enter(l), c
  }
  function c(h) {
    return a > 999 ||
      h === null ||
      h === 91 ||
      (h === 93 && !s) ||
      (h === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs)
      ? t(h)
      : h === 93
      ? (e.exit(l), e.enter(i), e.consume(h), e.exit(i), e.exit(r), n)
      : P(h)
      ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), c)
      : (e.enter("chunkString", { contentType: "string" }), p(h))
  }
  function p(h) {
    return h === null || h === 91 || h === 93 || P(h) || a++ > 999
      ? (e.exit("chunkString"), c(h))
      : (e.consume(h), s || (s = !B(h)), h === 92 ? m : p)
  }
  function m(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), a++, p) : p(h)
  }
}
function lr(e, n, t, r, i, l) {
  let o
  return a
  function a(m) {
    return m === 34 || m === 39 || m === 40
      ? (e.enter(r),
        e.enter(i),
        e.consume(m),
        e.exit(i),
        (o = m === 40 ? 41 : m),
        s)
      : t(m)
  }
  function s(m) {
    return m === o
      ? (e.enter(i), e.consume(m), e.exit(i), e.exit(r), n)
      : (e.enter(l), u(m))
  }
  function u(m) {
    return m === o
      ? (e.exit(l), s(o))
      : m === null
      ? t(m)
      : P(m)
      ? (e.enter("lineEnding"),
        e.consume(m),
        e.exit("lineEnding"),
        O(e, u, "linePrefix"))
      : (e.enter("chunkString", { contentType: "string" }), c(m))
  }
  function c(m) {
    return m === o || m === null || P(m)
      ? (e.exit("chunkString"), u(m))
      : (e.consume(m), m === 92 ? p : c)
  }
  function p(m) {
    return m === o || m === 92 ? (e.consume(m), c) : c(m)
  }
}
function je(e, n) {
  let t
  return r
  function r(i) {
    return P(i)
      ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), (t = !0), r)
      : B(i)
      ? O(e, r, t ? "linePrefix" : "lineSuffix")(i)
      : n(i)
  }
}
const pl = { name: "definition", tokenize: dl },
  fl = { partial: !0, tokenize: ml }
function dl(e, n, t) {
  const r = this
  let i
  return l
  function l(h) {
    return e.enter("definition"), o(h)
  }
  function o(h) {
    return ir.call(
      r,
      e,
      a,
      t,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(h)
  }
  function a(h) {
    return (
      (i = Me(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
      h === 58
        ? (e.enter("definitionMarker"),
          e.consume(h),
          e.exit("definitionMarker"),
          s)
        : t(h)
    )
  }
  function s(h) {
    return K(h) ? je(e, u)(h) : u(h)
  }
  function u(h) {
    return rr(
      e,
      c,
      t,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(h)
  }
  function c(h) {
    return e.attempt(fl, p, p)(h)
  }
  function p(h) {
    return B(h) ? O(e, m, "whitespace")(h) : m(h)
  }
  function m(h) {
    return h === null || P(h)
      ? (e.exit("definition"), r.parser.defined.push(i), n(h))
      : t(h)
  }
}
function ml(e, n, t) {
  return r
  function r(a) {
    return K(a) ? je(e, i)(a) : t(a)
  }
  function i(a) {
    return lr(
      e,
      l,
      t,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(a)
  }
  function l(a) {
    return B(a) ? O(e, o, "whitespace")(a) : o(a)
  }
  function o(a) {
    return a === null || P(a) ? n(a) : t(a)
  }
}
const gl = { name: "hardBreakEscape", tokenize: yl }
function yl(e, n, t) {
  return r
  function r(l) {
    return e.enter("hardBreakEscape"), e.consume(l), i
  }
  function i(l) {
    return P(l) ? (e.exit("hardBreakEscape"), n(l)) : t(l)
  }
}
const xl = { name: "headingAtx", resolve: kl, tokenize: bl }
function kl(e, n) {
  let t = e.length - 2,
    r = 3,
    i,
    l
  return (
    e[r][1].type === "whitespace" && (r += 2),
    t - 2 > r && e[t][1].type === "whitespace" && (t -= 2),
    e[t][1].type === "atxHeadingSequence" &&
      (r === t - 1 || (t - 4 > r && e[t - 2][1].type === "whitespace")) &&
      (t -= r + 1 === t ? 2 : 4),
    t > r &&
      ((i = { type: "atxHeadingText", start: e[r][1].start, end: e[t][1].end }),
      (l = {
        type: "chunkText",
        start: e[r][1].start,
        end: e[t][1].end,
        contentType: "text",
      }),
      fe(e, r, t - r + 1, [
        ["enter", i, n],
        ["enter", l, n],
        ["exit", l, n],
        ["exit", i, n],
      ])),
    e
  )
}
function bl(e, n, t) {
  let r = 0
  return i
  function i(c) {
    return e.enter("atxHeading"), l(c)
  }
  function l(c) {
    return e.enter("atxHeadingSequence"), o(c)
  }
  function o(c) {
    return c === 35 && r++ < 6
      ? (e.consume(c), o)
      : c === null || K(c)
      ? (e.exit("atxHeadingSequence"), a(c))
      : t(c)
  }
  function a(c) {
    return c === 35
      ? (e.enter("atxHeadingSequence"), s(c))
      : c === null || P(c)
      ? (e.exit("atxHeading"), n(c))
      : B(c)
      ? O(e, a, "whitespace")(c)
      : (e.enter("atxHeadingText"), u(c))
  }
  function s(c) {
    return c === 35 ? (e.consume(c), s) : (e.exit("atxHeadingSequence"), a(c))
  }
  function u(c) {
    return c === null || c === 35 || K(c)
      ? (e.exit("atxHeadingText"), a(c))
      : (e.consume(c), u)
  }
}
const wl = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
  ],
  gt = ["pre", "script", "style", "textarea"],
  Sl = { concrete: !0, name: "htmlFlow", resolveTo: El, tokenize: zl },
  Cl = { partial: !0, tokenize: Pl },
  Il = { partial: !0, tokenize: vl }
function El(e) {
  let n = e.length
  for (; n-- && !(e[n][0] === "enter" && e[n][1].type === "htmlFlow"); );
  return (
    n > 1 &&
      e[n - 2][1].type === "linePrefix" &&
      ((e[n][1].start = e[n - 2][1].start),
      (e[n + 1][1].start = e[n - 2][1].start),
      e.splice(n - 2, 2)),
    e
  )
}
function zl(e, n, t) {
  const r = this
  let i, l, o, a, s
  return u
  function u(d) {
    return c(d)
  }
  function c(d) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(d), p
  }
  function p(d) {
    return d === 33
      ? (e.consume(d), m)
      : d === 47
      ? (e.consume(d), (l = !0), S)
      : d === 63
      ? (e.consume(d), (i = 3), r.interrupt ? n : f)
      : he(d)
      ? (e.consume(d), (o = String.fromCharCode(d)), C)
      : t(d)
  }
  function m(d) {
    return d === 45
      ? (e.consume(d), (i = 2), h)
      : d === 91
      ? (e.consume(d), (i = 5), (a = 0), b)
      : he(d)
      ? (e.consume(d), (i = 4), r.interrupt ? n : f)
      : t(d)
  }
  function h(d) {
    return d === 45 ? (e.consume(d), r.interrupt ? n : f) : t(d)
  }
  function b(d) {
    const ue = "CDATA["
    return d === ue.charCodeAt(a++)
      ? (e.consume(d), a === ue.length ? (r.interrupt ? n : z) : b)
      : t(d)
  }
  function S(d) {
    return he(d) ? (e.consume(d), (o = String.fromCharCode(d)), C) : t(d)
  }
  function C(d) {
    if (d === null || d === 47 || d === 62 || K(d)) {
      const ue = d === 47,
        Ee = o.toLowerCase()
      return !ue && !l && gt.includes(Ee)
        ? ((i = 1), r.interrupt ? n(d) : z(d))
        : wl.includes(o.toLowerCase())
        ? ((i = 6), ue ? (e.consume(d), y) : r.interrupt ? n(d) : z(d))
        : ((i = 7),
          r.interrupt && !r.parser.lazy[r.now().line] ? t(d) : l ? L(d) : E(d))
    }
    return d === 45 || re(d)
      ? (e.consume(d), (o += String.fromCharCode(d)), C)
      : t(d)
  }
  function y(d) {
    return d === 62 ? (e.consume(d), r.interrupt ? n : z) : t(d)
  }
  function L(d) {
    return B(d) ? (e.consume(d), L) : U(d)
  }
  function E(d) {
    return d === 47
      ? (e.consume(d), U)
      : d === 58 || d === 95 || he(d)
      ? (e.consume(d), $)
      : B(d)
      ? (e.consume(d), E)
      : U(d)
  }
  function $(d) {
    return d === 45 || d === 46 || d === 58 || d === 95 || re(d)
      ? (e.consume(d), $)
      : H(d)
  }
  function H(d) {
    return d === 61 ? (e.consume(d), x) : B(d) ? (e.consume(d), H) : E(d)
  }
  function x(d) {
    return d === null || d === 60 || d === 61 || d === 62 || d === 96
      ? t(d)
      : d === 34 || d === 39
      ? (e.consume(d), (s = d), D)
      : B(d)
      ? (e.consume(d), x)
      : q(d)
  }
  function D(d) {
    return d === s
      ? (e.consume(d), (s = null), M)
      : d === null || P(d)
      ? t(d)
      : (e.consume(d), D)
  }
  function q(d) {
    return d === null ||
      d === 34 ||
      d === 39 ||
      d === 47 ||
      d === 60 ||
      d === 61 ||
      d === 62 ||
      d === 96 ||
      K(d)
      ? H(d)
      : (e.consume(d), q)
  }
  function M(d) {
    return d === 47 || d === 62 || B(d) ? E(d) : t(d)
  }
  function U(d) {
    return d === 62 ? (e.consume(d), v) : t(d)
  }
  function v(d) {
    return d === null || P(d) ? z(d) : B(d) ? (e.consume(d), v) : t(d)
  }
  function z(d) {
    return d === 45 && i === 2
      ? (e.consume(d), X)
      : d === 60 && i === 1
      ? (e.consume(d), G)
      : d === 62 && i === 4
      ? (e.consume(d), ae)
      : d === 63 && i === 3
      ? (e.consume(d), f)
      : d === 93 && i === 5
      ? (e.consume(d), de)
      : P(d) && (i === 6 || i === 7)
      ? (e.exit("htmlFlowData"), e.check(Cl, me, V)(d))
      : d === null || P(d)
      ? (e.exit("htmlFlowData"), V(d))
      : (e.consume(d), z)
  }
  function V(d) {
    return e.check(Il, j, me)(d)
  }
  function j(d) {
    return e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), _
  }
  function _(d) {
    return d === null || P(d) ? V(d) : (e.enter("htmlFlowData"), z(d))
  }
  function X(d) {
    return d === 45 ? (e.consume(d), f) : z(d)
  }
  function G(d) {
    return d === 47 ? (e.consume(d), (o = ""), oe) : z(d)
  }
  function oe(d) {
    if (d === 62) {
      const ue = o.toLowerCase()
      return gt.includes(ue) ? (e.consume(d), ae) : z(d)
    }
    return he(d) && o.length < 8
      ? (e.consume(d), (o += String.fromCharCode(d)), oe)
      : z(d)
  }
  function de(d) {
    return d === 93 ? (e.consume(d), f) : z(d)
  }
  function f(d) {
    return d === 62
      ? (e.consume(d), ae)
      : d === 45 && i === 2
      ? (e.consume(d), f)
      : z(d)
  }
  function ae(d) {
    return d === null || P(d)
      ? (e.exit("htmlFlowData"), me(d))
      : (e.consume(d), ae)
  }
  function me(d) {
    return e.exit("htmlFlow"), n(d)
  }
}
function vl(e, n, t) {
  const r = this
  return i
  function i(o) {
    return P(o)
      ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l)
      : t(o)
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? t(o) : n(o)
  }
}
function Pl(e, n, t) {
  return r
  function r(i) {
    return (
      e.enter("lineEnding"),
      e.consume(i),
      e.exit("lineEnding"),
      e.attempt(cn, n, t)
    )
  }
}
const Ll = { name: "htmlText", tokenize: Al }
function Al(e, n, t) {
  const r = this
  let i, l, o
  return a
  function a(f) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(f), s
  }
  function s(f) {
    return f === 33
      ? (e.consume(f), u)
      : f === 47
      ? (e.consume(f), H)
      : f === 63
      ? (e.consume(f), E)
      : he(f)
      ? (e.consume(f), q)
      : t(f)
  }
  function u(f) {
    return f === 45
      ? (e.consume(f), c)
      : f === 91
      ? (e.consume(f), (l = 0), b)
      : he(f)
      ? (e.consume(f), L)
      : t(f)
  }
  function c(f) {
    return f === 45 ? (e.consume(f), h) : t(f)
  }
  function p(f) {
    return f === null
      ? t(f)
      : f === 45
      ? (e.consume(f), m)
      : P(f)
      ? ((o = p), G(f))
      : (e.consume(f), p)
  }
  function m(f) {
    return f === 45 ? (e.consume(f), h) : p(f)
  }
  function h(f) {
    return f === 62 ? X(f) : f === 45 ? m(f) : p(f)
  }
  function b(f) {
    const ae = "CDATA["
    return f === ae.charCodeAt(l++)
      ? (e.consume(f), l === ae.length ? S : b)
      : t(f)
  }
  function S(f) {
    return f === null
      ? t(f)
      : f === 93
      ? (e.consume(f), C)
      : P(f)
      ? ((o = S), G(f))
      : (e.consume(f), S)
  }
  function C(f) {
    return f === 93 ? (e.consume(f), y) : S(f)
  }
  function y(f) {
    return f === 62 ? X(f) : f === 93 ? (e.consume(f), y) : S(f)
  }
  function L(f) {
    return f === null || f === 62
      ? X(f)
      : P(f)
      ? ((o = L), G(f))
      : (e.consume(f), L)
  }
  function E(f) {
    return f === null
      ? t(f)
      : f === 63
      ? (e.consume(f), $)
      : P(f)
      ? ((o = E), G(f))
      : (e.consume(f), E)
  }
  function $(f) {
    return f === 62 ? X(f) : E(f)
  }
  function H(f) {
    return he(f) ? (e.consume(f), x) : t(f)
  }
  function x(f) {
    return f === 45 || re(f) ? (e.consume(f), x) : D(f)
  }
  function D(f) {
    return P(f) ? ((o = D), G(f)) : B(f) ? (e.consume(f), D) : X(f)
  }
  function q(f) {
    return f === 45 || re(f)
      ? (e.consume(f), q)
      : f === 47 || f === 62 || K(f)
      ? M(f)
      : t(f)
  }
  function M(f) {
    return f === 47
      ? (e.consume(f), X)
      : f === 58 || f === 95 || he(f)
      ? (e.consume(f), U)
      : P(f)
      ? ((o = M), G(f))
      : B(f)
      ? (e.consume(f), M)
      : X(f)
  }
  function U(f) {
    return f === 45 || f === 46 || f === 58 || f === 95 || re(f)
      ? (e.consume(f), U)
      : v(f)
  }
  function v(f) {
    return f === 61
      ? (e.consume(f), z)
      : P(f)
      ? ((o = v), G(f))
      : B(f)
      ? (e.consume(f), v)
      : M(f)
  }
  function z(f) {
    return f === null || f === 60 || f === 61 || f === 62 || f === 96
      ? t(f)
      : f === 34 || f === 39
      ? (e.consume(f), (i = f), V)
      : P(f)
      ? ((o = z), G(f))
      : B(f)
      ? (e.consume(f), z)
      : (e.consume(f), j)
  }
  function V(f) {
    return f === i
      ? (e.consume(f), (i = void 0), _)
      : f === null
      ? t(f)
      : P(f)
      ? ((o = V), G(f))
      : (e.consume(f), V)
  }
  function j(f) {
    return f === null ||
      f === 34 ||
      f === 39 ||
      f === 60 ||
      f === 61 ||
      f === 96
      ? t(f)
      : f === 47 || f === 62 || K(f)
      ? M(f)
      : (e.consume(f), j)
  }
  function _(f) {
    return f === 47 || f === 62 || K(f) ? M(f) : t(f)
  }
  function X(f) {
    return f === 62
      ? (e.consume(f), e.exit("htmlTextData"), e.exit("htmlText"), n)
      : t(f)
  }
  function G(f) {
    return (
      e.exit("htmlTextData"),
      e.enter("lineEnding"),
      e.consume(f),
      e.exit("lineEnding"),
      oe
    )
  }
  function oe(f) {
    return B(f)
      ? O(
          e,
          de,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(f)
      : de(f)
  }
  function de(f) {
    return e.enter("htmlTextData"), o(f)
  }
}
const Zn = { name: "labelEnd", resolveAll: Bl, resolveTo: Dl, tokenize: Ml },
  Tl = { tokenize: Nl },
  Fl = { tokenize: Rl },
  _l = { tokenize: Ol }
function Bl(e) {
  let n = -1
  const t = []
  for (; ++n < e.length; ) {
    const r = e[n][1]
    if (
      (t.push(e[n]),
      r.type === "labelImage" ||
        r.type === "labelLink" ||
        r.type === "labelEnd")
    ) {
      const i = r.type === "labelImage" ? 4 : 2
      ;(r.type = "data"), (n += i)
    }
  }
  return e.length !== t.length && fe(e, 0, e.length, t), e
}
function Dl(e, n) {
  let t = e.length,
    r = 0,
    i,
    l,
    o,
    a
  for (; t--; )
    if (((i = e[t][1]), l)) {
      if (i.type === "link" || (i.type === "labelLink" && i._inactive)) break
      e[t][0] === "enter" && i.type === "labelLink" && (i._inactive = !0)
    } else if (o) {
      if (
        e[t][0] === "enter" &&
        (i.type === "labelImage" || i.type === "labelLink") &&
        !i._balanced &&
        ((l = t), i.type !== "labelLink")
      ) {
        r = 2
        break
      }
    } else i.type === "labelEnd" && (o = t)
  const s = {
      type: e[l][1].type === "labelLink" ? "link" : "image",
      start: { ...e[l][1].start },
      end: { ...e[e.length - 1][1].end },
    },
    u = { type: "label", start: { ...e[l][1].start }, end: { ...e[o][1].end } },
    c = {
      type: "labelText",
      start: { ...e[l + r + 2][1].end },
      end: { ...e[o - 2][1].start },
    }
  return (
    (a = [
      ["enter", s, n],
      ["enter", u, n],
    ]),
    (a = ie(a, e.slice(l + 1, l + r + 3))),
    (a = ie(a, [["enter", c, n]])),
    (a = ie(
      a,
      Wn(n.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), n)
    )),
    (a = ie(a, [["exit", c, n], e[o - 2], e[o - 1], ["exit", u, n]])),
    (a = ie(a, e.slice(o + 1))),
    (a = ie(a, [["exit", s, n]])),
    fe(e, l, e.length, a),
    e
  )
}
function Ml(e, n, t) {
  const r = this
  let i = r.events.length,
    l,
    o
  for (; i--; )
    if (
      (r.events[i][1].type === "labelImage" ||
        r.events[i][1].type === "labelLink") &&
      !r.events[i][1]._balanced
    ) {
      l = r.events[i][1]
      break
    }
  return a
  function a(m) {
    return l
      ? l._inactive
        ? p(m)
        : ((o = r.parser.defined.includes(
            Me(r.sliceSerialize({ start: l.end, end: r.now() }))
          )),
          e.enter("labelEnd"),
          e.enter("labelMarker"),
          e.consume(m),
          e.exit("labelMarker"),
          e.exit("labelEnd"),
          s)
      : t(m)
  }
  function s(m) {
    return m === 40
      ? e.attempt(Tl, c, o ? c : p)(m)
      : m === 91
      ? e.attempt(Fl, c, o ? u : p)(m)
      : o
      ? c(m)
      : p(m)
  }
  function u(m) {
    return e.attempt(_l, c, p)(m)
  }
  function c(m) {
    return n(m)
  }
  function p(m) {
    return (l._balanced = !0), t(m)
  }
}
function Nl(e, n, t) {
  return r
  function r(p) {
    return (
      e.enter("resource"),
      e.enter("resourceMarker"),
      e.consume(p),
      e.exit("resourceMarker"),
      i
    )
  }
  function i(p) {
    return K(p) ? je(e, l)(p) : l(p)
  }
  function l(p) {
    return p === 41
      ? c(p)
      : rr(
          e,
          o,
          a,
          "resourceDestination",
          "resourceDestinationLiteral",
          "resourceDestinationLiteralMarker",
          "resourceDestinationRaw",
          "resourceDestinationString",
          32
        )(p)
  }
  function o(p) {
    return K(p) ? je(e, s)(p) : c(p)
  }
  function a(p) {
    return t(p)
  }
  function s(p) {
    return p === 34 || p === 39 || p === 40
      ? lr(
          e,
          u,
          t,
          "resourceTitle",
          "resourceTitleMarker",
          "resourceTitleString"
        )(p)
      : c(p)
  }
  function u(p) {
    return K(p) ? je(e, c)(p) : c(p)
  }
  function c(p) {
    return p === 41
      ? (e.enter("resourceMarker"),
        e.consume(p),
        e.exit("resourceMarker"),
        e.exit("resource"),
        n)
      : t(p)
  }
}
function Rl(e, n, t) {
  const r = this
  return i
  function i(a) {
    return ir.call(
      r,
      e,
      l,
      o,
      "reference",
      "referenceMarker",
      "referenceString"
    )(a)
  }
  function l(a) {
    return r.parser.defined.includes(
      Me(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))
    )
      ? n(a)
      : t(a)
  }
  function o(a) {
    return t(a)
  }
}
function Ol(e, n, t) {
  return r
  function r(l) {
    return (
      e.enter("reference"),
      e.enter("referenceMarker"),
      e.consume(l),
      e.exit("referenceMarker"),
      i
    )
  }
  function i(l) {
    return l === 93
      ? (e.enter("referenceMarker"),
        e.consume(l),
        e.exit("referenceMarker"),
        e.exit("reference"),
        n)
      : t(l)
  }
}
const Ul = { name: "labelStartImage", resolveAll: Zn.resolveAll, tokenize: $l }
function $l(e, n, t) {
  const r = this
  return i
  function i(a) {
    return (
      e.enter("labelImage"),
      e.enter("labelImageMarker"),
      e.consume(a),
      e.exit("labelImageMarker"),
      l
    )
  }
  function l(a) {
    return a === 91
      ? (e.enter("labelMarker"),
        e.consume(a),
        e.exit("labelMarker"),
        e.exit("labelImage"),
        o)
      : t(a)
  }
  function o(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
      ? t(a)
      : n(a)
  }
}
const Vl = { name: "labelStartLink", resolveAll: Zn.resolveAll, tokenize: Hl }
function Hl(e, n, t) {
  const r = this
  return i
  function i(o) {
    return (
      e.enter("labelLink"),
      e.enter("labelMarker"),
      e.consume(o),
      e.exit("labelMarker"),
      e.exit("labelLink"),
      l
    )
  }
  function l(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
      ? t(o)
      : n(o)
  }
}
const mn = { name: "lineEnding", tokenize: ql }
function ql(e, n) {
  return t
  function t(r) {
    return (
      e.enter("lineEnding"),
      e.consume(r),
      e.exit("lineEnding"),
      O(e, n, "linePrefix")
    )
  }
}
const rn = { name: "thematicBreak", tokenize: jl }
function jl(e, n, t) {
  let r = 0,
    i
  return l
  function l(u) {
    return e.enter("thematicBreak"), o(u)
  }
  function o(u) {
    return (i = u), a(u)
  }
  function a(u) {
    return u === i
      ? (e.enter("thematicBreakSequence"), s(u))
      : r >= 3 && (u === null || P(u))
      ? (e.exit("thematicBreak"), n(u))
      : t(u)
  }
  function s(u) {
    return u === i
      ? (e.consume(u), r++, s)
      : (e.exit("thematicBreakSequence"),
        B(u) ? O(e, a, "whitespace")(u) : a(u))
  }
}
const Q = {
    continuation: { tokenize: Yl },
    exit: Jl,
    name: "list",
    tokenize: Gl,
  },
  Wl = { partial: !0, tokenize: Ql },
  Zl = { partial: !0, tokenize: Xl }
function Gl(e, n, t) {
  const r = this,
    i = r.events[r.events.length - 1]
  let l =
      i && i[1].type === "linePrefix"
        ? i[2].sliceSerialize(i[1], !0).length
        : 0,
    o = 0
  return a
  function a(h) {
    const b =
      r.containerState.type ||
      (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered")
    if (
      b === "listUnordered"
        ? !r.containerState.marker || h === r.containerState.marker
        : Pn(h)
    ) {
      if (
        (r.containerState.type ||
          ((r.containerState.type = b), e.enter(b, { _container: !0 })),
        b === "listUnordered")
      )
        return (
          e.enter("listItemPrefix"),
          h === 42 || h === 45 ? e.check(rn, t, u)(h) : u(h)
        )
      if (!r.interrupt || h === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(h)
    }
    return t(h)
  }
  function s(h) {
    return Pn(h) && ++o < 10
      ? (e.consume(h), s)
      : (!r.interrupt || o < 2) &&
        (r.containerState.marker
          ? h === r.containerState.marker
          : h === 41 || h === 46)
      ? (e.exit("listItemValue"), u(h))
      : t(h)
  }
  function u(h) {
    return (
      e.enter("listItemMarker"),
      e.consume(h),
      e.exit("listItemMarker"),
      (r.containerState.marker = r.containerState.marker || h),
      e.check(cn, r.interrupt ? t : c, e.attempt(Wl, m, p))
    )
  }
  function c(h) {
    return (r.containerState.initialBlankLine = !0), l++, m(h)
  }
  function p(h) {
    return B(h)
      ? (e.enter("listItemPrefixWhitespace"),
        e.consume(h),
        e.exit("listItemPrefixWhitespace"),
        m)
      : t(h)
  }
  function m(h) {
    return (
      (r.containerState.size =
        l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
      n(h)
    )
  }
}
function Yl(e, n, t) {
  const r = this
  return (r.containerState._closeFlow = void 0), e.check(cn, i, l)
  function i(a) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines ||
        r.containerState.initialBlankLine),
      O(e, n, "listItemIndent", r.containerState.size + 1)(a)
    )
  }
  function l(a) {
    return r.containerState.furtherBlankLines || !B(a)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        o(a))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(Zl, n, o)(a))
  }
  function o(a) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      O(
        e,
        e.attempt(Q, n, t),
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(a)
    )
  }
}
function Xl(e, n, t) {
  const r = this
  return O(e, i, "listItemIndent", r.containerState.size + 1)
  function i(l) {
    const o = r.events[r.events.length - 1]
    return o &&
      o[1].type === "listItemIndent" &&
      o[2].sliceSerialize(o[1], !0).length === r.containerState.size
      ? n(l)
      : t(l)
  }
}
function Jl(e) {
  e.exit(this.containerState.type)
}
function Ql(e, n, t) {
  const r = this
  return O(
    e,
    i,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5
  )
  function i(l) {
    const o = r.events[r.events.length - 1]
    return !B(l) && o && o[1].type === "listItemPrefixWhitespace" ? n(l) : t(l)
  }
}
const yt = { name: "setextUnderline", resolveTo: Kl, tokenize: eo }
function Kl(e, n) {
  let t = e.length,
    r,
    i,
    l
  for (; t--; )
    if (e[t][0] === "enter") {
      if (e[t][1].type === "content") {
        r = t
        break
      }
      e[t][1].type === "paragraph" && (i = t)
    } else
      e[t][1].type === "content" && e.splice(t, 1),
        !l && e[t][1].type === "definition" && (l = t)
  const o = {
    type: "setextHeading",
    start: { ...e[i][1].start },
    end: { ...e[e.length - 1][1].end },
  }
  return (
    (e[i][1].type = "setextHeadingText"),
    l
      ? (e.splice(i, 0, ["enter", o, n]),
        e.splice(l + 1, 0, ["exit", e[r][1], n]),
        (e[r][1].end = { ...e[l][1].end }))
      : (e[r][1] = o),
    e.push(["exit", o, n]),
    e
  )
}
function eo(e, n, t) {
  const r = this
  let i
  return l
  function l(u) {
    let c = r.events.length,
      p
    for (; c--; )
      if (
        r.events[c][1].type !== "lineEnding" &&
        r.events[c][1].type !== "linePrefix" &&
        r.events[c][1].type !== "content"
      ) {
        p = r.events[c][1].type === "paragraph"
        break
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || p)
      ? (e.enter("setextHeadingLine"), (i = u), o(u))
      : t(u)
  }
  function o(u) {
    return e.enter("setextHeadingLineSequence"), a(u)
  }
  function a(u) {
    return u === i
      ? (e.consume(u), a)
      : (e.exit("setextHeadingLineSequence"),
        B(u) ? O(e, s, "lineSuffix")(u) : s(u))
  }
  function s(u) {
    return u === null || P(u) ? (e.exit("setextHeadingLine"), n(u)) : t(u)
  }
}
const no = { tokenize: to }
function to(e) {
  const n = this,
    t = e.attempt(
      cn,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        i,
        O(
          e,
          e.attempt(this.parser.constructs.flow, i, e.attempt(al, i)),
          "linePrefix"
        )
      )
    )
  return t
  function r(l) {
    if (l === null) {
      e.consume(l)
      return
    }
    return (
      e.enter("lineEndingBlank"),
      e.consume(l),
      e.exit("lineEndingBlank"),
      (n.currentConstruct = void 0),
      t
    )
  }
  function i(l) {
    if (l === null) {
      e.consume(l)
      return
    }
    return (
      e.enter("lineEnding"),
      e.consume(l),
      e.exit("lineEnding"),
      (n.currentConstruct = void 0),
      t
    )
  }
}
const ro = { resolveAll: ar() },
  io = or("string"),
  lo = or("text")
function or(e) {
  return { resolveAll: ar(e === "text" ? oo : void 0), tokenize: n }
  function n(t) {
    const r = this,
      i = this.parser.constructs[e],
      l = t.attempt(i, o, a)
    return o
    function o(c) {
      return u(c) ? l(c) : a(c)
    }
    function a(c) {
      if (c === null) {
        t.consume(c)
        return
      }
      return t.enter("data"), t.consume(c), s
    }
    function s(c) {
      return u(c) ? (t.exit("data"), l(c)) : (t.consume(c), s)
    }
    function u(c) {
      if (c === null) return !0
      const p = i[c]
      let m = -1
      if (p)
        for (; ++m < p.length; ) {
          const h = p[m]
          if (!h.previous || h.previous.call(r, r.previous)) return !0
        }
      return !1
    }
  }
}
function ar(e) {
  return n
  function n(t, r) {
    let i = -1,
      l
    for (; ++i <= t.length; )
      l === void 0
        ? t[i] && t[i][1].type === "data" && ((l = i), i++)
        : (!t[i] || t[i][1].type !== "data") &&
          (i !== l + 2 &&
            ((t[l][1].end = t[i - 1][1].end),
            t.splice(l + 2, i - l - 2),
            (i = l + 2)),
          (l = void 0))
    return e ? e(t, r) : t
  }
}
function oo(e, n) {
  let t = 0
  for (; ++t <= e.length; )
    if (
      (t === e.length || e[t][1].type === "lineEnding") &&
      e[t - 1][1].type === "data"
    ) {
      const r = e[t - 1][1],
        i = n.sliceStream(r)
      let l = i.length,
        o = -1,
        a = 0,
        s
      for (; l--; ) {
        const u = i[l]
        if (typeof u == "string") {
          for (o = u.length; u.charCodeAt(o - 1) === 32; ) a++, o--
          if (o) break
          o = -1
        } else if (u === -2) (s = !0), a++
        else if (u !== -1) {
          l++
          break
        }
      }
      if (a) {
        const u = {
          type:
            t === e.length || s || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: l ? o : r.start._bufferIndex + o,
            _index: r.start._index + l,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a,
          },
          end: { ...r.end },
        }
        ;(r.end = { ...u.start }),
          r.start.offset === r.end.offset
            ? Object.assign(r, u)
            : (e.splice(t, 0, ["enter", u, n], ["exit", u, n]), (t += 2))
      }
      t++
    }
  return e
}
const ao = {
    42: Q,
    43: Q,
    45: Q,
    48: Q,
    49: Q,
    50: Q,
    51: Q,
    52: Q,
    53: Q,
    54: Q,
    55: Q,
    56: Q,
    57: Q,
    62: Kt,
  },
  uo = { 91: pl },
  so = { [-2]: dn, [-1]: dn, 32: dn },
  co = {
    35: xl,
    42: rn,
    45: [yt, rn],
    60: Sl,
    61: yt,
    95: rn,
    96: mt,
    126: mt,
  },
  ho = { 38: nr, 92: er },
  po = {
    [-5]: mn,
    [-4]: mn,
    [-3]: mn,
    33: Ul,
    38: nr,
    42: Ln,
    60: [Vi, Ll],
    91: Vl,
    92: [gl, er],
    93: Zn,
    95: Ln,
    96: nl,
  },
  fo = { null: [Ln, ro] },
  mo = { null: [42, 95] },
  go = { null: [] },
  yo = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: mo,
        contentInitial: uo,
        disable: go,
        document: ao,
        flow: co,
        flowInitial: so,
        insideSpan: fo,
        string: ho,
        text: po,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  )
function xo(e, n, t) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: (t && t.line) || 1,
    column: (t && t.column) || 1,
    offset: (t && t.offset) || 0,
  }
  const i = {},
    l = []
  let o = [],
    a = []
  const s = {
      attempt: D(H),
      check: D(x),
      consume: L,
      enter: E,
      exit: $,
      interrupt: D(x, { interrupt: !0 }),
    },
    u = {
      code: null,
      containerState: {},
      defineSkip: S,
      events: [],
      now: b,
      parser: e,
      previous: null,
      sliceSerialize: m,
      sliceStream: h,
      write: p,
    }
  let c = n.tokenize.call(u, s)
  return n.resolveAll && l.push(n), u
  function p(v) {
    return (
      (o = ie(o, v)),
      C(),
      o[o.length - 1] !== null
        ? []
        : (q(n, 0), (u.events = Wn(l, u.events, u)), u.events)
    )
  }
  function m(v, z) {
    return bo(h(v), z)
  }
  function h(v) {
    return ko(o, v)
  }
  function b() {
    const { _bufferIndex: v, _index: z, line: V, column: j, offset: _ } = r
    return { _bufferIndex: v, _index: z, line: V, column: j, offset: _ }
  }
  function S(v) {
    ;(i[v.line] = v.column), U()
  }
  function C() {
    let v
    for (; r._index < o.length; ) {
      const z = o[r._index]
      if (typeof z == "string")
        for (
          v = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === v && r._bufferIndex < z.length;

        )
          y(z.charCodeAt(r._bufferIndex))
      else y(z)
    }
  }
  function y(v) {
    c = c(v)
  }
  function L(v) {
    P(v)
      ? (r.line++, (r.column = 1), (r.offset += v === -3 ? 2 : 1), U())
      : v !== -1 && (r.column++, r.offset++),
      r._bufferIndex < 0
        ? r._index++
        : (r._bufferIndex++,
          r._bufferIndex === o[r._index].length &&
            ((r._bufferIndex = -1), r._index++)),
      (u.previous = v)
  }
  function E(v, z) {
    const V = z || {}
    return (
      (V.type = v),
      (V.start = b()),
      u.events.push(["enter", V, u]),
      a.push(V),
      V
    )
  }
  function $(v) {
    const z = a.pop()
    return (z.end = b()), u.events.push(["exit", z, u]), z
  }
  function H(v, z) {
    q(v, z.from)
  }
  function x(v, z) {
    z.restore()
  }
  function D(v, z) {
    return V
    function V(j, _, X) {
      let G, oe, de, f
      return Array.isArray(j) ? me(j) : "tokenize" in j ? me([j]) : ae(j)
      function ae(Y) {
        return Ue
        function Ue(be) {
          const Ae = be !== null && Y[be],
            Te = be !== null && Y.null,
            Ke = [
              ...(Array.isArray(Ae) ? Ae : Ae ? [Ae] : []),
              ...(Array.isArray(Te) ? Te : Te ? [Te] : []),
            ]
          return me(Ke)(be)
        }
      }
      function me(Y) {
        return (G = Y), (oe = 0), Y.length === 0 ? X : d(Y[oe])
      }
      function d(Y) {
        return Ue
        function Ue(be) {
          return (
            (f = M()),
            (de = Y),
            Y.partial || (u.currentConstruct = Y),
            Y.name && u.parser.constructs.disable.null.includes(Y.name)
              ? Ee()
              : Y.tokenize.call(
                  z ? Object.assign(Object.create(u), z) : u,
                  s,
                  ue,
                  Ee
                )(be)
          )
        }
      }
      function ue(Y) {
        return v(de, f), _
      }
      function Ee(Y) {
        return f.restore(), ++oe < G.length ? d(G[oe]) : X
      }
    }
  }
  function q(v, z) {
    v.resolveAll && !l.includes(v) && l.push(v),
      v.resolve &&
        fe(u.events, z, u.events.length - z, v.resolve(u.events.slice(z), u)),
      v.resolveTo && (u.events = v.resolveTo(u.events, u))
  }
  function M() {
    const v = b(),
      z = u.previous,
      V = u.currentConstruct,
      j = u.events.length,
      _ = Array.from(a)
    return { from: j, restore: X }
    function X() {
      ;(r = v),
        (u.previous = z),
        (u.currentConstruct = V),
        (u.events.length = j),
        (a = _),
        U()
    }
  }
  function U() {
    r.line in i &&
      r.column < 2 &&
      ((r.column = i[r.line]), (r.offset += i[r.line] - 1))
  }
}
function ko(e, n) {
  const t = n.start._index,
    r = n.start._bufferIndex,
    i = n.end._index,
    l = n.end._bufferIndex
  let o
  if (t === i) o = [e[t].slice(r, l)]
  else {
    if (((o = e.slice(t, i)), r > -1)) {
      const a = o[0]
      typeof a == "string" ? (o[0] = a.slice(r)) : o.shift()
    }
    l > 0 && o.push(e[i].slice(0, l))
  }
  return o
}
function bo(e, n) {
  let t = -1
  const r = []
  let i
  for (; ++t < e.length; ) {
    const l = e[t]
    let o
    if (typeof l == "string") o = l
    else
      switch (l) {
        case -5: {
          o = "\r"
          break
        }
        case -4: {
          o = `
`
          break
        }
        case -3: {
          o = `\r
`
          break
        }
        case -2: {
          o = n ? " " : "	"
          break
        }
        case -1: {
          if (!n && i) continue
          o = " "
          break
        }
        default:
          o = String.fromCharCode(l)
      }
    ;(i = l === -2), r.push(o)
  }
  return r.join("")
}
function wo(e) {
  const r = {
    constructs: vi([yo, ...((e || {}).extensions || [])]),
    content: i(Di),
    defined: [],
    document: i(Ni),
    flow: i(no),
    lazy: {},
    string: i(io),
    text: i(lo),
  }
  return r
  function i(l) {
    return o
    function o(a) {
      return xo(r, l, a)
    }
  }
}
function So(e) {
  for (; !tr(e); );
  return e
}
const xt = /[\0\t\n\r]/g
function Co() {
  let e = 1,
    n = "",
    t = !0,
    r
  return i
  function i(l, o, a) {
    const s = []
    let u, c, p, m, h
    for (
      l =
        n +
        (typeof l == "string"
          ? l.toString()
          : new TextDecoder(o || void 0).decode(l)),
        p = 0,
        n = "",
        t && (l.charCodeAt(0) === 65279 && p++, (t = void 0));
      p < l.length;

    ) {
      if (
        ((xt.lastIndex = p),
        (u = xt.exec(l)),
        (m = u && u.index !== void 0 ? u.index : l.length),
        (h = l.charCodeAt(m)),
        !u)
      ) {
        n = l.slice(p)
        break
      }
      if (h === 10 && p === m && r) s.push(-3), (r = void 0)
      else
        switch (
          (r && (s.push(-5), (r = void 0)),
          p < m && (s.push(l.slice(p, m)), (e += m - p)),
          h)
        ) {
          case 0: {
            s.push(65533), e++
            break
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, s.push(-2); e++ < c; ) s.push(-1)
            break
          }
          case 10: {
            s.push(-4), (e = 1)
            break
          }
          default:
            ;(r = !0), (e = 1)
        }
      p = m + 1
    }
    return a && (r && s.push(-5), n && s.push(n), s.push(null)), s
  }
}
const Io = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi
function Eo(e) {
  return e.replace(Io, zo)
}
function zo(e, n, t) {
  if (n) return n
  if (t.charCodeAt(0) === 35) {
    const i = t.charCodeAt(1),
      l = i === 120 || i === 88
    return Qt(t.slice(l ? 2 : 1), l ? 16 : 10)
  }
  return jn(t) || e
}
function We(e) {
  return !e || typeof e != "object"
    ? ""
    : "position" in e || "type" in e
    ? kt(e.position)
    : "start" in e || "end" in e
    ? kt(e)
    : "line" in e || "column" in e
    ? An(e)
    : ""
}
function An(e) {
  return bt(e && e.line) + ":" + bt(e && e.column)
}
function kt(e) {
  return An(e && e.start) + "-" + An(e && e.end)
}
function bt(e) {
  return e && typeof e == "number" ? e : 1
}
const ur = {}.hasOwnProperty
function vo(e, n, t) {
  return (
    typeof n != "string" && ((t = n), (n = void 0)),
    Po(t)(So(wo(t).document().write(Co()(e, n, !0))))
  )
}
function Po(e) {
  const n = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: l(it),
      autolinkProtocol: M,
      autolinkEmail: M,
      atxHeading: l(nt),
      blockQuote: l(Te),
      characterEscape: M,
      characterReference: M,
      codeFenced: l(Ke),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: l(Ke, o),
      codeText: l(_r, o),
      codeTextData: M,
      data: M,
      codeFlowValue: M,
      definition: l(Br),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: l(Dr),
      hardBreakEscape: l(tt),
      hardBreakTrailing: l(tt),
      htmlFlow: l(rt, o),
      htmlFlowData: M,
      htmlText: l(rt, o),
      htmlTextData: M,
      image: l(Mr),
      label: o,
      link: l(it),
      listItem: l(Nr),
      listItemValue: m,
      listOrdered: l(lt, p),
      listUnordered: l(lt),
      paragraph: l(Rr),
      reference: d,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: l(nt),
      strong: l(Or),
      thematicBreak: l($r),
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: H,
      autolink: s(),
      autolinkEmail: Ae,
      autolinkProtocol: be,
      blockQuote: s(),
      characterEscapeValue: U,
      characterReferenceMarkerHexadecimal: Ee,
      characterReferenceMarkerNumeric: Ee,
      characterReferenceValue: Y,
      characterReference: Ue,
      codeFenced: s(C),
      codeFencedFence: S,
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: b,
      codeFlowValue: U,
      codeIndented: s(y),
      codeText: s(_),
      codeTextData: U,
      data: U,
      definition: s(),
      definitionDestinationString: $,
      definitionLabelString: L,
      definitionTitleString: E,
      emphasis: s(),
      hardBreakEscape: s(z),
      hardBreakTrailing: s(z),
      htmlFlow: s(V),
      htmlFlowData: U,
      htmlText: s(j),
      htmlTextData: U,
      image: s(G),
      label: de,
      labelText: oe,
      lineEnding: v,
      link: s(X),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: ue,
      resourceDestinationString: f,
      resourceTitleString: ae,
      resource: me,
      setextHeading: s(q),
      setextHeadingLineSequence: D,
      setextHeadingText: x,
      strong: s(),
      thematicBreak: s(),
    },
  }
  sr(n, (e || {}).mdastExtensions || [])
  const t = {}
  return r
  function r(g) {
    let w = { type: "root", children: [] }
    const A = {
        stack: [w],
        tokenStack: [],
        config: n,
        enter: a,
        exit: u,
        buffer: o,
        resume: c,
        data: t,
      },
      F = []
    let N = -1
    for (; ++N < g.length; )
      if (g[N][1].type === "listOrdered" || g[N][1].type === "listUnordered")
        if (g[N][0] === "enter") F.push(N)
        else {
          const se = F.pop()
          N = i(g, se, N)
        }
    for (N = -1; ++N < g.length; ) {
      const se = n[g[N][0]]
      ur.call(se, g[N][1].type) &&
        se[g[N][1].type].call(
          Object.assign({ sliceSerialize: g[N][2].sliceSerialize }, A),
          g[N][1]
        )
    }
    if (A.tokenStack.length > 0) {
      const se = A.tokenStack[A.tokenStack.length - 1]
      ;(se[1] || wt).call(A, void 0, se[0])
    }
    for (
      w.position = {
        start: we(
          g.length > 0 ? g[0][1].start : { line: 1, column: 1, offset: 0 }
        ),
        end: we(
          g.length > 0
            ? g[g.length - 2][1].end
            : { line: 1, column: 1, offset: 0 }
        ),
      },
        N = -1;
      ++N < n.transforms.length;

    )
      w = n.transforms[N](w) || w
    return w
  }
  function i(g, w, A) {
    let F = w - 1,
      N = -1,
      se = !1,
      ze,
      ge,
      $e,
      Ve
    for (; ++F <= A; ) {
      const ne = g[F]
      switch (ne[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ne[0] === "enter" ? N++ : N--, (Ve = void 0)
          break
        }
        case "lineEndingBlank": {
          ne[0] === "enter" &&
            (ze && !Ve && !N && !$e && ($e = F), (Ve = void 0))
          break
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break
        default:
          Ve = void 0
      }
      if (
        (!N && ne[0] === "enter" && ne[1].type === "listItemPrefix") ||
        (N === -1 &&
          ne[0] === "exit" &&
          (ne[1].type === "listUnordered" || ne[1].type === "listOrdered"))
      ) {
        if (ze) {
          let Fe = F
          for (ge = void 0; Fe--; ) {
            const ye = g[Fe]
            if (
              ye[1].type === "lineEnding" ||
              ye[1].type === "lineEndingBlank"
            ) {
              if (ye[0] === "exit") continue
              ge && ((g[ge][1].type = "lineEndingBlank"), (se = !0)),
                (ye[1].type = "lineEnding"),
                (ge = Fe)
            } else if (
              !(
                ye[1].type === "linePrefix" ||
                ye[1].type === "blockQuotePrefix" ||
                ye[1].type === "blockQuotePrefixWhitespace" ||
                ye[1].type === "blockQuoteMarker" ||
                ye[1].type === "listItemIndent"
              )
            )
              break
          }
          $e && (!ge || $e < ge) && (ze._spread = !0),
            (ze.end = Object.assign({}, ge ? g[ge][1].start : ne[1].end)),
            g.splice(ge || F, 0, ["exit", ze, ne[2]]),
            F++,
            A++
        }
        if (ne[1].type === "listItemPrefix") {
          const Fe = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, ne[1].start),
            end: void 0,
          }
          ;(ze = Fe),
            g.splice(F, 0, ["enter", Fe, ne[2]]),
            F++,
            A++,
            ($e = void 0),
            (Ve = !0)
        }
      }
    }
    return (g[w][1]._spread = se), A
  }
  function l(g, w) {
    return A
    function A(F) {
      a.call(this, g(F), F), w && w.call(this, F)
    }
  }
  function o() {
    this.stack.push({ type: "fragment", children: [] })
  }
  function a(g, w, A) {
    this.stack[this.stack.length - 1].children.push(g),
      this.stack.push(g),
      this.tokenStack.push([w, A || void 0]),
      (g.position = { start: we(w.start), end: void 0 })
  }
  function s(g) {
    return w
    function w(A) {
      g && g.call(this, A), u.call(this, A)
    }
  }
  function u(g, w) {
    const A = this.stack.pop(),
      F = this.tokenStack.pop()
    if (F)
      F[0].type !== g.type &&
        (w ? w.call(this, g, F[0]) : (F[1] || wt).call(this, g, F[0]))
    else
      throw new Error(
        "Cannot close `" +
          g.type +
          "` (" +
          We({ start: g.start, end: g.end }) +
          "): it’s not open"
      )
    A.position.end = we(g.end)
  }
  function c() {
    return Ei(this.stack.pop())
  }
  function p() {
    this.data.expectingFirstListItemValue = !0
  }
  function m(g) {
    if (this.data.expectingFirstListItemValue) {
      const w = this.stack[this.stack.length - 2]
      ;(w.start = Number.parseInt(this.sliceSerialize(g), 10)),
        (this.data.expectingFirstListItemValue = void 0)
    }
  }
  function h() {
    const g = this.resume(),
      w = this.stack[this.stack.length - 1]
    w.lang = g
  }
  function b() {
    const g = this.resume(),
      w = this.stack[this.stack.length - 1]
    w.meta = g
  }
  function S() {
    this.data.flowCodeInside || (this.buffer(), (this.data.flowCodeInside = !0))
  }
  function C() {
    const g = this.resume(),
      w = this.stack[this.stack.length - 1]
    ;(w.value = g.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")),
      (this.data.flowCodeInside = void 0)
  }
  function y() {
    const g = this.resume(),
      w = this.stack[this.stack.length - 1]
    w.value = g.replace(/(\r?\n|\r)$/g, "")
  }
  function L(g) {
    const w = this.resume(),
      A = this.stack[this.stack.length - 1]
    ;(A.label = w), (A.identifier = Me(this.sliceSerialize(g)).toLowerCase())
  }
  function E() {
    const g = this.resume(),
      w = this.stack[this.stack.length - 1]
    w.title = g
  }
  function $() {
    const g = this.resume(),
      w = this.stack[this.stack.length - 1]
    w.url = g
  }
  function H(g) {
    const w = this.stack[this.stack.length - 1]
    if (!w.depth) {
      const A = this.sliceSerialize(g).length
      w.depth = A
    }
  }
  function x() {
    this.data.setextHeadingSlurpLineEnding = !0
  }
  function D(g) {
    const w = this.stack[this.stack.length - 1]
    w.depth = this.sliceSerialize(g).codePointAt(0) === 61 ? 1 : 2
  }
  function q() {
    this.data.setextHeadingSlurpLineEnding = void 0
  }
  function M(g) {
    const A = this.stack[this.stack.length - 1].children
    let F = A[A.length - 1]
    ;(!F || F.type !== "text") &&
      ((F = Ur()),
      (F.position = { start: we(g.start), end: void 0 }),
      A.push(F)),
      this.stack.push(F)
  }
  function U(g) {
    const w = this.stack.pop()
    ;(w.value += this.sliceSerialize(g)), (w.position.end = we(g.end))
  }
  function v(g) {
    const w = this.stack[this.stack.length - 1]
    if (this.data.atHardBreak) {
      const A = w.children[w.children.length - 1]
      ;(A.position.end = we(g.end)), (this.data.atHardBreak = void 0)
      return
    }
    !this.data.setextHeadingSlurpLineEnding &&
      n.canContainEols.includes(w.type) &&
      (M.call(this, g), U.call(this, g))
  }
  function z() {
    this.data.atHardBreak = !0
  }
  function V() {
    const g = this.resume(),
      w = this.stack[this.stack.length - 1]
    w.value = g
  }
  function j() {
    const g = this.resume(),
      w = this.stack[this.stack.length - 1]
    w.value = g
  }
  function _() {
    const g = this.resume(),
      w = this.stack[this.stack.length - 1]
    w.value = g
  }
  function X() {
    const g = this.stack[this.stack.length - 1]
    if (this.data.inReference) {
      const w = this.data.referenceType || "shortcut"
      ;(g.type += "Reference"),
        (g.referenceType = w),
        delete g.url,
        delete g.title
    } else delete g.identifier, delete g.label
    this.data.referenceType = void 0
  }
  function G() {
    const g = this.stack[this.stack.length - 1]
    if (this.data.inReference) {
      const w = this.data.referenceType || "shortcut"
      ;(g.type += "Reference"),
        (g.referenceType = w),
        delete g.url,
        delete g.title
    } else delete g.identifier, delete g.label
    this.data.referenceType = void 0
  }
  function oe(g) {
    const w = this.sliceSerialize(g),
      A = this.stack[this.stack.length - 2]
    ;(A.label = Eo(w)), (A.identifier = Me(w).toLowerCase())
  }
  function de() {
    const g = this.stack[this.stack.length - 1],
      w = this.resume(),
      A = this.stack[this.stack.length - 1]
    if (((this.data.inReference = !0), A.type === "link")) {
      const F = g.children
      A.children = F
    } else A.alt = w
  }
  function f() {
    const g = this.resume(),
      w = this.stack[this.stack.length - 1]
    w.url = g
  }
  function ae() {
    const g = this.resume(),
      w = this.stack[this.stack.length - 1]
    w.title = g
  }
  function me() {
    this.data.inReference = void 0
  }
  function d() {
    this.data.referenceType = "collapsed"
  }
  function ue(g) {
    const w = this.resume(),
      A = this.stack[this.stack.length - 1]
    ;(A.label = w),
      (A.identifier = Me(this.sliceSerialize(g)).toLowerCase()),
      (this.data.referenceType = "full")
  }
  function Ee(g) {
    this.data.characterReferenceType = g.type
  }
  function Y(g) {
    const w = this.sliceSerialize(g),
      A = this.data.characterReferenceType
    let F
    A
      ? ((F = Qt(w, A === "characterReferenceMarkerNumeric" ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (F = jn(w))
    const N = this.stack[this.stack.length - 1]
    N.value += F
  }
  function Ue(g) {
    const w = this.stack.pop()
    w.position.end = we(g.end)
  }
  function be(g) {
    U.call(this, g)
    const w = this.stack[this.stack.length - 1]
    w.url = this.sliceSerialize(g)
  }
  function Ae(g) {
    U.call(this, g)
    const w = this.stack[this.stack.length - 1]
    w.url = "mailto:" + this.sliceSerialize(g)
  }
  function Te() {
    return { type: "blockquote", children: [] }
  }
  function Ke() {
    return { type: "code", lang: null, meta: null, value: "" }
  }
  function _r() {
    return { type: "inlineCode", value: "" }
  }
  function Br() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: "",
    }
  }
  function Dr() {
    return { type: "emphasis", children: [] }
  }
  function nt() {
    return { type: "heading", depth: 0, children: [] }
  }
  function tt() {
    return { type: "break" }
  }
  function rt() {
    return { type: "html", value: "" }
  }
  function Mr() {
    return { type: "image", title: null, url: "", alt: null }
  }
  function it() {
    return { type: "link", title: null, url: "", children: [] }
  }
  function lt(g) {
    return {
      type: "list",
      ordered: g.type === "listOrdered",
      start: null,
      spread: g._spread,
      children: [],
    }
  }
  function Nr(g) {
    return { type: "listItem", spread: g._spread, checked: null, children: [] }
  }
  function Rr() {
    return { type: "paragraph", children: [] }
  }
  function Or() {
    return { type: "strong", children: [] }
  }
  function Ur() {
    return { type: "text", value: "" }
  }
  function $r() {
    return { type: "thematicBreak" }
  }
}
function we(e) {
  return { line: e.line, column: e.column, offset: e.offset }
}
function sr(e, n) {
  let t = -1
  for (; ++t < n.length; ) {
    const r = n[t]
    Array.isArray(r) ? sr(e, r) : Lo(e, r)
  }
}
function Lo(e, n) {
  let t
  for (t in n)
    if (ur.call(n, t))
      switch (t) {
        case "canContainEols": {
          const r = n[t]
          r && e[t].push(...r)
          break
        }
        case "transforms": {
          const r = n[t]
          r && e[t].push(...r)
          break
        }
        case "enter":
        case "exit": {
          const r = n[t]
          r && Object.assign(e[t], r)
          break
        }
      }
}
function wt(e, n) {
  throw e
    ? new Error(
        "Cannot close `" +
          e.type +
          "` (" +
          We({ start: e.start, end: e.end }) +
          "): a different token (`" +
          n.type +
          "`, " +
          We({ start: n.start, end: n.end }) +
          ") is open"
      )
    : new Error(
        "Cannot close document, a token (`" +
          n.type +
          "`, " +
          We({ start: n.start, end: n.end }) +
          ") is still open"
      )
}
function Ao(e) {
  const n = this
  n.parser = t
  function t(r) {
    return vo(r, {
      ...n.data("settings"),
      ...e,
      extensions: n.data("micromarkExtensions") || [],
      mdastExtensions: n.data("fromMarkdownExtensions") || [],
    })
  }
}
function To(e, n) {
  const t = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(n), !0),
  }
  return e.patch(n, t), e.applyData(n, t)
}
function Fo(e, n) {
  const t = { type: "element", tagName: "br", properties: {}, children: [] }
  return (
    e.patch(n, t),
    [
      e.applyData(n, t),
      {
        type: "text",
        value: `
`,
      },
    ]
  )
}
function _o(e, n) {
  const t = n.value
      ? n.value +
        `
`
      : "",
    r = {}
  n.lang && (r.className = ["language-" + n.lang])
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: t }],
  }
  return (
    n.meta && (i.data = { meta: n.meta }),
    e.patch(n, i),
    (i = e.applyData(n, i)),
    (i = { type: "element", tagName: "pre", properties: {}, children: [i] }),
    e.patch(n, i),
    i
  )
}
function Bo(e, n) {
  const t = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(n),
  }
  return e.patch(n, t), e.applyData(n, t)
}
function Do(e, n) {
  const t = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(n),
  }
  return e.patch(n, t), e.applyData(n, t)
}
function Mo(e, n) {
  const t =
      typeof e.options.clobberPrefix == "string"
        ? e.options.clobberPrefix
        : "user-content-",
    r = String(n.identifier).toUpperCase(),
    i = Re(r.toLowerCase()),
    l = e.footnoteOrder.indexOf(r)
  let o,
    a = e.footnoteCounts.get(r)
  a === void 0
    ? ((a = 0), e.footnoteOrder.push(r), (o = e.footnoteOrder.length))
    : (o = l + 1),
    (a += 1),
    e.footnoteCounts.set(r, a)
  const s = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + t + "fn-" + i,
      id: t + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"],
    },
    children: [{ type: "text", value: String(o) }],
  }
  e.patch(n, s)
  const u = { type: "element", tagName: "sup", properties: {}, children: [s] }
  return e.patch(n, u), e.applyData(n, u)
}
function No(e, n) {
  const t = {
    type: "element",
    tagName: "h" + n.depth,
    properties: {},
    children: e.all(n),
  }
  return e.patch(n, t), e.applyData(n, t)
}
function Ro(e, n) {
  if (e.options.allowDangerousHtml) {
    const t = { type: "raw", value: n.value }
    return e.patch(n, t), e.applyData(n, t)
  }
}
function cr(e, n) {
  const t = n.referenceType
  let r = "]"
  if (
    (t === "collapsed"
      ? (r += "[]")
      : t === "full" && (r += "[" + (n.label || n.identifier) + "]"),
    n.type === "imageReference")
  )
    return [{ type: "text", value: "![" + n.alt + r }]
  const i = e.all(n),
    l = i[0]
  l && l.type === "text"
    ? (l.value = "[" + l.value)
    : i.unshift({ type: "text", value: "[" })
  const o = i[i.length - 1]
  return (
    o && o.type === "text"
      ? (o.value += r)
      : i.push({ type: "text", value: r }),
    i
  )
}
function Oo(e, n) {
  const t = String(n.identifier).toUpperCase(),
    r = e.definitionById.get(t)
  if (!r) return cr(e, n)
  const i = { src: Re(r.url || ""), alt: n.alt }
  r.title !== null && r.title !== void 0 && (i.title = r.title)
  const l = { type: "element", tagName: "img", properties: i, children: [] }
  return e.patch(n, l), e.applyData(n, l)
}
function Uo(e, n) {
  const t = { src: Re(n.url) }
  n.alt !== null && n.alt !== void 0 && (t.alt = n.alt),
    n.title !== null && n.title !== void 0 && (t.title = n.title)
  const r = { type: "element", tagName: "img", properties: t, children: [] }
  return e.patch(n, r), e.applyData(n, r)
}
function $o(e, n) {
  const t = { type: "text", value: n.value.replace(/\r?\n|\r/g, " ") }
  e.patch(n, t)
  const r = { type: "element", tagName: "code", properties: {}, children: [t] }
  return e.patch(n, r), e.applyData(n, r)
}
function Vo(e, n) {
  const t = String(n.identifier).toUpperCase(),
    r = e.definitionById.get(t)
  if (!r) return cr(e, n)
  const i = { href: Re(r.url || "") }
  r.title !== null && r.title !== void 0 && (i.title = r.title)
  const l = { type: "element", tagName: "a", properties: i, children: e.all(n) }
  return e.patch(n, l), e.applyData(n, l)
}
function Ho(e, n) {
  const t = { href: Re(n.url) }
  n.title !== null && n.title !== void 0 && (t.title = n.title)
  const r = { type: "element", tagName: "a", properties: t, children: e.all(n) }
  return e.patch(n, r), e.applyData(n, r)
}
function qo(e, n, t) {
  const r = e.all(n),
    i = t ? jo(t) : hr(n),
    l = {},
    o = []
  if (typeof n.checked == "boolean") {
    const c = r[0]
    let p
    c && c.type === "element" && c.tagName === "p"
      ? (p = c)
      : ((p = { type: "element", tagName: "p", properties: {}, children: [] }),
        r.unshift(p)),
      p.children.length > 0 && p.children.unshift({ type: "text", value: " " }),
      p.children.unshift({
        type: "element",
        tagName: "input",
        properties: { type: "checkbox", checked: n.checked, disabled: !0 },
        children: [],
      }),
      (l.className = ["task-list-item"])
  }
  let a = -1
  for (; ++a < r.length; ) {
    const c = r[a]
    ;(i || a !== 0 || c.type !== "element" || c.tagName !== "p") &&
      o.push({
        type: "text",
        value: `
`,
      }),
      c.type === "element" && c.tagName === "p" && !i
        ? o.push(...c.children)
        : o.push(c)
  }
  const s = r[r.length - 1]
  s &&
    (i || s.type !== "element" || s.tagName !== "p") &&
    o.push({
      type: "text",
      value: `
`,
    })
  const u = { type: "element", tagName: "li", properties: l, children: o }
  return e.patch(n, u), e.applyData(n, u)
}
function jo(e) {
  let n = !1
  if (e.type === "list") {
    n = e.spread || !1
    const t = e.children
    let r = -1
    for (; !n && ++r < t.length; ) n = hr(t[r])
  }
  return n
}
function hr(e) {
  const n = e.spread
  return n ?? e.children.length > 1
}
function Wo(e, n) {
  const t = {},
    r = e.all(n)
  let i = -1
  for (
    typeof n.start == "number" && n.start !== 1 && (t.start = n.start);
    ++i < r.length;

  ) {
    const o = r[i]
    if (
      o.type === "element" &&
      o.tagName === "li" &&
      o.properties &&
      Array.isArray(o.properties.className) &&
      o.properties.className.includes("task-list-item")
    ) {
      t.className = ["contains-task-list"]
      break
    }
  }
  const l = {
    type: "element",
    tagName: n.ordered ? "ol" : "ul",
    properties: t,
    children: e.wrap(r, !0),
  }
  return e.patch(n, l), e.applyData(n, l)
}
function Zo(e, n) {
  const t = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(n),
  }
  return e.patch(n, t), e.applyData(n, t)
}
function Go(e, n) {
  const t = { type: "root", children: e.wrap(e.all(n)) }
  return e.patch(n, t), e.applyData(n, t)
}
function Yo(e, n) {
  const t = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(n),
  }
  return e.patch(n, t), e.applyData(n, t)
}
const pr = dr("end"),
  fr = dr("start")
function dr(e) {
  return n
  function n(t) {
    const r = (t && t.position && t.position[e]) || {}
    if (
      typeof r.line == "number" &&
      r.line > 0 &&
      typeof r.column == "number" &&
      r.column > 0
    )
      return {
        line: r.line,
        column: r.column,
        offset:
          typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0,
      }
  }
}
function Xo(e) {
  const n = fr(e),
    t = pr(e)
  if (n && t) return { start: n, end: t }
}
function Jo(e, n) {
  const t = e.all(n),
    r = t.shift(),
    i = []
  if (r) {
    const o = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0),
    }
    e.patch(n.children[0], o), i.push(o)
  }
  if (t.length > 0) {
    const o = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: e.wrap(t, !0),
      },
      a = fr(n.children[1]),
      s = pr(n.children[n.children.length - 1])
    a && s && (o.position = { start: a, end: s }), i.push(o)
  }
  const l = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0),
  }
  return e.patch(n, l), e.applyData(n, l)
}
function Qo(e, n, t) {
  const r = t ? t.children : void 0,
    l = (r ? r.indexOf(n) : 1) === 0 ? "th" : "td",
    o = t && t.type === "table" ? t.align : void 0,
    a = o ? o.length : n.children.length
  let s = -1
  const u = []
  for (; ++s < a; ) {
    const p = n.children[s],
      m = {},
      h = o ? o[s] : void 0
    h && (m.align = h)
    let b = { type: "element", tagName: l, properties: m, children: [] }
    p && ((b.children = e.all(p)), e.patch(p, b), (b = e.applyData(p, b))),
      u.push(b)
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0),
  }
  return e.patch(n, c), e.applyData(n, c)
}
function Ko(e, n) {
  const t = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(n),
  }
  return e.patch(n, t), e.applyData(n, t)
}
const St = 9,
  Ct = 32
function ea(e) {
  const n = String(e),
    t = /\r?\n|\r/g
  let r = t.exec(n),
    i = 0
  const l = []
  for (; r; )
    l.push(It(n.slice(i, r.index), i > 0, !0), r[0]),
      (i = r.index + r[0].length),
      (r = t.exec(n))
  return l.push(It(n.slice(i), i > 0, !1)), l.join("")
}
function It(e, n, t) {
  let r = 0,
    i = e.length
  if (n) {
    let l = e.codePointAt(r)
    for (; l === St || l === Ct; ) r++, (l = e.codePointAt(r))
  }
  if (t) {
    let l = e.codePointAt(i - 1)
    for (; l === St || l === Ct; ) i--, (l = e.codePointAt(i - 1))
  }
  return i > r ? e.slice(r, i) : ""
}
function na(e, n) {
  const t = { type: "text", value: ea(String(n.value)) }
  return e.patch(n, t), e.applyData(n, t)
}
function ta(e, n) {
  const t = { type: "element", tagName: "hr", properties: {}, children: [] }
  return e.patch(n, t), e.applyData(n, t)
}
const ra = {
  blockquote: To,
  break: Fo,
  code: _o,
  delete: Bo,
  emphasis: Do,
  footnoteReference: Mo,
  heading: No,
  html: Ro,
  imageReference: Oo,
  image: Uo,
  inlineCode: $o,
  linkReference: Vo,
  link: Ho,
  listItem: qo,
  list: Wo,
  paragraph: Zo,
  root: Go,
  strong: Yo,
  table: Jo,
  tableCell: Ko,
  tableRow: Qo,
  text: na,
  thematicBreak: ta,
  toml: en,
  yaml: en,
  definition: en,
  footnoteDefinition: en,
}
function en() {}
const mr = -1,
  hn = 0,
  on = 1,
  an = 2,
  Gn = 3,
  Yn = 4,
  Xn = 5,
  Jn = 6,
  gr = 7,
  yr = 8,
  Et = typeof self == "object" ? self : globalThis,
  ia = (e, n) => {
    const t = (i, l) => (e.set(l, i), i),
      r = (i) => {
        if (e.has(i)) return e.get(i)
        const [l, o] = n[i]
        switch (l) {
          case hn:
          case mr:
            return t(o, i)
          case on: {
            const a = t([], i)
            for (const s of o) a.push(r(s))
            return a
          }
          case an: {
            const a = t({}, i)
            for (const [s, u] of o) a[r(s)] = r(u)
            return a
          }
          case Gn:
            return t(new Date(o), i)
          case Yn: {
            const { source: a, flags: s } = o
            return t(new RegExp(a, s), i)
          }
          case Xn: {
            const a = t(new Map(), i)
            for (const [s, u] of o) a.set(r(s), r(u))
            return a
          }
          case Jn: {
            const a = t(new Set(), i)
            for (const s of o) a.add(r(s))
            return a
          }
          case gr: {
            const { name: a, message: s } = o
            return t(new Et[a](s), i)
          }
          case yr:
            return t(BigInt(o), i)
          case "BigInt":
            return t(Object(BigInt(o)), i)
        }
        return t(new Et[l](o), i)
      }
    return r
  },
  zt = (e) => ia(new Map(), e)(0),
  _e = "",
  { toString: la } = {},
  { keys: oa } = Object,
  qe = (e) => {
    const n = typeof e
    if (n !== "object" || !e) return [hn, n]
    const t = la.call(e).slice(8, -1)
    switch (t) {
      case "Array":
        return [on, _e]
      case "Object":
        return [an, _e]
      case "Date":
        return [Gn, _e]
      case "RegExp":
        return [Yn, _e]
      case "Map":
        return [Xn, _e]
      case "Set":
        return [Jn, _e]
    }
    return t.includes("Array")
      ? [on, t]
      : t.includes("Error")
      ? [gr, t]
      : [an, t]
  },
  nn = ([e, n]) => e === hn && (n === "function" || n === "symbol"),
  aa = (e, n, t, r) => {
    const i = (o, a) => {
        const s = r.push(o) - 1
        return t.set(a, s), s
      },
      l = (o) => {
        if (t.has(o)) return t.get(o)
        let [a, s] = qe(o)
        switch (a) {
          case hn: {
            let c = o
            switch (s) {
              case "bigint":
                ;(a = yr), (c = o.toString())
                break
              case "function":
              case "symbol":
                if (e) throw new TypeError("unable to serialize " + s)
                c = null
                break
              case "undefined":
                return i([mr], o)
            }
            return i([a, c], o)
          }
          case on: {
            if (s) return i([s, [...o]], o)
            const c = [],
              p = i([a, c], o)
            for (const m of o) c.push(l(m))
            return p
          }
          case an: {
            if (s)
              switch (s) {
                case "BigInt":
                  return i([s, o.toString()], o)
                case "Boolean":
                case "Number":
                case "String":
                  return i([s, o.valueOf()], o)
              }
            if (n && "toJSON" in o) return l(o.toJSON())
            const c = [],
              p = i([a, c], o)
            for (const m of oa(o))
              (e || !nn(qe(o[m]))) && c.push([l(m), l(o[m])])
            return p
          }
          case Gn:
            return i([a, o.toISOString()], o)
          case Yn: {
            const { source: c, flags: p } = o
            return i([a, { source: c, flags: p }], o)
          }
          case Xn: {
            const c = [],
              p = i([a, c], o)
            for (const [m, h] of o)
              (e || !(nn(qe(m)) || nn(qe(h)))) && c.push([l(m), l(h)])
            return p
          }
          case Jn: {
            const c = [],
              p = i([a, c], o)
            for (const m of o) (e || !nn(qe(m))) && c.push(l(m))
            return p
          }
        }
        const { message: u } = o
        return i([a, { name: s, message: u }], o)
      }
    return l
  },
  vt = (e, { json: n, lossy: t } = {}) => {
    const r = []
    return aa(!(n || t), !!n, new Map(), r)(e), r
  },
  un =
    typeof structuredClone == "function"
      ? (e, n) =>
          n && ("json" in n || "lossy" in n) ? zt(vt(e, n)) : structuredClone(e)
      : (e, n) => zt(vt(e, n))
function ua(e, n) {
  const t = [{ type: "text", value: "↩" }]
  return (
    n > 1 &&
      t.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{ type: "text", value: String(n) }],
      }),
    t
  )
}
function sa(e, n) {
  return "Back to reference " + (e + 1) + (n > 1 ? "-" + n : "")
}
function ca(e) {
  const n =
      typeof e.options.clobberPrefix == "string"
        ? e.options.clobberPrefix
        : "user-content-",
    t = e.options.footnoteBackContent || ua,
    r = e.options.footnoteBackLabel || sa,
    i = e.options.footnoteLabel || "Footnotes",
    l = e.options.footnoteLabelTagName || "h2",
    o = e.options.footnoteLabelProperties || { className: ["sr-only"] },
    a = []
  let s = -1
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(e.footnoteOrder[s])
    if (!u) continue
    const c = e.all(u),
      p = String(u.identifier).toUpperCase(),
      m = Re(p.toLowerCase())
    let h = 0
    const b = [],
      S = e.footnoteCounts.get(p)
    for (; S !== void 0 && ++h <= S; ) {
      b.length > 0 && b.push({ type: "text", value: " " })
      let L = typeof t == "string" ? t : t(s, h)
      typeof L == "string" && (L = { type: "text", value: L }),
        b.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + n + "fnref-" + m + (h > 1 ? "-" + h : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof r == "string" ? r : r(s, h),
            className: ["data-footnote-backref"],
          },
          children: Array.isArray(L) ? L : [L],
        })
    }
    const C = c[c.length - 1]
    if (C && C.type === "element" && C.tagName === "p") {
      const L = C.children[C.children.length - 1]
      L && L.type === "text"
        ? (L.value += " ")
        : C.children.push({ type: "text", value: " " }),
        C.children.push(...b)
    } else c.push(...b)
    const y = {
      type: "element",
      tagName: "li",
      properties: { id: n + "fn-" + m },
      children: e.wrap(c, !0),
    }
    e.patch(u, y), a.push(y)
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: l,
          properties: { ...un(o), id: "footnote-label" },
          children: [{ type: "text", value: i }],
        },
        {
          type: "text",
          value: `
`,
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, !0),
        },
        {
          type: "text",
          value: `
`,
        },
      ],
    }
}
const xr = function (e) {
  if (e == null) return da
  if (typeof e == "function") return pn(e)
  if (typeof e == "object") return Array.isArray(e) ? ha(e) : pa(e)
  if (typeof e == "string") return fa(e)
  throw new Error("Expected function, string, or object as test")
}
function ha(e) {
  const n = []
  let t = -1
  for (; ++t < e.length; ) n[t] = xr(e[t])
  return pn(r)
  function r(...i) {
    let l = -1
    for (; ++l < n.length; ) if (n[l].apply(this, i)) return !0
    return !1
  }
}
function pa(e) {
  const n = e
  return pn(t)
  function t(r) {
    const i = r
    let l
    for (l in e) if (i[l] !== n[l]) return !1
    return !0
  }
}
function fa(e) {
  return pn(n)
  function n(t) {
    return t && t.type === e
  }
}
function pn(e) {
  return n
  function n(t, r, i) {
    return !!(
      ma(t) && e.call(this, t, typeof r == "number" ? r : void 0, i || void 0)
    )
  }
}
function da() {
  return !0
}
function ma(e) {
  return e !== null && typeof e == "object" && "type" in e
}
const kr = [],
  ga = !0,
  Pt = !1,
  ya = "skip"
function xa(e, n, t, r) {
  let i
  typeof n == "function" && typeof t != "function"
    ? ((r = t), (t = n))
    : (i = n)
  const l = xr(i),
    o = r ? -1 : 1
  a(e, void 0, [])()
  function a(s, u, c) {
    const p = s && typeof s == "object" ? s : {}
    if (typeof p.type == "string") {
      const h =
        typeof p.tagName == "string"
          ? p.tagName
          : typeof p.name == "string"
          ? p.name
          : void 0
      Object.defineProperty(m, "name", {
        value: "node (" + (s.type + (h ? "<" + h + ">" : "")) + ")",
      })
    }
    return m
    function m() {
      let h = kr,
        b,
        S,
        C
      if (
        (!n || l(s, u, c[c.length - 1] || void 0)) &&
        ((h = ka(t(s, c))), h[0] === Pt)
      )
        return h
      if ("children" in s && s.children) {
        const y = s
        if (y.children && h[0] !== ya)
          for (
            S = (r ? y.children.length : -1) + o, C = c.concat(y);
            S > -1 && S < y.children.length;

          ) {
            const L = y.children[S]
            if (((b = a(L, S, C)()), b[0] === Pt)) return b
            S = typeof b[1] == "number" ? b[1] : S + o
          }
      }
      return h
    }
  }
}
function ka(e) {
  return Array.isArray(e)
    ? e
    : typeof e == "number"
    ? [ga, e]
    : e == null
    ? kr
    : [e]
}
function ba(e, n, t, r) {
  let i, l, o
  typeof n == "function" && typeof t != "function"
    ? ((l = void 0), (o = n), (i = t))
    : ((l = n), (o = t), (i = r)),
    xa(e, l, a, i)
  function a(s, u) {
    const c = u[u.length - 1],
      p = c ? c.children.indexOf(s) : void 0
    return o(s, p, c)
  }
}
const Tn = {}.hasOwnProperty,
  wa = {}
function Sa(e, n) {
  const t = n || wa,
    r = new Map(),
    i = new Map(),
    l = new Map(),
    o = { ...ra, ...t.handlers },
    a = {
      all: u,
      applyData: Ia,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: l,
      footnoteOrder: [],
      handlers: o,
      one: s,
      options: t,
      patch: Ca,
      wrap: za,
    }
  return (
    ba(e, function (c) {
      if (c.type === "definition" || c.type === "footnoteDefinition") {
        const p = c.type === "definition" ? r : i,
          m = String(c.identifier).toUpperCase()
        p.has(m) || p.set(m, c)
      }
    }),
    a
  )
  function s(c, p) {
    const m = c.type,
      h = a.handlers[m]
    if (Tn.call(a.handlers, m) && h) return h(a, c, p)
    if (a.options.passThrough && a.options.passThrough.includes(m)) {
      if ("children" in c) {
        const { children: S, ...C } = c,
          y = un(C)
        return (y.children = a.all(c)), y
      }
      return un(c)
    }
    return (a.options.unknownHandler || Ea)(a, c, p)
  }
  function u(c) {
    const p = []
    if ("children" in c) {
      const m = c.children
      let h = -1
      for (; ++h < m.length; ) {
        const b = a.one(m[h], c)
        if (b) {
          if (
            h &&
            m[h - 1].type === "break" &&
            (!Array.isArray(b) && b.type === "text" && (b.value = Lt(b.value)),
            !Array.isArray(b) && b.type === "element")
          ) {
            const S = b.children[0]
            S && S.type === "text" && (S.value = Lt(S.value))
          }
          Array.isArray(b) ? p.push(...b) : p.push(b)
        }
      }
    }
    return p
  }
}
function Ca(e, n) {
  e.position && (n.position = Xo(e))
}
function Ia(e, n) {
  let t = n
  if (e && e.data) {
    const r = e.data.hName,
      i = e.data.hChildren,
      l = e.data.hProperties
    if (typeof r == "string")
      if (t.type === "element") t.tagName = r
      else {
        const o = "children" in t ? t.children : [t]
        t = { type: "element", tagName: r, properties: {}, children: o }
      }
    t.type === "element" && l && Object.assign(t.properties, un(l)),
      "children" in t &&
        t.children &&
        i !== null &&
        i !== void 0 &&
        (t.children = i)
  }
  return t
}
function Ea(e, n) {
  const t = n.data || {},
    r =
      "value" in n && !(Tn.call(t, "hProperties") || Tn.call(t, "hChildren"))
        ? { type: "text", value: n.value }
        : {
            type: "element",
            tagName: "div",
            properties: {},
            children: e.all(n),
          }
  return e.patch(n, r), e.applyData(n, r)
}
function za(e, n) {
  const t = []
  let r = -1
  for (
    n &&
    t.push({
      type: "text",
      value: `
`,
    });
    ++r < e.length;

  )
    r &&
      t.push({
        type: "text",
        value: `
`,
      }),
      t.push(e[r])
  return (
    n &&
      e.length > 0 &&
      t.push({
        type: "text",
        value: `
`,
      }),
    t
  )
}
function Lt(e) {
  let n = 0,
    t = e.charCodeAt(n)
  for (; t === 9 || t === 32; ) n++, (t = e.charCodeAt(n))
  return e.slice(n)
}
function At(e, n) {
  const t = Sa(e, n),
    r = t.one(e, void 0),
    i = ca(t),
    l = Array.isArray(r)
      ? { type: "root", children: r }
      : r || { type: "root", children: [] }
  return (
    i &&
      l.children.push(
        {
          type: "text",
          value: `
`,
        },
        i
      ),
    l
  )
}
function va(e, n) {
  return e && "run" in e
    ? async function (t, r) {
        const i = At(t, { file: r, ...n })
        await e.run(i, r)
      }
    : function (t, r) {
        return At(t, { file: r, ...(e || n) })
      }
}
class Je {
  constructor(n, t, r) {
    ;(this.property = n), (this.normal = t), r && (this.space = r)
  }
}
Je.prototype.property = {}
Je.prototype.normal = {}
Je.prototype.space = null
function br(e, n) {
  const t = {},
    r = {}
  let i = -1
  for (; ++i < e.length; )
    Object.assign(t, e[i].property), Object.assign(r, e[i].normal)
  return new Je(t, r, n)
}
function Fn(e) {
  return e.toLowerCase()
}
class le {
  constructor(n, t) {
    ;(this.property = n), (this.attribute = t)
  }
}
le.prototype.space = null
le.prototype.boolean = !1
le.prototype.booleanish = !1
le.prototype.overloadedBoolean = !1
le.prototype.number = !1
le.prototype.commaSeparated = !1
le.prototype.spaceSeparated = !1
le.prototype.commaOrSpaceSeparated = !1
le.prototype.mustUseProperty = !1
le.prototype.defined = !1
let Pa = 0
const T = Le(),
  W = Le(),
  wr = Le(),
  k = Le(),
  R = Le(),
  Ne = Le(),
  te = Le()
function Le() {
  return 2 ** ++Pa
}
const _n = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: T,
        booleanish: W,
        commaOrSpaceSeparated: te,
        commaSeparated: Ne,
        number: k,
        overloadedBoolean: wr,
        spaceSeparated: R,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  gn = Object.keys(_n)
class Qn extends le {
  constructor(n, t, r, i) {
    let l = -1
    if ((super(n, t), Tt(this, "space", i), typeof r == "number"))
      for (; ++l < gn.length; ) {
        const o = gn[l]
        Tt(this, gn[l], (r & _n[o]) === _n[o])
      }
  }
}
Qn.prototype.defined = !0
function Tt(e, n, t) {
  t && (e[n] = t)
}
const La = {}.hasOwnProperty
function Oe(e) {
  const n = {},
    t = {}
  let r
  for (r in e.properties)
    if (La.call(e.properties, r)) {
      const i = e.properties[r],
        l = new Qn(r, e.transform(e.attributes || {}, r), i, e.space)
      e.mustUseProperty &&
        e.mustUseProperty.includes(r) &&
        (l.mustUseProperty = !0),
        (n[r] = l),
        (t[Fn(r)] = r),
        (t[Fn(l.attribute)] = r)
    }
  return new Je(n, t, e.space)
}
const Sr = Oe({
    space: "xlink",
    transform(e, n) {
      return "xlink:" + n.slice(5).toLowerCase()
    },
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
  }),
  Cr = Oe({
    space: "xml",
    transform(e, n) {
      return "xml:" + n.slice(3).toLowerCase()
    },
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
  })
function Ir(e, n) {
  return n in e ? e[n] : n
}
function Er(e, n) {
  return Ir(e, n.toLowerCase())
}
const zr = Oe({
    space: "xmlns",
    attributes: { xmlnsxlink: "xmlns:xlink" },
    transform: Er,
    properties: { xmlns: null, xmlnsXLink: null },
  }),
  vr = Oe({
    transform(e, n) {
      return n === "role" ? n : "aria-" + n.slice(4).toLowerCase()
    },
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: W,
      ariaAutoComplete: null,
      ariaBusy: W,
      ariaChecked: W,
      ariaColCount: k,
      ariaColIndex: k,
      ariaColSpan: k,
      ariaControls: R,
      ariaCurrent: null,
      ariaDescribedBy: R,
      ariaDetails: null,
      ariaDisabled: W,
      ariaDropEffect: R,
      ariaErrorMessage: null,
      ariaExpanded: W,
      ariaFlowTo: R,
      ariaGrabbed: W,
      ariaHasPopup: null,
      ariaHidden: W,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: R,
      ariaLevel: k,
      ariaLive: null,
      ariaModal: W,
      ariaMultiLine: W,
      ariaMultiSelectable: W,
      ariaOrientation: null,
      ariaOwns: R,
      ariaPlaceholder: null,
      ariaPosInSet: k,
      ariaPressed: W,
      ariaReadOnly: W,
      ariaRelevant: null,
      ariaRequired: W,
      ariaRoleDescription: R,
      ariaRowCount: k,
      ariaRowIndex: k,
      ariaRowSpan: k,
      ariaSelected: W,
      ariaSetSize: k,
      ariaSort: null,
      ariaValueMax: k,
      ariaValueMin: k,
      ariaValueNow: k,
      ariaValueText: null,
      role: null,
    },
  }),
  Aa = Oe({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    transform: Er,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: Ne,
      acceptCharset: R,
      accessKey: R,
      action: null,
      allow: null,
      allowFullScreen: T,
      allowPaymentRequest: T,
      allowUserMedia: T,
      alt: null,
      as: null,
      async: T,
      autoCapitalize: null,
      autoComplete: R,
      autoFocus: T,
      autoPlay: T,
      blocking: R,
      capture: null,
      charSet: null,
      checked: T,
      cite: null,
      className: R,
      cols: k,
      colSpan: null,
      content: null,
      contentEditable: W,
      controls: T,
      controlsList: R,
      coords: k | Ne,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: T,
      defer: T,
      dir: null,
      dirName: null,
      disabled: T,
      download: wr,
      draggable: W,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: T,
      formTarget: null,
      headers: R,
      height: k,
      hidden: T,
      high: k,
      href: null,
      hrefLang: null,
      htmlFor: R,
      httpEquiv: R,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: T,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: T,
      itemId: null,
      itemProp: R,
      itemRef: R,
      itemScope: T,
      itemType: R,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: T,
      low: k,
      manifest: null,
      max: null,
      maxLength: k,
      media: null,
      method: null,
      min: null,
      minLength: k,
      multiple: T,
      muted: T,
      name: null,
      nonce: null,
      noModule: T,
      noValidate: T,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: T,
      optimum: k,
      pattern: null,
      ping: R,
      placeholder: null,
      playsInline: T,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: T,
      referrerPolicy: null,
      rel: R,
      required: T,
      reversed: T,
      rows: k,
      rowSpan: k,
      sandbox: R,
      scope: null,
      scoped: T,
      seamless: T,
      selected: T,
      shadowRootClonable: T,
      shadowRootDelegatesFocus: T,
      shadowRootMode: null,
      shape: null,
      size: k,
      sizes: null,
      slot: null,
      span: k,
      spellCheck: W,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: k,
      step: null,
      style: null,
      tabIndex: k,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: T,
      useMap: null,
      value: W,
      width: k,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: R,
      axis: null,
      background: null,
      bgColor: null,
      border: k,
      borderColor: null,
      bottomMargin: k,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: T,
      declare: T,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: k,
      leftMargin: k,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: k,
      marginWidth: k,
      noResize: T,
      noHref: T,
      noShade: T,
      noWrap: T,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: k,
      rules: null,
      scheme: null,
      scrolling: W,
      standby: null,
      summary: null,
      text: null,
      topMargin: k,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: k,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: T,
      disableRemotePlayback: T,
      prefix: null,
      property: null,
      results: k,
      security: null,
      unselectable: null,
    },
  }),
  Ta = Oe({
    space: "svg",
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin",
    },
    transform: Ir,
    properties: {
      about: te,
      accentHeight: k,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: k,
      amplitude: k,
      arabicForm: null,
      ascent: k,
      attributeName: null,
      attributeType: null,
      azimuth: k,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: k,
      by: null,
      calcMode: null,
      capHeight: k,
      className: R,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: k,
      diffuseConstant: k,
      direction: null,
      display: null,
      dur: null,
      divisor: k,
      dominantBaseline: null,
      download: T,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: k,
      enableBackground: null,
      end: null,
      event: null,
      exponent: k,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: k,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: Ne,
      g2: Ne,
      glyphName: Ne,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: k,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: k,
      horizOriginX: k,
      horizOriginY: k,
      id: null,
      ideographic: k,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: k,
      k,
      k1: k,
      k2: k,
      k3: k,
      k4: k,
      kernelMatrix: te,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: k,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: k,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: k,
      overlineThickness: k,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: k,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: R,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: k,
      pointsAtY: k,
      pointsAtZ: k,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: te,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: te,
      rev: te,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: te,
      requiredFeatures: te,
      requiredFonts: te,
      requiredFormats: te,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: k,
      specularExponent: k,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: k,
      strikethroughThickness: k,
      string: null,
      stroke: null,
      strokeDashArray: te,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: k,
      strokeOpacity: k,
      strokeWidth: null,
      style: null,
      surfaceScale: k,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: te,
      tabIndex: k,
      tableValues: null,
      target: null,
      targetX: k,
      targetY: k,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: te,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: k,
      underlineThickness: k,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: k,
      values: null,
      vAlphabetic: k,
      vMathematical: k,
      vectorEffect: null,
      vHanging: k,
      vIdeographic: k,
      version: null,
      vertAdvY: k,
      vertOriginX: k,
      vertOriginY: k,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: k,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
  }),
  Fa = /^data[-\w.:]+$/i,
  Ft = /-[a-z]/g,
  _a = /[A-Z]/g
function Ba(e, n) {
  const t = Fn(n)
  let r = n,
    i = le
  if (t in e.normal) return e.property[e.normal[t]]
  if (t.length > 4 && t.slice(0, 4) === "data" && Fa.test(n)) {
    if (n.charAt(4) === "-") {
      const l = n.slice(5).replace(Ft, Ma)
      r = "data" + l.charAt(0).toUpperCase() + l.slice(1)
    } else {
      const l = n.slice(4)
      if (!Ft.test(l)) {
        let o = l.replace(_a, Da)
        o.charAt(0) !== "-" && (o = "-" + o), (n = "data" + o)
      }
    }
    i = Qn
  }
  return new i(r, n)
}
function Da(e) {
  return "-" + e.toLowerCase()
}
function Ma(e) {
  return e.charAt(1).toUpperCase()
}
const Na = br([Cr, Sr, zr, vr, Aa], "html"),
  Ra = br([Cr, Sr, zr, vr, Ta], "svg")
function _t(e) {
  if (e) throw e
}
var yn, Bt
function Oa() {
  if (Bt) return yn
  Bt = 1
  var e = Object.prototype.hasOwnProperty,
    n = Object.prototype.toString,
    t = Object.defineProperty,
    r = Object.getOwnPropertyDescriptor,
    i = function (u) {
      return typeof Array.isArray == "function"
        ? Array.isArray(u)
        : n.call(u) === "[object Array]"
    },
    l = function (u) {
      if (!u || n.call(u) !== "[object Object]") return !1
      var c = e.call(u, "constructor"),
        p =
          u.constructor &&
          u.constructor.prototype &&
          e.call(u.constructor.prototype, "isPrototypeOf")
      if (u.constructor && !c && !p) return !1
      var m
      for (m in u);
      return typeof m > "u" || e.call(u, m)
    },
    o = function (u, c) {
      t && c.name === "__proto__"
        ? t(u, c.name, {
            enumerable: !0,
            configurable: !0,
            value: c.newValue,
            writable: !0,
          })
        : (u[c.name] = c.newValue)
    },
    a = function (u, c) {
      if (c === "__proto__")
        if (e.call(u, c)) {
          if (r) return r(u, c).value
        } else return
      return u[c]
    }
  return (
    (yn = function s() {
      var u,
        c,
        p,
        m,
        h,
        b,
        S = arguments[0],
        C = 1,
        y = arguments.length,
        L = !1
      for (
        typeof S == "boolean" && ((L = S), (S = arguments[1] || {}), (C = 2)),
          (S == null || (typeof S != "object" && typeof S != "function")) &&
            (S = {});
        C < y;
        ++C
      )
        if (((u = arguments[C]), u != null))
          for (c in u)
            (p = a(S, c)),
              (m = a(u, c)),
              S !== m &&
                (L && m && (l(m) || (h = i(m)))
                  ? (h
                      ? ((h = !1), (b = p && i(p) ? p : []))
                      : (b = p && l(p) ? p : {}),
                    o(S, { name: c, newValue: s(L, b, m) }))
                  : typeof m < "u" && o(S, { name: c, newValue: m }))
      return S
    }),
    yn
  )
}
var Ua = Oa()
const xn = oi(Ua)
function Bn(e) {
  if (typeof e != "object" || e === null) return !1
  const n = Object.getPrototypeOf(e)
  return (
    (n === null ||
      n === Object.prototype ||
      Object.getPrototypeOf(n) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  )
}
function $a() {
  const e = [],
    n = { run: t, use: r }
  return n
  function t(...i) {
    let l = -1
    const o = i.pop()
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o)
    a(null, ...i)
    function a(s, ...u) {
      const c = e[++l]
      let p = -1
      if (s) {
        o(s)
        return
      }
      for (; ++p < i.length; )
        (u[p] === null || u[p] === void 0) && (u[p] = i[p])
      ;(i = u), c ? Va(c, a)(...u) : o(null, ...u)
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError("Expected `middelware` to be a function, not " + i)
    return e.push(i), n
  }
}
function Va(e, n) {
  let t
  return r
  function r(...o) {
    const a = e.length > o.length
    let s
    a && o.push(i)
    try {
      s = e.apply(this, o)
    } catch (u) {
      const c = u
      if (a && t) throw c
      return i(c)
    }
    a ||
      (s && s.then && typeof s.then == "function"
        ? s.then(l, i)
        : s instanceof Error
        ? i(s)
        : l(s))
  }
  function i(o, ...a) {
    t || ((t = !0), n(o, ...a))
  }
  function l(o) {
    i(null, o)
  }
}
class ee extends Error {
  constructor(n, t, r) {
    super(), typeof t == "string" && ((r = t), (t = void 0))
    let i = "",
      l = {},
      o = !1
    if (
      (t &&
        ("line" in t && "column" in t
          ? (l = { place: t })
          : "start" in t && "end" in t
          ? (l = { place: t })
          : "type" in t
          ? (l = { ancestors: [t], place: t.position })
          : (l = { ...t })),
      typeof n == "string"
        ? (i = n)
        : !l.cause && n && ((o = !0), (i = n.message), (l.cause = n)),
      !l.ruleId && !l.source && typeof r == "string")
    ) {
      const s = r.indexOf(":")
      s === -1
        ? (l.ruleId = r)
        : ((l.source = r.slice(0, s)), (l.ruleId = r.slice(s + 1)))
    }
    if (!l.place && l.ancestors && l.ancestors) {
      const s = l.ancestors[l.ancestors.length - 1]
      s && (l.place = s.position)
    }
    const a = l.place && "start" in l.place ? l.place.start : l.place
    ;(this.ancestors = l.ancestors || void 0),
      (this.cause = l.cause || void 0),
      (this.column = a ? a.column : void 0),
      (this.fatal = void 0),
      this.file,
      (this.message = i),
      (this.line = a ? a.line : void 0),
      (this.name = We(l.place) || "1:1"),
      (this.place = l.place || void 0),
      (this.reason = this.message),
      (this.ruleId = l.ruleId || void 0),
      (this.source = l.source || void 0),
      (this.stack =
        o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : ""),
      this.actual,
      this.expected,
      this.note,
      this.url
  }
}
ee.prototype.file = ""
ee.prototype.name = ""
ee.prototype.reason = ""
ee.prototype.message = ""
ee.prototype.stack = ""
ee.prototype.column = void 0
ee.prototype.line = void 0
ee.prototype.ancestors = void 0
ee.prototype.cause = void 0
ee.prototype.fatal = void 0
ee.prototype.place = void 0
ee.prototype.ruleId = void 0
ee.prototype.source = void 0
const ce = { basename: Ha, dirname: qa, extname: ja, join: Wa, sep: "/" }
function Ha(e, n) {
  if (n !== void 0 && typeof n != "string")
    throw new TypeError('"ext" argument must be a string')
  Qe(e)
  let t = 0,
    r = -1,
    i = e.length,
    l
  if (n === void 0 || n.length === 0 || n.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (l) {
          t = i + 1
          break
        }
      } else r < 0 && ((l = !0), (r = i + 1))
    return r < 0 ? "" : e.slice(t, r)
  }
  if (n === e) return ""
  let o = -1,
    a = n.length - 1
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (l) {
        t = i + 1
        break
      }
    } else
      o < 0 && ((l = !0), (o = i + 1)),
        a > -1 &&
          (e.codePointAt(i) === n.codePointAt(a--)
            ? a < 0 && (r = i)
            : ((a = -1), (r = o)))
  return t === r ? (r = o) : r < 0 && (r = e.length), e.slice(t, r)
}
function qa(e) {
  if ((Qe(e), e.length === 0)) return "."
  let n = -1,
    t = e.length,
    r
  for (; --t; )
    if (e.codePointAt(t) === 47) {
      if (r) {
        n = t
        break
      }
    } else r || (r = !0)
  return n < 0
    ? e.codePointAt(0) === 47
      ? "/"
      : "."
    : n === 1 && e.codePointAt(0) === 47
    ? "//"
    : e.slice(0, n)
}
function ja(e) {
  Qe(e)
  let n = e.length,
    t = -1,
    r = 0,
    i = -1,
    l = 0,
    o
  for (; n--; ) {
    const a = e.codePointAt(n)
    if (a === 47) {
      if (o) {
        r = n + 1
        break
      }
      continue
    }
    t < 0 && ((o = !0), (t = n + 1)),
      a === 46 ? (i < 0 ? (i = n) : l !== 1 && (l = 1)) : i > -1 && (l = -1)
  }
  return i < 0 || t < 0 || l === 0 || (l === 1 && i === t - 1 && i === r + 1)
    ? ""
    : e.slice(i, t)
}
function Wa(...e) {
  let n = -1,
    t
  for (; ++n < e.length; )
    Qe(e[n]), e[n] && (t = t === void 0 ? e[n] : t + "/" + e[n])
  return t === void 0 ? "." : Za(t)
}
function Za(e) {
  Qe(e)
  const n = e.codePointAt(0) === 47
  let t = Ga(e, !n)
  return (
    t.length === 0 && !n && (t = "."),
    t.length > 0 && e.codePointAt(e.length - 1) === 47 && (t += "/"),
    n ? "/" + t : t
  )
}
function Ga(e, n) {
  let t = "",
    r = 0,
    i = -1,
    l = 0,
    o = -1,
    a,
    s
  for (; ++o <= e.length; ) {
    if (o < e.length) a = e.codePointAt(o)
    else {
      if (a === 47) break
      a = 47
    }
    if (a === 47) {
      if (!(i === o - 1 || l === 1))
        if (i !== o - 1 && l === 2) {
          if (
            t.length < 2 ||
            r !== 2 ||
            t.codePointAt(t.length - 1) !== 46 ||
            t.codePointAt(t.length - 2) !== 46
          ) {
            if (t.length > 2) {
              if (((s = t.lastIndexOf("/")), s !== t.length - 1)) {
                s < 0
                  ? ((t = ""), (r = 0))
                  : ((t = t.slice(0, s)),
                    (r = t.length - 1 - t.lastIndexOf("/"))),
                  (i = o),
                  (l = 0)
                continue
              }
            } else if (t.length > 0) {
              ;(t = ""), (r = 0), (i = o), (l = 0)
              continue
            }
          }
          n && ((t = t.length > 0 ? t + "/.." : ".."), (r = 2))
        } else
          t.length > 0
            ? (t += "/" + e.slice(i + 1, o))
            : (t = e.slice(i + 1, o)),
            (r = o - i - 1)
      ;(i = o), (l = 0)
    } else a === 46 && l > -1 ? l++ : (l = -1)
  }
  return t
}
function Qe(e) {
  if (typeof e != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
}
const Ya = { cwd: Xa }
function Xa() {
  return "/"
}
function Dn(e) {
  return !!(
    e !== null &&
    typeof e == "object" &&
    "href" in e &&
    e.href &&
    "protocol" in e &&
    e.protocol &&
    e.auth === void 0
  )
}
function Ja(e) {
  if (typeof e == "string") e = new URL(e)
  else if (!Dn(e)) {
    const n = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        e +
        "`"
    )
    throw ((n.code = "ERR_INVALID_ARG_TYPE"), n)
  }
  if (e.protocol !== "file:") {
    const n = new TypeError("The URL must be of scheme file")
    throw ((n.code = "ERR_INVALID_URL_SCHEME"), n)
  }
  return Qa(e)
}
function Qa(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    )
    throw ((r.code = "ERR_INVALID_FILE_URL_HOST"), r)
  }
  const n = e.pathname
  let t = -1
  for (; ++t < n.length; )
    if (n.codePointAt(t) === 37 && n.codePointAt(t + 1) === 50) {
      const r = n.codePointAt(t + 2)
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        )
        throw ((i.code = "ERR_INVALID_FILE_URL_PATH"), i)
      }
    }
  return decodeURIComponent(n)
}
const kn = ["history", "path", "basename", "stem", "extname", "dirname"]
class Pr {
  constructor(n) {
    let t
    n
      ? Dn(n)
        ? (t = { path: n })
        : typeof n == "string" || Ka(n)
        ? (t = { value: n })
        : (t = n)
      : (t = {}),
      (this.cwd = "cwd" in t ? "" : Ya.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored
    let r = -1
    for (; ++r < kn.length; ) {
      const l = kn[r]
      l in t &&
        t[l] !== void 0 &&
        t[l] !== null &&
        (this[l] = l === "history" ? [...t[l]] : t[l])
    }
    let i
    for (i in t) kn.includes(i) || (this[i] = t[i])
  }
  get basename() {
    return typeof this.path == "string" ? ce.basename(this.path) : void 0
  }
  set basename(n) {
    wn(n, "basename"),
      bn(n, "basename"),
      (this.path = ce.join(this.dirname || "", n))
  }
  get dirname() {
    return typeof this.path == "string" ? ce.dirname(this.path) : void 0
  }
  set dirname(n) {
    Dt(this.basename, "dirname"), (this.path = ce.join(n || "", this.basename))
  }
  get extname() {
    return typeof this.path == "string" ? ce.extname(this.path) : void 0
  }
  set extname(n) {
    if ((bn(n, "extname"), Dt(this.dirname, "extname"), n)) {
      if (n.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`")
      if (n.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots")
    }
    this.path = ce.join(this.dirname, this.stem + (n || ""))
  }
  get path() {
    return this.history[this.history.length - 1]
  }
  set path(n) {
    Dn(n) && (n = Ja(n)), wn(n, "path"), this.path !== n && this.history.push(n)
  }
  get stem() {
    return typeof this.path == "string"
      ? ce.basename(this.path, this.extname)
      : void 0
  }
  set stem(n) {
    wn(n, "stem"),
      bn(n, "stem"),
      (this.path = ce.join(this.dirname || "", n + (this.extname || "")))
  }
  fail(n, t, r) {
    const i = this.message(n, t, r)
    throw ((i.fatal = !0), i)
  }
  info(n, t, r) {
    const i = this.message(n, t, r)
    return (i.fatal = void 0), i
  }
  message(n, t, r) {
    const i = new ee(n, t, r)
    return (
      this.path && ((i.name = this.path + ":" + i.name), (i.file = this.path)),
      (i.fatal = !1),
      this.messages.push(i),
      i
    )
  }
  toString(n) {
    return this.value === void 0
      ? ""
      : typeof this.value == "string"
      ? this.value
      : new TextDecoder(n || void 0).decode(this.value)
  }
}
function bn(e, n) {
  if (e && e.includes(ce.sep))
    throw new Error(
      "`" + n + "` cannot be a path: did not expect `" + ce.sep + "`"
    )
}
function wn(e, n) {
  if (!e) throw new Error("`" + n + "` cannot be empty")
}
function Dt(e, n) {
  if (!e) throw new Error("Setting `" + n + "` requires `path` to be set too")
}
function Ka(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e)
}
const eu = function (e) {
    const r = this.constructor.prototype,
      i = r[e],
      l = function () {
        return i.apply(l, arguments)
      }
    return Object.setPrototypeOf(l, r), l
  },
  nu = {}.hasOwnProperty
class Kn extends eu {
  constructor() {
    super("copy"),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = $a())
  }
  copy() {
    const n = new Kn()
    let t = -1
    for (; ++t < this.attachers.length; ) {
      const r = this.attachers[t]
      n.use(...r)
    }
    return n.data(xn(!0, {}, this.namespace)), n
  }
  data(n, t) {
    return typeof n == "string"
      ? arguments.length === 2
        ? (In("data", this.frozen), (this.namespace[n] = t), this)
        : (nu.call(this.namespace, n) && this.namespace[n]) || void 0
      : n
      ? (In("data", this.frozen), (this.namespace = n), this)
      : this.namespace
  }
  freeze() {
    if (this.frozen) return this
    const n = this
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [t, ...r] = this.attachers[this.freezeIndex]
      if (r[0] === !1) continue
      r[0] === !0 && (r[0] = void 0)
      const i = t.call(n, ...r)
      typeof i == "function" && this.transformers.use(i)
    }
    return (
      (this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this
    )
  }
  parse(n) {
    this.freeze()
    const t = tn(n),
      r = this.parser || this.Parser
    return Sn("parse", r), r(String(t), t)
  }
  process(n, t) {
    const r = this
    return (
      this.freeze(),
      Sn("process", this.parser || this.Parser),
      Cn("process", this.compiler || this.Compiler),
      t ? i(void 0, t) : new Promise(i)
    )
    function i(l, o) {
      const a = tn(n),
        s = r.parse(a)
      r.run(s, a, function (c, p, m) {
        if (c || !p || !m) return u(c)
        const h = p,
          b = r.stringify(h, m)
        iu(b) ? (m.value = b) : (m.result = b), u(c, m)
      })
      function u(c, p) {
        c || !p ? o(c) : l ? l(p) : t(void 0, p)
      }
    }
  }
  processSync(n) {
    let t = !1,
      r
    return (
      this.freeze(),
      Sn("processSync", this.parser || this.Parser),
      Cn("processSync", this.compiler || this.Compiler),
      this.process(n, i),
      Nt("processSync", "process", t),
      r
    )
    function i(l, o) {
      ;(t = !0), _t(l), (r = o)
    }
  }
  run(n, t, r) {
    Mt(n), this.freeze()
    const i = this.transformers
    return (
      !r && typeof t == "function" && ((r = t), (t = void 0)),
      r ? l(void 0, r) : new Promise(l)
    )
    function l(o, a) {
      const s = tn(t)
      i.run(n, s, u)
      function u(c, p, m) {
        const h = p || n
        c ? a(c) : o ? o(h) : r(void 0, h, m)
      }
    }
  }
  runSync(n, t) {
    let r = !1,
      i
    return this.run(n, t, l), Nt("runSync", "run", r), i
    function l(o, a) {
      _t(o), (i = a), (r = !0)
    }
  }
  stringify(n, t) {
    this.freeze()
    const r = tn(t),
      i = this.compiler || this.Compiler
    return Cn("stringify", i), Mt(n), i(n, r)
  }
  use(n, ...t) {
    const r = this.attachers,
      i = this.namespace
    if ((In("use", this.frozen), n != null))
      if (typeof n == "function") s(n, t)
      else if (typeof n == "object") Array.isArray(n) ? a(n) : o(n)
      else throw new TypeError("Expected usable value, not `" + n + "`")
    return this
    function l(u) {
      if (typeof u == "function") s(u, [])
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [c, ...p] = u
          s(c, p)
        } else o(u)
      else throw new TypeError("Expected usable value, not `" + u + "`")
    }
    function o(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        )
      a(u.plugins), u.settings && (i.settings = xn(!0, i.settings, u.settings))
    }
    function a(u) {
      let c = -1
      if (u != null)
        if (Array.isArray(u))
          for (; ++c < u.length; ) {
            const p = u[c]
            l(p)
          }
        else throw new TypeError("Expected a list of plugins, not `" + u + "`")
    }
    function s(u, c) {
      let p = -1,
        m = -1
      for (; ++p < r.length; )
        if (r[p][0] === u) {
          m = p
          break
        }
      if (m === -1) r.push([u, ...c])
      else if (c.length > 0) {
        let [h, ...b] = c
        const S = r[m][1]
        Bn(S) && Bn(h) && (h = xn(!0, S, h)), (r[m] = [u, h, ...b])
      }
    }
  }
}
const tu = new Kn().freeze()
function Sn(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`")
}
function Cn(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`")
}
function In(e, n) {
  if (n)
    throw new Error(
      "Cannot call `" +
        e +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    )
}
function Mt(e) {
  if (!Bn(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`")
}
function Nt(e, n, t) {
  if (!t) throw new Error("`" + e + "` finished async. Use `" + n + "` instead")
}
function tn(e) {
  return ru(e) ? e : new Pr(e)
}
function ru(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e)
}
function iu(e) {
  return typeof e == "string" || lu(e)
}
function lu(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e)
}
const ou = function (e) {
  return au(e)
}
function au(e) {
  return uu(n)
  function n(t) {
    return t && t.type === e
  }
}
function uu(e) {
  return n
  function n(t, ...r) {
    return !!(t && typeof t == "object" && "type" in t && e.call(this, t, ...r))
  }
}
const su = !0,
  Rt = !1,
  cu = "skip",
  hu = function (e, n, t, r) {
    const i = ou(n),
      l = 1
    o(e, void 0, [])()
    function o(a, s, u) {
      const c = a && typeof a == "object" ? a : {}
      if (typeof c.type == "string") {
        const m =
          typeof c.tagName == "string"
            ? c.tagName
            : typeof c.name == "string"
            ? c.name
            : void 0
        Object.defineProperty(p, "name", {
          value: "node (" + (a.type + (m ? "<" + m + ">" : "")) + ")",
        })
      }
      return p
      function p() {
        let m = [],
          h,
          b,
          S
        if (
          i(a, s, u[u.length - 1] || null) &&
          ((m = pu(t(a, u))), m[0] === Rt)
        )
          return m
        if (a.children && m[0] !== cu)
          for (b = -1 + l, S = u.concat(a); b > -1 && b < a.children.length; ) {
            if (((h = o(a.children[b], b, S)()), h[0] === Rt)) return h
            b = typeof h[1] == "number" ? h[1] : b + l
          }
        return m
      }
    }
  }
function pu(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [su, e] : [e]
}
const fu = function (e, n, t, r) {
  hu(e, n, i)
  function i(l, o) {
    const a = o[o.length - 1]
    return t(l, a ? a.children.indexOf(l) : null, a)
  }
}
function du(e, n) {
  const t = {}
  return (e[e.length - 1] === "" ? [...e, ""] : e)
    .join((t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " "))
    .trim()
}
function mu(e) {
  return e.join(" ").trim()
}
var gu = Z("<div>"),
  yu = (e) => {
    if (e.allowedElements && e.disallowedElements)
      throw new TypeError(
        "Only one of `allowedElements` and `disallowedElements` should be defined"
      )
    if (e.allowedElements || e.disallowedElements || e.allowElement)
      return (n) => {
        fu(n, "element", (t, r, i) => {
          const l = i
          if (l === null) return
          let o
          if (
            (e.allowedElements
              ? (o = !e.allowedElements.includes(t.tagName))
              : e.disallowedElements &&
                (o = e.disallowedElements.includes(t.tagName)),
            !o &&
              e.allowElement &&
              typeof r == "number" &&
              l &&
              (o = !e.allowElement(t, r, l)),
            o && typeof r == "number" && l)
          )
            return (
              e.unwrapDisallowed && t.children
                ? l.children.splice(r, 1, ...t.children)
                : l.children.splice(r, 1),
              r
            )
        })
      }
  },
  xu = yu
function ku(e) {
  let n = -1
  for (; ++n < e.children.length; ) {
    const t = e.children[n]
    if (
      (t == null ? void 0 : t.type) === "element" &&
      (t == null ? void 0 : t.tagName) === "input"
    )
      return t
  }
  return null
}
function En(e, n) {
  var i
  let t = -1,
    r = 0
  for (; ++t < e.children.length && e.children[t] !== n; )
    ((i = e.children[t]) == null ? void 0 : i.type) === "element" && r++
  return r
}
function bu(e, n, t, r) {
  const i = Ba(r.schema, n)
  let l = t
  i.property === "className" && (i.property = "class"),
    !(l == null || l !== l) &&
      (Array.isArray(l) && (l = i.commaSeparated ? du(l) : mu(l)),
      i.space && i.property
        ? (e[i.property] = l)
        : i.attribute && (e[i.attribute] = l))
}
function Lr(e) {
  return [e.start.line, ":", e.start.column, "-", e.end.line, ":", e.end.column]
    .map((n) => String(n))
    .join("")
}
var Mn = {}.hasOwnProperty,
  wu = (e) =>
    I(Ar, {
      get node() {
        return e.node
      },
      get context() {
        return e.context
      },
    }),
  Ar = (e) =>
    I(ei, {
      get each() {
        return e.node.children
      },
      children: (n, t) =>
        I(Un, {
          get children() {
            return [
              I(xe, {
                get when() {
                  return n.type === "element"
                },
                get children() {
                  return I(Cu, {
                    get context() {
                      return e.context
                    },
                    get index() {
                      return t()
                    },
                    node: n,
                    get parent() {
                      return e.node
                    },
                  })
                },
              }),
              I(xe, {
                get when() {
                  return (
                    n.type === "text" &&
                    n.value !==
                      `
`
                  )
                },
                get children() {
                  return I(Su, {
                    get context() {
                      return e.context
                    },
                    get index() {
                      return t()
                    },
                    node: n,
                    get parent() {
                      return e.node
                    },
                  })
                },
              }),
            ]
          },
        }),
    }),
  Su = (e) => {
    const n = pe(() => {
      const t = { ...e.context },
        r = t.options,
        i = e.node,
        o = { parent: e.parent },
        a = i.position || {
          start: { line: null, column: null, offset: null },
          end: { line: null, column: null, offset: null },
        },
        s =
          r.components && Mn.call(r.components, "text")
            ? r.components.text
            : null,
        u = typeof s == "string"
      return (
        (o.key = ["text", a.start.line, a.start.column, e.index].join("-")),
        r.sourcePos && (o["data-sourcepos"] = Lr(a)),
        !u && r.rawSourcePos && (o.sourcePosition = i.position),
        u || (o.node = i),
        { properties: o, context: t, component: s }
      )
    })
    return I(Ce, {
      get when() {
        return n().component
      },
      get fallback() {
        return e.node.value
      },
      get children() {
        return I(
          Vt,
          Xe(
            {
              get component() {
                return n().component || "span"
              },
            },
            () => n().properties
          )
        )
      },
    })
  },
  Cu = (e) => {
    const n = pe(() => {
      const t = { ...e.context },
        r = t.options,
        i = t.schema,
        l = e.node,
        o = l.tagName,
        a = e.parent,
        s = {}
      let u = i,
        c
      if (
        (i.space === "html" && o === "svg" && ((u = Ra), (t.schema = u)),
        l.properties)
      )
        for (c in l.properties)
          Mn.call(l.properties, c) && bu(s, c, l.properties[c], t)
      ;(o === "ol" || o === "ul") && t.listDepth++,
        (o === "ol" || o === "ul") && t.listDepth--,
        (t.schema = i)
      const p = l.position || {
          start: { line: null, column: null, offset: null },
          end: { line: null, column: null, offset: null },
        },
        m = r.components && Mn.call(r.components, o) ? r.components[o] : o,
        h = typeof m == "string"
      if (
        ((s.key = [o, p.start.line, p.start.column, e.index].join("-")),
        o === "a" &&
          r.linkTarget &&
          (s.target =
            typeof r.linkTarget == "function"
              ? r.linkTarget(
                  String(s.href || ""),
                  l.children,
                  typeof s.title == "string" ? s.title : void 0
                )
              : r.linkTarget),
        o === "a" &&
          r.transformLinkUri &&
          (s.href = r.transformLinkUri(
            String(s.href || ""),
            l.children,
            typeof s.title == "string" ? s.title : void 0
          )),
        !h &&
          o === "code" &&
          a.type === "element" &&
          a.tagName !== "pre" &&
          (s.inline = !0),
        !h &&
          (o === "h1" ||
            o === "h2" ||
            o === "h3" ||
            o === "h4" ||
            o === "h5" ||
            o === "h6") &&
          (s.level = Number.parseInt(o.charAt(1), 10)),
        o === "img" &&
          r.transformImageUri &&
          (s.src = r.transformImageUri(
            String(s.src || ""),
            String(s.alt || ""),
            typeof s.title == "string" ? s.title : void 0
          )),
        !h && o === "li" && a.type === "element")
      ) {
        const b = ku(l)
        ;(s.checked =
          b != null && b.properties ? !!b.properties.checked : null),
          (s.index = En(a, l)),
          (s.ordered = a.tagName === "ol")
      }
      return (
        !h &&
          (o === "ol" || o === "ul") &&
          ((s.ordered = o === "ol"), (s.depth = t.listDepth)),
        (o === "td" || o === "th") &&
          (s.align &&
            (s.style || (s.style = {}),
            (s.style.textAlign = s.align),
            delete s.align),
          h || (s.isHeader = o === "th")),
        !h &&
          o === "tr" &&
          a.type === "element" &&
          (s.isHeader = a.tagName === "thead"),
        r.sourcePos && (s["data-sourcepos"] = Lr(p)),
        !h && r.rawSourcePos && (s.sourcePosition = l.position),
        !h &&
          r.includeElementIndex &&
          ((s.index = En(a, l)), (s.siblingCount = En(a))),
        h || (s.node = l),
        { properties: s, context: t, component: m }
      )
    })
    return I(
      Vt,
      Xe(
        {
          get component() {
            return n().component
          },
        },
        () => n().properties,
        {
          get children() {
            return I(Ar, {
              get node() {
                return e.node
              },
              get context() {
                return n().context
              },
            })
          },
        }
      )
    )
  },
  Iu = {
    renderingStrategy: "memo",
    remarkPlugins: [],
    rehypePlugins: [],
    class: "",
    unwrapDisallowed: !1,
    disallowedElements: void 0,
    allowedElements: void 0,
    allowElement: void 0,
    children: "",
    sourcePos: !1,
    rawSourcePos: !1,
    skipHtml: !1,
    includeElementIndex: !1,
    transformLinkUri: null,
    transformImageUri: void 0,
    linkTarget: "_self",
    components: {},
  },
  Eu = (e) => {
    const n = Xe(Iu, e),
      [t, r] = Qr({ type: "root", children: [] }),
      i = pe(() => {
        const l = n.children,
          o = tu()
            .use(Ao)
            .use(n.remarkPlugins || [])
            .use(va, { allowDangerousHtml: !0 })
            .use(n.rehypePlugins || [])
            .use(xu, n),
          a = new Pr()
        typeof l == "string" ? (a.value = l) : l !== void 0 && n.children
        const s = o.runSync(o.parse(a), a)
        if (s.type !== "root") throw new TypeError("Expected a `root` node")
        return s
      })
    return (
      n.renderingStrategy === "reconcile" &&
        Ge(() => {
          r(Kr(i()))
        }),
      (() => {
        var l = gu()
        return (
          J(
            l,
            I(wu, {
              context: { options: n, schema: Na, listDepth: 0 },
              get node() {
                return pe(() => n.renderingStrategy === "memo")() ? i() : t
              },
            })
          ),
          Ge(() => Nn(l, n.class)),
          l
        )
      })()
    )
  },
  zu = {}
qr(zu, { Root: () => et, Skeleton: () => vu })
function et(e) {
  const n = `skeleton-${ni()}`,
    t = jr({ visible: !0, animate: !0, id: n }, e),
    [r, i] = jt(t, [
      "style",
      "radius",
      "animate",
      "height",
      "width",
      "visible",
      "circle",
    ])
  return I(
    Wr,
    Xe(
      {
        as: "div",
        role: "group",
        get "data-animate"() {
          return r.animate || void 0
        },
        get "data-visible"() {
          return r.visible || void 0
        },
        get style() {
          return ri(
            {
              "border-radius": r.circle
                ? "9999px"
                : r.radius
                ? `${r.radius}px`
                : void 0,
              width: r.circle
                ? `${r.height}px`
                : r.width
                ? `${r.width}px`
                : "100%",
              height: r.height ? `${r.height}px` : "auto",
            },
            r.style
          )
        },
      },
      i
    )
  )
}
var vu = et
const Ot = (e) => {
  const [n, t] = jt(e, ["class"])
  return I(
    et,
    Xe(
      {
        get class() {
          return Rn(
            "bg-primary/10 data-[animate='true']:animate-pulse ",
            n.class
          )
        },
      },
      t
    )
  )
}
var Pu = Z(
  '<svg viewBox="0 0 256 256"width=1.2em height=1.2em><g fill=currentColor><path d="M200 56H56a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h144a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m-36 128H92a20 20 0 0 1 0-40h72a20 20 0 0 1 0 40"opacity=.2></path><path d="M200 48h-64V16a8 8 0 0 0-16 0v32H56a32 32 0 0 0-32 32v112a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V80a32 32 0 0 0-32-32m16 144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16ZM72 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12m88 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12m4 28H92a28 28 0 0 0 0 56h72a28 28 0 0 0 0-56m-24 16v24h-24v-24Zm-60 12a12 12 0 0 1 12-12h8v24h-8a12 12 0 0 1-12-12m84 12h-8v-24h8a12 12 0 0 1 0 24">'
)
const Lu = (e = {}) =>
  (() => {
    var n = Pu()
    return Ye(n, e, !0, !0), n
  })()
var Au = Z(
  '<svg viewBox="0 0 256 256"width=1.2em height=1.2em><g fill=currentColor><path d="M208 48v168a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h40a39.83 39.83 0 0 0-8 24v8h80v-8a39.83 39.83 0 0 0-8-24h40a8 8 0 0 1 8 8"opacity=.2></path><path d="M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m72 184H56V48h26.75A47.9 47.9 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.9 47.9 0 0 0-2.75-16H200Z">'
)
const Tu = (e = {}) =>
  (() => {
    var n = Au()
    return Ye(n, e, !0, !0), n
  })()
var Fu = Z("<div class=space-y-2>"),
  _u = Z("<span class=text-error-foreground>"),
  Bu = Z("<div>"),
  Du = Z('<div class="fixed inset-0 bg-transparent">'),
  Mu = Z("<span>Solve Question using GPT"),
  Nu = Z("<span>Copy Quiz")
function Ru(e) {
  const [n, t] = Se(0),
    [r, i] = Se(!1),
    [l, o] = Se(),
    [a, s] = Se()
  let u
  const c = pe(() => e.show && !!e.quiz)
  function p() {
    return e.accountStatus !== qt.Subscribed
      ? (u == null || u.showModal(), !1)
      : !0
  }
  async function m() {
    !e.quiz || !p() || (i((C) => !C), r() && h())
  }
  async function h() {
    if ([3, 0].includes(n()))
      try {
        t(1)
        const C = await ve(
          ke.Background,
          "938a56d1a952b2876585681aa31e9d32",
          e.quiz
        )
        o(C), t(2)
      } catch (C) {
        ln.error((C == null ? void 0 : C.message) ?? C), s(C), t(3)
      }
  }
  function b() {
    if (!e.quiz || !p()) return
    let C = e.quiz.text
    e.quiz.options &&
      ((C += `

Options:`),
      (C +=
        `

` +
        e.quiz.options.map((y, L) => `${L + 1}. ${y.text}`).join(`
`))),
      navigator.clipboard.writeText(
        C.replace(/(\[\/?math(-block)?]|\[\/?mathml])/g, "")
      ),
      ln.success("Copied to clipboard")
  }
  const S = [
    I(Xt, {
      ref(C) {
        var y = u
        typeof y == "function" ? y(C) : (u = C)
      },
      get userId() {
        return e.userId
      },
    }),
    (() => {
      var C = Bu()
      return (
        J(
          C,
          I(Un, {
            get children() {
              return [
                I(xe, {
                  get when() {
                    return n() === 1 || n() === 0
                  },
                  get children() {
                    var y = Fu()
                    return (
                      J(
                        y,
                        I(Ot, { height: 16, class: "w-full", radius: 10 }),
                        null
                      ),
                      J(
                        y,
                        I(Ot, { height: 16, class: "max-w-[66%]", radius: 10 }),
                        null
                      ),
                      y
                    )
                  },
                }),
                I(xe, {
                  get when() {
                    return n() === 2
                  },
                  get children() {
                    return I(Eu, {
                      class: "prose whitespace-pre-line",
                      get children() {
                        return l()
                      },
                    })
                  },
                }),
                I(xe, {
                  get when() {
                    return n() === 3
                  },
                  get children() {
                    var y = _u()
                    return (
                      J(y, () => {
                        var L
                        return (
                          ((L = a()) == null ? void 0 : L.message) ??
                          "An error occured while preparing your answer."
                        )
                      }),
                      y
                    )
                  },
                }),
              ]
            },
          })
        ),
        Ge(() =>
          Nn(
            C,
            Rn(
              "absolute bottom-[calc(100%+8px)] col-[1/1] row-[1/1] mx-auto max-h-[calc(100vh/2)] overflow-y-auto rounded-lg border border-input bg-background px-3 py-2.5 text-base text-foreground shadow-sm",
              r() ? "block" : "hidden",
              n() === 2 ? "w-[480px]" : "w-full"
            )
          )
        ),
        C
      )
    })(),
  ]
  return [
    I(Ce, {
      get when() {
        return pe(() => !!r())() && c()
      },
      get children() {
        var C = Du()
        return (C.$$click = () => i(!1)), C
      },
    }),
    I(Ce, {
      get when() {
        return c()
      },
      get children() {
        return I(qn, {
          modal: S,
          get children() {
            return [
              I(Ze, {
                class:
                  "peer flex h-10 shrink-0 items-center rounded-full border border-input bg-background hover:bg-input/40",
                variant: "secondary",
                onClick: m,
                get disabled() {
                  return !e.quiz
                },
                get children() {
                  return [I(Lu, { class: "size-7.5 text-primary" }), Mu()]
                },
              }),
              I(Ze, {
                class:
                  "peer flex h-10 shrink-0 items-center rounded-full border border-input bg-background hover:bg-input/40",
                variant: "secondary",
                onClick: b,
                get disabled() {
                  return !e.quiz
                },
                get children() {
                  return [I(Tu, { class: "size-7.5 text-primary" }), Nu()]
                },
              }),
            ]
          },
        })
      },
    }),
  ]
}
$t(["click"])
var Ou = Z("<span>Copy-Paste Enabled")
function Uu(e) {
  return I(Ce, {
    get when() {
      return e.show
    },
    get children() {
      return I(qn, {
        get children() {
          return I(Ze, {
            class:
              "peer flex h-10 shrink-0 items-center rounded-full border border-input bg-background hover:bg-input/40",
            variant: "secondary",
            as: "div",
            get children() {
              return [
                I(Gt, { class: "size-7.5 text-success-foreground" }),
                Ou(),
              ]
            },
          })
        },
      })
    },
  })
}
Ht(ke.ContentScript)
const Pe = ii(),
  Be = ci(),
  Tr = "/Quiz/QuizQuestion.aspx",
  Fr = "/GDB/StudentMessage.aspx",
  $u = "/Quiz/QuizStart.aspx",
  Vu = "/Quiz/QuizFinished.aspx",
  Hu = Zt.d(
    "W3siZGVzY3JpcHRpb24iOiJFbmFibGUgY29weSBwYXN0ZSBvbiBxdWl6IGFuZCBnZGIgcGFnZXMsIG1hcmsgbGVzc29uIHZpZGVvcyBhcyB2aWV3ZWQsIGFuZCBieXBhc3MgVlUgcXVpeiBmaXJld2FsbC4iLCJkaXNhYmxlZFJlYXNvbiI6InVua25vd24iLCJlbmFibGVkIjpmYWxzZSwiaG9tZXBhZ2VVcmwiOiJodHRwczovL2Nocm9tZXdlYnN0b3JlLmdvb2dsZS5jb20vZGV0YWlsL2hoY2ZpaGlobWVmamlsbHBiZWRsbGVubWxsaHBhZmxjIiwiaG9zdFBlcm1pc3Npb25zIjpbIio6Ly8qLnZ1LmVkdS5way8qIiwiKjovL3Z1LWRiLXdvcmtlci5ncHRxdWl6LndvcmtlcnMuZGV2LyoiXSwiaWNvbnMiOlt7InNpemUiOjE2LCJ1cmwiOiJjaHJvbWU6Ly9leHRlbnNpb24taWNvbi9oaGNmaWhpaG1lZmppbGxwYmVkbGxlbm1sbGhwYWZsYy8xNi8wIn0seyJzaXplIjo0OCwidXJsIjoiY2hyb21lOi8vZXh0ZW5zaW9uLWljb24vaGhjZmloaWhtZWZqaWxscGJlZGxsZW5tbGxocGFmbGMvNDgvMCJ9LHsic2l6ZSI6MTI4LCJ1cmwiOiJjaHJvbWU6Ly9leHRlbnNpb24taWNvbi9oaGNmaWhpaG1lZmppbGxwYmVkbGxlbm1sbGhwYWZsYy8xMjgvMCJ9XSwiaWQiOiJoaGNmaWhpaG1lZmppbGxwYmVkbGxlbm1sbGhwYWZsYyIsImluc3RhbGxUeXBlIjoibm9ybWFsIiwiaXNBcHAiOmZhbHNlLCJtYXlEaXNhYmxlIjp0cnVlLCJtYXlFbmFibGUiOnRydWUsIm5hbWUiOiJGaXJld2FsbCBCeXBhc3MgVlUiLCJvZmZsaW5lRW5hYmxlZCI6ZmFsc2UsIm9wdGlvbnNVcmwiOiIiLCJwZXJtaXNzaW9ucyI6WyJhY3RpdmVUYWIiLCJjb250ZXh0TWVudXMiLCJkZWNsYXJhdGl2ZU5ldFJlcXVlc3RXaXRoSG9zdEFjY2VzcyIsInNjcmlwdGluZyJdLCJzaG9ydE5hbWUiOiJGaXJld2FsbCBCeXBhc3MgVlUiLCJ0eXBlIjoiZXh0ZW5zaW9uIiwidXBkYXRlVXJsIjoiaHR0cHM6Ly9jbGllbnRzMi5nb29nbGUuY29tL3NlcnZpY2UvdXBkYXRlMi9jcngiLCJ2ZXJzaW9uIjoiMS4wLjYifV0="
  )
var Ut
if (location.pathname.includes(Fr) && Pe().gdbCopyPaste) {
  const e = document.createElement("input")
  ;(e.type = "hidden"),
    (e.name = "hfAllowCopyPaste"),
    (e.id = "hfAllowCopyPaste"),
    (e.value = "1"),
    (Ut = document.body ?? document.head ?? document.documentElement) == null ||
      Ut.prepend(e)
}
if (location.pathname.includes($u)) {
  const n = new URL(location.href).searchParams.get("QID")
  n && chrome.storage.local.set({ current_quiz_id: n })
}
ai(async () => {
  if (
    (location.pathname.includes(Tr) && requestIdleCallback(ju),
    location.pathname.includes("/LessonViewer.aspx") && Wu(),
    location.pathname.includes(Fr) && Pe().gdbCopyPaste && Gu(),
    location.pathname.includes(Vu) && Pe().printQuiz)
  ) {
    const e = await chrome.storage.local
      .get("current_quiz_id")
      .then((n) => n.current_quiz_id)
    e && window.open(sn(`/assets/pdf-viewer.html?quiz_id=${e}`), "_blank")
  }
})
const qu = chrome.runtime.id
window.addEventListener(`accessDenied:${qu}`, () => {
  localStorage.setItem("sysdata", Hu),
    (window.location.href = Zt.d(
      "aHR0cHM6Ly92dWxtcy52dS5lZHUucGsvUXVpei9FeHRlbnNpb25EZXRlY3RlZC5hc3B4"
    ))
})
ui(() => {
  location.pathname.includes(Tr) &&
    (window.requestIdleCallback ?? window.requestAnimationFrame)(() => Zu())
})
function ju() {
  zn(() => {
    Pe().quizCopyPaste &&
      ve(ke.Background, "b0bcbdb1ac26af4b95b2bc8b9c030f4e").catch((e) => {})
  })
}
async function Wu() {
  const { css: e, fontCss: n } = await Hn()
  document.documentElement.appendChild(
    Vn("div", (t, r, i) => {
      i(e, n)
      const l = On(
        () =>
          I(Ci, {
            get show() {
              return Pe().lectureSkip
            },
            get accountStatus() {
              return De.status()
            },
            get userId() {
              var o
              return (o = De.user()) == null ? void 0 : o.id
            },
          }),
        r
      )
      $n(() => {
        l(), t.remove()
      })
    })
  )
}
async function Zu() {
  Be.parseQuiz()
  const { css: e, fontCss: n } = await Hn()
  document.documentElement.appendChild(
    Vn("div", (i, l, o) => {
      o(e, n)
      const a = On(
        () =>
          I(Ru, {
            get quiz() {
              return Be.quiz()
            },
            get show() {
              return Pe().quizSolver
            },
            get accountStatus() {
              return De.status()
            },
            get userId() {
              var s
              return (s = De.user()) == null ? void 0 : s.id
            },
          }),
        l
      )
      $n(() => {
        a(), i.remove()
      })
    })
  )
  const t = Array.from(
      document.querySelectorAll(
        "table table table td > span input[id^='radioBtn']"
      )
    ),
    r = document.querySelector("input#btnSave")
  t.forEach((i, l) => {
    i.addEventListener("change", () => {
      var s, u, c
      const o = (s = Be.quiz()) == null ? void 0 : s.id,
        a =
          (c = (u = Be.quiz()) == null ? void 0 : u.options) == null
            ? void 0
            : c[l]
      i.checked &&
        o &&
        a &&
        ve(ke.Background, "80bb727de9886c711f86414c8bdb6143", o, a.id)
    })
  }),
    r == null ||
      r.addEventListener("click", () => {
        var o, a, s, u
        const i = t.findIndex((c) => c.checked)
        let l = ((o = De.user()) == null ? void 0 : o.id) ?? Yu()
        if (i !== -1) {
          const c = (a = Be.quiz()) == null ? void 0 : a.id,
            p =
              (u = (s = Be.quiz()) == null ? void 0 : s.options) == null
                ? void 0
                : u[i]
          c &&
            p &&
            l &&
            ve(
              ke.Background,
              "855d492c6d2643e19d6d561bfff96af6",
              c,
              p.id,
              l.toLowerCase()
            )
        }
      })
}
async function Gu() {
  const { css: e, fontCss: n } = await Hn()
  document.documentElement.appendChild(
    Vn("div", (t, r, i) => {
      i(e, n)
      const l = On(
        () =>
          I(Uu, {
            get show() {
              return Pe().gdbCopyPaste
            },
          }),
        r
      )
      $n(() => {
        l(), t.remove()
      })
    })
  )
}
function Yu() {
  var t
  const e = document.querySelector(".tblheadingblue, .m_tblheadingblue")
  if (!(e instanceof Element)) return
  const [n] =
    ((t = e.textContent) == null ? void 0 : t.trim().split(": ")) ?? []
  return n == null ? void 0 : n.trim()
}
