System.register("chunks:///_virtual/Adapt.ts",["cc"],(function(i){var t,e,o,n;return{setters:[function(i){t=i.cclegacy,e=i.view,o=i.ResolutionPolicy,n=i.Widget}],execute:function(){t._RF.push({},"89b5eZWZ7VBEJqIcaJA7l54","Adapt",void 0);var s=i("Adapt",function(){function i(){}return i.setGameSizePC=function(){e.setDesignResolutionSize(this.SCREEN_WIDTH_PC,this.SCREEN_HEIGHT_PC,o.FIXED_HEIGHT)},i.setGameSizeMobile=function(){e.setDesignResolutionSize(this.SCREEN_WIDTH_MOB,this.SCREEN_HEIGHT_MOB,o.FIXED_WIDTH)},i.setHeightDesignResolution=function(){e.setResolutionPolicy(o.FIXED_HEIGHT)},i.setWidthDesignResolution=function(){e.setResolutionPolicy(o.FIXED_WIDTH)},i.setHeighthDesignResolutionMob=function(){e.setDesignResolutionSize(this.SCREEN_WIDTH_MOB,this.SCREEN_HEIGHT_MOB,o.FIXED_HEIGHT)},i.getRatio=function(){return e.getViewportRect().height/e.getViewportRect().width},i.checkAspectRatioGame=function(i){var t=e.getFrameSize().height/e.getFrameSize().width,s=null==i?void 0:i.getComponent(n);if(t<1.6){if(e.setDesignResolutionSize(720,1120,o.FIXED_HEIGHT),!s)return;this.setWidgetPolitic(s,!1)}else if(t<1.7){if(e.setDesignResolutionSize(720,1180,o.FIXED_HEIGHT),!s)return;this.setWidgetPolitic(s,!1)}else{if(e.setDesignResolutionSize(720,1280,o.FIXED_WIDTH),!s)return;this.setWidgetPolitic(s,!0)}},i.setWidgetPolitic=function(i,t){i.isAlignLeft=t,i.isAlignRight=t,i.isAlignBottom=t,i.isAlignTop=t},i.setWidgetPoliticHorizontal=function(i,t){i.isAlignLeft=t,i.isAlignRight=t,i.isAlignBottom=!t,i.isAlignTop=!t},i.setWidgetPoliticVertical=function(i,t){i.isAlignBottom=t,i.isAlignTop=t,i.isAlignLeft=!t,i.isAlignRight=!t},i}());s.SCREEN_WIDTH_MOB=void 0,s.SCREEN_HEIGHT_MOB=void 0,s.SCREEN_WIDTH_PC=void 0,s.SCREEN_HEIGHT_PC=void 0,s.MAX_RATIO_MOBILE=void 0,t._RF.pop()}}}));

System.register("chunks:///_virtual/AdaptiveBg.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var t,e,n,o,s,g,h,r,d;return{setters:[function(i){t=i.inheritsLoose},function(i){e=i.cclegacy,n=i._decorator,o=i.Widget,s=i.Sprite,g=i.screen,h=i.view,r=i.UITransform,d=i.Component}],execute:function(){var a;e._RF.push({},"1fde2lr8S9CLo3hwled+D0R","AdaptiveBg",void 0);var c=n.ccclass,f=(n.property,function(i){return i[i.fitWidth=0]="fitWidth",i[i.firHeight=1]="firHeight",i}(f||{}));i("default",c("AdaptiveBg")(a=function(i){function e(){for(var t,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=i.call.apply(i,[this].concat(n))||this).originWidth=void 0,t.originHeight=void 0,t.originRatio=void 0,t.widget=void 0,t}t(e,i);var n=e.prototype;return n.onLoad=function(){this.checkDevice()},n.checkDevice=function(){this.setWidgetStartSettings(),this.saveOriginSizeInformation(),this.setWidgetStartResolution(),this.initListeners()},n.setWidgetStartSettings=function(){this.widget=this.node.getComponent(o),this.widget.left=0,this.widget.right=0,this.widget.top=0,this.widget.bottom=0},n.saveOriginSizeInformation=function(){this.originWidth=this.node.getComponent(s).spriteFrame.originalSize.width,this.originHeight=this.node.getComponent(s).spriteFrame.originalSize.height,this.originRatio=this.originWidth/this.originHeight},n.setWidgetStartResolution=function(){this.isViewportRatioMoreOriginBgRatio()?this.setWidgetAlign(f.fitWidth):this.setWidgetAlign(f.firHeight)},n.initListeners=function(){g.on("window-resize",this.onResize,this),g.on("orientation-change",this.onResize,this),g.on("fullscreen-change",this.onResize,this)},n.onResize=function(){this.setSize()},n.setWidgetAlign=function(i){i===f.fitWidth?(this.widget.isAlignLeft=!0,this.widget.isAlignRight=!0,this.widget.isAlignBottom=!1,this.widget.isAlignTop=!1):i===f.firHeight&&(this.widget.isAlignLeft=!1,this.widget.isAlignRight=!1,this.widget.isAlignBottom=!0,this.widget.isAlignTop=!0)},n.start=function(){this.setSize()},n.isViewportRatioMoreOriginBgRatio=function(){return h.getViewportRect().width/h.getViewportRect().height>=this.originRatio},n.setSize=function(){if(this.isViewportRatioMoreOriginBgRatio()){this.setWidgetAlign(f.fitWidth);var i=this.node.getComponent(r).contentSize.width,t=i/this.originWidth,e=this.originHeight*t;this.node.getComponent(r).setContentSize(i,e)}else{this.setWidgetAlign(f.firHeight);var n=this.node.getComponent(r).contentSize.height,o=n/this.originHeight,s=this.originWidth*o;this.node.getComponent(r).setContentSize(s,n)}},e}(d))||a);e._RF.pop()}}}));

System.register("chunks:///_virtual/AdsController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,a,t,r,s;return{setters:[function(e){n=e.createClass,a=e.asyncToGenerator,t=e.regeneratorRuntime},function(e){r=e.cclegacy,s=e.game}],execute:function(){r._RF.push({},"b5493a1cvdNA5Qbe9hmXuk5","AdsController",void 0);var u=e("default",function(){function e(){}return e.init=function(){var n=a(t().mark((function n(){return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n,a){gamePushInstance&&!e._gamePushInstance?(e._gamePushInstance=gamePushInstance,n(!0)):a("Load failed")})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),e.getPlatform=function(){return e._gamePushInstance.platform.type},e.showInterstitial=function(){return new Promise((function(n,a){e._gamePushInstance.ads.isFullscreenAvailable&&(e._gamePushInstance.ads.on("fullscreen:start",(function(){return e._pauseGame()})),e._gamePushInstance.ads.showFullscreen().then((function(a){return e._resumeGame(),e._gamePushInstance.ads.off("fullscreen:start",(function(){return e._pauseGame()})),n(!!a)})))}))},e.showRewarded=function(){return new Promise((function(n,a){e._gamePushInstance.ads.isRewardedAvailable&&(e._gamePushInstance.ads.on("rewarded:start",(function(){return e._pauseGame()})),e._gamePushInstance.ads.showRewardedVideo().then((function(a){return e._resumeGame(),e._gamePushInstance.ads.off("rewarded:start",(function(){return e._pauseGame()})),n(!!a)})))}))},e.showPreloader=function(){return new Promise((function(n,a){e._gamePushInstance.ads.isPreloaderAvailable&&(e._gamePushInstance.ads.on("preloader:start",(function(){return e._pauseGame()})),e._gamePushInstance.ads.showPreloader().then((function(){return e._resumeGame(),e._gamePushInstance.ads.off("preloader:start",(function(){return e._pauseGame()})),n(!0)})))}))},e._resumeGame=function(){s.resume()},e._pauseGame=function(){s.pause()},e.inviteFriends=function(){e._gamePushInstance.socials&&e._gamePushInstance.socials.invite()},e.isAdsActive=function(){return!!e._gamePushInstance&&(e._gamePushInstance.ads.isFullscreenPlaying||e._gamePushInstance.ads.isRewardedPlaying)},e.makePayment=function(){var n=a(t().mark((function n(a,r){return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e._gamePushInstance){n.next=2;break}return n.abrupt("return",!1);case 2:return n.next=4,e._gamePushInstance.payments.purchase({id:a});case 4:return n.sent,n.next=7,e._gamePushInstance.payments.consume({id:a});case 7:n.sent.success;case 9:case"end":return n.stop()}}),n)})));return function(e,a){return n.apply(this,arguments)}}(),e.fetchProducts=function(){var n=a(t().mark((function n(){var r,s;return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e._gamePushInstance){n.next=2;break}return n.abrupt("return",!1);case 2:return n.next=4,e._gamePushInstance.payments.fetchProducts();case 4:(r=n.sent).products,(s=r.playerPurchases).length&&s.forEach(a(t().mark((function e(n){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.payload&&n.payload.signature;case 1:case"end":return e.stop()}}),e)}))));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),e.loadPlayerData=function(){var n=a(t().mark((function n(){return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e._gamePushInstance){n.next=2;break}return n.abrupt("return",!1);case 2:return n.abrupt("return",new Promise((function(n,a){e._gamePushInstance.player.load(),e._gamePushInstance.player.on("load",(function(e){e?n(!0):a("Load failed")}))})));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),e.getPlayerData=function(n){if(!e._gamePushInstance)return!1;var a=e._gamePushInstance.player.get(n);return a||null},e.setPlayerData=function(n,a){if(!e._gamePushInstance)return!1;e._gamePushInstance.player.set(n,a),e._gamePushInstance.player.sync()},e.debounce=function(e,n){var a;return function(){for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];function u(){e.apply(this,r)}clearTimeout(a),a=setTimeout(u,n)}},n(e,null,[{key:"instance",get:function(){return e._gamePushInstance}}]),e}());u._gamePushInstance=null,u._debounceData=void 0,r._RF.pop()}}}));

System.register("chunks:///_virtual/App.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Adapt.ts","./GameDefine.ts"],(function(t){var e,i,n,o,a,r,s,c,p,l,u;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.assetManager,o=t._decorator,a=t.sys,r=t.Label,s=t.Sprite,c=t.lerp,p=t.Component},function(t){l=t.Adapt},function(t){u=t.initData}],execute:function(){var d;i._RF.push({},"58b33ofog1FMrIrVcp3Kdyz","App",void 0);var h=!1;h||(h=!0,console.log("load bundle main "+Date.now()),n.loadBundle("main2"));var g=o.ccclass,f=(o.property,o.menu);t("App",g("App")(d=f("App")(d=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).spriteRatio=null,e.ratio=0,e}e(i,t);var n=i.prototype;return n.onLoad=function(){this.checkDevice()},n.checkDevice=function(){a.isMobile?l.setWidthDesignResolution():l.setHeightDesignResolution()},n.__preload=function(){var t=this.node.getChildByName("Loading"),e=t.getChildByName("Ratio"),i=t.getChildByName("BottomDec");u.versionId&&u.showLoadingText?(i.active=!0,i.getComponentInChildren(r).string=u.versionId):i.active=!1,this.spriteRatio=e.getChildByName("Bg").getComponentInChildren(s),this.updateRatio()},n.updateRatio=function(){this.spriteRatio.fillRange=this.ratio},n.update=function(t){this.ratio=c(this.ratio,1,.005),this.updateRatio()},i}(p))||d)||d);i._RF.pop()}}}));

System.register("chunks:///_virtual/CameraByCanvasSize.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,r,a,t,o,c;return{setters:[function(e){n=e.inheritsLoose},function(e){r=e.cclegacy,a=e.Vec3,t=e._decorator,o=e.Camera,c=e.Component}],execute:function(){var i;r._RF.push({},"ebc06dLnPFMT7c69SZ6gOQu","CameraByCanvasSize",void 0);new a;var s=t.ccclass,u=(t.property,t.requireComponent);e("CameraByCanvasSize",s("CameraByCanvasSize")(i=u(o)(i=function(e){function r(){return e.apply(this,arguments)||this}return n(r,e),r.prototype.__preload=function(){},r}(c))||i)||i);r._RF.pop()}}}));

System.register("chunks:///_virtual/CCImport.ts",["cc","./env"],(function(){var e,t,r,a,n,o,i,s,c,d,u,l,C,p,m,S,v,w,y,g,I,M,E,T,V,R,B,b,h,A,D,x,_,f,L,k,G,P,F,O,U,j,z,H,K,N,Q,W,Z,q,J,X,Y,$,ee,te,re,ae,ne,oe,ie,se,ce,de,ue,le,Ce,pe,me,Se,ve,we,ye,ge;return{setters:[function(ge){e=ge.cclegacy,t=ge.ParticleSystem2D,r=ge.CCFloat,a=ge.math,n=ge.ViewGroup,o=ge.CCInteger,i=ge.SubContextView,s=ge.native,c=ge.sys,d=ge.input,u=ge.assetManager,l=ge.AudioSource,C=ge.director,p=ge.Size,m=ge.view,S=ge.Vec2,v=ge.Director,w=ge.Canvas,y=ge.sp,g=ge.js,I=ge.game,M=ge.Game,E=ge.TextAsset,T=ge.Color,V=ge.Vec3,R=ge.ccenum,B=ge.Graphics,b=ge.Animation,h=ge.Node,A=ge.Widget,D=ge.BlockInputEvents,x=ge.Camera,_=ge.Collider2D,f=ge.Component,L=ge.dragonBones,k=ge.EditBox,G=ge.EventKeyboard,P=ge.EventMouse,F=ge.EventTouch,O=ge.Input,U=ge.isValid,j=ge.Label,z=ge.Layout,H=ge.Mask,K=ge.MeshRenderer,N=ge.MotionStreak,Q=ge.PageView,W=ge.RigidBody2D,Z=ge.Scene,q=ge.ScrollBar,J=ge.ScrollView,X=ge.Sprite,Y=ge.UIOpacity,$=ge.UIRenderer,ee=ge.UITransform,te=ge.warn,re=ge.lerp,ae=ge.instantiate,ne=ge.CCObject,oe=ge.Asset,ie=ge.Prefab,se=ge.SpriteFrame,ce=ge.Material,de=ge._decorator,ue=ge.EventHandler,le=ge.Quat,Ce=ge.Mat4,pe=ge.RenderTexture,me=ge.Tween,Se=ge.TweenSystem,ve=ge.AudioClip,we=ge.Layers,ye=ge.macro},function(e){ge=e.EDITOR}],execute:function(){e._RF.push({},"9092c38LPBGM6oZLoa6zn+8","CCImport",void 0),window._cc_={ParticleSystem2D:t,CCFloat:r,math:a,ViewGroup:n,CCInteger:o,SubContextView:i,native:s,sys:c,input:d,assetManager:u,AudioSource:l,director:C,Size:p,view:m,Vec2:S,Director:v,Canvas:w,sp:y,js:g,game:I,Game:M,TextAsset:E,Color:T,Vec3:V,ccenum:R,Graphics:B,Animation:b,Node:h,Widget:A,BlockInputEvents:D,Camera:x,Collider2D:_,Component:f,dragonBones:L,EditBox:k,EventKeyboard:G,EventMouse:P,EventTouch:F,Input:O,isValid:U,Label:j,Layout:z,Mask:H,MeshRenderer:K,MotionStreak:N,PageView:Q,RigidBody2D:W,Scene:Z,ScrollBar:q,ScrollView:J,Sprite:X,UIOpacity:Y,UIRenderer:$,UITransform:ee,warn:te,lerp:re,instantiate:ae,CCObject:ne,Asset:oe,Prefab:ie,SpriteFrame:se,Material:ce,_decorator:de,EventHandler:ue,Quat:le,Mat4:Ce,RenderTexture:pe,Tween:me,TweenSystem:Se,AudioClip:ve,Layers:we,macro:ye},window._cc_.EDITOR=ge,e._RF.pop()}}}));

System.register("chunks:///_virtual/Config.ts",["cc"],(function(l){var n;return{setters:[function(l){n=l.cclegacy}],execute:function(){n._RF.push({},"086abP0KfdKMpXiBQ1Okhfd","Config",void 0);l("ConfigFileName",{main:"value",platform:null,language:null,prop:null,province_item:null,level_item:null,today_item:null,constom_item:null,card_item:null});n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/FullscreenButton.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,l,t,r,i,s,u,c,o;return{setters:[function(e){n=e.applyDecoratedDescriptor,l=e.inheritsLoose,t=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){i=e.cclegacy,s=e._decorator,u=e.Node,c=e.screen,o=e.Component}],execute:function(){var a,F,p,h,f,S,d;i._RF.push({},"9bd43IPuLZPLb+hCKd8VNlA","FullscreenButton",void 0);var y=s.ccclass,b=s.property;e("FullscreenButton",(a=y("FullscreenButton"),F=b({type:u,group:"Sprites"}),p=b({type:u,group:"Sprites"}),a((S=n((f=function(e){function n(){for(var n,l=arguments.length,i=new Array(l),s=0;s<l;s++)i[s]=arguments[s];return n=e.call.apply(e,[this].concat(i))||this,t(n,"toFullscreen",S,r(n)),t(n,"exitFullscreen",d,r(n)),n.isFullScreen=!1,n}l(n,e);var i=n.prototype;return i.onLoad=function(){c.on("fullscreen-change",this.onFullscreenChanged.bind(this),this)},i.start=function(){0==c.supportsFullScreen&&(this.enabled=!1)},i.setFullscreenView=function(e){this.toFullscreen.active=!e,this.exitFullscreen.active=e},i.onFullscreenClicked=function(e){var n=this;0!=this.isFullScreen?c.exitFullScreen().then((function(){n.isFullScreen=!1,n.setFullscreenView(n.isFullScreen)})):c.requestFullScreen().then((function(){n.isFullScreen=!0,n.setFullscreenView(n.isFullScreen)}))},i.onFullscreenChanged=function(e){this.isFullScreen!=c.fullScreen()&&(this.isFullScreen=c.fullScreen()),this.setFullscreenView(this.isFullScreen)},n}(o)).prototype,"toFullscreen",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=n(f.prototype,"exitFullscreen",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=f))||h));i._RF.pop()}}}));

System.register("chunks:///_virtual/GameDefine.ts",["cc","./Config.ts","./LanguageDefineConfig.ts","./CCImport.ts"],(function(e){var i,n,a,r;return{setters:[function(e){i=e.cclegacy,n=e.sys},function(e){a=e.ConfigFileName},function(e){r=e.LanguageDefineConfig},null],execute:function(){i._RF.push({},"91c49ibBQhLWbq/99pdDhsZ","GameDefine",void 0);var t="web",o="chinese";e("CGameData",{seedRandomIndex:0,propTimeId:4,timeSub:300,SettingUrl:"setting/prefab/SettingUI",PropGetUrl:"scene/prefab/ui/PropGetUI",FailUrl:"scene/prefab/ui/FailUI",LevelSelectUrl:"scene/prefab/ui/LevelSelectUI",SuccessUrl:"scene/prefab/ui/SuccessUI",ToDayPropUrl:"scene/prefab/ui/ToDayPropUI",RunUIUrl:"scene/prefab/ui/RunUI"}),e("initData",{gameName:"超级解压管",server:{gameId:"",requestIp:""},rewardVideoUseShare:!1,useModuleStorageType:!0,configPlatform:"platform",isTest:!1,isLog:!0,isWaitScene:!0,platformType:t,openWebSimulationUI:!0,useWebSimulationUI:!1,openPrivacy:-1!==["qq","vivo","oppo"].indexOf(t)&&true,showLoadingText:-1!==["web","wx","tt","oppo","vivo","ks","xiaomi","hbs","qq"].indexOf(t)&&true,versionId:"",openGm:!1,loadingCompleteColorAnim:"#EEF2FE",initSceneUrl:"scene/scene/Scene",audioClickUrl:"main/audio/click_sound",configUrl:"config/configs",touchMovePrefabUrl:"main/particle/touchMove/prefab",touchClickPrefabUrl:"",sceneChangeWaitUrl:"",uiUrl:{index:"main/prefab/index/IndexUI",indexBg:"main/prefab/index/IndexBgUI",prop:"",sidebar:""},startBlockAd:0,share:{callTime:0,list:{title:["一口气玩了20关，根本停不下来。","@你，这是一款超难消除游戏","超还上头的消除游戏，来冲吧","不通关谁都别睡觉！"],imgUrl:[]},templateId:[]},newUseEnterGame:!0,loadingDuration:0,configDefine:a,languageDefine:r,getLanguageType:function(){var e=n.localStorage.getItem("language");if(null===e||"null"===e||void 0===e||""===e)return o;var i=Number(e);return isNaN(i),o}});i._RF.pop()}}}));

System.register("chunks:///_virtual/LanguageDefineConfig.ts",["cc"],(function(e){var s;return{setters:[function(e){s=e.cclegacy}],execute:function(){var a,o;e("LanguageDefineConfig",void 0),s._RF.push({},"b209d08wh1PLoJ2Xkrzo5KC","LanguageDefineConfig",void 0),(o=a||(a=e("LanguageDefineConfig",{}))).chinese={10001:"Год",10002:"Месяц",10003:"День",10004:"Час",10005:"Час",10006:"Минуты",10007:"Секунды",20001:"ч",20002:"м",30001:"Загрузка рекламы",30002:"Награда за рекламу",30003:"Ошибка",40001:"Успешно",40002:"Завершите предыдушие уровни",40003:"Достигнут лимит",40004:"Успешно!",40005:"Ошибка!",40006:"Пройденные уровни",40007:"Успешно",40008:"Активно",40009:"Удалено",40010:"Недостаточно шагов",40011:"Закрыть",40012:"Загрузка",40013:"Кол-во：",40014:"Уровень {0}. ",40015:"Этап {0}",40016:"Время",40017:"Рекорд：",40018:"Еще не завершено",40019:"Новые скины",40020:"Рекорд: ",40021:"Это Успех!",40022:"Побьешь рекорд？",40023:"Цель",40024:"Доп. слоты",40025:"Нажмите, чтобы начать",40026:"Нажмите, чтобы выбрать。",40027:"Размещайте похожие тарелки рядом",40028:"Объедините 10 одинаковых тарелок",40029:"Раздайте еще тарелок",40030:"Объедините тарелки",40031:"Вверху показывается цель для уровня"},o.english={10001:"Year",10002:"Month",10003:"Day",10004:"Hour",10005:"Hour",10006:"Minute",10007:"Second",20001:"k",20002:"m",30001:"Ad loading in progress",30002:"Get rewards by watching the full ad",30003:"Failed to fetch ad",40001:"Success achieved",40002:"Finish the previous stage before advancing",40003:"Maximum usage limit exceeded",40004:"Successfully shared!",40005:"Failed to share!",40006:"Cleared levels for today",40007:"Used successfully",40008:"Currently active",40009:"Successfully removed",40010:"Not enough steps",40011:"Close",40012:"Loading content",40013:"Number of uses:",40014:"Level {0}",40015:"Stage {0}",40016:"Time to complete",40017:"Fastest completion record:",40018:"Not completed yet",40019:"Unlock new skin",40020:"best",40021:"Success! Eliminated!",40022:"How about we go for a new high score?",40023:"next target",40024:"Unlock additional slots",40025:"Tap to start over the challenge",40026:"Click for selection",40027:"Place similar items side by side",40028:"Merge 10 of the same cards to advance!",40029:"Acquire additional cards.",40030:"Continue the synthesis~",40031:"This is the synthesis goal for this level!"},o.spanish={10001:"Year",10002:"Month",10003:"Day",10004:"Hour",10005:"Hour",10006:"Minute",10007:"Second",20001:"k",20002:"m",30001:"Ad is loading.",30002:"Watch the full ad for rewards",30003:"Ad retrieval failed",40001:"Success!",40002:"Please pass the previous levels first",40003:"Exceeded maximum usage.",40004:"Shared successfully!",40005:"Failed to share",40006:"You've completed all the levels for today",40007:"Used successfully!",40008:"In use",40009:"Deleted successfully",40010:"Insufficient steps",40011:"Close",40012:"Loading",40013:"Number of uses:",40014:"Nivel {0}",40015:"Stage {0}",40016:"Time to complete:",40017:"Fastest completion record:",40018:"Not completed yet",40019:"Unlock new skin",40020:"历史最佳",40021:"Success! Eliminated!",40022:"咱再来刷个新记录？",40023:"下个目标",40024:"解锁新槽位",40025:"点击屏幕，重新挑战",40026:"点击选择。",40027:"同类型的放一起噢。",40028:"10个相同的牌，可合并为下一等级！",40029:"获取更多的牌。",40030:"继续合成~",40031:"这是本关的合成目标！"},o.indonesia={10001:"Year",10002:"Month",10003:"Day",10004:"Hour",10005:"Hour",10006:"Minute",10007:"Second",20001:"k",20002:"m",30001:"Iklan sedang dimuat",30002:"Tonton iklan sepenuhnya untuk mendapatkan",30003:"Gagal memuat iklan",40001:"Success!",40002:"Please pass the previous levels first",40003:"Exceeded maximum usage.",40004:"Shared successfully!",40005:"Failed to share",40006:"You've completed all the levels for today",40007:"Used successfully!",40008:"In use",40009:"Deleted successfully",40010:"Insufficient steps",40011:"Close",40012:"Loading",40013:"Number of uses:",40014:"Tahap {0}",40015:"Stage {0}",40016:"Time to complete:",40017:"Fastest completion record:",40018:"Not completed yet",40019:"Unlock new skin",40020:"历史最佳",40021:"Success! Eliminated!",40022:"咱再来刷个新记录？",40023:"下个目标",40024:"解锁新槽位",40025:"点击屏幕，重新挑战",40026:"点击选择。",40027:"同类型的放一起噢。",40028:"10个相同的牌，可合并为下一等级！",40029:"获取更多的牌。",40030:"继续合成~",40031:"这是本关的合成目标！"},o.portuguese={10001:"Year",10002:"Month",10003:"Day",10004:"Hour",10005:"Hour",10006:"Minute",10007:"Second",20001:"k",20002:"m",30001:"Anúncio carregando",30002:"Assista ao anúncio completo para obter acesso",30003:"Falha ao carregar anúncio",40001:"Conseguiu",40002:"Por favor, passe pela fase anterior primeiro",40003:"Você excedeu o número máximo de utilizações",40004:"Compartilhamento realizado com sucesso",40005:"Falha ao compartilhar",40006:"Hoje já passei de fase",40007:"Uso bem sucedido",40008:"Em uso",40009:"Exclusão realizada com sucesso",40010:"Passos insuficientes",40011:"Fechar",40012:"Carregando",40013:"Número de usos:",40014:"Nível {0}",40015:"Fase {0}",40016:"Tempo de conclusão",40017:"Recorde de tempo:",40018:"Ainda não passei de fase",40019:"Desbloquear nova skin",40020:"Melhor:",40021:"Eliminação bem-sucedida",40022:"Vamos tentar quebrar esse recorde?",40023:"Objetivo",40024:"Desbloquear",40025:"Toque na tela para desafiar novamente",40026:"Clique para escolher.",40027:"Coloque os do mesmo tipo juntos.",40028:"10 cartas idênticas podem ser combinadas para o próximo nível!",40029:"Obtenha mais cartas.",40030:"Continue a combinar~",40031:"Este é o objetivo de combinação desta fase!"},s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Adapt.ts","./AdaptiveBg.ts","./AdsController.ts","./App.ts","./CCImport.ts","./CameraByCanvasSize.ts","./Config.ts","./FullscreenButton.ts","./GameDefine.ts","./LanguageDefineConfig.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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