import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"229e0-VhXyEBmufKrbTcfEu5gLvSROMsw\"",
    "mtime": "2022-02-01T23:51:50.181Z",
    "path": "../public/arrow.svg"
  },
  "/bg1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ec26-ABes4+B6LB3Fpz5Cufy2zkCxQF8\"",
    "mtime": "2022-02-01T23:51:50.173Z",
    "path": "../public/bg1.jpg"
  },
  "/bg2.jpg": {
    "type": "image/jpeg",
    "etag": "\"42a3-nB2RgD0wSYe9nBdglW0jW0vu8CE\"",
    "mtime": "2022-02-01T23:51:50.169Z",
    "path": "../public/bg2.jpg"
  },
  "/bg2.png": {
    "type": "image/png",
    "etag": "\"1272d-INp9h3DzQuXnvlrfICJ8C648Kf8\"",
    "mtime": "2022-02-01T23:51:50.169Z",
    "path": "../public/bg2.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"47e-kTno9cbj4M6x1Gnb3sC+Farn3MQ\"",
    "mtime": "2022-02-01T23:51:50.169Z",
    "path": "../public/favicon.ico"
  },
  "/ic-test.png": {
    "type": "image/png",
    "etag": "\"95f-ZumesxUp3/OIYmhcs0/bcEPn/1U\"",
    "mtime": "2022-02-01T23:51:50.153Z",
    "path": "../public/ic-test.png"
  },
  "/_nuxt/404-65098460.mjs": {
    "type": "application/javascript",
    "etag": "\"233-qdBeCYGnXIa12h4xZ99vT0yAeyc\"",
    "mtime": "2022-02-01T23:51:50.269Z",
    "path": "../public/_nuxt/404-65098460.mjs"
  },
  "/_nuxt/About-5c46ef31.mjs": {
    "type": "application/javascript",
    "etag": "\"619-EV6TU0NYZLq4Qtl16b7ANfMH0Ho\"",
    "mtime": "2022-02-01T23:51:50.269Z",
    "path": "../public/_nuxt/About-5c46ef31.mjs"
  },
  "/_nuxt/BaseButton-25b2199a.mjs": {
    "type": "application/javascript",
    "etag": "\"3b3-t5T88PPgTNTxzF6JrsvJuHIamt8\"",
    "mtime": "2022-02-01T23:51:50.261Z",
    "path": "../public/_nuxt/BaseButton-25b2199a.mjs"
  },
  "/_nuxt/BaseNewsBlock-6585f93c.mjs": {
    "type": "application/javascript",
    "etag": "\"510-HSCQhXdd5sCW47PcR4Wnr6l1TkE\"",
    "mtime": "2022-02-01T23:51:50.257Z",
    "path": "../public/_nuxt/BaseNewsBlock-6585f93c.mjs"
  },
  "/_nuxt/BasePetBlock-18a36f55.mjs": {
    "type": "application/javascript",
    "etag": "\"7b6-GgSCNMPLCC2HkdZ5xGoRH5I6vxI\"",
    "mtime": "2022-02-01T23:51:50.253Z",
    "path": "../public/_nuxt/BasePetBlock-18a36f55.mjs"
  },
  "/_nuxt/BaseTipsBlock-12cc0805.mjs": {
    "type": "application/javascript",
    "etag": "\"36f-s5jrGwHHDfNnormz0ggXFHCDHbM\"",
    "mtime": "2022-02-01T23:51:50.249Z",
    "path": "../public/_nuxt/BaseTipsBlock-12cc0805.mjs"
  },
  "/_nuxt/FrontendSection-0e8a8318.mjs": {
    "type": "application/javascript",
    "etag": "\"1d30-EygnQGeowSTCUoCqOo3R4IkQe/M\"",
    "mtime": "2022-02-01T23:51:50.249Z",
    "path": "../public/_nuxt/FrontendSection-0e8a8318.mjs"
  },
  "/_nuxt/Header-76f5e267.mjs": {
    "type": "application/javascript",
    "etag": "\"622-3j1+v5pWQofSsce199Dou8b5PI8\"",
    "mtime": "2022-02-01T23:51:50.245Z",
    "path": "../public/_nuxt/Header-76f5e267.mjs"
  },
  "/_nuxt/JsTasks-17dde6ac.mjs": {
    "type": "application/javascript",
    "etag": "\"137-tD/UuoGUwrlh0LfdB86OtisYwyo\"",
    "mtime": "2022-02-01T23:51:50.245Z",
    "path": "../public/_nuxt/JsTasks-17dde6ac.mjs"
  },
  "/_nuxt/Menu-cc761f94.mjs": {
    "type": "application/javascript",
    "etag": "\"9a7-MQTLKNQQu6A0Kap1xEJ65nM7/Lo\"",
    "mtime": "2022-02-01T23:51:50.241Z",
    "path": "../public/_nuxt/Menu-cc761f94.mjs"
  },
  "/_nuxt/NewsSection-1951ea9b.mjs": {
    "type": "application/javascript",
    "etag": "\"18fc-T2Dkzji8yuPfjsyETo6nhyuKq5I\"",
    "mtime": "2022-02-01T23:51:50.241Z",
    "path": "../public/_nuxt/NewsSection-1951ea9b.mjs"
  },
  "/_nuxt/PetsSection-1f0543dd.mjs": {
    "type": "application/javascript",
    "etag": "\"90d-+u3zBorSFrfMr7VJRgjYW28VRhw\"",
    "mtime": "2022-02-01T23:51:50.237Z",
    "path": "../public/_nuxt/PetsSection-1f0543dd.mjs"
  },
  "/_nuxt/Sections-270f0952.mjs": {
    "type": "application/javascript",
    "etag": "\"2a8-d54sLiqMIgkWnNAhdtoJ4uHDGY4\"",
    "mtime": "2022-02-01T23:51:50.237Z",
    "path": "../public/_nuxt/Sections-270f0952.mjs"
  },
  "/_nuxt/Test-8e43b9fc.mjs": {
    "type": "application/javascript",
    "etag": "\"193-QpI+Vm+e/HVqlNBptNSAUgTXlqs\"",
    "mtime": "2022-02-01T23:51:50.233Z",
    "path": "../public/_nuxt/Test-8e43b9fc.mjs"
  },
  "/_nuxt/default-71b7581e.mjs": {
    "type": "application/javascript",
    "etag": "\"22a-EEUeTv8ItAlFMk+ZjrM6VjQfKaA\"",
    "mtime": "2022-02-01T23:51:50.213Z",
    "path": "../public/_nuxt/default-71b7581e.mjs"
  },
  "/_nuxt/entry-bdb9b50d.mjs": {
    "type": "application/javascript",
    "etag": "\"1bb09-VEaGxObAFIKT617HV88sugmAtqo\"",
    "mtime": "2022-02-01T23:51:50.213Z",
    "path": "../public/_nuxt/entry-bdb9b50d.mjs"
  },
  "/_nuxt/index-4d476ec7.mjs": {
    "type": "application/javascript",
    "etag": "\"108-l9S3GBJiqxghVxLib6VHmQkkYX4\"",
    "mtime": "2022-02-01T23:51:50.209Z",
    "path": "../public/_nuxt/index-4d476ec7.mjs"
  },
  "/_nuxt/index-50a8e234.mjs": {
    "type": "application/javascript",
    "etag": "\"13b-y8Dr+CV8FbNRPrxDj0L8Gt8vqVk\"",
    "mtime": "2022-02-01T23:51:50.209Z",
    "path": "../public/_nuxt/index-50a8e234.mjs"
  },
  "/_nuxt/index-6c22ddaa.mjs": {
    "type": "application/javascript",
    "etag": "\"10d-8k4XSY9yntadAuS9Loe2eNq4OJA\"",
    "mtime": "2022-02-01T23:51:50.209Z",
    "path": "../public/_nuxt/index-6c22ddaa.mjs"
  },
  "/_nuxt/index-7d3dbd1e.mjs": {
    "type": "application/javascript",
    "etag": "\"e0-oh026xaPEmpHK1AspoNDP5Zh59o\"",
    "mtime": "2022-02-01T23:51:50.205Z",
    "path": "../public/_nuxt/index-7d3dbd1e.mjs"
  },
  "/_nuxt/index-d94a9285.mjs": {
    "type": "application/javascript",
    "etag": "\"109-kWxfPBDyNgSuvW77dKGVw7IREl8\"",
    "mtime": "2022-02-01T23:51:50.197Z",
    "path": "../public/_nuxt/index-d94a9285.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1c65-SEDPW3asrUSLd2+S58Q6PawFlSE\"",
    "mtime": "2022-02-01T23:51:50.193Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/states-e0cfe737.mjs": {
    "type": "application/javascript",
    "etag": "\"7d-raHOglqvpn1k/pSX74p5ZTTf+1Y\"",
    "mtime": "2022-02-01T23:51:50.189Z",
    "path": "../public/_nuxt/states-e0cfe737.mjs"
  },
  "/_nuxt/useMenuEl-96356697.mjs": {
    "type": "application/javascript",
    "etag": "\"58a-Gm4XCOE+SWm4lkCO7Mr523V3HRM\"",
    "mtime": "2022-02-01T23:51:50.189Z",
    "path": "../public/_nuxt/useMenuEl-96356697.mjs"
  },
  "/news/Back.svg": {
    "type": "image/svg+xml",
    "etag": "\"2d42-ygdd3k12mXWAgMkwiNCbJoKdkGg\"",
    "mtime": "2022-02-01T23:51:50.153Z",
    "path": "../public/news/Back.svg"
  },
  "/news/Front.svg": {
    "type": "image/svg+xml",
    "etag": "\"dd65-D0mBvWurD9RZWKFVeAILH9xzKsM\"",
    "mtime": "2022-02-01T23:51:50.153Z",
    "path": "../public/news/Front.svg"
  },
  "/news/JS.svg": {
    "type": "image/svg+xml",
    "etag": "\"2d9-1vv89iMneD5sSNkMJQA0EcHPCfk\"",
    "mtime": "2022-02-01T23:51:50.149Z",
    "path": "../public/news/JS.svg"
  },
  "/news/Nuxt.svg": {
    "type": "image/svg+xml",
    "etag": "\"416-cVb/zaxWm1qJ3YYx1/+zVzVSrTw\"",
    "mtime": "2022-02-01T23:51:50.133Z",
    "path": "../public/news/Nuxt.svg"
  },
  "/news/Vue.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d3-KW67lhyZb2khprd5CN0AZmRThM4\"",
    "mtime": "2022-02-01T23:51:50.133Z",
    "path": "../public/news/Vue.svg"
  },
  "/pets/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"23c37-A7k9cTGVgLuDd5tsOIJIe1Uam2M\"",
    "mtime": "2022-02-01T23:51:50.129Z",
    "path": "../public/pets/1.jpg"
  },
  "/pets/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"16578-SraTeznUxmKIeoDPyE0SRPFI/jw\"",
    "mtime": "2022-02-01T23:51:50.125Z",
    "path": "../public/pets/2.jpg"
  },
  "/pets/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"6fd2-Fz3mvMSKHQn9Km+R1DnTCqlvslY\"",
    "mtime": "2022-02-01T23:51:50.125Z",
    "path": "../public/pets/4.jpg"
  },
  "/pets/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ac53-vNgcsbwrSOd+XYjkkxdfKDOFjv8\"",
    "mtime": "2022-02-01T23:51:50.125Z",
    "path": "../public/pets/5.jpg"
  },
  "/_nuxt/assets/404.acacbd1b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"41-k96wSC6d++o/nFc3O68GWyZ3JyQ\"",
    "mtime": "2022-02-01T23:51:50.233Z",
    "path": "../public/_nuxt/assets/404.acacbd1b.css"
  },
  "/_nuxt/assets/About.d67dac94.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"29-RoSqLH6RdF82oCFjV/nsPap3z+o\"",
    "mtime": "2022-02-01T23:51:50.229Z",
    "path": "../public/_nuxt/assets/About.d67dac94.css"
  },
  "/_nuxt/assets/BaseButton.14a28d3e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2cd-9XZF8UIJP3+B9MqCb8dN4OGWYDo\"",
    "mtime": "2022-02-01T23:51:50.229Z",
    "path": "../public/_nuxt/assets/BaseButton.14a28d3e.css"
  },
  "/_nuxt/assets/BaseNewsBlock.220df269.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"16c-QlT/jm/0asLgdn8Bh/YZcjskOkA\"",
    "mtime": "2022-02-01T23:51:50.225Z",
    "path": "../public/_nuxt/assets/BaseNewsBlock.220df269.css"
  },
  "/_nuxt/assets/BasePetBlock.3be3078c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"559-uIL/iRMLu7amVaHfa+x1cmO/Syo\"",
    "mtime": "2022-02-01T23:51:50.225Z",
    "path": "../public/_nuxt/assets/BasePetBlock.3be3078c.css"
  },
  "/_nuxt/assets/BaseTipsBlock.b5cd7fff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17b-a0h1g/PX2cBzZY6pPGylC6uhSYw\"",
    "mtime": "2022-02-01T23:51:50.225Z",
    "path": "../public/_nuxt/assets/BaseTipsBlock.b5cd7fff.css"
  },
  "/_nuxt/assets/Header.904e16a3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"64e-geQ71d9pTJGAmWqQs2mmkTW7NUE\"",
    "mtime": "2022-02-01T23:51:50.221Z",
    "path": "../public/_nuxt/assets/Header.904e16a3.css"
  },
  "/_nuxt/assets/Menu.9c470dec.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"487-wSmfNwYLXhqPAF65BMbsGkfwJ9w\"",
    "mtime": "2022-02-01T23:51:50.221Z",
    "path": "../public/_nuxt/assets/Menu.9c470dec.css"
  },
  "/_nuxt/assets/NewsSection.a695c997.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"50a-ag1NCV4UXZAzo5kvXTtS2oRmaiU\"",
    "mtime": "2022-02-01T23:51:50.221Z",
    "path": "../public/_nuxt/assets/NewsSection.a695c997.css"
  },
  "/_nuxt/assets/PetsSection.ec364f0f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"12e-z9QGecu4rnA/mIZzgMp0tIEbxoU\"",
    "mtime": "2022-02-01T23:51:50.221Z",
    "path": "../public/_nuxt/assets/PetsSection.ec364f0f.css"
  },
  "/_nuxt/assets/Sections.b4154b4f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"77-0IVCmJwcZoFjix5DmJHZN3/65g8\"",
    "mtime": "2022-02-01T23:51:50.217Z",
    "path": "../public/_nuxt/assets/Sections.b4154b4f.css"
  },
  "/_nuxt/assets/default.b69fd732.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b2-UUTbHFZbqa52c60Oem31Bd2F3ZA\"",
    "mtime": "2022-02-01T23:51:50.217Z",
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
const STATIC_ASSETS_BASE = "/home/ichnisan/GitHub/nuxt3-project/dist" + "/" + "1643759502";
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
