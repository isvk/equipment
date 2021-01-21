(this.webpackJsonpequipment = this.webpackJsonpequipment || []).push([
    [0],
    {
        70: function (e, t, n) {},
        71: function (e, t, n) {},
        72: function (e, t, n) {},
        73: function (e, t, n) {},
        74: function (e, t, n) {},
        75: function (e, t, n) {},
        76: function (e, t, n) {},
        77: function (e, t, n) {},
        78: function (e, t, n) {},
        79: function (e, t, n) {},
        80: function (e, t, n) {},
        81: function (e, t, n) {},
        82: function (e, t, n) {},
        84: function (e, t, n) {},
        85: function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, "history", function () {
                    return ft;
                });
            var c,
                r,
                a,
                s = n(2),
                i = n(3),
                o = n.n(i),
                d = n(30),
                l = n.n(d),
                u = n(27),
                j = n(28),
                b = n(20),
                O = n(50),
                m = n(34),
                f = n(55),
                x = n(39),
                v = n(15),
                h = n(23),
                p = n(32),
                I = n(31),
                g = n(24);
            !(function (e) {
                (e[(e.notLoaded = 0)] = "notLoaded"),
                    (e[(e.load = 1)] = "load"),
                    (e[(e.loaded = 2)] = "loaded"),
                    (e[(e.errorServer = 3)] = "errorServer");
            })(c || (c = {})),
                (function (e) {
                    (e[(e.notSaved = 0)] = "notSaved"),
                        (e[(e.save = 1)] = "save"),
                        (e[(e.saved = 2)] = "saved"),
                        (e[(e.errorServer = 3)] = "errorServer");
                })(r || (r = {})),
                (function (e) {
                    (e[(e.notDeleted = 0)] = "notDeleted"),
                        (e[(e.delete = 1)] = "delete"),
                        (e[(e.deleted = 2)] = "deleted"),
                        (e[(e.errorServer = 3)] = "errorServer");
                })(a || (a = {}));
            var N = {
                    statusAsync: {
                        loadNodes: c.notLoaded,
                        loadItems: c.notLoaded,
                        saveItem: r.notSaved,
                        deleteItem: a.notDeleted,
                    },
                },
                S = (function (e) {
                    Object(p.a)(n, e);
                    var t = Object(I.a)(n);
                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments);
                    }
                    return n;
                })(Object(g.b)(N)),
                y = "SET_STATUS_ASYNC",
                E = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new S(),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case y:
                            return e.set(
                                "statusAsync",
                                Object(v.a)(Object(v.a)({}, e.statusAsync), {}, Object(x.a)({}, t.status, t.value))
                            );
                        default:
                            return e;
                    }
                },
                w = n(54),
                A = { id: "", name: "", descendants: void 0, isSelected: !1, selectedByAncestorId: "" },
                F = function (e, t) {
                    var n = [];
                    return (
                        (function t(c) {
                            var r = e.get(c);
                            r &&
                                r.descendants &&
                                (n.push.apply(n, Object(w.a)(r.descendants)),
                                r.descendants.forEach(function (e) {
                                    return t(e);
                                }));
                        })(t),
                        n
                    );
                },
                _ = (function (e) {
                    Object(p.a)(n, e);
                    var t = Object(I.a)(n);
                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments);
                    }
                    return n;
                })(Object(g.b)(A)),
                k = "LOAD_NODES",
                C = "LOAD_NODES_SUCCESS",
                D = "SET_SELECTED_BY_IDS_REST_UNSELECTED",
                T = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(g.a)(),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case C:
                            return (
                                t.nodes.forEach(function (t) {
                                    e = e.set(t.id, t);
                                }),
                                e
                            );
                        case D:
                            var n = t.ids;
                            return (
                                t.ids.forEach(function (t) {
                                    e = e
                                        .setIn([t, "isSelected"], !0)
                                        .setIn([t, "selectedByAncestorId"], A.selectedByAncestorId);
                                    var c = F(e, t);
                                    c.forEach(function (n) {
                                        e = e.setIn([n, "isSelected"], !0).setIn([n, "selectedByAncestorId"], t);
                                    }),
                                        (n = n.concat(c));
                                }),
                                e.forEach(function (t) {
                                    n.includes(t.id) ||
                                        (t.isSelected !== A.isSelected &&
                                            (e = e.setIn([t.id, "isSelected"], A.isSelected)),
                                        t.selectedByAncestorId !== A.selectedByAncestorId &&
                                            (e = e.setIn([t.id, "selectedByAncestorId"], A.selectedByAncestorId)));
                                }),
                                e
                            );
                        default:
                            return e;
                    }
                },
                B = "LOAD_ITEMS ",
                L = "LOAD_ITEMS_SUCCESS",
                M = "CREATE_ITEM",
                U = "CREATE_ITEM_SUCCESS",
                q = "UPDATE_ITEM",
                z = "UPDATE_ITEM_SUCCESS",
                P = "DELETE_ITEM",
                R = "DELETE_ITEM_SUCCESS",
                J = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(g.a)(),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case L:
                            return (
                                t.items.forEach(function (t) {
                                    e = e.set(t.id, t);
                                }),
                                e
                            );
                        case U:
                        case z:
                            return e.set(t.item.id, t.item);
                        case R:
                            return e.remove(t.id);
                        default:
                            return e;
                    }
                },
                X = function (e) {
                    return Object(u.c)({ router: Object(m.b)(e), main: E, nodes: T, items: J });
                },
                Q = n(14),
                V = n.n(Q),
                Y = n(52),
                H = n(7),
                K = function (e) {
                    return { type: C, nodes: e };
                },
                Z = function (e) {
                    return { type: D, ids: e };
                },
                G = function (e, t) {
                    return { type: y, status: e, value: t };
                },
                W = V.a.mark(ee),
                $ = V.a.mark(te);
            function ee(e) {
                var t;
                return V.a.wrap(
                    function (n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (n.prev = 0), (n.next = 3), Object(H.c)(G("loadNodes", c.load));
                                case 3:
                                    return (n.next = 5), Object(H.b)(e.container.ApiNode.loadNodes);
                                case 5:
                                    return (t = n.sent), (n.next = 8), Object(H.c)(K(t));
                                case 8:
                                    return (n.next = 10), Object(H.c)(G("loadNodes", c.loaded));
                                case 10:
                                    n.next = 18;
                                    break;
                                case 12:
                                    return (
                                        (n.prev = 12),
                                        (n.t0 = n.catch(0)),
                                        (n.next = 16),
                                        Object(H.c)(G("loadNodes", c.errorServer))
                                    );
                                case 16:
                                    console.error("Server error while loading nodes!"), console.error(n.t0);
                                case 18:
                                case "end":
                                    return n.stop();
                            }
                    },
                    W,
                    null,
                    [[0, 12]]
                );
            }
            function te(e) {
                return V.a.wrap(function (t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), Object(H.e)(k, ee, e);
                            case 2:
                            case "end":
                                return t.stop();
                        }
                }, $);
            }
            var ne = n(16),
                ce = function (e) {
                    return { type: L, items: e };
                },
                re = function (e) {
                    return { type: U, item: e };
                },
                ae = function (e, t) {
                    return { type: z, item: t };
                },
                se = n(26),
                ie = function (e, t) {
                    return t;
                },
                oe = function (e) {
                    return e.main;
                },
                de = Object(se.a)(oe, function (e) {
                    return e.statusAsync;
                }),
                le = Object(se.a)(oe, function (e) {
                    return e.statusAsync.loadNodes;
                }),
                ue = Object(se.a)(oe, function (e) {
                    return e.statusAsync.loadItems;
                }),
                je = function (e) {
                    return e.nodes;
                },
                be = Object(se.a)(je, ie, function (e, t) {
                    return e.find(function (e) {
                        return e.id === t;
                    });
                }),
                Oe = Object(se.a)(je, ie, function (e, t) {
                    return e.filter(function (e) {
                        return !!t && t.includes(e.id);
                    });
                }),
                me = Object(se.a)(je, function (e) {
                    var t = e.reduce(function (e, t) {
                        return t.descendants ? e.concat(t.descendants) : e;
                    }, []);
                    return e.filter(function (e) {
                        return !t.includes(e.id);
                    });
                }),
                fe = Object(se.a)(je, function (e) {
                    return e.filter(function (e) {
                        return e.isSelected;
                    });
                }),
                xe = Object(se.a)(fe, function (e) {
                    return e.find(function (e) {
                        return e.selectedByAncestorId === A.selectedByAncestorId;
                    });
                }),
                ve = function (e) {
                    return e.items;
                },
                he = Object(se.a)(
                    function (e) {
                        return e;
                    },
                    ie,
                    function (e, t) {
                        var n = F(e.nodes, t);
                        return (
                            n.push(t),
                            e.items.filter(function (e) {
                                return !!e.nodeId && n.includes(e.nodeId);
                            }).size
                        );
                    }
                ),
                pe = Object(se.a)(ve, ie, function (e, t) {
                    return e.filter(function (e) {
                        return !!e.nodeId && t.includes(e.nodeId);
                    });
                }),
                Ie = function (e) {
                    var t = e.nodes
                        .filter(function (e) {
                            return e.isSelected;
                        })
                        .map(function (e) {
                            return e.id;
                        });
                    return e.items.filter(function (e) {
                        return !!e.nodeId && t.includes(e.nodeId);
                    });
                },
                ge = Object(se.a)(ve, ie, function (e, t) {
                    return e.find(function (e) {
                        return e.id === t;
                    });
                }),
                Ne = V.a.mark(Ae),
                Se = V.a.mark(Fe),
                ye = V.a.mark(_e),
                Ee = V.a.mark(ke),
                we = V.a.mark(Ce);
            function Ae(e) {
                var t;
                return V.a.wrap(
                    function (n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (n.prev = 0), (n.next = 3), Object(H.c)(G("loadItems", c.load));
                                case 3:
                                    return (n.next = 5), Object(H.b)(e.container.ApiItem.loadItems);
                                case 5:
                                    return (t = n.sent), (n.next = 8), Object(H.c)(ce(t));
                                case 8:
                                    return (n.next = 10), Object(H.c)(G("loadItems", c.loaded));
                                case 10:
                                    n.next = 18;
                                    break;
                                case 12:
                                    return (
                                        (n.prev = 12),
                                        (n.t0 = n.catch(0)),
                                        (n.next = 16),
                                        Object(H.c)(G("loadItems", c.errorServer))
                                    );
                                case 16:
                                    console.error("Server error while loading items!"), console.error(n.t0);
                                case 18:
                                case "end":
                                    return n.stop();
                            }
                    },
                    Ne,
                    null,
                    [[0, 12]]
                );
            }
            function Fe(e, t) {
                var n, c;
                return V.a.wrap(
                    function (a) {
                        for (;;)
                            switch ((a.prev = a.next)) {
                                case 0:
                                    return (a.prev = 0), (a.next = 3), Object(H.c)(G("saveItem", r.save));
                                case 3:
                                    return (a.next = 5), Object(H.b)(e.container.ApiItem.createItem, t.item);
                                case 5:
                                    return (n = a.sent), (a.next = 8), Object(H.b)(e.container.ApiItem.loadItem, n);
                                case 8:
                                    return (c = a.sent), (a.next = 11), Object(H.c)(re(c));
                                case 11:
                                    return (a.next = 13), Object(H.c)(G("saveItem", r.saved));
                                case 13:
                                    return (a.next = 15), Object(H.c)(Object(ne.d)("/catalog/item/" + c.id));
                                case 15:
                                    a.next = 23;
                                    break;
                                case 17:
                                    return (
                                        (a.prev = 17),
                                        (a.t0 = a.catch(0)),
                                        (a.next = 21),
                                        Object(H.c)(G("saveItem", r.errorServer))
                                    );
                                case 21:
                                    console.error("Server error while creating items!"), console.error(a.t0);
                                case 23:
                                case "end":
                                    return a.stop();
                            }
                    },
                    Se,
                    null,
                    [[0, 17]]
                );
            }
            function _e(e, t) {
                var n;
                return V.a.wrap(
                    function (c) {
                        for (;;)
                            switch ((c.prev = c.next)) {
                                case 0:
                                    return (c.prev = 0), (c.next = 3), Object(H.c)(G("saveItem", r.save));
                                case 3:
                                    return (c.next = 5), Object(H.b)(e.container.ApiItem.updateItem, t.id, t.item);
                                case 5:
                                    return (c.next = 7), Object(H.b)(e.container.ApiItem.loadItem, t.id);
                                case 7:
                                    return (n = c.sent), (c.next = 10), Object(H.c)(ae(t.id, n));
                                case 10:
                                    return (c.next = 12), Object(H.c)(G("saveItem", r.saved));
                                case 12:
                                    c.next = 20;
                                    break;
                                case 14:
                                    return (
                                        (c.prev = 14),
                                        (c.t0 = c.catch(0)),
                                        (c.next = 18),
                                        Object(H.c)(G("saveItem", r.errorServer))
                                    );
                                case 18:
                                    console.error("Server error while updating item!"), console.error(c.t0);
                                case 20:
                                case "end":
                                    return c.stop();
                            }
                    },
                    ye,
                    null,
                    [[0, 14]]
                );
            }
            function ke(e, t) {
                var n;
                return V.a.wrap(
                    function (c) {
                        for (;;)
                            switch ((c.prev = c.next)) {
                                case 0:
                                    return (c.prev = 0), (c.next = 3), Object(H.c)(G("deleteItem", a.delete));
                                case 3:
                                    return (c.next = 5), Object(H.d)(ge, t.id);
                                case 5:
                                    return (
                                        (n = c.sent), (c.next = 8), Object(H.b)(e.container.ApiItem.deleteItem, t.id)
                                    );
                                case 8:
                                    return (c.next = 10), Object(H.c)(((r = t.id), { type: R, id: r }));
                                case 10:
                                    return (c.next = 12), Object(H.c)(G("deleteItem", a.deleted));
                                case 12:
                                    return (c.next = 14), Object(H.c)(Object(ne.d)("/catalog/node/" + n.nodeId));
                                case 14:
                                    c.next = 22;
                                    break;
                                case 16:
                                    return (
                                        (c.prev = 16),
                                        (c.t0 = c.catch(0)),
                                        (c.next = 20),
                                        Object(H.c)(G("deleteItem", a.errorServer))
                                    );
                                case 20:
                                    console.error("Server error while deleting item!"), console.error(c.t0);
                                case 22:
                                case "end":
                                    return c.stop();
                            }
                        var r;
                    },
                    Ee,
                    null,
                    [[0, 16]]
                );
            }
            function Ce(e) {
                return V.a.wrap(function (t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), Object(H.e)(B, Ae, e);
                            case 2:
                                return (t.next = 4), Object(H.e)(M, Fe, e);
                            case 4:
                                return (t.next = 6), Object(H.e)(q, _e, e);
                            case 6:
                                return (t.next = 8), Object(H.e)(P, ke, e);
                            case 8:
                            case "end":
                                return t.stop();
                        }
                }, we);
            }
            var De = n(53),
                Te = n(46),
                Be =
                    (n(66),
                    n(68),
                    n(86),
                    {
                        apiKey: "AIzaSyBahS7jXhxcnjPhds-Qh9RLQsH7MLiZ-Dw",
                        authDomain: "treeview-catalog.firebaseapp.com",
                        databaseURL: "https://treeview-catalog-default-rtdb.europe-west1.firebasedatabase.app",
                        projectId: "treeview-catalog",
                        storageBucket: "treeview-catalog.appspot.com",
                        messagingSenderId: "265159864205",
                        appId: "1:265159864205:web:1c319bea13dfb7f51617c4",
                    }),
                Le = { id: "", name: "", count: 1, nodeId: "" },
                Me = (function (e) {
                    Object(p.a)(n, e);
                    var t = Object(I.a)(n);
                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments);
                    }
                    return n;
                })(Object(g.b)(Le)),
                Ue = new De.a(),
                qe = Ue;
            Ue.service("Firebase", function e() {
                var t = this;
                Object(h.a)(this, e),
                    (this.firestore = void 0),
                    (this.get = function (e) {
                        return t.request(e).get();
                    }),
                    (this.getOne = function (e, n) {
                        return t.request(e).doc(n).get();
                    }),
                    (this.delete = function (e, n) {
                        return t.request(e).doc(n).delete();
                    }),
                    (this.request = function (e) {
                        return t.firestore.collection(e);
                    }),
                    Te.a.initializeApp(Be),
                    (this.firestore = Te.a.firestore());
            }),
                Ue.service(
                    "ApiNode",
                    function e(t) {
                        var n = this,
                            c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "places";
                        Object(h.a)(this, e),
                            (this.firebase = t),
                            (this.collection = c),
                            (this.loadNodes = function () {
                                return n.firebase.get(n.collection).then(function (e) {
                                    return e.docs.map(function (e) {
                                        var t;
                                        return new _({
                                            id: e.id,
                                            name: e.data().name,
                                            descendants:
                                                null === (t = e.data().parts) || void 0 === t
                                                    ? void 0
                                                    : t.map(function (e) {
                                                          return e.id;
                                                      }),
                                        });
                                    });
                                });
                            });
                    },
                    "Firebase"
                ),
                Ue.service(
                    "ApiItem",
                    function e(t) {
                        var n = this,
                            c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "inventory";
                        Object(h.a)(this, e),
                            (this.firebase = t),
                            (this.collection = c),
                            (this.loadItems = function () {
                                return n.firebase.get(n.collection).then(function (e) {
                                    return e.docs
                                        .map(function (e) {
                                            var t;
                                            if (e.id.length > 0 && Number(e.data().count) > 0)
                                                return new Me({
                                                    id: e.id,
                                                    nodeId:
                                                        null === (t = e.data().place) || void 0 === t ? void 0 : t.id,
                                                    name: e.data().name,
                                                    count: Number(e.data().count),
                                                });
                                        })
                                        .filter(function (e) {
                                            return e;
                                        });
                                });
                            }),
                            (this.loadItem = function (e) {
                                return n.firebase.getOne(n.collection, e).then(function (e) {
                                    var t;
                                    return new Me({
                                        id: e.id,
                                        nodeId: null === (t = e.data().place) || void 0 === t ? void 0 : t.id,
                                        name: e.data().name,
                                        count: Number(e.data().count),
                                    });
                                });
                            }),
                            (this.createItem = function (e) {
                                if (e.nodeId) {
                                    var t = n.firebase.firestore;
                                    return t
                                        .collection(n.collection)
                                        .add({
                                            name: e.name,
                                            count: e.count,
                                            place: t.collection("places").doc(e.nodeId),
                                        })
                                        .then(function (e) {
                                            return e.id;
                                        });
                                }
                                throw new Error("Not found ancestor node");
                            }),
                            (this.updateItem = function (e, t) {
                                if (e && t) {
                                    var c = n.firebase.firestore;
                                    return c
                                        .collection(n.collection)
                                        .doc(e)
                                        .set({
                                            name: t.name,
                                            count: t.count,
                                            place: c.collection("places").doc(t.nodeId),
                                        })
                                        .then(function () {
                                            return !0;
                                        });
                                }
                                throw new Error("Not found item");
                            }),
                            (this.deleteItem = function (e) {
                                return n.firebase.delete(n.collection, e).then(function () {
                                    return !0;
                                });
                            });
                    },
                    "Firebase"
                );
            var ze = n(10);
            function Pe() {
                return Object(j.d)();
            }
            function Re(e, t) {
                return Object(j.e)(function (n) {
                    return e(n, t);
                });
            }
            var Je = n(12);
            n(70);
            function Xe(e) {
                return Object(s.jsxs)("div", {
                    className: "alert",
                    children: [
                        "preload" === e.type &&
                            Object(s.jsxs)(s.Fragment, {
                                children: [Object(s.jsx)(Je.f, { className: "preloadIcon" }), " ", e.text],
                            }),
                        "warning" === e.type &&
                            Object(s.jsxs)(s.Fragment, {
                                children: [Object(s.jsx)(Je.g, { className: "warningIcon" }), " ", e.text],
                            }),
                    ],
                });
            }
            function Qe() {
                var e = Pe(),
                    t = Re(le);
                return (
                    Object(i.useEffect)(
                        function () {
                            e({ type: k });
                        },
                        [e]
                    ),
                    t === c.load
                        ? Object(s.jsx)(Xe, {
                              type: "preload",
                              text:
                                  "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0437\u0434\u0430\u043d\u0438\u0439 \u0438 \u043a\u043e\u043c\u043d\u0430\u0442",
                          })
                        : t === c.errorServer
                        ? Object(s.jsx)(Xe, {
                              type: "warning",
                              text:
                                  "\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0437\u0434\u0430\u043d\u0438\u0439 \u0438 \u043a\u043e\u043c\u043d\u0430\u0442",
                          })
                        : Object(s.jsx)(s.Fragment, {})
                );
            }
            function Ve() {
                var e = Pe(),
                    t = Re(ue);
                return (
                    Object(i.useEffect)(
                        function () {
                            e({ type: B });
                        },
                        [e]
                    ),
                    t === c.load
                        ? Object(s.jsx)(Xe, {
                              type: "preload",
                              text:
                                  "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f",
                          })
                        : t === c.errorServer
                        ? Object(s.jsx)(Xe, {
                              type: "warning",
                              text:
                                  "\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f",
                          })
                        : Object(s.jsx)(s.Fragment, {})
                );
            }
            n(71);
            function Ye(e) {
                return Object(s.jsxs)("div", {
                    className: "catalog",
                    children: [
                        Object(s.jsx)("div", { className: "head", children: e.head }),
                        Object(s.jsxs)("div", {
                            className: "body",
                            children: [
                                Object(s.jsx)("div", { className: "navigation", children: e.navigation }),
                                Object(s.jsxs)("div", {
                                    className: "main",
                                    children: [
                                        Object(s.jsx)("div", { className: "control", children: e.control }),
                                        Object(s.jsx)("div", { className: "content", children: e.content }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            }
            var He = n(29);
            n(72);
            function Ke(e) {
                var t = Re(he, e.nodeId);
                return t > 0
                    ? Object(s.jsx)("div", { className: "availabilityItemsIcon", children: t })
                    : Object(s.jsx)(s.Fragment, {});
            }
            n(73);
            function Ze(e) {
                var t = Re(Oe, e.node.descendants),
                    n =
                        e.node.isSelected && e.node.selectedByAncestorId === A.selectedByAncestorId
                            ? "/catalog/"
                            : "/catalog/node/" + e.node.id;
                return Object(s.jsxs)("div", {
                    children: [
                        Object(s.jsxs)("div", {
                            className: "element" + (e.node.isSelected ? " selected" : ""),
                            children: [
                                Object(s.jsx)("div", {
                                    className: "descendantsIcon",
                                    children: t.size > 0 && Object(s.jsx)(Je.e, {}),
                                }),
                                Object(s.jsxs)(He.a, {
                                    to: n,
                                    className: "link",
                                    children: [
                                        Object(s.jsx)("div", { className: "name", children: e.node.name }),
                                        Object(s.jsx)(Ke, { nodeId: e.node.id }),
                                    ],
                                }),
                            ],
                        }),
                        t.size > 0 &&
                            Object(s.jsx)("div", {
                                className: "listDescendants",
                                children: Object(s.jsx)(Ge, { nodes: t }),
                            }),
                    ],
                });
            }
            function Ge(e) {
                return Object(s.jsx)("div", {
                    children: e.nodes.valueSeq().map(function (e) {
                        return Object(s.jsx)(Ze, { node: e }, e.id);
                    }),
                });
            }
            n(74);
            function We() {
                var e = Re(me);
                return e && e.size > 0
                    ? Object(s.jsx)("div", { className: "treeView", children: Object(s.jsx)(Ge, { nodes: e }) })
                    : Object(s.jsx)(s.Fragment, {});
            }
            n(75);
            function $e(e) {
                return e.nodes && e.items && e.nodes.size > 0 && e.items.size > 0
                    ? Object(s.jsx)("div", {
                          className: "listItems",
                          children: Object(s.jsxs)("table", {
                              className: "items",
                              children: [
                                  Object(s.jsx)("thead", {
                                      children: Object(s.jsxs)("tr", {
                                          className: "head",
                                          children: [
                                              Object(s.jsx)("td", {
                                                  className: "cell name",
                                                  children:
                                                      "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f",
                                              }),
                                              Object(s.jsx)("td", {
                                                  className: "cell count",
                                                  children:
                                                      "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",
                                              }),
                                              Object(s.jsx)("td", {
                                                  className: "cell nodeName",
                                                  children:
                                                      "\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435",
                                              }),
                                          ],
                                      }),
                                  }),
                                  e.nodes.valueSeq().map(function (t) {
                                      return Object(s.jsx)(
                                          "tbody",
                                          {
                                              children: e.items
                                                  .filter(function (e) {
                                                      return e.nodeId === t.id;
                                                  })
                                                  .valueSeq()
                                                  .map(function (e) {
                                                      return Object(s.jsxs)(
                                                          "tr",
                                                          {
                                                              className: "item",
                                                              children: [
                                                                  Object(s.jsx)("td", {
                                                                      className: "cell name",
                                                                      children: Object(s.jsx)(He.a, {
                                                                          to: "/catalog/item/" + e.id,
                                                                          children: e.name,
                                                                      }),
                                                                  }),
                                                                  Object(s.jsx)("td", {
                                                                      className: "cell count",
                                                                      children: e.count,
                                                                  }),
                                                                  Object(s.jsx)("td", {
                                                                      className: "cell nodeName",
                                                                      children: t.name,
                                                                  }),
                                                              ],
                                                          },
                                                          e.id
                                                      );
                                                  }),
                                          },
                                          t.id
                                      );
                                  }),
                              ],
                          }),
                      })
                    : Object(s.jsx)("div", {
                          className: "notFound",
                          children:
                              "\u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0435\u0442",
                      });
            }
            n(76);
            function et(e) {
                return Object(s.jsx)(
                    "div",
                    Object(v.a)(Object(v.a)({}, e), {}, { className: "header " + e.className, children: e.children })
                );
            }
            n(77);
            function tt(e) {
                return Object(s.jsx)(
                    "div",
                    Object(v.a)(Object(v.a)({}, e), {}, { className: "footer " + e.className, children: e.children })
                );
            }
            function nt() {
                var e = Pe(),
                    t = Re(de),
                    n = Re(je),
                    r = Re(
                        pe,
                        n
                            .valueSeq()
                            .map(function (e) {
                                return e.id;
                            })
                            .toJS()
                    );
                return (
                    Object(i.useEffect)(
                        function () {
                            e(Z([]));
                        },
                        [e]
                    ),
                    t.loadNodes !== c.loaded
                        ? Object(s.jsx)(Qe, {})
                        : t.loadItems !== c.loaded
                        ? Object(s.jsx)(Ve, {})
                        : n
                        ? Object(s.jsx)(Ye, {
                              head: Object(s.jsx)(s.Fragment, {
                                  children:
                                      "\u0412\u0441\u0451 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435",
                              }),
                              navigation: Object(s.jsx)(We, {}),
                              control: Object(s.jsx)(s.Fragment, {}),
                              content: Object(s.jsxs)(s.Fragment, {
                                  children: [
                                      Object(s.jsx)(et, {
                                          children:
                                              "\u0412\u0441\u0451 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435",
                                      }),
                                      Object(s.jsx)($e, { nodes: n, items: r }),
                                      Object(s.jsxs)(tt, {
                                          children: [
                                              "\u0412\u0441\u0435\u0433\u043e \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f: ",
                                              r.size,
                                          ],
                                      }),
                                  ],
                              }),
                          })
                        : Object(s.jsx)(s.Fragment, { children: "404" })
                );
            }
            n(78);
            function ct(e) {
                return e.links
                    ? Object(s.jsx)("div", {
                          className: "controlPanel",
                          children: e.links.map(function (e) {
                              return Object(s.jsx)(He.a, { to: e.url, children: e.label }, e.url + "-" + e.label);
                          }),
                      })
                    : Object(s.jsx)(s.Fragment, {});
            }
            function rt() {
                var e = Pe(),
                    t = Re(de),
                    n = Re(fe),
                    r = Object(ze.g)().nodeId,
                    a = Re(be, r);
                Object(i.useEffect)(
                    function () {
                        a && e(Z([a.id]));
                    },
                    [e, a]
                );
                var o = Re(Ie);
                if (t.loadNodes !== c.loaded) return Object(s.jsx)(Qe, {});
                if (t.loadItems !== c.loaded) return Object(s.jsx)(Ve, {});
                if (a) {
                    var d = [];
                    return (
                        a.descendants ||
                            d.push({
                                url: "/catalog/node/" + a.id + "/create_item",
                                label: Object(s.jsxs)(s.Fragment, {
                                    children: [
                                        Object(s.jsx)(Je.c, {}),
                                        "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435",
                                    ],
                                }),
                            }),
                        Object(s.jsx)(Ye, {
                            head: Object(s.jsxs)(s.Fragment, {
                                children: [
                                    '\u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 "',
                                    a.name,
                                    '"',
                                ],
                            }),
                            navigation: Object(s.jsx)(We, {}),
                            control: Object(s.jsx)(ct, { links: d }),
                            content: Object(s.jsxs)(s.Fragment, {
                                children: [
                                    Object(s.jsxs)(et, {
                                        children: [
                                            '\u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 "',
                                            a.name,
                                            '"',
                                        ],
                                    }),
                                    Object(s.jsx)($e, { nodes: n, items: o }),
                                    Object(s.jsxs)(tt, {
                                        children: [
                                            "\u0412\u0441\u0435\u0433\u043e \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f: ",
                                            o.size,
                                        ],
                                    }),
                                ],
                            }),
                        })
                    );
                }
                return Object(s.jsx)(s.Fragment, { children: "404" });
            }
            var at = n(47);
            n(79);
            function st(e) {
                return Object(s.jsx)(
                    "button",
                    Object(v.a)(Object(v.a)({}, e), {}, { className: "button " + e.className, children: e.children })
                );
            }
            n(80);
            function it(e) {
                return Object(s.jsx)(
                    "input",
                    Object(v.a)(Object(v.a)({}, e), {}, { className: "input " + e.className })
                );
            }
            n(81);
            function ot(e) {
                var t = document.getElementById("modal-root");
                return t
                    ? l.a.createPortal(
                          Object(s.jsx)("div", {
                              id: "openModal",
                              className: "modal",
                              children: Object(s.jsx)("div", {
                                  className: "modalDialog",
                                  children: Object(s.jsxs)("div", {
                                      className: "modalContent",
                                      children: [
                                          Object(s.jsxs)("div", {
                                              className: "modal-header",
                                              children: [
                                                  Object(s.jsx)("h3", { className: "modalTitle", children: e.title }),
                                                  Object(s.jsx)("span", {
                                                      title: "Close",
                                                      className: "close",
                                                      onClick: e.onClose,
                                                      children: "\xd7",
                                                  }),
                                              ],
                                          }),
                                          Object(s.jsx)("div", { className: "modalBody", children: e.children }),
                                      ],
                                  }),
                              }),
                          }),
                          t
                      )
                    : Object(s.jsx)(s.Fragment, {});
            }
            n(82);
            function dt(e) {
                var t = Pe(),
                    n = Object(i.useState)(e.item),
                    c = Object(at.a)(n, 2),
                    a = c[0],
                    o = c[1],
                    d = !Object(g.c)(a, e.item),
                    l = Re(de),
                    u = Object(i.useState)(!1),
                    j = Object(at.a)(u, 2),
                    b = j[0],
                    O = j[1];
                return (
                    Object(i.useEffect)(
                        function () {
                            t(G("saveItem", d ? r.notSaved : r.saved));
                        },
                        [t, d]
                    ),
                    Object(s.jsxs)("div", {
                        className: "form-item",
                        children: [
                            Object(s.jsxs)("div", {
                                className: "field name",
                                children: [
                                    Object(s.jsx)("div", {
                                        className: "label",
                                        children: "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:",
                                    }),
                                    Object(s.jsx)("div", {
                                        className: "value",
                                        children: Object(s.jsx)(it, {
                                            value: a.name,
                                            onChange: function (e) {
                                                return o(a.set("name", e.currentTarget.value));
                                            },
                                        }),
                                    }),
                                ],
                            }),
                            Object(s.jsxs)("div", {
                                className: "field count",
                                children: [
                                    Object(s.jsx)("div", {
                                        className: "label",
                                        children: "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e:",
                                    }),
                                    Object(s.jsx)("div", {
                                        className: "value",
                                        children: Object(s.jsx)(it, {
                                            value: String(a.count),
                                            onChange: function (e) {
                                                return o(a.set("count", Number(e.currentTarget.value)));
                                            },
                                            type: "number",
                                            min: "1",
                                        }),
                                    }),
                                ],
                            }),
                            Object(s.jsxs)("div", {
                                className: "buttons",
                                children: [
                                    Object(s.jsxs)(st, {
                                        className: "buttonSave",
                                        onClick: function () {
                                            return e.handleSave(a);
                                        },
                                        children: [
                                            (l.saveItem === r.notSaved || l.saveItem === r.errorServer) &&
                                                Object(s.jsx)(Je.b, {}),
                                            l.saveItem === r.saved && Object(s.jsx)(Je.a, {}),
                                            l.saveItem === r.save &&
                                                Object(s.jsx)(Je.f, { className: "preloaderIcon" }),
                                            "create" === e.typeForm &&
                                                "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",
                                            "edit" === e.typeForm &&
                                                "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",
                                        ],
                                    }),
                                    "function" === typeof e.handleDelete &&
                                        Object(s.jsxs)(s.Fragment, {
                                            children: [
                                                b &&
                                                    Object(s.jsx)(ot, {
                                                        title:
                                                            "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435?",
                                                        onClose: function () {
                                                            return O(!1);
                                                        },
                                                        children: Object(s.jsxs)("div", {
                                                            className: "wrapperButtons",
                                                            children: [
                                                                Object(s.jsx)("button", {
                                                                    onClick: function () {
                                                                        return e.handleDelete(e.item.id);
                                                                    },
                                                                    children: "\u0414\u0430",
                                                                }),
                                                                Object(s.jsx)("button", {
                                                                    onClick: function () {
                                                                        return O(!1);
                                                                    },
                                                                    children: "\u041d\u0435\u0442",
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                Object(s.jsxs)(st, {
                                                    className: "buttonDelete",
                                                    onClick: function () {
                                                        return O(!0);
                                                    },
                                                    children: [
                                                        Object(s.jsx)(Je.h, {}),
                                                        "\u0423\u0434\u0430\u043b\u0438\u0442\u044c",
                                                    ],
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    })
                );
            }
            function lt(e) {
                var t = Pe();
                return Object(s.jsx)(dt, {
                    typeForm: "create",
                    item: e.item,
                    handleSave: function (e) {
                        t(
                            (function (e) {
                                return { type: M, item: e };
                            })(e)
                        );
                    },
                });
            }
            function ut() {
                var e = Re(de),
                    t = Object(ze.g)().nodeId,
                    n = Re(be, t),
                    r = n ? new Me(Object(v.a)(Object(v.a)({}, Le), {}, { nodeId: n.id })) : void 0;
                if (e.loadNodes !== c.loaded) return Object(s.jsx)(Qe, {});
                if (e.loadItems !== c.loaded) return Object(s.jsx)(Ve, {});
                if (r && n) {
                    var a = [
                        {
                            url: "/catalog/node/" + n.id,
                            label: Object(s.jsxs)(s.Fragment, {
                                children: [Object(s.jsx)(Je.d, {}), "\u041d\u0430\u0437\u0430\u0434"],
                            }),
                        },
                    ];
                    return Object(s.jsx)(Ye, {
                        head: Object(s.jsxs)(s.Fragment, {
                            children: [
                                '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 "',
                                n.name,
                                '"',
                            ],
                        }),
                        navigation: Object(s.jsx)(We, {}),
                        control: Object(s.jsx)(ct, { links: a }),
                        content: Object(s.jsxs)(s.Fragment, {
                            children: [
                                Object(s.jsxs)(et, {
                                    children: [
                                        '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 "',
                                        n.name,
                                        '"',
                                    ],
                                }),
                                Object(s.jsx)(lt, { item: r }),
                            ],
                        }),
                    });
                }
                return Object(s.jsx)(s.Fragment, { children: "404" });
            }
            function jt(e) {
                var t = Pe();
                return Object(s.jsx)(dt, {
                    typeForm: "edit",
                    item: e.item,
                    handleSave: function (e) {
                        t(
                            (function (e, t) {
                                return { type: q, id: e, item: t };
                            })(e.id, e)
                        );
                    },
                    handleDelete: function (e) {
                        t(
                            (function (e) {
                                return { type: P, id: e };
                            })(e)
                        );
                    },
                });
            }
            function bt() {
                var e = Re(de),
                    t = Object(ze.g)().itemId,
                    n = Re(ge, t),
                    r = Re(be, null === n || void 0 === n ? void 0 : n.nodeId),
                    a = Re(xe);
                if (e.loadNodes !== c.loaded) return Object(s.jsx)(Qe, {});
                if (e.loadItems !== c.loaded) return Object(s.jsx)(Ve, {});
                if (n && r) {
                    var i = [
                        {
                            url: "/catalog/node/" + r.id,
                            label: Object(s.jsxs)(s.Fragment, {
                                children: [
                                    Object(s.jsx)(Je.d, {}),
                                    '\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 "',
                                    r.name,
                                    '"',
                                ],
                            }),
                        },
                    ];
                    return (
                        a &&
                            a.id !== r.id &&
                            i.unshift({
                                url: "/catalog/node/" + a.id,
                                label: Object(s.jsxs)(s.Fragment, {
                                    children: [
                                        Object(s.jsx)(Je.d, {}),
                                        '\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 "',
                                        a.name,
                                        '"',
                                    ],
                                }),
                            }),
                        Object(s.jsx)(Ye, {
                            head: Object(s.jsxs)(s.Fragment, {
                                children: [
                                    '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 "',
                                    n.name,
                                    '"',
                                ],
                            }),
                            navigation: Object(s.jsx)(We, {}),
                            control: Object(s.jsx)(ct, { links: i }),
                            content: Object(s.jsxs)(s.Fragment, {
                                children: [
                                    Object(s.jsxs)(et, {
                                        children: [
                                            '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 "',
                                            n.name,
                                            '"',
                                        ],
                                    }),
                                    Object(s.jsx)(jt, { item: n }),
                                ],
                            }),
                        })
                    );
                }
                return Object(s.jsx)(s.Fragment, { children: "404" });
            }
            n(83), n(84);
            var Ot,
                mt = function () {
                    return Object(s.jsx)("div", {
                        className: "app",
                        children: Object(s.jsxs)(ze.d, {
                            children: [
                                Object(s.jsx)(ze.b, {
                                    exact: !0,
                                    path: "/",
                                    children: Object(s.jsx)(ze.a, { to: "/catalog" }),
                                }),
                                Object(s.jsx)(ze.b, { exact: !0, path: "/catalog", component: nt }),
                                Object(s.jsx)(ze.b, { exact: !0, path: "/catalog/node/:nodeId", component: rt }),
                                Object(s.jsx)(ze.b, {
                                    exact: !0,
                                    path: "/catalog/node/:nodeId/create_item",
                                    component: ut,
                                }),
                                Object(s.jsx)(ze.b, { exact: !0, path: "/catalog/item/:itemId", component: bt }),
                            ],
                        }),
                    });
                },
                ft = Object(b.b)(),
                xt = Object(f.a)(),
                vt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || u.d,
                ht = Object(u.e)(X(ft), vt(Object(u.a)(xt, Object(O.a)(ft))));
            xt.run(
                ((Ot = qe),
                V.a.mark(function e() {
                    return V.a.wrap(function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), Object(Y.a)([te(Ot), Ce(Ot)]);
                                case 2:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                }))
            ),
                l.a.render(
                    Object(s.jsx)(o.a.StrictMode, {
                        children: Object(s.jsx)(j.a, {
                            store: ht,
                            children: Object(s.jsx)(m.a, { history: ft, children: Object(s.jsx)(mt, {}) }),
                        }),
                    }),
                    document.getElementById("root")
                );
        },
    },
    [[85, 1, 2]],
]);
//# sourceMappingURL=main.6d71fa79.chunk.js.map
