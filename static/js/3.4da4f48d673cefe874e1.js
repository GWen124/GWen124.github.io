webpackJsonp([3], {
  821: function (t, e, n) {
    function a(t) {
      n(847)
    }

    var o = n(85)(n(833), n(862), a, "data-v-484895fa", null);
    t.exports = o.exports
  },
  833: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
      data: function () {
        return {renderedMarkdown: ""}
      },
      methods: {
        getReadme: function () {
          var t = this;
          this.$gitHubApi.getReadme(this).then(function (e) {
            e.data && (t.renderedMarkdown = t.$marked(e.data))
          })
        }
      },
      mounted: function () {
        var t = this;
        this.$nextTick(function () {
          t.getReadme()
        })
      }
    }
  },
  839: function (t, e, n) {
    e = t.exports = n(818)(!1), e.push([t.i, ".about-me[data-v-484895fa]{width:calc(100% - 260px);-ms-flex-positive:1;flex-grow:1;padding:30px;overflow-y:auto}", ""])
  },
  847: function (t, e, n) {
    var a = n(839);
    "string" == typeof a && (a = [[t.i, a, ""]]), a.locals && (t.exports = a.locals);
    n(819)("7b244cca", a, !0, {})
  },
  862: function (t, e) {
    t.exports = {
      render: function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", {staticClass: "about-me bga-back-top"}, [n("article", {
          staticClass: "markdown-body",
          domProps: {innerHTML: t._s(t.renderedMarkdown)}
        })])
      },
      staticRenderFns: []
    }
  }
});
