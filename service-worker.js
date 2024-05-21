/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "1b46f9cc6dde2ef6751aa5b3ccf40c92"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "5b80a375590d57447353f55fa1b6453b"
  },
  {
    "url": "assets/css/0.styles.3d48b42c.css",
    "revision": "7bd46381b98ef9217de523d1effbed54"
  },
  {
    "url": "assets/img/relational_scheme.50c04084.png",
    "revision": "50c0408448f359da6c0793e327723a83"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e50a5206.js",
    "revision": "6f27c3532be60e76bca8e5465568abd1"
  },
  {
    "url": "assets/js/11.29ee89f8.js",
    "revision": "92f8f39cc3fdb0899cf3176a91a6c543"
  },
  {
    "url": "assets/js/12.0b4fa948.js",
    "revision": "e8be614cc6b46b2e01280574ddd71284"
  },
  {
    "url": "assets/js/13.6b4a3ce8.js",
    "revision": "ff602871a9dd9eac5035869fcaa21901"
  },
  {
    "url": "assets/js/14.2545c1ad.js",
    "revision": "c47e00178e234471f42ccc2546285565"
  },
  {
    "url": "assets/js/15.0aee5be2.js",
    "revision": "2b1d8d35d8cb9ba58cca3c6e58ab26e0"
  },
  {
    "url": "assets/js/16.13799d8c.js",
    "revision": "62aa20ce5a72b0537649ef6b67e0824b"
  },
  {
    "url": "assets/js/17.b51d0d04.js",
    "revision": "2832ba628f8c02b5145951dd76942dcb"
  },
  {
    "url": "assets/js/18.ddf9d35b.js",
    "revision": "007b94ea2648edfe45af772df379cfcf"
  },
  {
    "url": "assets/js/19.85d5c25e.js",
    "revision": "f0816910af20db54fa9b91840a2b1f1f"
  },
  {
    "url": "assets/js/2.11435098.js",
    "revision": "f57e9f1755d4ab96c82e5556eb5a84f9"
  },
  {
    "url": "assets/js/20.45f25853.js",
    "revision": "652fbfbd373dec4f6c0ffac50857cdd6"
  },
  {
    "url": "assets/js/21.c178c591.js",
    "revision": "e03b75bbf0b160a6b3d41d29d54d49c3"
  },
  {
    "url": "assets/js/22.7414ef83.js",
    "revision": "084061ccbc8eb8956b08d0bad9fd3f2f"
  },
  {
    "url": "assets/js/23.0457f9d4.js",
    "revision": "7a79c667a47adcc80477322c6c287c28"
  },
  {
    "url": "assets/js/24.92136d00.js",
    "revision": "c5a0d9aee0b0e4779d97c76e86021335"
  },
  {
    "url": "assets/js/25.cc4d9332.js",
    "revision": "480d77819ccff7096937aaed2f567fae"
  },
  {
    "url": "assets/js/26.a9d31514.js",
    "revision": "16f8539a3aa78981ee7b7653fba46064"
  },
  {
    "url": "assets/js/28.01bbdb4a.js",
    "revision": "b7166a3f790d8c0a1497c6bd3a169410"
  },
  {
    "url": "assets/js/3.3d08d86c.js",
    "revision": "cc362cb24068987426e9655bdb12b30a"
  },
  {
    "url": "assets/js/4.4c193c95.js",
    "revision": "20f92a95ac69fb7c48e63b470c35d475"
  },
  {
    "url": "assets/js/5.dea68fdd.js",
    "revision": "8b28fd847ef12b655dba770bb9e8d494"
  },
  {
    "url": "assets/js/6.6d8c3d51.js",
    "revision": "5666693a1497354d7117ebbb34cc592d"
  },
  {
    "url": "assets/js/7.9617083c.js",
    "revision": "bb0c8e37415a02abe60360941ab6ec31"
  },
  {
    "url": "assets/js/8.53a1b2bd.js",
    "revision": "08bfe2392b3540f002e470b59276c162"
  },
  {
    "url": "assets/js/9.1882ecda.js",
    "revision": "ef6bda57b9752e0580bb940b71e9b188"
  },
  {
    "url": "assets/js/app.183fc2e4.js",
    "revision": "7a2120aa53f75b66829a44a577f6bf9e"
  },
  {
    "url": "conclusion/index.html",
    "revision": "09f735c15caa659e2776d59308026105"
  },
  {
    "url": "design/index.html",
    "revision": "8d685815435c6e1304582b8b93f09177"
  },
  {
    "url": "index.html",
    "revision": "11587fb61e072e848949539268214943"
  },
  {
    "url": "intro/index.html",
    "revision": "7df79cfd41158f661e24e942772f983d"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "52c9d2c04e3d038d2e8bad67d09db980"
  },
  {
    "url": "requirements/services_uncommitted.html",
    "revision": "b1aa565d7ceaa2597f285ad8efc19e81"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "75abf801e854c755a742fc8531701547"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ea6fd8c19632bc8908cdab9551fc7d3c"
  },
  {
    "url": "software/index.html",
    "revision": "e6552515cbd38307a37b6e57782cf270"
  },
  {
    "url": "test/index.html",
    "revision": "a6e3a5bc0fd1f3bc9b2e45bf82313ba1"
  },
  {
    "url": "use-cases/index.html",
    "revision": "63076adfdf651eb744aa89e1a23efbe2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
