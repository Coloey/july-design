// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/myreactcomponents/src/alert/demo/basic.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/myreactcomponents/src/alert/index.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!D:/myreactcomponents/src/alert/style/index.ts?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!D:/myreactcomponents/src/alert/style/index.scss?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!D:/myreactcomponents/src/button/demo/basic.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!D:/myreactcomponents/src/button/index.tsx?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!D:/myreactcomponents/src/button/style/index.ts?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!D:/myreactcomponents/src/button/style/index.scss?dumi-raw-code';

export default {
  'alert-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trela" */'D:/myreactcomponents/src/alert/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"index.tsx":{"import":"../index","content":rawCode2},"style/index.ts":{"import":"../style","content":rawCode3},"style/index.scss":{"import":"./index.scss","content":rawCode4}},"dependencies":{"react":{"version":"18.2.0"},"classnames":{"version":"2.3.2"}},"componentName":"alert","identifier":"alert-basic"},
  },
  'button-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_nottub" */'D:/myreactcomponents/src/button/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode5},"index.tsx":{"import":"../index","content":rawCode6},"style/index.ts":{"import":"../style","content":rawCode7},"style/index.scss":{"import":"./index.scss","content":rawCode8}},"dependencies":{"react":{"version":"18.2.0"},"classnames":{"version":"2.3.2"}},"componentName":"button","identifier":"button-basic"},
  },
};
