function d3_target(e) {
	return e.target
}
function d3_source(e) {
	return e.source
}
function d3_class(e, t) {
	try {
		for (var n in t) Object.defineProperty(e.prototype, n, {
				value: t[n],
				enumerable: !1
			})
	} catch (r) {
		e.prototype = t
	}
}
function d3_arrayCopy(e) {
	for (var t = -1, n = e.length, r = []; n > ++t;) r.push(e[t]);
	return r
}
function d3_arraySlice(e) {
	return Array.prototype.slice.call(e)
}
function d3_Map() {}
function d3_identity(e) {
	return e
}
function d3_true() {
	return !0
}
function d3_functor(e) {
	return "function" == typeof e ? e : function() {
		return e
	}
}
function d3_rebind(e, t, n) {
	return function() {
		var r = n.apply(t, arguments);
		return arguments.length ? e : r
	}
}
function d3_number(e) {
	return null != e && !isNaN(e)
}
function d3_zipLength(e) {
	return e.length
}
function d3_collapse(e) {
	return e.trim().replace(/\s+/g, " ")
}
function d3_range_integerScale(e) {
	for (var t = 1; e * t % 1;) t *= 10;
	return t
}
function d3_xhr_fixCallback(e) {
	return 1 === e.length ? function(t, n) {
		e(null == t ? n : null)
	} : e
}
function d3_text(e) {
	return e.responseText
}
function d3_json(e) {
	return JSON.parse(e.responseText)
}
function d3_html(e) {
	var t = d3_document.createRange();
	return t.selectNode(d3_document.body), t.createContextualFragment(e.responseText)
}
function d3_xml(e) {
	return e.responseXML
}
function d3_dispatch() {}
function d3_dispatch_event(e) {
	function t() {
		for (var t, r = n, i = -1, o = r.length; o > ++i;)(t = r[i].on) && t.apply(this, arguments);
		return e
	}
	var n = [],
		r = new d3_Map;
	return t.on = function(t, i) {
		var o, s = r.get(t);
		return 2 > arguments.length ? s && s.on : (s && (s.on = null, n = n.slice(0, o = n.indexOf(s)).concat(n.slice(o + 1)), r.remove(t)), i && n.push(r.set(t, {
			on: i
		})), e)
	}, t
}
function d3_format_precision(e, t) {
	return t - (e ? Math.ceil(Math.log(e) / Math.LN10) : 1)
}
function d3_format_typeDefault(e) {
	return e + ""
}
function d3_formatPrefix(e, t) {
	var n = Math.pow(10, 3 * Math.abs(8 - t));
	return {
		scale: t > 8 ? function(e) {
			return e / n
		} : function(e) {
			return e * n
		},
		symbol: e
	}
}
function d3_ease_clamp(e) {
	return function(t) {
		return 0 >= t ? 0 : t >= 1 ? 1 : e(t)
	}
}
function d3_ease_reverse(e) {
	return function(t) {
		return 1 - e(1 - t)
	}
}
function d3_ease_reflect(e) {
	return function(t) {
		return .5 * (.5 > t ? e(2 * t) : 2 - e(2 - 2 * t))
	}
}
function d3_ease_quad(e) {
	return e * e
}
function d3_ease_cubic(e) {
	return e * e * e
}
function d3_ease_cubicInOut(e) {
	if (0 >= e) return 0;
	if (e >= 1) return 1;
	var t = e * e,
		n = t * e;
	return 4 * (.5 > e ? n : 3 * (e - t) + n - .75)
}
function d3_ease_poly(e) {
	return function(t) {
		return Math.pow(t, e)
	}
}
function d3_ease_sin(e) {
	return 1 - Math.cos(e * π/2)}function d3_ease_exp(e){return Math.pow(2,10*(e-1))}function d3_ease_circle(e){return 1-Math.sqrt(1-e*e)}function d3_ease_elastic(e,t){var n;return 2>arguments.length&&(t=.45),arguments.length?n=t/ (2 * π) * Math.asin(1 / e): (e = 1, n = t / 4), function(r) {
		return 1 + e * Math.pow(2, 10 * -r) * Math.sin(2 * (r - n) * π/t)}}function d3_ease_back(e){return e||(e=1.70158),function(t){return t*t*((e+1)*t-e)}}function d3_ease_bounce(e){return 1/2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
		}
		function d3_eventCancel() {
			d3.event.stopPropagation(), d3.event.preventDefault()
		}
		function d3_eventSource() {
			for (var e, t = d3.event; e = t.sourceEvent;) t = e;
			return t
		}
		function d3_eventDispatch(e) {
			for (var t = new d3_dispatch, n = 0, r = arguments.length; r > ++n;) t[arguments[n]] = d3_dispatch_event(t);
			return t.of = function(n, r) {
				return function(i) {
					try {
						var o = i.sourceEvent = d3.event;
						i.target = e, d3.event = i, t[i.type].apply(n, r)
					} finally {
						d3.event = o
					}
				}
			}, t
		}
		function d3_transform(e) {
			var t = [e.a, e.b],
				n = [e.c, e.d],
				r = d3_transformNormalize(t),
				i = d3_transformDot(t, n),
				o = d3_transformNormalize(d3_transformCombine(n, t, -i)) || 0;
			t[0] * n[1] < n[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-n[0], n[1])) * d3_degrees, this.translate = [e.e, e.f], this.scale = [r, o], this.skew = o ? Math.atan2(i, o) * d3_degrees : 0
		}
		function d3_transformDot(e, t) {
			return e[0] * t[0] + e[1] * t[1]
		}
		function d3_transformNormalize(e) {
			var t = Math.sqrt(d3_transformDot(e, e));
			return t && (e[0] /= t, e[1] /= t), t
		}
		function d3_transformCombine(e, t, n) {
			return e[0] += n * t[0], e[1] += n * t[1], e
		}
		function d3_interpolateByName(e) {
			return "transform" == e ? d3.interpolateTransform : d3.interpolate
		}
		function d3_uninterpolateNumber(e, t) {
			return t = t - (e = +e) ? 1 / (t - e) : 0,
			function(n) {
				return (n - e) * t
			}
		}
		function d3_uninterpolateClamp(e, t) {
			return t = t - (e = +e) ? 1 / (t - e) : 0,
			function(n) {
				return Math.max(0, Math.min(1, (n - e) * t))
			}
		}
		function d3_Color() {}
		function d3_rgb(e, t, n) {
			return new d3_Rgb(e, t, n)
		}
		function d3_Rgb(e, t, n) {
			this.r = e, this.g = t, this.b = n
		}
		function d3_rgb_hex(e) {
			return 16 > e ? "0" + Math.max(0, e).toString(16) : Math.min(255, e).toString(16)
		}
		function d3_rgb_parse(e, t, n) {
			var r, i, o, s = 0,
				a = 0,
				l = 0;
			if (r = /([a-z]+)\((.*)\)/i.exec(e)) switch (i = r[2].split(","), r[1]) {
					case "hsl":
						return n(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
					case "rgb":
						return t(d3_rgb_parseNumber(i[0]), d3_rgb_parseNumber(i[1]), d3_rgb_parseNumber(i[2]))
			}
			return (o = d3_rgb_names.get(e)) ? t(o.r, o.g, o.b) : (null != e && "#" === e.charAt(0) && (4 === e.length ? (s = e.charAt(1), s += s, a = e.charAt(2), a += a, l = e.charAt(3), l += l) : 7 === e.length && (s = e.substring(1, 3), a = e.substring(3, 5), l = e.substring(5, 7)), s = parseInt(s, 16), a = parseInt(a, 16), l = parseInt(l, 16)), t(s, a, l))
		}
		function d3_rgb_hsl(e, t, n) {
			var r, i, o = Math.min(e /= 255, t /= 255, n /= 255),
				s = Math.max(e, t, n),
				a = s - o,
				l = (s + o) / 2;
			return a ? (i = .5 > l ? a / (s + o) : a / (2 - s - o), r = e == s ? (t - n) / a + (n > t ? 6 : 0) : t == s ? (n - e) / a + 2 : (e - t) / a + 4, r *= 60) : i = r = 0, d3_hsl(r, i, l)
		}
		function d3_rgb_lab(e, t, n) {
			e = d3_rgb_xyz(e), t = d3_rgb_xyz(t), n = d3_rgb_xyz(n);
			var r = d3_xyz_lab((.4124564 * e + .3575761 * t + .1804375 * n) / d3_lab_X),
				i = d3_xyz_lab((.2126729 * e + .7151522 * t + .072175 * n) / d3_lab_Y),
				o = d3_xyz_lab((.0193339 * e + .119192 * t + .9503041 * n) / d3_lab_Z);
			return d3_lab(116 * i - 16, 500 * (r - i), 200 * (i - o))
		}
		function d3_rgb_xyz(e) {
			return .04045 >= (e /= 255) ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
		}
		function d3_rgb_parseNumber(e) {
			var t = parseFloat(e);
			return "%" === e.charAt(e.length - 1) ? Math.round(2.55 * t) : t
		}
		function d3_hsl(e, t, n) {
			return new d3_Hsl(e, t, n)
		}
		function d3_Hsl(e, t, n) {
			this.h = e, this.s = t, this.l = n
		}
		function d3_hsl_rgb(e, t, n) {
			function r(e) {
				return e > 360 ? e -= 360 : 0 > e && (e += 360), 60 > e ? o + (s - o) * e / 60 : 180 > e ? s : 240 > e ? o + (s - o) * (240 - e) / 60 : o
			}
			function i(e) {
				return Math.round(255 * r(e))
			}
			var o, s;
			return e %= 360, 0 > e && (e += 360), t = 0 > t ? 0 : t > 1 ? 1 : t, n = 0 > n ? 0 : n > 1 ? 1 : n, s = .5 >= n ? n * (1 + t) : n + t - n * t, o = 2 * n - s, d3_rgb(i(e + 120), i(e), i(e - 120))
		}
		function d3_hcl(e, t, n) {
			return new d3_Hcl(e, t, n)
		}
		function d3_Hcl(e, t, n) {
			this.h = e, this.c = t, this.l = n
		}
		function d3_hcl_lab(e, t, n) {
			return d3_lab(n, Math.cos(e *= d3_radians) * t, Math.sin(e) * t)
		}
		function d3_lab(e, t, n) {
			return new d3_Lab(e, t, n)
		}
		function d3_Lab(e, t, n) {
			this.l = e, this.a = t, this.b = n
		}
		function d3_lab_rgb(e, t, n) {
			var r = (e + 16) / 116,
				i = r + t / 500,
				o = r - n / 200;
			return i = d3_lab_xyz(i) * d3_lab_X, r = d3_lab_xyz(r) * d3_lab_Y, o = d3_lab_xyz(o) * d3_lab_Z, d3_rgb(d3_xyz_rgb(3.2404542 * i - 1.5371385 * r - .4985314 * o), d3_xyz_rgb(-.969266 * i + 1.8760108 * r + .041556 * o), d3_xyz_rgb(.0556434 * i - .2040259 * r + 1.0572252 * o))
		}
		function d3_lab_hcl(e, t, n) {
			return d3_hcl(180 * (Math.atan2(n, t) / π), Math.sqrt(t * t + n * n), e)
		}
		function d3_lab_xyz(e) {
			return e > .206893034 ? e * e * e : (e - 4 / 29) / 7.787037
		}
		function d3_xyz_lab(e) {
			return e > .008856 ? Math.pow(e, 1 / 3) : 7.787037 * e + 4 / 29
		}
		function d3_xyz_rgb(e) {
			return Math.round(255 * (.00304 >= e ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055))
		}
		function d3_selection(e) {
			return d3_arraySubclass(e, d3_selectionPrototype), e
		}
		function d3_selection_selector(e) {
			return function() {
				return d3_select(e, this)
			}
		}
		function d3_selection_selectorAll(e) {
			return function() {
				return d3_selectAll(e, this)
			}
		}
		function d3_selection_attr(e, t) {
			function n() {
				this.removeAttribute(e)
			}
			function r() {
				this.removeAttributeNS(e.space, e.local)
			}
			function i() {
				this.setAttribute(e, t)
			}
			function o() {
				this.setAttributeNS(e.space, e.local, t)
			}
			function s() {
				var n = t.apply(this, arguments);
				null == n ? this.removeAttribute(e) : this.setAttribute(e, n)
			}
			function a() {
				var n = t.apply(this, arguments);
				null == n ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n)
			}
			return e = d3.ns.qualify(e), null == t ? e.local ? r : n : "function" == typeof t ? e.local ? a : s : e.local ? o : i
		}
		function d3_selection_classedRe(e) {
			return RegExp("(?:^|\\s+)" + d3.requote(e) + "(?:\\s+|$)", "g")
		}
		function d3_selection_classed(e, t) {
			function n() {
				for (var n = -1; i > ++n;) e[n](this, t)
			}
			function r() {
				for (var n = -1, r = t.apply(this, arguments); i > ++n;) e[n](this, r)
			}
			e = e.trim().split(/\s+/).map(d3_selection_classedName);
			var i = e.length;
			return "function" == typeof t ? r : n
		}
		function d3_selection_classedName(e) {
			var t = d3_selection_classedRe(e);
			return function(n, r) {
				if (i = n.classList) return r ? i.add(e) : i.remove(e);
				var i = n.className,
					o = null != i.baseVal,
					s = o ? i.baseVal : i;
				r ? (t.lastIndex = 0, t.test(s) || (s = d3_collapse(s + " " + e), o ? i.baseVal = s : n.className = s)) : s && (s = d3_collapse(s.replace(t, " ")), o ? i.baseVal = s : n.className = s)
			}
		}
		function d3_selection_style(e, t, n) {
			function r() {
				this.style.removeProperty(e)
			}
			function i() {
				this.style.setProperty(e, t, n)
			}
			function o() {
				var r = t.apply(this, arguments);
				null == r ? this.style.removeProperty(e) : this.style.setProperty(e, r, n)
			}
			return null == t ? r : "function" == typeof t ? o : i
		}
		function d3_selection_property(e, t) {
			function n() {
				delete this[e]
			}
			function r() {
				this[e] = t
			}
			function i() {
				var n = t.apply(this, arguments);
				null == n ? delete this[e] : this[e] = n
			}
			return null == t ? n : "function" == typeof t ? i : r
		}
		function d3_selection_dataNode(e) {
			return {
				__data__: e
			}
		}
		function d3_selection_filter(e) {
			return function() {
				return d3_selectMatches(this, e)
			}
		}
		function d3_selection_sortComparator(e) {
			return arguments.length || (e = d3.ascending),
			function(t, n) {
				return !t - !n || e(t.__data__, n.__data__)
			}
		}
		function d3_selection_on(e, t, n) {
			function r() {
				var t = this[o];
				t && (this.removeEventListener(e, t, t.$), delete this[o])
			}
			function i() {
				function i(e) {
					var n = d3.event;
					d3.event = e, a[0] = s.__data__;
					try {
						t.apply(s, a)
					} finally {
						d3.event = n
					}
				}
				var s = this,
					a = d3_array(arguments);
				r.call(this), this.addEventListener(e, this[o] = i, i.$ = n), i._ = t
			}
			var o = "__on" + e,
				s = e.indexOf(".");
			return s > 0 && (e = e.substring(0, s)), t ? i : r
		}
		function d3_selection_each(e, t) {
			for (var n = 0, r = e.length; r > n; n++) for (var i, o = e[n], s = 0, a = o.length; a > s; s++)(i = o[s]) && t(i, s, n);
			return e
		}
		function d3_selection_enter(e) {
			return d3_arraySubclass(e, d3_selection_enterPrototype), e
		}
		function d3_transition(e, t) {
			return d3_arraySubclass(e, d3_transitionPrototype), e.id = t, e
		}
		function d3_transitionNode(e, t, n, r) {
			var i = e.__transition__ || (e.__transition__ = {
				active: 0,
				count: 0
			}),
				o = i[n];
			if (!o) {
				var s = r.time;
				return o = i[n] = {
					tween: new d3_Map,
					event: d3.dispatch("start", "end"),
					time: s,
					ease: r.ease,
					delay: r.delay,
					duration: r.duration
				}, ++i.count, d3.timer(function(r) {
					function a(r) {
						return i.active > n ? c() : (i.active = n, d.start.call(e, u, t), o.tween.forEach(function(n, r) {
							(r = r.call(e, u, t)) && g.push(r)
						}), l(r) || d3.timer(l, 0, s), 1)
					}
					function l(r) {
						if (i.active !== n) return c();
						for (var o = (r - f) / p, s = h(o), a = g.length; a > 0;) g[--a].call(e, s);
						return o >= 1 ? (c(), d.end.call(e, u, t), 1) : void 0
					}
					function c() {
						return --i.count ? delete i[n] : delete e.__transition__, 1
					}
					var u = e.__data__,
						h = o.ease,
						d = o.event,
						f = o.delay,
						p = o.duration,
						g = [];
					return r >= f ? a(r) : d3.timer(a, f, s), 1
				}, 0, s), o
			}
		}
		function d3_transition_text(e) {
			return null == e && (e = ""),
			function() {
				this.textContent = e
			}
		}
		function d3_transition_tween(e, t, n, r) {
			var i = e.id;
			return d3_selection_each(e, "function" == typeof n ? function(e, o, s) {
				e.__transition__[i].tween.set(t, r(n.call(e, e.__data__, o, s)))
			} : (n = r(n), function(e) {
				e.__transition__[i].tween.set(t, n)
			}))
		}
		function d3_timer_step() {
			for (var e, t = Date.now(), n = d3_timer_queue; n;) e = t - n.then, e >= n.delay && (n.flush = n.callback(e)), n = n.next;
			var r = d3_timer_flush() - t;
			r > 24 ? (isFinite(r) && (clearTimeout(d3_timer_timeout), d3_timer_timeout = setTimeout(d3_timer_step, r)), d3_timer_interval = 0) : (d3_timer_interval = 1, d3_timer_frame(d3_timer_step))
		}
		function d3_timer_flush() {
			for (var e = null, t = d3_timer_queue, n = 1 / 0; t;) t.flush ? (delete d3_timer_byId[t.callback.id], t = e ? e.next = t.next : d3_timer_queue = t.next) : (n = Math.min(n, t.then + t.delay), t = (e = t).next);
			return n
		}
		function d3_mousePoint(e, t) {
			var n = e.ownerSVGElement || e;
			if (n.createSVGPoint) {
				var r = n.createSVGPoint();
				if (0 > d3_mouse_bug44083 && (d3_window.scrollX || d3_window.scrollY)) {
					n = d3.select(d3_document.body).append("svg").style("position", "absolute").style("top", 0).style("left", 0);
					var i = n[0][0].getScreenCTM();
					d3_mouse_bug44083 = !(i.f || i.e), n.remove()
				}
				return d3_mouse_bug44083 ? (r.x = t.pageX, r.y = t.pageY) : (r.x = t.clientX, r.y = t.clientY), r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y]
			}
			var o = e.getBoundingClientRect();
			return [t.clientX - o.left - e.clientLeft, t.clientY - o.top - e.clientTop]
		}
		function d3_noop() {}(function() {
			var e = this,
				t = e._,
				n = {}, r = Array.prototype,
				i = Object.prototype,
				o = Function.prototype,
				s = r.push,
				a = r.slice,
				l = r.concat,
				c = i.toString,
				u = i.hasOwnProperty,
				h = r.forEach,
				d = r.map,
				f = r.reduce,
				p = r.reduceRight,
				g = r.filter,
				m = r.every,
				v = r.some,
				A = r.indexOf,
				y = r.lastIndexOf,
				C = Array.isArray,
				E = Object.keys,
				F = o.bind,
				w = function(e) {
					return e instanceof w ? e : this instanceof w ? (this._wrapped = e, void 0) : new w(e)
				};
			"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = w), exports._ = w) : e._ = w, w.VERSION = "1.4.3";
			var b = w.each = w.forEach = function(e, t, r) {
				if (null != e) if (h && e.forEach === h) e.forEach(t, r);
					else
				if (e.length === +e.length) {
					for (var i = 0, o = e.length; o > i; i++) if (t.call(r, e[i], i, e) === n) return
				} else for (var s in e) if (w.has(e, s) && t.call(r, e[s], s, e) === n) return
			};
			w.map = w.collect = function(e, t, n) {
				var r = [];
				return null == e ? r : d && e.map === d ? e.map(t, n) : (b(e, function(e, i, o) {
					r[r.length] = t.call(n, e, i, o)
				}), r)
			};
			var $ = "Reduce of empty array with no initial value";
			w.reduce = w.foldl = w.inject = function(e, t, n, r) {
				var i = arguments.length > 2;
				if (null == e && (e = []), f && e.reduce === f) return r && (t = w.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
				if (b(e, function(e, o, s) {
					i ? n = t.call(r, n, e, o, s) : (n = e, i = !0)
				}), !i) throw new TypeError($);
				return n
			}, w.reduceRight = w.foldr = function(e, t, n, r) {
				var i = arguments.length > 2;
				if (null == e && (e = []), p && e.reduceRight === p) return r && (t = w.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
				var o = e.length;
				if (o !== +o) {
					var s = w.keys(e);
					o = s.length
				}
				if (b(e, function(a, l, c) {
					l = s ? s[--o] : --o, i ? n = t.call(r, n, e[l], l, c) : (n = e[l], i = !0)
				}), !i) throw new TypeError($);
				return n
			}, w.find = w.detect = function(e, t, n) {
				var r;
				return x(e, function(e, i, o) {
					return t.call(n, e, i, o) ? (r = e, !0) : void 0
				}), r
			}, w.filter = w.select = function(e, t, n) {
				var r = [];
				return null == e ? r : g && e.filter === g ? e.filter(t, n) : (b(e, function(e, i, o) {
					t.call(n, e, i, o) && (r[r.length] = e)
				}), r)
			}, w.reject = function(e, t, n) {
				return w.filter(e, function(e, r, i) {
					return !t.call(n, e, r, i)
				}, n)
			}, w.every = w.all = function(e, t, r) {
				t || (t = w.identity);
				var i = !0;
				return null == e ? i : m && e.every === m ? e.every(t, r) : (b(e, function(e, o, s) {
					return (i = i && t.call(r, e, o, s)) ? void 0 : n
				}), !! i)
			};
			var x = w.some = w.any = function(e, t, r) {
				t || (t = w.identity);
				var i = !1;
				return null == e ? i : v && e.some === v ? e.some(t, r) : (b(e, function(e, o, s) {
					return i || (i = t.call(r, e, o, s)) ? n : void 0
				}), !! i)
			};
			w.contains = w.include = function(e, t) {
				return null == e ? !1 : A && e.indexOf === A ? -1 != e.indexOf(t) : x(e, function(e) {
					return e === t
				})
			}, w.invoke = function(e, t) {
				var n = a.call(arguments, 2);
				return w.map(e, function(e) {
					return (w.isFunction(t) ? t : e[t]).apply(e, n)
				})
			}, w.pluck = function(e, t) {
				return w.map(e, function(e) {
					return e[t]
				})
			}, w.where = function(e, t) {
				return w.isEmpty(t) ? [] : w.filter(e, function(e) {
					for (var n in t) if (t[n] !== e[n]) return !1;
					return !0
				})
			}, w.max = function(e, t, n) {
				if (!t && w.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.max.apply(Math, e);
				if (!t && w.isEmpty(e)) return -1 / 0;
				var r = {
					computed: -1 / 0,
					value: -1 / 0
				};
				return b(e, function(e, i, o) {
					var s = t ? t.call(n, e, i, o) : e;
					s >= r.computed && (r = {
						value: e,
						computed: s
					})
				}), r.value
			}, w.min = function(e, t, n) {
				if (!t && w.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.min.apply(Math, e);
				if (!t && w.isEmpty(e)) return 1 / 0;
				var r = {
					computed: 1 / 0,
					value: 1 / 0
				};
				return b(e, function(e, i, o) {
					var s = t ? t.call(n, e, i, o) : e;
					r.computed > s && (r = {
						value: e,
						computed: s
					})
				}), r.value
			}, w.shuffle = function(e) {
				var t, n = 0,
					r = [];
				return b(e, function(e) {
					t = w.random(n++), r[n - 1] = r[t], r[t] = e
				}), r
			};
			var D = function(e) {
				return w.isFunction(e) ? e : function(t) {
					return t[e]
				}
			};
			w.sortBy = function(e, t, n) {
				var r = D(t);
				return w.pluck(w.map(e, function(e, t, i) {
					return {
						value: e,
						index: t,
						criteria: r.call(n, e, t, i)
					}
				}).sort(function(e, t) {
					var n = e.criteria,
						r = t.criteria;
					if (n !== r) {
						if (n > r || void 0 === n) return 1;
						if (r > n || void 0 === r) return -1
					}
					return e.index < t.index ? -1 : 1
				}), "value")
			};
			var B = function(e, t, n, r) {
				var i = {}, o = D(t || w.identity);
				return b(e, function(t, s) {
					var a = o.call(n, t, s, e);
					r(i, a, t)
				}), i
			};
			w.groupBy = function(e, t, n) {
				return B(e, t, n, function(e, t, n) {
					(w.has(e, t) ? e[t] : e[t] = []).push(n)
				})
			}, w.countBy = function(e, t, n) {
				return B(e, t, n, function(e, t) {
					w.has(e, t) || (e[t] = 0), e[t]++
				})
			}, w.sortedIndex = function(e, t, n, r) {
				n = null == n ? w.identity : D(n);
				for (var i = n.call(r, t), o = 0, s = e.length; s > o;) {
					var a = o + s >>> 1;
					i > n.call(r, e[a]) ? o = a + 1 : s = a
				}
				return o
			}, w.toArray = function(e) {
				return e ? w.isArray(e) ? a.call(e) : e.length === +e.length ? w.map(e, w.identity) : w.values(e) : []
			}, w.size = function(e) {
				return null == e ? 0 : e.length === +e.length ? e.length : w.keys(e).length
			}, w.first = w.head = w.take = function(e, t, n) {
				return null == e ? void 0 : null == t || n ? e[0] : a.call(e, 0, t)
			}, w.initial = function(e, t, n) {
				return a.call(e, 0, e.length - (null == t || n ? 1 : t))
			}, w.last = function(e, t, n) {
				return null == e ? void 0 : null == t || n ? e[e.length - 1] : a.call(e, Math.max(e.length - t, 0))
			}, w.rest = w.tail = w.drop = function(e, t, n) {
				return a.call(e, null == t || n ? 1 : t)
			}, w.compact = function(e) {
				return w.filter(e, w.identity)
			};
			var _ = function(e, t, n) {
				return b(e, function(e) {
					w.isArray(e) ? t ? s.apply(n, e) : _(e, t, n) : n.push(e)
				}), n
			};
			w.flatten = function(e, t) {
				return _(e, t, [])
			}, w.without = function(e) {
				return w.difference(e, a.call(arguments, 1))
			}, w.uniq = w.unique = function(e, t, n, r) {
				w.isFunction(t) && (r = n, n = t, t = !1);
				var i = n ? w.map(e, n, r) : e,
					o = [],
					s = [];
				return b(i, function(n, r) {
					(t ? r && s[s.length - 1] === n : w.contains(s, n)) || (s.push(n), o.push(e[r]))
				}), o
			}, w.union = function() {
				return w.uniq(l.apply(r, arguments))
			}, w.intersection = function(e) {
				var t = a.call(arguments, 1);
				return w.filter(w.uniq(e), function(e) {
					return w.every(t, function(t) {
						return w.indexOf(t, e) >= 0
					})
				})
			}, w.difference = function(e) {
				var t = l.apply(r, a.call(arguments, 1));
				return w.filter(e, function(e) {
					return !w.contains(t, e)
				})
			}, w.zip = function() {
				for (var e = a.call(arguments), t = w.max(w.pluck(e, "length")), n = Array(t), r = 0; t > r; r++) n[r] = w.pluck(e, "" + r);
				return n
			}, w.object = function(e, t) {
				if (null == e) return {};
				for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
				return n
			}, w.indexOf = function(e, t, n) {
				if (null == e) return -1;
				var r = 0,
					i = e.length;
				if (n) {
					if ("number" != typeof n) return r = w.sortedIndex(e, t), e[r] === t ? r : -1;
					r = 0 > n ? Math.max(0, i + n) : n
				}
				if (A && e.indexOf === A) return e.indexOf(t, n);
				for (; i > r; r++) if (e[r] === t) return r;
				return -1
			}, w.lastIndexOf = function(e, t, n) {
				if (null == e) return -1;
				var r = null != n;
				if (y && e.lastIndexOf === y) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
				for (var i = r ? n : e.length; i--;) if (e[i] === t) return i;
				return -1
			}, w.range = function(e, t, n) {
				1 >= arguments.length && (t = e || 0, e = 0), n = arguments[2] || 1;
				for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, o = Array(r); r > i;) o[i++] = e, e += n;
				return o
			};
			var S = function() {};
			w.bind = function(e, t) {
				var n, r;
				if (e.bind === F && F) return F.apply(e, a.call(arguments, 1));
				if (!w.isFunction(e)) throw new TypeError;
				return n = a.call(arguments, 2), r = function() {
					if (!(this instanceof r)) return e.apply(t, n.concat(a.call(arguments)));
					S.prototype = e.prototype;
					var i = new S;
					S.prototype = null;
					var o = e.apply(i, n.concat(a.call(arguments)));
					return Object(o) === o ? o : i
				}
			}, w.bindAll = function(e) {
				var t = a.call(arguments, 1);
				return 0 == t.length && (t = w.functions(e)), b(t, function(t) {
					e[t] = w.bind(e[t], e)
				}), e
			}, w.memoize = function(e, t) {
				var n = {};
				return t || (t = w.identity),
				function() {
					var r = t.apply(this, arguments);
					return w.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
				}
			}, w.delay = function(e, t) {
				var n = a.call(arguments, 2);
				return setTimeout(function() {
					return e.apply(null, n)
				}, t)
			}, w.defer = function(e) {
				return w.delay.apply(w, [e, 1].concat(a.call(arguments, 1)))
			}, w.throttle = function(e, t) {
				var n, r, i, o, s = 0,
					a = function() {
						s = new Date, i = null, o = e.apply(n, r)
					};
				return function() {
					var l = new Date,
						c = t - (l - s);
					return n = this, r = arguments, 0 >= c ? (clearTimeout(i), i = null, s = l, o = e.apply(n, r)) : i || (i = setTimeout(a, c)), o
				}
			}, w.debounce = function(e, t, n) {
				var r, i;
				return function() {
					var o = this,
						s = arguments,
						a = function() {
							r = null, n || (i = e.apply(o, s))
						}, l = n && !r;
					return clearTimeout(r), r = setTimeout(a, t), l && (i = e.apply(o, s)), i
				}
			}, w.once = function(e) {
				var t, n = !1;
				return function() {
					return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
				}
			}, w.wrap = function(e, t) {
				return function() {
					var n = [e];
					return s.apply(n, arguments), t.apply(this, n)
				}
			}, w.compose = function() {
				var e = arguments;
				return function() {
					for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
					return t[0]
				}
			}, w.after = function(e, t) {
				return 0 >= e ? t() : function() {
					return 1 > --e ? t.apply(this, arguments) : void 0
				}
			}, w.keys = E || function(e) {
				if (e !== Object(e)) throw new TypeError("Invalid object");
				var t = [];
				for (var n in e) w.has(e, n) && (t[t.length] = n);
				return t
			}, w.values = function(e) {
				var t = [];
				for (var n in e) w.has(e, n) && t.push(e[n]);
				return t
			}, w.pairs = function(e) {
				var t = [];
				for (var n in e) w.has(e, n) && t.push([n, e[n]]);
				return t
			}, w.invert = function(e) {
				var t = {};
				for (var n in e) w.has(e, n) && (t[e[n]] = n);
				return t
			}, w.functions = w.methods = function(e) {
				var t = [];
				for (var n in e) w.isFunction(e[n]) && t.push(n);
				return t.sort()
			}, w.extend = function(e) {
				return b(a.call(arguments, 1), function(t) {
					if (t) for (var n in t) e[n] = t[n]
				}), e
			}, w.pick = function(e) {
				var t = {}, n = l.apply(r, a.call(arguments, 1));
				return b(n, function(n) {
					n in e && (t[n] = e[n])
				}), t
			}, w.omit = function(e) {
				var t = {}, n = l.apply(r, a.call(arguments, 1));
				for (var i in e) w.contains(n, i) || (t[i] = e[i]);
				return t
			}, w.defaults = function(e) {
				return b(a.call(arguments, 1), function(t) {
					if (t) for (var n in t) null == e[n] && (e[n] = t[n])
				}), e
			}, w.clone = function(e) {
				return w.isObject(e) ? w.isArray(e) ? e.slice() : w.extend({}, e) : e
			}, w.tap = function(e, t) {
				return t(e), e
			};
			var k = function(e, t, n, r) {
				if (e === t) return 0 !== e || 1 / e == 1 / t;
				if (null == e || null == t) return e === t;
				e instanceof w && (e = e._wrapped), t instanceof w && (t = t._wrapped);
				var i = c.call(e);
				if (i != c.call(t)) return !1;
				switch (i) {
					case "[object String]":
						return e == t + "";
					case "[object Number]":
						return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
					case "[object Date]":
					case "[object Boolean]":
						return +e == +t;
					case "[object RegExp]":
						return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
				}
				if ("object" != typeof e || "object" != typeof t) return !1;
				for (var o = n.length; o--;) if (n[o] == e) return r[o] == t;
				n.push(e), r.push(t);
				var s = 0,
					a = !0;
				if ("[object Array]" == i) {
					if (s = e.length, a = s == t.length) for (; s-- && (a = k(e[s], t[s], n, r)););
				} else {
					var l = e.constructor,
						u = t.constructor;
					if (l !== u && !(w.isFunction(l) && l instanceof l && w.isFunction(u) && u instanceof u)) return !1;
					for (var h in e) if (w.has(e, h) && (s++, !(a = w.has(t, h) && k(e[h], t[h], n, r)))) break;
					if (a) {
						for (h in t) if (w.has(t, h) && !s--) break;
						a = !s
					}
				}
				return n.pop(), r.pop(), a
			};
			w.isEqual = function(e, t) {
				return k(e, t, [], [])
			}, w.isEmpty = function(e) {
				if (null == e) return !0;
				if (w.isArray(e) || w.isString(e)) return 0 === e.length;
				for (var t in e) if (w.has(e, t)) return !1;
				return !0
			}, w.isElement = function(e) {
				return !(!e || 1 !== e.nodeType)
			}, w.isArray = C || function(e) {
				return "[object Array]" == c.call(e)
			}, w.isObject = function(e) {
				return e === Object(e)
			}, b(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
				w["is" + e] = function(t) {
					return c.call(t) == "[object " + e + "]"
				}
			}), w.isArguments(arguments) || (w.isArguments = function(e) {
				return !(!e || !w.has(e, "callee"))
			}), w.isFunction = function(e) {
				return "function" == typeof e
			}, w.isFinite = function(e) {
				return isFinite(e) && !isNaN(parseFloat(e))
			}, w.isNaN = function(e) {
				return w.isNumber(e) && e != +e
			}, w.isBoolean = function(e) {
				return e === !0 || e === !1 || "[object Boolean]" == c.call(e)
			}, w.isNull = function(e) {
				return null === e
			}, w.isUndefined = function(e) {
				return void 0 === e
			}, w.has = function(e, t) {
				return u.call(e, t)
			}, w.noConflict = function() {
				return e._ = t, this
			}, w.identity = function(e) {
				return e
			}, w.times = function(e, t, n) {
				for (var r = Array(e), i = 0; e > i; i++) r[i] = t.call(n, i);
				return r
			}, w.random = function(e, t) {
				return null == t && (t = e, e = 0), e + (0 | Math.random() * (t - e + 1))
			};
			var T = {
				escape: {
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					'"': "&quot;",
					"'": "&#x27;",
					"/": "&#x2F;"
				}
			};
			T.unescape = w.invert(T.escape);
			var L = {
				escape: RegExp("[" + w.keys(T.escape).join("") + "]", "g"),
				unescape: RegExp("(" + w.keys(T.unescape).join("|") + ")", "g")
			};
			w.each(["escape", "unescape"], function(e) {
				w[e] = function(t) {
					return null == t ? "" : ("" + t).replace(L[e], function(t) {
						return T[e][t]
					})
				}
			}), w.result = function(e, t) {
				if (null == e) return null;
				var n = e[t];
				return w.isFunction(n) ? n.call(e) : n
			}, w.mixin = function(e) {
				b(w.functions(e), function(t) {
					var n = w[t] = e[t];
					w.prototype[t] = function() {
						var e = [this._wrapped];
						return s.apply(e, arguments), O.call(this, n.apply(w, e))
					}
				})
			};
			var M = 0;
			w.uniqueId = function(e) {
				var t = "" + ++M;
				return e ? e + t : t
			}, w.templateSettings = {
				evaluate: /<%([\s\S]+?)%>/g,
				interpolate: /<%=([\s\S]+?)%>/g,
				escape: /<%-([\s\S]+?)%>/g
			};
			var R = /(.)^/,
				P = {
					"'": "'",
					"\\": "\\",
					"\r": "r",
					"\n": "n",
					"	": "t",
					"\u2028": "u2028",
					"\u2029": "u2029"
				}, N = /\\|'|\r|\n|\t|\u2028|\u2029/g;
			w.template = function(e, t, n) {
				n = w.defaults({}, n, w.templateSettings);
				var r = RegExp([(n.escape || R).source, (n.interpolate || R).source, (n.evaluate || R).source].join("|") + "|$", "g"),
					i = 0,
					o = "__p+='";
				e.replace(r, function(t, n, r, s, a) {
					return o += e.slice(i, a).replace(N, function(e) {
						return "\\" + P[e]
					}), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), s && (o += "';\n" + s + "\n__p+='"), i = a + t.length, t
				}), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
				try {
					var s = Function(n.variable || "obj", "_", o)
				} catch (a) {
					throw a.source = o, a
				}
				if (t) return s(t, w);
				var l = function(e) {
					return s.call(this, e, w)
				};
				return l.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", l
			}, w.chain = function(e) {
				return w(e).chain()
			};
			var O = function(e) {
				return this._chain ? w(e).chain() : e
			};
			w.mixin(w), b(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
				var t = r[e];
				w.prototype[e] = function() {
					var n = this._wrapped;
					return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], O.call(this, n)
				}
			}), b(["concat", "join", "slice"], function(e) {
				var t = r[e];
				w.prototype[e] = function() {
					return O.call(this, t.apply(this._wrapped, arguments))
				}
			}), w.extend(w.prototype, {
				chain: function() {
					return this._chain = !0, this
				},
				value: function() {
					return this._wrapped
				}
			})
		}).call(this);
		var Hashtable = function() {
			function e(t) {
				var n;
				if ("string" == typeof t) return t;
				if (typeof t.hashCode == u) return n = t.hashCode(), "string" == typeof n ? n : e(n);
				if (typeof t.toString == u) return "" + t;
				try {
					return t + ""
				} catch (r) {
					return Object.prototype.toString.call(t)
				}
			}
			function t(e, t) {
				return e.equals(t)
			}
			function n(e, t) {
				return typeof t.equals == u ? t.equals(e) : e === t
			}
			function r(e) {
				return function(t) {
					if (null === t) throw Error("null is not a valid " + e);
					if (t === void 0) throw Error(e + " must not be undefined")
				}
			}
			function i(e, t, n, r) {
				this[0] = e, this.entries = [], this.addEntry(t, n), null !== r && (this.getEqualityFunction = function() {
					return r
				})
			}
			function o(e) {
				return function(t) {
					for (var n, r = this.entries.length, i = this.getEqualityFunction(t); r--;) if (n = this.entries[r], i(t, n[0])) switch (e) {
								case p:
									return !0;
								case g:
									return n;
								case m:
									return [r, n[1]]
						}
					return !1
				}
			}
			function s(e) {
				return function(t) {
					for (var n = t.length, r = 0, i = this.entries.length; i > r; ++r) t[n + r] = this.entries[r][e]
				}
			}
			function a(e, t) {
				for (var n, r = e.length; r--;) if (n = e[r], t === n[0]) return r;
				return null
			}
			function l(e, t) {
				var n = e[t];
				return n && n instanceof i ? n : null
			}
			function c(t, n) {
				var r = this,
					o = [],
					s = {}, p = typeof t == u ? t : e,
					g = typeof n == u ? n : null;
				this.put = function(e, t) {
					d(e), f(t);
					var n, r, a = p(e),
						c = null;
					return n = l(s, a), n ? (r = n.getEntryForKey(e), r ? (c = r[1], r[1] = t) : n.addEntry(e, t)) : (n = new i(a, e, t, g), o[o.length] = n, s[a] = n), c
				}, this.get = function(e) {
					d(e);
					var t = p(e),
						n = l(s, t);
					if (n) {
						var r = n.getEntryForKey(e);
						if (r) return r[1]
					}
					return null
				}, this.containsKey = function(e) {
					d(e);
					var t = p(e),
						n = l(s, t);
					return n ? n.containsKey(e) : !1
				}, this.containsValue = function(e) {
					f(e);
					for (var t = o.length; t--;) if (o[t].containsValue(e)) return !0;
					return !1
				}, this.clear = function() {
					o.length = 0, s = {}
				}, this.isEmpty = function() {
					return !o.length
				};
				var m = function(e) {
					return function() {
						for (var t = [], n = o.length; n--;) o[n][e](t);
						return t
					}
				};
				this.keys = m("keys"), this.values = m("values"), this.entries = m("getEntries"), this.remove = function(e) {
					d(e);
					var t, n = p(e),
						r = null,
						i = l(s, n);
					return i && (r = i.removeEntryForKey(e), null !== r && (i.entries.length || (t = a(o, n), h(o, t), delete s[n]))), r
				}, this.size = function() {
					for (var e = 0, t = o.length; t--;) e += o[t].entries.length;
					return e
				}, this.each = function(e) {
					for (var t, n = r.entries(), i = n.length; i--;) t = n[i], e(t[0], t[1])
				}, this.putAll = function(e, t) {
					for (var n, i, o, s, a = e.entries(), l = a.length, c = typeof t == u; l--;) n = a[l], i = n[0], o = n[1], c && (s = r.get(i)) && (o = t(i, s, o)), r.put(i, o)
				}, this.clone = function() {
					var e = new c(t, n);
					return e.putAll(r), e
				}
			}
			var u = "function",
				h = typeof Array.prototype.splice == u ? function(e, t) {
					e.splice(t, 1)
				} : function(e, t) {
					var n, r, i;
					if (t === e.length - 1) e.length = t;
					else for (n = e.slice(t + 1), e.length = t, r = 0, i = n.length; i > r; ++r) e[t + r] = n[r]
				}, d = r("key"),
				f = r("value"),
				p = 0,
				g = 1,
				m = 2;
			return i.prototype = {
				getEqualityFunction: function(e) {
					return typeof e.equals == u ? t : n
				},
				getEntryForKey: o(g),
				getEntryAndIndexForKey: o(m),
				removeEntryForKey: function(e) {
					var t = this.getEntryAndIndexForKey(e);
					return t ? (h(this.entries, t[0]), t[1]) : null
				},
				addEntry: function(e, t) {
					this.entries[this.entries.length] = [e, t]
				},
				keys: s(0),
				values: s(1),
				getEntries: function(e) {
					for (var t = e.length, n = 0, r = this.entries.length; r > n; ++n) e[t + n] = this.entries[n].slice(0)
				},
				containsKey: o(p),
				containsValue: function(e) {
					for (var t = this.entries.length; t--;) if (e === this.entries[t][1]) return !0;
					return !1
				}
			}, c
		}();
		(function(e, t) {
			function n(e) {
				var t = pt[e] = {};
				return Z.each(e.split(tt), function(e, n) {
					t[n] = !0
				}), t
			}
			function r(e, n, r) {
				if (r === t && 1 === e.nodeType) {
					var i = "data-" + n.replace(mt, "-$1").toLowerCase();
					if (r = e.getAttribute(i), "string" == typeof r) {
						try {
							r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : gt.test(r) ? Z.parseJSON(r) : r
						} catch (o) {}
						Z.data(e, n, r)
					} else r = t
				}
				return r
			}
			function i(e) {
				var t;
				for (t in e) if (("data" !== t || !Z.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
				return !0
			}
			function o() {
				return !1
			}
			function s() {
				return !0
			}
			function a(e) {
				return !e || !e.parentNode || 11 === e.parentNode.nodeType
			}
			function l(e, t) {
				do e = e[t]; while (e && 1 !== e.nodeType);
				return e
			}
			function c(e, t, n) {
				if (t = t || 0, Z.isFunction(t)) return Z.grep(e, function(e, r) {
						var i = !! t.call(e, r, e);
						return i === n
					});
				if (t.nodeType) return Z.grep(e, function(e) {
						return e === t === n
					});
				if ("string" == typeof t) {
					var r = Z.grep(e, function(e) {
						return 1 === e.nodeType
					});
					if (Pt.test(t)) return Z.filter(t, r, !n);
					t = Z.filter(t, r)
				}
				return Z.grep(e, function(e) {
					return Z.inArray(e, t) >= 0 === n
				})
			}
			function u(e) {
				var t = It.split("|"),
					n = e.createDocumentFragment();
				if (n.createElement) for (; t.length;) n.createElement(t.pop());
				return n
			}
			function h(e, t) {
				return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
			}
			function d(e, t) {
				if (1 === t.nodeType && Z.hasData(e)) {
					var n, r, i, o = Z._data(e),
						s = Z._data(t, o),
						a = o.events;
					if (a) {
						delete s.handle, s.events = {};
						for (n in a) for (r = 0, i = a[n].length; i > r; r++) Z.event.add(t, n, a[n][r])
					}
					s.data && (s.data = Z.extend({}, s.data))
				}
			}
			function f(e, t) {
				var n;
				1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), Z.support.html5Clone && e.innerHTML && !Z.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Yt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(Z.expando))
			}
			function p(e) {
				return e.getElementsByTagName !== t ? e.getElementsByTagName("*") : e.querySelectorAll !== t ? e.querySelectorAll("*") : []
			}
			function g(e) {
				Yt.test(e.type) && (e.defaultChecked = e.checked)
			}
			function m(e, t) {
				if (t in e) return t;
				for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = An.length; i--;) if (t = An[i] + n, t in e) return t;
				return r
			}
			function v(e, t) {
				return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
			}
			function A(e, t) {
				for (var n, r, i = [], o = 0, s = e.length; s > o; o++) n = e[o], n.style && (i[o] = Z._data(n, "olddisplay"), t ? (i[o] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && v(n) && (i[o] = Z._data(n, "olddisplay", F(n.nodeName)))) : (r = nn(n, "display"), i[o] || "none" === r || Z._data(n, "olddisplay", r)));
				for (o = 0; s > o; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? i[o] || "" : "none"));
				return e
			}
			function y(e, t, n) {
				var r = hn.exec(t);
				return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
			}
			function C(e, t, n, r) {
				for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > i; i += 2) "margin" === n && (o += Z.css(e, n + vn[i], !0)), r ? ("content" === n && (o -= parseFloat(nn(e, "padding" + vn[i])) || 0), "margin" !== n && (o -= parseFloat(nn(e, "border" + vn[i] + "Width")) || 0)) : (o += parseFloat(nn(e, "padding" + vn[i])) || 0, "padding" !== n && (o += parseFloat(nn(e, "border" + vn[i] + "Width")) || 0));
				return o
			}
			function E(e, t, n) {
				var r = "width" === t ? e.offsetWidth : e.offsetHeight,
					i = !0,
					o = Z.support.boxSizing && "border-box" === Z.css(e, "boxSizing");
				if (0 >= r || null == r) {
					if (r = nn(e, t), (0 > r || null == r) && (r = e.style[t]), dn.test(r)) return r;
					i = o && (Z.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
				}
				return r + C(e, t, n || (o ? "border" : "content"), i) + "px"
			}
			function F(e) {
				if (pn[e]) return pn[e];
				var t = Z("<" + e + ">").appendTo(H.body),
					n = t.css("display");
				return t.remove(), ("none" === n || "" === n) && (rn = H.body.appendChild(rn || Z.extend(H.createElement("iframe"), {
					frameBorder: 0,
					width: 0,
					height: 0
				})), on && rn.createElement || (on = (rn.contentWindow || rn.contentDocument).document, on.write("<!doctype html><html><body>"), on.close()), t = on.body.appendChild(on.createElement(e)), n = nn(t, "display"), H.body.removeChild(rn)), pn[e] = n, n
			}
			function w(e, t, n, r) {
				var i;
				if (Z.isArray(t)) Z.each(t, function(t, i) {
						n || En.test(e) ? r(e, i) : w(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
					});
				else if (n || "object" !== Z.type(t)) r(e, t);
				else for (i in t) w(e + "[" + i + "]", t[i], n, r)
			}
			function b(e) {
				return function(t, n) {
					"string" != typeof t && (n = t, t = "*");
					var r, i, o, s = t.toLowerCase().split(tt),
						a = 0,
						l = s.length;
					if (Z.isFunction(n)) for (; l > a; a++) r = s[a], o = /^\+/.test(r), o && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[o ? "unshift" : "push"](n)
				}
			}
			function $(e, n, r, i, o, s) {
				o = o || n.dataTypes[0], s = s || {}, s[o] = !0;
				for (var a, l = e[o], c = 0, u = l ? l.length : 0, h = e === Nn; u > c && (h || !a); c++) a = l[c](n, r, i), "string" == typeof a && (!h || s[a] ? a = t : (n.dataTypes.unshift(a), a = $(e, n, r, i, a, s)));
				return !h && a || s["*"] || (a = $(e, n, r, i, "*", s)), a
			}
			function x(e, n) {
				var r, i, o = Z.ajaxSettings.flatOptions || {};
				for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
				i && Z.extend(!0, e, i)
			}
			function D(e, n, r) {
				var i, o, s, a, l = e.contents,
					c = e.dataTypes,
					u = e.responseFields;
				for (o in u) o in r && (n[u[o]] = r[o]);
				for (;
				"*" === c[0];) c.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
				if (i) for (o in l) if (l[o] && l[o].test(i)) {
							c.unshift(o);
							break
						}
				if (c[0] in r) s = c[0];
				else {
					for (o in r) {
						if (!c[0] || e.converters[o + " " + c[0]]) {
							s = o;
							break
						}
						a || (a = o)
					}
					s = s || a
				}
				return s ? (s !== c[0] && c.unshift(s), r[s]) : t
			}
			function B(e, t) {
				var n, r, i, o, s = e.dataTypes.slice(),
					a = s[0],
					l = {}, c = 0;
				if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), s[1]) for (n in e.converters) l[n.toLowerCase()] = e.converters[n];
				for (; i = s[++c];) if ("*" !== i) {
						if ("*" !== a && a !== i) {
							if (n = l[a + " " + i] || l["* " + i], !n) for (r in l) if (o = r.split(" "), o[1] === i && (n = l[a + " " + o[0]] || l["* " + o[0]])) {
										n === !0 ? n = l[r] : l[r] !== !0 && (i = o[0], s.splice(c--, 0, i));
										break
									}
							if (n !== !0) if (n && e["throws"]) t = n(t);
								else try {
										t = n(t)
								} catch (u) {
								return {
									state: "parsererror",
									error: n ? u : "No conversion from " + a + " to " + i
								}
							}
						}
						a = i
					}
				return {
					state: "success",
					data: t
				}
			}
			function _() {
				try {
					return new e.XMLHttpRequest
				} catch (t) {}
			}
			function S() {
				try {
					return new e.ActiveXObject("Microsoft.XMLHTTP")
				} catch (t) {}
			}
			function k() {
				return setTimeout(function() {
					Kn = t
				}, 0), Kn = Z.now()
			}
			function T(e, t) {
				Z.each(t, function(t, n) {
					for (var r = (er[t] || []).concat(er["*"]), i = 0, o = r.length; o > i; i++) if (r[i].call(e, t, n)) return
				})
			}
			function L(e, t, n) {
				var r, i = 0,
					o = Jn.length,
					s = Z.Deferred().always(function() {
						delete a.elem
					}),
					a = function() {
						for (var t = Kn || k(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, o = 0, a = l.tweens.length; a > o; o++) l.tweens[o].run(i);
						return s.notifyWith(e, [l, i, n]), 1 > i && a ? n : (s.resolveWith(e, [l]), !1)
					}, l = s.promise({
						elem: e,
						props: Z.extend({}, t),
						opts: Z.extend(!0, {
							specialEasing: {}
						}, n),
						originalProperties: t,
						originalOptions: n,
						startTime: Kn || k(),
						duration: n.duration,
						tweens: [],
						createTween: function(t, n) {
							var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
							return l.tweens.push(r), r
						},
						stop: function(t) {
							for (var n = 0, r = t ? l.tweens.length : 0; r > n; n++) l.tweens[n].run(1);
							return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
						}
					}),
					c = l.props;
				for (M(c, l.opts.specialEasing); o > i; i++) if (r = Jn[i].call(l, e, c, l.opts)) return r;
				return T(l, c), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(a, {
					anim: l,
					queue: l.opts.queue,
					elem: e
				})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
			}
			function M(e, t) {
				var n, r, i, o, s;
				for (n in e) if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Z.cssHooks[r], s && "expand" in s) {
						o = s.expand(o), delete e[r];
						for (n in o) n in e || (e[n] = o[n], t[n] = i)
					} else t[r] = i
			}
			function R(e, t, n) {
				var r, i, o, s, a, l, c, u, h, d = this,
					f = e.style,
					p = {}, g = [],
					m = e.nodeType && v(e);
				n.queue || (u = Z._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, h = u.empty.fire, u.empty.fire = function() {
					u.unqueued || h()
				}), u.unqueued++, d.always(function() {
					d.always(function() {
						u.unqueued--, Z.queue(e, "fx").length || u.empty.fire()
					})
				})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === Z.css(e, "display") && "none" === Z.css(e, "float") && (Z.support.inlineBlockNeedsLayout && "inline" !== F(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", Z.support.shrinkWrapBlocks || d.done(function() {
					f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
				}));
				for (r in t) if (o = t[r], Qn.exec(o)) {
						if (delete t[r], l = l || "toggle" === o, o === (m ? "hide" : "show")) continue;
						g.push(r)
					}
				if (s = g.length) {
					a = Z._data(e, "fxshow") || Z._data(e, "fxshow", {}), "hidden" in a && (m = a.hidden), l && (a.hidden = !m), m ? Z(e).show() : d.done(function() {
						Z(e).hide()
					}), d.done(function() {
						var t;
						Z.removeData(e, "fxshow", !0);
						for (t in p) Z.style(e, t, p[t])
					});
					for (r = 0; s > r; r++) i = g[r], c = d.createTween(i, m ? a[i] : 0), p[i] = a[i] || Z.style(e, i), i in a || (a[i] = c.start, m && (c.end = c.start, c.start = "width" === i || "height" === i ? 1 : 0))
				}
			}
			function P(e, t, n, r, i) {
				return new P.prototype.init(e, t, n, r, i)
			}
			function N(e, t) {
				var n, r = {
						height: e
					}, i = 0;
				for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = vn[i], r["margin" + n] = r["padding" + n] = e;
				return t && (r.opacity = r.width = e), r
			}
			function O(e) {
				return Z.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
			}
			var I, j, H = e.document,
				z = e.location,
				W = e.navigator,
				U = e.jQuery,
				q = e.$,
				G = Array.prototype.push,
				V = Array.prototype.slice,
				K = Array.prototype.indexOf,
				Y = Object.prototype.toString,
				Q = Object.prototype.hasOwnProperty,
				X = String.prototype.trim,
				Z = function(e, t) {
					return new Z.fn.init(e, t, I)
				}, J = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
				et = /\S/,
				tt = /\s+/,
				nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
				rt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
				it = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
				ot = /^[\],:{}\s]*$/,
				st = /(?:^|:|,)(?:\s*\[)+/g,
				at = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
				lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
				ct = /^-ms-/,
				ut = /-([\da-z])/gi,
				ht = function(e, t) {
					return (t + "").toUpperCase()
				}, dt = function() {
					H.addEventListener ? (H.removeEventListener("DOMContentLoaded", dt, !1), Z.ready()) : "complete" === H.readyState && (H.detachEvent("onreadystatechange", dt), Z.ready())
				}, ft = {};
			Z.fn = Z.prototype = {
				constructor: Z,
				init: function(e, n, r) {
					var i, o, s;
					if (!e) return this;
					if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
					if ("string" == typeof e) {
						if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : rt.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
						if (i[1]) return n = n instanceof Z ? n[0] : n, s = n && n.nodeType ? n.ownerDocument || n : H, e = Z.parseHTML(i[1], s, !0), it.test(i[1]) && Z.isPlainObject(n) && this.attr.call(e, n, !0), Z.merge(this, e);
						if (o = H.getElementById(i[2]), o && o.parentNode) {
							if (o.id !== i[2]) return r.find(e);
							this.length = 1, this[0] = o
						}
						return this.context = H, this.selector = e, this
					}
					return Z.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
				},
				selector: "",
				jquery: "1.8.3",
				length: 0,
				size: function() {
					return this.length
				},
				toArray: function() {
					return V.call(this)
				},
				get: function(e) {
					return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
				},
				pushStack: function(e, t, n) {
					var r = Z.merge(this.constructor(), e);
					return r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
				},
				each: function(e, t) {
					return Z.each(this, e, t)
				},
				ready: function(e) {
					return Z.ready.promise().done(e), this
				},
				eq: function(e) {
					return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq(-1)
				},
				slice: function() {
					return this.pushStack(V.apply(this, arguments), "slice", V.call(arguments).join(","))
				},
				map: function(e) {
					return this.pushStack(Z.map(this, function(t, n) {
						return e.call(t, n, t)
					}))
				},
				end: function() {
					return this.prevObject || this.constructor(null)
				},
				push: G,
				sort: [].sort,
				splice: [].splice
			}, Z.fn.init.prototype = Z.fn, Z.extend = Z.fn.extend = function() {
				var e, n, r, i, o, s, a = arguments[0] || {}, l = 1,
					c = arguments.length,
					u = !1;
				for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" == typeof a || Z.isFunction(a) || (a = {}), c === l && (a = this, --l); c > l; l++) if (null != (e = arguments[l])) for (n in e) r = a[n], i = e[n], a !== i && (u && i && (Z.isPlainObject(i) || (o = Z.isArray(i))) ? (o ? (o = !1, s = r && Z.isArray(r) ? r : []) : s = r && Z.isPlainObject(r) ? r : {}, a[n] = Z.extend(u, s, i)) : i !== t && (a[n] = i));
				return a
			}, Z.extend({
				noConflict: function(t) {
					return e.$ === Z && (e.$ = q), t && e.jQuery === Z && (e.jQuery = U), Z
				},
				isReady: !1,
				readyWait: 1,
				holdReady: function(e) {
					e ? Z.readyWait++ : Z.ready(!0)
				},
				ready: function(e) {
					if (e === !0 ? !--Z.readyWait : !Z.isReady) {
						if (!H.body) return setTimeout(Z.ready, 1);
						Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (j.resolveWith(H, [Z]), Z.fn.trigger && Z(H).trigger("ready").off("ready"))
					}
				},
				isFunction: function(e) {
					return "function" === Z.type(e)
				},
				isArray: Array.isArray || function(e) {
					return "array" === Z.type(e)
				},
				isWindow: function(e) {
					return null != e && e == e.window
				},
				isNumeric: function(e) {
					return !isNaN(parseFloat(e)) && isFinite(e)
				},
				type: function(e) {
					return null == e ? e + "" : ft[Y.call(e)] || "object"
				},
				isPlainObject: function(e) {
					if (!e || "object" !== Z.type(e) || e.nodeType || Z.isWindow(e)) return !1;
					try {
						if (e.constructor && !Q.call(e, "constructor") && !Q.call(e.constructor.prototype, "isPrototypeOf")) return !1
					} catch (n) {
						return !1
					}
					var r;
					for (r in e);
					return r === t || Q.call(e, r)
				},
				isEmptyObject: function(e) {
					var t;
					for (t in e) return !1;
					return !0
				},
				error: function(e) {
					throw Error(e)
				},
				parseHTML: function(e, t, n) {
					var r;
					return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || H, (r = it.exec(e)) ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, n ? null : []), Z.merge([], (r.cacheable ? Z.clone(r.fragment) : r.fragment).childNodes))) : null
				},
				parseJSON: function(n) {
					return n && "string" == typeof n ? (n = Z.trim(n), e.JSON && e.JSON.parse ? e.JSON.parse(n) : ot.test(n.replace(at, "@").replace(lt, "]").replace(st, "")) ? Function("return " + n)() : (Z.error("Invalid JSON: " + n), t)) : null
				},
				parseXML: function(n) {
					var r, i;
					if (!n || "string" != typeof n) return null;
					try {
						e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
					} catch (o) {
						r = t
					}
					return r && r.documentElement && !r.getElementsByTagName("parsererror").length || Z.error("Invalid XML: " + n), r
				},
				noop: function() {},
				globalEval: function(t) {
					t && et.test(t) && (e.execScript || function(t) {
						e.eval.call(e, t)
					})(t)
				},
				camelCase: function(e) {
					return e.replace(ct, "ms-").replace(ut, ht)
				},
				nodeName: function(e, t) {
					return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
				},
				each: function(e, n, r) {
					var i, o = 0,
						s = e.length,
						a = s === t || Z.isFunction(e);
					if (r) if (a) {
							for (i in e) if (n.apply(e[i], r) === !1) break
						} else for (; s > o && n.apply(e[o++], r) !== !1;);
						else
					if (a) {
						for (i in e) if (n.call(e[i], i, e[i]) === !1) break
					} else for (; s > o && n.call(e[o], o, e[o++]) !== !1;);
					return e
				},
				trim: X && !X.call("﻿ ") ? function(e) {
					return null == e ? "" : X.call(e)
				} : function(e) {
					return null == e ? "" : (e + "").replace(nt, "")
				},
				makeArray: function(e, t) {
					var n, r = t || [];
					return null != e && (n = Z.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || Z.isWindow(e) ? G.call(r, e) : Z.merge(r, e)), r
				},
				inArray: function(e, t, n) {
					var r;
					if (t) {
						if (K) return K.call(t, e, n);
						for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n
					}
					return -1
				},
				merge: function(e, n) {
					var r = n.length,
						i = e.length,
						o = 0;
					if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
					else for (; n[o] !== t;) e[i++] = n[o++];
					return e.length = i, e
				},
				grep: function(e, t, n) {
					var r, i = [],
						o = 0,
						s = e.length;
					for (n = !! n; s > o; o++) r = !! t(e[o], o), n !== r && i.push(e[o]);
					return i
				},
				map: function(e, n, r) {
					var i, o, s = [],
						a = 0,
						l = e.length,
						c = e instanceof Z || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || Z.isArray(e));
					if (c) for (; l > a; a++) i = n(e[a], a, r), null != i && (s[s.length] = i);
					else for (o in e) i = n(e[o], o, r), null != i && (s[s.length] = i);
					return s.concat.apply([], s)
				},
				guid: 1,
				proxy: function(e, n) {
					var r, i, o;
					return "string" == typeof n && (r = e[n], n = e, e = r), Z.isFunction(e) ? (i = V.call(arguments, 2), o = function() {
						return e.apply(n, i.concat(V.call(arguments)))
					}, o.guid = e.guid = e.guid || Z.guid++, o) : t
				},
				access: function(e, n, r, i, o, s, a) {
					var l, c = null == r,
						u = 0,
						h = e.length;
					if (r && "object" == typeof r) {
						for (u in r) Z.access(e, n, u, r[u], 1, s, i);
						o = 1
					} else if (i !== t) {
						if (l = a === t && Z.isFunction(i), c && (l ? (l = n, n = function(e, t, n) {
							return l.call(Z(e), n)
						}) : (n.call(e, i), n = null)), n) for (; h > u; u++) n(e[u], r, l ? i.call(e[u], u, n(e[u], r)) : i, a);
						o = 1
					}
					return o ? e : c ? n.call(e) : h ? n(e[0], r) : s
				},
				now: function() {
					return (new Date).getTime()
				}
			}), Z.ready.promise = function(t) {
				if (!j) if (j = Z.Deferred(), "complete" === H.readyState) setTimeout(Z.ready, 1);
					else
				if (H.addEventListener) H.addEventListener("DOMContentLoaded", dt, !1), e.addEventListener("load", Z.ready, !1);
				else {
					H.attachEvent("onreadystatechange", dt), e.attachEvent("onload", Z.ready);
					var n = !1;
					try {
						n = null == e.frameElement && H.documentElement
					} catch (r) {}
					n && n.doScroll && function i() {
						if (!Z.isReady) {
							try {
								n.doScroll("left")
							} catch (e) {
								return setTimeout(i, 50)
							}
							Z.ready()
						}
					}()
				}
				return j.promise(t)
			}, Z.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
				ft["[object " + t + "]"] = t.toLowerCase()
			}), I = Z(H);
			var pt = {};
			Z.Callbacks = function(e) {
				e = "string" == typeof e ? pt[e] || n(e) : Z.extend({}, e);
				var r, i, o, s, a, l, c = [],
					u = !e.once && [],
					h = function(t) {
						for (r = e.memory && t, i = !0, l = s || 0, s = 0, a = c.length, o = !0; c && a > l; l++) if (c[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
								r = !1;
								break
							}
						o = !1, c && (u ? u.length && h(u.shift()) : r ? c = [] : d.disable())
					}, d = {
						add: function() {
							if (c) {
								var t = c.length;
								(function n(t) {
									Z.each(t, function(t, r) {
										var i = Z.type(r);
										"function" === i ? e.unique && d.has(r) || c.push(r) : r && r.length && "string" !== i && n(r)
									})
								})(arguments), o ? a = c.length : r && (s = t, h(r))
							}
							return this
						},
						remove: function() {
							return c && Z.each(arguments, function(e, t) {
								for (var n;
								(n = Z.inArray(t, c, n)) > -1;) c.splice(n, 1), o && (a >= n && a--, l >= n && l--)
							}), this
						},
						has: function(e) {
							return Z.inArray(e, c) > -1
						},
						empty: function() {
							return c = [], this
						},
						disable: function() {
							return c = u = r = t, this
						},
						disabled: function() {
							return !c
						},
						lock: function() {
							return u = t, r || d.disable(), this
						},
						locked: function() {
							return !u
						},
						fireWith: function(e, t) {
							return t = t || [], t = [e, t.slice ? t.slice() : t], !c || i && !u || (o ? u.push(t) : h(t)), this
						},
						fire: function() {
							return d.fireWith(this, arguments), this
						},
						fired: function() {
							return !!i
						}
					};
				return d
			}, Z.extend({
				Deferred: function(e) {
					var t = [
						["resolve", "done", Z.Callbacks("once memory"), "resolved"],
						["reject", "fail", Z.Callbacks("once memory"), "rejected"],
						["notify", "progress", Z.Callbacks("memory")]
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
								return Z.Deferred(function(n) {
									Z.each(t, function(t, r) {
										var o = r[0],
											s = e[t];
										i[r[1]](Z.isFunction(s) ? function() {
											var e = s.apply(this, arguments);
											e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === i ? n : this, [e])
										} : n[o])
									}), e = null
								}).promise()
							},
							promise: function(e) {
								return null != e ? Z.extend(e, r) : r
							}
						}, i = {};
					return r.pipe = r.then, Z.each(t, function(e, o) {
						var s = o[2],
							a = o[3];
						r[o[1]] = s.add, a && s.add(function() {
							n = a
						}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = s.fire, i[o[0] + "With"] = s.fireWith
					}), r.promise(i), e && e.call(i, i), i
				},
				when: function(e) {
					var t, n, r, i = 0,
						o = V.call(arguments),
						s = o.length,
						a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0,
						l = 1 === a ? e : Z.Deferred(),
						c = function(e, n, r) {
							return function(i) {
								n[e] = this, r[e] = arguments.length > 1 ? V.call(arguments) : i, r === t ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
							}
						};
					if (s > 1) for (t = Array(s), n = Array(s), r = Array(s); s > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(l.reject).progress(c(i, n, t)) : --a;
					return a || l.resolveWith(r, o), l.promise()
				}
			}), Z.support = function() {
				var n, r, i, o, s, a, l, c, u, h, d, f = H.createElement("div");
				if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = f.getElementsByTagName("*"), i = f.getElementsByTagName("a")[0], !r || !i || !r.length) return {};
				o = H.createElement("select"), s = o.appendChild(H.createElement("option")), a = f.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", n = {
					leadingWhitespace: 3 === f.firstChild.nodeType,
					tbody: !f.getElementsByTagName("tbody").length,
					htmlSerialize: !! f.getElementsByTagName("link").length,
					style: /top/.test(i.getAttribute("style")),
					hrefNormalized: "/a" === i.getAttribute("href"),
					opacity: /^0.5/.test(i.style.opacity),
					cssFloat: !! i.style.cssFloat,
					checkOn: "on" === a.value,
					optSelected: s.selected,
					getSetAttribute: "t" !== f.className,
					enctype: !! H.createElement("form").enctype,
					html5Clone: "<:nav></:nav>" !== H.createElement("nav").cloneNode(!0).outerHTML,
					boxModel: "CSS1Compat" === H.compatMode,
					submitBubbles: !0,
					changeBubbles: !0,
					focusinBubbles: !1,
					deleteExpando: !0,
					noCloneEvent: !0,
					inlineBlockNeedsLayout: !1,
					shrinkWrapBlocks: !1,
					reliableMarginRight: !0,
					boxSizingReliable: !0,
					pixelPosition: !1
				}, a.checked = !0, n.noCloneChecked = a.cloneNode(!0).checked, o.disabled = !0, n.optDisabled = !s.disabled;
				try {
					delete f.test
				} catch (p) {
					n.deleteExpando = !1
				}
				if (!f.addEventListener && f.attachEvent && f.fireEvent && (f.attachEvent("onclick", d = function() {
					n.noCloneEvent = !1
				}), f.cloneNode(!0).fireEvent("onclick"), f.detachEvent("onclick", d)), a = H.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), n.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), f.appendChild(a), l = H.createDocumentFragment(), l.appendChild(f.lastChild), n.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, n.appendChecked = a.checked, l.removeChild(a), l.appendChild(f), f.attachEvent) for (u in {
						submit: !0,
						change: !0,
						focusin: !0
					}) c = "on" + u, h = c in f, h || (f.setAttribute(c, "return;"), h = "function" == typeof f[c]), n[u + "Bubbles"] = h;
				return Z(function() {
					var r, i, o, s, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
						l = H.getElementsByTagName("body")[0];
					l && (r = H.createElement("div"), r.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", l.insertBefore(r, l.firstChild), i = H.createElement("div"), r.appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = i.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", h = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", n.reliableHiddenOffsets = h && 0 === o[0].offsetHeight, i.innerHTML = "", i.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", n.boxSizing = 4 === i.offsetWidth, n.doesNotIncludeMarginInBodyOffset = 1 !== l.offsetTop, e.getComputedStyle && (n.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, n.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
						width: "4px"
					}).width, s = H.createElement("div"), s.style.cssText = i.style.cssText = a, s.style.marginRight = s.style.width = "0", i.style.width = "1px", i.appendChild(s), n.reliableMarginRight = !parseFloat((e.getComputedStyle(s, null) || {}).marginRight)), i.style.zoom !== t && (i.innerHTML = "", i.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", n.inlineBlockNeedsLayout = 3 === i.offsetWidth, i.style.display = "block", i.style.overflow = "visible", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", n.shrinkWrapBlocks = 3 !== i.offsetWidth, r.style.zoom = 1), l.removeChild(r), r = i = o = s = null)
				}), l.removeChild(f), r = i = o = s = a = l = f = null, n
			}();
			var gt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
				mt = /([A-Z])/g;
			Z.extend({
				cache: {},
				deletedIds: [],
				uuid: 0,
				expando: "jQuery" + (Z.fn.jquery + Math.random()).replace(/\D/g, ""),
				noData: {
					embed: !0,
					object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
					applet: !0
				},
				hasData: function(e) {
					return e = e.nodeType ? Z.cache[e[Z.expando]] : e[Z.expando], !! e && !i(e)
				},
				data: function(e, n, r, i) {
					if (Z.acceptData(e)) {
						var o, s, a = Z.expando,
							l = "string" == typeof n,
							c = e.nodeType,
							u = c ? Z.cache : e,
							h = c ? e[a] : e[a] && a;
						if (h && u[h] && (i || u[h].data) || !l || r !== t) return h || (c ? e[a] = h = Z.deletedIds.pop() || Z.guid++ : h = a), u[h] || (u[h] = {}, c || (u[h].toJSON = Z.noop)), ("object" == typeof n || "function" == typeof n) && (i ? u[h] = Z.extend(u[h], n) : u[h].data = Z.extend(u[h].data, n)), o = u[h], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[Z.camelCase(n)] = r), l ? (s = o[n], null == s && (s = o[Z.camelCase(n)])) : s = o, s
					}
				},
				removeData: function(e, t, n) {
					if (Z.acceptData(e)) {
						var r, o, s, a = e.nodeType,
							l = a ? Z.cache : e,
							c = a ? e[Z.expando] : Z.expando;
						if (l[c]) {
							if (t && (r = n ? l[c] : l[c].data)) {
								Z.isArray(t) || (t in r ? t = [t] : (t = Z.camelCase(t), t = t in r ? [t] : t.split(" ")));
								for (o = 0, s = t.length; s > o; o++) delete r[t[o]];
								if (!(n ? i : Z.isEmptyObject)(r)) return
							}(n || (delete l[c].data, i(l[c]))) && (a ? Z.cleanData([e], !0) : Z.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
						}
					}
				},
				_data: function(e, t, n) {
					return Z.data(e, t, n, !0)
				},
				acceptData: function(e) {
					var t = e.nodeName && Z.noData[e.nodeName.toLowerCase()];
					return !t || t !== !0 && e.getAttribute("classid") === t
				}
			}), Z.fn.extend({
				data: function(e, n) {
					var i, o, s, a, l, c = this[0],
						u = 0,
						h = null;
					if (e === t) {
						if (this.length && (h = Z.data(c), 1 === c.nodeType && !Z._data(c, "parsedAttrs"))) {
							for (s = c.attributes, l = s.length; l > u; u++) a = s[u].name, a.indexOf("data-") || (a = Z.camelCase(a.substring(5)), r(c, a, h[a]));
							Z._data(c, "parsedAttrs", !0)
						}
						return h
					}
					return "object" == typeof e ? this.each(function() {
						Z.data(this, e)
					}) : (i = e.split(".", 2), i[1] = i[1] ? "." + i[1] : "", o = i[1] + "!", Z.access(this, function(n) {
						return n === t ? (h = this.triggerHandler("getData" + o, [i[0]]), h === t && c && (h = Z.data(c, e), h = r(c, e, h)), h === t && i[1] ? this.data(i[0]) : h) : (i[1] = n, this.each(function() {
							var t = Z(this);
							t.triggerHandler("setData" + o, i), Z.data(this, e, n), t.triggerHandler("changeData" + o, i)
						}), t)
					}, null, n, arguments.length > 1, null, !1))
				},
				removeData: function(e) {
					return this.each(function() {
						Z.removeData(this, e)
					})
				}
			}), Z.extend({
				queue: function(e, n, r) {
					var i;
					return e ? (n = (n || "fx") + "queue", i = Z._data(e, n), r && (!i || Z.isArray(r) ? i = Z._data(e, n, Z.makeArray(r)) : i.push(r)), i || []) : t
				},
				dequeue: function(e, t) {
					t = t || "fx";
					var n = Z.queue(e, t),
						r = n.length,
						i = n.shift(),
						o = Z._queueHooks(e, t),
						s = function() {
							Z.dequeue(e, t)
						};
					"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
				},
				_queueHooks: function(e, t) {
					var n = t + "queueHooks";
					return Z._data(e, n) || Z._data(e, n, {
						empty: Z.Callbacks("once memory").add(function() {
							Z.removeData(e, t + "queue", !0), Z.removeData(e, n, !0)
						})
					})
				}
			}), Z.fn.extend({
				queue: function(e, n) {
					var r = 2;
					return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? Z.queue(this[0], e) : n === t ? this : this.each(function() {
						var t = Z.queue(this, e, n);
						Z._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && Z.dequeue(this, e)
					})
				},
				dequeue: function(e) {
					return this.each(function() {
						Z.dequeue(this, e)
					})
				},
				delay: function(e, t) {
					return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
						var r = setTimeout(t, e);
						n.stop = function() {
							clearTimeout(r)
						}
					})
				},
				clearQueue: function(e) {
					return this.queue(e || "fx", [])
				},
				promise: function(e, n) {
					var r, i = 1,
						o = Z.Deferred(),
						s = this,
						a = this.length,
						l = function() {
							--i || o.resolveWith(s, [s])
						};
					for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;) r = Z._data(s[a], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
					return l(), o.promise(n)
				}
			});
			var vt, At, yt, Ct = /[\t\r\n]/g,
				Et = /\r/g,
				Ft = /^(?:button|input)$/i,
				wt = /^(?:button|input|object|select|textarea)$/i,
				bt = /^a(?:rea|)$/i,
				$t = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
				xt = Z.support.getSetAttribute;
			Z.fn.extend({
				attr: function(e, t) {
					return Z.access(this, Z.attr, e, t, arguments.length > 1)
				},
				removeAttr: function(e) {
					return this.each(function() {
						Z.removeAttr(this, e)
					})
				},
				prop: function(e, t) {
					return Z.access(this, Z.prop, e, t, arguments.length > 1)
				},
				removeProp: function(e) {
					return e = Z.propFix[e] || e, this.each(function() {
						try {
							this[e] = t, delete this[e]
						} catch (n) {}
					})
				},
				addClass: function(e) {
					var t, n, r, i, o, s, a;
					if (Z.isFunction(e)) return this.each(function(t) {
							Z(this).addClass(e.call(this, t, this.className))
						});
					if (e && "string" == typeof e) for (t = e.split(tt), n = 0, r = this.length; r > n; n++) if (i = this[n], 1 === i.nodeType) if (i.className || 1 !== t.length) {
									for (o = " " + i.className + " ", s = 0, a = t.length; a > s; s++) 0 > o.indexOf(" " + t[s] + " ") && (o += t[s] + " ");
									i.className = Z.trim(o)
								} else i.className = e;
					return this
				},
				removeClass: function(e) {
					var n, r, i, o, s, a, l;
					if (Z.isFunction(e)) return this.each(function(t) {
							Z(this).removeClass(e.call(this, t, this.className))
						});
					if (e && "string" == typeof e || e === t) for (n = (e || "").split(tt), a = 0, l = this.length; l > a; a++) if (i = this[a], 1 === i.nodeType && i.className) {
								for (r = (" " + i.className + " ").replace(Ct, " "), o = 0, s = n.length; s > o; o++) for (; r.indexOf(" " + n[o] + " ") >= 0;) r = r.replace(" " + n[o] + " ", " ");
								i.className = e ? Z.trim(r) : ""
							}
					return this
				},
				toggleClass: function(e, t) {
					var n = typeof e,
						r = "boolean" == typeof t;
					return Z.isFunction(e) ? this.each(function(n) {
						Z(this).toggleClass(e.call(this, n, this.className, t), t)
					}) : this.each(function() {
						if ("string" === n) for (var i, o = 0, s = Z(this), a = t, l = e.split(tt); i = l[o++];) a = r ? a : !s.hasClass(i), s[a ? "addClass" : "removeClass"](i);
						else("undefined" === n || "boolean" === n) && (this.className && Z._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : Z._data(this, "__className__") || "")
					})
				},
				hasClass: function(e) {
					for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ct, " ").indexOf(t) >= 0) return !0;
					return !1
				},
				val: function(e) {
					var n, r, i, o = this[0]; {
						if (arguments.length) return i = Z.isFunction(e), this.each(function(r) {
								var o, s = Z(this);
								1 === this.nodeType && (o = i ? e.call(this, r, s.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Z.isArray(o) && (o = Z.map(o, function(e) {
									return null == e ? "" : e + ""
								})), n = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
							});
						if (o) return n = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(Et, "") : null == r ? "" : r)
					}
				}
			}), Z.extend({
				valHooks: {
					option: {
						get: function(e) {
							var t = e.attributes.value;
							return !t || t.specified ? e.value : e.text
						}
					},
					select: {
						get: function(e) {
							for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, l = 0 > i ? a : o ? i : 0; a > l; l++) if (n = r[l], !(!n.selected && l !== i || (Z.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
									if (t = Z(n).val(), o) return t;
									s.push(t)
								}
							return s
						},
						set: function(e, t) {
							var n = Z.makeArray(t);
							return Z(e).find("option").each(function() {
								this.selected = Z.inArray(Z(this).val(), n) >= 0
							}), n.length || (e.selectedIndex = -1), n
						}
					}
				},
				attrFn: {},
				attr: function(e, n, r, i) {
					var o, s, a, l = e.nodeType;
					if (e && 3 !== l && 8 !== l && 2 !== l) return i && Z.isFunction(Z.fn[n]) ? Z(e)[n](r) : e.getAttribute === t ? Z.prop(e, n, r) : (a = 1 !== l || !Z.isXMLDoc(e), a && (n = n.toLowerCase(), s = Z.attrHooks[n] || ($t.test(n) ? At : vt)), r !== t ? null === r ? (Z.removeAttr(e, n), t) : s && "set" in s && a && (o = s.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : s && "get" in s && a && null !== (o = s.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o))
				},
				removeAttr: function(e, t) {
					var n, r, i, o, s = 0;
					if (t && 1 === e.nodeType) for (r = t.split(tt); r.length > s; s++) i = r[s], i && (n = Z.propFix[i] || i, o = $t.test(i), o || Z.attr(e, i, ""), e.removeAttribute(xt ? i : n), o && n in e && (e[n] = !1))
				},
				attrHooks: {
					type: {
						set: function(e, t) {
							if (Ft.test(e.nodeName) && e.parentNode) Z.error("type property can't be changed");
							else if (!Z.support.radioValue && "radio" === t && Z.nodeName(e, "input")) {
								var n = e.value;
								return e.setAttribute("type", t), n && (e.value = n), t
							}
						}
					},
					value: {
						get: function(e, t) {
							return vt && Z.nodeName(e, "button") ? vt.get(e, t) : t in e ? e.value : null
						},
						set: function(e, n, r) {
							return vt && Z.nodeName(e, "button") ? vt.set(e, n, r) : (e.value = n, t)
						}
					}
				},
				propFix: {
					tabindex: "tabIndex",
					readonly: "readOnly",
					"for": "htmlFor",
					"class": "className",
					maxlength: "maxLength",
					cellspacing: "cellSpacing",
					cellpadding: "cellPadding",
					rowspan: "rowSpan",
					colspan: "colSpan",
					usemap: "useMap",
					frameborder: "frameBorder",
					contenteditable: "contentEditable"
				},
				prop: function(e, n, r) {
					var i, o, s, a = e.nodeType;
					if (e && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !Z.isXMLDoc(e), s && (n = Z.propFix[n] || n, o = Z.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
				},
				propHooks: {
					tabIndex: {
						get: function(e) {
							var n = e.getAttributeNode("tabindex");
							return n && n.specified ? parseInt(n.value, 10) : wt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : t
						}
					}
				}
			}), At = {
				get: function(e, n) {
					var r, i = Z.prop(e, n);
					return i === !0 || "boolean" != typeof i && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
				},
				set: function(e, t, n) {
					var r;
					return t === !1 ? Z.removeAttr(e, n) : (r = Z.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
				}
			}, xt || (yt = {
				name: !0,
				id: !0,
				coords: !0
			}, vt = Z.valHooks.button = {
				get: function(e, n) {
					var r;
					return r = e.getAttributeNode(n), r && (yt[n] ? "" !== r.value : r.specified) ? r.value : t
				},
				set: function(e, t, n) {
					var r = e.getAttributeNode(n);
					return r || (r = H.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
				}
			}, Z.each(["width", "height"], function(e, n) {
				Z.attrHooks[n] = Z.extend(Z.attrHooks[n], {
					set: function(e, r) {
						return "" === r ? (e.setAttribute(n, "auto"), r) : t
					}
				})
			}), Z.attrHooks.contenteditable = {
				get: vt.get,
				set: function(e, t, n) {
					"" === t && (t = "false"), vt.set(e, t, n)
				}
			}), Z.support.hrefNormalized || Z.each(["href", "src", "width", "height"], function(e, n) {
				Z.attrHooks[n] = Z.extend(Z.attrHooks[n], {
					get: function(e) {
						var r = e.getAttribute(n, 2);
						return null === r ? t : r
					}
				})
			}), Z.support.style || (Z.attrHooks.style = {
				get: function(e) {
					return e.style.cssText.toLowerCase() || t
				},
				set: function(e, t) {
					return e.style.cssText = t + ""
				}
			}), Z.support.optSelected || (Z.propHooks.selected = Z.extend(Z.propHooks.selected, {
				get: function(e) {
					var t = e.parentNode;
					return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
				}
			})), Z.support.enctype || (Z.propFix.enctype = "encoding"), Z.support.checkOn || Z.each(["radio", "checkbox"], function() {
				Z.valHooks[this] = {
					get: function(e) {
						return null === e.getAttribute("value") ? "on" : e.value
					}
				}
			}), Z.each(["radio", "checkbox"], function() {
				Z.valHooks[this] = Z.extend(Z.valHooks[this], {
					set: function(e, n) {
						return Z.isArray(n) ? e.checked = Z.inArray(Z(e).val(), n) >= 0 : t
					}
				})
			});
			var Dt = /^(?:textarea|input|select)$/i,
				Bt = /^([^\.]*|)(?:\.(.+)|)$/,
				_t = /(?:^|\s)hover(\.\S+|)\b/,
				St = /^key/,
				kt = /^(?:mouse|contextmenu)|click/,
				Tt = /^(?:focusinfocus|focusoutblur)$/,
				Lt = function(e) {
					return Z.event.special.hover ? e : e.replace(_t, "mouseenter$1 mouseleave$1")
				};
			Z.event = {
				add: function(e, n, r, i, o) {
					var s, a, l, c, u, h, d, f, p, g, m;
					if (3 !== e.nodeType && 8 !== e.nodeType && n && r && (s = Z._data(e))) {
						for (r.handler && (p = r, r = p.handler, o = p.selector), r.guid || (r.guid = Z.guid++), l = s.events, l || (s.events = l = {}), a = s.handle, a || (s.handle = a = function(e) {
							return Z === t || e && Z.event.triggered === e.type ? t : Z.event.dispatch.apply(a.elem, arguments)
						}, a.elem = e), n = Z.trim(Lt(n)).split(" "), c = 0; n.length > c; c++) u = Bt.exec(n[c]) || [], h = u[1], d = (u[2] || "").split(".").sort(), m = Z.event.special[h] || {}, h = (o ? m.delegateType : m.bindType) || h, m = Z.event.special[h] || {}, f = Z.extend({
								type: h,
								origType: u[1],
								data: i,
								handler: r,
								guid: r.guid,
								selector: o,
								needsContext: o && Z.expr.match.needsContext.test(o),
								namespace: d.join(".")
							}, p), g = l[h], g || (g = l[h] = [], g.delegateCount = 0, m.setup && m.setup.call(e, i, d, a) !== !1 || (e.addEventListener ? e.addEventListener(h, a, !1) : e.attachEvent && e.attachEvent("on" + h, a))), m.add && (m.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? g.splice(g.delegateCount++, 0, f) : g.push(f), Z.event.global[h] = !0;
						e = null
					}
				},
				global: {},
				remove: function(e, t, n, r, i) {
					var o, s, a, l, c, u, h, d, f, p, g, m = Z.hasData(e) && Z._data(e);
					if (m && (d = m.events)) {
						for (t = Z.trim(Lt(t || "")).split(" "), o = 0; t.length > o; o++) if (s = Bt.exec(t[o]) || [], a = l = s[1], c = s[2], a) {
								for (f = Z.event.special[a] || {}, a = (r ? f.delegateType : f.bindType) || a, p = d[a] || [], u = p.length, c = c ? RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = 0; p.length > h; h++) g = p[h], !i && l !== g.origType || n && n.guid !== g.guid || c && !c.test(g.namespace) || r && r !== g.selector && ("**" !== r || !g.selector) || (p.splice(h--, 1), g.selector && p.delegateCount--, f.remove && f.remove.call(e, g));
								0 === p.length && u !== p.length && (f.teardown && f.teardown.call(e, c, m.handle) !== !1 || Z.removeEvent(e, a, m.handle), delete d[a])
							} else for (a in d) Z.event.remove(e, a + t[o], n, r, !0);
						Z.isEmptyObject(d) && (delete m.handle, Z.removeData(e, "events", !0))
					}
				},
				customEvent: {
					getData: !0,
					setData: !0,
					changeData: !0
				},
				trigger: function(n, r, i, o) {
					if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
						var s, a, l, c, u, h, d, f, p, g, m = n.type || n,
							v = [];
						if (!Tt.test(m + Z.event.triggered) && (m.indexOf("!") >= 0 && (m = m.slice(0, -1), a = !0), m.indexOf(".") >= 0 && (v = m.split("."), m = v.shift(), v.sort()), i && !Z.event.customEvent[m] || Z.event.global[m])) if (n = "object" == typeof n ? n[Z.expando] ? n : new Z.Event(m, n) : new Z.Event(m), n.type = m, n.isTrigger = !0, n.exclusive = a, n.namespace = v.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = 0 > m.indexOf(":") ? "on" + m : "", i) {
								if (n.result = t, n.target || (n.target = i), r = null != r ? Z.makeArray(r) : [], r.unshift(n), d = Z.event.special[m] || {}, !d.trigger || d.trigger.apply(i, r) !== !1) {
									if (p = [
										[i, d.bindType || m]
									], !o && !d.noBubble && !Z.isWindow(i)) {
										for (g = d.delegateType || m, c = Tt.test(g + m) ? i : i.parentNode, u = i; c; c = c.parentNode) p.push([c, g]), u = c;
										u === (i.ownerDocument || H) && p.push([u.defaultView || u.parentWindow || e, g])
									}
									for (l = 0; p.length > l && !n.isPropagationStopped(); l++) c = p[l][0], n.type = p[l][1], f = (Z._data(c, "events") || {})[n.type] && Z._data(c, "handle"), f && f.apply(c, r), f = h && c[h], f && Z.acceptData(c) && f.apply && f.apply(c, r) === !1 && n.preventDefault();
									return n.type = m, o || n.isDefaultPrevented() || d._default && d._default.apply(i.ownerDocument, r) !== !1 || "click" === m && Z.nodeName(i, "a") || !Z.acceptData(i) || h && i[m] && ("focus" !== m && "blur" !== m || 0 !== n.target.offsetWidth) && !Z.isWindow(i) && (u = i[h], u && (i[h] = null), Z.event.triggered = m, i[m](), Z.event.triggered = t, u && (i[h] = u)), n.result
								}
							} else {
								s = Z.cache;
								for (l in s) s[l].events && s[l].events[m] && Z.event.trigger(n, r, s[l].handle.elem, !0)
							}
					}
				},
				dispatch: function(n) {
					n = Z.event.fix(n || e.event);
					var r, i, o, s, a, l, c, u, h, d = (Z._data(this, "events") || {})[n.type] || [],
						f = d.delegateCount,
						p = V.call(arguments),
						g = !n.exclusive && !n.namespace,
						m = Z.event.special[n.type] || {}, v = [];
					if (p[0] = n, n.delegateTarget = this, !m.preDispatch || m.preDispatch.call(this, n) !== !1) {
						if (f && (!n.button || "click" !== n.type)) for (o = n.target; o != this; o = o.parentNode || this) if (o.disabled !== !0 || "click" !== n.type) {
									for (a = {}, c = [], r = 0; f > r; r++) u = d[r], h = u.selector, a[h] === t && (a[h] = u.needsContext ? Z(h, this).index(o) >= 0 : Z.find(h, this, null, [o]).length), a[h] && c.push(u);
									c.length && v.push({
										elem: o,
										matches: c
									})
								}
						for (d.length > f && v.push({
							elem: this,
							matches: d.slice(f)
						}), r = 0; v.length > r && !n.isPropagationStopped(); r++) for (l = v[r], n.currentTarget = l.elem, i = 0; l.matches.length > i && !n.isImmediatePropagationStopped(); i++) u = l.matches[i], (g || !n.namespace && !u.namespace || n.namespace_re && n.namespace_re.test(u.namespace)) && (n.data = u.data, n.handleObj = u, s = ((Z.event.special[u.origType] || {}).handle || u.handler).apply(l.elem, p), s !== t && (n.result = s, s === !1 && (n.preventDefault(), n.stopPropagation())));
						return m.postDispatch && m.postDispatch.call(this, n), n.result
					}
				},
				props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
				fixHooks: {},
				keyHooks: {
					props: "char charCode key keyCode".split(" "),
					filter: function(e, t) {
						return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
					}
				},
				mouseHooks: {
					props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
					filter: function(e, n) {
						var r, i, o, s = n.button,
							a = n.fromElement;
						return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || H, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
					}
				},
				fix: function(e) {
					if (e[Z.expando]) return e;
					var t, n, r = e,
						i = Z.event.fixHooks[e.type] || {}, o = i.props ? this.props.concat(i.props) : this.props;
					for (e = Z.Event(r), t = o.length; t;) n = o[--t], e[n] = r[n];
					return e.target || (e.target = r.srcElement || H), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, i.filter ? i.filter(e, r) : e
				},
				special: {
					load: {
						noBubble: !0
					},
					focus: {
						delegateType: "focusin"
					},
					blur: {
						delegateType: "focusout"
					},
					beforeunload: {
						setup: function(e, t, n) {
							Z.isWindow(this) && (this.onbeforeunload = n)
						},
						teardown: function(e, t) {
							this.onbeforeunload === t && (this.onbeforeunload = null)
						}
					}
				},
				simulate: function(e, t, n, r) {
					var i = Z.extend(new Z.Event, n, {
						type: e,
						isSimulated: !0,
						originalEvent: {}
					});
					r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
				}
			}, Z.event.handle = Z.event.dispatch, Z.removeEvent = H.removeEventListener ? function(e, t, n) {
				e.removeEventListener && e.removeEventListener(t, n, !1)
			} : function(e, n, r) {
				var i = "on" + n;
				e.detachEvent && (e[i] === t && (e[i] = null), e.detachEvent(i, r))
			}, Z.Event = function(e, n) {
				return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? s : o) : this.type = e, n && Z.extend(this, n), this.timeStamp = e && e.timeStamp || Z.now(), this[Z.expando] = !0, t) : new Z.Event(e, n)
			}, Z.Event.prototype = {
				preventDefault: function() {
					this.isDefaultPrevented = s;
					var e = this.originalEvent;
					e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
				},
				stopPropagation: function() {
					this.isPropagationStopped = s;
					var e = this.originalEvent;
					e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
				},
				stopImmediatePropagation: function() {
					this.isImmediatePropagationStopped = s, this.stopPropagation()
				},
				isDefaultPrevented: o,
				isPropagationStopped: o,
				isImmediatePropagationStopped: o
			}, Z.each({
				mouseenter: "mouseover",
				mouseleave: "mouseout"
			}, function(e, t) {
				Z.event.special[e] = {
					delegateType: t,
					bindType: t,
					handle: function(e) {
						var n, r = this,
							i = e.relatedTarget,
							o = e.handleObj;
						return o.selector, (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
					}
				}
			}), Z.support.submitBubbles || (Z.event.special.submit = {
				setup: function() {
					return Z.nodeName(this, "form") ? !1 : (Z.event.add(this, "click._submit keypress._submit", function(e) {
						var n = e.target,
							r = Z.nodeName(n, "input") || Z.nodeName(n, "button") ? n.form : t;
						r && !Z._data(r, "_submit_attached") && (Z.event.add(r, "submit._submit", function(e) {
							e._submit_bubble = !0
						}), Z._data(r, "_submit_attached", !0))
					}), t)
				},
				postDispatch: function(e) {
					e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && Z.event.simulate("submit", this.parentNode, e, !0))
				},
				teardown: function() {
					return Z.nodeName(this, "form") ? !1 : (Z.event.remove(this, "._submit"), t)
				}
			}), Z.support.changeBubbles || (Z.event.special.change = {
				setup: function() {
					return Dt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (Z.event.add(this, "propertychange._change", function(e) {
						"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
					}), Z.event.add(this, "click._change", function(e) {
						this._just_changed && !e.isTrigger && (this._just_changed = !1), Z.event.simulate("change", this, e, !0)
					})), !1) : (Z.event.add(this, "beforeactivate._change", function(e) {
						var t = e.target;
						Dt.test(t.nodeName) && !Z._data(t, "_change_attached") && (Z.event.add(t, "change._change", function(e) {
							!this.parentNode || e.isSimulated || e.isTrigger || Z.event.simulate("change", this.parentNode, e, !0)
						}), Z._data(t, "_change_attached", !0))
					}), t)
				},
				handle: function(e) {
					var n = e.target;
					return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
				},
				teardown: function() {
					return Z.event.remove(this, "._change"), !Dt.test(this.nodeName)
				}
			}), Z.support.focusinBubbles || Z.each({
				focus: "focusin",
				blur: "focusout"
			}, function(e, t) {
				var n = 0,
					r = function(e) {
						Z.event.simulate(t, e.target, Z.event.fix(e), !0)
					};
				Z.event.special[t] = {
					setup: function() {
						0 === n++ && H.addEventListener(e, r, !0)
					},
					teardown: function() {
						0 === --n && H.removeEventListener(e, r, !0)
					}
				}
			}), Z.fn.extend({
				on: function(e, n, r, i, s) {
					var a, l;
					if ("object" == typeof e) {
						"string" != typeof n && (r = r || n, n = t);
						for (l in e) this.on(l, n, r, e[l], s);
						return this
					}
					if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = o;
					else if (!i) return this;
					return 1 === s && (a = i, i = function(e) {
						return Z().off(e), a.apply(this, arguments)
					}, i.guid = a.guid || (a.guid = Z.guid++)), this.each(function() {
						Z.event.add(this, e, i, r, n)
					})
				},
				one: function(e, t, n, r) {
					return this.on(e, t, n, r, 1)
				},
				off: function(e, n, r) {
					var i, s;
					if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Z(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
					if ("object" == typeof e) {
						for (s in e) this.off(s, n, e[s]);
						return this
					}
					return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = o), this.each(function() {
						Z.event.remove(this, e, r, n)
					})
				},
				bind: function(e, t, n) {
					return this.on(e, null, t, n)
				},
				unbind: function(e, t) {
					return this.off(e, null, t)
				},
				live: function(e, t, n) {
					return Z(this.context).on(e, this.selector, t, n), this
				},
				die: function(e, t) {
					return Z(this.context).off(e, this.selector || "**", t), this
				},
				delegate: function(e, t, n, r) {
					return this.on(t, e, n, r)
				},
				undelegate: function(e, t, n) {
					return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
				},
				trigger: function(e, t) {
					return this.each(function() {
						Z.event.trigger(e, t, this)
					})
				},
				triggerHandler: function(e, n) {
					return this[0] ? Z.event.trigger(e, n, this[0], !0) : t
				},
				toggle: function(e) {
					var t = arguments,
						n = e.guid || Z.guid++,
						r = 0,
						i = function(n) {
							var i = (Z._data(this, "lastToggle" + e.guid) || 0) % r;
							return Z._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
						};
					for (i.guid = n; t.length > r;) t[r++].guid = n;
					return this.click(i)
				},
				hover: function(e, t) {
					return this.mouseenter(e).mouseleave(t || e)
				}
			}), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
				Z.fn[t] = function(e, n) {
					return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
				}, St.test(t) && (Z.event.fixHooks[t] = Z.event.keyHooks), kt.test(t) && (Z.event.fixHooks[t] = Z.event.mouseHooks)
			}),
			function(e, t) {
				function n(e, t, n, r) {
					n = n || [], t = t || k;
					var i, o, s, a, l = t.nodeType;
					if (!e || "string" != typeof e) return n;
					if (1 !== l && 9 !== l) return [];
					if (s = E(t), !s && !r && (i = nt.exec(e))) if (a = i[1]) {
							if (9 === l) {
								if (o = t.getElementById(a), !o || !o.parentNode) return n;
								if (o.id === a) return n.push(o), n
							} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && F(t, o) && o.id === a) return n.push(o), n
						} else {
							if (i[2]) return P.apply(n, N.call(t.getElementsByTagName(e), 0)), n;
							if ((a = i[3]) && dt && t.getElementsByClassName) return P.apply(n, N.call(t.getElementsByClassName(a), 0)), n
						}
					return g(e.replace(X, "$1"), t, n, r, s)
				}
				function r(e) {
					return function(t) {
						var n = t.nodeName.toLowerCase();
						return "input" === n && t.type === e
					}
				}
				function i(e) {
					return function(t) {
						var n = t.nodeName.toLowerCase();
						return ("input" === n || "button" === n) && t.type === e
					}
				}
				function o(e) {
					return I(function(t) {
						return t = +t, I(function(n, r) {
							for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
						})
					})
				}
				function s(e, t, n) {
					if (e === t) return n;
					for (var r = e.nextSibling; r;) {
						if (r === t) return -1;
						r = r.nextSibling
					}
					return 1
				}
				function a(e, t) {
					var r, i, o, s, a, l, c, u = z[_][e + " "];
					if (u) return t ? 0 : u.slice(0);
					for (a = e, l = [], c = y.preFilter; a;) {
						(!r || (i = J.exec(a))) && (i && (a = a.slice(i[0].length) || a), l.push(o = [])), r = !1, (i = et.exec(a)) && (o.push(r = new S(i.shift())), a = a.slice(r.length), r.type = i[0].replace(X, " "));
						for (s in y.filter)!(i = at[s].exec(a)) || c[s] && !(i = c[s](i)) || (o.push(r = new S(i.shift())), a = a.slice(r.length), r.type = s, r.matches = i);
						if (!r) break
					}
					return t ? a.length : a ? n.error(e) : z(e, l).slice(0)
				}
				function l(e, t, n) {
					var r = t.dir,
						i = n && "parentNode" === t.dir,
						o = M++;
					return t.first ? function(t, n, o) {
						for (; t = t[r];) if (i || 1 === t.nodeType) return e(t, n, o)
					} : function(t, n, s) {
						if (s) {
							for (; t = t[r];) if ((i || 1 === t.nodeType) && e(t, n, s)) return t
						} else for (var a, l = L + " " + o + " ", c = l + v; t = t[r];) if (i || 1 === t.nodeType) {
									if ((a = t[_]) === c) return t.sizset;
									if ("string" == typeof a && 0 === a.indexOf(l)) {
										if (t.sizset) return t
									} else {
										if (t[_] = c, e(t, n, s)) return t.sizset = !0, t;
										t.sizset = !1
									}
								}
					}
				}
				function c(e) {
					return e.length > 1 ? function(t, n, r) {
						for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
						return !0
					} : e[0]
				}
				function u(e, t, n, r, i) {
					for (var o, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), c && t.push(a));
					return s
				}
				function h(e, t, n, r, i, o) {
					return r && !r[_] && (r = h(r)), i && !i[_] && (i = h(i, o)), I(function(o, s, a, l) {
						var c, h, d, f = [],
							g = [],
							m = s.length,
							v = o || p(t || "*", a.nodeType ? [a] : a, []),
							A = !e || !o && t ? v : u(v, f, e, a, l),
							y = n ? i || (o ? e : m || r) ? [] : s : A;
						if (n && n(A, y, a, l), r) for (c = u(y, g), r(c, [], a, l), h = c.length; h--;)(d = c[h]) && (y[g[h]] = !(A[g[h]] = d));
						if (o) {
							if (i || e) {
								if (i) {
									for (c = [], h = y.length; h--;)(d = y[h]) && c.push(A[h] = d);
									i(null, y = [], c, l)
								}
								for (h = y.length; h--;)(d = y[h]) && (c = i ? O.call(o, d) : f[h]) > -1 && (o[c] = !(s[c] = d))
							}
						} else y = u(y === s ? y.splice(m, y.length) : y), i ? i(null, s, y, l) : P.apply(s, y)
					})
				}
				function d(e) {
					for (var t, n, r, i = e.length, o = y.relative[e[0].type], s = o || y.relative[" "], a = o ? 1 : 0, u = l(function(e) {
							return e === t
						}, s, !0), f = l(function(e) {
							return O.call(t, e) > -1
						}, s, !0), p = [
							function(e, n, r) {
								return !o && (r || n !== x) || ((t = n).nodeType ? u(e, n, r) : f(e, n, r))
							}
						]; i > a; a++) if (n = y.relative[e[a].type]) p = [l(c(p), n)];
						else {
							if (n = y.filter[e[a].type].apply(null, e[a].matches), n[_]) {
								for (r = ++a; i > r && !y.relative[e[r].type]; r++);
								return h(a > 1 && c(p), a > 1 && e.slice(0, a - 1).join("").replace(X, "$1"), n, r > a && d(e.slice(a, r)), i > r && d(e = e.slice(r)), i > r && e.join(""))
							}
							p.push(n)
						}
					return c(p)
				}
				function f(e, t) {
					var r = t.length > 0,
						i = e.length > 0,
						o = function(s, a, l, c, h) {
							var d, f, p, g = [],
								m = 0,
								A = "0",
								C = s && [],
								E = null != h,
								F = x,
								w = s || i && y.find.TAG("*", h && a.parentNode || a),
								b = L += null == F ? 1 : Math.E;
							for (E && (x = a !== k && a, v = o.el); null != (d = w[A]); A++) {
								if (i && d) {
									for (f = 0; p = e[f]; f++) if (p(d, a, l)) {
											c.push(d);
											break
										}
									E && (L = b, v = ++o.el)
								}
								r && ((d = !p && d) && m--, s && C.push(d))
							}
							if (m += A, r && A !== m) {
								for (f = 0; p = t[f]; f++) p(C, g, a, l);
								if (s) {
									if (m > 0) for (; A--;) C[A] || g[A] || (g[A] = R.call(c));
									g = u(g)
								}
								P.apply(c, g), E && !s && g.length > 0 && m + t.length > 1 && n.uniqueSort(c)
							}
							return E && (L = b, x = F), C
						};
					return o.el = 0, r ? I(o) : o
				}
				function p(e, t, r) {
					for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
					return r
				}
				function g(e, t, n, r, i) {
					var o, s, l, c, u, h = a(e);
					if (h.length, !r && 1 === h.length) {
						if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (l = s[0]).type && 9 === t.nodeType && !i && y.relative[s[1].type]) {
							if (t = y.find.ID(l.matches[0].replace(st, ""), t, i)[0], !t) return n;
							e = e.slice(s.shift().length)
						}
						for (o = at.POS.test(e) ? -1 : s.length - 1; o >= 0 && (l = s[o], !y.relative[c = l.type]); o--) if ((u = y.find[c]) && (r = u(l.matches[0].replace(st, ""), rt.test(s[0].type) && t.parentNode || t, i))) {
								if (s.splice(o, 1), e = r.length && s.join(""), !e) return P.apply(n, N.call(r, 0)), n;
								break
							}
					}
					return w(e, h)(r, t, i, n, rt.test(e)), n
				}
				function m() {}
				var v, A, y, C, E, F, w, b, $, x, D = !0,
					B = "undefined",
					_ = ("sizcache" + Math.random()).replace(".", ""),
					S = String,
					k = e.document,
					T = k.documentElement,
					L = 0,
					M = 0,
					R = [].pop,
					P = [].push,
					N = [].slice,
					O = [].indexOf || function(e) {
						for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
						return -1
					}, I = function(e, t) {
						return e[_] = null == t || t, e
					}, j = function() {
						var e = {}, t = [];
						return I(function(n, r) {
							return t.push(n) > y.cacheLength && delete e[t.shift()], e[n + " "] = r
						}, e)
					}, H = j(),
					z = j(),
					W = j(),
					U = "[\\x20\\t\\r\\n\\f]",
					q = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
					G = q.replace("w", "w#"),
					V = "([*^$|!~]?=)",
					K = "\\[" + U + "*(" + q + ")" + U + "*(?:" + V + U + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + G + ")|)|)" + U + "*\\]",
					Y = ":(" + q + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + K + ")|[^:]|\\\\.)*|.*))\\)|)",
					Q = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + U + "*((?:-\\d)?\\d*)" + U + "*\\)|)(?=[^-]|$)",
					X = RegExp("^" + U + "+|((?:^|[^\\\\])(?:\\\\.)*)" + U + "+$", "g"),
					J = RegExp("^" + U + "*," + U + "*"),
					et = RegExp("^" + U + "*([\\x20\\t\\r\\n\\f>+~])" + U + "*"),
					tt = RegExp(Y),
					nt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
					rt = /[\x20\t\r\n\f]*[+~]/,
					it = /h\d/i,
					ot = /input|select|textarea|button/i,
					st = /\\(?!\\)/g,
					at = {
						ID: RegExp("^#(" + q + ")"),
						CLASS: RegExp("^\\.(" + q + ")"),
						NAME: RegExp("^\\[name=['\"]?(" + q + ")['\"]?\\]"),
						TAG: RegExp("^(" + q.replace("w", "w*") + ")"),
						ATTR: RegExp("^" + K),
						PSEUDO: RegExp("^" + Y),
						POS: RegExp(Q, "i"),
						CHILD: RegExp("^:(only|nth|first|last)-child(?:\\(" + U + "*(even|odd|(([+-]|)(\\d*)n|)" + U + "*(?:([+-]|)" + U + "*(\\d+)|))" + U + "*\\)|)", "i"),
						needsContext: RegExp("^" + U + "*[>+~]|" + Q, "i")
					}, lt = function(e) {
						var t = k.createElement("div");
						try {
							return e(t)
						} catch (n) {
							return !1
						} finally {
							t = null
						}
					}, ct = lt(function(e) {
						return e.appendChild(k.createComment("")), !e.getElementsByTagName("*").length
					}),
					ut = lt(function(e) {
						return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== B && "#" === e.firstChild.getAttribute("href")
					}),
					ht = lt(function(e) {
						e.innerHTML = "<select></select>";
						var t = typeof e.lastChild.getAttribute("multiple");
						return "boolean" !== t && "string" !== t
					}),
					dt = lt(function(e) {
						return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
					}),
					ft = lt(function(e) {
						e.id = _ + 0, e.innerHTML = "<a name='" + _ + "'></a><div name='" + _ + "'></div>", T.insertBefore(e, T.firstChild);
						var t = k.getElementsByName && k.getElementsByName(_).length === 2 + k.getElementsByName(_ + 0).length;
						return A = !k.getElementById(_), T.removeChild(e), t
					});
				try {
					N.call(T.childNodes, 0)[0].nodeType
				} catch (pt) {
					N = function(e) {
						for (var t, n = []; t = this[e]; e++) n.push(t);
						return n
					}
				}
				n.matches = function(e, t) {
					return n(e, null, null, t)
				}, n.matchesSelector = function(e, t) {
					return n(t, null, null, [e]).length > 0
				}, C = n.getText = function(e) {
					var t, n = "",
						r = 0,
						i = e.nodeType;
					if (i) {
						if (1 === i || 9 === i || 11 === i) {
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
						} else if (3 === i || 4 === i) return e.nodeValue
					} else for (; t = e[r]; r++) n += C(t);
					return n
				}, E = n.isXML = function(e) {
					var t = e && (e.ownerDocument || e).documentElement;
					return t ? "HTML" !== t.nodeName : !1
				}, F = n.contains = T.contains ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !! (r && 1 === r.nodeType && n.contains && n.contains(r))
				} : T.compareDocumentPosition ? function(e, t) {
					return t && !! (16 & e.compareDocumentPosition(t))
				} : function(e, t) {
					for (; t = t.parentNode;) if (t === e) return !0;
					return !1
				}, n.attr = function(e, t) {
					var n, r = E(e);
					return r || (t = t.toLowerCase()), (n = y.attrHandle[t]) ? n(e) : r || ht ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null)
				}, y = n.selectors = {
					cacheLength: 50,
					createPseudo: I,
					match: at,
					attrHandle: ut ? {} : {
						href: function(e) {
							return e.getAttribute("href", 2)
						},
						type: function(e) {
							return e.getAttribute("type")
						}
					},
					find: {
						ID: A ? function(e, t, n) {
							if (typeof t.getElementById !== B && !n) {
								var r = t.getElementById(e);
								return r && r.parentNode ? [r] : []
							}
						} : function(e, n, r) {
							if (typeof n.getElementById !== B && !r) {
								var i = n.getElementById(e);
								return i ? i.id === e || typeof i.getAttributeNode !== B && i.getAttributeNode("id").value === e ? [i] : t : []
							}
						},
						TAG: ct ? function(e, n) {
							return typeof n.getElementsByTagName !== B ? n.getElementsByTagName(e) : t
						} : function(e, t) {
							var n = t.getElementsByTagName(e);
							if ("*" === e) {
								for (var r, i = [], o = 0; r = n[o]; o++) 1 === r.nodeType && i.push(r);
								return i
							}
							return n
						},
						NAME: ft && function(e, n) {
							return typeof n.getElementsByName !== B ? n.getElementsByName(name) : t
						},
						CLASS: dt && function(e, n, r) {
							return typeof n.getElementsByClassName === B || r ? t : n.getElementsByClassName(e)
						}
					},
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
							return e[1] = e[1].replace(st, ""), e[3] = (e[4] || e[5] || "").replace(st, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function(e) {
							return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]), e
						},
						PSEUDO: function(e) {
							var t, n;
							return at.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (tt.test(t) && (n = a(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t), e.slice(0, 3))
						}
					},
					filter: {
						ID: A ? function(e) {
							return e = e.replace(st, ""),
							function(t) {
								return t.getAttribute("id") === e
							}
						} : function(e) {
							return e = e.replace(st, ""),
							function(t) {
								var n = typeof t.getAttributeNode !== B && t.getAttributeNode("id");
								return n && n.value === e
							}
						},
						TAG: function(e) {
							return "*" === e ? function() {
								return !0
							} : (e = e.replace(st, "").toLowerCase(), function(t) {
								return t.nodeName && t.nodeName.toLowerCase() === e
							})
						},
						CLASS: function(e) {
							var t = H[_][e + " "];
							return t || (t = RegExp("(^|" + U + ")" + e + "(" + U + "|$)")) && H(e, function(e) {
								return t.test(e.className || typeof e.getAttribute !== B && e.getAttribute("class") || "")
							})
						},
						ATTR: function(e, t, r) {
							return function(i) {
								var o = n.attr(i, e);
								return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.substr(o.length - r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.substr(0, r.length + 1) === r + "-" : !1) : !0
							}
						},
						CHILD: function(e, t, n, r) {
							return "nth" === e ? function(e) {
								var t, i, o = e.parentNode;
								if (1 === n && 0 === r) return !0;
								if (o) for (i = 0, t = o.firstChild; t && (1 !== t.nodeType || (i++, e !== t)); t = t.nextSibling);
								return i -= r, i === n || 0 === i % n && i / n >= 0
							} : function(t) {
								var n = t;
								switch (e) {
									case "only":
									case "first":
										for (; n = n.previousSibling;) if (1 === n.nodeType) return !1;
										if ("first" === e) return !0;
										n = t;
									case "last":
										for (; n = n.nextSibling;) if (1 === n.nodeType) return !1;
										return !0
								}
							}
						},
						PSEUDO: function(e, t) {
							var r, i = y.pseudos[e] || y.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
							return i[_] ? i(t) : i.length > 1 ? (r = [e, e, "", t], y.setFilters.hasOwnProperty(e.toLowerCase()) ? I(function(e, n) {
								for (var r, o = i(e, t), s = o.length; s--;) r = O.call(e, o[s]), e[r] = !(n[r] = o[s])
							}) : function(e) {
								return i(e, 0, r)
							}) : i
						}
					},
					pseudos: {
						not: I(function(e) {
							var t = [],
								n = [],
								r = w(e.replace(X, "$1"));
							return r[_] ? I(function(e, t, n, i) {
								for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
							}) : function(e, i, o) {
								return t[0] = e, r(t, null, o, n), !n.pop()
							}
						}),
						has: I(function(e) {
							return function(t) {
								return n(e, t).length > 0
							}
						}),
						contains: I(function(e) {
							return function(t) {
								return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
							}
						}),
						enabled: function(e) {
							return e.disabled === !1
						},
						disabled: function(e) {
							return e.disabled === !0
						},
						checked: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && !! e.checked || "option" === t && !! e.selected
						},
						selected: function(e) {
							return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
						},
						parent: function(e) {
							return !y.pseudos.empty(e)
						},
						empty: function(e) {
							var t;
							for (e = e.firstChild; e;) {
								if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
								e = e.nextSibling
							}
							return !0
						},
						header: function(e) {
							return it.test(e.nodeName)
						},
						text: function(e) {
							var t, n;
							return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t)
						},
						radio: r("radio"),
						checkbox: r("checkbox"),
						file: r("file"),
						password: r("password"),
						image: r("image"),
						submit: i("submit"),
						reset: i("reset"),
						button: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						input: function(e) {
							return ot.test(e.nodeName)
						},
						focus: function(e) {
							var t = e.ownerDocument;
							return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
						},
						active: function(e) {
							return e === e.ownerDocument.activeElement
						},
						first: o(function() {
							return [0]
						}),
						last: o(function(e, t) {
							return [t - 1]
						}),
						eq: o(function(e, t, n) {
							return [0 > n ? n + t : n]
						}),
						even: o(function(e, t) {
							for (var n = 0; t > n; n += 2) e.push(n);
							return e
						}),
						odd: o(function(e, t) {
							for (var n = 1; t > n; n += 2) e.push(n);
							return e
						}),
						lt: o(function(e, t, n) {
							for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
							return e
						}),
						gt: o(function(e, t, n) {
							for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
							return e
						})
					}
				}, b = T.compareDocumentPosition ? function(e, t) {
					return e === t ? ($ = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
				} : function(e, t) {
					if (e === t) return $ = !0, 0;
					if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
					var n, r, i = [],
						o = [],
						a = e.parentNode,
						l = t.parentNode,
						c = a;
					if (a === l) return s(e, t);
					if (!a) return -1;
					if (!l) return 1;
					for (; c;) i.unshift(c), c = c.parentNode;
					for (c = l; c;) o.unshift(c), c = c.parentNode;
					n = i.length, r = o.length;
					for (var u = 0; n > u && r > u; u++) if (i[u] !== o[u]) return s(i[u], o[u]);
					return u === n ? s(e, o[u], -1) : s(i[u], t, 1)
				}, [0, 0].sort(b), D = !$, n.uniqueSort = function(e) {
					var t, n = [],
						r = 1,
						i = 0;
					if ($ = D, e.sort(b), $) {
						for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
						for (; i--;) e.splice(n[i], 1)
					}
					return e
				}, n.error = function(e) {
					throw Error("Syntax error, unrecognized expression: " + e)
				}, w = n.compile = function(e, t) {
					var n, r = [],
						i = [],
						o = W[_][e + " "];
					if (!o) {
						for (t || (t = a(e)), n = t.length; n--;) o = d(t[n]), o[_] ? r.push(o) : i.push(o);
						o = W(e, f(i, r))
					}
					return o
				}, k.querySelectorAll && function() {
					var e, t = g,
						r = /'|\\/g,
						i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
						o = [":focus"],
						s = [":active"],
						l = T.matchesSelector || T.mozMatchesSelector || T.webkitMatchesSelector || T.oMatchesSelector || T.msMatchesSelector;
					lt(function(e) {
						e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || o.push("\\[" + U + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || o.push(":checked")
					}), lt(function(e) {
						e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + U + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled")
					}), o = RegExp(o.join("|")), g = function(e, n, i, s, l) {
						if (!s && !l && !o.test(e)) {
							var c, u, h = !0,
								d = _,
								f = n,
								p = 9 === n.nodeType && e;
							if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
								for (c = a(e), (h = n.getAttribute("id")) ? d = h.replace(r, "\\$&") : n.setAttribute("id", d), d = "[id='" + d + "'] ", u = c.length; u--;) c[u] = d + c[u].join("");
								f = rt.test(e) && n.parentNode || n, p = c.join(",")
							}
							if (p) try {
									return P.apply(i, N.call(f.querySelectorAll(p), 0)), i
							} catch (g) {} finally {
								h || n.removeAttribute("id")
							}
						}
						return t(e, n, i, s, l)
					}, l && (lt(function(t) {
						e = l.call(t, "div");
						try {
							l.call(t, "[test!='']:sizzle"), s.push("!=", Y)
						} catch (n) {}
					}), s = RegExp(s.join("|")), n.matchesSelector = function(t, r) {
						if (r = r.replace(i, "='$1']"), !E(t) && !s.test(r) && !o.test(r)) try {
								var a = l.call(t, r);
								if (a || e || t.document && 11 !== t.document.nodeType) return a
						} catch (c) {}
						return n(r, null, null, [t]).length > 0
					})
				}(), y.pseudos.nth = y.pseudos.eq, y.filters = m.prototype = y.pseudos, y.setFilters = new m, n.attr = Z.attr, Z.find = n, Z.expr = n.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = n.uniqueSort, Z.text = n.getText, Z.isXMLDoc = n.isXML, Z.contains = n.contains
			}(e);
			var Mt = /Until$/,
				Rt = /^(?:parents|prev(?:Until|All))/,
				Pt = /^.[^:#\[\.,]*$/,
				Nt = Z.expr.match.needsContext,
				Ot = {
					children: !0,
					contents: !0,
					next: !0,
					prev: !0
				};
			Z.fn.extend({
				find: function(e) {
					var t, n, r, i, o, s, a = this;
					if ("string" != typeof e) return Z(e).filter(function() {
							for (t = 0, n = a.length; n > t; t++) if (Z.contains(a[t], this)) return !0
						});
					for (s = this.pushStack("", "find", e), t = 0, n = this.length; n > t; t++) if (r = s.length, Z.find(e, this[t], s), t > 0) for (i = r; s.length > i; i++) for (o = 0; r > o; o++) if (s[o] === s[i]) {
										s.splice(i--, 1);
										break
									}
					return s
				},
				has: function(e) {
					var t, n = Z(e, this),
						r = n.length;
					return this.filter(function() {
						for (t = 0; r > t; t++) if (Z.contains(this, n[t])) return !0
					})
				},
				not: function(e) {
					return this.pushStack(c(this, e, !1), "not", e)
				},
				filter: function(e) {
					return this.pushStack(c(this, e, !0), "filter", e)
				},
				is: function(e) {
					return !!e && ("string" == typeof e ? Nt.test(e) ? Z(e, this.context).index(this[0]) >= 0 : Z.filter(e, this).length > 0 : this.filter(e).length > 0)
				},
				closest: function(e, t) {
					for (var n, r = 0, i = this.length, o = [], s = Nt.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
							if (s ? s.index(n) > -1 : Z.find.matchesSelector(n, e)) {
								o.push(n);
								break
							}
							n = n.parentNode
					}
					return o = o.length > 1 ? Z.unique(o) : o, this.pushStack(o, "closest", e)
				},
				index: function(e) {
					return e ? "string" == typeof e ? Z.inArray(this[0], Z(e)) : Z.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
				},
				add: function(e, t) {
					var n = "string" == typeof e ? Z(e, t) : Z.makeArray(e && e.nodeType ? [e] : e),
						r = Z.merge(this.get(), n);
					return this.pushStack(a(n[0]) || a(r[0]) ? r : Z.unique(r))
				},
				addBack: function(e) {
					return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
				}
			}), Z.fn.andSelf = Z.fn.addBack, Z.each({
				parent: function(e) {
					var t = e.parentNode;
					return t && 11 !== t.nodeType ? t : null
				},
				parents: function(e) {
					return Z.dir(e, "parentNode")
				},
				parentsUntil: function(e, t, n) {
					return Z.dir(e, "parentNode", n)
				},
				next: function(e) {
					return l(e, "nextSibling")
				},
				prev: function(e) {
					return l(e, "previousSibling")
				},
				nextAll: function(e) {
					return Z.dir(e, "nextSibling")
				},
				prevAll: function(e) {
					return Z.dir(e, "previousSibling")
				},
				nextUntil: function(e, t, n) {
					return Z.dir(e, "nextSibling", n)
				},
				prevUntil: function(e, t, n) {
					return Z.dir(e, "previousSibling", n)
				},
				siblings: function(e) {
					return Z.sibling((e.parentNode || {}).firstChild, e)
				},
				children: function(e) {
					return Z.sibling(e.firstChild)
				},
				contents: function(e) {
					return Z.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : Z.merge([], e.childNodes)
				}
			}, function(e, t) {
				Z.fn[e] = function(n, r) {
					var i = Z.map(this, t, n);
					return Mt.test(e) || (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), i = this.length > 1 && !Ot[e] ? Z.unique(i) : i, this.length > 1 && Rt.test(e) && (i = i.reverse()), this.pushStack(i, e, V.call(arguments).join(","))
				}
			}), Z.extend({
				filter: function(e, t, n) {
					return n && (e = ":not(" + e + ")"), 1 === t.length ? Z.find.matchesSelector(t[0], e) ? [t[0]] : [] : Z.find.matches(e, t)
				},
				dir: function(e, n, r) {
					for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !Z(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
					return i
				},
				sibling: function(e, t) {
					for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
					return n
				}
			});
			var It = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
				jt = / jQuery\d+="(?:null|\d+)"/g,
				Ht = /^\s+/,
				zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
				Wt = /<([\w:]+)/,
				Ut = /<tbody/i,
				qt = /<|&#?\w+;/,
				Gt = /<(?:script|style|link)/i,
				Vt = /<(?:script|object|embed|option|style)/i,
				Kt = RegExp("<(?:" + It + ")[\\s/>]", "i"),
				Yt = /^(?:checkbox|radio)$/,
				Qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
				Xt = /\/(java|ecma)script/i,
				Zt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
				Jt = {
					option: [1, "<select multiple='multiple'>", "</select>"],
					legend: [1, "<fieldset>", "</fieldset>"],
					thead: [1, "<table>", "</table>"],
					tr: [2, "<table><tbody>", "</tbody></table>"],
					td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
					col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
					area: [1, "<map>", "</map>"],
					_default: [0, "", ""]
				}, en = u(H),
				tn = en.appendChild(H.createElement("div"));
			Jt.optgroup = Jt.option, Jt.tbody = Jt.tfoot = Jt.colgroup = Jt.caption = Jt.thead, Jt.th = Jt.td, Z.support.htmlSerialize || (Jt._default = [1, "X<div>", "</div>"]), Z.fn.extend({
				text: function(e) {
					return Z.access(this, function(e) {
						return e === t ? Z.text(this) : this.empty().append((this[0] && this[0].ownerDocument || H).createTextNode(e))
					}, null, e, arguments.length)
				},
				wrapAll: function(e) {
					if (Z.isFunction(e)) return this.each(function(t) {
							Z(this).wrapAll(e.call(this, t))
						});
					if (this[0]) {
						var t = Z(e, this[0].ownerDocument).eq(0).clone(!0);
						this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
							for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
							return e
						}).append(this)
					}
					return this
				},
				wrapInner: function(e) {
					return Z.isFunction(e) ? this.each(function(t) {
						Z(this).wrapInner(e.call(this, t))
					}) : this.each(function() {
						var t = Z(this),
							n = t.contents();
						n.length ? n.wrapAll(e) : t.append(e)
					})
				},
				wrap: function(e) {
					var t = Z.isFunction(e);
					return this.each(function(n) {
						Z(this).wrapAll(t ? e.call(this, n) : e)
					})
				},
				unwrap: function() {
					return this.parent().each(function() {
						Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
					}).end()
				},
				append: function() {
					return this.domManip(arguments, !0, function(e) {
						(1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
					})
				},
				prepend: function() {
					return this.domManip(arguments, !0, function(e) {
						(1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
					})
				},
				before: function() {
					if (!a(this[0])) return this.domManip(arguments, !1, function(e) {
							this.parentNode.insertBefore(e, this)
						});
					if (arguments.length) {
						var e = Z.clean(arguments);
						return this.pushStack(Z.merge(e, this), "before", this.selector)
					}
				},
				after: function() {
					if (!a(this[0])) return this.domManip(arguments, !1, function(e) {
							this.parentNode.insertBefore(e, this.nextSibling)
						});
					if (arguments.length) {
						var e = Z.clean(arguments);
						return this.pushStack(Z.merge(this, e), "after", this.selector)
					}
				},
				remove: function(e, t) {
					for (var n, r = 0; null != (n = this[r]); r++)(!e || Z.filter(e, [n]).length) && (t || 1 !== n.nodeType || (Z.cleanData(n.getElementsByTagName("*")), Z.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
					return this
				},
				empty: function() {
					for (var e, t = 0; null != (e = this[t]); t++) for (1 === e.nodeType && Z.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
					return this
				},
				clone: function(e, t) {
					return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
						return Z.clone(this, e, t)
					})
				},
				html: function(e) {
					return Z.access(this, function(e) {
						var n = this[0] || {}, r = 0,
							i = this.length;
						if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(jt, "") : t;
						if (!("string" != typeof e || Gt.test(e) || !Z.support.htmlSerialize && Kt.test(e) || !Z.support.leadingWhitespace && Ht.test(e) || Jt[(Wt.exec(e) || ["", ""])[1].toLowerCase()])) {
							e = e.replace(zt, "<$1></$2>");
							try {
								for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (Z.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
								n = 0
							} catch (o) {}
						}
						n && this.empty().append(e)
					}, null, e, arguments.length)
				},
				replaceWith: function(e) {
					return a(this[0]) ? this.length ? this.pushStack(Z(Z.isFunction(e) ? e() : e), "replaceWith", e) : this : Z.isFunction(e) ? this.each(function(t) {
						var n = Z(this),
							r = n.html();
						n.replaceWith(e.call(this, t, r))
					}) : ("string" != typeof e && (e = Z(e).detach()), this.each(function() {
						var t = this.nextSibling,
							n = this.parentNode;
						Z(this).remove(), t ? Z(t).before(e) : Z(n).append(e)
					}))
				},
				detach: function(e) {
					return this.remove(e, !0)
				},
				domManip: function(e, n, r) {
					e = [].concat.apply([], e);
					var i, o, s, a, l = 0,
						c = e[0],
						u = [],
						d = this.length;
					if (!Z.support.checkClone && d > 1 && "string" == typeof c && Qt.test(c)) return this.each(function() {
							Z(this).domManip(e, n, r)
						});
					if (Z.isFunction(c)) return this.each(function(i) {
							var o = Z(this);
							e[0] = c.call(this, i, n ? o.html() : t), o.domManip(e, n, r)
						});
					if (this[0]) {
						if (i = Z.buildFragment(e, this, u), s = i.fragment, o = s.firstChild, 1 === s.childNodes.length && (s = o), o) for (n = n && Z.nodeName(o, "tr"), a = i.cacheable || d - 1; d > l; l++) r.call(n && Z.nodeName(this[l], "table") ? h(this[l], "tbody") : this[l], l === a ? s : Z.clone(s, !0, !0));
						s = o = null, u.length && Z.each(u, function(e, t) {
							t.src ? Z.ajax ? Z.ajax({
								url: t.src,
								type: "GET",
								dataType: "script",
								async: !1,
								global: !1,
								"throws": !0
							}) : Z.error("no ajax") : Z.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Zt, "")), t.parentNode && t.parentNode.removeChild(t)
						})
					}
					return this
				}
			}), Z.buildFragment = function(e, n, r) {
				var i, o, s, a = e[0];
				return n = n || H, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, !(1 === e.length && "string" == typeof a && 512 > a.length && n === H && "<" === a.charAt(0)) || Vt.test(a) || !Z.support.checkClone && Qt.test(a) || !Z.support.html5Clone && Kt.test(a) || (o = !0, i = Z.fragments[a], s = i !== t), i || (i = n.createDocumentFragment(), Z.clean(e, n, i, r), o && (Z.fragments[a] = s && i)), {
					fragment: i,
					cacheable: o
				}
			}, Z.fragments = {}, Z.each({
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith"
			}, function(e, t) {
				Z.fn[e] = function(n) {
					var r, i = 0,
						o = [],
						s = Z(n),
						a = s.length,
						l = 1 === this.length && this[0].parentNode;
					if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === a) return s[t](this[0]), this;
					for (; a > i; i++) r = (i > 0 ? this.clone(!0) : this).get(), Z(s[i])[t](r), o = o.concat(r);
					return this.pushStack(o, e, s.selector)
				}
			}), Z.extend({
				clone: function(e, t, n) {
					var r, i, o, s;
					if (Z.support.html5Clone || Z.isXMLDoc(e) || !Kt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML, tn.removeChild(s = tn.firstChild)), !(Z.support.noCloneEvent && Z.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e))) for (f(e, s), r = p(e), i = p(s), o = 0; r[o]; ++o) i[o] && f(r[o], i[o]);
					if (t && (d(e, s), n)) for (r = p(e), i = p(s), o = 0; r[o]; ++o) d(r[o], i[o]);
					return r = i = null, s
				},
				clean: function(e, n, r, i) {
					var o, s, a, l, c, h, d, f, p, m, v, A = n === H && en,
						y = [];
					for (n && n.createDocumentFragment !== t || (n = H), o = 0; null != (a = e[o]); o++) if ("number" == typeof a && (a += ""), a) {
							if ("string" == typeof a) if (qt.test(a)) {
									for (A = A || u(n), d = n.createElement("div"), A.appendChild(d), a = a.replace(zt, "<$1></$2>"), l = (Wt.exec(a) || ["", ""])[1].toLowerCase(), c = Jt[l] || Jt._default, h = c[0], d.innerHTML = c[1] + a + c[2]; h--;) d = d.lastChild;
									if (!Z.support.tbody) for (f = Ut.test(a), p = "table" !== l || f ? "<table>" !== c[1] || f ? [] : d.childNodes : d.firstChild && d.firstChild.childNodes, s = p.length - 1; s >= 0; --s) Z.nodeName(p[s], "tbody") && !p[s].childNodes.length && p[s].parentNode.removeChild(p[s]);
									!Z.support.leadingWhitespace && Ht.test(a) && d.insertBefore(n.createTextNode(Ht.exec(a)[0]), d.firstChild), a = d.childNodes, d.parentNode.removeChild(d)
								} else a = n.createTextNode(a);
							a.nodeType ? y.push(a) : Z.merge(y, a)
						}
					if (d && (a = d = A = null), !Z.support.appendChecked) for (o = 0; null != (a = y[o]); o++) Z.nodeName(a, "input") ? g(a) : a.getElementsByTagName !== t && Z.grep(a.getElementsByTagName("input"), g);
					if (r) for (m = function(e) {
							return !e.type || Xt.test(e.type) ? i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : r.appendChild(e) : t
						}, o = 0; null != (a = y[o]); o++) Z.nodeName(a, "script") && m(a) || (r.appendChild(a), a.getElementsByTagName !== t && (v = Z.grep(Z.merge([], a.getElementsByTagName("script")), m), y.splice.apply(y, [o + 1, 0].concat(v)), o += v.length));
					return y
				},
				cleanData: function(e, t) {
					for (var n, r, i, o, s = 0, a = Z.expando, l = Z.cache, c = Z.support.deleteExpando, u = Z.event.special; null != (i = e[s]); s++) if ((t || Z.acceptData(i)) && (r = i[a], n = r && l[r])) {
							if (n.events) for (o in n.events) u[o] ? Z.event.remove(i, o) : Z.removeEvent(i, o, n.handle);
							l[r] && (delete l[r], c ? delete i[a] : i.removeAttribute ? i.removeAttribute(a) : i[a] = null, Z.deletedIds.push(r))
						}
				}
			}),
			function() {
				var e, t;
				Z.uaMatch = function(e) {
					e = e.toLowerCase();
					var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
					return {
						browser: t[1] || "",
						version: t[2] || "0"
					}
				}, e = Z.uaMatch(W.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), Z.browser = t, Z.sub = function() {
					function e(t, n) {
						return new e.fn.init(t, n)
					}
					Z.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, r) {
						return r && r instanceof Z && !(r instanceof e) && (r = e(r)), Z.fn.init.call(this, n, r, t)
					}, e.fn.init.prototype = e.fn;
					var t = e(H);
					return e
				}
			}();
			var nn, rn, on, sn = /alpha\([^)]*\)/i,
				an = /opacity=([^)]*)/,
				ln = /^(top|right|bottom|left)$/,
				cn = /^(none|table(?!-c[ea]).+)/,
				un = /^margin/,
				hn = RegExp("^(" + J + ")(.*)$", "i"),
				dn = RegExp("^(" + J + ")(?!px)[a-z%]+$", "i"),
				fn = RegExp("^([-+])=(" + J + ")", "i"),
				pn = {
					BODY: "block"
				}, gn = {
					position: "absolute",
					visibility: "hidden",
					display: "block"
				}, mn = {
					letterSpacing: 0,
					fontWeight: 400
				}, vn = ["Top", "Right", "Bottom", "Left"],
				An = ["Webkit", "O", "Moz", "ms"],
				yn = Z.fn.toggle;
			Z.fn.extend({
				css: function(e, n) {
					return Z.access(this, function(e, n, r) {
						return r !== t ? Z.style(e, n, r) : Z.css(e, n)
					}, e, n, arguments.length > 1)
				},
				show: function() {
					return A(this, !0)
				},
				hide: function() {
					return A(this)
				},
				toggle: function(e, t) {
					var n = "boolean" == typeof e;
					return Z.isFunction(e) && Z.isFunction(t) ? yn.apply(this, arguments) : this.each(function() {
						(n ? e : v(this)) ? Z(this).show() : Z(this).hide()
					})
				}
			}), Z.extend({
				cssHooks: {
					opacity: {
						get: function(e, t) {
							if (t) {
								var n = nn(e, "opacity");
								return "" === n ? "1" : n
							}
						}
					}
				},
				cssNumber: {
					fillOpacity: !0,
					fontWeight: !0,
					lineHeight: !0,
					opacity: !0,
					orphans: !0,
					widows: !0,
					zIndex: !0,
					zoom: !0
				},
				cssProps: {
					"float": Z.support.cssFloat ? "cssFloat" : "styleFloat"
				},
				style: function(e, n, r, i) {
					if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
						var o, s, a, l = Z.camelCase(n),
							c = e.style;
						if (n = Z.cssProps[l] || (Z.cssProps[l] = m(c, l)), a = Z.cssHooks[n] || Z.cssHooks[l], r === t) return a && "get" in a && (o = a.get(e, !1, i)) !== t ? o : c[n];
						if (s = typeof r, "string" === s && (o = fn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(Z.css(e, n)), s = "number"), !(null == r || "number" === s && isNaN(r) || ("number" !== s || Z.cssNumber[l] || (r += "px"), a && "set" in a && (r = a.set(e, r, i)) === t))) try {
								c[n] = r
						} catch (u) {}
					}
				},
				css: function(e, n, r, i) {
					var o, s, a, l = Z.camelCase(n);
					return n = Z.cssProps[l] || (Z.cssProps[l] = m(e.style, l)), a = Z.cssHooks[n] || Z.cssHooks[l], a && "get" in a && (o = a.get(e, !0, i)), o === t && (o = nn(e, n)), "normal" === o && n in mn && (o = mn[n]), r || i !== t ? (s = parseFloat(o), r || Z.isNumeric(s) ? s || 0 : o) : o
				},
				swap: function(e, t, n) {
					var r, i, o = {};
					for (i in t) o[i] = e.style[i], e.style[i] = t[i];
					r = n.call(e);
					for (i in t) e.style[i] = o[i];
					return r
				}
			}), e.getComputedStyle ? nn = function(t, n) {
				var r, i, o, s, a = e.getComputedStyle(t, null),
					l = t.style;
				return a && (r = a.getPropertyValue(n) || a[n], "" !== r || Z.contains(t.ownerDocument, t) || (r = Z.style(t, n)), dn.test(r) && un.test(n) && (i = l.width, o = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = r, r = a.width, l.width = i, l.minWidth = o, l.maxWidth = s)), r
			} : H.documentElement.currentStyle && (nn = function(e, t) {
				var n, r, i = e.currentStyle && e.currentStyle[t],
					o = e.style;
				return null == i && o && o[t] && (i = o[t]), dn.test(i) && !ln.test(t) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : i, i = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), "" === i ? "auto" : i
			}), Z.each(["height", "width"], function(e, n) {
				Z.cssHooks[n] = {
					get: function(e, r, i) {
						return r ? 0 === e.offsetWidth && cn.test(nn(e, "display")) ? Z.swap(e, gn, function() {
							return E(e, n, i)
						}) : E(e, n, i) : t
					},
					set: function(e, t, r) {
						return y(e, t, r ? C(e, n, r, Z.support.boxSizing && "border-box" === Z.css(e, "boxSizing")) : 0)
					}
				}
			}), Z.support.opacity || (Z.cssHooks.opacity = {
				get: function(e, t) {
					return an.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
				},
				set: function(e, t) {
					var n = e.style,
						r = e.currentStyle,
						i = Z.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
						o = r && r.filter || n.filter || "";
					n.zoom = 1, t >= 1 && "" === Z.trim(o.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = sn.test(o) ? o.replace(sn, i) : o + " " + i)
				}
			}), Z(function() {
				Z.support.reliableMarginRight || (Z.cssHooks.marginRight = {
					get: function(e, n) {
						return Z.swap(e, {
							display: "inline-block"
						}, function() {
							return n ? nn(e, "marginRight") : t
						})
					}
				}), !Z.support.pixelPosition && Z.fn.position && Z.each(["top", "left"], function(e, t) {
					Z.cssHooks[t] = {
						get: function(e, n) {
							if (n) {
								var r = nn(e, t);
								return dn.test(r) ? Z(e).position()[t] + "px" : r
							}
						}
					}
				})
			}), Z.expr && Z.expr.filters && (Z.expr.filters.hidden = function(e) {
				return 0 === e.offsetWidth && 0 === e.offsetHeight || !Z.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nn(e, "display"))
			}, Z.expr.filters.visible = function(e) {
				return !Z.expr.filters.hidden(e)
			}), Z.each({
				margin: "",
				padding: "",
				border: "Width"
			}, function(e, t) {
				Z.cssHooks[e + t] = {
					expand: function(n) {
						var r, i = "string" == typeof n ? n.split(" ") : [n],
							o = {};
						for (r = 0; 4 > r; r++) o[e + vn[r] + t] = i[r] || i[r - 2] || i[0];
						return o
					}
				}, un.test(e) || (Z.cssHooks[e + t].set = y)
			});
			var Cn = /%20/g,
				En = /\[\]$/,
				Fn = /\r?\n/g,
				wn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
				bn = /^(?:select|textarea)/i;
			Z.fn.extend({
				serialize: function() {
					return Z.param(this.serializeArray())
				},
				serializeArray: function() {
					return this.map(function() {
						return this.elements ? Z.makeArray(this.elements) : this
					}).filter(function() {
						return this.name && !this.disabled && (this.checked || bn.test(this.nodeName) || wn.test(this.type))
					}).map(function(e, t) {
						var n = Z(this).val();
						return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
							return {
								name: t.name,
								value: e.replace(Fn, "\r\n")
							}
						}) : {
							name: t.name,
							value: n.replace(Fn, "\r\n")
						}
					}).get()
				}
			}), Z.param = function(e, n) {
				var r, i = [],
					o = function(e, t) {
						t = Z.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
					};
				if (n === t && (n = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
						o(this.name, this.value)
					});
				else for (r in e) w(r, e[r], n, o);
				return i.join("&").replace(Cn, "+")
			};
			var $n, xn, Dn = /#.*$/,
				Bn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
				_n = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
				Sn = /^(?:GET|HEAD)$/,
				kn = /^\/\//,
				Tn = /\?/,
				Ln = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
				Mn = /([?&])_=[^&]*/,
				Rn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
				Pn = Z.fn.load,
				Nn = {}, On = {}, In = ["*/"] + ["*"];
			try {
				xn = z.href
			} catch (jn) {
				xn = H.createElement("a"), xn.href = "", xn = xn.href
			}
			$n = Rn.exec(xn.toLowerCase()) || [], Z.fn.load = function(e, n, r) {
				if ("string" != typeof e && Pn) return Pn.apply(this, arguments);
				if (!this.length) return this;
				var i, o, s, a = this,
					l = e.indexOf(" ");
				return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), Z.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), Z.ajax({
					url: e,
					type: o,
					dataType: "html",
					data: n,
					complete: function(e, t) {
						r && a.each(r, s || [e.responseText, t, e])
					}
				}).done(function(e) {
					s = arguments, a.html(i ? Z("<div>").append(e.replace(Ln, "")).find(i) : e)
				}), this
			}, Z.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
				Z.fn[t] = function(e) {
					return this.on(t, e)
				}
			}), Z.each(["get", "post"], function(e, n) {
				Z[n] = function(e, r, i, o) {
					return Z.isFunction(r) && (o = o || i, i = r, r = t), Z.ajax({
						type: n,
						url: e,
						data: r,
						success: i,
						dataType: o
					})
				}
			}), Z.extend({
				getScript: function(e, n) {
					return Z.get(e, t, n, "script")
				},
				getJSON: function(e, t, n) {
					return Z.get(e, t, n, "json")
				},
				ajaxSetup: function(e, t) {
					return t ? x(e, Z.ajaxSettings) : (t = e, e = Z.ajaxSettings), x(e, t), e
				},
				ajaxSettings: {
					url: xn,
					isLocal: _n.test($n[1]),
					global: !0,
					type: "GET",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					processData: !0,
					async: !0,
					accepts: {
						xml: "application/xml, text/xml",
						html: "text/html",
						text: "text/plain",
						json: "application/json, text/javascript",
						"*": In
					},
					contents: {
						xml: /xml/,
						html: /html/,
						json: /json/
					},
					responseFields: {
						xml: "responseXML",
						text: "responseText"
					},
					converters: {
						"* text": e.String,
						"text html": !0,
						"text json": Z.parseJSON,
						"text xml": Z.parseXML
					},
					flatOptions: {
						context: !0,
						url: !0
					}
				},
				ajaxPrefilter: b(Nn),
				ajaxTransport: b(On),
				ajax: function(e, n) {
					function r(e, n, r, s) {
						var c, h, A, y, E, w = n;
						2 !== C && (C = 2, l && clearTimeout(l), a = t, o = s || "", F.readyState = e > 0 ? 4 : 0, r && (y = D(d, F, r)), e >= 200 && 300 > e || 304 === e ? (d.ifModified && (E = F.getResponseHeader("Last-Modified"), E && (Z.lastModified[i] = E), E = F.getResponseHeader("Etag"), E && (Z.etag[i] = E)), 304 === e ? (w = "notmodified", c = !0) : (c = B(d, y), w = c.state, h = c.data, A = c.error, c = !A)) : (A = w, (!w || e) && (w = "error", 0 > e && (e = 0))), F.status = e, F.statusText = (n || w) + "", c ? g.resolveWith(f, [h, w, F]) : g.rejectWith(f, [F, w, A]), F.statusCode(v), v = t, u && p.trigger("ajax" + (c ? "Success" : "Error"), [F, d, c ? h : A]), m.fireWith(f, [F, w]), u && (p.trigger("ajaxComplete", [F, d]), --Z.active || Z.event.trigger("ajaxStop")))
					}
					"object" == typeof e && (n = e, e = t), n = n || {};
					var i, o, s, a, l, c, u, h, d = Z.ajaxSetup({}, n),
						f = d.context || d,
						p = f !== d && (f.nodeType || f instanceof Z) ? Z(f) : Z.event,
						g = Z.Deferred(),
						m = Z.Callbacks("once memory"),
						v = d.statusCode || {}, A = {}, y = {}, C = 0,
						E = "canceled",
						F = {
							readyState: 0,
							setRequestHeader: function(e, t) {
								if (!C) {
									var n = e.toLowerCase();
									e = y[n] = y[n] || e, A[e] = t
								}
								return this
							},
							getAllResponseHeaders: function() {
								return 2 === C ? o : null
							},
							getResponseHeader: function(e) {
								var n;
								if (2 === C) {
									if (!s) for (s = {}; n = Bn.exec(o);) s[n[1].toLowerCase()] = n[2];
									n = s[e.toLowerCase()]
								}
								return n === t ? null : n
							},
							overrideMimeType: function(e) {
								return C || (d.mimeType = e), this
							},
							abort: function(e) {
								return e = e || E, a && a.abort(e), r(0, e), this
							}
						};
					if (g.promise(F), F.success = F.done, F.error = F.fail, F.complete = m.add, F.statusCode = function(e) {
						if (e) {
							var t;
							if (2 > C) for (t in e) v[t] = [v[t], e[t]];
							else t = e[F.status], F.always(t)
						}
						return this
					}, d.url = ((e || d.url) + "").replace(Dn, "").replace(kn, $n[1] + "//"), d.dataTypes = Z.trim(d.dataType || "*").toLowerCase().split(tt), null == d.crossDomain && (c = Rn.exec(d.url.toLowerCase()), d.crossDomain = !(!c || c[1] === $n[1] && c[2] === $n[2] && (c[3] || ("http:" === c[1] ? 80 : 443)) == ($n[3] || ("http:" === $n[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = Z.param(d.data, d.traditional)), $(Nn, d, n, F), 2 === C) return F;
					if (u = d.global, d.type = d.type.toUpperCase(), d.hasContent = !Sn.test(d.type), u && 0 === Z.active++ && Z.event.trigger("ajaxStart"), !d.hasContent && (d.data && (d.url += (Tn.test(d.url) ? "&" : "?") + d.data, delete d.data), i = d.url, d.cache === !1)) {
						var w = Z.now(),
							b = d.url.replace(Mn, "$1_=" + w);
						d.url = b + (b === d.url ? (Tn.test(d.url) ? "&" : "?") + "_=" + w : "")
					}(d.data && d.hasContent && d.contentType !== !1 || n.contentType) && F.setRequestHeader("Content-Type", d.contentType), d.ifModified && (i = i || d.url, Z.lastModified[i] && F.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && F.setRequestHeader("If-None-Match", Z.etag[i])), F.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + In + "; q=0.01" : "") : d.accepts["*"]);
					for (h in d.headers) F.setRequestHeader(h, d.headers[h]);
					if (d.beforeSend && (d.beforeSend.call(f, F, d) === !1 || 2 === C)) return F.abort();
					E = "abort";
					for (h in {
						success: 1,
						error: 1,
						complete: 1
					}) F[h](d[h]);
					if (a = $(On, d, n, F)) {
						F.readyState = 1, u && p.trigger("ajaxSend", [F, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
							F.abort("timeout")
						}, d.timeout));
						try {
							C = 1, a.send(A, r)
						} catch (x) {
							if (!(2 > C)) throw x;
							r(-1, x)
						}
					} else r(-1, "No Transport");
					return F
				},
				active: 0,
				lastModified: {},
				etag: {}
			});
			var Hn = [],
				zn = /\?/,
				Wn = /(=)\?(?=&|$)|\?\?/,
				Un = Z.now();
			Z.ajaxSetup({
				jsonp: "callback",
				jsonpCallback: function() {
					var e = Hn.pop() || Z.expando + "_" + Un++;
					return this[e] = !0, e
				}
			}), Z.ajaxPrefilter("json jsonp", function(n, r, i) {
				var o, s, a, l = n.data,
					c = n.url,
					u = n.jsonp !== !1,
					h = u && Wn.test(c),
					d = u && !h && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Wn.test(l);
				return "jsonp" === n.dataTypes[0] || h || d ? (o = n.jsonpCallback = Z.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, s = e[o], h ? n.url = c.replace(Wn, "$1" + o) : d ? n.data = l.replace(Wn, "$1" + o) : u && (n.url += (zn.test(c) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
					return a || Z.error(o + " was not called"), a[0]
				}, n.dataTypes[0] = "json", e[o] = function() {
					a = arguments
				}, i.always(function() {
					e[o] = s, n[o] && (n.jsonpCallback = r.jsonpCallback, Hn.push(o)), a && Z.isFunction(s) && s(a[0]), a = s = t
				}), "script") : t
			}), Z.ajaxSetup({
				accepts: {
					script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
				},
				contents: {
					script: /javascript|ecmascript/
				},
				converters: {
					"text script": function(e) {
						return Z.globalEval(e), e
					}
				}
			}), Z.ajaxPrefilter("script", function(e) {
				e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
			}), Z.ajaxTransport("script", function(e) {
				if (e.crossDomain) {
					var n, r = H.head || H.getElementsByTagName("head")[0] || H.documentElement;
					return {
						send: function(i, o) {
							n = H.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
								(i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success"))
							}, r.insertBefore(n, r.firstChild)
						},
						abort: function() {
							n && n.onload(0, 1)
						}
					}
				}
			});
			var qn, Gn = e.ActiveXObject ? function() {
					for (var e in qn) qn[e](0, 1)
				} : !1,
				Vn = 0;
			Z.ajaxSettings.xhr = e.ActiveXObject ? function() {
				return !this.isLocal && _() || S()
			} : _,
			function(e) {
				Z.extend(Z.support, {
					ajax: !! e,
					cors: !! e && "withCredentials" in e
				})
			}(Z.ajaxSettings.xhr()), Z.support.ajax && Z.ajaxTransport(function(n) {
				if (!n.crossDomain || Z.support.cors) {
					var r;
					return {
						send: function(i, o) {
							var s, a, l = n.xhr();
							if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (a in n.xhrFields) l[a] = n.xhrFields[a];
							n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
							try {
								for (a in i) l.setRequestHeader(a, i[a])
							} catch (c) {}
							l.send(n.hasContent && n.data || null), r = function(e, i) {
								var a, c, u, h, d;
								try {
									if (r && (i || 4 === l.readyState)) if (r = t, s && (l.onreadystatechange = Z.noop, Gn && delete qn[s]), i) 4 !== l.readyState && l.abort();
										else {
											a = l.status, u = l.getAllResponseHeaders(), h = {}, d = l.responseXML, d && d.documentElement && (h.xml = d);
											try {
												h.text = l.responseText
											} catch (f) {}
											try {
												c = l.statusText
											} catch (f) {
												c = ""
											}
											a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
										}
								} catch (p) {
									i || o(-1, p)
								}
								h && o(a, c, h, u)
							}, n.async ? 4 === l.readyState ? setTimeout(r, 0) : (s = ++Vn, Gn && (qn || (qn = {}, Z(e).unload(Gn)), qn[s] = r), l.onreadystatechange = r) : r()
						},
						abort: function() {
							r && r(0, 1)
						}
					}
				}
			});
			var Kn, Yn, Qn = /^(?:toggle|show|hide)$/,
				Xn = RegExp("^(?:([-+])=|)(" + J + ")([a-z%]*)$", "i"),
				Zn = /queueHooks$/,
				Jn = [R],
				er = {
					"*": [
						function(e, t) {
							var n, r, i = this.createTween(e, t),
								o = Xn.exec(t),
								s = i.cur(),
								a = +s || 0,
								l = 1,
								c = 20;
							if (o) {
								if (n = +o[2], r = o[3] || (Z.cssNumber[e] ? "" : "px"), "px" !== r && a) {
									a = Z.css(i.elem, e, !0) || n || 1;
									do l = l || ".5", a /= l, Z.style(i.elem, e, a + r); while (l !== (l = i.cur() / s) && 1 !== l && --c)
								}
								i.unit = r, i.start = a, i.end = o[1] ? a + (o[1] + 1) * n : n
							}
							return i
						}
					]
				};
			Z.Animation = Z.extend(L, {
				tweener: function(e, t) {
					Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
					for (var n, r = 0, i = e.length; i > r; r++) n = e[r], er[n] = er[n] || [], er[n].unshift(t)
				},
				prefilter: function(e, t) {
					t ? Jn.unshift(e) : Jn.push(e)
				}
			}), Z.Tween = P, P.prototype = {
				constructor: P,
				init: function(e, t, n, r, i, o) {
					this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
				},
				cur: function() {
					var e = P.propHooks[this.prop];
					return e && e.get ? e.get(this) : P.propHooks._default.get(this)
				},
				run: function(e) {
					var t, n = P.propHooks[this.prop];
					return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
				}
			}, P.prototype.init.prototype = P.prototype, P.propHooks = {
				_default: {
					get: function(e) {
						var t;
						return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
					},
					set: function(e) {
						Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
					}
				}
			}, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
				set: function(e) {
					e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
				}
			}, Z.each(["toggle", "show", "hide"], function(e, t) {
				var n = Z.fn[t];
				Z.fn[t] = function(r, i, o) {
					return null == r || "boolean" == typeof r || !e && Z.isFunction(r) && Z.isFunction(i) ? n.apply(this, arguments) : this.animate(N(t, !0), r, i, o)
				}
			}), Z.fn.extend({
				fadeTo: function(e, t, n, r) {
					return this.filter(v).css("opacity", 0).show().end().animate({
						opacity: t
					}, e, n, r)
				},
				animate: function(e, t, n, r) {
					var i = Z.isEmptyObject(e),
						o = Z.speed(t, n, r),
						s = function() {
							var t = L(this, Z.extend({}, e), o);
							i && t.stop(!0)
						};
					return i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
				},
				stop: function(e, n, r) {
					var i = function(e) {
						var t = e.stop;
						delete e.stop, t(r)
					};
					return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
						var t = !0,
							n = null != e && e + "queueHooks",
							o = Z.timers,
							s = Z._data(this);
						if (n) s[n] && s[n].stop && i(s[n]);
						else for (n in s) s[n] && s[n].stop && Zn.test(n) && i(s[n]);
						for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
						(t || !r) && Z.dequeue(this, e)
					})
				}
			}), Z.each({
				slideDown: N("show"),
				slideUp: N("hide"),
				slideToggle: N("toggle"),
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
				Z.fn[e] = function(e, n, r) {
					return this.animate(t, e, n, r)
				}
			}), Z.speed = function(e, t, n) {
				var r = e && "object" == typeof e ? Z.extend({}, e) : {
					complete: n || !n && t || Z.isFunction(e) && e,
					duration: e,
					easing: n && t || t && !Z.isFunction(t) && t
				};
				return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
					Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
				}, r
			}, Z.easing = {
				linear: function(e) {
					return e
				},
				swing: function(e) {
					return .5 - Math.cos(e * Math.PI) / 2
				}
			}, Z.timers = [], Z.fx = P.prototype.init, Z.fx.tick = function() {
				var e, n = Z.timers,
					r = 0;
				for (Kn = Z.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
				n.length || Z.fx.stop(), Kn = t
			}, Z.fx.timer = function(e) {
				e() && Z.timers.push(e) && !Yn && (Yn = setInterval(Z.fx.tick, Z.fx.interval))
			}, Z.fx.interval = 13, Z.fx.stop = function() {
				clearInterval(Yn), Yn = null
			}, Z.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, Z.fx.step = {}, Z.expr && Z.expr.filters && (Z.expr.filters.animated = function(e) {
				return Z.grep(Z.timers, function(t) {
					return e === t.elem
				}).length
			});
			var tr = /^(?:body|html)$/i;
			Z.fn.offset = function(e) {
				if (arguments.length) return e === t ? this : this.each(function(t) {
						Z.offset.setOffset(this, e, t)
					});
				var n, r, i, o, s, a, l, c = {
						top: 0,
						left: 0
					}, u = this[0],
					h = u && u.ownerDocument;
				if (h) return (r = h.body) === u ? Z.offset.bodyOffset(u) : (n = h.documentElement, Z.contains(n, u) ? (u.getBoundingClientRect !== t && (c = u.getBoundingClientRect()), i = O(h), o = n.clientTop || r.clientTop || 0, s = n.clientLeft || r.clientLeft || 0, a = i.pageYOffset || n.scrollTop, l = i.pageXOffset || n.scrollLeft, {
						top: c.top + a - o,
						left: c.left + l - s
					}) : c)
			}, Z.offset = {
				bodyOffset: function(e) {
					var t = e.offsetTop,
						n = e.offsetLeft;
					return Z.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(Z.css(e, "marginTop")) || 0, n += parseFloat(Z.css(e, "marginLeft")) || 0), {
						top: t,
						left: n
					}
				},
				setOffset: function(e, t, n) {
					var r = Z.css(e, "position");
					"static" === r && (e.style.position = "relative");
					var i, o, s = Z(e),
						a = s.offset(),
						l = Z.css(e, "top"),
						c = Z.css(e, "left"),
						u = ("absolute" === r || "fixed" === r) && Z.inArray("auto", [l, c]) > -1,
						h = {}, d = {};
					u ? (d = s.position(), i = d.top, o = d.left) : (i = parseFloat(l) || 0, o = parseFloat(c) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (h.top = t.top - a.top + i), null != t.left && (h.left = t.left - a.left + o), "using" in t ? t.using.call(e, h) : s.css(h)
				}
			}, Z.fn.extend({
				position: function() {
					if (this[0]) {
						var e = this[0],
							t = this.offsetParent(),
							n = this.offset(),
							r = tr.test(t[0].nodeName) ? {
								top: 0,
								left: 0
							} : t.offset();
						return n.top -= parseFloat(Z.css(e, "marginTop")) || 0, n.left -= parseFloat(Z.css(e, "marginLeft")) || 0, r.top += parseFloat(Z.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(Z.css(t[0], "borderLeftWidth")) || 0, {
							top: n.top - r.top,
							left: n.left - r.left
						}
					}
				},
				offsetParent: function() {
					return this.map(function() {
						for (var e = this.offsetParent || H.body; e && !tr.test(e.nodeName) && "static" === Z.css(e, "position");) e = e.offsetParent;
						return e || H.body
					})
				}
			}), Z.each({
				scrollLeft: "pageXOffset",
				scrollTop: "pageYOffset"
			}, function(e, n) {
				var r = /Y/.test(n);
				Z.fn[e] = function(i) {
					return Z.access(this, function(e, i, o) {
						var s = O(e);
						return o === t ? s ? n in s ? s[n] : s.document.documentElement[i] : e[i] : (s ? s.scrollTo(r ? Z(s).scrollLeft() : o, r ? o : Z(s).scrollTop()) : e[i] = o, t)
					}, e, i, arguments.length, null)
				}
			}), Z.each({
				Height: "height",
				Width: "width"
			}, function(e, n) {
				Z.each({
					padding: "inner" + e,
					content: n,
					"": "outer" + e
				}, function(r, i) {
					Z.fn[i] = function(i, o) {
						var s = arguments.length && (r || "boolean" != typeof i),
							a = r || (i === !0 || o === !0 ? "margin" : "border");
						return Z.access(this, function(n, r, i) {
							var o;
							return Z.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? Z.css(n, r, i, a) : Z.style(n, r, i, a)
						}, n, s ? i : t, s, null)
					}
				})
			}), e.jQuery = e.$ = Z, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
				return Z
			})
		})(window),
		function(e) {
			"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
		}(function(e) {
			function t(e) {
				return e
			}
			function n(e) {
				return decodeURIComponent(e.replace(i, " "))
			}
			function r(e) {
				0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
				try {
					return o.json ? JSON.parse(e) : e
				} catch (t) {}
			}
			var i = /\+/g,
				o = e.cookie = function(i, s, a) {
					if (void 0 !== s) {
						if (a = e.extend({}, o.defaults, a), "number" == typeof a.expires) {
							var l = a.expires,
								c = a.expires = new Date;
							c.setDate(c.getDate() + l)
						}
						return s = o.json ? JSON.stringify(s) : s + "", document.cookie = [o.raw ? i : encodeURIComponent(i), "=", o.raw ? s : encodeURIComponent(s), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
					}
					for (var u = o.raw ? t : n, h = document.cookie.split("; "), d = i ? void 0 : {}, f = 0, p = h.length; p > f; f++) {
						var g = h[f].split("="),
							m = u(g.shift()),
							v = u(g.join("="));
						if (i && i === m) {
							d = r(v);
							break
						}
						i || (d[m] = r(v))
					}
					return d
				};
			o.defaults = {}, e.removeCookie = function(t, n) {
				return void 0 !== e.cookie(t) ? (e.cookie(t, "", e.extend({}, n, {
					expires: -1
				})), !0) : !1
			}
		});
		varπ = Math.PI,
			ε = 1e-6,
			d3 = {
				version: "3.0.6"
			}, d3_radians = π/180,d3_degrees=180/π,
			d3_document = document,
			d3_window = window,
			d3_format_decimalPoint = ".",
			d3_format_thousandsSeparator = "",
			d3_format_grouping = [-1];
		Date.now || (Date.now = function() {
			return +new Date
		});
		try {
			d3_document.createElement("div").style.setProperty("opacity", 0, "")
		} catch (error) {
			var d3_style_prototype = d3_window.CSSStyleDeclaration.prototype,
				d3_style_setProperty = d3_style_prototype.setProperty;
			d3_style_prototype.setProperty = function(e, t, n) {
				d3_style_setProperty.call(this, e, t + "", n)
			}
		}
		var d3_array = d3_arraySlice;
		try {
			d3_array(d3_document.documentElement.childNodes)[0].nodeType
		} catch (e) {
			d3_array = d3_arrayCopy
		}
		var d3_arraySubclass = [].__proto__ ? function(e, t) {
				e.__proto__ = t
			} : function(e, t) {
				for (var n in t) e[n] = t[n]
			};
		d3.map = function(e) {
			var t = new d3_Map;
			for (var n in e) t.set(n, e[n]);
			return t
		}, d3_class(d3_Map, {
			has: function(e) {
				return d3_map_prefix + e in this
			},
			get: function(e) {
				return this[d3_map_prefix + e]
			},
			set: function(e, t) {
				return this[d3_map_prefix + e] = t
			},
			remove: function(e) {
				return e = d3_map_prefix + e, e in this && delete this[e]
			},
			keys: function() {
				var e = [];
				return this.forEach(function(t) {
					e.push(t)
				}), e
			},
			values: function() {
				var e = [];
				return this.forEach(function(t, n) {
					e.push(n)
				}), e
			},
			entries: function() {
				var e = [];
				return this.forEach(function(t, n) {
					e.push({
						key: t,
						value: n
					})
				}), e
			},
			forEach: function(e) {
				for (var t in this) t.charCodeAt(0) === d3_map_prefixCode && e.call(this, t.substring(1), this[t])
			}
		});
		var d3_map_prefix = "\0",
			d3_map_prefixCode = d3_map_prefix.charCodeAt(0);
		d3.functor = d3_functor, d3.rebind = function(e, t) {
			for (var n, r = 1, i = arguments.length; i > ++r;) e[n = arguments[r]] = d3_rebind(e, t, t[n]);
			return e
		}, d3.ascending = function(e, t) {
			return t > e ? -1 : e > t ? 1 : e >= t ? 0 : 0 / 0
		}, d3.descending = function(e, t) {
			return e > t ? -1 : t > e ? 1 : t >= e ? 0 : 0 / 0
		}, d3.mean = function(e, t) {
			var n, r = e.length,
				i = 0,
				o = -1,
				s = 0;
			if (1 === arguments.length) for (; r > ++o;) d3_number(n = e[o]) && (i += (n - i) / ++s);
			else for (; r > ++o;) d3_number(n = t.call(e, e[o], o)) && (i += (n - i) / ++s);
			return s ? i : void 0
		}, d3.median = function(e, t) {
			return arguments.length > 1 && (e = e.map(t)), e = e.filter(d3_number), e.length ? d3.quantile(e.sort(d3.ascending), .5) : void 0
		}, d3.min = function(e, t) {
			var n, r, i = -1,
				o = e.length;
			if (1 === arguments.length) {
				for (; o > ++i && (null == (n = e[i]) || n != n);) n = void 0;
				for (; o > ++i;) null != (r = e[i]) && n > r && (n = r)
			} else {
				for (; o > ++i && (null == (n = t.call(e, e[i], i)) || n != n);) n = void 0;
				for (; o > ++i;) null != (r = t.call(e, e[i], i)) && n > r && (n = r)
			}
			return n
		}, d3.max = function(e, t) {
			var n, r, i = -1,
				o = e.length;
			if (1 === arguments.length) {
				for (; o > ++i && (null == (n = e[i]) || n != n);) n = void 0;
				for (; o > ++i;) null != (r = e[i]) && r > n && (n = r)
			} else {
				for (; o > ++i && (null == (n = t.call(e, e[i], i)) || n != n);) n = void 0;
				for (; o > ++i;) null != (r = t.call(e, e[i], i)) && r > n && (n = r)
			}
			return n
		}, d3.extent = function(e, t) {
			var n, r, i, o = -1,
				s = e.length;
			if (1 === arguments.length) {
				for (; s > ++o && (null == (n = i = e[o]) || n != n);) n = i = void 0;
				for (; s > ++o;) null != (r = e[o]) && (n > r && (n = r), r > i && (i = r))
			} else {
				for (; s > ++o && (null == (n = i = t.call(e, e[o], o)) || n != n);) n = void 0;
				for (; s > ++o;) null != (r = t.call(e, e[o], o)) && (n > r && (n = r), r > i && (i = r))
			}
			return [n, i]
		}, d3.random = {
			normal: function(e, t) {
				var n = arguments.length;
				return 2 > n && (t = 1), 1 > n && (e = 0),
				function() {
					var n, r, i;
					do n = 2 * Math.random() - 1, r = 2 * Math.random() - 1, i = n * n + r * r; while (!i || i > 1);
					return e + t * n * Math.sqrt(-2 * Math.log(i) / i)
				}
			},
			logNormal: function() {
				var e = d3.random.normal.apply(d3, arguments);
				return function() {
					return Math.exp(e())
				}
			},
			irwinHall: function(e) {
				return function() {
					for (var t = 0, n = 0; e > n; n++) t += Math.random();
					return t / e
				}
			}
		}, d3.sum = function(e, t) {
			var n, r = 0,
				i = e.length,
				o = -1;
			if (1 === arguments.length) for (; i > ++o;) isNaN(n = +e[o]) || (r += n);
			else for (; i > ++o;) isNaN(n = +t.call(e, e[o], o)) || (r += n);
			return r
		}, d3.quantile = function(e, t) {
			var n = (e.length - 1) * t + 1,
				r = Math.floor(n),
				i = +e[r - 1],
				o = n - r;
			return o ? i + o * (e[r] - i) : i
		}, d3.shuffle = function(e) {
			for (var t, n, r = e.length; r;) n = 0 | Math.random() * r--, t = e[r], e[r] = e[n], e[n] = t;
			return e
		}, d3.transpose = function(e) {
			return d3.zip.apply(d3, e)
		}, d3.zip = function() {
			if (!(r = arguments.length)) return [];
			for (var e = -1, t = d3.min(arguments, d3_zipLength), n = Array(t); t > ++e;) for (var r, i = -1, o = n[e] = Array(r); r > ++i;) o[i] = arguments[i][e];
			return n
		}, d3.bisector = function(e) {
			return {
				left: function(t, n, r, i) {
					for (3 > arguments.length && (r = 0), 4 > arguments.length && (i = t.length); i > r;) {
						var o = r + i >>> 1;
						n > e.call(t, t[o], o) ? r = o + 1 : i = o
					}
					return r
				},
				right: function(t, n, r, i) {
					for (3 > arguments.length && (r = 0), 4 > arguments.length && (i = t.length); i > r;) {
						var o = r + i >>> 1;
						e.call(t, t[o], o) > n ? i = o : r = o + 1
					}
					return r
				}
			}
		};
		var d3_bisector = d3.bisector(function(e) {
			return e
		});
		d3.bisectLeft = d3_bisector.left, d3.bisect = d3.bisectRight = d3_bisector.right, d3.nest = function() {
			function e(t, s) {
				if (s >= o.length) return r ? r.call(i, t) : n ? t.sort(n) : t;
				for (var a, l, c, u = -1, h = t.length, d = o[s++], f = new d3_Map, p = {}; h > ++u;)(c = f.get(a = d(l = t[u]))) ? c.push(l) : f.set(a, [l]);
				return f.forEach(function(t, n) {
					p[t] = e(n, s)
				}), p
			}
			function t(e, n) {
				if (n >= o.length) return e;
				var r, i = [],
					a = s[n++];
				for (r in e) i.push({
						key: r,
						values: t(e[r], n)
					});
				return a && i.sort(function(e, t) {
					return a(e.key, t.key)
				}), i
			}
			var n, r, i = {}, o = [],
				s = [];
			return i.map = function(t) {
				return e(t, 0)
			}, i.entries = function(n) {
				return t(e(n, 0), 0)
			}, i.key = function(e) {
				return o.push(e), i
			}, i.sortKeys = function(e) {
				return s[o.length - 1] = e, i
			}, i.sortValues = function(e) {
				return n = e, i
			}, i.rollup = function(e) {
				return r = e, i
			}, i
		}, d3.keys = function(e) {
			var t = [];
			for (var n in e) t.push(n);
			return t
		}, d3.values = function(e) {
			var t = [];
			for (var n in e) t.push(e[n]);
			return t
		}, d3.entries = function(e) {
			var t = [];
			for (var n in e) t.push({
					key: n,
					value: e[n]
				});
			return t
		}, d3.permute = function(e, t) {
			for (var n = [], r = -1, i = t.length; i > ++r;) n[r] = e[t[r]];
			return n
		}, d3.merge = function(e) {
			return Array.prototype.concat.apply([], e)
		}, d3.range = function(e, t, n) {
			if (3 > arguments.length && (n = 1, 2 > arguments.length && (t = e, e = 0)), 1 / 0 === (t - e) / n) throw Error("infinite range");
			var r, i = [],
				o = d3_range_integerScale(Math.abs(n)),
				s = -1;
			if (e *= o, t *= o, n *= o, 0 > n) for (;
				(r = e + n * ++s) > t;) i.push(r / o);
			else for (; t > (r = e + n * ++s);) i.push(r / o);
			return i
		}, d3.requote = function(e) {
			return e.replace(d3_requote_re, "\\$&")
		};
		var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
		d3.round = function(e, t) {
			return t ? Math.round(e * (t = Math.pow(10, t))) / t : Math.round(e)
		}, d3.xhr = function(e, t, n) {
			function r() {
				var e = l.status;
				!e && l.responseText || e >= 200 && 300 > e || 304 === e ? o.load.call(i, a.call(i, l)) : o.error.call(i, l)
			}
			var i = {}, o = d3.dispatch("progress", "load", "error"),
				s = {}, a = d3_identity,
				l = new(d3_window.XDomainRequest && /^(http(s)?:)?\/\//.test(e) ? XDomainRequest : XMLHttpRequest);
			return "onload" in l ? l.onload = l.onerror = r : l.onreadystatechange = function() {
				l.readyState > 3 && r()
			}, l.onprogress = function(e) {
				var t = d3.event;
				d3.event = e;
				try {
					o.progress.call(i, l)
				} finally {
					d3.event = t
				}
			}, i.header = function(e, t) {
				return e = (e + "").toLowerCase(), 2 > arguments.length ? s[e] : (null == t ? delete s[e] : s[e] = t + "", i)
			}, i.mimeType = function(e) {
				return arguments.length ? (t = null == e ? null : e + "", i) : t
			}, i.response = function(e) {
				return a = e, i
			}, ["get", "post"].forEach(function(e) {
				i[e] = function() {
					return i.send.apply(i, [e].concat(d3_array(arguments)))
				}
			}), i.send = function(n, r, o) {
				if (2 === arguments.length && "function" == typeof r && (o = r, r = null), l.open(n, e, !0), null == t || "accept" in s || (s.accept = t + ",*/*"), l.setRequestHeader) for (var a in s) l.setRequestHeader(a, s[a]);
				return null != t && l.overrideMimeType && l.overrideMimeType(t), null != o && i.on("error", o).on("load", function(e) {
					o(null, e)
				}), l.send(null == r ? null : r), i
			}, i.abort = function() {
				return l.abort(), i
			}, d3.rebind(i, o, "on"), 2 === arguments.length && "function" == typeof t && (n = t, t = null), null == n ? i : i.get(d3_xhr_fixCallback(n))
		}, d3.text = function() {
			return d3.xhr.apply(d3, arguments).response(d3_text)
		}, d3.json = function(e, t) {
			return d3.xhr(e, "application/json", t).response(d3_json)
		}, d3.html = function(e, t) {
			return d3.xhr(e, "text/html", t).response(d3_html)
		}, d3.xml = function() {
			return d3.xhr.apply(d3, arguments).response(d3_xml)
		};
		var d3_nsPrefix = {
			svg: "http://www.w3.org/2000/svg",
			xhtml: "http://www.w3.org/1999/xhtml",
			xlink: "http://www.w3.org/1999/xlink",
			xml: "http://www.w3.org/XML/1998/namespace",
			xmlns: "http://www.w3.org/2000/xmlns/"
		};
		d3.ns = {
			prefix: d3_nsPrefix,
			qualify: function(e) {
				var t = e.indexOf(":"),
					n = e;
				return t >= 0 && (n = e.substring(0, t), e = e.substring(t + 1)), d3_nsPrefix.hasOwnProperty(n) ? {
					space: d3_nsPrefix[n],
					local: e
				} : e
			}
		}, d3.dispatch = function() {
			for (var e = new d3_dispatch, t = -1, n = arguments.length; n > ++t;) e[arguments[t]] = d3_dispatch_event(e);
			return e
		}, d3_dispatch.prototype.on = function(e, t) {
			var n = e.indexOf("."),
				r = "";
			return n > 0 && (r = e.substring(n + 1), e = e.substring(0, n)), 2 > arguments.length ? this[e].on(r) : this[e].on(r, t)
		}, d3.format = function(e) {
			var t = d3_format_re.exec(e),
				n = t[1] || " ",
				r = t[2] || ">",
				i = t[3] || "",
				o = t[4] || "",
				s = t[5],
				a = +t[6],
				l = t[7],
				c = t[8],
				u = t[9],
				h = 1,
				d = "",
				f = !1;
			switch (c && (c = +c.substring(1)), (s || "0" === n && "=" === r) && (s = n = "0", r = "=", l && (a -= Math.floor((a - 1) / 4))), u) {
				case "n":
					l = !0, u = "g";
					break;
				case "%":
					h = 100, d = "%", u = "f";
					break;
				case "p":
					h = 100, d = "%", u = "r";
					break;
				case "b":
				case "o":
				case "x":
				case "X":
					o && (o = "0" + u.toLowerCase());
				case "c":
				case "d":
					f = !0, c = 0;
					break;
				case "s":
					h = -1, u = "r"
			}
			"#" === o && (o = ""), "r" != u || c || (u = "g"), u = d3_format_types.get(u) || d3_format_typeDefault;
			var p = s && l;
			return function(e) {
				if (f && e % 1) return "";
				var t = 0 > e || 0 === e && 0 > 1 / e ? (e = -e, "-") : i;
				if (0 > h) {
					var g = d3.formatPrefix(e, c);
					e = g.scale(e), d = g.symbol
				} else e *= h;
				e = u(e, c), !s && l && (e = d3_format_group(e));
				var m = o.length + e.length + (p ? 0 : t.length),
					v = a > m ? Array(m = a - m + 1).join(n) : "";
				return p && (e = d3_format_group(v + e)), d3_format_decimalPoint && e.replace(".", d3_format_decimalPoint), t += o, ("<" === r ? t + e + v : ">" === r ? v + t + e : "^" === r ? v.substring(0, m >>= 1) + t + e + v.substring(m) : t + (p ? e : v + e)) + d
			}
		};
		var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/,
			d3_format_types = d3.map({
				b: function(e) {
					return e.toString(2)
				},
				c: function(e) {
					return String.fromCharCode(e)
				},
				o: function(e) {
					return e.toString(8)
				},
				x: function(e) {
					return e.toString(16)
				},
				X: function(e) {
					return e.toString(16).toUpperCase()
				},
				g: function(e, t) {
					return e.toPrecision(t)
				},
				e: function(e, t) {
					return e.toExponential(t)
				},
				f: function(e, t) {
					return e.toFixed(t)
				},
				r: function(e, t) {
					return (e = d3.round(e, d3_format_precision(e, t))).toFixed(Math.max(0, Math.min(20, d3_format_precision(e * (1 + 1e-15), t))))
				}
			}),
			d3_format_group = d3_identity;
		if (d3_format_grouping) {
			var d3_format_groupingLength = d3_format_grouping.length;
			d3_format_group = function(e) {
				for (var t = e.lastIndexOf("."), n = t >= 0 ? "." + e.substring(t + 1) : (t = e.length, ""), r = [], i = 0, o = d3_format_grouping[0]; t > 0 && o > 0;) r.push(e.substring(t -= o, t + o)), o = d3_format_grouping[i = (i + 1) % d3_format_groupingLength];
				return r.reverse().join(d3_format_thousandsSeparator || "") + n
			}
		}
		var d3_formatPrefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(d3_formatPrefix);
		d3.formatPrefix = function(e, t) {
			var n = 0;
			return e && (0 > e && (e *= -1), t && (e = d3.round(e, d3_format_precision(e, t))), n = 1 + Math.floor(1e-12 + Math.log(e) / Math.LN10), n = Math.max(-24, Math.min(24, 3 * Math.floor((0 >= n ? n + 1 : n - 1) / 3)))), d3_formatPrefixes[8 + n / 3]
		};
		var d3_ease_default = function() {
			return d3_identity
		}, d3_ease = d3.map({
				linear: d3_ease_default,
				poly: d3_ease_poly,
				quad: function() {
					return d3_ease_quad
				},
				cubic: function() {
					return d3_ease_cubic
				},
				sin: function() {
					return d3_ease_sin
				},
				exp: function() {
					return d3_ease_exp
				},
				circle: function() {
					return d3_ease_circle
				},
				elastic: d3_ease_elastic,
				back: d3_ease_back,
				bounce: function() {
					return d3_ease_bounce
				}
			}),
			d3_ease_mode = d3.map({
				"in": d3_identity,
				out: d3_ease_reverse,
				"in-out": d3_ease_reflect,
				"out-in": function(e) {
					return d3_ease_reflect(d3_ease_reverse(e))
				}
			});
		d3.ease = function(e) {
			var t = e.indexOf("-"),
				n = t >= 0 ? e.substring(0, t) : e,
				r = t >= 0 ? e.substring(t + 1) : "in";
			return n = d3_ease.get(n) || d3_ease_default, r = d3_ease_mode.get(r) || d3_identity, d3_ease_clamp(r(n.apply(null, Array.prototype.slice.call(arguments, 1))))
		}, d3.event = null, d3.transform = function(e) {
			var t = d3_document.createElementNS(d3.ns.prefix.svg, "g");
			return (d3.transform = function(e) {
				t.setAttribute("transform", e);
				var n = t.transform.baseVal.consolidate();
				return new d3_transform(n ? n.matrix : d3_transformIdentity)
			})(e)
		}, d3_transform.prototype.toString = function() {
			return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
		};
		var d3_transformIdentity = {
			a: 1,
			b: 0,
			c: 0,
			d: 1,
			e: 0,
			f: 0
		};
		d3.interpolate = function(e, t) {
			for (var n, r = d3.interpolators.length; --r >= 0 && !(n = d3.interpolators[r](e, t)););
			return n
		}, d3.interpolateNumber = function(e, t) {
			return t -= e,
			function(n) {
				return e + t * n
			}
		}, d3.interpolateRound = function(e, t) {
			return t -= e,
			function(n) {
				return Math.round(e + t * n)
			}
		}, d3.interpolateString = function(e, t) {
			var n, r, i, o, s, a = 0,
				l = 0,
				c = [],
				u = [];
			for (d3_interpolate_number.lastIndex = 0, r = 0; n = d3_interpolate_number.exec(t); ++r) n.index && c.push(t.substring(a, l = n.index)), u.push({
					i: c.length,
					x: n[0]
				}), c.push(null), a = d3_interpolate_number.lastIndex;
			for (t.length > a && c.push(t.substring(a)), r = 0, o = u.length;
			(n = d3_interpolate_number.exec(e)) && o > r; ++r) if (s = u[r], s.x == n[0]) {
					if (s.i) if (null == c[s.i + 1]) for (c[s.i - 1] += s.x, c.splice(s.i, 1), i = r + 1; o > i; ++i) u[i].i--;
						else for (c[s.i - 1] += s.x + c[s.i + 1], c.splice(s.i, 2), i = r + 1; o > i; ++i) u[i].i -= 2;
						else
					if (null == c[s.i + 1]) c[s.i] = s.x;
					else for (c[s.i] = s.x + c[s.i + 1], c.splice(s.i + 1, 1), i = r + 1; o > i; ++i) u[i].i--;
					u.splice(r, 1), o--, r--
				} else s.x = d3.interpolateNumber(parseFloat(n[0]), parseFloat(s.x));
			for (; o > r;) s = u.pop(), null == c[s.i + 1] ? c[s.i] = s.x : (c[s.i] = s.x + c[s.i + 1], c.splice(s.i + 1, 1)), o--;
			return 1 === c.length ? null == c[0] ? u[0].x : function() {
				return t
			} : function(e) {
				for (r = 0; o > r; ++r) c[(s = u[r]).i] = s.x(e);
				return c.join("")
			}
		}, d3.interpolateTransform = function(e, t) {
			var n, r = [],
				i = [],
				o = d3.transform(e),
				s = d3.transform(t),
				a = o.translate,
				l = s.translate,
				c = o.rotate,
				u = s.rotate,
				h = o.skew,
				d = s.skew,
				f = o.scale,
				p = s.scale;
			return a[0] != l[0] || a[1] != l[1] ? (r.push("translate(", null, ",", null, ")"), i.push({
				i: 1,
				x: d3.interpolateNumber(a[0], l[0])
			}, {
				i: 3,
				x: d3.interpolateNumber(a[1], l[1])
			})) : l[0] || l[1] ? r.push("translate(" + l + ")") : r.push(""), c != u ? (c - u > 180 ? u += 360 : u - c > 180 && (c += 360), i.push({
				i: r.push(r.pop() + "rotate(", null, ")") - 2,
				x: d3.interpolateNumber(c, u)
			})) : u && r.push(r.pop() + "rotate(" + u + ")"), h != d ? i.push({
				i: r.push(r.pop() + "skewX(", null, ")") - 2,
				x: d3.interpolateNumber(h, d)
			}) : d && r.push(r.pop() + "skewX(" + d + ")"), f[0] != p[0] || f[1] != p[1] ? (n = r.push(r.pop() + "scale(", null, ",", null, ")"), i.push({
				i: n - 4,
				x: d3.interpolateNumber(f[0], p[0])
			}, {
				i: n - 2,
				x: d3.interpolateNumber(f[1], p[1])
			})) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"), n = i.length,
			function(e) {
				for (var t, o = -1; n > ++o;) r[(t = i[o]).i] = t.x(e);
				return r.join("")
			}
		}, d3.interpolateRgb = function(e, t) {
			e = d3.rgb(e), t = d3.rgb(t);
			var n = e.r,
				r = e.g,
				i = e.b,
				o = t.r - n,
				s = t.g - r,
				a = t.b - i;
			return function(e) {
				return "#" + d3_rgb_hex(Math.round(n + o * e)) + d3_rgb_hex(Math.round(r + s * e)) + d3_rgb_hex(Math.round(i + a * e))
			}
		}, d3.interpolateHsl = function(e, t) {
			e = d3.hsl(e), t = d3.hsl(t);
			var n = e.h,
				r = e.s,
				i = e.l,
				o = t.h - n,
				s = t.s - r,
				a = t.l - i;
			return o > 180 ? o -= 360 : -180 > o && (o += 360),
			function(e) {
				return d3_hsl_rgb(n + o * e, r + s * e, i + a * e) + ""
			}
		}, d3.interpolateLab = function(e, t) {
			e = d3.lab(e), t = d3.lab(t);
			var n = e.l,
				r = e.a,
				i = e.b,
				o = t.l - n,
				s = t.a - r,
				a = t.b - i;
			return function(e) {
				return d3_lab_rgb(n + o * e, r + s * e, i + a * e) + ""
			}
		}, d3.interpolateHcl = function(e, t) {
			e = d3.hcl(e), t = d3.hcl(t);
			var n = e.h,
				r = e.c,
				i = e.l,
				o = t.h - n,
				s = t.c - r,
				a = t.l - i;
			return o > 180 ? o -= 360 : -180 > o && (o += 360),
			function(e) {
				return d3_hcl_lab(n + o * e, r + s * e, i + a * e) + ""
			}
		}, d3.interpolateArray = function(e, t) {
			var n, r = [],
				i = [],
				o = e.length,
				s = t.length,
				a = Math.min(e.length, t.length);
			for (n = 0; a > n; ++n) r.push(d3.interpolate(e[n], t[n]));
			for (; o > n; ++n) i[n] = e[n];
			for (; s > n; ++n) i[n] = t[n];
			return function(e) {
				for (n = 0; a > n; ++n) i[n] = r[n](e);
				return i
			}
		}, d3.interpolateObject = function(e, t) {
			var n, r = {}, i = {};
			for (n in e) n in t ? r[n] = d3_interpolateByName(n)(e[n], t[n]) : i[n] = e[n];
			for (n in t) n in e || (i[n] = t[n]);
			return function(e) {
				for (n in r) i[n] = r[n](e);
				return i
			}
		};
		var d3_interpolate_number = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
		d3.interpolators = [d3.interpolateObject,
			function(e, t) {
				return t instanceof Array && d3.interpolateArray(e, t)
			},
			function(e, t) {
				return ("string" == typeof e || "string" == typeof t) && d3.interpolateString(e + "", t + "")
			},
			function(e, t) {
				return ("string" == typeof t ? d3_rgb_names.has(t) || /^(#|rgb\(|hsl\()/.test(t) : t instanceof d3_Color) && d3.interpolateRgb(e, t)
			},
			function(e, t) {
				return !isNaN(e = +e) && !isNaN(t = +t) && d3.interpolateNumber(e, t)
			}
		], d3_Color.prototype.toString = function() {
			return this.rgb() + ""
		}, d3.rgb = function(e, t, n) {
			return 1 === arguments.length ? e instanceof d3_Rgb ? d3_rgb(e.r, e.g, e.b) : d3_rgb_parse("" + e, d3_rgb, d3_hsl_rgb) : d3_rgb(~~e, ~~t, ~~n)
		};
		var d3_rgbPrototype = d3_Rgb.prototype = new d3_Color;
		d3_rgbPrototype.brighter = function(e) {
			e = Math.pow(.7, arguments.length ? e : 1);
			var t = this.r,
				n = this.g,
				r = this.b,
				i = 30;
			return t || n || r ? (t && i > t && (t = i), n && i > n && (n = i), r && i > r && (r = i), d3_rgb(Math.min(255, Math.floor(t / e)), Math.min(255, Math.floor(n / e)), Math.min(255, Math.floor(r / e)))) : d3_rgb(i, i, i)
		}, d3_rgbPrototype.darker = function(e) {
			return e = Math.pow(.7, arguments.length ? e : 1), d3_rgb(Math.floor(e * this.r), Math.floor(e * this.g), Math.floor(e * this.b))
		}, d3_rgbPrototype.hsl = function() {
			return d3_rgb_hsl(this.r, this.g, this.b)
		}, d3_rgbPrototype.toString = function() {
			return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b)
		};
		var d3_rgb_names = d3.map({
			aliceblue: "#f0f8ff",
			antiquewhite: "#faebd7",
			aqua: "#00ffff",
			aquamarine: "#7fffd4",
			azure: "#f0ffff",
			beige: "#f5f5dc",
			bisque: "#ffe4c4",
			black: "#000000",
			blanchedalmond: "#ffebcd",
			blue: "#0000ff",
			blueviolet: "#8a2be2",
			brown: "#a52a2a",
			burlywood: "#deb887",
			cadetblue: "#5f9ea0",
			chartreuse: "#7fff00",
			chocolate: "#d2691e",
			coral: "#ff7f50",
			cornflowerblue: "#6495ed",
			cornsilk: "#fff8dc",
			crimson: "#dc143c",
			cyan: "#00ffff",
			darkblue: "#00008b",
			darkcyan: "#008b8b",
			darkgoldenrod: "#b8860b",
			darkgray: "#a9a9a9",
			darkgreen: "#006400",
			darkgrey: "#a9a9a9",
			darkkhaki: "#bdb76b",
			darkmagenta: "#8b008b",
			darkolivegreen: "#556b2f",
			darkorange: "#ff8c00",
			darkorchid: "#9932cc",
			darkred: "#8b0000",
			darksalmon: "#e9967a",
			darkseagreen: "#8fbc8f",
			darkslateblue: "#483d8b",
			darkslategray: "#2f4f4f",
			darkslategrey: "#2f4f4f",
			darkturquoise: "#00ced1",
			darkviolet: "#9400d3",
			deeppink: "#ff1493",
			deepskyblue: "#00bfff",
			dimgray: "#696969",
			dimgrey: "#696969",
			dodgerblue: "#1e90ff",
			firebrick: "#b22222",
			floralwhite: "#fffaf0",
			forestgreen: "#228b22",
			fuchsia: "#ff00ff",
			gainsboro: "#dcdcdc",
			ghostwhite: "#f8f8ff",
			gold: "#ffd700",
			goldenrod: "#daa520",
			gray: "#808080",
			green: "#008000",
			greenyellow: "#adff2f",
			grey: "#808080",
			honeydew: "#f0fff0",
			hotpink: "#ff69b4",
			indianred: "#cd5c5c",
			indigo: "#4b0082",
			ivory: "#fffff0",
			khaki: "#f0e68c",
			lavender: "#e6e6fa",
			lavenderblush: "#fff0f5",
			lawngreen: "#7cfc00",
			lemonchiffon: "#fffacd",
			lightblue: "#add8e6",
			lightcoral: "#f08080",
			lightcyan: "#e0ffff",
			lightgoldenrodyellow: "#fafad2",
			lightgray: "#d3d3d3",
			lightgreen: "#90ee90",
			lightgrey: "#d3d3d3",
			lightpink: "#ffb6c1",
			lightsalmon: "#ffa07a",
			lightseagreen: "#20b2aa",
			lightskyblue: "#87cefa",
			lightslategray: "#778899",
			lightslategrey: "#778899",
			lightsteelblue: "#b0c4de",
			lightyellow: "#ffffe0",
			lime: "#00ff00",
			limegreen: "#32cd32",
			linen: "#faf0e6",
			magenta: "#ff00ff",
			maroon: "#800000",
			mediumaquamarine: "#66cdaa",
			mediumblue: "#0000cd",
			mediumorchid: "#ba55d3",
			mediumpurple: "#9370db",
			mediumseagreen: "#3cb371",
			mediumslateblue: "#7b68ee",
			mediumspringgreen: "#00fa9a",
			mediumturquoise: "#48d1cc",
			mediumvioletred: "#c71585",
			midnightblue: "#191970",
			mintcream: "#f5fffa",
			mistyrose: "#ffe4e1",
			moccasin: "#ffe4b5",
			navajowhite: "#ffdead",
			navy: "#000080",
			oldlace: "#fdf5e6",
			olive: "#808000",
			olivedrab: "#6b8e23",
			orange: "#ffa500",
			orangered: "#ff4500",
			orchid: "#da70d6",
			palegoldenrod: "#eee8aa",
			palegreen: "#98fb98",
			paleturquoise: "#afeeee",
			palevioletred: "#db7093",
			papayawhip: "#ffefd5",
			peachpuff: "#ffdab9",
			peru: "#cd853f",
			pink: "#ffc0cb",
			plum: "#dda0dd",
			powderblue: "#b0e0e6",
			purple: "#800080",
			red: "#ff0000",
			rosybrown: "#bc8f8f",
			royalblue: "#4169e1",
			saddlebrown: "#8b4513",
			salmon: "#fa8072",
			sandybrown: "#f4a460",
			seagreen: "#2e8b57",
			seashell: "#fff5ee",
			sienna: "#a0522d",
			silver: "#c0c0c0",
			skyblue: "#87ceeb",
			slateblue: "#6a5acd",
			slategray: "#708090",
			slategrey: "#708090",
			snow: "#fffafa",
			springgreen: "#00ff7f",
			steelblue: "#4682b4",
			tan: "#d2b48c",
			teal: "#008080",
			thistle: "#d8bfd8",
			tomato: "#ff6347",
			turquoise: "#40e0d0",
			violet: "#ee82ee",
			wheat: "#f5deb3",
			white: "#ffffff",
			whitesmoke: "#f5f5f5",
			yellow: "#ffff00",
			yellowgreen: "#9acd32"
		});
		d3_rgb_names.forEach(function(e, t) {
			d3_rgb_names.set(e, d3_rgb_parse(t, d3_rgb, d3_hsl_rgb))
		}), d3.hsl = function(e, t, n) {
			return 1 === arguments.length ? e instanceof d3_Hsl ? d3_hsl(e.h, e.s, e.l) : d3_rgb_parse("" + e, d3_rgb_hsl, d3_hsl) : d3_hsl(+e, +t, +n)
		};
		var d3_hslPrototype = d3_Hsl.prototype = new d3_Color;
		d3_hslPrototype.brighter = function(e) {
			return e = Math.pow(.7, arguments.length ? e : 1), d3_hsl(this.h, this.s, this.l / e)
		}, d3_hslPrototype.darker = function(e) {
			return e = Math.pow(.7, arguments.length ? e : 1), d3_hsl(this.h, this.s, e * this.l)
		}, d3_hslPrototype.rgb = function() {
			return d3_hsl_rgb(this.h, this.s, this.l)
		}, d3.hcl = function(e, t, n) {
			return 1 === arguments.length ? e instanceof d3_Hcl ? d3_hcl(e.h, e.c, e.l) : e instanceof d3_Lab ? d3_lab_hcl(e.l, e.a, e.b) : d3_lab_hcl((e = d3_rgb_lab((e = d3.rgb(e)).r, e.g, e.b)).l, e.a, e.b) : d3_hcl(+e, +t, +n)
		};
		var d3_hclPrototype = d3_Hcl.prototype = new d3_Color;
		d3_hclPrototype.brighter = function(e) {
			return d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? e : 1)))
		}, d3_hclPrototype.darker = function(e) {
			return d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? e : 1)))
		}, d3_hclPrototype.rgb = function() {
			return d3_hcl_lab(this.h, this.c, this.l).rgb()
		}, d3.lab = function(e, t, n) {
			return 1 === arguments.length ? e instanceof d3_Lab ? d3_lab(e.l, e.a, e.b) : e instanceof d3_Hcl ? d3_hcl_lab(e.l, e.c, e.h) : d3_rgb_lab((e = d3.rgb(e)).r, e.g, e.b) : d3_lab(+e, +t, +n)
		};
		var d3_lab_K = 18,
			d3_lab_X = .95047,
			d3_lab_Y = 1,
			d3_lab_Z = 1.08883,
			d3_labPrototype = d3_Lab.prototype = new d3_Color;
		d3_labPrototype.brighter = function(e) {
			return d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? e : 1)), this.a, this.b)
		}, d3_labPrototype.darker = function(e) {
			return d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? e : 1)), this.a, this.b)
		}, d3_labPrototype.rgb = function() {
			return d3_lab_rgb(this.l, this.a, this.b)
		};
		var d3_select = function(e, t) {
			return t.querySelector(e)
		}, d3_selectAll = function(e, t) {
				return t.querySelectorAll(e)
			}, d3_selectRoot = d3_document.documentElement,
			d3_selectMatcher = d3_selectRoot.matchesSelector || d3_selectRoot.webkitMatchesSelector || d3_selectRoot.mozMatchesSelector || d3_selectRoot.msMatchesSelector || d3_selectRoot.oMatchesSelector,
			d3_selectMatches = function(e, t) {
				return d3_selectMatcher.call(e, t)
			};
		"function" == typeof Sizzle && (d3_select = function(e, t) {
			return Sizzle(e, t)[0] || null
		}, d3_selectAll = function(e, t) {
			return Sizzle.uniqueSort(Sizzle(e, t))
		}, d3_selectMatches = Sizzle.matchesSelector);
		var d3_selectionPrototype = [];
		d3.selection = function() {
			return d3_selectionRoot
		}, d3.selection.prototype = d3_selectionPrototype, d3_selectionPrototype.select = function(e) {
			var t, n, r, i, o = [];
			"function" != typeof e && (e = d3_selection_selector(e));
			for (var s = -1, a = this.length; a > ++s;) {
				o.push(t = []), t.parentNode = (r = this[s]).parentNode;
				for (var l = -1, c = r.length; c > ++l;)(i = r[l]) ? (t.push(n = e.call(i, i.__data__, l)), n && "__data__" in i && (n.__data__ = i.__data__)) : t.push(null)
			}
			return d3_selection(o)
		}, d3_selectionPrototype.selectAll = function(e) {
			var t, n, r = [];
			"function" != typeof e && (e = d3_selection_selectorAll(e));
			for (var i = -1, o = this.length; o > ++i;) for (var s = this[i], a = -1, l = s.length; l > ++a;)(n = s[a]) && (r.push(t = d3_array(e.call(n, n.__data__, a))), t.parentNode = n);
			return d3_selection(r)
		}, d3_selectionPrototype.attr = function(e, t) {
			if (2 > arguments.length) {
				if ("string" == typeof e) {
					var n = this.node();
					return e = d3.ns.qualify(e), e.local ? n.getAttributeNS(e.space, e.local) : n.getAttribute(e)
				}
				for (t in e) this.each(d3_selection_attr(t, e[t]));
				return this
			}
			return this.each(d3_selection_attr(e, t))
		}, d3_selectionPrototype.classed = function(e, t) {
			if (2 > arguments.length) {
				if ("string" == typeof e) {
					var n = this.node(),
						r = (e = e.trim().split(/^|\s+/g)).length,
						i = -1;
					if (t = n.classList) {
						for (; r > ++i;) if (!t.contains(e[i])) return !1
					} else for (t = n.className, null != t.baseVal && (t = t.baseVal); r > ++i;) if (!d3_selection_classedRe(e[i]).test(t)) return !1; return !0
				}
				for (t in e) this.each(d3_selection_classed(t, e[t]));
				return this
			}
			return this.each(d3_selection_classed(e, t))
		}, d3_selectionPrototype.style = function(e, t, n) {
			var r = arguments.length;
			if (3 > r) {
				if ("string" != typeof e) {
					2 > r && (t = "");
					for (n in e) this.each(d3_selection_style(n, e[n], t));
					return this
				}
				if (2 > r) return d3_window.getComputedStyle(this.node(), null).getPropertyValue(e);
				n = ""
			}
			return this.each(d3_selection_style(e, t, n))
		}, d3_selectionPrototype.property = function(e, t) {
			if (2 > arguments.length) {
				if ("string" == typeof e) return this.node()[e];
				for (t in e) this.each(d3_selection_property(t, e[t]));
				return this
			}
			return this.each(d3_selection_property(e, t))
		}, d3_selectionPrototype.text = function(e) {
			return arguments.length ? this.each("function" == typeof e ? function() {
				var t = e.apply(this, arguments);
				this.textContent = null == t ? "" : t
			} : null == e ? function() {
				this.textContent = ""
			} : function() {
				this.textContent = e
			}) : this.node().textContent
		}, d3_selectionPrototype.html = function(e) {
			return arguments.length ? this.each("function" == typeof e ? function() {
				var t = e.apply(this, arguments);
				this.innerHTML = null == t ? "" : t
			} : null == e ? function() {
				this.innerHTML = ""
			} : function() {
				this.innerHTML = e
			}) : this.node().innerHTML
		}, d3_selectionPrototype.append = function(e) {
			function t() {
				return this.appendChild(d3_document.createElementNS(this.namespaceURI, e))
			}
			function n() {
				return this.appendChild(d3_document.createElementNS(e.space, e.local))
			}
			return e = d3.ns.qualify(e), this.select(e.local ? n : t)
		}, d3_selectionPrototype.insert = function(e, t) {
			function n() {
				return this.insertBefore(d3_document.createElementNS(this.namespaceURI, e), d3_select(t, this))
			}
			function r() {
				return this.insertBefore(d3_document.createElementNS(e.space, e.local), d3_select(t, this))
			}
			return e = d3.ns.qualify(e), this.select(e.local ? r : n)
		}, d3_selectionPrototype.remove = function() {
			return this.each(function() {
				var e = this.parentNode;
				e && e.removeChild(this)
			})
		}, d3_selectionPrototype.data = function(e, t) {
			function n(e, n) {
				var r, i, o, s = e.length,
					u = n.length,
					h = Math.min(s, u),
					d = Array(u),
					f = Array(u),
					p = Array(s);
				if (t) {
					var g, m = new d3_Map,
						v = new d3_Map,
						A = [];
					for (r = -1; s > ++r;) g = t.call(i = e[r], i.__data__, r), m.has(g) ? p[r] = i : m.set(g, i), A.push(g);
					for (r = -1; u > ++r;) g = t.call(n, o = n[r], r), (i = m.get(g)) ? (d[r] = i, i.__data__ = o) : v.has(g) || (f[r] = d3_selection_dataNode(o)), v.set(g, o), m.remove(g);
					for (r = -1; s > ++r;) m.has(A[r]) && (p[r] = e[r])
				} else {
					for (r = -1; h > ++r;) i = e[r], o = n[r], i ? (i.__data__ = o, d[r] = i) : f[r] = d3_selection_dataNode(o);
					for (; u > r; ++r) f[r] = d3_selection_dataNode(n[r]);
					for (; s > r; ++r) p[r] = e[r]
				}
				f.update = d, f.parentNode = d.parentNode = p.parentNode = e.parentNode, a.push(f), l.push(d), c.push(p)
			}
			var r, i, o = -1,
				s = this.length;
			if (!arguments.length) {
				for (e = Array(s = (r = this[0]).length); s > ++o;)(i = r[o]) && (e[o] = i.__data__);
				return e
			}
			var a = d3_selection_enter([]),
				l = d3_selection([]),
				c = d3_selection([]);
			if ("function" == typeof e) for (; s > ++o;) n(r = this[o], e.call(r, r.parentNode.__data__, o));
			else for (; s > ++o;) n(r = this[o], e);
			return l.enter = function() {
				return a
			}, l.exit = function() {
				return c
			}, l
		}, d3_selectionPrototype.datum = function(e) {
			return arguments.length ? this.property("__data__", e) : this.property("__data__")
		}, d3_selectionPrototype.filter = function(e) {
			var t, n, r, i = [];
			"function" != typeof e && (e = d3_selection_filter(e));
			for (var o = 0, s = this.length; s > o; o++) {
				i.push(t = []), t.parentNode = (n = this[o]).parentNode;
				for (var a = 0, l = n.length; l > a; a++)(r = n[a]) && e.call(r, r.__data__, a) && t.push(r)
			}
			return d3_selection(i)
		}, d3_selectionPrototype.order = function() {
			for (var e = -1, t = this.length; t > ++e;) for (var n, r = this[e], i = r.length - 1, o = r[i]; --i >= 0;)(n = r[i]) && (o && o !== n.nextSibling && o.parentNode.insertBefore(n, o), o = n);
			return this
		}, d3_selectionPrototype.sort = function(e) {
			e = d3_selection_sortComparator.apply(this, arguments);
			for (var t = -1, n = this.length; n > ++t;) this[t].sort(e);
			return this.order()
		}, d3_selectionPrototype.on = function(e, t, n) {
			var r = arguments.length;
			if (3 > r) {
				if ("string" != typeof e) {
					2 > r && (t = !1);
					for (n in e) this.each(d3_selection_on(n, e[n], t));
					return this
				}
				if (2 > r) return (r = this.node()["__on" + e]) && r._;
				n = !1
			}
			return this.each(d3_selection_on(e, t, n))
		}, d3_selectionPrototype.each = function(e) {
			return d3_selection_each(this, function(t, n, r) {
				e.call(t, t.__data__, n, r)
			})
		}, d3_selectionPrototype.call = function(e) {
			var t = d3_array(arguments);
			return e.apply(t[0] = this, t), this
		}, d3_selectionPrototype.empty = function() {
			return !this.node()
		}, d3_selectionPrototype.node = function() {
			for (var e = 0, t = this.length; t > e; e++) for (var n = this[e], r = 0, i = n.length; i > r; r++) {
					var o = n[r];
					if (o) return o
			}
			return null
		}, d3_selectionPrototype.transition = function() {
			var e, t, n = d3_transitionInheritId || ++d3_transitionId,
				r = [],
				i = Object.create(d3_transitionInherit);
			i.time = Date.now();
			for (var o = -1, s = this.length; s > ++o;) {
				r.push(e = []);
				for (var a = this[o], l = -1, c = a.length; c > ++l;)(t = a[l]) && d3_transitionNode(t, l, n, i), e.push(t)
			}
			return d3_transition(r, n)
		};
		var d3_selectionRoot = d3_selection([
			[d3_document]
		]);
		d3_selectionRoot[0].parentNode = d3_selectRoot, d3.select = function(e) {
			return "string" == typeof e ? d3_selectionRoot.select(e) : d3_selection([
				[e]
			])
		}, d3.selectAll = function(e) {
			return "string" == typeof e ? d3_selectionRoot.selectAll(e) : d3_selection([d3_array(e)])
		};
		var d3_selection_enterPrototype = [];
		d3.selection.enter = d3_selection_enter, d3.selection.enter.prototype = d3_selection_enterPrototype, d3_selection_enterPrototype.append = d3_selectionPrototype.append, d3_selection_enterPrototype.insert = d3_selectionPrototype.insert, d3_selection_enterPrototype.empty = d3_selectionPrototype.empty, d3_selection_enterPrototype.node = d3_selectionPrototype.node, d3_selection_enterPrototype.select = function(e) {
			for (var t, n, r, i, o, s = [], a = -1, l = this.length; l > ++a;) {
				r = (i = this[a]).update, s.push(t = []), t.parentNode = i.parentNode;
				for (var c = -1, u = i.length; u > ++c;)(o = i[c]) ? (t.push(r[c] = n = e.call(i.parentNode, o.__data__, c)), n.__data__ = o.__data__) : t.push(null)
			}
			return d3_selection(s)
		};
		var d3_transitionPrototype = [],
			d3_transitionId = 0,
			d3_transitionInheritId, d3_transitionInherit = {
				ease: d3_ease_cubicInOut,
				delay: 0,
				duration: 250
			};
		d3_transitionPrototype.call = d3_selectionPrototype.call, d3_transitionPrototype.empty = d3_selectionPrototype.empty, d3_transitionPrototype.node = d3_selectionPrototype.node, d3.transition = function(e) {
			return arguments.length ? d3_transitionInheritId ? e.transition() : e : d3_selectionRoot.transition()
		}, d3.transition.prototype = d3_transitionPrototype, d3_transitionPrototype.select = function(e) {
			var t, n, r, i = this.id,
				o = [];
			"function" != typeof e && (e = d3_selection_selector(e));
			for (var s = -1, a = this.length; a > ++s;) {
				o.push(t = []);
				for (var l = this[s], c = -1, u = l.length; u > ++c;)(r = l[c]) && (n = e.call(r, r.__data__, c)) ? ("__data__" in r && (n.__data__ = r.__data__), d3_transitionNode(n, c, i, r.__transition__[i]), t.push(n)) : t.push(null)
			}
			return d3_transition(o, i)
		}, d3_transitionPrototype.selectAll = function(e) {
			var t, n, r, i, o, s = this.id,
				a = [];
			"function" != typeof e && (e = d3_selection_selectorAll(e));
			for (var l = -1, c = this.length; c > ++l;) for (var u = this[l], h = -1, d = u.length; d > ++h;) if (r = u[h]) {
						o = r.__transition__[s], n = e.call(r, r.__data__, h), a.push(t = []);
						for (var f = -1, p = n.length; p > ++f;) d3_transitionNode(i = n[f], f, s, o), t.push(i)
					}
			return d3_transition(a, s)
		}, d3_transitionPrototype.filter = function(e) {
			var t, n, r, i = [];
			"function" != typeof e && (e = d3_selection_filter(e));
			for (var o = 0, s = this.length; s > o; o++) {
				i.push(t = []);
				for (var n = this[o], a = 0, l = n.length; l > a; a++)(r = n[a]) && e.call(r, r.__data__, a) && t.push(r)
			}
			return d3_transition(i, this.id, this.time).ease(this.ease())
		}, d3_transitionPrototype.attr = function(e, t) {
			function n() {
				this.removeAttribute(o)
			}
			function r() {
				this.removeAttributeNS(o.space, o.local)
			}
			if (2 > arguments.length) {
				for (t in e) this.attr(t, e[t]);
				return this
			}
			var i = d3_interpolateByName(e),
				o = d3.ns.qualify(e);
			return d3_transition_tween(this, "attr." + e, t, function(e) {
				function t() {
					var t, n = this.getAttribute(o);
					return n !== e && (t = i(n, e), function(e) {
						this.setAttribute(o, t(e))
					})
				}
				function s() {
					var t, n = this.getAttributeNS(o.space, o.local);
					return n !== e && (t = i(n, e), function(e) {
						this.setAttributeNS(o.space, o.local, t(e))
					})
				}
				return null == e ? o.local ? r : n : (e += "", o.local ? s : t)
			})
		}, d3_transitionPrototype.attrTween = function(e, t) {
			function n(e, n) {
				var r = t.call(this, e, n, this.getAttribute(i));
				return r && function(e) {
					this.setAttribute(i, r(e))
				}
			}
			function r(e, n) {
				var r = t.call(this, e, n, this.getAttributeNS(i.space, i.local));
				return r && function(e) {
					this.setAttributeNS(i.space, i.local, r(e))
				}
			}
			var i = d3.ns.qualify(e);
			return this.tween("attr." + e, i.local ? r : n)
		}, d3_transitionPrototype.style = function(e, t, n) {
			function r() {
				this.style.removeProperty(e)
			}
			var i = arguments.length;
			if (3 > i) {
				if ("string" != typeof e) {
					2 > i && (t = "");
					for (n in e) this.style(n, e[n], t);
					return this
				}
				n = ""
			}
			var o = d3_interpolateByName(e);
			return d3_transition_tween(this, "style." + e, t, function(t) {
				function i() {
					var r, i = d3_window.getComputedStyle(this, null).getPropertyValue(e);
					return i !== t && (r = o(i, t), function(t) {
						this.style.setProperty(e, r(t), n)
					})
				}
				return null == t ? r : (t += "", i)
			})
		}, d3_transitionPrototype.styleTween = function(e, t, n) {
			return 3 > arguments.length && (n = ""), this.tween("style." + e, function(r, i) {
				var o = t.call(this, r, i, d3_window.getComputedStyle(this, null).getPropertyValue(e));
				return o && function(t) {
					this.style.setProperty(e, o(t), n)
				}
			})
		}, d3_transitionPrototype.text = function(e) {
			return d3_transition_tween(this, "text", e, d3_transition_text)
		}, d3_transitionPrototype.remove = function() {
			return this.each("end.transition", function() {
				var e;
				!this.__transition__ && (e = this.parentNode) && e.removeChild(this)
			})
		}, d3_transitionPrototype.ease = function(e) {
			var t = this.id;
			return 1 > arguments.length ? this.node().__transition__[t].ease : ("function" != typeof e && (e = d3.ease.apply(d3, arguments)), d3_selection_each(this, function(n) {
				n.__transition__[t].ease = e
			}))
		}, d3_transitionPrototype.delay = function(e) {
			var t = this.id;
			return d3_selection_each(this, "function" == typeof e ? function(n, r, i) {
				n.__transition__[t].delay = 0 | e.call(n, n.__data__, r, i)
			} : (e |= 0, function(n) {
				n.__transition__[t].delay = e
			}))
		}, d3_transitionPrototype.duration = function(e) {
			var t = this.id;
			return d3_selection_each(this, "function" == typeof e ? function(n, r, i) {
				n.__transition__[t].duration = Math.max(1, 0 | e.call(n, n.__data__, r, i))
			} : (e = Math.max(1, 0 | e), function(n) {
				n.__transition__[t].duration = e
			}))
		}, d3_transitionPrototype.each = function(e, t) {
			var n = this.id;
			if (2 > arguments.length) {
				var r = d3_transitionInherit,
					i = d3_transitionInheritId;
				d3_transitionInheritId = n, d3_selection_each(this, function(t, r, i) {
					d3_transitionInherit = t.__transition__[n], e.call(t, t.__data__, r, i)
				}), d3_transitionInherit = r, d3_transitionInheritId = i
			} else d3_selection_each(this, function(r) {
					r.__transition__[n].event.on(e, t)
				});
			return this
		}, d3_transitionPrototype.transition = function() {
			for (var e, t, n, r, i = this.id, o = ++d3_transitionId, s = [], a = 0, l = this.length; l > a; a++) {
				s.push(e = []);
				for (var t = this[a], c = 0, u = t.length; u > c; c++)(n = t[c]) && (r = Object.create(n.__transition__[i]), r.delay += r.duration, d3_transitionNode(n, c, o, r)), e.push(n)
			}
			return d3_transition(s, o)
		}, d3_transitionPrototype.tween = function(e, t) {
			var n = this.id;
			return 2 > arguments.length ? this.node().__transition__[n].tween.get(e) : d3_selection_each(this, null == t ? function(t) {
				t.__transition__[n].tween.remove(e)
			} : function(r) {
				r.__transition__[n].tween.set(e, t)
			})
		};
		var d3_timer_id = 0,
			d3_timer_byId = {}, d3_timer_queue = null,
			d3_timer_interval, d3_timer_timeout;
		d3.timer = function(e, t, n) {
			if (3 > arguments.length) {
				if (2 > arguments.length) t = 0;
				else if (!isFinite(t)) return;
				n = Date.now()
			}
			var r = d3_timer_byId[e.id];
			r && r.callback === e ? (r.then = n, r.delay = t) : d3_timer_byId[e.id = ++d3_timer_id] = d3_timer_queue = {
				callback: e,
				then: n,
				delay: t,
				next: d3_timer_queue
			}, d3_timer_interval || (d3_timer_timeout = clearTimeout(d3_timer_timeout), d3_timer_interval = 1, d3_timer_frame(d3_timer_step))
		}, d3.timer.flush = function() {
			for (var e, t = Date.now(), n = d3_timer_queue; n;) e = t - n.then, n.delay || (n.flush = n.callback(e)), n = n.next;
			d3_timer_flush()
		};
		var d3_timer_frame = d3_window.requestAnimationFrame || d3_window.webkitRequestAnimationFrame || d3_window.mozRequestAnimationFrame || d3_window.oRequestAnimationFrame || d3_window.msRequestAnimationFrame || function(e) {
				setTimeout(e, 17)
			};
		d3.mouse = function(e) {
			return d3_mousePoint(e, d3_eventSource())
		};
		var d3_mouse_bug44083 = /WebKit/.test(d3_window.navigator.userAgent) ? -1 : 0;
		if (d3.touches = function(e, t) {
			return 2 > arguments.length && (t = d3_eventSource().touches), t ? d3_array(t).map(function(t) {
				var n = d3_mousePoint(e, t);
				return n.identifier = t.identifier, n
			}) : []
		}, function() {
			function e(e) {
				var t = function(e, t) {
					return i("", e, t)
				}, o = n;
				e && (n[e] || (n[e] = {}), o = n[e]), o.define && o.define.packaged || (r.original = o.define, o.define = r, o.define.packaged = !0), o.require && o.require.packaged || (i.original = o.require, o.require = t, o.require.packaged = !0)
			}
			var t = "",
				n = function() {
					return this
				}();
			if (t || "undefined" == typeof requirejs) {
				var r = function(e, t, n) {
					return "string" != typeof e ? (r.original ? r.original.apply(window, arguments) : (console.error("dropping module because define wasn't a string."), console.trace()), void 0) : (2 == arguments.length && (n = t), r.modules || (r.modules = {}), r.modules[e] = n, void 0)
				}, i = function(e, t, n) {
						if ("[object Array]" === Object.prototype.toString.call(t)) {
							for (var r = [], o = 0, a = t.length; a > o; ++o) {
								var l = s(e, t[o]);
								if (!l && i.original) return i.original.apply(window, arguments);
								r.push(l)
							}
							n && n.apply(null, r)
						} else {
							if ("string" == typeof t) {
								var c = s(e, t);
								return !c && i.original ? i.original.apply(window, arguments) : (n && n(), c)
							}
							if (i.original) return i.original.apply(window, arguments)
						}
					}, o = function(e, t) {
						if (-1 !== t.indexOf("!")) {
							var n = t.split("!");
							return o(e, n[0]) + "!" + o(e, n[1])
						}
						if ("." == t.charAt(0)) {
							var r = e.split("/").slice(0, -1).join("/");
							for (t = r + "/" + t; - 1 !== t.indexOf(".") && i != t;) {
								var i = t;
								t = t.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "")
							}
						}
						return t
					}, s = function(e, t) {
						t = o(e, t);
						var n = r.modules[t];
						if (!n) return null;
						if ("function" == typeof n) {
							var s = {}, a = {
									id: t,
									uri: "",
									exports: s,
									packaged: !0
								}, l = function(e, n) {
									return i(t, e, n)
								}, c = n(l, s, a);
							return s = c || a.exports, r.modules[t] = s, s
						}
						return n
					};
				e(t)
			}
		}(), define("ace/ace", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/dom", "ace/lib/event", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/multi_select", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/mode/folding/fold_mode", "ace/config"], function(e, t) {
			e("./lib/fixoldbrowsers");
			var n = e("./lib/dom"),
				r = e("./lib/event"),
				i = e("./editor").Editor,
				o = e("./edit_session").EditSession,
				s = e("./undomanager").UndoManager,
				a = e("./virtual_renderer").VirtualRenderer,
				l = e("./multi_select").MultiSelect;
			e("./worker/worker_client"), e("./keyboard/hash_handler"), e("./placeholder"), e("./mode/folding/fold_mode"), t.config = e("./config"), t.require = e, t.edit = function(e) {
				if ("string" == typeof e) {
					var o = e,
						e = document.getElementById(o);
					if (!e) throw "ace.edit can't find div #" + o
				}
				if (e.env && e.env.editor instanceof i) return e.env.editor;
				var s = t.createEditSession(n.getInnerText(e));
				e.innerHTML = "";
				var c = new i(new a(e));
				new l(c), c.setSession(s);
				var u = {
					document: s,
					editor: c,
					onResize: c.resize.bind(c)
				};
				return r.addListener(window, "resize", u.onResize), e.env = c.env = u, c
			}, t.createEditSession = function(e) {
				var t = new o(e, t);
				return t.setUndoManager(new s), t
			}, t.EditSession = o, t.UndoManager = s
		}), define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/regexp", "ace/lib/es5-shim"], function(e) {
			e("./regexp"), e("./es5-shim")
		}), define("ace/lib/regexp", ["require", "exports", "module"], function() {
			function e(e) {
				return (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : "")
			}
			function t(e, t, n) {
				if (Array.prototype.indexOf) return e.indexOf(t, n);
				for (var r = n || 0; e.length > r; r++) if (e[r] === t) return r;
				return -1
			}
			var n = {
				exec: RegExp.prototype.exec,
				test: RegExp.prototype.test,
				match: String.prototype.match,
				replace: String.prototype.replace,
				split: String.prototype.split
			}, r = void 0 === n.exec.call(/()??/, "")[1],
				i = function() {
					var e = /^/g;
					return n.test.call(e, ""), !e.lastIndex
				}();
			i && r || (RegExp.prototype.exec = function(o) {
				var s, a, l = n.exec.apply(this, arguments);
				if ("string" == typeof o && l) {
					if (!r && l.length > 1 && t(l, "") > -1 && (a = RegExp(this.source, n.replace.call(e(this), "g", "")), n.replace.call(o.slice(l.index), a, function() {
						for (var e = 1; arguments.length - 2 > e; e++) void 0 === arguments[e] && (l[e] = void 0)
					})), this._xregexp && this._xregexp.captureNames) for (var c = 1; l.length > c; c++) s = this._xregexp.captureNames[c - 1], s && (l[s] = l[c]);
					!i && this.global && !l[0].length && this.lastIndex > l.index && this.lastIndex--
				}
				return l
			}, i || (RegExp.prototype.test = function(e) {
				var t = n.exec.call(this, e);
				return t && this.global && !t[0].length && this.lastIndex > t.index && this.lastIndex--, !! t
			}))
		}), define("ace/lib/es5-shim", ["require", "exports", "module"], function() {
			function e(e) {
				try {
					return Object.defineProperty(e, "sentinel", {}), "sentinel" in e
				} catch (t) {}
			}
			Function.prototype.bind || (Function.prototype.bind = function(e) {
				var t = this;
				if ("function" != typeof t) throw new TypeError;
				var n = c.call(arguments, 1),
					r = function() {
						if (this instanceof r) {
							var i = function() {};
							i.prototype = t.prototype;
							var o = new i,
								s = t.apply(o, n.concat(c.call(arguments)));
							return null !== s && Object(s) === s ? s : o
						}
						return t.apply(e, n.concat(c.call(arguments)))
					};
				return r
			});
			var t, n, r, i, o, s = Function.prototype.call,
				a = Array.prototype,
				l = Object.prototype,
				c = a.slice,
				u = s.bind(l.toString),
				h = s.bind(l.hasOwnProperty);
			if ((o = h(l, "__defineGetter__")) && (t = s.bind(l.__defineGetter__), n = s.bind(l.__defineSetter__), r = s.bind(l.__lookupGetter__), i = s.bind(l.__lookupSetter__)), Array.isArray || (Array.isArray = function(e) {
				return "[object Array]" == u(e)
			}), Array.prototype.forEach || (Array.prototype.forEach = function(e) {
				var t = S(this),
					n = arguments[1],
					r = 0,
					i = t.length >>> 0;
				if ("[object Function]" != u(e)) throw new TypeError;
				for (; i > r;) r in t && e.call(n, t[r], r, t), r++
			}), Array.prototype.map || (Array.prototype.map = function(e) {
				var t = S(this),
					n = t.length >>> 0,
					r = Array(n),
					i = arguments[1];
				if ("[object Function]" != u(e)) throw new TypeError;
				for (var o = 0; n > o; o++) o in t && (r[o] = e.call(i, t[o], o, t));
				return r
			}), Array.prototype.filter || (Array.prototype.filter = function(e) {
				var t = S(this),
					n = t.length >>> 0,
					r = [],
					i = arguments[1];
				if ("[object Function]" != u(e)) throw new TypeError;
				for (var o = 0; n > o; o++) o in t && e.call(i, t[o], o, t) && r.push(t[o]);
				return r
			}), Array.prototype.every || (Array.prototype.every = function(e) {
				var t = S(this),
					n = t.length >>> 0,
					r = arguments[1];
				if ("[object Function]" != u(e)) throw new TypeError;
				for (var i = 0; n > i; i++) if (i in t && !e.call(r, t[i], i, t)) return !1;
				return !0
			}), Array.prototype.some || (Array.prototype.some = function(e) {
				var t = S(this),
					n = t.length >>> 0,
					r = arguments[1];
				if ("[object Function]" != u(e)) throw new TypeError;
				for (var i = 0; n > i; i++) if (i in t && e.call(r, t[i], i, t)) return !0;
				return !1
			}), Array.prototype.reduce || (Array.prototype.reduce = function(e) {
				var t = S(this),
					n = t.length >>> 0;
				if ("[object Function]" != u(e)) throw new TypeError;
				if (!n && 1 == arguments.length) throw new TypeError;
				var r, i = 0;
				if (arguments.length >= 2) r = arguments[1];
				else for (;;) {
						if (i in t) {
							r = t[i++];
							break
						}
						if (++i >= n) throw new TypeError
				}
				for (; n > i; i++) i in t && (r = e.call(void 0, r, t[i], i, t));
				return r
			}), Array.prototype.reduceRight || (Array.prototype.reduceRight = function(e) {
				var t = S(this),
					n = t.length >>> 0;
				if ("[object Function]" != u(e)) throw new TypeError;
				if (!n && 1 == arguments.length) throw new TypeError;
				var r, i = n - 1;
				if (arguments.length >= 2) r = arguments[1];
				else for (;;) {
						if (i in t) {
							r = t[i--];
							break
						}
						if (0 > --i) throw new TypeError
				}
				do i in this && (r = e.call(void 0, r, t[i], i, t)); while (i--);
				return r
			}), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
				var t = S(this),
					n = t.length >>> 0;
				if (!n) return -1;
				var r = 0;
				for (arguments.length > 1 && (r = B(arguments[1])), r = r >= 0 ? r : Math.max(0, n + r); n > r; r++) if (r in t && t[r] === e) return r;
				return -1
			}), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(e) {
				var t = S(this),
					n = t.length >>> 0;
				if (!n) return -1;
				var r = n - 1;
				for (arguments.length > 1 && (r = Math.min(r, B(arguments[1]))), r = r >= 0 ? r : n - Math.abs(r); r >= 0; r--) if (r in t && e === t[r]) return r;
				return -1
			}), Object.getPrototypeOf || (Object.getPrototypeOf = function(e) {
				return e.__proto__ || (e.constructor ? e.constructor.prototype : l)
			}), !Object.getOwnPropertyDescriptor) {
				var d = "Object.getOwnPropertyDescriptor called on a non-object: ";
				Object.getOwnPropertyDescriptor = function(e, t) {
					if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError(d + e);
					if (h(e, t)) {
						var n, s, a;
						if (n = {
							enumerable: !0,
							configurable: !0
						}, o) {
							var c = e.__proto__;
							e.__proto__ = l;
							var s = r(e, t),
								a = i(e, t);
							if (e.__proto__ = c, s || a) return s && (n.get = s), a && (n.set = a), n
						}
						return n.value = e[t], n
					}
				}
			}
			if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(e) {
				return Object.keys(e)
			}), !Object.create) {
				var f;
				f = null === Object.prototype.__proto__ ? function() {
					return {
						__proto__: null
					}
				} : function() {
					var e = {};
					for (var t in e) e[t] = null;
					return e.constructor = e.hasOwnProperty = e.propertyIsEnumerable = e.isPrototypeOf = e.toLocaleString = e.toString = e.valueOf = e.__proto__ = null, e
				}, Object.create = function(e, t) {
					var n;
					if (null === e) n = f();
					else {
						if ("object" != typeof e) throw new TypeError("typeof prototype[" + typeof e + "] != 'object'");
						var r = function() {};
						r.prototype = e, n = new r, n.__proto__ = e
					}
					return void 0 !== t && Object.defineProperties(n, t), n
				}
			}
			if (Object.defineProperty) {
				var p = e({}),
					g = "undefined" == typeof document || e(document.createElement("div"));
				if (!p || !g) var m = Object.defineProperty
			}
			if (!Object.defineProperty || m) {
				var v = "Property description must be an object: ",
					A = "Object.defineProperty called on non-object: ",
					y = "getters & setters can not be defined on this javascript engine";
				Object.defineProperty = function(e, s, a) {
					if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError(A + e);
					if ("object" != typeof a && "function" != typeof a || null === a) throw new TypeError(v + a);
					if (m) try {
							return m.call(Object, e, s, a)
					} catch (c) {}
					if (h(a, "value")) if (o && (r(e, s) || i(e, s))) {
							var u = e.__proto__;
							e.__proto__ = l, delete e[s], e[s] = a.value, e.__proto__ = u
						} else e[s] = a.value;
						else {
							if (!o) throw new TypeError(y);
							h(a, "get") && t(e, s, a.get), h(a, "set") && n(e, s, a.set)
						}
					return e
				}
			}
			Object.defineProperties || (Object.defineProperties = function(e, t) {
				for (var n in t) h(t, n) && Object.defineProperty(e, n, t[n]);
				return e
			}), Object.seal || (Object.seal = function(e) {
				return e
			}), Object.freeze || (Object.freeze = function(e) {
				return e
			});
			try {
				Object.freeze(function() {})
			} catch (C) {
				Object.freeze = function(e) {
					return function(t) {
						return "function" == typeof t ? t : e(t)
					}
				}(Object.freeze)
			}
			if (Object.preventExtensions || (Object.preventExtensions = function(e) {
				return e
			}), Object.isSealed || (Object.isSealed = function() {
				return !1
			}), Object.isFrozen || (Object.isFrozen = function() {
				return !1
			}), Object.isExtensible || (Object.isExtensible = function(e) {
				if (Object(e) === e) throw new TypeError;
				for (var t = ""; h(e, t);) t += "?";
				e[t] = !0;
				var n = h(e, t);
				return delete e[t], n
			}), !Object.keys) {
				var E = !0,
					F = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
					w = F.length;
				for (var b in {
					toString: null
				}) E = !1;
				Object.keys = function(e) {
					if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError("Object.keys called on a non-object");
					var t = [];
					for (var n in e) h(e, n) && t.push(n);
					if (E) for (var r = 0, i = w; i > r; r++) {
							var o = F[r];
							h(e, o) && t.push(o)
					}
					return t
				}
			}
			Date.prototype.toISOString && -1 !== new Date(-621987552e5).toISOString().indexOf("-000001") || (Date.prototype.toISOString = function() {
				var e, t, n, r;
				if (!isFinite(this)) throw new RangeError;
				for (e = [this.getUTCMonth() + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()], r = this.getUTCFullYear(), r = (0 > r ? "-" : r > 9999 ? "+" : "") + ("00000" + Math.abs(r)).slice(r >= 0 && 9999 >= r ? -4 : -6), t = e.length; t--;) n = e[t], 10 > n && (e[t] = "0" + n);
				return r + "-" + e.slice(0, 2).join("-") + "T" + e.slice(2).join(":") + "." + ("000" + this.getUTCMilliseconds()).slice(-3) + "Z"
			}), Date.now || (Date.now = function() {
				return (new Date).getTime()
			}), Date.prototype.toJSON || (Date.prototype.toJSON = function() {
				if ("function" != typeof this.toISOString) throw new TypeError;
				return this.toISOString()
			}), 864e13 !== Date.parse("+275760-09-13T00:00:00.000Z") && (Date = function(e) {
				var t = function t(n, r, i, o, s, a, l) {
					var c = arguments.length;
					if (this instanceof e) {
						var u = 1 == c && n + "" === n ? new e(t.parse(n)) : c >= 7 ? new e(n, r, i, o, s, a, l) : c >= 6 ? new e(n, r, i, o, s, a) : c >= 5 ? new e(n, r, i, o, s) : c >= 4 ? new e(n, r, i, o) : c >= 3 ? new e(n, r, i) : c >= 2 ? new e(n, r) : c >= 1 ? new e(n) : new e;
						return u.constructor = t, u
					}
					return e.apply(this, arguments)
				}, n = RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(?:Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$");
				for (var r in e) t[r] = e[r];
				return t.now = e.now, t.UTC = e.UTC, t.prototype = e.prototype, t.prototype.constructor = t, t.parse = function(t) {
					var r = n.exec(t);
					if (r) {
						r.shift();
						for (var i = 1; 7 > i; i++) r[i] = +(r[i] || (3 > i ? 1 : 0)), 1 == i && r[i]--;
						var o = +r.pop(),
							s = +r.pop(),
							a = r.pop(),
							l = 0;
						if (a) {
							if (s > 23 || o > 59) return 0 / 0;
							l = 6e4 * (60 * s + o) * ("+" == a ? -1 : 1)
						}
						var c = +r[0];
						return c >= 0 && 99 >= c ? (r[0] = c + 400, e.UTC.apply(this, r) + l - 126227808e5) : e.UTC.apply(this, r) + l
					}
					return e.parse.apply(this, arguments)
				}, t
			}(Date));
			var $ = "	\n\f\r   ᠎             　\u2028\u2029﻿";
			if (!String.prototype.trim || $.trim()) {
				$ = "[" + $ + "]";
				var x = RegExp("^" + $ + $ + "*"),
					D = RegExp($ + $ + "*$");
				String.prototype.trim = function() {
					return (this + "").replace(x, "").replace(D, "")
				}
			}
			var B = function(e) {
				return e = +e, e !== e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e
			}, _ = "a" != "a" [0],
				S = function(e) {
					if (null == e) throw new TypeError;
					return _ && "string" == typeof e && e ? e.split("") : Object(e)
				}
		}), define("ace/lib/dom", ["require", "exports", "module"], function(e, t) {
			var n = "http://www.w3.org/1999/xhtml";
			t.createElement = function(e, t) {
				return document.createElementNS ? document.createElementNS(t || n, e) : document.createElement(e)
			}, t.setText = function(e, t) {
				void 0 !== e.innerText && (e.innerText = t), void 0 !== e.textContent && (e.textContent = t)
			}, t.hasCssClass = function(e, t) {
				var n = e.className.split(/\s+/g);
				return -1 !== n.indexOf(t)
			}, t.addCssClass = function(e, n) {
				t.hasCssClass(e, n) || (e.className += " " + n)
			}, t.removeCssClass = function(e, t) {
				for (var n = e.className.split(/\s+/g);;) {
					var r = n.indexOf(t);
					if (-1 == r) break;
					n.splice(r, 1)
				}
				e.className = n.join(" ")
			}, t.toggleCssClass = function(e, t) {
				for (var n = e.className.split(/\s+/g), r = !0;;) {
					var i = n.indexOf(t);
					if (-1 == i) break;
					r = !1, n.splice(i, 1)
				}
				return r && n.push(t), e.className = n.join(" "), r
			}, t.setCssClass = function(e, n, r) {
				r ? t.addCssClass(e, n) : t.removeCssClass(e, n)
			}, t.hasCssString = function(e, t) {
				var n, r = 0;
				if (t = t || document, t.createStyleSheet && (n = t.styleSheets)) {
					for (; n.length > r;) if (n[r++].owningElement.id === e) return !0
				} else if (n = t.getElementsByTagName("style")) for (; n.length > r;) if (n[r++].id === e) return !0;
				return !1
			}, t.importCssString = function(e, r, i) {
				if (i = i || document, r && t.hasCssString(r, i)) return null;
				var o;
				if (i.createStyleSheet) o = i.createStyleSheet(), o.cssText = e, r && (o.owningElement.id = r);
				else {
					o = i.createElementNS ? i.createElementNS(n, "style") : i.createElement("style"), o.appendChild(i.createTextNode(e)), r && (o.id = r);
					var s = i.getElementsByTagName("head")[0] || i.documentElement;
					s.appendChild(o)
				}
			}, t.importCssStylsheet = function(e, n) {
				if (n.createStyleSheet) n.createStyleSheet(e);
				else {
					var r = t.createElement("link");
					r.rel = "stylesheet", r.href = e;
					var i = n.getElementsByTagName("head")[0] || n.documentElement;
					i.appendChild(r)
				}
			}, t.getInnerWidth = function(e) {
				return parseInt(t.computedStyle(e, "paddingLeft"), 10) + parseInt(t.computedStyle(e, "paddingRight"), 10) + e.clientWidth
			}, t.getInnerHeight = function(e) {
				return parseInt(t.computedStyle(e, "paddingTop"), 10) + parseInt(t.computedStyle(e, "paddingBottom"), 10) + e.clientHeight
			}, void 0 !== window.pageYOffset ? (t.getPageScrollTop = function() {
				return window.pageYOffset
			}, t.getPageScrollLeft = function() {
				return window.pageXOffset
			}) : (t.getPageScrollTop = function() {
				return document.body.scrollTop
			}, t.getPageScrollLeft = function() {
				return document.body.scrollLeft
			}), t.computedStyle = window.getComputedStyle ? function(e, t) {
				return t ? (window.getComputedStyle(e, "") || {})[t] || "" : window.getComputedStyle(e, "") || {}
			} : function(e, t) {
				return t ? e.currentStyle[t] : e.currentStyle
			}, t.scrollbarWidth = function(e) {
				var n = t.createElement("p");
				n.style.width = "100%", n.style.minWidth = "0px", n.style.height = "200px";
				var r = t.createElement("div"),
					i = r.style;
				i.position = "absolute", i.left = "-10000px", i.overflow = "hidden", i.width = "200px", i.minWidth = "0px", i.height = "150px", r.appendChild(n);
				var o = e.body || e.documentElement;
				o.appendChild(r);
				var s = n.offsetWidth;
				i.overflow = "scroll";
				var a = n.offsetWidth;
				return s == a && (a = r.clientWidth), o.removeChild(r), s - a
			}, t.setInnerHtml = function(e, t) {
				var n = e.cloneNode(!1);
				return n.innerHTML = t, e.parentNode.replaceChild(n, e), n
			}, t.setInnerText = function(e, t) {
				var n = e.ownerDocument;
				n.body && "textContent" in n.body ? e.textContent = t : e.innerText = t
			}, t.getInnerText = function(e) {
				var t = e.ownerDocument;
				return t.body && "textContent" in t.body ? e.textContent : e.innerText || e.textContent || ""
			}, t.getParentWindow = function(e) {
				return e.defaultView || e.parentWindow
			}
		}), define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent", "ace/lib/dom"], function(e, t) {
			function n(e, t, n) {
				var o = 0;
				if (o = !i.isOpera || "KeyboardEvent" in window || !i.isMac ? 0 | (t.ctrlKey ? 1 : 0) | (t.altKey ? 2 : 0) | (t.shiftKey ? 4 : 0) | (t.metaKey ? 8 : 0) : 0 | (t.metaKey ? 1 : 0) | (t.altKey ? 2 : 0) | (t.shiftKey ? 4 : 0) | (t.ctrlKey ? 8 : 0), n in r.MODIFIER_KEYS) {
					switch (r.MODIFIER_KEYS[n]) {
						case "Alt":
							o = 2;
							break;
						case "Shift":
							o = 4;
							break;
						case "Ctrl":
							o = 1;
							break;
						default:
							o = 8
					}
					n = 0
				}
				return 8 & o && (91 == n || 93 == n) && (n = 0), o || n in r.FUNCTION_KEYS || n in r.PRINTABLE_KEYS ? e(t, o, n) : !1
			}
			var r = e("./keys"),
				i = e("./useragent");
			if (e("./dom"), t.addListener = function(e, t, n) {
				if (e.addEventListener) return e.addEventListener(t, n, !1);
				if (e.attachEvent) {
					var r = function() {
						n(window.event)
					};
					n._wrapper = r, e.attachEvent("on" + t, r)
				}
			}, t.removeListener = function(e, t, n) {
				return e.removeEventListener ? e.removeEventListener(t, n, !1) : (e.detachEvent && e.detachEvent("on" + t, n._wrapper || n), void 0)
			}, t.stopEvent = function(e) {
				return t.stopPropagation(e), t.preventDefault(e), !1
			}, t.stopPropagation = function(e) {
				e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
			}, t.preventDefault = function(e) {
				e.preventDefault ? e.preventDefault() : e.returnValue = !1
			}, t.getButton = function(e) {
				return "dblclick" == e.type ? 0 : "contextmenu" == e.type || e.ctrlKey && i.isMac ? 2 : e.preventDefault ? e.button : {
					1: 0,
					2: 2,
					4: 1
				}[e.button]
			}, t.capture = document.documentElement.setCapture ? function(e, n, r) {
				function i(s) {
					n(s), o || (o = !0, r(s)), t.removeListener(e, "mousemove", n), t.removeListener(e, "mouseup", i), t.removeListener(e, "losecapture", i), e.releaseCapture()
				}
				var o = !1;
				t.addListener(e, "mousemove", n), t.addListener(e, "mouseup", i), t.addListener(e, "losecapture", i), e.setCapture()
			} : function(e, t, n) {
				function r(e) {
					t && t(e), n && n(e), document.removeEventListener("mousemove", t, !0), document.removeEventListener("mouseup", r, !0), e.stopPropagation()
				}
				document.addEventListener("mousemove", t, !0), document.addEventListener("mouseup", r, !0)
			}, t.addMouseWheelListener = function(e, n) {
				var r = 8,
					i = function(e) {
						void 0 !== e.wheelDelta ? void 0 !== e.wheelDeltaX ? (e.wheelX = -e.wheelDeltaX / r, e.wheelY = -e.wheelDeltaY / r) : (e.wheelX = 0, e.wheelY = -e.wheelDelta / r) : e.axis && e.axis == e.HORIZONTAL_AXIS ? (e.wheelX = 5 * (e.detail || 0), e.wheelY = 0) : (e.wheelX = 0, e.wheelY = 5 * (e.detail || 0)), n(e)
					};
				t.addListener(e, "DOMMouseScroll", i), t.addListener(e, "mousewheel", i)
			}, t.addMultiMouseDownListener = function(e, n, r, o) {
				var s, a, l, c = 0,
					u = {
						2: "dblclick",
						3: "tripleclick",
						4: "quadclick"
					};
				t.addListener(e, "mousedown", function(e) {
					if (0 != t.getButton(e)) c = 0;
					else {
						var i = Math.abs(e.clientX - s) > 5 || Math.abs(e.clientY - a) > 5;
						(!l || i) && (c = 0), c += 1, l && clearTimeout(l), l = setTimeout(function() {
							l = null
						}, n[c - 1] || 600)
					} if (1 == c && (s = e.clientX, a = e.clientY), r[o]("mousedown", e), c > 4) c = 0;
					else if (c > 1) return r[o](u[c], e)
				}), i.isOldIE && t.addListener(e, "dblclick", function(e) {
					c = 2, l && clearTimeout(l), l = setTimeout(function() {
						l = null
					}, n[c - 1] || 600), r[o]("mousedown", e), r[o](u[c], e)
				})
			}, t.addCommandKeyListener = function(e, r) {
				var o = t.addListener;
				if (i.isOldGecko || i.isOpera && !("KeyboardEvent" in window)) {
					var s = null;
					o(e, "keydown", function(e) {
						s = e.keyCode
					}), o(e, "keypress", function(e) {
						return n(r, e, s)
					})
				} else {
					var a = null;
					o(e, "keydown", function(e) {
						return a = e.keyIdentifier || e.keyCode, n(r, e, e.keyCode)
					})
				}
			}, window.postMessage && !i.isOldIE) {
				var o = 1;
				t.nextTick = function(e, n) {
					n = n || window;
					var r = "zero-timeout-message-" + o;
					t.addListener(n, "message", function i(o) {
						o.data == r && (t.stopPropagation(o), t.removeListener(n, "message", i), e())
					}), n.postMessage(r, "*")
				}
			}
			t.nextFrame = window.requestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame, t.nextFrame = t.nextFrame ? t.nextFrame.bind(window) : function(e) {
				setTimeout(e, 17)
			}
		}), define("ace/lib/keys", ["require", "exports", "module", "ace/lib/oop"], function(e, t) {
			var n = e("./oop"),
				r = function() {
					var e = {
						MODIFIER_KEYS: {
							16: "Shift",
							17: "Ctrl",
							18: "Alt",
							224: "Meta"
						},
						KEY_MODS: {
							ctrl: 1,
							alt: 2,
							option: 2,
							shift: 4,
							meta: 8,
							command: 8
						},
						FUNCTION_KEYS: {
							8: "Backspace",
							9: "Tab",
							13: "Return",
							19: "Pause",
							27: "Esc",
							32: "Space",
							33: "PageUp",
							34: "PageDown",
							35: "End",
							36: "Home",
							37: "Left",
							38: "Up",
							39: "Right",
							40: "Down",
							44: "Print",
							45: "Insert",
							46: "Delete",
							96: "Numpad0",
							97: "Numpad1",
							98: "Numpad2",
							99: "Numpad3",
							100: "Numpad4",
							101: "Numpad5",
							102: "Numpad6",
							103: "Numpad7",
							104: "Numpad8",
							105: "Numpad9",
							112: "F1",
							113: "F2",
							114: "F3",
							115: "F4",
							116: "F5",
							117: "F6",
							118: "F7",
							119: "F8",
							120: "F9",
							121: "F10",
							122: "F11",
							123: "F12",
							144: "Numlock",
							145: "Scrolllock"
						},
						PRINTABLE_KEYS: {
							32: " ",
							48: "0",
							49: "1",
							50: "2",
							51: "3",
							52: "4",
							53: "5",
							54: "6",
							55: "7",
							56: "8",
							57: "9",
							59: ";",
							61: "=",
							65: "a",
							66: "b",
							67: "c",
							68: "d",
							69: "e",
							70: "f",
							71: "g",
							72: "h",
							73: "i",
							74: "j",
							75: "k",
							76: "l",
							77: "m",
							78: "n",
							79: "o",
							80: "p",
							81: "q",
							82: "r",
							83: "s",
							84: "t",
							85: "u",
							86: "v",
							87: "w",
							88: "x",
							89: "y",
							90: "z",
							107: "+",
							109: "-",
							110: ".",
							188: ",",
							190: ".",
							191: "/",
							192: "`",
							219: "[",
							220: "\\",
							221: "]",
							222: "'"
						}
					};
					for (var t in e.FUNCTION_KEYS) {
						var r = e.FUNCTION_KEYS[t].toLowerCase();
						e[r] = parseInt(t, 10)
					}
					return n.mixin(e, e.MODIFIER_KEYS), n.mixin(e, e.PRINTABLE_KEYS), n.mixin(e, e.FUNCTION_KEYS), e.enter = e["return"], e.escape = e.esc, e.del = e["delete"], e[173] = "-", e
				}();
			n.mixin(t, r), t.keyCodeToString = function(e) {
				return (r[e] || String.fromCharCode(e)).toLowerCase()
			}
		}), define("ace/lib/oop", ["require", "exports", "module"], function(e, t) {
			t.inherits = function() {
				var e = function() {};
				return function(t, n) {
					e.prototype = n.prototype, t.super_ = n.prototype, t.prototype = new e, t.prototype.constructor = t
				}
			}(), t.mixin = function(e, t) {
				for (var n in t) e[n] = t[n]
			}, t.implement = function(e, n) {
				t.mixin(e, n)
			}
		}), define("ace/lib/useragent", ["require", "exports", "module"], function(e, t) {
			if (t.OS = {
				LINUX: "LINUX",
				MAC: "MAC",
				WINDOWS: "WINDOWS"
			}, t.getOS = function() {
				return t.isMac ? t.OS.MAC : t.isLinux ? t.OS.LINUX : t.OS.WINDOWS
			}, "object" == typeof navigator) {
				var n = (navigator.platform.match(/mac|win|linux/i) || ["other"])[0].toLowerCase(),
					r = navigator.userAgent;
				t.isWin = "win" == n, t.isMac = "mac" == n, t.isLinux = "linux" == n, t.isIE = "Microsoft Internet Explorer" == navigator.appName && parseFloat(navigator.userAgent.match(/MSIE ([0-9]+[\.0-9]+)/)[1]), t.isOldIE = t.isIE && 9 > t.isIE, t.isGecko = t.isMozilla = window.controllers && "Gecko" === window.navigator.product, t.isOldGecko = t.isGecko && 4 > parseInt((navigator.userAgent.match(/rv\:(\d+)/) || [])[1], 10), t.isOpera = window.opera && "[object Opera]" == Object.prototype.toString.call(window.opera), t.isWebKit = parseFloat(r.split("WebKit/")[1]) || void 0, t.isChrome = parseFloat(r.split(" Chrome/")[1]) || void 0, t.isAIR = r.indexOf("AdobeAIR") >= 0, t.isIPad = r.indexOf("iPad") >= 0, t.isTouchPad = r.indexOf("TouchPad") >= 0
			}
		}), define("ace/editor", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands"], function(e, t) {
			e("./lib/fixoldbrowsers");
			var n = e("./lib/oop"),
				r = e("./lib/lang"),
				i = e("./lib/useragent"),
				o = e("./keyboard/textinput").TextInput,
				s = e("./mouse/mouse_handler").MouseHandler,
				a = e("./mouse/fold_handler").FoldHandler,
				l = e("./keyboard/keybinding").KeyBinding,
				c = e("./edit_session").EditSession,
				u = e("./search").Search,
				h = e("./range").Range,
				d = e("./lib/event_emitter").EventEmitter,
				f = e("./commands/command_manager").CommandManager,
				p = e("./commands/default_commands").commands,
				g = function(e, t) {
					var n = e.getContainerElement();
					this.container = n, this.renderer = e, this.commands = new f(i.isMac ? "mac" : "win", p), this.textInput = new o(e.getTextAreaContainer(), this), this.renderer.textarea = this.textInput.getElement(), this.keyBinding = new l(this), this.$mouseHandler = new s(this), new a(this), this.$blockScrolling = 0, this.$search = (new u).set({
						wrap: !0
					}), this.setSession(t || new c(""))
				};
			(function() {
				n.implement(this, d), this.setKeyboardHandler = function(e) {
					this.keyBinding.setKeyboardHandler(e)
				}, this.getKeyboardHandler = function() {
					return this.keyBinding.getKeyboardHandler()
				}, this.setSession = function(e) {
					if (this.session != e) {
						if (this.session) {
							var t = this.session;
							this.session.removeEventListener("change", this.$onDocumentChange), this.session.removeEventListener("changeMode", this.$onChangeMode), this.session.removeEventListener("tokenizerUpdate", this.$onTokenizerUpdate), this.session.removeEventListener("changeTabSize", this.$onChangeTabSize), this.session.removeEventListener("changeWrapLimit", this.$onChangeWrapLimit), this.session.removeEventListener("changeWrapMode", this.$onChangeWrapMode), this.session.removeEventListener("onChangeFold", this.$onChangeFold), this.session.removeEventListener("changeFrontMarker", this.$onChangeFrontMarker), this.session.removeEventListener("changeBackMarker", this.$onChangeBackMarker), this.session.removeEventListener("changeBreakpoint", this.$onChangeBreakpoint), this.session.removeEventListener("changeAnnotation", this.$onChangeAnnotation), this.session.removeEventListener("changeOverwrite", this.$onCursorChange), this.session.removeEventListener("changeScrollTop", this.$onScrollTopChange), this.session.removeEventListener("changeLeftTop", this.$onScrollLeftChange);
							var n = this.session.getSelection();
							n.removeEventListener("changeCursor", this.$onCursorChange), n.removeEventListener("changeSelection", this.$onSelectionChange)
						}
						this.session = e, this.$onDocumentChange = this.onDocumentChange.bind(this), e.addEventListener("change", this.$onDocumentChange), this.renderer.setSession(e), this.$onChangeMode = this.onChangeMode.bind(this), e.addEventListener("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this), e.addEventListener("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer), e.addEventListener("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this), e.addEventListener("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = this.onChangeWrapMode.bind(this), e.addEventListener("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = this.onChangeFold.bind(this), e.addEventListener("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this), this.session.addEventListener("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = this.onChangeBackMarker.bind(this), this.session.addEventListener("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this), this.session.addEventListener("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = this.onChangeAnnotation.bind(this), this.session.addEventListener("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = this.onCursorChange.bind(this), this.session.addEventListener("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = this.onScrollTopChange.bind(this), this.session.addEventListener("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = this.onScrollLeftChange.bind(this), this.session.addEventListener("changeScrollLeft", this.$onScrollLeftChange), this.selection = e.getSelection(), this.selection.addEventListener("changeCursor", this.$onCursorChange), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.addEventListener("changeSelection", this.$onSelectionChange), this.onChangeMode(), this.$blockScrolling += 1, this.onCursorChange(), this.$blockScrolling -= 1, this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull(), this._emit("changeSession", {
							session: e,
							oldSession: t
						})
					}
				}, this.getSession = function() {
					return this.session
				}, this.setValue = function(e, t) {
					return this.session.doc.setValue(e), t ? 1 == t ? this.navigateFileEnd() : -1 == t && this.navigateFileStart() : this.selectAll(), e
				}, this.getValue = function() {
					return this.session.getValue()
				}, this.getSelection = function() {
					return this.selection
				}, this.resize = function(e) {
					this.renderer.onResize(e)
				}, this.setTheme = function(e) {
					this.renderer.setTheme(e)
				}, this.getTheme = function() {
					return this.renderer.getTheme()
				}, this.setStyle = function(e) {
					this.renderer.setStyle(e)
				}, this.unsetStyle = function(e) {
					this.renderer.unsetStyle(e)
				}, this.setFontSize = function(e) {
					this.container.style.fontSize = e, this.renderer.updateFontSize()
				}, this.$highlightBrackets = function() {
					if (this.session.$bracketHighlight && (this.session.removeMarker(this.session.$bracketHighlight), this.session.$bracketHighlight = null), !this.$highlightPending) {
						var e = this;
						this.$highlightPending = !0, setTimeout(function() {
							e.$highlightPending = !1;
							var t = e.session.findMatchingBracket(e.getCursorPosition());
							if (t) {
								var n = new h(t.row, t.column, t.row, t.column + 1);
								e.session.$bracketHighlight = e.session.addMarker(n, "ace_bracket", "text")
							}
						}, 50)
					}
				}, this.focus = function() {
					var e = this;
					setTimeout(function() {
						e.textInput.focus()
					}), this.textInput.focus()
				}, this.isFocused = function() {
					return this.textInput.isFocused()
				}, this.blur = function() {
					this.textInput.blur()
				}, this.onFocus = function() {
					this.$isFocused || (this.$isFocused = !0, this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus"))
				}, this.onBlur = function() {
					this.$isFocused && (this.$isFocused = !1, this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur"))
				}, this.$cursorChange = function() {
					this.renderer.updateCursor()
				}, this.onDocumentChange = function(e) {
					var t, n = e.data,
						r = n.range;
					t = r.start.row == r.end.row && "insertLines" != n.action && "removeLines" != n.action ? r.end.row : 1 / 0, this.renderer.updateLines(r.start.row, t), this._emit("change", e), this.$cursorChange()
				}, this.onTokenizerUpdate = function(e) {
					var t = e.data;
					this.renderer.updateLines(t.first, t.last)
				}, this.onScrollTopChange = function() {
					this.renderer.scrollToY(this.session.getScrollTop())
				}, this.onScrollLeftChange = function() {
					this.renderer.scrollToX(this.session.getScrollLeft())
				}, this.onCursorChange = function() {
					this.$cursorChange(), this.$blockScrolling || this.renderer.scrollCursorIntoView(), this.$highlightBrackets(), this.$updateHighlightActiveLine(), this._emit("changeSelection")
				}, this.$updateHighlightActiveLine = function() {
					var e, t = this.getSession();
					this.$highlightActiveLine && ("line" == this.$selectionStyle && this.selection.isMultiLine() || (e = this.getCursorPosition())), t.$highlightLineMarker && !e ? (t.removeMarker(t.$highlightLineMarker.id), t.$highlightLineMarker = null) : !t.$highlightLineMarker && e ? t.$highlightLineMarker = t.highlightLines(e.row, e.row, "ace_active-line") : e && (t.$highlightLineMarker.start.row = e.row, t.$highlightLineMarker.end.row = e.row, t._emit("changeBackMarker"))
				}, this.onSelectionChange = function() {
					var e = this.session;
					if (e.$selectionMarker && e.removeMarker(e.$selectionMarker), e.$selectionMarker = null, this.selection.isEmpty()) this.$updateHighlightActiveLine();
					else {
						var t = this.selection.getRange(),
							n = this.getSelectionStyle();
						e.$selectionMarker = e.addMarker(t, "ace_selection", n)
					}
					var r = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
					this.session.highlight(r), this._emit("changeSelection")
				}, this.$getSelectionHighLightRegexp = function() {
					var e = this.session,
						t = this.getSelectionRange();
					if (!t.isEmpty() && !t.isMultiLine()) {
						var n = t.start.column - 1,
							r = t.end.column + 1,
							i = e.getLine(t.start.row),
							o = i.length,
							s = i.substring(Math.max(n, 0), Math.min(r, o));
						if (!(n >= 0 && /^[\w\d]/.test(s) || o >= r && /[\w\d]$/.test(s)) && (s = i.substring(t.start.column, t.end.column), /^[\w\d]+$/.test(s))) {
							var a = this.$search.$assembleRegExp({
								wholeWord: !0,
								caseSensitive: !0,
								needle: s
							});
							return a
						}
					}
				}, this.onChangeFrontMarker = function() {
					this.renderer.updateFrontMarkers()
				}, this.onChangeBackMarker = function() {
					this.renderer.updateBackMarkers()
				}, this.onChangeBreakpoint = function() {
					this.renderer.updateBreakpoints()
				}, this.onChangeAnnotation = function() {
					this.renderer.setAnnotations(this.session.getAnnotations())
				}, this.onChangeMode = function() {
					this.renderer.updateText()
				}, this.onChangeWrapLimit = function() {
					this.renderer.updateFull()
				}, this.onChangeWrapMode = function() {
					this.renderer.onResize(!0)
				}, this.onChangeFold = function() {
					this.$updateHighlightActiveLine(), this.renderer.updateFull()
				}, this.getCopyText = function() {
					var e = "";
					return this.selection.isEmpty() || (e = this.session.getTextRange(this.getSelectionRange())), this._emit("copy", e), e
				}, this.onCopy = function() {
					this.commands.exec("copy", this)
				}, this.onCut = function() {
					this.commands.exec("cut", this)
				}, this.onPaste = function(e) {
					this.$readOnly || (this._emit("paste", e), this.insert(e))
				}, this.execCommand = function(e, t) {
					this.commands.exec(e, this, t)
				}, this.insert = function(e) {
					var t = this.session,
						n = t.getMode(),
						r = this.getCursorPosition();
					if (this.getBehavioursEnabled()) {
						var i = n.transformAction(t.getState(r.row), "insertion", this, t, e);
						i && (e = i.text)
					}
					if (e = e.replace("	", this.session.getTabString()), this.selection.isEmpty()) {
						if (this.session.getOverwrite()) {
							var o = new h.fromPoints(r, r);
							o.end.column += e.length, this.session.remove(o)
						}
					} else r = this.session.remove(this.getSelectionRange()), this.clearSelection();
					this.clearSelection();
					var s = r.column,
						a = t.getState(r.row),
						l = t.getLine(r.row),
						c = n.checkOutdent(a, l, e),
						u = t.insert(r, e);
					if (i && i.selection && (2 == i.selection.length ? this.selection.setSelectionRange(new h(r.row, s + i.selection[0], r.row, s + i.selection[1])) : this.selection.setSelectionRange(new h(r.row + i.selection[0], i.selection[1], r.row + i.selection[2], i.selection[3]))), t.getDocument().isNewLine(e)) {
						var d = n.getNextLineIndent(a, l.slice(0, r.column), t.getTabString());
						this.moveCursorTo(r.row + 1, 0);
						for (var f = t.getTabSize(), p = Number.MAX_VALUE, g = r.row + 1; u.row >= g; ++g) {
							var m = 0;
							l = t.getLine(g);
							for (var v = 0; l.length > v; ++v) if ("	" == l.charAt(v)) m += f;
								else {
									if (" " != l.charAt(v)) break;
									m += 1
								}
								/[^\s]/.test(l) && (p = Math.min(m, p))
						}
						for (var g = r.row + 1; u.row >= g; ++g) {
							var A = p;
							l = t.getLine(g);
							for (var v = 0; l.length > v && A > 0; ++v) "	" == l.charAt(v) ? A -= f : " " == l.charAt(v) && (A -= 1);
							t.remove(new h(g, 0, g, v))
						}
						t.indentRows(r.row + 1, u.row, d)
					}
					c && n.autoOutdent(a, t, r.row)
				}, this.onTextInput = function(e) {
					this.keyBinding.onTextInput(e)
				}, this.onCommandKey = function(e, t, n) {
					this.keyBinding.onCommandKey(e, t, n)
				}, this.setOverwrite = function(e) {
					this.session.setOverwrite(e)
				}, this.getOverwrite = function() {
					return this.session.getOverwrite()
				}, this.toggleOverwrite = function() {
					this.session.toggleOverwrite()
				}, this.setScrollSpeed = function(e) {
					this.$mouseHandler.setScrollSpeed(e)
				}, this.getScrollSpeed = function() {
					return this.$mouseHandler.getScrollSpeed()
				}, this.setDragDelay = function(e) {
					this.$mouseHandler.setDragDelay(e)
				}, this.getDragDelay = function() {
					return this.$mouseHandler.getDragDelay()
				}, this.$selectionStyle = "line", this.setSelectionStyle = function(e) {
					this.$selectionStyle != e && (this.$selectionStyle = e, this.onSelectionChange(), this._emit("changeSelectionStyle", {
						data: e
					}))
				}, this.getSelectionStyle = function() {
					return this.$selectionStyle
				}, this.$highlightActiveLine = !0, this.setHighlightActiveLine = function(e) {
					this.$highlightActiveLine != e && (this.$highlightActiveLine = e, this.$updateHighlightActiveLine())
				}, this.getHighlightActiveLine = function() {
					return this.$highlightActiveLine
				}, this.$highlightGutterLine = !0, this.setHighlightGutterLine = function(e) {
					this.$highlightGutterLine != e && (this.renderer.setHighlightGutterLine(e), this.$highlightGutterLine = e)
				}, this.getHighlightGutterLine = function() {
					return this.$highlightGutterLine
				}, this.$highlightSelectedWord = !0, this.setHighlightSelectedWord = function(e) {
					this.$highlightSelectedWord != e && (this.$highlightSelectedWord = e, this.$onSelectionChange())
				}, this.getHighlightSelectedWord = function() {
					return this.$highlightSelectedWord
				}, this.setAnimatedScroll = function(e) {
					this.renderer.setAnimatedScroll(e)
				}, this.getAnimatedScroll = function() {
					return this.renderer.getAnimatedScroll()
				}, this.setShowInvisibles = function(e) {
					this.renderer.setShowInvisibles(e)
				}, this.getShowInvisibles = function() {
					return this.renderer.getShowInvisibles()
				}, this.setDisplayIndentGuides = function(e) {
					this.renderer.setDisplayIndentGuides(e)
				}, this.getDisplayIndentGuides = function() {
					return this.renderer.getDisplayIndentGuides()
				}, this.setShowPrintMargin = function(e) {
					this.renderer.setShowPrintMargin(e)
				}, this.getShowPrintMargin = function() {
					return this.renderer.getShowPrintMargin()
				}, this.setPrintMarginColumn = function(e) {
					this.renderer.setPrintMarginColumn(e)
				}, this.getPrintMarginColumn = function() {
					return this.renderer.getPrintMarginColumn()
				}, this.$readOnly = !1, this.setReadOnly = function(e) {
					this.$readOnly = e
				}, this.getReadOnly = function() {
					return this.$readOnly
				}, this.$modeBehaviours = !0, this.setBehavioursEnabled = function(e) {
					this.$modeBehaviours = e
				}, this.getBehavioursEnabled = function() {
					return this.$modeBehaviours
				}, this.$modeWrapBehaviours = !0, this.setWrapBehavioursEnabled = function(e) {
					this.$modeWrapBehaviours = e
				}, this.getWrapBehavioursEnabled = function() {
					return this.$modeWrapBehaviours
				}, this.setShowFoldWidgets = function(e) {
					var t = this.renderer.$gutterLayer;
					t.getShowFoldWidgets() != e && (this.renderer.$gutterLayer.setShowFoldWidgets(e), this.$showFoldWidgets = e, this.renderer.updateFull())
				}, this.getShowFoldWidgets = function() {
					return this.renderer.$gutterLayer.getShowFoldWidgets()
				}, this.setFadeFoldWidgets = function(e) {
					this.renderer.setFadeFoldWidgets(e)
				}, this.getFadeFoldWidgets = function() {
					return this.renderer.getFadeFoldWidgets()
				}, this.remove = function(e) {
					this.selection.isEmpty() && ("left" == e ? this.selection.selectLeft() : this.selection.selectRight());
					var t = this.getSelectionRange();
					if (this.getBehavioursEnabled()) {
						var n = this.session,
							r = n.getState(t.start.row),
							i = n.getMode().transformAction(r, "deletion", this, n, t);
						i && (t = i)
					}
					this.session.remove(t), this.clearSelection()
				}, this.removeWordRight = function() {
					this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection()
				}, this.removeWordLeft = function() {
					this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection()
				}, this.removeToLineStart = function() {
					this.selection.isEmpty() && this.selection.selectLineStart(), this.session.remove(this.getSelectionRange()), this.clearSelection()
				}, this.removeToLineEnd = function() {
					this.selection.isEmpty() && this.selection.selectLineEnd();
					var e = this.getSelectionRange();
					e.start.column == e.end.column && e.start.row == e.end.row && (e.end.column = 0, e.end.row++), this.session.remove(e), this.clearSelection()
				}, this.splitLine = function() {
					this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());
					var e = this.getCursorPosition();
					this.insert("\n"), this.moveCursorToPosition(e)
				}, this.transposeLetters = function() {
					if (this.selection.isEmpty()) {
						var e = this.getCursorPosition(),
							t = e.column;
						if (0 !== t) {
							var n, r, i = this.session.getLine(e.row);
							i.length > t ? (n = i.charAt(t) + i.charAt(t - 1), r = new h(e.row, t - 1, e.row, t + 1)) : (n = i.charAt(t - 1) + i.charAt(t - 2), r = new h(e.row, t - 2, e.row, t)), this.session.replace(r, n)
						}
					}
				}, this.toLowerCase = function() {
					var e = this.getSelectionRange();
					this.selection.isEmpty() && this.selection.selectWord();
					var t = this.getSelectionRange(),
						n = this.session.getTextRange(t);
					this.session.replace(t, n.toLowerCase()), this.selection.setSelectionRange(e)
				}, this.toUpperCase = function() {
					var e = this.getSelectionRange();
					this.selection.isEmpty() && this.selection.selectWord();
					var t = this.getSelectionRange(),
						n = this.session.getTextRange(t);
					this.session.replace(t, n.toUpperCase()), this.selection.setSelectionRange(e)
				}, this.indent = function() {
					var e = this.session,
						t = this.getSelectionRange();
					if (!(t.start.row < t.end.row || t.start.column < t.end.column)) {
						var n;
						if (this.session.getUseSoftTabs()) {
							var i = e.getTabSize(),
								o = this.getCursorPosition(),
								s = e.documentToScreenColumn(o.row, o.column),
								a = i - s % i;
							n = r.stringRepeat(" ", a)
						} else n = "	";
						return this.insert(n)
					}
					var l = this.$getSelectedRows();
					e.indentRows(l.first, l.last, "	")
				}, this.blockOutdent = function() {
					var e = this.session.getSelection();
					this.session.outdentRows(e.getRange())
				}, this.sortLines = function() {
					var e = this.$getSelectedRows(),
						t = this.session,
						n = [];
					for (i = e.first; e.last >= i; i++) n.push(t.getLine(i));
					n.sort(function(e, t) {
						return e.toLowerCase() < t.toLowerCase() ? -1 : e.toLowerCase() > t.toLowerCase() ? 1 : 0
					});
					for (var r = new h(0, 0, 0, 0), i = e.first; e.last >= i; i++) {
						var o = t.getLine(i);
						r.start.row = i, r.end.row = i, r.end.column = o.length, t.replace(r, n[i - e.first])
					}
				}, this.toggleCommentLines = function() {
					var e = this.session.getState(this.getCursorPosition().row),
						t = this.$getSelectedRows();
					this.session.getMode().toggleCommentLines(e, this.session, t.first, t.last)
				}, this.getNumberAt = function(e, t) {
					var n = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
					n.lastIndex = 0;
					for (var r = this.session.getLine(e); t - 1 > n.lastIndex;) {
						var i = n.exec(r);
						if (t >= i.index && i.index + i[0].length >= t) {
							var o = {
								value: i[0],
								start: i.index,
								end: i.index + i[0].length
							};
							return o
						}
					}
					return null
				}, this.modifyNumber = function(e) {
					var t = this.selection.getCursor().row,
						n = this.selection.getCursor().column,
						r = new h(t, n - 1, t, n),
						i = this.session.getTextRange(r);
					if (!isNaN(parseFloat(i)) && isFinite(i)) {
						var o = this.getNumberAt(t, n);
						if (o) {
							var s = o.value.indexOf(".") >= 0 ? o.start + o.value.indexOf(".") + 1 : o.end,
								a = o.start + o.value.length - s,
								l = parseFloat(o.value);
							l *= Math.pow(10, a), e *= s !== o.end && s > n ? Math.pow(10, o.end - n - 1) : Math.pow(10, o.end - n), l += e, l /= Math.pow(10, a);
							var c = l.toFixed(a),
								u = new h(t, o.start, t, o.end);
							this.session.replace(u, c), this.moveCursorTo(t, Math.max(o.start + 1, n + c.length - o.value.length))
						}
					}
				}, this.removeLines = function() {
					var e, t = this.$getSelectedRows();
					e = 0 === t.first || t.last + 1 < this.session.getLength() ? new h(t.first, 0, t.last + 1, 0) : new h(t.first - 1, this.session.getLine(t.first - 1).length, t.last, this.session.getLine(t.last).length), this.session.remove(e), this.clearSelection()
				}, this.duplicateSelection = function() {
					var e = this.selection,
						t = this.session,
						n = e.getRange();
					if (n.isEmpty()) {
						var r = n.start.row;
						t.duplicateLines(r, r)
					} else {
						var i = e.isBackwards(),
							o = e.isBackwards() ? n.start : n.end,
							s = t.insert(o, t.getTextRange(n), !1);
						n.start = o, n.end = s, e.setSelectionRange(n, i)
					}
				}, this.moveLinesDown = function() {
					this.$moveLines(function(e, t) {
						return this.session.moveLinesDown(e, t)
					})
				}, this.moveLinesUp = function() {
					this.$moveLines(function(e, t) {
						return this.session.moveLinesUp(e, t)
					})
				}, this.moveText = function(e, t) {
					return this.$readOnly ? null : this.session.moveText(e, t)
				}, this.copyLinesUp = function() {
					this.$moveLines(function(e, t) {
						return this.session.duplicateLines(e, t), 0
					})
				}, this.copyLinesDown = function() {
					this.$moveLines(function(e, t) {
						return this.session.duplicateLines(e, t)
					})
				}, this.$moveLines = function(e) {
					var t = this.$getSelectedRows(),
						n = this.selection;
					if (!n.isMultiLine()) var r = n.getRange(),
					i = n.isBackwards();
					var o = e.call(this, t.first, t.last);
					r ? (r.start.row += o, r.end.row += o, n.setSelectionRange(r, i)) : (n.setSelectionAnchor(t.last + o + 1, 0), n.$moveSelection(function() {
						n.moveCursorTo(t.first + o, 0)
					}))
				}, this.$getSelectedRows = function() {
					var e = this.getSelectionRange().collapseRows();
					return {
						first: e.start.row,
						last: e.end.row
					}
				}, this.onCompositionStart = function() {
					this.renderer.showComposition(this.getCursorPosition())
				}, this.onCompositionUpdate = function(e) {
					this.renderer.setCompositionText(e)
				}, this.onCompositionEnd = function() {
					this.renderer.hideComposition()
				}, this.getFirstVisibleRow = function() {
					return this.renderer.getFirstVisibleRow()
				}, this.getLastVisibleRow = function() {
					return this.renderer.getLastVisibleRow()
				}, this.isRowVisible = function(e) {
					return e >= this.getFirstVisibleRow() && this.getLastVisibleRow() >= e
				}, this.isRowFullyVisible = function(e) {
					return e >= this.renderer.getFirstFullyVisibleRow() && this.renderer.getLastFullyVisibleRow() >= e
				}, this.$getVisibleRowCount = function() {
					return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1
				}, this.$moveByPage = function(e, t) {
					var n = this.renderer,
						r = this.renderer.layerConfig,
						i = e * Math.floor(r.height / r.lineHeight);
					this.$blockScrolling++, 1 == t ? this.selection.$moveSelection(function() {
						this.moveCursorBy(i, 0)
					}) : 0 == t && (this.selection.moveCursorBy(i, 0), this.selection.clearSelection()), this.$blockScrolling--;
					var o = n.scrollTop;
					n.scrollBy(0, i * r.lineHeight), null != t && n.scrollCursorIntoView(null, .5), n.animateScrolling(o)
				}, this.selectPageDown = function() {
					this.$moveByPage(1, !0)
				}, this.selectPageUp = function() {
					this.$moveByPage(-1, !0)
				}, this.gotoPageDown = function() {
					this.$moveByPage(1, !1)
				}, this.gotoPageUp = function() {
					this.$moveByPage(-1, !1)
				}, this.scrollPageDown = function() {
					this.$moveByPage(1)
				}, this.scrollPageUp = function() {
					this.$moveByPage(-1)
				}, this.scrollToRow = function(e) {
					this.renderer.scrollToRow(e)
				}, this.scrollToLine = function(e, t, n, r) {
					this.renderer.scrollToLine(e, t, n, r)
				}, this.centerSelection = function() {
					var e = this.getSelectionRange(),
						t = {
							row: Math.floor(e.start.row + (e.end.row - e.start.row) / 2),
							column: Math.floor(e.start.column + (e.end.column - e.start.column) / 2)
						};
					this.renderer.alignCursor(t, .5)
				}, this.getCursorPosition = function() {
					return this.selection.getCursor()
				}, this.getCursorPositionScreen = function() {
					return this.session.documentToScreenPosition(this.getCursorPosition())
				}, this.getSelectionRange = function() {
					return this.selection.getRange()
				}, this.selectAll = function() {
					this.$blockScrolling += 1, this.selection.selectAll(), this.$blockScrolling -= 1
				}, this.clearSelection = function() {
					this.selection.clearSelection()
				}, this.moveCursorTo = function(e, t) {
					this.selection.moveCursorTo(e, t)
				}, this.moveCursorToPosition = function(e) {
					this.selection.moveCursorToPosition(e)
				}, this.jumpToMatching = function(e) {
					var t = this.getCursorPosition(),
						n = this.session.getBracketRange(t);
					if (!n) {
						if (n = this.find({
							needle: /[{}()\[\]]/g,
							preventScroll: !0,
							start: {
								row: t.row,
								column: t.column - 1
							}
						}), !n) return;
						var r = n.start;
						r.row == t.row && 2 > Math.abs(r.column - t.column) && (n = this.session.getBracketRange(r))
					}
					r = n && n.cursor || r, r && (e ? n && n.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(r.row, r.column) : (this.clearSelection(), this.moveCursorTo(r.row, r.column)))
				}, this.gotoLine = function(e, t, n) {
					this.selection.clearSelection(), this.session.unfold({
						row: e - 1,
						column: t || 0
					}), this.$blockScrolling += 1, this.moveCursorTo(e - 1, t || 0), this.$blockScrolling -= 1, this.isRowFullyVisible(e - 1) || this.scrollToLine(e - 1, !0, n)
				}, this.navigateTo = function(e, t) {
					this.clearSelection(), this.moveCursorTo(e, t)
				}, this.navigateUp = function(e) {
					this.selection.clearSelection(), e = e || 1, this.selection.moveCursorBy(-e, 0)
				}, this.navigateDown = function(e) {
					this.selection.clearSelection(), e = e || 1, this.selection.moveCursorBy(e, 0)
				}, this.navigateLeft = function(e) {
					if (this.selection.isEmpty()) for (e = e || 1; e--;) this.selection.moveCursorLeft();
					else {
						var t = this.getSelectionRange().start;
						this.moveCursorToPosition(t)
					}
					this.clearSelection()
				}, this.navigateRight = function(e) {
					if (this.selection.isEmpty()) for (e = e || 1; e--;) this.selection.moveCursorRight();
					else {
						var t = this.getSelectionRange().end;
						this.moveCursorToPosition(t)
					}
					this.clearSelection()
				}, this.navigateLineStart = function() {
					this.selection.moveCursorLineStart(), this.clearSelection()
				}, this.navigateLineEnd = function() {
					this.selection.moveCursorLineEnd(), this.clearSelection()
				}, this.navigateFileEnd = function() {
					var e = this.renderer.scrollTop;
					this.selection.moveCursorFileEnd(), this.clearSelection(), this.renderer.animateScrolling(e)
				}, this.navigateFileStart = function() {
					var e = this.renderer.scrollTop;
					this.selection.moveCursorFileStart(), this.clearSelection(), this.renderer.animateScrolling(e)
				}, this.navigateWordRight = function() {
					this.selection.moveCursorWordRight(), this.clearSelection()
				}, this.navigateWordLeft = function() {
					this.selection.moveCursorWordLeft(), this.clearSelection()
				}, this.replace = function(e, t) {
					t && this.$search.set(t);
					var n = this.$search.find(this.session),
						r = 0;
					return n ? (this.$tryReplace(n, e) && (r = 1), null !== n && (this.selection.setSelectionRange(n), this.renderer.scrollSelectionIntoView(n.start, n.end)), r) : r
				}, this.replaceAll = function(e, t) {
					t && this.$search.set(t);
					var n = this.$search.findAll(this.session),
						r = 0;
					if (!n.length) return r;
					this.$blockScrolling += 1;
					var i = this.getSelectionRange();
					this.clearSelection(), this.selection.moveCursorTo(0, 0);
					for (var o = n.length - 1; o >= 0; --o) this.$tryReplace(n[o], e) && r++;
					return this.selection.setSelectionRange(i), this.$blockScrolling -= 1, r
				}, this.$tryReplace = function(e, t) {
					var n = this.session.getTextRange(e);
					return t = this.$search.replace(n, t), null !== t ? (e.end = this.session.replace(e, t), e) : null
				}, this.getLastSearchOptions = function() {
					return this.$search.getOptions()
				}, this.find = function(e, t, r) {
					t || (t = {}), "string" == typeof e || e instanceof RegExp ? t.needle = e : "object" == typeof e && n.mixin(t, e);
					var i = this.selection.getRange();
					null == t.needle && (e = this.session.getTextRange(i) || this.$search.$options.needle, e || (i = this.session.getWordRange(i.start.row, i.start.column), e = this.session.getTextRange(i)), this.$search.set({
						needle: e
					})), this.$search.set(t), t.start || this.$search.set({
						start: i
					});
					var o = this.$search.find(this.session);
					return t.preventScroll ? o : o ? (this.revealRange(o, r), o) : (t.backwards ? i.start = i.end : i.end = i.start, this.selection.setRange(i), void 0)
				}, this.findNext = function(e, t) {
					this.find({
						skipCurrent: !0,
						backwards: !1
					}, e, t)
				}, this.findPrevious = function(e, t) {
					this.find(e, {
						skipCurrent: !0,
						backwards: !0
					}, t)
				}, this.revealRange = function(e, t) {
					this.$blockScrolling += 1, this.session.unfold(e), this.selection.setSelectionRange(e), this.$blockScrolling -= 1;
					var n = this.renderer.scrollTop;
					this.renderer.scrollSelectionIntoView(e.start, e.end, .5), 0 != t && this.renderer.animateScrolling(n)
				}, this.undo = function() {
					this.$blockScrolling++, this.session.getUndoManager().undo(), this.$blockScrolling--, this.renderer.scrollCursorIntoView(null, .5)
				}, this.redo = function() {
					this.$blockScrolling++, this.session.getUndoManager().redo(), this.$blockScrolling--, this.renderer.scrollCursorIntoView(null, .5)
				}, this.destroy = function() {
					this.renderer.destroy()
				}
			}).call(g.prototype), t.Editor = g
		}), define("ace/lib/lang", ["require", "exports", "module"], function(e, t) {
			t.stringReverse = function(e) {
				return e.split("").reverse().join("")
			}, t.stringRepeat = function(e, t) {
				return Array(t + 1).join(e)
			};
			var n = /^\s\s*/,
				r = /\s\s*$/;
			t.stringTrimLeft = function(e) {
				return e.replace(n, "")
			}, t.stringTrimRight = function(e) {
				return e.replace(r, "")
			}, t.copyObject = function(e) {
				var t = {};
				for (var n in e) t[n] = e[n];
				return t
			}, t.copyArray = function(e) {
				for (var t = [], n = 0, r = e.length; r > n; n++) t[n] = e[n] && "object" == typeof e[n] ? this.copyObject(e[n]) : e[n];
				return t
			}, t.deepCopy = function(e) {
				if ("object" != typeof e) return e;
				var t = e.constructor();
				for (var n in e) t[n] = "object" == typeof e[n] ? this.deepCopy(e[n]) : e[n];
				return t
			}, t.arrayToMap = function(e) {
				for (var t = {}, n = 0; e.length > n; n++) t[e[n]] = 1;
				return t
			}, t.createMap = function(e) {
				var t = Object.create(null);
				for (var n in e) t[n] = e[n];
				return t
			}, t.arrayRemove = function(e, t) {
				for (var n = 0; e.length >= n; n++) t === e[n] && e.splice(n, 1)
			}, t.escapeRegExp = function(e) {
				return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
			}, t.escapeHTML = function(e) {
				return e.replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;")
			}, t.getMatchOffsets = function(e, t) {
				var n = [];
				return e.replace(t, function(e) {
					n.push({
						offset: arguments[arguments.length - 2],
						length: e.length
					})
				}), n
			}, t.deferredCall = function(e) {
				var t = null,
					n = function() {
						t = null, e()
					}, r = function(e) {
						return r.cancel(), t = setTimeout(n, e || 0), r
					};
				return r.schedule = r, r.call = function() {
					return this.cancel(), e(), r
				}, r.cancel = function() {
					return clearTimeout(t), t = null, r
				}, r
			}, t.delayedCall = function(e, t) {
				var n = null,
					r = function() {
						n = null, e()
					}, i = function(e) {
						n && clearTimeout(n), n = setTimeout(r, e || t)
					};
				return i.delay = i, i.schedule = function(e) {
					null == n && (n = setTimeout(r, e || 0))
				}, i.call = function() {
					this.cancel(), e()
				}, i.cancel = function() {
					n && clearTimeout(n), n = null
				}, i.isPending = function() {
					return n
				}, i
			}
		}), define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang"], function(e, t) {
			var n = e("../lib/event"),
				r = e("../lib/useragent"),
				i = e("../lib/dom"),
				o = e("../lib/lang"),
				s = function(e, t) {
					function s(e) {
						if (!p) {
							var t = e ? 2 : 1,
								n = 2;
							try {
								c.setSelectionRange(t, n)
							} catch (r) {}
						}
					}
					function a() {
						p || (c.value = u, r.isWebKit && y.schedule())
					}
					function l() {
						setTimeout(function() {
							g && (c.style.cssText = g, g = ""), null == t.renderer.$keepTextAreaAtCursor && (t.renderer.$keepTextAreaAtCursor = !0, t.renderer.$moveTextAreaToCursor())
						}, 0)
					}
					var c = i.createElement("textarea");
					c.className = "ace_text-input", r.isTouchPad && c.setAttribute("x-palm-disable-auto-cap", !0), c.wrap = "off", c.autocorrect = "off", c.autocapitalize = "off", c.spellcheck = !1, c.style.top = "-2em", e.insertBefore(c, e.firstChild);
					var u = "",
						h = !1,
						d = !1,
						f = !1,
						p = !1,
						g = "",
						m = !0,
						v = document.activeElement === c;
					n.addListener(c, "blur", function() {
						t.onBlur(), v = !1
					}), n.addListener(c, "focus", function() {
						v = !0, t.onFocus(), s()
					}), this.focus = function() {
						c.focus()
					}, this.blur = function() {
						c.blur()
					}, this.isFocused = function() {
						return v
					};
					var A = o.delayedCall(function() {
						v && s(m)
					}),
						y = o.delayedCall(function() {
							p || (c.value = u, v && s())
						});
					r.isWebKit || t.addEventListener("changeSelection", function() {
						t.selection.isEmpty() != m && (m = !m, A.schedule())
					}), a(), v && t.onFocus();
					var C = function(e) {
						return 0 === e.selectionStart && e.selectionEnd === e.value.length
					};
					if (!c.setSelectionRange && c.createTextRange && (c.setSelectionRange = function(e, t) {
						var n = this.createTextRange();
						n.collapse(!0), n.moveStart("character", e), n.moveEnd("character", t), n.select()
					}, C = function(e) {
						try {
							var t = e.ownerDocument.selection.createRange()
						} catch (n) {}
						return t && t.parentElement() == e ? t.text == e.value : !1
					}), r.isOldIE) {
						var E = !1,
							F = function(e) {
								if (!E) {
									var t = c.value;
									if (!p && t && t != u) {
										if (e && t == u[0]) return w.schedule();
										x(t), E = !0, a(), E = !1
									}
								}
							}, w = o.delayedCall(F);
						n.addListener(c, "propertychange", F);
						var b = {
							13: 1,
							27: 1
						};
						n.addListener(c, "keyup", function(e) {
							!p || c.value && !b[e.keyCode] || setTimeout(L, 0), 129 > (c.value.charCodeAt(0) || 0) || (p ? T() : k())
						})
					}
					var $ = function() {
						return h ? (h = !1, void 0) : d ? (d = !1, void 0) : (C(c) && (t.selectAll(), s()), void 0)
					}, x = function(e) {
							f ? (s(), e && t.onPaste(e), f = !1) : e == u[0] ? t.execCommand("del", {
								source: "ace"
							}) : (e.substring(0, 2) == u ? e = e.substr(2) : e[0] == u[0] ? e = e.substr(1) : e[e.length - 1] == u[0] && (e = e.slice(0, -1)), e[e.length - 1] == u[0] && (e = e.slice(0, -1)), e && t.onTextInput(e))
						}, D = function() {
							if (!p) {
								var e = c.value;
								a(), x(e)
							}
						}, B = function(e) {
							var r = t.getCopyText();
							if (!r) return n.preventDefault(e), void 0;
							var i = e.clipboardData || window.clipboardData;
							if (i) {
								var o = i.setData("Text", r);
								o && (t.onCut(), n.preventDefault(e))
							}
							o || (h = !0, c.value = r, c.select(), setTimeout(function() {
								h = !1, a(), s(), t.onCut()
							}))
						}, _ = function(e) {
							var r = t.getCopyText();
							if (!r) return n.preventDefault(e), void 0;
							var i = e.clipboardData || window.clipboardData;
							if (i) {
								var o = i.setData("Text", r);
								o && (t.onCopy(), n.preventDefault(e))
							}
							o || (d = !0, c.value = r, c.select(), setTimeout(function() {
								d = !1, a(), s(), t.onCopy()
							}))
						}, S = function(e) {
							var i = e.clipboardData || window.clipboardData;
							if (i) {
								var o = i.getData("Text");
								o && t.onPaste(o), r.isIE && setTimeout(s), n.preventDefault(e)
							} else c.value = "", f = !0
						};
					n.addCommandKeyListener(c, t.onCommandKey.bind(t)), n.addListener(c, "select", $), n.addListener(c, "input", D), n.addListener(c, "cut", B), n.addListener(c, "copy", _), n.addListener(c, "paste", S), "oncut" in c && "oncopy" in c && "onpaste" in c || n.addListener(e, "keydown", function(e) {
						if ((!r.isMac || e.metaKey) && e.ctrlKey) switch (e.keyCode) {
								case 67:
									_(e);
									break;
								case 86:
									S(e);
									break;
								case 88:
									B(e)
						}
					});
					var k = function() {
						p = !0, t.onCompositionStart(), setTimeout(T, 0)
					}, T = function() {
							p && t.onCompositionUpdate(c.value)
						}, L = function() {
							p = !1, t.onCompositionEnd()
						};
					n.addListener(c, "compositionstart", k), r.isGecko ? n.addListener(c, "text", T) : n.addListener(c, "keyup", T), n.addListener(c, "compositionend", L), this.getElement = function() {
						return c
					}, this.onContextMenu = function(e) {
						g || (g = c.style.cssText), c.style.cssText = "z-index:100000;" + (r.isIE ? "opacity:0.1;" : ""), s(t.selection.isEmpty()), t._emit("nativecontextmenu", {
							target: t
						});
						var i = t.container.getBoundingClientRect(),
							o = function(e) {
								c.style.left = e.clientX - i.left - 2 + "px", c.style.top = e.clientY - i.top - 2 + "px"
							};
						o(e), "mousedown" == e.type && (t.renderer.$keepTextAreaAtCursor && (t.renderer.$keepTextAreaAtCursor = null), r.isWin && n.capture(t.container, o, l))
					}, this.onContextMenuClose = l, r.isGecko || n.addListener(c, "contextmenu", function(e) {
						t.textInput.onContextMenu(e), l()
					})
				};
			t.TextInput = s
		}), define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop"], function(e, t) {
			var n = e("../lib/event"),
				r = e("../lib/useragent"),
				i = e("./default_handlers").DefaultHandlers,
				o = e("./default_gutter_handler").GutterHandler,
				s = e("./mouse_event").MouseEvent,
				a = e("./dragdrop").DragdropHandler,
				l = function(e) {
					this.editor = e, new i(this), new o(this), new a(this), n.addListener(e.container, "mousedown", function(t) {
						return e.focus(), n.preventDefault(t)
					});
					var t = e.renderer.getMouseEventTarget();
					n.addListener(t, "click", this.onMouseEvent.bind(this, "click")), n.addListener(t, "mousemove", this.onMouseMove.bind(this, "mousemove")), n.addMultiMouseDownListener(t, [300, 300, 250], this, "onMouseEvent"), n.addMouseWheelListener(e.container, this.onMouseWheel.bind(this, "mousewheel"));
					var r = e.renderer.$gutter;
					n.addListener(r, "mousedown", this.onMouseEvent.bind(this, "guttermousedown")), n.addListener(r, "click", this.onMouseEvent.bind(this, "gutterclick")), n.addListener(r, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick")), n.addListener(r, "mousemove", this.onMouseEvent.bind(this, "guttermousemove"))
				};
			(function() {
				this.$scrollSpeed = 1, this.setScrollSpeed = function(e) {
					this.$scrollSpeed = e
				}, this.getScrollSpeed = function() {
					return this.$scrollSpeed
				}, this.onMouseEvent = function(e, t) {
					this.editor._emit(e, new s(t, this.editor))
				}, this.$dragDelay = 250, this.setDragDelay = function(e) {
					this.$dragDelay = e
				}, this.getDragDelay = function() {
					return this.$dragDelay
				}, this.onMouseMove = function(e, t) {
					var n = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
					n && n.length && this.editor._emit(e, new s(t, this.editor))
				}, this.onMouseWheel = function(e, t) {
					var n = new s(t, this.editor);
					n.speed = 2 * this.$scrollSpeed, n.wheelX = t.wheelX, n.wheelY = t.wheelY, this.editor._emit(e, n)
				}, this.setState = function(e) {
					this.state = e
				}, this.captureMouse = function(e, t) {
					t && this.setState(t), this.x = e.x, this.y = e.y, this.isMousePressed = !0;
					var i = this.editor.renderer;
					i.$keepTextAreaAtCursor && (i.$keepTextAreaAtCursor = null);
					var o = this,
						s = function(e) {
							o.x = e.clientX, o.y = e.clientY
						}, a = function(e) {
							clearInterval(c), o[o.state + "End"] && o[o.state + "End"](e), o.$clickSelection = null, null == i.$keepTextAreaAtCursor && (i.$keepTextAreaAtCursor = !0, i.$moveTextAreaToCursor()), o.isMousePressed = !1
						}, l = function() {
							o[o.state] && o[o.state]()
						};
					if (r.isOldIE && "dblclick" == e.domEvent.type) return setTimeout(function() {
							l(), a(e.domEvent)
						}), void 0;
					n.capture(this.editor.container, s, a);
					var c = setInterval(l, 20)
				}
			}).call(l.prototype), t.MouseHandler = l
		}), define("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/dom", "ace/lib/useragent"], function(e, t) {
			function n(e) {
				e.$clickSelection = null;
				var t = e.editor;
				t.setDefaultHandler("mousedown", this.onMouseDown.bind(e)), t.setDefaultHandler("dblclick", this.onDoubleClick.bind(e)), t.setDefaultHandler("tripleclick", this.onTripleClick.bind(e)), t.setDefaultHandler("quadclick", this.onQuadClick.bind(e)), t.setDefaultHandler("mousewheel", this.onMouseWheel.bind(e));
				var n = ["select", "startSelect", "drag", "dragEnd", "dragWait", "dragWaitEnd", "startDrag", "focusWait"];
				n.forEach(function(t) {
					e[t] = this[t]
				}, this), e.selectByLines = this.extendSelectionBy.bind(e, "getLineRange"), e.selectByWords = this.extendSelectionBy.bind(e, "getWordRange"), e.$focusWaitTimout = 250
			}
			function r(e, t, n, r) {
				return Math.sqrt(Math.pow(n - e, 2) + Math.pow(r - t, 2))
			}
			function i(e, t) {
				if (e.start.row == e.end.row) var n = 2 * t.column - e.start.column - e.end.column;
				else var n = 2 * t.row - e.start.row - e.end.row;
				return 0 > n ? {
					cursor: e.start,
					anchor: e.end
				} : {
					cursor: e.end,
					anchor: e.start
				}
			}
			var o = e("../lib/dom");
			e("../lib/useragent");
			var s = 5;
			(function() {
				this.onMouseDown = function(e) {
					var t = e.inSelection(),
						n = e.getDocumentPosition();
					this.mousedownEvent = e;
					var r = this.editor,
						i = e.getButton();
					if (0 !== i) {
						var o = r.getSelectionRange(),
							s = o.isEmpty();
						return s && (r.moveCursorToPosition(n), r.selection.clearSelection()), r.textInput.onContextMenu(e.domEvent), void 0
					}
					return t && !r.isFocused() && (r.focus(), this.$focusWaitTimout && !this.$clickSelection) ? (this.setState("focusWait"), this.captureMouse(e), e.preventDefault()) : (!t || this.$clickSelection || e.getShiftKey() ? this.startSelect(n) : t && (this.mousedownEvent.time = (new Date).getTime(), this.setState("dragWait")), this.captureMouse(e), e.preventDefault())
				}, this.startSelect = function(e) {
					e = e || this.editor.renderer.screenToTextCoordinates(this.x, this.y), this.mousedownEvent.getShiftKey() ? this.editor.selection.selectToPosition(e) : this.$clickSelection || (this.editor.moveCursorToPosition(e), this.editor.selection.clearSelection()), this.setState("select")
				}, this.select = function() {
					var e, t = this.editor,
						n = t.renderer.screenToTextCoordinates(this.x, this.y);
					if (this.$clickSelection) {
						var r = this.$clickSelection.comparePoint(n);
						if (-1 == r) e = this.$clickSelection.end;
						else if (1 == r) e = this.$clickSelection.start;
						else {
							var o = i(this.$clickSelection, n);
							n = o.cursor, e = o.anchor
						}
						t.selection.setSelectionAnchor(e.row, e.column)
					}
					t.selection.selectToPosition(n), t.renderer.scrollCursorIntoView()
				}, this.extendSelectionBy = function(e) {
					var t, n = this.editor,
						r = n.renderer.screenToTextCoordinates(this.x, this.y),
						o = n.selection[e](r.row, r.column);
					if (this.$clickSelection) {
						var s = this.$clickSelection.comparePoint(o.start),
							a = this.$clickSelection.comparePoint(o.end);
						if (-1 == s && 0 >= a) t = this.$clickSelection.end, (o.end.row != r.row || o.end.column != r.column) && (r = o.start);
						else if (1 == a && s >= 0) t = this.$clickSelection.start, (o.start.row != r.row || o.start.column != r.column) && (r = o.end);
						else if (-1 == s && 1 == a) r = o.end, t = o.start;
						else {
							var l = i(this.$clickSelection, r);
							r = l.cursor, t = l.anchor
						}
						n.selection.setSelectionAnchor(t.row, t.column)
					}
					n.selection.selectToPosition(r), n.renderer.scrollCursorIntoView()
				}, this.startDrag = function() {
					var e = this.editor;
					this.setState("drag"), this.dragRange = e.getSelectionRange();
					var t = e.getSelectionStyle();
					this.dragSelectionMarker = e.session.addMarker(this.dragRange, "ace_selection", t), e.clearSelection(), o.addCssClass(e.container, "ace_dragging"), this.$dragKeybinding || (this.$dragKeybinding = {
						handleKeyboard: function(e, t, n) {
							return "esc" == n ? {
								command: this.command
							} : void 0
						},
						command: {
							exec: function(e) {
								var t = e.$mouseHandler;
								t.dragCursor = null, t.dragEnd(), t.startSelect()
							}
						}
					}), e.keyBinding.addKeyboardHandler(this.$dragKeybinding)
				}, this.focusWait = function() {
					var e = r(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y),
						t = (new Date).getTime();
					(e > s || t - this.mousedownEvent.time > this.$focusWaitTimout) && this.startSelect()
				}, this.dragWait = function() {
					var e = r(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y),
						t = (new Date).getTime(),
						n = this.editor;
					e > s ? this.startSelect(this.mousedownEvent.getDocumentPosition()) : t - this.mousedownEvent.time > n.getDragDelay() && this.startDrag()
				}, this.dragWaitEnd = function(e) {
					this.mousedownEvent.domEvent = e, this.startSelect()
				}, this.drag = function() {
					var e = this.editor;
					this.dragCursor = e.renderer.screenToTextCoordinates(this.x, this.y), e.moveCursorToPosition(this.dragCursor), e.renderer.scrollCursorIntoView()
				}, this.dragEnd = function(e) {
					var t = this.editor,
						n = this.dragCursor,
						r = this.dragRange;
					if (o.removeCssClass(t.container, "ace_dragging"), t.session.removeMarker(this.dragSelectionMarker), t.keyBinding.removeKeyboardHandler(this.$dragKeybinding), n) {
						if (t.clearSelection(), e && (e.ctrlKey || e.altKey)) {
							var i = t.session,
								s = r;
							s.end = i.insert(n, i.getTextRange(r)), s.start = n
						} else {
							if (r.contains(n.row, n.column)) return;
							var s = t.moveText(r, n)
						}
						s && t.selection.setSelectionRange(s)
					}
				}, this.onDoubleClick = function(e) {
					var t = e.getDocumentPosition(),
						n = this.editor,
						r = n.session,
						i = r.getBracketRange(t);
					return i ? (i.isEmpty() && (i.start.column--, i.end.column++), this.$clickSelection = i, this.setState("select"), void 0) : (this.$clickSelection = n.selection.getWordRange(t.row, t.column), this.setState("selectByWords"), void 0)
				}, this.onTripleClick = function(e) {
					var t = e.getDocumentPosition(),
						n = this.editor;
					this.setState("selectByLines"), this.$clickSelection = n.selection.getLineRange(t.row)
				}, this.onQuadClick = function() {
					var e = this.editor;
					e.selectAll(), this.$clickSelection = e.getSelectionRange(), this.setState("null")
				}, this.onMouseWheel = function(e) {
					if (!e.getShiftKey() && !e.getAccelKey()) {
						var t = this.editor,
							n = t.renderer.isScrollableBy(e.wheelX * e.speed, e.wheelY * e.speed);
						if (n) this.$passScrollEvent = !1;
						else {
							if (this.$passScrollEvent) return;
							if (!this.$scrollStopTimeout) {
								var r = this;
								this.$scrollStopTimeout = setTimeout(function() {
									r.$passScrollEvent = !0, r.$scrollStopTimeout = null
								}, 200)
							}
						}
						return t.renderer.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed), e.preventDefault()
					}
				}
			}).call(n.prototype), t.DefaultHandlers = n
		}), define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event"], function(e, t) {
			function n(e) {
				function t() {
					h = r.createElement("div"), h.className = "ace_gutter-tooltip", h.style.maxWidth = "500px", h.style.display = "none", a.container.appendChild(h)
				}
				function n() {
					h || t();
					var e = u.getDocumentPosition().row,
						n = l.$annotations[e];
					if (!n) return o();
					var r = a.session.getLength();
					if (e == r) {
						var i = a.renderer.pixelToScreenCoordinates(0, u.y).row,
							c = u.$pos;
						if (i > a.session.documentToScreenRow(c.row, c.column)) return o()
					}
					d != n && (d = n.text.join("<br/>"), h.style.display = "block", h.innerHTML = d, a.on("mousewheel", o), s(u))
				}
				function o() {
					c && (c = clearTimeout(c)), d && (h.style.display = "none", d = null, a.removeEventListener("mousewheel", o))
				}
				function s(e) {
					var t = a.renderer.$gutter.getBoundingClientRect();
					h.style.left = e.x - t.left + 15 + "px", e.y + 3 * a.renderer.lineHeight + 15 < t.bottom ? (h.style.bottom = "", h.style.top = e.y - t.top + 15 + "px") : (h.style.top = "", h.style.bottom = t.bottom - e.y + 5 + "px")
				}
				var a = e.editor,
					l = a.renderer.$gutterLayer;
				e.editor.setDefaultHandler("guttermousedown", function(t) {
					if (a.isFocused()) {
						var n = l.getRegion(t);
						if (!n) {
							var r = t.getDocumentPosition().row,
								i = a.session.selection;
							if (t.getShiftKey()) i.selectTo(r, 0);
							else {
								if (2 == t.domEvent.detail) return a.selectAll(), t.preventDefault();
								e.$clickSelection = a.selection.getLineRange(r)
							}
							return e.captureMouse(t, "selectByLines"), t.preventDefault()
						}
					}
				});
				var c, u, h, d;
				e.editor.setDefaultHandler("guttermousemove", function(t) {
					var i = t.domEvent.target || t.domEvent.srcElement;
					return r.hasCssClass(i, "ace_fold-widget") ? o() : (d && s(t), u = t, c || (c = setTimeout(function() {
						c = null, u && !e.isMousePressed ? n() : o()
					}, 50)), void 0)
				}), i.addListener(a.renderer.$gutter, "mouseout", function() {
					u = null, d && !c && (c = setTimeout(function() {
						c = null, o()
					}, 50))
				})
			}
			var r = e("../lib/dom"),
				i = e("../lib/event");
			t.GutterHandler = n
		}), define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(e, t) {
			var n = e("../lib/event"),
				r = e("../lib/useragent"),
				i = t.MouseEvent = function(e, t) {
					this.domEvent = e, this.editor = t, this.x = this.clientX = e.clientX, this.y = this.clientY = e.clientY, this.$pos = null, this.$inSelection = null, this.propagationStopped = !1, this.defaultPrevented = !1
				};
			(function() {
				this.stopPropagation = function() {
					n.stopPropagation(this.domEvent), this.propagationStopped = !0
				}, this.preventDefault = function() {
					n.preventDefault(this.domEvent), this.defaultPrevented = !0
				}, this.stop = function() {
					this.stopPropagation(), this.preventDefault()
				}, this.getDocumentPosition = function() {
					return this.$pos ? this.$pos : (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY), this.$pos)
				}, this.inSelection = function() {
					if (null !== this.$inSelection) return this.$inSelection;
					var e = this.editor;
					if (e.getReadOnly()) this.$inSelection = !1;
					else {
						var t = e.getSelectionRange();
						if (t.isEmpty()) this.$inSelection = !1;
						else {
							var n = this.getDocumentPosition();
							this.$inSelection = t.contains(n.row, n.column)
						}
					}
					return this.$inSelection
				}, this.getButton = function() {
					return n.getButton(this.domEvent)
				}, this.getShiftKey = function() {
					return this.domEvent.shiftKey
				}, this.getAccelKey = r.isMac ? function() {
					return this.domEvent.metaKey
				} : function() {
					return this.domEvent.ctrlKey
				}
			}).call(i.prototype)
		}), define("ace/mouse/dragdrop", ["require", "exports", "module", "ace/lib/event"], function(e, t) {
			var n = e("../lib/event"),
				r = function(e) {
					var t, r, i, o, s, a, l, c = e.editor,
						u = 0,
						h = c.container;
					n.addListener(h, "dragenter", function(e) {
						if (u++, !t) {
							s = c.getSelectionRange(), a = c.selection.isBackwards();
							var r = c.getSelectionStyle();
							t = c.session.addMarker(s, "ace_selection", r), c.clearSelection(), clearInterval(o), o = setInterval(d, 20)
						}
						return n.preventDefault(e)
					}), n.addListener(h, "dragover", function(e) {
						return r = e.clientX, i = e.clientY, n.preventDefault(e)
					});
					var d = function() {
						l = c.renderer.screenToTextCoordinates(r, i), c.moveCursorToPosition(l), c.renderer.scrollCursorIntoView()
					};
					n.addListener(h, "dragleave", function(e) {
						return u--, u > 0 ? void 0 : (console.log(e.type, u, e.target), clearInterval(o), c.session.removeMarker(t), t = null, c.selection.setSelectionRange(s, a), n.preventDefault(e))
					}), n.addListener(h, "drop", function(e) {
						return console.log(e.type, u, e.target), u = 0, clearInterval(o), c.session.removeMarker(t), t = null, s.end = c.session.insert(l, e.dataTransfer.getData("Text")), s.start = l, c.focus(), c.selection.setSelectionRange(s), n.preventDefault(e)
					})
				};
			t.DragdropHandler = r
		}), define("ace/mouse/fold_handler", ["require", "exports", "module"], function(e, t) {
			function n(e) {
				e.on("click", function(t) {
					var n = t.getDocumentPosition(),
						r = e.session,
						i = r.getFoldAt(n.row, n.column, 1);
					i && (t.getAccelKey() ? r.removeFold(i) : r.expandFold(i), t.stop())
				}), e.on("guttermousedown", function(t) {
					var n = e.renderer.$gutterLayer.getRegion(t);
					if ("foldWidgets" == n) {
						var r = t.getDocumentPosition().row,
							i = e.session;
						i.foldWidgets && i.foldWidgets[r] && e.session.onFoldWidgetClick(r, t), t.stop()
					}
				}), e.on("gutterdblclick", function(t) {
					var n = e.renderer.$gutterLayer.getRegion(t);
					if ("foldWidgets" == n) {
						var r = t.getDocumentPosition().row,
							i = e.session,
							o = i.foldWidgets;
						if (!o || o[r]) return;
						for (var s, a = r - 1; a >= 0;) {
							var l = o[a];
							if (null == l && (l = o[a] = i.getFoldWidget()), "start" == l) {
								var c = i.getFoldWidgetRange(a);
								if (s || (s = c), c && c.end.row >= r) break
							}
							a--
						}
						if (-1 == a && (c = s), c) {
							var r = c.start.row,
								u = i.getFoldAt(r, i.getLine(r).length, 1);
							u ? i.removeFold(u) : (i.addFold("...", c), e.renderer.scrollCursorIntoView({
								row: c.start.row,
								column: 0
							}))
						}
						t.stop()
					}
				})
			}
			t.FoldHandler = n
		}), define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], function(e, t) {
			var n = e("../lib/keys"),
				r = e("../lib/event"),
				i = function(e) {
					this.$editor = e, this.$data = {}, this.$handlers = [], this.setDefaultHandler(e.commands)
				};
			(function() {
				this.setDefaultHandler = function(e) {
					this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = e, this.addKeyboardHandler(e, 0), this.$data = {
						editor: this.$editor
					}
				}, this.setKeyboardHandler = function(e) {
					if (this.$handlers[this.$handlers.length - 1] != e) {
						for (; this.$handlers[1];) this.removeKeyboardHandler(this.$handlers[1]);
						this.addKeyboardHandler(e, 1)
					}
				}, this.addKeyboardHandler = function(e, t) {
					if (e) {
						var n = this.$handlers.indexOf(e); - 1 != n && this.$handlers.splice(n, 1), void 0 == t ? this.$handlers.push(e) : this.$handlers.splice(t, 0, e), -1 == n && e.attach && e.attach(this.$editor)
					}
				}, this.removeKeyboardHandler = function(e) {
					var t = this.$handlers.indexOf(e);
					return -1 == t ? !1 : (this.$handlers.splice(t, 1), e.detach && e.detach(this.$editor), !0)
				}, this.getKeyboardHandler = function() {
					return this.$handlers[this.$handlers.length - 1]
				}, this.$callKeyboardHandlers = function(e, t, n, i) {
					for (var o, s = this.$handlers.length; s-- && (o = this.$handlers[s].handleKeyboard(this.$data, e, t, n, i), !o || !o.command););
					if (!o || !o.command) return !1;
					var a = !1,
						l = this.$editor.commands;
					return a = "null" != o.command ? l.exec(o.command, this.$editor, o.args, i) : 1 != o.passEvent, a && i && -1 != e && r.stopEvent(i), a
				}, this.onCommandKey = function(e, t, r) {
					var i = n.keyCodeToString(r);
					this.$callKeyboardHandlers(t, i, r, e)
				}, this.onTextInput = function(e) {
					var t = this.$callKeyboardHandlers(-1, e);
					t || this.$editor.commands.exec("insertstring", this.$editor, e)
				}
			}).call(i.prototype), t.KeyBinding = i
		}), define("ace/edit_session", ["require", "exports", "module", "ace/config", "ace/lib/oop", "ace/lib/lang", "ace/lib/net", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/edit_session/folding", "ace/edit_session/bracket_match"], function(e, t) {
			var n = e("./config"),
				r = e("./lib/oop"),
				i = e("./lib/lang"),
				o = e("./lib/net"),
				s = e("./lib/event_emitter").EventEmitter,
				a = e("./selection").Selection,
				l = e("./mode/text").Mode,
				c = e("./range").Range,
				u = e("./document").Document,
				h = e("./background_tokenizer").BackgroundTokenizer,
				d = e("./search_highlight").SearchHighlight,
				f = function(e, t) {
					this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {}, this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = !0, this.$foldData = [], this.$foldData.toString = function() {
						var e = "";
						return this.forEach(function(t) {
							e += "\n" + ("" + t)
						}), e
					}, this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = this.onChange.bind(this), "object" == typeof e && e.getLine || (e = new u(e)), this.setDocument(e), this.selection = new a(this), this.setMode(t)
				};
			(function() {
				function t(e) {
					return 4352 > e ? !1 : e >= 4352 && 4447 >= e || e >= 4515 && 4519 >= e || e >= 4602 && 4607 >= e || e >= 9001 && 9002 >= e || e >= 11904 && 11929 >= e || e >= 11931 && 12019 >= e || e >= 12032 && 12245 >= e || e >= 12272 && 12283 >= e || e >= 12288 && 12350 >= e || e >= 12353 && 12438 >= e || e >= 12441 && 12543 >= e || e >= 12549 && 12589 >= e || e >= 12593 && 12686 >= e || e >= 12688 && 12730 >= e || e >= 12736 && 12771 >= e || e >= 12784 && 12830 >= e || e >= 12832 && 12871 >= e || e >= 12880 && 13054 >= e || e >= 13056 && 19903 >= e || e >= 19968 && 42124 >= e || e >= 42128 && 42182 >= e || e >= 43360 && 43388 >= e || e >= 44032 && 55203 >= e || e >= 55216 && 55238 >= e || e >= 55243 && 55291 >= e || e >= 63744 && 64255 >= e || e >= 65040 && 65049 >= e || e >= 65072 && 65106 >= e || e >= 65108 && 65126 >= e || e >= 65128 && 65131 >= e || e >= 65281 && 65376 >= e || e >= 65504 && 65510 >= e
				}
				r.implement(this, s), this.setDocument = function(e) {
					this.doc && this.doc.removeListener("change", this.$onChange), this.doc = e, e.on("change", this.$onChange), this.bgTokenizer && this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches()
				}, this.getDocument = function() {
					return this.doc
				}, this.$resetRowCache = function(e) {
					if (!e) return this.$docRowCache = [], this.$screenRowCache = [], void 0;
					var t = this.$getRowCacheIndex(this.$docRowCache, e) + 1,
						n = this.$docRowCache.length;
					this.$docRowCache.splice(t, n), this.$screenRowCache.splice(t, n)
				}, this.$getRowCacheIndex = function(e, t) {
					for (var n = 0, r = e.length - 1; r >= n;) {
						var i = n + r >> 1,
							o = e[i];
						if (t > o) n = i + 1;
						else {
							if (!(o > t)) return i;
							r = i - 1
						}
					}
					return n - 1
				}, this.resetCaches = function() {
					this.$modified = !0, this.$wrapData = [], this.$rowLengthCache = [], this.$resetRowCache(0), this.bgTokenizer && this.bgTokenizer.start(0)
				}, this.onChangeFold = function(e) {
					var t = e.data;
					this.$resetRowCache(t.start.row)
				}, this.onChange = function(e) {
					var t = e.data;
					this.$modified = !0, this.$resetRowCache(t.range.start.row);
					var n = this.$updateInternalDataOnChange(e);
					this.$fromUndo || !this.$undoManager || t.ignore || (this.$deltasDoc.push(t), n && 0 != n.length && this.$deltasFold.push({
						action: "removeFolds",
						folds: n
					}), this.$informUndoManager.schedule()), this.bgTokenizer.$updateOnChange(t), this._emit("change", e)
				}, this.setValue = function(e) {
					this.doc.setValue(e), this.selection.moveCursorTo(0, 0), this.selection.clearSelection(), this.$resetRowCache(0), this.$deltas = [], this.$deltasDoc = [], this.$deltasFold = [], this.getUndoManager().reset()
				}, this.getValue = this.toString = function() {
					return this.doc.getValue()
				}, this.getSelection = function() {
					return this.selection
				}, this.getState = function(e) {
					return this.bgTokenizer.getState(e)
				}, this.getTokens = function(e) {
					return this.bgTokenizer.getTokens(e)
				}, this.getTokenAt = function(e, t) {
					var n, r = this.bgTokenizer.getTokens(e),
						i = 0;
					if (null == t) o = r.length - 1, i = this.getLine(e).length;
					else for (var o = 0; r.length > o && (i += r[o].value.length, !(i >= t)); o++);
					return (n = r[o]) ? (n.index = o, n.start = i - n.value.length, n) : null
				}, this.setUndoManager = function(e) {
					if (this.$undoManager = e, this.$deltas = [], this.$deltasDoc = [], this.$deltasFold = [], this.$informUndoManager && this.$informUndoManager.cancel(), e) {
						var t = this;
						this.$syncInformUndoManager = function() {
							t.$informUndoManager.cancel(), t.$deltasFold.length && (t.$deltas.push({
								group: "fold",
								deltas: t.$deltasFold
							}), t.$deltasFold = []), t.$deltasDoc.length && (t.$deltas.push({
								group: "doc",
								deltas: t.$deltasDoc
							}), t.$deltasDoc = []), t.$deltas.length > 0 && e.execute({
								action: "aceupdate",
								args: [t.$deltas, t]
							}), t.$deltas = []
						}, this.$informUndoManager = i.deferredCall(this.$syncInformUndoManager)
					}
				}, this.$defaultUndoManager = {
					undo: function() {},
					redo: function() {},
					reset: function() {}
				}, this.getUndoManager = function() {
					return this.$undoManager || this.$defaultUndoManager
				}, this.getTabString = function() {
					return this.getUseSoftTabs() ? i.stringRepeat(" ", this.getTabSize()) : "	"
				}, this.$useSoftTabs = !0, this.setUseSoftTabs = function(e) {
					this.$useSoftTabs !== e && (this.$useSoftTabs = e)
				}, this.getUseSoftTabs = function() {
					return this.$useSoftTabs
				}, this.$tabSize = 4, this.setTabSize = function(e) {
					isNaN(e) || this.$tabSize === e || (this.$modified = !0, this.$rowLengthCache = [], this.$tabSize = e, this._emit("changeTabSize"))
				}, this.getTabSize = function() {
					return this.$tabSize
				}, this.isTabStop = function(e) {
					return this.$useSoftTabs && 0 == e.column % this.$tabSize
				}, this.$overwrite = !1, this.setOverwrite = function(e) {
					this.$overwrite != e && (this.$overwrite = e, this._emit("changeOverwrite"))
				}, this.getOverwrite = function() {
					return this.$overwrite
				}, this.toggleOverwrite = function() {
					this.setOverwrite(!this.$overwrite)
				}, this.addGutterDecoration = function(e, t) {
					this.$decorations[e] || (this.$decorations[e] = ""), this.$decorations[e] += " " + t, this._emit("changeBreakpoint", {})
				}, this.removeGutterDecoration = function(e, t) {
					this.$decorations[e] = (this.$decorations[e] || "").replace(" " + t, ""), this._emit("changeBreakpoint", {})
				}, this.getBreakpoints = function() {
					return this.$breakpoints
				}, this.setBreakpoints = function(e) {
					this.$breakpoints = [];
					for (var t = 0; e.length > t; t++) this.$breakpoints[e[t]] = "ace_breakpoint";
					this._emit("changeBreakpoint", {})
				}, this.clearBreakpoints = function() {
					this.$breakpoints = [], this._emit("changeBreakpoint", {})
				}, this.setBreakpoint = function(e, t) {
					void 0 === t && (t = "ace_breakpoint"), t ? this.$breakpoints[e] = t : delete this.$breakpoints[e], this._emit("changeBreakpoint", {})
				}, this.clearBreakpoint = function(e) {
					delete this.$breakpoints[e], this._emit("changeBreakpoint", {})
				}, this.addMarker = function(e, t, n, r) {
					var i = this.$markerId++,
						o = {
							range: e,
							type: n || "line",
							renderer: "function" == typeof n ? n : null,
							clazz: t,
							inFront: !! r,
							id: i
						};
					return r ? (this.$frontMarkers[i] = o, this._emit("changeFrontMarker")) : (this.$backMarkers[i] = o, this._emit("changeBackMarker")), i
				}, this.addDynamicMarker = function(e, t) {
					if (e.update) {
						var n = this.$markerId++;
						return e.id = n, e.inFront = !! t, t ? (this.$frontMarkers[n] = e, this._emit("changeFrontMarker")) : (this.$backMarkers[n] = e, this._emit("changeBackMarker")), e
					}
				}, this.removeMarker = function(e) {
					var t = this.$frontMarkers[e] || this.$backMarkers[e];
					if (t) {
						var n = t.inFront ? this.$frontMarkers : this.$backMarkers;
						t && (delete n[e], this._emit(t.inFront ? "changeFrontMarker" : "changeBackMarker"))
					}
				}, this.getMarkers = function(e) {
					return e ? this.$frontMarkers : this.$backMarkers
				}, this.highlight = function(e) {
					if (!this.$searchHighlight) {
						var t = new d(null, "ace_selected-word", "text");
						this.$searchHighlight = this.addDynamicMarker(t)
					}
					this.$searchHighlight.setRegexp(e)
				}, this.highlightLines = function(e, t, n, r) {
					"number" != typeof t && (n = t, t = e), n || (n = "ace_step");
					var i = new c(e, 0, t, 1 / 0),
						o = this.addMarker(i, n, "fullLine", r);
					return i.id = o, i
				}, this.setAnnotations = function(e) {
					this.$annotations = e, this._emit("changeAnnotation", {})
				}, this.getAnnotations = function() {
					return this.$annotations || []
				}, this.clearAnnotations = function() {
					this.$annotations = {}, this._emit("changeAnnotation", {})
				}, this.$detectNewLine = function(e) {
					var t = e.match(/^.*?(\r?\n)/m);
					this.$autoNewLine = t ? t[1] : "\n"
				}, this.getWordRange = function(e, t) {
					var n = this.getLine(e),
						r = !1;
					if (t > 0 && (r = !! n.charAt(t - 1).match(this.tokenRe)), r || (r = !! n.charAt(t).match(this.tokenRe)), r) var i = this.tokenRe;
					else if (/^\s+$/.test(n.slice(t - 1, t + 1))) var i = /\s/;
					else var i = this.nonTokenRe;
					var o = t;
					if (o > 0) {
						do o--; while (o >= 0 && n.charAt(o).match(i));
						o++
					}
					for (var s = t; n.length > s && n.charAt(s).match(i);) s++;
					return new c(e, o, e, s)
				}, this.getAWordRange = function(e, t) {
					for (var n = this.getWordRange(e, t), r = this.getLine(n.end.row); r.charAt(n.end.column).match(/[ \t]/);) n.end.column += 1;
					return n
				}, this.setNewLineMode = function(e) {
					this.doc.setNewLineMode(e)
				}, this.getNewLineMode = function() {
					return this.doc.getNewLineMode()
				}, this.$useWorker = !0, this.setUseWorker = function(e) {
					this.$useWorker != e && (this.$useWorker = e, this.$stopWorker(), e && this.$startWorker())
				}, this.getUseWorker = function() {
					return this.$useWorker
				}, this.onReloadTokenizer = function(e) {
					var t = e.data;
					this.bgTokenizer.start(t.first), this._emit("tokenizerUpdate", e)
				}, this.$modes = {}, this._loadMode = function(t, r) {
					function i(e) {
						return c.$modes[t] ? r(c.$modes[t]) : (c.$modes[t] = new e.Mode, c.$modes[t].$id = t, c._emit("loadmode", {
							name: t,
							mode: c.$modes[t]
						}), r(c.$modes[t]), void 0)
					}
					function s(e, t) {
						return n.get("packaged") ? (o.loadScript(n.moduleUrl(e, "mode"), t), void 0) : t()
					}
					if (this.$modes["null"] || (this.$modes["null"] = this.$modes["ace/mode/text"] = new l), this.$modes[t]) return r(this.$modes[t]);
					var a, c = this;
					try {
						a = e(t)
					} catch (u) {}
					return a && a.Mode ? i(a) : (this.$mode || this.$setModePlaceholder(), s(t, function() {
						e([t], i)
					}), void 0)
				}, this.$setModePlaceholder = function() {
					this.$mode = this.$modes["null"];
					var e = this.$mode.getTokenizer();
					if (this.bgTokenizer) this.bgTokenizer.setTokenizer(e);
					else {
						this.bgTokenizer = new h(e);
						var t = this;
						this.bgTokenizer.addEventListener("update", function(e) {
							t._emit("tokenizerUpdate", e)
						})
					}
					this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = this.$mode.tokenRe, this.nonTokenRe = this.$mode.nonTokenRe
				}, this.$mode = null, this.$modeId = null, this.setMode = function(e) {
					if (e = e || "null", "string" == typeof e) {
						if (this.$modeId == e) return;
						this.$modeId = e;
						var t = this;
						return this._loadMode(e, function(n) {
							t.$modeId === e && t.setMode(n)
						}), void 0
					}
					if (this.$mode !== e) {
						this.$mode = e, this.$modeId = e.$id, this.$stopWorker(), this.$useWorker && this.$startWorker();
						var n = e.getTokenizer();
						if (void 0 !== n.addEventListener) {
							var r = this.onReloadTokenizer.bind(this);
							n.addEventListener("update", r)
						}
						if (this.bgTokenizer) this.bgTokenizer.setTokenizer(n);
						else {
							this.bgTokenizer = new h(n);
							var t = this;
							this.bgTokenizer.addEventListener("update", function(e) {
								t._emit("tokenizerUpdate", e)
							})
						}
						this.bgTokenizer.setDocument(this.getDocument()), this.bgTokenizer.start(0), this.tokenRe = e.tokenRe, this.nonTokenRe = e.nonTokenRe, this.$setFolding(e.foldingRules), this._emit("changeMode")
					}
				}, this.$stopWorker = function() {
					this.$worker && this.$worker.terminate(), this.$worker = null
				}, this.$startWorker = function() {
					if ("undefined" == typeof Worker || e.noWorker) this.$worker = null;
					else try {
							this.$worker = this.$mode.createWorker(this)
					} catch (t) {
						console.log("Could not load worker"), console.log(t), this.$worker = null
					}
				}, this.getMode = function() {
					return this.$mode
				}, this.$scrollTop = 0, this.setScrollTop = function(e) {
					e = Math.round(Math.max(0, e)), this.$scrollTop !== e && (this.$scrollTop = e, this._emit("changeScrollTop", e))
				}, this.getScrollTop = function() {
					return this.$scrollTop
				}, this.$scrollLeft = 0, this.setScrollLeft = function(e) {
					e = Math.round(Math.max(0, e)), this.$scrollLeft !== e && (this.$scrollLeft = e, this._emit("changeScrollLeft", e))
				}, this.getScrollLeft = function() {
					return this.$scrollLeft
				}, this.getScreenWidth = function() {
					return this.$computeWidth(), this.screenWidth
				}, this.$computeWidth = function(e) {
					if (this.$modified || e) {
						if (this.$modified = !1, this.$useWrapMode) return this.screenWidth = this.$wrapLimit;
						for (var t = this.doc.getAllLines(), n = this.$rowLengthCache, r = 0, i = 0, o = this.$foldData[i], s = o ? o.start.row : 1 / 0, a = t.length, l = 0; a > l; l++) {
							if (l > s) {
								if (l = o.end.row + 1, l >= a) break;
								o = this.$foldData[i++], s = o ? o.start.row : 1 / 0
							}
							null == n[l] && (n[l] = this.$getStringScreenWidth(t[l])[0]), n[l] > r && (r = n[l])
						}
						this.screenWidth = r
					}
				}, this.getLine = function(e) {
					return this.doc.getLine(e)
				}, this.getLines = function(e, t) {
					return this.doc.getLines(e, t)
				}, this.getLength = function() {
					return this.doc.getLength()
				}, this.getTextRange = function(e) {
					return this.doc.getTextRange(e || this.selection.getRange())
				}, this.insert = function(e, t) {
					return this.doc.insert(e, t)
				}, this.remove = function(e) {
					return this.doc.remove(e)
				}, this.undoChanges = function(e, t) {
					if (e.length) {
						this.$fromUndo = !0;
						for (var n = null, r = e.length - 1; - 1 != r; r--) {
							var i = e[r];
							"doc" == i.group ? (this.doc.revertDeltas(i.deltas), n = this.$getUndoSelection(i.deltas, !0, n)) : i.deltas.forEach(function(e) {
								this.addFolds(e.folds)
							}, this)
						}
						return this.$fromUndo = !1, n && this.$undoSelect && !t && this.selection.setSelectionRange(n), n
					}
				}, this.redoChanges = function(e, t) {
					if (e.length) {
						this.$fromUndo = !0;
						for (var n = null, r = 0; e.length > r; r++) {
							var i = e[r];
							"doc" == i.group && (this.doc.applyDeltas(i.deltas), n = this.$getUndoSelection(i.deltas, !1, n))
						}
						return this.$fromUndo = !1, n && this.$undoSelect && !t && this.selection.setSelectionRange(n), n
					}
				}, this.setUndoSelect = function(e) {
					this.$undoSelect = e
				}, this.$getUndoSelection = function(e, t, n) {
					function r(e) {
						var n = "insertText" == e.action || "insertLines" == e.action;
						return t ? !n : n
					}
					var i, o, s = e[0],
						a = !1;
					r(s) ? (i = s.range.clone(), a = !0) : (i = c.fromPoints(s.range.start, s.range.start), a = !1);
					for (var l = 1; e.length > l; l++) s = e[l], r(s) ? (o = s.range.start, -1 == i.compare(o.row, o.column) && i.setStart(s.range.start), o = s.range.end, 1 == i.compare(o.row, o.column) && i.setEnd(s.range.end), a = !0) : (o = s.range.start, -1 == i.compare(o.row, o.column) && (i = c.fromPoints(s.range.start, s.range.start)), a = !1);
					if (null != n) {
						var u = n.compareRange(i);
						1 == u ? i.setStart(n.start) : -1 == u && i.setEnd(n.end)
					}
					return i
				}, this.replace = function(e, t) {
					return this.doc.replace(e, t)
				}, this.moveText = function(e, t) {
					var n = this.getTextRange(e);
					this.remove(e);
					var r = t.row,
						i = t.column;
					if (!e.isMultiLine() && e.start.row == r && i > e.end.column && (i -= n.length), e.isMultiLine() && r > e.end.row) {
						var o = this.doc.$split(n);
						r -= o.length - 1
					}
					var s = r + e.end.row - e.start.row,
						a = e.isMultiLine() ? e.end.column : i + e.end.column - e.start.column,
						l = new c(r, i, s, a);
					return this.insert(l.start, n), l
				}, this.indentRows = function(e, t, n) {
					n = n.replace(/\t/g, this.getTabString());
					for (var r = e; t >= r; r++) this.insert({
							row: r,
							column: 0
						}, n)
				}, this.outdentRows = function(e) {
					for (var t = e.collapseRows(), n = new c(0, 0, 0, 0), r = this.getTabSize(), i = t.start.row; t.end.row >= i; ++i) {
						var o = this.getLine(i);
						n.start.row = i, n.end.row = i;
						for (var s = 0; r > s && " " == o.charAt(s); ++s);
						r > s && "	" == o.charAt(s) ? (n.start.column = s, n.end.column = s + 1) : (n.start.column = 0, n.end.column = s), this.remove(n)
					}
				}, this.moveLinesUp = function(e, t) {
					if (0 >= e) return 0;
					var n = this.doc.removeLines(e, t);
					return this.doc.insertLines(e - 1, n), -1
				}, this.moveLinesDown = function(e, t) {
					if (t >= this.doc.getLength() - 1) return 0;
					var n = this.doc.removeLines(e, t);
					return this.doc.insertLines(e + 1, n), 1
				}, this.duplicateLines = function(e, t) {
					var e = this.$clipRowToDocument(e),
						t = this.$clipRowToDocument(t),
						n = this.getLines(e, t);
					this.doc.insertLines(e, n);
					var r = t - e + 1;
					return r
				}, this.$clipRowToDocument = function(e) {
					return Math.max(0, Math.min(e, this.doc.getLength() - 1))
				}, this.$clipColumnToRow = function(e, t) {
					return 0 > t ? 0 : Math.min(this.doc.getLine(e).length, t)
				}, this.$clipPositionToDocument = function(e, t) {
					if (t = Math.max(0, t), 0 > e) e = 0, t = 0;
					else {
						var n = this.doc.getLength();
						e >= n ? (e = n - 1, t = this.doc.getLine(n - 1).length) : t = Math.min(this.doc.getLine(e).length, t)
					}
					return {
						row: e,
						column: t
					}
				}, this.$clipRangeToDocument = function(e) {
					0 > e.start.row ? (e.start.row = 0, e.start.column = 0) : e.start.column = this.$clipColumnToRow(e.start.row, e.start.column);
					var t = this.doc.getLength() - 1;
					return e.end.row > t ? (e.end.row = t, e.end.column = this.doc.getLine(t).length) : e.end.column = this.$clipColumnToRow(e.end.row, e.end.column), e
				}, this.$wrapLimit = 80, this.$useWrapMode = !1, this.$wrapLimitRange = {
					min: null,
					max: null
				}, this.setUseWrapMode = function(e) {
					if (e != this.$useWrapMode) {
						if (this.$useWrapMode = e, this.$modified = !0, this.$resetRowCache(0), e) {
							var t = this.getLength();
							this.$wrapData = [];
							for (var n = 0; t > n; n++) this.$wrapData.push([]);
							this.$updateWrapData(0, t - 1)
						}
						this._emit("changeWrapMode")
					}
				}, this.getUseWrapMode = function() {
					return this.$useWrapMode
				}, this.setWrapLimitRange = function(e, t) {
					(this.$wrapLimitRange.min !== e || this.$wrapLimitRange.max !== t) && (this.$wrapLimitRange.min = e, this.$wrapLimitRange.max = t, this.$modified = !0, this._emit("changeWrapMode"))
				}, this.adjustWrapLimit = function(e) {
					var t = this.$constrainWrapLimit(e);
					return t != this.$wrapLimit && t > 0 ? (this.$wrapLimit = t, this.$modified = !0, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._emit("changeWrapLimit")), !0) : !1
				}, this.$constrainWrapLimit = function(e) {
					var t = this.$wrapLimitRange.min;
					t && (e = Math.max(t, e));
					var n = this.$wrapLimitRange.max;
					return n && (e = Math.min(n, e)), e
				}, this.getWrapLimit = function() {
					return this.$wrapLimit
				}, this.getWrapLimitRange = function() {
					return {
						min: this.$wrapLimitRange.min,
						max: this.$wrapLimitRange.max
					}
				}, this.$updateInternalDataOnChange = function(e) {
					var t, n = this.$useWrapMode,
						r = e.data.action,
						i = e.data.range.start.row,
						o = e.data.range.end.row,
						s = e.data.range.start,
						a = e.data.range.end,
						l = null;
					if (-1 != r.indexOf("Lines") ? (o = "insertLines" == r ? i + e.data.lines.length : i, t = e.data.lines ? e.data.lines.length : o - i) : t = o - i, 0 != t) if (-1 != r.indexOf("remove")) {
							this[n ? "$wrapData" : "$rowLengthCache"].splice(i, t);
							var c = this.$foldData;
							l = this.getFoldsInRange(e.data.range), this.removeFolds(l);
							var u = this.getFoldLine(a.row),
								h = 0;
							if (u) {
								u.addRemoveChars(a.row, a.column, s.column - a.column), u.shiftRow(-t);
								var d = this.getFoldLine(i);
								d && d !== u && (d.merge(u), u = d), h = c.indexOf(u) + 1
							}
							for (h; c.length > h; h++) {
								var u = c[h];
								u.start.row >= a.row && u.shiftRow(-t)
							}
							o = i
						} else {
							var f;
							if (n) {
								f = [i, 0];
								for (var p = 0; t > p; p++) f.push([]);
								this.$wrapData.splice.apply(this.$wrapData, f)
							} else f = Array(t), f.unshift(i, 0), this.$rowLengthCache.splice.apply(this.$rowLengthCache, f);
							var c = this.$foldData,
								u = this.getFoldLine(i),
								h = 0;
							if (u) {
								var g = u.range.compareInside(s.row, s.column);
								0 == g ? (u = u.split(s.row, s.column), u.shiftRow(t), u.addRemoveChars(o, 0, a.column - s.column)) : -1 == g && (u.addRemoveChars(i, 0, a.column - s.column), u.shiftRow(t)), h = c.indexOf(u) + 1
							}
							for (h; c.length > h; h++) {
								var u = c[h];
								u.start.row >= i && u.shiftRow(t)
							}
						} else {
							t = Math.abs(e.data.range.start.column - e.data.range.end.column), -1 != r.indexOf("remove") && (l = this.getFoldsInRange(e.data.range), this.removeFolds(l), t = -t);
							var u = this.getFoldLine(i);
							u && u.addRemoveChars(i, s.column, t)
						}
					return n && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), n ? this.$updateWrapData(i, o) : this.$updateRowLengthCache(i, o), l
				}, this.$updateRowLengthCache = function(e, t) {
					this.$rowLengthCache[e] = null, this.$rowLengthCache[t] = null
				}, this.$updateWrapData = function(e, t) {
					var n, r, o = this.doc.getAllLines(),
						s = this.getTabSize(),
						a = this.$wrapData,
						l = this.$wrapLimit,
						c = e;
					for (t = Math.min(t, o.length - 1); t >= c;) if (r = this.getFoldLine(c, r)) {
							for (n = [], r.walk(function(e, t, r, i) {
								var s;
								if (null != e) {
									s = this.$getDisplayTokens(e, n.length), s[0] = f;
									for (var a = 1; s.length > a; a++) s[a] = p
								} else s = this.$getDisplayTokens(o[t].substring(i, r), n.length);
								n = n.concat(s)
							}.bind(this), r.end.row, o[r.end.row].length + 1); 0 != n.length && n[n.length - 1] >= m;) n.pop();
							a[r.start.row] = this.$computeWrapSplits(n, l, s), c = r.end.row + 1
						} else n = this.$getDisplayTokens(i.stringTrimRight(o[c])), a[c] = this.$computeWrapSplits(n, l, s), c++
				};
				var a = 1,
					u = 2,
					f = 3,
					p = 4,
					g = 9,
					m = 10,
					v = 11,
					A = 12;
				this.$computeWrapSplits = function(e, t) {
					function n(t) {
						var n = e.slice(o, t),
							i = n.length;
						n.join("").replace(/12/g, function() {
							i -= 1
						}).replace(/2/g, function() {
							i -= 1
						}), s += i, r.push(s), o = t
					}
					if (0 == e.length) return [];
					for (var r = [], i = e.length, o = 0, s = 0; i - o > t;) {
						var a = o + t;
						if (e[a] >= m) {
							for (; e[a] >= m;) a++;
							n(a)
						} else if (e[a] != f && e[a] != p) {
							for (var l = Math.max(a - 10, o - 1); a > l && f > e[a];) a--;
							for (; a > l && e[a] == g;) a--;
							a > l ? n(++a) : (a = o + t, n(a))
						} else {
							for (a; a != o - 1 && e[a] != f; a--);
							if (a > o) {
								n(a);
								continue
							}
							for (a = o + t; e.length > a && e[a] == p; a++);
							if (a == e.length) break;
							n(a)
						}
					}
					return r
				}, this.$getDisplayTokens = function(e, n) {
					var r, i = [];
					n = n || 0;
					for (var o = 0; e.length > o; o++) {
						var s = e.charCodeAt(o);
						if (9 == s) {
							r = this.getScreenTabSize(i.length + n), i.push(v);
							for (var l = 1; r > l; l++) i.push(A)
						} else 32 == s ? i.push(m) : s > 39 && 48 > s || s > 57 && 64 > s ? i.push(g) : s >= 4352 && t(s) ? i.push(a, u) : i.push(a)
					}
					return i
				}, this.$getStringScreenWidth = function(e, n, r) {
					if (0 == n) return [0, 0];
					null == n && (n = 1 / 0), r = r || 0;
					var i, o;
					for (o = 0; e.length > o && (i = e.charCodeAt(o), r += 9 == i ? this.getScreenTabSize(r) : i >= 4352 && t(i) ? 2 : 1, !(r > n)); o++);
					return [r, o]
				}, this.getRowLength = function(e) {
					return this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 : 1
				}, this.getScreenLastRowColumn = function(e) {
					var t = this.screenToDocumentPosition(e, Number.MAX_VALUE);
					return this.documentToScreenColumn(t.row, t.column)
				}, this.getDocumentLastRowColumn = function(e, t) {
					var n = this.documentToScreenRow(e, t);
					return this.getScreenLastRowColumn(n)
				}, this.getDocumentLastRowColumnPosition = function(e, t) {
					var n = this.documentToScreenRow(e, t);
					return this.screenToDocumentPosition(n, Number.MAX_VALUE / 10)
				}, this.getRowSplitData = function(e) {
					return this.$useWrapMode ? this.$wrapData[e] : void 0
				}, this.getScreenTabSize = function(e) {
					return this.$tabSize - e % this.$tabSize
				}, this.screenToDocumentRow = function(e, t) {
					return this.screenToDocumentPosition(e, t).row
				}, this.screenToDocumentColumn = function(e, t) {
					return this.screenToDocumentPosition(e, t).column
				}, this.screenToDocumentPosition = function(e, t) {
					if (0 > e) return {
							row: 0,
							column: 0
					};
					var n, r, i = 0,
						o = 0,
						s = 0,
						a = 0,
						l = this.$screenRowCache,
						c = this.$getRowCacheIndex(l, e),
						u = l.length;
					if (u && c >= 0) var s = l[c],
					i = this.$docRowCache[c], h = e > l[u - 1];
					else var h = !u;
					for (var d = this.getLength() - 1, f = this.getNextFoldLine(i), p = f ? f.start.row : 1 / 0; e >= s && (a = this.getRowLength(i), !(s + a - 1 >= e || i >= d));) s += a, i++, i > p && (i = f.end.row + 1, f = this.getNextFoldLine(i, f), p = f ? f.start.row : 1 / 0), h && (this.$docRowCache.push(i), this.$screenRowCache.push(s));
					if (f && i >= f.start.row) n = this.getFoldDisplayLine(f), i = f.start.row;
					else {
						if (e >= s + a || i > d) return {
								row: d,
								column: this.getLine(d).length
						};
						n = this.getLine(i), f = null
					} if (this.$useWrapMode) {
						var g = this.$wrapData[i];
						g && (r = g[e - s], e > s && g.length && (o = g[e - s - 1] || g[g.length - 1], n = n.substring(o)))
					}
					return o += this.$getStringScreenWidth(n, t)[1], this.$useWrapMode && o >= r && (o = r - 1), f ? f.idxToPosition(o) : {
						row: i,
						column: o
					}
				}, this.documentToScreenPosition = function(e, t) {
					if (t === void 0) var n = this.$clipPositionToDocument(e.row, e.column);
					else n = this.$clipPositionToDocument(e, t);
					e = n.row, t = n.column;
					var r = 0,
						i = null,
						o = null;
					o = this.getFoldAt(e, t, 1), o && (e = o.start.row, t = o.start.column);
					var s, a = 0,
						l = this.$docRowCache,
						c = this.$getRowCacheIndex(l, e),
						u = l.length;
					if (u && c >= 0) var a = l[c],
					r = this.$screenRowCache[c], h = e > l[u - 1];
					else var h = !u;
					for (var d = this.getNextFoldLine(a), f = d ? d.start.row : 1 / 0; e > a;) {
						if (a >= f) {
							if (s = d.end.row + 1, s > e) break;
							d = this.getNextFoldLine(s, d), f = d ? d.start.row : 1 / 0
						} else s = a + 1;
						r += this.getRowLength(a), a = s, h && (this.$docRowCache.push(a), this.$screenRowCache.push(r))
					}
					var p = "";
					if (d && a >= f ? (p = this.getFoldDisplayLine(d, e, t), i = d.start.row) : (p = this.getLine(e).substring(0, t), i = e), this.$useWrapMode) {
						for (var g = this.$wrapData[i], m = 0; p.length >= g[m];) r++, m++;
						p = p.substring(g[m - 1] || 0, p.length)
					}
					return {
						row: r,
						column: this.$getStringScreenWidth(p)[0]
					}
				}, this.documentToScreenColumn = function(e, t) {
					return this.documentToScreenPosition(e, t).column
				}, this.documentToScreenRow = function(e, t) {
					return this.documentToScreenPosition(e, t).row
				}, this.getScreenLength = function() {
					var e = 0,
						t = null;
					if (this.$useWrapMode) for (var n = this.$wrapData.length, r = 0, i = 0, t = this.$foldData[i++], o = t ? t.start.row : 1 / 0; n > r;) e += this.$wrapData[r].length + 1, r++, r > o && (r = t.end.row + 1, t = this.$foldData[i++], o = t ? t.start.row : 1 / 0);
					else {
						e = this.getLength();
						for (var s = this.$foldData, i = 0; s.length > i; i++) t = s[i], e -= t.end.row - t.start.row
					}
					return e
				}
			}).call(f.prototype), e("./edit_session/folding").Folding.call(f.prototype), e("./edit_session/bracket_match").BracketMatch.call(f.prototype), t.EditSession = f
		}), define("ace/config", ["require", "exports", "module", "ace/lib/lang"], function(e, t, n) {
			"no use strict";

			function r(e) {
				return e.replace(/-(.)/g, function(e, t) {
					return t.toUpperCase()
				})
			}
			var i = e("./lib/lang"),
				o = function() {
					return this
				}(),
				s = {
					packaged: !1,
					workerPath: null,
					modePath: null,
					themePath: null,
					basePath: "",
					suffix: ".js",
					$moduleUrls: {}
				};
			t.get = function(e) {
				if (!s.hasOwnProperty(e)) throw Error("Unknown config key: " + e);
				return s[e]
			}, t.set = function(e, t) {
				if (!s.hasOwnProperty(e)) throw Error("Unknown config key: " + e);
				s[e] = t
			}, t.all = function() {
				return i.copyObject(s)
			}, t.moduleUrl = function(e, t) {
				if (s.$moduleUrls[e]) return s.$moduleUrls[e];
				var n = e.split("/");
				t = t || n[n.length - 2] || "";
				var r = n[n.length - 1].replace(t, "").replace(/(^[\-_])|([\-_]$)/, "");
				!r && n.length > 1 && (r = n[n.length - 2]);
				var i = s[t + "Path"];
				return null == i && (i = s.basePath), i && "/" != i.slice(-1) && (i += "/"), i + t + "-" + r + this.get("suffix")
			}, t.setModuleUrl = function(e, t) {
				return s.$moduleUrls[e] = t
			}, t.init = function() {
				if (s.packaged = e.packaged || n.packaged || o.define && define.packaged, !o.document) return "";
				for (var i = {}, a = "", l = document.getElementsByTagName("script"), c = 0; l.length > c; c++) {
					var u = l[c],
						h = u.src || u.getAttribute("src");
					if (h) {
						for (var d = u.attributes, f = 0, p = d.length; p > f; f++) {
							var g = d[f];
							0 === g.name.indexOf("data-ace-") && (i[r(g.name.replace(/^data-ace-/, ""))] = g.value)
						}
						var m = h.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);
						m && (a = m[1])
					}
				}
				a && (i.base = i.base || a, i.packaged = !0), i.workerPath = i.workerPath || i.base, i.modePath = i.modePath || i.base, i.themePath = i.themePath || i.base, delete i.base;
				for (var v in i) i[v] !== void 0 && t.set(v, i[v])
			}
		}), define("ace/lib/net", ["require", "exports", "module", "ace/lib/useragent"], function(e, t) {
			var n = e("./useragent");
			t.get = function(e, n) {
				var r = t.createXhr();
				r.open("GET", e, !0), r.onreadystatechange = function() {
					4 === r.readyState && n(r.responseText)
				}, r.send(null)
			};
			var r = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"];
			t.createXhr = function() {
				var e, t, n;
				if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
				for (t = 0; 3 > t; t++) {
					n = r[t];
					try {
						e = new ActiveXObject(n)
					} catch (i) {}
					if (e) {
						r = [n];
						break
					}
				}
				if (!e) throw Error("createXhr(): XMLHttpRequest not available");
				return e
			}, t.loadScript = function(e, t) {
				var r = document.getElementsByTagName("head")[0],
					i = document.createElement("script");
				i.src = e, r.appendChild(i), n.isOldIE ? i.onreadystatechange = function() {
					"loaded" == this.readyState && t()
				} : i.onload = t
			}
		}), define("ace/lib/event_emitter", ["require", "exports", "module"], function(e, t) {
			var n = {};
			n._emit = n._dispatchEvent = function(e, t) {
				this._eventRegistry = this._eventRegistry || {}, this._defaultHandlers = this._defaultHandlers || {};
				var n = this._eventRegistry[e] || [],
					r = this._defaultHandlers[e];
				if (n.length || r) {
					"object" == typeof t && t || (t = {}), t.type || (t.type = e), t.stopPropagation || (t.stopPropagation = function() {
						this.propagationStopped = !0
					}), t.preventDefault || (t.preventDefault = function() {
						this.defaultPrevented = !0
					});
					for (var i = 0; n.length > i && (n[i](t), !t.propagationStopped); i++);
					return r && !t.defaultPrevented ? r(t) : void 0
				}
			}, n.setDefaultHandler = function(e, t) {
				if (this._defaultHandlers = this._defaultHandlers || {}, this._defaultHandlers[e]) throw Error("The default handler for '" + e + "' is already set");
				this._defaultHandlers[e] = t
			}, n.on = n.addEventListener = function(e, t) {
				this._eventRegistry = this._eventRegistry || {};
				var n = this._eventRegistry[e];
				n || (n = this._eventRegistry[e] = []), -1 == n.indexOf(t) && n.push(t)
			}, n.removeListener = n.removeEventListener = function(e, t) {
				this._eventRegistry = this._eventRegistry || {};
				var n = this._eventRegistry[e];
				if (n) {
					var r = n.indexOf(t); - 1 !== r && n.splice(r, 1)
				}
			}, n.removeAllListeners = function(e) {
				this._eventRegistry && (this._eventRegistry[e] = [])
			}, t.EventEmitter = n
		}), define("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], function(e, t) {
			var n = e("./lib/oop"),
				r = e("./lib/lang"),
				i = e("./lib/event_emitter").EventEmitter,
				o = e("./range").Range,
				s = function(e) {
					this.session = e, this.doc = e.getDocument(), this.clearSelection(), this.lead = this.selectionLead = this.doc.createAnchor(0, 0), this.anchor = this.selectionAnchor = this.doc.createAnchor(0, 0);
					var t = this;
					this.lead.on("change", function(e) {
						t._emit("changeCursor"), t.$isEmpty || t._emit("changeSelection"), t.$keepDesiredColumnOnChange || e.old.column == e.value.column || (t.$desiredColumn = null)
					}), this.selectionAnchor.on("change", function() {
						t.$isEmpty || t._emit("changeSelection")
					})
				};
			(function() {
				n.implement(this, i), this.isEmpty = function() {
					return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column
				}, this.isMultiLine = function() {
					return this.isEmpty() ? !1 : this.getRange().isMultiLine()
				}, this.getCursor = function() {
					return this.lead.getPosition()
				}, this.setSelectionAnchor = function(e, t) {
					this.anchor.setPosition(e, t), this.$isEmpty && (this.$isEmpty = !1, this._emit("changeSelection"))
				}, this.getSelectionAnchor = function() {
					return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition()
				}, this.getSelectionLead = function() {
					return this.lead.getPosition()
				}, this.shiftSelection = function(e) {
					if (this.$isEmpty) return this.moveCursorTo(this.lead.row, this.lead.column + e), void 0;
					var t = this.getSelectionAnchor(),
						n = this.getSelectionLead(),
						r = this.isBackwards();
					r && 0 === t.column || this.setSelectionAnchor(t.row, t.column + e), (r || 0 !== n.column) && this.$moveSelection(function() {
						this.moveCursorTo(n.row, n.column + e)
					})
				}, this.isBackwards = function() {
					var e = this.anchor,
						t = this.lead;
					return e.row > t.row || e.row == t.row && e.column > t.column
				}, this.getRange = function() {
					var e = this.anchor,
						t = this.lead;
					return this.isEmpty() ? o.fromPoints(t, t) : this.isBackwards() ? o.fromPoints(t, e) : o.fromPoints(e, t)
				}, this.clearSelection = function() {
					this.$isEmpty || (this.$isEmpty = !0, this._emit("changeSelection"))
				}, this.selectAll = function() {
					var e = this.doc.getLength() - 1;
					this.setSelectionAnchor(0, 0), this.moveCursorTo(e, this.doc.getLine(e).length)
				}, this.setRange = this.setSelectionRange = function(e, t) {
					t ? (this.setSelectionAnchor(e.end.row, e.end.column), this.selectTo(e.start.row, e.start.column)) : (this.setSelectionAnchor(e.start.row, e.start.column), this.selectTo(e.end.row, e.end.column)), this.$desiredColumn = null
				}, this.$moveSelection = function(e) {
					var t = this.lead;
					this.$isEmpty && this.setSelectionAnchor(t.row, t.column), e.call(this)
				}, this.selectTo = function(e, t) {
					this.$moveSelection(function() {
						this.moveCursorTo(e, t)
					})
				}, this.selectToPosition = function(e) {
					this.$moveSelection(function() {
						this.moveCursorToPosition(e)
					})
				}, this.selectUp = function() {
					this.$moveSelection(this.moveCursorUp)
				}, this.selectDown = function() {
					this.$moveSelection(this.moveCursorDown)
				}, this.selectRight = function() {
					this.$moveSelection(this.moveCursorRight)
				}, this.selectLeft = function() {
					this.$moveSelection(this.moveCursorLeft)
				}, this.selectLineStart = function() {
					this.$moveSelection(this.moveCursorLineStart)
				}, this.selectLineEnd = function() {
					this.$moveSelection(this.moveCursorLineEnd)
				}, this.selectFileEnd = function() {
					this.$moveSelection(this.moveCursorFileEnd)
				}, this.selectFileStart = function() {
					this.$moveSelection(this.moveCursorFileStart)
				}, this.selectWordRight = function() {
					this.$moveSelection(this.moveCursorWordRight)
				}, this.selectWordLeft = function() {
					this.$moveSelection(this.moveCursorWordLeft)
				}, this.getWordRange = function(e, t) {
					if (t === void 0) {
						var n = e || this.lead;
						e = n.row, t = n.column
					}
					return this.session.getWordRange(e, t)
				}, this.selectWord = function() {
					this.setSelectionRange(this.getWordRange())
				}, this.selectAWord = function() {
					var e = this.getCursor(),
						t = this.session.getAWordRange(e.row, e.column);
					this.setSelectionRange(t)
				}, this.getLineRange = function(e, t) {
					var n, r = "number" == typeof e ? e : this.lead.row,
						i = this.session.getFoldLine(r);
					return i ? (r = i.start.row, n = i.end.row) : n = r, t ? new o(r, 0, n, this.session.getLine(n).length) : new o(r, 0, n + 1, 0)
				}, this.selectLine = function() {
					this.setSelectionRange(this.getLineRange())
				}, this.moveCursorUp = function() {
					this.moveCursorBy(-1, 0)
				}, this.moveCursorDown = function() {
					this.moveCursorBy(1, 0)
				}, this.moveCursorLeft = function() {
					var e, t = this.lead.getPosition();
					if (e = this.session.getFoldAt(t.row, t.column, -1)) this.moveCursorTo(e.start.row, e.start.column);
					else if (0 == t.column) t.row > 0 && this.moveCursorTo(t.row - 1, this.doc.getLine(t.row - 1).length);
					else {
						var n = this.session.getTabSize();
						this.session.isTabStop(t) && this.doc.getLine(t.row).slice(t.column - n, t.column).split(" ").length - 1 == n ? this.moveCursorBy(0, -n) : this.moveCursorBy(0, -1)
					}
				}, this.moveCursorRight = function() {
					var e, t = this.lead.getPosition();
					if (e = this.session.getFoldAt(t.row, t.column, 1)) this.moveCursorTo(e.end.row, e.end.column);
					else if (this.lead.column == this.doc.getLine(this.lead.row).length) this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0);
					else {
						var n = this.session.getTabSize(),
							t = this.lead;
						this.session.isTabStop(t) && this.doc.getLine(t.row).slice(t.column, t.column + n).split(" ").length - 1 == n ? this.moveCursorBy(0, n) : this.moveCursorBy(0, 1)
					}
				}, this.moveCursorLineStart = function() {
					var e = this.lead.row,
						t = this.lead.column,
						n = this.session.documentToScreenRow(e, t),
						r = this.session.screenToDocumentPosition(n, 0),
						i = this.session.getDisplayLine(e, null, r.row, r.column),
						o = i.match(/^\s*/);
					o[0].length == t ? this.moveCursorTo(r.row, r.column) : this.moveCursorTo(r.row, r.column + o[0].length)
				}, this.moveCursorLineEnd = function() {
					var e = this.lead,
						t = this.session.getDocumentLastRowColumnPosition(e.row, e.column);
					if (this.lead.column == t.column) {
						var n = this.session.getLine(t.row);
						if (t.column == n.length) {
							var r = n.search(/\s+$/);
							r > 0 && (t.column = r)
						}
					}
					this.moveCursorTo(t.row, t.column)
				}, this.moveCursorFileEnd = function() {
					var e = this.doc.getLength() - 1,
						t = this.doc.getLine(e).length;
					this.moveCursorTo(e, t)
				}, this.moveCursorFileStart = function() {
					this.moveCursorTo(0, 0)
				}, this.moveCursorLongWordRight = function() {
					var e, t = this.lead.row,
						n = this.lead.column,
						r = this.doc.getLine(t),
						i = r.substring(n);
					this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;
					var o = this.session.getFoldAt(t, n, 1);
					return o ? (this.moveCursorTo(o.end.row, o.end.column), void 0) : ((e = this.session.nonTokenRe.exec(i)) && (n += this.session.nonTokenRe.lastIndex, this.session.nonTokenRe.lastIndex = 0, i = r.substring(n)), n >= r.length ? (this.moveCursorTo(t, r.length), this.moveCursorRight(), this.doc.getLength() - 1 > t && this.moveCursorWordRight(), void 0) : ((e = this.session.tokenRe.exec(i)) && (n += this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(t, n), void 0))
				}, this.moveCursorLongWordLeft = function() {
					var e, t = this.lead.row,
						n = this.lead.column;
					if (e = this.session.getFoldAt(t, n, -1)) return this.moveCursorTo(e.start.row, e.start.column), void 0;
					var i = this.session.getFoldStringAt(t, n, -1);
					null == i && (i = this.doc.getLine(t).substring(0, n));
					var o, s = r.stringReverse(i);
					return this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0, (o = this.session.nonTokenRe.exec(s)) && (n -= this.session.nonTokenRe.lastIndex, s = s.slice(this.session.nonTokenRe.lastIndex), this.session.nonTokenRe.lastIndex = 0), 0 >= n ? (this.moveCursorTo(t, 0), this.moveCursorLeft(), t > 0 && this.moveCursorWordLeft(), void 0) : ((o = this.session.tokenRe.exec(s)) && (n -= this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(t, n), void 0)
				}, this.$shortWordEndIndex = function(e) {
					var t, n, r = 0,
						i = /\s/,
						o = this.session.tokenRe;
					if (o.lastIndex = 0, t = this.session.tokenRe.exec(e)) r = this.session.tokenRe.lastIndex;
					else {
						for (;
						(n = e[r]) && i.test(n);) r++;
						if (1 >= r) for (o.lastIndex = 0;
							(n = e[r]) && !o.test(n);) if (o.lastIndex = 0, r++, i.test(n)) {
									if (r > 2) {
										r--;
										break
									}
									for (;
									(n = e[r]) && i.test(n);) r++;
									if (r > 2) break
								}
					}
					return o.lastIndex = 0, r
				}, this.moveCursorShortWordRight = function() {
					var e = this.lead.row,
						t = this.lead.column,
						n = this.doc.getLine(e),
						r = n.substring(t),
						i = this.session.getFoldAt(e, t, 1);
					if (i) return this.moveCursorTo(i.end.row, i.end.column);
					if (t == n.length) {
						var o = this.doc.getLength();
						do e++, r = this.doc.getLine(e); while (o > e && /^\s*$/.test(r));
						/^\s+/.test(r) || (r = ""), t = 0
					}
					var s = this.$shortWordEndIndex(r);
					this.moveCursorTo(e, t + s)
				}, this.moveCursorShortWordLeft = function() {
					var e, t = this.lead.row,
						n = this.lead.column;
					if (e = this.session.getFoldAt(t, n, -1)) return this.moveCursorTo(e.start.row, e.start.column);
					var i = this.session.getLine(t).substring(0, n);
					if (0 == n) {
						do t--, i = this.doc.getLine(t); while (t > 0 && /^\s*$/.test(i));
						n = i.length, /\s+$/.test(i) || (i = "")
					}
					var o = r.stringReverse(i),
						s = this.$shortWordEndIndex(o);
					return this.moveCursorTo(t, n - s)
				}, this.moveCursorWordRight = function() {
					this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight()
				}, this.moveCursorWordLeft = function() {
					this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft()
				}, this.moveCursorBy = function(e, t) {
					var n = this.session.documentToScreenPosition(this.lead.row, this.lead.column);
					0 === t && (this.$desiredColumn ? n.column = this.$desiredColumn : this.$desiredColumn = n.column);
					var r = this.session.screenToDocumentPosition(n.row + e, n.column);
					this.moveCursorTo(r.row, r.column + t, 0 === t)
				}, this.moveCursorToPosition = function(e) {
					this.moveCursorTo(e.row, e.column)
				}, this.moveCursorTo = function(e, t, n) {
					var r = this.session.getFoldAt(e, t, 1);
					r && (e = r.start.row, t = r.start.column), this.$keepDesiredColumnOnChange = !0, this.lead.setPosition(e, t), this.$keepDesiredColumnOnChange = !1, n || (this.$desiredColumn = null)
				}, this.moveCursorToScreen = function(e, t, n) {
					var r = this.session.screenToDocumentPosition(e, t);
					this.moveCursorTo(r.row, r.column, n)
				}, this.detach = function() {
					this.lead.detach(), this.anchor.detach(), this.session = this.doc = null
				}, this.fromOrientedRange = function(e) {
					this.setSelectionRange(e, e.cursor == e.start), this.$desiredColumn = e.desiredColumn || this.$desiredColumn
				}, this.toOrientedRange = function(e) {
					var t = this.getRange();
					return e ? (e.start.column = t.start.column, e.start.row = t.start.row, e.end.column = t.end.column, e.end.row = t.end.row) : e = t, e.cursor = this.isBackwards() ? e.start : e.end, e.desiredColumn = this.$desiredColumn, e
				}
			}).call(s.prototype), t.Selection = s
		}), define("ace/range", ["require", "exports", "module"], function(e, t) {
			var n = function(e, t, n, r) {
				this.start = {
					row: e,
					column: t
				}, this.end = {
					row: n,
					column: r
				}
			};
			(function() {
				this.isEqual = function(e) {
					return this.start.row == e.start.row && this.end.row == e.end.row && this.start.column == e.start.column && this.end.column == e.end.column
				}, this.toString = function() {
					return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]"
				}, this.contains = function(e, t) {
					return 0 == this.compare(e, t)
				}, this.compareRange = function(e) {
					var t, n = e.end,
						r = e.start;
					return t = this.compare(n.row, n.column), 1 == t ? (t = this.compare(r.row, r.column), 1 == t ? 2 : 0 == t ? 1 : 0) : -1 == t ? -2 : (t = this.compare(r.row, r.column), -1 == t ? -1 : 1 == t ? 42 : 0)
				}, this.comparePoint = function(e) {
					return this.compare(e.row, e.column)
				}, this.containsRange = function(e) {
					return 0 == this.comparePoint(e.start) && 0 == this.comparePoint(e.end)
				}, this.intersects = function(e) {
					var t = this.compareRange(e);
					return -1 == t || 0 == t || 1 == t
				}, this.isEnd = function(e, t) {
					return this.end.row == e && this.end.column == t
				}, this.isStart = function(e, t) {
					return this.start.row == e && this.start.column == t
				}, this.setStart = function(e, t) {
					"object" == typeof e ? (this.start.column = e.column, this.start.row = e.row) : (this.start.row = e, this.start.column = t)
				}, this.setEnd = function(e, t) {
					"object" == typeof e ? (this.end.column = e.column, this.end.row = e.row) : (this.end.row = e, this.end.column = t)
				}, this.inside = function(e, t) {
					return 0 == this.compare(e, t) ? this.isEnd(e, t) || this.isStart(e, t) ? !1 : !0 : !1
				}, this.insideStart = function(e, t) {
					return 0 == this.compare(e, t) ? this.isEnd(e, t) ? !1 : !0 : !1
				}, this.insideEnd = function(e, t) {
					return 0 == this.compare(e, t) ? this.isStart(e, t) ? !1 : !0 : !1
				}, this.compare = function(e, t) {
					return this.isMultiLine() || e !== this.start.row ? this.start.row > e ? -1 : e > this.end.row ? 1 : this.start.row === e ? t >= this.start.column ? 0 : -1 : this.end.row === e ? this.end.column >= t ? 0 : 1 : 0 : this.start.column > t ? -1 : t > this.end.column ? 1 : 0
				}, this.compareStart = function(e, t) {
					return this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
				}, this.compareEnd = function(e, t) {
					return this.end.row == e && this.end.column == t ? 1 : this.compare(e, t)
				}, this.compareInside = function(e, t) {
					return this.end.row == e && this.end.column == t ? 1 : this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
				}, this.clipRows = function(e, t) {
					if (this.end.row > t) var r = {
							row: t + 1,
							column: 0
					};
					if (this.start.row > t) var i = {
							row: t + 1,
							column: 0
					};
					if (e > this.start.row) var i = {
							row: e,
							column: 0
					};
					if (e > this.end.row) var r = {
							row: e,
							column: 0
					};
					return n.fromPoints(i || this.start, r || this.end)
				}, this.extend = function(e, t) {
					var r = this.compare(e, t);
					if (0 == r) return this;
					if (-1 == r) var i = {
							row: e,
							column: t
					};
					else var o = {
							row: e,
							column: t
					};
					return n.fromPoints(i || this.start, o || this.end)
				}, this.isEmpty = function() {
					return this.start.row == this.end.row && this.start.column == this.end.column
				}, this.isMultiLine = function() {
					return this.start.row !== this.end.row
				}, this.clone = function() {
					return n.fromPoints(this.start, this.end)
				}, this.collapseRows = function() {
					return 0 == this.end.column ? new n(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new n(this.start.row, 0, this.end.row, 0)
				}, this.toScreenRange = function(e) {
					var t = e.documentToScreenPosition(this.start),
						r = e.documentToScreenPosition(this.end);
					return new n(t.row, t.column, r.row, r.column)
				}
			}).call(n.prototype), n.fromPoints = function(e, t) {
				return new n(e.row, e.column, t.row, t.column)
			}, t.Range = n
		}), define("ace/mode/text", ["require", "exports", "module", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour", "ace/unicode"], function(e, t) {
			var n = e("../tokenizer").Tokenizer,
				r = e("./text_highlight_rules").TextHighlightRules,
				i = e("./behaviour").Behaviour,
				o = e("../unicode"),
				s = function() {
					this.$tokenizer = new n((new r).getRules()), this.$behaviour = new i
				};
			(function() {
				this.tokenRe = RegExp("^[" + o.packages.L + o.packages.Mn + o.packages.Mc + o.packages.Nd + o.packages.Pc + "\\$_]+", "g"), this.nonTokenRe = RegExp("^(?:[^" + o.packages.L + o.packages.Mn + o.packages.Mc + o.packages.Nd + o.packages.Pc + "\\$_]|s])+", "g"), this.getTokenizer = function() {
					return this.$tokenizer
				}, this.toggleCommentLines = function() {}, this.getNextLineIndent = function() {
					return ""
				}, this.checkOutdent = function() {
					return !1
				}, this.autoOutdent = function() {}, this.$getIndent = function(e) {
					var t = e.match(/^(\s+)/);
					return t ? t[1] : ""
				}, this.createWorker = function() {
					return null
				}, this.createModeDelegates = function(e) {
					if (this.$embeds) {
						this.$modes = {};
						for (var t = 0; this.$embeds.length > t; t++) e[this.$embeds[t]] && (this.$modes[this.$embeds[t]] = new e[this.$embeds[t]]);
						for (var n = ["toggleCommentLines", "getNextLineIndent", "checkOutdent", "autoOutdent", "transformAction"], t = 0; n.length > t; t++)(function(e) {
								var r = n[t],
									i = e[r];
								e[n[t]] = function() {
									return this.$delegator(r, arguments, i)
								}
							})(this)
					}
				}, this.$delegator = function(e, t, n) {
					for (var r = t[0], i = 0; this.$embeds.length > i; i++) if (this.$modes[this.$embeds[i]]) {
							var o = r.split(this.$embeds[i]);
							if (!o[0] && o[1]) {
								t[0] = o[1];
								var s = this.$modes[this.$embeds[i]];
								return s[e].apply(s, t)
							}
						}
					var a = n.apply(this, t);
					return n ? a : void 0
				}, this.transformAction = function(e, t) {
					if (this.$behaviour) {
						var n = this.$behaviour.getBehaviours();
						for (var r in n) if (n[r][t]) {
								var i = n[r][t].apply(this, arguments);
								if (i) return i
							}
					}
				}
			}).call(s.prototype), t.Mode = s
		}), define("ace/tokenizer", ["require", "exports", "module"], function(e, t) {
			var n = function(e, t) {
				t = t ? "g" + t : "g", this.rules = e, this.regExps = {}, this.matchMappings = {};
				for (var n in this.rules) {
					for (var r = this.rules[n], i = r, o = [], s = 0, a = this.matchMappings[n] = {}, l = 0; i.length > l; l++) {
						i[l].regex instanceof RegExp && (i[l].regex = ("" + i[l].regex).slice(1, -1));
						var c = RegExp("(?:(" + i[l].regex + ")|(.))").exec("a").length - 2,
							u = i[l].regex.replace(/\\([0-9]+)/g, function(e, t) {
								return "\\" + (parseInt(t, 10) + s + 1)
							});
						if (c > 1 && i[l].token.length !== c - 1) throw Error("For " + i[l].regex + " the matching groups (" + (c - 1) + ") and length of the token array (" + i[l].token.length + ") don't match (rule #" + l + " of state " + n + ")");
						a[s] = {
							rule: l,
							len: c
						}, s += c, o.push(u)
					}
					this.regExps[n] = RegExp("(?:(" + o.join(")|(") + ")|(.))", t)
				}
			};
			(function() {
				this.getLineTokens = function(e, t) {
					var n = t || "start",
						r = this.rules[n],
						i = this.matchMappings[n],
						o = this.regExps[n];
					o.lastIndex = 0;
					for (var s, a = [], l = 0, c = {
							type: null,
							value: ""
						}; s = o.exec(e);) {
						for (var u = "text", h = null, d = [s[0]], f = 0; s.length - 2 > f; f++) if (void 0 !== s[f + 1]) {
								if (h = r[i[f].rule], i[f].len > 1 && (d = s.slice(f + 2, f + 1 + i[f].len)), u = "function" == typeof h.token ? h.token.apply(this, d) : h.token, h.next) {
									if (n = h.next, r = this.rules[n], i = this.matchMappings[n], l = o.lastIndex, o = this.regExps[n], void 0 === o) throw Error("You indicated a state of " + h.next + " to go to, but it doesn't exist!");
									o.lastIndex = l
								}
								break
							}
						if (d[0]) {
							"string" == typeof u && (d = [d.join("")], u = [u]);
							for (var f = 0; d.length > f; f++) d[f] && (h && !h.merge && "text" !== u[f] || c.type !== u[f] ? (c.type && a.push(c), c = {
									type: u[f],
									value: d[f]
								}) : c.value += d[f])
						}
						if (l == e.length) break;
						l = o.lastIndex
					}
					return c.type && a.push(c), {
						tokens: a,
						state: n
					}
				}
			}).call(n.prototype), t.Tokenizer = n
		}), define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/lang"], function(e, t) {
			var n = e("../lib/lang"),
				r = function() {
					this.$rules = {
						start: [{
								token: "empty_line",
								regex: "^$"
							}, {
								token: "text",
								regex: ".+"
							}
						]
					}
				};
			(function() {
				this.addRules = function(e, t) {
					for (var n in e) {
						for (var r = e[n], i = 0; r.length > i; i++) {
							var o = r[i];
							o.next && (o.next = t + o.next)
						}
						this.$rules[t + n] = r
					}
				}, this.getRules = function() {
					return this.$rules
				}, this.embedRules = function(e, t, r, i, o) {
					var s = (new e).getRules();
					if (i) for (var a = 0; i.length > a; a++) i[a] = t + i[a];
					else {
						i = [];
						for (var l in s) i.push(t + l)
					}
					this.addRules(s, t);
					for (var c = Array.prototype[o ? "push" : "unshift"], a = 0; i.length > a; a++) c.apply(this.$rules[i[a]], n.deepCopy(r));
					this.$embeds || (this.$embeds = []), this.$embeds.push(t)
				}, this.getEmbeds = function() {
					return this.$embeds
				}, this.createKeywordMapper = function(e, t, n, r) {
					var i = Object.create(null);
					return Object.keys(e).forEach(function(t) {
						var o = e[t];
						n && (o = o.toLowerCase());
						for (var s = o.split(r || "|"), a = s.length; a--;) i[s[a]] = t
					}), e = null, n ? function(e) {
						return i[e.toLowerCase()] || t
					} : function(e) {
						return i[e] || t
					}
				}, this.getKeywords = function() {
					return this.$keywords
				}
			}).call(r.prototype), t.TextHighlightRules = r
		}), define("ace/mode/behaviour", ["require", "exports", "module"], function(e, t) {
			var n = function() {
				this.$behaviours = {}
			};
			(function() {
				this.add = function(e, t, n) {
					switch (void 0) {
						case this.$behaviours:
							this.$behaviours = {};
						case this.$behaviours[e]:
							this.$behaviours[e] = {}
					}
					this.$behaviours[e][t] = n
				}, this.addBehaviours = function(e) {
					for (var t in e) for (var n in e[t]) this.add(t, n, e[t][n])
				}, this.remove = function(e) {
					this.$behaviours && this.$behaviours[e] && delete this.$behaviours[e]
				}, this.inherit = function(e, t) {
					if ("function" == typeof e) var n = (new e).getBehaviours(t);
					else var n = e.getBehaviours(t);
					this.addBehaviours(n)
				}, this.getBehaviours = function(e) {
					if (e) {
						for (var t = {}, n = 0; e.length > n; n++) this.$behaviours[e[n]] && (t[e[n]] = this.$behaviours[e[n]]);
						return t
					}
					return this.$behaviours
				}
			}).call(n.prototype), t.Behaviour = n
		}), define("ace/unicode", ["require", "exports", "module"], function(e, t) {
			function n(e) {
				var n = /\w{4}/g;
				for (var r in e) t.packages[r] = e[r].replace(n, "\\u$&")
			}
			t.packages = {}, n({
				L: "0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
				Ll: "0061-007A00AA00B500BA00DF-00F600F8-00FF01010103010501070109010B010D010F01110113011501170119011B011D011F01210123012501270129012B012D012F01310133013501370138013A013C013E014001420144014601480149014B014D014F01510153015501570159015B015D015F01610163016501670169016B016D016F0171017301750177017A017C017E-0180018301850188018C018D019201950199-019B019E01A101A301A501A801AA01AB01AD01B001B401B601B901BA01BD-01BF01C601C901CC01CE01D001D201D401D601D801DA01DC01DD01DF01E101E301E501E701E901EB01ED01EF01F001F301F501F901FB01FD01FF02010203020502070209020B020D020F02110213021502170219021B021D021F02210223022502270229022B022D022F02310233-0239023C023F0240024202470249024B024D024F-02930295-02AF037103730377037B-037D039003AC-03CE03D003D103D5-03D703D903DB03DD03DF03E103E303E503E703E903EB03ED03EF-03F303F503F803FB03FC0430-045F04610463046504670469046B046D046F04710473047504770479047B047D047F0481048B048D048F04910493049504970499049B049D049F04A104A304A504A704A904AB04AD04AF04B104B304B504B704B904BB04BD04BF04C204C404C604C804CA04CC04CE04CF04D104D304D504D704D904DB04DD04DF04E104E304E504E704E904EB04ED04EF04F104F304F504F704F904FB04FD04FF05010503050505070509050B050D050F05110513051505170519051B051D051F0521052305250561-05871D00-1D2B1D62-1D771D79-1D9A1E011E031E051E071E091E0B1E0D1E0F1E111E131E151E171E191E1B1E1D1E1F1E211E231E251E271E291E2B1E2D1E2F1E311E331E351E371E391E3B1E3D1E3F1E411E431E451E471E491E4B1E4D1E4F1E511E531E551E571E591E5B1E5D1E5F1E611E631E651E671E691E6B1E6D1E6F1E711E731E751E771E791E7B1E7D1E7F1E811E831E851E871E891E8B1E8D1E8F1E911E931E95-1E9D1E9F1EA11EA31EA51EA71EA91EAB1EAD1EAF1EB11EB31EB51EB71EB91EBB1EBD1EBF1EC11EC31EC51EC71EC91ECB1ECD1ECF1ED11ED31ED51ED71ED91EDB1EDD1EDF1EE11EE31EE51EE71EE91EEB1EED1EEF1EF11EF31EF51EF71EF91EFB1EFD1EFF-1F071F10-1F151F20-1F271F30-1F371F40-1F451F50-1F571F60-1F671F70-1F7D1F80-1F871F90-1F971FA0-1FA71FB0-1FB41FB61FB71FBE1FC2-1FC41FC61FC71FD0-1FD31FD61FD71FE0-1FE71FF2-1FF41FF61FF7210A210E210F2113212F21342139213C213D2146-2149214E21842C30-2C5E2C612C652C662C682C6A2C6C2C712C732C742C76-2C7C2C812C832C852C872C892C8B2C8D2C8F2C912C932C952C972C992C9B2C9D2C9F2CA12CA32CA52CA72CA92CAB2CAD2CAF2CB12CB32CB52CB72CB92CBB2CBD2CBF2CC12CC32CC52CC72CC92CCB2CCD2CCF2CD12CD32CD52CD72CD92CDB2CDD2CDF2CE12CE32CE42CEC2CEE2D00-2D25A641A643A645A647A649A64BA64DA64FA651A653A655A657A659A65BA65DA65FA663A665A667A669A66BA66DA681A683A685A687A689A68BA68DA68FA691A693A695A697A723A725A727A729A72BA72DA72F-A731A733A735A737A739A73BA73DA73FA741A743A745A747A749A74BA74DA74FA751A753A755A757A759A75BA75DA75FA761A763A765A767A769A76BA76DA76FA771-A778A77AA77CA77FA781A783A785A787A78CFB00-FB06FB13-FB17FF41-FF5A",
				Lu: "0041-005A00C0-00D600D8-00DE01000102010401060108010A010C010E01100112011401160118011A011C011E01200122012401260128012A012C012E01300132013401360139013B013D013F0141014301450147014A014C014E01500152015401560158015A015C015E01600162016401660168016A016C016E017001720174017601780179017B017D018101820184018601870189-018B018E-0191019301940196-0198019C019D019F01A001A201A401A601A701A901AC01AE01AF01B1-01B301B501B701B801BC01C401C701CA01CD01CF01D101D301D501D701D901DB01DE01E001E201E401E601E801EA01EC01EE01F101F401F6-01F801FA01FC01FE02000202020402060208020A020C020E02100212021402160218021A021C021E02200222022402260228022A022C022E02300232023A023B023D023E02410243-02460248024A024C024E03700372037603860388-038A038C038E038F0391-03A103A3-03AB03CF03D2-03D403D803DA03DC03DE03E003E203E403E603E803EA03EC03EE03F403F703F903FA03FD-042F04600462046404660468046A046C046E04700472047404760478047A047C047E0480048A048C048E04900492049404960498049A049C049E04A004A204A404A604A804AA04AC04AE04B004B204B404B604B804BA04BC04BE04C004C104C304C504C704C904CB04CD04D004D204D404D604D804DA04DC04DE04E004E204E404E604E804EA04EC04EE04F004F204F404F604F804FA04FC04FE05000502050405060508050A050C050E05100512051405160518051A051C051E0520052205240531-055610A0-10C51E001E021E041E061E081E0A1E0C1E0E1E101E121E141E161E181E1A1E1C1E1E1E201E221E241E261E281E2A1E2C1E2E1E301E321E341E361E381E3A1E3C1E3E1E401E421E441E461E481E4A1E4C1E4E1E501E521E541E561E581E5A1E5C1E5E1E601E621E641E661E681E6A1E6C1E6E1E701E721E741E761E781E7A1E7C1E7E1E801E821E841E861E881E8A1E8C1E8E1E901E921E941E9E1EA01EA21EA41EA61EA81EAA1EAC1EAE1EB01EB21EB41EB61EB81EBA1EBC1EBE1EC01EC21EC41EC61EC81ECA1ECC1ECE1ED01ED21ED41ED61ED81EDA1EDC1EDE1EE01EE21EE41EE61EE81EEA1EEC1EEE1EF01EF21EF41EF61EF81EFA1EFC1EFE1F08-1F0F1F18-1F1D1F28-1F2F1F38-1F3F1F48-1F4D1F591F5B1F5D1F5F1F68-1F6F1FB8-1FBB1FC8-1FCB1FD8-1FDB1FE8-1FEC1FF8-1FFB21022107210B-210D2110-211221152119-211D212421262128212A-212D2130-2133213E213F214521832C00-2C2E2C602C62-2C642C672C692C6B2C6D-2C702C722C752C7E-2C802C822C842C862C882C8A2C8C2C8E2C902C922C942C962C982C9A2C9C2C9E2CA02CA22CA42CA62CA82CAA2CAC2CAE2CB02CB22CB42CB62CB82CBA2CBC2CBE2CC02CC22CC42CC62CC82CCA2CCC2CCE2CD02CD22CD42CD62CD82CDA2CDC2CDE2CE02CE22CEB2CEDA640A642A644A646A648A64AA64CA64EA650A652A654A656A658A65AA65CA65EA662A664A666A668A66AA66CA680A682A684A686A688A68AA68CA68EA690A692A694A696A722A724A726A728A72AA72CA72EA732A734A736A738A73AA73CA73EA740A742A744A746A748A74AA74CA74EA750A752A754A756A758A75AA75CA75EA760A762A764A766A768A76AA76CA76EA779A77BA77DA77EA780A782A784A786A78BFF21-FF3A",
				Lt: "01C501C801CB01F21F88-1F8F1F98-1F9F1FA8-1FAF1FBC1FCC1FFC",
				Lm: "02B0-02C102C6-02D102E0-02E402EC02EE0374037A0559064006E506E607F407F507FA081A0824082809710E460EC610FC17D718431AA71C78-1C7D1D2C-1D611D781D9B-1DBF2071207F2090-20942C7D2D6F2E2F30053031-3035303B309D309E30FC-30FEA015A4F8-A4FDA60CA67FA717-A71FA770A788A9CFAA70AADDFF70FF9EFF9F",
				Lo: "01BB01C0-01C3029405D0-05EA05F0-05F20621-063F0641-064A066E066F0671-06D306D506EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA0800-08150904-0939093D09500958-096109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E450E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10D0-10FA1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317DC1820-18421844-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C771CE9-1CEC1CEE-1CF12135-21382D30-2D652D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE3006303C3041-3096309F30A1-30FA30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A014A016-A48CA4D0-A4F7A500-A60BA610-A61FA62AA62BA66EA6A0-A6E5A7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2AA00-AA28AA40-AA42AA44-AA4BAA60-AA6FAA71-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADBAADCABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF66-FF6FFF71-FF9DFFA0-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
				M: "0300-036F0483-04890591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DE-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0903093C093E-094E0951-0955096209630981-098309BC09BE-09C409C709C809CB-09CD09D709E209E30A01-0A030A3C0A3E-0A420A470A480A4B-0A4D0A510A700A710A750A81-0A830ABC0ABE-0AC50AC7-0AC90ACB-0ACD0AE20AE30B01-0B030B3C0B3E-0B440B470B480B4B-0B4D0B560B570B620B630B820BBE-0BC20BC6-0BC80BCA-0BCD0BD70C01-0C030C3E-0C440C46-0C480C4A-0C4D0C550C560C620C630C820C830CBC0CBE-0CC40CC6-0CC80CCA-0CCD0CD50CD60CE20CE30D020D030D3E-0D440D46-0D480D4A-0D4D0D570D620D630D820D830DCA0DCF-0DD40DD60DD8-0DDF0DF20DF30E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F3E0F3F0F71-0F840F860F870F90-0F970F99-0FBC0FC6102B-103E1056-1059105E-10601062-10641067-106D1071-10741082-108D108F109A-109D135F1712-17141732-1734175217531772177317B6-17D317DD180B-180D18A91920-192B1930-193B19B0-19C019C819C91A17-1A1B1A55-1A5E1A60-1A7C1A7F1B00-1B041B34-1B441B6B-1B731B80-1B821BA1-1BAA1C24-1C371CD0-1CD21CD4-1CE81CED1CF21DC0-1DE61DFD-1DFF20D0-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66F-A672A67CA67DA6F0A6F1A802A806A80BA823-A827A880A881A8B4-A8C4A8E0-A8F1A926-A92DA947-A953A980-A983A9B3-A9C0AA29-AA36AA43AA4CAA4DAA7BAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE3-ABEAABECABEDFB1EFE00-FE0FFE20-FE26",
				Mn: "0300-036F0483-04870591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0902093C0941-0948094D0951-095509620963098109BC09C1-09C409CD09E209E30A010A020A3C0A410A420A470A480A4B-0A4D0A510A700A710A750A810A820ABC0AC1-0AC50AC70AC80ACD0AE20AE30B010B3C0B3F0B41-0B440B4D0B560B620B630B820BC00BCD0C3E-0C400C46-0C480C4A-0C4D0C550C560C620C630CBC0CBF0CC60CCC0CCD0CE20CE30D41-0D440D4D0D620D630DCA0DD2-0DD40DD60E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F71-0F7E0F80-0F840F860F870F90-0F970F99-0FBC0FC6102D-10301032-10371039103A103D103E10581059105E-10601071-1074108210851086108D109D135F1712-17141732-1734175217531772177317B7-17BD17C617C9-17D317DD180B-180D18A91920-19221927192819321939-193B1A171A181A561A58-1A5E1A601A621A65-1A6C1A73-1A7C1A7F1B00-1B031B341B36-1B3A1B3C1B421B6B-1B731B801B811BA2-1BA51BA81BA91C2C-1C331C361C371CD0-1CD21CD4-1CE01CE2-1CE81CED1DC0-1DE61DFD-1DFF20D0-20DC20E120E5-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66FA67CA67DA6F0A6F1A802A806A80BA825A826A8C4A8E0-A8F1A926-A92DA947-A951A980-A982A9B3A9B6-A9B9A9BCAA29-AA2EAA31AA32AA35AA36AA43AA4CAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE5ABE8ABEDFB1EFE00-FE0FFE20-FE26",
				Mc: "0903093E-09400949-094C094E0982098309BE-09C009C709C809CB09CC09D70A030A3E-0A400A830ABE-0AC00AC90ACB0ACC0B020B030B3E0B400B470B480B4B0B4C0B570BBE0BBF0BC10BC20BC6-0BC80BCA-0BCC0BD70C01-0C030C41-0C440C820C830CBE0CC0-0CC40CC70CC80CCA0CCB0CD50CD60D020D030D3E-0D400D46-0D480D4A-0D4C0D570D820D830DCF-0DD10DD8-0DDF0DF20DF30F3E0F3F0F7F102B102C10311038103B103C105610571062-10641067-106D108310841087-108C108F109A-109C17B617BE-17C517C717C81923-19261929-192B193019311933-193819B0-19C019C819C91A19-1A1B1A551A571A611A631A641A6D-1A721B041B351B3B1B3D-1B411B431B441B821BA11BA61BA71BAA1C24-1C2B1C341C351CE11CF2A823A824A827A880A881A8B4-A8C3A952A953A983A9B4A9B5A9BAA9BBA9BD-A9C0AA2FAA30AA33AA34AA4DAA7BABE3ABE4ABE6ABE7ABE9ABEAABEC",
				Me: "0488048906DE20DD-20E020E2-20E4A670-A672",
				N: "0030-003900B200B300B900BC-00BE0660-066906F0-06F907C0-07C90966-096F09E6-09EF09F4-09F90A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BF20C66-0C6F0C78-0C7E0CE6-0CEF0D66-0D750E50-0E590ED0-0ED90F20-0F331040-10491090-10991369-137C16EE-16F017E0-17E917F0-17F91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C5920702074-20792080-20892150-21822185-21892460-249B24EA-24FF2776-27932CFD30073021-30293038-303A3192-31953220-32293251-325F3280-328932B1-32BFA620-A629A6E6-A6EFA830-A835A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
				Nd: "0030-00390660-066906F0-06F907C0-07C90966-096F09E6-09EF0A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BEF0C66-0C6F0CE6-0CEF0D66-0D6F0E50-0E590ED0-0ED90F20-0F291040-10491090-109917E0-17E91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C59A620-A629A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
				Nl: "16EE-16F02160-21822185-218830073021-30293038-303AA6E6-A6EF",
				No: "00B200B300B900BC-00BE09F4-09F90BF0-0BF20C78-0C7E0D70-0D750F2A-0F331369-137C17F0-17F920702074-20792080-20892150-215F21892460-249B24EA-24FF2776-27932CFD3192-31953220-32293251-325F3280-328932B1-32BFA830-A835",
				P: "0021-00230025-002A002C-002F003A003B003F0040005B-005D005F007B007D00A100AB00B700BB00BF037E0387055A-055F0589058A05BE05C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F3A-0F3D0F850FD0-0FD4104A-104F10FB1361-13681400166D166E169B169C16EB-16ED1735173617D4-17D617D8-17DA1800-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD32010-20272030-20432045-20512053-205E207D207E208D208E2329232A2768-277527C527C627E6-27EF2983-299829D8-29DB29FC29FD2CF9-2CFC2CFE2CFF2E00-2E2E2E302E313001-30033008-30113014-301F3030303D30A030FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFD3EFD3FFE10-FE19FE30-FE52FE54-FE61FE63FE68FE6AFE6BFF01-FF03FF05-FF0AFF0C-FF0FFF1AFF1BFF1FFF20FF3B-FF3DFF3FFF5BFF5DFF5F-FF65",
				Pd: "002D058A05BE140018062010-20152E172E1A301C303030A0FE31FE32FE58FE63FF0D",
				Ps: "0028005B007B0F3A0F3C169B201A201E2045207D208D23292768276A276C276E27702772277427C527E627E827EA27EC27EE2983298529872989298B298D298F299129932995299729D829DA29FC2E222E242E262E283008300A300C300E3010301430163018301A301DFD3EFE17FE35FE37FE39FE3BFE3DFE3FFE41FE43FE47FE59FE5BFE5DFF08FF3BFF5BFF5FFF62",
				Pe: "0029005D007D0F3B0F3D169C2046207E208E232A2769276B276D276F27712773277527C627E727E927EB27ED27EF298429862988298A298C298E2990299229942996299829D929DB29FD2E232E252E272E293009300B300D300F3011301530173019301B301E301FFD3FFE18FE36FE38FE3AFE3CFE3EFE40FE42FE44FE48FE5AFE5CFE5EFF09FF3DFF5DFF60FF63",
				Pi: "00AB2018201B201C201F20392E022E042E092E0C2E1C2E20",
				Pf: "00BB2019201D203A2E032E052E0A2E0D2E1D2E21",
				Pc: "005F203F20402054FE33FE34FE4D-FE4FFF3F",
				Po: "0021-00230025-0027002A002C002E002F003A003B003F0040005C00A100B700BF037E0387055A-055F058905C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F850FD0-0FD4104A-104F10FB1361-1368166D166E16EB-16ED1735173617D4-17D617D8-17DA1800-18051807-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD3201620172020-20272030-2038203B-203E2041-20432047-205120532055-205E2CF9-2CFC2CFE2CFF2E002E012E06-2E082E0B2E0E-2E162E182E192E1B2E1E2E1F2E2A-2E2E2E302E313001-3003303D30FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFE10-FE16FE19FE30FE45FE46FE49-FE4CFE50-FE52FE54-FE57FE5F-FE61FE68FE6AFE6BFF01-FF03FF05-FF07FF0AFF0CFF0EFF0FFF1AFF1BFF1FFF20FF3CFF61FF64FF65",
				S: "0024002B003C-003E005E0060007C007E00A2-00A900AC00AE-00B100B400B600B800D700F702C2-02C502D2-02DF02E5-02EB02ED02EF-02FF03750384038503F604820606-0608060B060E060F06E906FD06FE07F609F209F309FA09FB0AF10B700BF3-0BFA0C7F0CF10CF20D790E3F0F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-139917DB194019E0-19FF1B61-1B6A1B74-1B7C1FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE20442052207A-207C208A-208C20A0-20B8210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B2140-2144214A-214D214F2190-2328232B-23E82400-24262440-244A249C-24E92500-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE27C0-27C427C7-27CA27CC27D0-27E527F0-29822999-29D729DC-29FB29FE-2B4C2B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F309B309C319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A700-A716A720A721A789A78AA828-A82BA836-A839AA77-AA79FB29FDFCFDFDFE62FE64-FE66FE69FF04FF0BFF1C-FF1EFF3EFF40FF5CFF5EFFE0-FFE6FFE8-FFEEFFFCFFFD",
				Sm: "002B003C-003E007C007E00AC00B100D700F703F60606-060820442052207A-207C208A-208C2140-2144214B2190-2194219A219B21A021A321A621AE21CE21CF21D221D421F4-22FF2308-230B23202321237C239B-23B323DC-23E125B725C125F8-25FF266F27C0-27C427C7-27CA27CC27D0-27E527F0-27FF2900-29822999-29D729DC-29FB29FE-2AFF2B30-2B442B47-2B4CFB29FE62FE64-FE66FF0BFF1C-FF1EFF5CFF5EFFE2FFE9-FFEC",
				Sc: "002400A2-00A5060B09F209F309FB0AF10BF90E3F17DB20A0-20B8A838FDFCFE69FF04FFE0FFE1FFE5FFE6",
				Sk: "005E006000A800AF00B400B802C2-02C502D2-02DF02E5-02EB02ED02EF-02FF0375038403851FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE309B309CA700-A716A720A721A789A78AFF3EFF40FFE3",
				So: "00A600A700A900AE00B000B60482060E060F06E906FD06FE07F609FA0B700BF3-0BF80BFA0C7F0CF10CF20D790F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-1399194019E0-19FF1B61-1B6A1B74-1B7C210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B214A214C214D214F2195-2199219C-219F21A121A221A421A521A7-21AD21AF-21CD21D021D121D321D5-21F32300-2307230C-231F2322-2328232B-237B237D-239A23B4-23DB23E2-23E82400-24262440-244A249C-24E92500-25B625B8-25C025C2-25F72600-266E2670-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE2800-28FF2B00-2B2F2B452B462B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A828-A82BA836A837A839AA77-AA79FDFDFFE4FFE8FFEDFFEEFFFCFFFD",
				Z: "002000A01680180E2000-200A20282029202F205F3000",
				Zs: "002000A01680180E2000-200A202F205F3000",
				Zl: "2028",
				Zp: "2029",
				C: "0000-001F007F-009F00AD03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-0605061C061D0620065F06DD070E070F074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17B417B517DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF200B-200F202A-202E2060-206F20722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-F8FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFD-FF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFFBFFFEFFFF",
				Cc: "0000-001F007F-009F",
				Cf: "00AD0600-060306DD070F17B417B5200B-200F202A-202E2060-2064206A-206FFEFFFFF9-FFFB",
				Co: "E000-F8FF",
				Cs: "D800-DFFF",
				Cn: "03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-05FF06040605061C061D0620065F070E074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF2065-206920722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-D7FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFDFEFEFF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFF8FFFEFFFF"
			})
		}), define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter", "ace/range", "ace/anchor"], function(e, t) {
			var n = e("./lib/oop"),
				r = e("./lib/event_emitter").EventEmitter,
				i = e("./range").Range,
				o = e("./anchor").Anchor,
				s = function(e) {
					this.$lines = [], 0 == e.length ? this.$lines = [""] : Array.isArray(e) ? this.insertLines(0, e) : this.insert({
						row: 0,
						column: 0
					}, e)
				};
			(function() {
				n.implement(this, r), this.setValue = function(e) {
					var t = this.getLength();
					this.remove(new i(0, 0, t, this.getLine(t - 1).length)), this.insert({
						row: 0,
						column: 0
					}, e)
				}, this.getValue = function() {
					return this.getAllLines().join(this.getNewLineCharacter())
				}, this.createAnchor = function(e, t) {
					return new o(this, e, t)
				}, this.$split = 0 == "aaa".split(/a/).length ? function(e) {
					return e.replace(/\r\n|\r/g, "\n").split("\n")
				} : function(e) {
					return e.split(/\r\n|\r|\n/)
				}, this.$detectNewLine = function(e) {
					var t = e.match(/^.*?(\r\n|\r|\n)/m);
					this.$autoNewLine = t ? t[1] : "\n"
				}, this.getNewLineCharacter = function() {
					switch (this.$newLineMode) {
						case "windows":
							return "\r\n";
						case "unix":
							return "\n";
						case "auto":
							return this.$autoNewLine
					}
				}, this.$autoNewLine = "\n", this.$newLineMode = "auto", this.setNewLineMode = function(e) {
					this.$newLineMode !== e && (this.$newLineMode = e)
				}, this.getNewLineMode = function() {
					return this.$newLineMode
				}, this.isNewLine = function(e) {
					return "\r\n" == e || "\r" == e || "\n" == e
				}, this.getLine = function(e) {
					return this.$lines[e] || ""
				}, this.getLines = function(e, t) {
					return this.$lines.slice(e, t + 1)
				}, this.getAllLines = function() {
					return this.getLines(0, this.getLength())
				}, this.getLength = function() {
					return this.$lines.length
				}, this.getTextRange = function(e) {
					if (e.start.row == e.end.row) return this.$lines[e.start.row].substring(e.start.column, e.end.column);
					var t = this.getLines(e.start.row + 1, e.end.row - 1);
					return t.unshift((this.$lines[e.start.row] || "").substring(e.start.column)), t.push((this.$lines[e.end.row] || "").substring(0, e.end.column)), t.join(this.getNewLineCharacter())
				}, this.$clipPosition = function(e) {
					var t = this.getLength();
					return e.row >= t && (e.row = Math.max(0, t - 1), e.column = this.getLine(t - 1).length), e
				}, this.insert = function(e, t) {
					if (!t || 0 === t.length) return e;
					e = this.$clipPosition(e), 1 >= this.getLength() && this.$detectNewLine(t);
					var n = this.$split(t),
						r = n.splice(0, 1)[0],
						i = 0 == n.length ? null : n.splice(n.length - 1, 1)[0];
					return e = this.insertInLine(e, r), null !== i && (e = this.insertNewLine(e), e = this.insertLines(e.row, n), e = this.insertInLine(e, i || "")), e
				}, this.insertLines = function(e, t) {
					if (0 == t.length) return {
							row: e,
							column: 0
					};
					if (t.length > 65535) {
						var n = this.insertLines(e, t.slice(65535));
						t = t.slice(0, 65535)
					}
					var r = [e, 0];
					r.push.apply(r, t), this.$lines.splice.apply(this.$lines, r);
					var o = new i(e, 0, e + t.length, 0),
						s = {
							action: "insertLines",
							range: o,
							lines: t
						};
					return this._emit("change", {
						data: s
					}), n || o.end
				}, this.insertNewLine = function(e) {
					e = this.$clipPosition(e);
					var t = this.$lines[e.row] || "";
					this.$lines[e.row] = t.substring(0, e.column), this.$lines.splice(e.row + 1, 0, t.substring(e.column, t.length));
					var n = {
						row: e.row + 1,
						column: 0
					}, r = {
							action: "insertText",
							range: i.fromPoints(e, n),
							text: this.getNewLineCharacter()
						};
					return this._emit("change", {
						data: r
					}), n
				}, this.insertInLine = function(e, t) {
					if (0 == t.length) return e;
					var n = this.$lines[e.row] || "";
					this.$lines[e.row] = n.substring(0, e.column) + t + n.substring(e.column);
					var r = {
						row: e.row,
						column: e.column + t.length
					}, o = {
							action: "insertText",
							range: i.fromPoints(e, r),
							text: t
						};
					return this._emit("change", {
						data: o
					}), r
				}, this.remove = function(e) {
					if (e.start = this.$clipPosition(e.start), e.end = this.$clipPosition(e.end), e.isEmpty()) return e.start;
					var t = e.start.row,
						n = e.end.row;
					if (e.isMultiLine()) {
						var r = 0 == e.start.column ? t : t + 1,
							i = n - 1;
						e.end.column > 0 && this.removeInLine(n, 0, e.end.column), i >= r && this.removeLines(r, i), r != t && (this.removeInLine(t, e.start.column, this.getLine(t).length), this.removeNewLine(e.start.row))
					} else this.removeInLine(t, e.start.column, e.end.column);
					return e.start
				}, this.removeInLine = function(e, t, n) {
					if (t != n) {
						var r = new i(e, t, e, n),
							o = this.getLine(e),
							s = o.substring(t, n),
							a = o.substring(0, t) + o.substring(n, o.length);
						this.$lines.splice(e, 1, a);
						var l = {
							action: "removeText",
							range: r,
							text: s
						};
						return this._emit("change", {
							data: l
						}), r.start
					}
				}, this.removeLines = function(e, t) {
					var n = new i(e, 0, t + 1, 0),
						r = this.$lines.splice(e, t - e + 1),
						o = {
							action: "removeLines",
							range: n,
							nl: this.getNewLineCharacter(),
							lines: r
						};
					return this._emit("change", {
						data: o
					}), r
				}, this.removeNewLine = function(e) {
					var t = this.getLine(e),
						n = this.getLine(e + 1),
						r = new i(e, t.length, e + 1, 0),
						o = t + n;
					this.$lines.splice(e, 2, o);
					var s = {
						action: "removeText",
						range: r,
						text: this.getNewLineCharacter()
					};
					this._emit("change", {
						data: s
					})
				}, this.replace = function(e, t) {
					if (0 == t.length && e.isEmpty()) return e.start;
					if (t == this.getTextRange(e)) return e.end;
					if (this.remove(e), t) var n = this.insert(e.start, t);
					else n = e.start;
					return n
				}, this.applyDeltas = function(e) {
					for (var t = 0; e.length > t; t++) {
						var n = e[t],
							r = i.fromPoints(n.range.start, n.range.end);
						"insertLines" == n.action ? this.insertLines(r.start.row, n.lines) : "insertText" == n.action ? this.insert(r.start, n.text) : "removeLines" == n.action ? this.removeLines(r.start.row, r.end.row - 1) : "removeText" == n.action && this.remove(r)
					}
				}, this.revertDeltas = function(e) {
					for (var t = e.length - 1; t >= 0; t--) {
						var n = e[t],
							r = i.fromPoints(n.range.start, n.range.end);
						"insertLines" == n.action ? this.removeLines(r.start.row, r.end.row - 1) : "insertText" == n.action ? this.remove(r) : "removeLines" == n.action ? this.insertLines(r.start.row, n.lines) : "removeText" == n.action && this.insert(r.start, n.text)
					}
				}
			}).call(s.prototype), t.Document = s
		}), define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(e, t) {
			var n = e("./lib/oop"),
				r = e("./lib/event_emitter").EventEmitter,
				i = t.Anchor = function(e, t, n) {
					this.document = e, n === void 0 ? this.setPosition(t.row, t.column) : this.setPosition(t, n), this.$onChange = this.onChange.bind(this), e.on("change", this.$onChange)
				};
			(function() {
				n.implement(this, r), this.getPosition = function() {
					return this.$clipPositionToDocument(this.row, this.column)
				}, this.getDocument = function() {
					return this.document
				}, this.onChange = function(e) {
					var t = e.data,
						n = t.range;
					if (!(n.start.row == n.end.row && n.start.row != this.row || n.start.row > this.row || n.start.row == this.row && n.start.column > this.column)) {
						var r = this.row,
							i = this.column;
						"insertText" === t.action ? n.start.row === r && i >= n.start.column ? n.start.row === n.end.row ? i += n.end.column - n.start.column : (i -= n.start.column, r += n.end.row - n.start.row) : n.start.row !== n.end.row && r > n.start.row && (r += n.end.row - n.start.row) : "insertLines" === t.action ? r >= n.start.row && (r += n.end.row - n.start.row) : "removeText" == t.action ? n.start.row == r && i > n.start.column ? i = n.end.column >= i ? n.start.column : Math.max(0, i - (n.end.column - n.start.column)) : n.start.row !== n.end.row && r > n.start.row ? (n.end.row == r && (i = Math.max(0, i - n.end.column) + n.start.column), r -= n.end.row - n.start.row) : n.end.row == r && (r -= n.end.row - n.start.row, i = Math.max(0, i - n.end.column) + n.start.column) : "removeLines" == t.action && r >= n.start.row && (r >= n.end.row ? r -= n.end.row - n.start.row : (r = n.start.row, i = 0)), this.setPosition(r, i, !0)
					}
				}, this.setPosition = function(e, t, n) {
					var r;
					if (r = n ? {
						row: e,
						column: t
					} : this.$clipPositionToDocument(e, t), this.row != r.row || this.column != r.column) {
						var i = {
							row: this.row,
							column: this.column
						};
						this.row = r.row, this.column = r.column, this._emit("change", {
							old: i,
							value: r
						})
					}
				}, this.detach = function() {
					this.document.removeEventListener("change", this.$onChange)
				}, this.$clipPositionToDocument = function(e, t) {
					var n = {};
					return e >= this.document.getLength() ? (n.row = Math.max(0, this.document.getLength() - 1), n.column = this.document.getLine(n.row).length) : 0 > e ? (n.row = 0, n.column = 0) : (n.row = e, n.column = Math.min(this.document.getLine(n.row).length, Math.max(0, t))), 0 > t && (n.column = 0), n
				}
			}).call(i.prototype)
		}), define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(e, t) {
			var n = e("./lib/oop"),
				r = e("./lib/event_emitter").EventEmitter,
				i = 5e3,
				o = function(e) {
					this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.tokenizer = e;
					var t = this;
					this.$worker = function() {
						if (t.running) {
							for (var e = new Date, n = t.currentLine, r = t.doc, i = 0, o = r.getLength(); o > t.currentLine;) {
								for (t.$tokenizeRow(t.currentLine); t.lines[t.currentLine];) t.currentLine++;
								if (i++, 0 == i % 5 && new Date - e > 20) return t.fireUpdateEvent(n, t.currentLine - 1), t.running = setTimeout(t.$worker, 20), void 0
							}
							t.running = !1, t.fireUpdateEvent(n, o - 1)
						}
					}
				};
			(function() {
				n.implement(this, r), this.setTokenizer = function(e) {
					this.tokenizer = e, this.lines = [], this.states = [], this.start(0)
				}, this.setDocument = function(e) {
					this.doc = e, this.lines = [], this.states = [], this.stop()
				}, this.fireUpdateEvent = function(e, t) {
					var n = {
						first: e,
						last: t
					};
					this._emit("update", {
						data: n
					})
				}, this.start = function(e) {
					this.currentLine = Math.min(e || 0, this.currentLine, this.doc.getLength()), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = setTimeout(this.$worker, 700)
				}, this.$updateOnChange = function(e) {
					var t = e.range,
						n = t.start.row,
						r = t.end.row - n;
					if (0 === r) this.lines[n] = null;
					else if ("removeText" == e.action || "removeLines" == e.action) this.lines.splice(n, r + 1, null), this.states.splice(n, r + 1, null);
					else {
						var i = Array(r + 1);
						i.unshift(n, 1), this.lines.splice.apply(this.lines, i), this.states.splice.apply(this.states, i)
					}
					this.currentLine = Math.min(n, this.currentLine, this.doc.getLength()), this.stop(), this.running = setTimeout(this.$worker, 700)
				}, this.stop = function() {
					this.running && clearTimeout(this.running), this.running = !1
				}, this.getTokens = function(e) {
					return this.lines[e] || this.$tokenizeRow(e)
				}, this.getState = function(e) {
					return this.currentLine == e && this.$tokenizeRow(e), this.states[e] || "start"
				}, this.$tokenizeRow = function(e) {
					var t = this.doc.getLine(e),
						n = this.states[e - 1];
					if (t.length > i) {
						var r = {
							value: t.substr(i),
							type: "text"
						};
						t = t.slice(0, i)
					}
					var o = this.tokenizer.getLineTokens(t, n);
					return r && (o.tokens.push(r), o.state = "start"), this.states[e] !== o.state ? (this.states[e] = o.state, this.lines[e + 1] = null, this.currentLine > e + 1 && (this.currentLine = e + 1)) : this.currentLine == e && (this.currentLine = e + 1), this.lines[e] = o.tokens
				}
			}).call(o.prototype), t.BackgroundTokenizer = o
		}), define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function(e, t) {
			var n = e("./lib/lang");
			e("./lib/oop");
			var r = e("./range").Range,
				i = function(e, t, n) {
					this.setRegexp(e), this.clazz = t, this.type = n || "text"
				};
			(function() {
				this.MAX_RANGES = 500, this.setRegexp = function(e) {
					this.regExp + "" != e + "" && (this.regExp = e, this.cache = [])
				}, this.update = function(e, t, i, o) {
					if (this.regExp) for (var s = o.firstRow, a = o.lastRow, l = s; a >= l; l++) {
							var c = this.cache[l];
							null == c && (c = n.getMatchOffsets(i.getLine(l), this.regExp), c.length > this.MAX_RANGES && (c = c.slice(0, this.MAX_RANGES)), c = c.map(function(e) {
								return new r(l, e.offset, l, e.offset + e.length)
							}), this.cache[l] = c.length ? c : "");
							for (var u = c.length; u--;) t.drawSingleLineMarker(e, c[u].toScreenRange(i), this.clazz, o, null, this.type)
					}
				}
			}).call(i.prototype), t.SearchHighlight = i
		}), define("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator"], function(e, t) {
			function n() {
				this.getFoldAt = function(e, t, n) {
					var r = this.getFoldLine(e);
					if (!r) return null;
					for (var i = r.folds, o = 0; i.length > o; o++) {
						var s = i[o];
						if (s.range.contains(e, t)) {
							if (1 == n && s.range.isEnd(e, t)) continue;
							if (-1 == n && s.range.isStart(e, t)) continue;
							return s
						}
					}
				}, this.getFoldsInRange = function(e) {
					e = e.clone();
					var t = e.start,
						n = e.end,
						r = this.$foldData,
						i = [];
					t.column += 1, n.column -= 1;
					for (var o = 0; r.length > o; o++) {
						var s = r[o].range.compareRange(e);
						if (2 != s) {
							if (-2 == s) break;
							for (var a = r[o].folds, l = 0; a.length > l; l++) {
								var c = a[l];
								if (s = c.range.compareRange(e), -2 == s) break;
								if (2 != s) {
									if (42 == s) break;
									i.push(c)
								}
							}
						}
					}
					return i
				}, this.getAllFolds = function() {
					function e(n) {
						if (t.push(n), n.subFolds) for (var r = 0; n.subFolds.length > r; r++) e(n.subFolds[r])
					}
					for (var t = [], n = this.$foldData, r = 0; n.length > r; r++) for (var i = 0; n[r].folds.length > i; i++) e(n[r].folds[i]);
					return t
				}, this.getFoldStringAt = function(e, t, n, r) {
					if (r = r || this.getFoldLine(e), !r) return null;
					for (var i, o, s = {
							end: {
								column: 0
							}
						}, a = 0; r.folds.length > a; a++) {
						o = r.folds[a];
						var l = o.range.compareEnd(e, t);
						if (-1 == l) {
							i = this.getLine(o.start.row).substring(s.end.column, o.start.column);
							break
						}
						if (0 === l) return null;
						s = o
					}
					return i || (i = this.getLine(o.start.row).substring(s.end.column)), -1 == n ? i.substring(0, t - s.end.column) : 1 == n ? i.substring(t - s.end.column) : i
				}, this.getFoldLine = function(e, t) {
					var n = this.$foldData,
						r = 0;
					for (t && (r = n.indexOf(t)), -1 == r && (r = 0), r; n.length > r; r++) {
						var i = n[r];
						if (e >= i.start.row && i.end.row >= e) return i;
						if (i.end.row > e) return null
					}
					return null
				}, this.getNextFoldLine = function(e, t) {
					var n = this.$foldData,
						r = 0;
					for (t && (r = n.indexOf(t)), -1 == r && (r = 0), r; n.length > r; r++) {
						var i = n[r];
						if (i.end.row >= e) return i
					}
					return null
				}, this.getFoldedRowCount = function(e, t) {
					for (var n = this.$foldData, r = t - e + 1, i = 0; n.length > i; i++) {
						var o = n[i],
							s = o.end.row,
							a = o.start.row;
						if (s >= t) {
							t > a && (a >= e ? r -= t - a : r = 0);
							break
						}
						s >= e && (r -= a >= e ? s - a : s - e + 1)
					}
					return r
				}, this.$addFoldLine = function(e) {
					return this.$foldData.push(e), this.$foldData.sort(function(e, t) {
						return e.start.row - t.start.row
					}), e
				}, this.addFold = function(e, t) {
					var n, r = this.$foldData,
						s = !1;
					n = e instanceof o ? e : new o(t, e), this.$clipRangeToDocument(n.range);
					var a = n.start.row,
						l = n.start.column,
						c = n.end.row,
						u = n.end.column;
					if (a == c && 2 > u - l) throw "The range has to be at least 2 characters width";
					var h = this.getFoldAt(a, l, 1),
						d = this.getFoldAt(c, u, -1);
					if (h && d == h) return h.addSubFold(n);
					if (h && !h.range.isStart(a, l) || d && !d.range.isEnd(c, u)) throw "A fold can't intersect already existing fold" + n.range + h.range;
					var f = this.getFoldsInRange(n.range);
					f.length > 0 && (this.removeFolds(f), n.subFolds = f);
					for (var p = 0; r.length > p; p++) {
						var g = r[p];
						if (c == g.start.row) {
							g.addFold(n), s = !0;
							break
						}
						if (a == g.end.row) {
							if (g.addFold(n), s = !0, !n.sameRow) {
								var m = r[p + 1];
								if (m && m.start.row == c) {
									g.merge(m);
									break
								}
							}
							break
						}
						if (g.start.row >= c) break
					}
					return s || (g = this.$addFoldLine(new i(this.$foldData, n))), this.$useWrapMode ? this.$updateWrapData(g.start.row, g.start.row) : this.$updateRowLengthCache(g.start.row, g.start.row), this.$modified = !0, this._emit("changeFold", {
						data: n
					}), n
				}, this.addFolds = function(e) {
					e.forEach(function(e) {
						this.addFold(e)
					}, this)
				}, this.removeFold = function(e) {
					var t = e.foldLine,
						n = t.start.row,
						r = t.end.row,
						i = this.$foldData,
						o = t.folds;
					if (1 == o.length) i.splice(i.indexOf(t), 1);
					else if (t.range.isEnd(e.end.row, e.end.column)) o.pop(), t.end.row = o[o.length - 1].end.row, t.end.column = o[o.length - 1].end.column;
					else if (t.range.isStart(e.start.row, e.start.column)) o.shift(), t.start.row = o[0].start.row, t.start.column = o[0].start.column;
					else if (e.sameRow) o.splice(o.indexOf(e), 1);
					else {
						var s = t.split(e.start.row, e.start.column);
						o = s.folds, o.shift(), s.start.row = o[0].start.row, s.start.column = o[0].start.column
					}
					this.$useWrapMode ? this.$updateWrapData(n, r) : this.$updateRowLengthCache(n, r), this.$modified = !0, this._emit("changeFold", {
						data: e
					})
				}, this.removeFolds = function(e) {
					for (var t = [], n = 0; e.length > n; n++) t.push(e[n]);
					t.forEach(function(e) {
						this.removeFold(e)
					}, this), this.$modified = !0
				}, this.expandFold = function(e) {
					this.removeFold(e), e.subFolds.forEach(function(e) {
						this.addFold(e)
					}, this), e.subFolds = []
				}, this.expandFolds = function(e) {
					e.forEach(function(e) {
						this.expandFold(e)
					}, this)
				}, this.unfold = function(e, t) {
					var n, i;
					if (n = null == e ? new r(0, 0, this.getLength(), 0) : "number" == typeof e ? new r(e, 0, e, this.getLine(e).length) : "row" in e ? r.fromPoints(e, e) : e, i = this.getFoldsInRange(n), t) this.removeFolds(i);
					else for (; i.length;) this.expandFolds(i), i = this.getFoldsInRange(n)
				}, this.isRowFolded = function(e, t) {
					return !!this.getFoldLine(e, t)
				}, this.getRowFoldEnd = function(e, t) {
					var n = this.getFoldLine(e, t);
					return n ? n.end.row : e
				}, this.getFoldDisplayLine = function(e, t, n, r, i) {
					null == r && (r = e.start.row, i = 0), null == t && (t = e.end.row, n = this.getLine(t).length);
					var o = this.doc,
						s = "";
					return e.walk(function(e, t, n, a) {
						if (!(r > t)) {
							if (t == r) {
								if (i > n) return;
								a = Math.max(i, a)
							}
							s += null != e ? e : o.getLine(t).substring(a, n)
						}
					}.bind(this), t, n), s
				}, this.getDisplayLine = function(e, t, n, r) {
					var i = this.getFoldLine(e);
					if (i) return this.getFoldDisplayLine(i, e, t, n, r);
					var o;
					return o = this.doc.getLine(e), o.substring(r || 0, t || o.length)
				}, this.$cloneFoldData = function() {
					var e = [];
					return e = this.$foldData.map(function(t) {
						var n = t.folds.map(function(e) {
							return e.clone()
						});
						return new i(e, n)
					})
				}, this.toggleFold = function(e) {
					var t, n, r = this.selection,
						i = r.getRange();
					if (i.isEmpty()) {
						var o = i.start;
						if (t = this.getFoldAt(o.row, o.column)) return this.expandFold(t), void 0;
						(n = this.findMatchingBracket(o)) ? 1 == i.comparePoint(n) ? i.end = n : (i.start = n, i.start.column++, i.end.column--) : (n = this.findMatchingBracket({
							row: o.row,
							column: o.column + 1
						})) ? (1 == i.comparePoint(n) ? i.end = n : i.start = n, i.start.column++) : i = this.getCommentFoldRange(o.row, o.column) || i
					} else {
						var s = this.getFoldsInRange(i);
						if (e && s.length) return this.expandFolds(s), void 0;
						1 == s.length && (t = s[0])
					} if (t || (t = this.getFoldAt(i.start.row, i.start.column)), t && "" + t.range == "" + i) return this.expandFold(t), void 0;
					var a = "...";
					if (!i.isMultiLine()) {
						if (a = this.getTextRange(i), 4 > a.length) return;
						a = a.trim().substring(0, 2) + ".."
					}
					this.addFold(a, i)
				}, this.getCommentFoldRange = function(e, t, n) {
					var i = new s(this, e, t),
						o = i.getCurrentToken();
					if (o && /^comment|string/.test(o.type)) {
						var a = new r,
							l = RegExp(o.type.replace(/\..*/, "\\."));
						if (1 != n) {
							do o = i.stepBackward(); while (o && l.test(o.type));
							i.stepForward()
						}
						if (a.start.row = i.getCurrentTokenRow(), a.start.column = i.getCurrentTokenColumn() + 2, i = new s(this, e, t), -1 != n) {
							do o = i.stepForward(); while (o && l.test(o.type));
							o = i.stepBackward()
						} else o = i.getCurrentToken();
						return a.end.row = i.getCurrentTokenRow(), a.end.column = i.getCurrentTokenColumn() + o.value.length - 2, a
					}
				}, this.foldAll = function(e, t) {
					var n = this.foldWidgets;
					t = t || this.getLength();
					for (var r = e || 0; t > r; r++) if (null == n[r] && (n[r] = this.getFoldWidget(r)), "start" == n[r]) {
							var i = this.getFoldWidgetRange(r);
							if (i && t >= i.end.row) try {
									this.addFold("...", i)
							} catch (o) {}
						}
				}, this.$foldStyles = {
					manual: 1,
					markbegin: 1,
					markbeginend: 1
				}, this.$foldStyle = "markbegin", this.setFoldStyle = function(e) {
					if (!this.$foldStyles[e]) throw Error("invalid fold style: " + e + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
					if (this.$foldStyle != e) {
						this.$foldStyle = e, "manual" == e && this.unfold();
						var t = this.$foldMode;
						this.$setFolding(null), this.$setFolding(t)
					}
				}, this.$setFolding = function(e) {
					if (this.$foldMode != e) {
						if (this.$foldMode = e, this.removeListener("change", this.$updateFoldWidgets), this._emit("changeAnnotation"), !e || "manual" == this.$foldStyle) return this.foldWidgets = null, void 0;
						this.foldWidgets = [], this.getFoldWidget = e.getFoldWidget.bind(e, this, this.$foldStyle), this.getFoldWidgetRange = e.getFoldWidgetRange.bind(e, this, this.$foldStyle), this.$updateFoldWidgets = this.updateFoldWidgets.bind(this), this.on("change", this.$updateFoldWidgets)
					}
				}, this.onFoldWidgetClick = function(e, t) {
					t = t.domEvent;
					var n, r = this.getFoldWidget(e),
						i = this.getLine(e),
						o = t.shiftKey,
						s = o || t.ctrlKey || t.altKey || t.metaKey;
					if (n = "end" == r ? this.getFoldAt(e, 0, -1) : this.getFoldAt(e, i.length, 1)) return s ? this.removeFold(n) : this.expandFold(n), void 0;
					var a = this.getFoldWidgetRange(e);
					if (a) {
						if (!a.isMultiLine() && (n = this.getFoldAt(a.start.row, a.start.column, 1), n && a.isEqual(n.range))) return this.removeFold(n), void 0;
						o || this.addFold("...", a), s && this.foldAll(a.start.row + 1, a.end.row)
					} else s && this.foldAll(e + 1, this.getLength()), (t.target || t.srcElement).className += " ace_invalid"
				}, this.updateFoldWidgets = function(e) {
					var t = e.data,
						n = t.range,
						r = n.start.row,
						i = n.end.row - r;
					if (0 === i) this.foldWidgets[r] = null;
					else if ("removeText" == t.action || "removeLines" == t.action) this.foldWidgets.splice(r, i + 1, null);
					else {
						var o = Array(i + 1);
						o.unshift(r, 1), this.foldWidgets.splice.apply(this.foldWidgets, o)
					}
				}
			}
			var r = e("../range").Range,
				i = e("./fold_line").FoldLine,
				o = e("./fold").Fold,
				s = e("../token_iterator").TokenIterator;
			t.Folding = n
		}), define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], function(e, t) {
			function n(e, t) {
				this.foldData = e, Array.isArray(t) ? this.folds = t : t = this.folds = [t];
				var n = t[t.length - 1];
				this.range = new r(t[0].start.row, t[0].start.column, n.end.row, n.end.column), this.start = this.range.start, this.end = this.range.end, this.folds.forEach(function(e) {
					e.setFoldLine(this)
				}, this)
			}
			var r = e("../range").Range;
			(function() {
				this.shiftRow = function(e) {
					this.start.row += e, this.end.row += e, this.folds.forEach(function(t) {
						t.start.row += e, t.end.row += e
					})
				}, this.addFold = function(e) {
					if (e.sameRow) {
						if (e.start.row < this.startRow || e.endRow > this.endRow) throw "Can't add a fold to this FoldLine as it has no connection";
						this.folds.push(e), this.folds.sort(function(e, t) {
							return -e.range.compareEnd(t.start.row, t.start.column)
						}), this.range.compareEnd(e.start.row, e.start.column) > 0 ? (this.end.row = e.end.row, this.end.column = e.end.column) : 0 > this.range.compareStart(e.end.row, e.end.column) && (this.start.row = e.start.row, this.start.column = e.start.column)
					} else if (e.start.row == this.end.row) this.folds.push(e), this.end.row = e.end.row, this.end.column = e.end.column;
					else {
						if (e.end.row != this.start.row) throw "Trying to add fold to FoldRow that doesn't have a matching row";
						this.folds.unshift(e), this.start.row = e.start.row, this.start.column = e.start.column
					}
					e.foldLine = this
				}, this.containsRow = function(e) {
					return e >= this.start.row && this.end.row >= e
				}, this.walk = function(e, t, n) {
					var r, i, o, s = 0,
						a = this.folds,
						l = !0;
					null == t && (t = this.end.row, n = this.end.column);
					for (var c = 0; a.length > c; c++) {
						if (r = a[c], i = r.range.compareStart(t, n), -1 == i) return e(null, t, n, s, l), void 0;
						if (o = e(null, r.start.row, r.start.column, s, l), o = !o && e(r.placeholder, r.start.row, r.start.column, s), o || 0 == i) return;
						l = !r.sameRow, s = r.end.column
					}
					e(null, t, n, s, l)
				}, this.getNextFoldTo = function(e, t) {
					for (var n, r, i = 0; this.folds.length > i; i++) {
						if (n = this.folds[i], r = n.range.compareEnd(e, t), -1 == r) return {
								fold: n,
								kind: "after"
						};
						if (0 == r) return {
								fold: n,
								kind: "inside"
						}
					}
					return null
				}, this.addRemoveChars = function(e, t, n) {
					var r, i, o = this.getNextFoldTo(e, t);
					if (o) if (r = o.fold, "inside" == o.kind && r.start.column != t && r.start.row != e) window.console && window.console.log(e, t, r);
						else
					if (r.start.row == e) {
						i = this.folds;
						var s = i.indexOf(r);
						for (0 == s && (this.start.column += n), s; i.length > s; s++) {
							if (r = i[s], r.start.column += n, !r.sameRow) return;
							r.end.column += n
						}
						this.end.column += n
					}
				}, this.split = function(e, t) {
					var r = this.getNextFoldTo(e, t).fold,
						i = this.folds,
						o = this.foldData;
					if (!r) return null;
					var s = i.indexOf(r),
						a = i[s - 1];
					this.end.row = a.end.row, this.end.column = a.end.column, i = i.splice(s, i.length - s);
					var l = new n(o, i);
					return o.splice(o.indexOf(this) + 1, 0, l), l
				}, this.merge = function(e) {
					for (var t = e.folds, n = 0; t.length > n; n++) this.addFold(t[n]);
					var r = this.foldData;
					r.splice(r.indexOf(e), 1)
				}, this.toString = function() {
					var e = ["" + this.range + ": ["];
					return this.folds.forEach(function(t) {
						e.push("  " + ("" + t))
					}), e.push("]"), e.join("\n")
				}, this.idxToPosition = function(e) {
					for (var t, n = 0, r = 0; this.folds.length > r; r++) {
						var t = this.folds[r];
						if (e -= t.start.column - n, 0 > e) return {
								row: t.start.row,
								column: t.start.column + e
						};
						if (e -= t.placeholder.length, 0 > e) return t.start;
						n = t.end.column
					}
					return {
						row: this.end.row,
						column: this.end.column + e
					}
				}
			}).call(n.prototype), t.FoldLine = n
		}), define("ace/edit_session/fold", ["require", "exports", "module"], function(e, t) {
			var n = t.Fold = function(e, t) {
				this.foldLine = null, this.placeholder = t, this.range = e, this.start = e.start, this.end = e.end, this.sameRow = e.start.row == e.end.row, this.subFolds = []
			};
			(function() {
				this.toString = function() {
					return '"' + this.placeholder + '" ' + ("" + this.range)
				}, this.setFoldLine = function(e) {
					this.foldLine = e, this.subFolds.forEach(function(t) {
						t.setFoldLine(e)
					})
				}, this.clone = function() {
					var e = this.range.clone(),
						t = new n(e, this.placeholder);
					return this.subFolds.forEach(function(e) {
						t.subFolds.push(e.clone())
					}), t
				}, this.addSubFold = function(e) {
					if (this.range.isEqual(e)) return this;
					if (!this.range.containsRange(e)) throw "A fold can't intersect already existing fold" + e.range + this.range;
					for (var t = e.range.start.row, n = e.range.start.column, r = 0, i = -1; this.subFolds.length > r && (i = this.subFolds[r].range.compare(t, n), 1 == i); r++);
					var o = this.subFolds[r];
					if (0 == i) return o.addSubFold(e);
					for (var t = e.range.end.row, n = e.range.end.column, s = r, i = -1; this.subFolds.length > s && (i = this.subFolds[s].range.compare(t, n), 1 == i); s++);
					if (this.subFolds[s], 0 == i) throw "A fold can't intersect already existing fold" + e.range + this.range;
					return this.subFolds.splice(r, s - r, e), e.setFoldLine(this.foldLine), e
				}
			}).call(n.prototype)
		}), define("ace/token_iterator", ["require", "exports", "module"], function(e, t) {
			var n = function(e, t, n) {
				this.$session = e, this.$row = t, this.$rowTokens = e.getTokens(t);
				var r = e.getTokenAt(t, n);
				this.$tokenIndex = r ? r.index : -1
			};
			(function() {
				this.stepBackward = function() {
					for (this.$tokenIndex -= 1; 0 > this.$tokenIndex;) {
						if (this.$row -= 1, 0 > this.$row) return this.$row = 0, null;
						this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = this.$rowTokens.length - 1
					}
					return this.$rowTokens[this.$tokenIndex]
				}, this.stepForward = function() {
					var e = this.$session.getLength();
					for (this.$tokenIndex += 1; this.$tokenIndex >= this.$rowTokens.length;) {
						if (this.$row += 1, this.$row >= e) return this.$row = e - 1, null;
						this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = 0
					}
					return this.$rowTokens[this.$tokenIndex]
				}, this.getCurrentToken = function() {
					return this.$rowTokens[this.$tokenIndex]
				}, this.getCurrentTokenRow = function() {
					return this.$row
				}, this.getCurrentTokenColumn = function() {
					var e = this.$rowTokens,
						t = this.$tokenIndex,
						n = e[t].start;
					if (void 0 !== n) return n;
					for (n = 0; t > 0;) t -= 1, n += e[t].value.length;
					return n
				}
			}).call(n.prototype), t.TokenIterator = n
		}), define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], function(e, t) {
			function n() {
				this.findMatchingBracket = function(e, t) {
					if (0 == e.column) return null;
					var n = t || this.getLine(e.row).charAt(e.column - 1);
					if ("" == n) return null;
					var r = n.match(/([\(\[\{])|([\)\]\}])/);
					return r ? r[1] ? this.$findClosingBracket(r[1], e) : this.$findOpeningBracket(r[2], e) : null
				}, this.getBracketRange = function(e) {
					var t, n = this.getLine(e.row),
						r = !0,
						o = n.charAt(e.column - 1),
						s = o && o.match(/([\(\[\{])|([\)\]\}])/);
					if (s || (o = n.charAt(e.column), e = {
						row: e.row,
						column: e.column + 1
					}, s = o && o.match(/([\(\[\{])|([\)\]\}])/), r = !1), !s) return null;
					if (s[1]) {
						var a = this.$findClosingBracket(s[1], e);
						if (!a) return null;
						t = i.fromPoints(e, a), r || (t.end.column++, t.start.column--), t.cursor = t.end
					} else {
						var a = this.$findOpeningBracket(s[2], e);
						if (!a) return null;
						t = i.fromPoints(a, e), r || (t.start.column++, t.end.column--), t.cursor = t.start
					}
					return t
				}, this.$brackets = {
					")": "(",
					"(": ")",
					"]": "[",
					"[": "]",
					"{": "}",
					"}": "{"
				}, this.$findOpeningBracket = function(e, t, n) {
					var i = this.$brackets[e],
						o = 1,
						s = new r(this, t.row, t.column),
						a = s.getCurrentToken();
					if (a || (a = s.stepForward()), a) {
						n || (n = RegExp("(\\.?" + a.type.replace(".", "\\.").replace("rparen", ".paren") + ")+"));
						for (var l = t.column - s.getCurrentTokenColumn() - 2, c = a.value;;) {
							for (; l >= 0;) {
								var u = c.charAt(l);
								if (u == i) {
									if (o -= 1, 0 == o) return {
											row: s.getCurrentTokenRow(),
											column: l + s.getCurrentTokenColumn()
									}
								} else u == e && (o += 1);
								l -= 1
							}
							do a = s.stepBackward(); while (a && !n.test(a.type));
							if (null == a) break;
							c = a.value, l = c.length - 1
						}
						return null
					}
				}, this.$findClosingBracket = function(e, t, n) {
					var i = this.$brackets[e],
						o = 1,
						s = new r(this, t.row, t.column),
						a = s.getCurrentToken();
					if (a || (a = s.stepForward()), a) {
						n || (n = RegExp("(\\.?" + a.type.replace(".", "\\.").replace("lparen", ".paren") + ")+"));
						for (var l = t.column - s.getCurrentTokenColumn();;) {
							for (var c = a.value, u = c.length; u > l;) {
								var h = c.charAt(l);
								if (h == i) {
									if (o -= 1, 0 == o) return {
											row: s.getCurrentTokenRow(),
											column: l + s.getCurrentTokenColumn()
									}
								} else h == e && (o += 1);
								l += 1
							}
							do a = s.stepForward(); while (a && !n.test(a.type));
							if (null == a) break;
							l = 0
						}
						return null
					}
				}
			}
			var r = e("../token_iterator").TokenIterator,
				i = e("../range").Range;
			t.BracketMatch = n
		}), define("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function(e, t) {
			var n = e("./lib/lang"),
				r = e("./lib/oop"),
				i = e("./range").Range,
				o = function() {
					this.$options = {}
				};
			(function() {
				this.set = function(e) {
					return r.mixin(this.$options, e), this
				}, this.getOptions = function() {
					return n.copyObject(this.$options)
				}, this.setOptions = function(e) {
					this.$options = e
				}, this.find = function(e) {
					var t = this.$matchIterator(e, this.$options);
					if (!t) return !1;
					var n = null;
					return t.forEach(function(e, t, r) {
						if (e.start) n = e;
						else {
							var o = e.offset + (r || 0);
							n = new i(t, o, t, o + e.length)
						}
						return !0
					}), n
				}, this.findAll = function(e) {
					var t = this.$options;
					if (!t.needle) return [];
					this.$assembleRegExp(t);
					var r = t.range,
						o = r ? e.getLines(r.start.row, r.end.row) : e.doc.getAllLines(),
						s = [],
						a = t.re;
					if (t.$isMultiLine) for (var l = a.length, c = o.length - l, u = a.offset || 0; c >= u; u++) {
							for (var h = 0; l > h && -1 != o[u + h].search(a[h]); h++);
							var d = o[u],
								f = o[u + l - 1],
								p = d.match(a[0])[0].length,
								g = f.match(a[l - 1])[0].length;
							s.push(new i(u, d.length - p, u + l - 1, g))
					} else for (var m = 0; o.length > m; m++) for (var v = n.getMatchOffsets(o[m], a), h = 0; v.length > h; h++) {
								var A = v[h];
								s.push(new i(m, A.offset, m, A.offset + A.length))
					} if (r) {
						for (var y = r.start.column, C = r.start.column, m = 0, h = s.length - 1; h > m && y > s[m].start.column && s[m].start.row == r.start.row;) m++;
						for (; h > m && s[h].end.column > C && s[h].end.row == r.end.row;) h--;
						return s.slice(m, h + 1)
					}
					return s
				}, this.replace = function(e, t) {
					var n = this.$options,
						r = this.$assembleRegExp(n);
					if (n.$isMultiLine) return t;
					if (r) {
						var i = r.exec(e);
						if (!i || i[0].length != e.length) return null;
						if (t = e.replace(r, t), n.preserveCase) {
							t = t.split("");
							for (var o = Math.min(e.length, e.length); o--;) {
								var s = e[o];
								t[o] = s && s.toLowerCase() != s ? t[o].toUpperCase() : t[o].toLowerCase()
							}
							t = t.join("")
						}
						return t
					}
				}, this.$matchIterator = function(e, t) {
					var r = this.$assembleRegExp(t);
					if (!r) return !1;
					var o, s = this,
						a = t.backwards;
					if (t.$isMultiLine) var l = r.length,
					c = function(t, n, s) {
						var a = t.search(r[0]);
						if (-1 != a) {
							for (var c = 1; l > c; c++) if (t = e.getLine(n + c), -1 == t.search(r[c])) return;
							var u = t.match(r[l - 1])[0].length,
								h = new i(n, a, n + l - 1, u);
							return 1 == r.offset ? (h.start.row--, h.start.column = Number.MAX_VALUE) : s && (h.start.column += s), o(h) ? !0 : void 0
						}
					};
					else if (a) var c = function(e, t, i) {
							for (var s = n.getMatchOffsets(e, r), a = s.length - 1; a >= 0; a--) if (o(s[a], t, i)) return !0
					};
					else var c = function(e, t, i) {
							for (var s = n.getMatchOffsets(e, r), a = 0; s.length > a; a++) if (o(s[a], t, i)) return !0
					};
					return {
						forEach: function(n) {
							o = n, s.$lineIterator(e, t).forEach(c)
						}
					}
				}, this.$assembleRegExp = function(e) {
					if (e.needle instanceof RegExp) return e.re = e.needle;
					var t = e.needle;
					if (!e.needle) return e.re = !1;
					e.regExp || (t = n.escapeRegExp(t)), e.wholeWord && (t = "\\b" + t + "\\b");
					var r = e.caseSensitive ? "g" : "gi";
					if (e.$isMultiLine = /[\n\r]/.test(t), e.$isMultiLine) return e.re = this.$assembleMultilineRegExp(t, r);
					try {
						var i = RegExp(t, r)
					} catch (o) {
						i = !1
					}
					return e.re = i
				}, this.$assembleMultilineRegExp = function(e, t) {
					for (var n = e.replace(/\r\n|\r|\n/g, "$\n^").split("\n"), r = [], i = 0; n.length > i; i++) try {
							r.push(RegExp(n[i], t))
					} catch (o) {
						return !1
					}
					return "" == n[0] ? (r.shift(), r.offset = 1) : r.offset = 0, r
				}, this.$lineIterator = function(e, t) {
					var n = 1 == t.backwards,
						r = 0 != t.skipCurrent,
						i = t.range,
						o = t.start;
					o || (o = i ? i[n ? "end" : "start"] : e.selection.getRange()), o.start && (o = o[r != n ? "end" : "start"]);
					var s = i ? i.start.row : 0,
						a = i ? i.end.row : e.getLength() - 1,
						l = n ? function(n) {
							var r = o.row,
								i = e.getLine(r).substring(0, o.column);
							if (!n(i, r)) {
								for (r--; r >= s; r--) if (n(e.getLine(r), r)) return;
								if (0 != t.wrap) for (r = a, s = o.row; r >= s; r--) if (n(e.getLine(r), r)) return
							}
						} : function(n) {
							var r = o.row,
								i = e.getLine(r).substr(o.column);
							if (!n(i, r, o.column)) {
								for (r += 1; a >= r; r++) if (n(e.getLine(r), r)) return;
								if (0 != t.wrap) for (r = s, a = o.row; a >= r; r++) if (n(e.getLine(r), r)) return
							}
						};
					return {
						forEach: l
					}
				}
			}).call(o.prototype), t.Search = o
		}), define("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], function(e, t) {
			var n = e("../lib/oop"),
				r = e("../keyboard/hash_handler").HashHandler,
				i = e("../lib/event_emitter").EventEmitter,
				o = function(e, t) {
					this.platform = e, this.commands = this.byName = {}, this.commmandKeyBinding = {}, this.addCommands(t), this.setDefaultHandler("exec", function(e) {
						return e.command.exec(e.editor, e.args || {})
					})
				};
			n.inherits(o, r),
			function() {
				n.implement(this, i), this.exec = function(e, t, n) {
					if ("string" == typeof e && (e = this.commands[e]), !e) return !1;
					if (t && t.$readOnly && !e.readOnly) return !1;
					var r = this._emit("exec", {
						editor: t,
						command: e,
						args: n
					});
					return r === !1 ? !1 : !0
				}, this.toggleRecording = function(e) {
					return this.$inReplay ? void 0 : (e && e._emit("changeStatus"), this.recording ? (this.macro.pop(), this.removeEventListener("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = !1) : (this.$addCommandToMacro || (this.$addCommandToMacro = function(e) {
						this.macro.push([e.command, e.args])
					}.bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = !0))
				}, this.replay = function(e) {
					if (!this.$inReplay && this.macro) {
						if (this.recording) return this.toggleRecording(e);
						try {
							this.$inReplay = !0, this.macro.forEach(function(t) {
								"string" == typeof t ? this.exec(t, e) : this.exec(t[0], e, t[1])
							}, this)
						} finally {
							this.$inReplay = !1
						}
					}
				}, this.trimMacro = function(e) {
					return e.map(function(e) {
						return "string" != typeof e[0] && (e[0] = e[0].name), e[1] || (e = e[0]), e
					})
				}
			}.call(o.prototype), t.CommandManager = o
		}), define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys"], function(e, t) {
			function n(e, t) {
				this.platform = t, this.commands = {}, this.commmandKeyBinding = {}, this.addCommands(e)
			}
			var r = e("../lib/keys");
			(function() {
				this.addCommand = function(e) {
					this.commands[e.name] && this.removeCommand(e), this.commands[e.name] = e, e.bindKey && this._buildKeyHash(e)
				}, this.removeCommand = function(e) {
					var t = "string" == typeof e ? e : e.name;
					e = this.commands[t], delete this.commands[t];
					var n = this.commmandKeyBinding;
					for (var r in n) for (var i in n[r]) n[r][i] == e && delete n[r][i]
				}, this.bindKey = function(e, t) {
					if (e) {
						if ("function" == typeof t) return this.addCommand({
								exec: t,
								bindKey: e,
								name: e
							}), void 0;
						var n = this.commmandKeyBinding;
						e.split("|").forEach(function(e) {
							var r = this.parseKeys(e, t),
								i = r.hashId;
							(n[i] || (n[i] = {}))[r.key] = t
						}, this)
					}
				}, this.addCommands = function(e) {
					e && Object.keys(e).forEach(function(t) {
						var n = e[t];
						return "string" == typeof n ? this.bindKey(n, t) : ("function" == typeof n && (n = {
							exec: n
						}), n.name || (n.name = t), this.addCommand(n), void 0)
					}, this)
				}, this.removeCommands = function(e) {
					Object.keys(e).forEach(function(t) {
						this.removeCommand(e[t])
					}, this)
				}, this.bindKeys = function(e) {
					Object.keys(e).forEach(function(t) {
						this.bindKey(t, e[t])
					}, this)
				}, this._buildKeyHash = function(e) {
					var t = e.bindKey;
					if (t) {
						var n = "string" == typeof t ? t : t[this.platform];
						this.bindKey(n, e)
					}
				}, this.parseKeys = function(e) {
					var t = e.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function(e) {
						return e
					}),
						n = t.pop(),
						i = r[n];
					if (r.FUNCTION_KEYS[i]) n = r.FUNCTION_KEYS[i].toLowerCase();
					else {
						if (!t.length) return {
								key: n,
								hashId: -1
						};
						if (1 == t.length && "shift" == t[0]) return {
								key: n.toUpperCase(),
								hashId: -1
						}
					}
					for (var o = 0, s = t.length; s--;) {
						var a = r.KEY_MODS[t[s]];
						if (null == a) throw "invalid modifier " + t[s] + " in " + e;
						o |= a
					}
					return {
						key: n,
						hashId: o
					}
				}, this.findKeyCommand = function(e, t) {
					var n = this.commmandKeyBinding;
					return n[e] && n[e][t]
				}, this.handleKeyboard = function(e, t, n) {
					return {
						command: this.findKeyCommand(t, n)
					}
				}
			}).call(n.prototype), t.HashHandler = n
		}), define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang"], function(e, t) {
			function n(e, t) {
				return {
					win: e,
					mac: t
				}
			}
			var r = e("../lib/lang");
			t.commands = [{
					name: "selectall",
					bindKey: n("Ctrl-A", "Command-A"),
					exec: function(e) {
						e.selectAll()
					},
					readOnly: !0
				}, {
					name: "centerselection",
					bindKey: n(null, "Ctrl-L"),
					exec: function(e) {
						e.centerSelection()
					},
					readOnly: !0
				}, {
					name: "gotoline",
					bindKey: n("Ctrl-L", "Command-L"),
					exec: function(e) {
						var t = parseInt(prompt("Enter line number:"), 10);
						isNaN(t) || e.gotoLine(t)
					},
					readOnly: !0
				}, {
					name: "fold",
					bindKey: n("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
					exec: function(e) {
						e.session.toggleFold(!1)
					},
					readOnly: !0
				}, {
					name: "unfold",
					bindKey: n("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
					exec: function(e) {
						e.session.toggleFold(!0)
					},
					readOnly: !0
				}, {
					name: "foldall",
					bindKey: n("Alt-0", "Command-Option-0"),
					exec: function(e) {
						e.session.foldAll()
					},
					readOnly: !0
				}, {
					name: "unfoldall",
					bindKey: n("Alt-Shift-0", "Command-Option-Shift-0"),
					exec: function(e) {
						e.session.unfold()
					},
					readOnly: !0
				}, {
					name: "findnext",
					bindKey: n("Ctrl-K", "Command-G"),
					exec: function(e) {
						e.findNext()
					},
					readOnly: !0
				}, {
					name: "findprevious",
					bindKey: n("Ctrl-Shift-K", "Command-Shift-G"),
					exec: function(e) {
						e.findPrevious()
					},
					readOnly: !0
				}, {
					name: "find",
					bindKey: n("Ctrl-F", "Command-F"),
					exec: function(e) {
						var t = prompt("Find:", e.getCopyText());
						e.find(t)
					},
					readOnly: !0
				}, {
					name: "overwrite",
					bindKey: "Insert",
					exec: function(e) {
						e.toggleOverwrite()
					},
					readOnly: !0
				}, {
					name: "selecttostart",
					bindKey: n("Ctrl-Shift-Home", "Command-Shift-Up"),
					exec: function(e) {
						e.getSelection().selectFileStart()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "gotostart",
					bindKey: n("Ctrl-Home", "Command-Home|Command-Up"),
					exec: function(e) {
						e.navigateFileStart()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "selectup",
					bindKey: n("Shift-Up", "Shift-Up"),
					exec: function(e) {
						e.getSelection().selectUp()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "golineup",
					bindKey: n("Up", "Up|Ctrl-P"),
					exec: function(e, t) {
						e.navigateUp(t.times)
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "selecttoend",
					bindKey: n("Ctrl-Shift-End", "Command-Shift-Down"),
					exec: function(e) {
						e.getSelection().selectFileEnd()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "gotoend",
					bindKey: n("Ctrl-End", "Command-End|Command-Down"),
					exec: function(e) {
						e.navigateFileEnd()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "selectdown",
					bindKey: n("Shift-Down", "Shift-Down"),
					exec: function(e) {
						e.getSelection().selectDown()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "golinedown",
					bindKey: n("Down", "Down|Ctrl-N"),
					exec: function(e, t) {
						e.navigateDown(t.times)
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "selectwordleft",
					bindKey: n("Ctrl-Shift-Left", "Option-Shift-Left"),
					exec: function(e) {
						e.getSelection().selectWordLeft()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "gotowordleft",
					bindKey: n("Ctrl-Left", "Option-Left"),
					exec: function(e) {
						e.navigateWordLeft()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "selecttolinestart",
					bindKey: n("Alt-Shift-Left", "Command-Shift-Left"),
					exec: function(e) {
						e.getSelection().selectLineStart()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "gotolinestart",
					bindKey: n("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
					exec: function(e) {
						e.navigateLineStart()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "selectleft",
					bindKey: n("Shift-Left", "Shift-Left"),
					exec: function(e) {
						e.getSelection().selectLeft()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "gotoleft",
					bindKey: n("Left", "Left|Ctrl-B"),
					exec: function(e, t) {
						e.navigateLeft(t.times)
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "selectwordright",
					bindKey: n("Ctrl-Shift-Right", "Option-Shift-Right"),
					exec: function(e) {
						e.getSelection().selectWordRight()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "gotowordright",
					bindKey: n("Ctrl-Right", "Option-Right"),
					exec: function(e) {
						e.navigateWordRight()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "selecttolineend",
					bindKey: n("Alt-Shift-Right", "Command-Shift-Right"),
					exec: function(e) {
						e.getSelection().selectLineEnd()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "gotolineend",
					bindKey: n("Alt-Right|End", "Command-Right|End|Ctrl-E"),
					exec: function(e) {
						e.navigateLineEnd()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "selectright",
					bindKey: n("Shift-Right", "Shift-Right"),
					exec: function(e) {
						e.getSelection().selectRight()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "gotoright",
					bindKey: n("Right", "Right|Ctrl-F"),
					exec: function(e, t) {
						e.navigateRight(t.times)
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "selectpagedown",
					bindKey: "Shift-PageDown",
					exec: function(e) {
						e.selectPageDown()
					},
					readOnly: !0
				}, {
					name: "pagedown",
					bindKey: n(null, "Option-PageDown"),
					exec: function(e) {
						e.scrollPageDown()
					},
					readOnly: !0
				}, {
					name: "gotopagedown",
					bindKey: n("PageDown", "PageDown|Ctrl-V"),
					exec: function(e) {
						e.gotoPageDown()
					},
					readOnly: !0
				}, {
					name: "selectpageup",
					bindKey: "Shift-PageUp",
					exec: function(e) {
						e.selectPageUp()
					},
					readOnly: !0
				}, {
					name: "pageup",
					bindKey: n(null, "Option-PageUp"),
					exec: function(e) {
						e.scrollPageUp()
					},
					readOnly: !0
				}, {
					name: "gotopageup",
					bindKey: "PageUp",
					exec: function(e) {
						e.gotoPageUp()
					},
					readOnly: !0
				}, {
					name: "scrollup",
					bindKey: n("Ctrl-Up", null),
					exec: function(e) {
						e.renderer.scrollBy(0, -2 * e.renderer.layerConfig.lineHeight)
					},
					readOnly: !0
				}, {
					name: "scrolldown",
					bindKey: n("Ctrl-Down", null),
					exec: function(e) {
						e.renderer.scrollBy(0, 2 * e.renderer.layerConfig.lineHeight)
					},
					readOnly: !0
				}, {
					name: "selectlinestart",
					bindKey: "Shift-Home",
					exec: function(e) {
						e.getSelection().selectLineStart()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "selectlineend",
					bindKey: "Shift-End",
					exec: function(e) {
						e.getSelection().selectLineEnd()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "togglerecording",
					bindKey: n("Ctrl-Alt-E", "Command-Option-E"),
					exec: function(e) {
						e.commands.toggleRecording(e)
					},
					readOnly: !0
				}, {
					name: "replaymacro",
					bindKey: n("Ctrl-Shift-E", "Command-Shift-E"),
					exec: function(e) {
						e.commands.replay(e)
					},
					readOnly: !0
				}, {
					name: "jumptomatching",
					bindKey: n("Ctrl-P", "Ctrl-Shift-P"),
					exec: function(e) {
						e.jumpToMatching()
					},
					multiSelectAction: "forEach",
					readOnly: !0
				}, {
					name: "selecttomatching",
					bindKey: n("Ctrl-Shift-P", null),
					exec: function(e) {
						e.jumpToMatching(!0)
					},
					readOnly: !0
				}, {
					name: "cut",
					exec: function(e) {
						var t = e.getSelectionRange();
						e._emit("cut", t), e.selection.isEmpty() || (e.session.remove(t), e.clearSelection())
					},
					multiSelectAction: "forEach"
				}, {
					name: "removeline",
					bindKey: n("Ctrl-D", "Command-D"),
					exec: function(e) {
						e.removeLines()
					},
					multiSelectAction: "forEach"
				}, {
					name: "duplicateSelection",
					bindKey: n("Ctrl-Shift-D", "Command-Shift-D"),
					exec: function(e) {
						e.duplicateSelection()
					},
					multiSelectAction: "forEach"
				}, {
					name: "sortlines",
					bindKey: n("Ctrl-Alt-S", "Command-Alt-S"),
					exec: function(e) {
						e.sortLines()
					},
					multiSelectAction: "forEach"
				}, {
					name: "togglecomment",
					bindKey: n("Ctrl-/", "Command-/"),
					exec: function(e) {
						e.toggleCommentLines()
					},
					multiSelectAction: "forEach"
				}, {
					name: "modifyNumberUp",
					bindKey: n("Ctrl-Shift-Up", "Alt-Shift-Up"),
					exec: function(e) {
						e.modifyNumber(1)
					},
					multiSelectAction: "forEach"
				}, {
					name: "modifyNumberDown",
					bindKey: n("Ctrl-Shift-Down", "Alt-Shift-Down"),
					exec: function(e) {
						e.modifyNumber(-1)
					},
					multiSelectAction: "forEach"
				}, {
					name: "replace",
					bindKey: n("Ctrl-R", "Command-Option-F"),
					exec: function(e) {
						var t = prompt("Find:", e.getCopyText());
						if (t) {
							var n = prompt("Replacement:");
							n && e.replace(n, {
								needle: t
							})
						}
					}
				}, {
					name: "replaceall",
					bindKey: n("Ctrl-Shift-R", "Command-Shift-Option-F"),
					exec: function(e) {
						var t = prompt("Find:");
						if (t) {
							var n = prompt("Replacement:");
							n && e.replaceAll(n, {
								needle: t
							})
						}
					}
				}, {
					name: "undo",
					bindKey: n("Ctrl-Z", "Command-Z"),
					exec: function(e) {
						e.undo()
					}
				}, {
					name: "redo",
					bindKey: n("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
					exec: function(e) {
						e.redo()
					}
				}, {
					name: "copylinesup",
					bindKey: n("Alt-Shift-Up", "Command-Option-Up"),
					exec: function(e) {
						e.copyLinesUp()
					}
				}, {
					name: "movelinesup",
					bindKey: n("Alt-Up", "Option-Up"),
					exec: function(e) {
						e.moveLinesUp()
					}
				}, {
					name: "copylinesdown",
					bindKey: n("Alt-Shift-Down", "Command-Option-Down"),
					exec: function(e) {
						e.copyLinesDown()
					}
				}, {
					name: "movelinesdown",
					bindKey: n("Alt-Down", "Option-Down"),
					exec: function(e) {
						e.moveLinesDown()
					}
				}, {
					name: "del",
					bindKey: n("Delete", "Delete|Ctrl-D"),
					exec: function(e) {
						e.remove("right")
					},
					multiSelectAction: "forEach"
				}, {
					name: "backspace",
					bindKey: n("Command-Backspace|Option-Backspace|Shift-Backspace|Backspace", "Ctrl-Backspace|Command-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
					exec: function(e) {
						e.remove("left")
					},
					multiSelectAction: "forEach"
				}, {
					name: "removetolinestart",
					bindKey: n("Alt-Backspace", "Command-Backspace"),
					exec: function(e) {
						e.removeToLineStart()
					},
					multiSelectAction: "forEach"
				}, {
					name: "removetolineend",
					bindKey: n("Alt-Delete", "Ctrl-K"),
					exec: function(e) {
						e.removeToLineEnd()
					},
					multiSelectAction: "forEach"
				}, {
					name: "removewordleft",
					bindKey: n("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
					exec: function(e) {
						e.removeWordLeft()
					},
					multiSelectAction: "forEach"
				}, {
					name: "removewordright",
					bindKey: n("Ctrl-Delete", "Alt-Delete"),
					exec: function(e) {
						e.removeWordRight()
					},
					multiSelectAction: "forEach"
				}, {
					name: "outdent",
					bindKey: n("Shift-Tab", "Shift-Tab"),
					exec: function(e) {
						e.blockOutdent()
					},
					multiSelectAction: "forEach"
				}, {
					name: "indent",
					bindKey: n("Tab", "Tab"),
					exec: function(e) {
						e.indent()
					},
					multiSelectAction: "forEach"
				}, {
					name: "insertstring",
					exec: function(e, t) {
						e.insert(t)
					},
					multiSelectAction: "forEach"
				}, {
					name: "inserttext",
					exec: function(e, t) {
						e.insert(r.stringRepeat(t.text || "", t.times || 1))
					},
					multiSelectAction: "forEach"
				}, {
					name: "splitline",
					bindKey: n(null, "Ctrl-O"),
					exec: function(e) {
						e.splitLine()
					},
					multiSelectAction: "forEach"
				}, {
					name: "transposeletters",
					bindKey: n("Ctrl-T", "Ctrl-T"),
					exec: function(e) {
						e.transposeLetters()
					},
					multiSelectAction: function(e) {
						e.transposeSelections(1)
					}
				}, {
					name: "touppercase",
					bindKey: n("Ctrl-U", "Ctrl-U"),
					exec: function(e) {
						e.toUpperCase()
					},
					multiSelectAction: "forEach"
				}, {
					name: "tolowercase",
					bindKey: n("Ctrl-Shift-U", "Ctrl-Shift-U"),
					exec: function(e) {
						e.toLowerCase()
					},
					multiSelectAction: "forEach"
				}
			]
		}), define("ace/undomanager", ["require", "exports", "module"], function(e, t) {
			var n = function() {
				this.reset()
			};
			(function() {
				this.execute = function(e) {
					var t = e.args[0];
					this.$doc = e.args[1], this.$undoStack.push(t), this.$redoStack = []
				}, this.undo = function(e) {
					var t = this.$undoStack.pop(),
						n = null;
					return t && (n = this.$doc.undoChanges(t, e), this.$redoStack.push(t)), n
				}, this.redo = function(e) {
					var t = this.$redoStack.pop(),
						n = null;
					return t && (n = this.$doc.redoChanges(t, e), this.$undoStack.push(t)), n
				}, this.reset = function() {
					this.$undoStack = [], this.$redoStack = []
				}, this.hasUndo = function() {
					return this.$undoStack.length > 0
				}, this.hasRedo = function() {
					return this.$redoStack.length > 0
				}
			}).call(n.prototype), t.UndoManager = n
		}), define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent", "ace/config", "ace/lib/net", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/renderloop", "ace/lib/event_emitter"], function(e, t) {
			var n = e("./lib/oop"),
				r = e("./lib/dom"),
				i = e("./lib/event"),
				o = e("./lib/useragent"),
				s = e("./config"),
				a = e("./lib/net"),
				l = e("./layer/gutter").Gutter,
				c = e("./layer/marker").Marker,
				u = e("./layer/text").Text,
				h = e("./layer/cursor").Cursor,
				d = e("./scrollbar").ScrollBar,
				f = e("./renderloop").RenderLoop,
				p = e("./lib/event_emitter").EventEmitter,
				g = ".ace_editor {position: absolute;overflow: hidden;font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;font-size: 12px;}.ace_scroller {position: absolute;overflow: hidden;}.ace_content {position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: text;}.ace_gutter {position: absolute;overflow : hidden;height: 100%;width: auto;cursor: default;z-index: 4;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUM2OEZDQTQ4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUM2OEZDQTU4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQzY4RkNBMjhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQzY4RkNBMzhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkgXxbAAAAJbSURBVHjapFNNaBNBFH4zs5vdZLP5sQmNpT82QY209heh1ioWisaDRcSKF0WKJ0GQnrzrxasHsR6EnlrwD0TagxJabaVEpFYxLWlLSS822tr87m66ccfd2GKyVhA6MMybgfe97/vmPUQphd0sZjto9XIn9OOsvlu2nkqRzVU+6vvlzPf8W6bk8dxQ0NPbxAALgCgg2JkaQuhzQau/El0zbmUA7U0Es8v2CiYmKQJHGO1QICCLoqilMhkmurDAyapKgqItezi/USRdJqEYY4D5jCy03ht2yMkkvL91jTTX10qzyyu2hruPRN7jgbH+EOsXcMLgYiThEgAMhABW85oqy1DXdRIdvP1AHJ2acQXvDIrVHcdQNrEKNYSVMSZGMjEzIIAwDXIo+6G/FxcGnzkC3T2oMhLjre49sBB+RRcHLqdafK6sYdE/GGBwU1VpFNj0aN8pJbe+BkZyevUrvLl6Xmm0W9IuTc0DxrDNAJd5oEvI/KRsNC3bQyNjPO9yQ1YHcfj2QvfQc/5TUhJTBc2iM0U7AWDQtc1nJHvD/cfO2s7jaGkiTEfa/Ep8coLu7zmNmh8+dc5lZDuUeFAGUNA/OY6JVaypQ0vjr7XYjUvJM37vt+j1vuTK5DgVfVUoTjVe+y3/LxMxY2GgU+CSLy4cpfsYorRXuXIOi0Vt40h67uZFTdIo6nLaZcwUJWAzwNS0tBnqqKzQDnjdG/iPyZxo46HaKUpbvYkj8qYRTZsBhge+JHhZyh0x9b95JqjVJkT084kZIPwu/mPWqPgfQ5jXh2+92Ay7HedfAgwA6KDWafb4w3cAAAAASUVORK5CYII=\");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUM2OEZDQTg4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUM2OEZDQTk4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQzY4RkNBNjhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQzY4RkNBNzhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgd7PfIAAAGmSURBVHjaYvr//z8DJZiJgUIANoCRkREb9gLiSVAaQx4OQM7AAkwd7XU2/v++/rOttdYGEB9dASEvOMydGKfH8Gv/p4XTkvRBfLxeQAP+1cUhXopyvzhP7P/IoSj7g7Mw09cNKO6J1QQ0L4gICPIv/veg/8W+JdFvQNLHVsW9/nmn9zk7B+cCkDwhL7gt6knSZnx9/LuCEOcvkIAMP+cvto9nfqyZmmUAksfnBUtbM60gX/3/kgyv3/xSFOL5DZT+L8vP+Yfh5cvfPvp/xUHyQHXGyAYwgpwBjZYFT3Y1OEl/OfCH4ffv3wzc4iwMvNIsDJ+f/mH4+vIPAxsb631WW0Yln6ZpQLXdMK/DXGDflh+sIv37EivD5x//Gb7+YWT4y86sl7BCCkSD+Z++/1dkvsFRl+HnD1Rvje4F8whjMXmGj58YGf5zsDMwcnAwfPvKcml62DsQDeaDxN+/Y0qwlpEHqrdB94IRNIDUgfgfKJChGK4OikEW3gTiXUB950ASLFAF54AC94A0G9QAfOnmF9DCDzABFqS08IHYDIScdijOjQABBgC+/9awBH96jwAAAABJRU5ErkJggg==\");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url(\"data:image/gif;base64,R0lGODlhEAAQAMQAAAAAAEFBQVJSUl5eXmRkZGtra39/f4WFhYmJiZGRkaampry8vMPDw8zMzNXV1dzc3OTk5Orq6vDw8P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABQALAAAAAAQABAAAAUuICWOZGmeaBml5XGwFCQSBGyXRSAwtqQIiRuiwIM5BoYVbEFIyGCQoeJGrVptIQA7\");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRTk5MTVGREIxNDkxMUUxOTc5Q0FFREQyMTNGMjBFQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRTk5MTVGRUIxNDkxMUUxOTc5Q0FFREQyMTNGMjBFQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZFOTkxNUZCQjE0OTExRTE5NzlDQUVERDIxM0YyMEVDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZFOTkxNUZDQjE0OTExRTE5NzlDQUVERDIxM0YyMEVDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SIDkjAAAAJ1JREFUeNpi/P//PwMlgImBQkB7A6qrq/+DMC55FkIGKCoq4pVnpFkgTp069f/+/fv/r1u37r+tre1/kg0A+ptn9uzZYLaRkRHpLvjw4cNXWVlZhufPnzOcO3eOdAO0tbVPAjHDmzdvGA4fPsxIsgGSkpJmv379Ynj37h2DjIyMCMkG3LhxQ/T27dsMampqDHZ2dq/pH41DxwCAAAMAFdc68dUsFZgAAAAASUVORK5CYII=\");}.ace_scrollbar {position: absolute;overflow-x: hidden;overflow-y: scroll;right: 0;}.ace_scrollbar-inner {position: absolute;width: 1px;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;}.ace_text-input.ace_composition {background: #fff;color: #000;z-index: 1000;opacity: 1;border: solid lightgray 1px;margin: -1px}.ace_layer {z-index: 1;position: absolute;overflow: hidden;white-space: nowrap;height: 100%;width: 100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;/* setting pointer-events: auto; on node under the mouse, which changesduring scroll, will break mouse wheel scrolling in Safari */pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {color: black;font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {-moz-transition: opacity 0.18s;-webkit-transition: opacity 0.18s;-o-transition: opacity 0.18s;-ms-transition: opacity 0.18s;transition: opacity 0.18s;}.ace_cursor[style*=\"opacity: 0\"]{-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";}.ace_editor.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_line {white-space: nowrap;}.ace_marker-layer .ace_step {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_line .ace_fold {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%11%00%00%00%09%08%06%00%00%00%D4%E8%C7%0C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%B5IDAT(%15%A5%91%3D%0E%02!%10%85ac%E1%05%D6%CE%D6%C6%CE%D2%E8%ED%CD%DE%C0%C6%D6N.%E0V%F8%3D%9Ca%891XH%C2%BE%D9y%3F%90!%E6%9C%C3%BFk%E5%011%C6-%F5%C8N%04%DF%BD%FF%89%DFt%83DN%60%3E%F3%AB%A0%DE%1A%5Dg%BE%10Q%97%1B%40%9C%A8o%10%8F%5E%828%B4%1B%60%87%F6%02%26%85%1Ch%1E%C1%2B%5Bk%FF%86%EE%B7j%09%9A%DA%9B%ACe%A3%F9%EC%DA!9%B4%D5%A6%81%86%86%98%CC%3C%5B%40%FA%81%B3%E9%CB%23%94%C16Azo%05%D4%E1%C1%95a%3B%8A'%A0%E8%CC%17%22%85%1D%BA%00%A2%FA%DC%0A%94%D1%D1%8D%8B%3A%84%17B%C7%60%1A%25Z%FC%8D%00%00%00%00IEND%AEB%60%82\"),url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%007%08%06%00%00%00%C4%DD%80C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%3AIDAT8%11c%FC%FF%FF%7F%18%03%1A%60%01%F2%3F%A0%891%80%04%FF%11-%F8%17%9BJ%E2%05%B1ZD%81v%26t%E7%80%F8%A3%82h%A12%1A%20%A3%01%02%0F%01%BA%25%06%00%19%C0%0D%AEF%D5%3ES%00%00%00%00IEND%AEB%60%82\");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%11%00%00%00%09%08%06%00%00%00%D4%E8%C7%0C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%B5IDAT(%15%A5%91%3D%0E%02!%10%85ac%E1%05%D6%CE%D6%C6%CE%D2%E8%ED%CD%DE%C0%C6%D6N.%E0V%F8%3D%9Ca%891XH%C2%BE%D9y%3F%90!%E6%9C%C3%BFk%E5%011%C6-%F5%C8N%04%DF%BD%FF%89%DFt%83DN%60%3E%F3%AB%A0%DE%1A%5Dg%BE%10Q%97%1B%40%9C%A8o%10%8F%5E%828%B4%1B%60%87%F6%02%26%85%1Ch%1E%C1%2B%5Bk%FF%86%EE%B7j%09%9A%DA%9B%ACe%A3%F9%EC%DA!9%B4%D5%A6%81%86%86%98%CC%3C%5B%40%FA%81%B3%E9%CB%23%94%C16Azo%05%D4%E1%C1%95a%3B%8A'%A0%E8%CC%17%22%85%1D%BA%00%A2%FA%DC%0A%94%D1%D1%8D%8B%3A%84%17B%C7%60%1A%25Z%FC%8D%00%00%00%00IEND%AEB%60%82\"),url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%007%08%06%00%00%00%C4%DD%80C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%003IDAT8%11c%FC%FF%FF%7F%3E%03%1A%60%01%F2%3F%A3%891%80%04%FFQ%26%F8w%C0%B43%A1%DB%0C%E2%8F%0A%A2%85%CAh%80%8C%06%08%3C%04%E8%96%18%00%A3S%0D%CD%CF%D8%C1%9D%00%00%00%00IEND%AEB%60%82\");background-repeat: no-repeat, repeat-x;background-position: center center, top left;}.ace_editor.ace_dragging .ace_content {cursor: move;}.ace_gutter-tooltip {background-color: #FFFFD5;border: 1px solid gray;box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);color: black;display: inline-block;padding: 4px;position: absolute;z-index: 300;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: default;white-space: pre-line;word-wrap: break-word;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin: 0 -12px 0 1px;display: inline-block;width: 11px;vertical-align: top;background-image: url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%00%05%08%06%00%00%00%8Do%26%E5%00%00%004IDATx%DAe%8A%B1%0D%000%0C%C2%F2%2CK%96%BC%D0%8F9%81%88H%E9%D0%0E%96%C0%10%92%3E%02%80%5E%82%E4%A9*-%EEsw%C8%CC%11%EE%96w%D8%DC%E9*Eh%0C%151(%00%00%00%00IEND%AEB%60%82\");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;}.ace_fold-widget.ace_end {background-image: url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%00%05%08%06%00%00%00%8Do%26%E5%00%00%004IDATx%DAm%C7%C1%09%000%08C%D1%8C%ECE%C8E(%8E%EC%02)%1EZJ%F1%C1'%04%07I%E1%E5%EE%CAL%F5%A2%99%99%22%E2%D6%1FU%B5%FE0%D9x%A7%26Wz5%0E%D5%00%00%00%00IEND%AEB%60%82\");}.ace_fold-widget.ace_closed {background-image: url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%03%00%00%00%06%08%06%00%00%00%06%E5%24%0C%00%00%009IDATx%DA5%CA%C1%09%000%08%03%C0%AC*(%3E%04%C1%0D%BA%B1%23%A4Uh%E0%20%81%C0%CC%F8%82%81%AA%A2%AArGfr%88%08%11%11%1C%DD%7D%E0%EE%5B%F6%F6%CB%B8%05Q%2F%E9tai%D9%00%00%00%00IEND%AEB%60%82\");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);-moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);-webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);-moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);-webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}/*** Dark version for fold widgets*/.ace_dark .ace_fold-widget {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC\");}.ace_dark .ace_fold-widget.ace_end {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==\");}.ace_dark .ace_fold-widget.ace_closed {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==\");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {-moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);-webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {-moz-transition: opacity 0.4s ease 0.05s;-webkit-transition: opacity 0.4s ease 0.05s;-o-transition: opacity 0.4s ease 0.05s;-ms-transition: opacity 0.4s ease 0.05s;transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {-moz-transition: opacity 0.05s ease 0.05s;-webkit-transition: opacity 0.05s ease 0.05s;-o-transition: opacity 0.05s ease 0.05s;-ms-transition: opacity 0.05s ease 0.05s;transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}";
			r.importCssString(g, "ace_editor");
			var m = function(e, t) {
				var n = this;
				this.container = e, this.$keepTextAreaAtCursor = !o.isIE, r.addCssClass(e, "ace_editor"), this.setTheme(t), this.$gutter = r.createElement("div"), this.$gutter.className = "ace_gutter", this.container.appendChild(this.$gutter), this.scroller = r.createElement("div"), this.scroller.className = "ace_scroller", this.container.appendChild(this.scroller), this.content = r.createElement("div"), this.content.className = "ace_content", this.scroller.appendChild(this.content), this.setHighlightGutterLine(!0), this.$gutterLayer = new l(this.$gutter), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = new c(this.content);
				var s = this.$textLayer = new u(this.content);
				this.canvas = s.element, this.$markerFront = new c(this.content), this.$cursorLayer = new h(this.content), this.$horizScroll = !1, this.$horizScrollAlwaysVisible = !1, this.$animatedScroll = !1, this.scrollBar = new d(e), this.scrollBar.addEventListener("scroll", function(e) {
					n.$inScrollAnimation || n.session.setScrollTop(e.data)
				}), this.scrollTop = 0, this.scrollLeft = 0, i.addListener(this.scroller, "scroll", function() {
					var e = n.scroller.scrollLeft;
					n.scrollLeft = e, n.session.setScrollLeft(e)
				}), this.cursorPos = {
					row: 0,
					column: 0
				}, this.$textLayer.addEventListener("changeCharacterSize", function() {
					n.updateCharacterSize(), n.onResize(!0)
				}), this.$size = {
					width: 0,
					height: 0,
					scrollerHeight: 0,
					scrollerWidth: 0
				}, this.layerConfig = {
					width: 1,
					padding: 0,
					firstRow: 0,
					firstRowScreen: 0,
					lastRow: 0,
					lineHeight: 1,
					characterWidth: 1,
					minHeight: 1,
					maxHeight: 1,
					offset: 0,
					height: 1
				}, this.$loop = new f(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4)
			};
			(function() {
				this.showGutter = !0, this.CHANGE_CURSOR = 1, this.CHANGE_MARKER = 2, this.CHANGE_GUTTER = 4, this.CHANGE_SCROLL = 8, this.CHANGE_LINES = 16, this.CHANGE_TEXT = 32, this.CHANGE_SIZE = 64, this.CHANGE_MARKER_BACK = 128, this.CHANGE_MARKER_FRONT = 256, this.CHANGE_FULL = 512, this.CHANGE_H_SCROLL = 1024, n.implement(this, p), this.updateCharacterSize = function() {
					this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.characterWidth = this.$textLayer.getCharacterWidth(), this.lineHeight = this.$textLayer.getLineHeight(), this.$updatePrintMargin()
				}, this.setSession = function(e) {
					this.session = e, this.scroller.className = "ace_scroller", this.$cursorLayer.setSession(e), this.$markerBack.setSession(e), this.$markerFront.setSession(e), this.$gutterLayer.setSession(e), this.$textLayer.setSession(e), this.$loop.schedule(this.CHANGE_FULL)
				}, this.updateLines = function(e, t) {
					void 0 === t && (t = 1 / 0), this.$changedLines ? (this.$changedLines.firstRow > e && (this.$changedLines.firstRow = e), t > this.$changedLines.lastRow && (this.$changedLines.lastRow = t)) : this.$changedLines = {
						firstRow: e,
						lastRow: t
					}, this.$changedLines.firstRow > this.layerConfig.lastRow || this.$changedLines.lastRow < this.layerConfig.firstRow || this.$loop.schedule(this.CHANGE_LINES)
				}, this.onChangeTabSize = function() {
					this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this.$textLayer.onChangeTabSize()
				}, this.updateText = function() {
					this.$loop.schedule(this.CHANGE_TEXT)
				}, this.updateFull = function(e) {
					e ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop.schedule(this.CHANGE_FULL)
				}, this.updateFontSize = function() {
					this.$textLayer.checkForSizeChanges()
				}, this.onResize = function(e, t, n, i) {
					var o = this.CHANGE_SIZE,
						s = this.$size;
					if (!(this.resizing > 2)) {
						if (this.resizing > 1 ? this.resizing++ : this.resizing = e ? 1 : 0, i || (i = r.getInnerHeight(this.container)), (e || s.height != i) && (s.height = i, this.scroller.style.height = i + "px", s.scrollerHeight = this.scroller.clientHeight, this.scrollBar.setHeight(s.scrollerHeight), this.session && (this.session.setScrollTop(this.getScrollTop()), o |= this.CHANGE_FULL)), n || (n = r.getInnerWidth(this.container)), e || this.resizing > 1 || s.width != n) {
							s.width = n;
							var t = this.showGutter ? this.$gutter.offsetWidth : 0;
							this.scroller.style.left = t + "px", s.scrollerWidth = Math.max(0, n - t - this.scrollBar.getWidth()), this.scroller.style.right = this.scrollBar.getWidth() + "px", (this.session.getUseWrapMode() && this.adjustWrapLimit() || e) && (o |= this.CHANGE_FULL)
						}
						e ? this.$renderChanges(o, !0) : this.$loop.schedule(o), e && delete this.resizing
					}
				}, this.onGutterResize = function() {
					var e = this.$size.width,
						t = this.showGutter ? this.$gutter.offsetWidth : 0;
					this.scroller.style.left = t + "px", this.$size.scrollerWidth = Math.max(0, e - t - this.scrollBar.getWidth()), this.session.getUseWrapMode() && this.adjustWrapLimit() && this.$loop.schedule(this.CHANGE_FULL)
				}, this.adjustWrapLimit = function() {
					var e = this.$size.scrollerWidth - 2 * this.$padding,
						t = Math.floor(e / this.characterWidth);
					return this.session.adjustWrapLimit(t)
				}, this.setAnimatedScroll = function(e) {
					this.$animatedScroll = e
				}, this.getAnimatedScroll = function() {
					return this.$animatedScroll
				}, this.setShowInvisibles = function(e) {
					this.$textLayer.setShowInvisibles(e) && this.$loop.schedule(this.CHANGE_TEXT)
				}, this.getShowInvisibles = function() {
					return this.$textLayer.showInvisibles
				}, this.getDisplayIndentGuides = function() {
					return this.$textLayer.displayIndentGuides
				}, this.setDisplayIndentGuides = function(e) {
					this.$textLayer.setDisplayIndentGuides(e) && this.$loop.schedule(this.CHANGE_TEXT)
				}, this.$showPrintMargin = !0, this.setShowPrintMargin = function(e) {
					this.$showPrintMargin = e, this.$updatePrintMargin()
				}, this.getShowPrintMargin = function() {
					return this.$showPrintMargin
				}, this.$printMarginColumn = 80, this.setPrintMarginColumn = function(e) {
					this.$printMarginColumn = e, this.$updatePrintMargin()
				}, this.getPrintMarginColumn = function() {
					return this.$printMarginColumn
				}, this.getShowGutter = function() {
					return this.showGutter
				}, this.setShowGutter = function(e) {
					this.showGutter !== e && (this.$gutter.style.display = e ? "block" : "none", this.showGutter = e, this.onResize(!0))
				}, this.getFadeFoldWidgets = function() {
					return r.hasCssClass(this.$gutter, "ace_fade-fold-widgets")
				}, this.setFadeFoldWidgets = function(e) {
					e ? r.addCssClass(this.$gutter, "ace_fade-fold-widgets") : r.removeCssClass(this.$gutter, "ace_fade-fold-widgets")
				}, this.$highlightGutterLine = !1, this.setHighlightGutterLine = function(e) {
					if (this.$highlightGutterLine != e) {
						if (this.$highlightGutterLine = e, !this.$gutterLineHighlight) return this.$gutterLineHighlight = r.createElement("div"), this.$gutterLineHighlight.className = "ace_gutter-active-line", this.$gutter.appendChild(this.$gutterLineHighlight), void 0;
						this.$gutterLineHighlight.style.display = e ? "" : "none", this.$cursorLayer.$pixelPos && this.$updateGutterLineHighlight()
					}
				}, this.getHighlightGutterLine = function() {
					return this.$highlightGutterLine
				}, this.$updateGutterLineHighlight = function() {
					this.$gutterLineHighlight.style.top = this.$cursorLayer.$pixelPos.top - this.layerConfig.offset + "px", this.$gutterLineHighlight.style.height = this.layerConfig.lineHeight + "px"
				}, this.$updatePrintMargin = function() {
					if (this.$showPrintMargin || this.$printMarginEl) {
						if (!this.$printMarginEl) {
							var e = r.createElement("div");
							e.className = "ace_layer ace_print-margin-layer", this.$printMarginEl = r.createElement("div"), this.$printMarginEl.className = "ace_print-margin", e.appendChild(this.$printMarginEl), this.content.insertBefore(e, this.content.firstChild)
						}
						var t = this.$printMarginEl.style;
						t.left = this.characterWidth * this.$printMarginColumn + this.$padding + "px", t.visibility = this.$showPrintMargin ? "visible" : "hidden"
					}
				}, this.getContainerElement = function() {
					return this.container
				}, this.getMouseEventTarget = function() {
					return this.content
				}, this.getTextAreaContainer = function() {
					return this.container
				}, this.$moveTextAreaToCursor = function() {
					if (this.$keepTextAreaAtCursor) {
						var e = this.$cursorLayer.$pixelPos.top,
							t = this.$cursorLayer.$pixelPos.left;
						if (e -= this.layerConfig.offset, !(0 > e || e > this.layerConfig.height - this.lineHeight)) {
							var n = this.characterWidth;
							this.$composition && (n += this.textarea.scrollWidth), t -= this.scrollLeft, t > this.$size.scrollerWidth - n && (t = this.$size.scrollerWidth - n), this.showGutter && (t += this.$gutterLayer.gutterWidth), this.textarea.style.height = this.lineHeight + "px", this.textarea.style.width = n + "px", this.textarea.style.left = t + "px", this.textarea.style.top = e - 1 + "px"
						}
					}
				}, this.getFirstVisibleRow = function() {
					return this.layerConfig.firstRow
				}, this.getFirstFullyVisibleRow = function() {
					return this.layerConfig.firstRow + (0 === this.layerConfig.offset ? 0 : 1)
				}, this.getLastFullyVisibleRow = function() {
					var e = Math.floor((this.layerConfig.height + this.layerConfig.offset) / this.layerConfig.lineHeight);
					return this.layerConfig.firstRow - 1 + e
				}, this.getLastVisibleRow = function() {
					return this.layerConfig.lastRow
				}, this.$padding = null, this.setPadding = function(e) {
					this.$padding = e, this.$textLayer.setPadding(e), this.$cursorLayer.setPadding(e), this.$markerFront.setPadding(e), this.$markerBack.setPadding(e), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin()
				}, this.getHScrollBarAlwaysVisible = function() {
					return this.$horizScrollAlwaysVisible
				}, this.setHScrollBarAlwaysVisible = function(e) {
					this.$horizScrollAlwaysVisible != e && (this.$horizScrollAlwaysVisible = e, this.$horizScrollAlwaysVisible && this.$horizScroll || this.$loop.schedule(this.CHANGE_SCROLL))
				}, this.$updateScrollBar = function() {
					this.scrollBar.setInnerHeight(this.layerConfig.maxHeight), this.scrollBar.setScrollTop(this.scrollTop)
				}, this.$renderChanges = function(e, t) {
					if (t || e && this.session && this.container.offsetWidth) {
						if ((e & this.CHANGE_FULL || e & this.CHANGE_SIZE || e & this.CHANGE_TEXT || e & this.CHANGE_LINES || e & this.CHANGE_SCROLL) && this.$computeLayerConfig(), e & this.CHANGE_H_SCROLL) {
							this.scroller.scrollLeft = this.scrollLeft;
							var n = this.scroller.scrollLeft;
							this.scrollLeft = n, this.session.setScrollLeft(n), this.scroller.className = 0 == this.scrollLeft ? "ace_scroller" : "ace_scroller ace_scroll-left"
						}
						if (e & this.CHANGE_FULL) return this.$textLayer.checkForSizeChanges(), this.$updateScrollBar(), this.$textLayer.update(this.layerConfig), this.showGutter && this.$gutterLayer.update(this.layerConfig), this.$markerBack.update(this.layerConfig), this.$markerFront.update(this.layerConfig), this.$cursorLayer.update(this.layerConfig), this.$moveTextAreaToCursor(), this.$highlightGutterLine && this.$updateGutterLineHighlight(), void 0;
						if (e & this.CHANGE_SCROLL) return this.$updateScrollBar(), e & this.CHANGE_TEXT || e & this.CHANGE_LINES ? this.$textLayer.update(this.layerConfig) : this.$textLayer.scrollLines(this.layerConfig), this.showGutter && this.$gutterLayer.update(this.layerConfig), this.$markerBack.update(this.layerConfig), this.$markerFront.update(this.layerConfig), this.$cursorLayer.update(this.layerConfig), this.$moveTextAreaToCursor(), this.$highlightGutterLine && this.$updateGutterLineHighlight(), void 0;
						e & this.CHANGE_TEXT ? (this.$textLayer.update(this.layerConfig), this.showGutter && this.$gutterLayer.update(this.layerConfig)) : e & this.CHANGE_LINES ? (this.$updateLines() || e & this.CHANGE_GUTTER && this.showGutter) && this.$gutterLayer.update(this.layerConfig) : (e & this.CHANGE_TEXT || e & this.CHANGE_GUTTER) && this.showGutter && this.$gutterLayer.update(this.layerConfig), e & this.CHANGE_CURSOR && (this.$cursorLayer.update(this.layerConfig), this.$moveTextAreaToCursor(), this.$highlightGutterLine && this.$updateGutterLineHighlight()), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(this.layerConfig), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(this.layerConfig), e & this.CHANGE_SIZE && this.$updateScrollBar()
					}
				}, this.$computeLayerConfig = function() {
					var e = this.session,
						t = this.scrollTop % this.lineHeight,
						n = this.$size.scrollerHeight + this.lineHeight,
						r = this.$getLongestLine(),
						i = this.$horizScrollAlwaysVisible || 0 > this.$size.scrollerWidth - r,
						o = this.$horizScroll !== i;
					this.$horizScroll = i, o && (this.scroller.style.overflowX = "hidden", i || this.session.setScrollLeft(0));
					var s = this.session.getScreenLength() * this.lineHeight;
					this.session.setScrollTop(Math.max(0, Math.min(this.scrollTop, s - this.$size.scrollerHeight)));
					var a, l, c = Math.ceil(n / this.lineHeight) - 1,
						u = Math.max(0, Math.round((this.scrollTop - t) / this.lineHeight)),
						h = u + c,
						d = this.lineHeight;
					u = e.screenToDocumentRow(u, 0);
					var f = e.getFoldLine(u);
					f && (u = f.start.row), a = e.documentToScreenRow(u, 0), l = e.getRowLength(u) * d, h = Math.min(e.screenToDocumentRow(h, 0), e.getLength() - 1), n = this.$size.scrollerHeight + e.getRowLength(h) * d + l, t = this.scrollTop - a * d, this.layerConfig = {
						width: r,
						padding: this.$padding,
						firstRow: u,
						firstRowScreen: a,
						lastRow: h,
						lineHeight: d,
						characterWidth: this.characterWidth,
						minHeight: n,
						maxHeight: s,
						offset: t,
						height: this.$size.scrollerHeight
					}, this.$gutterLayer.element.style.marginTop = -t + "px", this.content.style.marginTop = -t + "px", this.content.style.width = r + 2 * this.$padding + "px", this.content.style.height = n + "px", o && this.onResize(!0)
				}, this.$updateLines = function() {
					var e = this.$changedLines.firstRow,
						t = this.$changedLines.lastRow;
					this.$changedLines = null;
					var n = this.layerConfig;
					return e > n.lastRow + 1 || n.firstRow > t ? void 0 : 1 / 0 === t ? (this.showGutter && this.$gutterLayer.update(n), this.$textLayer.update(n), void 0) : (this.$textLayer.updateLines(n, e, t), !0)
				}, this.$getLongestLine = function() {
					var e = this.session.getScreenWidth();
					return this.$textLayer.showInvisibles && (e += 1), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(e * this.characterWidth))
				}, this.updateFrontMarkers = function() {
					this.$markerFront.setMarkers(this.session.getMarkers(!0)), this.$loop.schedule(this.CHANGE_MARKER_FRONT)
				}, this.updateBackMarkers = function() {
					this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK)
				}, this.addGutterDecoration = function(e, t) {
					this.$gutterLayer.addGutterDecoration(e, t)
				}, this.removeGutterDecoration = function(e, t) {
					this.$gutterLayer.removeGutterDecoration(e, t)
				}, this.updateBreakpoints = function() {
					this.$loop.schedule(this.CHANGE_GUTTER)
				}, this.setAnnotations = function(e) {
					this.$gutterLayer.setAnnotations(e), this.$loop.schedule(this.CHANGE_GUTTER)
				}, this.updateCursor = function() {
					this.$loop.schedule(this.CHANGE_CURSOR)
				}, this.hideCursor = function() {
					this.$cursorLayer.hideCursor()
				}, this.showCursor = function() {
					this.$cursorLayer.showCursor()
				}, this.scrollSelectionIntoView = function(e, t, n) {
					this.scrollCursorIntoView(e, n), this.scrollCursorIntoView(t, n)
				}, this.scrollCursorIntoView = function(e, t) {
					if (0 !== this.$size.scrollerHeight) {
						var n = this.$cursorLayer.getPixelPosition(e),
							r = n.left,
							i = n.top;
						this.scrollTop > i ? (t && (i -= t * this.$size.scrollerHeight), this.session.setScrollTop(i)) : this.scrollTop + this.$size.scrollerHeight < i + this.lineHeight && (t && (i += t * this.$size.scrollerHeight), this.session.setScrollTop(i + this.lineHeight - this.$size.scrollerHeight));
						var o = this.scrollLeft;
						o > r ? (this.$padding + 2 * this.layerConfig.characterWidth > r && (r = 0), this.session.setScrollLeft(r)) : o + this.$size.scrollerWidth < r + this.characterWidth && this.session.setScrollLeft(Math.round(r + this.characterWidth - this.$size.scrollerWidth))
					}
				}, this.getScrollTop = function() {
					return this.session.getScrollTop()
				}, this.getScrollLeft = function() {
					return this.session.getScrollLeft()
				}, this.getScrollTopRow = function() {
					return this.scrollTop / this.lineHeight
				}, this.getScrollBottomRow = function() {
					return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1)
				}, this.scrollToRow = function(e) {
					this.session.setScrollTop(e * this.lineHeight)
				}, this.alignCursor = function(e, t) {
					"number" == typeof e && (e = {
						row: e,
						column: 0
					});
					var n = this.$cursorLayer.getPixelPosition(e),
						r = this.$size.scrollerHeight - this.lineHeight,
						i = n.top - r * (t || 0);
					return this.session.setScrollTop(i), i
				}, this.STEPS = 8, this.$calcSteps = function(e, t) {
					var n = 0,
						r = this.STEPS,
						i = [],
						o = function(e, t, n) {
							return n * (Math.pow(e - 1, 3) + 1) + t
						};
					for (n = 0; r > n; ++n) i.push(o(n / this.STEPS, e, t - e));
					return i
				}, this.scrollToLine = function(e, t, n, r) {
					var i = this.$cursorLayer.getPixelPosition({
						row: e,
						column: 0
					}),
						o = i.top;
					t && (o -= this.$size.scrollerHeight / 2);
					var s = this.scrollTop;
					this.session.setScrollTop(o), n !== !1 && this.animateScrolling(s, r)
				}, this.animateScrolling = function(e, t) {
					var n = this.scrollTop;
					if (this.$animatedScroll && 1e5 > Math.abs(e - n)) {
						var r = this,
							i = r.$calcSteps(e, n);
						this.$inScrollAnimation = !0, clearInterval(this.$timer), r.session.setScrollTop(i.shift()), this.$timer = setInterval(function() {
							i.length ? (r.session.setScrollTop(i.shift()), r.session.$scrollTop = n) : null != n ? (r.session.$scrollTop = -1, r.session.setScrollTop(n), n = null) : (r.$timer = clearInterval(r.$timer), r.$inScrollAnimation = !1, t && t())
						}, 10)
					}
				}, this.scrollToY = function(e) {
					this.scrollTop !== e && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = e)
				}, this.scrollToX = function(e) {
					0 > e && (e = 0), this.scrollLeft !== e && (this.scrollLeft = e), this.$loop.schedule(this.CHANGE_H_SCROLL)
				}, this.scrollBy = function(e, t) {
					t && this.session.setScrollTop(this.session.getScrollTop() + t), e && this.session.setScrollLeft(this.session.getScrollLeft() + e)
				}, this.isScrollableBy = function(e, t) {
					return 0 > t && this.session.getScrollTop() > 0 ? !0 : t > 0 && this.session.getScrollTop() + this.$size.scrollerHeight < this.layerConfig.maxHeight ? !0 : void 0
				}, this.pixelToScreenCoordinates = function(e, t) {
					var n = this.scroller.getBoundingClientRect(),
						r = (e + this.scrollLeft - n.left - this.$padding) / this.characterWidth,
						i = Math.floor((t + this.scrollTop - n.top) / this.lineHeight),
						o = Math.round(r);
					return {
						row: i,
						column: o,
						side: r - o > 0 ? 1 : -1
					}
				}, this.screenToTextCoordinates = function(e, t) {
					var n = this.scroller.getBoundingClientRect(),
						r = Math.round((e + this.scrollLeft - n.left - this.$padding) / this.characterWidth),
						i = Math.floor((t + this.scrollTop - n.top) / this.lineHeight);
					return this.session.screenToDocumentPosition(i, Math.max(r, 0))
				}, this.textToScreenCoordinates = function(e, t) {
					var n = this.scroller.getBoundingClientRect(),
						r = this.session.documentToScreenPosition(e, t),
						i = this.$padding + Math.round(r.column * this.characterWidth),
						o = r.row * this.lineHeight;
					return {
						pageX: n.left + i - this.scrollLeft,
						pageY: n.top + o - this.scrollTop
					}
				}, this.visualizeFocus = function() {
					r.addCssClass(this.container, "ace_focus")
				}, this.visualizeBlur = function() {
					r.removeCssClass(this.container, "ace_focus")
				}, this.showComposition = function() {
					this.$composition || (this.$composition = {
						keepTextAreaAtCursor: this.$keepTextAreaAtCursor,
						cssText: this.textarea.style.cssText
					}), this.$keepTextAreaAtCursor = !0, r.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = "", this.$moveTextAreaToCursor()
				}, this.setCompositionText = function() {
					this.$moveTextAreaToCursor()
				}, this.hideComposition = function() {
					this.$composition && (r.removeCssClass(this.textarea, "ace_composition"), this.$keepTextAreaAtCursor = this.$composition.keepTextAreaAtCursor, this.textarea.style.cssText = this.$composition.cssText, this.$composition = null)
				}, this._loadTheme = function(e, t) {
					return s.get("packaged") ? (a.loadScript(s.moduleUrl(e, "theme"), t), void 0) : t()
				}, this.setTheme = function(t) {
					function n(e) {
						r.importCssString(e.cssText, e.cssClass, i.container.ownerDocument), i.theme && r.removeCssClass(i.container, i.theme.cssClass), i.$theme = e.cssClass, i.theme = e, r.addCssClass(i.container, e.cssClass), r.setCssClass(i.container, "ace_dark", e.isDark);
						var t = e.padding || 4;
						i.$padding && t != i.$padding && i.setPadding(t), i.$size && (i.$size.width = 0, i.onResize()), i._dispatchEvent("themeLoaded", {
							theme: e
						})
					}
					var i = this;
					if (this.$themeValue = t, i._dispatchEvent("themeChange", {
						theme: t
					}), t && "string" != typeof t) n(t);
					else {
						var o, s = t || "ace/theme/textmate";
						try {
							o = e(s)
						} catch (a) {}
						if (o) return n(o);
						i._loadTheme(s, function() {
							e([s], function(e) {
								i.$themeValue === t && n(e)
							})
						})
					}
				}, this.getTheme = function() {
					return this.$themeValue
				}, this.setStyle = function(e, t) {
					r.setCssClass(this.container, e, 0 != t)
				}, this.unsetStyle = function(e) {
					r.removeCssClass(this.container, e)
				}, this.destroy = function() {
					this.$textLayer.destroy(), this.$cursorLayer.destroy()
				}
			}).call(m.prototype), t.VirtualRenderer = m
		}), define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter"], function(e, t) {
			var n = e("../lib/dom"),
				r = e("../lib/oop"),
				i = e("../lib/lang"),
				o = e("../lib/event_emitter").EventEmitter,
				s = function(e) {
					this.element = n.createElement("div"), this.element.className = "ace_layer ace_gutter-layer", e.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0, this.$annotations = [], this.$updateAnnotations = this.$updateAnnotations.bind(this)
				};
			(function() {
				r.implement(this, o), this.setSession = function(e) {
					this.session && this.session.removeEventListener("change", this.$updateAnnotations), this.session = e, e.on("change", this.$updateAnnotations)
				}, this.addGutterDecoration = function(e, t) {
					window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(e, t)
				}, this.removeGutterDecoration = function(e, t) {
					window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(e, t)
				}, this.setAnnotations = function(e) {
					this.$annotations = [];
					for (var t, n, r = 0; e.length > r; r++) {
						var o = e[r],
							n = o.row,
							t = this.$annotations[n];
						t || (t = this.$annotations[n] = {
							text: []
						});
						var s = o.text;
						s = s ? i.escapeHTML(s) : o.html || "", -1 === t.text.indexOf(s) && t.text.push(s);
						var a = o.type;
						"error" == a ? t.className = " ace_error" : "warning" == a && " ace_error" != t.className ? t.className = " ace_warning" : "info" != a || t.className || (t.className = " ace_info")
					}
				}, this.$updateAnnotations = function(e) {
					if (this.$annotations.length) {
						var t = e.data,
							n = t.range,
							r = n.start.row,
							i = n.end.row - r;
						if (0 === i);
						else if ("removeText" == t.action || "removeLines" == t.action) this.$annotations.splice(r, i + 1, null);
						else {
							var o = Array(i + 1);
							o.unshift(r, 1), this.$annotations.splice.apply(this.$annotations, o)
						}
					}
				}, this.update = function(e) {
					for (var t = {
						className: ""
					}, r = [], i = e.firstRow, o = e.lastRow, s = this.session.getNextFoldLine(i), a = s ? s.start.row : 1 / 0, l = this.$showFoldWidgets && this.session.foldWidgets, c = this.session.$breakpoints, u = this.session.$decorations, h = 0;;) {
						if (i > a && (i = s.end.row + 1, s = this.session.getNextFoldLine(i, s), a = s ? s.start.row : 1 / 0), i > o) break;
						var d = this.$annotations[i] || t;
						if (r.push("<div class='ace_gutter-cell ", c[i] || "", u[i] || "", d.className, "' style='height:", this.session.getRowLength(i) * e.lineHeight, "px;'>", h = i + 1), l) {
							var f = l[i];
							null == f && (f = l[i] = this.session.getFoldWidget(i)), f && r.push("<span class='ace_fold-widget ace_", f, "start" == f && i == a && s.end.row > i ? " ace_closed" : " ace_open", "' style='height:", e.lineHeight, "px", "'></span>")
						}
						r.push("</div>"), i++
					}
					this.element = n.setInnerHtml(this.element, r.join("")), this.element.style.height = e.minHeight + "px", this.session.$useWrapMode && (h = this.session.getLength());
					var p = ("" + h).length * e.characterWidth,
						g = this.$padding || this.$computePadding();
					p += g.left + g.right, p !== this.gutterWidth && (this.gutterWidth = p, this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._emit("changeGutterWidth", p))
				}, this.$showFoldWidgets = !0, this.setShowFoldWidgets = function(e) {
					e ? n.addCssClass(this.element, "ace_folding-enabled") : n.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = e, this.$padding = null
				}, this.getShowFoldWidgets = function() {
					return this.$showFoldWidgets
				}, this.$computePadding = function() {
					if (!this.element.firstChild) return {
							left: 0,
							right: 0
					};
					var e = n.computedStyle(this.element.firstChild);
					return this.$padding = {}, this.$padding.left = parseInt(e.paddingLeft) + 1, this.$padding.right = parseInt(e.paddingRight), this.$padding
				}, this.getRegion = function(e) {
					var t = this.$padding || this.$computePadding(),
						n = this.element.getBoundingClientRect();
					return e.x < t.left + n.left ? "markers" : this.$showFoldWidgets && e.x > n.right - t.right ? "foldWidgets" : void 0
				}
			}).call(s.prototype), t.Gutter = s
		}), define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], function(e, t) {
			var n = e("../range").Range,
				r = e("../lib/dom"),
				i = function(e) {
					this.element = r.createElement("div"), this.element.className = "ace_layer ace_marker-layer", e.appendChild(this.element)
				};
			(function() {
				this.$padding = 0, this.setPadding = function(e) {
					this.$padding = e
				}, this.setSession = function(e) {
					this.session = e
				}, this.setMarkers = function(e) {
					this.markers = e
				}, this.update = function(e) {
					var e = e || this.config;
					if (e) {
						this.config = e;
						var t = [];
						for (var n in this.markers) {
							var i = this.markers[n];
							if (i.range) {
								var o = i.range.clipRows(e.firstRow, e.lastRow);
								if (!o.isEmpty()) if (o = o.toScreenRange(this.session), i.renderer) {
										var s = this.$getTop(o.start.row, e),
											a = this.$padding + o.start.column * e.characterWidth;
										i.renderer(t, o, a, s, e)
									} else "fullLine" == i.type ? this.drawFullLineMarker(t, o, i.clazz, e) : o.isMultiLine() ? "text" == i.type ? this.drawTextMarker(t, o, i.clazz, e) : this.drawMultiLineMarker(t, o, i.clazz, e) : this.drawSingleLineMarker(t, o, i.clazz + " ace_start", e)
							} else i.update(t, this, this.session, e)
						}
						this.element = r.setInnerHtml(this.element, t.join(""))
					}
				}, this.$getTop = function(e, t) {
					return (e - t.firstRowScreen) * t.lineHeight
				}, this.drawTextMarker = function(e, t, r, i) {
					var o = t.start.row,
						s = new n(o, t.start.column, o, this.session.getScreenLastRowColumn(o));
					for (this.drawSingleLineMarker(e, s, r + " ace_start", i, 1, "text"), o = t.end.row, s = new n(o, 0, o, t.end.column), this.drawSingleLineMarker(e, s, r, i, 0, "text"), o = t.start.row + 1; t.end.row > o; o++) s.start.row = o, s.end.row = o, s.end.column = this.session.getScreenLastRowColumn(o), this.drawSingleLineMarker(e, s, r, i, 1, "text")
				}, this.drawMultiLineMarker = function(e, t, n, r) {
					var i = this.$padding,
						o = r.lineHeight,
						s = this.$getTop(t.start.row, r),
						a = i + t.start.column * r.characterWidth;
					e.push("<div class='", n, " ace_start' style='", "height:", o, "px;", "right:0;", "top:", s, "px;", "left:", a, "px;'></div>"), s = this.$getTop(t.end.row, r);
					var l = t.end.column * r.characterWidth;
					e.push("<div class='", n, "' style='", "height:", o, "px;", "width:", l, "px;", "top:", s, "px;", "left:", i, "px;'></div>"), o = (t.end.row - t.start.row - 1) * r.lineHeight, 0 > o || (s = this.$getTop(t.start.row + 1, r), e.push("<div class='", n, "' style='", "height:", o, "px;", "right:0;", "top:", s, "px;", "left:", i, "px;'></div>"))
				}, this.drawSingleLineMarker = function(e, t, n, r, i) {
					var o = r.lineHeight,
						s = (t.end.column + (i || 0) - t.start.column) * r.characterWidth,
						a = this.$getTop(t.start.row, r),
						l = this.$padding + t.start.column * r.characterWidth;
					e.push("<div class='", n, "' style='", "height:", o, "px;", "width:", s, "px;", "top:", a, "px;", "left:", l, "px;'></div>")
				}, this.drawFullLineMarker = function(e, t, n, r) {
					var i = this.$getTop(t.start.row, r),
						o = r.lineHeight;
					t.start.row != t.end.row && (o += this.$getTop(t.end.row, r) - i), e.push("<div class='", n, "' style='", "height:", o, "px;", "top:", i, "px;", "left:0;right:0;'></div>")
				}
			}).call(i.prototype), t.Marker = i
		}), define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/lib/event_emitter"], function(e, t) {
			var n = e("../lib/oop"),
				r = e("../lib/dom"),
				i = e("../lib/lang"),
				o = e("../lib/useragent"),
				s = e("../lib/event_emitter").EventEmitter,
				a = function(e) {
					this.element = r.createElement("div"), this.element.className = "ace_layer ace_text-layer", e.appendChild(this.element), this.$characterSize = {
						width: 0,
						height: 0
					}, this.checkForSizeChanges(), this.$pollSizeChanges()
				};
			(function() {
				n.implement(this, s), this.EOF_CHAR = "¶", this.EOL_CHAR = "¬", this.TAB_CHAR = "→", this.SPACE_CHAR = "·", this.$padding = 0, this.setPadding = function(e) {
					this.$padding = e, this.element.style.padding = "0 " + e + "px"
				}, this.getLineHeight = function() {
					return this.$characterSize.height || 1
				}, this.getCharacterWidth = function() {
					return this.$characterSize.width || 1
				}, this.checkForSizeChanges = function() {
					var e = this.$measureSizes();
					if (e && (this.$characterSize.width !== e.width || this.$characterSize.height !== e.height)) {
						this.$measureNode.style.fontWeight = "bold";
						var t = this.$measureSizes();
						this.$measureNode.style.fontWeight = "", this.$characterSize = e, this.allowBoldFonts = t && t.width === e.width && t.height === e.height, this._emit("changeCharacterSize", {
							data: e
						})
					}
				}, this.$pollSizeChanges = function() {
					var e = this;
					this.$pollSizeChangesTimer = setInterval(function() {
						e.checkForSizeChanges()
					}, 500)
				}, this.$fontStyles = {
					fontFamily: 1,
					fontSize: 1,
					fontWeight: 1,
					fontStyle: 1,
					lineHeight: 1
				}, this.$measureSizes = o.isIE || o.isOldGecko ? function() {
					var e = 1e3;
					if (!this.$measureNode) {
						var t = this.$measureNode = r.createElement("div"),
							n = t.style;
						if (n.width = n.height = "auto", n.left = n.top = 40 * -e + "px", n.visibility = "hidden", n.position = "fixed", n.overflow = "visible", n.whiteSpace = "nowrap", t.innerHTML = i.stringRepeat("Xy", e), this.element.ownerDocument.body) this.element.ownerDocument.body.appendChild(t);
						else {
							for (var o = this.element.parentNode; !r.hasCssClass(o, "ace_editor");) o = o.parentNode;
							o.appendChild(t)
						}
					}
					if (!this.element.offsetWidth) return null;
					var n = this.$measureNode.style,
						s = r.computedStyle(this.element);
					for (var a in this.$fontStyles) n[a] = s[a];
					var l = {
						height: this.$measureNode.offsetHeight,
						width: this.$measureNode.offsetWidth / (2 * e)
					};
					return 0 == l.width || 0 == l.height ? null : l
				} : function() {
					if (!this.$measureNode) {
						var e = this.$measureNode = r.createElement("div"),
							t = e.style;
						t.width = t.height = "auto", t.left = t.top = "-100px", t.visibility = "hidden", t.position = "fixed", t.overflow = "visible", t.whiteSpace = "nowrap", e.innerHTML = "X";
						for (var n = this.element.parentNode; n && !r.hasCssClass(n, "ace_editor");) n = n.parentNode;
						if (!n) return this.$measureNode = null;
						n.appendChild(e)
					}
					var i = this.$measureNode.getBoundingClientRect(),
						o = {
							height: i.height,
							width: i.width
						};
					return 0 == o.width || 0 == o.height ? null : o
				}, this.setSession = function(e) {
					this.session = e, this.$computeTabString()
				}, this.showInvisibles = !1, this.setShowInvisibles = function(e) {
					return this.showInvisibles == e ? !1 : (this.showInvisibles = e, this.$computeTabString(), !0)
				}, this.displayIndentGuides = !0, this.setDisplayIndentGuides = function(e) {
					return this.displayIndentGuides == e ? !1 : (this.displayIndentGuides = e, this.$computeTabString(), !0)
				}, this.$tabStrings = [], this.onChangeTabSize = this.$computeTabString = function() {
					var e = this.session.getTabSize();
					this.tabSize = e;
					for (var t = this.$tabStrings = [0], n = 1; e + 1 > n; n++) this.showInvisibles ? t.push("<span class='ace_invisible'>" + this.TAB_CHAR + Array(n).join("&#160;") + "</span>") : t.push(Array(n + 1).join("&#160;"));
					if (this.displayIndentGuides) {
						this.$indentGuideRe = /\s\S| \t|\t |\s$/;
						var r = "ace_indent-guide",
							i = Array(this.tabSize + 1).join("&#160;"),
							o = i;
						this.showInvisibles && (r += " ace_invisible", o = this.TAB_CHAR + i.substr(6)), this.$tabStrings[" "] = "<span class='" + r + "'>" + i + "</span>", this.$tabStrings["	"] = "<span class='" + r + "'>" + o + "</span>"
					}
				}, this.updateLines = function(e, t, n) {
					(this.config.lastRow != e.lastRow || this.config.firstRow != e.firstRow) && this.scrollLines(e), this.config = e;
					for (var i = Math.max(t, e.firstRow), o = Math.min(n, e.lastRow), s = this.element.childNodes, a = 0, l = e.firstRow; i > l; l++) {
						var c = this.session.getFoldLine(l);
						if (c) {
							if (c.containsRow(i)) {
								i = c.start.row;
								break
							}
							l = c.end.row
						}
						a++
					}
					for (var l = i, c = this.session.getNextFoldLine(l), u = c ? c.start.row : 1 / 0;;) {
						if (l > u && (l = c.end.row + 1, c = this.session.getNextFoldLine(l, c), u = c ? c.start.row : 1 / 0), l > o) break;
						var h = s[a++];
						if (h) {
							var d = [];
							this.$renderLine(d, l, !this.$useLineGroups(), l == u ? c : !1), r.setInnerHtml(h, d.join(""))
						}
						l++
					}
				}, this.scrollLines = function(e) {
					var t = this.config;
					if (this.config = e, !t || t.lastRow < e.firstRow) return this.update(e);
					if (e.lastRow < t.firstRow) return this.update(e);
					var n = this.element;
					if (t.firstRow < e.firstRow) for (var r = this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1); r > 0; r--) n.removeChild(n.firstChild);
					if (t.lastRow > e.lastRow) for (var r = this.session.getFoldedRowCount(e.lastRow + 1, t.lastRow); r > 0; r--) n.removeChild(n.lastChild);
					if (e.firstRow < t.firstRow) {
						var i = this.$renderLinesFragment(e, e.firstRow, t.firstRow - 1);
						n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i)
					}
					if (e.lastRow > t.lastRow) {
						var i = this.$renderLinesFragment(e, t.lastRow + 1, e.lastRow);
						n.appendChild(i)
					}
				}, this.$renderLinesFragment = function(e, t, n) {
					for (var i = this.element.ownerDocument.createDocumentFragment(), o = t, s = this.session.getNextFoldLine(o), a = s ? s.start.row : 1 / 0;;) {
						if (o > a && (o = s.end.row + 1, s = this.session.getNextFoldLine(o, s), a = s ? s.start.row : 1 / 0), o > n) break;
						var l = r.createElement("div"),
							c = [];
						if (this.$renderLine(c, o, !1, o == a ? s : !1), l.innerHTML = c.join(""), this.$useLineGroups()) l.className = "ace_line_group", i.appendChild(l);
						else for (var u = l.childNodes; u.length;) i.appendChild(u[0]);
						o++
					}
					return i
				}, this.update = function(e) {
					this.config = e;
					for (var t = [], n = e.firstRow, i = e.lastRow, o = n, s = this.session.getNextFoldLine(o), a = s ? s.start.row : 1 / 0;;) {
						if (o > a && (o = s.end.row + 1, s = this.session.getNextFoldLine(o, s), a = s ? s.start.row : 1 / 0), o > i) break;
						this.$useLineGroups() && t.push("<div class='ace_line_group'>"), this.$renderLine(t, o, !1, o == a ? s : !1), this.$useLineGroups() && t.push("</div>"), o++
					}
					this.element = r.setInnerHtml(this.element, t.join(""))
				}, this.$textToken = {
					text: !0,
					rparen: !0,
					lparen: !0
				}, this.$renderToken = function(e, t, n, r) {
					var i = this,
						o = /\t|&|<|( +)|([\x00-\x1f\x80-\xa0\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\u3000\uFEFF])|[\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]/g,
						s = function(e, n, r, o) {
							if (n) return Array(e.length + 1).join("&#160;");
							if ("&" == e) return "&#38;";
							if ("<" == e) return "&#60;";
							if ("	" == e) {
								var s = i.session.getScreenTabSize(t + o);
								return t += s - 1, i.$tabStrings[s]
							}
							if ("　" == e) {
								var a = i.showInvisibles ? "ace_cjk ace_invisible" : "ace_cjk",
									l = i.showInvisibles ? i.SPACE_CHAR : "";
								return t += 1, "<span class='" + a + "' style='width:" + 2 * i.config.characterWidth + "px'>" + l + "</span>"
							}
							return r ? "<span class='ace_invisible ace_invalid'>" + i.SPACE_CHAR + "</span>" : (t += 1, "<span class='ace_cjk' style='width:" + 2 * i.config.characterWidth + "px'>" + e + "</span>")
						}, a = r.replace(o, s);
					if (this.$textToken[n.type]) e.push(a);
					else {
						var l = "ace_" + n.type.replace(/\./g, " ace_"),
							c = "";
						"fold" == n.type && (c = " style='width:" + n.value.length * this.config.characterWidth + "px;' "), e.push("<span class='", l, "'", c, ">", a, "</span>")
					}
					return t + r.length
				}, this.renderIndentGuide = function(e, t) {
					var n = t.search(this.$indentGuideRe);
					return 0 >= n ? t : " " == t[0] ? (n -= n % this.tabSize, e.push(Array(n / this.tabSize + 1).join(this.$tabStrings[" "])), t.substr(n)) : "	" == t[0] ? (e.push(Array(n + 1).join(this.$tabStrings["	"])), t.substr(n)) : t
				}, this.$renderWrappedLine = function(e, t, n, r) {
					for (var i = 0, o = 0, s = n[0], a = 0, l = 0; t.length > l; l++) {
						var c = t[l],
							u = c.value;
						if (0 == l && this.displayIndentGuides) {
							if (i = u.length, u = this.renderIndentGuide(e, u), !u) continue;
							i -= u.length
						}
						if (s > i + u.length) a = this.$renderToken(e, a, c, u), i += u.length;
						else {
							for (; i + u.length >= s;) a = this.$renderToken(e, a, c, u.substring(0, s - i)), u = u.substring(s - i), i = s, r || e.push("</div>", "<div class='ace_line' style='height:", this.config.lineHeight, "px'>"), o++, a = 0, s = n[o] || Number.MAX_VALUE;
							0 != u.length && (i += u.length, a = this.$renderToken(e, a, c, u))
						}
					}
				}, this.$renderSimpleLine = function(e, t) {
					var n = 0,
						r = t[0],
						i = r.value;
					this.displayIndentGuides && (i = this.renderIndentGuide(e, i)), i && (n = this.$renderToken(e, n, r, i));
					for (var o = 1; t.length > o; o++) r = t[o], i = r.value, n = this.$renderToken(e, n, r, i)
				}, this.$renderLine = function(e, t, n, r) {
					if (r || 0 == r || (r = this.session.getFoldLine(t)), r) var i = this.$getFoldLineTokens(t, r);
					else var i = this.session.getTokens(t); if (n || e.push("<div class='ace_line' style='height:", this.config.lineHeight, "px'>"), i.length) {
						var o = this.session.getRowSplitData(t);
						o && o.length ? this.$renderWrappedLine(e, i, o, n) : this.$renderSimpleLine(e, i)
					}
					this.showInvisibles && (r && (t = r.end.row), e.push("<span class='ace_invisible'>", t == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, "</span>")), n || e.push("</div>")
				}, this.$getFoldLineTokens = function(e, t) {
					function n(e, t, n) {
						for (var r = 0, o = 0; t > o + e[r].value.length;) if (o += e[r].value.length, r++, r == e.length) return;
						if (o != t) {
							var s = e[r].value.substring(t - o);
							s.length > n - t && (s = s.substring(0, n - t)), i.push({
								type: e[r].type,
								value: s
							}), o = t + s.length, r += 1
						}
						for (; n > o && e.length > r;) {
							var s = e[r].value;
							s.length + o > n ? i.push({
								type: e[r].type,
								value: s.substring(0, n - o)
							}) : i.push(e[r]), o += s.length, r += 1
						}
					}
					var r = this.session,
						i = [],
						o = r.getTokens(e);
					return t.walk(function(e, t, s, a, l) {
						null != e ? i.push({
							type: "fold",
							value: e
						}) : (l && (o = r.getTokens(t)), o.length && n(o, a, s))
					}, t.end.row, this.session.getLine(t.end.row).length), i
				}, this.$useLineGroups = function() {
					return this.session.getUseWrapMode()
				}, this.destroy = function() {
					clearInterval(this.$pollSizeChangesTimer), this.$measureNode && this.$measureNode.parentNode.removeChild(this.$measureNode), delete this.$measureNode
				}
			}).call(a.prototype), t.Text = a
		}), define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], function(e, t) {
			var n = e("../lib/dom"),
				r = function(e) {
					this.element = n.createElement("div"), this.element.className = "ace_layer ace_cursor-layer", e.appendChild(this.element), this.isVisible = !1, this.isBlinking = !0, this.blinkInterval = 1e3, this.smoothBlinking = !1, this.cursors = [], this.cursor = this.addCursor(), n.addCssClass(this.element, "ace_hidden-cursors")
				};
			(function() {
				this.$padding = 0, this.setPadding = function(e) {
					this.$padding = e
				}, this.setSession = function(e) {
					this.session = e
				}, this.setBlinking = function(e) {
					e != this.isBlinking && (this.isBlinking = e, this.restartTimer())
				}, this.setBlinkInterval = function(e) {
					e != this.blinkInterval && (this.blinkInterval = e, this.restartTimer())
				}, this.setSmoothBlinking = function(e) {
					e != this.smoothBlinking && (this.smoothBlinking = e, e ? n.addCssClass(this.element, "ace_smooth-blinking") : n.removeCssClass(this.element, "ace_smooth-blinking"), this.restartTimer())
				}, this.addCursor = function() {
					var e = n.createElement("div");
					return e.className = "ace_cursor", this.element.appendChild(e), this.cursors.push(e), e
				}, this.removeCursor = function() {
					if (this.cursors.length > 1) {
						var e = this.cursors.pop();
						return e.parentNode.removeChild(e), e
					}
				}, this.hideCursor = function() {
					this.isVisible = !1, n.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
				}, this.showCursor = function() {
					this.isVisible = !0, n.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
				}, this.restartTimer = function() {
					clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.smoothBlinking && n.removeCssClass(this.element, "ace_smooth-blinking");
					for (var e = this.cursors.length; e--;) this.cursors[e].style.opacity = "";
					if (this.isBlinking && this.blinkInterval && this.isVisible) {
						this.smoothBlinking && setTimeout(function() {
							n.addCssClass(this.element, "ace_smooth-blinking")
						}.bind(this));
						var t = function() {
							this.timeoutId = setTimeout(function() {
								for (var e = this.cursors.length; e--;) this.cursors[e].style.opacity = 0
							}.bind(this), .6 * this.blinkInterval)
						}.bind(this);
						this.intervalId = setInterval(function() {
							for (var e = this.cursors.length; e--;) this.cursors[e].style.opacity = "";
							t()
						}.bind(this), this.blinkInterval), t()
					}
				}, this.getPixelPosition = function(e, t) {
					if (!this.config || !this.session) return {
							left: 0,
							top: 0
					};
					e || (e = this.session.selection.getCursor());
					var n = this.session.documentToScreenPosition(e),
						r = this.$padding + n.column * this.config.characterWidth,
						i = (n.row - (t ? this.config.firstRowScreen : 0)) * this.config.lineHeight;
					return {
						left: r,
						top: i
					}
				}, this.update = function(e) {
					this.config = e;
					var t = this.session.$selectionMarkers,
						n = 0,
						r = 0;
					(void 0 === t || 0 === t.length) && (t = [{
							cursor: null
						}
					]);
					for (var n = t.length; n--;) {
						var i = this.getPixelPosition(t[n].cursor, !0);
						if (!((i.top > e.height + e.offset || i.top < -e.offset) && n > 1)) {
							var o = (this.cursors[r++] || this.addCursor()).style;
							o.left = i.left + "px", o.top = i.top + "px", o.width = e.characterWidth + "px", o.height = e.lineHeight + "px"
						}
					}
					for (; this.cursors.length > r;) this.removeCursor();
					var s = this.session.getOverwrite();
					this.$setOverwrite(s), this.$pixelPos = i, this.restartTimer()
				}, this.$setOverwrite = function(e) {
					e != this.overwrite && (this.overwrite = e, e ? n.addCssClass(this.element, "ace_overwrite-cursors") : n.removeCssClass(this.element, "ace_overwrite-cursors"))
				}, this.destroy = function() {
					clearInterval(this.intervalId), clearTimeout(this.timeoutId)
				}
			}).call(r.prototype), t.Cursor = r
		}), define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function(e, t) {
			var n = e("./lib/oop"),
				r = e("./lib/dom"),
				i = e("./lib/event"),
				o = e("./lib/event_emitter").EventEmitter,
				s = function(e) {
					this.element = r.createElement("div"), this.element.className = "ace_scrollbar", this.inner = r.createElement("div"), this.inner.className = "ace_scrollbar-inner", this.element.appendChild(this.inner), e.appendChild(this.element), this.width = r.scrollbarWidth(e.ownerDocument), this.element.style.width = (this.width || 15) + 5 + "px", i.addListener(this.element, "scroll", this.onScroll.bind(this))
				};
			(function() {
				n.implement(this, o), this.onScroll = function() {
					this.skipEvent || (this.scrollTop = this.element.scrollTop, this._emit("scroll", {
						data: this.scrollTop
					})), this.skipEvent = !1
				}, this.getWidth = function() {
					return this.width
				}, this.setHeight = function(e) {
					this.element.style.height = e + "px"
				}, this.setInnerHeight = function(e) {
					this.inner.style.height = e + "px"
				}, this.setScrollTop = function(e) {
					this.scrollTop != e && (this.skipEvent = !0, this.scrollTop = this.element.scrollTop = e)
				}
			}).call(s.prototype), t.ScrollBar = s
		}), define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], function(e, t) {
			var n = e("./lib/event"),
				r = function(e, t) {
					this.onRender = e, this.pending = !1, this.changes = 0, this.window = t || window
				};
			(function() {
				this.schedule = function(e) {
					if (this.changes = this.changes | e, !this.pending) {
						this.pending = !0;
						var t = this;
						n.nextFrame(function() {
							t.pending = !1;
							for (var e; e = t.changes;) t.changes = 0, t.onRender(e)
						}, this.window)
					}
				}
			}).call(r.prototype), t.RenderLoop = r
		}), define("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor"], function(e, t) {
			function n(e, t, n) {
				return p.$options.wrap = !0, p.$options.needle = t, p.$options.backwards = -1 == n, p.find(e)
			}
			function r(e, t) {
				return e.row == t.row && e.column == t.column
			}
			function i(e) {
				e.$onAddRange = e.$onAddRange.bind(e), e.$onRemoveRange = e.$onRemoveRange.bind(e), e.$onMultiSelect = e.$onMultiSelect.bind(e), e.$onSingleSelect = e.$onSingleSelect.bind(e), t.onSessionChange.call(e, e), e.on("changeSession", t.onSessionChange.bind(e)), e.on("mousedown", c), e.commands.addCommands(d.defaultCommands), o(e)
			}
			function o(e) {
				function t() {
					r && (i.style.cursor = "", r = !1)
				}
				var n = e.textInput.getElement(),
					r = !1,
					i = e.renderer.content;
				u.addListener(n, "keydown", function(e) {
					18 != e.keyCode || e.ctrlKey || e.shiftKey || e.metaKey ? r && (i.style.cursor = "") : r || (i.style.cursor = "crosshair", r = !0)
				}), u.addListener(n, "keyup", t), u.addListener(n, "blur", t)
			}
			var s = e("./range_list").RangeList,
				a = e("./range").Range,
				l = e("./selection").Selection,
				c = e("./mouse/multi_select_handler").onMouseDown,
				u = e("./lib/event"),
				h = e("./lib/lang"),
				d = e("./commands/multi_select_commands");
			t.commands = d.defaultCommands.concat(d.multiSelectCommands);
			var f = e("./search").Search,
				p = new f,
				g = e("./edit_session").EditSession;
			(function() {
				this.getSelectionMarkers = function() {
					return this.$selectionMarkers
				}
			}).call(g.prototype),
			function() {
				this.ranges = null, this.rangeList = null, this.addRange = function(e, t) {
					if (e) {
						if (!this.inMultiSelectMode && 0 == this.rangeCount) {
							var n = this.toOrientedRange();
							if (e.intersects(n)) return t || this.fromOrientedRange(e);
							this.rangeList.add(n), this.$onAddRange(n)
						}
						e.cursor || (e.cursor = e.end);
						var r = this.rangeList.add(e);
						return this.$onAddRange(e), r.length && this.$onRemoveRange(r), this.rangeCount > 1 && !this.inMultiSelectMode && (this._emit("multiSelect"), this.inMultiSelectMode = !0, this.session.$undoSelect = !1, this.rangeList.attach(this.session)), t || this.fromOrientedRange(e)
					}
				}, this.toSingleRange = function(e) {
					e = e || this.ranges[0];
					var t = this.rangeList.removeAll();
					t.length && this.$onRemoveRange(t), e && this.fromOrientedRange(e)
				}, this.substractPoint = function(e) {
					var t = this.rangeList.substractPoint(e);
					return t ? (this.$onRemoveRange(t), t[0]) : void 0
				}, this.mergeOverlappingRanges = function() {
					var e = this.rangeList.merge();
					e.length ? this.$onRemoveRange(e) : this.ranges[0] && this.fromOrientedRange(this.ranges[0])
				}, this.$onAddRange = function(e) {
					this.rangeCount = this.rangeList.ranges.length, this.ranges.unshift(e), this._emit("addRange", {
						range: e
					})
				}, this.$onRemoveRange = function(e) {
					if (this.rangeCount = this.rangeList.ranges.length, 1 == this.rangeCount && this.inMultiSelectMode) {
						var t = this.rangeList.ranges.pop();
						e.push(t), this.rangeCount = 0
					}
					for (var n = e.length; n--;) {
						var r = this.ranges.indexOf(e[n]);
						this.ranges.splice(r, 1)
					}
					this._emit("removeRange", {
						ranges: e
					}), 0 == this.rangeCount && this.inMultiSelectMode && (this.inMultiSelectMode = !1, this._emit("singleSelect"), this.session.$undoSelect = !0, this.rangeList.detach(this.session)), t = t || this.ranges[0], t && !t.isEqual(this.getRange()) && this.fromOrientedRange(t)
				}, this.$initRangeList = function() {
					this.rangeList || (this.rangeList = new s, this.ranges = [], this.rangeCount = 0)
				}, this.getAllRanges = function() {
					return this.rangeList.ranges.concat()
				}, this.splitIntoLines = function() {
					if (this.rangeCount > 1) {
						var e = this.rangeList.ranges,
							t = e[e.length - 1],
							n = a.fromPoints(e[0].start, t.end);
						this.toSingleRange(), this.setSelectionRange(n, t.cursor == t.start)
					} else {
						var n = this.getRange(),
							r = this.isBackwards(),
							i = n.start.row,
							o = n.end.row;
						if (i == o) {
							if (r) var s = n.end,
							l = n.start;
							else var s = n.start,
							l = n.end;
							return this.addRange(a.fromPoints(l, l)), this.addRange(a.fromPoints(s, s)), void 0
						}
						var c = [],
							u = this.getLineRange(i, !0);
						u.start.column = n.start.column, c.push(u);
						for (var h = i + 1; o > h; h++) c.push(this.getLineRange(h, !0));
						u = this.getLineRange(o, !0), u.end.column = n.end.column, c.push(u), c.forEach(this.addRange, this)
					}
				}, this.toggleBlockSelection = function() {
					if (this.rangeCount > 1) {
						var e = this.rangeList.ranges,
							t = e[e.length - 1],
							n = a.fromPoints(e[0].start, t.end);
						this.toSingleRange(), this.setSelectionRange(n, t.cursor == t.start)
					} else {
						var r = this.session.documentToScreenPosition(this.selectionLead),
							i = this.session.documentToScreenPosition(this.selectionAnchor),
							o = this.rectangularRangeBlock(r, i);
						o.forEach(this.addRange, this)
					}
				}, this.rectangularRangeBlock = function(e, t, n) {
					var i = [],
						o = e.column < t.column;
					if (o) var s = e.column,
					l = t.column;
					else var s = t.column,
					l = e.column;
					var c = e.row < t.row;
					if (c) var u = e.row,
					h = t.row;
					else var u = t.row,
					h = e.row;
					0 > s && (s = 0), 0 > u && (u = 0), u == h && (n = !0);
					for (var d = u; h >= d; d++) {
						var f = a.fromPoints(this.session.screenToDocumentPosition(d, s), this.session.screenToDocumentPosition(d, l));
						if (f.isEmpty()) {
							if (p && r(f.end, p)) break;
							var p = f.end
						}
						f.cursor = o ? f.start : f.end, i.push(f)
					}
					if (c && i.reverse(), !n) {
						for (var g = i.length - 1; i[g].isEmpty() && g > 0;) g--;
						if (g > 0) for (var m = 0; i[m].isEmpty();) m++;
						for (var v = g; v >= m; v--) i[v].isEmpty() && i.splice(v, 1)
					}
					return i
				}
			}.call(l.prototype);
			var m = e("./editor").Editor;
			(function() {
				this.updateSelectionMarkers = function() {
					this.renderer.updateCursor(), this.renderer.updateBackMarkers()
				}, this.addSelectionMarker = function(e) {
					e.cursor || (e.cursor = e.end);
					var t = this.getSelectionStyle();
					return e.marker = this.session.addMarker(e, "ace_selection", t), this.session.$selectionMarkers.push(e), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, e
				}, this.removeSelectionMarker = function(e) {
					if (e.marker) {
						this.session.removeMarker(e.marker);
						var t = this.session.$selectionMarkers.indexOf(e); - 1 != t && this.session.$selectionMarkers.splice(t, 1), this.session.selectionMarkerCount = this.session.$selectionMarkers.length
					}
				}, this.removeSelectionMarkers = function(e) {
					for (var t = this.session.$selectionMarkers, n = e.length; n--;) {
						var r = e[n];
						if (r.marker) {
							this.session.removeMarker(r.marker);
							var i = t.indexOf(r); - 1 != i && t.splice(i, 1)
						}
					}
					this.session.selectionMarkerCount = t.length
				}, this.$onAddRange = function(e) {
					this.addSelectionMarker(e.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
				}, this.$onRemoveRange = function(e) {
					this.removeSelectionMarkers(e.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
				}, this.$onMultiSelect = function() {
					this.inMultiSelectMode || (this.inMultiSelectMode = !0, this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(d.keyboardHandler), this.commands.on("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers())
				}, this.$onSingleSelect = function() {
					this.session.multiSelect.inVirtualMode || (this.inMultiSelectMode = !1, this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(d.keyboardHandler), this.commands.removeEventListener("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers())
				}, this.$onMultiSelectExec = function(e) {
					var t = e.command,
						n = e.editor;
					n.multiSelect && (t.multiSelectAction ? "forEach" == t.multiSelectAction ? n.forEachSelection(t, e.args) : "single" == t.multiSelectAction ? (n.exitMultiSelectMode(), t.exec(n, e.args || {})) : t.multiSelectAction(n, e.args || {}) : (t.exec(n, e.args || {}), n.multiSelect.addRange(n.multiSelect.toOrientedRange()), n.multiSelect.mergeOverlappingRanges()), e.preventDefault())
				}, this.forEachSelection = function(e, t) {
					if (!this.inVirtualSelectionMode) {
						var n = this.session,
							r = this.selection,
							i = r.rangeList,
							o = r._eventRegistry;
						r._eventRegistry = {};
						var s = new l(n);
						this.inVirtualSelectionMode = !0;
						for (var a = i.ranges.length; a--;) s.fromOrientedRange(i.ranges[a]), this.selection = n.selection = s, e.exec(this, t || {}), s.toOrientedRange(i.ranges[a]);
						s.detach(), this.selection = n.selection = r, this.inVirtualSelectionMode = !1, r._eventRegistry = o, r.mergeOverlappingRanges(), this.onCursorChange(), this.onSelectionChange()
					}
				}, this.exitMultiSelectMode = function() {
					this.inVirtualSelectionMode || this.multiSelect.toSingleRange()
				}, this.getCopyText = function() {
					var e = "";
					if (this.inMultiSelectMode) {
						var t = this.multiSelect.rangeList.ranges;
						e = [];
						for (var n = 0; t.length > n; n++) e.push(this.session.getTextRange(t[n]));
						e = e.join(this.session.getDocument().getNewLineCharacter())
					} else this.selection.isEmpty() || (e = this.session.getTextRange(this.getSelectionRange()));
					return e
				}, this.onPaste = function(e) {
					if (!this.$readOnly) {
						if (this._emit("paste", e), !this.inMultiSelectMode) return this.insert(e);
						var t = e.split(/\r\n|\r|\n/),
							n = this.selection.rangeList.ranges;
						if (t.length > n.length || 2 >= t.length || !t[1]) return this.commands.exec("insertstring", this, e);
						for (var r = n.length; r--;) {
							var i = n[r];
							i.isEmpty() || this.session.remove(i), this.session.insert(i.start, t[r])
						}
					}
				}, this.findAll = function(e, t, n) {
					t = t || {}, t.needle = e || t.needle, this.$search.set(t);
					var r = this.$search.findAll(this.session);
					if (!r.length) return 0;
					this.$blockScrolling += 1;
					var i = this.multiSelect;
					n || i.toSingleRange(r[0]);
					for (var o = r.length; o--;) i.addRange(r[o], !0);
					return this.$blockScrolling -= 1, r.length
				}, this.selectMoreLines = function(e, t) {
					var n = this.selection.toOrientedRange(),
						r = n.cursor == n.end,
						i = this.session.documentToScreenPosition(n.cursor);
					this.selection.$desiredColumn && (i.column = this.selection.$desiredColumn);
					var o = this.session.screenToDocumentPosition(i.row + e, i.column);
					if (n.isEmpty()) var s = o;
					else var l = this.session.documentToScreenPosition(r ? n.end : n.start),
					s = this.session.screenToDocumentPosition(l.row + e, l.column);
					if (r) {
						var c = a.fromPoints(o, s);
						c.cursor = c.start
					} else {
						var c = a.fromPoints(s, o);
						c.cursor = c.end
					} if (c.desiredColumn = i.column, this.selection.inMultiSelectMode) {
						if (t) var u = n.cursor
					} else this.selection.addRange(n);
					this.selection.addRange(c), u && this.selection.substractPoint(u)
				}, this.transposeSelections = function(e) {
					for (var t = this.session, n = t.multiSelect, r = n.ranges, i = r.length; i--;) {
						var o = r[i];
						if (o.isEmpty()) {
							var s = t.getWordRange(o.start.row, o.start.column);
							o.start.row = s.start.row, o.start.column = s.start.column, o.end.row = s.end.row, o.end.column = s.end.column
						}
					}
					n.mergeOverlappingRanges();
					for (var a = [], i = r.length; i--;) {
						var o = r[i];
						a.unshift(t.getTextRange(o))
					}
					0 > e ? a.unshift(a.pop()) : a.push(a.shift());
					for (var i = r.length; i--;) {
						var o = r[i],
							s = o.clone();
						t.replace(o, a[i]), o.start.row = s.start.row, o.start.column = s.start.column
					}
				}, this.selectMore = function(e, t) {
					var r = this.session,
						i = r.multiSelect,
						o = i.toOrientedRange();
					if (o.isEmpty()) {
						var o = r.getWordRange(o.start.row, o.start.column);
						o.cursor = o.end, this.multiSelect.addRange(o)
					}
					var s = r.getTextRange(o),
						a = n(r, s, e);
					a && (a.cursor = -1 == e ? a.start : a.end, this.multiSelect.addRange(a)), t && this.multiSelect.substractPoint(o.cursor)
				}, this.alignCursors = function() {
					var e = this.session,
						t = e.multiSelect,
						n = t.ranges;
					if (n.length) {
						var r = -1,
							i = n.filter(function(e) {
								return e.cursor.row == r ? !0 : (r = e.cursor.row, void 0)
							});
						t.$onRemoveRange(i);
						var o = 0,
							s = 1 / 0,
							l = n.map(function(t) {
								var n = t.cursor,
									r = e.getLine(n.row),
									i = r.substr(n.column).search(/\S/g);
								return -1 == i && (i = 0), n.column > o && (o = n.column), s > i && (s = i), i
							});
						n.forEach(function(t, n) {
							var r = t.cursor,
								i = o - r.column,
								c = l[n] - s;
							i > c ? e.insert(r, h.stringRepeat(" ", i - c)) : e.remove(new a(r.row, r.column, r.row, r.column - i + c)), t.start.column = t.end.column = o, t.start.row = t.end.row = r.row, t.cursor = t.end
						}), t.fromOrientedRange(n[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
					} else {
						var c = this.selection.getRange(),
							u = c.start.row,
							d = c.end.row,
							f = this.session.doc.removeLines(u, d);
						f = this.$reAlignText(f), this.session.doc.insertLines(u, f), c.start.column = 0, c.end.column = f[f.length - 1].length, this.selection.setRange(c)
					}
				}, this.$reAlignText = function(e) {
					function t(e, t) {
						return Array(e + 1).join(t)
					}
					function n(e) {
						return e[2] ? t(o, " ") + e[2] + t(s - e[2].length + a, " ") + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
					}
					function r(e) {
						return e[2] ? t(o + s - e[2].length, " ") + e[2] + t(a, " ") + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
					}
					function i(e) {
						return e[2] ? t(o, " ") + e[2] + t(a, " ") + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
					}
					var o, s, a, l = !0,
						c = !0;
					return e.map(function(e) {
						var t = e.match(/(\s*)(.*?)(\s*)([=:].*)/);
						return t ? null == o ? (o = t[1].length, s = t[2].length, a = t[3].length, t) : (o + s + a != t[1].length + t[2].length + t[3].length && (c = !1), o != t[1].length && (l = !1), o > t[1].length && (o = t[1].length), t[2].length > s && (s = t[2].length), a > t[3].length && (a = t[3].length), t) : [e]
					}).map(l ? c ? r : n : i)
				}
			}).call(m.prototype), t.onSessionChange = function(e) {
				var t = e.session;
				t.multiSelect || (t.$selectionMarkers = [], t.selection.$initRangeList(), t.multiSelect = t.selection), this.multiSelect = t.multiSelect;
				var n = e.oldSession;
				n && (n.multiSelect && n.multiSelect.editor == this && (n.multiSelect.editor = null), t.multiSelect.removeEventListener("addRange", this.$onAddRange), t.multiSelect.removeEventListener("removeRange", this.$onRemoveRange), t.multiSelect.removeEventListener("multiSelect", this.$onMultiSelect), t.multiSelect.removeEventListener("singleSelect", this.$onSingleSelect)), t.multiSelect.on("addRange", this.$onAddRange), t.multiSelect.on("removeRange", this.$onRemoveRange), t.multiSelect.on("multiSelect", this.$onMultiSelect), t.multiSelect.on("singleSelect", this.$onSingleSelect), this.inMultiSelectMode != t.selection.inMultiSelectMode && (t.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect())
			}, t.MultiSelect = i
		}), define("ace/range_list", ["require", "exports", "module"], function(e, t) {
			var n = function() {
				this.ranges = []
			};
			(function() {
				this.comparePoints = function(e, t) {
					return e.row - t.row || e.column - t.column
				}, this.pointIndex = function(e, t) {
					for (var n = this.ranges, r = t || 0; n.length > r; r++) {
						var i = n[r],
							o = this.comparePoints(e, i.end);
						if (!(o > 0)) return 0 == o ? r : (o = this.comparePoints(e, i.start), o >= 0 ? r : -r - 1)
					}
					return -r - 1
				}, this.add = function(e) {
					var t = this.pointIndex(e.start);
					0 > t && (t = -t - 1);
					var n = this.pointIndex(e.end, t);
					return 0 > n ? n = -n - 1 : n++, this.ranges.splice(t, n - t, e)
				}, this.addList = function(e) {
					for (var t = [], n = e.length; n--;) t.push.call(t, this.add(e[n]));
					return t
				}, this.substractPoint = function(e) {
					var t = this.pointIndex(e);
					return t >= 0 ? this.ranges.splice(t, 1) : void 0
				}, this.merge = function() {
					for (var e, t = [], n = this.ranges, r = n[0], i = 1; n.length > i; i++) {
						e = r, r = n[i];
						var o = this.comparePoints(e.end, r.start);
						0 > o || (0 != o || e.isEmpty() || r.isEmpty()) && (0 > this.comparePoints(e.end, r.end) && (e.end.row = r.end.row, e.end.column = r.end.column), n.splice(i, 1), t.push(r), r = e, i--)
					}
					return t
				}, this.contains = function(e, t) {
					return this.pointIndex({
						row: e,
						column: t
					}) >= 0
				}, this.containsPoint = function(e) {
					return this.pointIndex(e) >= 0
				}, this.rangeAtPoint = function(e) {
					var t = this.pointIndex(e);
					return t >= 0 ? this.ranges[t] : void 0
				}, this.clipRows = function(e, t) {
					var n = this.ranges;
					if (n[0].start.row > t || e > n[n.length - 1].start.row) return [];
					var r = this.pointIndex({
						row: e,
						column: 0
					});
					0 > r && (r = -r - 1);
					var i = this.pointIndex({
						row: t,
						column: 0
					}, r);
					0 > i && (i = -i - 1);
					for (var o = [], s = r; i > s; s++) o.push(n[s]);
					return o
				}, this.removeAll = function() {
					return this.ranges.splice(0, this.ranges.length)
				}, this.attach = function(e) {
					this.session && this.detach(), this.session = e, this.onChange = this.$onChange.bind(this), this.session.on("change", this.onChange)
				}, this.detach = function() {
					this.session && (this.session.removeListener("change", this.onChange), this.session = null)
				}, this.$onChange = function(e) {
					var t = e.data.range;
					if ("i" == e.data.action[0]) var n = t.start,
					r = t.end;
					else var r = t.start,
					n = t.end;
					for (var i = n.row, o = r.row, s = o - i, a = -n.column + r.column, l = this.ranges, c = 0, u = l.length; u > c; c++) {
						var h = l[c];
						if (!(i > h.end.row)) {
							if (h.start.row > i) break;
							h.start.row == i && h.start.column >= n.column && (h.start.column += a, h.start.row += s), h.end.row == i && h.end.column >= n.column && (h.end.column += a, h.end.row += s)
						}
					}
					if (0 != s && u > c) for (; u > c; c++) {
							var h = l[c];
							h.start.row += s, h.end.row += s
					}
				}
			}).call(n.prototype), t.RangeList = n
		}), define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event"], function(e, t) {
			function n(e, t) {
				return e.row == t.row && e.column == t.column
			}
			function r(e) {
				var t = e.domEvent,
					r = t.altKey,
					o = t.shiftKey,
					s = e.getAccelKey(),
					a = e.getButton();
				if (e.editor.inMultiSelectMode && 2 == a) return e.editor.textInput.onContextMenu(e.domEvent), void 0;
				if (!s && !r) return 0 == a && e.editor.inMultiSelectMode && e.editor.exitMultiSelectMode(), void 0;
				var l = e.editor,
					c = l.selection,
					u = l.inMultiSelectMode,
					h = e.getDocumentPosition(),
					d = c.getCursor(),
					f = e.inSelection() || c.isEmpty() && n(h, d),
					p = e.x,
					g = e.y,
					m = function(e) {
						p = e.clientX, g = e.clientY
					}, v = function() {
						var e = l.renderer.pixelToScreenCoordinates(p, g),
							t = A.screenToDocumentPosition(e.row, e.column);
						n(C, e) && n(t, c.selectionLead) || (C = e, l.selection.moveCursorToPosition(t), l.selection.clearSelection(), l.renderer.scrollCursorIntoView(), l.removeSelectionMarkers(E), E = c.rectangularRangeBlock(C, y), E.forEach(l.addSelectionMarker, l), l.updateSelectionMarkers())
					}, A = l.session,
					y = l.renderer.pixelToScreenCoordinates(p, g),
					C = y;
				if (!s || o || r || 0 != a) {
					if (!o && r && 0 == a) {
						e.stop(), u && !s ? c.toSingleRange() : !u && s && c.addRange(), c.moveCursorToPosition(h), c.clearSelection();
						var E = [],
							F = function() {
								clearInterval(b), l.removeSelectionMarkers(E);
								for (var e = 0; E.length > e; e++) c.addRange(E[e])
							}, w = v;
						i.capture(l.container, m, F);
						var b = setInterval(function() {
							w()
						}, 20);
						return e.preventDefault()
					}
				} else {
					if (!u && f) return;
					if (!u) {
						var $ = c.toOrientedRange();
						l.addSelectionMarker($)
					}
					var x = c.rangeList.rangeAtPoint(h);
					i.capture(l.container, function() {}, function() {
						var e = c.toOrientedRange();
						x && e.isEmpty() && n(x.cursor, e.cursor) ? c.substractPoint(e.cursor) : ($ && (l.removeSelectionMarker($), c.addRange($)), c.addRange(e))
					})
				}
			}
			var i = e("../lib/event");
			t.onMouseDown = r
		}), define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], function(e, t) {
			t.defaultCommands = [{
					name: "addCursorAbove",
					exec: function(e) {
						e.selectMoreLines(-1)
					},
					bindKey: {
						win: "Ctrl-Alt-Up",
						mac: "Ctrl-Alt-Up"
					},
					readonly: !0
				}, {
					name: "addCursorBelow",
					exec: function(e) {
						e.selectMoreLines(1)
					},
					bindKey: {
						win: "Ctrl-Alt-Down",
						mac: "Ctrl-Alt-Down"
					},
					readonly: !0
				}, {
					name: "addCursorAboveSkipCurrent",
					exec: function(e) {
						e.selectMoreLines(-1, !0)
					},
					bindKey: {
						win: "Ctrl-Alt-Shift-Up",
						mac: "Ctrl-Alt-Shift-Up"
					},
					readonly: !0
				}, {
					name: "addCursorBelowSkipCurrent",
					exec: function(e) {
						e.selectMoreLines(1, !0)
					},
					bindKey: {
						win: "Ctrl-Alt-Shift-Down",
						mac: "Ctrl-Alt-Shift-Down"
					},
					readonly: !0
				}, {
					name: "selectMoreBefore",
					exec: function(e) {
						e.selectMore(-1)
					},
					bindKey: {
						win: "Ctrl-Alt-Left",
						mac: "Ctrl-Alt-Left"
					},
					readonly: !0
				}, {
					name: "selectMoreAfter",
					exec: function(e) {
						e.selectMore(1)
					},
					bindKey: {
						win: "Ctrl-Alt-Right",
						mac: "Ctrl-Alt-Right"
					},
					readonly: !0
				}, {
					name: "selectNextBefore",
					exec: function(e) {
						e.selectMore(-1, !0)
					},
					bindKey: {
						win: "Ctrl-Alt-Shift-Left",
						mac: "Ctrl-Alt-Shift-Left"
					},
					readonly: !0
				}, {
					name: "selectNextAfter",
					exec: function(e) {
						e.selectMore(1, !0)
					},
					bindKey: {
						win: "Ctrl-Alt-Shift-Right",
						mac: "Ctrl-Alt-Shift-Right"
					},
					readonly: !0
				}, {
					name: "splitIntoLines",
					exec: function(e) {
						e.multiSelect.splitIntoLines()
					},
					bindKey: {
						win: "Ctrl-Alt-L",
						mac: "Ctrl-Alt-L"
					},
					readonly: !0
				}, {
					name: "alignCursors",
					exec: function(e) {
						e.alignCursors()
					},
					bindKey: {
						win: "Ctrl-Alt-A",
						mac: "Ctrl-Alt-A"
					}
				}
			], t.multiSelectCommands = [{
					name: "singleSelection",
					bindKey: "esc",
					exec: function(e) {
						e.exitMultiSelectMode()
					},
					readonly: !0,
					isAvailable: function(e) {
						return e && e.inMultiSelectMode
					}
				}
			];
			var n = e("../keyboard/hash_handler").HashHandler;
			t.keyboardHandler = new n(t.multiSelectCommands)
		}), define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter", "ace/config"], function(e, t) {
			var n = e("../lib/oop"),
				r = e("../lib/event_emitter").EventEmitter,
				i = e("../config"),
				o = function(t, n, r) {
					this.changeListener = this.changeListener.bind(this), this.onMessage = this.onMessage.bind(this), this.onError = this.onError.bind(this);
					var o;
					if (i.get("packaged")) o = i.moduleUrl(n, "worker");
					else {
						var s = this.$normalizePath;
						e.supports !== void 0 && e.supports.indexOf("ucjs2-pinf-0") >= 0 ? o = e.nameToUrl("ace/worker/worker_sourcemint") : (e.nameToUrl && !e.toUrl && (e.toUrl = e.nameToUrl), o = s(e.toUrl("ace/worker/worker", null, "_")));
						var a = {};
						t.forEach(function(t) {
							a[t] = s(e.toUrl(t, null, "_").replace(/.js(\?.*)?$/, ""))
						})
					}
					this.$worker = new Worker(o), this.$worker.postMessage({
						init: !0,
						tlns: a,
						module: n,
						classname: r
					}), this.callbackId = 1, this.callbacks = {}, this.$worker.onerror = this.onError, this.$worker.onmessage = this.onMessage
				};
			(function() {
				n.implement(this, r), this.onError = function(e) {
					throw window.console && console.log && console.log(e), e
				}, this.onMessage = function(e) {
					var t = e.data;
					switch (t.type) {
						case "log":
							window.console && console.log && console.log.apply(console, t.data);
							break;
						case "event":
							this._emit(t.name, {
								data: t.data
							});
							break;
						case "call":
							var n = this.callbacks[t.id];
							n && (n(t.data), delete this.callbacks[t.id])
					}
				}, this.$normalizePath = function(e) {
					return location.host ? (e = e.replace(/^[a-z]+:\/\/[^\/]+/, ""), e = location.protocol + "//" + location.host + ("/" == e.charAt(0) ? "" : location.pathname.replace(/\/[^\/]*$/, "")) + "/" + e.replace(/^[\/]+/, "")) : e
				}, this.terminate = function() {
					this._emit("terminate", {}), this.$worker.terminate(), this.$worker = null, this.$doc.removeEventListener("change", this.changeListener), this.$doc = null
				}, this.send = function(e, t) {
					this.$worker.postMessage({
						command: e,
						args: t
					})
				}, this.call = function(e, t, n) {
					if (n) {
						var r = this.callbackId++;
						this.callbacks[r] = n, t.push(r)
					}
					this.send(e, t)
				}, this.emit = function(e, t) {
					try {
						this.$worker.postMessage({
							event: e,
							data: {
								data: t.data
							}
						})
					} catch (n) {}
				}, this.attachToDocument = function(e) {
					this.$doc && this.terminate(), this.$doc = e, this.call("setValue", [e.getValue()]), e.on("change", this.changeListener)
				}, this.changeListener = function(e) {
					e.range = {
						start: e.data.range.start,
						end: e.data.range.end
					}, this.emit("change", e)
				}
			}).call(o.prototype);
			var s = function(t, n, i) {
				this.changeListener = this.changeListener.bind(this), this.callbackId = 1, this.callbacks = {}, this.messageBuffer = [];
				var o = null,
					s = Object.create(r),
					a = this;
				this.$worker = {}, this.$worker.postMessage = function(e) {
					a.messageBuffer.push(e), o && setTimeout(l)
				};
				var l = function() {
					var e = a.messageBuffer.shift();
					e.command ? o[e.command].apply(o, e.args) : e.event && s._emit(e.event, e.data)
				};
				s.postMessage = function(e) {
					a.onMessage({
						data: e
					})
				}, s.callback = function(e, t) {
					this.postMessage({
						type: "call",
						id: t,
						data: e
					})
				}, s.emit = function(e, t) {
					this.postMessage({
						type: "event",
						name: e,
						data: t
					})
				}, e([n], function(e) {
					for (o = new e[i](s); a.messageBuffer.length;) l()
				})
			};
			s.prototype = o.prototype, t.UIWorkerClient = s, t.WorkerClient = o
		}), define("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], function(e, t) {
			var n = e("./range").Range,
				r = e("./lib/event_emitter").EventEmitter,
				i = e("./lib/oop"),
				o = function(e, t, n, r, i, o) {
					var s = this;
					this.length = t, this.session = e, this.doc = e.getDocument(), this.mainClass = i, this.othersClass = o, this.$onUpdate = this.onUpdate.bind(this), this.doc.on("change", this.$onUpdate), this.$others = r, this.$onCursorChange = function() {
						setTimeout(function() {
							s.onCursorChange()
						})
					}, this.$pos = n;
					var a = e.getUndoManager().$undoStack || e.getUndoManager().$undostack || {
						length: -1
					};
					this.$undoStackDepth = a.length, this.setup(), e.selection.on("changeCursor", this.$onCursorChange)
				};
			(function() {
				i.implement(this, r), this.setup = function() {
					var e = this,
						t = this.doc,
						r = this.session,
						i = this.$pos;
					this.pos = t.createAnchor(i.row, i.column), this.markerId = r.addMarker(new n(i.row, i.column, i.row, i.column + this.length), this.mainClass, null, !1), this.pos.on("change", function(t) {
						r.removeMarker(e.markerId), e.markerId = r.addMarker(new n(t.value.row, t.value.column, t.value.row, t.value.column + e.length), e.mainClass, null, !1)
					}), this.others = [], this.$others.forEach(function(n) {
						var r = t.createAnchor(n.row, n.column);
						e.others.push(r)
					}), r.setUndoSelect(!1)
				}, this.showOtherMarkers = function() {
					if (!this.othersActive) {
						var e = this.session,
							t = this;
						this.othersActive = !0, this.others.forEach(function(r) {
							r.markerId = e.addMarker(new n(r.row, r.column, r.row, r.column + t.length), t.othersClass, null, !1), r.on("change", function(i) {
								e.removeMarker(r.markerId), r.markerId = e.addMarker(new n(i.value.row, i.value.column, i.value.row, i.value.column + t.length), t.othersClass, null, !1)
							})
						})
					}
				}, this.hideOtherMarkers = function() {
					if (this.othersActive) {
						this.othersActive = !1;
						for (var e = 0; this.others.length > e; e++) this.session.removeMarker(this.others[e].markerId)
					}
				}, this.onUpdate = function(e) {
					var t = e.data,
						r = t.range;
					if (r.start.row === r.end.row && r.start.row === this.pos.row && !this.$updating) {
						this.$updating = !0;
						var i = "insertText" === t.action ? r.end.column - r.start.column : r.start.column - r.end.column;
						if (r.start.column >= this.pos.column && r.start.column <= this.pos.column + this.length + 1) {
							var o = r.start.column - this.pos.column;
							if (this.length += i, !this.session.$fromUndo) {
								if ("insertText" === t.action) for (var s = this.others.length - 1; s >= 0; s--) {
										var a = this.others[s],
											l = {
												row: a.row,
												column: a.column + o
											};
										a.row === r.start.row && r.start.column < a.column && (l.column += i), this.doc.insert(l, t.text)
								} else if ("removeText" === t.action) for (var s = this.others.length - 1; s >= 0; s--) {
										var a = this.others[s],
											l = {
												row: a.row,
												column: a.column + o
											};
										a.row === r.start.row && r.start.column < a.column && (l.column += i), this.doc.remove(new n(l.row, l.column, l.row, l.column - i))
								}
								r.start.column === this.pos.column && "insertText" === t.action ? setTimeout(function() {
									this.pos.setPosition(this.pos.row, this.pos.column - i);
									for (var e = 0; this.others.length > e; e++) {
										var t = this.others[e],
											n = {
												row: t.row,
												column: t.column - i
											};
										t.row === r.start.row && r.start.column < t.column && (n.column += i), t.setPosition(n.row, n.column)
									}
								}.bind(this), 0) : r.start.column === this.pos.column && "removeText" === t.action && setTimeout(function() {
									for (var e = 0; this.others.length > e; e++) {
										var t = this.others[e];
										t.row === r.start.row && r.start.column < t.column && t.setPosition(t.row, t.column - i)
									}
								}.bind(this), 0)
							}
							this.pos._emit("change", {
								value: this.pos
							});
							for (var s = 0; this.others.length > s; s++) this.others[s]._emit("change", {
									value: this.others[s]
								})
						}
						this.$updating = !1
					}
				}, this.onCursorChange = function(e) {
					if (!this.$updating) {
						var t = this.session.selection.getCursor();
						t.row === this.pos.row && t.column >= this.pos.column && t.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", e)) : (this.hideOtherMarkers(), this._emit("cursorLeave", e))
					}
				}, this.detach = function() {
					this.session.removeMarker(this.markerId), this.hideOtherMarkers(), this.doc.removeEventListener("change", this.$onUpdate), this.session.selection.removeEventListener("changeCursor", this.$onCursorChange), this.pos.detach();
					for (var e = 0; this.others.length > e; e++) this.others[e].detach();
					this.session.setUndoSelect(!0)
				}, this.cancel = function() {
					if (-1 === this.$undoStackDepth) throw Error("Canceling placeholders only supported with undo manager attached to session.");
					for (var e = this.session.getUndoManager(), t = (e.$undoStack || e.$undostack).length - this.$undoStackDepth, n = 0; t > n; n++) e.undo(!0)
				}
			}).call(o.prototype), t.PlaceHolder = o
		}), define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], function(e, t) {
			var n = e("../../range").Range,
				r = t.FoldMode = function() {};
			(function() {
				this.foldingStartMarker = null, this.foldingStopMarker = null, this.getFoldWidget = function(e, t, n) {
					var r = e.getLine(n);
					return this.foldingStartMarker.test(r) ? "start" : "markbeginend" == t && this.foldingStopMarker && this.foldingStopMarker.test(r) ? "end" : ""
				}, this.getFoldWidgetRange = function() {
					return null
				}, this.indentationBlock = function(e, t, r) {
					var i = /\S/,
						o = e.getLine(t),
						s = o.search(i);
					if (-1 != s) {
						for (var a = r || o.length, l = e.getLength(), c = t, u = t; l > ++t;) {
							var h = e.getLine(t).search(i);
							if (-1 != h) {
								if (s >= h) break;
								u = t
							}
						}
						if (u > c) {
							var d = e.getLine(u).length;
							return new n(c, a, u, d)
						}
					}
				}, this.openingBracketBlock = function(e, t, r, i, o) {
					var s = {
						row: r,
						column: i + 1
					}, a = e.$findClosingBracket(t, s, o);
					if (a) {
						var l = e.foldWidgets[a.row];
						return null == l && (l = this.getFoldWidget(e, a.row)), "start" == l && a.row > s.row && (a.row--, a.column = e.getLine(a.row).length), n.fromPoints(s, a)
					}
				}, this.closingBracketBlock = function(e, t, r, i) {
					var o = {
						row: r,
						column: i
					}, s = e.$findOpeningBracket(t, o);
					return s ? (s.column++, o.column--, n.fromPoints(s, o)) : void 0
				}
			}).call(r.prototype)
		}), function() {
			window.require(["ace/ace"], function(e) {
				e && e.config.init(), window.ace || (window.ace = {});
				for (var t in e) e.hasOwnProperty(t) && (ace[t] = e[t])
			})
		}(), define("ace/theme/textmate", ["require", "exports", "module", "ace/lib/dom"], function(e, t) {
			t.isDark = !1, t.cssClass = "ace-tm", t.cssText = '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm .ace_scroller {background-color: #FFFFFF;}.ace-tm .ace_cursor {border-left: 2px solid black;}.ace-tm .ace_overwrite-cursors .ace_cursor {border-left: 0px;border-bottom: 1px solid black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_markup.ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_markup.ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;border-radius: 2px;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background-color: transparent;}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';
			var n = e("../lib/dom");
			n.importCssString(t.cssText, t.cssClass)
		}), function(e, t, n) {
			"use strict";

			function r(e) {
				return String.fromCharCode(e)
			}
			function i(e, t, n) {
				var r;
				if (e) if (F(e)) for (r in e) "prototype" != r && "length" != r && "name" != r && e.hasOwnProperty(r) && t.call(n, e[r], r);
					else
				if (e.forEach && e.forEach !== i) e.forEach(t, n);
				else if (v(e) && y(e.length)) for (r = 0; e.length > r; r++) t.call(n, e[r], r);
				else for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
				return e
			}
			function o(e) {
				var t = [];
				for (var n in e) e.hasOwnProperty(n) && t.push(n);
				return t.sort()
			}
			function s(e, t, n) {
				for (var r = o(e), i = 0; r.length > i; i++) t.call(n, e[r[i]], r[i]);
				return r
			}
			function a(e) {
				return function(t, n) {
					e(n, t)
				}
			}
			function l() {
				for (var e, t = ir.length; t;) {
					if (t--, e = ir[t].charCodeAt(0), 57 == e) return ir[t] = "A", ir.join("");
					if (90 != e) return ir[t] = String.fromCharCode(e + 1), ir.join("");
					ir[t] = "0"
				}
				return ir.unshift("0"), ir.join("")
			}
			function c(e) {
				return i(arguments, function(t) {
					t !== e && i(t, function(t, n) {
						e[n] = t
					})
				}), e
			}
			function u(e) {
				return parseInt(e, 10)
			}
			function h(e, t) {
				return c(new(c(function() {}, {
					prototype: e
				})), t)
			}
			function d() {}
			function f(e) {
				return e
			}
			function p(e) {
				return function() {
					return e
				}
			}
			function g(e) {
				return e === n
			}
			function m(e) {
				return e !== n
			}
			function v(e) {
				return null != e && "object" == typeof e
			}
			function A(e) {
				return "string" == typeof e
			}
			function y(e) {
				return "number" == typeof e
			}
			function C(e) {
				return "[object Date]" == nr.apply(e)
			}
			function E(e) {
				return "[object Array]" == nr.apply(e)
			}
			function F(e) {
				return "function" == typeof e
			}
			function w(e) {
				return e && e.document && e.location && e.alert && e.setInterval
			}
			function b(e) {
				return e && e.$evalAsync && e.$watch
			}
			function $(e) {
				return "[object File]" === nr.apply(e)
			}
			function x(e) {
				return A(e) ? e.replace(/^\s*/, "").replace(/\s*$/, "") : e
			}
			function D(e) {
				return e && (e.nodeName || e.bind && e.find)
			}
			function B(e, t, n) {
				var r = [];
				return i(e, function(e, i, o) {
					r.push(t.call(n, e, i, o))
				}), r
			}
			function S(e, t) {
				var n, r = 0;
				if (E(e) || A(e)) return e.length;
				if (v(e)) for (n in e)(!t || e.hasOwnProperty(n)) && r++;
				return r
			}
			function k(e, t) {
				return -1 != T(e, t)
			}
			function T(e, t) {
				if (e.indexOf) return e.indexOf(t);
				for (var n = 0; e.length > n; n++) if (t === e[n]) return n;
				return -1
			}
			function L(e, t) {
				var n = T(e, t);
				return n >= 0 && e.splice(n, 1), t
			}
			function M(e, t) {
				if (w(e) || b(e)) throw Zn("Can't copy Window or Scope");
				if (t) {
					if (e === t) throw Zn("Can't copy equivalent objects or arrays");
					if (E(e)) {
						for (; t.length;) t.pop();
						for (var n = 0; e.length > n; n++) t.push(M(e[n]))
					} else {
						i(t, function(e, n) {
							delete t[n]
						});
						for (var r in e) t[r] = M(e[r])
					}
				} else t = e, e && (E(e) ? t = M(e, []) : C(e) ? t = new Date(e.getTime()) : v(e) && (t = M(e, {})));
				return t
			}
			function R(e, t) {
				t = t || {};
				for (var n in e) e.hasOwnProperty(n) && "$$" !== n.substr(0, 2) && (t[n] = e[n]);
				return t
			}
			function P(e, t) {
				if (e === t) return !0;
				if (null === e || null === t) return !1;
				if (e !== e && t !== t) return !0;
				var n, r, i, o = typeof e,
					s = typeof t;
				if (o == s && "object" == o) {
					if (!E(e)) {
						if (C(e)) return C(t) && e.getTime() == t.getTime();
						if (b(e) || b(t) || w(e) || w(t)) return !1;
						i = {};
						for (r in e) {
							if ("$" !== r.charAt(0) && !F(e[r]) && !P(e[r], t[r])) return !1;
							i[r] = !0
						}
						for (r in t) if (!i[r] && "$" !== r.charAt(0) && !F(t[r])) return !1;
						return !0
					}
					if ((n = e.length) == t.length) {
						for (r = 0; n > r; r++) if (!P(e[r], t[r])) return !1;
						return !0
					}
				}
				return !1
			}
			function N(e, t, n) {
				return e.concat(er.call(t, n))
			}
			function O(e, t) {
				return er.call(e, t || 0)
			}
			function I(e, t) {
				var n = arguments.length > 2 ? O(arguments, 2) : [];
				return !F(t) || t instanceof RegExp ? t : n.length ? function() {
					return arguments.length ? t.apply(e, n.concat(er.call(arguments, 0))) : t.apply(e, n)
				} : function() {
					return arguments.length ? t.apply(e, arguments) : t.call(e)
				}
			}
			function j(e, r) {
				var i = r;
				return /^\$+/.test(e) ? i = n : w(r) ? i = "$WINDOW" : r && t === r ? i = "$DOCUMENT" : b(r) && (i = "$SCOPE"), i
			}
			function H(e, t) {
				return JSON.stringify(e, j, t ? "  " : null)
			}
			function z(e) {
				return A(e) ? JSON.parse(e) : e
			}
			function W(e) {
				if (e && 0 !== e.length) {
					var t = Un("" + e);
					e = !("f" == t || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)
				} else e = !1;
				return e
			}
			function U(e) {
				e = Kn(e).clone();
				try {
					e.html("")
				} catch (t) {}
				return Kn("<div>").append(e).html().match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
					return "<" + Un(t)
				})
			}
			function q(e) {
				var t, n, r = {};
				return i((e || "").split("&"), function(e) {
					e && (t = e.split("="), n = decodeURIComponent(t[0]), r[n] = m(t[1]) ? decodeURIComponent(t[1]) : !0)
				}), r
			}
			function G(e) {
				var t = [];
				return i(e, function(e, n) {
					t.push(K(n, !0) + (e === !0 ? "" : "=" + K(e, !0)))
				}), t.length ? t.join("&") : ""
			}
			function V(e) {
				return K(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
			}
			function K(e, t) {
				return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(t ? null : /%20/g, "+")
			}
			function Y(e, n) {
				function r(e) {
					e && a.push(e)
				}
				var o, s, a = [e],
					l = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
					c = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
				i(l, function(n) {
					l[n] = !0, r(t.getElementById(n)), n = n.replace(":", "\\:"), e.querySelectorAll && (i(e.querySelectorAll("." + n), r), i(e.querySelectorAll("." + n + "\\:"), r), i(e.querySelectorAll("[" + n + "]"), r))
				}), i(a, function(e) {
					if (!o) {
						var t = " " + e.className + " ",
							n = c.exec(t);
						n ? (o = e, s = (n[2] || "").replace(/\s+/g, ",")) : i(e.attributes, function(t) {
							!o && l[t.name] && (o = e, s = t.value)
						})
					}
				}), o && n(o, s ? [s] : [])
			}
			function Q(e, t) {
				e = Kn(e), t = t || [], t.unshift(["$provide",
					function(t) {
						t.value("$rootElement", e)
					}
				]), t.unshift("ng");
				var n = $t(t);
				return n.invoke(["$rootScope", "$rootElement", "$compile", "$injector",
					function(e, t, n, r) {
						e.$apply(function() {
							t.data("$injector", r), n(t)(e)
						})
					}
				]), n
			}
			function X(e, t) {
				return t = t || "_", e.replace(or, function(e, n) {
					return (n ? t : "") + e.toLowerCase()
				})
			}
			function Z() {
				Yn = e.jQuery, Yn ? (Kn = Yn, c(Yn.fn, {
					scope: pr.scope,
					controller: pr.controller,
					injector: pr.injector,
					inheritedData: pr.inheritedData
				}), ot("remove", !0), ot("empty"), ot("html")) : Kn = st, rr.element = Kn
			}
			function J(e, t, n) {
				if (!e) throw new Zn("Argument '" + (t || "?") + "' is " + (n || "required"));
				return e
			}
			function et(e, t, n) {
				return n && E(e) && (e = e[e.length - 1]), J(F(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
			}
			function tt(e) {
				function t(e, t, n) {
					return e[t] || (e[t] = n())
				}
				return t(t(e, "angular", Object), "module", function() {
					var e = {};
					return function(n, r, i) {
						return r && e.hasOwnProperty(n) && (e[n] = null), t(e, n, function() {
							function e(e, n, r) {
								return function() {
									return t[r || "push"]([e, n, arguments]), a
								}
							}
							if (!r) throw Zn("No module: " + n);
							var t = [],
								o = [],
								s = e("$injector", "invoke"),
								a = {
									_invokeQueue: t,
									_runBlocks: o,
									requires: r,
									name: n,
									provider: e("$provide", "provider"),
									factory: e("$provide", "factory"),
									service: e("$provide", "service"),
									value: e("$provide", "value"),
									constant: e("$provide", "constant", "unshift"),
									filter: e("$filterProvider", "register"),
									controller: e("$controllerProvider", "register"),
									directive: e("$compileProvider", "directive"),
									config: s,
									run: function(e) {
										return o.push(e), this
									}
								};
							return i && s(i), a
						})
					}
				})
			}
			function nt(t) {
				c(t, {
					bootstrap: Q,
					copy: M,
					extend: c,
					equals: P,
					element: Kn,
					forEach: i,
					injector: $t,
					noop: d,
					bind: I,
					toJson: H,
					fromJson: z,
					identity: f,
					isUndefined: g,
					isDefined: m,
					isString: A,
					isFunction: F,
					isObject: v,
					isNumber: y,
					isElement: D,
					isArray: E,
					version: sr,
					isDate: C,
					lowercase: Un,
					uppercase: qn,
					callbacks: {
						counter: 0
					}
				}), Qn = tt(e);
				try {
					Qn("ngLocale")
				} catch (n) {
					Qn("ngLocale", []).provider("$locale", An)
				}
				Qn("ng", ["ngLocale"], ["$provide",
					function(e) {
						e.provider("$compile", kt).directive({
							a: Or,
							input: Kr,
							textarea: Kr,
							form: zr,
							script: ki,
							select: Li,
							style: Ri,
							option: Mi,
							ngBind: si,
							ngBindHtmlUnsafe: li,
							ngBindTemplate: ai,
							ngClass: ci,
							ngClassEven: hi,
							ngClassOdd: ui,
							ngCsp: pi,
							ngCloak: di,
							ngController: fi,
							ngForm: Wr,
							ngHide: wi,
							ngInclude: vi,
							ngInit: Ai,
							ngNonBindable: yi,
							ngPluralize: Ci,
							ngRepeat: Ei,
							ngShow: Fi,
							ngSubmit: mi,
							ngStyle: bi,
							ngSwitch: xi,
							ngSwitchWhen: Di,
							ngSwitchDefault: Bi,
							ngOptions: Ti,
							ngView: Si,
							ngTransclude: _i,
							ngModel: ei,
							ngList: ri,
							ngChange: ti,
							required: ni,
							ngRequired: ni,
							ngValue: oi
						}).directive(Ir).directive(gi), e.provider({
							$anchorScroll: xt,
							$browser: Bt,
							$cacheFactory: _t,
							$controller: Lt,
							$document: Mt,
							$exceptionHandler: Rt,
							$filter: Cn,
							$interpolate: Pt,
							$http: gn,
							$httpBackend: mn,
							$location: Kt,
							$log: Yt,
							$parse: nn,
							$route: sn,
							$routeParams: an,
							$rootScope: ln,
							$q: rn,
							$sniffer: cn,
							$templateCache: St,
							$timeout: yn,
							$window: un
						})
					}
				])
			}
			function rt() {
				return ++cr
			}
			function it(e) {
				return e.replace(dr, function(e, t, n, r) {
					return r ? n.toUpperCase() : n
				}).replace(fr, "Moz$1")
			}
			function ot(e, t) {
				function n() {
					for (var e, n, i, o, s, a, l, c = [this], u = t; c.length;) for (e = c.shift(), n = 0, i = e.length; i > n; n++) for (o = Kn(e[n]), u ? o.triggerHandler("$destroy") : u = !u, s = 0, a = (l = o.children()).length; a > s; s++) c.push(Yn(l[s]));
					return r.apply(this, arguments)
				}
				var r = Yn.fn[e];
				r = r.$original || r, n.$original = r, Yn.fn[e] = n
			}
			function st(e) {
				if (e instanceof st) return e;
				if (!(this instanceof st)) {
					if (A(e) && "<" != e.charAt(0)) throw Zn("selectors not implemented");
					return new st(e)
				}
				if (A(e)) {
					var n = t.createElement("div");
					n.innerHTML = "<div>&#160;</div>" + e, n.removeChild(n.firstChild), mt(this, n.childNodes), this.remove()
				} else mt(this, e)
			}
			function at(e) {
				return e.cloneNode(!0)
			}
			function lt(e) {
				ut(e);
				for (var t = 0, n = e.childNodes || []; n.length > t; t++) lt(n[t])
			}
			function ct(e, t, n) {
				var r = ht(e, "events"),
					o = ht(e, "handle");
				o && (g(t) ? i(r, function(t, n) {
					hr(e, n, t), delete r[n]
				}) : g(n) ? (hr(e, t, r[t]), delete r[t]) : L(r[t], n))
			}
			function ut(e) {
				var t = e[lr],
					r = ar[t];
				r && (r.handle && (r.events.$destroy && r.handle({}, "$destroy"), ct(e)), delete ar[t], e[lr] = n)
			}
			function ht(e, t, r) {
				var i = e[lr],
					o = ar[i || -1];
				return m(r) ? (o || (e[lr] = i = rt(), o = ar[i] = {}), o[t] = r, n) : o && o[t]
			}
			function dt(e, t, n) {
				var r = ht(e, "data"),
					i = m(n),
					o = !i && m(t),
					s = o && !v(t);
				if (r || s || ht(e, "data", r = {}), i) r[t] = n;
				else {
					if (!o) return r;
					if (s) return r && r[t];
					c(r, t)
				}
			}
			function ft(e, t) {
				return (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1
			}
			function pt(e, t) {
				t && i(t.split(" "), function(t) {
					e.className = x((" " + e.className + " ").replace(/[\n\t]/g, " ").replace(" " + x(t) + " ", " "))
				})
			}
			function gt(e, t) {
				t && i(t.split(" "), function(t) {
					ft(e, t) || (e.className = x(e.className + " " + x(t)))
				})
			}
			function mt(e, t) {
				if (t) {
					t = t.nodeName || !m(t.length) || w(t) ? [t] : t;
					for (var n = 0; t.length > n; n++) e.push(t[n])
				}
			}
			function vt(e, t) {
				return At(e, "$" + (t || "ngController") + "Controller")
			}
			function At(e, t, n) {
				for (e = Kn(e), 9 == e[0].nodeType && (e = e.find("html")); e.length;) {
					if (n = e.data(t)) return n;
					e = e.parent()
				}
			}
			function yt(e, t) {
				var n = gr[t.toLowerCase()];
				return n && mr[e.nodeName] && n
			}
			function Ct(e, n) {
				var r = function(r, o) {
					if (r.preventDefault || (r.preventDefault = function() {
						r.returnValue = !1
					}), r.stopPropagation || (r.stopPropagation = function() {
						r.cancelBubble = !0
					}), r.target || (r.target = r.srcElement || t), g(r.defaultPrevented)) {
						var s = r.preventDefault;
						r.preventDefault = function() {
							r.defaultPrevented = !0, s.call(r)
						}, r.defaultPrevented = !1
					}
					r.isDefaultPrevented = function() {
						return r.defaultPrevented
					}, i(n[o || r.type], function(t) {
						t.call(e, r)
					}), 8 >= Jn ? (r.preventDefault = null, r.stopPropagation = null, r.isDefaultPrevented = null) : (delete r.preventDefault, delete r.stopPropagation, delete r.isDefaultPrevented)
				};
				return r.elem = e, r
			}
			function Et(e) {
				var t, r = typeof e;
				return "object" == r && null !== e ? "function" == typeof(t = e.$$hashKey) ? t = e.$$hashKey() : t === n && (t = e.$$hashKey = l()) : t = e, r + ":" + t
			}
			function Ft(e) {
				i(e, this.put, this)
			}
			function wt() {}
			function bt(e) {
				var t, n, r, o;
				return "function" == typeof e ? (t = e.$inject) || (t = [], n = ("" + e).replace(Er, ""), r = n.match(Ar), i(r[1].split(yr), function(e) {
					e.replace(Cr, function(e, n, r) {
						t.push(r)
					})
				}), e.$inject = t) : E(e) ? (o = e.length - 1, et(e[o], "fn"), t = e.slice(0, o)) : et(e, "fn", !0), t
			}
			function $t(e) {
				function t(e) {
					return function(t, r) {
						return v(t) ? (i(t, a(e)), n) : e(t, r)
					}
				}
				function r(e, t) {
					if (F(t) && (t = b.instantiate(t)), !t.$get) throw Zn("Provider " + e + " must define $get factory method.");
					return w[e + m] = t
				}
				function o(e, t) {
					return r(e, {
						$get: t
					})
				}
				function s(e, t) {
					return o(e, ["$injector",
						function(e) {
							return e.instantiate(t)
						}
					])
				}
				function l(e, t) {
					return o(e, p(t))
				}
				function c(e, t) {
					w[e] = t, $[e] = t
				}
				function u(e, t) {
					var n = b.get(e + m),
						r = n.$get;
					n.$get = function() {
						var e = x.invoke(r, n);
						return x.invoke(t, null, {
							$delegate: e
						})
					}
				}
				function h(e) {
					var t = [];
					return i(e, function(e) {
						if (!C.get(e)) if (C.put(e, !0), A(e)) {
								var n = Qn(e);
								t = t.concat(h(n.requires)).concat(n._runBlocks);
								try {
									for (var r = n._invokeQueue, i = 0, o = r.length; o > i; i++) {
										var s = r[i],
											a = "$injector" == s[0] ? b : b.get(s[0]);
										a[s[1]].apply(a, s[2])
									}
								} catch (l) {
									throw l.message && (l.message += " from " + e), l
								}
							} else
						if (F(e)) try {
								t.push(b.invoke(e))
						} catch (l) {
							throw l.message && (l.message += " from " + e), l
						} else if (E(e)) try {
								t.push(b.invoke(e))
						} catch (l) {
							throw l.message && (l.message += " from " + (e[e.length - 1] + "")), l
						} else et(e, "module")
					}), t
				}
				function f(e, t) {
					function n(n) {
						if ("string" != typeof n) throw Zn("Service name expected");
						if (e.hasOwnProperty(n)) {
							if (e[n] === g) throw Zn("Circular dependency: " + y.join(" <- "));
							return e[n]
						}
						try {
							return y.unshift(n), e[n] = g, e[n] = t(n)
						} finally {
							y.shift()
						}
					}
					function r(e, t, r) {
						var i, o, s, a = [],
							l = bt(e);
						for (o = 0, i = l.length; i > o; o++) s = l[o], a.push(r && r.hasOwnProperty(s) ? r[s] : n(s, y));
						switch (e.$inject || (e = e[i]), t ? -1 : a.length) {
							case 0:
								return e();
							case 1:
								return e(a[0]);
							case 2:
								return e(a[0], a[1]);
							case 3:
								return e(a[0], a[1], a[2]);
							case 4:
								return e(a[0], a[1], a[2], a[3]);
							case 5:
								return e(a[0], a[1], a[2], a[3], a[4]);
							case 6:
								return e(a[0], a[1], a[2], a[3], a[4], a[5]);
							case 7:
								return e(a[0], a[1], a[2], a[3], a[4], a[5], a[6]);
							case 8:
								return e(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]);
							case 9:
								return e(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
							case 10:
								return e(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9]);
							default:
								return e.apply(t, a)
						}
					}
					function i(e, t) {
						var n, i, o = function() {};
						return o.prototype = (E(e) ? e[e.length - 1] : e).prototype, n = new o, i = r(e, n, t), v(i) ? i : n
					}
					return {
						invoke: r,
						instantiate: i,
						get: n,
						annotate: bt
					}
				}
				var g = {}, m = "Provider",
					y = [],
					C = new Ft,
					w = {
						$provide: {
							provider: t(r),
							factory: t(o),
							service: t(s),
							value: t(l),
							constant: t(c),
							decorator: u
						}
					}, b = f(w, function() {
						throw Zn("Unknown provider: " + y.join(" <- "))
					}),
					$ = {}, x = $.$injector = f($, function(e) {
						var t = b.get(e + m);
						return x.invoke(t.$get, t)
					});
				return i(h(e), function(e) {
					x.invoke(e || d)
				}), x
			}
			function xt() {
				var e = !0;
				this.disableAutoScrolling = function() {
					e = !1
				}, this.$get = ["$window", "$location", "$rootScope",
					function(t, n, r) {
						function o(e) {
							var t = null;
							return i(e, function(e) {
								t || "a" !== Un(e.nodeName) || (t = e)
							}), t
						}
						function s() {
							var e, r = n.hash();
							r ? (e = a.getElementById(r)) ? e.scrollIntoView() : (e = o(a.getElementsByName(r))) ? e.scrollIntoView() : "top" === r && t.scrollTo(0, 0) : t.scrollTo(0, 0)
						}
						var a = t.document;
						return e && r.$watch(function() {
							return n.hash()
						}, function() {
							r.$evalAsync(s)
						}), s
					}
				]
			}
			function Dt(e, t, r, o) {
				function s(e) {
					try {
						e.apply(null, O(arguments, 1))
					} finally {
						if (y--, 0 === y) for (; C.length;) try {
									C.pop()()
						} catch (t) {
							r.error(t)
						}
					}
				}
				function a(e, t) {
					(function n() {
						i(F, function(e) {
							e()
						}), E = t(n, e)
					})()
				}
				function l() {
					w != c.url() && (w = c.url(), i($, function(e) {
						e(c.url())
					}))
				}
				var c = this,
					u = t[0],
					h = e.location,
					f = e.history,
					p = e.setTimeout,
					m = e.clearTimeout,
					v = {};
				c.isMock = !1;
				var y = 0,
					C = [];
				c.$$completeOutstandingRequest = s, c.$$incOutstandingRequestCount = function() {
					y++
				}, c.notifyWhenNoOutstandingRequests = function(e) {
					i(F, function(e) {
						e()
					}), 0 === y ? e() : C.push(e)
				};
				var E, F = [];
				c.addPollFn = function(e) {
					return g(E) && a(100, p), F.push(e), e
				};
				var w = h.href,
					b = t.find("base");
				c.url = function(e, t) {
					if (e) {
						if (w == e) return;
						return w = e, o.history ? t ? f.replaceState(null, "", e) : (f.pushState(null, "", e), b.attr("href", b.attr("href"))) : t ? h.replace(e) : h.href = e, c
					}
					return h.href.replace(/%27/g, "'")
				};
				var $ = [],
					x = !1;
				c.onUrlChange = function(t) {
					return x || (o.history && Kn(e).bind("popstate", l), o.hashchange ? Kn(e).bind("hashchange", l) : c.addPollFn(l), x = !0), $.push(t), t
				}, c.baseHref = function() {
					var e = b.attr("href");
					return e ? e.replace(/^https?\:\/\/[^\/]*/, "") : e
				};
				var D = {}, B = "",
					_ = c.baseHref();
				c.cookies = function(e, t) {
					var i, o, s, a, l;
					if (!e) {
						if (u.cookie !== B) for (B = u.cookie, o = B.split("; "), D = {}, a = 0; o.length > a; a++) s = o[a], l = s.indexOf("="), l > 0 && (D[unescape(s.substring(0, l))] = unescape(s.substring(l + 1)));
						return D
					}
					t === n ? u.cookie = escape(e) + "=;path=" + _ + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : A(t) && (i = (u.cookie = escape(e) + "=" + escape(t) + ";path=" + _).length + 1, i > 4096 && r.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!"), D.length > 20 && r.warn("Cookie '" + e + "' possibly not set or overflowed because too many cookies " + "were already set (" + D.length + " > 20 )"))
				}, c.defer = function(e, t) {
					var n;
					return y++, n = p(function() {
						delete v[n], s(e)
					}, t || 0), v[n] = !0, n
				}, c.defer.cancel = function(e) {
					return v[e] ? (delete v[e], m(e), s(d), !0) : !1
				}
			}
			function Bt() {
				this.$get = ["$window", "$log", "$sniffer", "$document",
					function(e, t, n, r) {
						return new Dt(e, r, t, n)
					}
				]
			}
			function _t() {
				this.$get = function() {
					function e(e, n) {
						function r(e) {
							e != h && (d ? d == e && (d = e.n) : d = e, i(e.n, e.p), i(e, h), h = e, h.n = null)
						}
						function i(e, t) {
							e != t && (e && (e.p = t), t && (t.n = e))
						}
						if (e in t) throw Zn("cacheId " + e + " taken");
						var o = 0,
							s = c({}, n, {
								id: e
							}),
							a = {}, l = n && n.capacity || Number.MAX_VALUE,
							u = {}, h = null,
							d = null;
						return t[e] = {
							put: function(e, t) {
								var n = u[e] || (u[e] = {
									key: e
								});
								r(n), g(t) || (e in a || o++, a[e] = t, o > l && this.remove(d.key))
							},
							get: function(e) {
								var t = u[e];
								if (t) return r(t), a[e]
							},
							remove: function(e) {
								var t = u[e];
								t && (t == h && (h = t.p), t == d && (d = t.n), i(t.n, t.p), delete u[e], delete a[e], o--)
							},
							removeAll: function() {
								a = {}, o = 0, u = {}, h = d = null
							},
							destroy: function() {
								a = null, s = null, u = null, delete t[e]
							},
							info: function() {
								return c({}, s, {
									size: o
								})
							}
						}
					}
					var t = {};
					return e.info = function() {
						var e = {};
						return i(t, function(t, n) {
							e[n] = t.info()
						}), e
					}, e.get = function(e) {
						return t[e]
					}, e
				}
			}
			function St() {
				this.$get = ["$cacheFactory",
					function(e) {
						return e("templates")
					}
				]
			}
			function kt(e) {
				var t = {}, r = "Directive",
					o = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
					s = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
					l = "Template must have exactly one root element. was: ";
				this.directive = function u(n, o) {
					return A(n) ? (J(o, "directive"), t.hasOwnProperty(n) || (t[n] = [], e.factory(n + r, ["$injector", "$exceptionHandler",
						function(e, r) {
							var o = [];
							return i(t[n], function(t) {
								try {
									var i = e.invoke(t);
									F(i) ? i = {
										compile: p(i)
									} : !i.compile && i.link && (i.compile = p(i.link)), i.priority = i.priority || 0, i.name = i.name || n, i.require = i.require || i.controller && i.name, i.restrict = i.restrict || "A", o.push(i)
								} catch (s) {
									r(s)
								}
							}), o
						}
					])), t[n].push(o)) : i(n, a(u)), this
				}, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope",
					function(e, a, u, h, d, g, m, y) {
						function C(e, t, n) {
							e instanceof Kn || (e = Kn(e)), i(e, function(t, n) {
								3 == t.nodeType && (e[n] = Kn(t).wrap("<span></span>").parent()[0])
							});
							var r = b(e, t, e, n);
							return function(t, n) {
								J(t, "scope");
								var i = n ? pr.clone.call(e) : e;
								return i.data("$scope", t), w(i, "ng-scope"), n && n(i, t), r && r(t, i, i), i
							}
						}
						function w(e, t) {
							try {
								e.addClass(t)
							} catch (n) {}
						}
						function b(e, t, r, i) {
							function o(e, r, i, o) {
								for (var s, a, l, c, u, d = 0, f = 0, p = h.length; p > d; f++) l = r[f], s = h[d++], a = h[d++], s ? (s.scope ? (c = e.$new(v(s.scope)), Kn(l).data("$scope", c)) : c = e, u = s.transclude, u || !o && t ? s(a, c, l, i, function(t) {
										return function(n) {
											var r = e.$new();
											return t(r, n).bind("$destroy", I(r, r.$destroy))
										}
									}(u || t)) : s(a, c, l, n, o)) : a && a(e, l.childNodes, n, o)
							}
							for (var s, a, l, c, u, h = [], d = 0; e.length > d; d++) c = new N, l = $(e[d], [], c, i), s = l.length ? D(l, e[d], c, t, r) : null, a = s && s.terminal || !e[d].childNodes.length ? null : b(e[d].childNodes, s ? s.transclude : t), h.push(s), h.push(a), u = u || s || a;
							return u ? o : null
						}
						function $(e, t, n, r) {
							var i, a, l = e.nodeType,
								c = n.$attr;
							switch (l) {
								case 1:
									B(t, Tt(Xn(e).toLowerCase()), "E", r);
									for (var u, h, d, f, p = e.attributes, g = 0, m = p && p.length; m > g; g++) u = p[g], u.specified && (h = u.name, d = Tt(h.toLowerCase()), c[d] = h, n[d] = f = x(Jn && "href" == h ? decodeURIComponent(e.getAttribute(h, 2)) : u.value), yt(e, d) && (n[d] = !0), M(e, t, f, d), B(t, d, "A", r));
									if (a = e.className, A(a) && "" !== a) for (; i = s.exec(a);) d = Tt(i[2]), B(t, d, "C", r) && (n[d] = x(i[3])), a = a.substr(i.index + i[0].length);
									break;
								case 3:
									L(t, e.nodeValue);
									break;
								case 8:
									try {
										i = o.exec(e.nodeValue), i && (d = Tt(i[1]), B(t, d, "M", r) && (n[d] = x(i[2])))
									} catch (v) {}
							}
							return t.sort(k), t
						}
						function D(e, t, r, o, s) {
							function a(e, t) {
								e && (e.require = d.require, L.push(e)), t && (t.require = d.require, M.push(t))
							}
							function c(e, t) {
								var n, r = "data",
									o = !1;
								if (A(e)) {
									for (;
									"^" == (n = e.charAt(0)) || "?" == n;) e = e.substr(1), "^" == n && (r = "inheritedData"), o = o || "?" == n;
									if (n = t[r]("$" + e + "Controller"), !n && !o) throw Zn("No controller: " + e);
									return n
								}
								return E(e) && (n = [], i(e, function(e) {
									n.push(c(e, t))
								})), n
							}
							function h(e, o, s, a, l) {
								var h, d, f, p, v, A;
								if (h = t === s ? r : R(r, new N(Kn(s), r.$attr)), d = h.$$element, I) {
									var y = /^\s*([@=&])\s*(\w*)\s*$/,
										C = o.$parent || o;
									i(I.scope, function(e, t) {
										var n, r, i, s = e.match(y) || [],
											a = s[2] || t,
											l = s[1];
										switch (l) {
											case "@":
												h.$observe(a, function(e) {
													o[t] = e
												}), h.$$observers[a].$$scope = C;
												break;
											case "=":
												r = g(h[a]), i = r.assign || function() {
													throw n = o[t] = r(C), Zn(Fr + h[a] + " (directive: " + I.name + ")")
												}, n = o[t] = r(C), o.$watch(function() {
													var e = r(C);
													return e !== o[t] && (e !== n ? n = o[t] = e : i(C, e = n = o[t])), e
												});
												break;
											case "&":
												r = g(h[a]), o[t] = function(e) {
													return r(C, e)
												};
												break;
											default:
												throw Zn("Invalid isolate scope definition for directive " + I.name + ": " + e)
										}
									})
								}
								for (b && i(b, function(e) {
									var t = {
										$scope: o,
										$element: d,
										$attrs: h,
										$transclude: l
									};
									A = e.controller, "@" == A && (A = h[e.name]), d.data("$" + e.name + "Controller", m(A, t))
								}), f = 0, p = L.length; p > f; f++) try {
										v = L[f], v(o, d, h, v.require && c(v.require, d))
								} catch (E) {
									u(E, U(d))
								}
								for (e && e(o, s.childNodes, n, l), f = 0, p = M.length; p > f; f++) try {
										v = M[f], v(o, d, h, v.require && c(v.require, d))
								} catch (E) {
									u(E, U(d))
								}
							}
							for (var d, f, p, y, b, D, B, k = -Number.MAX_VALUE, L = [], M = [], O = null, I = null, j = null, z = r.$$element = Kn(t), W = o, q = 0, G = e.length; G > q && (d = e[q], p = n, !(k > d.priority)); q++) {
								if ((B = d.scope) && (T("isolated scope", I, d, z), v(B) && (w(z, "ng-isolate-scope"), I = d), w(z, "ng-scope"), O = O || d), f = d.name, (B = d.controller) && (b = b || {}, T("'" + f + "' controller", b[f], d, z), b[f] = d), (B = d.transclude) && (T("transclusion", y, d, z), y = d, k = d.priority, "element" == B ? (p = Kn(t), z = r.$$element = Kn("<!-- " + f + ": " + r[f] + " -->"), t = z[0], P(s, Kn(p[0]), t), W = C(p, o, k)) : (p = Kn(at(t)).contents(), z.html(""), W = C(p, o))), B = d.template) if (T("template", j, d, z), j = d, B = H(B), d.replace) {
										if (p = Kn("<div>" + x(B) + "</div>").contents(), t = p[0], 1 != p.length || 1 !== t.nodeType) throw new Zn(l + B);
										P(s, z, t);
										var V = {
											$attr: {}
										};
										e = e.concat($(t, e.splice(q + 1, e.length - (q + 1)), V)), _(r, V), G = e.length
									} else z.html(B);
								if (d.templateUrl) T("template", j, d, z), j = d, h = S(e.splice(q, e.length - q), h, z, r, s, d.replace, W), G = e.length;
								else if (d.compile) try {
										D = d.compile(z, r, W), F(D) ? a(null, D) : D && a(D.pre, D.post)
								} catch (K) {
									u(K, U(z))
								}
								d.terminal && (h.terminal = !0, k = Math.max(k, d.priority))
							}
							return h.scope = O && O.scope, h.transclude = y && W, h
						}
						function B(i, o, s, a) {
							var l = !1;
							if (t.hasOwnProperty(o)) for (var c, h = e.get(o + r), d = 0, f = h.length; f > d; d++) try {
										c = h[d], (a === n || a > c.priority) && -1 != c.restrict.indexOf(s) && (i.push(c), l = !0)
							} catch (p) {
								u(p)
							}
							return l
						}
						function _(e, t) {
							var n = t.$attr,
								r = e.$attr,
								o = e.$$element;
							i(e, function(r, i) {
								"$" != i.charAt(0) && (t[i] && (r += ("style" === i ? ";" : " ") + t[i]), e.$set(i, r, !0, n[i]))
							}), i(t, function(t, i) {
								"class" == i ? (w(o, t), e["class"] = (e["class"] ? e["class"] + " " : "") + t) : "style" == i ? o.attr("style", o.attr("style") + ";" + t) : "$" == i.charAt(0) || e.hasOwnProperty(i) || (e[i] = t, r[i] = n[i])
							})
						}
						function S(e, t, n, r, i, o, s) {
							var a, u, f = [],
								p = n[0],
								g = e.shift(),
								m = c({}, g, {
									controller: null,
									templateUrl: null,
									transclude: null,
									scope: null
								});
							return n.html(""), h.get(g.templateUrl, {
								cache: d
							}).success(function(c) {
								var h, d, g;
								if (c = H(c), o) {
									if (g = Kn("<div>" + x(c) + "</div>").contents(), h = g[0], 1 != g.length || 1 !== h.nodeType) throw new Zn(l + c);
									d = {
										$attr: {}
									}, P(i, n, h), $(h, e, d), _(r, d)
								} else h = p, n.html(c);
								for (e.unshift(m), a = D(e, n, r, s), u = b(n.contents(), s); f.length;) {
									var v = f.pop(),
										A = f.pop(),
										y = f.pop(),
										C = f.pop(),
										E = h;
									y !== p && (E = at(h), P(A, Kn(y), E)), a(function() {
										t(u, C, E, i, v)
									}, C, E, i, v)
								}
								f = null
							}).error(function(e, t, n, r) {
								throw Zn("Failed to load template: " + r.url)
							}),
							function(e, n, r, i, o) {
								f ? (f.push(n), f.push(r), f.push(i), f.push(o)) : a(function() {
									t(u, n, r, i, o)
								}, n, r, i, o)
							}
						}
						function k(e, t) {
							return t.priority - e.priority
						}
						function T(e, t, n, r) {
							if (t) throw Zn("Multiple directives [" + t.name + ", " + n.name + "] asking for " + e + " on: " + U(r))
						}
						function L(e, t) {
							var n = a(t, !0);
							n && e.push({
								priority: 0,
								compile: p(function(e, t) {
									var r = t.parent(),
										i = r.data("$binding") || [];
									i.push(n), w(r.data("$binding", i), "ng-binding"), e.$watch(n, function(e) {
										t[0].nodeValue = e
									})
								})
							})
						}
						function M(e, t, r, i) {
							var o = a(r, !0);
							o && t.push({
								priority: 100,
								compile: p(function(e, t, r) {
									var s = r.$$observers || (r.$$observers = {});
									"class" === i && (o = a(r[i], !0)), r[i] = n, (s[i] || (s[i] = [])).$$inter = !0, (r.$$observers && r.$$observers[i].$$scope || e).$watch(o, function(e) {
										r.$set(i, e)
									})
								})
							})
						}
						function P(e, t, n) {
							var r, i, o = t[0],
								s = o.parentNode;
							if (e) for (r = 0, i = e.length; i > r; r++) if (e[r] == o) {
										e[r] = n;
										break
									}
							s && s.replaceChild(n, o), n[Kn.expando] = o[Kn.expando], t[0] = n
						}
						var N = function(e, t) {
							this.$$element = e, this.$attr = t || {}
						};
						N.prototype = {
							$normalize: Tt,
							$set: function(e, t, r, o) {
								var s = yt(this.$$element[0], e),
									a = this.$$observers;
								s && (this.$$element.prop(e, t), o = s), this[e] = t, o ? this.$attr[e] = o : (o = this.$attr[e], o || (this.$attr[e] = o = X(e, "-"))), r !== !1 && (null === t || t === n ? this.$$element.removeAttr(o) : this.$$element.attr(o, t)), a && i(a[e], function(e) {
									try {
										e(t)
									} catch (n) {
										u(n)
									}
								})
							},
							$observe: function(e, t) {
								var n = this,
									r = n.$$observers || (n.$$observers = {}),
									i = r[e] || (r[e] = []);
								return i.push(t), y.$evalAsync(function() {
									i.$$inter || t(n[e])
								}), t
							}
						};
						var O = a.startSymbol(),
							j = a.endSymbol(),
							H = "{{" == O || "}}" == j ? f : function H(e) {
								return e.replace(/\{\{/g, O).replace(/}}/g, j)
							};
						return C
					}
				]
			}
			function Tt(e) {
				return it(e.replace(wr, ""))
			}
			function Lt() {
				var e = {};
				this.register = function(t, n) {
					v(t) ? c(e, t) : e[t] = n
				}, this.$get = ["$injector", "$window",
					function(t, n) {
						return function(r, i) {
							if (A(r)) {
								var o = r;
								r = e.hasOwnProperty(o) ? e[o] : Jt(i.$scope, o, !0) || Jt(n, o, !0), et(r, o, !0)
							}
							return t.instantiate(r, i)
						}
					}
				]
			}
			function Mt() {
				this.$get = ["$window",
					function(e) {
						return Kn(e.document)
					}
				]
			}
			function Rt() {
				this.$get = ["$log",
					function(e) {
						return function() {
							e.error.apply(e, arguments)
						}
					}
				]
			}
			function Pt() {
				var e = "{{",
					t = "}}";
				this.startSymbol = function(t) {
					return t ? (e = t, this) : e
				}, this.endSymbol = function(e) {
					return e ? (t = e, this) : t
				}, this.$get = ["$parse",
					function(r) {
						function i(i, a) {
							for (var l, c, u, h, d = 0, f = [], p = i.length, g = !1, m = []; p > d;) - 1 != (l = i.indexOf(e, d)) && -1 != (c = i.indexOf(t, l + o)) ? (d != l && f.push(i.substring(d, l)), f.push(u = r(h = i.substring(l + o, c))), u.exp = h, d = c + s, g = !0) : (d != p && f.push(i.substring(d)), d = p);
							return (p = f.length) || (f.push(""), p = 1), !a || g ? (m.length = p, u = function(e) {
								for (var t, r = 0, i = p; i > r; r++) "function" == typeof(t = f[r]) && (t = t(e), null == t || t == n ? t = "" : "string" != typeof t && (t = H(t))), m[r] = t;
								return m.join("")
							}, u.exp = i, u.parts = f, u) : n
						}
						var o = e.length,
							s = t.length;
						return i.startSymbol = function() {
							return e
						}, i.endSymbol = function() {
							return t
						}, i
					}
				]
			}
			function Nt(e) {
				for (var t = e.split("/"), n = t.length; n--;) t[n] = V(t[n]);
				return t.join("/")
			}
			function Ot(e, t) {
				var n = br.exec(e);
				return n = {
					protocol: n[1],
					host: n[3],
					port: u(n[5]) || Dr[n[1]] || null,
					path: n[6] || "/",
					search: n[8],
					hash: n[10]
				}, t && (t.$$protocol = n.protocol, t.$$host = n.host, t.$$port = n.port), n
			}
			function It(e, t, n) {
				return e + "://" + t + (n == Dr[e] ? "" : ":" + n)
			}
			function jt(e) {
				return e.substr(0, e.lastIndexOf("/"))
			}
			function Ht(e, t, n) {
				var r = Ot(e);
				return decodeURIComponent(r.path) != t || g(r.hash) || 0 !== r.hash.indexOf(n) ? e : It(r.protocol, r.host, r.port) + jt(t) + r.hash.substr(n.length)
			}
			function zt(e, t, n) {
				var r = Ot(e);
				if (decodeURIComponent(r.path) == t) return e;
				var i = r.search && "?" + r.search || "",
					o = r.hash && "#" + r.hash || "",
					s = jt(t),
					a = r.path.substr(s.length);
				if (0 !== r.path.indexOf(s)) throw Zn('Invalid url "' + e + '", missing path prefix "' + s + '" !');
				return It(r.protocol, r.host, r.port) + t + "#" + n + a + i + o
			}
			function Wt(e, t, r) {
				t = t || "", this.$$parse = function(e) {
					var n = Ot(e, this);
					if (0 !== n.path.indexOf(t)) throw Zn('Invalid url "' + e + '", missing path prefix "' + t + '" !');
					this.$$path = decodeURIComponent(n.path.substr(t.length)), this.$$search = q(n.search), this.$$hash = n.hash && decodeURIComponent(n.hash) || "", this.$$compose()
				}, this.$$compose = function() {
					var e = G(this.$$search),
						n = this.$$hash ? "#" + V(this.$$hash) : "";
					this.$$url = Nt(this.$$path) + (e ? "?" + e : "") + n, this.$$absUrl = It(this.$$protocol, this.$$host, this.$$port) + t + this.$$url
				}, this.$$rewriteAppUrl = function(e) {
					return 0 == e.indexOf(r) ? e : n
				}, this.$$parse(e)
			}
			function Ut(e, t, r) {
				var i;
				this.$$parse = function(e) {
					var n = Ot(e, this);
					if (n.hash && 0 !== n.hash.indexOf(t)) throw Zn('Invalid url "' + e + '", missing hash prefix "' + t + '" !');
					i = n.path + (n.search ? "?" + n.search : ""), n = xr.exec((n.hash || "").substr(t.length)), this.$$path = n[1] ? ("/" == n[1].charAt(0) ? "" : "/") + decodeURIComponent(n[1]) : "", this.$$search = q(n[3]), this.$$hash = n[5] && decodeURIComponent(n[5]) || "", this.$$compose()
				}, this.$$compose = function() {
					var e = G(this.$$search),
						n = this.$$hash ? "#" + V(this.$$hash) : "";
					this.$$url = Nt(this.$$path) + (e ? "?" + e : "") + n, this.$$absUrl = It(this.$$protocol, this.$$host, this.$$port) + i + (this.$$url ? "#" + t + this.$$url : "")
				}, this.$$rewriteAppUrl = function(e) {
					return 0 == e.indexOf(r) ? e : n
				}, this.$$parse(e)
			}
			function qt(e, t, r, i) {
				Ut.apply(this, arguments), this.$$rewriteAppUrl = function(e) {
					return 0 == e.indexOf(r) ? r + i + "#" + t + e.substr(r.length) : n
				}
			}
			function Gt(e) {
				return function() {
					return this[e]
				}
			}
			function Vt(e, t) {
				return function(n) {
					return g(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
				}
			}
			function Kt() {
				var t = "",
					n = !1;
				this.hashPrefix = function(e) {
					return m(e) ? (t = e, this) : t
				}, this.html5Mode = function(e) {
					return m(e) ? (n = e, this) : n
				}, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement",
					function(r, i, o, s) {
						function a(e) {
							r.$broadcast("$locationChangeSuccess", l.absUrl(), e)
						}
						var l, c, u, h, d = i.url(),
							f = Ot(d);
						n ? (c = i.baseHref() || "/", u = jt(c), h = It(f.protocol, f.host, f.port) + u + "/", l = o.history ? new Wt(Ht(d, c, t), u, h) : new qt(zt(d, c, t), t, h, c.substr(u.length + 1))) : (h = It(f.protocol, f.host, f.port) + (f.path || "") + (f.search ? "?" + f.search : "") + "#" + t + "/", l = new Ut(d, t, h)), s.bind("click", function(t) {
							if (!t.ctrlKey && !t.metaKey && 2 != t.which) {
								for (var n = Kn(t.target);
								"a" !== Un(n[0].nodeName);) if (n[0] === s[0] || !(n = n.parent())[0]) return;
								var i = n.prop("href"),
									o = l.$$rewriteAppUrl(i);
								i && !n.attr("target") && o && (l.$$parse(o), r.$apply(), t.preventDefault(), e.angular["ff-684208-preventDefault"] = !0)
							}
						}), l.absUrl() != d && i.url(l.absUrl(), !0), i.onUrlChange(function(e) {
							l.absUrl() != e && (r.$evalAsync(function() {
								var t = l.absUrl();
								l.$$parse(e), a(t)
							}), r.$$phase || r.$digest())
						});
						var p = 0;
						return r.$watch(function() {
							var e = i.url(),
								t = l.$$replace;
							return p && e == l.absUrl() || (p++, r.$evalAsync(function() {
								r.$broadcast("$locationChangeStart", l.absUrl(), e).defaultPrevented ? l.$$parse(e) : (i.url(l.absUrl(), t), a(e))
							})), l.$$replace = !1, p
						}), l
					}
				]
			}
			function Yt() {
				this.$get = ["$window",
					function(e) {
						function t(e) {
							return e instanceof Zn && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
						}
						function n(n) {
							var r = e.console || {}, o = r[n] || r.log || d;
							return o.apply ? function() {
								var e = [];
								return i(arguments, function(n) {
									e.push(t(n))
								}), o.apply(r, e)
							} : function(e, t) {
								o(e, t)
							}
						}
						return {
							log: n("log"),
							warn: n("warn"),
							info: n("info"),
							error: n("error")
						}
					}
				]
			}
			function Qt(e, t) {
				function r(e) {
					return -1 != e.indexOf(v)
				}
				function i(e) {
					return -1 != e.indexOf(E)
				}
				function o() {
					return e.length > y + 1 ? e.charAt(y + 1) : !1
				}
				function s(e) {
					return e >= "0" && "9" >= e
				}
				function a(e) {
					return " " == e || "\r" == e || "	" == e || "\n" == e || "" == e || " " == e
				}
				function l(e) {
					return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" == e || "$" == e
				}
				function u(e) {
					return "-" == e || "+" == e || s(e)
				}
				function h(t, n, r) {
					throw r = r || y, Zn("Lexer Error: " + t + " at column" + (m(n) ? "s " + n + "-" + y + " [" + e.substring(n, r) + "]" : " " + r) + " in expression [" + e + "].")
				}
				function d() {
					for (var t = "", n = y; e.length > y;) {
						var r = Un(e.charAt(y));
						if ("." == r || s(r)) t += r;
						else {
							var i = o();
							if ("e" == r && u(i)) t += r;
							else if (u(r) && i && s(i) && "e" == t.charAt(t.length - 1)) t += r;
							else {
								if (!u(r) || i && s(i) || "e" != t.charAt(t.length - 1)) break;
								h("Invalid exponent")
							}
						}
						y++
					}
					t = 1 * t, A.push({
						index: n,
						text: t,
						json: !0,
						fn: function() {
							return t
						}
					})
				}
				function f() {
					for (var n, r, i, o = "", u = y; e.length > y;) {
						var h = e.charAt(y);
						if ("." != h && !l(h) && !s(h)) break;
						"." == h && (n = y), o += h, y++
					}
					if (n) for (r = y; e.length > r;) {
							var h = e.charAt(r);
							if ("(" == h) {
								i = o.substr(n - u + 1), o = o.substr(0, n - u), y = r;
								break
							}
							if (!a(h)) break;
							r++
					}
					var d = {
						index: u,
						text: o
					};
					if (Br.hasOwnProperty(o)) d.fn = d.json = Br[o];
					else {
						var f = tn(o, t);
						d.fn = c(function(e, t) {
							return f(e, t)
						}, {
							assign: function(e, t) {
								return Zt(e, o, t)
							}
						})
					}
					A.push(d), i && (A.push({
						index: n,
						text: ".",
						json: !1
					}), A.push({
						index: n + 1,
						text: i,
						json: !1
					}))
				}
				function p(t) {
					var r = y;
					y++;
					for (var i = "", o = t, s = !1; e.length > y;) {
						var a = e.charAt(y);
						if (o += a, s) {
							if ("u" == a) {
								var l = e.substring(y + 1, y + 5);
								l.match(/[\da-f]{4}/i) || h("Invalid unicode escape [\\u" + l + "]"), y += 4, i += String.fromCharCode(parseInt(l, 16))
							} else {
								var c = _r[a];
								i += c ? c : a
							}
							s = !1
						} else if ("\\" == a) s = !0;
						else {
							if (a == t) return y++, A.push({
									index: r,
									text: o,
									string: i,
									json: !0,
									fn: function() {
										return i
									}
								}), n;
							i += a
						}
						y++
					}
					h("Unterminated quote", r)
				}
				for (var g, v, A = [], y = 0, C = [], E = ":"; e.length > y;) {
					if (v = e.charAt(y), r("\"'")) p(v);
					else if (s(v) || r(".") && s(o())) d();
					else if (l(v)) f(), i("{,") && "{" == C[0] && (g = A[A.length - 1]) && (g.json = -1 == g.text.indexOf("."));
					else if (r("(){}[].,;:")) A.push({
							index: y,
							text: v,
							json: i(":[,") && r("{[") || r("}]:,")
						}), r("{[") && C.unshift(v), r("}]") && C.shift(), y++;
					else {
						if (a(v)) {
							y++;
							continue
						}
						var F = v + o(),
							w = Br[v],
							b = Br[F];
						b ? (A.push({
							index: y,
							text: F,
							fn: b
						}), y += 2) : w ? (A.push({
							index: y,
							text: v,
							fn: w,
							json: i("[,:") && r("+-")
						}), y += 1) : h("Unexpected next character ", y, y + 1)
					}
					E = v
				}
				return A
			}
			function Xt(e, t, r, i) {
				function o(t, n) {
					throw Zn("Syntax Error: Token '" + n.text + "' " + t + " at column " + (n.index + 1) + " of the expression [" + e + "] starting at [" + e.substring(n.index) + "].")
				}
				function s() {
					if (0 === R.length) throw Zn("Unexpected end of expression: " + e);
					return R[0]
				}
				function a(e, t, n, r) {
					if (R.length > 0) {
						var i = R[0],
							o = i.text;
						if (o == e || o == t || o == n || o == r || !e && !t && !n && !r) return i
					}
					return !1
				}
				function l(e, n, r, i) {
					var s = a(e, n, r, i);
					return s ? (t && !s.json && o("is not valid json", s), R.shift(), s) : !1
				}
				function u(e) {
					l(e) || o("is unexpected, expecting [" + e + "]", a())
				}
				function h(e, t) {
					return function(n, r) {
						return e(n, r, t)
					}
				}
				function f(e, t, n) {
					return function(r, i) {
						return t(r, i, e, n)
					}
				}
				function g() {
					for (var e = [];;) if (R.length > 0 && !a("}", ")", ";", "]") && e.push(j()), !l(";")) return 1 == e.length ? e[0] : function(t, n) {
								for (var r, i = 0; e.length > i; i++) {
									var o = e[i];
									o && (r = o(t, n))
								}
								return r
						}
				}
				function m() {
					for (var e, t = A();;) {
						if (!(e = l("|"))) return t;
						t = f(t, e.fn, v())
					}
				}
				function v() {
					for (var e = l(), t = r(e.text), n = [];;) {
						if (!(e = l(":"))) {
							var i = function(e, r, i) {
								for (var o = [i], s = 0; n.length > s; s++) o.push(n[s](e, r));
								return t.apply(e, o)
							};
							return function() {
								return i
							}
						}
						n.push(A())
					}
				}
				function A() {
					return P()
				}
				function y() {
					var t, n, r = C();
					return (n = l("=")) ? (r.assign || o("implies assignment but [" + e.substring(0, n.index) + "] can not be assigned to", n), t = C(), function(e, n) {
						return r.assign(e, t(e, n), n)
					}) : r
				}
				function C() {
					for (var e, t = E();;) {
						if (!(e = l("||"))) return t;
						t = f(t, e.fn, E())
					}
				}
				function E() {
					var e, t = F();
					return (e = l("&&")) && (t = f(t, e.fn, E())), t
				}
				function F() {
					var e, t = w();
					return (e = l("==", "!=")) && (t = f(t, e.fn, F())), t
				}
				function w() {
					var e, t = b();
					return (e = l("<", ">", "<=", ">=")) && (t = f(t, e.fn, w())), t
				}
				function b() {
					for (var e, t = $(); e = l("+", "-");) t = f(t, e.fn, $());
					return t
				}
				function $() {
					for (var e, t = x(); e = l("*", "/", "%");) t = f(t, e.fn, x());
					return t
				}
				function x() {
					var e;
					return l("+") ? D() : (e = l("-")) ? f(M, e.fn, x()) : (e = l("!")) ? h(e.fn, x()) : D()
				}
				function D() {
					var e;
					if (l("(")) e = j(), u(")");
					else if (l("[")) e = k();
					else if (l("{")) e = T();
					else {
						var t = l();
						e = t.fn, e || o("not a primary expression", t)
					}
					for (var n, r; n = l("(", "[", ".");) "(" === n.text ? (e = N(e, r), r = null) : "[" === n.text ? (r = e, e = I(e)) : "." === n.text ? (r = e, e = O(e)) : o("IMPOSSIBLE");
					return e
				}
				function B(e) {
					var t = l().text,
						n = tn(t, i);
					return c(function(t, r) {
						return n(e(t, r), r)
					}, {
						assign: function(n, r, i) {
							return Zt(e(n, i), t, r)
						}
					})
				}
				function _(e) {
					var t = A();
					return u("]"), c(function(r, i) {
						var o, s, a = e(r, i),
							l = t(r, i);
						return a ? (o = a[l], o && o.then && (s = o, "$$v" in o || (s.$$v = n, s.then(function(e) {
							s.$$v = e
						})), o = o.$$v), o) : n
					}, {
						assign: function(n, r, i) {
							return e(n, i)[t(n, i)] = r
						}
					})
				}
				function S(e, t) {
					var n = [];
					if (")" != s().text) do n.push(A());
					while (l(","));
					return u(")"),
					function(r, i) {
						for (var o = [], s = t ? t(r, i) : r, a = 0; n.length > a; a++) o.push(n[a](r, i));
						var l = e(r, i) || d;
						return l.apply ? l.apply(s, o) : l(o[0], o[1], o[2], o[3], o[4])
					}
				}
				function k() {
					var e = [];
					if ("]" != s().text) do e.push(A());
					while (l(","));
					return u("]"),
					function(t, n) {
						for (var r = [], i = 0; e.length > i; i++) r.push(e[i](t, n));
						return r
					}
				}
				function T() {
					var e = [];
					if ("}" != s().text) do {
							var t = l(),
								n = t.string || t.text;
							u(":");
							var r = A();
							e.push({
								key: n,
								value: r
							})
					}
					while (l(","));
					return u("}"),
					function(t, n) {
						for (var r = {}, i = 0; e.length > i; i++) {
							var o = e[i],
								s = o.value(t, n);
							r[o.key] = s
						}
						return r
					}
				}
				var L, M = p(0),
					R = Qt(e, i),
					P = y,
					N = S,
					O = B,
					I = _,
					j = m;
				return t ? (P = C, N = O = I = j = function() {
					o("is not valid json", {
						text: e,
						index: 0
					})
				}, L = D()) : L = g(), 0 !== R.length && o("is an unexpected token", R[0]), L
			}
			function Zt(e, t, n) {
				for (var r = t.split("."), i = 0; r.length > 1; i++) {
					var o = r.shift(),
						s = e[o];
					s || (s = {}, e[o] = s), e = s
				}
				return e[r.shift()] = n, n
			}
			function Jt(e, t, n) {
				if (!t) return e;
				for (var r, i = t.split("."), o = e, s = i.length, a = 0; s > a; a++) r = i[a], e && (e = (o = e)[r]);
				return !n && F(e) ? I(o, e) : e
			}
			function en(e, t, r, i, o) {
				return function(s, a) {
					var l, c = a && a.hasOwnProperty(e) ? a : s;
					return null === c || c === n ? c : (c = c[e], c && c.then && ("$$v" in c || (l = c, l.$$v = n, l.then(function(e) {
						l.$$v = e
					})), c = c.$$v), t && null !== c && c !== n ? (c = c[t], c && c.then && ("$$v" in c || (l = c, l.$$v = n, l.then(function(e) {
						l.$$v = e
					})), c = c.$$v), r && null !== c && c !== n ? (c = c[r], c && c.then && ("$$v" in c || (l = c, l.$$v = n, l.then(function(e) {
						l.$$v = e
					})), c = c.$$v), i && null !== c && c !== n ? (c = c[i], c && c.then && ("$$v" in c || (l = c, l.$$v = n, l.then(function(e) {
						l.$$v = e
					})), c = c.$$v), o && null !== c && c !== n ? (c = c[o], c && c.then && ("$$v" in c || (l = c, l.$$v = n, l.then(function(e) {
						l.$$v = e
					})), c = c.$$v), c) : c) : c) : c) : c)
				}
			}
			function tn(e, t) {
				if (Sr.hasOwnProperty(e)) return Sr[e];
				var r, o = e.split("."),
					s = o.length;
				if (t) r = 6 > s ? en(o[0], o[1], o[2], o[3], o[4]) : function(e, t) {
						var r, i = 0;
						do r = en(o[i++], o[i++], o[i++], o[i++], o[i++])(e, t), t = n, e = r; while (s > i);
						return r
				};
				else {
					var a = "var l, fn, p;\n";
					i(o, function(e, t) {
						a += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (t ? "s" : '((k&&k.hasOwnProperty("' + e + '"))?k:s)') + '["' + e + '"]' + ";\n" + "if (s && s.then) {\n" + ' if (!("$$v" in s)) {\n' + " p=s;\n" + " p.$$v = undefined;\n" + " p.then(function(v) {p.$$v=v;});\n" + "}\n" + " s=s.$$v\n" + "}\n"
					}), a += "return s;", r = Function("s", "k", a), r.toString = function() {
						return a
					}
				}
				return Sr[e] = r
			}
			function nn() {
				var e = {};
				this.$get = ["$filter", "$sniffer",
					function(t, n) {
						return function(r) {
							switch (typeof r) {
								case "string":
									return e.hasOwnProperty(r) ? e[r] : e[r] = Xt(r, !1, t, n.csp);
								case "function":
									return r;
								default:
									return d
							}
						}
					}
				]
			}
			function rn() {
				this.$get = ["$rootScope", "$exceptionHandler",
					function(e, t) {
						return on(function(t) {
							e.$evalAsync(t)
						}, t)
					}
				]
			}
			function on(e, t) {
				function r(e) {
					return e
				}
				function o(e) {
					return c(e)
				}
				function s(e) {
					var t = a(),
						n = e.length,
						r = [];
					return n ? i(e, function(e, i) {
						l(e).then(function(e) {
							i in r || (r[i] = e, --n || t.resolve(r))
						}, function(e) {
							i in r || t.reject(e)
						})
					}) : t.resolve(r), t.promise
				}
				var a = function() {
					var i, s, u = [];
					return s = {
						resolve: function(t) {
							if (u) {
								var r = u;
								u = n, i = l(t), r.length && e(function() {
									for (var e, t = 0, n = r.length; n > t; t++) e = r[t], i.then(e[0], e[1])
								})
							}
						},
						reject: function(e) {
							s.resolve(c(e))
						},
						promise: {
							then: function(e, n) {
								var s = a(),
									l = function(n) {
										try {
											s.resolve((e || r)(n))
										} catch (i) {
											t(i), s.reject(i)
										}
									}, c = function(e) {
										try {
											s.resolve((n || o)(e))
										} catch (r) {
											t(r), s.reject(r)
										}
									};
								return u ? u.push([l, c]) : i.then(l, c), s.promise
							}
						}
					}
				}, l = function(t) {
						return t && t.then ? t : {
							then: function(n) {
								var r = a();
								return e(function() {
									r.resolve(n(t))
								}), r.promise
							}
						}
					}, c = function(t) {
						return {
							then: function(n, r) {
								var i = a();
								return e(function() {
									i.resolve((r || o)(t))
								}), i.promise
							}
						}
					}, u = function(n, i, s) {
						var u, h = a(),
							d = function(e) {
								try {
									return (i || r)(e)
								} catch (n) {
									return t(n), c(n)
								}
							}, f = function(e) {
								try {
									return (s || o)(e)
								} catch (n) {
									return t(n), c(n)
								}
							};
						return e(function() {
							l(n).then(function(e) {
								u || (u = !0, h.resolve(l(e).then(d, f)))
							}, function(e) {
								u || (u = !0, h.resolve(f(e)))
							})
						}), h.promise
					};
				return {
					defer: a,
					reject: c,
					when: u,
					all: s
				}
			}
			function sn() {
				var e = {};
				this.when = function(t, n) {
					if (e[t] = c({
						reloadOnSearch: !0
					}, n), t) {
						var r = "/" == t[t.length - 1] ? t.substr(0, t.length - 1) : t + "/";
						e[r] = {
							redirectTo: t
						}
					}
					return this
				}, this.otherwise = function(e) {
					return this.when(null, e), this
				}, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache",
					function(t, n, r, o, s, a, l) {
						function u(e, t) {
							var n = "^" + t.replace(/([\.\\\(\)\^\$])/g, "\\$1") + "$",
								r = [],
								o = {};
							i(t.split(/\W/), function(e) {
								if (e) {
									var t = RegExp(":" + e + "([\\W])");
									n.match(t) && (n = n.replace(t, "([^\\/]*)$1"), r.push(e))
								}
							});
							var s = e.match(RegExp(n));
							return s && i(r, function(e, t) {
								o[e] = s[t + 1]
							}), s ? o : null
						}
						function d() {
							var e = f(),
								c = y.current;
							e && c && e.$route === c.$route && P(e.pathParams, c.pathParams) && !e.reloadOnSearch && !v ? (c.params = e.params, M(c.params, r), t.$broadcast("$routeUpdate", c)) : (e || c) && (v = !1, t.$broadcast("$routeChangeStart", e, c), y.current = e, e && e.redirectTo && (A(e.redirectTo) ? n.path(p(e.redirectTo, e.params)).search(e.params).replace() : n.url(e.redirectTo(e.pathParams, n.path(), n.search())).replace()), o.when(e).then(function() {
								if (e) {
									var t, n = [],
										r = [];
									return i(e.resolve || {}, function(e, t) {
										n.push(t), r.push(A(e) ? s.get(e) : s.invoke(e))
									}), m(t = e.template) || m(t = e.templateUrl) && (t = a.get(t, {
										cache: l
									}).then(function(e) {
										return e.data
									})), m(t) && (n.push("$template"), r.push(t)), o.all(r).then(function(e) {
										var t = {};
										return i(e, function(e, r) {
											t[n[r]] = e
										}), t
									})
								}
							}).then(function(n) {
								e == y.current && (e && (e.locals = n, M(e.params, r)), t.$broadcast("$routeChangeSuccess", e, c))
							}, function(n) {
								e == y.current && t.$broadcast("$routeChangeError", e, c, n)
							}))
						}
						function f() {
							var t, r;
							return i(e, function(e, i) {
								!r && (t = g(n.path(), i)) && (r = h(e, {
									params: c({}, n.search(), t),
									pathParams: t
								}), r.$route = e)
							}), r || e[null] && h(e[null], {
								params: {},
								pathParams: {}
							})
						}
						function p(e, t) {
							var n = [];
							return i((e || "").split(":"), function(e, r) {
								if (0 == r) n.push(e);
								else {
									var i = e.match(/(\w+)(.*)/),
										o = i[1];
									n.push(t[o]), n.push(i[2] || ""), delete t[o]
								}
							}), n.join("")
						}
						var g = u,
							v = !1,
							y = {
								routes: e,
								reload: function() {
									v = !0, t.$evalAsync(d)
								}
							};
						return t.$on("$locationChangeSuccess", d), y
					}
				]
			}
			function an() {
				this.$get = p({})
			}
			function ln() {
				var e = 10;
				this.digestTtl = function(t) {
					return arguments.length && (e = t), e
				}, this.$get = ["$injector", "$exceptionHandler", "$parse",
					function(t, n, r) {
						function i() {
							this.$id = l(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$asyncQueue = [], this.$$listeners = {}
						}
						function o(e) {
							if (u.$$phase) throw Zn(u.$$phase + " already in progress");
							u.$$phase = e
						}
						function s() {
							u.$$phase = null
						}
						function a(e, t) {
							var n = r(e);
							return et(n, t), n
						}
						function c() {}
						i.prototype = {
							$new: function(e) {
								var t, n;
								if (F(e)) throw Zn("API-CHANGE: Use $controller to instantiate controllers.");
								return e ? (n = new i, n.$root = this.$root) : (t = function() {}, t.prototype = this, n = new t, n.$id = l()), n["this"] = n, n.$$listeners = {}, n.$parent = this, n.$$asyncQueue = [], n.$$watchers = n.$$nextSibling = n.$$childHead = n.$$childTail = null, n.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = n, this.$$childTail = n) : this.$$childHead = this.$$childTail = n, n
							},
							$watch: function(e, t, n) {
								var r = this,
									i = a(e, "watch"),
									o = r.$$watchers,
									s = {
										fn: t,
										last: c,
										get: i,
										exp: e,
										eq: !! n
									};
								if (!F(t)) {
									var l = a(t || d, "listener");
									s.fn = function(e, t, n) {
										l(n)
									}
								}
								return o || (o = r.$$watchers = []), o.unshift(s),
								function() {
									L(o, s)
								}
							},
							$digest: function() {
								var t, r, i, a, l, u, h, d, f, p, g, m = e,
									v = this,
									A = [];
								o("$digest");
								do {
									h = !1, f = v;
									do {
										for (l = f.$$asyncQueue; l.length;) try {
												f.$eval(l.shift())
										} catch (y) {
											n(y)
										}
										if (a = f.$$watchers) for (u = a.length; u--;) try {
													t = a[u], (r = t.get(f)) === (i = t.last) || (t.eq ? P(r, i) : "number" == typeof r && "number" == typeof i && isNaN(r) && isNaN(i)) || (h = !0, t.last = t.eq ? M(r) : r, t.fn(r, i === c ? r : i, f), 5 > m && (p = 4 - m, A[p] || (A[p] = []), g = F(t.exp) ? "fn: " + (t.exp.name || "" + t.exp) : t.exp, g += "; newVal: " + H(r) + "; oldVal: " + H(i), A[p].push(g)))
										} catch (y) {
											n(y)
										}
										if (!(d = f.$$childHead || f !== v && f.$$nextSibling)) for (; f !== v && !(d = f.$$nextSibling);) f = f.$parent
									} while (f = d);
									if (h && !m--) throw s(), Zn(e + " $digest() iterations reached. Aborting!\n" + "Watchers fired in the last 5 iterations: " + H(A))
								} while (h || l.length);
								s()
							},
							$destroy: function() {
								if (u != this) {
									var e = this.$parent;
									this.$broadcast("$destroy"), e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null
								}
							},
							$eval: function(e, t) {
								return r(e)(this, t)
							},
							$evalAsync: function(e) {
								this.$$asyncQueue.push(e)
							},
							$apply: function(e) {
								try {
									return o("$apply"), this.$eval(e)
								} catch (t) {
									n(t)
								} finally {
									s();
									try {
										u.$digest()
									} catch (t) {
										throw n(t), t
									}
								}
							},
							$on: function(e, t) {
								var n = this.$$listeners[e];
								return n || (this.$$listeners[e] = n = []), n.push(t),
								function() {
									n[T(n, t)] = null
								}
							},
							$emit: function(e) {
								var t, r, i, o = [],
									s = this,
									a = !1,
									l = {
										name: e,
										targetScope: s,
										stopPropagation: function() {
											a = !0
										},
										preventDefault: function() {
											l.defaultPrevented = !0
										},
										defaultPrevented: !1
									}, c = N([l], arguments, 1);
								do {
									for (t = s.$$listeners[e] || o, l.currentScope = s, r = 0, i = t.length; i > r; r++) if (t[r]) try {
												if (t[r].apply(null, c), a) return l
										} catch (u) {
										n(u)
									} else t.splice(r, 1), r--, i--;
									s = s.$parent
								} while (s);
								return l
							},
							$broadcast: function(e) {
								var t, r, i, o = this,
									s = o,
									a = o,
									l = {
										name: e,
										targetScope: o,
										preventDefault: function() {
											l.defaultPrevented = !0
										},
										defaultPrevented: !1
									}, c = N([l], arguments, 1);
								do {
									for (s = a, l.currentScope = s, t = s.$$listeners[e] || [], r = 0, i = t.length; i > r; r++) if (t[r]) try {
												t[r].apply(null, c)
										} catch (u) {
										n(u)
									} else t.splice(r, 1), r--, i--; if (!(a = s.$$childHead || s !== o && s.$$nextSibling)) for (; s !== o && !(a = s.$$nextSibling);) s = s.$parent
								} while (s = a);
								return l
							}
						};
						var u = new i;
						return u
					}
				]
			}
			function cn() {
				this.$get = ["$window",
					function(e) {
						var t = {}, n = u((/android (\d+)/.exec(Un(e.navigator.userAgent)) || [])[1]);
						return {
							history: !(!e.history || !e.history.pushState || 4 > n),
							hashchange: "onhashchange" in e && (!e.document.documentMode || e.document.documentMode > 7),
							hasEvent: function(n) {
								if ("input" == n && 9 == Jn) return !1;
								if (g(t[n])) {
									var r = e.document.createElement("div");
									t[n] = "on" + n in r
								}
								return t[n]
							},
							csp: !1
						}
					}
				]
			}
			function un() {
				this.$get = p(e)
			}
			function hn(e) {
				var t, n, r, o = {};
				return e ? (i(e.split("\n"), function(e) {
					r = e.indexOf(":"), t = Un(x(e.substr(0, r))), n = x(e.substr(r + 1)), t && (o[t] ? o[t] += ", " + n : o[t] = n)
				}), o) : o
			}
			function dn(e) {
				var t = v(e) ? e : n;
				return function(n) {
					return t || (t = hn(e)), n ? t[Un(n)] || null : t
				}
			}
			function fn(e, t, n) {
				return F(n) ? n(e, t) : (i(n, function(n) {
					e = n(e, t)
				}), e)
			}
			function pn(e) {
				return e >= 200 && 300 > e
			}
			function gn() {
				var e = /^\s*(\[|\{[^\{])/,
					t = /[\}\]]\s*$/,
					r = /^\)\]\}',?\n/,
					o = this.defaults = {
						transformResponse: [
							function(n) {
								return A(n) && (n = n.replace(r, ""), e.test(n) && t.test(n) && (n = z(n, !0))), n
							}
						],
						transformRequest: [
							function(e) {
								return v(e) && !$(e) ? H(e) : e
							}
						],
						headers: {
							common: {
								Accept: "application/json, text/plain, */*",
								"X-Requested-With": "XMLHttpRequest"
							},
							post: {
								"Content-Type": "application/json;charset=utf-8"
							},
							put: {
								"Content-Type": "application/json;charset=utf-8"
							}
						}
					}, a = this.responseInterceptors = [];
				this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector",
					function(e, t, r, l, u, h) {
						function d(e) {
							function n(e) {
								var t = c({}, e, {
									data: fn(e.data, e.headers, a)
								});
								return pn(e.status) ? t : u.reject(t)
							}
							e.method = qn(e.method);
							var r, s = e.transformRequest || o.transformRequest,
								a = e.transformResponse || o.transformResponse,
								l = o.headers,
								h = c({
									"X-XSRF-TOKEN": t.cookies()["XSRF-TOKEN"]
								}, l.common, l[Un(e.method)], e.headers),
								d = fn(e.data, dn(h), s);
							return g(e.data) && delete h["Content-Type"], r = m(e, d, h), r = r.then(n, n), i(F, function(e) {
								r = e(r)
							}), r.success = function(t) {
								return r.then(function(n) {
									t(n.data, n.status, n.headers, e)
								}), r
							}, r.error = function(t) {
								return r.then(null, function(n) {
									t(n.data, n.status, n.headers, e)
								}), r
							}, r
						}
						function f() {
							i(arguments, function(e) {
								d[e] = function(t, n) {
									return d(c(n || {}, {
										method: e,
										url: t
									}))
								}
							})
						}
						function p() {
							i(arguments, function(e) {
								d[e] = function(t, n, r) {
									return d(c(r || {}, {
										method: e,
										url: t,
										data: n
									}))
								}
							})
						}
						function m(t, n, r) {
							function i(e, t, n) {
								a && (pn(e) ? a.put(p, [e, t, hn(n)]) : a.remove(p)), o(t, e, n), l.$apply()
							}
							function o(e, n, r) {
								n = Math.max(n, 0), (pn(n) ? h.resolve : h.reject)({
									data: e,
									status: n,
									headers: dn(r),
									config: t
								})
							}
							function s() {
								var e = T(d.pendingRequests, t); - 1 !== e && d.pendingRequests.splice(e, 1)
							}
							var a, c, h = u.defer(),
								f = h.promise,
								p = y(t.url, t.params);
							if (d.pendingRequests.push(t), f.then(s, s), t.cache && "GET" == t.method && (a = v(t.cache) ? t.cache : C), a) if (c = a.get(p)) {
									if (c.then) return c.then(s, s), c;
									E(c) ? o(c[1], c[0], M(c[2])) : o(c, 200, {})
								} else a.put(p, f);
							return c || e(t.method, p, n, i, r, t.timeout, t.withCredentials), f
						}
						function y(e, t) {
							if (!t) return e;
							var r = [];
							return s(t, function(e, t) {
								null != e && e != n && (v(e) && (e = H(e)), r.push(encodeURIComponent(t) + "=" + encodeURIComponent(e)))
							}), e + (-1 == e.indexOf("?") ? "?" : "&") + r.join("&")
						}
						var C = r("$http"),
							F = [];
						return i(a, function(e) {
							F.push(A(e) ? h.get(e) : h.invoke(e))
						}), d.pendingRequests = [], f("get", "delete", "head", "jsonp"), p("post", "put"), d.defaults = o, d
					}
				]
			}
			function mn() {
				this.$get = ["$browser", "$window", "$document",
					function(e, t, n) {
						return vn(e, kr, e.defer, t.angular.callbacks, n[0], t.location.protocol.replace(":", ""))
					}
				]
			}
			function vn(e, t, n, r, o, s) {
				function a(e, t) {
					var n = o.createElement("script"),
						r = function() {
							o.body.removeChild(n), t && t()
						};
					n.type = "text/javascript", n.src = e, Jn ? n.onreadystatechange = function() {
						/loaded|complete/.test(n.readyState) && r()
					} : n.onload = n.onerror = r, o.body.appendChild(n)
				}
				return function(o, l, c, u, h, f, p) {
					function g(t, n, r, i) {
						var o = (l.match(br) || ["", s])[1];
						n = "file" == o ? r ? 200 : 404 : n, n = 1223 == n ? 204 : n, t(n, r, i), e.$$completeOutstandingRequest(d)
					}
					if (e.$$incOutstandingRequestCount(), l = l || e.url(), "jsonp" == Un(o)) {
						var m = "_" + (r.counter++).toString(36);
						r[m] = function(e) {
							r[m].data = e
						}, a(l.replace("JSON_CALLBACK", "angular.callbacks." + m), function() {
							r[m].data ? g(u, 200, r[m].data) : g(u, -2), delete r[m]
						})
					} else {
						var v = new t;
						v.open(o, l, !0), i(h, function(e, t) {
							e && v.setRequestHeader(t, e)
						});
						var A;
						v.onreadystatechange = function() {
							4 == v.readyState && g(u, A || v.status, v.responseText, v.getAllResponseHeaders())
						}, p && (v.withCredentials = !0), v.send(c || ""), f > 0 && n(function() {
							A = -1, v.abort()
						}, f)
					}
				}
			}
			function An() {
				this.$get = function() {
					return {
						id: "en-us",
						NUMBER_FORMATS: {
							DECIMAL_SEP: ".",
							GROUP_SEP: ",",
							PATTERNS: [{
									minInt: 1,
									minFrac: 0,
									maxFrac: 3,
									posPre: "",
									posSuf: "",
									negPre: "-",
									negSuf: "",
									gSize: 3,
									lgSize: 3
								}, {
									minInt: 1,
									minFrac: 2,
									maxFrac: 2,
									posPre: "¤",
									posSuf: "",
									negPre: "(¤",
									negSuf: ")",
									gSize: 3,
									lgSize: 3
								}
							],
							CURRENCY_SYM: "$"
						},
						DATETIME_FORMATS: {
							MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
							SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
							DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
							SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
							AMPMS: ["AM", "PM"],
							medium: "MMM d, y h:mm:ss a",
							"short": "M/d/yy h:mm a",
							fullDate: "EEEE, MMMM d, y",
							longDate: "MMMM d, y",
							mediumDate: "MMM d, y",
							shortDate: "M/d/yy",
							mediumTime: "h:mm:ss a",
							shortTime: "h:mm a"
						},
						pluralCat: function(e) {
							return 1 === e ? "one" : "other"
						}
					}
				}
			}
			function yn() {
				this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler",
					function(e, t, n, r) {
						function i(i, s, a) {
							var l, c, u = n.defer(),
								h = u.promise,
								d = m(a) && !a;
							return l = t.defer(function() {
								try {
									u.resolve(i())
								} catch (t) {
									u.reject(t), r(t)
								}
								d || e.$apply()
							}, s), c = function() {
								delete o[h.$$timeoutId]
							}, h.$$timeoutId = l, o[l] = u, h.then(c, c), h
						}
						var o = {};
						return i.cancel = function(e) {
							return e && e.$$timeoutId in o ? (o[e.$$timeoutId].reject("canceled"), t.defer.cancel(e.$$timeoutId)) : !1
						}, i
					}
				]
			}
			function Cn(e) {
				function t(t, r) {
					return e.factory(t + n, r)
				}
				var n = "Filter";
				this.register = t, this.$get = ["$injector",
					function(e) {
						return function(t) {
							return e.get(t + n)
						}
					}
				], t("currency", Fn), t("date", Sn), t("filter", En), t("json", kn), t("limitTo", Tn), t("lowercase", Pr), t("number", wn), t("orderBy", Ln), t("uppercase", Nr)
			}
			function En() {
				return function(e, t) {
					if (!(e instanceof Array)) return e;
					var n = [];
					n.check = function(e) {
						for (var t = 0; n.length > t; t++) if (!n[t](e)) return !1;
						return !0
					};
					var r = function(e, t) {
						if ("!" === t.charAt(0)) return !r(e, t.substr(1));
						switch (typeof e) {
							case "boolean":
							case "number":
							case "string":
								return ("" + e).toLowerCase().indexOf(t) > -1;
							case "object":
								for (var n in e) if ("$" !== n.charAt(0) && r(e[n], t)) return !0;
								return !1;
							case "array":
								for (var i = 0; e.length > i; i++) if (r(e[i], t)) return !0;
								return !1;
							default:
								return !1
						}
					};
					switch (typeof t) {
						case "boolean":
						case "number":
						case "string":
							t = {
								$: t
							};
						case "object":
							for (var i in t) "$" == i ? function() {
									var e = ("" + t[i]).toLowerCase();
									e && n.push(function(t) {
										return r(t, e)
									})
							}(): function() {
								var e = i,
									o = ("" + t[i]).toLowerCase();
								o && n.push(function(t) {
									return r(Jt(t, e), o)
								})
							}();
							break;
						case "function":
							n.push(t);
							break;
						default:
							return e
					}
					for (var o = [], s = 0; e.length > s; s++) {
						var a = e[s];
						n.check(a) && o.push(a)
					}
					return o
				}
			}
			function Fn(e) {
				var t = e.NUMBER_FORMATS;
				return function(e, n) {
					return g(n) && (n = t.CURRENCY_SYM), bn(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, 2).replace(/\u00A4/g, n)
				}
			}
			function wn(e) {
				var t = e.NUMBER_FORMATS;
				return function(e, n) {
					return bn(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
				}
			}
			function bn(e, t, n, r, i) {
				if (isNaN(e) || !isFinite(e)) return "";
				var o = 0 > e;
				e = Math.abs(e);
				var s = e + "",
					a = "",
					l = [],
					c = !1;
				if (-1 !== s.indexOf("e")) {
					var u = s.match(/([\d\.]+)e(-?)(\d+)/);
					u && "-" == u[2] && u[3] > i + 1 ? s = "0" : (a = s, c = !0)
				}
				if (!c) {
					var h = (s.split(Tr)[1] || "").length;
					g(i) && (i = Math.min(Math.max(t.minFrac, h), t.maxFrac));
					var d = Math.pow(10, i);
					e = Math.round(e * d) / d;
					var f = ("" + e).split(Tr),
						p = f[0];
					f = f[1] || "";
					var m = 0,
						v = t.lgSize,
						A = t.gSize;
					if (p.length >= v + A) {
						m = p.length - v;
						for (var y = 0; m > y; y++) 0 === (m - y) % A && 0 !== y && (a += n), a += p.charAt(y)
					}
					for (y = m; p.length > y; y++) 0 === (p.length - y) % v && 0 !== y && (a += n), a += p.charAt(y);
					for (; i > f.length;) f += "0";
					i && (a += r + f.substr(0, i))
				}
				return l.push(o ? t.negPre : t.posPre), l.push(a), l.push(o ? t.negSuf : t.posSuf), l.join("")
			}
			function $n(e, t, n) {
				var r = "";
				for (0 > e && (r = "-", e = -e), e = "" + e; t > e.length;) e = "0" + e;
				return n && (e = e.substr(e.length - t)), r + e
			}
			function xn(e, t, n, r) {
				return function(i) {
					var o = i["get" + e]();
					return (n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), $n(o, t, r)
				}
			}
			function Dn(e, t) {
				return function(n, r) {
					var i = n["get" + e](),
						o = qn(t ? "SHORT" + e : e);
					return r[o][i]
				}
			}
			function Bn(e) {
				var t = e.getTimezoneOffset();
				return $n(t / 60, 2) + $n(Math.abs(t % 60), 2)
			}
			function _n(e, t) {
				return 12 > e.getHours() ? t.AMPMS[0] : t.AMPMS[1]
			}
			function Sn(e) {
				function t(e) {
					var t;
					if (t = e.match(n)) {
						var r = new Date(0),
							i = 0,
							o = 0;
						return t[9] && (i = u(t[9] + t[10]), o = u(t[9] + t[11])), r.setUTCFullYear(u(t[1]), u(t[2]) - 1, u(t[3])), r.setUTCHours(u(t[4] || 0) - i, u(t[5] || 0) - o, u(t[6] || 0), u(t[7] || 0)), r
					}
					return e
				}
				var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
				return function(n, r) {
					var o, s, a = "",
						l = [];
					if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, A(n) && (n = Rr.test(n) ? u(n) : t(n)), y(n) && (n = new Date(n)), !C(n)) return n;
					for (; r;) s = Mr.exec(r), s ? (l = N(l, s, 1), r = l.pop()) : (l.push(r), r = null);
					return i(l, function(t) {
						o = Lr[t], a += o ? o(n, e.DATETIME_FORMATS) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
					}), a
				}
			}
			function kn() {
				return function(e) {
					return H(e, !0)
				}
			}
			function Tn() {
				return function(e, t) {
					if (!(e instanceof Array)) return e;
					t = u(t);
					var n, r, i = [];
					if (!(e && e instanceof Array)) return i;
					for (t > e.length ? t = e.length : -e.length > t && (t = -e.length), t > 0 ? (n = 0, r = t) : (n = e.length + t, r = e.length); r > n; n++) i.push(e[n]);
					return i
				}
			}
			function Ln(e) {
				return function(t, n, r) {
					function i(e, t) {
						for (var r = 0; n.length > r; r++) {
							var i = n[r](e, t);
							if (0 !== i) return i
						}
						return 0
					}
					function o(e, t) {
						return W(t) ? function(t, n) {
							return e(n, t)
						} : e
					}
					function s(e, t) {
						var n = typeof e,
							r = typeof t;
						return n == r ? ("string" == n && (e = e.toLowerCase()), "string" == n && (t = t.toLowerCase()), e === t ? 0 : t > e ? -1 : 1) : r > n ? -1 : 1
					}
					if (!(t instanceof Array)) return t;
					if (!n) return t;
					n = E(n) ? n : [n], n = B(n, function(t) {
						var n = !1,
							r = t || f;
						return A(t) && (("+" == t.charAt(0) || "-" == t.charAt(0)) && (n = "-" == t.charAt(0), t = t.substring(1)), r = e(t)), o(function(e, t) {
							return s(r(e), r(t))
						}, n)
					});
					for (var a = [], l = 0; t.length > l; l++) a.push(t[l]);
					return a.sort(o(i, r))
				}
			}
			function Mn(e) {
				return F(e) && (e = {
					link: e
				}), e.restrict = e.restrict || "AC", p(e)
			}
			function Rn(e, t) {
				function n(t, n) {
					n = n ? "-" + X(n, "-") : "", e.removeClass((t ? Qr : Yr) + n).addClass((t ? Yr : Qr) + n)
				}
				var r = this,
					o = e.parent().controller("form") || jr,
					s = 0,
					a = r.$error = {};
				r.$name = t.name, r.$dirty = !1, r.$pristine = !0, r.$valid = !0, r.$invalid = !1, o.$addControl(r), e.addClass(Xr), n(!0), r.$addControl = function(e) {
					e.$name && !r.hasOwnProperty(e.$name) && (r[e.$name] = e)
				}, r.$removeControl = function(e) {
					e.$name && r[e.$name] === e && delete r[e.$name], i(a, function(t, n) {
						r.$setValidity(n, !0, e)
					})
				}, r.$setValidity = function(e, t, i) {
					var l = a[e];
					if (t) l && (L(l, i), l.length || (s--, s || (n(t), r.$valid = !0, r.$invalid = !1), a[e] = !1, n(!0, e), o.$setValidity(e, !0, r)));
					else {
						if (s || n(t), l) {
							if (k(l, i)) return
						} else a[e] = l = [], s++, n(!1, e), o.$setValidity(e, !1, r);
						l.push(i), r.$valid = !1, r.$invalid = !0
					}
				}, r.$setDirty = function() {
					e.removeClass(Xr).addClass(Zr), r.$dirty = !0, r.$pristine = !1, o.$setDirty()
				}
			}
			function Pn(e) {
				return g(e) || "" === e || null === e || e !== e
			}
			function Nn(e, t, r, i, o, s) {
				var a = function() {
					var n = x(t.val());
					i.$viewValue !== n && e.$apply(function() {
						i.$setViewValue(n)
					})
				};
				if (o.hasEvent("input")) t.bind("input", a);
				else {
					var l;
					t.bind("keydown", function(e) {
						var t = e.keyCode;
						91 === t || t > 15 && 19 > t || t >= 37 && 40 >= t || l || (l = s.defer(function() {
							a(), l = null
						}))
					}), t.bind("change", a)
				}
				i.$render = function() {
					t.val(Pn(i.$viewValue) ? "" : i.$viewValue)
				};
				var c, h = r.ngPattern,
					d = function(e, t) {
						return Pn(t) || e.test(t) ? (i.$setValidity("pattern", !0), t) : (i.$setValidity("pattern", !1), n)
					};
				if (h && (h.match(/^\/(.*)\/$/) ? (h = RegExp(h.substr(1, h.length - 2)), c = function(e) {
					return d(h, e)
				}) : c = function(t) {
					var n = e.$eval(h);
					if (!n || !n.test) throw new Zn("Expected " + h + " to be a RegExp but was " + n);
					return d(n, t)
				}, i.$formatters.push(c), i.$parsers.push(c)), r.ngMinlength) {
					var f = u(r.ngMinlength),
						p = function(e) {
							return !Pn(e) && f > e.length ? (i.$setValidity("minlength", !1), n) : (i.$setValidity("minlength", !0), e)
						};
					i.$parsers.push(p), i.$formatters.push(p)
				}
				if (r.ngMaxlength) {
					var g = u(r.ngMaxlength),
						m = function(e) {
							return !Pn(e) && e.length > g ? (i.$setValidity("maxlength", !1), n) : (i.$setValidity("maxlength", !0), e)
						};
					i.$parsers.push(m), i.$formatters.push(m)
				}
			}
			function On(e, t, r, i, o, s) {
				if (Nn(e, t, r, i, o, s), i.$parsers.push(function(e) {
					var t = Pn(e);
					return t || Gr.test(e) ? (i.$setValidity("number", !0), "" === e ? null : t ? e : parseFloat(e)) : (i.$setValidity("number", !1), n)
				}), i.$formatters.push(function(e) {
					return Pn(e) ? "" : "" + e
				}), r.min) {
					var a = parseFloat(r.min),
						l = function(e) {
							return !Pn(e) && a > e ? (i.$setValidity("min", !1), n) : (i.$setValidity("min", !0), e)
						};
					i.$parsers.push(l), i.$formatters.push(l)
				}
				if (r.max) {
					var c = parseFloat(r.max),
						u = function(e) {
							return !Pn(e) && e > c ? (i.$setValidity("max", !1), n) : (i.$setValidity("max", !0), e)
						};
					i.$parsers.push(u), i.$formatters.push(u)
				}
				i.$formatters.push(function(e) {
					return Pn(e) || y(e) ? (i.$setValidity("number", !0), e) : (i.$setValidity("number", !1), n)
				})
			}
			function In(e, t, r, i, o, s) {
				Nn(e, t, r, i, o, s);
				var a = function(e) {
					return Pn(e) || Ur.test(e) ? (i.$setValidity("url", !0), e) : (i.$setValidity("url", !1), n)
				};
				i.$formatters.push(a), i.$parsers.push(a)
			}
			function jn(e, t, r, i, o, s) {
				Nn(e, t, r, i, o, s);
				var a = function(e) {
					return Pn(e) || qr.test(e) ? (i.$setValidity("email", !0), e) : (i.$setValidity("email", !1), n)
				};
				i.$formatters.push(a), i.$parsers.push(a)
			}
			function Hn(e, t, n, r) {
				g(n.name) && t.attr("name", l()), t.bind("click", function() {
					t[0].checked && e.$apply(function() {
						r.$setViewValue(n.value)
					})
				}), r.$render = function() {
					var e = n.value;
					t[0].checked = e == r.$viewValue
				}, n.$observe("value", r.$render)
			}
			function zn(e, t, n, r) {
				var i = n.ngTrueValue,
					o = n.ngFalseValue;
				A(i) || (i = !0), A(o) || (o = !1), t.bind("click", function() {
					e.$apply(function() {
						r.$setViewValue(t[0].checked)
					})
				}), r.$render = function() {
					t[0].checked = r.$viewValue
				}, r.$formatters.push(function(e) {
					return e === i
				}), r.$parsers.push(function(e) {
					return e ? i : o
				})
			}
			function Wn(e, t) {
				return e = "ngClass" + e, Mn(function(r, i, o) {
					function s(e, n) {
						(t === !0 || r.$index % 2 === t) && (n && e !== n && a(n), l(e))
					}
					function a(e) {
						v(e) && !E(e) && (e = B(e, function(e, t) {
							return e ? t : n
						})), i.removeClass(E(e) ? e.join(" ") : e)
					}
					function l(e) {
						v(e) && !E(e) && (e = B(e, function(e, t) {
							return e ? t : n
						})), e && i.addClass(E(e) ? e.join(" ") : e)
					}
					r.$watch(o[e], s, !0), o.$observe("class", function() {
						var t = r.$eval(o[e]);
						s(t, t)
					}), "ngClass" !== e && r.$watch("$index", function(n, i) {
						var s = n % 2;
						s !== i % 2 && (s == t ? l(r.$eval(o[e])) : a(r.$eval(o[e])))
					})
				})
			}
			var Un = function(e) {
				return A(e) ? e.toLowerCase() : e
			}, qn = function(e) {
					return A(e) ? e.toUpperCase() : e
				}, Gn = function(e) {
					return A(e) ? e.replace(/[A-Z]/g, function(e) {
						return r(32 | e.charCodeAt(0))
					}) : e
				}, Vn = function(e) {
					return A(e) ? e.replace(/[a-z]/g, function(e) {
						return r(-33 & e.charCodeAt(0))
					}) : e
				};
			"i" !== "I".toLowerCase() && (Un = Gn, qn = Vn);
			var Kn, Yn, Qn, Xn, Zn = e.Error,
				Jn = u((/msie (\d+)/.exec(Un(navigator.userAgent)) || [])[1]),
				er = [].slice,
				tr = [].push,
				nr = Object.prototype.toString,
				rr = e.angular || (e.angular = {}),
				ir = ["0", "0", "0"];
			d.$inject = [], f.$inject = [], Xn = 9 > Jn ? function(e) {
				return e = e.nodeName ? e : e[0], e.scopeName && "HTML" != e.scopeName ? qn(e.scopeName + ":" + e.nodeName) : e.nodeName
			} : function(e) {
				return e.nodeName ? e.nodeName : e[0].nodeName
			};
			var or = /[A-Z]/g,
				sr = {
					full: "1.0.3",
					major: 1,
					minor: 0,
					dot: 3,
					codeName: "bouncy-thunder"
				}, ar = st.cache = {}, lr = st.expando = "ng-" + (new Date).getTime(),
				cr = 1,
				ur = e.document.addEventListener ? function(e, t, n) {
					e.addEventListener(t, n, !1)
				} : function(e, t, n) {
					e.attachEvent("on" + t, n)
				}, hr = e.document.removeEventListener ? function(e, t, n) {
					e.removeEventListener(t, n, !1)
				} : function(e, t, n) {
					e.detachEvent("on" + t, n)
				}, dr = /([\:\-\_]+(.))/g,
				fr = /^moz([A-Z])/,
				pr = st.prototype = {
					ready: function(t) {
						function n() {
							r || (r = !0, t())
						}
						var r = !1;
						this.bind("DOMContentLoaded", n), st(e).bind("load", n)
					},
					toString: function() {
						var e = [];
						return i(this, function(t) {
							e.push("" + t)
						}), "[" + e.join(", ") + "]"
					},
					eq: function(e) {
						return e >= 0 ? Kn(this[e]) : Kn(this[this.length + e])
					},
					length: 0,
					push: tr,
					sort: [].sort,
					splice: [].splice
				}, gr = {};
			i("multiple,selected,checked,disabled,readOnly,required".split(","), function(e) {
				gr[Un(e)] = e
			});
			var mr = {};
			i("input,select,option,textarea,button,form".split(","), function(e) {
				mr[qn(e)] = !0
			}), i({
				data: dt,
				inheritedData: At,
				scope: function(e) {
					return At(e, "$scope")
				},
				controller: vt,
				injector: function(e) {
					return At(e, "$injector")
				},
				removeAttr: function(e, t) {
					e.removeAttribute(t)
				},
				hasClass: ft,
				css: function(e, t, r) {
					if (t = it(t), !m(r)) {
						var i;
						return 8 >= Jn && (i = e.currentStyle && e.currentStyle[t], "" === i && (i = "auto")), i = i || e.style[t], 8 >= Jn && (i = "" === i ? n : i), i
					}
					e.style[t] = r
				},
				attr: function(e, t, r) {
					var i = Un(t);
					if (gr[i]) {
						if (!m(r)) return e[t] || (e.attributes.getNamedItem(t) || d).specified ? i : n;
						r ? (e[t] = !0, e.setAttribute(t, i)) : (e[t] = !1, e.removeAttribute(i))
					} else if (m(r)) e.setAttribute(t, r);
					else if (e.getAttribute) {
						var o = e.getAttribute(t, 2);
						return null === o ? n : o
					}
				},
				prop: function(e, t, r) {
					return m(r) ? (e[t] = r, n) : e[t]
				},
				text: c(9 > Jn ? function(e, t) {
					if (1 == e.nodeType) {
						if (g(t)) return e.innerText;
						e.innerText = t
					} else {
						if (g(t)) return e.nodeValue;
						e.nodeValue = t
					}
				} : function(e, t) {
					return g(t) ? e.textContent : (e.textContent = t, n)
				}, {
					$dv: ""
				}),
				val: function(e, t) {
					return g(t) ? e.value : (e.value = t, n)
				},
				html: function(e, t) {
					if (g(t)) return e.innerHTML;
					for (var n = 0, r = e.childNodes; r.length > n; n++) lt(r[n]);
					e.innerHTML = t
				}
			}, function(e, t) {
				st.prototype[t] = function(t, r) {
					var i, o;
					if ((2 == e.length && e !== ft && e !== vt ? t : r) !== n) {
						for (i = 0; this.length > i; i++) e(this[i], t, r);
						return this
					}
					if (v(t)) {
						for (i = 0; this.length > i; i++) if (e === dt) e(this[i], t);
							else for (o in t) e(this[i], o, t[o]);
						return this
					}
					return this.length ? e(this[0], t, r) : e.$dv
				}
			}), i({
				removeData: ut,
				dealoc: lt,
				bind: function vr(e, t, n) {
					var r = ht(e, "events"),
						o = ht(e, "handle");
					r || ht(e, "events", r = {}), o || ht(e, "handle", o = Ct(e, r)), i(t.split(" "), function(t) {
						var i = r[t];
						if (!i) {
							if ("mouseenter" == t || "mouseleave" == t) {
								var s = 0;
								r.mouseenter = [], r.mouseleave = [], vr(e, "mouseover", function(e) {
									s++, 1 == s && o(e, "mouseenter")
								}), vr(e, "mouseout", function(e) {
									s--, 0 == s && o(e, "mouseleave")
								})
							} else ur(e, t, o), r[t] = [];
							i = r[t]
						}
						i.push(n)
					})
				},
				unbind: ct,
				replaceWith: function(e, t) {
					var n, r = e.parentNode;
					lt(e), i(new st(t), function(t) {
						n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
					})
				},
				children: function(e) {
					var t = [];
					return i(e.childNodes, function(e) {
						"#text" != e.nodeName && t.push(e)
					}), t
				},
				contents: function(e) {
					return e.childNodes
				},
				append: function(e, t) {
					i(new st(t), function(t) {
						1 === e.nodeType && e.appendChild(t)
					})
				},
				prepend: function(e, t) {
					if (1 === e.nodeType) {
						var n = e.firstChild;
						i(new st(t), function(t) {
							n ? e.insertBefore(t, n) : (e.appendChild(t), n = t)
						})
					}
				},
				wrap: function(e, t) {
					t = Kn(t)[0];
					var n = e.parentNode;
					n && n.replaceChild(t, e), t.appendChild(e)
				},
				remove: function(e) {
					lt(e);
					var t = e.parentNode;
					t && t.removeChild(e)
				},
				after: function(e, t) {
					var n = e,
						r = e.parentNode;
					i(new st(t), function(e) {
						r.insertBefore(e, n.nextSibling), n = e
					})
				},
				addClass: gt,
				removeClass: pt,
				toggleClass: function(e, t, n) {
					g(n) && (n = !ft(e, t)), (n ? gt : pt)(e, t)
				},
				parent: function(e) {
					var t = e.parentNode;
					return t && 11 !== t.nodeType ? t : null
				},
				next: function(e) {
					return e.nextSibling
				},
				find: function(e, t) {
					return e.getElementsByTagName(t)
				},
				clone: at,
				triggerHandler: function(e, t) {
					var n = (ht(e, "events") || {})[t];
					i(n, function(t) {
						t.call(e, null)
					})
				}
			}, function(e, t) {
				st.prototype[t] = function(t, r) {
					for (var i, o = 0; this.length > o; o++) i == n ? (i = e(this[o], t, r), i !== n && (i = Kn(i))) : mt(i, e(this[o], t, r));
					return i == n ? this : i
				}
			}), Ft.prototype = {
				put: function(e, t) {
					this[Et(e)] = t
				},
				get: function(e) {
					return this[Et(e)]
				},
				remove: function(e) {
					var t = this[e = Et(e)];
					return delete this[e], t
				}
			}, wt.prototype = {
				push: function(e, t) {
					var n = this[e = Et(e)];
					n ? n.push(t) : this[e] = [t]
				},
				shift: function(e) {
					var t = this[e = Et(e)];
					return t ? 1 == t.length ? (delete this[e], t[0]) : t.shift() : n
				},
				peek: function(e) {
					var t = this[Et(e)];
					return t ? t[0] : n
				}
			};
			var Ar = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
				yr = /,/,
				Cr = /^\s*(_?)(\S+?)\1\s*$/,
				Er = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
				Fr = "Non-assignable model expression: ";
			kt.$inject = ["$provide"];
			var wr = /^(x[\:\-_]|data[\:\-_])/i,
				br = /^([^:]+):\/\/(\w+:{0,1}\w*@)?([\w\.-]*)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,
				$r = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,
				xr = $r,
				Dr = {
					http: 80,
					https: 443,
					ftp: 21
				};
			Wt.prototype = {
				$$replace: !1,
				absUrl: Gt("$$absUrl"),
				url: function(e, t) {
					if (g(e)) return this.$$url;
					var n = $r.exec(e);
					return n[1] && this.path(decodeURIComponent(n[1])), (n[2] || n[1]) && this.search(n[3] || ""), this.hash(n[5] || "", t), this
				},
				protocol: Gt("$$protocol"),
				host: Gt("$$host"),
				port: Gt("$$port"),
				path: Vt("$$path", function(e) {
					return "/" == e.charAt(0) ? e : "/" + e
				}),
				search: function(e, t) {
					return g(e) ? this.$$search : (m(t) ? null === t ? delete this.$$search[e] : this.$$search[e] = t : this.$$search = A(e) ? q(e) : e, this.$$compose(), this)
				},
				hash: Vt("$$hash", f),
				replace: function() {
					return this.$$replace = !0, this
				}
			}, Ut.prototype = h(Wt.prototype), qt.prototype = h(Ut.prototype);
			var Br = {
				"null": function() {
					return null
				},
				"true": function() {
					return !0
				},
				"false": function() {
					return !1
				},
				undefined: d,
				"+": function(e, t, r, i) {
					return r = r(e, t), i = i(e, t), m(r) ? m(i) ? r + i : r : m(i) ? i : n
				},
				"-": function(e, t, n, r) {
					return n = n(e, t), r = r(e, t), (m(n) ? n : 0) - (m(r) ? r : 0)
				},
				"*": function(e, t, n, r) {
					return n(e, t) * r(e, t)
				},
				"/": function(e, t, n, r) {
					return n(e, t) / r(e, t)
				},
				"%": function(e, t, n, r) {
					return n(e, t) % r(e, t)
				},
				"^": function(e, t, n, r) {
					return n(e, t) ^ r(e, t)
				},
				"=": d,
				"==": function(e, t, n, r) {
					return n(e, t) == r(e, t)
				},
				"!=": function(e, t, n, r) {
					return n(e, t) != r(e, t)
				},
				"<": function(e, t, n, r) {
					return n(e, t) < r(e, t)
				},
				">": function(e, t, n, r) {
					return n(e, t) > r(e, t)
				},
				"<=": function(e, t, n, r) {
					return n(e, t) <= r(e, t)
				},
				">=": function(e, t, n, r) {
					return n(e, t) >= r(e, t)
				},
				"&&": function(e, t, n, r) {
					return n(e, t) && r(e, t)
				},
				"||": function(e, t, n, r) {
					return n(e, t) || r(e, t)
				},
				"&": function(e, t, n, r) {
					return n(e, t) & r(e, t)
				},
				"|": function(e, t, n, r) {
					return r(e, t)(e, t, n(e, t))
				},
				"!": function(e, t, n) {
					return !n(e, t)
				}
			}, _r = {
					n: "\n",
					f: "\f",
					r: "\r",
					t: "	",
					v: "",
					"'": "'",
					'"': '"'
				}, Sr = {}, kr = e.XMLHttpRequest || function() {
					try {
						return new ActiveXObject("Msxml2.XMLHTTP.6.0")
					} catch (e) {}
					try {
						return new ActiveXObject("Msxml2.XMLHTTP.3.0")
					} catch (t) {}
					try {
						return new ActiveXObject("Msxml2.XMLHTTP")
					} catch (n) {}
					throw new Zn("This browser does not support XMLHttpRequest.")
				};
			Cn.$inject = ["$provide"], Fn.$inject = ["$locale"], wn.$inject = ["$locale"];
			var Tr = ".",
				Lr = {
					yyyy: xn("FullYear", 4),
					yy: xn("FullYear", 2, 0, !0),
					y: xn("FullYear", 1),
					MMMM: Dn("Month"),
					MMM: Dn("Month", !0),
					MM: xn("Month", 2, 1),
					M: xn("Month", 1, 1),
					dd: xn("Date", 2),
					d: xn("Date", 1),
					HH: xn("Hours", 2),
					H: xn("Hours", 1),
					hh: xn("Hours", 2, -12),
					h: xn("Hours", 1, -12),
					mm: xn("Minutes", 2),
					m: xn("Minutes", 1),
					ss: xn("Seconds", 2),
					s: xn("Seconds", 1),
					EEEE: Dn("Day"),
					EEE: Dn("Day", !0),
					a: _n,
					Z: Bn
				}, Mr = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
				Rr = /^\d+$/;
			Sn.$inject = ["$locale"];
			var Pr = p(Un),
				Nr = p(qn);
			Ln.$inject = ["$parse"];
			var Or = p({
				restrict: "E",
				compile: function(e, t) {
					return t.href || t.$set("href", ""),
					function(e, t) {
						t.bind("click", function(e) {
							return t.attr("href") ? n : (e.preventDefault(), !1)
						})
					}
				}
			}),
				Ir = {};
			i(gr, function(e, t) {
				var n = Tt("ng-" + t);
				Ir[n] = function() {
					return {
						priority: 100,
						compile: function() {
							return function(e, r, i) {
								e.$watch(i[n], function(e) {
									i.$set(t, !! e)
								})
							}
						}
					}
				}
			}), i(["src", "href"], function(e) {
				var t = Tt("ng-" + e);
				Ir[t] = function() {
					return {
						priority: 99,
						link: function(n, r, i) {
							i.$observe(t, function(t) {
								t && (i.$set(e, t), Jn && r.prop(e, t))
							})
						}
					}
				}
			});
			var jr = {
				$addControl: d,
				$removeControl: d,
				$setValidity: d,
				$setDirty: d
			};
			Rn.$inject = ["$element", "$attrs", "$scope"];
			var Hr = function(e) {
				return ["$timeout", function(t) {
					var r = {
						name: "form",
						restrict: "E",
						controller: Rn,
						compile: function() {
							return {
								pre: function(e, r, i, o) {
									if (!i.action) {
										var s = function(e) {
											e.preventDefault ? e.preventDefault() : e.returnValue = !1
										};
										ur(r[0], "submit", s), r.bind("$destroy", function() {
											t(function() {
												hr(r[0], "submit", s)
											}, 0, !1)
										})
									}
									var a = r.parent().controller("form"),
										l = i.name || i.ngForm;
									l && (e[l] = o), a && r.bind("$destroy", function() {
										a.$removeControl(o), l && (e[l] = n), c(o, jr)
									})
								}
							}
						}
					};
					return e ? c(M(r), {
						restrict: "EAC"
					}) : r
				}]
			}, zr = Hr(),
				Wr = Hr(!0),
				Ur = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
				qr = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
				Gr = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
				Vr = {
					text: Nn,
					number: On,
					url: In,
					email: jn,
					radio: Hn,
					checkbox: zn,
					hidden: d,
					button: d,
					submit: d,
					reset: d
				}, Kr = ["$browser", "$sniffer",
					function(e, t) {
						return {
							restrict: "E",
							require: "?ngModel",
							link: function(n, r, i, o) {
								o && (Vr[Un(i.type)] || Vr.text)(n, r, i, o, t, e)
							}
						}
					}
				],
				Yr = "ng-valid",
				Qr = "ng-invalid",
				Xr = "ng-pristine",
				Zr = "ng-dirty",
				Jr = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse",
					function(e, t, n, r, o) {
						function s(e, t) {
							t = t ? "-" + X(t, "-") : "", r.removeClass((e ? Qr : Yr) + t).addClass((e ? Yr : Qr) + t)
						}
						this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = n.name;
						var a = o(n.ngModel),
							l = a.assign;
						if (!l) throw Zn(Fr + n.ngModel + " (" + U(r) + ")");
						this.$render = d;
						var c = r.inheritedData("$formController") || jr,
							u = 0,
							h = this.$error = {};
						r.addClass(Xr), s(!0), this.$setValidity = function(e, t) {
							h[e] !== !t && (t ? (h[e] && u--, u || (s(!0), this.$valid = !0, this.$invalid = !1)) : (s(!1), this.$invalid = !0, this.$valid = !1, u++), h[e] = !t, s(t, e), c.$setValidity(e, t, this))
						}, this.$setViewValue = function(n) {
							this.$viewValue = n, this.$pristine && (this.$dirty = !0, this.$pristine = !1, r.removeClass(Xr).addClass(Zr), c.$setDirty()), i(this.$parsers, function(e) {
								n = e(n)
							}), P(this.$modelValue, n) || (this.$modelValue = _.clone(n), l(e, _.clone(n)), i(this.$viewChangeListeners, function(e) {
								try {
									e()
								} catch (n) {
									t(n)
								}
							}))
						};
						var f = this;
						e.$watch(function() {
							var t = a(e);
							if (!P(f.$modelValue, t)) {
								var n = f.$formatters,
									r = n.length;
								for (f.$modelValue = _.clone(t); r--;) t = n[r](t);
								P(f.$viewValue, t) || (f.$viewValue = _.clone(t), f.$render())
							}
						})
					}
				],
				ei = function() {
					return {
						require: ["ngModel", "^?form"],
						controller: Jr,
						link: function(e, t, n, r) {
							var i = r[0],
								o = r[1] || jr;
							o.$addControl(i), t.bind("$destroy", function() {
								o.$removeControl(i)
							})
						}
					}
				}, ti = p({
					require: "ngModel",
					link: function(e, t, n, r) {
						r.$viewChangeListeners.push(function() {
							e.$eval(n.ngChange)
						})
					}
				}),
				ni = function() {
					return {
						require: "?ngModel",
						link: function(e, t, r, i) {
							if (i) {
								r.required = !0;
								var o = function(e) {
									return r.required && (Pn(e) || e === !1) ? (i.$setValidity("required", !1), n) : (i.$setValidity("required", !0), e)
								};
								i.$formatters.push(o), i.$parsers.unshift(o), r.$observe("required", function() {
									o(i.$viewValue)
								})
							}
						}
					}
				}, ri = function() {
					return {
						require: "ngModel",
						link: function(e, t, r, o) {
							var s = /\/(.*)\//.exec(r.ngList),
								a = s && RegExp(s[1]) || r.ngList || ",",
								l = function(e) {
									var t = [];
									return e && i(e.split(a), function(e) {
										e && t.push(x(e))
									}), t
								};
							o.$parsers.push(l), o.$formatters.push(function(e) {
								return E(e) ? e.join(", ") : n
							})
						}
					}
				}, ii = /^(true|false|\d+)$/,
				oi = function() {
					return {
						priority: 100,
						compile: function(e, t) {
							return ii.test(t.ngValue) ? function(e, t, n) {
								n.$set("value", e.$eval(n.ngValue))
							} : function(e, t, n) {
								e.$watch(n.ngValue, function(e) {
									n.$set("value", e, !1)
								})
							}
						}
					}
				}, si = Mn(function(e, t, r) {
					t.addClass("ng-binding").data("$binding", r.ngBind), e.$watch(r.ngBind, function(e) {
						t.text(e == n ? "" : e)
					})
				}),
				ai = ["$interpolate",
					function(e) {
						return function(t, n, r) {
							var i = e(n.attr(r.$attr.ngBindTemplate));
							n.addClass("ng-binding").data("$binding", i), r.$observe("ngBindTemplate", function(e) {
								n.text(e)
							})
						}
					}
				],
				li = [
					function() {
						return function(e, t, n) {
							t.addClass("ng-binding").data("$binding", n.ngBindHtmlUnsafe), e.$watch(n.ngBindHtmlUnsafe, function(e) {
								t.html(e || "")
							})
						}
					}
				],
				ci = Wn("", !0),
				ui = Wn("Odd", 0),
				hi = Wn("Even", 1),
				di = Mn({
					compile: function(e, t) {
						t.$set("ngCloak", n), e.removeClass("ng-cloak")
					}
				}),
				fi = [
					function() {
						return {
							scope: !0,
							controller: "@"
						}
					}
				],
				pi = ["$sniffer",
					function(e) {
						return {
							priority: 1e3,
							compile: function() {
								e.csp = !0
							}
						}
					}
				],
				gi = {};
			i("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "), function(e) {
				var t = Tt("ng-" + e);
				gi[t] = ["$parse",
					function(n) {
						return function(r, i, o) {
							var s = n(o[t]);
							i.bind(Un(e), function(e) {
								r.$apply(function() {
									s(r, {
										$event: e
									})
								})
							})
						}
					}
				]
			});
			var mi = Mn(function(e, t, n) {
				t.bind("submit", function() {
					e.$apply(n.ngSubmit)
				})
			}),
				vi = ["$http", "$templateCache", "$anchorScroll", "$compile",
					function(e, t, n, r) {
						return {
							restrict: "ECA",
							terminal: !0,
							compile: function(i, o) {
								var s = o.ngInclude || o.src,
									a = o.onload || "",
									l = o.autoscroll;
								return function(i, o) {
									var c, u = 0,
										h = function() {
											c && (c.$destroy(), c = null), o.html("")
										};
									i.$watch(s, function(s) {
										var d = ++u;
										s ? e.get(s, {
											cache: t
										}).success(function(e) {
											d === u && (c && c.$destroy(), c = i.$new(), o.html(e), r(o.contents())(c), !m(l) || l && !i.$eval(l) || n(), c.$emit("$includeContentLoaded"), i.$eval(a))
										}).error(function() {
											d === u && h()
										}) : h()
									})
								}
							}
						}
					}
				],
				Ai = Mn({
					compile: function() {
						return {
							pre: function(e, t, n) {
								e.$eval(n.ngInit)
							}
						}
					}
				}),
				yi = Mn({
					terminal: !0,
					priority: 1e3
				}),
				Ci = ["$locale", "$interpolate",
					function(e, t) {
						var n = /{}/g;
						return {
							restrict: "EA",
							link: function(r, o, s) {
								var a = s.count,
									l = o.attr(s.$attr.when),
									c = s.offset || 0,
									u = r.$eval(l),
									h = {}, d = t.startSymbol(),
									f = t.endSymbol();
								i(u, function(e, r) {
									h[r] = t(e.replace(n, d + a + "-" + c + f))
								}), r.$watch(function() {
									var t = parseFloat(r.$eval(a));
									return isNaN(t) ? "" : (u[t] || (t = e.pluralCat(t - c)), h[t](r, o, !0))
								}, function(e) {
									o.text(e)
								})
							}
						}
					}
				],
				Ei = Mn({
					transclude: "element",
					priority: 1e3,
					terminal: !0,
					compile: function(e, t, n) {
						return function(e, t, r) {
							var i, o, s, a, l = r.ngRepeat,
								c = l.match(/^\s*(.+)\s+in\s+(.*)\s*$/);
							if (!c) throw Zn("Expected ngRepeat in form of '_item_ in _collection_' but got '" + l + "'.");
							if (i = c[1], o = c[2], c = i.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !c) throw Zn("'item' in 'item in collection' should be identifier or (key, value) but got '" + i + "'.");
							s = c[3] || c[1], a = c[2];
							var u = new wt;
							e.$watch(function(e) {
								var r, i, l, c, h, d, f, p = e.$eval(o),
									g = S(p, !0),
									m = new wt,
									v = t;
								if (E(p)) d = p || [];
								else {
									d = [];
									for (c in p) p.hasOwnProperty(c) && "$" != c.charAt(0) && d.push(c);
									d.sort()
								}
								for (r = 0, i = d.length; i > r; r++) c = p === d ? r : d[r], h = p[c], f = u.shift(h), f ? (l = f.scope, m.push(h, f), r === f.index ? v = f.element : (f.index = r, v.after(f.element), v = f.element)) : l = e.$new(), l[s] = h, a && (l[a] = c), l.$index = r, l.$first = 0 === r, l.$last = r === g - 1, l.$middle = !(l.$first || l.$last), f || n(l, function(e) {
										v.after(e), f = {
											scope: l,
											element: v = e,
											index: r
										}, m.push(h, f)
									});
								for (c in u) if (u.hasOwnProperty(c)) for (d = u[c]; d.length;) h = d.pop(), h.element.remove(), h.scope.$destroy();
								u = m
							})
						}
					}
				}),
				Fi = Mn(function(e, t, n) {
					e.$watch(n.ngShow, function(e) {
						t.css("display", W(e) ? "" : "none")
					})
				}),
				wi = Mn(function(e, t, n) {
					e.$watch(n.ngHide, function(e) {
						t.css("display", W(e) ? "none" : "")
					})
				}),
				bi = Mn(function(e, t, n) {
					e.$watch(n.ngStyle, function(e, n) {
						n && e !== n && i(n, function(e, n) {
							t.css(n, "")
						}), e && t.css(e)
					}, !0)
				}),
				$i = "ng-switch",
				xi = p({
					restrict: "EA",
					compile: function(e, t) {
						var n = t.ngSwitch || t.on,
							r = {};
						return e.data($i, r),
						function(e, i) {
							var o, s, a;
							e.$watch(n, function(n) {
								s && (a.$destroy(), s.remove(), s = a = null), (o = r["!" + n] || r["?"]) && (e.$eval(t.change), a = e.$new(), o(a, function(e) {
									s = e, i.append(e)
								}))
							})
						}
					}
				}),
				Di = Mn({
					transclude: "element",
					priority: 500,
					compile: function(e, t, n) {
						var r = e.inheritedData($i);
						J(r), r["!" + t.ngSwitchWhen] = n
					}
				}),
				Bi = Mn({
					transclude: "element",
					priority: 500,
					compile: function(e, t, n) {
						var r = e.inheritedData($i);
						J(r), r["?"] = n
					}
				}),
				_i = Mn({
					controller: ["$transclude", "$element",
						function(e, t) {
							e(function(e) {
								t.append(e)
							})
						}
					]
				}),
				Si = ["$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller",
					function(e, t, n, r, i, o) {
						return {
							restrict: "ECA",
							terminal: !0,
							link: function(e, t, s) {
								function a() {
									u && (u.$destroy(), u = null)
								}
								function l() {
									t.html(""), a()
								}
								function c() {
									var s = n.current && n.current.locals,
										c = s && s.$template;
									if (c) {
										t.html(c), a();
										var d, f = i(t.contents()),
											p = n.current;
										u = p.scope = e.$new(), p.controller && (s.$scope = u, d = o(p.controller, s), t.contents().data("$ngControllerController", d)), f(u), u.$emit("$viewContentLoaded"), u.$eval(h), r()
									} else l()
								}
								var u, h = s.onload || "";
								e.$on("$routeChangeSuccess", c), c()
							}
						}
					}
				],
				ki = ["$templateCache",
					function(e) {
						return {
							restrict: "E",
							terminal: !0,
							compile: function(t, n) {
								if ("text/ng-template" == n.type) {
									var r = n.id,
										i = t[0].text;
									e.put(r, i)
								}
							}
						}
					}
				],
				Ti = p({
					terminal: !0
				}),
				Li = ["$compile", "$parse",
					function(e, r) {
						var s = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,
							a = {
								$setViewValue: d
							};
						return {
							restrict: "E",
							require: ["select", "?ngModel"],
							controller: ["$element", "$scope", "$attrs",
								function(e, t, n) {
									var r, i, o = this,
										s = {}, l = a;
									o.databound = n.ngModel, o.init = function(e, t, n) {
										l = e, r = t, i = n
									}, o.addOption = function(t) {
										s[t] = !0, l.$viewValue == t && (e.val(t), i.parent() && i.remove())
									}, o.removeOption = function(e) {
										this.hasOption(e) && (delete s[e], l.$viewValue == e && this.renderUnknownOption(e))
									}, o.renderUnknownOption = function(t) {
										var n = "? " + Et(t) + " ?";
										i.val(n), e.prepend(i), e.val(n), i.prop("selected", !0)
									}, o.hasOption = function(e) {
										return s.hasOwnProperty(e)
									}, t.$on("$destroy", function() {
										o.renderUnknownOption = d
									})
								}
							],
							link: function(a, l, c, u) {
								function h(e, t, n, r) {
									n.$render = function() {
										var e = n.$viewValue;
										r.hasOption(e) ? (b.parent() && b.remove(), t.val(e), "" === e && p.prop("selected", !0)) : g(e) && p ? t.val("") : r.renderUnknownOption(e)
									}, t.bind("change", function() {
										e.$apply(function() {
											b.parent() && b.remove(), n.$setViewValue(t.val())
										})
									})
								}
								function d(e, t, n) {
									var r;
									n.$render = function() {
										var e = new Ft(n.$viewValue);
										i(t.children(), function(t) {
											t.selected = m(e.get(t.value))
										})
									}, e.$watch(function() {
										P(r, n.$viewValue) || (r = M(n.$viewValue), n.$render())
									}), t.bind("change", function() {
										e.$apply(function() {
											var e = [];
											i(t.children(), function(t) {
												t.selected && e.push(t.value)
											}), n.$setViewValue(e)
										})
									})
								}
								function f(t, i, a) {
									function l() {
										var e, r, s, l, c, v, A, C, b, $, x, D, B, _, S = {
												"": []
											}, k = [""],
											T = a.$modelValue,
											L = g(t) || [],
											M = d ? o(L) : L,
											R = {}, P = !1;
										for (y ? P = new Ft(T) : (null === T || E) && (S[""].push({
											selected: null === T,
											id: "",
											label: ""
										}), P = !0), $ = 0; C = M.length, C > $; $++) R[h] = L[d ? R[d] = M[$] : $], e = f(t, R) || "", (r = S[e]) || (r = S[e] = [], k.push(e)), y ? x = P.remove(p(t, R)) != n : (x = T === p(t, R), P = P || x), _ = u(t, R), _ = _ === n ? "" : _, r.push({
												id: d ? M[$] : $,
												label: _,
												selected: x
											});
										for (y || P || S[""].unshift({
											id: "?",
											label: "",
											selected: !0
										}), b = 0, A = k.length; A > b; b++) {
											for (e = k[b], r = S[e], b >= m.length ? (l = {
												element: w.clone().attr("label", e),
												label: r.label
											}, c = [l], m.push(c), i.append(l.element)) : (c = m[b], l = c[0], l.label != e && l.element.attr("label", l.label = e)), D = null, $ = 0, C = r.length; C > $; $++) s = r[$], (v = c[$ + 1]) ? (D = v.element, v.label !== s.label && D.text(v.label = s.label), v.id !== s.id && D.val(v.id = s.id), v.element.selected !== s.selected && D.prop("selected", v.selected = s.selected)) : ("" === s.id && E ? B = E : (B = F.clone()).val(s.id).attr("selected", s.selected).text(s.label), c.push(v = {
													element: B,
													label: s.label,
													id: s.id,
													selected: s.selected
												}), D ? D.after(B) : l.element.append(B), D = B);
											for ($++; c.length > $;) c.pop().element.remove()
										}
										for (; m.length > b;) m.pop()[0].element.remove()
									}
									var c;
									if (!(c = C.match(s))) throw Zn("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '" + C + "'.");
									var u = r(c[2] || c[1]),
										h = c[4] || c[6],
										d = c[5],
										f = r(c[3] || ""),
										p = r(c[2] ? c[1] : h),
										g = r(c[7]),
										m = [
											[{
													element: i,
													label: ""
												}
											]
										];
									E && (e(E)(t), E.removeClass("ng-scope"), E.remove()), i.html(""), i.bind("change", function() {
										t.$apply(function() {
											var e, r, o, s, l, c, u, f, v = g(t) || [],
												A = {};
											if (y) for (o = [], c = 0, f = m.length; f > c; c++) for (e = m[c], l = 1, u = e.length; u > l; l++)(s = e[l].element)[0].selected && (r = s.val(), d && (A[d] = r), A[h] = v[r], o.push(p(t, A)));
											else r = i.val(), "?" == r ? o = n : "" == r ? o = null : (A[h] = v[r], d && (A[d] = r), o = p(t, A));
											a.$setViewValue(o)
										})
									}), a.$render = l, t.$watch(l)
								}
								if (u[1]) {
									for (var p, v = u[0], A = u[1], y = c.multiple, C = c.ngOptions, E = !1, F = Kn(t.createElement("option")), w = Kn(t.createElement("optgroup")), b = F.clone(), $ = 0, x = l.children(), D = x.length; D > $; $++) if ("" == x[$].value) {
											p = E = x.eq($);
											break
										}
									if (v.init(A, E, b), y && (c.required || c.ngRequired)) {
										var B = function(e) {
											return A.$setValidity("required", !c.required || e && e.length), e
										};
										A.$parsers.push(B), A.$formatters.unshift(B), c.$observe("required", function() {
											B(A.$viewValue)
										})
									}
									C ? f(a, l, A) : y ? d(a, l, A) : h(a, l, A, v)
								}
							}
						}
					}
				],
				Mi = ["$interpolate",
					function(e) {
						var t = {
							addOption: d,
							removeOption: d
						};
						return {
							restrict: "E",
							priority: 100,
							compile: function(n, r) {
								if (g(r.value)) {
									var i = e(n.text(), !0);
									i || r.$set("value", n.text())
								}
								return function(e, n, r) {
									var o = "$selectController",
										s = n.parent(),
										a = s.data(o) || s.parent().data(o);
									a && a.databound ? n.prop("selected", !1) : a = t, i ? e.$watch(i, function(e, t) {
										r.$set("value", e), e !== t && a.removeOption(t), a.addOption(e)
									}) : a.addOption(r.value), n.bind("$destroy", function() {
										a.removeOption(r.value)
									})
								}
							}
						}
					}
				],
				Ri = p({
					restrict: "E",
					terminal: !0
				});
			Z(), nt(rr), Kn(t).ready(function() {
				Y(t, Q)
			})
		}(window, document), angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>'), function(e, t) {
			"object" == typeof exports ? module.exports = t(require("./punycode"), require("./IPv6"), require("./SecondLevelDomains")) : "function" == typeof define && define.amd ? define(["./punycode", "./IPv6", "./SecondLevelDomains"], t) : e.URI = t(e.punycode, e.IPv6, e.SecondLevelDomains)
		}(this, function(e, t, n) {
			"use strict";

			function r(e, t) {
				return this instanceof r ? (void 0 === e && (e = "undefined" != typeof location ? location.href + "" : ""), this.href(e), void 0 !== t ? this.absoluteTo(t) : this) : new r(e, t)
			}
			function i(e) {
				return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
			}
			function o(e) {
				return "[object Array]" == Object.prototype.toString.call(e) + ""
			}
			function s(e, t) {
				var n, r, i = {};
				if (o(t)) for (n = 0, r = t.length; r > n; n++) i[t[n]] = !0;
				else i[t] = !0;
				for (n = 0, r = e.length; r > n; n++) void 0 !== i[e[n]] && (e.splice(n, 1), r--, n--);
				return e
			}
			function a(e) {
				return encodeURIComponent(e).replace(/[!'()*]/g, escape).replace(/\*/g, "%2A")
			}
			var l = r.prototype,
				c = Object.prototype.hasOwnProperty;
			r._parts = function() {
				return {
					protocol: null,
					username: null,
					password: null,
					hostname: null,
					urn: null,
					port: null,
					path: null,
					query: null,
					fragment: null,
					duplicateQueryParameters: r.duplicateQueryParameters
				}
			}, r.duplicateQueryParameters = !1, r.protocol_expression = /^[a-z][a-z0-9-+-]*$/i, r.idn_expression = /[^a-z0-9\.-]/i, r.punycode_expression = /(xn--)/i, r.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, r.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/, r.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi, r.defaultPorts = {
				http: "80",
				https: "443",
				ftp: "21",
				gopher: "70",
				ws: "80",
				wss: "443"
			}, r.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/, r.encode = a, r.decode = decodeURIComponent, r.iso8859 = function() {
				r.encode = escape, r.decode = unescape
			}, r.unicode = function() {
				r.encode = a, r.decode = decodeURIComponent
			}, r.characters = {
				pathname: {
					encode: {
						expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
						map: {
							"%24": "$",
							"%26": "&",
							"%2B": "+",
							"%2C": ",",
							"%3B": ";",
							"%3D": "=",
							"%3A": ":",
							"%40": "@"
						}
					},
					decode: {
						expression: /[\/\?#]/g,
						map: {
							"/": "%2F",
							"?": "%3F",
							"#": "%23"
						}
					}
				},
				reserved: {
					encode: {
						expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
						map: {
							"%3A": ":",
							"%2F": "/",
							"%3F": "?",
							"%23": "#",
							"%5B": "[",
							"%5D": "]",
							"%40": "@",
							"%21": "!",
							"%24": "$",
							"%26": "&",
							"%27": "'",
							"%28": "(",
							"%29": ")",
							"%2A": "*",
							"%2B": "+",
							"%2C": ",",
							"%3B": ";",
							"%3D": "="
						}
					}
				}
			}, r.encodeQuery = function(e) {
				return r.encode(e + "").replace(/%20/g, "+")
			}, r.decodeQuery = function(e) {
				return r.decode((e + "").replace(/\+/g, "%20"))
			}, r.recodePath = function(e) {
				for (var t = (e + "").split("/"), n = 0, i = t.length; i > n; n++) t[n] = r.encodePathSegment(r.decode(t[n]));
				return t.join("/")
			}, r.decodePath = function(e) {
				for (var t = (e + "").split("/"), n = 0, i = t.length; i > n; n++) t[n] = r.decodePathSegment(t[n]);
				return t.join("/")
			};
			var u, h = {
					encode: "encode",
					decode: "decode"
				}, d = function(e, t) {
					return function(n) {
						return r[t](n + "").replace(r.characters[e][t].expression, function(n) {
							return r.characters[e][t].map[n]
						})
					}
				};
			for (u in h) r[u + "PathSegment"] = d("pathname", h[u]);
			r.encodeReserved = d("reserved", "encode"), r.parse = function(e, t) {
				var n;
				return t || (t = {}), n = e.indexOf("#"), n > -1 && (t.fragment = e.substring(n + 1) || null, e = e.substring(0, n)), n = e.indexOf("?"), n > -1 && (t.query = e.substring(n + 1) || null, e = e.substring(0, n)), "//" === e.substring(0, 2) ? (t.protocol = "", e = e.substring(2), e = r.parseAuthority(e, t)) : (n = e.indexOf(":"), n > -1 && (t.protocol = e.substring(0, n), t.protocol && !t.protocol.match(r.protocol_expression) ? t.protocol = void 0 : "file" === t.protocol ? e = e.substring(n + 3) : "//" === e.substring(n + 1, n + 3) ? (e = e.substring(n + 3), e = r.parseAuthority(e, t)) : (e = e.substring(n + 1), t.urn = !0))), t.path = e, t
			}, r.parseHost = function(e, t) {
				var n, r, i = e.indexOf("/");
				return -1 === i && (i = e.length), "[" === e.charAt(0) ? (n = e.indexOf("]"), t.hostname = e.substring(1, n) || null, t.port = e.substring(n + 2, i) || null) : e.indexOf(":") !== e.lastIndexOf(":") ? (t.hostname = e.substring(0, i) || null, t.port = null) : (r = e.substring(0, i).split(":"), t.hostname = r[0] || null, t.port = r[1] || null), t.hostname && "/" !== e.substring(i).charAt(0) && (i++, e = "/" + e), e.substring(i) || "/"
			}, r.parseAuthority = function(e, t) {
				return e = r.parseUserinfo(e, t), r.parseHost(e, t)
			}, r.parseUserinfo = function(e, t) {
				var n, i = e.indexOf("@"),
					o = e.indexOf("/");
				return i > -1 && (-1 === o || o > i) ? (n = e.substring(0, i).split(":"), t.username = n[0] ? r.decode(n[0]) : null, n.shift(), t.password = n[0] ? r.decode(n.join(":")) : null, e = e.substring(i + 1)) : (t.username = null, t.password = null), e
			}, r.parseQuery = function(e) {
				if (!e) return {};
				if (e = e.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, ""), !e) return {};
				for (var t, n, i, o = {}, s = e.split("&"), a = s.length, l = 0; a > l; l++) t = s[l].split("="), n = r.decodeQuery(t.shift()), i = t.length ? r.decodeQuery(t.join("=")) : null, o[n] ? ("string" == typeof o[n] && (o[n] = [o[n]]), o[n].push(i)) : o[n] = i;
				return o
			}, r.build = function(e) {
				var t = "";
				return e.protocol && (t += e.protocol + ":"), e.urn || !t && !e.hostname || (t += "//"), t += r.buildAuthority(e) || "", "string" == typeof e.path && ("/" !== e.path.charAt(0) && "string" == typeof e.hostname && (t += "/"), t += e.path), "string" == typeof e.query && e.query && (t += "?" + e.query), "string" == typeof e.fragment && e.fragment && (t += "#" + e.fragment), t
			}, r.buildHost = function(e) {
				var t = "";
				return e.hostname ? (r.ip6_expression.test(e.hostname) ? t += e.port ? "[" + e.hostname + "]:" + e.port : e.hostname : (t += e.hostname, e.port && (t += ":" + e.port)), t) : ""
			}, r.buildAuthority = function(e) {
				return r.buildUserinfo(e) + r.buildHost(e)
			}, r.buildUserinfo = function(e) {
				var t = "";
				return e.username && (t += r.encode(e.username), e.password && (t += ":" + r.encode(e.password)), t += "@"), t
			}, r.buildQuery = function(e, t) {
				var n, i, s, a, l = "";
				for (i in e) if (c.call(e, i) && i) if (o(e[i])) for (n = {}, s = 0, a = e[i].length; a > s; s++) void 0 !== e[i][s] && void 0 === n[e[i][s] + ""] && (l += "&" + r.buildQueryParameter(i, e[i][s]), t !== !0 && (n[e[i][s] + ""] = !0));
						else void 0 !== e[i] && (l += "&" + r.buildQueryParameter(i, e[i]));
				return l.substring(1)
			}, r.buildQueryParameter = function(e, t) {
				return r.encodeQuery(e) + (null !== t ? "=" + r.encodeQuery(t) : "")
			}, r.addQuery = function(e, t, n) {
				if ("object" == typeof t) for (var i in t) c.call(t, i) && r.addQuery(e, i, t[i]);
				else {
					if ("string" != typeof t) throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
					if (void 0 === e[t]) return e[t] = n, void 0;
					"string" == typeof e[t] && (e[t] = [e[t]]), o(n) || (n = [n]), e[t] = e[t].concat(n)
				}
			}, r.removeQuery = function(e, t, n) {
				var i, a, l;
				if (o(t)) for (i = 0, a = t.length; a > i; i++) e[t[i]] = void 0;
				else if ("object" == typeof t) for (l in t) c.call(t, l) && r.removeQuery(e, l, t[l]);
				else {
					if ("string" != typeof t) throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");
					void 0 !== n ? e[t] === n ? e[t] = void 0 : o(e[t]) && (e[t] = s(e[t], n)) : e[t] = void 0
				}
			}, r.commonPath = function(e, t) {
				var n, r = Math.min(e.length, t.length);
				for (n = 0; r > n; n++) if (e.charAt(n) !== t.charAt(n)) {
						n--;
						break
					}
				return 1 > n ? e.charAt(0) === t.charAt(0) && "/" === e.charAt(0) ? "/" : "" : ("/" !== e.charAt(n) && (n = e.substring(0, n).lastIndexOf("/")), e.substring(0, n + 1))
			}, r.withinString = function(e, t) {
				return e.replace(r.find_uri_expression, t)
			}, r.ensureValidHostname = function(t) {
				if (t.match(r.invalid_hostname_characters)) {
					if (!e) throw new TypeError("Hostname '" + t + "' contains characters other than [A-Z0-9.-] and Punycode.js is not available");
					if (e.toASCII(t).match(r.invalid_hostname_characters)) throw new TypeError("Hostname '" + t + "' contains characters other than [A-Z0-9.-]")
				}
			}, l.build = function(e) {
				return e === !0 ? this._deferred_build = !0 : (void 0 === e || this._deferred_build) && (this._string = r.build(this._parts), this._deferred_build = !1), this
			}, l.clone = function() {
				return new r(this)
			}, l.valueOf = l.toString = function() {
				return this.build(!1)._string
			}, h = {
				protocol: "protocol",
				username: "username",
				password: "password",
				hostname: "hostname",
				port: "port"
			}, d = function(e) {
				return function(t, n) {
					return void 0 === t ? this._parts[e] || "" : (this._parts[e] = t, this.build(!n), this)
				}
			};
			for (u in h) l[u] = d(h[u]);
			h = {
				query: "?",
				fragment: "#"
			}, d = function(e, t) {
				return function(n, r) {
					return void 0 === n ? this._parts[e] || "" : (null !== n && (n += "", n.charAt(0) === t && (n = n.substring(1))), this._parts[e] = n, this.build(!r), this)
				}
			};
			for (u in h) l[u] = d(u, h[u]);
			h = {
				search: ["?", "query"],
				hash: ["#", "fragment"]
			}, d = function(e, t) {
				return function(n, r) {
					var i = this[e](n, r);
					return "string" == typeof i && i.length ? t + i : i
				}
			};
			for (u in h) l[u] = d(h[u][1], h[u][0]);
			l.pathname = function(e, t) {
				if (void 0 === e || e === !0) {
					var n = this._parts.path || (this._parts.urn ? "" : "/");
					return e ? r.decodePath(n) : n
				}
				return this._parts.path = e ? r.recodePath(e) : "/", this.build(!t), this
			}, l.path = l.pathname, l.href = function(e, t) {
				var n;
				if (void 0 === e) return "" + this;
				this._string = "", this._parts = r._parts();
				var i = e instanceof r,
					o = "object" == typeof e && (e.hostname || e.path);
				if (!i && o && void 0 !== e.pathname && (e = "" + e), "string" == typeof e) this._parts = r.parse(e, this._parts);
				else {
					if (!i && !o) throw new TypeError("invalid input");
					var s = i ? e._parts : e;
					for (n in s) c.call(this._parts, n) && (this._parts[n] = s[n])
				}
				return this.build(!t), this
			}, l.is = function(e) {
				var t = !1,
					i = !1,
					o = !1,
					s = !1,
					a = !1,
					l = !1,
					c = !1,
					u = !this._parts.urn;
				switch (this._parts.hostname && (u = !1, i = r.ip4_expression.test(this._parts.hostname), o = r.ip6_expression.test(this._parts.hostname), t = i || o, s = !t, a = s && n && n.has(this._parts.hostname), l = s && r.idn_expression.test(this._parts.hostname), c = s && r.punycode_expression.test(this._parts.hostname)), e.toLowerCase()) {
					case "relative":
						return u;
					case "absolute":
						return !u;
					case "domain":
					case "name":
						return s;
					case "sld":
						return a;
					case "ip":
						return t;
					case "ip4":
					case "ipv4":
					case "inet4":
						return i;
					case "ip6":
					case "ipv6":
					case "inet6":
						return o;
					case "idn":
						return l;
					case "url":
						return !this._parts.urn;
					case "urn":
						return !!this._parts.urn;
					case "punycode":
						return c
				}
				return null
			};
			var f = l.protocol,
				p = l.port,
				g = l.hostname;
			l.protocol = function(e, t) {
				if (void 0 !== e && e && (e = e.replace(/:(\/\/)?$/, ""), e.match(/[^a-zA-z0-9\.+-]/))) throw new TypeError("Protocol '" + e + "' contains characters other than [A-Z0-9.+-]");
				return f.call(this, e, t)
			}, l.scheme = l.protocol, l.port = function(e, t) {
				if (this._parts.urn) return void 0 === e ? "" : this;
				if (void 0 !== e && (0 === e && (e = null), e && (e += "", ":" === e.charAt(0) && (e = e.substring(1)), e.match(/[^0-9]/)))) throw new TypeError("Port '" + e + "' contains characters other than [0-9]");
				return p.call(this, e, t)
			}, l.hostname = function(e, t) {
				if (this._parts.urn) return void 0 === e ? "" : this;
				if (void 0 !== e) {
					var n = {};
					r.parseHost(e, n), e = n.hostname
				}
				return g.call(this, e, t)
			}, l.host = function(e, t) {
				return this._parts.urn ? void 0 === e ? "" : this : void 0 === e ? this._parts.hostname ? r.buildHost(this._parts) : "" : (r.parseHost(e, this._parts), this.build(!t), this)
			}, l.authority = function(e, t) {
				return this._parts.urn ? void 0 === e ? "" : this : void 0 === e ? this._parts.hostname ? r.buildAuthority(this._parts) : "" : (r.parseAuthority(e, this._parts), this.build(!t), this)
			}, l.userinfo = function(e, t) {
				if (this._parts.urn) return void 0 === e ? "" : this;
				if (void 0 === e) {
					if (!this._parts.username) return "";
					var n = r.buildUserinfo(this._parts);
					return n.substring(0, n.length - 1)
				}
				return "@" !== e[e.length - 1] && (e += "@"), r.parseUserinfo(e, this._parts), this.build(!t), this
			}, l.resource = function(e, t) {
				var n;
				return void 0 === e ? this.path() + this.search() + this.hash() : (n = r.parse(e), this._parts.path = n.path, this._parts.query = n.query, this._parts.fragment = n.fragment, this.build(!t), this)
			}, l.subdomain = function(e, t) {
				if (this._parts.urn) return void 0 === e ? "" : this;
				if (void 0 === e) {
					if (!this._parts.hostname || this.is("IP")) return "";
					var n = this._parts.hostname.length - this.domain().length - 1;
					return this._parts.hostname.substring(0, n) || ""
				}
				var o = this._parts.hostname.length - this.domain().length,
					s = this._parts.hostname.substring(0, o),
					a = RegExp("^" + i(s));
				return e && "." !== e.charAt(e.length - 1) && (e += "."), e && r.ensureValidHostname(e), this._parts.hostname = this._parts.hostname.replace(a, e), this.build(!t), this
			}, l.domain = function(e, t) {
				if (this._parts.urn) return void 0 === e ? "" : this;
				if ("boolean" == typeof e && (t = e, e = void 0), void 0 === e) {
					if (!this._parts.hostname || this.is("IP")) return "";
					var n = this._parts.hostname.match(/\./g);
					if (n && 2 > n.length) return this._parts.hostname;
					var o = this._parts.hostname.length - this.tld(t).length - 1;
					return o = this._parts.hostname.lastIndexOf(".", o - 1) + 1, this._parts.hostname.substring(o) || ""
				}
				if (!e) throw new TypeError("cannot set domain empty");
				if (r.ensureValidHostname(e), !this._parts.hostname || this.is("IP")) this._parts.hostname = e;
				else {
					var s = RegExp(i(this.domain()) + "$");
					this._parts.hostname = this._parts.hostname.replace(s, e)
				}
				return this.build(!t), this
			}, l.tld = function(e, t) {
				if (this._parts.urn) return void 0 === e ? "" : this;
				if ("boolean" == typeof e && (t = e, e = void 0), void 0 === e) {
					if (!this._parts.hostname || this.is("IP")) return "";
					var r = this._parts.hostname.lastIndexOf("."),
						o = this._parts.hostname.substring(r + 1);
					return t !== !0 && n && n.list[o.toLowerCase()] ? n.get(this._parts.hostname) || o : o
				}
				var s;
				if (!e) throw new TypeError("cannot set TLD empty");
				if (e.match(/[^a-zA-Z0-9-]/)) {
					if (!n || !n.is(e)) throw new TypeError("TLD '" + e + "' contains characters other than [A-Z0-9]");
					s = RegExp(i(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(s, e)
				} else {
					if (!this._parts.hostname || this.is("IP")) throw new ReferenceError("cannot set TLD on non-domain host");
					s = RegExp(i(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(s, e)
				}
				return this.build(!t), this
			}, l.directory = function(e, t) {
				if (this._parts.urn) return void 0 === e ? "" : this;
				if (void 0 === e || e === !0) {
					if (!this._parts.path && !this._parts.hostname) return "";
					if ("/" === this._parts.path) return "/";
					var n = this._parts.path.length - this.filename().length - 1,
						o = this._parts.path.substring(0, n) || (this._parts.hostname ? "/" : "");
					return e ? r.decodePath(o) : o
				}
				var s = this._parts.path.length - this.filename().length,
					a = this._parts.path.substring(0, s),
					l = RegExp("^" + i(a));
				return this.is("relative") || (e || (e = "/"), "/" !== e.charAt(0) && (e = "/" + e)), e && "/" !== e.charAt(e.length - 1) && (e += "/"), e = r.recodePath(e), this._parts.path = this._parts.path.replace(l, e), this.build(!t), this
			}, l.filename = function(e, t) {
				if (this._parts.urn) return void 0 === e ? "" : this;
				if (void 0 === e || e === !0) {
					if (!this._parts.path || "/" === this._parts.path) return "";
					var n = this._parts.path.lastIndexOf("/"),
						o = this._parts.path.substring(n + 1);
					return e ? r.decodePathSegment(o) : o
				}
				var s = !1;
				"/" === e.charAt(0) && (e = e.substring(1)), e.match(/\.?\//) && (s = !0);
				var a = RegExp(i(this.filename()) + "$");
				return e = r.recodePath(e), this._parts.path = this._parts.path.replace(a, e), s ? this.normalizePath(t) : this.build(!t), this
			}, l.suffix = function(e, t) {
				if (this._parts.urn) return void 0 === e ? "" : this;
				if (void 0 === e || e === !0) {
					if (!this._parts.path || "/" === this._parts.path) return "";
					var n, o, s = this.filename(),
						a = s.lastIndexOf(".");
					return -1 === a ? "" : (n = s.substring(a + 1), o = /^[a-z0-9%]+$/i.test(n) ? n : "", e ? r.decodePathSegment(o) : o)
				}
				"." === e.charAt(0) && (e = e.substring(1));
				var l, c = this.suffix();
				if (c) l = e ? RegExp(i(c) + "$") : RegExp(i("." + c) + "$");
				else {
					if (!e) return this;
					this._parts.path += "." + r.recodePath(e)
				}
				return l && (e = r.recodePath(e), this._parts.path = this._parts.path.replace(l, e)), this.build(!t), this
			}, l.segment = function(e, t, n) {
				var r = this._parts.urn ? ":" : "/",
					i = this.path(),
					s = "/" === i.substring(0, 1),
					a = i.split(r);
				if ("number" != typeof e && (n = t, t = e, e = void 0), void 0 !== e && "number" != typeof e) throw Error("Bad segment '" + e + "', must be 0-based integer");
				return s && a.shift(), 0 > e && (e = Math.max(a.length + e, 0)), void 0 === t ? void 0 === e ? a : a[e] : (null === e || void 0 === a[e] ? o(t) ? a = t : (t || "string" == typeof t && t.length) && ("" === a[a.length - 1] ? a[a.length - 1] = t : a.push(t)) : t || "string" == typeof t && t.length ? a[e] = t : a.splice(e, 1), s && a.unshift(""), this.path(a.join(r), n))
			};
			var m = l.query;
			return l.query = function(e, t) {
				if (e === !0) return r.parseQuery(this._parts.query);
				if ("function" == typeof e) {
					var n = r.parseQuery(this._parts.query),
						i = e.call(this, n);
					return this._parts.query = r.buildQuery(i || n, this._parts.duplicateQueryParameters), this.build(!t), this
				}
				return void 0 !== e && "string" != typeof e ? (this._parts.query = r.buildQuery(e, this._parts.duplicateQueryParameters), this.build(!t), this) : m.call(this, e, t)
			}, l.setQuery = function(e, t, n) {
				var i = r.parseQuery(this._parts.query);
				if ("object" == typeof e) for (var o in e) c.call(e, o) && (i[o] = e[o]);
				else {
					if ("string" != typeof e) throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
					i[e] = void 0 !== t ? t : null
				}
				return this._parts.query = r.buildQuery(i, this._parts.duplicateQueryParameters), "string" != typeof e && (n = t), this.build(!n), this
			}, l.addQuery = function(e, t, n) {
				var i = r.parseQuery(this._parts.query);
				return r.addQuery(i, e, void 0 === t ? null : t), this._parts.query = r.buildQuery(i, this._parts.duplicateQueryParameters), "string" != typeof e && (n = t), this.build(!n), this
			}, l.removeQuery = function(e, t, n) {
				var i = r.parseQuery(this._parts.query);
				return r.removeQuery(i, e, t), this._parts.query = r.buildQuery(i, this._parts.duplicateQueryParameters), "string" != typeof e && (n = t), this.build(!n), this
			}, l.setSearch = l.setQuery, l.addSearch = l.addQuery, l.removeSearch = l.removeQuery, l.normalize = function() {
				return this._parts.urn ? this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
			}, l.normalizeProtocol = function(e) {
				return "string" == typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(), this.build(!e)), this
			}, l.normalizeHostname = function(n) {
				return this._parts.hostname && (this.is("IDN") && e ? this._parts.hostname = e.toASCII(this._parts.hostname) : this.is("IPv6") && t && (this._parts.hostname = t.best(this._parts.hostname)), this._parts.hostname = this._parts.hostname.toLowerCase(), this.build(!n)), this
			}, l.normalizePort = function(e) {
				return "string" == typeof this._parts.protocol && this._parts.port === r.defaultPorts[this._parts.protocol] && (this._parts.port = null, this.build(!e)), this
			}, l.normalizePath = function(e) {
				if (this._parts.urn) return this;
				if (!this._parts.path || "/" === this._parts.path) return this;
				var t, n, i, o, s = this._parts.path;
				for ("/" !== s.charAt(0) && ("." === s.charAt(0) && (n = s.substring(0, s.indexOf("/"))), t = !0, s = "/" + s), s = s.replace(/(\/(\.\/)+)|\/{2,}/g, "/");;) {
					if (i = s.indexOf("/../"), -1 === i) break;
					if (0 === i) {
						s = s.substring(3);
						break
					}
					o = s.substring(0, i).lastIndexOf("/"), -1 === o && (o = i), s = s.substring(0, o) + s.substring(i + 3)
				}
				return t && this.is("relative") && (s = n ? n + s : s.substring(1)), s = r.recodePath(s), this._parts.path = s, this.build(!e), this
			}, l.normalizePathname = l.normalizePath, l.normalizeQuery = function(e) {
				return "string" == typeof this._parts.query && (this._parts.query.length ? this.query(r.parseQuery(this._parts.query)) : this._parts.query = null, this.build(!e)), this
			}, l.normalizeFragment = function(e) {
				return this._parts.fragment || (this._parts.fragment = null, this.build(!e)), this
			}, l.normalizeSearch = l.normalizeQuery, l.normalizeHash = l.normalizeFragment, l.iso8859 = function() {
				var e = r.encode,
					t = r.decode;
				return r.encode = escape, r.decode = decodeURIComponent, this.normalize(), r.encode = e, r.decode = t, this
			}, l.unicode = function() {
				var e = r.encode,
					t = r.decode;
				return r.encode = a, r.decode = unescape, this.normalize(), r.encode = e, r.decode = t, this
			}, l.readable = function() {
				var t = this.clone();
				t.username("").password("").normalize();
				var n = "";
				if (t._parts.protocol && (n += t._parts.protocol + "://"), t._parts.hostname && (t.is("punycode") && e ? (n += e.toUnicode(t._parts.hostname), t._parts.port && (n += ":" + t._parts.port)) : n += t.host()), t._parts.hostname && t._parts.path && "/" !== t._parts.path.charAt(0) && (n += "/"), n += t.path(!0), t._parts.query) {
					for (var i = "", o = 0, s = t._parts.query.split("&"), a = s.length; a > o; o++) {
						var l = (s[o] || "").split("=");
						i += "&" + r.decodeQuery(l[0]).replace(/&/g, "%26"), void 0 !== l[1] && (i += "=" + r.decodeQuery(l[1]).replace(/&/g, "%26"))
					}
					n += "?" + i.substring(1)
				}
				return n += t.hash()
			}, l.absoluteTo = function(e) {
				var t, n, i, o = this.clone(),
					s = ["protocol", "username", "password", "hostname", "port"];
				if (this._parts.urn) throw Error("URNs do not have any generally defined hierachical components");
				if (this._parts.hostname) return o;
				for (e instanceof r || (e = new r(e)), n = 0, i; i = s[n]; n++) o._parts[i] = e._parts[i];
				for (s = ["query", "path"], n = 0, i; i = s[n]; n++)!o._parts[i] && e._parts[i] && (o._parts[i] = e._parts[i]);
				return "/" !== o.path().charAt(0) && (t = e.directory(), o._parts.path = (t ? t + "/" : "") + o._parts.path, o.normalizePath()), o.build(), o
			}, l.relativeTo = function(e) {
				var t, n, o, s, a, l = this.clone(),
					c = ["protocol", "username", "password", "hostname", "port"];
				if (this._parts.urn) throw Error("URNs do not have any generally defined hierachical components");
				if (e instanceof r || (e = new r(e)), "/" !== this.path().charAt(0) || "/" !== e.path().charAt(0)) throw Error("Cannot calculate common path from non-relative URLs");
				if (t = r.commonPath(l.path(), e.path()), !t || "/" === t) return l;
				for (var u, h = 0; u = c[h]; h++) l._parts[u] = null;
				if (n = e.directory(), o = this.directory(), n === o) return l._parts.path = "./" + l.filename(), l.build();
				if (s = n.substring(t.length), a = o.substring(t.length), n + "/" === t) return a && (a += "/"), l._parts.path = "./" + a + l.filename(), l.build();
				for (var d = "../", f = RegExp("^" + i(t)), p = n.replace(f, "/").match(/\//g).length - 1; p--;) d += "../";
				return l._parts.path = l._parts.path.replace(f, d), l.build()
			}, l.equals = function(e) {
				var t, n, i, s = this.clone(),
					a = new r(e),
					l = {}, u = {}, h = {};
				if (s.normalize(), a.normalize(), "" + s == "" + a) return !0;
				if (t = s.query(), n = a.query(), s.query(""), a.query(""), "" + s != "" + a) return !1;
				if (t.length !== n.length) return !1;
				l = r.parseQuery(t), u = r.parseQuery(n);
				for (i in l) if (c.call(l, i)) {
						if (o(l[i])) {
							if (!o(u[i])) return !1;
							if (l[i].length !== u[i].length) return !1;
							l[i].sort(), u[i].sort();
							for (var d = 0, f = l[i].length; f > d; d++) if (l[i][d] !== u[i][d]) return !1
						} else if (l[i] !== u[i]) return !1;
						h[i] = !0
					}
				for (i in u) if (c.call(u, i) && !h[i]) return !1;
				return !0
			}, l.duplicateQueryParameters = function(e) {
				return this._parts.duplicateQueryParameters = !! e, this
			}, r
		}), function(e) {
			var t, n, r, i = ".powerslider";
			window.navigator.msPointerEnabled ? (t = "MSPointerDown", n = "MSPointerMove", r = "MSPointerUp") : "ontouchend" in document ? (t = "touchstart", n = "touchmove", r = "touchend") : (t = "mousedown", n = "mousemove", r = "mouseup"), t += i + "NoUnbind", n += i, r += i;
			var o = e(document).add("body"),
				s = {
					min: 0,
					max: 0,
					step: 1,
					handles: [0],
					ranges: [],
					lCorrect: [],
					lMin: 0,
					lMax: 0
				}, a = {
					val: 0,
					priority: 0,
					target: null,
					cls: "",
					title: ""
				}, l = function(e) {
					return e === +e && e === (0 | e)
				}, c = function(t) {
					return l(t) && (t = {
						val: t
					}), e.extend(!0, {}, a, t)
				}, u = function(e) {
					try {
						var t = e.clientX || e.originalEvent.clientX || e.originalEvent.touches[0].clientX,
							n = e.clientY || e.originalEvent.clientY || e.originalEvent.touches[0].clientY;
						return [t, n]
					} catch (e) {
						return null
					}
				}, h = function(e, t) {
					for (var n = 0; t.handles.length > n; ++n) {
						var r = t.handles[n].val;
						r = Math.max(t.min, r), r = Math.min(t.max, r), t.handles[n].val = r
					}
					for (var n = 0; t.ranges.length > n; ++n) for (var i = t.ranges[n], o = 0; i.handles.length - 1 > o; ++o) {
							if ("min" !== i.handles[o] && "max" !== i.handles[o] && "min" !== i.handles[o + 1] && "max" !== i.handles[o + 1]) {
								var s = t.handles[i.handles[o]],
									a = t.handles[i.handles[o + 1]];
								s.priority > a.priority ? a.val = Math.max(s.val, a.val) : s.val = s.priority < a.priority ? Math.min(s.val, a.val) : Math.min(s.val, a.val)
							}
							i.cls && p(t, i, o)
					}
					var l = !1;
					(t.min !== t.lMin || t.max !== t.lMax) && (l = !0, t.lMin = t.min, t.lMax = t.max);
					for (var n = 0; t.handles.length > n; ++n)(l || t.lCorrect[n] !== t.handles[n].val) && (f(t, n), e.trigger("slide", [t.handles[n]]), t.lCorrect[n] = t.handles[n].val)
				}, d = {
					to: function(e, t) {
						return e.max === e.min ? 0 : 100 * (t - e.min) / (e.max - e.min)
					},
					pct: function(e, t) {
						return e.max === e.min ? .01 : 100 * t / (e.max - e.min)
					},
					val: function(e, t) {
						return e.min + t * (e.max - e.min) / 100
					}
				}, f = function(e, t) {
					e.handles[t].target.css("left", d.to(e, e.handles[t].val) + "%")
				}, p = function(e, t, n) {
					var r = "min" === t.handles[n] ? e.min : "max" === t.handles[n] ? e.max : e.handles[t.handles[n]].val,
						i = "min" === t.handles[n + 1] ? e.min : "max" === t.handles[n + 1] ? e.max : e.handles[t.handles[n + 1]].val;
					t.spans[n].css("left", d.to(e, r) + "%"), t.spans[n].css("width", d.pct(e, i - r) + "%")
				}, g = function(s, a, l) {
					a.on(t, function(t) {
						e("body").addClass("noselect");
						var a = s.data("powerslider"),
							c = a.settings,
							f = c.handles,
							p = f[l].target;
						s.trigger("slidestart", [f[l]]);
						var g = parseFloat(this.style.left) || 0,
							m = u(t),
							v = f[l].val;
						e(document).on(n, function(e) {
							e.preventDefault();
							var t = u(e);
							if (t) {
								var n = t[0] - m[0],
									r = g + 100 * (n / s.width()),
									i = d.pct(c, c.step),
									o = Math.round(r / i) * i,
									a = Math.round(d.val(c, o));
								a !== v && (f[l].val = a, h(s, c, l), v = a)
							}
						}).on(r, function() {
							s.trigger("slidestop", [f[l]]), o.add(p).off(i), e("body").removeClass("noselect")
						})
					}).on("click", function(e) {
						e.stopPropagation()
					})
				}, m = {
					init: function(t) {
						return this.each(function() {
							var n = e(this),
								r = n,
								i = n.data("powerslider");
							if (!i) {
								var o = e.extend(!0, {}, s, t);
								n.data("powerslider", {
									target: n,
									settings: o
								}), n.addClass("ps-slider");
								for (var a = o.handles, l = 0; a.length > l; ++l) {
									a[l] = c(a[l]);
									var u = e('<div class="ps-handle"/>').appendTo(n);
									u.attr("title", a[l].title), u.addClass(a[l].cls), u.data("index", l), a[l].target = u, g(r, u, l)
								}
								for (var l = 0; o.ranges.length > l; ++l) if (o.ranges[l].cls) {
										o.ranges[l].spans = [];
										for (var d = 0; o.ranges[l].handles.length - 1 > d; ++d) {
											var f = e('<div class="ps-span"/>').prependTo(n);
											f.addClass(o.ranges[l].cls), o.ranges[l].spans.push(f)
										}
									}
								h(r, o)
							}
						})
					},
					destroy: function() {
						return this.each(function() {
							var t = e(this);
							e(window).unbind(i), e(window).unbind(i + "NoUnbind"), t.removeData("powerslider")
						})
					},
					option: function(t, n) {
						if (void 0 === n) {
							var r = this.data("powerslider"),
								i = r.settings;
							return i[t]
						}
						return this.each(function() {
							var r = e(this),
								i = r.data("powerslider");
							i.settings[t] = n, h(r, i.settings)
						})
					}
				};
			e.fn.powerSlider = function(t) {
				return m[t] ? m[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.tooltip"), void 0) : m.init.apply(this, arguments)
			}
		}(jQuery), "function" == typeof require && "object" == typeof module) var _ = require("../../ext/underscore.js");
		if (function(e) {
			var t = function(e) {
				return e = e || 0, Error().stack.split("\n")[3 + e]
			}, n = " \f\n\r	  ᠎           \u2028\u2029\u2028\u2029  　",
				r = function(e) {
					return e >= "0" && "9" >= e
				}, i = function(e) {
					return e >= "0" && "7" >= e
				}, o = function(e) {
					return e >= "0" && "9" >= e || e >= "a" && "f" >= e || e >= "A" && "F" >= e
				}, s = function(e) {
					return _.contains(n, e)
				}, a = function(e) {
					return e >= "A" && "Z" >= e || e >= "a" && "z" >= e || e >= "0" && "9" >= e || "_" === e
				}, l = function() {
					return String.fromCharCode(Math.floor(256 * Math.random()))
				}, c = function(e, t) {
					if (e.length > 1) {
						var n = e;
						return n[Math.floor(Math.random() * n.length)]
					}
					var r = e.charCodeAt(0),
						i = t.charCodeAt(0);
					return String.fromCharCode(Math.floor(Math.random() * (i - r + 1)) + r)
				}, u = function(e, t) {
					if (_.isArray(e)) {
						for (var n = e, r = 0; 1e3 > r; ++r) {
							var i = l();
							if (-1 === n.indexOf(i)) return i
						}
						throw Error("No strings found")
					}
					for (var r = 0; 1e3 > r; ++r) {
						var i = l();
						if (e > i || i > t) return i
					}
					throw Error("No strings found")
				}, h = function() {
					var e = arguments[Math.floor(Math.random() * arguments.length)];
					return c(e[0], e[1])
				}, d = function() {
					for (var e = 0; 1e3 > e; ++e) {
						for (var t = l(), n = 0; arguments.length > n; ++n) {
							var r = arguments[n];
							if (t >= r[0] && r[1] >= t) break
						}
						if (n === arguments.length) return t
					}
					throw Error("No strings found")
				}, f = function(e, t, n) {
					if (t > n) {
						var r = t;
						t = n, n = r
					}
					return Math.min(Math.max(e, t), n)
				}, p = function(e) {
					var t = "";
					for (var n in e) e.hasOwnProperty(n) && e[n] && (t += n);
					return t
				}, g = function(e) {
					e = e || "";
					var t = {
						i: !1,
						m: !1
					};
					return -1 !== e.indexOf("i") && (t.i = !0), -1 !== e.indexOf("m") && (t.m = !0), t
				};
			e.caller = t, e.WHITESPACE = n, e.isDigit = r, e.isOctal = i, e.isHexa = o, e.isWhitespace = s, e.isAlpha = a, e.randomChar = l, e.randomCharIn = c, e.randomCharOut = u, e.randomCharInMany = h, e.randomCharOutMany = d, e.clamp = f, e.flagsToStr = p, e.strToFlags = g
		}("undefined" == typeof exports ? this.util = {} : exports), "function" == typeof require && "object" == typeof module) var _ = require("../../ext/underscore.js");
		if (function(e) {
			var t = Array.prototype,
				n = t.concat,
				r = function(e) {
					return _.isFunction(e) || (e = function(e, t) {
						return e === t
					}),
					function() {
						var r = n.apply(t, arguments);
						r.length;
						for (var i = 0; r.length > i; ++i) for (var o = i + 1; r.length > o; ++o) e(r[i], r[o]) && (r.splice(o, 1), --o);
						return r
					}
				};
			e.unionFn = r
		}("undefined" == typeof exports ? this.x_ = {} : exports), "function" == typeof require && "object" == typeof module) var _ = require("../../ext/underscore.js"),
		util = require("./util.js"), x_ = require("./xunderscore.js");
		if (function(e) {
			var t = function() {
				throw Error("abstract method")
			}, n = function(e, t) {
					this.tree = e, this.index = t, this.repeatStack = [], this.groups = [], this.groupStarts = [], this.backrefIndex = 0
				};
			n.prototype.clone = function(e, t) {
				void 0 === t && (t = this.index);
				var r = new n(e || this.tree, t);
				return r.repeatStack = _.clone(this.repeatStack), r.groups = _.clone(this.groups), r.groupStarts = _.clone(this.groupStarts), r.backrefIndex = this.backrefIndex, r
			}, n.prototype.getChild = function(e) {
				for (var t = this.tree, n = t.parent; n !== e;) {
					if (!n) return null;
					t = n, n = t.parent
				}
				return t
			}, n.prototype.step = function(e, t, n) {
				var r = this.getChild(e);
				return r ? r.step(this, t, n) : {
					eps: [],
					val: []
				}
			};
			var r = function(e, t) {
				return e === t || e.tree === t.tree && e.index === t.index && _.isEqual(e.repeatStack, t.repeatStack) && _.isEqual(e.groups, t.groups) && _.isEqual(e.groupStarts, t.groupStarts)
			}, i = function(e, t) {
					return e === t || e.tree === t.tree && e.index === t.index
				}, o = x_.unionFn(r),
				s = function(e, t, n) {
					for (var r = 0; e.length > r; ++r) e[r].parent = this, e[r].parentIndex = r;
					this.children = e, this.range = t, this.parent = null, this.finalState = n
				};
			s.prototype.dive = t, s.prototype.step = t, s.prototype.stateToStrPos = t, s.prototype.strPosToState = t, s.prototype.getPosMap = t, s.prototype.expectedLength = t, s.prototype.visitAll = function(e) {
				for (var t = 0; this.children.length > t; ++t) this.children[t].visitAll(e);
				e(this)
			}, s.prototype.compress = function() {
				for (var e = 0; this.children.length > e; ++e) this.children[e].compress();
				return this
			}, s.prototype.replace = function(e, t) {
				this.children[e] = t, t.parent = this, t.parentIndex = e
			}, s.prototype.getString = function() {
				var e = this.getRoot().s,
					t = this.range;
				return e.substring(t[0], t[1])
			}, s.prototype.getRoot = function() {
				return this instanceof a ? this : this.parent.getRoot()
			}, s.prototype.insertFinal = function(e) {
				if (e.eps.length > 0) {
					var t = this.finalState.clone();
					t.groups = _.clone(e.eps[0].groups), e.val.push(t)
				}
				return e
			}, s.prototype.stateInfo = function(e, t, r) {
				t = t || 0;
				var s = {
					s: e
				}, a = this,
					l = function(e) {
						return function(t) {
							return i(t, a.finalState) ? [] : a.insertFinal(a.step(t.clone(), s, e)).val
						}
					};
				r = r || new n(this, 0);
				for (var c = [this.insertFinal(this.dive(r.clone(this, 0), s, t)).val], u = t; e.length > u; ++u) c.push(o.apply(x_, _.map(c[u - t], l(u))));
				return c
			}, s.prototype._baseFind = function(e, t, n, r, i) {
				i = i || !1;
				var o = RegExp(e, "g" + util.flagsToStr(this.getRoot().flags));
				o.lastIndex = t;
				var s = o.exec(n),
					a = null === s || o.lastIndex - s[0].length !== t;
				if (r) {
					if (a && !i) throw Error("javascript says null but we say match for " + e + " on " + n);
					if (_.isEmpty(r) || _.isEmpty(r.groups)) {
						r.groups = [];
						for (var l = 0; s.length > l; ++l) r.groups[l] = s[l]
					}
					return r
				}
				if (!a && !i) throw Error("javascript says match but we say null on " + n);
				return null
			}, s.prototype.find = function(e, t, n, r) {
				t = t || 0, n = n || this.stateInfo(e, t);
				for (var o = null, s = 0; n.length > s; ++s) for (var a = 0; n[s].length > a; ++a) if (i(n[s][a], this.finalState)) {
							o = n[s][a];
							break
						}
				return this._baseFind(this.getString(), t, e, o, r)
			}, s.prototype.match = function(e, t, n) {
				t = t || 0, n = n || this.stateInfo(e, t);
				for (var r = _.last(n), i = [], o = 0; r.length > o; ++o) {
					var s = r[o];
					s.tree === this && i.push(s)
				}
				return this._baseFind("^(?:" + this.getString() + ")$", t, e, i[0])
			}, s.prototype.mergeRets = function(e) {
				return 1 === e.length ? e[0] : {
					eps: o.apply(x_, _.pluck(e, "eps")),
					val: o.apply(x_, _.pluck(e, "val"))
				}
			};
			var a = function(e, t, r, i, o, a) {
				s.call(this, [t], a, new n(this, 1)), this.s = e, this.flags = r, this.groups = i, this.backrefs = o
			};
			_.extend(a.prototype, s.prototype), a.prototype.dive = function(e, t, n) {
				return this.children[0].dive(e, t, n)
			}, a.prototype.step = function(e, t, n) {
				return i(e, this.finalState) ? {
					eps: [],
					val: []
				} : this.children[0].step(e, t, n)
			}, a.prototype.stateToStrPos = function(e) {
				return e.index ? this.range[1] : this.range[0]
			}, a.prototype.strPosToState = function(e) {
				return e === this.range[1] ? this.finalState.clone() : this.children[0].strPosToState(e)
			}, a.prototype.getPosMap = function(e) {
				return e = e || [], this.children[0].getPosMap(e), e.push(this.range[1]), e
			}, a.prototype.expectedLength = function() {
				return this.children[0].expectedLength()
			};
			var l = function(e) {
				s.call(this, [], e, new n(this, 0))
			};
			_.extend(l.prototype, s.prototype), l.prototype.dive = function(e) {
				return {
					eps: [e.clone(this, 0)],
					val: []
				}
			}, l.prototype.step = function(e) {
				return {
					eps: [e.clone()],
					val: []
				}
			}, l.prototype.stateToStrPos = function() {
				return this.range[0]
			}, l.prototype.strPosToState = function() {
				return state.clone(this, 0)
			}, l.prototype.getPosMap = function(e) {
				return e || []
			}, l.prototype.expectedLength = function() {
				return 0
			};
			var c = function(e, t, r) {
				s.call(this, [e], r, new n(this, 1)), this.group = t
			};
			_.extend(c.prototype, s.prototype), c.prototype.dive = function(e, t, n) {
				var r = this.children[0].dive(e, t, n);
				if (0 !== this.getRoot().backrefs) {
					for (var i = 0; r.eps.length > i; ++i) r.eps[i].groups[this.group] = "";
					for (var i = 0; r.val.length > i; ++i) r.val[i].groupStarts[this.group] = ""
				}
				return r
			}, c.prototype.step = function(e, t, n) {
				if (0 === this.getRoot().backrefs) return this.children[0].step(e, t, n);
				for (var r = this.children[0].step(e, t, n), i = 0; r.eps.length > i; ++i) {
					var o = r.eps[i].groupStarts[this.group] || "";
					r.eps[i].groups[this.group] = o + t.s[n]
				}
				for (var i = 0; r.val.length > i; ++i) {
					var o = r.val[i].groupStarts[this.group] || "";
					r.val[i].groupStarts[this.group] = o + t.s[n]
				}
				return r
			}, c.prototype.stateToStrPos = function(e) {
				return e.index ? this.range[1] : this.range[0]
			}, c.prototype.strPosToState = function(e) {
				return this.children[0].strPosToState(e)
			}, c.prototype.getPosMap = function(e) {
				return this.children[0].getPosMap(e || [])
			}, c.prototype.expectedLength = function() {
				return this.children[0].expectedLength()
			};
			var u = function(e, t, r) {
				s.call(this, [], r, new n(this, 1)), this.group = e, this.ref = t
			};
			_.extend(u.prototype, s.prototype), u.prototype.dive = function(e) {
				if (void 0 === e.groups[this.group] && (e.groups[this.group] = ""), "" === e.groups[this.group]) return {
						eps: [e.clone(this, 1)],
						val: []
				};
				var t = e.clone(this, 0);
				return t.backrefIndex = 0, {
					eps: [],
					val: [t]
				}
			}, u.prototype.step = function(e, t, n) {
				return void 0 === e.groups[this.group] && (e.groups[this.group] = ""), e.groups[this.group][e.backrefIndex] !== t.s[n] ? {
					eps: [],
					val: []
				} : (e.backrefIndex += 1, e.backrefIndex === e.groups[this.group].length ? {
					eps: [e.clone(this, 1)],
					val: []
				} : {
					eps: [],
					val: [e]
				})
			}, u.prototype.stateToStrPos = function(e) {
				return e.index ? this.range[1] : this.range[0]
			}, u.prototype.strPosToState = function(e) {
				return e === this.range[1] ? this.finalState.clone() : new n(this, 0)
			}, u.prototype.getPosMap = function(e) {
				return e = e || [], e.push(this.range[0]), e
			}, u.prototype.expectedLength = function() {
				return 0
			};
			var h = function(e, t, r) {
				s.call(this, [e], r, new n(this, 1)), this.negative = t.negative || !1
			};
			_.extend(h.prototype, s.prototype), h.prototype._mergeGroups = function(e, t) {
				var n = e.clone();
				n.tree = this, n.index = 0;
				for (var r in t.groups) "0" !== r && (n.groups[r] = t.groups[r]);
				return n
			}, h.prototype.dive = function(e, t, r) {
				var i = this.children[0].stateInfo(t.s, r, e),
					o = this.children[0].find(t.s, r, i, !0),
					s = this.negative ^ !! o,
					a = this._mergeGroups(e, o || new n(this, 0));
				return {
					eps: s ? [a] : [],
					val: this.insertFinal(this.children[0].dive(e, t, r)).val
				}
			}, h.prototype.step = function(e, t, r) {
				if (i(e, this.finalState)) return {
						eps: [],
						val: []
				};
				if (null === e.getChild(this)) {
					this.children[0].stateInfo(t.s, r, e);
					var o = this.children[0].find(t.s, r, e, !0),
						s = this.negative ^ !! o,
						a = this._mergeGroups(e, o || new n(this, 0));
					return {
						eps: s ? [a] : [],
						val: this.insertFinal(this.children[0].step(e, t, r))
					}
				}
				var l = this.insertFinal(this.children[0].step(e, t, r));
				return {
					eps: [],
					val: l.val
				}
			}, h.prototype.stateToStrPos = function(e) {
				return e.index ? this.range[1] : this.range[0]
			}, h.prototype.strPosToState = function(e) {
				return this.children[0].strPosToState(e)
			}, h.prototype.getPosMap = function(e) {
				return this.children[0].getPosMap(e || [])
			}, h.prototype.expectedLength = function() {
				return 0
			};
			var d = function(e, t) {
				s.call(this, e, t, new n(this, e.length))
			};
			_.extend(d.prototype, s.prototype), d.prototype.dive = function(e, t, n) {
				for (var r = [], i = 0; this.children.length > i; ++i) r.push(this.children[i].dive(e, t, n));
				return this.mergeRets(r)
			}, d.prototype.step = function(e, t, n) {
				return e.step(this, t, n)
			}, d.prototype.stateToStrPos = function(e) {
				return e.index < this.children.length ? this.children[e.index].range[0] : this.range[1]
			}, d.prototype.strPosToState = function(e) {
				for (var t = 0; this.children.length > t; ++t) if (e >= this.children[t].range[0] && this.children[t].range[1] > e) return this.children[t].strPosToState(e);
				return null
			}, d.prototype.getPosMap = function(e) {
				e = e || [];
				for (var t = 0; this.children.length > t; ++t) this.children[t].getPosMap(e);
				return e
			}, d.prototype.expectedLength = function() {
				for (var e = [], t = 0; this.children.length > t; ++t) e.push(this.children[t].expectedLength());
				return _.max(e)
			};
			var f = function(e, t) {
				s.call(this, e, t, new n(this, e.length))
			};
			_.extend(f.prototype, s.prototype), f.prototype.dive = function(e, t, n) {
				for (var r = [this.children[0].dive(e, t, n)], i = 1; this.children.length > i; ++i) {
					var o = _.last(r).eps;
					if (0 === o.length) break;
					for (var s = [], a = 0; o.length > a; ++a) s.push(this.children[i].dive(o[a], t, n));
					r.push(this.mergeRets(s))
				}
				var l = this.mergeRets(r);
				return (this.children.length > i || 0 === _.last(r).eps.length) && (l.eps = []), l
			}, f.prototype.step = function(e, t, n) {
				for (var r = e.getChild(this), i = [r.step(e, t, n)], o = r.parentIndex + 1; this.children.length > o; ++o) {
					var s = _.last(i).eps;
					if (0 === s.length) break;
					for (var a = [], l = 0; s.length > l; ++l) a.push(this.children[o].dive(s[l], t, n + 1));
					i.push(this.mergeRets(a))
				}
				var c = this.mergeRets(i);
				return (this.children.length > o || 0 === _.last(i).eps.length) && (c.eps = []), c
			}, f.prototype.stateToStrPos = function(e) {
				return e.index < this.children.length ? this.children[e.index].range[0] : this.range[1]
			}, f.prototype.strPosToState = function(e) {
				for (var t = 0; this.children.length > t; ++t) if (e >= this.children[t].range[0] && this.children[t].range[1] > e) return this.children[t].strPosToState(e);
				return null
			}, f.prototype.compress = function() {
				for (var e = 0, t = this.children.length - 1; t >= 0; --t) this.children[t] instanceof g ? ++e : (e > 1 && this.join(t + 1, e), e = 0, this.children[t].compress());
				if (e > 1 && this.join(0, e), 1 == this.children.length) this.parent.replace(this.parentIndex, this.children[0]);
				else for (var t = 0; this.children.length > t; ++t) this.children[t].parent = this, this.children[t].parentIndex = t
			}, f.prototype.getPosMap = function(e) {
				e = e || [];
				for (var t = 0; this.children.length > t; ++t) this.children[t].getPosMap(e);
				return e
			}, f.prototype.expectedLength = function() {
				for (var e = 0, t = 0; this.children.length > t; ++t) e += this.children[t].expectedLength();
				return e
			}, f.prototype.join = function(e, t) {
				for (var n = [], r = 0; t > r; ++r) n.push.apply(n, this.children[e + r].literals);
				var i = [this.children[e].range[0], this.children[e + t - 1].range[1]],
					o = new g(n, i);
				this.children.splice(e, t, o)
			};
			var p = function(e, t, r) {
				s.call(this, [e], r, new n(this, 1)), this.minmax = t
			};
			_.extend(p.prototype, s.prototype), p.prototype.actualMax = function() {
				var e = this.minmax.max;
				return 1 / 0 === e && (e = this.minmax.min), e
			}, p.prototype.dive = function(e, t, n, r) {
				if (r = r || 1, r > this.minmax.max) return {
						eps: [e.clone(this, 0)],
						val: []
				};
				var i = this.actualMax();
				r = Math.min(r, i);
				var o = [],
					s = this.children[0].dive(e, t, n);
				if (s.eps.length > 0) for (var a = r; i >= a; ++a) {
						for (var l = [], c = 0; s.val.length > c; ++c) {
							var u = s.val[c].clone();
							this.repeatify(u, a), l.push(u)
						}
						o.push({
							val: l,
							eps: s.eps
						})
				} else this.repeatify(s.val, r), o.push(s);
				var h = this.mergeRets(o);
				return 0 === this.minmax.min && h.eps.push(e.clone(this, 0)), h
			}, p.prototype.step = function(e, t, n) {
				var r = e.repeatStack.pop(),
					i = this.children[0].step(e, t, n),
					o = [i];
				if (i.eps.length > 0) {
					if (this.minmax.max >= r + 1) for (var s = 0; i.eps.length > s; ++s) o.push(this.dive(i.eps[s], t, n + 1, r + 1));
					this.minmax.min > r && (i.eps = []), 1 / 0 === this.minmax.max ? this.repeatify(i.val, r) : this.repeatify(i.val, Math.min(r + 1, this.minmax.max + 1))
				} else this.repeatify(i.val, r);
				return this.mergeRets(o)
			}, p.prototype.stateToStrPos = function(e) {
				return e.index ? this.range[1] : this.range[0]
			}, p.prototype.strPosToState = function(e) {
				return this.children[0].strPosToState(e)
			}, p.prototype.getPosMap = function(e) {
				return this.children[0].getPosMap(e || [])
			}, p.prototype.expectedLength = function() {
				var e = (this.minmax.max + this.minmax.min) / 2;
				return 1 / 0 === this.minmax.max && (e = this.minmax.min + 3), this.children[0].expectedLength() * e
			}, p.prototype.repeatify = function(e, t) {
				if (t = t || 1, e instanceof n) e.repeatStack.push(t);
				else for (var r = 0; e.length > r; ++r) e[r].repeatStack.push(t)
			};
			var g = function(e, t) {
				s.call(this, [], t, new n(this, e.length)), this.literals = e
			};
			_.extend(g.prototype, s.prototype), g.prototype.dive = function(e, t, n) {
				var r = this.skipEps(e.clone(this, 0), t, n);
				return r ? r.index === this.literals.length ? {
					eps: [r],
					val: []
				} : {
					eps: [],
					val: [r]
				} : {
					eps: [],
					val: []
				}
			}, g.prototype.step = function(e, t, n) {
				var r = this.skipEps(e, t, n);
				if (!r) return {
						eps: [],
						val: []
				};
				if (r.index === this.literals.length) return {
						eps: [r],
						val: []
				};
				var i = t.s[n],
					o = !1;
				return o = this.getRoot().flags.i ? this.literals[r.index].matches(i.toLowerCase()) || this.literals[r.index].matches(i.toUpperCase()) : this.literals[r.index].matches(i), o ? (r.index += 1, r.index < this.literals.length ? (r = this.skipEps(r, t, n + 1), r ? r.index < this.literals.length ? {
					eps: [],
					val: [r]
				} : {
					eps: [r],
					val: []
				} : {
					eps: [],
					val: []
				}) : {
					eps: [r],
					val: []
				}) : {
					eps: [],
					val: []
				}
			}, g.prototype.skipEps = function(e, t, n) {
				for (var r = t.s[n], i = t.s[n - 1];;) {
					var o = this.literals[e.index].c.toLowerCase();
					if ("\\b" === o) {
						if (0 === n) {
							if (!(util.isAlpha(r) ^ "\\B" === this.literals[e.index].c)) return null;
							e.index += 1
						} else if (n === t.s.length) {
							if (!(util.isAlpha(i) ^ "\\B" === this.literals[e.index].c)) return null;
							e.index += 1
						} else if ("\\b" === this.literals[e.index].c) {
							if (!(util.isAlpha(i) && !util.isAlpha(r) || !util.isAlpha(i) && util.isAlpha(r))) return null;
							e.index += 1
						} else if ("\\B" === this.literals[e.index].c) {
							if (!(util.isAlpha(i) && util.isAlpha(r) || !util.isAlpha(i) && !util.isAlpha(r))) return null;
							e.index += 1
						}
					} else if ("\\^" === o) {
						var s = this.getRoot().flags.m;
						if (!(0 === n || s && "\n" === i)) return null;
						e.index += 1
					} else {
						if ("\\$" !== o) break;
						var s = this.getRoot().flags.m;
						if (n !== t.s.length && (!s || "\n" !== r && "\r" !== r)) return null;
						e.index += 1
					} if (e.index === this.literals.length) break
				}
				return e
			}, g.prototype.stateToStrPos = function(e, t) {
				for (var n = this.range[0], r = 0; e.index > r; ++r) n += "a" === t ? this.literals[r].a.length : this.literals[r].r.length;
				return n
			}, g.prototype.strPosToState = function(e) {
				if (this.range[0] > e || e >= this.range[1]) return null;
				e -= this.range[0];
				for (var t = 0; this.literals.length > t && !(0 >= e); ++t) e -= this.literals[t].a.length;
				return new n(this, t)
			}, g.prototype.getPosMap = function(e) {
				e = e || [];
				for (var t = 0, n = 0; this.literals.length > n; ++n) e.push(t + this.range[0]), t += this.literals[n].a.length;
				return e
			}, g.prototype.expectedLength = function() {
				return this.literals.length
			};
			var m = function(e, t) {
				s.call(this, [], t, new n(this, 1)), this.charset = e
			};
			_.extend(m.prototype, s.prototype), m.prototype.dive = function(e) {
				return {
					eps: [],
					val: [e.clone(this, 0)]
				}
			}, m.prototype.step = function(e, t, n) {
				var r = !! this.charset.negate ^ !! this.anyOptsMatch(t.s[n]),
					i = r ? [e.clone(this, 1)] : [];
				return {
					eps: i,
					val: []
				}
			}, m.prototype.stateToStrPos = function(e) {
				return e.index ? this.range[1] : this.range[0]
			}, m.prototype.strPosToState = function(e) {
				return e >= this.range[0] && this.range[1] > e ? new n(this, 0) : null
			}, m.prototype.getPosMap = function(e) {
				return e = e || [], e.push(this.range[0]), e
			}, m.prototype.expectedLength = function() {
				return 1
			}, m.prototype.optMatches = function(e, t) {
				if (!_.isArray(e)) return this.getRoot().flags.i ? e.matches(t.toLowerCase()) || e.matches(t.toUpperCase()) : e.matches(t);
				var n = !1;
				return (n = this.getRoot().flags.i ? e[0].c.toLowerCase() <= t.toLowerCase() && t.toLowerCase() <= e[1].c.toLowerCase() : t >= e[0].c && e[1].c >= t) ? !0 : !1
			}, m.prototype.anyOptsMatch = function(e) {
				for (var t = 0; this.charset.opts.length > t; ++t) if (this.optMatches(this.charset.opts[t], e)) return !0;
				return !1
			}, e.ReTree = a, e.EmptyTree = l, e.MatchTree = c, e.BackrefTree = u, e.LookaheadTree = h, e.AltTree = d, e.CatTree = f, e.RepeatTree = p, e.LiteralTree = g, e.CharsetTree = m
		}("undefined" == typeof exports ? this.retree = {} : exports), "function" == typeof require && "object" == typeof module) var _ = require("../../ext/underscore.js"),
		retree = require("./retree.js"), util = require("./util.js");
		if (function(exports) {
			var EndOfStringError = function(e) {
				this.message = e
			};
			_.extend(EndOfStringError.prototype, Error.prototype);
			var ParseError = function(e, t) {
				var n = Error.call(this, e);
				return n.name = "ParseError", n.range = t, n
			}, Parser = function(e) {
					this.s = e, this.k = 0, this.group = 1, this.ref = 1
				}, safePeekCreator = function(e, t) {
					return function(n, r) {
						try {
							return e.peek()
						} catch (i) {
							if (i instanceof EndOfStringError) throw void 0 === r && (r = e.k), new ParseError(n, [t, r]);
							throw i
						}
					}
				};
			Parser.prototype.more = function() {
				return this.k < this.s.length
			}, Parser.prototype.peek = function() {
				if (this.k >= this.s.length) throw new EndOfStringError("Trying to peek() past end of string");
				return this.s[this.k]
			}, Parser.prototype.next = function() {
				if (this.k >= this.s.length) throw new EndOfStringError("Trying to next() past end of string");
				return this.s[this.k++]
			}, Parser.prototype.eat = function(e) {
				if (!this.more()) throw new ParseError('Expected "' + e + '" but reached end of string.', [this.k, this.k + 1]);
				if (this.peek() !== e) throw new ParseError('Expected "' + e + '" but got "' + this.peek() + '"', [this.k, this.k + 1]);
				++this.k
			}, Parser.prototype.match = function(e) {
				return this.s.substring(this.k).match(RegExp("^(?:" + e + ")"))
			}, Parser.prototype.parseRe = function(e) {
				e = e || {
					i: !1,
					m: !1
				};
				var t = this.k,
					n = this.parseAlt();
				if (this.more()) {
					if (")" === this.peek()) throw new ParseError("Unmatched parenthesis", [this.k, this.k + 1]);
					throw new ParseError('Unexpected character "' + this.peek() + '"', [this.k, this.k + 1])
				}
				return new retree.ReTree(this.s, n, e, this.group - 1, this.ref - 1, [t, this.k])
			}, Parser.prototype.parseAlt = function() {
				for (var e = this.k, t = [this.parseCat()]; this.more() && "|" === this.peek();) this.next(), t.push(this.parseCat());
				return t.length > 1 ? new retree.AltTree(t, [e, this.k]) : t[0]
			}, Parser.CAT_BREAKS = [")", "|"], Parser.prototype.parseCat = function() {
				for (var e = this.k, t = []; this.more() && !_.contains(Parser.CAT_BREAKS, this.peek());) t.push(this.parseRepeat());
				return t.length > 1 ? new retree.CatTree(t, [e, this.k]) : 1 === t.length ? t[0] : new retree.EmptyTree([e, e])
			}, Parser.REPEATS_RE = "[*?+]|\\{(\\d+)(?:(,)(\\d*))?\\}", Parser.prototype.parseRepeat = function() {
				var e = this.k,
					t = this.parseBase(),
					n = this.k,
					r = this.match(Parser.REPEATS_RE);
				if (r) {
					var i = 0,
						o = 1 / 0,
						s = !0;
					if ("?" === r[0]) o = 1;
					else if ("+" === r[0]) i = 1;
					else if (void 0 !== r[1] && (i = parseInt(r[1]), void 0 !== r[2] && "" !== r[2] ? void 0 !== r[3] && "" !== r[3] && (o = parseInt(r[3])) : o = i, i > o)) throw new ParseError("Second number inside a curly brace must be larger than the first", [n + 1, this.k]);
					return this.k += r[0].length, this.more() && "?" === this.peek() && (s = !1, this.next()), new retree.RepeatTree(t, {
						min: i,
						max: o,
						greedy: s
					}, [e, this.k])
				}
				return t
			}, Parser.prototype.parseBase = function() {
				if (!this.more()) return new retree.EmptyTree([this.k, this.k]);
				var e = this.k,
					t = safePeekCreator(this, e),
					n = this.peek();
				if ("(" === n) {
					this.next();
					var r = null;
					if ("?" === t("Unmatched parenthesis", e + 1)) if (this.next(), n = t("Unmatched parenthesis", e + 1), ":" === n) this.next(), r = this.parseAlt();
						else {
							if ("=" !== n && "!" !== n) throw new ParseError('Unexpected character "' + n + '" after "?"', [this.k, this.k + 1]);
							this.next();
							var i = this.parseAlt();
							r = new retree.LookaheadTree(i, {
								negative: "!" === n
							}, [e, this.k])
						} else {
							var o = this.group++;
							r = new retree.MatchTree(this.parseAlt(), o, [e, this.k + 1])
						}
					if (")" !== t("Unmatched parenthesis", e + 1)) throw new ParseError("Unmatched parenthesis", [e, e + 1]);
					return this.next(), r
				}
				if ("[" === n) {
					this.next();
					try {
						var s = this.parseCharset()
					} catch (a) {
						if (a instanceof EndOfStringError) throw new ParseError("Unmatched brace", [e, e + 1]);
						throw a
					}
					return this.eat("]"), new retree.CharsetTree(s, [e, this.k])
				}
				if (")" === n) throw new ParseError("Unmatched parenthesis", [e, e + 1]);
				if (this.match(Parser.REPEATS_RE)) throw new ParseError("Nothing to repeat", [e, e + 1]);
				var l = this.match("\\\\(\\d+)");
				if (l && "0" !== l[1][0] && parseInt(l[1]) < this.group) {
					this.k += l[0].length;
					var c = this.ref++;
					return new retree.BackrefTree(parseInt(l[1]), c, [e, this.k])
				}
				var u = this.parseLiteral();
				return new retree.LiteralTree([u], [e, this.k])
			}, Parser.isGoodForRange = function(e) {
				return "\\" === e.c[0] && e.r.length > 1 ? !1 : !0
			};
			var RenderableChar = function(e, t, n, r) {
				this.c = e, this.r = t, this.a = n, this.escaped = r || !1
			};
			RenderableChar.prototype.isEscaped = function() {
				return this.escaped
			}, RenderableChar.prototype.matches = function(e) {
				if ("\\" === this.c[0]) {
					if (1 === this.c.length) return "\\" === e;
					if ("." === this.c[1]) return !0;
					if ("d" === this.c[1]) return util.isDigit(e);
					if ("D" === this.c[1]) return !util.isDigit(e);
					if ("s" === this.c[1]) return util.isWhitespace(e);
					if ("S" === this.c[1]) return !util.isWhitespace(e);
					if ("w" === this.c[1]) return util.isAlpha(e);
					if ("W" === this.c[1]) return !util.isAlpha(e);
					throw Error("Undefined escape")
				}
				return this.c === e ? !0 : !1
			}, RenderableChar.prototype.random = function() {
				if ("\\" === this.c[0]) {
					if (1 === this.c.length) return "\\";
					if ("." === this.c[1]) return util.randomCharIn(" ", "~");
					if ("d" === this.c[1]) return util.randomCharIn("0", "9");
					if ("D" === this.c[1]) return util.randomCharOut("0", "9");
					if ("s" === this.c[1]) return util.randomCharIn(util.WHITESPACE);
					if ("S" === this.c[1]) return util.randomCharOut(util.WHITESPACE);
					if ("w" === this.c[1]) return util.randomCharInMany(["0", "9"], ["a", "z"], ["A", "Z"]);
					if ("W" === this.c[1]) return util.randomCharOutMany(["0", "9"], ["a", "z"], ["A", "Z"]);
					throw Error("Undefined escape " + this.c[1])
				}
				return this.c[0]
			}, Parser.prototype.parseCharset = function() {
				var e = this,
					t = {
						negate: !1,
						opts: []
					}, n = t.opts;
				"^" === this.peek() && (t.negate = !0, this.next());
				for (var r = null, i = !1, o = function(t) {
						if (r) if (i) {
								if (!Parser.isGoodForRange(r)) throw new ParseError('Cannot use "' + r.r + '" as the start of a range.', [e.k - (r.a.length + 1 + t.a.length), e.k - (1 + t.a.length)]);
								if (!Parser.isGoodForRange(t)) throw new ParseError('Cannot use "' + t.r + '" as the end of a range.', [e.k - t.a.length, e.k]);
								if (!(t.c >= r.c)) throw new ParseError("Second element in a range must be larger than the first", [e.k - (r.a.length + t.a.length) - 1, e.k]);
								n.push([r, t]), r = null, i = !1
							} else n.push(r), r = t;
							else r = t
					};;) {
					var s = this.peek();
					if ("-" === s) r ? i ? o(new RenderableChar(s, s, s)) : i = !0 : r = new RenderableChar(s, s, s), this.next();
					else {
						if ("]" === s) return r && (n.push(r), i && n.push(new RenderableChar("-", "-", "-"))), t;
						"\\" === s ? (this.next(), o(this.parseEscaped({
							inCharset: !0
						}))) : (this.next(), o(new RenderableChar(s, s, s)))
					}
				}
			}, Parser.prototype.parseLiteral = function() {
				var e = this.next();
				return "." === e || "^" === e || "$" === e ? new RenderableChar("\\" + e, e, e, !0) : "\\" === e ? this.parseEscaped({
					inCharset: !1
				}) : new RenderableChar(e, e, e)
			}, Parser.ESCAPE_RE = "c([a-zA-Z])|x([0-9a-fA-F]{2})|u([0-9a-fA-F]{4})", Parser.OCTAL_ESCAPE = "[0-3][0-7]?[0-7]?|[4-7][0-7]?", Parser.prototype.parseEscaped = function(opts) {
				opts = opts || {}, inCharset = opts.inCharset || !1;
				var start = this.k - 1,
					safePeek = safePeekCreator(this, start),
					c = safePeek('Expected a character after "\\"');
				if (-1 !== "cxu".indexOf(c)) {
					var match = this.match(Parser.ESCAPE_RE);
					if (!match) {
						if ("c" === c) var msg = 'Expected control character after "\\c"';
						else if ("x" === c) var msg = 'Expected exactly two hex digits after "\\x"';
						else var msg = 'Expected exactly four hex digits after "\\u"';
						throw new ParseError(msg, [start, start + 2])
					}
					var ccStr = match[1] || match[2] || match[3];
					if ("c" === c) var cc = ccStr.toLowerCase().charCodeAt(0) - "a".charCodeAt(0) + 1;
					else var cc = parseInt(ccStr, 16);
					var render = "\\" + c + ccStr;
					return this.k += match[0].length, new RenderableChar(String.fromCharCode(cc), render, render, !0)
				}
				if (util.isDigit(c)) {
					var match = this.match(Parser.OCTAL_ESCAPE);
					if (!match) return this.next(), new RenderableChar(c, c, "\\" + c);
					this.k += match[0].length;
					var ch = String.fromCharCode(parseInt(match[0], 8));
					return new RenderableChar(ch, "\\" + match[0], "\\" + match[0], !0)
				}
				return this.next(), "b" === c && inCharset || -1 !== "fnrtv".indexOf(c) ? new RenderableChar(eval('"\\' + c + '"'), "\\" + c, "\\" + c, !0) : ("b" !== c && "B" !== c || inCharset) && "d" !== c && "D" !== c && "s" !== c && "S" !== c && "w" !== c && "W" !== c ? new RenderableChar(c, c, "\\" + c, !1) : new RenderableChar("\\" + c, "\\" + c, "\\" + c, !0)
			}, exports.ParseError = ParseError, exports.Parser = Parser, exports.parse = function(e, t) {
				return new Parser(e).parseRe(_.clone(t)).compress()
			}
		}("undefined" == typeof exports ? this.re = {} : exports), function(e) {
			var t = 4,
				n = 8,
				r = function(e, t) {
					return e.append("svg:path").classed("nfa-path", !0).attr("d", t)
				}, i = function() {
					this.reset()
				};
			i.prototype.reset = function() {
				if (this.renderHash = new Hashtable, !this.monoChar) {
					var e = d3.select("body").append("svg:svg"),
						t = e.append("svg:text").classed("bigspace", !0).text("X"),
						n = e.append("svg:text").classed("nfa-label", !0).text("X");
					this.monoChar = t[0][0].getBoundingClientRect(), this.literalSpacing = 4, this.charsetSpacing = 7, this.labelChar = n[0][0].getBoundingClientRect(), this.literalCharWidth = t[0][0].getBoundingClientRect().width + this.literalSpacing, e.remove()
				}
			};
			var o = 80,
				s = 10,
				a = o + s,
				l = 5,
				c = 500,
				u = 15;
			i.prototype.getBackrefHeight = function() {
				return 3 * (this.monoChar.height + 2 * n + l)
			}, i.prototype.prepareBackrefs = function(e, t) {
				if ($(t[0][0]).empty(), e.backrefs > 0) {
					var n = t.append("svg:g");
					n.append("svg:clipPath").attr("id", "clip").append("svg:rect").attr("x", 0).attr("y", -20).attr("width", o).attr("height", c);
					var r = n.append("svg:linearGradient").attr("id", "leftGrad").attr("x1", "0%").attr("x2", "100%").attr("y1", "0%").attr("y2", "0%");
					r.append("svg:stop").attr("offset", "0%").style("stop-color", "rgb(255, 255, 255)").style("stop-opacity", "1"), r.append("svg:stop").attr("offset", "100%").style("stop-color", "rgb(255, 255, 255)").style("stop-opacity", "0.2");
					var i = n.append("svg:linearGradient").attr("id", "rightGrad").attr("x1", "100%").attr("x2", "0%").attr("y1", "0%").attr("y2", "0%");
					i.append("svg:stop").attr("offset", "0%").style("stop-color", "rgb(255, 255, 255)").style("stop-opacity", "1"), i.append("svg:stop").attr("offset", "100%").style("stop-color", "rgb(255, 255, 255)").style("stop-opacity", "0.2");
					var l = n.append("svg:linearGradient").attr("id", "bottomGrad").attr("x1", "0%").attr("x2", "0%").attr("y1", "100%").attr("y2", "0%");
					l.append("svg:stop").attr("offset", "0%").style("stop-color", "rgb(255, 255, 255)").style("stop-opacity", "1"), l.append("svg:stop").attr("offset", "100%").style("stop-color", "rgb(255, 255, 255)").style("stop-opacity", "0.2")
				}
				for (var h = 0; e.backrefs > h; ++h) {
					var d = t.append("svg:g").classed("nfa-backref-detail-holder", !0).classed("backref-num-" + (h + 1), !0).attr("transform", "translate(" + h * a + ",0)").attr("clip-path", "url(#clip)");
					d.append("svg:rect").classed("nfa-backref-back", !0).attr("width", o).attr("height", this.getBackrefHeight()), d.append("svg:text").classed("nfa-backref-title", !0).attr("dy", 12).attr("x", o / 2).text("Ref " + (h + 1)), d.append("svg:rect").attr("fill", "url(#leftGrad)").attr("x", -s / 2).attr("y", "0").attr("width", u + s / 2).attr("height", c), d.append("svg:rect").attr("fill", "url(#rightGrad)").attr("x", o - u).attr("y", 0).attr("width", u + s / 2).attr("height", c), d.append("svg:rect").attr("fill", "url(#bottomGrad)").attr("x", -s / 2).attr("y", this.getBackrefHeight() - 40).attr("width", o + s).attr("height", 45)
				}
			}, i.prototype.adjustForBackrefs = function(e, t, n) {
				var r = e.backrefs * a,
					i = t.width / 2 + 5 - r / 2,
					o = t.height + 15;
				return n.attr("transform", "translate(" + i + "," + o + ")"), t.height += this.getBackrefHeight(), t
			}, i.prototype.render = function(e, o) {
				var s = o.append("svg:g");
				this.renderHash.put(e, s);
				var a = null,
					l = null,
					c = null;
				if (e instanceof retree.ReTree) {
					var u = 8,
						h = this.render(e.children[0], s),
						d = h[0],
						f = h[1],
						p = h[2],
						g = h[3],
						m = ["M", f.join(","), "H", f[0] - n].join(""),
						v = ["M", p.join(","), "H", p[0] + n].join(""),
						A = f[0] - n - 2 * u,
						y = 1.5,
						C = .6,
						E = .4,
						F = ["M", [A, f[1]].join(","), "L", [A - n * y, f[1]].join(","), "M", [A, f[1]].join(","), "L", [A - n * C, f[1] - n * E].join(","), "M", [A, f[1]].join(","), "L", [A - n * C, f[1] + n * E].join(",")].join("");
					return r(s, m), r(s, v), r(s, F), s.append("svg:circle").classed("nfa-start", !0).attr("cx", f[0] - n - u).attr("cy", f[1]).attr("r", u), s.append("svg:circle").classed("nfa-end", !0).attr("cx", p[0] + n + u).attr("cy", p[1]).attr("r", u), {
						x: A - n * y,
						y: g.height > 2 * u ? g.y : -u + p[1],
						width: p[0] + n + 2 * u - A + n * y,
						height: Math.max(g.height, 2 * u)
					}
				}
				if (e instanceof retree.EmptyTree) a = [0, 0], l = [0, 0], c = {
						x: 0,
						y: 0,
						width: 0,
						height: 0
				};
				else if (e instanceof retree.MatchTree) {
					var h = this.render(e.children[0], s),
						d = h[0],
						f = h[1],
						p = h[2],
						g = h[3],
						m = ["M", f.join(","), "H", f[0] - n].join(""),
						v = ["M", p.join(","), "H", p[0] + n].join("");
					r(s, m), r(s, v);
					var w = {
						x: g.x - n / 2,
						y: g.y - n,
						width: g.width + n,
						height: g.height + 2 * n
					};
					s.insert("svg:rect", ":first-child").classed("nfa-match", !0).attr("x", w.x).attr("y", w.y).attr("width", w.width).attr("height", w.height).attr("rx", 5).attr("ry", 5);
					var b = this.renderLabel(s, w, "Group " + e.group, "above");
					a = [f[0] - n, f[1]], l = [p[0] + n, p[1]], c = {
						x: f[0] - n,
						y: w.y - b.height,
						width: p[0] - f[0] + 2 * n,
						height: w.height + b.height
					}
				} else if (e instanceof retree.BackrefTree) {
					var u = 13,
						m = ["M", [-u, 0].join(","), "H", [-u - n / 2, 0].join(",")].join(""),
						v = ["M", [u, 0].join(","), "H", [u + n / 2, 0].join(",")].join("");
					r(s, m), r(s, v), s.append("svg:circle").classed("nfa-backref", !0).attr("cx", 0).attr("cy", 0).attr("r", u), s.append("svg:text").classed("nfa-backref-text", !0).attr("transform", "translate(0," + u / 2 + ")").text(e.group), a = [-u - n / 2, 0], l = [u + n / 2, 0];
					var g = {
						x: a[0],
						y: -u,
						width: n + 2 * u,
						height: 2 * u
					}, b = this.renderLabel(s, g, "Ref " + e.ref);
					c = {
						x: a[0],
						y: -u - b.height,
						width: n + 2 * u,
						height: 2 * u + b.height
					}
				} else if (e instanceof retree.LookaheadTree) {
					var u = 3,
						h = this.render(e.children[0], s),
						d = h[0],
						f = h[1],
						p = h[2],
						g = h[3];
					s.append("svg:circle").classed("nfa-ministart", !0).attr("cx", f[0] - u).attr("cy", f[1]).attr("r", u), s.append("svg:circle").classed("nfa-miniend", !0).attr("cx", p[0] + u).attr("cy", p[1]).attr("r", u);
					var w = {
						x: g.x - n - 2 * u,
						y: g.y - n,
						width: g.width + 2 * n + 4 * u,
						height: g.height + 2 * n
					};
					s.insert("svg:rect", ":first-child").classed("nfa-lookahead", !0).attr("x", w.x).attr("y", w.y).attr("width", w.width).attr("height", w.height).attr("rx", 5).attr("ry", 5);
					var $ = e.negative ? "" : "",
						x = [{
								font: "FontAwesome",
								text: $
							}, {
								text: " if followed by"
							}
						],
						b = this.renderLabel(s, w, x, "above"),
						D = ["M", [w.x, f[1]].join(","), "H", w.x - n / 2].join(""),
						B = ["M", [w.x + w.width, p[1]].join(","), "H", w.x + w.width + n / 2].join("");
					r(s, D), r(s, B), c = {
						x: w.x - n / 2,
						y: w.y - b.height,
						width: w.width + n,
						height: w.height + b.height
					}, a = [c.x, f[1]], l = [c.x + c.width, p[1]]
				} else if (e instanceof retree.AltTree) {
					for (var S = [], k = 0; e.children.length > k; ++k) S.push(this.render(e.children[k], s));
					for (var T = _.max(_.map(S, function(e) {
						return e[3].width
					})), L = 0, k = 0; S.length > k; ++k) {
						var g = S[k][3];
						L += g.height + n
					}
					a = [2 * -n, (L - n) / 2], l = [T + 2 * n, (L - n) / 2], c = {
						x: 2 * -n,
						y: 0,
						width: T + 4 * n,
						height: L - n
					}, L = 0;
					for (var k = 0; S.length > k; ++k) {
						var h = S[k],
							d = h[0],
							f = h[1],
							p = h[2],
							g = h[3],
							A = T / 2 - g.width / 2 - g.x,
							M = L - g.y;
						d.attr("transform", "translate(" + A + ", " + M + ")"), L += g.height + n, f = [f[0] + A, f[1] + M], p = [p[0] + A, p[1] + M];
						var R = f[1] < a[1] ? n : -n;
						if (2 * n > Math.abs(f[1] - a[1])) var P = ["M", a.join(","), "C", [(a[0] + f[0]) / 2, a[1], (a[0] + f[0]) / 2, f[1], f[0], f[1]].join(",")].join(""),
						N = ["M", l.join(","), "C", [(l[0] + p[0]) / 2, l[1], (l[0] + p[0]) / 2, p[1], p[0], p[1]].join(",")].join("");
						else var P = ["M", a.join(","), "Q", [a[0] + n, a[1], a[0] + n, a[1] - R].join(","), "V", f[1] + R, "Q", [a[0] + n, f[1], a[0] + 2 * n, f[1]].join(","), "H", f[0]].join(""),
						N = ["M", l.join(","), "Q", [l[0] - n, l[1], l[0] - n, l[1] - R].join(","), "V", p[1] + R, "Q", [l[0] - n, p[1], l[0] - 2 * n, p[1]].join(","), "H", p[0]].join("");
						r(s, P), r(s, N)
					}
				} else if (e instanceof retree.CatTree) {
					for (var S = [], k = 0; e.children.length > k; ++k) S.push(this.render(e.children[k], s));
					var O = 0;
					c = {
						x: 0,
						y: 0,
						width: 0,
						height: 0
					};
					for (var I = 1 / 0, j = -1 / 0, k = 0; S.length > k; ++k) {
						var h = S[k],
							d = h[0],
							f = h[1],
							p = h[2],
							g = h[3],
							A = O - g.x,
							M = -p[1];
						d.attr("transform", "translate(" + A + ", " + M + ")"), O += g.width, 0 === k && (a = [f[0] + A, f[1] + M], c.x = f[0] + A), k === S.length - 1 && (l = [p[0] + A, p[1] + M], c.width = p[0] + A - c.x), I = Math.min(I, g.y + M), j = Math.max(j, g.y + M + g.height)
					}
					c.y = I, c.height = j - I
				} else if (e instanceof retree.RepeatTree) {
					if (0 === e.minmax.max) return [s, [0, 0], [0, 0], {
							x: 0,
							y: 0,
							width: 0,
							height: 0
						}];
					var h = this.render(e.children[0], s),
						d = h[0],
						f = h[1],
						p = h[2],
						g = h[3],
						H = [p[0] + n, p[1] + n],
						z = [f[0] - n, f[1] + n],
						W = g.y + g.height,
						U = W + n,
						q = g.y,
						G = q - n;
					c = {
						x: g.x - 2 * n,
						y: g.y,
						width: g.width + 4 * n,
						height: g.height
					};
					var V = ["M", p.join(","), "Q", [H[0], p[1], H[0], H[1]].join(","), "V", W, "Q", [H[0], U, p[0], U].join(","), "H", f[0], "Q", [z[0], U, z[0], W].join(","), "V", z[1], "Q", [z[0], f[1], f[0], f[1]].join(",")].join(""),
						K = ["M", [p[0] + 2 * n, p[1]].join(","), "Q", [H[0], p[1], H[0], p[1] - n].join(","), "V", q, "Q", [H[0], G, p[0], G].join(","), "H", f[0], "Q", [z[0], G, z[0], q].join(","), "V", f[1] - n, "Q", [z[0], f[1], f[0] - 2 * n, f[1]].join(",")].join(""),
						m = ["M", f.join(","), "H", f[0] - 2 * n].join(""),
						v = ["M", p.join(","), "H", p[0] + 2 * n].join("");
					if (e.minmax.max > 1 && (r(s, V), c.height += n), 0 === e.minmax.min && (r(s, K), c.y -= n, c.height += n), r(s, m), r(s, v), e.minmax.max > 1) {
						var Y = "";
						if (Y = 1 / 0 === e.minmax.max ? 0 === e.minmax.min || 1 === e.minmax.min ? "" : "" + e.minmax.min + "+ times" : 0 === e.minmax.min || 1 === e.minmax.min ? "up to " + ("" + e.minmax.max) : e.minmax.min === e.minmax.max ? "" + e.minmax.min + " times" : "" + e.minmax.min + ".." + ("" + e.minmax.max)) {
							var Q = {
								x: z[0],
								y: f[1],
								width: p[0] - f[0] + 2 * n,
								height: U - f[1]
							}, b = this.renderLabel(s, Q, Y, "below");
							c.height += b.height
						}
					}
					a = [f[0] - 2 * n, f[1]], l = [p[0] + 2 * n, p[1]]
				} else if (e instanceof retree.LiteralTree) {
					for (var X = s.append("svg:text").classed("nfa-literal-text", !0).attr("transform", "translate(" + t + ", " + t + ")"), k = 0; e.literals.length > k; ++k) J = 0, 0 !== k && (J = this.literalSpacing), this.renderChar(X, e.literals[k], {
							isCharset: !1,
							dx: J
						});
					var h = i.renderTextBox(s, X, this.literalsBBox(e.literals), "nfa-literal"),
						d = h[0],
						f = h[1],
						p = h[2],
						g = h[3];
					a = [f[0] - n / 2, f[1]], l = [p[0] + n / 2, p[1]], c = {
						x: a[0],
						y: g.y,
						width: l[0] - a[0],
						height: g.height
					};
					var m = ["M", f.join(","), "H", a[0]].join(""),
						v = ["M", p.join(","), "H", l[0]].join("");
					r(s, m), r(s, v)
				} else {
					if (!(e instanceof retree.CharsetTree)) throw Error("render on tree of unknown type");
					for (var X = s.append("svg:text").classed("nfa-charset-text", !0).attr("transform", "translate(" + t + ", " + t + ")"), k = 0; e.charset.opts.length > k; ++k) {
						var Z = e.charset.opts[k],
							J = 0;
						0 !== k && (J = this.charsetSpacing), _.isArray(Z) ? (this.renderChar(X, Z[0], {
							isCharset: !0,
							dx: J
						}), X.append("svg:tspan").classed("nfa-charset-range", !0).text("-"), this.renderChar(X, Z[1], {
							isCharset: !0,
							dx: 0
						})) : this.renderChar(X, Z, {
							isCharset: !0,
							dx: J
						})
					}
					var h = i.renderTextBox(s, X, this.charsetBBox(e.charset.opts), "nfa-charset"),
						d = h[0],
						f = h[1],
						p = h[2],
						g = h[3],
						et = e.charset.negate ? "None of" : "One of",
						b = this.renderLabel(s, g, et);
					a = [f[0] - n / 2, f[1]], l = [p[0] + n / 2, p[1]], c = {
						x: a[0],
						y: g.y - b.height,
						width: l[0] - a[0],
						height: g.height + b.height
					};
					var m = ["M", f.join(","), "H", a[0]].join(""),
						v = ["M", p.join(","), "H", l[0]].join("");
					r(s, m), r(s, v)
				}
				return [s, a, l, c]
			}, i.prototype.renderState = function(e, n) {
				var r = e.tree,
					i = e.index,
					o = this.renderHash.get(r);
				if (r instanceof retree.ReTree) {
					if (1 !== i) return;
					var s = o.select(".nfa-end");
					o.append("svg:circle").classed("nfa-marker", !0).classed(n, !0).attr("cx", s.attr("cx")).attr("cy", s.attr("cy")).attr("r", 5)
				} else if (r instanceof retree.BackrefTree) o.insert("svg:circle", ".nfa-backref-text").classed("nfa-marker", !0).classed(n, !0).attr("cx", 0).attr("cy", 0).attr("r", 11);
				else if (r instanceof retree.LookaheadTree) {
					if (1 !== i) return;
					var s = o.select(".nfa-miniend");
					o.append("svg:circle").classed("nfa-marker", !0).classed(n, !0).attr("cx", s.attr("cx")).attr("cy", s.attr("cy")).attr("r", 2)
				} else if (r instanceof retree.LiteralTree) {
					var a = this.literalsBBox(r.literals, e.index).width,
						l = o.select(".nfa-literal"),
						c = parseInt(l.attr("x"));
					o.append("svg:rect").classed("nfa-marker", !0).classed(n, !0).attr("x", c + t + a).attr("y", l.attr("y")).attr("width", 2).attr("height", l.attr("height"))
				} else {
					if (!(r instanceof retree.CharsetTree)) throw Error("renderState on tree of unknown type");
					var l = o.select(".nfa-charset"),
						c = parseInt(l.attr("x"));
					o.append("svg:rect").classed("nfa-marker", !0).classed(n, !0).attr("x", c + t - 2).attr("y", l.attr("y")).attr("width", 2).attr("height", l.attr("height"))
				}
			}, i.prototype.renderBackrefState = function(e, n, r) {
				for (var s = e.tree, a = r.select(".backref-num-" + s.ref), c = a.insert("svg:g", ".nfa-backref-title").classed("nfa-backref-marker", !0), u = _.map(e.groups[s.group], function(e) {
						return {
							r: e,
							c: "\\" + e,
							isEscaped: function() {
								return !1
							}
						}
					}), h = c.append("svg:text").classed("nfa-literal-text", !0).attr("transform", "translate(" + t + ", " + t + ")"), d = 0; u.length > d; ++d) dx = 0, 0 !== d && (dx = this.literalSpacing), this.renderChar(h, u[d], {
						isCharset: !1,
						dx: dx
					});
				var f = i.renderTextBox(c, h, this.literalsBBox(u), "nfa-literal"),
					p = this.literalsBBox(u, e.backrefIndex).width,
					g = f[0],
					m = parseInt(g.attr("x"));
				c.append("svg:rect").classed("nfa-marker", !0).classed(n, !0).attr("x", m + t + p).attr("y", g.attr("y")).attr("width", 2).attr("height", g.attr("height"));
				var v = parseInt(g.attr("height")),
					A = $(a[0][0]).children().length - 1,
					y = o / 2 - m - t - p,
					C = (v + l) * (A - 4);
				c.attr("transform", "translate(" + y + "," + C + ")")
			}, i.prototype.literalsBBox = function(e, t) {
				void 0 === t && (t = e.length);
				for (var n = 0, r = 0; t > r; ++r) r > 0 && (n += this.literalSpacing), n += e[r].r.length * this.monoChar.width;
				return {
					x: 0,
					y: -this.monoChar.height + 3,
					width: n,
					height: this.monoChar.height
				}
			}, i.prototype.charsetBBox = function(e) {
				for (var t = 0, n = 0; e.length > n; ++n) {
					n > 0 && (t += this.charsetSpacing);
					var r = e[n];
					_.isArray(r) ? (t += (r[0].r.length + r[1].r.length) * this.monoChar.width, t += 7) : t += r.r.length * this.monoChar.width
				}
				return {
					x: 0,
					y: -this.monoChar.height + 3,
					width: t,
					height: this.monoChar.height
				}
			}, i.renderTextBox = function(e, n, r, i) {
				var o = {
					x: r.x,
					y: r.y,
					width: r.width + 2 * t,
					height: r.height + 2 * t
				}, s = e.insert("svg:rect", ":first-child").classed(i, !0).attr("x", o.x).attr("y", o.y).attr("rx", 2).attr("ry", 2).attr("width", o.width).attr("height", o.height);
				return input = [o.x, o.y + o.height / 2], output = [o.x + o.width, o.y + o.height / 2], [s, input, output, o]
			}, i.prototype.renderLabel = function(e, n, r, i) {
				"below" !== i && (i = "above");
				var o = e.append("svg:text").classed("nfa-label", !0).attr("x", n.x + n.width / 2).attr("y", n.y - t / 2);
				if (_.isString(r)) o.text(r);
				else for (var s = 0; r.length > s; ++s) o.append("svg:tspan").style("font-family", r[s].font || null).text(r[s].text);
				return "below" === i && o.attr("y", n.y + n.height + this.labelChar.height), {
					height: this.labelChar.height
				}
			}, i.prototype.renderChar = function(e, t, n) {
				n = n || {}, isCharset = n.isCharset || !1, dx = n.dx || 0, text = t.r;
				var r = !1;
				"." === t.r && "\\." === t.c ? text = "•" : " " === t.r && " " === t.c ? (text = "_", r = !0) : "\n" === t.r && "\n" === t.c && (text = "¬", r = !0), e.append("svg:tspan").classed("nfa-escaped", t.isEscaped()).classed("nfa-unfocused", r).style("letter-spacing", "0px").attr("dx", dx).text(text)
			}, e.Renderer = i
		}(this.renderer = {}), function(e) {
			var t = function() {
				this.groups = [], this.groupTrack = {}
			};
			t.prototype.random = function(e, t) {
				if (t = t || [], e instanceof retree.ReTree) return this.groups = [], this.groupStarts = [], this.groupTrack = {}, this.random(e.children[0], t);
				if (e instanceof retree.EmptyTree) return t;
				if (e instanceof retree.MatchTree) return this.groupTrack[e.group] = !0, this.groupStarts[e.group] = "", this.random(e.children[0], t), this.groupTrack[e.group] = !1, this.groups[e.group] = this.groupStarts[e.group], t;
				if (e instanceof retree.BackrefTree) {
					for (var o = this.groups[e.group] || "", s = 0; o.length > s; ++s) if (!this.safeRandPush(t, o[s])) return null;
					return t
				}
				if (e instanceof retree.LookaheadTree) return t;
				if (e instanceof retree.AltTree) {
					var a = Math.floor(Math.random() * e.children.length);
					return this.random(e.children[a], t)
				}
				if (e instanceof retree.CatTree) {
					for (var s = 0; e.children.length > s; ++s) {
						var l = this.random(e.children[s], t);
						if (null === l) return null
					}
					return t
				}
				if (e instanceof retree.RepeatTree) {
					for (var s = 0; e.minmax.min > s; ++s) {
						var l = this.random(e.children[0], t);
						if (null === l) return null
					}
					if (1 / 0 === e.minmax.max) for (; Math.random() > .4;) {
							var l = this.random(e.children[0], t);
							if (null === l) return null
					} else for (var c = Math.floor(Math.random() * (e.minmax.max - e.minmax.min + 1)), s = 0; c > s; ++s) {
							var l = this.random(e.children[0], t);
							if (null === l) return null
					}
					return t
				}
				if (e instanceof retree.LiteralTree) {
					for (var s = 0; e.literals.length > s; ++s) if ("\\^" === e.literals[s].c) {
							if (0 !== this.safeRandLength(t)) return null
						} else
					if ("\\$" === e.literals[s].c) {
						if (!this.safeRandPush(t, n)) return null
					} else if ("\\b" === e.literals[s].c.toLowerCase()) {
						var u = this.safeRandLast(t),
							h = util.isAlpha(u) ^ "\\b" === e.literals[s].c;
						if (!this.safeRandPush(t, h ? r : i)) return null
					} else {
						var l = e.literals[s].random();
						if (!this.safeRandPush(t, l)) return null
					}
					return t
				}
				if (e instanceof retree.CharsetTree) {
					if (e.charset.negate) {
						for (var s = 0; 1e3 > s; ++s) {
							var a = Math.floor(256 * Math.random()),
								d = String.fromCharCode(a);
							if (!e.anyOptsMatch(d)) return this.safeRandPush(t, d) ? t : null
						}
						return null
					}
					if (0 === e.charset.opts.length) return null;
					var a = Math.floor(Math.random() * e.charset.opts.length),
						f = e.charset.opts[a];
					if (_.isArray(f)) {
						if (!this.safeRandPush(t, util.randomCharIn(f[0].c, f[1].c))) return null
					} else if (!this.safeRandPush(t, f.random())) return null;
					return t
				}
				throw console.log(e), Error("Unexpected tree type for random()")
			}, t.prototype.cleanRandom = function(e) {
				var t = this.random(e);
				if (null === t) return null;
				for (var n = t.length - 1; n >= 0; --n) {
					if (_.isString(t[n])) return t;
					if (t[n] === r) return null;
					t.splice(n, 1)
				}
				return t
			};
			var n = {}, r = {}, i = {};
			t.prototype.safeRandLast = function(e) {
				return 0 === e.length ? void 0 : _.isString(_.last(e)) ? _.last(e) : e[e.length - 2]
			}, t.prototype.safeRandLength = function(e) {
				for (var t = e.length - 1; t >= 0 && !_.isString(e[t]); --t);
				return t + 1
			}, t.prototype.pushTrackedGroups = function(e) {
				for (var t in this.groupTrack) this.groupTrack[t] && (this.groupStarts[t] += e)
			}, t.prototype.safeRandPush = function(e, t) {
				if (0 === e.length) return _.isString(t) && this.pushTrackedGroups(t), e.push(t), !0;
				if (t === n) {
					if (_.last(e) === r) return !1;
					_.isString(_.last(e)) || e.pop(), e.push(n)
				} else if (t === r) {
					if (_.last(e) === i || _.last(e) === n) return !1;
					_.isString(_.last(e)) || e.pop(), e.push(r)
				} else if (t === i) {
					if (_.last(e) === r) return !1;
					if (!_.isString(_.last(e))) return !0;
					e.push(i)
				} else {
					if (_.last(e) === n) return !1;
					if (!_.isString(_.last(e))) {
						var o = util.isAlpha(t) ^ _.last(e) === i;
						if (!o) return !1;
						e.pop()
					}
					this.pushTrackedGroups(t), e.push(t)
				}
				return !0
			}, e.Randomizer = t
		}(this.randomizer = {}), "function" == typeof require && "object" == typeof module) var _ = require("../../ext/underscore.js");
		(function(e) {
			Iterator = function(e) {
				this.lines = [];
				var t = this;
				e.getSession().on("change", function() {
					var n = e.getSession().getDocument().getNewLineCharacter().length;
					t.lines = [];
					for (var r = e.getSession().getDocument().getAllLines(), i = 0, o = 0; r.length > o; ++o) i += r[o].length + n, t.lines.push({
							line: r[o],
							sum: i
						})
				})
			}, Iterator.prototype.strIndexToCursorPos = function(e) {
				if (0 === this.lines.length) return {
						row: 0,
						column: 0
				};
				var t = e - .5,
					n = _.sortedIndex(this.lines, {
						sum: t
					}, function(e) {
						return e.sum
					}),
					r = n ? this.lines[n - 1].sum : 0;
				return e === this.lines[n].sum ? {
					row: n + 1,
					column: 0
				} : {
					row: n,
					column: e - r
				}
			}, e.Iterator = Iterator
		})("undefined" == typeof exports ? this.xace = {} : exports), angular.module("components", []).directive("slidearea", function() {
			return {
				restrict: "C",
				require: "ngModel",
				link: function(e, t, n, r) {
					var i = window._gaq,
						o = ace.require("ace/range").Range,
						s = t.hasClass("multi-slidearea"),
						a = $('<div class="slider"/>').appendTo(t);
					s ? a.powerSlider({
						min: 0,
						max: 0,
						handles: [{
								val: 0,
								cls: "starthandle",
								title: "Start At",
								priority: 1
							}, {
								val: 0,
								title: "Step"
							}
						],
						ranges: [{
								handles: ["min", 0],
								cls: "ds-slider"
							}, {
								handles: [0, 1]
							}
						]
					}) : a.powerSlider({
						min: 0,
						max: 0,
						handles: [{
								val: 0,
								title: "Step"
							}
						]
					});
					var l = t.hasClass("ro-slidearea") ? "ro-editor" : "editor",
						c = t.hasClass("ro-slidearea"),
						u = $('<div class="' + l + '"/>').appendTo(t);
					u.css("position", "relative");
					var h = ace.edit(u[0]),
						d = h.getSession();
					h.renderer.setShowGutter(!1), h.setReadOnly(t.hasClass("ro-slidearea")), h.setShowPrintMargin(!1), h.setShowInvisibles(!1), d.setUseWrapMode(!0), d.setUseSoftTabs(!1);
					var f = parseFloat(u.css("line-height")),
						p = new xace.Iterator(h),
						g = function(e, t) {
							if (_.isArray(e)) {
								!t && r.$viewValue.startAt && (e = _.clone(e), e[0] += r.$viewValue.startAt, e[1] += r.$viewValue.startAt);
								var n = p.strIndexToCursorPos(e[0]),
									i = p.strIndexToCursorPos(e[1]);
								return new o(n.row, n.column, i.row, i.column)
							}!t && r.$viewValue.startAt && (e += r.$viewValue.startAt);
							var s = p.strIndexToCursorPos(e);
							return new o(s.row, s.column, s.row, s.column + 1)
						};
					r.$parsers.push(function(e) {
						return _.clone(e)
					}), r.$formatters.push(function(e) {
						return _.clone(e)
					});
					var m = function(e) {
						return e === void 0 || "" === e || null === e || e !== e
					}, v = function() {
							e.$apply(function() {
								e.hasOwnProperty("gCls") ? e.gCls = r.$viewValue.cls : e.$parent.gCls = r.$viewValue.cls
							})
						};
					h.on("focus", function() {
						if (r.$viewValue.showFiller) {
							var t = _.clone(r.$viewValue);
							t.val = "", t.showFiller = !1, e.$apply(function() {
								r.$setViewValue(t)
							})
						}
						v()
					}), h.on("blur", function() {
						i.push(["_trackEvent", "Engagement", "Unfocus " + n.ngModel + " text"])
					}), a.on("slidestart", function() {
						v()
					}), a.on("slide", function(t, n) {
						var i = n.target.hasClass("starthandle") ? "startAt" : "pos",
							o = n.val;
						if (r.$viewValue[i] !== o) {
							var s = _.clone(r.$viewValue);
							s[i] = o, e.$$phase ? e.$eval(function() {
								r.$setViewValue(s)
							}) : e.$apply(function() {
								r.$setViewValue(s)
							}), w()
						}
					}), a.on("slidestop", function(e, t) {
						var r = t.target.hasClass("starthandle") ? "startAt" : "pos";
						i.push(["_trackEvent", "Engagement", "Unfocus " + n.ngModel + " slider " + r])
					});
					var A = c;
					d.on("change", function() {
						if (!A) {
							var t = d.getValue();
							if (r.$viewValue.val !== t) {
								var n = _.clone(r.$viewValue);
								n.val = t, e.$apply(function() {
									r.$setViewValue(n)
								})
							}
							E(), w()
						}
					});
					var y, C = function() {
							for (var e = 0, t = 0; d.$wrapData.length > t; ++t) e += d.$wrapData[t].length;
							e += d.getLength();
							var n = f * util.clamp(e, 2, 20);
							n !== y && (u.css("height", n), h.resize(), y = n)
						};
					C(), d.on("change", C), d.selection.on("changeCursor", function() {
						A || d.selection.lead.getPosition()
					});
					var E = function() {
						e.gCls === r.$viewValue.cls ? a.removeClass("faded") : a.addClass("faded"), r.$viewValue.posMap ? a.powerSlider("option", "max", r.$viewValue.posMap.length - 1) : a.powerSlider("option", "max", r.$viewValue.val.length), 0 === a.powerSlider("option", "max") ? a.addClass("disabled-slider") : a.removeClass("disabled-slider"), a.powerSlider("option", "value", r.$viewValue.pos)
					}, F = function() {
							var e = r.$viewValue.val;
							A = !0, e !== d.getValue() && d.setValue(m(e) ? "" : e), A = c
						}, w = function() {
							var t = d.getMarkers();
							for (var n in t) d.removeMarker(n);
							var i = r.$viewValue.startAt;
							i && d.addMarker(g([0, i], !0), "ds-marker", "text");
							for (var o = r.$viewValue.hilites || [], n = 0; o.length > n; ++n) {
								var s = "h-marker";
								s += 0 === n % 2 ? " odd" : " even", d.addMarker(g(o[n], !0), s, "text")
							}
							for (var a = r.$viewValue.ePos || [], n = 0; a.length > n; ++n) d.addMarker(g(a[n]), "e-marker", "text");
							for (var l = r.$viewValue.wPos || [], n = 0; l.length > n; ++n) d.addMarker(g(l[n]), "w-marker", "text");
							var c = _.union(_.map(r.$viewValue.sPos, function(e) {
								return [g(e), r.$viewValue.sCls]
							}), [
								[g(e.getPos(r.$viewValue)), r.$viewValue.cls]
							]);
							_.each(c, function(t) {
								t[1] === e.gCls || t[1] === e.RE_COLOR && r.$viewValue.cls !== t[1] || d.addMarker(t[0], "secondary_marker " + t[1], "text")
							}), _.each(c, function(t) {
								t[1] === e.gCls && d.addMarker(t[0], "marker " + t[1], "text")
							})
						};
					r.$render = function() {
						F(), E(), w()
					}, e.$watch("gCls", function() {
						E(), w()
					})
				}
			}
		}).directive("nfa", function() {
			return {
				restrict: "E",
				link: function(e, t) {
					var n = 5,
						r = 250,
						i = $(".newstip"),
						o = d3.select(t[0]).append("div").classed("nfa", !0).append("svg:svg"),
						s = o.append("svg:g"),
						a = s[0][0],
						l = $(a),
						c = o.append("svg:g").classed("backref-container", !0),
						u = new renderer.Renderer,
						h = [],
						d = function() {
							if (e.nfa) {
								if (s.selectAll(".nfa-marker").remove(), c.selectAll(".nfa-backref-marker").remove(), e.re.w.cls === e.gCls) {
									var t = e.nfa.strPosToState(e.getPos(e.re.w));
									e.re.r.states = t ? [t] : []
								}
								for (var n = 0; e.re.r.states.length > n; ++n) u.renderState(e.re.r.states[n], e.gCls);
								for (var n = 0; h.length > n; ++n) {
									var r = _.filter(e.re.r.states, function(e) {
										return e.tree === h[n]
									});
									r.sort(function(e, t) {
										var n = e.groups[e.tree.group] || "",
											r = t.groups[t.tree.group] || "",
											i = n.length - e.backrefIndex,
											o = r.length - t.backrefIndex;
										return i !== o ? i - o : n.length - r.length
									}), r = r.slice(0, 3);
									for (var i = 0; r.length > i; ++i) u.renderBackrefState(r[i], e.gCls, c)
								}
							}
						};
					e.$watch("nfa", function() {
						l.hide();
						for (var t = a.childNodes.length - 1; t >= 0; --t) a.removeChild(a.childNodes[t]);
						u.reset();
						var d = {
							x: 0,
							y: 0,
							width: 0,
							height: 0
						};
						e.nfa && (d = u.render(e.nfa, s), u.prepareBackrefs(e.nfa, c), e.nfa.backrefs > 0 && (h = [], e.nfa.visitAll(function(e) {
							e instanceof retree.BackrefTree && h.push(e)
						}), d = u.adjustForBackrefs(e.nfa, d, c)));
						var f = -d.x + n,
							p = -d.y + n;
						d.width + 2 * n;
						var g = d.height + 2 * n,
							m = Math.max(0, (r - g) / 2);
						s.attr("transform", "translate(" + f + ", " + p + ")"), o.attr("width", d.width + 2 * n).attr("height", d.height + 2 * n).style("margin", "" + m + "px 0px"), i.css("visibility", m > 40 ? "visible" : "hidden"), l.show()
					}), e.$watch("re.w.sPos", d), e.$watch("re.w.pos", d), e.$watch("gCls", d)
				}
			}
		});
		var RegexApp = angular.module("RegexApp", ["components"]),
			RegexCtrl = function(e) {
				var t = new Date(2013, 4, 27, 20, 9, 0, 0);
				e.noSeeRecentBlog = !1, (t > new Date($.cookie("blog-date")) || !$.cookie("blog-date")) && (e.noSeeRecentBlog = !0), e.RE_COLOR = "sa-blue", COLORS = ["sa-pink", "sa-orange", "sa-purple", "sa-brown"], e.getPos = function(e) {
					return e.posMap ? e.posMap[e.pos - (e.startAt || 0)] : e.pos - (e.startAt || 0)
				};
				var n = function(e, t) {
					var n = $('<form method="POST"/>').attr("action", e);
					for (var r in t) n.append($('<input type="hidden"/>').attr("name", r).attr("value", t[r]));
					n.appendTo($("body")).submit()
				};
				e.saveRegex = function() {
					n("/saveregex", {
						regex: e.re.w.val,
						strFlags: util.flagsToStr(e.re.w.flags),
						test: e.strs[0].w.val
					})
				}, e.updateRegex = function() {
					n("/saveregex", {
						regex: e.re.w.val,
						strFlags: util.flagsToStr(e.re.w.flags),
						test: e.strs[0].w.val,
						token: pyramid_globals.token
					})
				}, e.embed = function() {
					n("/saveimage", {
						regex: e.re.w.val,
						strFlags: util.flagsToStr(e.re.w.flags),
						test: e.strs[0].w.val
					})
				};
				var r = 0,
					i = function() {
						try {
							e.nfa = re.parse(e.re.w.val, e.re.w.flags), e.reError = "", e.re.w.ePos = []
						} catch (t) {
							if ("ParseError" !== t.name) throw t;
							e.re.w.ePos = [t.range], e.reError = t.message, e.nfa = null
						}
						if (e.nfa) {
							e.re.w.posMap = e.nfa.getPosMap();
							for (var n = e.re.w.posMap.length - 1, i = 0; e.re.w.posMap.length > i; ++i) {
								var o = e.re.w.posMap[i];
								if (o >= r) {
									var s = 1 / 0;
									0 != i && (s = e.re.w.posMap[i - 1]), n = Math.abs(s - r) < Math.abs(o - r) ? i - 1 : i;
									break
								}
							}
							e.re.w.pos = n, r = e.re.w.posMap[n]
						} else e.re.w.posMap = [0], e.re.w.pos = 0
					};
				e.examples = [{
						re: "(?:Jan|Febr)uary",
						str: "January\nand\nFebruary",
						reTitle: "月份(Months)"
					}, {
						re: "([0-9]{3})-([0-9]{3})-([0-9]{4})",
						str: "123-456-7899",
						reTitle: "美國電話號碼(US Phone number)"
					}, {
						re: "\\$([0-9]{1,3}(?:\\,[0-9]{3})*|(?:[0-9]+))(?:\\.([0-9]{2}))?",
						str: "$123,761.01",
						reTitle: "美國貨幣(US currency)"
					}, {
						re: "\\$([0-9]{1,3}(?:\\,[0-8]{3})*|(?:[0-9]+))(?:\\.([0-9]{2}))?",
						str: "$4,800 is matched correctly, but $123,791.01 is not. Use the black triangle slider to figure out why.",
						reTitle: "美國貨幣(US currency with typo)"
					}, {
						re: "(?:([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])",
						str: "192.1468.10.1",
						reTitle: "IPv4 address"
					}, {
						re: '^(?!^(PRN|AUX|CLOCK\\$|NUL|CON|COM\\d|LPT\\d|\\..*)(\\..+)?$)[^\\x00-\\x1f\\\\?*:\\";|/]+$',
						str: ".dotfile-not-valid",
						reTitle: "Windows filename"
					}, {
						re: "\\b(11+)\\1+\\b",
						str: "Prime: 11111\nComposite: 111111",
						reTitle: "Primes and Composites"
					}, {
						re: "\\b(?:(?:(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\\/|-|\\.)(?:0?2\\1(?:29)))|(?:(?:(?:1[6-9]|[2-9]\\d)?\\d{2})(\\/|-|\\.)(?:(?:(?:0?[13578]|1[02])\\2(?:31))|(?:(?:0?[13-9]|1[0-2])\\2(?:29|30))|(?:(?:0?[1-9])|(?:1[0-2]))\\2(?:0?[1-9]|1\\d|2[0-8]))))\\b",
						str: "Valid date: 2010-03-15\nAnother valid date: 2004/02/29\nInvalid date: 2005/02/29\nAnother invalid date: 2010/03-15",
						reTitle: "Valid date (complex!)"
					}
				], e.example = e.examples[0], e.setExample = function(t) {
					e.re.w.showFiller = !1, e.strs[0].w.showFiller = !1, e.example = e.examples[t], e.re.w.val = e.example.re, e.re.w.flags = util.strToFlags(e.example.flags), e.strs[0].w.val = e.example.str, e.$$phase || e.$digest()
				}, window.onpopstate = function(t) {
					showFiller = !1;
					var n = t.state;
					_.isEmpty(n) && (n = new URI(document.URL).search(!0), _.isEmpty(n) && (pyramid_globals.hasOwnProperty("regex") ? (n.re = pyramid_globals.regex, n.flags = pyramid_globals.strFlags, n.str = pyramid_globals.test) : (n.re = "My regular expression", n.str = "My test data", showFiller = !0)), n.hasOwnProperty("special") && "rfc822" === n.special && $.ajax({
						url: "/static/txt/rfc822.txt",
						success: function(e) {
							n.re = e.split(/\r\n|\n/g)[0], n.str = "Pompous Person <WhoZiWhatZit@Cordon-Bleu>\nExample from http://tools.ietf.org/html/rfc822#appendix-A.\nYou may want to zoom out with your browser :)\n"
						},
						async: !1
					})), e.re.w.showFiller = showFiller, e.strs[0].w.showFiller = showFiller, e.re.w.val = n.re || "", e.re.w.flags = util.strToFlags(n.flags), e.strs[0].w.val = n.str || "", e.$digest()
				};
				var o = function() {
					history.replaceState({
						re: e.re.w.val,
						flags: util.flagsToStr(e.re.w.flags),
						str: e.strs[0].w.val
					}, "", document.URL)
				};
				e.$watch("re.w.val", o), e.$watch("re.w.flags", o, !0), e.$watch("strs[0].w.val", o), e.re = {
					w: {
						val: "",
						pos: 0,
						posMap: [],
						cls: e.RE_COLOR,
						sPos: [],
						ePos: [],
						wPos: [],
						sCls: e.RE_COLOR,
						showFiller: !1,
						flags: {}
					},
					r: {
						states: []
					}
				}, e.strs = [{
						w: {
							val: "",
							pos: 0,
							posMap: null,
							cls: COLORS[0],
							sPos: [],
							ePos: [],
							wPos: [],
							sCls: e.RE_COLOR,
							showFiller: !1,
							groups: [],
							startAt: 0,
							hilites: []
						},
						r: {
							stateInfo: []
						}
					}
				], i(), e.gCls = COLORS[0], e.NUM_RO = 2;
				for (var s = function() {
					return {
						w: {
							val: "",
							pos: 0,
							posMap: null,
							cls: null,
							sPos: [],
							ePos: [],
							wPos: [],
							sCls: null,
							groups: []
						},
						r: {
							stateInfo: []
						}
					}
				}, a = 0; e.NUM_RO > a; ++a) e.strs.push(s());
				var l = function(t) {
					return function() {
						return e.strs[t].w.val
					}
				}, c = function(t) {
						return function() {
							return e.strs[t].w.pos
						}
					}, u = function(t) {
						return function() {
							return e.strs[t].w.startAt
						}
					}, h = function(t) {
						return function() {
							try {
								extraFlags = util.flagsToStr(e.re.w.flags);
								for (var n = RegExp(e.re.w.val, "g" + extraFlags), r = []; null != (match = n.exec(e.strs[t].w.val));) match.index === n.lastIndex && ++n.lastIndex, r.push([match.index, match.index + match[0].length]);
								e.strs[t].w.hilites = r
							} catch (i) {
								e.strs[t].w.hilites = []
							}
						}
					}, d = function(t) {
						return function() {
							if (e.nfa) {
								var n = e.strs[t].w.startAt || 0,
									r = e.nfa.stateInfo(e.strs[t].w.val, n),
									i = e.nfa.find(e.strs[t].w.val, n, r);
								e.strs[t].r.stateInfo = r, e.strs[t].w.groups = i ? i.groups : []
							} else e.strs[t].r.stateInfo = [], e.strs[t].w.groups = []
						}
					}, f = function(t, n) {
						return function(r, i) {
							if (r !== i || n) {
								var o = e.strs[t].r.stateInfo[e.getPos(e.strs[t].w)];
								e.re.r.states = o, e.re.w.sPos = _.map(o, function(e) {
									return e.tree.stateToStrPos(e, "a")
								}), e.re.w.sCls = e.strs[t].w.cls
							}
						}
					}, p = function(t) {
						return function() {
							for (var n = e.getPos(e.re.w), r = e.strs[t].r.stateInfo, i = [], o = 0; r.length > o; ++o) for (var s = 0; r[o].length > s; ++s) {
									var a = r[o][s];
									if (a.tree.stateToStrPos(a, "a") == n) {
										i.push(o);
										break
									}
							}
							e.strs[t].w.sPos = i, i = [];
							for (var o = 0; r.length > o; ++o) if (0 === r[o].length) {
									i.push(o - 1);
									break
								}
							e.strs[t].w.wPos = i
						}
					};
				e.$watch(l(0), h(0)), e.$watch(u(0), d(0)), e.$watch(l(0), d(0)), e.$watch(l(0), f(0)), e.$watch(l(0), function() {
					e.strs[0].w.pos = Math.min(e.strs[0].w.pos, e.strs[0].w.val.length), e.strs[0].w.startAt = Math.min(e.strs[0].w.startAt, e.strs[0].w.val.length)
				});
				for (var a = 0; e.strs.length > a; ++a) e.$watch(c(a), f(a));
				e.$watch(u(0), p(0)), e.$watch(l(0), p(0)), e.$watch("re.w.pos", function(t, n) {
					t != n && (r = e.getPos(e.re.w));
					for (var i = 0; e.strs.length > i; ++i) p(i)()
				}), e.$watch("re.w.val", i), e.$watch("re.w.flags", i, !0), e.$watch("gCls", function() {
					for (var t = 0; e.strs.length > t; ++t) e.strs[t].w.cls === e.gCls && f(t, !0)()
				}), e.$watch("nfa", function() {
					var t = [];
					if (e.nfa) {
						var n = e.nfa.expectedLength();
						if (800 > n) {
							e.randError = "";
							for (var r = new randomizer.Randomizer, i = 0; 20 > i; ++i) {
								var o = r.cleanRandom(e.nfa);
								null !== o && t.push(o.join(""))
							}
							_.shuffle(t), t = _.uniq(t);
							for (var a = [], i = 0; t.length > i && (e.nfa.match(t[i]) && a.push(t[i]), a.length !== e.NUM_RO); ++i);
							a.sort(), t = _.map(a, function(t, n) {
								return {
									w: {
										val: t,
										pos: 0,
										posMap: null,
										cls: COLORS[n + 1],
										sPos: [],
										sCls: e.RE_COLOR
									},
									r: {
										stateInfo: []
									}
								}
							})
						} else e.randError = "Random matches are too long and would slow down performance"
					}
					var l = [1, e.strs.length - 1];
					l.push.apply(l, t), l.push.apply(l, _.map(_.range(e.NUM_RO - t.length), function() {
						return s()
					})), e.strs.splice.apply(e.strs, l), h(0)();
					for (var i = 0; e.strs.length > i; ++i) d(i)(), e.strs[i].w.cls === e.re.w.sCls && f(i, !0)(), p(i)()
				})
			};
		RegexCtrl.$inject = ["$scope"];