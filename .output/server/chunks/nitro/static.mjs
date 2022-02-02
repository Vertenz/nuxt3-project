import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"229e0-VhXyEBmufKrbTcfEu5gLvSROMsw\"",
    "mtime": "2022-02-02T20:13:33.358Z",
    "path": "../public/arrow.svg"
  },
  "/bg1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ec26-ABes4+B6LB3Fpz5Cufy2zkCxQF8\"",
    "mtime": "2022-02-02T20:13:33.358Z",
    "path": "../public/bg1.jpg"
  },
  "/bg2.jpg": {
    "type": "image/jpeg",
    "etag": "\"42a3-nB2RgD0wSYe9nBdglW0jW0vu8CE\"",
    "mtime": "2022-02-02T20:13:33.358Z",
    "path": "../public/bg2.jpg"
  },
  "/bg2.png": {
    "type": "image/png",
    "etag": "\"1272d-INp9h3DzQuXnvlrfICJ8C648Kf8\"",
    "mtime": "2022-02-02T20:13:33.354Z",
    "path": "../public/bg2.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"47e-kTno9cbj4M6x1Gnb3sC+Farn3MQ\"",
    "mtime": "2022-02-02T20:13:33.350Z",
    "path": "../public/favicon.ico"
  },
  "/ic-test.png": {
    "type": "image/png",
    "etag": "\"95f-ZumesxUp3/OIYmhcs0/bcEPn/1U\"",
    "mtime": "2022-02-02T20:13:33.350Z",
    "path": "../public/ic-test.png"
  },
  "/_nuxt/404-356ab4f0.mjs": {
    "type": "application/javascript",
    "etag": "\"233-OCz1RSIsVPt372uZGjmOs9onhqU\"",
    "mtime": "2022-02-02T20:13:33.478Z",
    "path": "../public/_nuxt/404-356ab4f0.mjs"
  },
  "/_nuxt/BaseButton-91c7a851.mjs": {
    "type": "application/javascript",
    "etag": "\"3a1-Qa1mTv6z5L8Ns0tVaLqaCiZwntg\"",
    "mtime": "2022-02-02T20:13:33.474Z",
    "path": "../public/_nuxt/BaseButton-91c7a851.mjs"
  },
  "/_nuxt/BaseNewsBlock-a713d59c.mjs": {
    "type": "application/javascript",
    "etag": "\"4fb-A0CY0rfUFXMOSzz5b0//vzuwvCY\"",
    "mtime": "2022-02-02T20:13:33.470Z",
    "path": "../public/_nuxt/BaseNewsBlock-a713d59c.mjs"
  },
  "/_nuxt/BasePetBlock-d45aceb4.mjs": {
    "type": "application/javascript",
    "etag": "\"79c-wShGiyqRbWPFVcWyZQ7n72pu7x0\"",
    "mtime": "2022-02-02T20:13:33.470Z",
    "path": "../public/_nuxt/BasePetBlock-d45aceb4.mjs"
  },
  "/_nuxt/BaseTaskBlock-4873acd4.mjs": {
    "type": "application/javascript",
    "etag": "\"401-zUJQYZUUrEae+jkra0dtmvsiwRM\"",
    "mtime": "2022-02-02T20:13:33.466Z",
    "path": "../public/_nuxt/BaseTaskBlock-4873acd4.mjs"
  },
  "/_nuxt/BaseTipsBlock-5b3f1bbc.mjs": {
    "type": "application/javascript",
    "etag": "\"355-WbZIskjy0iXBVLvZkaO4J06oJmw\"",
    "mtime": "2022-02-02T20:13:33.462Z",
    "path": "../public/_nuxt/BaseTipsBlock-5b3f1bbc.mjs"
  },
  "/_nuxt/FrontendSection-979cfabd.mjs": {
    "type": "application/javascript",
    "etag": "\"1c6c-Gg1ZoFasQVWiiX4Zdz0xP9nm+U0\"",
    "mtime": "2022-02-02T20:13:33.458Z",
    "path": "../public/_nuxt/FrontendSection-979cfabd.mjs"
  },
  "/_nuxt/Header-16b4059b.mjs": {
    "type": "application/javascript",
    "etag": "\"60e-XU+tAG1kx9wRYd+XhH35eeFvsMw\"",
    "mtime": "2022-02-02T20:13:33.454Z",
    "path": "../public/_nuxt/Header-16b4059b.mjs"
  },
  "/_nuxt/JsTasks-e64035e8.mjs": {
    "type": "application/javascript",
    "etag": "\"1917-quYjWMXRWuXt1ulbdqZlcnCn8Sw\"",
    "mtime": "2022-02-02T20:13:33.450Z",
    "path": "../public/_nuxt/JsTasks-e64035e8.mjs"
  },
  "/_nuxt/Menu-3d1855c7.mjs": {
    "type": "application/javascript",
    "etag": "\"55d-zK5veFEPuF/CRwLubopxdvILh78\"",
    "mtime": "2022-02-02T20:13:33.450Z",
    "path": "../public/_nuxt/Menu-3d1855c7.mjs"
  },
  "/_nuxt/NewsSection-40864d15.mjs": {
    "type": "application/javascript",
    "etag": "\"18bc-jbjfeYhiaPJN1z7gdG7zl7iX9t8\"",
    "mtime": "2022-02-02T20:13:33.446Z",
    "path": "../public/_nuxt/NewsSection-40864d15.mjs"
  },
  "/_nuxt/PetsSection-2df8abab.mjs": {
    "type": "application/javascript",
    "etag": "\"8fa-FuXjSs4zYvTfiH3x+XTe990+NGY\"",
    "mtime": "2022-02-02T20:13:33.442Z",
    "path": "../public/_nuxt/PetsSection-2df8abab.mjs"
  },
  "/_nuxt/Sections-458e5de2.mjs": {
    "type": "application/javascript",
    "etag": "\"298-H/dltQ4Y/XPZhN/FHdmU2P7/GiQ\"",
    "mtime": "2022-02-02T20:13:33.438Z",
    "path": "../public/_nuxt/Sections-458e5de2.mjs"
  },
  "/_nuxt/default-fdde289c.mjs": {
    "type": "application/javascript",
    "etag": "\"22c-spFRT/1zELJb42+nQTl3HFniEFc\"",
    "mtime": "2022-02-02T20:13:33.410Z",
    "path": "../public/_nuxt/default-fdde289c.mjs"
  },
  "/_nuxt/entry-a8a30c8e.mjs": {
    "type": "application/javascript",
    "etag": "\"1ba97-SKtZ+yoHRDWJ8t7eCOe0ZwGYkK4\"",
    "mtime": "2022-02-02T20:13:33.406Z",
    "path": "../public/_nuxt/entry-a8a30c8e.mjs"
  },
  "/_nuxt/index-90dbc4bd.mjs": {
    "type": "application/javascript",
    "etag": "\"13b-FT2sWOLi7nIIqBvjxCf/pbcuEs0\"",
    "mtime": "2022-02-02T20:13:33.406Z",
    "path": "../public/_nuxt/index-90dbc4bd.mjs"
  },
  "/_nuxt/index-b07b46dc.mjs": {
    "type": "application/javascript",
    "etag": "\"109-OuL7p4xUo8Rv+L+3wukKMEG6AKU\"",
    "mtime": "2022-02-02T20:13:33.402Z",
    "path": "../public/_nuxt/index-b07b46dc.mjs"
  },
  "/_nuxt/index-d18cc844.mjs": {
    "type": "application/javascript",
    "etag": "\"10d-Y/XVWVpJVJQpf1oGSnLfsUH4O/s\"",
    "mtime": "2022-02-02T20:13:33.394Z",
    "path": "../public/_nuxt/index-d18cc844.mjs"
  },
  "/_nuxt/index-e093051e.mjs": {
    "type": "application/javascript",
    "etag": "\"105-rsrSPVzlgmfFR7Tw8N9Vd0NKBG8\"",
    "mtime": "2022-02-02T20:13:33.394Z",
    "path": "../public/_nuxt/index-e093051e.mjs"
  },
  "/_nuxt/index-ee4535b5.mjs": {
    "type": "application/javascript",
    "etag": "\"108-v074/g9wwQI5SVOs2El3D92CqxY\"",
    "mtime": "2022-02-02T20:13:33.390Z",
    "path": "../public/_nuxt/index-ee4535b5.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1b64-GnasazeeXkMFfawb3OKNdZO3UC8\"",
    "mtime": "2022-02-02T20:13:33.390Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/states-baed341b.mjs": {
    "type": "application/javascript",
    "etag": "\"5a-z5t0JlF3Adv8ornEw4S162ZIpKk\"",
    "mtime": "2022-02-02T20:13:33.370Z",
    "path": "../public/_nuxt/states-baed341b.mjs"
  },
  "/_nuxt/useMenuEl-b3ca2a71.mjs": {
    "type": "application/javascript",
    "etag": "\"58a-dREf95lLAldu1i6Ya2NtWHEX3HA\"",
    "mtime": "2022-02-02T20:13:33.370Z",
    "path": "../public/_nuxt/useMenuEl-b3ca2a71.mjs"
  },
  "/news/Back.svg": {
    "type": "image/svg+xml",
    "etag": "\"2d42-ygdd3k12mXWAgMkwiNCbJoKdkGg\"",
    "mtime": "2022-02-02T20:13:33.350Z",
    "path": "../public/news/Back.svg"
  },
  "/news/Front.svg": {
    "type": "image/svg+xml",
    "etag": "\"dd65-D0mBvWurD9RZWKFVeAILH9xzKsM\"",
    "mtime": "2022-02-02T20:13:33.346Z",
    "path": "../public/news/Front.svg"
  },
  "/news/JS.svg": {
    "type": "image/svg+xml",
    "etag": "\"2d9-1vv89iMneD5sSNkMJQA0EcHPCfk\"",
    "mtime": "2022-02-02T20:13:33.346Z",
    "path": "../public/news/JS.svg"
  },
  "/news/Nuxt.svg": {
    "type": "image/svg+xml",
    "etag": "\"416-cVb/zaxWm1qJ3YYx1/+zVzVSrTw\"",
    "mtime": "2022-02-02T20:13:33.346Z",
    "path": "../public/news/Nuxt.svg"
  },
  "/news/Vue.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d3-KW67lhyZb2khprd5CN0AZmRThM4\"",
    "mtime": "2022-02-02T20:13:33.342Z",
    "path": "../public/news/Vue.svg"
  },
  "/pets/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"23c37-A7k9cTGVgLuDd5tsOIJIe1Uam2M\"",
    "mtime": "2022-02-02T20:13:33.338Z",
    "path": "../public/pets/1.jpg"
  },
  "/pets/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"16578-SraTeznUxmKIeoDPyE0SRPFI/jw\"",
    "mtime": "2022-02-02T20:13:33.334Z",
    "path": "../public/pets/2.jpg"
  },
  "/pets/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"6fd2-Fz3mvMSKHQn9Km+R1DnTCqlvslY\"",
    "mtime": "2022-02-02T20:13:33.334Z",
    "path": "../public/pets/4.jpg"
  },
  "/pets/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ac53-vNgcsbwrSOd+XYjkkxdfKDOFjv8\"",
    "mtime": "2022-02-02T20:13:33.322Z",
    "path": "../public/pets/5.jpg"
  },
  "/_nuxt/assets/404.acacbd1b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"41-k96wSC6d++o/nFc3O68GWyZ3JyQ\"",
    "mtime": "2022-02-02T20:13:33.434Z",
    "path": "../public/_nuxt/assets/404.acacbd1b.css"
  },
  "/_nuxt/assets/BaseButton.0c9dacee.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2cd-+mUcFsdYV0rdbLzxSFlLY6Km3ts\"",
    "mtime": "2022-02-02T20:13:33.434Z",
    "path": "../public/_nuxt/assets/BaseButton.0c9dacee.css"
  },
  "/_nuxt/assets/BaseNewsBlock.220df269.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"16c-QlT/jm/0asLgdn8Bh/YZcjskOkA\"",
    "mtime": "2022-02-02T20:13:33.426Z",
    "path": "../public/_nuxt/assets/BaseNewsBlock.220df269.css"
  },
  "/_nuxt/assets/BasePetBlock.6b7ecb37.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"559-HWvTkMqMI/fMiUXJhqBXk9dGcQQ\"",
    "mtime": "2022-02-02T20:13:33.426Z",
    "path": "../public/_nuxt/assets/BasePetBlock.6b7ecb37.css"
  },
  "/_nuxt/assets/BaseTipsBlock.78215357.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17b-mzculSuBQY5tpz2vlCrlygzdy3o\"",
    "mtime": "2022-02-02T20:13:33.422Z",
    "path": "../public/_nuxt/assets/BaseTipsBlock.78215357.css"
  },
  "/_nuxt/assets/Header.8a7a9342.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"64e-mJmEUXq/sGJc48qEumlCwbzj62E\"",
    "mtime": "2022-02-02T20:13:33.422Z",
    "path": "../public/_nuxt/assets/Header.8a7a9342.css"
  },
  "/_nuxt/assets/Menu.fd5a8b02.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"491-Z9igXkXe4Ztf1PuuZ+nC10z96VY\"",
    "mtime": "2022-02-02T20:13:33.422Z",
    "path": "../public/_nuxt/assets/Menu.fd5a8b02.css"
  },
  "/_nuxt/assets/NewsSection.a35beed1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"55b-+8ysAQSRikiNX/FNs+TjCOsy/EM\"",
    "mtime": "2022-02-02T20:13:33.422Z",
    "path": "../public/_nuxt/assets/NewsSection.a35beed1.css"
  },
  "/_nuxt/assets/PetsSection.09ea07db.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"12e-xACIVuSrH/VVGDhLVcllSlSVq1I\"",
    "mtime": "2022-02-02T20:13:33.418Z",
    "path": "../public/_nuxt/assets/PetsSection.09ea07db.css"
  },
  "/_nuxt/assets/Sections.34696360.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"77-/mj64jI4ORNjtTcytB1CBRxuIH4\"",
    "mtime": "2022-02-02T20:13:33.418Z",
    "path": "../public/_nuxt/assets/Sections.34696360.css"
  },
  "/_nuxt/assets/default.b69fd732.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b2-UUTbHFZbqa52c60Oem31Bd2F3ZA\"",
    "mtime": "2022-02-02T20:13:33.418Z",
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
const STATIC_ASSETS_BASE = "/home/ichnisan/GitHub/nuxt3-project/dist" + "/" + "1643832806";
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
