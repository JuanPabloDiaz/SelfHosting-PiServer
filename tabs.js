// Chapter Tabs

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
//  END Chapter Tabs

/* --------------------------------------------------------------------------- */

// accordion Tabs
// https://www.cssscript.com/demo/responsive-tabs-accordion/
document.addEventListener("DOMContentLoaded", () => {
  // createaccordion
  new VanillaTabs({
    selector: "#tabs-a", // default is ".tabs"
    type: "accordion", // can be horizontal / vertical / accordion
    responsiveBreak: 840, // tabs become accordion on this device width
    activeIndex: -1, // active tab index (starts from 0 ). Can be -1 for accordions.
  });
});

// Script para mostrar:
("use strict");
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var s = 0; s < t.length; s++) {
    var a = t[s];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function _createClass(e, t, s) {
  return (
    t && _defineProperties(e.prototype, t), s && _defineProperties(e, s), e
  );
}
var VanillaTabs = (function () {
  function e(t) {
    _classCallCheck(this, e);
    (this.options = Object.assign(
      {
        selector: ".tabs",
        type: "horizontal",
        responsiveBreak: 840,
        activeIndex: 0,
      },
      t
    )),
      (this.elems = document.querySelectorAll(this.options.selector)),
      (this.skipIfInitialized = function (e) {
        e.classList.contains("tabs__initialized");
      }),
      this.buildUI(),
      this.handleNavigation(),
      this.handleResponsive();
  }
  return (
    _createClass(e, [
      {
        key: "buildUI",
        value: function () {
          var e = this;
          this.elems.forEach(function (t, s) {
            var a = t,
              i = a.childNodes,
              n = [],
              r = e.options.type;
            e.skipIfInitialized(a),
              a.classList.add("style__" + e.options.type),
              a.classList.add("tabs__initialized");
            for (var l = 0; l < i.length; l++) {
              var c = i[l];
              if (c.nodeType != Node.TEXT_NODE) {
                c.classList.add("tabs__content");
                var o = c.dataset.title ? c.dataset.title : "";
                n.push(o);
                var _ = c.innerHTML;
                (c.innerHTML =
                  '<div class="tabs__content_wrapper">' + _ + "</div>"),
                  c.insertAdjacentHTML(
                    "afterbegin",
                    '<a class="tabs__nav_link">' + o + "</a>"
                  );
              }
            }
            var v = "";
            n.forEach(function (e) {
              v = v + '<a class="tabs__nav_link">' + e + "</a>";
            }),
              a.insertAdjacentHTML(
                "afterbegin",
                '<li class="tabs__nav">' + v + "</li>"
              );
            var d = Number(e.options.activeIndex);
            "accordion" != r &&
              -1 != d &&
              (d > n.length - 1 &&
                (console.warn(
                  "VANILLA TABS: Active tab number from settings is bigger than tabs count. Please remember, that index starts from Zero! To avoid crashes, activeIndex option was reverted to 0."
                ),
                (d = 0)),
              a
                .querySelectorAll(".tabs__nav > .tabs__nav_link")
                [d].classList.add("is__active"),
              a
                .querySelectorAll(".tabs__content")
                [d].classList.add("is__active"),
              a
                .querySelectorAll(".tabs__content > .tabs__nav_link")
                [d].classList.add("is__active"));
          });
        },
      },
      {
        key: "handleNavigation",
        value: function () {
          var e = this,
            t = this.elems,
            s = this.options.type;
          t.forEach(function (t, a) {
            var i = t;
            e.skipIfInitialized(i),
              i.addEventListener("click", function (e) {
                if (e.target && e.target.classList.contains("tabs__nav_link")) {
                  var t;
                  e.preventDefault(),
                    (t =
                      "tabs__nav" == e.target.parentElement.classList
                        ? Array.prototype.slice
                            .call(e.target.parentElement.children)
                            .indexOf(e.target)
                        : Array.prototype.slice
                            .call(e.target.parentElement.parentElement.children)
                            .indexOf(e.target.parentElement) - 1);
                  var a = i.getElementsByClassName("tabs__content"),
                    n = i.querySelectorAll(".tabs__nav > .tabs__nav_link"),
                    r = i.querySelectorAll(".tabs__content > .tabs__nav_link");
                  if (
                    ("accordion" == s ||
                      i.classList.contains("is__responsive")) &&
                    e.target.classList.contains("is__active")
                  )
                    return (
                      a[t].classList.remove("is__active"),
                      n[t].classList.remove("is__active"),
                      void r[t].classList.remove("is__active")
                    );
                  for (var l = 0; l < a.length; l++)
                    a[l].classList.remove("is__active");
                  a[t].classList.add("is__active"),
                    n.forEach(function (e) {
                      e.classList.remove("is__active");
                    }),
                    n[t].classList.add("is__active"),
                    r.forEach(function (e) {
                      e.classList.remove("is__active");
                    }),
                    r[t].classList.add("is__active");
                }
              });
          });
        },
      },
      {
        key: "handleResponsive",
        value: function () {
          var e = this,
            t = this.elems,
            s = this.options.type;
          window.addEventListener("resize", function () {
            t.forEach(function (t, a) {
              var i = t,
                n = i.getElementsByClassName("tabs__content"),
                r = i.querySelectorAll(".tabs__nav > .tabs__nav_link"),
                l = i.querySelectorAll(".tabs__content > .tabs__nav_link");
              (e.skipIfInitialized(i),
              window.innerWidth > Number(e.options.responsiveBreak))
                ? (i.classList.remove("is__responsive"),
                  "accordion" != s &&
                    0 ==
                      i.querySelectorAll(".tabs__nav_link.is__active").length &&
                    (n[0].classList.add("is__active"),
                    r[0].classList.add("is__active"),
                    l[0].classList.add("is__active")))
                : i.classList.add("is__responsive");
            });
          }),
            window.dispatchEvent(new Event("resize"));
        },
      },
    ]),
    e
  );
})();

// END accordion Tabs
