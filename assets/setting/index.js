System.register("chunks:///_virtual/setting",["./SettingUI.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/SettingUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Main.ts","./GameDefine.ts","./Adapt.ts"],(function(t){var e,i,n,c,o,s,l,u,a,h,r,d,C,p,g,m;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Widget},function(t){c=t.ccclass,o=t._platform,s=t.EBottomAdType,l=t.EPlatformType,u=t._guide,a=t._gameType,h=t._privacy,r=t._audio,d=t.EUILayer,C=t.EBlockOnceAdType,p=t.BaseUI},function(t){g=t.initData},function(t){m=t.Adapt}],execute:function(){var f;i._RF.push({},"52af3yS6apPi5dNpKPnKLiB","SettingUI",void 0);t("SettingUI",c("SettingUI")(f=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))||this).layerType=d.Panel,e.blockOnceAdType=C.Show,e.cSwitchChildrenCC_music=null,e.cSwitchChildrenCC_sound=null,e.cSwitchChildrenCC_btn=null,e.cBtns=null,e.cAUser=null,e.cADec=null,e}e(i,t);var c=i.prototype;return c.onCreate=function(){switch(this.setStartWidgetPolitic(),o.type){case l.wx:case l.vivo:case l.oppo:this.bottomAdType=s.Native;break;default:this.bottomAdType=s.Banner}},c.setStartWidgetPolitic=function(){var t=this.node.parent;t.addComponent(n);var e=this.node.getChildByName("MaskOpacityUI");e.addComponent(n),m.setWidgetPolitic(t.getComponent(n),!0),m.setWidgetPolitic(e.getComponent(n),!0),m.setWidgetPolitic(this.node.getComponent(n),!0)},c.onOpen=function(){this.updateView(),u.closeFinger(),g.openPrivacy?(this.cAUser.active=!0,this.cADec.active=!0):(this.cAUser.active=!1,this.cADec.active=!1),a.isRun?this.cSwitchChildrenCC_btn.index=0:this.cSwitchChildrenCC_btn.index=1},c.onClickReset=function(){a.hasRun()&&(this.closeUI(),a.reset())},c.onClickExit=function(){this.closeUI(),a.settingExit()},c.onClickAUser=function(){h.openUserUI()},c.onClickADec=function(){h.openDecUI()},c.onClickSwitchChildrenCC_music=function(){1==r.getVolume(!0)?r.setVolume(!0,0):r.setVolume(!0,1),this.updateView()},c.onClickSwitchChildrenCC_sound=function(){1==r.getVolume(!1)?r.setVolume(!1,0):r.setVolume(!1,1),this.updateView()},c.updateView=function(){1==r.getVolume(!0)?this.cSwitchChildrenCC_music.index=0:this.cSwitchChildrenCC_music.index=1,1==r.getVolume(!1)?this.cSwitchChildrenCC_sound.index=0:this.cSwitchChildrenCC_sound.index=1},i}(p))||f);i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/setting', 'chunks:///_virtual/setting'); 
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