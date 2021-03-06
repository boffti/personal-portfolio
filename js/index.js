function initMap() {
    var t = new google.maps.LatLng(40.773328, -73.960088),
        e = {
            zoom: 14,
            center: t,
            mapTypeControl: !1,
            disableDefaultUI: !0,
            zoomControl: !0,
            scrollwheel: !1,
            styles: [{
                featureType: "water",
                stylers: [{
                    color: "#d8dee9"
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: "landscape",
                stylers: [{
                    color: "#eeeeee"
                }]
            }]
        },
        i = new google.maps.Map(document.getElementById("map"), e);
    new google.maps.Marker({
        position: t,
        map: i,
        title: "We are here!"
    })
}! function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (C, t) {
    "use strict";
    var e = [],
        T = C.document,
        n = Object.getPrototypeOf,
        a = e.slice,
        m = e.concat,
        l = e.push,
        r = e.indexOf,
        i = {},
        s = i.toString,
        f = i.hasOwnProperty,
        o = f.toString,
        u = o.call(Object),
        g = {};

    function v(t, e) {
        var i = (e = e || T).createElement("script");
        i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
    }
    var c = "3.2.1",
        E = function (t, e) {
            return new E.fn.init(t, e)
        },
        h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        d = /^-ms-/,
        p = /-([a-z])/g,
        y = function (t, e) {
            return e.toUpperCase()
        };

    function w(t) {
        var e = !!t && "length" in t && t.length,
            i = E.type(t);
        return "function" !== i && !E.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    E.fn = E.prototype = {
        jquery: c,
        constructor: E,
        length: 0,
        toArray: function () {
            return a.call(this)
        },
        get: function (t) {
            return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function (t) {
            var e = E.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function (t) {
            return E.each(this, t)
        },
        map: function (i) {
            return this.pushStack(E.map(this, function (t, e) {
                return i.call(t, e, t)
            }))
        },
        slice: function () {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= i && i < e ? [this[i]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: e.sort,
        splice: e.splice
    }, E.extend = E.fn.extend = function () {
        var t, e, i, n, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || E.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = o[e], o !== (n = t[e]) && (u && n && (E.isPlainObject(n) || (r = Array.isArray(n))) ? (s = r ? (r = !1, i && Array.isArray(i) ? i : []) : i && E.isPlainObject(i) ? i : {}, o[e] = E.extend(u, s, n)) : void 0 !== n && (o[e] = n));
        return o
    }, E.extend({
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isFunction: function (t) {
            return "function" === E.type(t)
        },
        isWindow: function (t) {
            return null != t && t === t.window
        },
        isNumeric: function (t) {
            var e = E.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function (t) {
            var e, i;
            return !(!t || "[object Object]" !== s.call(t) || (e = n(t)) && ("function" != typeof (i = f.call(e, "constructor") && e.constructor) || o.call(i) !== u))
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[s.call(t)] || "object" : typeof t
        },
        globalEval: function (t) {
            v(t)
        },
        camelCase: function (t) {
            return t.replace(d, "ms-").replace(p, y)
        },
        each: function (t, e) {
            var i, n = 0;
            if (w(t))
                for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n])) break;
            return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(h, "")
        },
        makeArray: function (t, e) {
            var i = e || [];
            return null != t && (w(Object(t)) ? E.merge(i, "string" == typeof t ? [t] : t) : l.call(i, t)), i
        },
        inArray: function (t, e, i) {
            return null == e ? -1 : r.call(e, t, i)
        },
        merge: function (t, e) {
            for (var i = +e.length, n = 0, r = t.length; n < i; n++) t[r++] = e[n];
            return t.length = r, t
        },
        grep: function (t, e, i) {
            for (var n = [], r = 0, s = t.length, o = !i; r < s; r++) !e(t[r], r) !== o && n.push(t[r]);
            return n
        },
        map: function (t, e, i) {
            var n, r, s = 0,
                o = [];
            if (w(t))
                for (n = t.length; s < n; s++) null != (r = e(t[s], s, i)) && o.push(r);
            else
                for (s in t) null != (r = e(t[s], s, i)) && o.push(r);
            return m.apply([], o)
        },
        guid: 1,
        proxy: function (t, e) {
            var i, n, r;
            if ("string" == typeof e && (i = t[e], e = t, t = i), E.isFunction(t)) return n = a.call(arguments, 2), (r = function () {
                return t.apply(e || this, n.concat(a.call(arguments)))
            }).guid = t.guid = t.guid || E.guid++, r
        },
        now: Date.now,
        support: g
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = e[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        i["[object " + e + "]"] = e.toLowerCase()
    });
    var b = function (i) {
        var t, p, b, s, r, f, h, m, x, l, u, _, C, o, T, g, a, c, v, E = "sizzle" + 1 * new Date,
            y = i.document,
            S = 0,
            n = 0,
            d = ot(),
            w = ot(),
            k = ot(),
            I = function (t, e) {
                return t === e && (u = !0), 0
            },
            z = {}.hasOwnProperty,
            e = [],
            L = e.pop,
            $ = e.push,
            j = e.push,
            A = e.slice,
            O = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e) return i;
                return -1
            },
            D = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            N = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + P + "*(" + N + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + P + "*\\]",
            q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            H = new RegExp(P + "+", "g"),
            R = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            F = new RegExp("^" + P + "*," + P + "*"),
            W = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            B = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
            V = new RegExp(q),
            U = new RegExp("^" + N + "$"),
            Q = {
                ID: new RegExp("^#(" + N + ")"),
                CLASS: new RegExp("^\\.(" + N + ")"),
                TAG: new RegExp("^(" + N + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + D + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            G = /^[^{]+\{\s*\[native \w/,
            X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            tt = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            it = function (t, e) {
                return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            nt = function () {
                _()
            },
            rt = yt(function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            j.apply(e = A.call(y.childNodes), y.childNodes), e[y.childNodes.length].nodeType
        } catch (t) {
            j = {
                apply: e.length ? function (t, e) {
                    $.apply(t, A.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }

        function st(t, e, i, n) {
            var r, s, o, a, l, u, c, h = e && e.ownerDocument,
                d = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return i;
            if (!n && ((e ? e.ownerDocument || e : y) !== C && _(e), e = e || C, T)) {
                if (11 !== d && (l = X.exec(t)))
                    if (r = l[1]) {
                        if (9 === d) {
                            if (!(o = e.getElementById(r))) return i;
                            if (o.id === r) return i.push(o), i
                        } else if (h && (o = h.getElementById(r)) && v(e, o) && o.id === r) return i.push(o), i
                    } else {
                        if (l[2]) return j.apply(i, e.getElementsByTagName(t)), i;
                        if ((r = l[3]) && p.getElementsByClassName && e.getElementsByClassName) return j.apply(i, e.getElementsByClassName(r)), i
                    } if (p.qsa && !k[t + " "] && (!g || !g.test(t))) {
                    if (1 !== d) h = e, c = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(et, it) : e.setAttribute("id", a = E), s = (u = f(t)).length; s--;) u[s] = "#" + a + " " + vt(u[s]);
                        c = u.join(","), h = K.test(t) && mt(e.parentNode) || e
                    }
                    if (c) try {
                        return j.apply(i, h.querySelectorAll(c)), i
                    } catch (t) {} finally {
                        a === E && e.removeAttribute("id")
                    }
                }
            }
            return m(t.replace(R, "$1"), e, i, n)
        }

        function ot() {
            var n = [];
            return function t(e, i) {
                return n.push(e + " ") > b.cacheLength && delete t[n.shift()], t[e + " "] = i
            }
        }

        function at(t) {
            return t[E] = !0, t
        }

        function lt(t) {
            var e = C.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ut(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) b.attrHandle[i[n]] = e
        }

        function ct(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function ht(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function dt(i) {
            return function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === i
            }
        }

        function pt(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && rt(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ft(o) {
            return at(function (s) {
                return s = +s, at(function (t, e) {
                    for (var i, n = o([], t.length, s), r = n.length; r--;) t[i = n[r]] && (t[i] = !(e[i] = t[i]))
                })
            })
        }

        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (t in p = st.support = {}, r = st.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, _ = st.setDocument = function (t) {
                var e, i, n = t ? t.ownerDocument || t : y;
                return n !== C && 9 === n.nodeType && n.documentElement && (o = (C = n).documentElement, T = !r(C), y !== C && (i = C.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", nt, !1) : i.attachEvent && i.attachEvent("onunload", nt)), p.attributes = lt(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), p.getElementsByTagName = lt(function (t) {
                    return t.appendChild(C.createComment("")), !t.getElementsByTagName("*").length
                }), p.getElementsByClassName = G.test(C.getElementsByClassName), p.getById = lt(function (t) {
                    return o.appendChild(t).id = E, !C.getElementsByName || !C.getElementsByName(E).length
                }), p.getById ? (b.filter.ID = function (t) {
                    var e = t.replace(J, tt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }, b.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && T) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }) : (b.filter.ID = function (t) {
                    var i = t.replace(J, tt);
                    return function (t) {
                        var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return e && e.value === i
                    }
                }, b.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && T) {
                        var i, n, r, s = e.getElementById(t);
                        if (s) {
                            if ((i = s.getAttributeNode("id")) && i.value === t) return [s];
                            for (r = e.getElementsByName(t), n = 0; s = r[n++];)
                                if ((i = s.getAttributeNode("id")) && i.value === t) return [s]
                        }
                        return []
                    }
                }), b.find.TAG = p.getElementsByTagName ? function (t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : p.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var i, n = [],
                        r = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" !== t) return s;
                    for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }, b.find.CLASS = p.getElementsByClassName && function (t, e) {
                    if (void 0 !== e.getElementsByClassName && T) return e.getElementsByClassName(t)
                }, a = [], g = [], (p.qsa = G.test(C.querySelectorAll)) && (lt(function (t) {
                    o.appendChild(t).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + D + ")"), t.querySelectorAll("[id~=" + E + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + E + "+*").length || g.push(".#.+[+~]")
                }), lt(function (t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = C.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + P + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), o.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                })), (p.matchesSelector = G.test(c = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && lt(function (t) {
                    p.disconnectedMatch = c.call(t, "*"), c.call(t, "[s!='']:x"), a.push("!=", q)
                }), g = g.length && new RegExp(g.join("|")), a = a.length && new RegExp(a.join("|")), e = G.test(o.compareDocumentPosition), v = e || G.test(o.contains) ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, I = e ? function (t, e) {
                    if (t === e) return u = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !p.sortDetached && e.compareDocumentPosition(t) === i ? t === C || t.ownerDocument === y && v(y, t) ? -1 : e === C || e.ownerDocument === y && v(y, e) ? 1 : l ? O(l, t) - O(l, e) : 0 : 4 & i ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return u = !0, 0;
                    var i, n = 0,
                        r = t.parentNode,
                        s = e.parentNode,
                        o = [t],
                        a = [e];
                    if (!r || !s) return t === C ? -1 : e === C ? 1 : r ? -1 : s ? 1 : l ? O(l, t) - O(l, e) : 0;
                    if (r === s) return ct(t, e);
                    for (i = t; i = i.parentNode;) o.unshift(i);
                    for (i = e; i = i.parentNode;) a.unshift(i);
                    for (; o[n] === a[n];) n++;
                    return n ? ct(o[n], a[n]) : o[n] === y ? -1 : a[n] === y ? 1 : 0
                }), C
            }, st.matches = function (t, e) {
                return st(t, null, null, e)
            }, st.matchesSelector = function (t, e) {
                if ((t.ownerDocument || t) !== C && _(t), e = e.replace(B, "='$1']"), p.matchesSelector && T && !k[e + " "] && (!a || !a.test(e)) && (!g || !g.test(e))) try {
                    var i = c.call(t, e);
                    if (i || p.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return 0 < st(e, C, null, [t]).length
            }, st.contains = function (t, e) {
                return (t.ownerDocument || t) !== C && _(t), v(t, e)
            }, st.attr = function (t, e) {
                (t.ownerDocument || t) !== C && _(t);
                var i = b.attrHandle[e.toLowerCase()],
                    n = i && z.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !T) : void 0;
                return void 0 !== n ? n : p.attributes || !T ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, st.escape = function (t) {
                return (t + "").replace(et, it)
            }, st.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, st.uniqueSort = function (t) {
                var e, i = [],
                    n = 0,
                    r = 0;
                if (u = !p.detectDuplicates, l = !p.sortStable && t.slice(0), t.sort(I), u) {
                    for (; e = t[r++];) e === t[r] && (n = i.push(r));
                    for (; n--;) t.splice(i[n], 1)
                }
                return l = null, t
            }, s = st.getText = function (t) {
                var e, i = "",
                    n = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += s(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[n++];) i += s(e);
                return i
            }, (b = st.selectors = {
                cacheLength: 50,
                createPseudo: at,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, i = !t[6] && t[2];
                        return Q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && V.test(i) && (e = f(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(J, tt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = d[t + " "];
                        return e || (e = new RegExp("(^|" + P + ")" + t + "(" + P + "|$)")) && d(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (i, n, r) {
                        return function (t) {
                            var e = st.attr(t, i);
                            return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(H, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function (f, t, e, m, g) {
                        var v = "nth" !== f.slice(0, 3),
                            y = "last" !== f.slice(-4),
                            w = "of-type" === t;
                        return 1 === m && 0 === g ? function (t) {
                            return !!t.parentNode
                        } : function (t, e, i) {
                            var n, r, s, o, a, l, u = v !== y ? "nextSibling" : "previousSibling",
                                c = t.parentNode,
                                h = w && t.nodeName.toLowerCase(),
                                d = !i && !w,
                                p = !1;
                            if (c) {
                                if (v) {
                                    for (; u;) {
                                        for (o = t; o = o[u];)
                                            if (w ? o.nodeName.toLowerCase() === h : 1 === o.nodeType) return !1;
                                        l = u = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? c.firstChild : c.lastChild], y && d) {
                                    for (p = (a = (n = (r = (s = (o = c)[E] || (o[E] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] || [])[0] === S && n[1]) && n[2], o = a && c.childNodes[a]; o = ++a && o && o[u] || (p = a = 0) || l.pop();)
                                        if (1 === o.nodeType && ++p && o === t) {
                                            r[f] = [S, a, p];
                                            break
                                        }
                                } else if (d && (p = a = (n = (r = (s = (o = t)[E] || (o[E] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] || [])[0] === S && n[1]), !1 === p)
                                    for (;
                                        (o = ++a && o && o[u] || (p = a = 0) || l.pop()) && ((w ? o.nodeName.toLowerCase() !== h : 1 !== o.nodeType) || !++p || (d && ((r = (s = o[E] || (o[E] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] = [S, p]), o !== t)););
                                return (p -= g) === m || p % m == 0 && 0 <= p / m
                            }
                        }
                    },
                    PSEUDO: function (t, s) {
                        var e, o = b.pseudos[t] || b.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                        return o[E] ? o(s) : 1 < o.length ? (e = [t, t, "", s], b.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function (t, e) {
                            for (var i, n = o(t, s), r = n.length; r--;) t[i = O(t, n[r])] = !(e[i] = n[r])
                        }) : function (t) {
                            return o(t, 0, e)
                        }) : o
                    }
                },
                pseudos: {
                    not: at(function (t) {
                        var n = [],
                            r = [],
                            a = h(t.replace(R, "$1"));
                        return a[E] ? at(function (t, e, i, n) {
                            for (var r, s = a(t, null, n, []), o = t.length; o--;)(r = s[o]) && (t[o] = !(e[o] = r))
                        }) : function (t, e, i) {
                            return n[0] = t, a(n, null, i, r), n[0] = null, !r.pop()
                        }
                    }),
                    has: at(function (e) {
                        return function (t) {
                            return 0 < st(e, t).length
                        }
                    }),
                    contains: at(function (e) {
                        return e = e.replace(J, tt),
                            function (t) {
                                return -1 < (t.textContent || t.innerText || s(t)).indexOf(e)
                            }
                    }),
                    lang: at(function (i) {
                        return U.test(i || "") || st.error("unsupported lang: " + i), i = i.replace(J, tt).toLowerCase(),
                            function (t) {
                                var e;
                                do {
                                    if (e = T ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var e = i.location && i.location.hash;
                        return e && e.slice(1) === t.id
                    },
                    root: function (t) {
                        return t === o
                    },
                    focus: function (t) {
                        return t === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: pt(!1),
                    disabled: pt(!0),
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !b.pseudos.empty(t)
                    },
                    header: function (t) {
                        return Z.test(t.nodeName)
                    },
                    input: function (t) {
                        return Y.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: ft(function () {
                        return [0]
                    }),
                    last: ft(function (t, e) {
                        return [e - 1]
                    }),
                    eq: ft(function (t, e, i) {
                        return [i < 0 ? i + e : i]
                    }),
                    even: ft(function (t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t
                    }),
                    odd: ft(function (t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t
                    }),
                    lt: ft(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; 0 <= --n;) t.push(n);
                        return t
                    }),
                    gt: ft(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[t] = ht(t);
        for (t in {
                submit: !0,
                reset: !0
            }) b.pseudos[t] = dt(t);

        function gt() {}

        function vt(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function yt(a, t, e) {
            var l = t.dir,
                u = t.next,
                c = u || l,
                h = e && "parentNode" === c,
                d = n++;
            return t.first ? function (t, e, i) {
                for (; t = t[l];)
                    if (1 === t.nodeType || h) return a(t, e, i);
                return !1
            } : function (t, e, i) {
                var n, r, s, o = [S, d];
                if (i) {
                    for (; t = t[l];)
                        if ((1 === t.nodeType || h) && a(t, e, i)) return !0
                } else
                    for (; t = t[l];)
                        if (1 === t.nodeType || h)
                            if (r = (s = t[E] || (t[E] = {}))[t.uniqueID] || (s[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[l] || t;
                            else {
                                if ((n = r[c]) && n[0] === S && n[1] === d) return o[2] = n[2];
                                if ((r[c] = o)[2] = a(t, e, i)) return !0
                            } return !1
            }
        }

        function wt(r) {
            return 1 < r.length ? function (t, e, i) {
                for (var n = r.length; n--;)
                    if (!r[n](t, e, i)) return !1;
                return !0
            } : r[0]
        }

        function bt(t, e, i, n, r) {
            for (var s, o = [], a = 0, l = t.length, u = null != e; a < l; a++)(s = t[a]) && (i && !i(s, n, r) || (o.push(s), u && e.push(a)));
            return o
        }

        function xt(p, f, m, g, v, t) {
            return g && !g[E] && (g = xt(g)), v && !v[E] && (v = xt(v, t)), at(function (t, e, i, n) {
                var r, s, o, a = [],
                    l = [],
                    u = e.length,
                    c = t || function (t, e, i) {
                        for (var n = 0, r = e.length; n < r; n++) st(t, e[n], i);
                        return i
                    }(f || "*", i.nodeType ? [i] : i, []),
                    h = !p || !t && f ? c : bt(c, a, p, i, n),
                    d = m ? v || (t ? p : u || g) ? [] : e : h;
                if (m && m(h, d, i, n), g)
                    for (r = bt(d, l), g(r, [], i, n), s = r.length; s--;)(o = r[s]) && (d[l[s]] = !(h[l[s]] = o));
                if (t) {
                    if (v || p) {
                        if (v) {
                            for (r = [], s = d.length; s--;)(o = d[s]) && r.push(h[s] = o);
                            v(null, d = [], r, n)
                        }
                        for (s = d.length; s--;)(o = d[s]) && -1 < (r = v ? O(t, o) : a[s]) && (t[r] = !(e[r] = o))
                    }
                } else d = bt(d === e ? d.splice(u, d.length) : d), v ? v(null, e, d, n) : j.apply(e, d)
            })
        }

        function _t(t) {
            for (var r, e, i, n = t.length, s = b.relative[t[0].type], o = s || b.relative[" "], a = s ? 1 : 0, l = yt(function (t) {
                    return t === r
                }, o, !0), u = yt(function (t) {
                    return -1 < O(r, t)
                }, o, !0), c = [function (t, e, i) {
                    var n = !s && (i || e !== x) || ((r = e).nodeType ? l(t, e, i) : u(t, e, i));
                    return r = null, n
                }]; a < n; a++)
                if (e = b.relative[t[a].type]) c = [yt(wt(c), e)];
                else {
                    if ((e = b.filter[t[a].type].apply(null, t[a].matches))[E]) {
                        for (i = ++a; i < n && !b.relative[t[i].type]; i++);
                        return xt(1 < a && wt(c), 1 < a && vt(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(R, "$1"), e, a < i && _t(t.slice(a, i)), i < n && _t(t = t.slice(i)), i < n && vt(t))
                    }
                    c.push(e)
                } return wt(c)
        }
        return gt.prototype = b.filters = b.pseudos, b.setFilters = new gt, f = st.tokenize = function (t, e) {
            var i, n, r, s, o, a, l, u = w[t + " "];
            if (u) return e ? 0 : u.slice(0);
            for (o = t, a = [], l = b.preFilter; o;) {
                for (s in i && !(n = F.exec(o)) || (n && (o = o.slice(n[0].length) || o), a.push(r = [])), i = !1, (n = W.exec(o)) && (i = n.shift(), r.push({
                        value: i,
                        type: n[0].replace(R, " ")
                    }), o = o.slice(i.length)), b.filter) !(n = Q[s].exec(o)) || l[s] && !(n = l[s](n)) || (i = n.shift(), r.push({
                    value: i,
                    type: s,
                    matches: n
                }), o = o.slice(i.length));
                if (!i) break
            }
            return e ? o.length : o ? st.error(t) : w(t, a).slice(0)
        }, h = st.compile = function (t, e) {
            var i, g, v, y, w, n, r = [],
                s = [],
                o = k[t + " "];
            if (!o) {
                for (e || (e = f(t)), i = e.length; i--;)(o = _t(e[i]))[E] ? r.push(o) : s.push(o);
                (o = k(t, (g = s, y = 0 < (v = r).length, w = 0 < g.length, n = function (t, e, i, n, r) {
                    var s, o, a, l = 0,
                        u = "0",
                        c = t && [],
                        h = [],
                        d = x,
                        p = t || w && b.find.TAG("*", r),
                        f = S += null == d ? 1 : Math.random() || .1,
                        m = p.length;
                    for (r && (x = e === C || e || r); u !== m && null != (s = p[u]); u++) {
                        if (w && s) {
                            for (o = 0, e || s.ownerDocument === C || (_(s), i = !T); a = g[o++];)
                                if (a(s, e || C, i)) {
                                    n.push(s);
                                    break
                                } r && (S = f)
                        }
                        y && ((s = !a && s) && l--, t && c.push(s))
                    }
                    if (l += u, y && u !== l) {
                        for (o = 0; a = v[o++];) a(c, h, e, i);
                        if (t) {
                            if (0 < l)
                                for (; u--;) c[u] || h[u] || (h[u] = L.call(n));
                            h = bt(h)
                        }
                        j.apply(n, h), r && !t && 0 < h.length && 1 < l + v.length && st.uniqueSort(n)
                    }
                    return r && (S = f, x = d), c
                }, y ? at(n) : n))).selector = t
            }
            return o
        }, m = st.select = function (t, e, i, n) {
            var r, s, o, a, l, u = "function" == typeof t && t,
                c = !n && f(t = u.selector || t);
            if (i = i || [], 1 === c.length) {
                if (2 < (s = c[0] = c[0].slice(0)).length && "ID" === (o = s[0]).type && 9 === e.nodeType && T && b.relative[s[1].type]) {
                    if (!(e = (b.find.ID(o.matches[0].replace(J, tt), e) || [])[0])) return i;
                    u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (r = Q.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !b.relative[a = o.type]);)
                    if ((l = b.find[a]) && (n = l(o.matches[0].replace(J, tt), K.test(s[0].type) && mt(e.parentNode) || e))) {
                        if (s.splice(r, 1), !(t = n.length && vt(s))) return j.apply(i, n), i;
                        break
                    }
            }
            return (u || h(t, c))(n, e, !T, i, !e || K.test(t) && mt(e.parentNode) || e), i
        }, p.sortStable = E.split("").sort(I).join("") === E, p.detectDuplicates = !!u, _(), p.sortDetached = lt(function (t) {
            return 1 & t.compareDocumentPosition(C.createElement("fieldset"))
        }), lt(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || ut("type|href|height|width", function (t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), p.attributes && lt(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || ut("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), lt(function (t) {
            return null == t.getAttribute("disabled")
        }) || ut(D, function (t, e, i) {
            var n;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), st
    }(C);
    E.find = b, E.expr = b.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = b.uniqueSort, E.text = b.getText, E.isXMLDoc = b.isXML, E.contains = b.contains, E.escapeSelector = b.escape;
    var x = function (t, e, i) {
            for (var n = [], r = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && E(t).is(i)) break;
                    n.push(t)
                } return n
        },
        _ = function (t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        S = E.expr.match.needsContext;

    function k(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        z = /^.[^:#\[\.,]*$/;

    function L(t, i, n) {
        return E.isFunction(i) ? E.grep(t, function (t, e) {
            return !!i.call(t, e, t) !== n
        }) : i.nodeType ? E.grep(t, function (t) {
            return t === i !== n
        }) : "string" != typeof i ? E.grep(t, function (t) {
            return -1 < r.call(i, t) !== n
        }) : z.test(i) ? E.filter(i, t, n) : (i = E.filter(i, t), E.grep(t, function (t) {
            return -1 < r.call(i, t) !== n && 1 === t.nodeType
        }))
    }
    E.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? E.find.matchesSelector(n, t) ? [n] : [] : E.find.matches(t, E.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, E.fn.extend({
        find: function (t) {
            var e, i, n = this.length,
                r = this;
            if ("string" != typeof t) return this.pushStack(E(t).filter(function () {
                for (e = 0; e < n; e++)
                    if (E.contains(r[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) E.find(t, r[e], i);
            return 1 < n ? E.uniqueSort(i) : i
        },
        filter: function (t) {
            return this.pushStack(L(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(L(this, t || [], !0))
        },
        is: function (t) {
            return !!L(this, "string" == typeof t && S.test(t) ? E(t) : t || [], !1).length
        }
    });
    var $, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function (t, e, i) {
        var n, r;
        if (!t) return this;
        if (i = i || $, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : E.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(E) : E.makeArray(t, this);
        if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : j.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
        if (n[1]) {
            if (e = e instanceof E ? e[0] : e, E.merge(this, E.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : T, !0)), I.test(n[1]) && E.isPlainObject(e))
                for (n in e) E.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
            return this
        }
        return (r = T.getElementById(n[2])) && (this[0] = r, this.length = 1), this
    }).prototype = E.fn, $ = E(T);
    var A = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function D(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    E.fn.extend({
        has: function (t) {
            var e = E(t, this),
                i = e.length;
            return this.filter(function () {
                for (var t = 0; t < i; t++)
                    if (E.contains(this, e[t])) return !0
            })
        },
        closest: function (t, e) {
            var i, n = 0,
                r = this.length,
                s = [],
                o = "string" != typeof t && E(t);
            if (!S.test(t))
                for (; n < r; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (o ? -1 < o.index(i) : 1 === i.nodeType && E.find.matchesSelector(i, t))) {
                            s.push(i);
                            break
                        } return this.pushStack(1 < s.length ? E.uniqueSort(s) : s)
        },
        index: function (t) {
            return t ? "string" == typeof t ? r.call(E(t), this[0]) : r.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), E.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return x(t, "parentNode")
        },
        parentsUntil: function (t, e, i) {
            return x(t, "parentNode", i)
        },
        next: function (t) {
            return D(t, "nextSibling")
        },
        prev: function (t) {
            return D(t, "previousSibling")
        },
        nextAll: function (t) {
            return x(t, "nextSibling")
        },
        prevAll: function (t) {
            return x(t, "previousSibling")
        },
        nextUntil: function (t, e, i) {
            return x(t, "nextSibling", i)
        },
        prevUntil: function (t, e, i) {
            return x(t, "previousSibling", i)
        },
        siblings: function (t) {
            return _((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return _(t.firstChild)
        },
        contents: function (t) {
            return k(t, "iframe") ? t.contentDocument : (k(t, "template") && (t = t.content || t), E.merge([], t.childNodes))
        }
    }, function (n, r) {
        E.fn[n] = function (t, e) {
            var i = E.map(this, r, t);
            return "Until" !== n.slice(-5) && (e = t), e && "string" == typeof e && (i = E.filter(e, i)), 1 < this.length && (O[n] || E.uniqueSort(i), A.test(n) && i.reverse()), this.pushStack(i)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function N(t) {
        return t
    }

    function M(t) {
        throw t
    }

    function q(t, e, i, n) {
        var r;
        try {
            t && E.isFunction(r = t.promise) ? r.call(t).done(e).fail(i) : t && E.isFunction(r = t.then) ? r.call(t, e, i) : e.apply(void 0, [t].slice(n))
        } catch (t) {
            i.apply(void 0, [t])
        }
    }
    E.Callbacks = function (n) {
        var t, i;
        n = "string" == typeof n ? (t = n, i = {}, E.each(t.match(P) || [], function (t, e) {
            i[e] = !0
        }), i) : E.extend({}, n);
        var r, e, s, o, a = [],
            l = [],
            u = -1,
            c = function () {
                for (o = o || n.once, s = r = !0; l.length; u = -1)
                    for (e = l.shift(); ++u < a.length;) !1 === a[u].apply(e[0], e[1]) && n.stopOnFalse && (u = a.length, e = !1);
                n.memory || (e = !1), r = !1, o && (a = e ? [] : "")
            },
            h = {
                add: function () {
                    return a && (e && !r && (u = a.length - 1, l.push(e)), function i(t) {
                        E.each(t, function (t, e) {
                            E.isFunction(e) ? n.unique && h.has(e) || a.push(e) : e && e.length && "string" !== E.type(e) && i(e)
                        })
                    }(arguments), e && !r && c()), this
                },
                remove: function () {
                    return E.each(arguments, function (t, e) {
                        for (var i; - 1 < (i = E.inArray(e, a, i));) a.splice(i, 1), i <= u && u--
                    }), this
                },
                has: function (t) {
                    return t ? -1 < E.inArray(t, a) : 0 < a.length
                },
                empty: function () {
                    return a && (a = []), this
                },
                disable: function () {
                    return o = l = [], a = e = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return o = l = [], e || r || (a = e = ""), this
                },
                locked: function () {
                    return !!o
                },
                fireWith: function (t, e) {
                    return o || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), r || c()), this
                },
                fire: function () {
                    return h.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!s
                }
            };
        return h
    }, E.extend({
        Deferred: function (t) {
            var s = [
                    ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                    ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                o = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function (t) {
                        return o.then(null, t)
                    },
                    pipe: function () {
                        var r = arguments;
                        return E.Deferred(function (n) {
                            E.each(s, function (t, e) {
                                var i = E.isFunction(r[e[4]]) && r[e[4]];
                                a[e[1]](function () {
                                    var t = i && i.apply(this, arguments);
                                    t && E.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[e[0] + "With"](this, i ? [t] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    then: function (e, i, n) {
                        var l = 0;

                        function u(r, s, o, a) {
                            return function () {
                                var i = this,
                                    n = arguments,
                                    t = function () {
                                        var t, e;
                                        if (!(r < l)) {
                                            if ((t = o.apply(i, n)) === s.promise()) throw new TypeError("Thenable self-resolution");
                                            e = t && ("object" == typeof t || "function" == typeof t) && t.then, E.isFunction(e) ? a ? e.call(t, u(l, s, N, a), u(l, s, M, a)) : (l++, e.call(t, u(l, s, N, a), u(l, s, M, a), u(l, s, N, s.notifyWith))) : (o !== N && (i = void 0, n = [t]), (a || s.resolveWith)(i, n))
                                        }
                                    },
                                    e = a ? t : function () {
                                        try {
                                            t()
                                        } catch (t) {
                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(t, e.stackTrace), l <= r + 1 && (o !== M && (i = void 0, n = [t]), s.rejectWith(i, n))
                                        }
                                    };
                                r ? e() : (E.Deferred.getStackHook && (e.stackTrace = E.Deferred.getStackHook()), C.setTimeout(e))
                            }
                        }
                        return E.Deferred(function (t) {
                            s[0][3].add(u(0, t, E.isFunction(n) ? n : N, t.notifyWith)), s[1][3].add(u(0, t, E.isFunction(e) ? e : N)), s[2][3].add(u(0, t, E.isFunction(i) ? i : M))
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? E.extend(t, o) : o
                    }
                },
                a = {};
            return E.each(s, function (t, e) {
                var i = e[2],
                    n = e[5];
                o[e[1]] = i.add, n && i.add(function () {
                    r = n
                }, s[3 - t][2].disable, s[0][2].lock), i.add(e[3].fire), a[e[0]] = function () {
                    return a[e[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[e[0] + "With"] = i.fireWith
            }), o.promise(a), t && t.call(a, a), a
        },
        when: function (t) {
            var i = arguments.length,
                e = i,
                n = Array(e),
                r = a.call(arguments),
                s = E.Deferred(),
                o = function (e) {
                    return function (t) {
                        n[e] = this, r[e] = 1 < arguments.length ? a.call(arguments) : t, --i || s.resolveWith(n, r)
                    }
                };
            if (i <= 1 && (q(t, s.done(o(e)).resolve, s.reject, !i), "pending" === s.state() || E.isFunction(r[e] && r[e].then))) return s.then();
            for (; e--;) q(r[e], o(e), s.reject);
            return s.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function (t, e) {
        C.console && C.console.warn && t && H.test(t.name) && C.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
    }, E.readyException = function (t) {
        C.setTimeout(function () {
            throw t
        })
    };
    var R = E.Deferred();

    function F() {
        T.removeEventListener("DOMContentLoaded", F), C.removeEventListener("load", F), E.ready()
    }
    E.fn.ready = function (t) {
        return R.then(t).catch(function (t) {
            E.readyException(t)
        }), this
    }, E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (t) {
            (!0 === t ? --E.readyWait : E.isReady) || ((E.isReady = !0) !== t && 0 < --E.readyWait || R.resolveWith(T, [E]))
        }
    }), E.ready.then = R.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? C.setTimeout(E.ready) : (T.addEventListener("DOMContentLoaded", F), C.addEventListener("load", F));
    var W = function (t, e, i, n, r, s, o) {
            var a = 0,
                l = t.length,
                u = null == i;
            if ("object" === E.type(i))
                for (a in r = !0, i) W(t, e, a, i[a], !0, s, o);
            else if (void 0 !== n && (r = !0, E.isFunction(n) || (o = !0), u && (e = o ? (e.call(t, n), null) : (u = e, function (t, e, i) {
                    return u.call(E(t), i)
                })), e))
                for (; a < l; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
            return r ? t : u ? e.call(t) : l ? e(t[0], i) : s
        },
        B = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

    function V() {
        this.expando = E.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, B(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function (t, e, i) {
            var n, r = this.cache(t);
            if ("string" == typeof e) r[E.camelCase(e)] = i;
            else
                for (n in e) r[E.camelCase(n)] = e[n];
            return r
        },
        get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][E.camelCase(e)]
        },
        access: function (t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function (t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    i = (e = Array.isArray(e) ? e.map(E.camelCase) : (e = E.camelCase(e)) in n ? [e] : e.match(P) || []).length;
                    for (; i--;) delete n[e[i]]
                }(void 0 === e || E.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !E.isEmptyObject(e)
        }
    };
    var U = new V,
        Q = new V,
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function G(t, e, i) {
        var n, r;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(Z, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Y.test(r) ? JSON.parse(r) : r)
                } catch (t) {}
                Q.set(t, e, i)
            } else i = void 0;
        return i
    }
    E.extend({
        hasData: function (t) {
            return Q.hasData(t) || U.hasData(t)
        },
        data: function (t, e, i) {
            return Q.access(t, e, i)
        },
        removeData: function (t, e) {
            Q.remove(t, e)
        },
        _data: function (t, e, i) {
            return U.access(t, e, i)
        },
        _removeData: function (t, e) {
            U.remove(t, e)
        }
    }), E.fn.extend({
        data: function (i, t) {
            var e, n, r, s = this[0],
                o = s && s.attributes;
            if (void 0 !== i) return "object" == typeof i ? this.each(function () {
                Q.set(this, i)
            }) : W(this, function (t) {
                var e;
                if (s && void 0 === t) {
                    if (void 0 !== (e = Q.get(s, i))) return e;
                    if (void 0 !== (e = G(s, i))) return e
                } else this.each(function () {
                    Q.set(this, i, t)
                })
            }, null, t, 1 < arguments.length, null, !0);
            if (this.length && (r = Q.get(s), 1 === s.nodeType && !U.get(s, "hasDataAttrs"))) {
                for (e = o.length; e--;) o[e] && (0 === (n = o[e].name).indexOf("data-") && (n = E.camelCase(n.slice(5)), G(s, n, r[n])));
                U.set(s, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function (t) {
            return this.each(function () {
                Q.remove(this, t)
            })
        }
    }), E.extend({
        queue: function (t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = U.get(t, e), i && (!n || Array.isArray(i) ? n = U.access(t, e, E.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var i = E.queue(t, e),
                n = i.length,
                r = i.shift(),
                s = E._queueHooks(t, e);
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, function () {
                E.dequeue(t, e)
            }, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return U.get(t, i) || U.access(t, i, {
                empty: E.Callbacks("once memory").add(function () {
                    U.remove(t, [e + "queue", i])
                })
            })
        }
    }), E.fn.extend({
        queue: function (e, i) {
            var t = 2;
            return "string" != typeof e && (i = e, e = "fx", t--), arguments.length < t ? E.queue(this[0], e) : void 0 === i ? this : this.each(function () {
                var t = E.queue(this, e, i);
                E._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && E.dequeue(this, e)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                E.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var i, n = 1,
                r = E.Deferred(),
                s = this,
                o = this.length,
                a = function () {
                    --n || r.resolveWith(s, [s])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(i = U.get(s[o], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        K = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
        J = ["Top", "Right", "Bottom", "Left"],
        tt = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && E.contains(t.ownerDocument, t) && "none" === E.css(t, "display")
        },
        et = function (t, e, i, n) {
            var r, s, o = {};
            for (s in e) o[s] = t.style[s], t.style[s] = e[s];
            for (s in r = i.apply(t, n || []), e) t.style[s] = o[s];
            return r
        };

    function it(t, e, i, n) {
        var r, s = 1,
            o = 20,
            a = n ? function () {
                return n.cur()
            } : function () {
                return E.css(t, e, "")
            },
            l = a(),
            u = i && i[3] || (E.cssNumber[e] ? "" : "px"),
            c = (E.cssNumber[e] || "px" !== u && +l) && K.exec(E.css(t, e));
        if (c && c[3] !== u)
            for (u = u || c[3], i = i || [], c = +l || 1; c /= s = s || ".5", E.style(t, e, c + u), s !== (s = a() / l) && 1 !== s && --o;);
        return i && (c = +c || +l || 0, r = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = c, n.end = r)), r
    }
    var nt = {};

    function rt(t, e) {
        for (var i, n, r = [], s = 0, o = t.length; s < o; s++)(n = t[s]).style && (i = n.style.display, e ? ("none" === i && (r[s] = U.get(n, "display") || null, r[s] || (n.style.display = "")), "" === n.style.display && tt(n) && (r[s] = (h = u = l = void 0, u = (a = n).ownerDocument, c = a.nodeName, (h = nt[c]) || (l = u.body.appendChild(u.createElement(c)), h = E.css(l, "display"), l.parentNode.removeChild(l), "none" === h && (h = "block"), nt[c] = h)))) : "none" !== i && (r[s] = "none", U.set(n, "display", i)));
        var a, l, u, c, h;
        for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]);
        return t
    }
    E.fn.extend({
        show: function () {
            return rt(this, !0)
        },
        hide: function () {
            return rt(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                tt(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var st = /^(?:checkbox|radio)$/i,
        ot = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        at = /^$|\/(?:java|ecma)script/i,
        lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ut(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && k(t, e) ? E.merge([t], i) : i
    }

    function ct(t, e) {
        for (var i = 0, n = t.length; i < n; i++) U.set(t[i], "globalEval", !e || U.get(e[i], "globalEval"))
    }
    lt.optgroup = lt.option, lt.tbody = lt.tfoot = lt.colgroup = lt.caption = lt.thead, lt.th = lt.td;
    var ht, dt, pt = /<|&#?\w+;/;

    function ft(t, e, i, n, r) {
        for (var s, o, a, l, u, c, h = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
            if ((s = t[p]) || 0 === s)
                if ("object" === E.type(s)) E.merge(d, s.nodeType ? [s] : s);
                else if (pt.test(s)) {
            for (o = o || h.appendChild(e.createElement("div")), a = (ot.exec(s) || ["", ""])[1].toLowerCase(), l = lt[a] || lt._default, o.innerHTML = l[1] + E.htmlPrefilter(s) + l[2], c = l[0]; c--;) o = o.lastChild;
            E.merge(d, o.childNodes), (o = h.firstChild).textContent = ""
        } else d.push(e.createTextNode(s));
        for (h.textContent = "", p = 0; s = d[p++];)
            if (n && -1 < E.inArray(s, n)) r && r.push(s);
            else if (u = E.contains(s.ownerDocument, s), o = ut(h.appendChild(s), "script"), u && ct(o), i)
            for (c = 0; s = o[c++];) at.test(s.type || "") && i.push(s);
        return h
    }
    ht = T.createDocumentFragment().appendChild(T.createElement("div")), (dt = T.createElement("input")).setAttribute("type", "radio"), dt.setAttribute("checked", "checked"), dt.setAttribute("name", "t"), ht.appendChild(dt), g.checkClone = ht.cloneNode(!0).cloneNode(!0).lastChild.checked, ht.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!ht.cloneNode(!0).lastChild.defaultValue;
    var mt = T.documentElement,
        gt = /^key/,
        vt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        yt = /^([^.]*)(?:\.(.+)|)/;

    function wt() {
        return !0
    }

    function bt() {
        return !1
    }

    function xt() {
        try {
            return T.activeElement
        } catch (t) {}
    }

    function _t(t, e, i, n, r, s) {
        var o, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), e) _t(t, a, i, n, e[a], s);
            return t
        }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = bt;
        else if (!r) return t;
        return 1 === s && (o = r, (r = function (t) {
            return E().off(t), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = E.guid++)), t.each(function () {
            E.event.add(this, e, r, n, i)
        })
    }
    E.event = {
        global: {},
        add: function (e, t, i, n, r) {
            var s, o, a, l, u, c, h, d, p, f, m, g = U.get(e);
            if (g)
                for (i.handler && (i = (s = i).handler, r = s.selector), r && E.find.matchesSelector(mt, r), i.guid || (i.guid = E.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function (t) {
                        return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(P) || [""]).length; u--;) p = m = (a = yt.exec(t[u]) || [])[1], f = (a[2] || "").split(".").sort(), p && (h = E.event.special[p] || {}, p = (r ? h.delegateType : h.bindType) || p, h = E.event.special[p] || {}, c = E.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && E.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, s), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(e, n, f, o) || e.addEventListener && e.addEventListener(p, o)), h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), E.event.global[p] = !0)
        },
        remove: function (t, e, i, n, r) {
            var s, o, a, l, u, c, h, d, p, f, m, g = U.hasData(t) && U.get(t);
            if (g && (l = g.events)) {
                for (u = (e = (e || "").match(P) || [""]).length; u--;)
                    if (p = m = (a = yt.exec(e[u]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                        for (h = E.event.special[p] || {}, d = l[p = (n ? h.delegateType : h.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = d.length; s--;) c = d[s], !r && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (d.splice(s, 1), c.selector && d.delegateCount--, h.remove && h.remove.call(t, c));
                        o && !d.length && (h.teardown && !1 !== h.teardown.call(t, f, g.handle) || E.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l) E.event.remove(t, p + e[u], i, n, !0);
                E.isEmptyObject(l) && U.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            var e, i, n, r, s, o, a = E.event.fix(t),
                l = new Array(arguments.length),
                u = (U.get(this, "events") || {})[a.type] || [],
                c = E.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (o = E.event.handlers.call(this, a, u), e = 0;
                    (r = o[e++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, i = 0;
                        (s = r.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (n = ((E.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (t, e) {
            var i, n, r, s, o, a = [],
                l = e.delegateCount,
                u = t.target;
            if (l && u.nodeType && !("click" === t.type && 1 <= t.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                        for (s = [], o = {}, i = 0; i < l; i++) void 0 === o[r = (n = e[i]).selector + " "] && (o[r] = n.needsContext ? -1 < E(r, this).index(u) : E.find(r, this, null, [u]).length), o[r] && s.push(n);
                        s.length && a.push({
                            elem: u,
                            handlers: s
                        })
                    } return u = this, l < e.length && a.push({
                elem: u,
                handlers: e.slice(l)
            }), a
        },
        addProp: function (e, t) {
            Object.defineProperty(E.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: E.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (t) {
            return t[E.expando] ? t : new E.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== xt() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === xt() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && k(this, "input")) return this.click(), !1
                },
                _default: function (t) {
                    return k(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, E.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, E.Event = function (t, e) {
        return this instanceof E.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? wt : bt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && E.extend(this, e), this.timeStamp = t && t.timeStamp || E.now(), void(this[E.expando] = !0)) : new E.Event(t, e)
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: bt,
        isPropagationStopped: bt,
        isImmediatePropagationStopped: bt,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = wt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = wt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = wt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && gt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && vt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, E.event.addProp), E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, r) {
        E.event.special[t] = {
            delegateType: r,
            bindType: r,
            handle: function (t) {
                var e, i = t.relatedTarget,
                    n = t.handleObj;
                return i && (i === this || E.contains(this, i)) || (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = r), e
            }
        }
    }), E.fn.extend({
        on: function (t, e, i, n) {
            return _t(this, t, e, i, n)
        },
        one: function (t, e, i, n) {
            return _t(this, t, e, i, n, 1)
        },
        off: function (t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, E(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" != typeof t) return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = bt), this.each(function () {
                E.event.remove(this, t, i, e)
            });
            for (r in t) this.off(r, e, t[r]);
            return this
        }
    });
    var Ct = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Tt = /<script|<style|<link/i,
        Et = /checked\s*(?:[^=]|=\s*.checked.)/i,
        St = /^true\/(.*)/,
        kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function It(t, e) {
        return k(t, "table") && k(11 !== e.nodeType ? e : e.firstChild, "tr") && E(">tbody", t)[0] || t
    }

    function zt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Lt(t) {
        var e = St.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function $t(t, e) {
        var i, n, r, s, o, a, l, u;
        if (1 === e.nodeType) {
            if (U.hasData(t) && (s = U.access(t), o = U.set(e, s), u = s.events))
                for (r in delete o.handle, o.events = {}, u)
                    for (i = 0, n = u[r].length; i < n; i++) E.event.add(e, r, u[r][i]);
            Q.hasData(t) && (a = Q.access(t), l = E.extend({}, a), Q.set(e, l))
        }
    }

    function jt(i, n, r, s) {
        n = m.apply([], n);
        var t, e, o, a, l, u, c = 0,
            h = i.length,
            d = h - 1,
            p = n[0],
            f = E.isFunction(p);
        if (f || 1 < h && "string" == typeof p && !g.checkClone && Et.test(p)) return i.each(function (t) {
            var e = i.eq(t);
            f && (n[0] = p.call(this, t, e.html())), jt(e, n, r, s)
        });
        if (h && (e = (t = ft(n, i[0].ownerDocument, !1, i, s)).firstChild, 1 === t.childNodes.length && (t = e), e || s)) {
            for (a = (o = E.map(ut(t, "script"), zt)).length; c < h; c++) l = t, c !== d && (l = E.clone(l, !0, !0), a && E.merge(o, ut(l, "script"))), r.call(i[c], l, c);
            if (a)
                for (u = o[o.length - 1].ownerDocument, E.map(o, Lt), c = 0; c < a; c++) l = o[c], at.test(l.type || "") && !U.access(l, "globalEval") && E.contains(u, l) && (l.src ? E._evalUrl && E._evalUrl(l.src) : v(l.textContent.replace(kt, ""), u))
        }
        return i
    }

    function At(t, e, i) {
        for (var n, r = e ? E.filter(e, t) : t, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || E.cleanData(ut(n)), n.parentNode && (i && E.contains(n.ownerDocument, n) && ct(ut(n, "script")), n.parentNode.removeChild(n));
        return t
    }
    E.extend({
        htmlPrefilter: function (t) {
            return t.replace(Ct, "<$1></$2>")
        },
        clone: function (t, e, i) {
            var n, r, s, o, a, l, u, c = t.cloneNode(!0),
                h = E.contains(t.ownerDocument, t);
            if (!(g.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || E.isXMLDoc(t)))
                for (o = ut(c), n = 0, r = (s = ut(t)).length; n < r; n++) a = s[n], l = o[n], void 0, "input" === (u = l.nodeName.toLowerCase()) && st.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (e)
                if (i)
                    for (s = s || ut(t), o = o || ut(c), n = 0, r = s.length; n < r; n++) $t(s[n], o[n]);
                else $t(t, c);
            return 0 < (o = ut(c, "script")).length && ct(o, !h && ut(t, "script")), c
        },
        cleanData: function (t) {
            for (var e, i, n, r = E.event.special, s = 0; void 0 !== (i = t[s]); s++)
                if (B(i)) {
                    if (e = i[U.expando]) {
                        if (e.events)
                            for (n in e.events) r[n] ? E.event.remove(i, n) : E.removeEvent(i, n, e.handle);
                        i[U.expando] = void 0
                    }
                    i[Q.expando] && (i[Q.expando] = void 0)
                }
        }
    }), E.fn.extend({
        detach: function (t) {
            return At(this, t, !0)
        },
        remove: function (t) {
            return At(this, t)
        },
        text: function (t) {
            return W(this, function (t) {
                return void 0 === t ? E.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function () {
            return jt(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || It(this, t).appendChild(t)
            })
        },
        prepend: function () {
            return jt(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = It(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return jt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return jt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (E.cleanData(ut(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return E.clone(this, t, e)
            })
        },
        html: function (t) {
            return W(this, function (t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Tt.test(t) && !lt[(ot.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = E.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (E.cleanData(ut(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var i = [];
            return jt(this, arguments, function (t) {
                var e = this.parentNode;
                E.inArray(this, i) < 0 && (E.cleanData(ut(this)), e && e.replaceChild(t, this))
            }, i)
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, o) {
        E.fn[t] = function (t) {
            for (var e, i = [], n = E(t), r = n.length - 1, s = 0; s <= r; s++) e = s === r ? this : this.clone(!0), E(n[s])[o](e), l.apply(i, e.get());
            return this.pushStack(i)
        }
    });
    var Ot = /^margin/,
        Dt = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
        Pt = function (t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = C), e.getComputedStyle(t)
        };

    function Nt(t, e, i) {
        var n, r, s, o, a = t.style;
        return (i = i || Pt(t)) && ("" !== (o = i.getPropertyValue(e) || i[e]) || E.contains(t.ownerDocument, t) || (o = E.style(t, e)), !g.pixelMarginRight() && Dt.test(o) && Ot.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function Mt(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }! function () {
        function t() {
            if (o) {
                o.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", o.innerHTML = "", mt.appendChild(s);
                var t = C.getComputedStyle(o);
                e = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, o.style.marginRight = "50%", n = "4px" === t.marginRight, mt.removeChild(s), o = null
            }
        }
        var e, i, n, r, s = T.createElement("div"),
            o = T.createElement("div");
        o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(o), E.extend(g, {
            pixelPosition: function () {
                return t(), e
            },
            boxSizingReliable: function () {
                return t(), i
            },
            pixelMarginRight: function () {
                return t(), n
            },
            reliableMarginLeft: function () {
                return t(), r
            }
        }))
    }();
    var qt = /^(none|table(?!-c[ea]).+)/,
        Ht = /^--/,
        Rt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ft = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Wt = ["Webkit", "Moz", "ms"],
        Bt = T.createElement("div").style;

    function Vt(t) {
        var e = E.cssProps[t];
        return e || (e = E.cssProps[t] = function (t) {
            if (t in Bt) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = Wt.length; i--;)
                if ((t = Wt[i] + e) in Bt) return t
        }(t) || t), e
    }

    function Ut(t, e, i) {
        var n = K.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function Qt(t, e, i, n, r) {
        var s, o = 0;
        for (s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; s < 4; s += 2) "margin" === i && (o += E.css(t, i + J[s], !0, r)), n ? ("content" === i && (o -= E.css(t, "padding" + J[s], !0, r)), "margin" !== i && (o -= E.css(t, "border" + J[s] + "Width", !0, r))) : (o += E.css(t, "padding" + J[s], !0, r), "padding" !== i && (o += E.css(t, "border" + J[s] + "Width", !0, r)));
        return o
    }

    function Yt(t, e, i) {
        var n, r = Pt(t),
            s = Nt(t, e, r),
            o = "border-box" === E.css(t, "boxSizing", !1, r);
        return Dt.test(s) ? s : (n = o && (g.boxSizingReliable() || s === t.style[e]), "auto" === s && (s = t["offset" + e[0].toUpperCase() + e.slice(1)]), (s = parseFloat(s) || 0) + Qt(t, e, i || (o ? "border" : "content"), n, r) + "px")
    }

    function Zt(t, e, i, n, r) {
        return new Zt.prototype.init(t, e, i, n, r)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = Nt(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = E.camelCase(e),
                    l = Ht.test(e),
                    u = t.style;
                return l || (e = Vt(a)), o = E.cssHooks[e] || E.cssHooks[a], void 0 === i ? o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : u[e] : ("string" === (s = typeof i) && (r = K.exec(i)) && r[1] && (i = it(t, e, r), s = "number"), void(null != i && i == i && ("number" === s && (i += r && r[3] || (E.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (u[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, n)) || (l ? u.setProperty(e, i) : u[e] = i))))
            }
        },
        css: function (t, e, i, n) {
            var r, s, o, a = E.camelCase(e);
            return Ht.test(e) || (e = Vt(a)), (o = E.cssHooks[e] || E.cssHooks[a]) && "get" in o && (r = o.get(t, !0, i)), void 0 === r && (r = Nt(t, e, n)), "normal" === r && e in Ft && (r = Ft[e]), "" === i || i ? (s = parseFloat(r), !0 === i || isFinite(s) ? s || 0 : r) : r
        }
    }), E.each(["height", "width"], function (t, o) {
        E.cssHooks[o] = {
            get: function (t, e, i) {
                if (e) return !qt.test(E.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Yt(t, o, i) : et(t, Rt, function () {
                    return Yt(t, o, i)
                })
            },
            set: function (t, e, i) {
                var n, r = i && Pt(t),
                    s = i && Qt(t, o, i, "border-box" === E.css(t, "boxSizing", !1, r), r);
                return s && (n = K.exec(e)) && "px" !== (n[3] || "px") && (t.style[o] = e, e = E.css(t, o)), Ut(0, e, s)
            }
        }
    }), E.cssHooks.marginLeft = Mt(g.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(Nt(t, "marginLeft")) || t.getBoundingClientRect().left - et(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (r, s) {
        E.cssHooks[r + s] = {
            expand: function (t) {
                for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[r + J[e] + s] = n[e] || n[e - 2] || n[0];
                return i
            }
        }, Ot.test(r) || (E.cssHooks[r + s].set = Ut)
    }), E.fn.extend({
        css: function (t, e) {
            return W(this, function (t, e, i) {
                var n, r, s = {},
                    o = 0;
                if (Array.isArray(e)) {
                    for (n = Pt(t), r = e.length; o < r; o++) s[e[o]] = E.css(t, e[o], !1, n);
                    return s
                }
                return void 0 !== i ? E.style(t, e, i) : E.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }), ((E.Tween = Zt).prototype = {
        constructor: Zt,
        init: function (t, e, i, n, r, s) {
            this.elem = t, this.prop = i, this.easing = r || E.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (E.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var t = Zt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Zt.propHooks._default.get(this)
        },
        run: function (t) {
            var e, i = Zt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = E.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Zt.propHooks._default.set(this), this
        }
    }).init.prototype = Zt.prototype, (Zt.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = E.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function (t) {
                E.fx.step[t.prop] ? E.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[E.cssProps[t.prop]] && !E.cssHooks[t.prop] ? t.elem[t.prop] = t.now : E.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = Zt.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, E.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, E.fx = Zt.prototype.init, E.fx.step = {};
    var Gt, Xt, Kt, Jt, te = /^(?:toggle|show|hide)$/,
        ee = /queueHooks$/;

    function ie() {
        Xt && (!1 === T.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ie) : C.setTimeout(ie, E.fx.interval), E.fx.tick())
    }

    function ne() {
        return C.setTimeout(function () {
            Gt = void 0
        }), Gt = E.now()
    }

    function re(t, e) {
        var i, n = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; n < 4; n += 2 - e) r["margin" + (i = J[n])] = r["padding" + i] = t;
        return e && (r.opacity = r.width = t), r
    }

    function se(t, e, i) {
        for (var n, r = (oe.tweeners[e] || []).concat(oe.tweeners["*"]), s = 0, o = r.length; s < o; s++)
            if (n = r[s].call(i, e, t)) return n
    }

    function oe(s, t, e) {
        var i, o, n = 0,
            r = oe.prefilters.length,
            a = E.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (o) return !1;
                for (var t = Gt || ne(), e = Math.max(0, u.startTime + u.duration - t), i = 1 - (e / u.duration || 0), n = 0, r = u.tweens.length; n < r; n++) u.tweens[n].run(i);
                return a.notifyWith(s, [u, i, e]), i < 1 && r ? e : (r || a.notifyWith(s, [u, 1, 0]), a.resolveWith(s, [u]), !1)
            },
            u = a.promise({
                elem: s,
                props: E.extend({}, t),
                opts: E.extend(!0, {
                    specialEasing: {},
                    easing: E.easing._default
                }, e),
                originalProperties: t,
                originalOptions: e,
                startTime: Gt || ne(),
                duration: e.duration,
                tweens: [],
                createTween: function (t, e) {
                    var i = E.Tween(s, u.opts, t, e, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (t) {
                    var e = 0,
                        i = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; e < i; e++) u.tweens[e].run(1);
                    return t ? (a.notifyWith(s, [u, 1, 0]), a.resolveWith(s, [u, t])) : a.rejectWith(s, [u, t]), this
                }
            }),
            c = u.props;
        for (function (t, e) {
                var i, n, r, s, o;
                for (i in t)
                    if (r = e[n = E.camelCase(i)], s = t[i], Array.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (o = E.cssHooks[n]) && "expand" in o)
                        for (i in s = o.expand(s), delete t[n], s) i in t || (t[i] = s[i], e[i] = r);
                    else e[n] = r
            }(c, u.opts.specialEasing); n < r; n++)
            if (i = oe.prefilters[n].call(u, s, c, u.opts)) return E.isFunction(i.stop) && (E._queueHooks(u.elem, u.opts.queue).stop = E.proxy(i.stop, i)), i;
        return E.map(c, se, u), E.isFunction(u.opts.start) && u.opts.start.call(s, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), E.fx.timer(E.extend(l, {
            elem: s,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    E.Animation = E.extend(oe, {
        tweeners: {
            "*": [function (t, e) {
                var i = this.createTween(t, e);
                return it(i.elem, t, K.exec(e), i), i
            }]
        },
        tweener: function (t, e) {
            for (var i, n = 0, r = (t = E.isFunction(t) ? (e = t, ["*"]) : t.match(P)).length; n < r; n++) i = t[n], oe.tweeners[i] = oe.tweeners[i] || [], oe.tweeners[i].unshift(e)
        },
        prefilters: [function (t, e, i) {
            var n, r, s, o, a, l, u, c, h = "width" in e || "height" in e,
                d = this,
                p = {},
                f = t.style,
                m = t.nodeType && tt(t),
                g = U.get(t, "fxshow");
            for (n in i.queue || (null == (o = E._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function () {
                    o.unqueued || a()
                }), o.unqueued++, d.always(function () {
                    d.always(function () {
                        o.unqueued--, E.queue(t, "fx").length || o.empty.fire()
                    })
                })), e)
                if (r = e[n], te.test(r)) {
                    if (delete e[n], s = s || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[n]) continue;
                        m = !0
                    }
                    p[n] = g && g[n] || E.style(t, n)
                } if ((l = !E.isEmptyObject(e)) || !E.isEmptyObject(p))
                for (n in h && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (u = g && g.display) && (u = U.get(t, "display")), "none" === (c = E.css(t, "display")) && (u ? c = u : (rt([t], !0), u = t.style.display || u, c = E.css(t, "display"), rt([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === E.css(t, "float") && (l || (d.done(function () {
                        f.display = u
                    }), null == u && (c = f.display, u = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always(function () {
                        f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                    })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = U.access(t, "fxshow", {
                    display: u
                }), s && (g.hidden = !m), m && rt([t], !0), d.done(function () {
                    for (n in m || rt([t]), U.remove(t, "fxshow"), p) E.style(t, n, p[n])
                })), l = se(m ? g[n] : 0, n, d), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function (t, e) {
            e ? oe.prefilters.unshift(t) : oe.prefilters.push(t)
        }
    }), E.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? E.extend({}, t) : {
            complete: i || !i && e || E.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !E.isFunction(e) && e
        };
        return E.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in E.fx.speeds ? n.duration = E.fx.speeds[n.duration] : n.duration = E.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            E.isFunction(n.old) && n.old.call(this), n.queue && E.dequeue(this, n.queue)
        }, n
    }, E.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(tt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function (e, t, i, n) {
            var r = E.isEmptyObject(e),
                s = E.speed(t, i, n),
                o = function () {
                    var t = oe(this, E.extend({}, e), s);
                    (r || U.get(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function (r, t, s) {
            var o = function (t) {
                var e = t.stop;
                delete t.stop, e(s)
            };
            return "string" != typeof r && (s = t, t = r, r = void 0), t && !1 !== r && this.queue(r || "fx", []), this.each(function () {
                var t = !0,
                    e = null != r && r + "queueHooks",
                    i = E.timers,
                    n = U.get(this);
                if (e) n[e] && n[e].stop && o(n[e]);
                else
                    for (e in n) n[e] && n[e].stop && ee.test(e) && o(n[e]);
                for (e = i.length; e--;) i[e].elem !== this || null != r && i[e].queue !== r || (i[e].anim.stop(s), t = !1, i.splice(e, 1));
                !t && s || E.dequeue(this, r)
            })
        },
        finish: function (o) {
            return !1 !== o && (o = o || "fx"), this.each(function () {
                var t, e = U.get(this),
                    i = e[o + "queue"],
                    n = e[o + "queueHooks"],
                    r = E.timers,
                    s = i ? i.length : 0;
                for (e.finish = !0, E.queue(this, o, []), n && n.stop && n.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === o && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete e.finish
            })
        }
    }), E.each(["toggle", "show", "hide"], function (t, n) {
        var r = E.fn[n];
        E.fn[n] = function (t, e, i) {
            return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(re(n, !0), t, e, i)
        }
    }), E.each({
        slideDown: re("show"),
        slideUp: re("hide"),
        slideToggle: re("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (t, n) {
        E.fn[t] = function (t, e, i) {
            return this.animate(n, t, e, i)
        }
    }), E.timers = [], E.fx.tick = function () {
        var t, e = 0,
            i = E.timers;
        for (Gt = E.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || E.fx.stop(), Gt = void 0
    }, E.fx.timer = function (t) {
        E.timers.push(t), E.fx.start()
    }, E.fx.interval = 13, E.fx.start = function () {
        Xt || (Xt = !0, ie())
    }, E.fx.stop = function () {
        Xt = null
    }, E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, E.fn.delay = function (n, t) {
        return n = E.fx && E.fx.speeds[n] || n, t = t || "fx", this.queue(t, function (t, e) {
            var i = C.setTimeout(t, n);
            e.stop = function () {
                C.clearTimeout(i)
            }
        })
    }, Kt = T.createElement("input"), Jt = T.createElement("select").appendChild(T.createElement("option")), Kt.type = "checkbox", g.checkOn = "" !== Kt.value, g.optSelected = Jt.selected, (Kt = T.createElement("input")).value = "t", Kt.type = "radio", g.radioValue = "t" === Kt.value;
    var ae, le = E.expr.attrHandle;
    E.fn.extend({
        attr: function (t, e) {
            return W(this, E.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function (t) {
            return this.each(function () {
                E.removeAttr(this, t)
            })
        }
    }), E.extend({
        attr: function (t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? E.prop(t, e, i) : (1 === s && E.isXMLDoc(t) || (r = E.attrHooks[e.toLowerCase()] || (E.expr.match.bool.test(e) ? ae : void 0)), void 0 !== i ? null === i ? void E.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : null == (n = E.find.attr(t, e)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!g.radioValue && "radio" === e && k(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var i, n = 0,
                r = e && e.match(P);
            if (r && 1 === t.nodeType)
                for (; i = r[n++];) t.removeAttribute(i)
        }
    }), ae = {
        set: function (t, e, i) {
            return !1 === e ? E.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var o = le[e] || E.find.attr;
        le[e] = function (t, e, i) {
            var n, r, s = e.toLowerCase();
            return i || (r = le[s], le[s] = n, n = null != o(t, e, i) ? s : null, le[s] = r), n
        }
    });
    var ue = /^(?:input|select|textarea|button)$/i,
        ce = /^(?:a|area)$/i;

    function he(t) {
        return (t.match(P) || []).join(" ")
    }

    function de(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    E.fn.extend({
        prop: function (t, e) {
            return W(this, E.prop, t, e, 1 < arguments.length)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[E.propFix[t] || t]
            })
        }
    }), E.extend({
        prop: function (t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && E.isXMLDoc(t) || (e = E.propFix[e] || e, r = E.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = E.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ue.test(t.nodeName) || ce.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), g.optSelected || (E.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        E.propFix[this.toLowerCase()] = this
    }), E.fn.extend({
        addClass: function (e) {
            var t, i, n, r, s, o, a, l = 0;
            if (E.isFunction(e)) return this.each(function (t) {
                E(this).addClass(e.call(this, t, de(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(P) || []; i = this[l++];)
                    if (r = de(i), n = 1 === i.nodeType && " " + he(r) + " ") {
                        for (o = 0; s = t[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        r !== (a = he(n)) && i.setAttribute("class", a)
                    } return this
        },
        removeClass: function (e) {
            var t, i, n, r, s, o, a, l = 0;
            if (E.isFunction(e)) return this.each(function (t) {
                E(this).removeClass(e.call(this, t, de(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(P) || []; i = this[l++];)
                    if (r = de(i), n = 1 === i.nodeType && " " + he(r) + " ") {
                        for (o = 0; s = t[o++];)
                            for (; - 1 < n.indexOf(" " + s + " ");) n = n.replace(" " + s + " ", " ");
                        r !== (a = he(n)) && i.setAttribute("class", a)
                    } return this
        },
        toggleClass: function (r, e) {
            var s = typeof r;
            return "boolean" == typeof e && "string" === s ? e ? this.addClass(r) : this.removeClass(r) : E.isFunction(r) ? this.each(function (t) {
                E(this).toggleClass(r.call(this, t, de(this), e), e)
            }) : this.each(function () {
                var t, e, i, n;
                if ("string" === s)
                    for (e = 0, i = E(this), n = r.match(P) || []; t = n[e++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== r && "boolean" !== s || ((t = de(this)) && U.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === r ? "" : U.get(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && -1 < (" " + he(de(i)) + " ").indexOf(e)) return !0;
            return !1
        }
    });
    var pe = /\r/g;
    E.fn.extend({
        val: function (i) {
            var n, t, r, e = this[0];
            return arguments.length ? (r = E.isFunction(i), this.each(function (t) {
                var e;
                1 === this.nodeType && (null == (e = r ? i.call(this, t, E(this).val()) : i) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = E.map(e, function (t) {
                    return null == t ? "" : t + ""
                })), (n = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : e ? (n = E.valHooks[e.type] || E.valHooks[e.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(pe, "") : null == t ? "" : t : void 0
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = E.find.attr(t, "value");
                    return null != e ? e : he(E.text(t))
                }
            },
            select: {
                get: function (t) {
                    var e, i, n, r = t.options,
                        s = t.selectedIndex,
                        o = "select-one" === t.type,
                        a = o ? null : [],
                        l = o ? s + 1 : r.length;
                    for (n = s < 0 ? l : o ? s : 0; n < l; n++)
                        if (((i = r[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !k(i.parentNode, "optgroup"))) {
                            if (e = E(i).val(), o) return e;
                            a.push(e)
                        } return a
                },
                set: function (t, e) {
                    for (var i, n, r = t.options, s = E.makeArray(e), o = r.length; o--;)((n = r[o]).selected = -1 < E.inArray(E.valHooks.option.get(n), s)) && (i = !0);
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), E.each(["radio", "checkbox"], function () {
        E.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = -1 < E.inArray(E(t).val(), e)
            }
        }, g.checkOn || (E.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var fe = /^(?:focusinfocus|focusoutblur)$/;
    E.extend(E.event, {
        trigger: function (t, e, i, n) {
            var r, s, o, a, l, u, c, h = [i || T],
                d = f.call(t, "type") ? t.type : t,
                p = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = o = i = i || T, 3 !== i.nodeType && 8 !== i.nodeType && !fe.test(d + E.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), l = d.indexOf(":") < 0 && "on" + d, (t = t[E.expando] ? t : new E.Event(d, "object" == typeof t && t)).isTrigger = n ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : E.makeArray(e, [t]), c = E.event.special[d] || {}, n || !c.trigger || !1 !== c.trigger.apply(i, e))) {
                if (!n && !c.noBubble && !E.isWindow(i)) {
                    for (a = c.delegateType || d, fe.test(a + d) || (s = s.parentNode); s; s = s.parentNode) h.push(s), o = s;
                    o === (i.ownerDocument || T) && h.push(o.defaultView || o.parentWindow || C)
                }
                for (r = 0;
                    (s = h[r++]) && !t.isPropagationStopped();) t.type = 1 < r ? a : c.bindType || d, (u = (U.get(s, "events") || {})[t.type] && U.get(s, "handle")) && u.apply(s, e), (u = l && s[l]) && u.apply && B(s) && (t.result = u.apply(s, e), !1 === t.result && t.preventDefault());
                return t.type = d, n || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), e) || !B(i) || l && E.isFunction(i[d]) && !E.isWindow(i) && ((o = i[l]) && (i[l] = null), i[E.event.triggered = d](), E.event.triggered = void 0, o && (i[l] = o)), t.result
            }
        },
        simulate: function (t, e, i) {
            var n = E.extend(new E.Event, i, {
                type: t,
                isSimulated: !0
            });
            E.event.trigger(n, null, e)
        }
    }), E.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                E.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return E.event.trigger(t, e, i, !0)
        }
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, i) {
        E.fn[i] = function (t, e) {
            return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
        }
    }), E.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), g.focusin = "onfocusin" in C, g.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function (i, n) {
        var r = function (t) {
            E.event.simulate(n, t.target, E.event.fix(t))
        };
        E.event.special[n] = {
            setup: function () {
                var t = this.ownerDocument || this,
                    e = U.access(t, n);
                e || t.addEventListener(i, r, !0), U.access(t, n, (e || 0) + 1)
            },
            teardown: function () {
                var t = this.ownerDocument || this,
                    e = U.access(t, n) - 1;
                e ? U.access(t, n, e) : (t.removeEventListener(i, r, !0), U.remove(t, n))
            }
        }
    });
    var me = C.location,
        ge = E.now(),
        ve = /\?/;
    E.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            e = (new C.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + t), e
    };
    var ye = /\[\]$/,
        we = /\r?\n/g,
        be = /^(?:submit|button|image|reset|file)$/i,
        xe = /^(?:input|select|textarea|keygen)/i;

    function _e(i, t, n, r) {
        var e;
        if (Array.isArray(t)) E.each(t, function (t, e) {
            n || ye.test(i) ? r(i, e) : _e(i + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, n, r)
        });
        else if (n || "object" !== E.type(t)) r(i, t);
        else
            for (e in t) _e(i + "[" + e + "]", t[e], n, r)
    }
    E.param = function (t, e) {
        var i, n = [],
            r = function (t, e) {
                var i = E.isFunction(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (Array.isArray(t) || t.jquery && !E.isPlainObject(t)) E.each(t, function () {
            r(this.name, this.value)
        });
        else
            for (i in t) _e(i, t[i], e, r);
        return n.join("&")
    }, E.fn.extend({
        serialize: function () {
            return E.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = E.prop(this, "elements");
                return t ? E.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !E(this).is(":disabled") && xe.test(this.nodeName) && !be.test(t) && (this.checked || !st.test(t))
            }).map(function (t, e) {
                var i = E(this).val();
                return null == i ? null : Array.isArray(i) ? E.map(i, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(we, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(we, "\r\n")
                }
            }).get()
        }
    });
    var Ce = /%20/g,
        Te = /#.*$/,
        Ee = /([?&])_=[^&]*/,
        Se = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ke = /^(?:GET|HEAD)$/,
        Ie = /^\/\//,
        ze = {},
        Le = {},
        $e = "*/".concat("*"),
        je = T.createElement("a");

    function Ae(s) {
        return function (t, e) {
            "string" != typeof t && (e = t, t = "*");
            var i, n = 0,
                r = t.toLowerCase().match(P) || [];
            if (E.isFunction(e))
                for (; i = r[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (s[i] = s[i] || []).unshift(e)) : (s[i] = s[i] || []).push(e)
        }
    }

    function Oe(e, r, s, o) {
        var a = {},
            l = e === Le;

        function u(t) {
            var n;
            return a[t] = !0, E.each(e[t] || [], function (t, e) {
                var i = e(r, s, o);
                return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (r.dataTypes.unshift(i), u(i), !1)
            }), n
        }
        return u(r.dataTypes[0]) || !a["*"] && u("*")
    }

    function De(t, e) {
        var i, n, r = E.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && E.extend(!0, t, n), t
    }
    je.href = me.href, E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: me.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(me.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $e,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? De(De(t, E.ajaxSettings), e) : De(E.ajaxSettings, t)
        },
        ajaxPrefilter: Ae(ze),
        ajaxTransport: Ae(Le),
        ajax: function (t, e) {
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var c, h, d, i, p, n, f, m, r, s, g = E.ajaxSetup({}, e),
                v = g.context || g,
                y = g.context && (v.nodeType || v.jquery) ? E(v) : E.event,
                w = E.Deferred(),
                b = E.Callbacks("once memory"),
                x = g.statusCode || {},
                o = {},
                a = {},
                l = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (f) {
                            if (!i)
                                for (i = {}; e = Se.exec(d);) i[e[1].toLowerCase()] = e[2];
                            e = i[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return f ? d : null
                    },
                    setRequestHeader: function (t, e) {
                        return null == f && (t = a[t.toLowerCase()] = a[t.toLowerCase()] || t, o[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return null == f && (g.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (f) _.always(t[_.status]);
                            else
                                for (e in t) x[e] = [x[e], t[e]];
                        return this
                    },
                    abort: function (t) {
                        var e = t || l;
                        return c && c.abort(e), u(0, e), this
                    }
                };
            if (w.promise(_), g.url = ((t || g.url || me.href) + "").replace(Ie, me.protocol + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(P) || [""], null == g.crossDomain) {
                n = T.createElement("a");
                try {
                    n.href = g.url, n.href = n.href, g.crossDomain = je.protocol + "//" + je.host != n.protocol + "//" + n.host
                } catch (t) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = E.param(g.data, g.traditional)), Oe(ze, g, e, _), f) return _;
            for (r in (m = E.event && g.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !ke.test(g.type), h = g.url.replace(Te, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Ce, "+")) : (s = g.url.slice(h.length), g.data && (h += (ve.test(h) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (h = h.replace(Ee, "$1"), s = (ve.test(h) ? "&" : "?") + "_=" + ge++ + s), g.url = h + s), g.ifModified && (E.lastModified[h] && _.setRequestHeader("If-Modified-Since", E.lastModified[h]), E.etag[h] && _.setRequestHeader("If-None-Match", E.etag[h])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && _.setRequestHeader("Content-Type", g.contentType), _.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : g.accepts["*"]), g.headers) _.setRequestHeader(r, g.headers[r]);
            if (g.beforeSend && (!1 === g.beforeSend.call(v, _, g) || f)) return _.abort();
            if (l = "abort", b.add(g.complete), _.done(g.success), _.fail(g.error), c = Oe(Le, g, e, _)) {
                if (_.readyState = 1, m && y.trigger("ajaxSend", [_, g]), f) return _;
                g.async && 0 < g.timeout && (p = C.setTimeout(function () {
                    _.abort("timeout")
                }, g.timeout));
                try {
                    f = !1, c.send(o, u)
                } catch (t) {
                    if (f) throw t;
                    u(-1, t)
                }
            } else u(-1, "No Transport");

            function u(t, e, i, n) {
                var r, s, o, a, l, u = e;
                f || (f = !0, p && C.clearTimeout(p), c = void 0, d = n || "", _.readyState = 0 < t ? 4 : 0, r = 200 <= t && t < 300 || 304 === t, i && (a = function (t, e, i) {
                    for (var n, r, s, o, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                        for (r in a)
                            if (a[r] && a[r].test(n)) {
                                l.unshift(r);
                                break
                            } if (l[0] in i) s = l[0];
                    else {
                        for (r in i) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            o || (o = r)
                        }
                        s = s || o
                    }
                    if (s) return s !== l[0] && l.unshift(s), i[s]
                }(g, _, i)), a = function (t, e, i, n) {
                    var r, s, o, a, l, u = {},
                        c = t.dataTypes.slice();
                    if (c[1])
                        for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
                    for (s = c.shift(); s;)
                        if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                        if (!(o = u[l + " " + s] || u["* " + s]))
                            for (r in u)
                                if ((a = r.split(" "))[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === o ? o = u[r] : !0 !== u[r] && (s = a[0], c.unshift(a[1]));
                                    break
                                } if (!0 !== o)
                            if (o && t.throws) e = o(e);
                            else try {
                                e = o(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: o ? t : "No conversion from " + l + " to " + s
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(g, a, _, r), r ? (g.ifModified && ((l = _.getResponseHeader("Last-Modified")) && (E.lastModified[h] = l), (l = _.getResponseHeader("etag")) && (E.etag[h] = l)), 204 === t || "HEAD" === g.type ? u = "nocontent" : 304 === t ? u = "notmodified" : (u = a.state, s = a.data, r = !(o = a.error))) : (o = u, !t && u || (u = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (e || u) + "", r ? w.resolveWith(v, [s, u, _]) : w.rejectWith(v, [_, u, o]), _.statusCode(x), x = void 0, m && y.trigger(r ? "ajaxSuccess" : "ajaxError", [_, g, r ? s : o]), b.fireWith(v, [_, u]), m && (y.trigger("ajaxComplete", [_, g]), --E.active || E.event.trigger("ajaxStop")))
            }
            return _
        },
        getJSON: function (t, e, i) {
            return E.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return E.get(t, void 0, e, "script")
        }
    }), E.each(["get", "post"], function (t, r) {
        E[r] = function (t, e, i, n) {
            return E.isFunction(e) && (n = n || i, i = e, e = void 0), E.ajax(E.extend({
                url: t,
                type: r,
                dataType: n,
                data: e,
                success: i
            }, E.isPlainObject(t) && t))
        }
    }), E._evalUrl = function (t) {
        return E.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, E.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (E.isFunction(t) && (t = t.call(this[0])), e = E(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function (i) {
            return E.isFunction(i) ? this.each(function (t) {
                E(this).wrapInner(i.call(this, t))
            }) : this.each(function () {
                var t = E(this),
                    e = t.contents();
                e.length ? e.wrapAll(i) : t.append(i)
            })
        },
        wrap: function (e) {
            var i = E.isFunction(e);
            return this.each(function (t) {
                E(this).wrapAll(i ? e.call(this, t) : e)
            })
        },
        unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                E(this).replaceWith(this.childNodes)
            }), this
        }
    }), E.expr.pseudos.hidden = function (t) {
        return !E.expr.pseudos.visible(t)
    }, E.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, E.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (t) {}
    };
    var Pe = {
            0: 200,
            1223: 204
        },
        Ne = E.ajaxSettings.xhr();
    g.cors = !!Ne && "withCredentials" in Ne, g.ajax = Ne = !!Ne, E.ajaxTransport(function (r) {
        var s, o;
        if (g.cors || Ne && !r.crossDomain) return {
            send: function (t, e) {
                var i, n = r.xhr();
                if (n.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (i in r.xhrFields) n[i] = r.xhrFields[i];
                for (i in r.mimeType && n.overrideMimeType && n.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) n.setRequestHeader(i, t[i]);
                s = function (t) {
                    return function () {
                        s && (s = o = n.onload = n.onerror = n.onabort = n.onreadystatechange = null, "abort" === t ? n.abort() : "error" === t ? "number" != typeof n.status ? e(0, "error") : e(n.status, n.statusText) : e(Pe[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                            binary: n.response
                        } : {
                            text: n.responseText
                        }, n.getAllResponseHeaders()))
                    }
                }, n.onload = s(), o = n.onerror = s("error"), void 0 !== n.onabort ? n.onabort = o : n.onreadystatechange = function () {
                    4 === n.readyState && C.setTimeout(function () {
                        s && o()
                    })
                }, s = s("abort");
                try {
                    n.send(r.hasContent && r.data || null)
                } catch (t) {
                    if (s) throw t
                }
            },
            abort: function () {
                s && s()
            }
        }
    }), E.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return E.globalEval(t), t
            }
        }
    }), E.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), E.ajaxTransport("script", function (i) {
        var n, r;
        if (i.crossDomain) return {
            send: function (t, e) {
                n = E("<script>").prop({
                    charset: i.scriptCharset,
                    src: i.url
                }).on("load error", r = function (t) {
                    n.remove(), r = null, t && e("error" === t.type ? 404 : 200, t.type)
                }), T.head.appendChild(n[0])
            },
            abort: function () {
                r && r()
            }
        }
    });
    var Me, qe = [],
        He = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = qe.pop() || E.expando + "_" + ge++;
            return this[t] = !0, t
        }
    }), E.ajaxPrefilter("json jsonp", function (t, e, i) {
        var n, r, s, o = !1 !== t.jsonp && (He.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && He.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) return n = t.jsonpCallback = E.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(He, "$1" + n) : !1 !== t.jsonp && (t.url += (ve.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function () {
            return s || E.error(n + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = C[n], C[n] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === r ? E(C).removeProp(n) : C[n] = r, t[n] && (t.jsonpCallback = e.jsonpCallback, qe.push(n)), s && E.isFunction(r) && r(s[0]), s = r = void 0
        }), "script"
    }), g.createHTMLDocument = ((Me = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Me.childNodes.length), E.parseHTML = function (t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (g.createHTMLDocument ? ((n = (e = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, e.head.appendChild(n)) : e = T), s = !i && [], (r = I.exec(t)) ? [e.createElement(r[1])] : (r = ft([t], e, s), s && s.length && E(s).remove(), E.merge([], r.childNodes)));
        var n, r, s
    }, E.fn.load = function (t, e, i) {
        var n, r, s, o = this,
            a = t.indexOf(" ");
        return -1 < a && (n = he(t.slice(a)), t = t.slice(0, a)), E.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < o.length && E.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            s = arguments, o.html(n ? E("<div>").append(E.parseHTML(t)).find(n) : t)
        }).always(i && function (t, e) {
            o.each(function () {
                i.apply(this, s || [t.responseText, e, t])
            })
        }), this
    }, E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        E.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), E.expr.pseudos.animated = function (e) {
        return E.grep(E.timers, function (t) {
            return e === t.elem
        }).length
    }, E.offset = {
        setOffset: function (t, e, i) {
            var n, r, s, o, a, l, u = E.css(t, "position"),
                c = E(t),
                h = {};
            "static" === u && (t.style.position = "relative"), a = c.offset(), s = E.css(t, "top"), l = E.css(t, "left"), r = ("absolute" === u || "fixed" === u) && -1 < (s + l).indexOf("auto") ? (o = (n = c.position()).top, n.left) : (o = parseFloat(s) || 0, parseFloat(l) || 0), E.isFunction(e) && (e = e.call(t, i, E.extend({}, a))), null != e.top && (h.top = e.top - a.top + o), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : c.css(h)
        }
    }, E.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                E.offset.setOffset(this, e, t)
            });
            var t, i, n, r, s = this[0];
            return s ? s.getClientRects().length ? (n = s.getBoundingClientRect(), i = (t = s.ownerDocument).documentElement, r = t.defaultView, {
                top: n.top + r.pageYOffset - i.clientTop,
                left: n.left + r.pageXOffset - i.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === E.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), k(t[0], "html") || (n = t.offset()), n = {
                    top: n.top + E.css(t[0], "borderTopWidth", !0),
                    left: n.left + E.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - n.top - E.css(i, "marginTop", !0),
                    left: e.left - n.left - E.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === E.css(t, "position");) t = t.offsetParent;
                return t || mt
            })
        }
    }), E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, r) {
        var s = "pageYOffset" === r;
        E.fn[e] = function (t) {
            return W(this, function (t, e, i) {
                var n;
                return E.isWindow(t) ? n = t : 9 === t.nodeType && (n = t.defaultView), void 0 === i ? n ? n[r] : t[e] : void(n ? n.scrollTo(s ? n.pageXOffset : i, s ? i : n.pageYOffset) : t[e] = i)
            }, e, t, arguments.length)
        }
    }), E.each(["top", "left"], function (t, i) {
        E.cssHooks[i] = Mt(g.pixelPosition, function (t, e) {
            if (e) return e = Nt(t, i), Dt.test(e) ? E(t).position()[i] + "px" : e
        })
    }), E.each({
        Height: "height",
        Width: "width"
    }, function (o, a) {
        E.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        }, function (n, s) {
            E.fn[s] = function (t, e) {
                var i = arguments.length && (n || "boolean" != typeof t),
                    r = n || (!0 === t || !0 === e ? "margin" : "border");
                return W(this, function (t, e, i) {
                    var n;
                    return E.isWindow(t) ? 0 === s.indexOf("outer") ? t["inner" + o] : t.document.documentElement["client" + o] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + o], n["scroll" + o], t.body["offset" + o], n["offset" + o], n["client" + o])) : void 0 === i ? E.css(t, e, r) : E.style(t, e, i, r)
                }, a, i ? t : void 0, i)
            }
        })
    }), E.fn.extend({
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), E.holdReady = function (t) {
        t ? E.readyWait++ : E.ready(!0)
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = k, "function" == typeof define && define.amd && define("jquery", [], function () {
        return E
    });
    var Re = C.jQuery,
        Fe = C.$;
    return E.noConflict = function (t) {
        return C.$ === E && (C.$ = Fe), t && C.jQuery === E && (C.jQuery = Re), E
    }, t || (C.jQuery = C.$ = E), E
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (c) {
    c.extend(c.fn, {
        validate: function (t) {
            if (this.length) {
                var n = c.data(this[0], "validator");
                return n || (this.attr("novalidate", "novalidate"), n = new c.validator(t, this[0]), c.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
                    n.submitButton = t.currentTarget, c(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== c(this).attr("formnovalidate") && (n.cancelSubmit = !0)
                }), this.on("submit.validate", function (i) {
                    function t() {
                        var t, e;
                        return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (t = c("<input type='hidden'/>").attr("name", n.submitButton.name).val(c(n.submitButton).val()).appendTo(n.currentForm)), !n.settings.submitHandler || (e = n.settings.submitHandler.call(n, n.currentForm, i), t && t.remove(), void 0 !== e && e)
                    }
                    return n.settings.debug && i.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, t()) : n.form() ? n.pendingRequest ? !(n.formSubmitted = !0) : t() : (n.focusInvalid(), !1)
                })), n)
            }
            t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function () {
            var t, e, i;
            return c(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, e = c(this[0].form).validate(), this.each(function () {
                (t = e.element(this) && t) || (i = i.concat(e.errorList))
            }), e.errorList = i), t
        },
        rules: function (t, e) {
            var i, n, r, s, o, a, l = this[0];
            if (null != l && (!l.form && l.hasAttribute("contenteditable") && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) {
                if (t) switch (n = (i = c.data(l.form, "validator").settings).rules, r = c.validator.staticRules(l), t) {
                    case "add":
                        c.extend(r, c.validator.normalizeRule(e)), delete r.messages, n[l.name] = r, e.messages && (i.messages[l.name] = c.extend(i.messages[l.name], e.messages));
                        break;
                    case "remove":
                        return e ? (a = {}, c.each(e.split(/\s/), function (t, e) {
                            a[e] = r[e], delete r[e]
                        }), a) : (delete n[l.name], r)
                }
                return (s = c.validator.normalizeRules(c.extend({}, c.validator.classRules(l), c.validator.attributeRules(l), c.validator.dataRules(l), c.validator.staticRules(l)), l)).required && (o = s.required, delete s.required, s = c.extend({
                    required: o
                }, s)), s.remote && (o = s.remote, delete s.remote, s = c.extend(s, {
                    remote: o
                })), s
            }
        }
    }), c.extend(c.expr.pseudos || c.expr[":"], {
        blank: function (t) {
            return !c.trim("" + c(t).val())
        },
        filled: function (t) {
            var e = c(t).val();
            return null !== e && !!c.trim("" + e)
        },
        unchecked: function (t) {
            return !c(t).prop("checked")
        }
    }), c.validator = function (t, e) {
        this.settings = c.extend(!0, {}, c.validator.defaults, t), this.currentForm = e, this.init()
    }, c.validator.format = function (i, t) {
        return 1 === arguments.length ? function () {
            var t = c.makeArray(arguments);
            return t.unshift(i), c.validator.format.apply(this, t)
        } : (void 0 === t || (2 < arguments.length && t.constructor !== Array && (t = c.makeArray(arguments).slice(1)), t.constructor !== Array && (t = [t]), c.each(t, function (t, e) {
            i = i.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
                return e
            })
        })), i)
    }, c.extend(c.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: c([]),
            errorLabelContainer: c([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (t) {
                this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function (t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function (t, e) {
                9 === e.which && "" === this.elementValue(t) || -1 !== c.inArray(e.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function (t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function (t, e, i) {
                "radio" === t.type ? this.findByName(t.name).addClass(e).removeClass(i) : c(t).addClass(e).removeClass(i)
            },
            unhighlight: function (t, e, i) {
                "radio" === t.type ? this.findByName(t.name).removeClass(e).addClass(i) : c(t).removeClass(e).addClass(i)
            }
        },
        setDefaults: function (t) {
            c.extend(c.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: c.validator.format("Please enter no more than {0} characters."),
            minlength: c.validator.format("Please enter at least {0} characters."),
            rangelength: c.validator.format("Please enter a value between {0} and {1} characters long."),
            range: c.validator.format("Please enter a value between {0} and {1}."),
            max: c.validator.format("Please enter a value less than or equal to {0}."),
            min: c.validator.format("Please enter a value greater than or equal to {0}."),
            step: c.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                this.labelContainer = c(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm), this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i, n = this.groups = {};

                function t(t) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = c(this).closest("form")[0], this.name = c(this).attr("name"));
                    var e = c.data(this.form, "validator"),
                        i = "on" + t.type.replace(/^validate/, ""),
                        n = e.settings;
                    n[i] && !c(this).is(n.ignore) && n[i].call(e, this, t)
                }
                c.each(this.settings.groups, function (i, t) {
                    "string" == typeof t && (t = t.split(/\s/)), c.each(t, function (t, e) {
                        n[e] = i
                    })
                }), i = this.settings.rules, c.each(i, function (t, e) {
                    i[t] = c.validator.normalizeRule(e)
                }), c(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && c(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function () {
                return this.checkForm(), c.extend(this.submitted, this.errorMap), this.invalid = c.extend({}, this.errorMap), this.valid() || c(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            },
            element: function (t) {
                var e, i, n = this.clean(t),
                    r = this.validationTargetFor(n),
                    s = this,
                    o = !0;
                return void 0 === r ? delete this.invalid[n.name] : (this.prepareElement(r), this.currentElements = c(r), (i = this.groups[r.name]) && c.each(this.groups, function (t, e) {
                    e === i && t !== r.name && (n = s.validationTargetFor(s.clean(s.findByName(t)))) && n.name in s.invalid && (s.currentElements.push(n), o = s.check(n) && o)
                }), e = !1 !== this.check(r), o = o && e, this.invalid[r.name] = !e, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), c(t).attr("aria-invalid", !e)), o
            },
            showErrors: function (e) {
                if (e) {
                    var i = this;
                    c.extend(this.errorMap, e), this.errorList = c.map(this.errorMap, function (t, e) {
                        return {
                            message: t,
                            element: i.findByName(e)[0]
                        }
                    }), this.successList = c.grep(this.successList, function (t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function () {
                c.fn.resetForm && c(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function (t) {
                var e;
                if (this.settings.unhighlight)
                    for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
                else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (t) {
                var e, i = 0;
                for (e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && i++;
                return i
            },
            hideErrors: function () {
                this.hideThese(this.toHide)
            },
            hideThese: function (t) {
                t.not(this.containers).text(""), this.addWrapper(t).hide()
            },
            valid: function () {
                return 0 === this.size()
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function () {
                var e = this.lastActive;
                return e && 1 === c.grep(this.errorList, function (t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function () {
                var e = this,
                    i = {};
                return c(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                    var t = this.name || c(this).attr("name");
                    return !t && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = c(this).closest("form")[0], this.name = t), !(t in i || !e.objectLength(c(this).rules())) && (i[t] = !0)
                })
            },
            clean: function (t) {
                return c(t)[0]
            },
            errors: function () {
                var t = this.settings.errorClass.split(" ").join(".");
                return c(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = c([]), this.toHide = c([])
            },
            reset: function () {
                this.resetInternals(), this.currentElements = c([])
            },
            prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (t) {
                this.reset(), this.toHide = this.errorsFor(t)
            },
            elementValue: function (t) {
                var e, i, n = c(t),
                    r = t.type;
                return "radio" === r || "checkbox" === r ? this.findByName(t.name).filter(":checked").val() : "number" === r && void 0 !== t.validity ? t.validity.badInput ? "NaN" : n.val() : (e = t.hasAttribute("contenteditable") ? n.text() : n.val(), "file" === r ? "C:\\fakepath\\" === e.substr(0, 12) ? e.substr(12) : 0 <= (i = e.lastIndexOf("/")) ? e.substr(i + 1) : 0 <= (i = e.lastIndexOf("\\")) ? e.substr(i + 1) : e : "string" == typeof e ? e.replace(/\r/g, "") : e)
            },
            check: function (e) {
                e = this.validationTargetFor(this.clean(e));
                var t, i, n, r, s = c(e).rules(),
                    o = c.map(s, function (t, e) {
                        return e
                    }).length,
                    a = !1,
                    l = this.elementValue(e);
                if ("function" == typeof s.normalizer ? r = s.normalizer : "function" == typeof this.settings.normalizer && (r = this.settings.normalizer), r) {
                    if ("string" != typeof (l = r.call(e, l))) throw new TypeError("The normalizer should return a string value.");
                    delete s.normalizer
                }
                for (i in s) {
                    n = {
                        method: i,
                        parameters: s[i]
                    };
                    try {
                        if ("dependency-mismatch" === (t = c.validator.methods[i].call(this, l, e, n.parameters)) && 1 === o) {
                            a = !0;
                            continue
                        }
                        if (a = !1, "pending" === t) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!t) return this.formatAndAdd(e, n), !1
                    } catch (t) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method."), t
                    }
                }
                if (!a) return this.objectLength(s) && this.successList.push(e), !0
            },
            customDataMessage: function (t, e) {
                return c(t).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || c(t).data("msg")
            },
            customMessage: function (t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            },
            findDefined: function () {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t]) return arguments[t]
            },
            defaultMessage: function (t, e) {
                "string" == typeof e && (e = {
                    method: e
                });
                var i = this.findDefined(this.customMessage(t.name, e.method), this.customDataMessage(t, e.method), !this.settings.ignoreTitle && t.title || void 0, c.validator.messages[e.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                    n = /\$?\{(\d+)\}/g;
                return "function" == typeof i ? i = i.call(this, e.parameters, t) : n.test(i) && (i = c.validator.format(i.replace(n, "{$1}"), e.parameters)), i
            },
            formatAndAdd: function (t, e) {
                var i = this.defaultMessage(t, e);
                this.errorList.push({
                    message: i,
                    element: t,
                    method: e.method
                }), this.errorMap[t.name] = i, this.submitted[t.name] = i
            },
            addWrapper: function (t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            },
            defaultShowErrors: function () {
                var t, e, i;
                for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return c(this.errorList).map(function () {
                    return this.element
                })
            },
            showLabel: function (t, e) {
                var i, n, r, s, o = this.errorsFor(t),
                    a = this.idOrName(t),
                    l = c(t).attr("aria-describedby");
                o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(e)) : (i = o = c("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(e || ""), this.settings.wrapper && (i = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, c(t)) : i.insertAfter(t), o.is("label") ? o.attr("for", a) : 0 === o.parents("label[for='" + this.escapeCssMeta(a) + "']").length && (r = o.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (l += " " + r) : l = r, c(t).attr("aria-describedby", l), (n = this.groups[t.name]) && (s = this, c.each(s.groups, function (t, e) {
                    e === n && c("[name='" + s.escapeCssMeta(t) + "']", s.currentForm).attr("aria-describedby", o.attr("id"))
                })))), !e && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, t)), this.toShow = this.toShow.add(o)
            },
            errorsFor: function (t) {
                var e = this.escapeCssMeta(this.idOrName(t)),
                    i = c(t).attr("aria-describedby"),
                    n = "label[for='" + e + "'], label[for='" + e + "'] *";
                return i && (n = n + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(n)
            },
            escapeCssMeta: function (t) {
                return t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function (t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function (t) {
                return this.checkable(t) && (t = this.findByName(t.name)), c(t).not(this.settings.ignore)[0]
            },
            checkable: function (t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function (t) {
                return c(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function (t, e) {
                switch (e.nodeName.toLowerCase()) {
                    case "select":
                        return c("option:selected", e).length;
                    case "input":
                        if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length
                }
                return t.length
            },
            depend: function (t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            },
            dependTypes: {
                boolean: function (t) {
                    return t
                },
                string: function (t, e) {
                    return !!c(t, e.form).length
                },
                function: function (t, e) {
                    return t(e)
                }
            },
            optional: function (t) {
                var e = this.elementValue(t);
                return !c.validator.methods.required.call(this, e, t) && "dependency-mismatch"
            },
            startRequest: function (t) {
                this.pending[t.name] || (this.pendingRequest++, c(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
            },
            stopRequest: function (t, e) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], c(t).removeClass(this.settings.pendingClass), e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (c(this.currentForm).submit(), this.submitButton && c("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (c(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function (t, e) {
                return e = "string" == typeof e && e || "remote", c.data(t, "previousValue") || c.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: e
                    })
                })
            },
            destroy: function () {
                this.resetForm(), c(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function (t, e) {
            t.constructor === String ? this.classRuleSettings[t] = e : c.extend(this.classRuleSettings, t)
        },
        classRules: function (t) {
            var e = {},
                i = c(t).attr("class");
            return i && c.each(i.split(" "), function () {
                this in c.validator.classRuleSettings && c.extend(e, c.validator.classRuleSettings[this])
            }), e
        },
        normalizeAttributeRule: function (t, e, i, n) {
            /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? t[i] = n : e === i && "range" !== e && (t[i] = !0)
        },
        attributeRules: function (t) {
            var e, i, n = {},
                r = c(t),
                s = t.getAttribute("type");
            for (e in c.validator.methods) i = "required" === e ? ("" === (i = t.getAttribute(e)) && (i = !0), !!i) : r.attr(e), this.normalizeAttributeRule(n, s, e, i);
            return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
        },
        dataRules: function (t) {
            var e, i, n = {},
                r = c(t),
                s = t.getAttribute("type");
            for (e in c.validator.methods) i = r.data("rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()), this.normalizeAttributeRule(n, s, e, i);
            return n
        },
        staticRules: function (t) {
            var e = {},
                i = c.data(t.form, "validator");
            return i.settings.rules && (e = c.validator.normalizeRule(i.settings.rules[t.name]) || {}), e
        },
        normalizeRules: function (n, r) {
            return c.each(n, function (t, e) {
                if (!1 !== e) {
                    if (e.param || e.depends) {
                        var i = !0;
                        switch (typeof e.depends) {
                            case "string":
                                i = !!c(e.depends, r.form).length;
                                break;
                            case "function":
                                i = e.depends.call(r, r)
                        }
                        i ? n[t] = void 0 === e.param || e.param : (c.data(r.form, "validator").resetElements(c(r)), delete n[t])
                    }
                } else delete n[t]
            }), c.each(n, function (t, e) {
                n[t] = c.isFunction(e) && "normalizer" !== t ? e(r) : e
            }), c.each(["minlength", "maxlength"], function () {
                n[this] && (n[this] = Number(n[this]))
            }), c.each(["rangelength", "range"], function () {
                var t;
                n[this] && (c.isArray(n[this]) ? n[this] = [Number(n[this][0]), Number(n[this][1])] : "string" == typeof n[this] && (t = n[this].replace(/[\[\]]/g, "").split(/[\s,]+/), n[this] = [Number(t[0]), Number(t[1])]))
            }), c.validator.autoCreateRanges && (null != n.min && null != n.max && (n.range = [n.min, n.max], delete n.min, delete n.max), null != n.minlength && null != n.maxlength && (n.rangelength = [n.minlength, n.maxlength], delete n.minlength, delete n.maxlength)), n
        },
        normalizeRule: function (t) {
            if ("string" == typeof t) {
                var e = {};
                c.each(t.split(/\s/), function () {
                    e[this] = !0
                }), t = e
            }
            return t
        },
        addMethod: function (t, e, i) {
            c.validator.methods[t] = e, c.validator.messages[t] = void 0 !== i ? i : c.validator.messages[t], e.length < 3 && c.validator.addClassRules(t, c.validator.normalizeRule(t))
        },
        methods: {
            required: function (t, e, i) {
                if (!this.depend(i, e)) return "dependency-mismatch";
                if ("select" !== e.nodeName.toLowerCase()) return this.checkable(e) ? 0 < this.getLength(t, e) : 0 < t.length;
                var n = c(e).val();
                return n && 0 < n.length
            },
            email: function (t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function (t, e) {
                return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)
            },
            date: function (t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            },
            dateISO: function (t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function (t, e) {
                return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function (t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            minlength: function (t, e, i) {
                var n = c.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || i <= n
            },
            maxlength: function (t, e, i) {
                var n = c.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || n <= i
            },
            rangelength: function (t, e, i) {
                var n = c.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || n >= i[0] && n <= i[1]
            },
            min: function (t, e, i) {
                return this.optional(e) || i <= t
            },
            max: function (t, e, i) {
                return this.optional(e) || t <= i
            },
            range: function (t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            step: function (t, e, i) {
                var n, r = c(e).attr("type"),
                    s = "Step attribute on input type " + r + " is not supported.",
                    o = new RegExp("\\b" + r + "\\b"),
                    a = function (t) {
                        var e = ("" + t).match(/(?:\.(\d+))?$/);
                        return e && e[1] ? e[1].length : 0
                    },
                    l = function (t) {
                        return Math.round(t * Math.pow(10, n))
                    },
                    u = !0;
                if (r && !o.test(["text", "number", "range"].join())) throw new Error(s);
                return n = a(i), (a(t) > n || l(t) % l(i) != 0) && (u = !1), this.optional(e) || u
            },
            equalTo: function (t, e, i) {
                var n = c(i);
                return this.settings.onfocusout && n.not(".validate-equalTo-blur").length && n.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                    c(e).valid()
                }), t === n.val()
            },
            remote: function (s, o, t, a) {
                if (this.optional(o)) return "dependency-mismatch";
                a = "string" == typeof a && a || "remote";
                var l, e, i, u = this.previousValue(o, a);
                return this.settings.messages[o.name] || (this.settings.messages[o.name] = {}), u.originalMessage = u.originalMessage || this.settings.messages[o.name][a], this.settings.messages[o.name][a] = u.message, t = "string" == typeof t && {
                    url: t
                } || t, i = c.param(c.extend({
                    data: s
                }, t.data)), u.old === i ? u.valid : (u.old = i, (l = this).startRequest(o), (e = {})[o.name] = s, c.ajax(c.extend(!0, {
                    mode: "abort",
                    port: "validate" + o.name,
                    dataType: "json",
                    data: e,
                    context: l.currentForm,
                    success: function (t) {
                        var e, i, n, r = !0 === t || "true" === t;
                        l.settings.messages[o.name][a] = u.originalMessage, r ? (n = l.formSubmitted, l.resetInternals(), l.toHide = l.errorsFor(o), l.formSubmitted = n, l.successList.push(o), l.invalid[o.name] = !1, l.showErrors()) : (e = {}, i = t || l.defaultMessage(o, {
                            method: a,
                            parameters: s
                        }), e[o.name] = u.message = i, l.invalid[o.name] = !0, l.showErrors(e)), u.valid = r, l.stopRequest(o, r)
                    }
                }, t)), "pending")
            }
        }
    });
    var n, r = {};
    return c.ajaxPrefilter ? c.ajaxPrefilter(function (t, e, i) {
        var n = t.port;
        "abort" === t.mode && (r[n] && r[n].abort(), r[n] = i)
    }) : (n = c.ajax, c.ajax = function (t) {
        var e = ("mode" in t ? t : c.ajaxSettings).mode,
            i = ("port" in t ? t : c.ajaxSettings).port;
        return "abort" === e ? (r[i] && r[i].abort(), r[i] = n.apply(this, arguments), r[i]) : n.apply(this, arguments)
    }), c
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(window.jQuery || window.Zepto)
}(function (c) {
    var h, n, d, r, p, e, l = "Close",
        u = "BeforeClose",
        f = "MarkupParse",
        m = "Open",
        g = ".mfp",
        v = "mfp-ready",
        i = "mfp-removing",
        o = "mfp-prevent-close",
        t = function () {},
        a = !!window.jQuery,
        y = c(window),
        w = function (t, e) {
            h.ev.on("mfp" + t + g, e)
        },
        b = function (t, e, i, n) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t, i && (r.innerHTML = i), n ? e && e.appendChild(r) : (r = c(r), e && r.appendTo(e)), r
        },
        x = function (t, e) {
            h.ev.triggerHandler("mfp" + t, e), h.st.callbacks && (t = t.charAt(0).toLowerCase() + t.slice(1), h.st.callbacks[t] && h.st.callbacks[t].apply(h, c.isArray(e) ? e : [e]))
        },
        _ = function (t) {
            return t === e && h.currTemplate.closeBtn || (h.currTemplate.closeBtn = c(h.st.closeMarkup.replace("%title%", h.st.tClose)), e = t), h.currTemplate.closeBtn
        },
        s = function () {
            c.magnificPopup.instance || ((h = new t).init(), c.magnificPopup.instance = h)
        };
    t.prototype = {
        constructor: t,
        init: function () {
            var t = navigator.appVersion;
            h.isLowIE = h.isIE8 = document.all && !document.addEventListener, h.isAndroid = /android/gi.test(t), h.isIOS = /iphone|ipad|ipod/gi.test(t), h.supportsTransition = function () {
                var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;)
                    if (e.pop() + "Transition" in t) return !0;
                return !1
            }(), h.probablyMobile = h.isAndroid || h.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = c(document), h.popupsCache = {}
        },
        open: function (t) {
            var e;
            if (!1 === t.isObj) {
                h.items = t.items.toArray(), h.index = 0;
                var i, n = t.items;
                for (e = 0; e < n.length; e++)
                    if ((i = n[e]).parsed && (i = i.el[0]), i === t.el[0]) {
                        h.index = e;
                        break
                    }
            } else h.items = c.isArray(t.items) ? t.items : [t.items], h.index = t.index || 0;
            if (!h.isOpen) {
                h.types = [], p = "", t.mainEl && t.mainEl.length ? h.ev = t.mainEl.eq(0) : h.ev = d, t.key ? (h.popupsCache[t.key] || (h.popupsCache[t.key] = {}), h.currTemplate = h.popupsCache[t.key]) : h.currTemplate = {}, h.st = c.extend(!0, {}, c.magnificPopup.defaults, t), h.fixedContentPos = "auto" === h.st.fixedContentPos ? !h.probablyMobile : h.st.fixedContentPos, h.st.modal && (h.st.closeOnContentClick = !1, h.st.closeOnBgClick = !1, h.st.showCloseBtn = !1, h.st.enableEscapeKey = !1), h.bgOverlay || (h.bgOverlay = b("bg").on("click" + g, function () {
                    h.close()
                }), h.wrap = b("wrap").attr("tabindex", -1).on("click" + g, function (t) {
                    h._checkIfClose(t.target) && h.close()
                }), h.container = b("container", h.wrap)), h.contentContainer = b("content"), h.st.preloader && (h.preloader = b("preloader", h.container, h.st.tLoading));
                var r = c.magnificPopup.modules;
                for (e = 0; e < r.length; e++) {
                    var s = r[e];
                    s = s.charAt(0).toUpperCase() + s.slice(1), h["init" + s].call(h)
                }
                x("BeforeOpen"), h.st.showCloseBtn && (h.st.closeBtnInside ? (w(f, function (t, e, i, n) {
                    i.close_replaceWith = _(n.type)
                }), p += " mfp-close-btn-in") : h.wrap.append(_())), h.st.alignTop && (p += " mfp-align-top"), h.fixedContentPos ? h.wrap.css({
                    overflow: h.st.overflowY,
                    overflowX: "hidden",
                    overflowY: h.st.overflowY
                }) : h.wrap.css({
                    top: y.scrollTop(),
                    position: "absolute"
                }), (!1 === h.st.fixedBgPos || "auto" === h.st.fixedBgPos && !h.fixedContentPos) && h.bgOverlay.css({
                    height: d.height(),
                    position: "absolute"
                }), h.st.enableEscapeKey && d.on("keyup" + g, function (t) {
                    27 === t.keyCode && h.close()
                }), y.on("resize" + g, function () {
                    h.updateSize()
                }), h.st.closeOnContentClick || (p += " mfp-auto-cursor"), p && h.wrap.addClass(p);
                var o = h.wH = y.height(),
                    a = {};
                if (h.fixedContentPos && h._hasScrollBar(o)) {
                    var l = h._getScrollbarSize();
                    l && (a.marginRight = l)
                }
                h.fixedContentPos && (h.isIE7 ? c("body, html").css("overflow", "hidden") : a.overflow = "hidden");
                var u = h.st.mainClass;
                return h.isIE7 && (u += " mfp-ie7"), u && h._addClassToMFP(u), h.updateItemHTML(), x("BuildControls"), c("html").css(a), h.bgOverlay.add(h.wrap).prependTo(h.st.prependTo || c(document.body)), h._lastFocusedEl = document.activeElement, setTimeout(function () {
                    h.content ? (h._addClassToMFP(v), h._setFocus()) : h.bgOverlay.addClass(v), d.on("focusin" + g, h._onFocusIn)
                }, 16), h.isOpen = !0, h.updateSize(o), x(m), t
            }
            h.updateItemHTML()
        },
        close: function () {
            h.isOpen && (x(u), h.isOpen = !1, h.st.removalDelay && !h.isLowIE && h.supportsTransition ? (h._addClassToMFP(i), setTimeout(function () {
                h._close()
            }, h.st.removalDelay)) : h._close())
        },
        _close: function () {
            x(l);
            var t = i + " " + v + " ";
            if (h.bgOverlay.detach(), h.wrap.detach(), h.container.empty(), h.st.mainClass && (t += h.st.mainClass + " "), h._removeClassFromMFP(t), h.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                h.isIE7 ? c("body, html").css("overflow", "") : e.overflow = "", c("html").css(e)
            }
            d.off("keyup.mfp focusin" + g), h.ev.off(g), h.wrap.attr("class", "mfp-wrap").removeAttr("style"), h.bgOverlay.attr("class", "mfp-bg"), h.container.attr("class", "mfp-container"), !h.st.showCloseBtn || h.st.closeBtnInside && !0 !== h.currTemplate[h.currItem.type] || h.currTemplate.closeBtn && h.currTemplate.closeBtn.detach(), h.st.autoFocusLast && h._lastFocusedEl && c(h._lastFocusedEl).focus(), h.currItem = null, h.content = null, h.currTemplate = null, h.prevHeight = 0, x("AfterClose")
        },
        updateSize: function (t) {
            if (h.isIOS) {
                var e = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * e;
                h.wrap.css("height", i), h.wH = i
            } else h.wH = t || y.height();
            h.fixedContentPos || h.wrap.css("height", h.wH), x("Resize")
        },
        updateItemHTML: function () {
            var t = h.items[h.index];
            h.contentContainer.detach(), h.content && h.content.detach(), t.parsed || (t = h.parseEl(h.index));
            var e = t.type;
            if (x("BeforeChange", [h.currItem ? h.currItem.type : "", e]), h.currItem = t, !h.currTemplate[e]) {
                var i = !!h.st[e] && h.st[e].markup;
                x("FirstMarkupParse", i), h.currTemplate[e] = !i || c(i)
            }
            r && r !== t.type && h.container.removeClass("mfp-" + r + "-holder");
            var n = h["get" + e.charAt(0).toUpperCase() + e.slice(1)](t, h.currTemplate[e]);
            h.appendContent(n, e), t.preloaded = !0, x("Change", t), r = t.type, h.container.prepend(h.contentContainer), x("AfterChange")
        },
        appendContent: function (t, e) {
            (h.content = t) ? h.st.showCloseBtn && h.st.closeBtnInside && !0 === h.currTemplate[e] ? h.content.find(".mfp-close").length || h.content.append(_()) : h.content = t: h.content = "", x("BeforeAppend"), h.container.addClass("mfp-" + e + "-holder"), h.contentContainer.append(h.content)
        },
        parseEl: function (t) {
            var e, i = h.items[t];
            if ((i = i.tagName ? {
                    el: c(i)
                } : (e = i.type, {
                    data: i,
                    src: i.src
                })).el) {
                for (var n = h.types, r = 0; r < n.length; r++)
                    if (i.el.hasClass("mfp-" + n[r])) {
                        e = n[r];
                        break
                    } i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
            }
            return i.type = e || h.st.type || "inline", i.index = t, i.parsed = !0, h.items[t] = i, x("ElementParse", i), h.items[t]
        },
        addGroup: function (e, i) {
            var t = function (t) {
                t.mfpEl = this, h._openClick(t, e, i)
            };
            i || (i = {});
            var n = "click.magnificPopup";
            i.mainEl = e, i.items ? (i.isObj = !0, e.off(n).on(n, t)) : (i.isObj = !1, i.delegate ? e.off(n).on(n, i.delegate, t) : (i.items = e).off(n).on(n, t))
        },
        _openClick: function (t, e, i) {
            if ((void 0 !== i.midClick ? i.midClick : c.magnificPopup.defaults.midClick) || !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {
                var n = void 0 !== i.disableOn ? i.disableOn : c.magnificPopup.defaults.disableOn;
                if (n)
                    if (c.isFunction(n)) {
                        if (!n.call(h)) return !0
                    } else if (y.width() < n) return !0;
                t.type && (t.preventDefault(), h.isOpen && t.stopPropagation()), i.el = c(t.mfpEl), i.delegate && (i.items = e.find(i.delegate)), h.open(i)
            }
        },
        updateStatus: function (t, e) {
            if (h.preloader) {
                n !== t && h.container.removeClass("mfp-s-" + n), e || "loading" !== t || (e = h.st.tLoading);
                var i = {
                    status: t,
                    text: e
                };
                x("UpdateStatus", i), t = i.status, e = i.text, h.preloader.html(e), h.preloader.find("a").on("click", function (t) {
                    t.stopImmediatePropagation()
                }), h.container.addClass("mfp-s-" + t), n = t
            }
        },
        _checkIfClose: function (t) {
            if (!c(t).hasClass(o)) {
                var e = h.st.closeOnContentClick,
                    i = h.st.closeOnBgClick;
                if (e && i) return !0;
                if (!h.content || c(t).hasClass("mfp-close") || h.preloader && t === h.preloader[0]) return !0;
                if (t === h.content[0] || c.contains(h.content[0], t)) {
                    if (e) return !0
                } else if (i && c.contains(document, t)) return !0;
                return !1
            }
        },
        _addClassToMFP: function (t) {
            h.bgOverlay.addClass(t), h.wrap.addClass(t)
        },
        _removeClassFromMFP: function (t) {
            this.bgOverlay.removeClass(t), h.wrap.removeClass(t)
        },
        _hasScrollBar: function (t) {
            return (h.isIE7 ? d.height() : document.body.scrollHeight) > (t || y.height())
        },
        _setFocus: function () {
            (h.st.focus ? h.content.find(h.st.focus).eq(0) : h.wrap).focus()
        },
        _onFocusIn: function (t) {
            if (t.target !== h.wrap[0] && !c.contains(h.wrap[0], t.target)) return h._setFocus(), !1
        },
        _parseMarkup: function (r, t, e) {
            var s;
            e.data && (t = c.extend(e.data, t)), x(f, [r, t, e]), c.each(t, function (t, e) {
                if (void 0 === e || !1 === e) return !0;
                if (1 < (s = t.split("_")).length) {
                    var i = r.find(g + "-" + s[0]);
                    if (0 < i.length) {
                        var n = s[1];
                        "replaceWith" === n ? i[0] !== e[0] && i.replaceWith(e) : "img" === n ? i.is("img") ? i.attr("src", e) : i.replaceWith(c("<img>").attr("src", e).attr("class", i.attr("class"))) : i.attr(s[1], e)
                    }
                } else r.find(g + "-" + t).html(e)
            })
        },
        _getScrollbarSize: function () {
            if (void 0 === h.scrollbarSize) {
                var t = document.createElement("div");
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), h.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
            }
            return h.scrollbarSize
        }
    }, c.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function (t, e) {
            return s(), (t = t ? c.extend(!0, {}, t) : {}).isObj = !0, t.index = e || 0, this.instance.open(t)
        },
        close: function () {
            return c.magnificPopup.instance && c.magnificPopup.instance.close()
        },
        registerModule: function (t, e) {
            e.options && (c.magnificPopup.defaults[t] = e.options), c.extend(this.proto, e.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, c.fn.magnificPopup = function (t) {
        s();
        var e = c(this);
        if ("string" == typeof t)
            if ("open" === t) {
                var i, n = a ? e.data("magnificPopup") : e[0].magnificPopup,
                    r = parseInt(arguments[1], 10) || 0;
                i = n.items ? n.items[r] : (i = e, n.delegate && (i = i.find(n.delegate)), i.eq(r)), h._openClick({
                    mfpEl: i
                }, e, n)
            } else h.isOpen && h[t].apply(h, Array.prototype.slice.call(arguments, 1));
        else t = c.extend(!0, {}, t), a ? e.data("magnificPopup", t) : e[0].magnificPopup = t, h.addGroup(e, t);
        return e
    };
    var C, T, E, S = "inline",
        k = function () {
            E && (T.after(E.addClass(C)).detach(), E = null)
        };
    c.magnificPopup.registerModule(S, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                h.types.push(S), w(l + "." + S, function () {
                    k()
                })
            },
            getInline: function (t, e) {
                if (k(), t.src) {
                    var i = h.st.inline,
                        n = c(t.src);
                    if (n.length) {
                        var r = n[0].parentNode;
                        r && r.tagName && (T || (C = i.hiddenClass, T = b(C), C = "mfp-" + C), E = n.after(T).detach().removeClass(C)), h.updateStatus("ready")
                    } else h.updateStatus("error", i.tNotFound), n = c("<div>");
                    return t.inlineElement = n
                }
                return h.updateStatus("ready"), h._parseMarkup(e, {}, t), e
            }
        }
    });
    var I, z = "ajax",
        L = function () {
            I && c(document.body).removeClass(I)
        },
        $ = function () {
            L(), h.req && h.req.abort()
        };
    c.magnificPopup.registerModule(z, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                h.types.push(z), I = h.st.ajax.cursor, w(l + "." + z, $), w("BeforeChange." + z, $)
            },
            getAjax: function (r) {
                I && c(document.body).addClass(I), h.updateStatus("loading");
                var t = c.extend({
                    url: r.src,
                    success: function (t, e, i) {
                        var n = {
                            data: t,
                            xhr: i
                        };
                        x("ParseAjax", n), h.appendContent(c(n.data), z), r.finished = !0, L(), h._setFocus(), setTimeout(function () {
                            h.wrap.addClass(v)
                        }, 16), h.updateStatus("ready"), x("AjaxContentAdded")
                    },
                    error: function () {
                        L(), r.finished = r.loadError = !0, h.updateStatus("error", h.st.ajax.tError.replace("%url%", r.src))
                    }
                }, h.st.ajax.settings);
                return h.req = c.ajax(t), ""
            }
        }
    });
    var j;
    c.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var t = h.st.image,
                    e = ".image";
                h.types.push("image"), w(m + e, function () {
                    "image" === h.currItem.type && t.cursor && c(document.body).addClass(t.cursor)
                }), w(l + e, function () {
                    t.cursor && c(document.body).removeClass(t.cursor), y.off("resize" + g)
                }), w("Resize" + e, h.resizeImage), h.isLowIE && w("AfterChange", h.resizeImage)
            },
            resizeImage: function () {
                var t = h.currItem;
                if (t && t.img && h.st.image.verticalFit) {
                    var e = 0;
                    h.isLowIE && (e = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", h.wH - e)
                }
            },
            _onImageHasSize: function (t) {
                t.img && (t.hasSize = !0, j && clearInterval(j), t.isCheckingImgSize = !1, x("ImageHasSize", t), t.imgHidden && (h.content && h.content.removeClass("mfp-loading"), t.imgHidden = !1))
            },
            findImageSize: function (e) {
                var i = 0,
                    n = e.img[0],
                    r = function (t) {
                        j && clearInterval(j), j = setInterval(function () {
                            0 < n.naturalWidth ? h._onImageHasSize(e) : (200 < i && clearInterval(j), 3 === ++i ? r(10) : 40 === i ? r(50) : 100 === i && r(500))
                        }, t)
                    };
                r(1)
            },
            getImage: function (t, e) {
                var i = 0,
                    n = function () {
                        t && (t.img[0].complete ? (t.img.off(".mfploader"), t === h.currItem && (h._onImageHasSize(t), h.updateStatus("ready")), t.hasSize = !0, t.loaded = !0, x("ImageLoadComplete")) : ++i < 200 ? setTimeout(n, 100) : r())
                    },
                    r = function () {
                        t && (t.img.off(".mfploader"), t === h.currItem && (h._onImageHasSize(t), h.updateStatus("error", s.tError.replace("%url%", t.src))), t.hasSize = !0, t.loaded = !0, t.loadError = !0)
                    },
                    s = h.st.image,
                    o = e.find(".mfp-img");
                if (o.length) {
                    var a = document.createElement("img");
                    a.className = "mfp-img", t.el && t.el.find("img").length && (a.alt = t.el.find("img").attr("alt")), t.img = c(a).on("load.mfploader", n).on("error.mfploader", r), a.src = t.src, o.is("img") && (t.img = t.img.clone()), 0 < (a = t.img[0]).naturalWidth ? t.hasSize = !0 : a.width || (t.hasSize = !1)
                }
                return h._parseMarkup(e, {
                    title: function (t) {
                        if (t.data && void 0 !== t.data.title) return t.data.title;
                        var e = h.st.image.titleSrc;
                        if (e) {
                            if (c.isFunction(e)) return e.call(h, t);
                            if (t.el) return t.el.attr(e) || ""
                        }
                        return ""
                    }(t),
                    img_replaceWith: t.img
                }, t), h.resizeImage(), t.hasSize ? (j && clearInterval(j), t.loadError ? (e.addClass("mfp-loading"), h.updateStatus("error", s.tError.replace("%url%", t.src))) : (e.removeClass("mfp-loading"), h.updateStatus("ready"))) : (h.updateStatus("loading"), t.loading = !0, t.hasSize || (t.imgHidden = !0, e.addClass("mfp-loading"), h.findImageSize(t))), e
            }
        }
    });
    var A;
    c.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (t) {
                return t.is("img") ? t : t.find("img")
            }
        },
        proto: {
            initZoom: function () {
                var t, s = h.st.zoom,
                    e = ".zoom";
                if (s.enabled && h.supportsTransition) {
                    var i, n, r = s.duration,
                        o = function (t) {
                            var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + s.duration / 1e3 + "s " + s.easing,
                                n = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                r = "transition";
                            return n["-webkit-" + r] = n["-moz-" + r] = n["-o-" + r] = n[r] = i, e.css(n), e
                        },
                        a = function () {
                            h.content.css("visibility", "visible")
                        };
                    w("BuildControls" + e, function () {
                        if (h._allowZoom()) {
                            if (clearTimeout(i), h.content.css("visibility", "hidden"), !(t = h._getItemToZoom())) return void a();
                            (n = o(t)).css(h._getOffset()), h.wrap.append(n), i = setTimeout(function () {
                                n.css(h._getOffset(!0)), i = setTimeout(function () {
                                    a(), setTimeout(function () {
                                        n.remove(), t = n = null, x("ZoomAnimationEnded")
                                    }, 16)
                                }, r)
                            }, 16)
                        }
                    }), w(u + e, function () {
                        if (h._allowZoom()) {
                            if (clearTimeout(i), h.st.removalDelay = r, !t) {
                                if (!(t = h._getItemToZoom())) return;
                                n = o(t)
                            }
                            n.css(h._getOffset(!0)), h.wrap.append(n), h.content.css("visibility", "hidden"), setTimeout(function () {
                                n.css(h._getOffset())
                            }, 16)
                        }
                    }), w(l + e, function () {
                        h._allowZoom() && (a(), n && n.remove(), t = null)
                    })
                }
            },
            _allowZoom: function () {
                return "image" === h.currItem.type
            },
            _getItemToZoom: function () {
                return !!h.currItem.hasSize && h.currItem.img
            },
            _getOffset: function (t) {
                var e, i = (e = t ? h.currItem.img : h.st.zoom.opener(h.currItem.el || h.currItem)).offset(),
                    n = parseInt(e.css("padding-top"), 10),
                    r = parseInt(e.css("padding-bottom"), 10);
                i.top -= c(window).scrollTop() - n;
                var s = {
                    width: e.width(),
                    height: (a ? e.innerHeight() : e[0].offsetHeight) - r - n
                };
                return void 0 === A && (A = void 0 !== document.createElement("p").style.MozTransform), A ? s["-moz-transform"] = s.transform = "translate(" + i.left + "px," + i.top + "px)" : (s.left = i.left, s.top = i.top), s
            }
        }
    });
    var O = "iframe",
        D = function (t) {
            if (h.currTemplate[O]) {
                var e = h.currTemplate[O].find("iframe");
                e.length && (t || (e[0].src = "//about:blank"), h.isIE8 && e.css("display", t ? "block" : "none"))
            }
        };
    c.magnificPopup.registerModule(O, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function () {
                h.types.push(O), w("BeforeChange", function (t, e, i) {
                    e !== i && (e === O ? D() : i === O && D(!0))
                }), w(l + "." + O, function () {
                    D()
                })
            },
            getIframe: function (t, e) {
                var i = t.src,
                    n = h.st.iframe;
                c.each(n.patterns, function () {
                    if (-1 < i.indexOf(this.index)) return this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1
                });
                var r = {};
                return n.srcAction && (r[n.srcAction] = i), h._parseMarkup(e, r, t), h.updateStatus("ready"), e
            }
        }
    });
    var P = function (t) {
            var e = h.items.length;
            return e - 1 < t ? t - e : t < 0 ? e + t : t
        },
        N = function (t, e, i) {
            return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
        };
    c.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function () {
                var s = h.st.gallery,
                    t = ".mfp-gallery";
                if (h.direction = !0, !s || !s.enabled) return !1;
                p += " mfp-gallery", w(m + t, function () {
                    s.navigateByImgClick && h.wrap.on("click" + t, ".mfp-img", function () {
                        if (1 < h.items.length) return h.next(), !1
                    }), d.on("keydown" + t, function (t) {
                        37 === t.keyCode ? h.prev() : 39 === t.keyCode && h.next()
                    })
                }), w("UpdateStatus" + t, function (t, e) {
                    e.text && (e.text = N(e.text, h.currItem.index, h.items.length))
                }), w(f + t, function (t, e, i, n) {
                    var r = h.items.length;
                    i.counter = 1 < r ? N(s.tCounter, n.index, r) : ""
                }), w("BuildControls" + t, function () {
                    if (1 < h.items.length && s.arrows && !h.arrowLeft) {
                        var t = s.arrowMarkup,
                            e = h.arrowLeft = c(t.replace(/%title%/gi, s.tPrev).replace(/%dir%/gi, "left")).addClass(o),
                            i = h.arrowRight = c(t.replace(/%title%/gi, s.tNext).replace(/%dir%/gi, "right")).addClass(o);
                        e.click(function () {
                            h.prev()
                        }), i.click(function () {
                            h.next()
                        }), h.container.append(e.add(i))
                    }
                }), w("Change" + t, function () {
                    h._preloadTimeout && clearTimeout(h._preloadTimeout), h._preloadTimeout = setTimeout(function () {
                        h.preloadNearbyImages(), h._preloadTimeout = null
                    }, 16)
                }), w(l + t, function () {
                    d.off(t), h.wrap.off("click" + t), h.arrowRight = h.arrowLeft = null
                })
            },
            next: function () {
                h.direction = !0, h.index = P(h.index + 1), h.updateItemHTML()
            },
            prev: function () {
                h.direction = !1, h.index = P(h.index - 1), h.updateItemHTML()
            },
            goTo: function (t) {
                h.direction = t >= h.index, h.index = t, h.updateItemHTML()
            },
            preloadNearbyImages: function () {
                var t, e = h.st.gallery.preload,
                    i = Math.min(e[0], h.items.length),
                    n = Math.min(e[1], h.items.length);
                for (t = 1; t <= (h.direction ? n : i); t++) h._preloadItem(h.index + t);
                for (t = 1; t <= (h.direction ? i : n); t++) h._preloadItem(h.index - t)
            },
            _preloadItem: function (t) {
                if (t = P(t), !h.items[t].preloaded) {
                    var e = h.items[t];
                    e.parsed || (e = h.parseEl(t)), x("LazyLoad", e), "image" === e.type && (e.img = c('<img class="mfp-img" />').on("load.mfploader", function () {
                        e.hasSize = !0
                    }).on("error.mfploader", function () {
                        e.hasSize = !0, e.loadError = !0, x("LazyLoadError", e)
                    }).attr("src", e.src)), e.preloaded = !0
                }
            }
        }
    });
    var M = "retina";
    c.magnificPopup.registerModule(M, {
        options: {
            replaceSrc: function (t) {
                return t.src.replace(/\.\w+$/, function (t) {
                    return "@2x" + t
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function () {
                if (1 < window.devicePixelRatio) {
                    var i = h.st.retina,
                        n = i.ratio;
                    1 < (n = isNaN(n) ? n() : n) && (w("ImageHasSize." + M, function (t, e) {
                        e.img.css({
                            "max-width": e.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }), w("ElementParse." + M, function (t, e) {
                        e.src = i.replaceSrc(e, n)
                    }))
                }
            }
        }
    }), s()
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}(this, function () {
    function t() {}
    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || [])[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                r = i[n];
            e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t]; r;) {
                var o = s && s[r];
                o && (this.off(t, r), delete s[r]), r.apply(this, e), r = i[n += o ? 0 : 1]
            }
            return this
        }
    }, t
}),
function (e, i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.imagesLoaded = i(e, e.EvEmitter)
}(window, function (e, t) {
    var n = e.jQuery,
        r = e.console;

    function s(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function o(t, e, i) {
        if (!(this instanceof o)) return new o(t, e, i);
        "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = function (t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }(t), this.options = s({}, this.options), "function" == typeof e ? i = e : s(this.options, e), i && this.on("always", i), this.getImages(), n && (this.jqDeferred = new n.Deferred), setTimeout(function () {
            this.check()
        }.bind(this))
    }(o.prototype = Object.create(t.prototype)).options = {}, o.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && a[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var r = i[n];
                this.addImage(r)
            }
            if ("string" == typeof this.options.background) {
                var s = t.querySelectorAll(this.options.background);
                for (n = 0; n < s.length; n++) {
                    var o = s[n];
                    this.addElementBackgroundImages(o)
                }
            }
        }
    };
    var a = {
        1: !0,
        9: !0,
        11: !0
    };

    function i(t) {
        this.img = t
    }

    function l(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }
    return o.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                var r = n && n[2];
                r && this.addBackground(r, t), n = i.exec(e.backgroundImage)
            }
    }, o.prototype.addImage = function (t) {
        var e = new i(t);
        this.images.push(e)
    }, o.prototype.addBackground = function (t, e) {
        var i = new l(t, e);
        this.images.push(i)
    }, o.prototype.check = function () {
        var n = this;

        function e(t, e, i) {
            setTimeout(function () {
                n.progress(t, e, i)
            })
        }
        this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (t) {
            t.once("progress", e), t.check()
        }) : this.complete()
    }, o.prototype.progress = function (t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && r && r.log("progress: " + i, t, e)
    }, o.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, (i.prototype = Object.create(t.prototype)).check = function () {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
    }, i.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, i.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
    }, i.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, i.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, i.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, (l.prototype = Object.create(i.prototype)).check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, l.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, l.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery) && ((n = t).fn.imagesLoaded = function (t, e) {
            return new o(this, t, e).jqDeferred.promise(n(this))
        })
    }, o.makeJQueryPlugin(), o
}),
function (e, i) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
        i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery)
}(window, function (t, e) {
    "use strict";
    var h = Array.prototype.slice,
        i = t.console,
        d = void 0 === i ? function () {} : function (t) {
            i.error(t)
        };

    function n(u, r, c) {
        (c = c || e || t.jQuery) && (r.prototype.option || (r.prototype.option = function (t) {
            c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t))
        }), c.fn[u] = function (t) {
            if ("string" != typeof t) return n = t, this.each(function (t, e) {
                var i = c.data(e, u);
                i ? (i.option(n), i._init()) : (i = new r(e, n), c.data(e, u, i))
            }), this;
            var e, s, o, a, l, n, i = h.call(arguments, 1);
            return o = i, l = "$()." + u + '("' + (s = t) + '")', (e = this).each(function (t, e) {
                var i = c.data(e, u);
                if (i) {
                    var n = i[s];
                    if (n && "_" != s.charAt(0)) {
                        var r = n.apply(i, o);
                        a = void 0 === a ? r : a
                    } else d(l + " is not a valid method")
                } else d(u + " not initialized. Cannot call methods, i.e. " + l)
            }), void 0 !== a ? a : e
        }, s(c))
    }

    function s(t) {
        !t || t && t.bridget || (t.bridget = n)
    }
    return s(e || t.jQuery), n
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}(this, function () {
    function t() {}
    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || [])[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                r = i[n];
            e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t]; r;) {
                var o = s && s[r];
                o && (this.off(t, r), delete s[r]), r.apply(this, e), r = i[n += o ? 0 : 1]
            }
            return this
        }
    }, t
}),
function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
    "use strict";

    function v(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }
    var i = "undefined" == typeof console ? function () {} : function (t) {
            console.error(t)
        },
        y = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        w = y.length;

    function b(t) {
        var e = getComputedStyle(t);
        return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }
    var x, _ = !1;

    function C(t) {
        if (function () {
                if (!_) {
                    _ = !0;
                    var t = document.createElement("div");
                    t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
                    var e = document.body || document.documentElement;
                    e.appendChild(t);
                    var i = b(t);
                    C.isBoxSizeOuter = x = 200 == v(i.width), e.removeChild(t)
                }
            }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
            var e = b(t);
            if ("none" == e.display) return function () {
                for (var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, e = 0; e < w; e++) t[y[e]] = 0;
                return t
            }();
            var i = {};
            i.width = t.offsetWidth, i.height = t.offsetHeight;
            for (var n = i.isBorderBox = "border-box" == e.boxSizing, r = 0; r < w; r++) {
                var s = y[r],
                    o = e[s],
                    a = parseFloat(o);
                i[s] = isNaN(a) ? 0 : a
            }
            var l = i.paddingLeft + i.paddingRight,
                u = i.paddingTop + i.paddingBottom,
                c = i.marginLeft + i.marginRight,
                h = i.marginTop + i.marginBottom,
                d = i.borderLeftWidth + i.borderRightWidth,
                p = i.borderTopWidth + i.borderBottomWidth,
                f = n && x,
                m = v(e.width);
            !1 !== m && (i.width = m + (f ? 0 : l + d));
            var g = v(e.height);
            return !1 !== g && (i.height = g + (f ? 0 : u + p)), i.innerWidth = i.width - (l + d), i.innerHeight = i.height - (u + p), i.outerWidth = i.width + c, i.outerHeight = i.height + h, i
        }
    }
    return C
}),
function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
    "use strict";
    var i = function () {
        var t = Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function (t, e) {
        return t[i](e)
    }
}),
function (e, i) {
    "use strict";
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["matches-selector/matches-selector"], function (t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector)
}(window, function (u, s) {
    var c = {
            extend: function (t, e) {
                for (var i in e) t[i] = e[i];
                return t
            },
            modulo: function (t, e) {
                return (t % e + e) % e
            },
            makeArray: function (t) {
                var e = [];
                if (Array.isArray(t)) e = t;
                else if (t && "number" == typeof t.length)
                    for (var i = 0; i < t.length; i++) e.push(t[i]);
                else e.push(t);
                return e
            },
            removeFrom: function (t, e) {
                var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
            },
            getParent: function (t, e) {
                for (; t != document.body;)
                    if (t = t.parentNode, s(t, e)) return t
            },
            getQueryElement: function (t) {
                return "string" == typeof t ? document.querySelector(t) : t
            },
            handleEvent: function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            },
            filterFindElements: function (t, n) {
                t = c.makeArray(t);
                var r = [];
                return t.forEach(function (t) {
                    if (t instanceof HTMLElement)
                        if (n) {
                            s(t, n) && r.push(t);
                            for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++) r.push(e[i])
                        } else r.push(t)
                }), r
            },
            debounceMethod: function (t, e, n) {
                var r = t.prototype[e],
                    s = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[s];
                    t && clearTimeout(t);
                    var e = arguments,
                        i = this;
                    this[s] = setTimeout(function () {
                        r.apply(i, e), delete i[s]
                    }, n || 100)
                }
            },
            docReady: function (t) {
                "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
            },
            toDashed: function (t) {
                return t.replace(/(.)([A-Z])/g, function (t, e, i) {
                    return e + "-" + i
                }).toLowerCase()
            }
        },
        h = u.console;
    return c.htmlInit = function (a, l) {
        c.docReady(function () {
            var t = c.toDashed(l),
                r = "data-" + t,
                e = document.querySelectorAll("[" + r + "]"),
                i = document.querySelectorAll(".js-" + t),
                n = c.makeArray(e).concat(c.makeArray(i)),
                s = r + "-options",
                o = u.jQuery;
            n.forEach(function (e) {
                var t, i = e.getAttribute(r) || e.getAttribute(s);
                try {
                    t = i && JSON.parse(i)
                } catch (t) {
                    return void(h && h.error("Error parsing " + r + " on " + e.className + ": " + t))
                }
                var n = new a(e, t);
                o && o.data(e, l, n)
            })
        })
    }, c
}),
function (i, n) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], function (t, e) {
        return n(i, t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(i, require("ev-emitter"), require("get-size")) : (i.Outlayer = {}, i.Outlayer.Item = n(i, i.EvEmitter, i.getSize))
}(window, function (t, e, i) {
    "use strict";
    var n = document.documentElement.style,
        r = "string" == typeof n.transition ? "transition" : "WebkitTransition",
        s = "string" == typeof n.transform ? "transform" : "WebkitTransform",
        o = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        } [r],
        a = [s, r, r + "Duration", r + "Property"];

    function l(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }
    var u = l.prototype = Object.create(e.prototype);
    u.constructor = l, u._create = function () {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, u.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, u.getSize = function () {
        this.size = i(this.element)
    }, u.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            e[a[i] || i] = t[i]
        }
    }, u.getPosition = function () {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            r = t[i ? "top" : "bottom"],
            s = this.layout.size,
            o = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
            a = -1 != r.indexOf("%") ? parseFloat(r) / 100 * s.height : parseInt(r, 10);
        o = isNaN(o) ? 0 : o, a = isNaN(a) ? 0 : a, o -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = o, this.position.y = a
    }, u.layoutPosition = function () {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            r = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            o = i ? "right" : "left",
            a = this.position.x + t[r];
        e[s] = this.getXValue(a), e[o] = "";
        var l = n ? "paddingTop" : "paddingBottom",
            u = n ? "top" : "bottom",
            c = n ? "bottom" : "top",
            h = this.position.y + t[l];
        e[u] = this.getYValue(h), e[c] = "", this.css(e), this.emitEvent("layout", [this])
    }, u.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, u.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, u._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            r = parseInt(t, 10),
            s = parseInt(e, 10),
            o = r === this.position.x && s === this.position.y;
        if (this.setPosition(t, e), !o || this.isTransitioning) {
            var a = t - i,
                l = e - n,
                u = {};
            u.transform = this.getTranslate(a, l), this.transition({
                to: u,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        } else this.layoutPosition()
    }, u.getTranslate = function (t, e) {
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
    }, u.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, u.moveTo = u._transitionTo, u.setPosition = function (t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, u._nonTransition = function (t) {
        for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, u._transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        } else this._nonTransition(t)
    };
    var c = "opacity," + (a.transform || "transform").replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase()
    });
    u.enableTransition = function () {
        this.isTransitioning || (this.css({
            transitionProperty: c,
            transitionDuration: this.layout.options.transitionDuration
        }), this.element.addEventListener(o, this, !1))
    }, u.transition = l.prototype[r ? "_transition" : "_nonTransition"], u.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, u.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var h = {
        "-webkit-transform": "transform"
    };
    u.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn,
                i = h[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i], function (t) {
                    for (var e in t) return !1;
                    return !0
                }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
            this.emitEvent("transitionEnd", [this])
        }
    }, u.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
    }, u._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var d = {
        transitionProperty: "",
        transitionDuration: ""
    };
    return u.removeTransitionStyles = function () {
        this.css(d)
    }, u.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, u.remove = function () {
        r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem()
        }), this.hide()) : this.removeElem()
    }, u.reveal = function () {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, u.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, u.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, u.hide = function () {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, u.onHideTransitionEnd = function () {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, u.destroy = function () {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, l
}),
function (r, s) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (t, e, i, n) {
        return s(r, t, e, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = s(r, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : r.Outlayer = s(r, r.EvEmitter, r.getSize, r.fizzyUIUtils, r.Outlayer.Item)
}(window, function (t, e, r, s, n) {
    "use strict";
    var o = t.console,
        a = t.jQuery,
        i = function () {},
        l = 0,
        u = {};

    function c(t, e) {
        var i = s.getQueryElement(t);
        if (i) {
            this.element = i, a && (this.$element = a(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(e);
            var n = ++l;
            this.element.outlayerGUID = n, (u[n] = this)._create(), this._getOption("initLayout") && this.layout()
        } else o && o.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
    }
    c.namespace = "outlayer", c.Item = n, c.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var h = c.prototype;

    function d(t) {
        function e() {
            t.apply(this, arguments)
        }
        return (e.prototype = Object.create(t.prototype)).constructor = e
    }
    return s.extend(h, e.prototype), h.option = function (t) {
        s.extend(this.options, t)
    }, h._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, c.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, h._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, h.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, h._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], r = 0; r < e.length; r++) {
            var s = new i(e[r], this);
            n.push(s)
        }
        return n
    }, h._filterFindItemElements = function (t) {
        return s.filterFindElements(t, this.options.itemSelector)
    }, h.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element
        })
    }, h.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, h._init = h.layout, h._resetLayout = function () {
        this.getSize()
    }, h.getSize = function () {
        this.size = r(this.element)
    }, h._getMeasurement = function (t, e) {
        var i, n = this.options[t];
        this[t] = n ? ("string" == typeof n ? i = this.element.querySelector(n) : n instanceof HTMLElement && (i = n), i ? r(i)[e] : n) : 0
    }, h.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, h._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored
        })
    }, h._layoutItems = function (t, i) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var n = [];
            t.forEach(function (t) {
                var e = this._getItemLayoutPosition(t);
                e.item = t, e.isInstant = i || t.isLayoutInstant, n.push(e)
            }, this), this._processLayoutQueue(n)
        }
    }, h._getItemLayoutPosition = function () {
        return {
            x: 0,
            y: 0
        }
    }, h._processLayoutQueue = function (t) {
        t.forEach(function (t) {
            this._positionItem(t.item, t.x, t.y, t.isInstant)
        }, this)
    }, h._positionItem = function (t, e, i, n) {
        n ? t.goTo(e, i) : t.moveTo(e, i)
    }, h._postLayout = function () {
        this.resizeContainer()
    }, h.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, h._getContainerSize = i, h._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, h._emitCompleteOnItems = function (e, t) {
        var i = this;

        function n() {
            i.dispatchEvent(e + "Complete", null, [t])
        }
        var r = t.length;
        if (t && r) {
            var s = 0;
            t.forEach(function (t) {
                t.once(e, o)
            })
        } else n();

        function o() {
            ++s == r && n()
        }
    }, h.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), a)
            if (this.$element = this.$element || a(this.element), e) {
                var r = a.Event(e);
                r.type = t, this.$element.trigger(r, i)
            } else this.$element.trigger(t, i)
    }, h.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, h.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, h.stamp = function (t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, h.unstamp = function (t) {
        (t = this._find(t)) && t.forEach(function (t) {
            s.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, h._find = function (t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = s.makeArray(t)
    }, h._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, h._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, h._manageStamp = i, h._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
            i = this._boundingRect,
            n = r(t);
        return {
            left: e.left - i.left - n.marginLeft,
            top: e.top - i.top - n.marginTop,
            right: i.right - e.right - n.marginRight,
            bottom: i.bottom - e.bottom - n.marginBottom
        }
    }, h.handleEvent = s.handleEvent, h.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, h.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, h.onresize = function () {
        this.resize()
    }, s.debounceMethod(c, "onresize", 100), h.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, h.needsResizeLayout = function () {
        var t = r(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    }, h.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, h.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, h.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, h.reveal = function (t) {
        this._emitCompleteOnItems("reveal", t), t && t.length && t.forEach(function (t) {
            t.reveal()
        })
    }, h.hide = function (t) {
        this._emitCompleteOnItems("hide", t), t && t.length && t.forEach(function (t) {
            t.hide()
        })
    }, h.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, h.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, h.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, h.getItems = function (t) {
        t = s.makeArray(t);
        var i = [];
        return t.forEach(function (t) {
            var e = this.getItem(t);
            e && i.push(e)
        }, this), i
    }, h.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), s.removeFrom(this.items, t)
        }, this)
    }, h.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete u[e], delete this.element.outlayerGUID, a && a.removeData(this.element, this.constructor.namespace)
    }, c.data = function (t) {
        var e = (t = s.getQueryElement(t)) && t.outlayerGUID;
        return e && u[e]
    }, c.create = function (t, e) {
        var i = d(c);
        return i.defaults = s.extend({}, c.defaults), s.extend(i.defaults, e), i.compatOptions = s.extend({}, c.compatOptions), i.namespace = t, i.data = c.data, i.Item = d(n), s.htmlInit(i, t), a && a.bridget && a.bridget(t, i), i
    }, c.Item = n, c
}),
function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, u) {
    var e = t.create("masonry");
    return e.compatOptions.fitWidth = "isFitWidth", e.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0
    }, e.prototype.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                e = t && t.element;
            this.columnWidth = e && u(e).outerWidth || this.containerWidth
        }
        var i = this.columnWidth += this.gutter,
            n = this.containerWidth + this.gutter,
            r = n / i,
            s = i - n % i;
        r = Math[s && s < 1 ? "round" : "floor"](r), this.cols = Math.max(r, 1)
    }, e.prototype.getContainerWidth = function () {
        var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
            e = u(t);
        this.containerWidth = e && e.innerWidth
    }, e.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var n = this._getColGroup(i), r = Math.min.apply(Math, n), s = n.indexOf(r), o = {
                x: this.columnWidth * s,
                y: r
            }, a = r + t.size.outerHeight, l = this.cols + 1 - n.length, u = 0; u < l; u++) this.colYs[s + u] = a;
        return o
    }, e.prototype._getColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) {
            var r = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, r)
        }
        return e
    }, e.prototype._manageStamp = function (t) {
        var e = u(t),
            i = this._getElementOffset(t),
            n = this._getOption("originLeft") ? i.left : i.right,
            r = n + e.outerWidth,
            s = Math.floor(n / this.columnWidth);
        s = Math.max(0, s);
        var o = Math.floor(r / this.columnWidth);
        o -= r % this.columnWidth ? 0 : 1, o = Math.min(this.cols - 1, o);
        for (var a = (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight, l = s; l <= o; l++) this.colYs[l] = Math.max(a, this.colYs[l])
    }, e.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, e.prototype._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, e.prototype.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, e
}),
function (u) {
    "use strict";
    u.fn.multipleFilterMasonry = function (n) {
        var r = [],
            s = [];
        "list" === n.selectorType && u(n.filtersGroupSelector).children().each(function () {
            s.push(u(this).data("filter"))
        });
        var o = function (t) {
                var n = [];
                return u(r).each(function (i) {
                    u(t).each(function (t, e) {
                        r[i].is(e) && -1 === u.inArray(r[i], n) && n.push(r[i])
                    })
                }), n
            },
            a = function (t, e) {
                t.empty(), u(e).each(function () {
                    u(t).append(u(this))
                }), t.masonry("reloadItems"), t.masonry()
            },
            l = function (i) {
                var t, e;
                u(n.filtersGroupSelector).children().each(function () {
                    u(this).click(function () {
                        u(n.filtersGroupSelector).children().removeClass("selected"), window.location.hash = u(this).data("filter");
                        var t = [];
                        t.push("." + u(this).data("filter")), u(this).addClass("selected");
                        var e = r;
                        0 < t.length && (e = o(t)), a(i, e)
                    })
                }), t = i, e = window.location.hash.replace("#", ""), -1 !== u.inArray(e, s) && a(t, u("." + e)), u(n.filtersGroupSelector).children().removeClass("selected"), u(".filters li[data-filter=" + window.location.hash.replace("#", "") + "]").addClass("selected")
            };
        return this.each(function () {
            var t, i, e = u(this);
            (t = e).find(n.itemSelector).each(function () {
                r.push(u(this))
            }), t.masonry(n), "list" === n.selectorType ? l(e) : (i = e, u(n.filtersGroupSelector).find("input[type=radio]").each(function () {
                u(this).change(function () {
                    var t = [];
                    u(n.filtersGroupSelector).find("input[type=radio]").each(function () {
                        u(this).is(":checked") && t.push("." + u(this).val())
                    });
                    var e = r;
                    0 < t.length && (e = o(t)), a(i, e)
                })
            }))
        })
    }
}(window.jQuery),
function (I) {
    I.fn.extend({
        slimScroll: function (S) {
            var k = I.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, S);
            return this.each(function () {
                var n, e, r, i, s, o, a, l, u = "<div></div>",
                    c = 30,
                    h = !1,
                    d = I(this);
                if (d.parent().hasClass(k.wrapperClass)) {
                    var p = d.scrollTop();
                    if (w = d.siblings("." + k.barClass), y = d.siblings("." + k.railClass), C(), I.isPlainObject(S)) {
                        if ("height" in S && "auto" == S.height) {
                            d.parent().css("height", "auto"), d.css("height", "auto");
                            var f = d.parent().parent().height();
                            d.parent().css("height", f), d.css("height", f)
                        } else if ("height" in S) {
                            var m = S.height;
                            d.parent().css("height", m), d.css("height", m)
                        }
                        if ("scrollTo" in S) p = parseInt(k.scrollTo);
                        else if ("scrollBy" in S) p += parseInt(k.scrollBy);
                        else if ("destroy" in S) return w.remove(), y.remove(), void d.unwrap();
                        _(p, !1, !0)
                    }
                } else if (!(I.isPlainObject(S) && "destroy" in S)) {
                    k.height = "auto" == k.height ? d.parent().height() : k.height;
                    var g = I(u).addClass(k.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: k.width,
                        height: k.height
                    });
                    d.css({
                        overflow: "hidden",
                        width: k.width,
                        height: k.height
                    });
                    var v, y = I(u).addClass(k.railClass).css({
                            width: k.size,
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            display: k.alwaysVisible && k.railVisible ? "block" : "none",
                            "border-radius": k.railBorderRadius,
                            background: k.railColor,
                            opacity: k.railOpacity,
                            zIndex: 90
                        }),
                        w = I(u).addClass(k.barClass).css({
                            background: k.color,
                            width: k.size,
                            position: "absolute",
                            top: 0,
                            opacity: k.opacity,
                            display: k.alwaysVisible ? "block" : "none",
                            "border-radius": k.borderRadius,
                            BorderRadius: k.borderRadius,
                            MozBorderRadius: k.borderRadius,
                            WebkitBorderRadius: k.borderRadius,
                            zIndex: 99
                        }),
                        b = "right" == k.position ? {
                            right: k.distance
                        } : {
                            left: k.distance
                        };
                    y.css(b), w.css(b), d.wrap(g), d.parent().append(w), d.parent().append(y), k.railDraggable && w.bind("mousedown", function (e) {
                        var i = I(document);
                        return r = !0, t = parseFloat(w.css("top")), pageY = e.pageY, i.bind("mousemove.slimscroll", function (e) {
                            currTop = t + e.pageY - pageY, w.css("top", currTop), _(0, w.position().top, !1)
                        }), i.bind("mouseup.slimscroll", function (t) {
                            r = !1, E(), i.unbind(".slimscroll")
                        }), !1
                    }).bind("selectstart.slimscroll", function (t) {
                        return t.stopPropagation(), t.preventDefault(), !1
                    }), y.hover(function () {
                        T()
                    }, function () {
                        E()
                    }), w.hover(function () {
                        e = !0
                    }, function () {
                        e = !1
                    }), d.hover(function () {
                        n = !0, T(), E()
                    }, function () {
                        n = !1, E()
                    }), d.bind("touchstart", function (t, e) {
                        t.originalEvent.touches.length && (s = t.originalEvent.touches[0].pageY)
                    }), d.bind("touchmove", function (t) {
                        (h || t.originalEvent.preventDefault(), t.originalEvent.touches.length) && (_((s - t.originalEvent.touches[0].pageY) / k.touchScrollStep, !0), s = t.originalEvent.touches[0].pageY)
                    }), C(), "bottom" === k.start ? (w.css({
                        top: d.outerHeight() - w.outerHeight()
                    }), _(0, !0)) : "top" !== k.start && (_(I(k.start).position().top, null, !0), k.alwaysVisible || w.hide()), v = this, window.addEventListener ? (v.addEventListener("DOMMouseScroll", x, !1), v.addEventListener("mousewheel", x, !1)) : document.attachEvent("onmousewheel", x)
                }

                function x(t) {
                    if (n) {
                        var e = 0;
                        (t = t || window.event).wheelDelta && (e = -t.wheelDelta / 120), t.detail && (e = t.detail / 3);
                        var i = t.target || t.srcTarget || t.srcElement;
                        I(i).closest("." + k.wrapperClass).is(d.parent()) && _(e, !0), t.preventDefault && !h && t.preventDefault(), h || (t.returnValue = !1)
                    }
                }

                function _(t, e, i) {
                    h = !1;
                    var n = t,
                        r = d.outerHeight() - w.outerHeight();
                    if (e && (n = parseInt(w.css("top")) + t * parseInt(k.wheelStep) / 100 * w.outerHeight(), n = Math.min(Math.max(n, 0), r), n = 0 < t ? Math.ceil(n) : Math.floor(n), w.css({
                            top: n + "px"
                        })), n = (a = parseInt(w.css("top")) / (d.outerHeight() - w.outerHeight())) * (d[0].scrollHeight - d.outerHeight()), i) {
                        var s = (n = t) / d[0].scrollHeight * d.outerHeight();
                        s = Math.min(Math.max(s, 0), r), w.css({
                            top: s + "px"
                        })
                    }
                    d.scrollTop(n), d.trigger("slimscrolling", ~~n), T(), E()
                }

                function C() {
                    o = Math.max(d.outerHeight() / d[0].scrollHeight * d.outerHeight(), c), w.css({
                        height: o + "px"
                    });
                    var t = o == d.outerHeight() ? "none" : "block";
                    w.css({
                        display: t
                    })
                }

                function T() {
                    if (C(), clearTimeout(i), a == ~~a) {
                        if (h = k.allowPageScroll, l != a) {
                            var t = 0 == ~~a ? "top" : "bottom";
                            d.trigger("slimscroll", t)
                        }
                    } else h = !1;
                    l = a, o >= d.outerHeight() ? h = !0 : (w.stop(!0, !0).fadeIn("fast"), k.railVisible && y.stop(!0, !0).fadeIn("fast"))
                }

                function E() {
                    k.alwaysVisible || (i = setTimeout(function () {
                        k.disableFadeOut && n || e || r || (w.fadeOut("slow"), y.fadeOut("slow"))
                    }, 1e3))
                }
            }), this
        }
    }), I.fn.extend({
        slimscroll: I.fn.slimScroll
    })
}(jQuery),
function (l, i, r, a) {
    function u(t, e) {
        this.settings = null, this.options = l.extend({}, u.Defaults, e), this.$element = l(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, l.each(["onResize", "onThrottledResize"], l.proxy(function (t, e) {
            this._handlers[e] = l.proxy(this[e], this)
        }, this)), l.each(u.Plugins, l.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), l.each(u.Workers, l.proxy(function (t, e) {
            this._pipe.push({
                filter: e.filter,
                run: l.proxy(e.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    u.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: i,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, u.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, u.Type = {
        Event: "event",
        State: "state"
    }, u.Plugins = {}, u.Workers = [{
        filter: ["width", "settings"],
        run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                n = this.settings.rtl,
                r = {
                    width: "auto",
                    "margin-left": n ? e : "",
                    "margin-right": n ? "" : e
                };
            !i && this.$stage.children().css(r), t.css = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                n = this._items.length,
                r = !this.settings.autoWidth,
                s = [];
            for (t.items = {
                    merge: !1,
                    width: e
                }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = 1 < i || t.items.merge, s[n] = r ? e * i : this._items[n].width();
            this._widths = s
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            var t = [],
                e = this._items,
                i = this.settings,
                n = Math.max(2 * i.items, 4),
                r = 2 * Math.ceil(e.length / 2),
                s = i.loop && e.length ? i.rewind ? n : Math.max(n, r) : 0,
                o = "",
                a = "";
            for (s /= 2; 0 < s;) t.push(this.normalize(t.length / 2, !0)), o += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), a = e[t[t.length - 1]][0].outerHTML + a, s -= 1;
            this._clones = t, l(o).addClass("cloned").appendTo(this.$stage), l(a).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, r = 0, s = []; ++i < e;) n = s[i - 1] || 0, r = this._widths[this.relative(i)] + this.settings.margin, s.push(n + r * t);
            this._coordinates = s
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                i = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                n = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, n.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function () {
            var t, e, i, n, r = this.settings.rtl ? 1 : -1,
                s = 2 * this.settings.stagePadding,
                o = this.coordinates(this.current()) + s,
                a = o + this.width() * r,
                l = [];
            for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + s * r, (this.op(t, "<=", o) && this.op(t, ">", a) || this.op(e, "<", o) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], u.prototype.initializeStage = function () {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(l("<div/>", {
            class: this.settings.stageOuterClass
        })), this.$element.append(this.$stage.parent()))
    }, u.prototype.initializeItems = function () {
        var t = this.$element.find(".owl-item");
        if (t.length) return this._items = t.get().map(function (t) {
            return l(t)
        }), this._mergers = this._items.map(function () {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, u.prototype.initialize = function () {
        var t, e, i;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : a, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, u.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, u.prototype.setup = function () {
        var e = this.viewport(),
            t = this.options.responsive,
            i = -1,
            n = null;
        t ? (l.each(t, function (t) {
            t <= e && i < t && (i = Number(t))
        }), "function" == typeof (n = l.extend({}, this.options, t[i])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : n = l.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: n
            }
        }), this._breakpoint = i, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, u.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, u.prototype.prepare = function (t) {
        var e = this.trigger("prepare", {
            content: t
        });
        return e.data || (e.data = l("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
            content: e.data
        }), e.data
    }, u.prototype.update = function () {
        for (var t = 0, e = this._pipe.length, i = l.proxy(function (t) {
                return this[t]
            }, this._invalidated), n = {}; t < e;)(this._invalidated.all || 0 < l.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(n), t++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, u.prototype.width = function (t) {
        switch (t = t || u.Width.Default) {
            case u.Width.Inner:
            case u.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, u.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, u.prototype.onThrottledResize = function () {
        i.clearTimeout(this.resizeTimer), this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, u.prototype.onResize = function () {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, u.prototype.registerEventHandlers = function () {
        l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)))
    }, u.prototype.onDragStart = function (t) {
        var e = null;
        3 !== t.which && (e = l.support.transform ? {
            x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4],
            y: e[16 === e.length ? 13 : 5]
        } : (e = this.$stage.position(), {
            x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left,
            y: e.top
        }), this.is("animating") && (l.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = l(t.target), this._drag.stage.start = e, this._drag.stage.current = e, this._drag.pointer = this.pointer(t), l(r).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)), l(r).one("mousemove.owl.core touchmove.owl.core", l.proxy(function (t) {
            var e = this.difference(this._drag.pointer, this.pointer(t));
            l(r).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)), Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, u.prototype.onDragMove = function (t) {
        var e = null,
            i = null,
            n = null,
            r = this.difference(this._drag.pointer, this.pointer(t)),
            s = this.difference(this._drag.stage.start, r);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, s.x = ((s.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * r.x / 5 : 0, s.x = Math.max(Math.min(s.x, e + n), i + n)), this._drag.stage.current = s, this.animate(s.x))
    }, u.prototype.onDragEnd = function (t) {
        var e = this.difference(this._drag.pointer, this.pointer(t)),
            i = this._drag.stage.current,
            n = 0 < e.x ^ this.settings.rtl ? "left" : "right";
        l(r).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(i.x, 0 !== e.x ? n : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = n, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, u.prototype.closest = function (i, n) {
        var r = -1,
            s = this.width(),
            o = this.coordinates();
        return this.settings.freeDrag || l.each(o, l.proxy(function (t, e) {
            return "left" === n && e - 30 < i && i < e + 30 ? r = t : "right" === n && e - s - 30 < i && i < e - s + 30 ? r = t + 1 : this.op(i, "<", e) && this.op(i, ">", o[t + 1] !== a ? o[t + 1] : e - s) && (r = "left" === n ? t + 1 : t), -1 === r
        }, this)), this.settings.loop || (this.op(i, ">", o[this.minimum()]) ? r = i = this.minimum() : this.op(i, "<", o[this.maximum()]) && (r = i = this.maximum())), r
    }, u.prototype.animate = function (t) {
        var e = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd(), e && (this.enter("animating"), this.trigger("translate")), l.support.transform3d && l.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : e ? this.$stage.animate({
            left: t + "px"
        }, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: t + "px"
        })
    }, u.prototype.is = function (t) {
        return this._states.current[t] && 0 < this._states.current[t]
    }, u.prototype.current = function (t) {
        if (t === a) return this._current;
        if (0 === this._items.length) return a;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== a && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, u.prototype.invalidate = function (t) {
        return "string" === l.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), l.map(this._invalidated, function (t, e) {
            return e
        })
    }, u.prototype.reset = function (t) {
        (t = this.normalize(t)) !== a && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, u.prototype.normalize = function (t, e) {
        var i = this._items.length,
            n = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = a : (t < 0 || i + n <= t) && (t = ((t - n / 2) % i + i) % i + n / 2), t
    }, u.prototype.relative = function (t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, u.prototype.maximum = function (t) {
        var e, i, n, r = this.settings,
            s = this._coordinates.length;
        if (r.loop) s = this._clones.length / 2 + this._items.length - 1;
        else if (r.autoWidth || r.merge) {
            if (e = this._items.length)
                for (i = this._items[--e].width(), n = this.$element.width(); e-- && !(n < (i += this._items[e].width() + this.settings.margin)););
            s = e + 1
        } else s = r.center ? this._items.length - 1 : this._items.length - r.items;
        return t && (s -= this._clones.length / 2), Math.max(s, 0)
    }, u.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, u.prototype.items = function (t) {
        return t === a ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, u.prototype.mergers = function (t) {
        return t === a ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, u.prototype.clones = function (i) {
        var e = this._clones.length / 2,
            n = e + this._items.length,
            r = function (t) {
                return t % 2 == 0 ? n + t / 2 : e - (t + 1) / 2
            };
        return i === a ? l.map(this._clones, function (t, e) {
            return r(e)
        }) : l.map(this._clones, function (t, e) {
            return t === i ? r(e) : null
        })
    }, u.prototype.speed = function (t) {
        return t !== a && (this._speed = t), this._speed
    }, u.prototype.coordinates = function (t) {
        var e, i = 1,
            n = t - 1;
        return t === a ? l.map(this._coordinates, l.proxy(function (t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, n = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[n] || 0)) / 2 * i) : e = this._coordinates[n] || 0, e = Math.ceil(e))
    }, u.prototype.duration = function (t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, u.prototype.to = function (t, e) {
        var i = this.current(),
            n = null,
            r = t - this.relative(i),
            s = (0 < r) - (r < 0),
            o = this._items.length,
            a = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(r) > o / 2 && (r += -1 * s * o), (n = (((t = i + r) - a) % o + o) % o + a) !== t && n - r <= l && 0 < n - r && (i = n - r, t = n, this.reset(i))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
    }, u.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, u.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, u.prototype.onTransitionEnd = function (t) {
        if (t !== a && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, u.prototype.viewport = function () {
        var t;
        return this.options.responsiveBaseElement !== i ? t = l(this.options.responsiveBaseElement).width() : i.innerWidth ? t = i.innerWidth : r.documentElement && r.documentElement.clientWidth ? t = r.documentElement.clientWidth : console.warn("Can not detect viewport width."), t
    }, u.prototype.replace = function (t) {
        this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : l(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function () {
            return 1 === this.nodeType
        }).each(l.proxy(function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, u.prototype.add = function (t, e) {
        var i = this.relative(this._current);
        e = e === a ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : l(t), this.trigger("add", {
            content: t,
            position: e
        }), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: e
        })
    }, u.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== a && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, u.prototype.preloadAutoWidthImages = function (t) {
        t.each(l.proxy(function (t, e) {
            this.enter("pre-loading"), e = l(e), l(new Image).one("load", l.proxy(function (t) {
                e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
        }, this))
    }, u.prototype.destroy = function () {
        for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(r).off(".owl.core"), !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, u.prototype.op = function (t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case "<":
                return n ? i < t : t < i;
            case ">":
                return n ? t < i : i < t;
            case ">=":
                return n ? t <= i : i <= t;
            case "<=":
                return n ? i <= t : t <= i
        }
    }, u.prototype.on = function (t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
    }, u.prototype.off = function (t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
    }, u.prototype.trigger = function (t, e, i, n, r) {
        var s = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            o = l.camelCase(l.grep(["on", t, i], function (t) {
                return t
            }).join("-").toLowerCase()),
            a = l.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), l.extend({
                relatedTarget: this
            }, s, e));
        return this._supress[t] || (l.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(a)
        }), this.register({
            type: u.Type.Event,
            name: t
        }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[o] && this.settings[o].call(this, a)), a
    }, u.prototype.enter = function (t) {
        l.each([t].concat(this._states.tags[t] || []), l.proxy(function (t, e) {
            this._states.current[e] === a && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, u.prototype.leave = function (t) {
        l.each([t].concat(this._states.tags[t] || []), l.proxy(function (t, e) {
            this._states.current[e]--
        }, this))
    }, u.prototype.register = function (i) {
        if (i.type === u.Type.Event) {
            if (l.event.special[i.name] || (l.event.special[i.name] = {}), !l.event.special[i.name].owl) {
                var e = l.event.special[i.name]._default;
                l.event.special[i.name]._default = function (t) {
                    return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
                }, l.event.special[i.name].owl = !0
            }
        } else i.type === u.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags, this._states.tags[i.name] = l.grep(this._states.tags[i.name], l.proxy(function (t, e) {
            return l.inArray(t, this._states.tags[i.name]) === e
        }, this)))
    }, u.prototype.suppress = function (t) {
        l.each(t, l.proxy(function (t, e) {
            this._supress[e] = !0
        }, this))
    }, u.prototype.release = function (t) {
        l.each(t, l.proxy(function (t, e) {
            delete this._supress[e]
        }, this))
    }, u.prototype.pointer = function (t) {
        var e = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
    }, u.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t))
    }, u.prototype.difference = function (t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }, l.fn.owlCarousel = function (e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var t = l(this),
                i = t.data("owl.carousel");
            i || (i = new u(this, "object" == typeof e && e), t.data("owl.carousel", i), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (t, e) {
                i.register({
                    type: u.Type.Event,
                    name: e
                }), i.$element.on(e + ".owl.carousel.core", l.proxy(function (t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
                }, i))
            })), "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, n)
        })
    }, l.fn.owlCarousel.Constructor = u
}(window.Zepto || window.jQuery, window, document),
function (e, i, t, n) {
    var r = function (t) {
        this._core = t, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": e.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, r.prototype.watch = function () {
        this._interval || (this._visible = this._core.isVisible(), this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, r.prototype.refresh = function () {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, r.prototype.destroy = function () {
        var t, e;
        for (t in i.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
}(window.Zepto || window.jQuery, window, document),
function (a, s, t, e) {
    var i = function (t) {
        this._core = t, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
                    var e = this._core.settings,
                        i = e.center && Math.ceil(e.items / 2) || e.items,
                        n = e.center && -1 * i || 0,
                        r = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + n,
                        s = this._core.clones().length,
                        o = a.proxy(function (t, e) {
                            this.load(e)
                        }, this);
                    for (0 < e.lazyLoadEager && (i += e.lazyLoadEager, e.loop && (r -= e.lazyLoadEager, i++)); n++ < i;) this.load(s / 2 + this._core.relative(r)), s && a.each(this._core.clones(this._core.relative(r)), o), r++
                }
            }, this)
        }, this._core.options = a.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    }, i.prototype.load = function (t) {
        var e = this._core.$stage.children().eq(t),
            i = e && e.find(".owl-lazy");
        !i || -1 < a.inArray(e.get(0), this._loaded) || (i.each(a.proxy(function (t, e) {
            var i, n = a(e),
                r = 1 < s.devicePixelRatio && n.attr("data-src-retina") || n.attr("data-src") || n.attr("data-srcset");
            this._core.trigger("load", {
                element: n,
                url: r
            }, "lazy"), n.is("img") ? n.one("load.owl.lazy", a.proxy(function () {
                n.css("opacity", 1), this._core.trigger("loaded", {
                    element: n,
                    url: r
                }, "lazy")
            }, this)).attr("src", r) : n.is("source") ? n.one("load.owl.lazy", a.proxy(function () {
                this._core.trigger("loaded", {
                    element: n,
                    url: r
                }, "lazy")
            }, this)).attr("srcset", r) : ((i = new Image).onload = a.proxy(function () {
                n.css({
                    "background-image": 'url("' + r + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: n,
                    url: r
                }, "lazy")
            }, this), i.src = r)
        }, this)), this._loaded.push(e.get(0)))
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document),
function (o, i, t, e) {
    var n = function (t) {
        this._core = t, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": o.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = o.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var e = this;
        o(i).on("load", function () {
            e._core.settings.autoHeight && e.update()
        }), o(i).resize(function () {
            e._core.settings.autoHeight && (null != e._intervalId && clearTimeout(e._intervalId), e._intervalId = setTimeout(function () {
                e.update()
            }, 250))
        })
    };
    n.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, n.prototype.update = function () {
        var t = this._core._current,
            e = t + this._core.settings.items,
            i = this._core.settings.lazyLoad,
            n = this._core.$stage.children().toArray().slice(t, e),
            r = [],
            s = 0;
        o.each(n, function (t, e) {
            r.push(o(e).height())
        }), (s = Math.max.apply(null, r)) <= 1 && i && this._previousHeight && (s = this._previousHeight), this._previousHeight = s, this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)
    }, n.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, o.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
}(window.Zepto || window.jQuery, window, document),
function (c, t, e, i) {
    var n = function (t) {
        this._core = t, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": c.proxy(function (t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": c.proxy(function (t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": c.proxy(function (t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": c.proxy(function (t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": c.proxy(function (t) {
                if (t.namespace) {
                    var e = c(t.content).find(".owl-video");
                    e.length && (e.css("display", "none"), this.fetch(e, c(t.content)))
                }
            }, this)
        }, this._core.options = c.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", c.proxy(function (t) {
            this.play(t)
        }, this))
    };
    n.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, n.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            r = t.attr("data-width") || this._core.settings.videoWidth,
            s = t.attr("data-height") || this._core.settings.videoHeight,
            o = t.attr("href");
        if (!o) throw new Error("Missing video URL.");
        if (-1 < (n = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube";
        else if (-1 < n[3].indexOf("vimeo")) i = "vimeo";
        else {
            if (!(-1 < n[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        n = n[6], this._videos[o] = {
            type: i,
            id: n,
            width: r,
            height: s
        }, e.attr("data-video", o), this.thumbnail(t, this._videos[o])
    }, n.prototype.thumbnail = function (e, t) {
        var i, n, r = t.width && t.height ? "width:" + t.width + "px;height:" + t.height + "px;" : "",
            s = e.find("img"),
            o = "src",
            a = "",
            l = this._core.settings,
            u = function (t) {
                '<div class="owl-video-play-icon"></div>',
                i = l.lazyLoad ? c("<div/>", {
                    class: "owl-video-tn " + a,
                    srcType: t
                }) : c("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + t + ")"
                }),
                e.after(i),
                e.after('<div class="owl-video-play-icon"></div>')
            };
        if (e.wrap(c("<div/>", {
                class: "owl-video-wrapper",
                style: r
            })), this._core.settings.lazyLoad && (o = "data-src", a = "owl-lazy"), s.length) return u(s.attr(o)), s.remove(), !1;
        "youtube" === t.type ? (n = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg", u(n)) : "vimeo" === t.type ? c.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                n = t[0].thumbnail_large, u(n)
            }
        }) : "vzaar" === t.type && c.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                n = t.framegrab_url, u(n)
            }
        })
    }, n.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, n.prototype.play = function (t) {
        var e, i = c(t.target).closest("." + this._core.settings.itemClass),
            n = this._videos[i.attr("data-video")],
            r = n.width || "100%",
            s = n.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), (e = c('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", s), e.attr("width", r), "youtube" === n.type ? e.attr("src", "//www.youtube.com/embed/" + n.id + "?autoplay=1&rel=0&v=" + n.id) : "vimeo" === n.type ? e.attr("src", "//player.vimeo.com/video/" + n.id + "?autoplay=1") : "vzaar" === n.type && e.attr("src", "//view.vzaar.com/" + n.id + "/player?autoplay=true"), c(e).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
    }, n.prototype.isInFullScreen = function () {
        var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
        return t && c(t).parent().hasClass("owl-video-frame")
    }, n.prototype.destroy = function () {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, c.fn.owlCarousel.Constructor.Plugins.Video = n
}(window.Zepto || window.jQuery, window, document),
function (o, t, e, i) {
    var n = function (t) {
        this.core = t, this.core.options = o.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
            "change.owl.carousel": o.proxy(function (t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": o.proxy(function (t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": o.proxy(function (t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    n.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, n.prototype.swap = function () {
        if (1 === this.core.settings.items && o.support.animation && o.support.transition) {
            this.core.speed(0);
            var t, e = o.proxy(this.clear, this),
                i = this.core.$stage.children().eq(this.previous),
                n = this.core.$stage.children().eq(this.next),
                r = this.core.settings.animateIn,
                s = this.core.settings.animateOut;
            this.core.current() !== this.previous && (s && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(o.support.animation.end, e).css({
                left: t + "px"
            }).addClass("animated owl-animated-out").addClass(s)), r && n.one(o.support.animation.end, e).addClass("animated owl-animated-in").addClass(r))
        }
    }, n.prototype.clear = function (t) {
        o(t.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, n.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, o.fn.owlCarousel.Constructor.Plugins.Animate = n
}(window.Zepto || window.jQuery, window, document),
function (n, r, e, t) {
    var i = function (t) {
        this._core = t, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": n.proxy(function (t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": n.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": n.proxy(function (t, e, i) {
                t.namespace && this.play(e, i)
            }, this),
            "stop.owl.autoplay": n.proxy(function (t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": n.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": n.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": n.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": n.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = n.extend({}, i.Defaults, this._core.options)
    };
    i.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, i.prototype._next = function (t) {
        this._call = r.setTimeout(n.proxy(this._next, this, t), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || e.hidden || this._core.next(t || this._core.settings.autoplaySpeed)
    }, i.prototype.read = function () {
        return (new Date).getTime() - this._time
    }, i.prototype.play = function (t, e) {
        var i;
        this._core.is("rotating") || this._core.enter("rotating"), t = t || this._core.settings.autoplayTimeout, i = Math.min(this._time % (this._timeout || t), t), this._paused ? (this._time = this.read(), this._paused = !1) : r.clearTimeout(this._call), this._time += this.read() % t - i, this._timeout = t, this._call = r.setTimeout(n.proxy(this._next, this, e), t - i)
    }, i.prototype.stop = function () {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, r.clearTimeout(this._call), this._core.leave("rotating"))
    }, i.prototype.pause = function () {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, r.clearTimeout(this._call))
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, n.fn.owlCarousel.Constructor.Plugins.autoplay = i
}(window.Zepto || window.jQuery, window, document),
function (s, t, e, i) {
    "use strict";
    var n = function (t) {
        this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": s.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + s(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": s.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": s.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": s.proxy(function (t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": s.proxy(function (t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": s.proxy(function (t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = s.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    n.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, n.prototype.initialize = function () {
        var t, i = this._core.settings;
        for (t in this._controls.$relative = (i.navContainer ? s(i.navContainer) : s("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = s("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", s.proxy(function (t) {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next = s("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", s.proxy(function (t) {
                this.next(i.navSpeed)
            }, this)), i.dotsData || (this._templates = [s('<button role="button">').addClass(i.dotClass).append(s("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? s(i.dotsContainer) : s("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", s.proxy(function (t) {
                var e = s(t.target).parent().is(this._controls.$absolute) ? s(t.target).index() : s(t.target).parent().index();
                t.preventDefault(), this.to(e, i.dotsSpeed)
            }, this)), this._overrides) this._core[t] = s.proxy(this[t], this)
    }, n.prototype.destroy = function () {
        var t, e, i, n, r;
        for (t in r = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) "$relative" === e && r.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, n.prototype.update = function () {
        var t, e, i = this._core.clones().length / 2,
            n = i + this._core.items().length,
            r = this._core.maximum(!0),
            s = this._core.settings,
            o = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
            for (this._pages = [], t = i, e = 0; t < n; t++) {
                if (o <= e || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(r, t - i),
                            end: t - i + o - 1
                        }), Math.min(r, t - i) === r) break;
                    e = 0, 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, n.prototype.draw = function () {
        var t, e = this._core.settings,
            i = this._core.items().length <= e.items,
            n = this._core.relative(this._core.current()),
            r = e.loop || e.rewind;
        this._controls.$relative.toggleClass("disabled", !e.nav || i), e.nav && (this._controls.$previous.toggleClass("disabled", !r && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !r && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || i), e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(s.inArray(this.current(), this._pages)).addClass("active"))
    }, n.prototype.onTrigger = function (t) {
        var e = this._core.settings;
        t.page = {
            index: s.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
        }
    }, n.prototype.current = function () {
        var i = this._core.relative(this._core.current());
        return s.grep(this._pages, s.proxy(function (t, e) {
            return t.start <= i && t.end >= i
        }, this)).pop()
    }, n.prototype.getPosition = function (t) {
        var e, i, n = this._core.settings;
        return "page" == n.slideBy ? (e = s.inArray(this.current(), this._pages), i = this._pages.length, t ? ++e : --e, e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()), i = this._core.items().length, t ? e += n.slideBy : e -= n.slideBy), e
    }, n.prototype.next = function (t) {
        s.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }, n.prototype.prev = function (t) {
        s.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }, n.prototype.to = function (t, e, i) {
        var n;
        !i && this._pages.length ? (n = this._pages.length, s.proxy(this._overrides.to, this._core)(this._pages[(t % n + n) % n].start, e)) : s.proxy(this._overrides.to, this._core)(t, e)
    }, s.fn.owlCarousel.Constructor.Plugins.Navigation = n
}(window.Zepto || window.jQuery, window, document),
function (n, r, t, e) {
    "use strict";
    var i = function (t) {
        this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": n.proxy(function (t) {
                t.namespace && "URLHash" === this._core.settings.startPosition && n(r).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": n.proxy(function (t) {
                if (t.namespace) {
                    var e = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!e) return;
                    this._hashes[e] = t.content
                }
            }, this),
            "changed.owl.carousel": n.proxy(function (t) {
                if (t.namespace && "position" === t.property.name) {
                    var i = this._core.items(this._core.relative(this._core.current())),
                        e = n.map(this._hashes, function (t, e) {
                            return t === i ? e : null
                        }).join();
                    if (!e || r.location.hash.slice(1) === e) return;
                    r.location.hash = e
                }
            }, this)
        }, this._core.options = n.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), n(r).on("hashchange.owl.navigation", n.proxy(function (t) {
            var e = r.location.hash.substring(1),
                i = this._core.$stage.children(),
                n = this._hashes[e] && i.index(this._hashes[e]);
            void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
        }, this))
    };
    i.Defaults = {
        URLhashListener: !1
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in n(r).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, n.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document),
function (r, t, e, s) {
    var o = r("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        i = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        n = function () {
            return !!c("transform")
        },
        l = function () {
            return !!c("perspective")
        },
        u = function () {
            return !!c("animation")
        };

    function c(t, i) {
        var n = !1,
            e = t.charAt(0).toUpperCase() + t.slice(1);
        return r.each((t + " " + a.join(e + " ") + e).split(" "), function (t, e) {
            if (o[e] !== s) return n = !i || e, !1
        }), n
    }

    function h(t) {
        return c(t, !0)
    }(function () {
        return !!c("transition")
    })() && (r.support.transition = new String(h("transition")), r.support.transition.end = i.transition.end[r.support.transition]), u() && (r.support.animation = new String(h("animation")), r.support.animation.end = i.animation.end[r.support.animation]), n() && (r.support.transform = new String(h("transform")), r.support.transform3d = l())
}(window.Zepto || window.jQuery, window, document), $(window).on("load", function () {
    var t = $(".preloader");
    t.find(".spinner").fadeOut(function () {
        t.fadeOut()
    })
}), $(function () {
    "use strict";
    var t = $(window).width(),
        e = $(window).height(),
        o = $(".container"),
        a = $(".card-inner"),
        l = o.data("animation-in"),
        u = o.data("animation-out");
    $(".top-menu").on("click", "a", function () {
        var t = $(window).width(),
            e = $(this).attr("href"),
            i = parseFloat($(e).offset().top),
            n = $(e),
            r = $(".top-menu li"),
            s = $(this).closest("li");
        $(".lnks .lnk.discover");
        return 1024 <= t && !s.hasClass("active") & 1023 < t & $("#home-card").length && (r.removeClass("active"), o.find(a).removeClass("animated " + l), $(o).hasClass("opened") && o.find(a).addClass("animated " + u), s.addClass("active"), o.addClass("opened"), o.find(n).removeClass("animated " + u), o.find(n).addClass("animated " + l), $(a).addClass("hidden"), $(n).removeClass("hidden"), $(n).addClass("active")), t < 1024 & $("#home-card").length && $("body,html").animate({
            scrollTop: i - 76
        }, 800), !1
    }), $(window).on("resize", function () {
        var t = $(window).width();
        $(window).height();
        t < 1024 ? ($(".card-inner").removeClass("hidden"), $(".card-inner").removeClass("fadeOutLeft"), $(".card-inner").removeClass("rotateOutUpLeft"), $(".card-inner").removeClass("rollOut"), $(".card-inner").removeClass("jackOutTheBox"), $(".card-inner").removeClass("fadeOut"), $(".card-inner").removeClass("fadeOutUp"), $(".card-inner").removeClass("animated"), $(window).on("scroll", function () {
            var e = $(window).scrollTop();
            $(".top-menu ul li a").each(function () {
                var t = $(this);
                $(t.attr("href")).offset().top - 76 <= e && ($(".top-menu ul li").removeClass("active"), t.closest("li").addClass("active"))
            })
        }), $(".card-inner .card-wrap").slimScroll({
            destroy: !0
        }), $(".card-inner .card-wrap").attr("style", "")) : ($($(".top-menu li.active a").attr("href")).addClass("active"), $(".card-inner .card-wrap").slimScroll({
            height: "570px"
        }))
    }), t < 1024 & $("#home-card").length && $(window).on("scroll", function () {
        var e = $(window).scrollTop();
        $(".top-menu ul li a").each(function () {
            var t = $(this);
            $(t.attr("href")).offset().top - 76 <= e && ($(".top-menu ul li").removeClass("active"), t.closest("li").addClass("active"))
        })
    }), 1024 < t && $(".card-inner .card-wrap").slimScroll({
        height: "570px"
    }), $(".lnks").on("click", ".lnk.discover", function () {
        $('.top-menu a[href="#contacts-card"]').trigger("click")
    });
    var i = $(".grid-items");
    i.imagesLoaded(function () {
        i.multipleFilterMasonry({
            itemSelector: ".grid-item",
            filtersGroupSelector: ".filter-button-group",
            percentPosition: !0,
            gutter: 0
        })
    }), $(".filter-button-group").on("change", 'input[type="radio"]', function () {
        $(this).is(":checked") && ($(".f_btn").removeClass("active"), $(this).closest(".f_btn").addClass("active")), $(".has-popup-image").magnificPopup({
            type: "image",
            closeOnContentClick: !0,
            mainClass: "popup-box",
            image: {
                verticalFit: !0
            }
        }), $(".has-popup-video").magnificPopup({
            disableOn: 700,
            type: "iframe",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1,
            mainClass: "popup-box"
        }), $(".has-popup-music").magnificPopup({
            disableOn: 700,
            type: "iframe",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1,
            mainClass: "popup-box"
        }), $(".has-popup-media").magnificPopup({
            type: "inline",
            overflowY: "auto",
            closeBtnInside: !0,
            mainClass: "popup-box-inline",
            callbacks: {
                open: function () {
                    1240 <= $(window).width() && $(".popup-box-inline .popup-box").slimScroll({
                        height: e + "px"
                    })
                }
            }
        })
    }), $(".has-popup-image").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        mainClass: "popup-box",
        image: {
            verticalFit: !0
        }
    }), $(".has-popup-video").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
        mainClass: "popup-box"
    }), $(".has-popup-music").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
        mainClass: "popup-box"
    }), $(".has-popup-media").magnificPopup({
        type: "inline",
        overflowY: "auto",
        closeBtnInside: !0,
        mainClass: "popup-box-inline",
        callbacks: {
            open: function () {
                1240 <= $(window).width() && $(".popup-box-inline .popup-box").slimScroll({
                    height: e + "px"
                })
            }
        }
    }), $("#cform").validate({
        ignore: ".ignore",
        rules: {
            name: {
                required: !0
            },
            message: {
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            hiddenRecaptcha: {
                required: function () {
                    return "" == grecaptcha.getResponse()
                }
            }
        },
        success: "valid",
        submitHandler: function () {
            $.ajax({
                url: "mailer/feedback.php",
                type: "post",
                dataType: "json",
                data: "name=" + $("#cform").find('input[name="name"]').val() + "&email=" + $("#cform").find('input[name="email"]').val() + "&message=" + $("#cform").find('textarea[name="message"]').val(),
                beforeSend: function () {},
                complete: function () {},
                success: function (t) {
                    $("#cform").fadeOut(), $(".alert-success").delay(1e3).fadeIn()
                }
            })
        }
    }), $("#comment_form").validate({
        rules: {
            name: {
                required: !0
            },
            message: {
                required: !0
            }
        },
        success: "valid",
        submitHandler: function () {}
    }), $("#map").length && initMap(), $(".revs-carousel.default-revs .owl-carousel").owlCarousel({
        margin: 0,
        items: 1,
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        loop: !0,
        rewind: !1,
        nav: !1,
        dots: !0
    }), $(".revs-carousel.rtl-revs .owl-carousel").owlCarousel({
        margin: 0,
        items: 1,
        rtl: !0,
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        loop: !0,
        rewind: !1,
        nav: !1,
        dots: !0
    }), $(".theme_panel .toggle_bts").on("click", "a", function () {
        if ($(this).hasClass("active")) return $(this).removeClass("active"), $(".theme_panel").removeClass("active"), !1;
        $(this).addClass("active"), $(".theme_panel").addClass("active")
    }), $(".theme_panel .layout_style").on("click", "a", function () {
        var t = $(this).attr("data-color");
        $("head").append('<link rel="stylesheet" href="css/template-colors/' + t + '.css" />')
    }), $(".theme_panel .dark_style").on("click", "a", function () {
        "dark" == $(this).attr("data-dark") ? $("head").append('<link rel="stylesheet" href="css/template-dark/dark.css" />') : $('link[href="css/template-dark/dark.css"]').remove()
    })
});