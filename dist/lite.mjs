import e from"@svgdotjs/svg.js/src/svg";var i={shapes:{},names:{},properties:{},fill:"#7fc8ff",highlight:"#fc0",highlightSpeed:200,stroke:{color:"#eee",width:1},showTip:!1,hoverCallback:function(){},clickCallback:function(){}};export default function(t){var o=Object.assign({},i,t),l=e().size(o.width,o.height),n=o.shapes;return Object.keys(n).forEach(function(e){var i=n[e];l.path(i).fill(o.fill).stroke(o.stroke).on("mouseover",function(e){this.animate(o.highlightSpeed,"<>").fill(o.highlight)}).on("mousemove",function(i){o.hoverCallback(i,{name:o.names[e]||"",property:o.properties[e]||""})}).on("click",function(i){o.clickCallback(i,{name:o.names[e]||"",property:o.properties[e]||""})}).on("mouseout",function(e){this.animate(o.highlightSpeed,"<>").fill(o.fill)})}),l}
//# sourceMappingURL=lite.mjs.map
