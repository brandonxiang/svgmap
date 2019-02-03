import{__assign as t}from"tslib";import r from"snapsvg";var f={fill:"#7fc8ff",stroke:"#fff",strokeWidth:1};export default function(o){var e=t({},f,o),i=r(e.width,e.height),s=e.source;return Object.keys(s).forEach(function(t){var r=s[t];i.paper.path(r).attr({fill:e.fill,stroke:e.stroke,strokeWidth:e.strokeWidth})}),i}
//# sourceMappingURL=lite.mjs.map
