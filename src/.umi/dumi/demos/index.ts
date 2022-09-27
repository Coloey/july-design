// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/alert/demo/basic.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/alert/index.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/alert/style/index.ts?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/alert/style/index.scss?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/button/demo/basic.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/button/index.tsx?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/button/style/index.ts?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/button/style/index.scss?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/image/demo/basic.tsx?dumi-raw-code';
import rawCode10 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/image/index.tsx?dumi-raw-code';
import rawCode11 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/image/useImage.ts?dumi-raw-code';
import rawCode12 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/image/style/index.scss?dumi-raw-code';
import rawCode13 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/image/demo/previewImage.tsx?dumi-raw-code';
import rawCode14 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/image/demo/loaderImage.tsx?dumi-raw-code';

export default {
  'alert-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trela" */'D:/MyReactComponents/src/alert/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"index.tsx":{"import":"../index","content":rawCode2},"style/index.ts":{"import":"../style","content":rawCode3},"style/index.scss":{"import":"./index.scss","content":rawCode4}},"dependencies":{"react":{"version":"18.2.0"},"classnames":{"version":"2.3.2"}},"componentName":"alert","identifier":"alert-basic"},
  },
  'button-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_nottub" */'D:/MyReactComponents/src/button/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode5},"index.tsx":{"import":"../index","content":rawCode6},"style/index.ts":{"import":"../style","content":rawCode7},"style/index.scss":{"import":"./index.scss","content":rawCode8}},"dependencies":{"react":{"version":"18.2.0"},"classnames":{"version":"2.3.2"}},"componentName":"button","identifier":"button-basic"},
  },
  'image-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_egami" */'D:/MyReactComponents/src/image/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode9},"index.tsx":{"import":"../index","content":rawCode10},"useImage.ts":{"import":"./useImage","content":rawCode11},"style/index.scss":{"import":"../style/index.scss","content":rawCode12}},"dependencies":{"react":{"version":"18.2.0"},"classnames":{"version":"2.3.2"}},"componentName":"image","identifier":"image-basic"},
  },
  'image-previewimage': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_egami" */'D:/MyReactComponents/src/image/demo/previewImage.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode13},"index.tsx":{"import":"../index","content":rawCode10},"useImage.ts":{"import":"./useImage","content":rawCode11},"style/index.scss":{"import":"../style/index.scss","content":rawCode12}},"dependencies":{"react":{"version":"18.2.0"},"classnames":{"version":"2.3.2"}},"componentName":"image","identifier":"image-previewimage"},
  },
  'image-loaderimage': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_egami" */'D:/MyReactComponents/src/image/demo/loaderImage.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode14},"index.tsx":{"import":"../index","content":rawCode10},"useImage.ts":{"import":"./useImage","content":rawCode11},"style/index.scss":{"import":"../style/index.scss","content":rawCode12}},"dependencies":{"react":{"version":"18.2.0"},"classnames":{"version":"2.3.2"}},"componentName":"image","identifier":"image-loaderimage"},
  },
};
