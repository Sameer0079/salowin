!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="../build/css/scripts/",r(r.s=4)}([function(e,t,r){"use strict";function n(){var e=/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,t=document.querySelector("body");navigator.userAgent.match(e)&&t.classList.add("is-mobile");!function(){var e=document.querySelector(".header-wrapper .user-cart"),t=document.querySelector(".body-wrapper .cart-wrapper");e&&e.addEventListener("click",function(){t.classList.add("open")});var r=document.querySelector(".cart-wrapper .svg-close");r&&r.addEventListener("click",function(){t.classList.remove("open")})}()}r.r(t),r.d(t,"default",function(){return n})},,,,function(e,t,r){"use strict";r.r(t);var n=r(0);Object(n.default)();var o=new Proxy(new URLSearchParams(window.location.search),{get:function(e,t){return e.get(t)}});if(o.step){var c=document.getElementById(o.step),i=document.querySelector(".checkout-steps"),a=document.querySelector(".checkout-steps .active");if(a&&a.classList.remove("active"),i.querySelector("."+o.step).classList.add("active"),c)document.querySelectorAll(".section-wrapper").forEach(function(e){e.classList.add("hide")}),c.classList.remove("hide");else console.log("no param")}!function(){console.log("Checkout page");var e=document.querySelector(".billing-address #billing_info"),t=document.querySelector(".billing-address .billing-block");e.addEventListener("change",function(r){e.checked?t.classList.remove("hide"):t.classList.add("hide")}),document.querySelectorAll(".address-wrapper .input-control").forEach(function(e){e.addEventListener("input",function(t){var r=e;r.value.length?r.parentElement.classList.add("active"):r.parentElement.classList.remove("active"),console.log(r.value.length)})}),document.querySelectorAll(".payment-method .radio-input").forEach(function(e){e.addEventListener("change",function(t){var r=e,n=r.value;if(console.log(r.value),null!=n){var o=document.querySelector(".payment-method-list").querySelector("."+n),c=document.querySelector(".payment-method-list .payment-method.selected");c&&c.classList.remove("selected"),o.classList.add("selected")}})})}()}]);