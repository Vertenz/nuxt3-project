import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"229e0-VhXyEBmufKrbTcfEu5gLvSROMsw\"",
    "mtime": "2022-02-01T19:38:04.096Z",
    "path": "../public/arrow.svg"
  },
  "/bg1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ec26-ABes4+B6LB3Fpz5Cufy2zkCxQF8\"",
    "mtime": "2022-02-01T19:38:04.080Z",
    "path": "../public/bg1.jpg"
  },
  "/bg2.jpg": {
    "type": "image/jpeg",
    "etag": "\"42a3-nB2RgD0wSYe9nBdglW0jW0vu8CE\"",
    "mtime": "2022-02-01T19:38:04.080Z",
    "path": "../public/bg2.jpg"
  },
  "/bg2.png": {
    "type": "image/png",
    "etag": "\"1272d-INp9h3DzQuXnvlrfICJ8C648Kf8\"",
    "mtime": "2022-02-01T19:38:04.076Z",
    "path": "../public/bg2.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"47e-kTno9cbj4M6x1Gnb3sC+Farn3MQ\"",
    "mtime": "2022-02-01T19:38:04.076Z",
    "path": "../public/favicon.ico"
  },
  "/ic-test.png": {
    "type": "image/png",
    "etag": "\"95f-ZumesxUp3/OIYmhcs0/bcEPn/1U\"",
    "mtime": "2022-02-01T19:38:04.072Z",
    "path": "../public/ic-test.png"
  },
  "/_nuxt/404-ac7f9961.mjs": {
    "type": "application/javascript",
    "etag": "\"238-Df7HAAoKyMUbBUMkejGl0KB+EZ4\"",
    "mtime": "2022-02-01T19:38:04.188Z",
    "path": "../public/_nuxt/404-ac7f9961.mjs"
  },
  "/_nuxt/About-38f5dd82.mjs": {
    "type": "application/javascript",
    "etag": "\"619-d3rlFinkrC40zCFW++CzRKZF/tk\"",
    "mtime": "2022-02-01T19:38:04.188Z",
    "path": "../public/_nuxt/About-38f5dd82.mjs"
  },
  "/_nuxt/BaseButton-4321575d.mjs": {
    "type": "application/javascript",
    "etag": "\"3b3-oliZN/4lIPijyuLrVaLC/CEQdJs\"",
    "mtime": "2022-02-01T19:38:04.184Z",
    "path": "../public/_nuxt/BaseButton-4321575d.mjs"
  },
  "/_nuxt/BaseNewsBlock-f698f8ba.mjs": {
    "type": "application/javascript",
    "etag": "\"59b-WXC1SLQmgSVqan0EPmY+87In59E\"",
    "mtime": "2022-02-01T19:38:04.184Z",
    "path": "../public/_nuxt/BaseNewsBlock-f698f8ba.mjs"
  },
  "/_nuxt/BasePetBlock-f053663e.mjs": {
    "type": "application/javascript",
    "etag": "\"7ce-QEvZHtMKeORlBLgh9b+9+U+vBKo\"",
    "mtime": "2022-02-01T19:38:04.180Z",
    "path": "../public/_nuxt/BasePetBlock-f053663e.mjs"
  },
  "/_nuxt/BaseTipsBlock-5aec2431.mjs": {
    "type": "application/javascript",
    "etag": "\"36f-mwq2561LBq6SocElShruE1TLF9A\"",
    "mtime": "2022-02-01T19:38:04.176Z",
    "path": "../public/_nuxt/BaseTipsBlock-5aec2431.mjs"
  },
  "/_nuxt/FrontendSection-fbb0aafc.mjs": {
    "type": "application/javascript",
    "etag": "\"1d30-YK2FlWsCgRgoARtegfACxpusQGc\"",
    "mtime": "2022-02-01T19:38:04.176Z",
    "path": "../public/_nuxt/FrontendSection-fbb0aafc.mjs"
  },
  "/_nuxt/Header-df8931c1.mjs": {
    "type": "application/javascript",
    "etag": "\"62f-4o4f8Db0rYZFITVed0weUVWtSbI\"",
    "mtime": "2022-02-01T19:38:04.172Z",
    "path": "../public/_nuxt/Header-df8931c1.mjs"
  },
  "/_nuxt/JsTasks-b7d47b49.mjs": {
    "type": "application/javascript",
    "etag": "\"137-8Jlk/xtZjU5NibOsT/qrAtQXfCE\"",
    "mtime": "2022-02-01T19:38:04.172Z",
    "path": "../public/_nuxt/JsTasks-b7d47b49.mjs"
  },
  "/_nuxt/Main-01db9a1d.mjs": {
    "type": "application/javascript",
    "etag": "\"1ac-dDv4ChexEgb9C7xniHCkSqnqHqQ\"",
    "mtime": "2022-02-01T19:38:04.168Z",
    "path": "../public/_nuxt/Main-01db9a1d.mjs"
  },
  "/_nuxt/Menu-07e6e1d0.mjs": {
    "type": "application/javascript",
    "etag": "\"9a7-qWDdN4JAD3JNNj5aQU7TUYfGwO4\"",
    "mtime": "2022-02-01T19:38:04.164Z",
    "path": "../public/_nuxt/Menu-07e6e1d0.mjs"
  },
  "/_nuxt/NewsSection-59197dbe.mjs": {
    "type": "application/javascript",
    "etag": "\"18fc-9T5eSJ3KoiA/krlNzafG7yWCqh0\"",
    "mtime": "2022-02-01T19:38:04.164Z",
    "path": "../public/_nuxt/NewsSection-59197dbe.mjs"
  },
  "/_nuxt/PetsSection-fabb49e0.mjs": {
    "type": "application/javascript",
    "etag": "\"90d-R73Wy5Bukhatom/mhmM5yR0xXYI\"",
    "mtime": "2022-02-01T19:38:04.160Z",
    "path": "../public/_nuxt/PetsSection-fabb49e0.mjs"
  },
  "/_nuxt/Sections-7072fccc.mjs": {
    "type": "application/javascript",
    "etag": "\"2a8-UrQOiyttKB9jG5Bpks+TS8iofqM\"",
    "mtime": "2022-02-01T19:38:04.160Z",
    "path": "../public/_nuxt/Sections-7072fccc.mjs"
  },
  "/_nuxt/Test-d707aaaa.mjs": {
    "type": "application/javascript",
    "etag": "\"193-qpcK9d1WlLtJY1VXNru9WbzCVDU\"",
    "mtime": "2022-02-01T19:38:04.156Z",
    "path": "../public/_nuxt/Test-d707aaaa.mjs"
  },
  "/_nuxt/default-569025c5.mjs": {
    "type": "application/javascript",
    "etag": "\"22a-1WakqUd+G1i7g3ii70NBiDkUzVM\"",
    "mtime": "2022-02-01T19:38:04.132Z",
    "path": "../public/_nuxt/default-569025c5.mjs"
  },
  "/_nuxt/entry-c82175cc.mjs": {
    "type": "application/javascript",
    "etag": "\"1bb99-V+CFgLy9SahxiPSO1at3qtmT7CU\"",
    "mtime": "2022-02-01T19:38:04.132Z",
    "path": "../public/_nuxt/entry-c82175cc.mjs"
  },
  "/_nuxt/index-3cd88300.mjs": {
    "type": "application/javascript",
    "etag": "\"10d-9HPI1dcA9S2aQ3WcamxECa4PeGo\"",
    "mtime": "2022-02-01T19:38:04.128Z",
    "path": "../public/_nuxt/index-3cd88300.mjs"
  },
  "/_nuxt/index-59bc28e3.mjs": {
    "type": "application/javascript",
    "etag": "\"e0-N9vkWObrLP4vRcbkcF4aLI/pXC4\"",
    "mtime": "2022-02-01T19:38:04.124Z",
    "path": "../public/_nuxt/index-59bc28e3.mjs"
  },
  "/_nuxt/index-742e35a6.mjs": {
    "type": "application/javascript",
    "etag": "\"109-33D8rAzqIp48epItf8ZlPMDbmkM\"",
    "mtime": "2022-02-01T19:38:04.124Z",
    "path": "../public/_nuxt/index-742e35a6.mjs"
  },
  "/_nuxt/index-ae3f7037.mjs": {
    "type": "application/javascript",
    "etag": "\"108-NFlVGa6LhzwqT4amD017u7sR3KI\"",
    "mtime": "2022-02-01T19:38:04.120Z",
    "path": "../public/_nuxt/index-ae3f7037.mjs"
  },
  "/_nuxt/index-fe669377.mjs": {
    "type": "application/javascript",
    "etag": "\"13b-/L4dzACj+oMJFR7qdyjzrSGnmlw\"",
    "mtime": "2022-02-01T19:38:04.116Z",
    "path": "../public/_nuxt/index-fe669377.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1d99-NA00ulCW8O/BzMrWoHl0qV7O0Hw\"",
    "mtime": "2022-02-01T19:38:04.112Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/states-6b668fc1.mjs": {
    "type": "application/javascript",
    "etag": "\"7d-4+EpndgD/+2YHb+8E6zsqZfYenw\"",
    "mtime": "2022-02-01T19:38:04.104Z",
    "path": "../public/_nuxt/states-6b668fc1.mjs"
  },
  "/_nuxt/useMenuEl-7df750a7.mjs": {
    "type": "application/javascript",
    "etag": "\"5ae-f5pSOhqwrGAhKBfObBzK+Hsg+h4\"",
    "mtime": "2022-02-01T19:38:04.104Z",
    "path": "../public/_nuxt/useMenuEl-7df750a7.mjs"
  },
  "/news/Back.svg": {
    "type": "image/svg+xml",
    "etag": "\"2d42-ygdd3k12mXWAgMkwiNCbJoKdkGg\"",
    "mtime": "2022-02-01T19:38:04.072Z",
    "path": "../public/news/Back.svg"
  },
  "/news/Front.svg": {
    "type": "image/svg+xml",
    "etag": "\"dd65-D0mBvWurD9RZWKFVeAILH9xzKsM\"",
    "mtime": "2022-02-01T19:38:04.072Z",
    "path": "../public/news/Front.svg"
  },
  "/news/JS.svg": {
    "type": "image/svg+xml",
    "etag": "\"2d9-1vv89iMneD5sSNkMJQA0EcHPCfk\"",
    "mtime": "2022-02-01T19:38:04.068Z",
    "path": "../public/news/JS.svg"
  },
  "/news/Nuxt.svg": {
    "type": "image/svg+xml",
    "etag": "\"416-cVb/zaxWm1qJ3YYx1/+zVzVSrTw\"",
    "mtime": "2022-02-01T19:38:04.068Z",
    "path": "../public/news/Nuxt.svg"
  },
  "/news/Vue.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d3-KW67lhyZb2khprd5CN0AZmRThM4\"",
    "mtime": "2022-02-01T19:38:04.068Z",
    "path": "../public/news/Vue.svg"
  },
  "/pets/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"23c37-A7k9cTGVgLuDd5tsOIJIe1Uam2M\"",
    "mtime": "2022-02-01T19:38:04.064Z",
    "path": "../public/pets/1.jpg"
  },
  "/pets/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"16578-SraTeznUxmKIeoDPyE0SRPFI/jw\"",
    "mtime": "2022-02-01T19:38:04.064Z",
    "path": "../public/pets/2.jpg"
  },
  "/pets/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"6fd2-Fz3mvMSKHQn9Km+R1DnTCqlvslY\"",
    "mtime": "2022-02-01T19:38:04.064Z",
    "path": "../public/pets/4.jpg"
  },
  "/pets/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ac53-vNgcsbwrSOd+XYjkkxdfKDOFjv8\"",
    "mtime": "2022-02-01T19:38:04.060Z",
    "path": "../public/pets/5.jpg"
  },
  "/_nuxt/assets/404.acacbd1b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"41-k96wSC6d++o/nFc3O68GWyZ3JyQ\"",
    "mtime": "2022-02-01T19:38:04.152Z",
    "path": "../public/_nuxt/assets/404.acacbd1b.css"
  },
  "/_nuxt/assets/About.d67dac94.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"29-RoSqLH6RdF82oCFjV/nsPap3z+o\"",
    "mtime": "2022-02-01T19:38:04.152Z",
    "path": "../public/_nuxt/assets/About.d67dac94.css"
  },
  "/_nuxt/assets/BaseButton.14a28d3e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2cd-9XZF8UIJP3+B9MqCb8dN4OGWYDo\"",
    "mtime": "2022-02-01T19:38:04.148Z",
    "path": "../public/_nuxt/assets/BaseButton.14a28d3e.css"
  },
  "/_nuxt/assets/BaseNewsBlock.220df269.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"16c-QlT/jm/0asLgdn8Bh/YZcjskOkA\"",
    "mtime": "2022-02-01T19:38:04.148Z",
    "path": "../public/_nuxt/assets/BaseNewsBlock.220df269.css"
  },
  "/_nuxt/assets/BasePetBlock.1036a3d8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"559-l9xX3KFl1e0EG3KwqolB/vquRPk\"",
    "mtime": "2022-02-01T19:38:04.144Z",
    "path": "../public/_nuxt/assets/BasePetBlock.1036a3d8.css"
  },
  "/_nuxt/assets/BaseTipsBlock.b5cd7fff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17b-a0h1g/PX2cBzZY6pPGylC6uhSYw\"",
    "mtime": "2022-02-01T19:38:04.144Z",
    "path": "../public/_nuxt/assets/BaseTipsBlock.b5cd7fff.css"
  },
  "/_nuxt/assets/Header.56e2e999.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"64e-b1z9EyS9/lwN/8c5Sy66uzbbYDg\"",
    "mtime": "2022-02-01T19:38:04.140Z",
    "path": "../public/_nuxt/assets/Header.56e2e999.css"
  },
  "/_nuxt/assets/Main.8dc2acb1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"31-GCd8plSYOOkyWQTLVAIVe6eVwzc\"",
    "mtime": "2022-02-01T19:38:04.140Z",
    "path": "../public/_nuxt/assets/Main.8dc2acb1.css"
  },
  "/_nuxt/assets/Menu.9c470dec.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"487-wSmfNwYLXhqPAF65BMbsGkfwJ9w\"",
    "mtime": "2022-02-01T19:38:04.140Z",
    "path": "../public/_nuxt/assets/Menu.9c470dec.css"
  },
  "/_nuxt/assets/NewsSection.a695c997.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"50a-ag1NCV4UXZAzo5kvXTtS2oRmaiU\"",
    "mtime": "2022-02-01T19:38:04.136Z",
    "path": "../public/_nuxt/assets/NewsSection.a695c997.css"
  },
  "/_nuxt/assets/PetsSection.ec364f0f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"12e-z9QGecu4rnA/mIZzgMp0tIEbxoU\"",
    "mtime": "2022-02-01T19:38:04.136Z",
    "path": "../public/_nuxt/assets/PetsSection.ec364f0f.css"
  },
  "/_nuxt/assets/Sections.b4154b4f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"77-0IVCmJwcZoFjix5DmJHZN3/65g8\"",
    "mtime": "2022-02-01T19:38:04.136Z",
    "path": "../public/_nuxt/assets/Sections.b4154b4f.css"
  },
  "/_nuxt/assets/default.b69fd732.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b2-UUTbHFZbqa52c60Oem31Bd2F3ZA\"",
    "mtime": "2022-02-01T19:38:04.136Z",
    "path": "../public/_nuxt/assets/default.b69fd732.css"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/home/ichnisan/GitHub/nuxt3-project/dist" + "/" + "1643744279";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
