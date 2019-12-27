/*!
 * jQuery JavaScript Library v1.11.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-23T21:02Z
 */
(function(e, t) {
	typeof module == "object" && typeof module.exports == "object" ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
})(typeof window != "undefined" ? window : this, function(e, t) {
	function y(e) {
		var t = e.length,
			n = p.type(e);
		return n === "function" || p.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || t === 0 || typeof t ==
			"number" && t > 0 && t - 1 in e
	}

	function x(e, t, n) {
		if (p.isFunction(t)) return p.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if (t.nodeType) return p.grep(e, function(e) {
			return e === t !== n
		});
		if (typeof t == "string") {
			if (S.test(t)) return p.filter(t, e, n);
			t = p.filter(t, e)
		}
		return p.grep(e, function(e) {
			return p.inArray(e, t) >= 0 !== n
		})
	}

	function O(e, t) {
		do e = e[t]; while (e && e.nodeType !== 1);
		return e
	}

	function D(e) {
		var t = _[e] = {};
		return p.each(e.match(M) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function H() {
		N.addEventListener ? (N.removeEventListener("DOMContentLoaded", B, !1), e.removeEventListener("load", B, !1)) : (N.detachEvent(
			"onreadystatechange", B), e.detachEvent("onload", B))
	}

	function B() {
		if (N.addEventListener || event.type === "load" || N.readyState === "complete") H(), p.ready()
	}

	function R(e, t, n) {
		if (n === undefined && e.nodeType === 1) {
			var r = "data-" + t.replace(q, "-$1").toLowerCase();
			n = e.getAttribute(r);
			if (typeof n == "string") {
				try {
					n = n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : +n + "" === n ? +n : I.test(n) ? p.parseJSON(n) :
						n
				} catch (i) {}
				p.data(e, t, n)
			} else n = undefined
		}
		return n
	}

	function U(e) {
		var t;
		for (t in e) {
			if (t === "data" && p.isEmptyObject(e[t])) continue;
			if (t !== "toJSON") return !1
		}
		return !0
	}

	function z(e, t, r, i) {
		if (!p.acceptData(e)) return;
		var s, o, u = p.expando,
			a = e.nodeType,
			f = a ? p.cache : e,
			l = a ? e[u] : e[u] && u;
		if ((!l || !f[l] || !i && !f[l].data) && r === undefined && typeof t == "string") return;
		l || (a ? l = e[u] = n.pop() || p.guid++ : l = u), f[l] || (f[l] = a ? {} : {
			toJSON: p.noop
		});
		if (typeof t == "object" || typeof t == "function") i ? f[l] = p.extend(f[l], t) : f[l].data = p.extend(f[l].data, t);
		return o = f[l], i || (o.data || (o.data = {}), o = o.data), r !== undefined && (o[p.camelCase(t)] = r), typeof t ==
			"string" ? (s = o[t], s == null && (s = o[p.camelCase(t)])) : s = o, s
	}

	function W(e, t, n) {
		if (!p.acceptData(e)) return;
		var r, i, s = e.nodeType,
			o = s ? p.cache : e,
			u = s ? e[p.expando] : p.expando;
		if (!o[u]) return;
		if (t) {
			r = n ? o[u] : o[u].data;
			if (r) {
				p.isArray(t) ? t = t.concat(p.map(t, p.camelCase)) : t in r ? t = [t] : (t = p.camelCase(t), t in r ? t = [t] : t =
					t.split(" ")), i = t.length;
				while (i--) delete r[t[i]];
				if (n ? !U(r) : !p.isEmptyObject(r)) return
			}
		}
		if (!n) {
			delete o[u].data;
			if (!U(o[u])) return
		}
		s ? p.cleanData([e], !0) : c.deleteExpando || o != o.window ? delete o[u] : o[u] = null
	}

	function tt() {
		return !0
	}

	function nt() {
		return !1
	}

	function rt() {
		try {
			return N.activeElement
		} catch (e) {}
	}

	function it(e) {
		var t = st.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement)
			while (t.length) n.createElement(t.pop());
		return n
	}

	function Et(e, t) {
		var n, r, i = 0,
			s = typeof e.getElementsByTagName !== j ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== j ? e.querySelectorAll(
				t || "*") : undefined;
		if (!s)
			for (s = [], n = e.childNodes || e;
				(r = n[i]) != null; i++) !t || p.nodeName(r, t) ? s.push(r) : p.merge(s, Et(r, t));
		return t === undefined || t && p.nodeName(e, t) ? p.merge([e], s) : s
	}

	function St(e) {
		K.test(e.type) && (e.defaultChecked = e.checked)
	}

	function xt(e, t) {
		return p.nodeName(e, "table") && p.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName(
			"tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function Tt(e) {
		return e.type = (p.find.attr(e, "type") !== null) + "/" + e.type, e
	}

	function Nt(e) {
		var t = mt.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function Ct(e, t) {
		var n, r = 0;
		for (;
			(n = e[r]) != null; r++) p._data(n, "globalEval", !t || p._data(t[r], "globalEval"))
	}

	function kt(e, t) {
		if (t.nodeType !== 1 || !p.hasData(e)) return;
		var n, r, i, s = p._data(e),
			o = p._data(t, s),
			u = s.events;
		if (u) {
			delete o.handle, o.events = {};
			for (n in u)
				for (r = 0, i = u[n].length; r < i; r++) p.event.add(t, n, u[n][r])
		}
		o.data && (o.data = p.extend({}, o.data))
	}

	function Lt(e, t) {
		var n, r, i;
		if (t.nodeType !== 1) return;
		n = t.nodeName.toLowerCase();
		if (!c.noCloneEvent && t[p.expando]) {
			i = p._data(t);
			for (r in i.events) p.removeEvent(t, r, i.handle);
			t.removeAttribute(p.expando)
		}
		if (n === "script" && t.text !== e.text) Tt(t).text = e.text, Nt(t);
		else if (n === "object") t.parentNode && (t.outerHTML = e.outerHTML), c.html5Clone && e.innerHTML && !p.trim(t.innerHTML) &&
			(t.innerHTML = e.innerHTML);
		else if (n === "input" && K.test(e.type)) t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value =
			e.value);
		else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected;
		else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
	}

	function Mt(t, n) {
		var r = p(n.createElement(t)).appendTo(n.body),
			i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : p.css(r[0], "display");
		return r.detach(), i
	}

	function _t(e) {
		var t = N,
			n = Ot[e];
		if (!n) {
			n = Mt(e, t);
			if (n === "none" || !n) At = (At || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
				t = (At[0].contentWindow || At[0].contentDocument).document, t.write(), t.close(), n = Mt(e, t), At.detach();
			Ot[e] = n
		}
		return n
	}

	function Ft(e, t) {
		return {
			get: function() {
				var n = e();
				if (n == null) return;
				if (n) {
					delete this.get;
					return
				}
				return (this.get = t).apply(this, arguments)
			}
		}
	}

	function $t(e, t) {
		if (t in e) return t;
		var n = t.charAt(0).toUpperCase() + t.slice(1),
			r = t,
			i = Vt.length;
		while (i--) {
			t = Vt[i] + n;
			if (t in e) return t
		}
		return r
	}

	function Jt(e, t) {
		var n, r, i, s = [],
			o = 0,
			u = e.length;
		for (; o < u; o++) {
			r = e[o];
			if (!r.style) continue;
			s[o] = p._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style
				.display === "" && $(r) && (s[o] = p._data(r, "olddisplay", _t(r.nodeName)))) : s[o] || (i = $(r), (n && n !==
				"none" || !i) && p._data(r, "olddisplay", i ? n : p.css(r, "display")))
		}
		for (o = 0; o < u; o++) {
			r = e[o];
			if (!r.style) continue;
			if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "" : "none"
		}
		return e
	}

	function Kt(e, t, n) {
		var r = Ut.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function Qt(e, t, n, r, i) {
		var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
			o = 0;
		for (; s < 4; s += 2) n === "margin" && (o += p.css(e, n + V[s], !0, i)), r ? (n === "content" && (o -= p.css(e,
			"padding" + V[s], !0, i)), n !== "margin" && (o -= p.css(e, "border" + V[s] + "Width", !0, i))) : (o += p.css(e,
			"padding" + V[s], !0, i), n !== "padding" && (o += p.css(e, "border" + V[s] + "Width", !0, i)));
		return o
	}

	function Gt(e, t, n) {
		var r = !0,
			i = t === "width" ? e.offsetWidth : e.offsetHeight,
			s = Ht(e),
			o = c.boxSizing() && p.css(e, "boxSizing", !1, s) === "border-box";
		if (i <= 0 || i == null) {
			i = Bt(e, t, s);
			if (i < 0 || i == null) i = e.style[t];
			if (Pt.test(i)) return i;
			r = o && (c.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + Qt(e, t, n || (o ? "border" : "content"), r, s) + "px"
	}

	function Yt(e, t, n, r, i) {
		return new Yt.prototype.init(e, t, n, r, i)
	}

	function un() {
		return setTimeout(function() {
			Zt = undefined
		}), Zt = p.now()
	}

	function an(e, t) {
		var n, r = {
				height: e
			},
			i = 0;
		t = t ? 1 : 0;
		for (; i < 4; i += 2 - t) n = V[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}

	function fn(e, t, n) {
		var r, i = (on[t] || []).concat(on["*"]),
			s = 0,
			o = i.length;
		for (; s < o; s++)
			if (r = i[s].call(n, t, e)) return r
	}

	function ln(e, t, n) {
		var r, i, s, o, u, a, f, l, h = this,
			d = {},
			v = e.style,
			m = e.nodeType && $(e),
			g = p._data(e, "fxshow");
		n.queue || (u = p._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire =
			function() {
				u.unqueued || a()
			}), u.unqueued++, h.always(function() {
			h.always(function() {
				u.unqueued--, p.queue(e, "fx").length || u.empty.fire()
			})
		})), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [v.overflow, v.overflowX, v.overflowY], f =
			p.css(e, "display"), l = _t(e.nodeName), f === "none" && (f = l), f === "inline" && p.css(e, "float") === "none" &&
			(!c.inlineBlockNeedsLayout || l === "inline" ? v.display = "inline-block" : v.zoom = 1)), n.overflow && (v.overflow =
			"hidden", c.shrinkWrapBlocks() || h.always(function() {
				v.overflow = n.overflow[0], v.overflowX = n.overflow[1], v.overflowY = n.overflow[2]
			}));
		for (r in t) {
			i = t[r];
			if (tn.exec(i)) {
				delete t[r], s = s || i === "toggle";
				if (i === (m ? "hide" : "show")) {
					if (i !== "show" || !g || g[r] === undefined) continue;
					m = !0
				}
				d[r] = g && g[r] || p.style(e, r)
			}
		}
		if (!p.isEmptyObject(d)) {
			g ? "hidden" in g && (m = g.hidden) : g = p._data(e, "fxshow", {}), s && (g.hidden = !m), m ? p(e).show() : h.done(
				function() {
					p(e).hide()
				}), h.done(function() {
				var t;
				p._removeData(e, "fxshow");
				for (t in d) p.style(e, t, d[t])
			});
			for (r in d) o = fn(m ? g[r] : 0, r, h), r in g || (g[r] = o.start, m && (o.end = o.start, o.start = r === "width" ||
				r === "height" ? 1 : 0))
		}
	}

	function cn(e, t) {
		var n, r, i, s, o;
		for (n in e) {
			r = p.camelCase(n), i = t[r], s = e[n], p.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[
				n]), o = p.cssHooks[r];
			if (o && "expand" in o) {
				s = o.expand(s), delete e[r];
				for (n in s) n in e || (e[n] = s[n], t[n] = i)
			} else t[r] = i
		}
	}

	function hn(e, t, n) {
		var r, i, s = 0,
			o = sn.length,
			u = p.Deferred().always(function() {
				delete a.elem
			}),
			a = function() {
				if (i) return !1;
				var t = Zt || un(),
					n = Math.max(0, f.startTime + f.duration - t),
					r = n / f.duration || 0,
					s = 1 - r,
					o = 0,
					a = f.tweens.length;
				for (; o < a; o++) f.tweens[o].run(s);
				return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
			},
			f = u.promise({
				elem: e,
				props: p.extend({}, t),
				opts: p.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Zt || un(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = p.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
					return f.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? f.tweens.length : 0;
					if (i) return this;
					i = !0;
					for (; n < r; n++) f.tweens[n].run(1);
					return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
				}
			}),
			l = f.props;
		cn(l, f.opts.specialEasing);
		for (; s < o; s++) {
			r = sn[s].call(f, e, l, f.opts);
			if (r) return r
		}
		return p.map(l, fn, f), p.isFunction(f.opts.start) && f.opts.start.call(e, f), p.fx.timer(p.extend(a, {
			elem: e,
			anim: f,
			queue: f.opts.queue
		})), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
	}

	function In(e) {
		return function(t, n) {
			typeof t != "string" && (n = t, t = "*");
			var r, i = 0,
				s = t.toLowerCase().match(M) || [];
			if (p.isFunction(n))
				while (r = s[i++]) r.charAt(0) === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] ||
					[]).push(n)
		}
	}

	function qn(e, t, n, r) {
		function o(u) {
			var a;
			return i[u] = !0, p.each(e[u] || [], function(e, u) {
				var f = u(t, n, r);
				if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
				if (s) return !(a = f)
			}), a
		}
		var i = {},
			s = e === Bn;
		return o(t.dataTypes[0]) || !i["*"] && o("*")
	}

	function Rn(e, t) {
		var n, r, i = p.ajaxSettings.flatOptions || {};
		for (r in t) t[r] !== undefined && ((i[r] ? e : n || (n = {}))[r] = t[r]);
		return n && p.extend(!0, e, n), e
	}

	function Un(e, t, n) {
		var r, i, s, o, u = e.contents,
			a = e.dataTypes;
		while (a[0] === "*") a.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
		if (i)
			for (o in u)
				if (u[o] && u[o].test(i)) {
					a.unshift(o);
					break
				} if (a[0] in n) s = a[0];
		else {
			for (o in n) {
				if (!a[0] || e.converters[o + " " + a[0]]) {
					s = o;
					break
				}
				r || (r = o)
			}
			s = s || r
		}
		if (s) return s !== a[0] && a.unshift(s), n[s]
	}

	function zn(e, t, n, r) {
		var i, s, o, u, a, f = {},
			l = e.dataTypes.slice();
		if (l[1])
			for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
		s = l.shift();
		while (s) {
			e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
				a = s, s = l.shift();
			if (s)
				if (s === "*") s = a;
				else if (a !== "*" && a !== s) {
				o = f[a + " " + s] || f["* " + s];
				if (!o)
					for (i in f) {
						u = i.split(" ");
						if (u[1] === s) {
							o = f[a + " " + u[0]] || f["* " + u[0]];
							if (o) {
								o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
								break
							}
						}
					}
				if (o !== !0)
					if (o && e["throws"]) t = o(t);
					else try {
						t = o(t)
					} catch (c) {
						return {
							state: "parsererror",
							error: o ? c : "No conversion from " + a + " to " + s
						}
					}
			}
		}
		return {
			state: "success",
			data: t
		}
	}

	function Kn(e, t, n, r) {
		var i;
		if (p.isArray(t)) p.each(t, function(t, i) {
			n || Xn.test(e) ? r(e, i) : Kn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
		});
		else if (!n && p.type(t) === "object")
			for (i in t) Kn(e + "[" + i + "]", t[i], n, r);
		else r(e, t)
	}

	function Zn() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}

	function er() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}

	function sr(e) {
		return p.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
	}
	var n = [],
		r = n.slice,
		i = n.concat,
		s = n.push,
		o = n.indexOf,
		u = {},
		a = u.toString,
		f = u.hasOwnProperty,
		l = "".trim,
		c = {},
		h = "1.11.0",
		p = function(e, t) {
			return new p.fn.init(e, t)
		},
		d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		v = /^-ms-/,
		m = /-([\da-z])/gi,
		g = function(e, t) {
			return t.toUpperCase()
		};
	p.fn = p.prototype = {
		jquery: h,
		constructor: p,
		selector: "",
		length: 0,
		toArray: function() {
			return r.call(this)
		},
		get: function(e) {
			return e != null ? e < 0 ? this[e + this.length] : this[e] : r.call(this)
		},
		pushStack: function(e) {
			var t = p.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return p.each(this, e, t)
		},
		map: function(e) {
			return this.pushStack(p.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(r.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: s,
		sort: n.sort,
		splice: n.splice
	}, p.extend = p.fn.extend = function() {
		var e, t, n, r, i, s, o = arguments[0] || {},
			u = 1,
			a = arguments.length,
			f = !1;
		typeof o == "boolean" && (f = o, o = arguments[u] || {}, u++), typeof o != "object" && !p.isFunction(o) && (o = {}),
			u === a && (o = this, u--);
		for (; u < a; u++)
			if ((i = arguments[u]) != null)
				for (r in i) {
					e = o[r], n = i[r];
					if (o === n) continue;
					f && n && (p.isPlainObject(n) || (t = p.isArray(n))) ? (t ? (t = !1, s = e && p.isArray(e) ? e : []) : s = e &&
						p.isPlainObject(e) ? e : {}, o[r] = p.extend(f, s, n)) : n !== undefined && (o[r] = n)
				}
		return o
	}, p.extend({
		expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return p.type(e) === "function"
		},
		isArray: Array.isArray || function(e) {
			return p.type(e) === "array"
		},
		isWindow: function(e) {
			return e != null && e == e.window
		},
		isNumeric: function(e) {
			return e - parseFloat(e) >= 0
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		isPlainObject: function(e) {
			var t;
			if (!e || p.type(e) !== "object" || e.nodeType || p.isWindow(e)) return !1;
			try {
				if (e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (n) {
				return !1
			}
			if (c.ownLast)
				for (t in e) return f.call(e, t);
			for (t in e);
			return t === undefined || f.call(e, t)
		},
		type: function(e) {
			return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? u[a.call(e)] || "object" : typeof e
		},
		globalEval: function(t) {
			t && p.trim(t) && (e.execScript || function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(v, "ms-").replace(m, g)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, n) {
			var r, i = 0,
				s = e.length,
				o = y(e);
			if (n)
				if (o)
					for (; i < s; i++) {
						r = t.apply(e[i], n);
						if (r === !1) break
					} else
						for (i in e) {
							r = t.apply(e[i], n);
							if (r === !1) break
						} else if (o)
							for (; i < s; i++) {
								r = t.call(e[i], i, e[i]);
								if (r === !1) break
							} else
								for (i in e) {
									r = t.call(e[i], i, e[i]);
									if (r === !1) break
								}
			return e
		},
		trim: l && !l.call("") ? function(e) {
			return e == null ? "" : l.call(e)
		} : function(e) {
			return e == null ? "" : (e + "").replace(d, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return e != null && (y(Object(e)) ? p.merge(n, typeof e == "string" ? [e] : e) : s.call(n, e)), n
		},
		inArray: function(e, t, n) {
			var r;
			if (t) {
				if (o) return o.call(t, e, n);
				r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
				for (; n < r; n++)
					if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, t) {
			var n = +t.length,
				r = 0,
				i = e.length;
			while (r < n) e[i++] = t[r++];
			if (n !== n)
				while (t[r] !== undefined) e[i++] = t[r++];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			var r, i = [],
				s = 0,
				o = e.length,
				u = !n;
			for (; s < o; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
			return i
		},
		map: function(e, t, n) {
			var r, s = 0,
				o = e.length,
				u = y(e),
				a = [];
			if (u)
				for (; s < o; s++) r = t(e[s], s, n), r != null && a.push(r);
			else
				for (s in e) r = t(e[s], s, n), r != null && a.push(r);
			return i.apply([], a)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, i, s;
			return typeof t == "string" && (s = e[t], t = e, e = s), p.isFunction(e) ? (n = r.call(arguments, 2), i =
				function() {
					return e.apply(t || this, n.concat(r.call(arguments)))
				}, i.guid = e.guid = e.guid || p.guid++, i) : undefined
		},
		now: function() {
			return +(new Date)
		},
		support: c
	}), p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		u["[object " + t + "]"] = t.toLowerCase()
	});
	var b = function(e) {
		function rt(e, t, r, i) {
			var s, o, u, a, f, h, v, m, w, E;
			(t ? t.ownerDocument || t : b) !== c && l(t), t = t || c, r = r || [];
			if (!e || typeof e != "string") return r;
			if ((a = t.nodeType) !== 1 && a !== 9) return [];
			if (p && !i) {
				if (s = G.exec(e))
					if (u = s[1]) {
						if (a === 9) {
							o = t.getElementById(u);
							if (!o || !o.parentNode) return r;
							if (o.id === u) return r.push(o), r
						} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && g(t, o) && o.id === u) return r.push(o),
							r
					} else {
						if (s[2]) return _.apply(r, t.getElementsByTagName(e)), r;
						if ((u = s[3]) && n.getElementsByClassName && t.getElementsByClassName) return _.apply(r, t.getElementsByClassName(
							u)), r
					} if (n.qsa && (!d || !d.test(e))) {
					m = v = y, w = t, E = a === 9 && e;
					if (a === 1 && t.nodeName.toLowerCase() !== "object") {
						h = dt(e), (v = t.getAttribute("id")) ? m = v.replace(Z, "\\$&") : t.setAttribute("id", m), m = "[id='" + m +
							"'] ", f = h.length;
						while (f--) h[f] = m + vt(h[f]);
						w = Y.test(e) && ht(t.parentNode) || t, E = h.join(",")
					}
					if (E) try {
						return _.apply(r, w.querySelectorAll(E)), r
					} catch (S) {} finally {
						v || t.removeAttribute("id")
					}
				}
			}
			return xt(e.replace(R, "$1"), t, r, i)
		}

		function it() {
			function t(n, i) {
				return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
			}
			var e = [];
			return t
		}

		function st(e) {
			return e[y] = !0, e
		}

		function ot(e) {
			var t = c.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function ut(e, t) {
			var n = e.split("|"),
				i = e.length;
			while (i--) r.attrHandle[n[i]] = t
		}

		function at(e, t) {
			var n = t && e,
				r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || k) - (~e.sourceIndex || k);
			if (r) return r;
			if (n)
				while (n = n.nextSibling)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function ft(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return n === "input" && t.type === e
			}
		}

		function lt(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return (n === "input" || n === "button") && t.type === e
			}
		}

		function ct(e) {
			return st(function(t) {
				return t = +t, st(function(n, r) {
					var i, s = e([], n.length, t),
						o = s.length;
					while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}

		function ht(e) {
			return e && typeof e.getElementsByTagName !== C && e
		}

		function pt() {}

		function dt(e, t) {
			var n, i, s, o, u, a, f, l = x[e + " "];
			if (l) return t ? 0 : l.slice(0);
			u = e, a = [], f = r.preFilter;
			while (u) {
				if (!n || (i = U.exec(u))) i && (u = u.slice(i[0].length) || u), a.push(s = []);
				n = !1;
				if (i = z.exec(u)) n = i.shift(), s.push({
					value: n,
					type: i[0].replace(R, " ")
				}), u = u.slice(n.length);
				for (o in r.filter)(i = $[o].exec(u)) && (!f[o] || (i = f[o](i))) && (n = i.shift(), s.push({
					value: n,
					type: o,
					matches: i
				}), u = u.slice(n.length));
				if (!n) break
			}
			return t ? u.length : u ? rt.error(e) : x(e, a).slice(0)
		}

		function vt(e) {
			var t = 0,
				n = e.length,
				r = "";
			for (; t < n; t++) r += e[t].value;
			return r
		}

		function mt(e, t, n) {
			var r = t.dir,
				i = n && r === "parentNode",
				s = E++;
			return t.first ? function(t, n, s) {
				while (t = t[r])
					if (t.nodeType === 1 || i) return e(t, n, s)
			} : function(t, n, o) {
				var u, a, f = [w, s];
				if (o) {
					while (t = t[r])
						if (t.nodeType === 1 || i)
							if (e(t, n, o)) return !0
				} else
					while (t = t[r])
						if (t.nodeType === 1 || i) {
							a = t[y] || (t[y] = {});
							if ((u = a[r]) && u[0] === w && u[1] === s) return f[2] = u[2];
							a[r] = f;
							if (f[2] = e(t, n, o)) return !0
						}
			}
		}

		function gt(e) {
			return e.length > 1 ? function(t, n, r) {
				var i = e.length;
				while (i--)
					if (!e[i](t, n, r)) return !1;
				return !0
			} : e[0]
		}

		function yt(e, t, n, r, i) {
			var s, o = [],
				u = 0,
				a = e.length,
				f = t != null;
			for (; u < a; u++)
				if (s = e[u])
					if (!n || n(s, r, i)) o.push(s), f && t.push(u);
			return o
		}

		function bt(e, t, n, r, i, s) {
			return r && !r[y] && (r = bt(r)), i && !i[y] && (i = bt(i, s)), st(function(s, o, u, a) {
				var f, l, c, h = [],
					p = [],
					d = o.length,
					v = s || St(t || "*", u.nodeType ? [u] : u, []),
					m = e && (s || !t) ? yt(v, h, e, u, a) : v,
					g = n ? i || (s ? e : d || r) ? [] : o : m;
				n && n(m, g, u, a);
				if (r) {
					f = yt(g, p), r(f, [], u, a), l = f.length;
					while (l--)
						if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
				}
				if (s) {
					if (i || e) {
						if (i) {
							f = [], l = g.length;
							while (l--)(c = g[l]) && f.push(m[l] = c);
							i(null, g = [], f, a)
						}
						l = g.length;
						while (l--)(c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
					}
				} else g = yt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g)
			})
		}

		function wt(e) {
			var t, n, i, s = e.length,
				o = r.relative[e[0].type],
				a = o || r.relative[" "],
				f = o ? 1 : 0,
				l = mt(function(e) {
					return e === t
				}, a, !0),
				c = mt(function(e) {
					return P.call(t, e) > -1
				}, a, !0),
				h = [function(e, n, r) {
					return !o && (r || n !== u) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
				}];
			for (; f < s; f++)
				if (n = r.relative[e[f].type]) h = [mt(gt(h), n)];
				else {
					n = r.filter[e[f].type].apply(null, e[f].matches);
					if (n[y]) {
						i = ++f;
						for (; i < s; i++)
							if (r.relative[e[i].type]) break;
						return bt(f > 1 && gt(h), f > 1 && vt(e.slice(0, f - 1).concat({
							value: e[f - 2].type === " " ? "*" : ""
						})).replace(R, "$1"), n, f < i && wt(e.slice(f, i)), i < s && wt(e = e.slice(i)), i < s && vt(e))
					}
					h.push(n)
				} return gt(h)
		}

		function Et(e, t) {
			var n = t.length > 0,
				i = e.length > 0,
				s = function(s, o, a, f, l) {
					var h, p, d, v = 0,
						m = "0",
						g = s && [],
						y = [],
						b = u,
						E = s || i && r.find.TAG("*", l),
						S = w += b == null ? 1 : Math.random() || .1,
						x = E.length;
					l && (u = o !== c && o);
					for (; m !== x && (h = E[m]) != null; m++) {
						if (i && h) {
							p = 0;
							while (d = e[p++])
								if (d(h, o, a)) {
									f.push(h);
									break
								} l && (w = S)
						}
						n && ((h = !d && h) && v--, s && g.push(h))
					}
					v += m;
					if (n && m !== v) {
						p = 0;
						while (d = t[p++]) d(g, y, o, a);
						if (s) {
							if (v > 0)
								while (m--) !g[m] && !y[m] && (y[m] = O.call(f));
							y = yt(y)
						}
						_.apply(f, y), l && !s && y.length > 0 && v + t.length > 1 && rt.uniqueSort(f)
					}
					return l && (w = S, u = b), g
				};
			return n ? st(s) : s
		}

		function St(e, t, n) {
			var r = 0,
				i = t.length;
			for (; r < i; r++) rt(e, t[r], n);
			return n
		}

		function xt(e, t, i, s) {
			var u, a, f, l, c, h = dt(e);
			if (!s && h.length === 1) {
				a = h[0] = h[0].slice(0);
				if (a.length > 2 && (f = a[0]).type === "ID" && n.getById && t.nodeType === 9 && p && r.relative[a[1].type]) {
					t = (r.find.ID(f.matches[0].replace(et, tt), t) || [])[0];
					if (!t) return i;
					e = e.slice(a.shift().value.length)
				}
				u = $.needsContext.test(e) ? 0 : a.length;
				while (u--) {
					f = a[u];
					if (r.relative[l = f.type]) break;
					if (c = r.find[l])
						if (s = c(f.matches[0].replace(et, tt), Y.test(a[0].type) && ht(t.parentNode) || t)) {
							a.splice(u, 1), e = s.length && vt(a);
							if (!e) return _.apply(i, s), i;
							break
						}
				}
			}
			return o(e, h)(s, t, !p, i, Y.test(e) && ht(t.parentNode) || t), i
		}
		var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y = "sizzle" + -(new Date),
			b = e.document,
			w = 0,
			E = 0,
			S = it(),
			x = it(),
			T = it(),
			N = function(e, t) {
				return e === t && (f = !0), 0
			},
			C = typeof undefined,
			k = 1 << 31,
			L = {}.hasOwnProperty,
			A = [],
			O = A.pop,
			M = A.push,
			_ = A.push,
			D = A.slice,
			P = A.indexOf || function(e) {
				var t = 0,
					n = this.length;
				for (; t < n; t++)
					if (this[t] === e) return t;
				return -1
			},
			H =
			"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			B = "[\\x20\\t\\r\\n\\f]",
			j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			F = j.replace("w", "w#"),
			I = "\\[" + B + "*(" + j + ")" + B + "*(?:([*^$|!~]?=)" + B + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + F +
			")|)|)" + B + "*\\]",
			q = ":(" + j + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) +
			")*)|.*)\\)|)",
			R = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
			U = new RegExp("^" + B + "*," + B + "*"),
			z = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
			W = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
			X = new RegExp(q),
			V = new RegExp("^" + F + "$"),
			$ = {
				ID: new RegExp("^#(" + j + ")"),
				CLASS: new RegExp("^\\.(" + j + ")"),
				TAG: new RegExp("^(" + j.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + I),
				PSEUDO: new RegExp("^" + q),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" +
					B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + H + ")$", "i"),
				needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" +
					B + "*\\)|)(?=[^-]|$)", "i")
			},
			J = /^(?:input|select|textarea|button)$/i,
			K = /^h\d$/i,
			Q = /^[^{]+\{\s*\[native \w/,
			G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			Y = /[+~]/,
			Z = /'|\\/g,
			et = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
			tt = function(e, t, n) {
				var r = "0x" + t - 65536;
				return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 |
					56320)
			};
		try {
			_.apply(A = D.call(b.childNodes), b.childNodes), A[b.childNodes.length].nodeType
		} catch (nt) {
			_ = {
				apply: A.length ? function(e, t) {
					M.apply(e, D.call(t))
				} : function(e, t) {
					var n = e.length,
						r = 0;
					while (e[n++] = t[r++]);
					e.length = n - 1
				}
			}
		}
		n = rt.support = {}, s = rt.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return t ? t.nodeName !== "HTML" : !1
			}, l = rt.setDocument = function(e) {
				var t, i = e ? e.ownerDocument || e : b,
					o = i.defaultView;
				if (i === c || i.nodeType !== 9 || !i.documentElement) return c;
				c = i, h = i.documentElement, p = !s(i), o && o !== o.top && (o.addEventListener ? o.addEventListener("unload",
					function() {
						l()
					}, !1) : o.attachEvent && o.attachEvent("onunload", function() {
					l()
				})), n.attributes = ot(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), n.getElementsByTagName = ot(function(e) {
					return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
				}), n.getElementsByClassName = Q.test(i.getElementsByClassName) && ot(function(e) {
					return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", e.getElementsByClassName(
						"i").length === 2
				}), n.getById = ot(function(e) {
					return h.appendChild(e).id = y, !i.getElementsByName || !i.getElementsByName(y).length
				}), n.getById ? (r.find.ID = function(e, t) {
					if (typeof t.getElementById !== C && p) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, r.filter.ID = function(e) {
					var t = e.replace(et, tt);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete r.find.ID, r.filter.ID = function(e) {
					var t = e.replace(et, tt);
					return function(e) {
						var n = typeof e.getAttributeNode !== C && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), r.find.TAG = n.getElementsByTagName ? function(e, t) {
					if (typeof t.getElementsByTagName !== C) return t.getElementsByTagName(e)
				} : function(e, t) {
					var n, r = [],
						i = 0,
						s = t.getElementsByTagName(e);
					if (e === "*") {
						while (n = s[i++]) n.nodeType === 1 && r.push(n);
						return r
					}
					return s
				}, r.find.CLASS = n.getElementsByClassName && function(e, t) {
					if (typeof t.getElementsByClassName !== C && p) return t.getElementsByClassName(e)
				}, v = [], d = [];
				if (n.qsa = Q.test(i.querySelectorAll)) ot(function(e) {
					e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && d
						.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || d.push("\\[" + B +
							"*(?:value|" + H + ")"), e.querySelectorAll(":checked").length || d.push(":checked")
				}), ot(function(e) {
					var t = i.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length &&
						d.push("name" + B + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"),
						e.querySelectorAll("*,:x"), d.push(",.*:")
				});
				return (n.matchesSelector = Q.test(m = h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h
						.msMatchesSelector)) && ot(function(e) {
						n.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q)
					}), d = d.length && new RegExp(d.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition),
					g = t || Q.test(h.contains) ? function(e, t) {
						var n = e.nodeType === 9 ? e.documentElement : e,
							r = t && t.parentNode;
						return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(
							r) & 16)
					} : function(e, t) {
						if (t)
							while (t = t.parentNode)
								if (t === e) return !0;
						return !1
					}, N = t ? function(e, t) {
						if (e === t) return f = !0, 0;
						var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, r & 1 ||
							!n.sortDetached && t.compareDocumentPosition(e) === r ? e === i || e.ownerDocument === b && g(b, e) ? -1 : t ===
							i || t.ownerDocument === b && g(b, t) ? 1 : a ? P.call(a, e) - P.call(a, t) : 0 : r & 4 ? -1 : 1)
					} : function(e, t) {
						if (e === t) return f = !0, 0;
						var n, r = 0,
							s = e.parentNode,
							o = t.parentNode,
							u = [e],
							l = [t];
						if (!s || !o) return e === i ? -1 : t === i ? 1 : s ? -1 : o ? 1 : a ? P.call(a, e) - P.call(a, t) : 0;
						if (s === o) return at(e, t);
						n = e;
						while (n = n.parentNode) u.unshift(n);
						n = t;
						while (n = n.parentNode) l.unshift(n);
						while (u[r] === l[r]) r++;
						return r ? at(u[r], l[r]) : u[r] === b ? -1 : l[r] === b ? 1 : 0
					}, i
			}, rt.matches = function(e, t) {
				return rt(e, null, null, t)
			}, rt.matchesSelector = function(e, t) {
				(e.ownerDocument || e) !== c && l(e), t = t.replace(W, "='$1']");
				if (n.matchesSelector && p && (!v || !v.test(t)) && (!d || !d.test(t))) try {
					var r = m.call(e, t);
					if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11) return r
				} catch (i) {}
				return rt(t, c, null, [e]).length > 0
			}, rt.contains = function(e, t) {
				return (e.ownerDocument || e) !== c && l(e), g(e, t)
			}, rt.attr = function(e, t) {
				(e.ownerDocument || e) !== c && l(e);
				var i = r.attrHandle[t.toLowerCase()],
					s = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !p) : undefined;
				return s !== undefined ? s : n.attributes || !p ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ?
					s.value : null
			}, rt.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, rt.uniqueSort = function(e) {
				var t, r = [],
					i = 0,
					s = 0;
				f = !n.detectDuplicates, a = !n.sortStable && e.slice(0), e.sort(N);
				if (f) {
					while (t = e[s++]) t === e[s] && (i = r.push(s));
					while (i--) e.splice(r[i], 1)
				}
				return a = null, e
			}, i = rt.getText = function(e) {
				var t, n = "",
					r = 0,
					s = e.nodeType;
				if (!s)
					while (t = e[r++]) n += i(t);
				else if (s === 1 || s === 9 || s === 11) {
					if (typeof e.textContent == "string") return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
				} else if (s === 3 || s === 4) return e.nodeValue;
				return n
			}, r = rt.selectors = {
				cacheLength: 50,
				createPseudo: st,
				match: $,
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
					ATTR: function(e) {
						return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), e[2] === "~=" && (e[3] = " " +
							e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || rt.error(e[0]), e[4] = +(e[4] ? e[5] +
								(e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] &&
							rt.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[5] && e[2];
						return $.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && X.test(n) && (t = dt(n, !0)) &&
							(t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0,
								3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(et, tt).toLowerCase();
						return e === "*" ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = S[e + " "];
						return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && S(e, function(e) {
							return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== C && e.getAttribute(
								"class") || "")
						})
					},
					ATTR: function(e, t, n) {
						return function(r) {
							var i = rt.attr(r, e);
							return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n &&
								i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t ===
								"~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1
							) : !0
						}
					},
					CHILD: function(e, t, n, r, i) {
						var s = e.slice(0, 3) !== "nth",
							o = e.slice(-4) !== "last",
							u = t === "of-type";
						return r === 1 && i === 0 ? function(e) {
							return !!e.parentNode
						} : function(t, n, a) {
							var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
								m = t.parentNode,
								g = u && t.nodeName.toLowerCase(),
								b = !a && !u;
							if (m) {
								if (s) {
									while (v) {
										c = t;
										while (c = c[v])
											if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
										d = v = e === "only" && !d && "nextSibling"
									}
									return !0
								}
								d = [o ? m.firstChild : m.lastChild];
								if (o && b) {
									l = m[y] || (m[y] = {}), f = l[e] || [], p = f[0] === w && f[1], h = f[0] === w && f[2], c = p && m.childNodes[
										p];
									while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
										if (c.nodeType === 1 && ++h && c === t) {
											l[e] = [w, p, h];
											break
										}
								} else if (b && (f = (t[y] || (t[y] = {}))[e]) && f[0] === w) h = f[1];
								else
									while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
										if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
											b && ((c[y] || (c[y] = {}))[e] = [w, h]);
											if (c === t) break
										} return h -= i, h === r || h % r === 0 && h / r >= 0
							}
						}
					},
					PSEUDO: function(e, t) {
						var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || rt.error("unsupported pseudo: " + e);
						return i[y] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? st(
							function(e, n) {
								var r, s = i(e, t),
									o = s.length;
								while (o--) r = P.call(e, s[o]), e[r] = !(n[r] = s[o])
							}) : function(e) {
							return i(e, 0, n)
						}) : i
					}
				},
				pseudos: {
					not: st(function(e) {
						var t = [],
							n = [],
							r = o(e.replace(R, "$1"));
						return r[y] ? st(function(e, t, n, i) {
							var s, o = r(e, null, i, []),
								u = e.length;
							while (u--)
								if (s = o[u]) e[u] = !(t[u] = s)
						}) : function(e, i, s) {
							return t[0] = e, r(t, null, s, n), !n.pop()
						}
					}),
					has: st(function(e) {
						return function(t) {
							return rt(e, t).length > 0
						}
					}),
					contains: st(function(e) {
						return function(t) {
							return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
						}
					}),
					lang: st(function(e) {
						return V.test(e || "") || rt.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
							function(t) {
								var n;
								do
									if (n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n ===
										e || n.indexOf(e + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
								return !1
							}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === h
					},
					focus: function(e) {
						return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return e.disabled === !1
					},
					disabled: function(e) {
						return e.disabled === !0
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return t === "input" && !!e.checked || t === "option" && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !r.pseudos.empty(e)
					},
					header: function(e) {
						return K.test(e.nodeName)
					},
					input: function(e) {
						return J.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return t === "input" && e.type === "button" || t === "button"
					},
					text: function(e) {
						var t;
						return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t
							.toLowerCase() === "text")
					},
					first: ct(function() {
						return [0]
					}),
					last: ct(function(e, t) {
						return [t - 1]
					}),
					eq: ct(function(e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: ct(function(e, t) {
						var n = 0;
						for (; n < t; n += 2) e.push(n);
						return e
					}),
					odd: ct(function(e, t) {
						var n = 1;
						for (; n < t; n += 2) e.push(n);
						return e
					}),
					lt: ct(function(e, t, n) {
						var r = n < 0 ? n + t : n;
						for (; --r >= 0;) e.push(r);
						return e
					}),
					gt: ct(function(e, t, n) {
						var r = n < 0 ? n + t : n;
						for (; ++r < t;) e.push(r);
						return e
					})
				}
			}, r
			.pseudos.nth = r.pseudos.eq;
		for (t in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) r.pseudos[t] = ft(t);
		for (t in {
				submit: !0,
				reset: !0
			}) r.pseudos[t] = lt(t);
		return pt.prototype = r.filters = r.pseudos, r.setFilters = new pt, o = rt.compile = function(e, t) {
			var n, r = [],
				i = [],
				s = T[e + " "];
			if (!s) {
				t || (t = dt(e)), n = t.length;
				while (n--) s = wt(t[n]), s[y] ? r.push(s) : i.push(s);
				s = T(e, Et(i, r))
			}
			return s
		}, n.sortStable = y.split("").sort(N).join("") === y, n.detectDuplicates = !!f, l(), n.sortDetached = ot(function(
			e) {
			return e.compareDocumentPosition(c.createElement("div")) & 1
		}), ot(function(e) {
			return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#"
		}) || ut("type|href|height|width", function(e, t, n) {
			if (!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
		}), (!n.attributes || !ot(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") ===
				""
		})) && ut("value", function(e, t, n) {
			if (!n && e.nodeName.toLowerCase() === "input") return e.defaultValue
		}), ot(function(e) {
			return e.getAttribute("disabled") == null
		}) || ut(H, function(e, t, n) {
			var r;
			if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), rt
	}(e);
	p.find = b, p.expr = b.selectors, p.expr[":"] = p.expr.pseudos, p.unique = b.uniqueSort, p.text = b.getText, p.isXMLDoc =
		b.isXML, p.contains = b.contains;
	var w = p.expr.match.needsContext,
		E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		S = /^.[^:#\[\.,]*$/;
	p.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? p.find.matchesSelector(r, e) ? [r] : [] :
			p.find.matches(e, p.grep(t, function(e) {
				return e.nodeType === 1
			}))
	}, p.fn.extend({
		find: function(e) {
			var t, n = [],
				r = this,
				i = r.length;
			if (typeof e != "string") return this.pushStack(p(e).filter(function() {
				for (t = 0; t < i; t++)
					if (p.contains(r[t], this)) return !0
			}));
			for (t = 0; t < i; t++) p.find(e, r[t], n);
			return n = this.pushStack(i > 1 ? p.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		filter: function(e) {
			return this.pushStack(x(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(x(this, e || [], !0))
		},
		is: function(e) {
			return !!x(this, typeof e == "string" && w.test(e) ? p(e) : e || [], !1).length
		}
	});
	var T, N = e.document,
		C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		k = p.fn.init = function(e, t) {
			var n, r;
			if (!e) return this;
			if (typeof e == "string") {
				e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? n = [null, e, null] : n = C.exec(e);
				if (n && (n[1] || !t)) {
					if (n[1]) {
						t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : N, !0));
						if (E.test(n[1]) && p.isPlainObject(t))
							for (n in t) p.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
						return this
					}
					r = N.getElementById(n[2]);
					if (r && r.parentNode) {
						if (r.id !== n[2]) return T.find(e);
						this.length = 1, this[0] = r
					}
					return this.context = N, this.selector = e, this
				}
				return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e)
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? typeof T.ready !=
				"undefined" ? T.ready(e) : e(p) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context),
					p.makeArray(e, this))
		};
	k.prototype = p.fn, T = p(N);
	var L = /^(?:parents|prev(?:Until|All))/,
		A = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	p.extend({
		dir: function(e, t, n) {
			var r = [],
				i = e[t];
			while (i && i.nodeType !== 9 && (n === undefined || i.nodeType !== 1 || !p(i).is(n))) i.nodeType === 1 && r.push(
				i), i = i[t];
			return r
		},
		sibling: function(e, t) {
			var n = [];
			for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
			return n
		}
	}), p.fn.extend({
		has: function(e) {
			var t, n = p(e, this),
				r = n.length;
			return this.filter(function() {
				for (t = 0; t < r; t++)
					if (p.contains(this, n[t])) return !0
			})
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				s = [],
				o = w.test(e) || typeof e != "string" ? p(e, t || this.context) : 0;
			for (; r < i; r++)
				for (n = this[r]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && p.find.matchesSelector(n, e))) {
						s.push(n);
						break
					} return this.pushStack(s.length > 1 ? p.unique(s) : s)
		},
		index: function(e) {
			return e ? typeof e == "string" ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this) : this[0] &&
				this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(p.unique(p.merge(this.get(), p(e, t))))
		},
		addBack: function(e) {
			return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
		}
	}), p.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && t.nodeType !== 11 ? t : null
		},
		parents: function(e) {
			return p.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return p.dir(e, "parentNode", n)
		},
		next: function(e) {
			return O(e, "nextSibling")
		},
		prev: function(e) {
			return O(e, "previousSibling")
		},
		nextAll: function(e) {
			return p.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return p.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return p.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return p.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return p.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return p.sibling(e.firstChild)
		},
		contents: function(e) {
			return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes)
		}
	}, function(e, t) {
		p.fn[e] = function(n, r) {
			var i = p.map(this, t, n);
			return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = p.filter(r, i)), this.length > 1 &&
				(A[e] || (i = p.unique(i)), L.test(e) && (i = i.reverse())), this.pushStack(i)
		}
	});
	var M = /\S+/g,
		_ = {};
	p.Callbacks = function(e) {
		e = typeof e == "string" ? _[e] || D(e) : p.extend({}, e);
		var t, n, r, i, s, o, u = [],
			a = !e.once && [],
			f = function(c) {
				n = e.memory && c, r = !0, s = o || 0, o = 0, i = u.length, t = !0;
				for (; u && s < i; s++)
					if (u[s].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
						n = !1;
						break
					} t = !1, u && (a ? a.length && f(a.shift()) : n ? u = [] : l.disable())
			},
			l = {
				add: function() {
					if (u) {
						var r = u.length;
						(function s(t) {
							p.each(t, function(t, n) {
								var r = p.type(n);
								r === "function" ? (!e.unique || !l.has(n)) && u.push(n) : n && n.length && r !== "string" && s(n)
							})
						})(arguments), t ? i = u.length : n && (o = r, f(n))
					}
					return this
				},
				remove: function() {
					return u && p.each(arguments, function(e, n) {
						var r;
						while ((r = p.inArray(n, u, r)) > -1) u.splice(r, 1), t && (r <= i && i--, r <= s && s--)
					}), this
				},
				has: function(e) {
					return e ? p.inArray(e, u) > -1 : !!u && !!u.length
				},
				empty: function() {
					return u = [], i = 0, this
				},
				disable: function() {
					return u = a = n = undefined, this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return a = undefined, n || l.disable(), this
				},
				locked: function() {
					return !a
				},
				fireWith: function(e, n) {
					return u && (!r || a) && (n = n || [], n = [e, n.slice ? n.slice() : n], t ? a.push(n) : f(n)), this
				},
				fire: function() {
					return l.fireWith(this, arguments), this
				},
				fired: function() {
					return !!r
				}
			};
		return l
	}, p.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", p.Callbacks("once memory"), "resolved"],
					["reject", "fail", p.Callbacks("once memory"), "rejected"],
					["notify", "progress", p.Callbacks("memory")]
				],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return p.Deferred(function(n) {
							p.each(t, function(t, s) {
								var o = p.isFunction(e[t]) && e[t];
								i[s[1]](function() {
									var e = o && o.apply(this, arguments);
									e && p.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[
										0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return e != null ? p.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, p.each(t, function(e, s) {
				var o = s[2],
					u = s[3];
				r[s[1]] = o.add, u && o.add(function() {
					n = u
				}, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function() {
					return i[s[0] + "With"](this === i ? r : this, arguments), this
				}, i[s[0] + "With"] = o.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t = 0,
				n = r.call(arguments),
				i = n.length,
				s = i !== 1 || e && p.isFunction(e.promise) ? i : 0,
				o = s === 1 ? e : p.Deferred(),
				u = function(e, t, n) {
					return function(i) {
						t[e] = this, n[e] = arguments.length > 1 ? r.call(arguments) : i, n === a ? o.notifyWith(t, n) : --s || o.resolveWith(
							t, n)
					}
				},
				a, f, l;
			if (i > 1) {
				a = new Array(i), f = new Array(i), l = new Array(i);
				for (; t < i; t++) n[t] && p.isFunction(n[t].promise) ? n[t].promise().done(u(t, l, n)).fail(o.reject).progress(
					u(t, f, a)) : --s
			}
			return s || o.resolveWith(l, n), o.promise()
		}
	});
	var P;
	p.fn.ready = function(e) {
		return p.ready.promise().done(e), this
	}, p.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? p.readyWait++ : p.ready(!0)
		},
		ready: function(e) {
			if (e === !0 ? --p.readyWait : p.isReady) return;
			if (!N.body) return setTimeout(p.ready);
			p.isReady = !0;
			if (e !== !0 && --p.readyWait > 0) return;
			P.resolveWith(N, [p]), p.fn.trigger && p(N).trigger("ready").off("ready")
		}
	}), p.ready.promise = function(t) {
		if (!P) {
			P = p.Deferred();
			if (N.readyState === "complete") setTimeout(p.ready);
			else if (N.addEventListener) N.addEventListener("DOMContentLoaded", B, !1), e.addEventListener("load", B, !1);
			else {
				N.attachEvent("onreadystatechange", B), e.attachEvent("onload", B);
				var n = !1;
				try {
					n = e.frameElement == null && N.documentElement
				} catch (r) {}
				n && n.doScroll && function i() {
					if (!p.isReady) {
						try {
							n.doScroll("left")
						} catch (e) {
							return setTimeout(i, 50)
						}
						H(), p.ready()
					}
				}()
			}
		}
		return P.promise(t)
	};
	var j = typeof undefined,
		F;
	for (F in p(c)) break;
	c.ownLast = F !== "0", c.inlineBlockNeedsLayout = !1, p(function() {
			var e, t, n = N.getElementsByTagName("body")[0];
			if (!n) return;
			e = N.createElement("div"), e.style.cssText =
				"border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = N.createElement("div"), n.appendChild(
					e).appendChild(t);
			if (typeof t.style.zoom !== j) {
				t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1";
				if (c.inlineBlockNeedsLayout = t.offsetWidth === 3) n.style.zoom = 1
			}
			n.removeChild(e), e = t = null
		}),
		function() {
			var e = N.createElement("div");
			if (c.deleteExpando == null) {
				c.deleteExpando = !0;
				try {
					delete e.test
				} catch (t) {
					c.deleteExpando = !1
				}
			}
			e = null
		}(), p.acceptData = function(e) {
			var t = p.noData[(e.nodeName + " ").toLowerCase()],
				n = +e.nodeType || 1;
			return n !== 1 && n !== 9 ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
		};
	var I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		q = /([A-Z])/g;
	p.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando], !!e && !U(e)
		},
		data: function(e, t, n) {
			return z(e, t, n)
		},
		removeData: function(e, t) {
			return W(e, t)
		},
		_data: function(e, t, n) {
			return z(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return W(e, t, !0)
		}
	}), p.fn.extend({
		data: function(e, t) {
			var n, r, i, s = this[0],
				o = s && s.attributes;
			if (e === undefined) {
				if (this.length) {
					i = p.data(s);
					if (s.nodeType === 1 && !p._data(s, "parsedAttrs")) {
						n = o.length;
						while (n--) r = o[n].name, r.indexOf("data-") === 0 && (r = p.camelCase(r.slice(5)), R(s, r, i[r]));
						p._data(s, "parsedAttrs", !0)
					}
				}
				return i
			}
			return typeof e == "object" ? this.each(function() {
				p.data(this, e)
			}) : arguments.length > 1 ? this.each(function() {
				p.data(this, e, t)
			}) : s ? R(s, e, p.data(s, e)) : undefined
		},
		removeData: function(e) {
			return this.each(function() {
				p.removeData(this, e)
			})
		}
	}), p.extend({
		queue: function(e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue", r = p._data(e, t), n && (!r || p.isArray(n) ? r = p._data(e, t, p.makeArray(
				n)) : r.push(n)), r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = p.queue(e, t),
				r = n.length,
				i = n.shift(),
				s = p._queueHooks(e, t),
				o = function() {
					p.dequeue(e, t)
				};
			i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e,
				o, s)), !r && s && s.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return p._data(e, n) || p._data(e, n, {
				empty: p.Callbacks("once memory").add(function() {
					p._removeData(e, t + "queue"), p._removeData(e, n)
				})
			})
		}
	}), p.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? p.queue(this[0], e) : t ===
				undefined ? this : this.each(function() {
					var n = p.queue(this, e, t);
					p._queueHooks(this, e), e === "fx" && n[0] !== "inprogress" && p.dequeue(this, e)
				})
		},
		dequeue: function(e) {
			return this.each(function() {
				p.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = p.Deferred(),
				s = this,
				o = this.length,
				u = function() {
					--r || i.resolveWith(s, [s])
				};
			typeof e != "string" && (t = e, e = undefined), e = e || "fx";
			while (o--) n = p._data(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
			return u(), i.promise(t)
		}
	});
	var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		V = ["Top", "Right", "Bottom", "Left"],
		$ = function(e, t) {
			return e = t || e, p.css(e, "display") === "none" || !p.contains(e.ownerDocument, e)
		},
		J = p.access = function(e, t, n, r, i, s, o) {
			var u = 0,
				a = e.length,
				f = n == null;
			if (p.type(n) === "object") {
				i = !0;
				for (u in n) p.access(e, t, u, n[u], !0, s, o)
			} else if (r !== undefined) {
				i = !0, p.isFunction(r) || (o = !0), f && (o ? (t.call(e, r), t = null) : (f = t, t = function(e, t, n) {
					return f.call(p(e), n)
				}));
				if (t)
					for (; u < a; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)))
			}
			return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
		},
		K = /^(?:checkbox|radio)$/i;
	(function() {
		var e = N.createDocumentFragment(),
			t = N.createElement("div"),
			n = N.createElement("input");
		t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", c.leadingWhitespace =
			t.firstChild.nodeType === 3, c.tbody = !t.getElementsByTagName("tbody").length, c.htmlSerialize = !!t.getElementsByTagName(
				"link").length, c.html5Clone = N.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", n.type =
			"checkbox", n.checked = !0, e.appendChild(n), c.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>",
			c.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML =
			"<input type='radio' checked='checked' name='t'/>", c.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
			c.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
				c.noCloneEvent = !1
			}), t.cloneNode(!0).click());
		if (c.deleteExpando == null) {
			c.deleteExpando = !0;
			try {
				delete t.test
			} catch (r) {
				c.deleteExpando = !1
			}
		}
		e = t = n = null
	})(),
	function() {
		var t, n, r = N.createElement("div");
		for (t in {
				submit: !0,
				change: !0,
				focusin: !0
			}) n = "on" + t, (c[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), c[t + "Bubbles"] = r.attributes[n].expando ===
			!1);
		r = null
	}();
	var Q = /^(?:input|select|textarea)$/i,
		G = /^key/,
		Y = /^(?:mouse|contextmenu)|click/,
		Z = /^(?:focusinfocus|focusoutblur)$/,
		et = /^([^.]*)(?:\.(.+)|)$/;
	p.event = {
		global: {},
		add: function(e, t, n, r, i) {
			var s, o, u, a, f, l, c, h, d, v, m, g = p._data(e);
			if (!g) return;
			n.handler && (a = n, n = a.handler, i = a.selector), n.guid || (n.guid = p.guid++), (o = g.events) || (o = g.events = {}),
				(l = g.handle) || (l = g.handle = function(e) {
					return typeof p === j || !!e && p.event.triggered === e.type ? undefined : p.event.dispatch.apply(l.elem,
						arguments)
				}, l.elem = e), t = (t || "").match(M) || [""], u = t.length;
			while (u--) {
				s = et.exec(t[u]) || [], d = m = s[1], v = (s[2] || "").split(".").sort();
				if (!d) continue;
				f = p.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = p.event.special[d] || {}, c = p.extend({
					type: d,
					origType: m,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && p.expr.match.needsContext.test(i),
					namespace: v.join(".")
				}, a);
				if (!(h = o[d])) {
					h = o[d] = [], h.delegateCount = 0;
					if (!f.setup || f.setup.call(e, r, v, l) === !1) e.addEventListener ? e.addEventListener(d, l, !1) : e.attachEvent &&
						e.attachEvent("on" + d, l)
				}
				f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) :
					h.push(c), p.event.global[d] = !0
			}
			e = null
		},
		remove: function(e, t, n, r, i) {
			var s, o, u, a, f, l, c, h, d, v, m, g = p.hasData(e) && p._data(e);
			if (!g || !(l = g.events)) return;
			t = (t || "").match(M) || [""], f = t.length;
			while (f--) {
				u = et.exec(t[f]) || [], d = m = u[1], v = (u[2] || "").split(".").sort();
				if (!d) {
					for (d in l) p.event.remove(e, d + t[f], n, r, !0);
					continue
				}
				c = p.event.special[d] || {}, d = (r ? c.delegateType : c.bindType) || d, h = l[d] || [], u = u[2] && new RegExp(
					"(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
				while (s--) o = h[s], (i || m === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r ||
					r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove &&
					c.remove.call(e, o));
				a && !h.length && ((!c.teardown || c.teardown.call(e, v, g.handle) === !1) && p.removeEvent(e, d, g.handle),
					delete l[d])
			}
			p.isEmptyObject(l) && (delete g.handle, p._removeData(e, "events"))
		},
		trigger: function(t, n, r, i) {
			var s, o, u, a, l, c, h, d = [r || N],
				v = f.call(t, "type") ? t.type : t,
				m = f.call(t, "namespace") ? t.namespace.split(".") : [];
			u = c = r = r || N;
			if (r.nodeType === 3 || r.nodeType === 8) return;
			if (Z.test(v + p.event.triggered)) return;
			v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), o = v.indexOf(":") < 0 && "on" + v, t = t[p.expando] ?
				t : new p.Event(v, typeof t == "object" && t), t.isTrigger = i ? 2 : 3, t.namespace = m.join("."), t.namespace_re =
				t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target ||
				(t.target = r), n = n == null ? [t] : p.makeArray(n, [t]), l = p.event.special[v] || {};
			if (!i && l.trigger && l.trigger.apply(r, n) === !1) return;
			if (!i && !l.noBubble && !p.isWindow(r)) {
				a = l.delegateType || v, Z.test(a + v) || (u = u.parentNode);
				for (; u; u = u.parentNode) d.push(u), c = u;
				c === (r.ownerDocument || N) && d.push(c.defaultView || c.parentWindow || e)
			}
			h = 0;
			while ((u = d[h++]) && !t.isPropagationStopped()) t.type = h > 1 ? a : l.bindType || v, s = (p._data(u, "events") ||
				{})[t.type] && p._data(u, "handle"), s && s.apply(u, n), s = o && u[o], s && s.apply && p.acceptData(u) && (t.result =
				s.apply(u, n), t.result === !1 && t.preventDefault());
			t.type = v;
			if (!i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && p.acceptData(r) && o &&
				r[v] && !p.isWindow(r)) {
				c = r[o], c && (r[o] = null), p.event.triggered = v;
				try {
					r[v]()
				} catch (g) {}
				p.event.triggered = undefined, c && (r[o] = c)
			}
			return t.result
		},
		dispatch: function(e) {
			e = p.event.fix(e);
			var t, n, i, s, o, u = [],
				a = r.call(arguments),
				f = (p._data(this, "events") || {})[e.type] || [],
				l = p.event.special[e.type] || {};
			a[0] = e, e.delegateTarget = this;
			if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
			u = p.event.handlers.call(this, e, f), t = 0;
			while ((s = u[t++]) && !e.isPropagationStopped()) {
				e.currentTarget = s.elem, o = 0;
				while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
					if (!e.namespace_re || e.namespace_re.test(i.namespace)) e.handleObj = i, e.data = i.data, n = ((p.event.special[
						i.origType] || {}).handle || i.handler).apply(s.elem, a), n !== undefined && (e.result = n) === !1 && (e.preventDefault(),
						e.stopPropagation())
			}
			return l.postDispatch && l.postDispatch.call(this, e), e.result
		},
		handlers: function(e, t) {
			var n, r, i, s, o = [],
				u = t.delegateCount,
				a = e.target;
			if (u && a.nodeType && (!e.button || e.type !== "click"))
				for (; a != this; a = a.parentNode || this)
					if (a.nodeType === 1 && (a.disabled !== !0 || e.type !== "click")) {
						i = [];
						for (s = 0; s < u; s++) r = t[s], n = r.selector + " ", i[n] === undefined && (i[n] = r.needsContext ? p(n,
							this).index(a) >= 0 : p.find(n, this, null, [a]).length), i[n] && i.push(r);
						i.length && o.push({
							elem: a,
							handlers: i
						})
					} return u < t.length && o.push({
				elem: this,
				handlers: t.slice(u)
			}), o
		},
		fix: function(e) {
			if (e[p.expando]) return e;
			var t, n, r, i = e.type,
				s = e,
				o = this.fixHooks[i];
			o || (this.fixHooks[i] = o = Y.test(i) ? this.mouseHooks : G.test(i) ? this.keyHooks : {}), r = o.props ? this.props
				.concat(o.props) : this.props, e = new p.Event(s), t = r.length;
			while (t--) n = r[t], e[n] = s[n];
			return e.target || (e.target = s.srcElement || N), e.target.nodeType === 3 && (e.target = e.target.parentNode), e
				.metaKey = !!e.metaKey, o.filter ? o.filter(e, s) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
			.split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
				" "),
			filter: function(e, t) {
				var n, r, i, s = t.button,
					o = t.fromElement;
				return e.pageX == null && t.clientX != null && (r = e.target.ownerDocument || N, i = r.documentElement, n = r.body,
						e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft ||
							0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop ||
							0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), !e.which && s !==
					undefined && (e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== rt() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === rt() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if (p.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
				},
				_default: function(e) {
					return p.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== undefined && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = p.extend(new p.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? p.event.trigger(i, null, t) : p.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, p.removeEvent = N.removeEventListener ? function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var r = "on" + t;
		e.detachEvent && (typeof e[r] === j && (e[r] = null), e.detachEvent(r, n))
	}, p.Event = function(e, t) {
		if (!(this instanceof p.Event)) return new p.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented ===
				undefined && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? tt : nt) : this.type = e, t &&
			p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), this[p.expando] = !0
	}, p.Event.prototype = {
		isDefaultPrevented: nt,
		isPropagationStopped: nt,
		isImmediatePropagationStopped: nt,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = tt;
			if (!e) return;
			e.preventDefault ? e.preventDefault() : e.returnValue = !1
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = tt;
			if (!e) return;
			e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = tt, this.stopPropagation()
		}
	}, p.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		p.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					s = e.handleObj;
				if (!i || i !== r && !p.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
				return n
			}
		}
	}), c.submitBubbles || (p.event.special.submit = {
		setup: function() {
			if (p.nodeName(this, "form")) return !1;
			p.event.add(this, "click._submit keypress._submit", function(e) {
				var t = e.target,
					n = p.nodeName(t, "input") || p.nodeName(t, "button") ? t.form : undefined;
				n && !p._data(n, "submitBubbles") && (p.event.add(n, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), p._data(n, "submitBubbles", !0))
			})
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && p.event.simulate("submit", this
				.parentNode, e, !0))
		},
		teardown: function() {
			if (p.nodeName(this, "form")) return !1;
			p.event.remove(this, "._submit")
		}
	}), c.changeBubbles || (p.event.special.change = {
		setup: function() {
			if (Q.test(this.nodeName)) {
				if (this.type === "checkbox" || this.type === "radio") p.event.add(this, "propertychange._change", function(e) {
					e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
				}), p.event.add(this, "click._change", function(e) {
					this._just_changed && !e.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, e, !0)
				});
				return !1
			}
			p.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Q.test(t.nodeName) && !p._data(t, "changeBubbles") && (p.event.add(t, "change._change", function(e) {
					this.parentNode && !e.isSimulated && !e.isTrigger && p.event.simulate("change", this.parentNode, e, !0)
				}), p._data(t, "changeBubbles", !0))
			})
		},
		handle: function(e) {
			var t = e.target;
			if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj
				.handler.apply(this, arguments)
		},
		teardown: function() {
			return p.event.remove(this, "._change"), !Q.test(this.nodeName)
		}
	}), c.focusinBubbles || p.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
			p.event.simulate(t, e.target, p.event.fix(e), !0)
		};
		p.event.special[t] = {
			setup: function() {
				var r = this.ownerDocument || this,
					i = p._data(r, t);
				i || r.addEventListener(e, n, !0), p._data(r, t, (i || 0) + 1)
			},
			teardown: function() {
				var r = this.ownerDocument || this,
					i = p._data(r, t) - 1;
				i ? p._data(r, t, i) : (r.removeEventListener(e, n, !0), p._removeData(r, t))
			}
		}
	}), p.fn.extend({
		on: function(e, t, n, r, i) {
			var s, o;
			if (typeof e == "object") {
				typeof t != "string" && (n = n || t, t = undefined);
				for (s in e) this.on(s, t, n, e[s], i);
				return this
			}
			n == null && r == null ? (r = t, n = t = undefined) : r == null && (typeof t == "string" ? (r = n, n = undefined) :
				(r = n, n = t, t = undefined));
			if (r === !1) r = nt;
			else if (!r) return this;
			return i === 1 && (o = r, r = function(e) {
				return p().off(e), o.apply(this, arguments)
			}, r.guid = o.guid || (o.guid = p.guid++)), this.each(function() {
				p.event.add(this, e, r, n, t)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, p(e.delegateTarget).off(r.namespace ? r.origType +
				"." + r.namespace : r.origType, r.selector, r.handler), this;
			if (typeof e == "object") {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			if (t === !1 || typeof t == "function") n = t, t = undefined;
			return n === !1 && (n = nt), this.each(function() {
				p.event.remove(this, e, n, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				p.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return p.event.trigger(e, t, n, !0)
		}
	});
	var st =
		"abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		ot = / jQuery\d+="(?:null|\d+)"/g,
		ut = new RegExp("<(?:" + st + ")[\\s/>]", "i"),
		at = /^\s+/,
		ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		lt = /<([\w:]+)/,
		ct = /<tbody/i,
		ht = /<|&#?\w+;/,
		pt = /<(?:script|style|link)/i,
		dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		vt = /^$|\/(?:java|ecma)script/i,
		mt = /^true\/(.*)/,
		gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		yt = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		bt = it(N),
		wt = bt.appendChild(N.createElement("div"));
	yt.optgroup = yt.option, yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead, yt.th = yt.td, p.extend({
		clone: function(e, t, n) {
			var r, i, s, o, u, a = p.contains(e.ownerDocument, e);
			c.html5Clone || p.isXMLDoc(e) || !ut.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (wt.innerHTML = e.outerHTML,
				wt.removeChild(s = wt.firstChild));
			if ((!c.noCloneEvent || !c.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !p.isXMLDoc(e)) {
				r = Et(s), u = Et(e);
				for (o = 0;
					(i = u[o]) != null; ++o) r[o] && Lt(i, r[o])
			}
			if (t)
				if (n) {
					u = u || Et(e), r = r || Et(s);
					for (o = 0;
						(i = u[o]) != null; o++) kt(i, r[o])
				} else kt(e, s);
			return r = Et(s, "script"), r.length > 0 && Ct(r, !a && Et(e, "script")), r = u = i = null, s
		},
		buildFragment: function(e, t, n, r) {
			var i, s, o, u, a, f, l, h = e.length,
				d = it(t),
				v = [],
				m = 0;
			for (; m < h; m++) {
				s = e[m];
				if (s || s === 0)
					if (p.type(s) === "object") p.merge(v, s.nodeType ? [s] : s);
					else if (!ht.test(s)) v.push(t.createTextNode(s));
				else {
					u = u || d.appendChild(t.createElement("div")), a = (lt.exec(s) || ["", ""])[1].toLowerCase(), l = yt[a] || yt
						._default, u.innerHTML = l[1] + s.replace(ft, "<$1></$2>") + l[2], i = l[0];
					while (i--) u = u.lastChild;
					!c.leadingWhitespace && at.test(s) && v.push(t.createTextNode(at.exec(s)[0]));
					if (!c.tbody) {
						s = a === "table" && !ct.test(s) ? u.firstChild : l[1] === "<table>" && !ct.test(s) ? u : 0, i = s && s.childNodes
							.length;
						while (i--) p.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
					}
					p.merge(v, u.childNodes), u.textContent = "";
					while (u.firstChild) u.removeChild(u.firstChild);
					u = d.lastChild
				}
			}
			u && d.removeChild(u), c.appendChecked || p.grep(Et(v, "input"), St), m = 0;
			while (s = v[m++]) {
				if (r && p.inArray(s, r) !== -1) continue;
				o = p.contains(s.ownerDocument, s), u = Et(d.appendChild(s), "script"), o && Ct(u);
				if (n) {
					i = 0;
					while (s = u[i++]) vt.test(s.type || "") && n.push(s)
				}
			}
			return u = null, d
		},
		cleanData: function(e, t) {
			var r, i, s, o, u = 0,
				a = p.expando,
				f = p.cache,
				l = c.deleteExpando,
				h = p.event.special;
			for (;
				(r = e[u]) != null; u++)
				if (t || p.acceptData(r)) {
					s = r[a], o = s && f[s];
					if (o) {
						if (o.events)
							for (i in o.events) h[i] ? p.event.remove(r, i) : p.removeEvent(r, i, o.handle);
						f[s] && (delete f[s], l ? delete r[a] : typeof r.removeAttribute !== j ? r.removeAttribute(a) : r[a] = null,
							n.push(s))
					}
				}
		}
	}), p.fn.extend({
		text: function(e) {
			return J(this, function(e) {
				return e === undefined ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || N).createTextNode(
					e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var t = xt(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var t = xt(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			var n, r = e ? p.filter(e, this) : this,
				i = 0;
			for (;
				(n = r[i]) != null; i++) !t && n.nodeType === 1 && p.cleanData(Et(n)), n.parentNode && (t && p.contains(n.ownerDocument,
				n) && Ct(Et(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			var e, t = 0;
			for (;
				(e = this[t]) != null; t++) {
				e.nodeType === 1 && p.cleanData(Et(e, !1));
				while (e.firstChild) e.removeChild(e.firstChild);
				e.options && p.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
				return p.clone(this, e, t)
			})
		},
		html: function(e) {
			return J(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (e === undefined) return t.nodeType === 1 ? t.innerHTML.replace(ot, "") : undefined;
				if (typeof e == "string" && !pt.test(e) && (c.htmlSerialize || !ut.test(e)) && (c.leadingWhitespace || !at.test(
						e)) && !yt[(lt.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(ft, "<$1></$2>");
					try {
						for (; n < r; n++) t = this[n] || {}, t.nodeType === 1 && (p.cleanData(Et(t, !1)), t.innerHTML = e);
						t = 0
					} catch (i) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = arguments[0];
			return this.domManip(arguments, function(t) {
				e = this.parentNode, p.cleanData(Et(this)), e && e.replaceChild(t, this)
			}), e && (e.length || e.nodeType) ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t) {
			e = i.apply([], e);
			var n, r, s, o, u, a, f = 0,
				l = this.length,
				h = this,
				d = l - 1,
				v = e[0],
				m = p.isFunction(v);
			if (m || l > 1 && typeof v == "string" && !c.checkClone && dt.test(v)) return this.each(function(n) {
				var r = h.eq(n);
				m && (e[0] = v.call(this, n, r.html())), r.domManip(e, t)
			});
			if (l) {
				a = p.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, a.childNodes.length === 1 && (a = n);
				if (n) {
					o = p.map(Et(a, "script"), Tt), s = o.length;
					for (; f < l; f++) r = a, f !== d && (r = p.clone(r, !0, !0), s && p.merge(o, Et(r, "script"))), t.call(this[f],
						r, f);
					if (s) {
						u = o[o.length - 1].ownerDocument, p.map(o, Nt);
						for (f = 0; f < s; f++) r = o[f], vt.test(r.type || "") && !p._data(r, "globalEval") && p.contains(u, r) && (
							r.src ? p._evalUrl && p._evalUrl(r.src) : p.globalEval((r.text || r.textContent || r.innerHTML || "").replace(
								gt, "")))
					}
					a = n = null
				}
			}
			return this
		}
	}), p.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		p.fn[e] = function(e) {
			var n, r = 0,
				i = [],
				o = p(e),
				u = o.length - 1;
			for (; r <= u; r++) n = r === u ? this : this.clone(!0), p(o[r])[t](n), s.apply(i, n.get());
			return this.pushStack(i)
		}
	});
	var At, Ot = {};
	(function() {
		var e, t, n = N.createElement("div"),
			r =
			"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
		n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[
				0], e.style.cssText = "float:left;opacity:.5", c.opacity = /^0.5/.test(e.style.opacity), c.cssFloat = !!e.style.cssFloat,
			n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = n.style.backgroundClip ===
			"content-box", e = n = null, c.shrinkWrapBlocks = function() {
				var e, n, i, s;
				if (t == null) {
					e = N.getElementsByTagName("body")[0];
					if (!e) return;
					s = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = N.createElement("div"), i = N.createElement(
						"div"), e.appendChild(n).appendChild(i), t = !1, typeof i.style.zoom !== j && (i.style.cssText = r +
						";width:1px;padding:1px;zoom:1", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t = i.offsetWidth !==
						3), e.removeChild(n), e = n = i = null
				}
				return t
			}
	})();
	var Dt = /^margin/,
		Pt = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
		Ht, Bt, jt = /^(top|right|bottom|left)$/;
	e.getComputedStyle ? (Ht = function(e) {
			return e.ownerDocument.defaultView.getComputedStyle(e, null)
		}, Bt = function(e, t, n) {
			var r, i, s, o, u = e.style;
			return n = n || Ht(e), o = n ? n.getPropertyValue(t) || n[t] : undefined, n && (o === "" && !p.contains(e.ownerDocument,
					e) && (o = p.style(e, t)), Pt.test(o) && Dt.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth =
					u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)), o === undefined ? o : o +
				""
		}) : N.documentElement.currentStyle && (Ht = function(e) {
			return e.currentStyle
		}, Bt = function(e, t, n) {
			var r, i, s, o, u = e.style;
			return n = n || Ht(e), o = n ? n[t] : undefined, o == null && u && u[t] && (o = u[t]), Pt.test(o) && !jt.test(t) &&
				(r = u.left, i = e.runtimeStyle, s = i && i.left, s && (i.left = e.currentStyle.left), u.left = t === "fontSize" ?
					"1em" : o, o = u.pixelLeft + "px", u.left = r, s && (i.left = s)), o === undefined ? o : o + "" || "auto"
		}),
		function() {
			function l() {
				var t, n, u = N.getElementsByTagName("body")[0];
				if (!u) return;
				t = N.createElement("div"), n = N.createElement("div"), t.style.cssText = a, u.appendChild(t).appendChild(n), n.style
					.cssText =
					"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",
					p.swap(u, u.style.zoom != null ? {
						zoom: 1
					} : {}, function() {
						r = n.offsetWidth === 4
					}), i = !0, s = !1, o = !0, e.getComputedStyle && (s = (e.getComputedStyle(n, null) || {}).top !== "1%", i = (e.getComputedStyle(
						n, null) || {
						width: "4px"
					}).width === "4px"), u.removeChild(t), n = u = null
			}
			var t, n, r, i, s, o, u = N.createElement("div"),
				a = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
				f =
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
			u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = u.getElementsByTagName("a")[
					0], t.style.cssText = "float:left;opacity:.5", c.opacity = /^0.5/.test(t.style.opacity), c.cssFloat = !!t.style.cssFloat,
				u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = u.style.backgroundClip ===
				"content-box", t = u = null, p.extend(c, {
					reliableHiddenOffsets: function() {
						if (n != null) return n;
						var e, t, r, i = N.createElement("div"),
							s = N.getElementsByTagName("body")[0];
						if (!s) return;
						return i.setAttribute("className", "t"), i.innerHTML =
							"  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = N.createElement("div"), e.style.cssText =
							a, s.appendChild(e).appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = i.getElementsByTagName(
								"td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", r = t[0].offsetHeight === 0, t[0].style
							.display = "", t[1].style.display = "none", n = r && t[0].offsetHeight === 0, s.removeChild(e), i = s = null,
							n
					},
					boxSizing: function() {
						return r == null && l(), r
					},
					boxSizingReliable: function() {
						return i == null && l(), i
					},
					pixelPosition: function() {
						return s == null && l(), s
					},
					reliableMarginRight: function() {
						var t, n, r, i;
						if (o == null && e.getComputedStyle) {
							t = N.getElementsByTagName("body")[0];
							if (!t) return;
							n = N.createElement("div"), r = N.createElement("div"), n.style.cssText = a, t.appendChild(n).appendChild(r),
								i = r.appendChild(N.createElement("div")), i.style.cssText = r.style.cssText = f, i.style.marginRight = i.style
								.width = "0", r.style.width = "1px", o = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(
									n)
						}
						return o
					}
				})
		}(), p.swap = function(e, t, n, r) {
			var i, s, o = {};
			for (s in t) o[s] = e.style[s], e.style[s] = t[s];
			i = n.apply(e, r || []);
			for (s in t) e.style[s] = o[s];
			return i
		};
	var It = /alpha\([^)]*\)/i,
		qt = /opacity\s*=\s*([^)]*)/,
		Rt = /^(none|table(?!-c[ea]).+)/,
		Ut = new RegExp("^(" + X + ")(.*)$", "i"),
		zt = new RegExp("^([+-])=(" + X + ")", "i"),
		Wt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Xt = {
			letterSpacing: 0,
			fontWeight: 400
		},
		Vt = ["Webkit", "O", "Moz", "ms"];
	p.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = Bt(e, "opacity");
						return n === "" ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
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
			"float": c.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, t, n, r) {
			if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
			var i, s, o, u = p.camelCase(t),
				a = e.style;
			t = p.cssProps[u] || (p.cssProps[u] = $t(a, u)), o = p.cssHooks[t] || p.cssHooks[u];
			if (n === undefined) return o && "get" in o && (i = o.get(e, !1, r)) !== undefined ? i : a[t];
			s = typeof n, s === "string" && (i = zt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(p.css(e, t)), s =
				"number");
			if (n == null || n !== n) return;
			s === "number" && !p.cssNumber[u] && (n += "px"), !c.clearCloneStyle && n === "" && t.indexOf("background") ===
				0 && (a[t] = "inherit");
			if (!o || !("set" in o) || (n = o.set(e, n, r)) !== undefined) try {
				a[t] = "", a[t] = n
			} catch (f) {}
		},
		css: function(e, t, n, r) {
			var i, s, o, u = p.camelCase(t);
			return t = p.cssProps[u] || (p.cssProps[u] = $t(e.style, u)), o = p.cssHooks[t] || p.cssHooks[u], o && "get" in
				o && (s = o.get(e, !0, n)), s === undefined && (s = Bt(e, t, r)), s === "normal" && t in Xt && (s = Xt[t]), n ===
				"" || n ? (i = parseFloat(s), n === !0 || p.isNumeric(i) ? i || 0 : s) : s
		}
	}), p.each(["height", "width"], function(e, t) {
		p.cssHooks[t] = {
			get: function(e, n, r) {
				if (n) return e.offsetWidth === 0 && Rt.test(p.css(e, "display")) ? p.swap(e, Wt, function() {
					return Gt(e, t, r)
				}) : Gt(e, t, r)
			},
			set: function(e, n, r) {
				var i = r && Ht(e);
				return Kt(e, n, r ? Qt(e, t, r, c.boxSizing() && p.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
			}
		}
	}), c.opacity || (p.cssHooks.opacity = {
		get: function(e, t) {
			return qt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) +
				"" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				r = e.currentStyle,
				i = p.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
				s = r && r.filter || n.filter || "";
			n.zoom = 1;
			if ((t >= 1 || t === "") && p.trim(s.replace(It, "")) === "" && n.removeAttribute) {
				n.removeAttribute("filter");
				if (t === "" || r && !r.filter) return
			}
			n.filter = It.test(s) ? s.replace(It, i) : s + " " + i
		}
	}), p.cssHooks.marginRight = Ft(c.reliableMarginRight, function(e, t) {
		if (t) return p.swap(e, {
			display: "inline-block"
		}, Bt, [e, "marginRight"])
	}), p.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		p.cssHooks[e + t] = {
			expand: function(n) {
				var r = 0,
					i = {},
					s = typeof n == "string" ? n.split(" ") : [n];
				for (; r < 4; r++) i[e + V[r] + t] = s[r] || s[r - 2] || s[0];
				return i
			}
		}, Dt.test(e) || (p.cssHooks[e + t].set = Kt)
	}), p.fn.extend({
		css: function(e, t) {
			return J(this, function(e, t, n) {
				var r, i, s = {},
					o = 0;
				if (p.isArray(t)) {
					r = Ht(e), i = t.length;
					for (; o < i; o++) s[t[o]] = p.css(e, t[o], !1, r);
					return s
				}
				return n !== undefined ? p.style(e, t, n) : p.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return Jt(this, !0)
		},
		hide: function() {
			return Jt(this)
		},
		toggle: function(e) {
			return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
				$(this) ? p(this).show() : p(this).hide()
			})
		}
	}), p.Tween = Yt, Yt.prototype = {
		constructor: Yt,
		init: function(e, t, n, r, i, s) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(),
				this.end = r, this.unit = s || (p.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = Yt.propHooks[this.prop];
			return e && e.get ? e.get(this) : Yt.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = Yt.propHooks[this.prop];
			return this.options.duration ? this.pos = t = p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options
					.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options
				.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yt.propHooks._default.set(this), this
		}
	}, Yt.prototype.init.prototype = Yt.prototype, Yt.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = p.css(e.elem, e.prop, ""),
					!t || t === "auto" ? 0 : t) : e.elem[e.prop]
			},
			set: function(e) {
				p.fx.step[e.prop] ? p.fx.step[e.prop](e) : e.elem.style && (e.elem.style[p.cssProps[e.prop]] != null || p.cssHooks[
					e.prop]) ? p.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, p.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, p.fx = Yt.prototype.init, p.fx.step = {};
	var Zt, en, tn = /^(?:toggle|show|hide)$/,
		nn = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
		rn = /queueHooks$/,
		sn = [ln],
		on = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = nn.exec(t),
					s = i && i[3] || (p.cssNumber[e] ? "" : "px"),
					o = (p.cssNumber[e] || s !== "px" && +r) && nn.exec(p.css(n.elem, e)),
					u = 1,
					a = 20;
				if (o && o[3] !== s) {
					s = s || o[3], i = i || [], o = +r || 1;
					do u = u || ".5", o /= u, p.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && u !== 1 && --a)
				}
				return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};
	p.Animation = p.extend(hn, {
			tweener: function(e, t) {
				p.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				var n, r = 0,
					i = e.length;
				for (; r < i; r++) n = e[r], on[n] = on[n] || [], on[n].unshift(t)
			},
			prefilter: function(e, t) {
				t ? sn.unshift(e) : sn.push(e)
			}
		}), p.speed = function(e, t, n) {
			var r = e && typeof e == "object" ? p.extend({}, e) : {
				complete: n || !n && t || p.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !p.isFunction(t) && t
			};
			r.duration = p.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in p.fx.speeds ? p.fx.speeds[r.duration] :
				p.fx.speeds._default;
			if (r.queue == null || r.queue === !0) r.queue = "fx";
			return r.old = r.complete, r.complete = function() {
				p.isFunction(r.old) && r.old.call(this), r.queue && p.dequeue(this, r.queue)
			}, r
		}, p.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter($).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function(e, t, n, r) {
				var i = p.isEmptyObject(e),
					s = p.speed(t, n, r),
					o = function() {
						var t = hn(this, p.extend({}, e), s);
						(i || p._data(this, "finish")) && t.stop(!0)
					};
				return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
			},
			stop: function(e, t, n) {
				var r = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return typeof e != "string" && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), this.each(
					function() {
						var t = !0,
							i = e != null && e + "queueHooks",
							s = p.timers,
							o = p._data(this);
						if (i) o[i] && o[i].stop && r(o[i]);
						else
							for (i in o) o[i] && o[i].stop && rn.test(i) && r(o[i]);
						for (i = s.length; i--;) s[i].elem === this && (e == null || s[i].queue === e) && (s[i].anim.stop(n), t = !1,
							s.splice(i, 1));
						(t || !n) && p.dequeue(this, e)
					})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = p._data(this),
						r = n[e + "queue"],
						i = n[e + "queueHooks"],
						s = p.timers,
						o = r ? r.length : 0;
					n.finish = !0, p.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
					for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
					for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
					delete n.finish
				})
			}
		}), p.each(["toggle", "show", "hide"], function(e, t) {
			var n = p.fn[t];
			p.fn[t] = function(e, r, i) {
				return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(an(t, !0), e, r, i)
			}
		}), p.each({
			slideDown: an("show"),
			slideUp: an("hide"),
			slideToggle: an("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			p.fn[e] = function(e, n, r) {
				return this.animate(t, e, n, r)
			}
		}), p.timers = [], p.fx.tick = function() {
			var e, t = p.timers,
				n = 0;
			Zt = p.now();
			for (; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
			t.length || p.fx.stop(), Zt = undefined
		}, p.fx.timer = function(e) {
			p.timers.push(e), e() ? p.fx.start() : p.timers.pop()
		}, p.fx.interval = 13, p.fx.start = function() {
			en || (en = setInterval(p.fx.tick, p.fx.interval))
		}, p.fx.stop = function() {
			clearInterval(en), en = null
		}, p.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, p.fn.delay = function(e, t) {
			return e = p.fx ? p.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		function() {
			var e, t, n, r, i = N.createElement("div");
			i.setAttribute("className", "t"), i.innerHTML =
				"  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = i.getElementsByTagName("a")[0], n = N.createElement(
					"select"), r = n.appendChild(N.createElement("option")), t = i.getElementsByTagName("input")[0], e.style.cssText =
				"top:1px", c.getSetAttribute = i.className !== "t", c.style = /top/.test(e.getAttribute("style")), c.hrefNormalized =
				e.getAttribute("href") === "/a", c.checkOn = !!t.value, c.optSelected = r.selected, c.enctype = !!N.createElement(
					"form").enctype, n.disabled = !0, c.optDisabled = !r.disabled, t = N.createElement("input"), t.setAttribute(
					"value", ""), c.input = t.getAttribute("value") === "", t.value = "t", t.setAttribute("type", "radio"), c.radioValue =
				t.value === "t", e = t = n = r = i = null
		}();
	var pn = /\r/g;
	p.fn.extend({
		val: function(e) {
			var t, n, r, i = this[0];
			if (!arguments.length) {
				if (i) return t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i,
					"value")) !== undefined ? n : (n = i.value, typeof n == "string" ? n.replace(pn, "") : n == null ? "" : n);
				return
			}
			return r = p.isFunction(e), this.each(function(n) {
				var i;
				if (this.nodeType !== 1) return;
				r ? i = e.call(this, n, p(this).val()) : i = e, i == null ? i = "" : typeof i == "number" ? i += "" : p.isArray(
					i) && (i = p.map(i, function(e) {
					return e == null ? "" : e + ""
				})), t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
				if (!t || !("set" in t) || t.set(this, i, "value") === undefined) this.value = i
			})
		}
	}), p.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = p.find.attr(e, "value");
					return t != null ? t : p.text(e)
				}
			},
			select: {
				get: function(e) {
					var t, n, r = e.options,
						i = e.selectedIndex,
						s = e.type === "select-one" || i < 0,
						o = s ? null : [],
						u = s ? i + 1 : r.length,
						a = i < 0 ? u : s ? i : 0;
					for (; a < u; a++) {
						n = r[a];
						if ((n.selected || a === i) && (c.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode
								.disabled || !p.nodeName(n.parentNode, "optgroup"))) {
							t = p(n).val();
							if (s) return t;
							o.push(t)
						}
					}
					return o
				},
				set: function(e, t) {
					var n, r, i = e.options,
						s = p.makeArray(t),
						o = i.length;
					while (o--) {
						r = i[o];
						if (p.inArray(p.valHooks.option.get(r), s) >= 0) try {
							r.selected = n = !0
						} catch (u) {
							r.scrollHeight
						} else r.selected = !1
					}
					return n || (e.selectedIndex = -1), i
				}
			}
		}
	}), p.each(["radio", "checkbox"], function() {
		p.valHooks[this] = {
			set: function(e, t) {
				if (p.isArray(t)) return e.checked = p.inArray(p(e).val(), t) >= 0
			}
		}, c.checkOn || (p.valHooks[this].get = function(e) {
			return e.getAttribute("value") === null ? "on" : e.value
		})
	});
	var dn, vn, mn = p.expr.attrHandle,
		gn = /^(?:checked|selected)$/i,
		yn = c.getSetAttribute,
		bn = c.input;
	p.fn.extend({
		attr: function(e, t) {
			return J(this, p.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				p.removeAttr(this, e)
			})
		}
	}), p.extend({
		attr: function(e, t, n) {
			var r, i, s = e.nodeType;
			if (!e || s === 3 || s === 8 || s === 2) return;
			if (typeof e.getAttribute === j) return p.prop(e, t, n);
			if (s !== 1 || !p.isXMLDoc(e)) t = t.toLowerCase(), r = p.attrHooks[t] || (p.expr.match.bool.test(t) ? vn : dn);
			if (n === undefined) return r && "get" in r && (i = r.get(e, t)) !== null ? i : (i = p.find.attr(e, t), i ==
				null ? undefined : i);
			if (n !== null) return r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n);
			p.removeAttr(e, t)
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				s = t && t.match(M);
			if (s && e.nodeType === 1)
				while (n = s[i++]) r = p.propFix[n] || n, p.expr.match.bool.test(n) ? bn && yn || !gn.test(n) ? e[r] = !1 : e[p
					.camelCase("default-" + n)] = e[r] = !1 : p.attr(e, n, ""), e.removeAttribute(yn ? n : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!c.radioValue && t === "radio" && p.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}
	}), vn = {
		set: function(e, t, n) {
			return t === !1 ? p.removeAttr(e, n) : bn && yn || !gn.test(n) ? e.setAttribute(!yn && p.propFix[n] || n, n) : e[
				p.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = mn[t] || p.find.attr;
		mn[t] = bn && yn || !gn.test(t) ? function(e, t, r) {
			var i, s;
			return r || (s = mn[t], mn[t] = i, i = n(e, t, r) != null ? t.toLowerCase() : null, mn[t] = s), i
		} : function(e, t, n) {
			if (!n) return e[p.camelCase("default-" + t)] ? t.toLowerCase() : null
		}
	});
	if (!bn || !yn) p.attrHooks.value = {
		set: function(e, t, n) {
			if (!p.nodeName(e, "input")) return dn && dn.set(e, t, n);
			e.defaultValue = t
		}
	};
	yn || (dn = {
		set: function(e, t, n) {
			var r = e.getAttributeNode(n);
			r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "";
			if (n === "value" || t === e.getAttribute(n)) return t
		}
	}, mn.id = mn.name = mn.coords = function(e, t, n) {
		var r;
		if (!n) return (r = e.getAttributeNode(t)) && r.value !== "" ? r.value : null
	}, p.valHooks.button = {
		get: function(e, t) {
			var n = e.getAttributeNode(t);
			if (n && n.specified) return n.value
		},
		set: dn.set
	}, p.attrHooks.contenteditable = {
		set: function(e, t, n) {
			dn.set(e, t === "" ? !1 : t, n)
		}
	}, p.each(["width", "height"], function(e, t) {
		p.attrHooks[t] = {
			set: function(e, n) {
				if (n === "") return e.setAttribute(t, "auto"), n
			}
		}
	})), c.style || (p.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || undefined
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	});
	var wn = /^(?:input|select|textarea|button|object)$/i,
		En = /^(?:a|area)$/i;
	p.fn.extend({
		prop: function(e, t) {
			return J(this, p.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = p.propFix[e] || e, this.each(function() {
				try {
					this[e] = undefined, delete this[e]
				} catch (t) {}
			})
		}
	}), p.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, t, n) {
			var r, i, s, o = e.nodeType;
			if (!e || o === 3 || o === 8 || o === 2) return;
			return s = o !== 1 || !p.isXMLDoc(e), s && (t = p.propFix[t] || t, i = p.propHooks[t]), n !== undefined ? i &&
				"set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && (r = i.get(e, t)) !== null ?
				r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = p.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : wn.test(e.nodeName) || En.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), c.hrefNormalized || p.each(["href", "src"], function(e, t) {
		p.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	}), c.optSelected || (p.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap",
		"frameBorder", "contentEditable"
	], function() {
		p.propFix[this.toLowerCase()] = this
	}), c.enctype || (p.propFix.enctype = "encoding");
	var Sn = /[\t\r\n\f]/g;
	p.fn.extend({
		addClass: function(e) {
			var t, n, r, i, s, o, u = 0,
				a = this.length,
				f = typeof e == "string" && e;
			if (p.isFunction(e)) return this.each(function(t) {
				p(this).addClass(e.call(this, t, this.className))
			});
			if (f) {
				t = (e || "").match(M) || [];
				for (; u < a; u++) {
					n = this[u], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(Sn, " ") : " ");
					if (r) {
						s = 0;
						while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
						o = p.trim(r), n.className !== o && (n.className = o)
					}
				}
			}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, s, o, u = 0,
				a = this.length,
				f = arguments.length === 0 || typeof e == "string" && e;
			if (p.isFunction(e)) return this.each(function(t) {
				p(this).removeClass(e.call(this, t, this.className))
			});
			if (f) {
				t = (e || "").match(M) || [];
				for (; u < a; u++) {
					n = this[u], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(Sn, " ") : "");
					if (r) {
						s = 0;
						while (i = t[s++])
							while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
						o = e ? p.trim(r) : "", n.className !== o && (n.className = o)
					}
				}
			}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : p.isFunction(e) ?
				this.each(function(n) {
					p(this).toggleClass(e.call(this, n, this.className, t), t)
				}) : this.each(function() {
					if (n === "string") {
						var t, r = 0,
							i = p(this),
							s = e.match(M) || [];
						while (t = s[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
					} else if (n === j || n === "boolean") this.className && p._data(this, "__className__", this.className), this
						.className = this.className || e === !1 ? "" : p._data(this, "__className__") || ""
				})
		},
		hasClass: function(e) {
			var t = " " + e + " ",
				n = 0,
				r = this.length;
			for (; n < r; n++)
				if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(Sn, " ").indexOf(t) >= 0) return !0;
			return !1
		}
	}), p.each(
		"blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
		.split(" "),
		function(e, t) {
			p.fn[t] = function(e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
			}
		}), p.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var xn = p.now(),
		Tn = /\?/,
		Nn =
		/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	p.parseJSON = function(t) {
		if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
		var n, r = null,
			i = p.trim(t + "");
		return i && !p.trim(i.replace(Nn, function(e, t, i, s) {
			return n && t && (r = 0), r === 0 ? e : (n = i || t, r += !s - !i, "")
		})) ? Function("return " + i)() : p.error("Invalid JSON: " + t)
	}, p.parseXML = function(t) {
		var n, r;
		if (!t || typeof t != "string") return null;
		try {
			e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject(
				"Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
		} catch (i) {
			n = undefined
		}
		return (!n || !n.documentElement || n.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + t),
			n
	};
	var Cn, kn, Ln = /#.*$/,
		An = /([?&])_=[^&]*/,
		On = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		Mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		_n = /^(?:GET|HEAD)$/,
		Dn = /^\/\//,
		Pn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Hn = {},
		Bn = {},
		jn = "*/".concat("*");
	try {
		kn = location.href
	} catch (Fn) {
		kn = N.createElement("a"), kn.href = "", kn = kn.href
	}
	Cn = Pn.exec(kn.toLowerCase()) || [], p.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: kn,
			type: "GET",
			isLocal: Mn.test(Cn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": jn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": p.parseJSON,
				"text xml": p.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? Rn(Rn(e, p.ajaxSettings), t) : Rn(p.ajaxSettings, e)
		},
		ajaxPrefilter: In(Hn),
		ajaxTransport: In(Bn),
		ajax: function(e, t) {
			function x(e, t, n, r) {
				var f, g, y, w, S, x = t;
				if (b === 2) return;
				b = 2, o && clearTimeout(o), a = undefined, s = r || "", E.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 ||
					e === 304, n && (w = Un(l, E, n)), w = zn(l, w, E, f);
				if (f) l.ifModified && (S = E.getResponseHeader("Last-Modified"), S && (p.lastModified[i] = S), S = E.getResponseHeader(
						"etag"), S && (p.etag[i] = S)), e === 204 || l.type === "HEAD" ? x = "nocontent" : e === 304 ? x =
					"notmodified" : (x = w.state, g = w.data, y = w.error, f = !y);
				else {
					y = x;
					if (e || !x) x = "error", e < 0 && (e = 0)
				}
				E.status = e, E.statusText = (t || x) + "", f ? d.resolveWith(c, [g, x, E]) : d.rejectWith(c, [E, x, y]), E.statusCode(
						m), m = undefined, u && h.trigger(f ? "ajaxSuccess" : "ajaxError", [E, l, f ? g : y]), v.fireWith(c, [E, x]),
					u && (h.trigger("ajaxComplete", [E, l]), --p.active || p.event.trigger("ajaxStop"))
			}
			typeof e == "object" && (t = e, e = undefined), t = t || {};
			var n, r, i, s, o, u, a, f, l = p.ajaxSetup({}, t),
				c = l.context || l,
				h = l.context && (c.nodeType || c.jquery) ? p(c) : p.event,
				d = p.Deferred(),
				v = p.Callbacks("once memory"),
				m = l.statusCode || {},
				g = {},
				y = {},
				b = 0,
				w = "canceled",
				E = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (b === 2) {
							if (!f) {
								f = {};
								while (t = On.exec(s)) f[t[1].toLowerCase()] = t[2]
							}
							t = f[e.toLowerCase()]
						}
						return t == null ? null : t
					},
					getAllResponseHeaders: function() {
						return b === 2 ? s : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return b || (e = y[n] = y[n] || e, g[e] = t), this
					},
					overrideMimeType: function(e) {
						return b || (l.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (b < 2)
								for (t in e) m[t] = [m[t], e[t]];
							else E.always(e[E.status]);
						return this
					},
					abort: function(e) {
						var t = e || w;
						return a && a.abort(t), x(0, t), this
					}
				};
			d.promise(E).complete = v.add, E.success = E.done, E.error = E.fail, l.url = ((e || l.url || kn) + "").replace(
				Ln, "").replace(Dn, Cn[1] + "//"), l.type = t.method || t.type || l.method || l.type, l.dataTypes = p.trim(l.dataType ||
				"*").toLowerCase().match(M) || [""], l.crossDomain == null && (n = Pn.exec(l.url.toLowerCase()), l.crossDomain = !
				(!n || n[1] === Cn[1] && n[2] === Cn[2] && (n[3] || (n[1] === "http:" ? "80" : "443")) === (Cn[3] || (Cn[1] ===
					"http:" ? "80" : "443")))), l.data && l.processData && typeof l.data != "string" && (l.data = p.param(l.data,
				l.traditional)), qn(Hn, l, t, E);
			if (b === 2) return E;
			u = l.global, u && p.active++ === 0 && p.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !
				_n.test(l.type), i = l.url, l.hasContent || (l.data && (i = l.url += (Tn.test(i) ? "&" : "?") + l.data, delete l
					.data), l.cache === !1 && (l.url = An.test(i) ? i.replace(An, "$1_=" + xn++) : i + (Tn.test(i) ? "&" : "?") +
					"_=" + xn++)), l.ifModified && (p.lastModified[i] && E.setRequestHeader("If-Modified-Since", p.lastModified[i]),
					p.etag[i] && E.setRequestHeader("If-None-Match", p.etag[i])), (l.data && l.hasContent && l.contentType !== !1 ||
					t.contentType) && E.setRequestHeader("Content-Type", l.contentType), E.setRequestHeader("Accept", l.dataTypes[
					0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + jn +
					"; q=0.01" : "") : l.accepts["*"]);
			for (r in l.headers) E.setRequestHeader(r, l.headers[r]);
			if (!l.beforeSend || l.beforeSend.call(c, E, l) !== !1 && b !== 2) {
				w = "abort";
				for (r in {
						success: 1,
						error: 1,
						complete: 1
					}) E[r](l[r]);
				a = qn(Bn, l, t, E);
				if (!a) x(-1, "No Transport");
				else {
					E.readyState = 1, u && h.trigger("ajaxSend", [E, l]), l.async && l.timeout > 0 && (o = setTimeout(function() {
						E.abort("timeout")
					}, l.timeout));
					try {
						b = 1, a.send(g, x)
					} catch (S) {
						if (!(b < 2)) throw S;
						x(-1, S)
					}
				}
				return E
			}
			return E.abort()
		},
		getJSON: function(e, t, n) {
			return p.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return p.get(e, undefined, t, "script")
		}
	}), p.each(["get", "post"], function(e, t) {
		p[t] = function(e, n, r, i) {
			return p.isFunction(n) && (i = i || r, r = n, n = undefined), p.ajax({
				url: e,
				type: t,
				dataType: i,
				data: n,
				success: r
			})
		}
	}), p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		p.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), p._evalUrl = function(e) {
		return p.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, p.fn.extend({
		wrapAll: function(e) {
			if (p.isFunction(e)) return this.each(function(t) {
				p(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					var e = this;
					while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return p.isFunction(e) ? this.each(function(t) {
				p(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = p(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = p.isFunction(e);
			return this.each(function(n) {
				p(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
			}).end()
		}
	}), p.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !c.reliableHiddenOffsets() && (e.style && e.style.display || p.css(
			e, "display")) === "none"
	}, p.expr.filters.visible = function(e) {
		return !p.expr.filters.hidden(e)
	};
	var Wn = /%20/g,
		Xn = /\[\]$/,
		Vn = /\r?\n/g,
		$n = /^(?:submit|button|image|reset|file)$/i,
		Jn = /^(?:input|select|textarea|keygen)/i;
	p.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				t = p.isFunction(t) ? t() : t == null ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		t === undefined && (t = p.ajaxSettings && p.ajaxSettings.traditional);
		if (p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, function() {
			i(this.name, this.value)
		});
		else
			for (n in e) Kn(n, e[n], t, i);
		return r.join("&").replace(Wn, "+")
	}, p.fn.extend({
		serialize: function() {
			return p.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = p.prop(this, "elements");
				return e ? p.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !p(this).is(":disabled") && Jn.test(this.nodeName) && !$n.test(e) && (this.checked || !K.test(
					e))
			}).map(function(e, t) {
				var n = p(this).val();
				return n == null ? null : p.isArray(n) ? p.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Vn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Vn, "\r\n")
				}
			}).get()
		}
	}), p.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zn() || er()
	} : Zn;
	var Qn = 0,
		Gn = {},
		Yn = p.ajaxSettings.xhr();
	e.ActiveXObject && p(e).on("unload", function() {
		for (var e in Gn) Gn[e](undefined, !0)
	}), c.cors = !!Yn && "withCredentials" in Yn, Yn = c.ajax = !!Yn, Yn && p.ajaxTransport(function(e) {
		if (!e.crossDomain || c.cors) {
			var t;
			return {
				send: function(n, r) {
					var i, s = e.xhr(),
						o = ++Qn;
					s.open(e.type, e.url, e.async, e.username, e.password);
					if (e.xhrFields)
						for (i in e.xhrFields) s[i] = e.xhrFields[i];
					e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), !e.crossDomain && !n["X-Requested-With"] &&
						(n["X-Requested-With"] = "XMLHttpRequest");
					for (i in n) n[i] !== undefined && s.setRequestHeader(i, n[i] + "");
					s.send(e.hasContent && e.data || null), t = function(n, i) {
						var u, a, f;
						if (t && (i || s.readyState === 4)) {
							delete Gn[o], t = undefined, s.onreadystatechange = p.noop;
							if (i) s.readyState !== 4 && s.abort();
							else {
								f = {}, u = s.status, typeof s.responseText == "string" && (f.text = s.responseText);
								try {
									a = s.statusText
								} catch (l) {
									a = ""
								}!u && e.isLocal && !e.crossDomain ? u = f.text ? 200 : 404 : u === 1223 && (u = 204)
							}
						}
						f && r(u, a, f, s.getAllResponseHeaders())
					}, e.async ? s.readyState === 4 ? setTimeout(t) : s.onreadystatechange = Gn[o] = t : t()
				},
				abort: function() {
					t && t(undefined, !0)
				}
			}
		}
	}), p.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return p.globalEval(e), e
			}
		}
	}), p.ajaxPrefilter("script", function(e) {
		e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), p.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, n = N.head || p("head")[0] || N.documentElement;
			return {
				send: function(r, i) {
					t = N.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url,
						t.onload = t.onreadystatechange = function(e, n) {
							if (n || !t.readyState || /loaded|complete/.test(t.readyState)) t.onload = t.onreadystatechange = null, t.parentNode &&
								t.parentNode.removeChild(t), t = null, n || i(200, "success")
						}, n.insertBefore(t, n.firstChild)
				},
				abort: function() {
					t && t.onload(undefined, !0)
				}
			}
		}
	});
	var tr = [],
		nr = /(=)\?(?=&|$)|\?\?/;
	p.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = tr.pop() || p.expando + "_" + xn++;
			return this[e] = !0, e
		}
	}), p.ajaxPrefilter("json jsonp", function(t, n, r) {
		var i, s, o, u = t.jsonp !== !1 && (nr.test(t.url) ? "url" : typeof t.data == "string" && !(t.contentType || "").indexOf(
			"application/x-www-form-urlencoded") && nr.test(t.data) && "data");
		if (u || t.dataTypes[0] === "jsonp") return i = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() :
			t.jsonpCallback, u ? t[u] = t[u].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (Tn.test(t.url) ? "&" : "?") +
				t.jsonp + "=" + i), t.converters["script json"] = function() {
				return o || p.error(i + " was not called"), o[0]
			}, t.dataTypes[0] = "json", s = e[i], e[i] = function() {
				o = arguments
			}, r.always(function() {
				e[i] = s, t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)), o && p.isFunction(s) && s(o[0]), o = s =
					undefined
			}), "script"
	}), p.parseHTML = function(e, t, n) {
		if (!e || typeof e != "string") return null;
		typeof t == "boolean" && (n = t, t = !1), t = t || N;
		var r = E.exec(e),
			i = !n && [];
		return r ? [t.createElement(r[1])] : (r = p.buildFragment([e], t, i), i && i.length && p(i).remove(), p.merge([], r
			.childNodes))
	};
	var rr = p.fn.load;
	p.fn.load = function(e, t, n) {
		if (typeof e != "string" && rr) return rr.apply(this, arguments);
		var r, i, s, o = this,
			u = e.indexOf(" ");
		return u >= 0 && (r = e.slice(u, e.length), e = e.slice(0, u)), p.isFunction(t) ? (n = t, t = undefined) : t &&
			typeof t == "object" && (s = "POST"), o.length > 0 && p.ajax({
				url: e,
				type: s,
				dataType: "html",
				data: t
			}).done(function(e) {
				i = arguments, o.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e)
			}).complete(n && function(e, t) {
				o.each(n, i || [e.responseText, t, e])
			}), this
	}, p.expr.filters.animated = function(e) {
		return p.grep(p.timers, function(t) {
			return e === t.elem
		}).length
	};
	var ir = e.document.documentElement;
	p.offset = {
		setOffset: function(e, t, n) {
			var r, i, s, o, u, a, f, l = p.css(e, "position"),
				c = p(e),
				h = {};
			l === "static" && (e.style.position = "relative"), u = c.offset(), s = p.css(e, "top"), a = p.css(e, "left"), f =
				(l === "absolute" || l === "fixed") && p.inArray("auto", [s, a]) > -1, f ? (r = c.position(), o = r.top, i = r.left) :
				(o = parseFloat(s) || 0, i = parseFloat(a) || 0), p.isFunction(t) && (t = t.call(e, n, u)), t.top != null && (h.top =
					t.top - u.top + o), t.left != null && (h.left = t.left - u.left + i), "using" in t ? t.using.call(e, h) : c.css(
					h)
		}
	}, p.fn.extend({
		offset: function(e) {
			if (arguments.length) return e === undefined ? this : this.each(function(t) {
				p.offset.setOffset(this, e, t)
			});
			var t, n, r = {
					top: 0,
					left: 0
				},
				i = this[0],
				s = i && i.ownerDocument;
			if (!s) return;
			return t = s.documentElement, p.contains(t, i) ? (typeof i.getBoundingClientRect !== j && (r = i.getBoundingClientRect()),
				n = sr(s), {
					top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
					left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
				}) : r
		},
		position: function() {
			if (!this[0]) return;
			var e, t, n = {
					top: 0,
					left: 0
				},
				r = this[0];
			return p.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(),
				p.nodeName(e[0], "html") || (n = e.offset()), n.top += p.css(e[0], "borderTopWidth", !0), n.left += p.css(e[0],
					"borderLeftWidth", !0)), {
				top: t.top - n.top - p.css(r, "marginTop", !0),
				left: t.left - n.left - p.css(r, "marginLeft", !0)
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent || ir;
				while (e && !p.nodeName(e, "html") && p.css(e, "position") === "static") e = e.offsetParent;
				return e || ir
			})
		}
	}), p.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, t) {
		var n = /Y/.test(t);
		p.fn[e] = function(r) {
			return J(this, function(e, r, i) {
				var s = sr(e);
				if (i === undefined) return s ? t in s ? s[t] : s.document.documentElement[r] : e[r];
				s ? s.scrollTo(n ? p(s).scrollLeft() : i, n ? i : p(s).scrollTop()) : e[r] = i
			}, e, r, arguments.length, null)
		}
	}), p.each(["top", "left"], function(e, t) {
		p.cssHooks[t] = Ft(c.pixelPosition, function(e, n) {
			if (n) return n = Bt(e, t), Pt.test(n) ? p(e).position()[t] + "px" : n
		})
	}), p.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		p.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, r) {
			p.fn[r] = function(r, i) {
				var s = arguments.length && (n || typeof r != "boolean"),
					o = n || (r === !0 || i === !0 ? "margin" : "border");
				return J(this, function(t, n, r) {
					var i;
					return p.isWindow(t) ? t.document.documentElement["client" + e] : t.nodeType === 9 ? (i = t.documentElement,
							Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) :
						r === undefined ? p.css(t, n, o) : p.style(t, n, r, o)
				}, t, s ? r : undefined, s, null)
			}
		})
	}), p.fn.size = function() {
		return this.length
	}, p.fn.andSelf = p.fn.addBack, typeof define == "function" && define.amd && define("jquery", [], function() {
		return p
	});
	var or = e.jQuery,
		ur = e.$;
	return p.noConflict = function(t) {
		return e.$ === p && (e.$ = ur), t && e.jQuery === p && (e.jQuery = or), p
	}, typeof t === j && (e.jQuery = e.$ = p), p
});

/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A, w) {
	function ma() {
		if (!c.isReady) {
			try {
				s.documentElement.doScroll("left")
			} catch (a) {
				setTimeout(ma, 1);
				return
			}
			c.ready()
		}
	}

	function Qa(a, b) {
		b.src ? c.ajax({
			url: b.src,
			async: false,
			dataType: "script"
		}) : c.globalEval(b.text || b.textContent || b.innerHTML || "");
		b.parentNode && b.parentNode.removeChild(b)
	}

	function X(a, b, d, f, e, j) {
		var i = a.length;
		if (typeof b === "object") {
			for (var o in b) X(a, o, b[o], f, e, d);
			return a
		}
		if (d !== w) {
			f = !j && f && c.isFunction(d);
			for (o = 0; o < i; o++) e(a[o], b, f ? d.call(a[o], o, e(a[o], b)) : d, j);
			return a
		}
		return i ?
			e(a[0], b) : w
	}

	function J() {
		return (new Date).getTime()
	}

	function Y() {
		return false
	}

	function Z() {
		return true
	}

	function na(a, b, d) {
		d[0].type = a;
		return c.event.handle.apply(b, d)
	}

	function oa(a) {
		var b, d = [],
			f = [],
			e = arguments,
			j, i, o, k, n, r;
		i = c.data(this, "events");
		if (!(a.liveFired === this || !i || !i.live || a.button && a.type === "click")) {
			a.liveFired = this;
			var u = i.live.slice(0);
			for (k = 0; k < u.length; k++) {
				i = u[k];
				i.origType.replace(O, "") === a.type ? f.push(i.selector) : u.splice(k--, 1)
			}
			j = c(a.target).closest(f, a.currentTarget);
			n = 0;
			for (r =
				j.length; n < r; n++)
				for (k = 0; k < u.length; k++) {
					i = u[k];
					if (j[n].selector === i.selector) {
						o = j[n].elem;
						f = null;
						if (i.preType === "mouseenter" || i.preType === "mouseleave") f = c(a.relatedTarget).closest(i.selector)[0];
						if (!f || f !== o) d.push({
							elem: o,
							handleObj: i
						})
					}
				}
			n = 0;
			for (r = d.length; n < r; n++) {
				j = d[n];
				a.currentTarget = j.elem;
				a.data = j.handleObj.data;
				a.handleObj = j.handleObj;
				if (j.handleObj.origHandler.apply(j.elem, e) === false) {
					b = false;
					break
				}
			}
			return b
		}
	}

	function pa(a, b) {
		return "live." + (a && a !== "*" ? a + "." : "") + b.replace(/\./g, "`").replace(/ /g,
			"&")
	}

	function qa(a) {
		return !a || !a.parentNode || a.parentNode.nodeType === 11
	}

	function ra(a, b) {
		var d = 0;
		b.each(function() {
			if (this.nodeName === (a[d] && a[d].nodeName)) {
				var f = c.data(a[d++]),
					e = c.data(this, f);
				if (f = f && f.events) {
					delete e.handle;
					e.events = {};
					for (var j in f)
						for (var i in f[j]) c.event.add(this, j, f[j][i], f[j][i].data)
				}
			}
		})
	}

	function sa(a, b, d) {
		var f, e, j;
		b = b && b[0] ? b[0].ownerDocument || b[0] : s;
		if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && b === s && !ta.test(a[0]) && (c.support.checkClone ||
				!ua.test(a[0]))) {
			e =
				true;
			if (j = c.fragments[a[0]])
				if (j !== 1) f = j
		}
		if (!f) {
			f = b.createDocumentFragment();
			c.clean(a, b, f, d)
		}
		if (e) c.fragments[a[0]] = j ? f : 1;
		return {
			fragment: f,
			cacheable: e
		}
	}

	function K(a, b) {
		var d = {};
		c.each(va.concat.apply([], va.slice(0, b)), function() {
			d[this] = a
		});
		return d
	}

	function wa(a) {
		return "scrollTo" in a && a.document ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : false
	}
	var c = function(a, b) {
			return new c.fn.init(a, b)
		},
		Ra = A.jQuery,
		Sa = A.$,
		s = A.document,
		T, Ta = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,
		Ua = /^.[^:#\[\.,]*$/,
		Va = /\S/,
		Wa = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,
		Xa = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
		P = navigator.userAgent,
		xa = false,
		Q = [],
		L, $ = Object.prototype.toString,
		aa = Object.prototype.hasOwnProperty,
		ba = Array.prototype.push,
		R = Array.prototype.slice,
		ya = Array.prototype.indexOf;
	c.fn = c.prototype = {
		init: function(a, b) {
			var d, f;
			if (!a) return this;
			if (a.nodeType) {
				this.context = this[0] = a;
				this.length = 1;
				return this
			}
			if (a === "body" && !b) {
				this.context = s;
				this[0] = s.body;
				this.selector = "body";
				this.length = 1;
				return this
			}
			if (typeof a === "string")
				if ((d = Ta.exec(a)) &&
					(d[1] || !b))
					if (d[1]) {
						f = b ? b.ownerDocument || b : s;
						if (a = Xa.exec(a))
							if (c.isPlainObject(b)) {
								a = [s.createElement(a[1])];
								c.fn.attr.call(a, b, true)
							} else a = [f.createElement(a[1])];
						else {
							a = sa([d[1]], [f]);
							a = (a.cacheable ? a.fragment.cloneNode(true) : a.fragment).childNodes
						}
						return c.merge(this, a)
					} else {
						if (b = s.getElementById(d[2])) {
							if (b.id !== d[2]) return T.find(a);
							this.length = 1;
							this[0] = b
						}
						this.context = s;
						this.selector = a;
						return this
					}
			else if (!b && /^\w+$/.test(a)) {
				this.selector = a;
				this.context = s;
				a = s.getElementsByTagName(a);
				return c.merge(this,
					a)
			} else return !b || b.jquery ? (b || T).find(a) : c(b).find(a);
			else if (c.isFunction(a)) return T.ready(a);
			if (a.selector !== w) {
				this.selector = a.selector;
				this.context = a.context
			}
			return c.makeArray(a, this)
		},
		selector: "",
		jquery: "1.4.2",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return R.call(this, 0)
		},
		get: function(a) {
			return a == null ? this.toArray() : a < 0 ? this.slice(a)[0] : this[a]
		},
		pushStack: function(a, b, d) {
			var f = c();
			c.isArray(a) ? ba.apply(f, a) : c.merge(f, a);
			f.prevObject = this;
			f.context = this.context;
			if (b ===
				"find") f.selector = this.selector + (this.selector ? " " : "") + d;
			else if (b) f.selector = this.selector + "." + b + "(" + d + ")";
			return f
		},
		each: function(a, b) {
			return c.each(this, a, b)
		},
		ready: function(a) {
			c.bindReady();
			if (c.isReady) a.call(s, c);
			else Q && Q.push(a);
			return this
		},
		eq: function(a) {
			return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		slice: function() {
			return this.pushStack(R.apply(this, arguments), "slice", R.call(arguments).join(","))
		},
		map: function(a) {
			return this.pushStack(c.map(this,
				function(b, d) {
					return a.call(b, d, b)
				}))
		},
		end: function() {
			return this.prevObject || c(null)
		},
		push: ba,
		sort: [].sort,
		splice: [].splice
	};
	c.fn.init.prototype = c.fn;
	c.extend = c.fn.extend = function() {
		var a = arguments[0] || {},
			b = 1,
			d = arguments.length,
			f = false,
			e, j, i, o;
		if (typeof a === "boolean") {
			f = a;
			a = arguments[1] || {};
			b = 2
		}
		if (typeof a !== "object" && !c.isFunction(a)) a = {};
		if (d === b) {
			a = this;
			--b
		}
		for (; b < d; b++)
			if ((e = arguments[b]) != null)
				for (j in e) {
					i = a[j];
					o = e[j];
					if (a !== o)
						if (f && o && (c.isPlainObject(o) || c.isArray(o))) {
							i = i && (c.isPlainObject(i) ||
								c.isArray(i)) ? i : c.isArray(o) ? [] : {};
							a[j] = c.extend(f, i, o)
						} else if (o !== w) a[j] = o
				}
		return a
	};
	c.extend({
		noConflict: function(a) {
			A.$ = Sa;
			if (a) A.jQuery = Ra;
			return c
		},
		isReady: false,
		ready: function() {
			if (!c.isReady) {
				if (!s.body) return setTimeout(c.ready, 13);
				c.isReady = true;
				if (Q) {
					for (var a, b = 0; a = Q[b++];) a.call(s, c);
					Q = null
				}
				c.fn.triggerHandler && c(s).triggerHandler("ready")
			}
		},
		bindReady: function() {
			if (!xa) {
				xa = true;
				if (s.readyState === "complete") return c.ready();
				if (s.addEventListener) {
					s.addEventListener("DOMContentLoaded",
						L, false);
					A.addEventListener("load", c.ready, false)
				} else if (s.attachEvent) {
					s.attachEvent("onreadystatechange", L);
					A.attachEvent("onload", c.ready);
					var a = false;
					try {
						a = A.frameElement == null
					} catch (b) {}
					s.documentElement.doScroll && a && ma()
				}
			}
		},
		isFunction: function(a) {
			return $.call(a) === "[object Function]"
		},
		isArray: function(a) {
			return $.call(a) === "[object Array]"
		},
		isPlainObject: function(a) {
			if (!a || $.call(a) !== "[object Object]" || a.nodeType || a.setInterval) return false;
			if (a.constructor && !aa.call(a, "constructor") && !aa.call(a.constructor.prototype,
					"isPrototypeOf")) return false;
			var b;
			for (b in a);
			return b === w || aa.call(a, b)
		},
		isEmptyObject: function(a) {
			for (var b in a) return false;
			return true
		},
		error: function(a) {
			throw a;
		},
		parseJSON: function(a) {
			if (typeof a !== "string" || !a) return null;
			a = c.trim(a);
			if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(
					/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
				return A.JSON && A.JSON.parse ? A.JSON.parse(a) : (new Function("return " +
					a))();
			else c.error("Invalid JSON: " + a)
		},
		noop: function() {},
		globalEval: function(a) {
			if (a && Va.test(a)) {
				var b = s.getElementsByTagName("head")[0] || s.documentElement,
					d = s.createElement("script");
				d.type = "text/javascript";
				if (c.support.scriptEval) d.appendChild(s.createTextNode(a));
				else d.text = a;
				b.insertBefore(d, b.firstChild);
				b.removeChild(d)
			}
		},
		nodeName: function(a, b) {
			return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
		},
		each: function(a, b, d) {
			var f, e = 0,
				j = a.length,
				i = j === w || c.isFunction(a);
			if (d)
				if (i)
					for (f in a) {
						if (b.apply(a[f],
								d) === false) break
					} else
						for (; e < j;) {
							if (b.apply(a[e++], d) === false) break
						} else if (i)
							for (f in a) {
								if (b.call(a[f], f, a[f]) === false) break
							} else
								for (d = a[0]; e < j && b.call(d, e, d) !== false; d = a[++e]);
			return a
		},
		trim: function(a) {
			return (a || "").replace(Wa, "")
		},
		makeArray: function(a, b) {
			b = b || [];
			if (a != null) a.length == null || typeof a === "string" || c.isFunction(a) || typeof a !== "function" && a.setInterval ?
				ba.call(b, a) : c.merge(b, a);
			return b
		},
		inArray: function(a, b) {
			if (b.indexOf) return b.indexOf(a);
			for (var d = 0, f = b.length; d < f; d++)
				if (b[d] ===
					a) return d;
			return -1
		},
		merge: function(a, b) {
			var d = a.length,
				f = 0;
			if (typeof b.length === "number")
				for (var e = b.length; f < e; f++) a[d++] = b[f];
			else
				for (; b[f] !== w;) a[d++] = b[f++];
			a.length = d;
			return a
		},
		grep: function(a, b, d) {
			for (var f = [], e = 0, j = a.length; e < j; e++) !d !== !b(a[e], e) && f.push(a[e]);
			return f
		},
		map: function(a, b, d) {
			for (var f = [], e, j = 0, i = a.length; j < i; j++) {
				e = b(a[j], j, d);
				if (e != null) f[f.length] = e
			}
			return f.concat.apply([], f)
		},
		guid: 1,
		proxy: function(a, b, d) {
			if (arguments.length === 2)
				if (typeof b === "string") {
					d = a;
					a = d[b];
					b = w
				} else if (b &&
				!c.isFunction(b)) {
				d = b;
				b = w
			}
			if (!b && a) b = function() {
				return a.apply(d || this, arguments)
			};
			if (a) b.guid = a.guid = a.guid || b.guid || c.guid++;
			return b
		},
		uaMatch: function(a) {
			a = a.toLowerCase();
			a = /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) ||
				!/compatible/.test(a) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(a) || [];
			return {
				browser: a[1] || "",
				version: a[2] || "0"
			}
		},
		browser: {}
	});
	P = c.uaMatch(P);
	if (P.browser) {
		c.browser[P.browser] = true;
		c.browser.version = P.version
	}
	if (c.browser.webkit) c.browser.safari =
		true;
	if (ya) c.inArray = function(a, b) {
		return ya.call(b, a)
	};
	T = c(s);
	if (s.addEventListener) L = function() {
		s.removeEventListener("DOMContentLoaded", L, false);
		c.ready()
	};
	else if (s.attachEvent) L = function() {
		if (s.readyState === "complete") {
			s.detachEvent("onreadystatechange", L);
			c.ready()
		}
	};
	(function() {
		c.support = {};
		var a = s.documentElement,
			b = s.createElement("script"),
			d = s.createElement("div"),
			f = "script" + J();
		d.style.display = "none";
		d.innerHTML =
			"   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
		var e = d.getElementsByTagName("*"),
			j = d.getElementsByTagName("a")[0];
		if (!(!e || !e.length || !j)) {
			c.support = {
				leadingWhitespace: d.firstChild.nodeType === 3,
				tbody: !d.getElementsByTagName("tbody").length,
				htmlSerialize: !!d.getElementsByTagName("link").length,
				style: /red/.test(j.getAttribute("style")),
				hrefNormalized: j.getAttribute("href") === "/a",
				opacity: /^0.55$/.test(j.style.opacity),
				cssFloat: !!j.style.cssFloat,
				checkOn: d.getElementsByTagName("input")[0].value === "on",
				optSelected: s.createElement("select").appendChild(s.createElement("option")).selected,
				parentNode: d.removeChild(d.appendChild(s.createElement("div"))).parentNode === null,
				deleteExpando: true,
				checkClone: false,
				scriptEval: false,
				noCloneEvent: true,
				boxModel: null
			};
			b.type = "text/javascript";
			try {
				b.appendChild(s.createTextNode("window." + f + "=1;"))
			} catch (i) {}
			a.insertBefore(b, a.firstChild);
			if (A[f]) {
				c.support.scriptEval = true;
				delete A[f]
			}
			try {
				delete b.test
			} catch (o) {
				c.support.deleteExpando = false
			}
			a.removeChild(b);
			if (d.attachEvent && d.fireEvent) {
				d.attachEvent("onclick", function k() {
					c.support.noCloneEvent =
						false;
					d.detachEvent("onclick", k)
				});
				d.cloneNode(true).fireEvent("onclick")
			}
			d = s.createElement("div");
			d.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
			a = s.createDocumentFragment();
			a.appendChild(d.firstChild);
			c.support.checkClone = a.cloneNode(true).cloneNode(true).lastChild.checked;
			c(function() {
				var k = s.createElement("div");
				k.style.width = k.style.paddingLeft = "1px";
				s.body.appendChild(k);
				c.boxModel = c.support.boxModel = k.offsetWidth === 2;
				s.body.removeChild(k).style.display = "none"
			});
			a = function(k) {
				var n =
					s.createElement("div");
				k = "on" + k;
				var r = k in n;
				if (!r) {
					n.setAttribute(k, "return;");
					r = typeof n[k] === "function"
				}
				return r
			};
			c.support.submitBubbles = a("submit");
			c.support.changeBubbles = a("change");
			a = b = d = e = j = null
		}
	})();
	c.props = {
		"for": "htmlFor",
		"class": "className",
		readonly: "readOnly",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		rowspan: "rowSpan",
		colspan: "colSpan",
		tabindex: "tabIndex",
		usemap: "useMap",
		frameborder: "frameBorder"
	};
	var G = "jQuery" + J(),
		Ya = 0,
		za = {};
	c.extend({
		cache: {},
		expando: G,
		noData: {
			embed: true,
			object: true,
			applet: true
		},
		data: function(a, b, d) {
			if (!(a.nodeName && c.noData[a.nodeName.toLowerCase()])) {
				a = a == A ? za : a;
				var f = a[G],
					e = c.cache;
				if (!f && typeof b === "string" && d === w) return null;
				f || (f = ++Ya);
				if (typeof b === "object") {
					a[G] = f;
					e[f] = c.extend(true, {}, b)
				} else if (!e[f]) {
					a[G] = f;
					e[f] = {}
				}
				a = e[f];
				if (d !== w) a[b] = d;
				return typeof b === "string" ? a[b] : a
			}
		},
		removeData: function(a, b) {
			if (!(a.nodeName && c.noData[a.nodeName.toLowerCase()])) {
				a = a == A ? za : a;
				var d = a[G],
					f = c.cache,
					e = f[d];
				if (b) {
					if (e) {
						delete e[b];
						c.isEmptyObject(e) && c.removeData(a)
					}
				} else {
					if (c.support.deleteExpando) delete a[c.expando];
					else a.removeAttribute && a.removeAttribute(c.expando);
					delete f[d]
				}
			}
		}
	});
	c.fn.extend({
		data: function(a, b) {
			if (typeof a === "undefined" && this.length) return c.data(this[0]);
			else if (typeof a === "object") return this.each(function() {
				c.data(this, a)
			});
			var d = a.split(".");
			d[1] = d[1] ? "." + d[1] : "";
			if (b === w) {
				var f = this.triggerHandler("getData" + d[1] + "!", [d[0]]);
				if (f === w && this.length) f = c.data(this[0], a);
				return f === w && d[1] ? this.data(d[0]) : f
			} else return this.trigger("setData" + d[1] + "!", [d[0], b]).each(function() {
				c.data(this,
					a, b)
			})
		},
		removeData: function(a) {
			return this.each(function() {
				c.removeData(this, a)
			})
		}
	});
	c.extend({
		queue: function(a, b, d) {
			if (a) {
				b = (b || "fx") + "queue";
				var f = c.data(a, b);
				if (!d) return f || [];
				if (!f || c.isArray(d)) f = c.data(a, b, c.makeArray(d));
				else f.push(d);
				return f
			}
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var d = c.queue(a, b),
				f = d.shift();
			if (f === "inprogress") f = d.shift();
			if (f) {
				b === "fx" && d.unshift("inprogress");
				f.call(a, function() {
					c.dequeue(a, b)
				})
			}
		}
	});
	c.fn.extend({
		queue: function(a, b) {
			if (typeof a !== "string") {
				b = a;
				a = "fx"
			}
			if (b ===
				w) return c.queue(this[0], a);
			return this.each(function() {
				var d = c.queue(this, a, b);
				a === "fx" && d[0] !== "inprogress" && c.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				c.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			a = c.fx ? c.fx.speeds[a] || a : a;
			b = b || "fx";
			return this.queue(b, function() {
				var d = this;
				setTimeout(function() {
					c.dequeue(d, b)
				}, a)
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		}
	});
	var Aa = /[\n\t]/g,
		ca = /\s+/,
		Za = /\r/g,
		$a = /href|src|style/,
		ab = /(button|input)/i,
		bb = /(button|input|object|select|textarea)/i,
		cb = /^(a|area)$/i,
		Ba = /radio|checkbox/;
	c.fn.extend({
		attr: function(a, b) {
			return X(this, a, b, true, c.attr)
		},
		removeAttr: function(a) {
			return this.each(function() {
				c.attr(this, a, "");
				this.nodeType === 1 && this.removeAttribute(a)
			})
		},
		addClass: function(a) {
			if (c.isFunction(a)) return this.each(function(n) {
				var r = c(this);
				r.addClass(a.call(this, n, r.attr("class")))
			});
			if (a && typeof a === "string")
				for (var b = (a || "").split(ca), d = 0, f = this.length; d < f; d++) {
					var e = this[d];
					if (e.nodeType === 1)
						if (e.className) {
							for (var j = " " + e.className + " ",
									i = e.className, o = 0, k = b.length; o < k; o++)
								if (j.indexOf(" " + b[o] + " ") < 0) i += " " + b[o];
							e.className = c.trim(i)
						} else e.className = a
				}
			return this
		},
		removeClass: function(a) {
			if (c.isFunction(a)) return this.each(function(k) {
				var n = c(this);
				n.removeClass(a.call(this, k, n.attr("class")))
			});
			if (a && typeof a === "string" || a === w)
				for (var b = (a || "").split(ca), d = 0, f = this.length; d < f; d++) {
					var e = this[d];
					if (e.nodeType === 1 && e.className)
						if (a) {
							for (var j = (" " + e.className + " ").replace(Aa, " "), i = 0, o = b.length; i < o; i++) j = j.replace(" " +
								b[i] + " ",
								" ");
							e.className = c.trim(j)
						} else e.className = ""
				}
			return this
		},
		toggleClass: function(a, b) {
			var d = typeof a,
				f = typeof b === "boolean";
			if (c.isFunction(a)) return this.each(function(e) {
				var j = c(this);
				j.toggleClass(a.call(this, e, j.attr("class"), b), b)
			});
			return this.each(function() {
				if (d === "string")
					for (var e, j = 0, i = c(this), o = b, k = a.split(ca); e = k[j++];) {
						o = f ? o : !i.hasClass(e);
						i[o ? "addClass" : "removeClass"](e)
					} else if (d === "undefined" || d === "boolean") {
						this.className && c.data(this, "__className__", this.className);
						this.className =
							this.className || a === false ? "" : c.data(this, "__className__") || ""
					}
			})
		},
		hasClass: function(a) {
			a = " " + a + " ";
			for (var b = 0, d = this.length; b < d; b++)
				if ((" " + this[b].className + " ").replace(Aa, " ").indexOf(a) > -1) return true;
			return false
		},
		val: function(a) {
			if (a === w) {
				var b = this[0];
				if (b) {
					if (c.nodeName(b, "option")) return (b.attributes.value || {}).specified ? b.value : b.text;
					if (c.nodeName(b, "select")) {
						var d = b.selectedIndex,
							f = [],
							e = b.options;
						b = b.type === "select-one";
						if (d < 0) return null;
						var j = b ? d : 0;
						for (d = b ? d + 1 : e.length; j < d; j++) {
							var i =
								e[j];
							if (i.selected) {
								a = c(i).val();
								if (b) return a;
								f.push(a)
							}
						}
						return f
					}
					if (Ba.test(b.type) && !c.support.checkOn) return b.getAttribute("value") === null ? "on" : b.value;
					return (b.value || "").replace(Za, "")
				}
				return w
			}
			var o = c.isFunction(a);
			return this.each(function(k) {
				var n = c(this),
					r = a;
				if (this.nodeType === 1) {
					if (o) r = a.call(this, k, n.val());
					if (typeof r === "number") r += "";
					if (c.isArray(r) && Ba.test(this.type)) this.checked = c.inArray(n.val(), r) >= 0;
					else if (c.nodeName(this, "select")) {
						var u = c.makeArray(r);
						c("option", this).each(function() {
							this.selected =
								c.inArray(c(this).val(), u) >= 0
						});
						if (!u.length) this.selectedIndex = -1
					} else this.value = r
				}
			})
		}
	});
	c.extend({
		attrFn: {
			val: true,
			css: true,
			html: true,
			text: true,
			data: true,
			width: true,
			height: true,
			offset: true
		},
		attr: function(a, b, d, f) {
			if (!a || a.nodeType === 3 || a.nodeType === 8) return w;
			if (f && b in c.attrFn) return c(a)[b](d);
			f = a.nodeType !== 1 || !c.isXMLDoc(a);
			var e = d !== w;
			b = f && c.props[b] || b;
			if (a.nodeType === 1) {
				var j = $a.test(b);
				if (b in a && f && !j) {
					if (e) {
						b === "type" && ab.test(a.nodeName) && a.parentNode && c.error("type property can't be changed");
						a[b] = d
					}
					if (c.nodeName(a, "form") && a.getAttributeNode(b)) return a.getAttributeNode(b).nodeValue;
					if (b === "tabIndex") return (b = a.getAttributeNode("tabIndex")) && b.specified ? b.value : bb.test(a.nodeName) ||
						cb.test(a.nodeName) && a.href ? 0 : w;
					return a[b]
				}
				if (!c.support.style && f && b === "style") {
					if (e) a.style.cssText = "" + d;
					return a.style.cssText
				}
				e && a.setAttribute(b, "" + d);
				a = !c.support.hrefNormalized && f && j ? a.getAttribute(b, 2) : a.getAttribute(b);
				return a === null ? w : a
			}
			return c.style(a, b, d)
		}
	});
	var O = /\.(.*)$/,
		db = function(a) {
			return a.replace(/[^\w\s\.\|`]/g,
				function(b) {
					return "\\" + b
				})
		};
	c.event = {
		add: function(a, b, d, f) {
			if (!(a.nodeType === 3 || a.nodeType === 8)) {
				if (a.setInterval && a !== A && !a.frameElement) a = A;
				var e, j;
				if (d.handler) {
					e = d;
					d = e.handler
				}
				if (!d.guid) d.guid = c.guid++;
				if (j = c.data(a)) {
					var i = j.events = j.events || {},
						o = j.handle;
					if (!o) j.handle = o = function() {
						return typeof c !== "undefined" && !c.event.triggered ? c.event.handle.apply(o.elem, arguments) : w
					};
					o.elem = a;
					b = b.split(" ");
					for (var k, n = 0, r; k = b[n++];) {
						j = e ? c.extend({}, e) : {
							handler: d,
							data: f
						};
						if (k.indexOf(".") > -1) {
							r = k.split(".");
							k = r.shift();
							j.namespace = r.slice(0).sort().join(".")
						} else {
							r = [];
							j.namespace = ""
						}
						j.type = k;
						j.guid = d.guid;
						var u = i[k],
							z = c.event.special[k] || {};
						if (!u) {
							u = i[k] = [];
							if (!z.setup || z.setup.call(a, f, r, o) === false)
								if (a.addEventListener) a.addEventListener(k, o, false);
								else a.attachEvent && a.attachEvent("on" + k, o)
						}
						if (z.add) {
							z.add.call(a, j);
							if (!j.handler.guid) j.handler.guid = d.guid
						}
						u.push(j);
						c.event.global[k] = true
					}
					a = null
				}
			}
		},
		global: {},
		remove: function(a, b, d, f) {
			if (!(a.nodeType === 3 || a.nodeType === 8)) {
				var e, j = 0,
					i, o, k, n, r, u, z = c.data(a),
					C = z && z.events;
				if (z && C) {
					if (b && b.type) {
						d = b.handler;
						b = b.type
					}
					if (!b || typeof b === "string" && b.charAt(0) === ".") {
						b = b || "";
						for (e in C) c.event.remove(a, e + b)
					} else {
						for (b = b.split(" "); e = b[j++];) {
							n = e;
							i = e.indexOf(".") < 0;
							o = [];
							if (!i) {
								o = e.split(".");
								e = o.shift();
								k = new RegExp("(^|\\.)" + c.map(o.slice(0).sort(), db).join("\\.(?:.*\\.)?") + "(\\.|$)")
							}
							if (r = C[e])
								if (d) {
									n = c.event.special[e] || {};
									for (B = f || 0; B < r.length; B++) {
										u = r[B];
										if (d.guid === u.guid) {
											if (i || k.test(u.namespace)) {
												f == null && r.splice(B--, 1);
												n.remove && n.remove.call(a, u)
											}
											if (f !=
												null) break
										}
									}
									if (r.length === 0 || f != null && r.length === 1) {
										if (!n.teardown || n.teardown.call(a, o) === false) Ca(a, e, z.handle);
										delete C[e]
									}
								} else
									for (var B = 0; B < r.length; B++) {
										u = r[B];
										if (i || k.test(u.namespace)) {
											c.event.remove(a, n, u.handler, B);
											r.splice(B--, 1)
										}
									}
						}
						if (c.isEmptyObject(C)) {
							if (b = z.handle) b.elem = null;
							delete z.events;
							delete z.handle;
							c.isEmptyObject(z) && c.removeData(a)
						}
					}
				}
			}
		},
		trigger: function(a, b, d, f) {
			var e = a.type || a;
			if (!f) {
				a = typeof a === "object" ? a[G] ? a : c.extend(c.Event(e), a) : c.Event(e);
				if (e.indexOf("!") >= 0) {
					a.type =
						e = e.slice(0, -1);
					a.exclusive = true
				}
				if (!d) {
					a.stopPropagation();
					c.event.global[e] && c.each(c.cache, function() {
						this.events && this.events[e] && c.event.trigger(a, b, this.handle.elem)
					})
				}
				if (!d || d.nodeType === 3 || d.nodeType === 8) return w;
				a.result = w;
				a.target = d;
				b = c.makeArray(b);
				b.unshift(a)
			}
			a.currentTarget = d;
			(f = c.data(d, "handle")) && f.apply(d, b);
			f = d.parentNode || d.ownerDocument;
			try {
				if (!(d && d.nodeName && c.noData[d.nodeName.toLowerCase()]))
					if (d["on" + e] && d["on" + e].apply(d, b) === false) a.result = false
			} catch (j) {}
			if (!a.isPropagationStopped() &&
				f) c.event.trigger(a, b, f, true);
			else if (!a.isDefaultPrevented()) {
				f = a.target;
				var i, o = c.nodeName(f, "a") && e === "click",
					k = c.event.special[e] || {};
				if ((!k._default || k._default.call(d, a) === false) && !o && !(f && f.nodeName && c.noData[f.nodeName.toLowerCase()])) {
					try {
						if (f[e]) {
							if (i = f["on" + e]) f["on" + e] = null;
							c.event.triggered = true;
							f[e]()
						}
					} catch (n) {}
					if (i) f["on" + e] = i;
					c.event.triggered = false
				}
			}
		},
		handle: function(a) {
			var b, d, f, e;
			a = arguments[0] = c.event.fix(a || A.event);
			a.currentTarget = this;
			b = a.type.indexOf(".") < 0 && !a.exclusive;
			if (!b) {
				d = a.type.split(".");
				a.type = d.shift();
				f = new RegExp("(^|\\.)" + d.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)")
			}
			e = c.data(this, "events");
			d = e[a.type];
			if (e && d) {
				d = d.slice(0);
				e = 0;
				for (var j = d.length; e < j; e++) {
					var i = d[e];
					if (b || f.test(i.namespace)) {
						a.handler = i.handler;
						a.data = i.data;
						a.handleObj = i;
						i = i.handler.apply(this, arguments);
						if (i !== w) {
							a.result = i;
							if (i === false) {
								a.preventDefault();
								a.stopPropagation()
							}
						}
						if (a.isImmediatePropagationStopped()) break
					}
				}
			}
			return a.result
		},
		props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which"
			.split(" "),
		fix: function(a) {
			if (a[G]) return a;
			var b = a;
			a = c.Event(b);
			for (var d = this.props.length, f; d;) {
				f = this.props[--d];
				a[f] = b[f]
			}
			if (!a.target) a.target = a.srcElement || s;
			if (a.target.nodeType === 3) a.target = a.target.parentNode;
			if (!a.relatedTarget && a.fromElement) a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
			if (a.pageX == null && a.clientX != null) {
				b = s.documentElement;
				d = s.body;
				a.pageX = a.clientX + (b && b.scrollLeft || d && d.scrollLeft || 0) - (b && b.clientLeft || d && d.clientLeft ||
					0);
				a.pageY = a.clientY + (b && b.scrollTop ||
					d && d.scrollTop || 0) - (b && b.clientTop || d && d.clientTop || 0)
			}
			if (!a.which && (a.charCode || a.charCode === 0 ? a.charCode : a.keyCode)) a.which = a.charCode || a.keyCode;
			if (!a.metaKey && a.ctrlKey) a.metaKey = a.ctrlKey;
			if (!a.which && a.button !== w) a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0;
			return a
		},
		guid: 1E8,
		proxy: c.proxy,
		special: {
			ready: {
				setup: c.bindReady,
				teardown: c.noop
			},
			live: {
				add: function(a) {
					c.event.add(this, a.origType, c.extend({}, a, {
						handler: oa
					}))
				},
				remove: function(a) {
					var b = true,
						d = a.origType.replace(O, "");
					c.each(c.data(this,
						"events").live || [], function() {
						if (d === this.origType.replace(O, "")) return b = false
					});
					b && c.event.remove(this, a.origType, oa)
				}
			},
			beforeunload: {
				setup: function(a, b, d) {
					if (this.setInterval) this.onbeforeunload = d;
					return false
				},
				teardown: function(a, b) {
					if (this.onbeforeunload === b) this.onbeforeunload = null
				}
			}
		}
	};
	var Ca = s.removeEventListener ? function(a, b, d) {
		a.removeEventListener(b, d, false)
	} : function(a, b, d) {
		a.detachEvent("on" + b, d)
	};
	c.Event = function(a) {
		if (!this.preventDefault) return new c.Event(a);
		if (a && a.type) {
			this.originalEvent =
				a;
			this.type = a.type
		} else this.type = a;
		this.timeStamp = J();
		this[G] = true
	};
	c.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = Z;
			var a = this.originalEvent;
			if (a) {
				a.preventDefault && a.preventDefault();
				a.returnValue = false
			}
		},
		stopPropagation: function() {
			this.isPropagationStopped = Z;
			var a = this.originalEvent;
			if (a) {
				a.stopPropagation && a.stopPropagation();
				a.cancelBubble = true
			}
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = Z;
			this.stopPropagation()
		},
		isDefaultPrevented: Y,
		isPropagationStopped: Y,
		isImmediatePropagationStopped: Y
	};
	var Da = function(a) {
			var b = a.relatedTarget;
			try {
				for (; b && b !== this;) b = b.parentNode;
				if (b !== this) {
					a.type = a.data;
					c.event.handle.apply(this, arguments)
				}
			} catch (d) {}
		},
		Ea = function(a) {
			a.type = a.data;
			c.event.handle.apply(this, arguments)
		};
	c.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(a, b) {
		c.event.special[a] = {
			setup: function(d) {
				c.event.add(this, b, d && d.selector ? Ea : Da, a)
			},
			teardown: function(d) {
				c.event.remove(this, b, d && d.selector ? Ea : Da)
			}
		}
	});
	if (!c.support.submitBubbles) c.event.special.submit = {
		setup: function() {
			if (this.nodeName.toLowerCase() !== "form") {
				c.event.add(this, "click.specialSubmit", function(a) {
					var b = a.target,
						d = b.type;
					if ((d === "submit" || d === "image") && c(b).closest("form").length) return na("submit", this, arguments)
				});
				c.event.add(this, "keypress.specialSubmit", function(a) {
					var b = a.target,
						d = b.type;
					if ((d === "text" || d === "password") && c(b).closest("form").length && a.keyCode === 13) return na("submit",
						this, arguments)
				})
			} else return false
		},
		teardown: function() {
			c.event.remove(this, ".specialSubmit")
		}
	};
	if (!c.support.changeBubbles) {
		var da = /textarea|input|select/i,
			ea, Fa = function(a) {
				var b = a.type,
					d = a.value;
				if (b === "radio" || b === "checkbox") d = a.checked;
				else if (b === "select-multiple") d = a.selectedIndex > -1 ? c.map(a.options, function(f) {
					return f.selected
				}).join("-") : "";
				else if (a.nodeName.toLowerCase() === "select") d = a.selectedIndex;
				return d
			},
			fa = function(a, b) {
				var d = a.target,
					f, e;
				if (!(!da.test(d.nodeName) || d.readOnly)) {
					f = c.data(d, "_change_data");
					e = Fa(d);
					if (a.type !== "focusout" || d.type !== "radio") c.data(d, "_change_data",
						e);
					if (!(f === w || e === f))
						if (f != null || e) {
							a.type = "change";
							return c.event.trigger(a, b, d)
						}
				}
			};
		c.event.special.change = {
			filters: {
				focusout: fa,
				click: function(a) {
					var b = a.target,
						d = b.type;
					if (d === "radio" || d === "checkbox" || b.nodeName.toLowerCase() === "select") return fa.call(this, a)
				},
				keydown: function(a) {
					var b = a.target,
						d = b.type;
					if (a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (d === "checkbox" || d ===
							"radio") || d === "select-multiple") return fa.call(this, a)
				},
				beforeactivate: function(a) {
					a = a.target;
					c.data(a,
						"_change_data", Fa(a))
				}
			},
			setup: function() {
				if (this.type === "file") return false;
				for (var a in ea) c.event.add(this, a + ".specialChange", ea[a]);
				return da.test(this.nodeName)
			},
			teardown: function() {
				c.event.remove(this, ".specialChange");
				return da.test(this.nodeName)
			}
		};
		ea = c.event.special.change.filters
	}
	s.addEventListener && c.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		function d(f) {
			f = c.event.fix(f);
			f.type = b;
			return c.event.handle.call(this, f)
		}
		c.event.special[b] = {
			setup: function() {
				this.addEventListener(a,
					d, true)
			},
			teardown: function() {
				this.removeEventListener(a, d, true)
			}
		}
	});
	c.each(["bind", "one"], function(a, b) {
		c.fn[b] = function(d, f, e) {
			if (typeof d === "object") {
				for (var j in d) this[b](j, f, d[j], e);
				return this
			}
			if (c.isFunction(f)) {
				e = f;
				f = w
			}
			var i = b === "one" ? c.proxy(e, function(k) {
				c(this).unbind(k, i);
				return e.apply(this, arguments)
			}) : e;
			if (d === "unload" && b !== "one") this.one(d, f, e);
			else {
				j = 0;
				for (var o = this.length; j < o; j++) c.event.add(this[j], d, i, f)
			}
			return this
		}
	});
	c.fn.extend({
		unbind: function(a, b) {
			if (typeof a === "object" &&
				!a.preventDefault)
				for (var d in a) this.unbind(d, a[d]);
			else {
				d = 0;
				for (var f = this.length; d < f; d++) c.event.remove(this[d], a, b)
			}
			return this
		},
		delegate: function(a, b, d, f) {
			return this.live(b, d, f, a)
		},
		undelegate: function(a, b, d) {
			return arguments.length === 0 ? this.unbind("live") : this.die(b, null, d, a)
		},
		trigger: function(a, b) {
			return this.each(function() {
				c.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			if (this[0]) {
				a = c.Event(a);
				a.preventDefault();
				a.stopPropagation();
				c.event.trigger(a, b, this[0]);
				return a.result
			}
		},
		toggle: function(a) {
			for (var b = arguments, d = 1; d < b.length;) c.proxy(a, b[d++]);
			return this.click(c.proxy(a, function(f) {
				var e = (c.data(this, "lastToggle" + a.guid) || 0) % d;
				c.data(this, "lastToggle" + a.guid, e + 1);
				f.preventDefault();
				return b[e].apply(this, arguments) || false
			}))
		},
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	});
	var Ga = {
		focus: "focusin",
		blur: "focusout",
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	};
	c.each(["live", "die"], function(a, b) {
		c.fn[b] = function(d, f, e, j) {
			var i, o = 0,
				k, n, r = j || this.selector,
				u = j ? this : c(this.context);
			if (c.isFunction(f)) {
				e = f;
				f = w
			}
			for (d = (d || "").split(" ");
				(i = d[o++]) != null;) {
				j = O.exec(i);
				k = "";
				if (j) {
					k = j[0];
					i = i.replace(O, "")
				}
				if (i === "hover") d.push("mouseenter" + k, "mouseleave" + k);
				else {
					n = i;
					if (i === "focus" || i === "blur") {
						d.push(Ga[i] + k);
						i += k
					} else i = (Ga[i] || i) + k;
					b === "live" ? u.each(function() {
						c.event.add(this, pa(i, r), {
							data: f,
							selector: r,
							handler: e,
							origType: i,
							origHandler: e,
							preType: n
						})
					}) : u.unbind(pa(i, r), e)
				}
			}
			return this
		}
	});
	c.each(
		"blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error"
		.split(" "),
		function(a, b) {
			c.fn[b] = function(d) {
				return d ? this.bind(b, d) : this.trigger(b)
			};
			if (c.attrFn) c.attrFn[b] = true
		});
	A.attachEvent && !A.addEventListener && A.attachEvent("onunload", function() {
		for (var a in c.cache)
			if (c.cache[a].handle) try {
				c.event.remove(c.cache[a].handle.elem)
			} catch (b) {}
	});
	(function() {
		function a(g) {
			for (var h = "", l, m = 0; g[m]; m++) {
				l = g[m];
				if (l.nodeType === 3 || l.nodeType === 4) h += l.nodeValue;
				else if (l.nodeType !== 8) h += a(l.childNodes)
			}
			return h
		}

		function b(g, h, l, m, q, p) {
			q = 0;
			for (var v = m.length; q < v; q++) {
				var t = m[q];
				if (t) {
					t = t[g];
					for (var y = false; t;) {
						if (t.sizcache === l) {
							y = m[t.sizset];
							break
						}
						if (t.nodeType === 1 && !p) {
							t.sizcache = l;
							t.sizset = q
						}
						if (t.nodeName.toLowerCase() === h) {
							y = t;
							break
						}
						t = t[g]
					}
					m[q] = y
				}
			}
		}

		function d(g, h, l, m, q, p) {
			q = 0;
			for (var v = m.length; q < v; q++) {
				var t = m[q];
				if (t) {
					t = t[g];
					for (var y = false; t;) {
						if (t.sizcache === l) {
							y = m[t.sizset];
							break
						}
						if (t.nodeType === 1) {
							if (!p) {
								t.sizcache = l;
								t.sizset = q
							}
							if (typeof h !== "string") {
								if (t === h) {
									y = true;
									break
								}
							} else if (k.filter(h, [t]).length > 0) {
								y = t;
								break
							}
						}
						t = t[g]
					}
					m[q] = y
				}
			}
		}
		var f =
			/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
			e = 0,
			j = Object.prototype.toString,
			i = false,
			o = true;
		[0, 0].sort(function() {
			o = false;
			return 0
		});
		var k = function(g, h, l, m) {
			l = l || [];
			var q = h = h || s;
			if (h.nodeType !== 1 && h.nodeType !== 9) return [];
			if (!g || typeof g !== "string") return l;
			for (var p = [], v, t, y, S, H = true, M = x(h), I = g;
				(f.exec(""), v = f.exec(I)) !== null;) {
				I = v[3];
				p.push(v[1]);
				if (v[2]) {
					S = v[3];
					break
				}
			}
			if (p.length > 1 && r.exec(g))
				if (p.length === 2 && n.relative[p[0]]) t = ga(p[0] + p[1], h);
				else
					for (t = n.relative[p[0]] ? [h] : k(p.shift(), h); p.length;) {
						g = p.shift();
						if (n.relative[g]) g += p.shift();
						t = ga(g, t)
					} else {
						if (!m && p.length > 1 && h.nodeType === 9 && !M && n.match.ID.test(p[0]) && !n.match.ID.test(p[p.length - 1])) {
							v = k.find(p.shift(), h, M);
							h = v.expr ? k.filter(v.expr, v.set)[0] : v.set[0]
						}
						if (h) {
							v = m ? {
								expr: p.pop(),
								set: z(m)
							} : k.find(p.pop(), p.length === 1 && (p[0] === "~" || p[0] === "+") && h.parentNode ? h.parentNode : h, M);
							t = v.expr ? k.filter(v.expr, v.set) : v.set;
							if (p.length > 0) y = z(t);
							else H = false;
							for (; p.length;) {
								var D = p.pop();
								v = D;
								if (n.relative[D]) v = p.pop();
								else D = "";
								if (v == null) v = h;
								n.relative[D](y, v, M)
							}
						} else y = []
					}
			y || (y = t);
			y || k.error(D ||
				g);
			if (j.call(y) === "[object Array]")
				if (H)
					if (h && h.nodeType === 1)
						for (g = 0; y[g] != null; g++) {
							if (y[g] && (y[g] === true || y[g].nodeType === 1 && E(h, y[g]))) l.push(t[g])
						} else
							for (g = 0; y[g] != null; g++) y[g] && y[g].nodeType === 1 && l.push(t[g]);
					else l.push.apply(l, y);
			else z(y, l);
			if (S) {
				k(S, q, l, m);
				k.uniqueSort(l)
			}
			return l
		};
		k.uniqueSort = function(g) {
			if (B) {
				i = o;
				g.sort(B);
				if (i)
					for (var h = 1; h < g.length; h++) g[h] === g[h - 1] && g.splice(h--, 1)
			}
			return g
		};
		k.matches = function(g, h) {
			return k(g, null, null, h)
		};
		k.find = function(g, h, l) {
			var m, q;
			if (!g) return [];
			for (var p = 0, v = n.order.length; p < v; p++) {
				var t = n.order[p];
				if (q = n.leftMatch[t].exec(g)) {
					var y = q[1];
					q.splice(1, 1);
					if (y.substr(y.length - 1) !== "\\") {
						q[1] = (q[1] || "").replace(/\\/g, "");
						m = n.find[t](q, h, l);
						if (m != null) {
							g = g.replace(n.match[t], "");
							break
						}
					}
				}
			}
			m || (m = h.getElementsByTagName("*"));
			return {
				set: m,
				expr: g
			}
		};
		k.filter = function(g, h, l, m) {
			for (var q = g, p = [], v = h, t, y, S = h && h[0] && x(h[0]); g && h.length;) {
				for (var H in n.filter)
					if ((t = n.leftMatch[H].exec(g)) != null && t[2]) {
						var M = n.filter[H],
							I, D;
						D = t[1];
						y = false;
						t.splice(1, 1);
						if (D.substr(D.length -
								1) !== "\\") {
							if (v === p) p = [];
							if (n.preFilter[H])
								if (t = n.preFilter[H](t, v, l, p, m, S)) {
									if (t === true) continue
								} else y = I = true;
							if (t)
								for (var U = 0;
									(D = v[U]) != null; U++)
									if (D) {
										I = M(D, t, U, v);
										var Ha = m ^ !!I;
										if (l && I != null)
											if (Ha) y = true;
											else v[U] = false;
										else if (Ha) {
											p.push(D);
											y = true
										}
									} if (I !== w) {
								l || (v = p);
								g = g.replace(n.match[H], "");
								if (!y) return [];
								break
							}
						}
					} if (g === q)
					if (y == null) k.error(g);
					else break;
				q = g
			}
			return v
		};
		k.error = function(g) {
			throw "Syntax error, unrecognized expression: " + g;
		};
		var n = k.selectors = {
				order: ["ID", "NAME", "TAG"],
				match: {
					ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
					CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
					NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
					ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
					TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
					CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
					POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
					PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
				},
				leftMatch: {},
				attrMap: {
					"class": "className",
					"for": "htmlFor"
				},
				attrHandle: {
					href: function(g) {
						return g.getAttribute("href")
					}
				},
				relative: {
					"+": function(g, h) {
						var l = typeof h === "string",
							m = l && !/\W/.test(h);
						l = l && !m;
						if (m) h = h.toLowerCase();
						m = 0;
						for (var q = g.length, p; m < q; m++)
							if (p = g[m]) {
								for (;
									(p = p.previousSibling) && p.nodeType !== 1;);
								g[m] = l || p && p.nodeName.toLowerCase() === h ? p || false : p === h
							} l && k.filter(h, g, true)
					},
					">": function(g, h) {
						var l = typeof h === "string";
						if (l && !/\W/.test(h)) {
							h = h.toLowerCase();
							for (var m = 0, q = g.length; m < q; m++) {
								var p = g[m];
								if (p) {
									l = p.parentNode;
									g[m] = l.nodeName.toLowerCase() === h ? l : false
								}
							}
						} else {
							m = 0;
							for (q = g.length; m < q; m++)
								if (p = g[m]) g[m] =
									l ? p.parentNode : p.parentNode === h;
							l && k.filter(h, g, true)
						}
					},
					"": function(g, h, l) {
						var m = e++,
							q = d;
						if (typeof h === "string" && !/\W/.test(h)) {
							var p = h = h.toLowerCase();
							q = b
						}
						q("parentNode", h, m, g, p, l)
					},
					"~": function(g, h, l) {
						var m = e++,
							q = d;
						if (typeof h === "string" && !/\W/.test(h)) {
							var p = h = h.toLowerCase();
							q = b
						}
						q("previousSibling", h, m, g, p, l)
					}
				},
				find: {
					ID: function(g, h, l) {
						if (typeof h.getElementById !== "undefined" && !l) return (g = h.getElementById(g[1])) ? [g] : []
					},
					NAME: function(g, h) {
						if (typeof h.getElementsByName !== "undefined") {
							var l = [];
							h = h.getElementsByName(g[1]);
							for (var m = 0, q = h.length; m < q; m++) h[m].getAttribute("name") === g[1] && l.push(h[m]);
							return l.length === 0 ? null : l
						}
					},
					TAG: function(g, h) {
						return h.getElementsByTagName(g[1])
					}
				},
				preFilter: {
					CLASS: function(g, h, l, m, q, p) {
						g = " " + g[1].replace(/\\/g, "") + " ";
						if (p) return g;
						p = 0;
						for (var v;
							(v = h[p]) != null; p++)
							if (v)
								if (q ^ (v.className && (" " + v.className + " ").replace(/[\t\n]/g, " ").indexOf(g) >= 0)) l || m.push(v);
								else if (l) h[p] = false;
						return false
					},
					ID: function(g) {
						return g[1].replace(/\\/g, "")
					},
					TAG: function(g) {
						return g[1].toLowerCase()
					},
					CHILD: function(g) {
						if (g[1] === "nth") {
							var h = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2] === "even" && "2n" || g[2] === "odd" && "2n+1" || !/\D/.test(g[2]) &&
								"0n+" + g[2] || g[2]);
							g[2] = h[1] + (h[2] || 1) - 0;
							g[3] = h[3] - 0
						}
						g[0] = e++;
						return g
					},
					ATTR: function(g, h, l, m, q, p) {
						h = g[1].replace(/\\/g, "");
						if (!p && n.attrMap[h]) g[1] = n.attrMap[h];
						if (g[2] === "~=") g[4] = " " + g[4] + " ";
						return g
					},
					PSEUDO: function(g, h, l, m, q) {
						if (g[1] === "not")
							if ((f.exec(g[3]) || "").length > 1 || /^\w/.test(g[3])) g[3] = k(g[3], null, null, h);
							else {
								g = k.filter(g[3], h, l, true ^ q);
								l || m.push.apply(m,
									g);
								return false
							}
						else if (n.match.POS.test(g[0]) || n.match.CHILD.test(g[0])) return true;
						return g
					},
					POS: function(g) {
						g.unshift(true);
						return g
					}
				},
				filters: {
					enabled: function(g) {
						return g.disabled === false && g.type !== "hidden"
					},
					disabled: function(g) {
						return g.disabled === true
					},
					checked: function(g) {
						return g.checked === true
					},
					selected: function(g) {
						return g.selected === true
					},
					parent: function(g) {
						return !!g.firstChild
					},
					empty: function(g) {
						return !g.firstChild
					},
					has: function(g, h, l) {
						return !!k(l[3], g).length
					},
					header: function(g) {
						return /h\d/i.test(g.nodeName)
					},
					text: function(g) {
						return "text" === g.type
					},
					radio: function(g) {
						return "radio" === g.type
					},
					checkbox: function(g) {
						return "checkbox" === g.type
					},
					file: function(g) {
						return "file" === g.type
					},
					password: function(g) {
						return "password" === g.type
					},
					submit: function(g) {
						return "submit" === g.type
					},
					image: function(g) {
						return "image" === g.type
					},
					reset: function(g) {
						return "reset" === g.type
					},
					button: function(g) {
						return "button" === g.type || g.nodeName.toLowerCase() === "button"
					},
					input: function(g) {
						return /input|select|textarea|button/i.test(g.nodeName)
					}
				},
				setFilters: {
					first: function(g, h) {
						return h === 0
					},
					last: function(g, h, l, m) {
						return h === m.length - 1
					},
					even: function(g, h) {
						return h % 2 === 0
					},
					odd: function(g, h) {
						return h % 2 === 1
					},
					lt: function(g, h, l) {
						return h < l[3] - 0
					},
					gt: function(g, h, l) {
						return h > l[3] - 0
					},
					nth: function(g, h, l) {
						return l[3] - 0 === h
					},
					eq: function(g, h, l) {
						return l[3] - 0 === h
					}
				},
				filter: {
					PSEUDO: function(g, h, l, m) {
						var q = h[1],
							p = n.filters[q];
						if (p) return p(g, l, h, m);
						else if (q === "contains") return (g.textContent || g.innerText || a([g]) || "").indexOf(h[3]) >= 0;
						else if (q === "not") {
							h =
								h[3];
							l = 0;
							for (m = h.length; l < m; l++)
								if (h[l] === g) return false;
							return true
						} else k.error("Syntax error, unrecognized expression: " + q)
					},
					CHILD: function(g, h) {
						var l = h[1],
							m = g;
						switch (l) {
							case "only":
							case "first":
								for (; m = m.previousSibling;)
									if (m.nodeType === 1) return false;
								if (l === "first") return true;
								m = g;
							case "last":
								for (; m = m.nextSibling;)
									if (m.nodeType === 1) return false;
								return true;
							case "nth":
								l = h[2];
								var q = h[3];
								if (l === 1 && q === 0) return true;
								h = h[0];
								var p = g.parentNode;
								if (p && (p.sizcache !== h || !g.nodeIndex)) {
									var v = 0;
									for (m = p.firstChild; m; m =
										m.nextSibling)
										if (m.nodeType === 1) m.nodeIndex = ++v;
									p.sizcache = h
								}
								g = g.nodeIndex - q;
								return l === 0 ? g === 0 : g % l === 0 && g / l >= 0
						}
					},
					ID: function(g, h) {
						return g.nodeType === 1 && g.getAttribute("id") === h
					},
					TAG: function(g, h) {
						return h === "*" && g.nodeType === 1 || g.nodeName.toLowerCase() === h
					},
					CLASS: function(g, h) {
						return (" " + (g.className || g.getAttribute("class")) + " ").indexOf(h) > -1
					},
					ATTR: function(g, h) {
						var l = h[1];
						g = n.attrHandle[l] ? n.attrHandle[l](g) : g[l] != null ? g[l] : g.getAttribute(l);
						l = g + "";
						var m = h[2];
						h = h[4];
						return g == null ? m === "!=" : m ===
							"=" ? l === h : m === "*=" ? l.indexOf(h) >= 0 : m === "~=" ? (" " + l + " ").indexOf(h) >= 0 : !h ? l && g !==
							false : m === "!=" ? l !== h : m === "^=" ? l.indexOf(h) === 0 : m === "$=" ? l.substr(l.length - h.length) ===
							h : m === "|=" ? l === h || l.substr(0, h.length + 1) === h + "-" : false
					},
					POS: function(g, h, l, m) {
						var q = n.setFilters[h[2]];
						if (q) return q(g, l, h, m)
					}
				}
			},
			r = n.match.POS;
		for (var u in n.match) {
			n.match[u] = new RegExp(n.match[u].source + /(?![^\[]*\])(?![^\(]*\))/.source);
			n.leftMatch[u] = new RegExp(/(^(?:.|\r|\n)*?)/.source + n.match[u].source.replace(/\\(\d+)/g, function(g,
				h) {
				return "\\" + (h - 0 + 1)
			}))
		}
		var z = function(g, h) {
			g = Array.prototype.slice.call(g, 0);
			if (h) {
				h.push.apply(h, g);
				return h
			}
			return g
		};
		try {
			Array.prototype.slice.call(s.documentElement.childNodes, 0)
		} catch (C) {
			z = function(g, h) {
				h = h || [];
				if (j.call(g) === "[object Array]") Array.prototype.push.apply(h, g);
				else if (typeof g.length === "number")
					for (var l = 0, m = g.length; l < m; l++) h.push(g[l]);
				else
					for (l = 0; g[l]; l++) h.push(g[l]);
				return h
			}
		}
		var B;
		if (s.documentElement.compareDocumentPosition) B = function(g, h) {
			if (!g.compareDocumentPosition ||
				!h.compareDocumentPosition) {
				if (g == h) i = true;
				return g.compareDocumentPosition ? -1 : 1
			}
			g = g.compareDocumentPosition(h) & 4 ? -1 : g === h ? 0 : 1;
			if (g === 0) i = true;
			return g
		};
		else if ("sourceIndex" in s.documentElement) B = function(g, h) {
			if (!g.sourceIndex || !h.sourceIndex) {
				if (g == h) i = true;
				return g.sourceIndex ? -1 : 1
			}
			g = g.sourceIndex - h.sourceIndex;
			if (g === 0) i = true;
			return g
		};
		else if (s.createRange) B = function(g, h) {
			if (!g.ownerDocument || !h.ownerDocument) {
				if (g == h) i = true;
				return g.ownerDocument ? -1 : 1
			}
			var l = g.ownerDocument.createRange(),
				m =
				h.ownerDocument.createRange();
			l.setStart(g, 0);
			l.setEnd(g, 0);
			m.setStart(h, 0);
			m.setEnd(h, 0);
			g = l.compareBoundaryPoints(Range.START_TO_END, m);
			if (g === 0) i = true;
			return g
		};
		(function() {
			var g = s.createElement("div"),
				h = "script" + (new Date).getTime();
			g.innerHTML = "<a name='" + h + "'/>";
			var l = s.documentElement;
			l.insertBefore(g, l.firstChild);
			if (s.getElementById(h)) {
				n.find.ID = function(m, q, p) {
					if (typeof q.getElementById !== "undefined" && !p) return (q = q.getElementById(m[1])) ? q.id === m[1] ||
						typeof q.getAttributeNode !== "undefined" &&
						q.getAttributeNode("id").nodeValue === m[1] ? [q] : w : []
				};
				n.filter.ID = function(m, q) {
					var p = typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id");
					return m.nodeType === 1 && p && p.nodeValue === q
				}
			}
			l.removeChild(g);
			l = g = null
		})();
		(function() {
			var g = s.createElement("div");
			g.appendChild(s.createComment(""));
			if (g.getElementsByTagName("*").length > 0) n.find.TAG = function(h, l) {
				l = l.getElementsByTagName(h[1]);
				if (h[1] === "*") {
					h = [];
					for (var m = 0; l[m]; m++) l[m].nodeType === 1 && h.push(l[m]);
					l = h
				}
				return l
			};
			g.innerHTML = "<a href='#'></a>";
			if (g.firstChild && typeof g.firstChild.getAttribute !== "undefined" && g.firstChild.getAttribute("href") !== "#")
				n.attrHandle.href = function(h) {
					return h.getAttribute("href", 2)
				};
			g = null
		})();
		s.querySelectorAll && function() {
			var g = k,
				h = s.createElement("div");
			h.innerHTML = "<p class='TEST'></p>";
			if (!(h.querySelectorAll && h.querySelectorAll(".TEST").length === 0)) {
				k = function(m, q, p, v) {
					q = q || s;
					if (!v && q.nodeType === 9 && !x(q)) try {
						return z(q.querySelectorAll(m), p)
					} catch (t) {}
					return g(m, q, p, v)
				};
				for (var l in g) k[l] = g[l];
				h = null
			}
		}();
		(function() {
			var g = s.createElement("div");
			g.innerHTML = "<div class='test e'></div><div class='test'></div>";
			if (!(!g.getElementsByClassName || g.getElementsByClassName("e").length === 0)) {
				g.lastChild.className = "e";
				if (g.getElementsByClassName("e").length !== 1) {
					n.order.splice(1, 0, "CLASS");
					n.find.CLASS = function(h, l, m) {
						if (typeof l.getElementsByClassName !== "undefined" && !m) return l.getElementsByClassName(h[1])
					};
					g = null
				}
			}
		})();
		var E = s.compareDocumentPosition ? function(g, h) {
				return !!(g.compareDocumentPosition(h) & 16)
			} :
			function(g, h) {
				return g !== h && (g.contains ? g.contains(h) : true)
			},
			x = function(g) {
				return (g = (g ? g.ownerDocument || g : 0).documentElement) ? g.nodeName !== "HTML" : false
			},
			ga = function(g, h) {
				var l = [],
					m = "",
					q;
				for (h = h.nodeType ? [h] : h; q = n.match.PSEUDO.exec(g);) {
					m += q[0];
					g = g.replace(n.match.PSEUDO, "")
				}
				g = n.relative[g] ? g + "*" : g;
				q = 0;
				for (var p = h.length; q < p; q++) k(g, h[q], l);
				return k.filter(m, l)
			};
		c.find = k;
		c.expr = k.selectors;
		c.expr[":"] = c.expr.filters;
		c.unique = k.uniqueSort;
		c.text = a;
		c.isXMLDoc = x;
		c.contains = E
	})();
	var eb = /Until$/,
		fb = /^(?:parents|prevUntil|prevAll)/,
		gb = /,/;
	R = Array.prototype.slice;
	var Ia = function(a, b, d) {
		if (c.isFunction(b)) return c.grep(a, function(e, j) {
			return !!b.call(e, j, e) === d
		});
		else if (b.nodeType) return c.grep(a, function(e) {
			return e === b === d
		});
		else if (typeof b === "string") {
			var f = c.grep(a, function(e) {
				return e.nodeType === 1
			});
			if (Ua.test(b)) return c.filter(b, f, !d);
			else b = c.filter(b, f)
		}
		return c.grep(a, function(e) {
			return c.inArray(e, b) >= 0 === d
		})
	};
	c.fn.extend({
		find: function(a) {
			for (var b = this.pushStack("", "find", a), d = 0, f = 0, e = this.length; f < e; f++) {
				d = b.length;
				c.find(a, this[f], b);
				if (f > 0)
					for (var j = d; j < b.length; j++)
						for (var i = 0; i < d; i++)
							if (b[i] === b[j]) {
								b.splice(j--, 1);
								break
							}
			}
			return b
		},
		has: function(a) {
			var b = c(a);
			return this.filter(function() {
				for (var d = 0, f = b.length; d < f; d++)
					if (c.contains(this, b[d])) return true
			})
		},
		not: function(a) {
			return this.pushStack(Ia(this, a, false), "not", a)
		},
		filter: function(a) {
			return this.pushStack(Ia(this, a, true), "filter", a)
		},
		is: function(a) {
			return !!a && c.filter(a, this).length > 0
		},
		closest: function(a, b) {
			if (c.isArray(a)) {
				var d = [],
					f = this[0],
					e, j = {},
					i;
				if (f && a.length) {
					e = 0;
					for (var o = a.length; e < o; e++) {
						i = a[e];
						j[i] || (j[i] = c.expr.match.POS.test(i) ? c(i, b || this.context) : i)
					}
					for (; f && f.ownerDocument && f !== b;) {
						for (i in j) {
							e = j[i];
							if (e.jquery ? e.index(f) > -1 : c(f).is(e)) {
								d.push({
									selector: i,
									elem: f
								});
								delete j[i]
							}
						}
						f = f.parentNode
					}
				}
				return d
			}
			var k = c.expr.match.POS.test(a) ? c(a, b || this.context) : null;
			return this.map(function(n, r) {
				for (; r && r.ownerDocument && r !== b;) {
					if (k ? k.index(r) > -1 : c(r).is(a)) return r;
					r = r.parentNode
				}
				return null
			})
		},
		index: function(a) {
			if (!a || typeof a ===
				"string") return c.inArray(this[0], a ? c(a) : this.parent().children());
			return c.inArray(a.jquery ? a[0] : a, this)
		},
		add: function(a, b) {
			a = typeof a === "string" ? c(a, b || this.context) : c.makeArray(a);
			b = c.merge(this.get(), a);
			return this.pushStack(qa(a[0]) || qa(b[0]) ? b : c.unique(b))
		},
		andSelf: function() {
			return this.add(this.prevObject)
		}
	});
	c.each({
		parent: function(a) {
			return (a = a.parentNode) && a.nodeType !== 11 ? a : null
		},
		parents: function(a) {
			return c.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, d) {
			return c.dir(a, "parentNode",
				d)
		},
		next: function(a) {
			return c.nth(a, 2, "nextSibling")
		},
		prev: function(a) {
			return c.nth(a, 2, "previousSibling")
		},
		nextAll: function(a) {
			return c.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return c.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, d) {
			return c.dir(a, "nextSibling", d)
		},
		prevUntil: function(a, b, d) {
			return c.dir(a, "previousSibling", d)
		},
		siblings: function(a) {
			return c.sibling(a.parentNode.firstChild, a)
		},
		children: function(a) {
			return c.sibling(a.firstChild)
		},
		contents: function(a) {
			return c.nodeName(a, "iframe") ?
				a.contentDocument || a.contentWindow.document : c.makeArray(a.childNodes)
		}
	}, function(a, b) {
		c.fn[a] = function(d, f) {
			var e = c.map(this, b, d);
			eb.test(a) || (f = d);
			if (f && typeof f === "string") e = c.filter(f, e);
			e = this.length > 1 ? c.unique(e) : e;
			if ((this.length > 1 || gb.test(f)) && fb.test(a)) e = e.reverse();
			return this.pushStack(e, a, R.call(arguments).join(","))
		}
	});
	c.extend({
		filter: function(a, b, d) {
			if (d) a = ":not(" + a + ")";
			return c.find.matches(a, b)
		},
		dir: function(a, b, d) {
			var f = [];
			for (a = a[b]; a && a.nodeType !== 9 && (d === w || a.nodeType !== 1 || !c(a).is(d));) {
				a.nodeType ===
					1 && f.push(a);
				a = a[b]
			}
			return f
		},
		nth: function(a, b, d) {
			b = b || 1;
			for (var f = 0; a; a = a[d])
				if (a.nodeType === 1 && ++f === b) break;
			return a
		},
		sibling: function(a, b) {
			for (var d = []; a; a = a.nextSibling) a.nodeType === 1 && a !== b && d.push(a);
			return d
		}
	});
	var Ja = / jQuery\d+="(?:\d+|null)"/g,
		V = /^\s+/,
		Ka = /(<([\w:]+)[^>]*?)\/>/g,
		hb = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,
		La = /<([\w:]+)/,
		ib = /<tbody/i,
		jb = /<|&#?\w+;/,
		ta = /<script|<object|<embed|<option|<style/i,
		ua = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ma = function(a, b, d) {
			return hb.test(d) ?
				a : b + "></" + d + ">"
		},
		F = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		};
	F.optgroup = F.option;
	F.tbody = F.tfoot = F.colgroup = F.caption = F.thead;
	F.th = F.td;
	if (!c.support.htmlSerialize) F._default = [1, "div<div>", "</div>"];
	c.fn.extend({
		text: function(a) {
			if (c.isFunction(a)) return this.each(function(b) {
				var d =
					c(this);
				d.text(a.call(this, b, d.text()))
			});
			if (typeof a !== "object" && a !== w) return this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(
				a));
			return c.text(this)
		},
		wrapAll: function(a) {
			if (c.isFunction(a)) return this.each(function(d) {
				c(this).wrapAll(a.call(this, d))
			});
			if (this[0]) {
				var b = c(a, this[0].ownerDocument).eq(0).clone(true);
				this[0].parentNode && b.insertBefore(this[0]);
				b.map(function() {
					for (var d = this; d.firstChild && d.firstChild.nodeType === 1;) d = d.firstChild;
					return d
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			if (c.isFunction(a)) return this.each(function(b) {
				c(this).wrapInner(a.call(this, b))
			});
			return this.each(function() {
				var b = c(this),
					d = b.contents();
				d.length ? d.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			return this.each(function() {
				c(this).wrapAll(a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, true, function(a) {
				this.nodeType === 1 && this.appendChild(a)
			})
		},
		prepend: function() {
			return this.domManip(arguments, true, function(a) {
				this.nodeType === 1 && this.insertBefore(a, this.firstChild)
			})
		},
		before: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function(b) {
				this.parentNode.insertBefore(b, this)
			});
			else if (arguments.length) {
				var a = c(arguments[0]);
				a.push.apply(a, this.toArray());
				return this.pushStack(a, "before", arguments)
			}
		},
		after: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function(b) {
				this.parentNode.insertBefore(b,
					this.nextSibling)
			});
			else if (arguments.length) {
				var a = this.pushStack(this, "after", arguments);
				a.push.apply(a, c(arguments[0]).toArray());
				return a
			}
		},
		remove: function(a, b) {
			for (var d = 0, f;
				(f = this[d]) != null; d++)
				if (!a || c.filter(a, [f]).length) {
					if (!b && f.nodeType === 1) {
						c.cleanData(f.getElementsByTagName("*"));
						c.cleanData([f])
					}
					f.parentNode && f.parentNode.removeChild(f)
				} return this
		},
		empty: function() {
			for (var a = 0, b;
				(b = this[a]) != null; a++)
				for (b.nodeType === 1 && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
			return this
		},
		clone: function(a) {
			var b = this.map(function() {
				if (!c.support.noCloneEvent && !c.isXMLDoc(this)) {
					var d = this.outerHTML,
						f = this.ownerDocument;
					if (!d) {
						d = f.createElement("div");
						d.appendChild(this.cloneNode(true));
						d = d.innerHTML
					}
					return c.clean([d.replace(Ja, "").replace(/=([^="'>\s]+\/)>/g, '="$1">').replace(V, "")], f)[0]
				} else return this.cloneNode(true)
			});
			if (a === true) {
				ra(this, b);
				ra(this.find("*"), b.find("*"))
			}
			return b
		},
		html: function(a) {
			if (a === w) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(Ja,
				"") : null;
			else if (typeof a === "string" && !ta.test(a) && (c.support.leadingWhitespace || !V.test(a)) && !F[(La.exec(a) ||
					["", ""])[1].toLowerCase()]) {
				a = a.replace(Ka, Ma);
				try {
					for (var b = 0, d = this.length; b < d; b++)
						if (this[b].nodeType === 1) {
							c.cleanData(this[b].getElementsByTagName("*"));
							this[b].innerHTML = a
						}
				} catch (f) {
					this.empty().append(a)
				}
			} else c.isFunction(a) ? this.each(function(e) {
				var j = c(this),
					i = j.html();
				j.empty().append(function() {
					return a.call(this, e, i)
				})
			}) : this.empty().append(a);
			return this
		},
		replaceWith: function(a) {
			if (this[0] &&
				this[0].parentNode) {
				if (c.isFunction(a)) return this.each(function(b) {
					var d = c(this),
						f = d.html();
					d.replaceWith(a.call(this, b, f))
				});
				if (typeof a !== "string") a = c(a).detach();
				return this.each(function() {
					var b = this.nextSibling,
						d = this.parentNode;
					c(this).remove();
					b ? c(b).before(a) : c(d).append(a)
				})
			} else return this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a)
		},
		detach: function(a) {
			return this.remove(a, true)
		},
		domManip: function(a, b, d) {
			function f(u) {
				return c.nodeName(u, "table") ? u.getElementsByTagName("tbody")[0] ||
					u.appendChild(u.ownerDocument.createElement("tbody")) : u
			}
			var e, j, i = a[0],
				o = [],
				k;
			if (!c.support.checkClone && arguments.length === 3 && typeof i === "string" && ua.test(i)) return this.each(
				function() {
					c(this).domManip(a, b, d, true)
				});
			if (c.isFunction(i)) return this.each(function(u) {
				var z = c(this);
				a[0] = i.call(this, u, b ? z.html() : w);
				z.domManip(a, b, d)
			});
			if (this[0]) {
				e = i && i.parentNode;
				e = c.support.parentNode && e && e.nodeType === 11 && e.childNodes.length === this.length ? {
					fragment: e
				} : sa(a, this, o);
				k = e.fragment;
				if (j = k.childNodes.length ===
					1 ? (k = k.firstChild) : k.firstChild) {
					b = b && c.nodeName(j, "tr");
					for (var n = 0, r = this.length; n < r; n++) d.call(b ? f(this[n], j) : this[n], n > 0 || e.cacheable || this.length >
						1 ? k.cloneNode(true) : k)
				}
				o.length && c.each(o, Qa)
			}
			return this
		}
	});
	c.fragments = {};
	c.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		c.fn[a] = function(d) {
			var f = [];
			d = c(d);
			var e = this.length === 1 && this[0].parentNode;
			if (e && e.nodeType === 11 && e.childNodes.length === 1 && d.length === 1) {
				d[b](this[0]);
				return this
			} else {
				e = 0;
				for (var j = d.length; e < j; e++) {
					var i = (e > 0 ? this.clone(true) : this).get();
					c.fn[b].apply(c(d[e]), i);
					f = f.concat(i)
				}
				return this.pushStack(f, a, d.selector)
			}
		}
	});
	c.extend({
		clean: function(a, b, d, f) {
			b = b || s;
			if (typeof b.createElement === "undefined") b = b.ownerDocument || b[0] && b[0].ownerDocument || s;
			for (var e = [], j = 0, i;
				(i = a[j]) != null; j++) {
				if (typeof i === "number") i += "";
				if (i) {
					if (typeof i === "string" && !jb.test(i)) i = b.createTextNode(i);
					else if (typeof i === "string") {
						i = i.replace(Ka, Ma);
						var o = (La.exec(i) || ["",
								""
							])[1].toLowerCase(),
							k = F[o] || F._default,
							n = k[0],
							r = b.createElement("div");
						for (r.innerHTML = k[1] + i + k[2]; n--;) r = r.lastChild;
						if (!c.support.tbody) {
							n = ib.test(i);
							o = o === "table" && !n ? r.firstChild && r.firstChild.childNodes : k[1] === "<table>" && !n ? r.childNodes :
								[];
							for (k = o.length - 1; k >= 0; --k) c.nodeName(o[k], "tbody") && !o[k].childNodes.length && o[k].parentNode.removeChild(
								o[k])
						}!c.support.leadingWhitespace && V.test(i) && r.insertBefore(b.createTextNode(V.exec(i)[0]), r.firstChild);
						i = r.childNodes
					}
					if (i.nodeType) e.push(i);
					else e =
						c.merge(e, i)
				}
			}
			if (d)
				for (j = 0; e[j]; j++)
					if (f && c.nodeName(e[j], "script") && (!e[j].type || e[j].type.toLowerCase() === "text/javascript")) f.push(e[
						j].parentNode ? e[j].parentNode.removeChild(e[j]) : e[j]);
					else {
						e[j].nodeType === 1 && e.splice.apply(e, [j + 1, 0].concat(c.makeArray(e[j].getElementsByTagName("script"))));
						d.appendChild(e[j])
					} return e
		},
		cleanData: function(a) {
			for (var b, d, f = c.cache, e = c.event.special, j = c.support.deleteExpando, i = 0, o;
				(o = a[i]) != null; i++)
				if (d = o[c.expando]) {
					b = f[d];
					if (b.events)
						for (var k in b.events) e[k] ?
							c.event.remove(o, k) : Ca(o, k, b.handle);
					if (j) delete o[c.expando];
					else o.removeAttribute && o.removeAttribute(c.expando);
					delete f[d]
				}
		}
	});
	var kb = /z-?index|font-?weight|opacity|zoom|line-?height/i,
		Na = /alpha\([^)]*\)/,
		Oa = /opacity=([^)]*)/,
		ha = /float/i,
		ia = /-([a-z])/ig,
		lb = /([A-Z])/g,
		mb = /^-?\d+(?:px)?$/i,
		nb = /^-?\d/,
		ob = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		pb = ["Left", "Right"],
		qb = ["Top", "Bottom"],
		rb = s.defaultView && s.defaultView.getComputedStyle,
		Pa = c.support.cssFloat ? "cssFloat" : "styleFloat",
		ja =
		function(a, b) {
			return b.toUpperCase()
		};
	c.fn.css = function(a, b) {
		return X(this, a, b, true, function(d, f, e) {
			if (e === w) return c.curCSS(d, f);
			if (typeof e === "number" && !kb.test(f)) e += "px";
			c.style(d, f, e)
		})
	};
	c.extend({
		style: function(a, b, d) {
			if (!a || a.nodeType === 3 || a.nodeType === 8) return w;
			if ((b === "width" || b === "height") && parseFloat(d) < 0) d = w;
			var f = a.style || a,
				e = d !== w;
			if (!c.support.opacity && b === "opacity") {
				if (e) {
					f.zoom = 1;
					b = parseInt(d, 10) + "" === "NaN" ? "" : "alpha(opacity=" + d * 100 + ")";
					a = f.filter || c.curCSS(a, "filter") || "";
					f.filter =
						Na.test(a) ? a.replace(Na, b) : b
				}
				return f.filter && f.filter.indexOf("opacity=") >= 0 ? parseFloat(Oa.exec(f.filter)[1]) / 100 + "" : ""
			}
			if (ha.test(b)) b = Pa;
			b = b.replace(ia, ja);
			if (e) f[b] = d;
			return f[b]
		},
		css: function(a, b, d, f) {
			if (b === "width" || b === "height") {
				var e, j = b === "width" ? pb : qb;

				function i() {
					e = b === "width" ? a.offsetWidth : a.offsetHeight;
					f !== "border" && c.each(j, function() {
						f || (e -= parseFloat(c.curCSS(a, "padding" + this, true)) || 0);
						if (f === "margin") e += parseFloat(c.curCSS(a, "margin" + this, true)) || 0;
						else e -= parseFloat(c.curCSS(a,
							"border" + this + "Width", true)) || 0
					})
				}
				a.offsetWidth !== 0 ? i() : c.swap(a, ob, i);
				return Math.max(0, Math.round(e))
			}
			return c.curCSS(a, b, d)
		},
		curCSS: function(a, b, d) {
			var f, e = a.style;
			if (!c.support.opacity && b === "opacity" && a.currentStyle) {
				f = Oa.test(a.currentStyle.filter || "") ? parseFloat(RegExp.$1) / 100 + "" : "";
				return f === "" ? "1" : f
			}
			if (ha.test(b)) b = Pa;
			if (!d && e && e[b]) f = e[b];
			else if (rb) {
				if (ha.test(b)) b = "float";
				b = b.replace(lb, "-$1").toLowerCase();
				e = a.ownerDocument.defaultView;
				if (!e) return null;
				if (a = e.getComputedStyle(a, null)) f =
					a.getPropertyValue(b);
				if (b === "opacity" && f === "") f = "1"
			} else if (a.currentStyle) {
				d = b.replace(ia, ja);
				f = a.currentStyle[b] || a.currentStyle[d];
				if (!mb.test(f) && nb.test(f)) {
					b = e.left;
					var j = a.runtimeStyle.left;
					a.runtimeStyle.left = a.currentStyle.left;
					e.left = d === "fontSize" ? "1em" : f || 0;
					f = e.pixelLeft + "px";
					e.left = b;
					a.runtimeStyle.left = j
				}
			}
			return f
		},
		swap: function(a, b, d) {
			var f = {};
			for (var e in b) {
				f[e] = a.style[e];
				a.style[e] = b[e]
			}
			d.call(a);
			for (e in b) a.style[e] = f[e]
		}
	});
	if (c.expr && c.expr.filters) {
		c.expr.filters.hidden = function(a) {
			var b =
				a.offsetWidth,
				d = a.offsetHeight,
				f = a.nodeName.toLowerCase() === "tr";
			return b === 0 && d === 0 && !f ? true : b > 0 && d > 0 && !f ? false : c.curCSS(a, "display") === "none"
		};
		c.expr.filters.visible = function(a) {
			return !c.expr.filters.hidden(a)
		}
	}
	var sb = J(),
		tb = /<script(.|\s)*?\/script>/gi,
		ub = /select|textarea/i,
		vb = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,
		N = /=\?(&|$)/,
		ka = /\?/,
		wb = /(\?|&)_=.*?(&|$)/,
		xb = /^(\w+:)?\/\/([^\/?#]+)/,
		yb = /%20/g,
		zb = c.fn.load;
	c.fn.extend({
		load: function(a, b, d) {
			if (typeof a !==
				"string") return zb.call(this, a);
			else if (!this.length) return this;
			var f = a.indexOf(" ");
			if (f >= 0) {
				var e = a.slice(f, a.length);
				a = a.slice(0, f)
			}
			f = "GET";
			if (b)
				if (c.isFunction(b)) {
					d = b;
					b = null
				} else if (typeof b === "object") {
				b = c.param(b, c.ajaxSettings.traditional);
				f = "POST"
			}
			var j = this;
			c.ajax({
				url: a,
				type: f,
				dataType: "html",
				data: b,
				complete: function(i, o) {
					if (o === "success" || o === "notmodified") j.html(e ? c("<div />").append(i.responseText.replace(tb, "")).find(
						e) : i.responseText);
					d && j.each(d, [i.responseText, o, i])
				}
			});
			return this
		},
		serialize: function() {
			return c.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? c.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || ub.test(this.nodeName) || vb.test(this.type))
			}).map(function(a, b) {
				a = c(this).val();
				return a == null ? null : c.isArray(a) ? c.map(a, function(d) {
					return {
						name: b.name,
						value: d
					}
				}) : {
					name: b.name,
					value: a
				}
			}).get()
		}
	});
	c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
		function(a, b) {
			c.fn[b] = function(d) {
				return this.bind(b, d)
			}
		});
	c.extend({
		get: function(a, b, d, f) {
			if (c.isFunction(b)) {
				f = f || d;
				d = b;
				b = null
			}
			return c.ajax({
				type: "GET",
				url: a,
				data: b,
				success: d,
				dataType: f
			})
		},
		getScript: function(a, b) {
			return c.get(a, null, b, "script")
		},
		getJSON: function(a, b, d) {
			return c.get(a, b, d, "json")
		},
		post: function(a, b, d, f) {
			if (c.isFunction(b)) {
				f = f || d;
				d = b;
				b = {}
			}
			return c.ajax({
				type: "POST",
				url: a,
				data: b,
				success: d,
				dataType: f
			})
		},
		ajaxSetup: function(a) {
			c.extend(c.ajaxSettings, a)
		},
		ajaxSettings: {
			url: location.href,
			global: true,
			type: "GET",
			contentType: "application/x-www-form-urlencoded",
			processData: true,
			async: true,
			xhr: A.XMLHttpRequest && (A.location.protocol !== "file:" || !A.ActiveXObject) ? function() {
				return new A.XMLHttpRequest
			} : function() {
				try {
					return new A.ActiveXObject("Microsoft.XMLHTTP")
				} catch (a) {}
			},
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				script: "text/javascript, application/javascript",
				json: "application/json, text/javascript",
				text: "text/plain",
				_default: "*/*"
			}
		},
		lastModified: {},
		etag: {},
		ajax: function(a) {
			function b() {
				e.success &&
					e.success.call(k, o, i, x);
				e.global && f("ajaxSuccess", [x, e])
			}

			function d() {
				e.complete && e.complete.call(k, x, i);
				e.global && f("ajaxComplete", [x, e]);
				e.global && !--c.active && c.event.trigger("ajaxStop")
			}

			function f(q, p) {
				(e.context ? c(e.context) : c.event).trigger(q, p)
			}
			var e = c.extend(true, {}, c.ajaxSettings, a),
				j, i, o, k = a && a.context || e,
				n = e.type.toUpperCase();
			if (e.data && e.processData && typeof e.data !== "string") e.data = c.param(e.data, e.traditional);
			if (e.dataType === "jsonp") {
				if (n === "GET") N.test(e.url) || (e.url += (ka.test(e.url) ?
					"&" : "?") + (e.jsonp || "callback") + "=?");
				else if (!e.data || !N.test(e.data)) e.data = (e.data ? e.data + "&" : "") + (e.jsonp || "callback") + "=?";
				e.dataType = "json"
			}
			if (e.dataType === "json" && (e.data && N.test(e.data) || N.test(e.url))) {
				j = e.jsonpCallback || "jsonp" + sb++;
				if (e.data) e.data = (e.data + "").replace(N, "=" + j + "$1");
				e.url = e.url.replace(N, "=" + j + "$1");
				e.dataType = "script";
				A[j] = A[j] || function(q) {
					o = q;
					b();
					d();
					A[j] = w;
					try {
						delete A[j]
					} catch (p) {}
					z && z.removeChild(C)
				}
			}
			if (e.dataType === "script" && e.cache === null) e.cache = false;
			if (e.cache ===
				false && n === "GET") {
				var r = J(),
					u = e.url.replace(wb, "$1_=" + r + "$2");
				e.url = u + (u === e.url ? (ka.test(e.url) ? "&" : "?") + "_=" + r : "")
			}
			if (e.data && n === "GET") e.url += (ka.test(e.url) ? "&" : "?") + e.data;
			e.global && !c.active++ && c.event.trigger("ajaxStart");
			r = (r = xb.exec(e.url)) && (r[1] && r[1] !== location.protocol || r[2] !== location.host);
			if (e.dataType === "script" && n === "GET" && r) {
				var z = s.getElementsByTagName("head")[0] || s.documentElement,
					C = s.createElement("script");
				C.src = e.url;
				if (e.scriptCharset) C.charset = e.scriptCharset;
				if (!j) {
					var B =
						false;
					C.onload = C.onreadystatechange = function() {
						if (!B && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
							B = true;
							b();
							d();
							C.onload = C.onreadystatechange = null;
							z && C.parentNode && z.removeChild(C)
						}
					}
				}
				z.insertBefore(C, z.firstChild);
				return w
			}
			var E = false,
				x = e.xhr();
			if (x) {
				e.username ? x.open(n, e.url, e.async, e.username, e.password) : x.open(n, e.url, e.async);
				try {
					if (e.data || a && a.contentType) x.setRequestHeader("Content-Type", e.contentType);
					if (e.ifModified) {
						c.lastModified[e.url] && x.setRequestHeader("If-Modified-Since",
							c.lastModified[e.url]);
						c.etag[e.url] && x.setRequestHeader("If-None-Match", c.etag[e.url])
					}
					r || x.setRequestHeader("X-Requested-With", "XMLHttpRequest");
					x.setRequestHeader("Accept", e.dataType && e.accepts[e.dataType] ? e.accepts[e.dataType] + ", */*" : e.accepts
						._default)
				} catch (ga) {}
				if (e.beforeSend && e.beforeSend.call(k, x, e) === false) {
					e.global && !--c.active && c.event.trigger("ajaxStop");
					x.abort();
					return false
				}
				e.global && f("ajaxSend", [x, e]);
				var g = x.onreadystatechange = function(q) {
					if (!x || x.readyState === 0 || q === "abort") {
						E ||
							d();
						E = true;
						if (x) x.onreadystatechange = c.noop
					} else if (!E && x && (x.readyState === 4 || q === "timeout")) {
						E = true;
						x.onreadystatechange = c.noop;
						i = q === "timeout" ? "timeout" : !c.httpSuccess(x) ? "error" : e.ifModified && c.httpNotModified(x, e.url) ?
							"notmodified" : "success";
						var p;
						if (i === "success") try {
							o = c.httpData(x, e.dataType, e)
						} catch (v) {
							i = "parsererror";
							p = v
						}
						if (i === "success" || i === "notmodified") j || b();
						else c.handleError(e, x, i, p);
						d();
						q === "timeout" && x.abort();
						if (e.async) x = null
					}
				};
				try {
					var h = x.abort;
					x.abort = function() {
						x && h.call(x);
						g("abort")
					}
				} catch (l) {}
				e.async && e.timeout > 0 && setTimeout(function() {
					x && !E && g("timeout")
				}, e.timeout);
				try {
					x.send(n === "POST" || n === "PUT" || n === "DELETE" ? e.data : null)
				} catch (m) {
					c.handleError(e, x, null, m);
					d()
				}
				e.async || g();
				return x
			}
		},
		handleError: function(a, b, d, f) {
			if (a.error) a.error.call(a.context || a, b, d, f);
			if (a.global)(a.context ? c(a.context) : c.event).trigger("ajaxError", [b, a, f])
		},
		active: 0,
		httpSuccess: function(a) {
			try {
				return !a.status && location.protocol === "file:" || a.status >= 200 && a.status < 300 || a.status === 304 || a
					.status ===
					1223 || a.status === 0
			} catch (b) {}
			return false
		},
		httpNotModified: function(a, b) {
			var d = a.getResponseHeader("Last-Modified"),
				f = a.getResponseHeader("Etag");
			if (d) c.lastModified[b] = d;
			if (f) c.etag[b] = f;
			return a.status === 304 || a.status === 0
		},
		httpData: function(a, b, d) {
			var f = a.getResponseHeader("content-type") || "",
				e = b === "xml" || !b && f.indexOf("xml") >= 0;
			a = e ? a.responseXML : a.responseText;
			e && a.documentElement.nodeName === "parsererror" && c.error("parsererror");
			if (d && d.dataFilter) a = d.dataFilter(a, b);
			if (typeof a === "string")
				if (b ===
					"json" || !b && f.indexOf("json") >= 0) a = c.parseJSON(a);
				else if (b === "script" || !b && f.indexOf("javascript") >= 0) c.globalEval(a);
			return a
		},
		param: function(a, b) {
			function d(i, o) {
				if (c.isArray(o)) c.each(o, function(k, n) {
					b || /\[\]$/.test(i) ? f(i, n) : d(i + "[" + (typeof n === "object" || c.isArray(n) ? k : "") + "]", n)
				});
				else !b && o != null && typeof o === "object" ? c.each(o, function(k, n) {
					d(i + "[" + k + "]", n)
				}) : f(i, o)
			}

			function f(i, o) {
				o = c.isFunction(o) ? o() : o;
				e[e.length] = encodeURIComponent(i) + "=" + encodeURIComponent(o)
			}
			var e = [];
			if (b === w) b = c.ajaxSettings.traditional;
			if (c.isArray(a) || a.jquery) c.each(a, function() {
				f(this.name, this.value)
			});
			else
				for (var j in a) d(j, a[j]);
			return e.join("&").replace(yb, "+")
		}
	});
	var la = {},
		Ab = /toggle|show|hide/,
		Bb = /^([+-]=)?([\d+-.]+)(.*)$/,
		W, va = [
			["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
			["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
			["opacity"]
		];
	c.fn.extend({
		show: function(a, b) {
			if (a || a === 0) return this.animate(K("show", 3), a, b);
			else {
				a = 0;
				for (b = this.length; a < b; a++) {
					var d = c.data(this[a], "olddisplay");
					this[a].style.display = d || "";
					if (c.css(this[a], "display") === "none") {
						d = this[a].nodeName;
						var f;
						if (la[d]) f = la[d];
						else {
							var e = c("<" + d + " />").appendTo("body");
							f = e.css("display");
							if (f === "none") f = "block";
							e.remove();
							la[d] = f
						}
						c.data(this[a], "olddisplay", f)
					}
				}
				a = 0;
				for (b = this.length; a < b; a++) this[a].style.display = c.data(this[a], "olddisplay") || "";
				return this
			}
		},
		hide: function(a, b) {
			if (a || a === 0) return this.animate(K("hide", 3), a, b);
			else {
				a = 0;
				for (b = this.length; a < b; a++) {
					var d = c.data(this[a], "olddisplay");
					!d && d !== "none" && c.data(this[a],
						"olddisplay", c.css(this[a], "display"))
				}
				a = 0;
				for (b = this.length; a < b; a++) this[a].style.display = "none";
				return this
			}
		},
		_toggle: c.fn.toggle,
		toggle: function(a, b) {
			var d = typeof a === "boolean";
			if (c.isFunction(a) && c.isFunction(b)) this._toggle.apply(this, arguments);
			else a == null || d ? this.each(function() {
				var f = d ? a : c(this).is(":hidden");
				c(this)[f ? "show" : "hide"]()
			}) : this.animate(K("toggle", 3), a, b);
			return this
		},
		fadeTo: function(a, b, d) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity: b
			}, a, d)
		},
		animate: function(a, b, d, f) {
			var e = c.speed(b, d, f);
			if (c.isEmptyObject(a)) return this.each(e.complete);
			return this[e.queue === false ? "each" : "queue"](function() {
				var j = c.extend({}, e),
					i, o = this.nodeType === 1 && c(this).is(":hidden"),
					k = this;
				for (i in a) {
					var n = i.replace(ia, ja);
					if (i !== n) {
						a[n] = a[i];
						delete a[i];
						i = n
					}
					if (a[i] === "hide" && o || a[i] === "show" && !o) return j.complete.call(this);
					if ((i === "height" || i === "width") && this.style) {
						j.display = c.css(this, "display");
						j.overflow = this.style.overflow
					}
					if (c.isArray(a[i])) {
						(j.specialEasing =
							j.specialEasing || {})[i] = a[i][1];
						a[i] = a[i][0]
					}
				}
				if (j.overflow != null) this.style.overflow = "hidden";
				j.curAnim = c.extend({}, a);
				c.each(a, function(r, u) {
					var z = new c.fx(k, j, r);
					if (Ab.test(u)) z[u === "toggle" ? o ? "show" : "hide" : u](a);
					else {
						var C = Bb.exec(u),
							B = z.cur(true) || 0;
						if (C) {
							u = parseFloat(C[2]);
							var E = C[3] || "px";
							if (E !== "px") {
								k.style[r] = (u || 1) + E;
								B = (u || 1) / z.cur(true) * B;
								k.style[r] = B + E
							}
							if (C[1]) u = (C[1] === "-=" ? -1 : 1) * u + B;
							z.custom(B, u, E)
						} else z.custom(B, u, "")
					}
				});
				return true
			})
		},
		stop: function(a, b) {
			var d = c.timers;
			a && this.queue([]);
			this.each(function() {
				for (var f = d.length - 1; f >= 0; f--)
					if (d[f].elem === this) {
						b && d[f](true);
						d.splice(f, 1)
					}
			});
			b || this.dequeue();
			return this
		}
	});
	c.each({
		slideDown: K("show", 1),
		slideUp: K("hide", 1),
		slideToggle: K("toggle", 1),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		}
	}, function(a, b) {
		c.fn[a] = function(d, f) {
			return this.animate(b, d, f)
		}
	});
	c.extend({
		speed: function(a, b, d) {
			var f = a && typeof a === "object" ? a : {
				complete: d || !d && b || c.isFunction(a) && a,
				duration: a,
				easing: d && b || b && !c.isFunction(b) && b
			};
			f.duration = c.fx.off ? 0 : typeof f.duration ===
				"number" ? f.duration : c.fx.speeds[f.duration] || c.fx.speeds._default;
			f.old = f.complete;
			f.complete = function() {
				f.queue !== false && c(this).dequeue();
				c.isFunction(f.old) && f.old.call(this)
			};
			return f
		},
		easing: {
			linear: function(a, b, d, f) {
				return d + f * a
			},
			swing: function(a, b, d, f) {
				return (-Math.cos(a * Math.PI) / 2 + 0.5) * f + d
			}
		},
		timers: [],
		fx: function(a, b, d) {
			this.options = b;
			this.elem = a;
			this.prop = d;
			if (!b.orig) b.orig = {}
		}
	});
	c.fx.prototype = {
		update: function() {
			this.options.step && this.options.step.call(this.elem, this.now, this);
			(c.fx.step[this.prop] ||
				c.fx.step._default)(this);
			if ((this.prop === "height" || this.prop === "width") && this.elem.style) this.elem.style.display = "block"
		},
		cur: function(a) {
			if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[
				this.prop];
			return (a = parseFloat(c.css(this.elem, this.prop, a))) && a > -10000 ? a : parseFloat(c.curCSS(this.elem, this.prop)) ||
				0
		},
		custom: function(a, b, d) {
			function f(j) {
				return e.step(j)
			}
			this.startTime = J();
			this.start = a;
			this.end = b;
			this.unit = d || this.unit || "px";
			this.now = this.start;
			this.pos = this.state = 0;
			var e = this;
			f.elem = this.elem;
			if (f() && c.timers.push(f) && !W) W = setInterval(c.fx.tick, 13)
		},
		show: function() {
			this.options.orig[this.prop] = c.style(this.elem, this.prop);
			this.options.show = true;
			this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
			c(this.elem).show()
		},
		hide: function() {
			this.options.orig[this.prop] = c.style(this.elem, this.prop);
			this.options.hide = true;
			this.custom(this.cur(), 0)
		},
		step: function(a) {
			var b = J(),
				d = true;
			if (a || b >= this.options.duration + this.startTime) {
				this.now =
					this.end;
				this.pos = this.state = 1;
				this.update();
				this.options.curAnim[this.prop] = true;
				for (var f in this.options.curAnim)
					if (this.options.curAnim[f] !== true) d = false;
				if (d) {
					if (this.options.display != null) {
						this.elem.style.overflow = this.options.overflow;
						a = c.data(this.elem, "olddisplay");
						this.elem.style.display = a ? a : this.options.display;
						if (c.css(this.elem, "display") === "none") this.elem.style.display = "block"
					}
					this.options.hide && c(this.elem).hide();
					if (this.options.hide || this.options.show)
						for (var e in this.options.curAnim) c.style(this.elem,
							e, this.options.orig[e]);
					this.options.complete.call(this.elem)
				}
				return false
			} else {
				e = b - this.startTime;
				this.state = e / this.options.duration;
				a = this.options.easing || (c.easing.swing ? "swing" : "linear");
				this.pos = c.easing[this.options.specialEasing && this.options.specialEasing[this.prop] || a](this.state, e, 0,
					1, this.options.duration);
				this.now = this.start + (this.end - this.start) * this.pos;
				this.update()
			}
			return true
		}
	};
	c.extend(c.fx, {
		tick: function() {
			for (var a = c.timers, b = 0; b < a.length; b++) a[b]() || a.splice(b--, 1);
			a.length ||
				c.fx.stop()
		},
		stop: function() {
			clearInterval(W);
			W = null
		},
		speeds: {
			slow: 600,
			fast: 200,
			_default: 400
		},
		step: {
			opacity: function(a) {
				c.style(a.elem, "opacity", a.now)
			},
			_default: function(a) {
				if (a.elem.style && a.elem.style[a.prop] != null) a.elem.style[a.prop] = (a.prop === "width" || a.prop ===
					"height" ? Math.max(0, a.now) : a.now) + a.unit;
				else a.elem[a.prop] = a.now
			}
		}
	});
	if (c.expr && c.expr.filters) c.expr.filters.animated = function(a) {
		return c.grep(c.timers, function(b) {
			return a === b.elem
		}).length
	};
	c.fn.offset = "getBoundingClientRect" in s.documentElement ?
		function(a) {
			var b = this[0];
			if (a) return this.each(function(e) {
				c.offset.setOffset(this, a, e)
			});
			if (!b || !b.ownerDocument) return null;
			if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
			var d = b.getBoundingClientRect(),
				f = b.ownerDocument;
			b = f.body;
			f = f.documentElement;
			return {
				top: d.top + (self.pageYOffset || c.support.boxModel && f.scrollTop || b.scrollTop) - (f.clientTop || b.clientTop ||
					0),
				left: d.left + (self.pageXOffset || c.support.boxModel && f.scrollLeft || b.scrollLeft) - (f.clientLeft || b.clientLeft ||
					0)
			}
		} : function(a) {
			var b =
				this[0];
			if (a) return this.each(function(r) {
				c.offset.setOffset(this, a, r)
			});
			if (!b || !b.ownerDocument) return null;
			if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
			c.offset.initialize();
			var d = b.offsetParent,
				f = b,
				e = b.ownerDocument,
				j, i = e.documentElement,
				o = e.body;
			f = (e = e.defaultView) ? e.getComputedStyle(b, null) : b.currentStyle;
			for (var k = b.offsetTop, n = b.offsetLeft;
				(b = b.parentNode) && b !== o && b !== i;) {
				if (c.offset.supportsFixedPosition && f.position === "fixed") break;
				j = e ? e.getComputedStyle(b, null) : b.currentStyle;
				k -= b.scrollTop;
				n -= b.scrollLeft;
				if (b === d) {
					k += b.offsetTop;
					n += b.offsetLeft;
					if (c.offset.doesNotAddBorder && !(c.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(b.nodeName))) {
						k += parseFloat(j.borderTopWidth) || 0;
						n += parseFloat(j.borderLeftWidth) || 0
					}
					f = d;
					d = b.offsetParent
				}
				if (c.offset.subtractsBorderForOverflowNotVisible && j.overflow !== "visible") {
					k += parseFloat(j.borderTopWidth) || 0;
					n += parseFloat(j.borderLeftWidth) || 0
				}
				f = j
			}
			if (f.position === "relative" || f.position === "static") {
				k += o.offsetTop;
				n += o.offsetLeft
			}
			if (c.offset.supportsFixedPosition &&
				f.position === "fixed") {
				k += Math.max(i.scrollTop, o.scrollTop);
				n += Math.max(i.scrollLeft, o.scrollLeft)
			}
			return {
				top: k,
				left: n
			}
		};
	c.offset = {
		initialize: function() {
			var a = s.body,
				b = s.createElement("div"),
				d, f, e, j = parseFloat(c.curCSS(a, "marginTop", true)) || 0;
			c.extend(b.style, {
				position: "absolute",
				top: 0,
				left: 0,
				margin: 0,
				border: 0,
				width: "1px",
				height: "1px",
				visibility: "hidden"
			});
			b.innerHTML =
				"<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
			a.insertBefore(b, a.firstChild);
			d = b.firstChild;
			f = d.firstChild;
			e = d.nextSibling.firstChild.firstChild;
			this.doesNotAddBorder = f.offsetTop !== 5;
			this.doesAddBorderForTableAndCells = e.offsetTop === 5;
			f.style.position = "fixed";
			f.style.top = "20px";
			this.supportsFixedPosition = f.offsetTop === 20 || f.offsetTop === 15;
			f.style.position = f.style.top = "";
			d.style.overflow = "hidden";
			d.style.position = "relative";
			this.subtractsBorderForOverflowNotVisible = f.offsetTop === -5;
			this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== j;
			a.removeChild(b);
			c.offset.initialize = c.noop
		},
		bodyOffset: function(a) {
			var b = a.offsetTop,
				d = a.offsetLeft;
			c.offset.initialize();
			if (c.offset.doesNotIncludeMarginInBodyOffset) {
				b += parseFloat(c.curCSS(a, "marginTop", true)) || 0;
				d += parseFloat(c.curCSS(a, "marginLeft", true)) || 0
			}
			return {
				top: b,
				left: d
			}
		},
		setOffset: function(a, b, d) {
			if (/static/.test(c.curCSS(a, "position"))) a.style.position = "relative";
			var f = c(a),
				e = f.offset(),
				j = parseInt(c.curCSS(a, "top", true), 10) || 0,
				i = parseInt(c.curCSS(a, "left", true), 10) || 0;
			if (c.isFunction(b)) b = b.call(a,
				d, e);
			d = {
				top: b.top - e.top + j,
				left: b.left - e.left + i
			};
			"using" in b ? b.using.call(a, d) : f.css(d)
		}
	};
	c.fn.extend({
		position: function() {
			if (!this[0]) return null;
			var a = this[0],
				b = this.offsetParent(),
				d = this.offset(),
				f = /^body|html$/i.test(b[0].nodeName) ? {
					top: 0,
					left: 0
				} : b.offset();
			d.top -= parseFloat(c.curCSS(a, "marginTop", true)) || 0;
			d.left -= parseFloat(c.curCSS(a, "marginLeft", true)) || 0;
			f.top += parseFloat(c.curCSS(b[0], "borderTopWidth", true)) || 0;
			f.left += parseFloat(c.curCSS(b[0], "borderLeftWidth", true)) || 0;
			return {
				top: d.top -
					f.top,
				left: d.left - f.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var a = this.offsetParent || s.body; a && !/^body|html$/i.test(a.nodeName) && c.css(a, "position") ===
					"static";) a = a.offsetParent;
				return a
			})
		}
	});
	c.each(["Left", "Top"], function(a, b) {
		var d = "scroll" + b;
		c.fn[d] = function(f) {
			var e = this[0],
				j;
			if (!e) return null;
			if (f !== w) return this.each(function() {
				if (j = wa(this)) j.scrollTo(!a ? f : c(j).scrollLeft(), a ? f : c(j).scrollTop());
				else this[d] = f
			});
			else return (j = wa(e)) ? "pageXOffset" in j ? j[a ? "pageYOffset" :
				"pageXOffset"] : c.support.boxModel && j.document.documentElement[d] || j.document.body[d] : e[d]
		}
	});
	c.each(["Height", "Width"], function(a, b) {
		var d = b.toLowerCase();
		c.fn["inner" + b] = function() {
			return this[0] ? c.css(this[0], d, false, "padding") : null
		};
		c.fn["outer" + b] = function(f) {
			return this[0] ? c.css(this[0], d, false, f ? "margin" : "border") : null
		};
		c.fn[d] = function(f) {
			var e = this[0];
			if (!e) return f == null ? null : this;
			if (c.isFunction(f)) return this.each(function(j) {
				var i = c(this);
				i[d](f.call(this, j, i[d]()))
			});
			return "scrollTo" in
				e && e.document ? e.document.compatMode === "CSS1Compat" && e.document.documentElement["client" + b] || e.document
				.body["client" + b] : e.nodeType === 9 ? Math.max(e.documentElement["client" + b], e.body["scroll" + b], e.documentElement[
					"scroll" + b], e.body["offset" + b], e.documentElement["offset" + b]) : f === w ? c.css(e, d) : this.css(d,
					typeof f === "string" ? f : f + "px")
		}
	});
	A.jQuery = A.$ = c
})(window);
