import { Gn as readonly, Kn as ref, M as Fragment, O as Comment, U as computed, er as toValue, ir as capitalize, n as Transition, nt as defineComponent, pt as h$1, r as TransitionGroup, rr as camelize, ut as getCurrentInstance, xt as inject } from "./vue.runtime.esm-bundler-C-HWsTP5.js";
import { useEventListener } from "./@vueuse_core.js";
import { ensureEndingSlash as e, ensureLeadingSlash as t, isFunction as n, isLinkExternal, isLinkExternal as r, isLinkHttp as a, isLinkWithProtocol, isLinkWithProtocol as o, isPlainObject as c, isString, isString as l, removeEndingSlash as d, removeLeadingSlash as f } from "vuepress/shared";
import { onContentUpdated, useRouteLocale, useRoutes } from "vuepress/client";
//#region node_modules/.pnpm/@vuepress+helper@2.0.0-rc.128_@vuepress+bundler-vite@2.0.0-rc.28_@emnapi+core@1.9.1_@em_9c7337307cf327327dea6c4cdb0926d0/node_modules/@vuepress/helper/dist/shared/index.js
var p = (e) => e !== void 0, m = (e) => typeof e == `boolean`, h = (e) => typeof e == `number`, g = (e) => Array.isArray(e), _ = (e) => e instanceof RegExp, v = (e, t) => isString(e) && e.startsWith(t), y = (e, t) => isString(e) && e.endsWith(t), { entries: b } = Object, { fromEntries: x$1 } = Object, S = (e) => Object.keys(e), { values: C } = Object, w = (e, ...t) => {
	if (t.length === 0) return e;
	let n = t.shift();
	return n && b(n).forEach(([t, r]) => {
		t === `__proto__` || t === `constructor` || (c(e[t]) && c(r) ? w(e[t], r) : g(r) ? e[t] = [...r] : c(r) ? e[t] = { ...r } : e[t] = n[t]);
	}), w(e, ...t);
}, T = (e) => {
	if (e) {
		if (typeof e == `number`) return new Date(e);
		let t = Date.parse(e.toString());
		if (!Number.isNaN(t)) return new Date(t);
	}
	return null;
}, E = (e, t) => {
	let n = T(typeof e == `number` ? new Date(e) : e), r = T(typeof t == `number` ? new Date(t) : t);
	return n ? r ? r.getTime() - n.getTime() : -1 : r ? 1 : 0;
}, D = (e) => v(e, `/`) && e[1] !== `/`, O = (e) => !isLinkExternal(e) && !isLinkWithProtocol(e);
//#endregion
//#region node_modules/.pnpm/fflate@0.8.2/node_modules/fflate/esm/browser.js
var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
var fleb = new u8([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0,
	0,
	0,
	0
]);
var fdeb = new u8([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13,
	0,
	0
]);
var clim = new u8([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]);
var freb = function(eb, start) {
	var b = new u16(31);
	for (var i = 0; i < 31; ++i) b[i] = start += 1 << eb[i - 1];
	var r = new i32(b[30]);
	for (var i = 1; i < 30; ++i) for (var j = b[i]; j < b[i + 1]; ++j) r[j] = j - b[i] << 5 | i;
	return {
		b,
		r
	};
};
var _a = freb(fleb, 2), fl = _a.b, revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b.b, revfd = _b.r;
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
	var x = (i & 43690) >> 1 | (i & 21845) << 1;
	x = (x & 52428) >> 2 | (x & 13107) << 2;
	x = (x & 61680) >> 4 | (x & 3855) << 4;
	rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var hMap = (function(cd, mb, r) {
	var s = cd.length;
	var i = 0;
	var l = new u16(mb);
	for (; i < s; ++i) if (cd[i]) ++l[cd[i] - 1];
	var le = new u16(mb);
	for (i = 1; i < mb; ++i) le[i] = le[i - 1] + l[i - 1] << 1;
	var co;
	if (r) {
		co = new u16(1 << mb);
		var rvb = 15 - mb;
		for (i = 0; i < s; ++i) if (cd[i]) {
			var sv = i << 4 | cd[i];
			var r_1 = mb - cd[i];
			var v = le[cd[i] - 1]++ << r_1;
			for (var m = v | (1 << r_1) - 1; v <= m; ++v) co[rev[v] >> rvb] = sv;
		}
	} else {
		co = new u16(s);
		for (i = 0; i < s; ++i) if (cd[i]) co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i];
	}
	return co;
});
var flt = new u8(288);
for (var i = 0; i < 144; ++i) flt[i] = 8;
for (var i = 144; i < 256; ++i) flt[i] = 9;
for (var i = 256; i < 280; ++i) flt[i] = 7;
for (var i = 280; i < 288; ++i) flt[i] = 8;
var fdt = new u8(32);
for (var i = 0; i < 32; ++i) fdt[i] = 5;
var flm = /* @__PURE__ */ hMap(flt, 9, 0), flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdm = /* @__PURE__ */ hMap(fdt, 5, 0), fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a) {
	var m = a[0];
	for (var i = 1; i < a.length; ++i) if (a[i] > m) m = a[i];
	return m;
};
var bits = function(d, p, m) {
	var o = p / 8 | 0;
	return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
	var o = p / 8 | 0;
	return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
	return (p + 7) / 8 | 0;
};
var slc = function(v, s, e) {
	if (s == null || s < 0) s = 0;
	if (e == null || e > v.length) e = v.length;
	return new u8(v.subarray(s, e));
};
var ec = [
	"unexpected EOF",
	"invalid block type",
	"invalid length/literal",
	"invalid distance",
	"stream finished",
	"no stream handler",
	,
	"no callback",
	"invalid UTF-8 data",
	"extra field too long",
	"date not in range 1980-2099",
	"filename too long",
	"stream finishing",
	"invalid zip data"
];
var err = function(ind, msg, nt) {
	var e = new Error(msg || ec[ind]);
	e.code = ind;
	if (Error.captureStackTrace) Error.captureStackTrace(e, err);
	if (!nt) throw e;
	return e;
};
var inflt = function(dat, st, buf, dict) {
	var sl = dat.length, dl = dict ? dict.length : 0;
	if (!sl || st.f && !st.l) return buf || new u8(0);
	var noBuf = !buf;
	var resize = noBuf || st.i != 2;
	var noSt = st.i;
	if (noBuf) buf = new u8(sl * 3);
	var cbuf = function(l) {
		var bl = buf.length;
		if (l > bl) {
			var nbuf = new u8(Math.max(bl * 2, l));
			nbuf.set(buf);
			buf = nbuf;
		}
	};
	var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
	var tbts = sl * 8;
	do {
		if (!lm) {
			final = bits(dat, pos, 1);
			var type = bits(dat, pos + 1, 3);
			pos += 3;
			if (!type) {
				var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
				if (t > sl) {
					if (noSt) err(0);
					break;
				}
				if (resize) cbuf(bt + l);
				buf.set(dat.subarray(s, t), bt);
				st.b = bt += l, st.p = pos = t * 8, st.f = final;
				continue;
			} else if (type == 1) lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
			else if (type == 2) {
				var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
				var tl = hLit + bits(dat, pos + 5, 31) + 1;
				pos += 14;
				var ldt = new u8(tl);
				var clt = new u8(19);
				for (var i = 0; i < hcLen; ++i) clt[clim[i]] = bits(dat, pos + i * 3, 7);
				pos += hcLen * 3;
				var clb = max(clt), clbmsk = (1 << clb) - 1;
				var clm = hMap(clt, clb, 1);
				for (var i = 0; i < tl;) {
					var r = clm[bits(dat, pos, clbmsk)];
					pos += r & 15;
					var s = r >> 4;
					if (s < 16) ldt[i++] = s;
					else {
						var c = 0, n = 0;
						if (s == 16) n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
						else if (s == 17) n = 3 + bits(dat, pos, 7), pos += 3;
						else if (s == 18) n = 11 + bits(dat, pos, 127), pos += 7;
						while (n--) ldt[i++] = c;
					}
				}
				var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
				lbt = max(lt);
				dbt = max(dt);
				lm = hMap(lt, lbt, 1);
				dm = hMap(dt, dbt, 1);
			} else err(1);
			if (pos > tbts) {
				if (noSt) err(0);
				break;
			}
		}
		if (resize) cbuf(bt + 131072);
		var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
		var lpos = pos;
		for (;; lpos = pos) {
			var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
			pos += c & 15;
			if (pos > tbts) {
				if (noSt) err(0);
				break;
			}
			if (!c) err(2);
			if (sym < 256) buf[bt++] = sym;
			else if (sym == 256) {
				lpos = pos, lm = null;
				break;
			} else {
				var add = sym - 254;
				if (sym > 264) {
					var i = sym - 257, b = fleb[i];
					add = bits(dat, pos, (1 << b) - 1) + fl[i];
					pos += b;
				}
				var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
				if (!d) err(3);
				pos += d & 15;
				var dt = fd[dsym];
				if (dsym > 3) {
					var b = fdeb[dsym];
					dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
				}
				if (pos > tbts) {
					if (noSt) err(0);
					break;
				}
				if (resize) cbuf(bt + 131072);
				var end = bt + add;
				if (bt < dt) {
					var shift = dl - dt, dend = Math.min(dt, end);
					if (shift + bt < 0) err(3);
					for (; bt < dend; ++bt) buf[bt] = dict[shift + bt];
				}
				for (; bt < end; ++bt) buf[bt] = buf[bt - dt];
			}
		}
		st.l = lm, st.p = lpos, st.b = bt, st.f = final;
		if (lm) final = 1, st.m = lbt, st.d = dm, st.n = dbt;
	} while (!final);
	return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var wbits = function(d, p, v) {
	v <<= p & 7;
	var o = p / 8 | 0;
	d[o] |= v;
	d[o + 1] |= v >> 8;
};
var wbits16 = function(d, p, v) {
	v <<= p & 7;
	var o = p / 8 | 0;
	d[o] |= v;
	d[o + 1] |= v >> 8;
	d[o + 2] |= v >> 16;
};
var hTree = function(d, mb) {
	var t = [];
	for (var i = 0; i < d.length; ++i) if (d[i]) t.push({
		s: i,
		f: d[i]
	});
	var s = t.length;
	var t2 = t.slice();
	if (!s) return {
		t: et,
		l: 0
	};
	if (s == 1) {
		var v = new u8(t[0].s + 1);
		v[t[0].s] = 1;
		return {
			t: v,
			l: 1
		};
	}
	t.sort(function(a, b) {
		return a.f - b.f;
	});
	t.push({
		s: -1,
		f: 25001
	});
	var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
	t[0] = {
		s: -1,
		f: l.f + r.f,
		l,
		r
	};
	while (i1 != s - 1) {
		l = t[t[i0].f < t[i2].f ? i0++ : i2++];
		r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
		t[i1++] = {
			s: -1,
			f: l.f + r.f,
			l,
			r
		};
	}
	var maxSym = t2[0].s;
	for (var i = 1; i < s; ++i) if (t2[i].s > maxSym) maxSym = t2[i].s;
	var tr = new u16(maxSym + 1);
	var mbt = ln(t[i1 - 1], tr, 0);
	if (mbt > mb) {
		var i = 0, dt = 0;
		var lft = mbt - mb, cst = 1 << lft;
		t2.sort(function(a, b) {
			return tr[b.s] - tr[a.s] || a.f - b.f;
		});
		for (; i < s; ++i) {
			var i2_1 = t2[i].s;
			if (tr[i2_1] > mb) {
				dt += cst - (1 << mbt - tr[i2_1]);
				tr[i2_1] = mb;
			} else break;
		}
		dt >>= lft;
		while (dt > 0) {
			var i2_2 = t2[i].s;
			if (tr[i2_2] < mb) dt -= 1 << mb - tr[i2_2]++ - 1;
			else ++i;
		}
		for (; i >= 0 && dt; --i) {
			var i2_3 = t2[i].s;
			if (tr[i2_3] == mb) {
				--tr[i2_3];
				++dt;
			}
		}
		mbt = mb;
	}
	return {
		t: new u8(tr),
		l: mbt
	};
};
var ln = function(n, l, d) {
	return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
var lc = function(c) {
	var s = c.length;
	while (s && !c[--s]);
	var cl = new u16(++s);
	var cli = 0, cln = c[0], cls = 1;
	var w = function(v) {
		cl[cli++] = v;
	};
	for (var i = 1; i <= s; ++i) if (c[i] == cln && i != s) ++cls;
	else {
		if (!cln && cls > 2) {
			for (; cls > 138; cls -= 138) w(32754);
			if (cls > 2) {
				w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
				cls = 0;
			}
		} else if (cls > 3) {
			w(cln), --cls;
			for (; cls > 6; cls -= 6) w(8304);
			if (cls > 2) w(cls - 3 << 5 | 8208), cls = 0;
		}
		while (cls--) w(cln);
		cls = 1;
		cln = c[i];
	}
	return {
		c: cl.subarray(0, cli),
		n: s
	};
};
var clen = function(cf, cl) {
	var l = 0;
	for (var i = 0; i < cl.length; ++i) l += cf[i] * cl[i];
	return l;
};
var wfblk = function(out, pos, dat) {
	var s = dat.length;
	var o = shft(pos + 2);
	out[o] = s & 255;
	out[o + 1] = s >> 8;
	out[o + 2] = out[o] ^ 255;
	out[o + 3] = out[o + 1] ^ 255;
	for (var i = 0; i < s; ++i) out[o + i + 4] = dat[i];
	return (o + 4 + s) * 8;
};
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
	wbits(out, p++, final);
	++lf[256];
	var _a = hTree(lf, 15), dlt = _a.t, mlb = _a.l;
	var _b = hTree(df, 15), ddt = _b.t, mdb = _b.l;
	var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
	var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
	var lcfreq = new u16(19);
	for (var i = 0; i < lclt.length; ++i) ++lcfreq[lclt[i] & 31];
	for (var i = 0; i < lcdt.length; ++i) ++lcfreq[lcdt[i] & 31];
	var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
	var nlcc = 19;
	for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc);
	var flen = bl + 5 << 3;
	var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
	var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
	if (bs >= 0 && flen <= ftlen && flen <= dtlen) return wfblk(out, p, dat.subarray(bs, bs + bl));
	var lm, ll, dm, dl;
	wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
	if (dtlen < ftlen) {
		lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
		var llm = hMap(lct, mlcb, 0);
		wbits(out, p, nlc - 257);
		wbits(out, p + 5, ndc - 1);
		wbits(out, p + 10, nlcc - 4);
		p += 14;
		for (var i = 0; i < nlcc; ++i) wbits(out, p + 3 * i, lct[clim[i]]);
		p += 3 * nlcc;
		var lcts = [lclt, lcdt];
		for (var it = 0; it < 2; ++it) {
			var clct = lcts[it];
			for (var i = 0; i < clct.length; ++i) {
				var len = clct[i] & 31;
				wbits(out, p, llm[len]), p += lct[len];
				if (len > 15) wbits(out, p, clct[i] >> 5 & 127), p += clct[i] >> 12;
			}
		}
	} else lm = flm, ll = flt, dm = fdm, dl = fdt;
	for (var i = 0; i < li; ++i) {
		var sym = syms[i];
		if (sym > 255) {
			var len = sym >> 18 & 31;
			wbits16(out, p, lm[len + 257]), p += ll[len + 257];
			if (len > 7) wbits(out, p, sym >> 23 & 31), p += fleb[len];
			var dst = sym & 31;
			wbits16(out, p, dm[dst]), p += dl[dst];
			if (dst > 3) wbits16(out, p, sym >> 5 & 8191), p += fdeb[dst];
		} else wbits16(out, p, lm[sym]), p += ll[sym];
	}
	wbits16(out, p, lm[256]);
	return p + ll[256];
};
var deo = /* @__PURE__ */ new i32([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]);
var et = /* @__PURE__ */ new u8(0);
var dflt = function(dat, lvl, plvl, pre, post, st) {
	var s = st.z || dat.length;
	var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7e3)) + post);
	var w = o.subarray(pre, o.length - post);
	var lst = st.l;
	var pos = (st.r || 0) & 7;
	if (lvl) {
		if (pos) w[0] = st.r >> 3;
		var opt = deo[lvl - 1];
		var n = opt >> 13, c = opt & 8191;
		var msk_1 = (1 << plvl) - 1;
		var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
		var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
		var hsh = function(i) {
			return (dat[i] ^ dat[i + 1] << bs1_1 ^ dat[i + 2] << bs2_1) & msk_1;
		};
		var syms = new i32(25e3);
		var lf = new u16(288), df = new u16(32);
		var lc_1 = 0, eb = 0, i = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
		for (; i + 2 < s; ++i) {
			var hv = hsh(i);
			var imod = i & 32767, pimod = head[hv];
			prev[imod] = pimod;
			head[hv] = imod;
			if (wi <= i) {
				var rem = s - i;
				if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
					pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
					li = lc_1 = eb = 0, bs = i;
					for (var j = 0; j < 286; ++j) lf[j] = 0;
					for (var j = 0; j < 30; ++j) df[j] = 0;
				}
				var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
				if (rem > 2 && hv == hsh(i - dif)) {
					var maxn = Math.min(n, rem) - 1;
					var maxd = Math.min(32767, i);
					var ml = Math.min(258, rem);
					while (dif <= maxd && --ch_1 && imod != pimod) {
						if (dat[i + l] == dat[i + l - dif]) {
							var nl = 0;
							for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl);
							if (nl > l) {
								l = nl, d = dif;
								if (nl > maxn) break;
								var mmd = Math.min(dif, nl - 2);
								var md = 0;
								for (var j = 0; j < mmd; ++j) {
									var ti = i - dif + j & 32767;
									var cd = ti - prev[ti] & 32767;
									if (cd > md) md = cd, pimod = ti;
								}
							}
						}
						imod = pimod, pimod = prev[imod];
						dif += imod - pimod & 32767;
					}
				}
				if (d) {
					syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
					var lin = revfl[l] & 31, din = revfd[d] & 31;
					eb += fleb[lin] + fdeb[din];
					++lf[257 + lin];
					++df[din];
					wi = i + l;
					++lc_1;
				} else {
					syms[li++] = dat[i];
					++lf[dat[i]];
				}
			}
		}
		for (i = Math.max(i, wi); i < s; ++i) {
			syms[li++] = dat[i];
			++lf[dat[i]];
		}
		pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
		if (!lst) {
			st.r = pos & 7 | w[pos / 8 | 0] << 3;
			pos -= 7;
			st.h = head, st.p = prev, st.i = i, st.w = wi;
		}
	} else {
		for (var i = st.w || 0; i < s + lst; i += 65535) {
			var e = i + 65535;
			if (e >= s) {
				w[pos / 8 | 0] = lst;
				e = s;
			}
			pos = wfblk(w, pos + 1, dat.subarray(i, e));
		}
		st.i = s;
	}
	return slc(o, 0, pre + shft(pos) + post);
};
var adler = function() {
	var a = 1, b = 0;
	return {
		p: function(d) {
			var n = a, m = b;
			var l = d.length | 0;
			for (var i = 0; i != l;) {
				var e = Math.min(i + 2655, l);
				for (; i < e; ++i) m += n += d[i];
				n = (n & 65535) + 15 * (n >> 16), m = (m & 65535) + 15 * (m >> 16);
			}
			a = n, b = m;
		},
		d: function() {
			a %= 65521, b %= 65521;
			return (a & 255) << 24 | (a & 65280) << 8 | (b & 255) << 8 | b >> 8;
		}
	};
};
var dopt = function(dat, opt, pre, post, st) {
	if (!st) {
		st = { l: 1 };
		if (opt.dictionary) {
			var dict = opt.dictionary.subarray(-32768);
			var newDat = new u8(dict.length + dat.length);
			newDat.set(dict);
			newDat.set(dat, dict.length);
			dat = newDat;
			st.w = dict.length;
		}
	}
	return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
};
var wbytes = function(d, b, v) {
	for (; v; ++b) d[b] = v, v >>>= 8;
};
var zlh = function(c, o) {
	var lv = o.level, fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
	c[0] = 120, c[1] = fl << 6 | (o.dictionary && 32);
	c[1] |= 31 - (c[0] << 8 | c[1]) % 31;
	if (o.dictionary) {
		var h = adler();
		h.p(o.dictionary);
		wbytes(c, 2, h.d());
	}
};
var zls = function(d, dict) {
	if ((d[0] & 15) != 8 || d[0] >> 4 > 7 || (d[0] << 8 | d[1]) % 31) err(6, "invalid zlib data");
	if ((d[1] >> 5 & 1) == +!dict) err(6, "invalid zlib data: " + (d[1] & 32 ? "need" : "unexpected") + " dictionary");
	return (d[1] >> 3 & 4) + 2;
};
/**
* Compress data with Zlib
* @param data The data to compress
* @param opts The compression options
* @returns The zlib-compressed version of the data
*/
function zlibSync(data, opts) {
	if (!opts) opts = {};
	var a = adler();
	a.p(data);
	var d = dopt(data, opts, opts.dictionary ? 6 : 2, 4);
	return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
/**
* Expands Zlib data
* @param data The data to decompress
* @param opts The decompression options
* @returns The decompressed version of the data
*/
function unzlibSync(data, opts) {
	return inflt(data.subarray(zls(data, opts && opts.dictionary), -4), { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
try {
	td.decode(et, { stream: true });
} catch (e) {}
var dutf8 = function(d) {
	for (var r = "", i = 0;;) {
		var c = d[i++];
		var eb = (c > 127) + (c > 223) + (c > 239);
		if (i + eb > d.length) return {
			s: r,
			r: slc(d, i - 1)
		};
		if (!eb) r += String.fromCharCode(c);
		else if (eb == 3) c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
		else if (eb & 1) r += String.fromCharCode((c & 31) << 6 | d[i++] & 63);
		else r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | d[i++] & 63);
	}
};
/**
* Converts a string into a Uint8Array for use with compression/decompression methods
* @param str The string to encode
* @param latin1 Whether or not to interpret the data as Latin-1. This should
*               not need to be true unless decoding a binary string.
* @returns The string encoded in UTF-8/Latin-1 binary
*/
function strToU8(str, latin1) {
	if (latin1) {
		var ar_1 = new u8(str.length);
		for (var i = 0; i < str.length; ++i) ar_1[i] = str.charCodeAt(i);
		return ar_1;
	}
	if (te) return te.encode(str);
	var l = str.length;
	var ar = new u8(str.length + (str.length >> 1));
	var ai = 0;
	var w = function(v) {
		ar[ai++] = v;
	};
	for (var i = 0; i < l; ++i) {
		if (ai + 5 > ar.length) {
			var n = new u8(ai + 8 + (l - i << 1));
			n.set(ar);
			ar = n;
		}
		var c = str.charCodeAt(i);
		if (c < 128 || latin1) w(c);
		else if (c < 2048) w(192 | c >> 6), w(128 | c & 63);
		else if (c > 55295 && c < 57344) c = 65536 + (c & 1047552) | str.charCodeAt(++i) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
		else w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
	}
	return slc(ar, 0, ai);
}
/**
* Converts a Uint8Array to a string
* @param dat The data to decode to string
* @param latin1 Whether or not to interpret the data as Latin-1. This should
*               not need to be true unless encoding to binary string.
* @returns The original UTF-8/Latin-1 string
*/
function strFromU8(dat, latin1) {
	if (latin1) {
		var r = "";
		for (var i = 0; i < dat.length; i += 16384) r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
		return r;
	} else if (td) return td.decode(dat);
	else {
		var _a = dutf8(dat), s = _a.s, r = _a.r;
		if (r.length) err(8);
		return s;
	}
}
//#endregion
//#region node_modules/.pnpm/@vuepress+helper@2.0.0-rc.128_@vuepress+bundler-vite@2.0.0-rc.28_@emnapi+core@1.9.1_@em_9c7337307cf327327dea6c4cdb0926d0/node_modules/@vuepress/helper/dist/client/index.js
var j = (e, t = 6) => {
	let n = strFromU8(zlibSync(strToU8(e), { level: t }), !0);
	return __VUEPRESS_SSR__ ? Buffer.from(n, `binary`).toString(`base64`) : btoa(n);
}, M = (e) => strFromU8(unzlibSync(strToU8(__VUEPRESS_SSR__ ? Buffer.from(e, `base64`).toString(`binary`) : atob(e), !0))), N = (e) => {
	let t = e.replaceAll(`<br>`, `<br />`).replaceAll(`%`, `%25`).replaceAll(`"`, `%22`).replaceAll(`'`, `%27`).replaceAll(`&`, `%26`).replaceAll(`#`, `%23`).replaceAll(`{`, `%7B`).replaceAll(`}`, `%7D`).replaceAll(`<`, `%3C`).replaceAll(`>`, `%3E`);
	return e.includes(`xmlns`) || (t = t.replace(`<svg`, `<svg xmlns="http://www.w3.org/2000/svg"`)), `data:image/svg+xml;charset=utf8,${t}`;
}, P = () => navigator.userAgentData?.platform ?? navigator.platform, F = () => navigator.userAgent, I = () => /\biPhone\b/i.test(P()), ve = () => /\b(Windows|Win32)\b/i.test(P()), L = () => /\biPad\b/i.test(P()), R = () => /ios/i.test(P()) || I() || L(), ye = () => {
	let e = P();
	return e ? /mac/i.test(e) : /macintosh|mac os x/i.test(F()) && !R();
}, be = () => {
	let e = navigator.userAgentData?.mobile;
	return m(e) ? e : /\b(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|CriOS|FxiOS)\b/i.test(F());
}, xe = () => {
	let e = F();
	return /safari/i.test(e) && !/chrome|crios|fxios|edgios|edg|opr|opera|ucbrowser|qqbrowser|baidubrowser/i.test(e);
}, z = () => document.documentElement.dataset.theme === `dark`, B = Array.from({ length: 6 }, (e, t) => `[vp-content] h${t + 1}`).join(`,`), V = (e, t = 2) => {
	if (t === !1) return [];
	let [n, r] = typeof t == `number` ? [t, t] : t === `deep` ? [2, 6] : t, i = e.filter((e) => e.level >= n && e.level <= r), a = [];
	outer: for (let e = 0; e < i.length; e++) {
		let t = i[e];
		if (e === 0) a.push(t);
		else {
			for (let n = e - 1; n >= 0; n--) {
				let e = i[n];
				if (e.level < t.level) {
					e.children.push(t);
					continue outer;
				}
			}
			a.push(t);
		}
	}
	return a;
}, Se = (e, t = []) => {
	let n;
	if (t.length > 0) {
		let r = e.cloneNode(!0);
		r.querySelectorAll(t.join(`,`)).forEach((e) => {
			e.remove();
		}), n = r.textContent || ``;
	} else n = e.textContent || ``;
	return n.trim();
}, H = (e = B, t = []) => [...document.querySelectorAll(e)].filter((e) => e.id && e.hasChildNodes()).map((e) => ({
	element: e,
	title: Se(e, t),
	link: `#${e.id}`,
	slug: e.id,
	level: Number(e.tagName[1]),
	children: []
})), U = ({ selector: e = B, levels: t = 2, ignore: n = [] } = {}) => V(H(e, n), t), W = (e) => e instanceof Element ? document.activeElement === e && ([
	`TEXTAREA`,
	`SELECT`,
	`INPUT`
].includes(e.tagName) || e.hasAttribute(`contenteditable`)) : !1, G = (e) => e.every((e) => e.type === Comment ? !0 : e.type === Fragment ? e.children == null || g(e.children) && G(e.children) : !1), Ce = (e) => e == null ? !0 : g(e) ? G(e) : !1, K = (e, t) => t.some((t) => {
	if (isString(t)) return t === e.key;
	let { key: n, ctrl: r = !1, shift: i = !1, alt: a = !1 } = t;
	return n === e.key && r === e.ctrlKey && i === e.shiftKey && a === e.altKey;
}), we = (e, t) => {
	let n = (t?._instance ?? getCurrentInstance())?.appContext.components;
	return n ? e in n || camelize(e) in n || capitalize(camelize(e)) in n : !1;
}, q = `message-container`;
var Te = class e {
	elements;
	constructor() {
		this.elements = {};
	}
	static get containerElement() {
		let e = document.querySelector(`#${q}`);
		return e || (e = document.createElement(`div`), e.id = q, document.body.append(e), e);
	}
	getElement(e) {
		return this.elements[e];
	}
	pop(t, n = 2e3, r = !0) {
		let i = Date.now(), a = document.createElement(`div`);
		return a.className = `message-item move-in`, a.innerHTML = t, e.containerElement.append(a), this.elements[i] = a, r && a.addEventListener(`click`, () => {
			this.close(i);
		}), n > 0 && setTimeout(() => {
			this.close(i);
		}, n), i;
	}
	close(e) {
		if (e == null) S(this.elements).forEach((e) => {
			this.close(Number(e));
		});
		else {
			let t = this.elements[e];
			t.classList.remove(`move-in`), t.classList.add(`move-out`), t.addEventListener(`animationend`, () => {
				t.remove(), delete this.elements[e];
			});
		}
	}
	destroy() {
		document.querySelector(`#${q}`)?.remove(), this.elements = {};
	}
};
var Ee = (e) => new Promise((t) => {
	setTimeout(t, e);
}), J = (e) => typeof e == `number` ? `${e}px` : e, Y = ({ size: e = 48, stroke: t = 4, wrapper: n = !0, height: r = 2 * e }) => {
	let i = h$1(`span`, { style: `\
--loading-icon: url("${N(`<svg preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="${t}" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg>`)}");\
--icon-size: ${J(e)};\
display: inline-block;\
width: var(--icon-size);\
height: var(--icon-size);\
background-color: currentcolor;\
-webkit-mask-image: var(--loading-icon);\
mask-image: var(--loading-icon)\
` });
	return n ? h$1(`div`, { style: `\
display: flex;\
align-items: center;\
justify-content: center;\
height: ${J(r)}\
` }, i) : i;
};
Y.displayName = `LoadingIcon`;
var X = (e, { slots: t }) => t.default(), De = defineComponent({
	name: `FadeInExpandTransition`,
	props: {
		group: Boolean,
		appear: Boolean,
		width: Boolean,
		mode: String,
		onLeave: Function,
		onAfterLeave: Function,
		onAfterEnter: Function
	},
	setup(e, { slots: t }) {
		let n = (t) => {
			t.style[e.width ? `maxWidth` : `maxHeight`] = `${t.offsetHeight}px`, t.offsetWidth;
		}, r = (t) => {
			t.style[e.width ? `maxWidth` : `maxHeight`] = `0`, t.offsetWidth, e.onLeave?.();
		}, i = (t) => {
			t.style[e.width ? `maxWidth` : `maxHeight`] = ``, e.onAfterLeave?.();
		}, a = (t) => {
			if (t.style.transition = `none`, e.width) {
				let e = t.offsetWidth;
				t.style.maxWidth = `0`, t.offsetWidth, t.style.transition = ``, t.style.maxWidth = `${e}px`;
			} else {
				let e = t.offsetHeight;
				t.style.maxHeight = `0`, t.offsetWidth, t.style.transition = ``, t.style.maxHeight = `${e}px`;
			}
			t.offsetWidth;
		}, o = (t) => {
			t.style[e.width ? `maxWidth` : `maxHeight`] = ``, e.onAfterEnter?.();
		};
		return () => h$1(e.group ? TransitionGroup : Transition, {
			name: e.width ? `fade-in-width-expand` : `fade-in-height-expand`,
			appear: e.appear,
			onEnter: a,
			onAfterEnter: o,
			onBeforeLeave: n,
			onLeave: r,
			onAfterLeave: i,
			...e.group ? void 0 : { mode: e.mode }
		}, t);
	}
}), Z = Symbol(__VUEPRESS_DEV__ ? `darkMode` : ``), Q = ref(!1);
typeof document < `u` && (Q.value = z(), new MutationObserver(() => {
	Q.value = z();
}).observe(document.documentElement, {
	attributeFilter: [`data-theme`],
	attributes: !0
}));
var Oe = () => readonly(inject(Z, Q)), ke = (e = {}) => {
	let t = ref([]);
	return onContentUpdated((n) => {
		t.value = n === `beforeUnmount` ? [] : U(toValue(e));
	}), t;
}, $ = (e) => {
	let t = useRouteLocale();
	return computed(() => {
		let n = toValue(e);
		return n[t.value] ?? n[`/`] ?? Object.values(n)[0];
	});
}, Ae = $, je = (e, t) => {
	useEventListener(`keydown`, (n) => {
		let r = toValue(e);
		r?.length && K(n, r) && !W(n.target) && (n.preventDefault(), t());
	});
}, Me = () => {
	let e = useRoutes();
	return computed(() => Object.keys(e.value));
};
//#endregion
export { v as $, z as A, c as B, j as C, we as D, ve as E, S as F, h as G, e as H, T as I, n as J, l as K, _ as L, D as M, E as N, xe as O, O as P, t as Q, a as R, be as S, ke as T, f as U, d as V, g as W, p as X, o as Y, r as Z, V as _, Ee as a, Y as b, K as c, Me as d, w as et, N as f, U as g, Te as h, De as i, C as j, ye as k, L as l, R as m, Ae as n, y as nt, H as o, Oe as p, m as q, Ce as r, I as s, $ as t, x$1 as tt, M as u, W as v, je as w, Z as x, X as y, b as z };

//# sourceMappingURL=client-D24Yr-nD.js.map