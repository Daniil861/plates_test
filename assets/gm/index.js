System.register("chunks:///_virtual/gm",["./GMDataItem.ts","./GMDataUI.ts","./GMUI.ts"],(function(){return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/GMDataItem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Main.ts"],(function(t){var i,e,n,a,c,o;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy},function(t){n=t.ccclass,a=t.menu,c=t._ui,o=t.BaseComponent}],execute:function(){var s;e._RF.push({},"a3c6ciCEHtKDq/LeCt32H+O","GMDataItem",void 0);t("GMDataItem",n("GMDataItem")(s=a("gm/GMDataItem")(s=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return(i=t.call.apply(t,[this].concat(n))||this).cLabelDec=null,i.data=null,i}i(e,t);var n=e.prototype;return n.init=function(t){this.data=t,this.cLabelDec.string=t.dec,this.EditBox.node.active=!!t.inputTip,t.inputTip&&(this.EditBox.placeholder=t.inputTip)},n.onClickItem=function(){c.close("gm/prefab/GMDataUI"),this.data.click(this.EditBox.string)},e}(o))||s)||s);e._RF.pop()}}}));

System.register("chunks:///_virtual/GMDataUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Main.ts","./GMDataItem.ts"],(function(t){var n,a,e,r,o,c,i,s;return{setters:[function(t){n=t.inheritsLoose},function(t){a=t.cclegacy},function(t){e=t.ccclass,r=t.menu,o=t._gm,c=t.EUILayer,i=t.BaseUI},function(t){s=t.GMDataItem}],execute:function(){var u;a._RF.push({},"014b75lo6VCQYf5Qr/+Fv3I","GMDataUI",void 0);t("GMDataUI",e("GMDataUI")(u=r("gm/GMDataUI")(u=function(t){function a(){for(var n,a=arguments.length,e=new Array(a),r=0;r<a;r++)e[r]=arguments[r];return(n=t.call.apply(t,[this].concat(e))||this).layerType=c.Top,n}return n(a,t),a.prototype.onOpen=function(){this.ListCC.render(o.getDatas(),s,(function(t,n){t.init(n)}))},a}(i))||u)||u);a._RF.pop()}}}));

System.register("chunks:///_virtual/GMUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Main.ts"],(function(e){var n,t,r,c,o,i,u,a;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy},function(e){r=e.ccclass,c=e.menu,o=e._scene,i=e._ui,u=e.EUILayer,a=e.BaseUI}],execute:function(){var s;t._RF.push({},"54eb4qWubJAeK4+Q44ywZ9X","GMUI",void 0);e("GMUI",r("GMUI")(s=c("gm/GMUI")(s=function(e){function t(){for(var n,t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(n=e.call.apply(e,[this].concat(r))||this).layerType=u.Top,n}return n(t,e),t.prototype.onClickBtn=function(){o.isProChange||i.open("gm/prefab/GMDataUI")},t}(a))||s)||s);t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/gm', 'chunks:///_virtual/gm'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});