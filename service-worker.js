if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const c=e=>a(e,d),t={module:{uri:d},exports:r,require:c};s[d]=Promise.all(f.map((e=>t[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-53bdbe38"],(function(e){"use strict";e.setCacheNameDetails({prefix:"我叫田浩良"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.82608222.js",revision:"45fb3ce842081b53f4fc31b2388b2f93"},{url:"assets/404.html.07a52046.js",revision:"22e7f0f841ff60982afefc2be0a763bd"},{url:"assets/404.html.891e5c5b.js",revision:"b5f8e531cefd32331f5d38565ab677ab"},{url:"assets/app.d16a8772.js",revision:"98c73a7143c1f7d97484d988f5b220e9"},{url:"assets/biography.html.14731e2c.js",revision:"70823e14b7b093f59021c191d2ec53e4"},{url:"assets/biography.html.c46a18fe.js",revision:"7f070efd785d8006c1413e813d50037e"},{url:"assets/Blog.20b564f6.js",revision:"cd4843ce78574019e0f1b6775db7f8ab"},{url:"assets/highlight.esm.d982e650.js",revision:"3457767fb4f7fe757ad6fb071f162a85"},{url:"assets/home.html.90e825e6.js",revision:"d1c1f24289405aee552379286be12c1c"},{url:"assets/home.html.d7a39ac0.js",revision:"5eb4079030b67997ebe9cefecead3286"},{url:"assets/index.html.2f7473c5.js",revision:"55a9c0540166927665df64b421ed76ba"},{url:"assets/index.html.33950769.js",revision:"7eb6415b668ba006b75dd066711db6e4"},{url:"assets/index.html.392635fc.js",revision:"f575656eba0a3589dfa18c87d001d1ef"},{url:"assets/index.html.6341f7d2.js",revision:"d372cb9380678c4188f5cedde26f3a20"},{url:"assets/index.html.64eca90d.js",revision:"f6d5da7589cf0c44698266b97640c368"},{url:"assets/index.html.6a8dcc05.js",revision:"81c596c7fc1aafa55ccfb4826a587cfc"},{url:"assets/index.html.6f5395d2.js",revision:"d3b6f09eaf06c2241ac5e17e37e2b5de"},{url:"assets/index.html.7717da45.js",revision:"bfa630e4a911267c5fd0f3955a0495c5"},{url:"assets/index.html.9ccc65ad.js",revision:"6aef229952e8f9c3856664da4f7d44ed"},{url:"assets/index.html.a49678fd.js",revision:"6aef229952e8f9c3856664da4f7d44ed"},{url:"assets/index.html.a4aea2e5.js",revision:"6aef229952e8f9c3856664da4f7d44ed"},{url:"assets/index.html.a81da292.js",revision:"e16a1604c3279bde150778eeb3d7173d"},{url:"assets/index.html.ac50d0f7.js",revision:"6aef229952e8f9c3856664da4f7d44ed"},{url:"assets/index.html.af803460.js",revision:"6aef229952e8f9c3856664da4f7d44ed"},{url:"assets/index.html.b65b46c8.js",revision:"9971923d5c667a92fc649cab1cf9f5e6"},{url:"assets/index.html.c5edeea1.js",revision:"26419a2929233931498cc3ecf55dac32"},{url:"assets/index.html.ca01d9f0.js",revision:"6aef229952e8f9c3856664da4f7d44ed"},{url:"assets/index.html.ccc19a4a.js",revision:"6aef229952e8f9c3856664da4f7d44ed"},{url:"assets/index.html.d0417768.js",revision:"6aef229952e8f9c3856664da4f7d44ed"},{url:"assets/index.html.d9dd47d8.js",revision:"74ae3bd7bff765a9ed9a712966d11e3f"},{url:"assets/index.html.db3a9a38.js",revision:"f3f9e010920eacf0a3dbcb62f9911840"},{url:"assets/index.html.efb7761c.js",revision:"6aef229952e8f9c3856664da4f7d44ed"},{url:"assets/index.html.f6088fe6.js",revision:"6aef229952e8f9c3856664da4f7d44ed"},{url:"assets/index.html.ff3abaea.js",revision:"6aef229952e8f9c3856664da4f7d44ed"},{url:"assets/intro.html.0aad38ab.js",revision:"b954f2e0005bb9a71ec87c7262c3464c"},{url:"assets/intro.html.18d460ff.js",revision:"ba8a7610158056c8103b5f375ed05469"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/Layout.700fdd85.js",revision:"bf5e40b876cec0adef44804d1a719916"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.832a189d.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/math.esm.a3f84b6f.js",revision:"cbf844f27edbc061c86ae840d70389f6"},{url:"assets/notes.esm.3c361cb7.js",revision:"eda65c99450fe02da90bde90cc614a56"},{url:"assets/photoswipe.esm.218074cd.js",revision:"46b7df7a8cdd49d4b0b5ca9b2abb218b"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/reveal.esm.b96f05d8.js",revision:"835fe5d11b24b0dc2193b11c893d234c"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm.80da4a02.js",revision:"690b84c66badd2f8fa69d57bc7cdad19"},{url:"assets/SkipLink.6f043649.js",revision:"742eb94dc66318cf65192f76a949a525"},{url:"assets/Slide.c6342453.js",revision:"0ba7340000a14338fa832aa9b55d4126"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.84343b2f.css",revision:"eb5efd597d1c3868662916f321063a80"},{url:"assets/web_01.html.9f148104.js",revision:"0b45d1f33cbde09a5506974e88df2ecc"},{url:"assets/web_01.html.f5b61b01.js",revision:"2d5828cd6cb985fd8d99617b80247418"},{url:"assets/zoom.esm.8514a202.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"assets/第一天.html.36035a57.js",revision:"a8ddfdb777547ee5dd46ed0aff2e599b"},{url:"assets/第一天.html.f5417756.js",revision:"94c5dd6456aff701ed81b4eab8ba0cae"},{url:"assets/第三天.html.567e731a.js",revision:"b7e826a86823d9011838cb39b68197b2"},{url:"assets/第三天.html.93bdbe38.js",revision:"b6db25287ad40a03828f4ce73544f5be"},{url:"assets/第二天.html.a64b47f9.js",revision:"84340a216926434892bec2a934eca668"},{url:"assets/第二天.html.e34761e0.js",revision:"7464ab26b1b7229d2838c338c3a4326a"},{url:"assets/第四天.html.33a8564b.js",revision:"6dca92fcd61128a329c5359951d6c229"},{url:"assets/第四天.html.8114f9b9.js",revision:"48ba3e3d202904ba0b0e2635a281e2b5"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"index.html",revision:"e685735b7cb8187b550e8510efb2493f"},{url:"404.html",revision:"9f69372a52a4dad30568cb57132c14b9"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
