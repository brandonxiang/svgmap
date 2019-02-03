import{__assign as o}from"tslib";import r from"@svgdotjs/svg.js/src/svg";console.log(r);var t={fill:"#7fc8ff",stroke:{color:"#fff",width:1}};export default function(f){var s=o({},t,f),e=r().size(s.width,s.height),i=s.source;return Object.keys(i).forEach(function(o){var r=i[o];e.path(r).fill(s.fill).stroke(s.stroke)}),e}
//# sourceMappingURL=lite.mjs.map
