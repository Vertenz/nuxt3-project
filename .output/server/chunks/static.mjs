import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"2314b-kQfG5JaJ+cWm1Y6fsSrar9r0SQE\"",
    "mtime": "2022-02-02T15:34:31.207Z",
    "path": "../public/arrow.svg"
  },
  "/bg1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ec26-ABes4+B6LB3Fpz5Cufy2zkCxQF8\"",
    "mtime": "2022-02-02T15:34:31.208Z",
    "path": "../public/bg1.jpg"
  },
  "/bg2.jpg": {
    "type": "image/jpeg",
    "etag": "\"42a3-nB2RgD0wSYe9nBdglW0jW0vu8CE\"",
    "mtime": "2022-02-02T15:34:31.209Z",
    "path": "../public/bg2.jpg"
  },
  "/bg2.png": {
    "type": "image/png",
    "etag": "\"1272d-INp9h3DzQuXnvlrfICJ8C648Kf8\"",
    "mtime": "2022-02-02T15:34:31.210Z",
    "path": "../public/bg2.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"47e-kTno9cbj4M6x1Gnb3sC+Farn3MQ\"",
    "mtime": "2022-02-02T15:34:31.210Z",
    "path": "../public/favicon.ico"
  },
  "/ic-test.png": {
    "type": "image/png",
    "etag": "\"95f-ZumesxUp3/OIYmhcs0/bcEPn/1U\"",
    "mtime": "2022-02-02T15:34:31.211Z",
    "path": "../public/ic-test.png"
  },
  "/btn/front.svg": {
    "type": "image/svg+xml",
    "etag": "\"6db-MvV8GF8ax03jyKpSm1ZkExI64nE\"",
    "mtime": "2022-02-03T09:54:52.538Z",
    "path": "../public/btn/front.svg"
  },
  "/btn/news.svg": {
    "type": "image/svg+xml",
    "etag": "\"937-oKesDz/86nXe8bJrIqR6cd0h53I\"",
    "mtime": "2022-02-03T09:55:22.089Z",
    "path": "../public/btn/news.svg"
  },
  "/btn/project.svg": {
    "type": "image/svg+xml",
    "etag": "\"aef-jzF9370oMm+FdCFsCZI+Xgq2rlw\"",
    "mtime": "2022-02-03T09:56:15.185Z",
    "path": "../public/btn/project.svg"
  },
  "/btn/task.svg": {
    "type": "image/svg+xml",
    "etag": "\"a6e-eqEITSoJW2XQLwALMNNTy00C9pg\"",
    "mtime": "2022-02-03T09:55:45.891Z",
    "path": "../public/btn/task.svg"
  },
  "/news/Back.svg": {
    "type": "image/svg+xml",
    "etag": "\"2d43-ZkHRqhMJlQp5J4ajpfGhnR1GsMU\"",
    "mtime": "2022-02-02T15:34:31.211Z",
    "path": "../public/news/Back.svg"
  },
  "/news/Front.svg": {
    "type": "image/svg+xml",
    "etag": "\"de6a-RMmQf+3Vi3yIK25WzuCrnTCm7M4\"",
    "mtime": "2022-02-02T15:34:31.212Z",
    "path": "../public/news/Front.svg"
  },
  "/news/JS.svg": {
    "type": "image/svg+xml",
    "etag": "\"2de-wYFiW79Kc6TkAQfy4QN8rcvgKGM\"",
    "mtime": "2022-02-02T15:34:31.212Z",
    "path": "../public/news/JS.svg"
  },
  "/news/Nuxt.svg": {
    "type": "image/svg+xml",
    "etag": "\"42a-dJWLmb14OiSNfdAVLOy9ReifD8s\"",
    "mtime": "2022-02-02T15:34:31.213Z",
    "path": "../public/news/Nuxt.svg"
  },
  "/news/Vue.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d5-BhWdZlzxuLAWUrYim2ANLfBX09s\"",
    "mtime": "2022-02-02T15:34:31.213Z",
    "path": "../public/news/Vue.svg"
  },
  "/pets/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"23c37-A7k9cTGVgLuDd5tsOIJIe1Uam2M\"",
    "mtime": "2022-02-02T15:34:31.215Z",
    "path": "../public/pets/1.jpg"
  },
  "/pets/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"16578-SraTeznUxmKIeoDPyE0SRPFI/jw\"",
    "mtime": "2022-02-02T15:34:31.216Z",
    "path": "../public/pets/2.jpg"
  },
  "/pets/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"6fd2-Fz3mvMSKHQn9Km+R1DnTCqlvslY\"",
    "mtime": "2022-02-02T15:34:31.216Z",
    "path": "../public/pets/4.jpg"
  },
  "/pets/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ac53-vNgcsbwrSOd+XYjkkxdfKDOFjv8\"",
    "mtime": "2022-02-02T15:34:31.219Z",
    "path": "../public/pets/5.jpg"
  },
  "/_nuxt/404-f954a70d.mjs": {
    "type": "application/javascript",
    "etag": "\"233-cNyc916AdgLGVdnWbvMWPkEKzys\"",
    "mtime": "2022-02-03T10:00:05.100Z",
    "path": "../public/_nuxt/404-f954a70d.mjs"
  },
  "/_nuxt/arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"2314b-kQfG5JaJ+cWm1Y6fsSrar9r0SQE\"",
    "mtime": "2022-02-02T15:34:31.207Z",
    "path": "../public/_nuxt/arrow.svg"
  },
  "/_nuxt/BaseButton-a228e567.mjs": {
    "type": "application/javascript",
    "etag": "\"3a1-W0RY8YF95F3s3M0wzSE2rcDp1WQ\"",
    "mtime": "2022-02-03T10:00:05.100Z",
    "path": "../public/_nuxt/BaseButton-a228e567.mjs"
  },
  "/_nuxt/BaseNewsBlock-72fa5562.mjs": {
    "type": "application/javascript",
    "etag": "\"4fb-bv9DPAZJe4O1EmmjzL9kYEQkszI\"",
    "mtime": "2022-02-03T10:00:05.101Z",
    "path": "../public/_nuxt/BaseNewsBlock-72fa5562.mjs"
  },
  "/_nuxt/BasePetBlock-e596757c.mjs": {
    "type": "application/javascript",
    "etag": "\"79c-MO55YVx9Y6j8/bFpWSLnTvToD+g\"",
    "mtime": "2022-02-03T10:00:05.100Z",
    "path": "../public/_nuxt/BasePetBlock-e596757c.mjs"
  },
  "/_nuxt/BaseTaskBlock-7708ced2.mjs": {
    "type": "application/javascript",
    "etag": "\"41d-juHNeQxziZvhm4JiA9BzQTdjNi0\"",
    "mtime": "2022-02-03T10:00:05.100Z",
    "path": "../public/_nuxt/BaseTaskBlock-7708ced2.mjs"
  },
  "/_nuxt/BaseTipsBlock-a5bb47e6.mjs": {
    "type": "application/javascript",
    "etag": "\"357-use0qDIePExWr+GyvF6UYHPjbZk\"",
    "mtime": "2022-02-03T10:00:05.099Z",
    "path": "../public/_nuxt/BaseTipsBlock-a5bb47e6.mjs"
  },
  "/_nuxt/bg1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ec26-ABes4+B6LB3Fpz5Cufy2zkCxQF8\"",
    "mtime": "2022-02-02T15:34:31.208Z",
    "path": "../public/_nuxt/bg1.jpg"
  },
  "/_nuxt/bg2.jpg": {
    "type": "image/jpeg",
    "etag": "\"42a3-nB2RgD0wSYe9nBdglW0jW0vu8CE\"",
    "mtime": "2022-02-02T15:34:31.209Z",
    "path": "../public/_nuxt/bg2.jpg"
  },
  "/_nuxt/bg2.png": {
    "type": "image/png",
    "etag": "\"1272d-INp9h3DzQuXnvlrfICJ8C648Kf8\"",
    "mtime": "2022-02-02T15:34:31.210Z",
    "path": "../public/_nuxt/bg2.png"
  },
  "/_nuxt/default-d5386165.mjs": {
    "type": "application/javascript",
    "etag": "\"22c-Y/qRb94RTgLd5NUV7oh/54kL2Nk\"",
    "mtime": "2022-02-03T10:00:05.101Z",
    "path": "../public/_nuxt/default-d5386165.mjs"
  },
  "/_nuxt/entry-90e4c598.mjs": {
    "type": "application/javascript",
    "etag": "\"1badd-5IpBQ/NrpYzWrXnTpisXI7gFUAs\"",
    "mtime": "2022-02-03T10:00:05.099Z",
    "path": "../public/_nuxt/entry-90e4c598.mjs"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"47e-kTno9cbj4M6x1Gnb3sC+Farn3MQ\"",
    "mtime": "2022-02-02T15:34:31.210Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/FrontendSection-e69ed8f3.mjs": {
    "type": "application/javascript",
    "etag": "\"1c6c-5lLt+ERp6uhErbh2ucLmEd6MrBg\"",
    "mtime": "2022-02-03T10:00:05.099Z",
    "path": "../public/_nuxt/FrontendSection-e69ed8f3.mjs"
  },
  "/_nuxt/Header-e4b22aad.mjs": {
    "type": "application/javascript",
    "etag": "\"60e-DKAy7FEbPxJ5S7Kr0ntb9zvfelk\"",
    "mtime": "2022-02-03T10:00:05.110Z",
    "path": "../public/_nuxt/Header-e4b22aad.mjs"
  },
  "/_nuxt/ic-test.png": {
    "type": "image/png",
    "etag": "\"95f-ZumesxUp3/OIYmhcs0/bcEPn/1U\"",
    "mtime": "2022-02-02T15:34:31.211Z",
    "path": "../public/_nuxt/ic-test.png"
  },
  "/_nuxt/index-086b2e74.mjs": {
    "type": "application/javascript",
    "etag": "\"108-5HYmo8aMNV5ieBs+iyMHdYaPr+A\"",
    "mtime": "2022-02-03T10:00:05.100Z",
    "path": "../public/_nuxt/index-086b2e74.mjs"
  },
  "/_nuxt/index-3f58aeda.mjs": {
    "type": "application/javascript",
    "etag": "\"10d-w2VoO8lwmx64z+5994C91RHiJQc\"",
    "mtime": "2022-02-03T10:00:05.100Z",
    "path": "../public/_nuxt/index-3f58aeda.mjs"
  },
  "/_nuxt/index-4dc7a2ba.mjs": {
    "type": "application/javascript",
    "etag": "\"105-ebJYxN0rakMoV3I5T3lCh+G72xE\"",
    "mtime": "2022-02-03T10:00:05.100Z",
    "path": "../public/_nuxt/index-4dc7a2ba.mjs"
  },
  "/_nuxt/index-b0e415f2.mjs": {
    "type": "application/javascript",
    "etag": "\"13b-WepOyZ+UtCqg1Qn/hssg1AlkzyA\"",
    "mtime": "2022-02-03T10:00:05.100Z",
    "path": "../public/_nuxt/index-b0e415f2.mjs"
  },
  "/_nuxt/index-b230bff4.mjs": {
    "type": "application/javascript",
    "etag": "\"109-w7OaokHdSB5spWszmehgS13h6JE\"",
    "mtime": "2022-02-03T10:00:05.100Z",
    "path": "../public/_nuxt/index-b230bff4.mjs"
  },
  "/_nuxt/JsTasks-7c205246.mjs": {
    "type": "application/javascript",
    "etag": "\"246c-pyiFG8BqIASUm9eMGOg96pwHjw4\"",
    "mtime": "2022-02-03T10:00:05.100Z",
    "path": "../public/_nuxt/JsTasks-7c205246.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1ba2-MtZ0mPUja6sPZxzZC8KypRf6/b0\"",
    "mtime": "2022-02-03T10:00:05.101Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/Menu-0ed12657.mjs": {
    "type": "application/javascript",
    "etag": "\"55d-ir6ODrlJgs88IcqqmN4qNeK1pGs\"",
    "mtime": "2022-02-03T10:00:05.100Z",
    "path": "../public/_nuxt/Menu-0ed12657.mjs"
  },
  "/_nuxt/NewsSection-a5b4403d.mjs": {
    "type": "application/javascript",
    "etag": "\"18bc-LiO5vUhaYjRDCr6XfHEIigY8sT8\"",
    "mtime": "2022-02-03T10:00:05.100Z",
    "path": "../public/_nuxt/NewsSection-a5b4403d.mjs"
  },
  "/_nuxt/PetsSection-4fccf09f.mjs": {
    "type": "application/javascript",
    "etag": "\"8fa-kFgdFHHxTm5AvRMTVpCwb5OquJg\"",
    "mtime": "2022-02-03T10:00:05.100Z",
    "path": "../public/_nuxt/PetsSection-4fccf09f.mjs"
  },
  "/_nuxt/Sections-3d465b03.mjs": {
    "type": "application/javascript",
    "etag": "\"298-CdlqaSf4FamuTVkgOvB3ZikkI/Q\"",
    "mtime": "2022-02-03T10:00:05.100Z",
    "path": "../public/_nuxt/Sections-3d465b03.mjs"
  },
  "/_nuxt/states-7819f005.mjs": {
    "type": "application/javascript",
    "etag": "\"5a-I4WNSaDvDoNKyafP0/sUekqZjBY\"",
    "mtime": "2022-02-03T10:00:05.099Z",
    "path": "../public/_nuxt/states-7819f005.mjs"
  },
  "/_nuxt/useMenuEl-d78870f9.mjs": {
    "type": "application/javascript",
    "etag": "\"592-wqKun91+VKO7KNKQRIk0GtSfd1A\"",
    "mtime": "2022-02-03T10:00:05.110Z",
    "path": "../public/_nuxt/useMenuEl-d78870f9.mjs"
  },
  "/_nuxt/assets/404.c6710b47.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"41-n+I2pxMFbRpwByBYVVXsl8zTvyY\"",
    "mtime": "2022-02-03T10:00:05.101Z",
    "path": "../public/_nuxt/assets/404.c6710b47.css"
  },
  "/_nuxt/assets/BaseButton.879abca0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"335-8AtbcFPcGjUEKHuFeenONOF6anw\"",
    "mtime": "2022-02-03T10:00:05.101Z",
    "path": "../public/_nuxt/assets/BaseButton.879abca0.css"
  },
  "/_nuxt/assets/BaseNewsBlock.220df269.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"16c-QlT/jm/0asLgdn8Bh/YZcjskOkA\"",
    "mtime": "2022-02-03T10:00:05.101Z",
    "path": "../public/_nuxt/assets/BaseNewsBlock.220df269.css"
  },
  "/_nuxt/assets/BasePetBlock.946e7bbf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"559-XfJjZog6t7S9tmf2g8pMbYYBInI\"",
    "mtime": "2022-02-03T10:00:05.101Z",
    "path": "../public/_nuxt/assets/BasePetBlock.946e7bbf.css"
  },
  "/_nuxt/assets/BaseTaskBlock.86679d92.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17b-aTBO862zPm2pv17V8QU4o7KlGpY\"",
    "mtime": "2022-02-03T10:00:05.101Z",
    "path": "../public/_nuxt/assets/BaseTaskBlock.86679d92.css"
  },
  "/_nuxt/assets/BaseTipsBlock.ec675251.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17b-BjpEZKGsZd0L9ZEqJ3aJk0wBejI\"",
    "mtime": "2022-02-03T10:00:05.101Z",
    "path": "../public/_nuxt/assets/BaseTipsBlock.ec675251.css"
  },
  "/_nuxt/assets/default.b69fd732.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b2-UUTbHFZbqa52c60Oem31Bd2F3ZA\"",
    "mtime": "2022-02-03T10:00:05.101Z",
    "path": "../public/_nuxt/assets/default.b69fd732.css"
  },
  "/_nuxt/assets/Header.e4b96813.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"64e-dPU6Tjz6EXBIfcf8z1GRrMzGGnc\"",
    "mtime": "2022-02-03T10:00:05.101Z",
    "path": "../public/_nuxt/assets/Header.e4b96813.css"
  },
  "/_nuxt/assets/Menu.b5215b2c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"491-SgaHYho1l6f/iPQ/3W7I6pJ866U\"",
    "mtime": "2022-02-03T10:00:05.101Z",
    "path": "../public/_nuxt/assets/Menu.b5215b2c.css"
  },
  "/_nuxt/assets/NewsSection.0cd8f01c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"55b-vtkGafe+br0qNpXNNGcc8Qqw6hw\"",
    "mtime": "2022-02-03T10:00:05.101Z",
    "path": "../public/_nuxt/assets/NewsSection.0cd8f01c.css"
  },
  "/_nuxt/assets/PetsSection.c9755a48.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"12e-nJmX69+000sdPYPjtAzyp4XMinE\"",
    "mtime": "2022-02-03T10:00:05.101Z",
    "path": "../public/_nuxt/assets/PetsSection.c9755a48.css"
  },
  "/_nuxt/assets/Sections.3deb6302.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"77-6l/LrEc+/1EIuK5zHTGXyc2PPok\"",
    "mtime": "2022-02-03T10:00:05.101Z",
    "path": "../public/_nuxt/assets/Sections.3deb6302.css"
  },
  "/_nuxt/btn/front.svg": {
    "type": "image/svg+xml",
    "etag": "\"6db-MvV8GF8ax03jyKpSm1ZkExI64nE\"",
    "mtime": "2022-02-03T09:54:52.538Z",
    "path": "../public/_nuxt/btn/front.svg"
  },
  "/_nuxt/btn/news.svg": {
    "type": "image/svg+xml",
    "etag": "\"937-oKesDz/86nXe8bJrIqR6cd0h53I\"",
    "mtime": "2022-02-03T09:55:22.089Z",
    "path": "../public/_nuxt/btn/news.svg"
  },
  "/_nuxt/btn/project.svg": {
    "type": "image/svg+xml",
    "etag": "\"aef-jzF9370oMm+FdCFsCZI+Xgq2rlw\"",
    "mtime": "2022-02-03T09:56:15.185Z",
    "path": "../public/_nuxt/btn/project.svg"
  },
  "/_nuxt/btn/task.svg": {
    "type": "image/svg+xml",
    "etag": "\"a6e-eqEITSoJW2XQLwALMNNTy00C9pg\"",
    "mtime": "2022-02-03T09:55:45.891Z",
    "path": "../public/_nuxt/btn/task.svg"
  },
  "/_nuxt/news/Back.svg": {
    "type": "image/svg+xml",
    "etag": "\"2d43-ZkHRqhMJlQp5J4ajpfGhnR1GsMU\"",
    "mtime": "2022-02-02T15:34:31.211Z",
    "path": "../public/_nuxt/news/Back.svg"
  },
  "/_nuxt/news/Front.svg": {
    "type": "image/svg+xml",
    "etag": "\"de6a-RMmQf+3Vi3yIK25WzuCrnTCm7M4\"",
    "mtime": "2022-02-02T15:34:31.212Z",
    "path": "../public/_nuxt/news/Front.svg"
  },
  "/_nuxt/news/JS.svg": {
    "type": "image/svg+xml",
    "etag": "\"2de-wYFiW79Kc6TkAQfy4QN8rcvgKGM\"",
    "mtime": "2022-02-02T15:34:31.212Z",
    "path": "../public/_nuxt/news/JS.svg"
  },
  "/_nuxt/news/Nuxt.svg": {
    "type": "image/svg+xml",
    "etag": "\"42a-dJWLmb14OiSNfdAVLOy9ReifD8s\"",
    "mtime": "2022-02-02T15:34:31.213Z",
    "path": "../public/_nuxt/news/Nuxt.svg"
  },
  "/_nuxt/news/Vue.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d5-BhWdZlzxuLAWUrYim2ANLfBX09s\"",
    "mtime": "2022-02-02T15:34:31.213Z",
    "path": "../public/_nuxt/news/Vue.svg"
  },
  "/_nuxt/pets/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"23c37-A7k9cTGVgLuDd5tsOIJIe1Uam2M\"",
    "mtime": "2022-02-02T15:34:31.215Z",
    "path": "../public/_nuxt/pets/1.jpg"
  },
  "/_nuxt/pets/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"16578-SraTeznUxmKIeoDPyE0SRPFI/jw\"",
    "mtime": "2022-02-02T15:34:31.216Z",
    "path": "../public/_nuxt/pets/2.jpg"
  },
  "/_nuxt/pets/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"6fd2-Fz3mvMSKHQn9Km+R1DnTCqlvslY\"",
    "mtime": "2022-02-02T15:34:31.216Z",
    "path": "../public/_nuxt/pets/4.jpg"
  },
  "/_nuxt/pets/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ac53-vNgcsbwrSOd+XYjkkxdfKDOFjv8\"",
    "mtime": "2022-02-02T15:34:31.219Z",
    "path": "../public/_nuxt/pets/5.jpg"
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
const STATIC_ASSETS_BASE = "V:/web_dev/nuxt3-project/dist" + "/" + "1643882398";
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
