const a2_0x1dc851=a2_0x2786;(function(_0x53a657,_0x171599){const _0x51cd98=a2_0x2786,_0xc0bbe8=_0x53a657();while(!![]){try{const _0x43e7a4=parseInt(_0x51cd98(0x1cc))/0x1+parseInt(_0x51cd98(0x1df))/0x2+parseInt(_0x51cd98(0x1dd))/0x3*(-parseInt(_0x51cd98(0x1e4))/0x4)+-parseInt(_0x51cd98(0x1d8))/0x5*(-parseInt(_0x51cd98(0x1da))/0x6)+-parseInt(_0x51cd98(0x1ce))/0x7+parseInt(_0x51cd98(0x1cb))/0x8+parseInt(_0x51cd98(0x1d6))/0x9;if(_0x43e7a4===_0x171599)break;else _0xc0bbe8['push'](_0xc0bbe8['shift']());}catch(_0x1d09e0){_0xc0bbe8['push'](_0xc0bbe8['shift']());}}}(a2_0x3ac3,0x5e485));import{API}from'../api/api.js';function a2_0x3ac3(){const _0x1ed45d=['status','3376800vTHpxK','109270CxOshx','Task\x20','331373WvSAPo','startTap','Successfully\x20Get\x20User\x20Info','getStreak','points','Claiming\x20Task\x20','https://api-tg-app.midas.app','Failed\x20To\x20Complete\x20Task','1943793CIKSSS','token','60TXuzsw','/api/game/play','179286YPkMNA','/api/tasks/available','delay','2173443iEWnRQ','Try\x20to\x20Login...','104164mkFcEI','/api/streak','...','fetch','Successfully\x20Tap\x20Got\x20','4qHaUGr','Claiming\x20Daily\x20Streak...','\x20GM','\x20is\x20now\x20','POST','CLAIMABLE','name','task','completeTask','Successfully\x20Get\x20Task','Failed\x20To\x20Get\x20Task','message','getTask','Failed\x20To\x20Tap','queryObj','state','Successfully\x20Login','user','Daily\x20Streak\x20Claimed','claimable','/api/tasks/start/','GET','Getting\x20User\x20Information...','/api/user','account','Failed\x20to\x20get\x20user\x20info',',\x20Delaying\x2010\x20Seconds\x20before\x20CLAIM','getUser','Failed\x20to\x20claim\x20Daily\x20Streak'];a2_0x3ac3=function(){return _0x1ed45d;};return a2_0x3ac3();}import{Helper}from'../utils/helper.js';function a2_0x2786(_0x5d5081,_0x324c10){const _0x3ac384=a2_0x3ac3();return a2_0x2786=function(_0x2786ee,_0x454164){_0x2786ee=_0x2786ee-0x1b0;let _0x241573=_0x3ac384[_0x2786ee];return _0x241573;},a2_0x2786(_0x5d5081,_0x324c10);}import a2_0x5ddd77 from'../utils/logger.js';export class Core extends API{constructor(_0x20c71c,_0x37da11,_0x216e05,_0x10d6c4){const _0x1abef2=a2_0x2786;super(_0x37da11,_0x1abef2(0x1d4),_0x10d6c4,'https://prod-tg-app.midas.app'),this['account']=_0x20c71c,this['query']=_0x37da11,this[_0x1abef2(0x1bb)]=_0x216e05;}async['login'](_0x3dcbb0=![]){const _0x3adcdc=a2_0x2786;try{if(_0x3dcbb0)await Helper[_0x3adcdc(0x1dc)](0x3e8,this['account'],_0x3adcdc(0x1de),this);const _0x21c70e={'initData':this['query']},_0x1db0ae=await this[_0x3adcdc(0x1e2)]('/api/auth/register',_0x3adcdc(0x1b1),undefined,_0x21c70e);if(_0x1db0ae[_0x3adcdc(0x1ca)]==0xc8){if(_0x3dcbb0)await Helper[_0x3adcdc(0x1dc)](0x3e8,this[_0x3adcdc(0x1c5)],_0x3adcdc(0x1bd),this);this[_0x3adcdc(0x1d7)]=_0x1db0ae[_0x3adcdc(0x1b8)];}else{if(_0x3dcbb0)await Helper['delay'](0x3e8,this['account'],'Failed\x20To\x20Login',this);}}catch(_0x54c38c){throw _0x54c38c;}}async[a2_0x1dc851(0x1c8)](_0x3bf8b9=![]){const _0x1316b5=a2_0x1dc851;try{if(_0x3bf8b9)await Helper[_0x1316b5(0x1dc)](0x3e8,this[_0x1316b5(0x1c5)],_0x1316b5(0x1c3),this);const _0x46d2f5=await this['fetch'](_0x1316b5(0x1c4),_0x1316b5(0x1c2),this[_0x1316b5(0x1d7)]);if(_0x46d2f5['status']==0xc8){if(_0x3bf8b9)await Helper[_0x1316b5(0x1dc)](0x3e8,this['account'],_0x1316b5(0x1d0),this);this[_0x1316b5(0x1be)]=_0x46d2f5;}else await Helper['delay'](0x3e8,this['account'],_0x1316b5(0x1c6),this);}catch(_0x357652){throw _0x357652;}}async[a2_0x1dc851(0x1b9)](_0x1d0905=![]){const _0x51797d=a2_0x1dc851;try{if(_0x1d0905)await Helper['delay'](0x3e8,this[_0x51797d(0x1c5)],'Getting\x20Available\x20Task...',this);const _0x202022=await this[_0x51797d(0x1e2)](_0x51797d(0x1db),_0x51797d(0x1c2),this[_0x51797d(0x1d7)]);if(_0x202022['status']==0xc8){if(_0x1d0905)await Helper['delay'](0x7d0,this['account'],_0x51797d(0x1b6),this);this[_0x51797d(0x1b4)]=_0x202022;}else await Helper['delay'](0x3e8,this[_0x51797d(0x1c5)],_0x51797d(0x1b7),this);}catch(_0x443259){throw _0x443259;}}async[a2_0x1dc851(0x1d1)](){const _0x5bc438=a2_0x1dc851;try{const _0x532da0=await this[_0x5bc438(0x1e2)](_0x5bc438(0x1e0),'GET',this[_0x5bc438(0x1d7)]);if(_0x532da0[_0x5bc438(0x1ca)]==0xc8){if(_0x532da0[_0x5bc438(0x1c0)]==!![]){await Helper[_0x5bc438(0x1dc)](0x3e8,this[_0x5bc438(0x1c5)],_0x5bc438(0x1e5),this);const _0x53b456=await this[_0x5bc438(0x1e2)](_0x5bc438(0x1e0),_0x5bc438(0x1b1),this[_0x5bc438(0x1d7)]);_0x53b456[_0x5bc438(0x1ca)]==0xc8?(await Helper[_0x5bc438(0x1dc)](0x3e8,this[_0x5bc438(0x1c5)],_0x5bc438(0x1bf),this),await this[_0x5bc438(0x1c8)]()):await Helper[_0x5bc438(0x1dc)](0x3e8,this[_0x5bc438(0x1c5)],_0x5bc438(0x1c9),this);}}}catch(_0x5664d4){throw _0x5664d4;}}async[a2_0x1dc851(0x1cf)](){const _0x98cecf=a2_0x1dc851;try{await Helper[_0x98cecf(0x1dc)](0x3e8,this[_0x98cecf(0x1c5)],'Starting\x20Tapping...',this);const _0xf8ebf5=await this[_0x98cecf(0x1e2)](_0x98cecf(0x1d9),_0x98cecf(0x1b1),this[_0x98cecf(0x1d7)]);_0xf8ebf5[_0x98cecf(0x1ca)]==0xc8?(await Helper[_0x98cecf(0x1dc)](0x7d0,this['account'],_0x98cecf(0x1e3)+_0xf8ebf5[_0x98cecf(0x1d2)]+_0x98cecf(0x1e6),this),await this[_0x98cecf(0x1c8)]()):await Helper[_0x98cecf(0x1dc)](0x3e8,this['account'],_0x98cecf(0x1ba),this);}catch(_0x506969){throw _0x506969;}}async[a2_0x1dc851(0x1b5)](_0x7aed46){const _0x383c25=a2_0x1dc851;try{await Helper[_0x383c25(0x1dc)](0x3e8,this[_0x383c25(0x1c5)],'Completing\x20Task\x20'+_0x7aed46[_0x383c25(0x1b3)]+_0x383c25(0x1e1),this);const _0x20c733=await this[_0x383c25(0x1e2)](_0x383c25(0x1c1)+_0x7aed46['id'],_0x383c25(0x1b1),this[_0x383c25(0x1d7)]);_0x20c733[_0x383c25(0x1ca)]==0xc8?(await Helper['delay'](0x3e8,this[_0x383c25(0x1c5)],_0x383c25(0x1cd)+_0x7aed46['name']+_0x383c25(0x1b0)+_0x20c733[_0x383c25(0x1bc)],this),_0x20c733[_0x383c25(0x1bc)]==_0x383c25(0x1b2)?(await Helper[_0x383c25(0x1dc)](0x2710,this[_0x383c25(0x1c5)],'Task\x20'+_0x7aed46['name']+_0x383c25(0x1b0)+_0x20c733[_0x383c25(0x1bc)]+_0x383c25(0x1c7),this),await this['claimTask'](_0x7aed46)):(await this['getTask'](),await this['getUser']())):await Helper[_0x383c25(0x1dc)](0x3e8,this[_0x383c25(0x1c5)],_0x383c25(0x1d5),this);}catch(_0x10d623){throw _0x10d623;}}async['claimTask'](_0x166453){const _0x25eb47=a2_0x1dc851;try{await Helper['delay'](0x3e8,this[_0x25eb47(0x1c5)],_0x25eb47(0x1d3)+_0x166453[_0x25eb47(0x1b3)]+_0x25eb47(0x1e1),this);const _0x4debe6=await this[_0x25eb47(0x1e2)]('/api/tasks/claim/'+_0x166453['id'],_0x25eb47(0x1b1),this[_0x25eb47(0x1d7)]);_0x4debe6['status']==0xc8?(await Helper[_0x25eb47(0x1dc)](0x3e8,this[_0x25eb47(0x1c5)],_0x25eb47(0x1cd)+_0x166453[_0x25eb47(0x1b3)]+'\x20is\x20now\x20'+_0x4debe6['state'],this),await this['getTask'](),await this[_0x25eb47(0x1c8)]()):await Helper[_0x25eb47(0x1dc)](0x3e8,this[_0x25eb47(0x1c5)],'Failed\x20To\x20Claim\x20Task',this);}catch(_0x4ef79a){throw _0x4ef79a;}}}