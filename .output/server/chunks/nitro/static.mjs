import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"47e-kTno9cbj4M6x1Gnb3sC+Farn3MQ\"",
    "mtime": "2022-01-31T20:13:13.052Z",
    "path": "../public/favicon.ico"
  },
  "/_nuxt/404-4acb01d8.mjs": {
    "type": "application/javascript",
    "etag": "\"238-l1TPUhLplym/Z8HA8E630V6mH7s\"",
    "mtime": "2022-01-31T20:13:13.128Z",
    "path": "../public/_nuxt/404-4acb01d8.mjs"
  },
  "/_nuxt/About-c121e0cd.mjs": {
    "type": "application/javascript",
    "etag": "\"619-WAoW4AD836qQbE4wrptU8E2wdmc\"",
    "mtime": "2022-01-31T20:13:13.124Z",
    "path": "../public/_nuxt/About-c121e0cd.mjs"
  },
  "/_nuxt/BaseButton-f45362be.mjs": {
    "type": "application/javascript",
    "etag": "\"3b3-WvayRccKcc11/1C/6EAifA//ZSQ\"",
    "mtime": "2022-01-31T20:13:13.120Z",
    "path": "../public/_nuxt/BaseButton-f45362be.mjs"
  },
  "/_nuxt/BaseNewsBlock-081c8c78.mjs": {
    "type": "application/javascript",
    "etag": "\"51c-svWkBi1fo+7FOPBOIYkbLyqsTi8\"",
    "mtime": "2022-01-31T20:13:13.120Z",
    "path": "../public/_nuxt/BaseNewsBlock-081c8c78.mjs"
  },
  "/_nuxt/BasePetBlock-97ddd950.mjs": {
    "type": "application/javascript",
    "etag": "\"7ce-VeZ8dqCeo/c3tTv05Z+QUZouLao\"",
    "mtime": "2022-01-31T20:13:13.116Z",
    "path": "../public/_nuxt/BasePetBlock-97ddd950.mjs"
  },
  "/_nuxt/BaseTipsBlock-30ff9f2b.mjs": {
    "type": "application/javascript",
    "etag": "\"36f-rWmsovjOyCfI5u4LRcGQHy2lIUA\"",
    "mtime": "2022-01-31T20:13:13.112Z",
    "path": "../public/_nuxt/BaseTipsBlock-30ff9f2b.mjs"
  },
  "/_nuxt/FrontendSection-be9d84ba.mjs": {
    "type": "application/javascript",
    "etag": "\"1d30-cycou0OCUTxHickf/38OWt+rzO0\"",
    "mtime": "2022-01-31T20:13:13.112Z",
    "path": "../public/_nuxt/FrontendSection-be9d84ba.mjs"
  },
  "/_nuxt/Header-d81cc801.mjs": {
    "type": "application/javascript",
    "etag": "\"62f-eoQfjGMmRfQZhBFl+Y9ZTPXi500\"",
    "mtime": "2022-01-31T20:13:13.108Z",
    "path": "../public/_nuxt/Header-d81cc801.mjs"
  },
  "/_nuxt/JsTasks-80599717.mjs": {
    "type": "application/javascript",
    "etag": "\"137-Pyxr4/nWUXCJ+cBtXDmJPX9TyK4\"",
    "mtime": "2022-01-31T20:13:13.108Z",
    "path": "../public/_nuxt/JsTasks-80599717.mjs"
  },
  "/_nuxt/Main-94cfcab2.mjs": {
    "type": "application/javascript",
    "etag": "\"1ac-EqDwbX9VjyfYl5O3lgDipxLwIt4\"",
    "mtime": "2022-01-31T20:13:13.104Z",
    "path": "../public/_nuxt/Main-94cfcab2.mjs"
  },
  "/_nuxt/Menu-476615c5.mjs": {
    "type": "application/javascript",
    "etag": "\"9a7-lgk/97LDtjYJQ/g9/vc5ANukXE8\"",
    "mtime": "2022-01-31T20:13:13.104Z",
    "path": "../public/_nuxt/Menu-476615c5.mjs"
  },
  "/_nuxt/NewsSection-76fe63de.mjs": {
    "type": "application/javascript",
    "etag": "\"18fc-DXD1bWk4IXbncAaGLXALBM/YrBM\"",
    "mtime": "2022-01-31T20:13:13.100Z",
    "path": "../public/_nuxt/NewsSection-76fe63de.mjs"
  },
  "/_nuxt/PetsSection-7e3f56cb.mjs": {
    "type": "application/javascript",
    "etag": "\"90d-uo+ZdUpH3jfdMxkMEDWqlGopR64\"",
    "mtime": "2022-01-31T20:13:13.100Z",
    "path": "../public/_nuxt/PetsSection-7e3f56cb.mjs"
  },
  "/_nuxt/Sections-b34c23cb.mjs": {
    "type": "application/javascript",
    "etag": "\"2a8-vNyqfW7h/LC5WEizHIK4SXhbG5s\"",
    "mtime": "2022-01-31T20:13:13.096Z",
    "path": "../public/_nuxt/Sections-b34c23cb.mjs"
  },
  "/_nuxt/Test-fdc1a667.mjs": {
    "type": "application/javascript",
    "etag": "\"193-NsYRLTuUGcya80EHpTcJVohUBN0\"",
    "mtime": "2022-01-31T20:13:13.092Z",
    "path": "../public/_nuxt/Test-fdc1a667.mjs"
  },
  "/_nuxt/default-1c1460d7.mjs": {
    "type": "application/javascript",
    "etag": "\"22a-dURllmRDAeFEC1FyjPLoY0IHDIk\"",
    "mtime": "2022-01-31T20:13:13.072Z",
    "path": "../public/_nuxt/default-1c1460d7.mjs"
  },
  "/_nuxt/entry-20809864.mjs": {
    "type": "application/javascript",
    "etag": "\"1bb99-JhzR3FSJK3KZdc18nqSZ+AM3uXc\"",
    "mtime": "2022-01-31T20:13:13.072Z",
    "path": "../public/_nuxt/entry-20809864.mjs"
  },
  "/_nuxt/index-1dff7c43.mjs": {
    "type": "application/javascript",
    "etag": "\"e0-dpKGGpSmCXHYislvzHD/3+hYRYc\"",
    "mtime": "2022-01-31T20:13:13.068Z",
    "path": "../public/_nuxt/index-1dff7c43.mjs"
  },
  "/_nuxt/index-42ec1cc1.mjs": {
    "type": "application/javascript",
    "etag": "\"10d-YbB+jAXhBY++J7pNMl3RW15LP10\"",
    "mtime": "2022-01-31T20:13:13.068Z",
    "path": "../public/_nuxt/index-42ec1cc1.mjs"
  },
  "/_nuxt/index-649c0180.mjs": {
    "type": "application/javascript",
    "etag": "\"108-HOrQpe2D3F9lUvs6A56LmSI8/Kc\"",
    "mtime": "2022-01-31T20:13:13.064Z",
    "path": "../public/_nuxt/index-649c0180.mjs"
  },
  "/_nuxt/index-7a4b8ce6.mjs": {
    "type": "application/javascript",
    "etag": "\"109-xMJJ+j4L0WMDTLy7VWlRO0TeNEQ\"",
    "mtime": "2022-01-31T20:13:13.064Z",
    "path": "../public/_nuxt/index-7a4b8ce6.mjs"
  },
  "/_nuxt/index-b2da1b65.mjs": {
    "type": "application/javascript",
    "etag": "\"136-BqDV5UJ6ZLEB15NFEBrQ7HqASU8\"",
    "mtime": "2022-01-31T20:13:13.060Z",
    "path": "../public/_nuxt/index-b2da1b65.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1d99-4lIO+EhpgnNwsXkk6Keo9wJdFDc\"",
    "mtime": "2022-01-31T20:13:13.060Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/states-c401a879.mjs": {
    "type": "application/javascript",
    "etag": "\"7d-vSKmZVe59k5XDVUty8c7XNoG6UA\"",
    "mtime": "2022-01-31T20:13:13.056Z",
    "path": "../public/_nuxt/states-c401a879.mjs"
  },
  "/_nuxt/useMenuEl-a117c867.mjs": {
    "type": "application/javascript",
    "etag": "\"5ae-46pNNThf5LgbP+ft9jhPSBJTM1w\"",
    "mtime": "2022-01-31T20:13:13.056Z",
    "path": "../public/_nuxt/useMenuEl-a117c867.mjs"
  },
  "/_nuxt/assets/404.acacbd1b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"41-k96wSC6d++o/nFc3O68GWyZ3JyQ\"",
    "mtime": "2022-01-31T20:13:13.092Z",
    "path": "../public/_nuxt/assets/404.acacbd1b.css"
  },
  "/_nuxt/assets/About.d67dac94.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"29-RoSqLH6RdF82oCFjV/nsPap3z+o\"",
    "mtime": "2022-01-31T20:13:13.088Z",
    "path": "../public/_nuxt/assets/About.d67dac94.css"
  },
  "/_nuxt/assets/BaseButton.14a28d3e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2cd-9XZF8UIJP3+B9MqCb8dN4OGWYDo\"",
    "mtime": "2022-01-31T20:13:13.088Z",
    "path": "../public/_nuxt/assets/BaseButton.14a28d3e.css"
  },
  "/_nuxt/assets/BaseNewsBlock.220df269.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"16c-QlT/jm/0asLgdn8Bh/YZcjskOkA\"",
    "mtime": "2022-01-31T20:13:13.084Z",
    "path": "../public/_nuxt/assets/BaseNewsBlock.220df269.css"
  },
  "/_nuxt/assets/BasePetBlock.1036a3d8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"559-l9xX3KFl1e0EG3KwqolB/vquRPk\"",
    "mtime": "2022-01-31T20:13:13.084Z",
    "path": "../public/_nuxt/assets/BasePetBlock.1036a3d8.css"
  },
  "/_nuxt/assets/BaseTipsBlock.b5cd7fff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17b-a0h1g/PX2cBzZY6pPGylC6uhSYw\"",
    "mtime": "2022-01-31T20:13:13.080Z",
    "path": "../public/_nuxt/assets/BaseTipsBlock.b5cd7fff.css"
  },
  "/_nuxt/assets/Header.56e2e999.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"64e-b1z9EyS9/lwN/8c5Sy66uzbbYDg\"",
    "mtime": "2022-01-31T20:13:13.080Z",
    "path": "../public/_nuxt/assets/Header.56e2e999.css"
  },
  "/_nuxt/assets/Main.8dc2acb1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"31-GCd8plSYOOkyWQTLVAIVe6eVwzc\"",
    "mtime": "2022-01-31T20:13:13.080Z",
    "path": "../public/_nuxt/assets/Main.8dc2acb1.css"
  },
  "/_nuxt/assets/Menu.9c470dec.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"487-wSmfNwYLXhqPAF65BMbsGkfwJ9w\"",
    "mtime": "2022-01-31T20:13:13.076Z",
    "path": "../public/_nuxt/assets/Menu.9c470dec.css"
  },
  "/_nuxt/assets/NewsSection.a695c997.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"50a-ag1NCV4UXZAzo5kvXTtS2oRmaiU\"",
    "mtime": "2022-01-31T20:13:13.076Z",
    "path": "../public/_nuxt/assets/NewsSection.a695c997.css"
  },
  "/_nuxt/assets/PetsSection.ec364f0f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"12e-z9QGecu4rnA/mIZzgMp0tIEbxoU\"",
    "mtime": "2022-01-31T20:13:13.076Z",
    "path": "../public/_nuxt/assets/PetsSection.ec364f0f.css"
  },
  "/_nuxt/assets/Sections.b4154b4f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"77-0IVCmJwcZoFjix5DmJHZN3/65g8\"",
    "mtime": "2022-01-31T20:13:13.076Z",
    "path": "../public/_nuxt/assets/Sections.b4154b4f.css"
  },
  "/_nuxt/assets/default.b69fd732.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b2-UUTbHFZbqa52c60Oem31Bd2F3ZA\"",
    "mtime": "2022-01-31T20:13:13.076Z",
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
const STATIC_ASSETS_BASE = "/home/ichnisan/GitHub/nuxt3-project/dist" + "/" + "1643659989";
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
