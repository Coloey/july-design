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
import rawCode12 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/image/Preview.tsx?dumi-raw-code';
import rawCode13 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/image/PreviewGroup.tsx?dumi-raw-code';
import rawCode14 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/image/style/index.scss?dumi-raw-code';
import rawCode15 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/image/demo/previewImage.tsx?dumi-raw-code';
import rawCode16 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/image/demo/loaderImage.tsx?dumi-raw-code';
import rawCode17 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/image/demo/previewgroup.tsx?dumi-raw-code';
import rawCode18 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/upload/demo/base.tsx?dumi-raw-code';
import rawCode19 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/upload/Upload.tsx?dumi-raw-code';
import rawCode20 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/upload/AjaxUpload.tsx?dumi-raw-code';
import rawCode21 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/upload/uid.ts?dumi-raw-code';
import rawCode22 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/upload/attr-accept.ts?dumi-raw-code';
import rawCode23 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/upload/request.ts?dumi-raw-code';
import rawCode24 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/upload/demo/beforeUpload.tsx?dumi-raw-code';
import rawCode25 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/vitual-list/demo/basic.tsx?dumi-raw-code';
import rawCode26 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/vitual-list/index.tsx?dumi-raw-code';
import rawCode27 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/vitual-list/utils/getListHeight.ts?dumi-raw-code';
import rawCode28 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/vitual-list/utils/getStartOffset.ts?dumi-raw-code';
import rawCode29 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/vitual-list/utils/updateItemSize.ts?dumi-raw-code';
import rawCode30 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/vitual-list/utils/initPositionCache.ts?dumi-raw-code';
import rawCode31 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/vitual-list/utils/binarySearch.ts?dumi-raw-code';
import rawCode32 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/vitual-list/utils/getEndIndex.ts?dumi-raw-code';
import rawCode33 from '!!dumi-raw-code-loader!D:/MyReactComponents/src/vitual-list/utils/isFF.ts?dumi-raw-code';

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
    previewerProps: {"sources":{"_":{"tsx":rawCode9},"index.tsx":{"import":"../index","content":rawCode10},"useImage.ts":{"import":"./useImage","content":rawCode11},"Preview.tsx":{"import":"./Preview","content":rawCode12},"PreviewGroup.tsx":{"import":"./PreviewGroup","content":rawCode13},"style/index.scss":{"import":"../style/index.scss","content":rawCode14}},"dependencies":{"react":{"version":"18.2.0"},"classnames":{"version":"2.3.2"}},"componentName":"image","identifier":"image-basic"},
  },
  'image-previewimage': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_egami" */'D:/MyReactComponents/src/image/demo/previewImage.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode15},"index.tsx":{"import":"../index","content":rawCode10},"useImage.ts":{"import":"./useImage","content":rawCode11},"Preview.tsx":{"import":"./Preview","content":rawCode12},"PreviewGroup.tsx":{"import":"./PreviewGroup","content":rawCode13},"style/index.scss":{"import":"../style/index.scss","content":rawCode14}},"dependencies":{"react":{"version":"18.2.0"},"classnames":{"version":"2.3.2"}},"componentName":"image","identifier":"image-previewimage"},
  },
  'image-loaderimage': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_egami" */'D:/MyReactComponents/src/image/demo/loaderImage.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode16},"index.tsx":{"import":"../index","content":rawCode10},"useImage.ts":{"import":"./useImage","content":rawCode11},"Preview.tsx":{"import":"./Preview","content":rawCode12},"PreviewGroup.tsx":{"import":"./PreviewGroup","content":rawCode13},"style/index.scss":{"import":"../style/index.scss","content":rawCode14}},"dependencies":{"react":{"version":"18.2.0"},"classnames":{"version":"2.3.2"}},"componentName":"image","identifier":"image-loaderimage"},
  },
  'image-previewgroup': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_egami" */'D:/MyReactComponents/src/image/demo/previewgroup.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode17},"index.tsx":{"import":"../index","content":rawCode10},"useImage.ts":{"import":"./useImage","content":rawCode11},"Preview.tsx":{"import":"./Preview","content":rawCode12},"PreviewGroup.tsx":{"import":"./PreviewGroup","content":rawCode13},"style/index.scss":{"import":"../style/index.scss","content":rawCode14}},"dependencies":{"react":{"version":"18.2.0"},"classnames":{"version":"2.3.2"}},"componentName":"image","identifier":"image-previewgroup"},
  },
  'upload-base': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/MyReactComponents/src/upload/demo/base.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode18},"Upload.tsx":{"import":"../Upload","content":rawCode19},"AjaxUpload.tsx":{"import":"./AjaxUpload","content":rawCode20},"uid.ts":{"import":"./uid","content":rawCode21},"attr-accept.ts":{"import":"./attr-accept","content":rawCode22},"request.ts":{"import":"./request","content":rawCode23}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"upload-base"},
  },
  'upload-beforeupload': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/MyReactComponents/src/upload/demo/beforeUpload.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode24},"Upload.tsx":{"import":"../Upload","content":rawCode19},"AjaxUpload.tsx":{"import":"./AjaxUpload","content":rawCode20},"uid.ts":{"import":"./uid","content":rawCode21},"attr-accept.ts":{"import":"./attr-accept","content":rawCode22},"request.ts":{"import":"./request","content":rawCode23}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"upload-beforeupload"},
  },
  'vitual-list-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_tsil-lautiv" */'D:/MyReactComponents/src/vitual-list/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode25},"index.tsx":{"import":"../index","content":rawCode26},"utils/getListHeight.ts":{"import":"./utils/getListHeight","content":rawCode27},"utils/getStartOffset.ts":{"import":"./utils/getStartOffset","content":rawCode28},"utils/updateItemSize.ts":{"import":"./utils/updateItemSize","content":rawCode29},"utils/initPositionCache.ts":{"import":"./utils/initPositionCache","content":rawCode30},"utils/binarySearch.ts":{"import":"./utils/binarySearch","content":rawCode31},"utils/getEndIndex.ts":{"import":"./utils/getEndIndex","content":rawCode32},"utils/isFF.ts":{"import":"./utils/isFF","content":rawCode33}},"dependencies":{"react":{"version":"18.2.0"}},"componentName":"vitual-list","identifier":"vitual-list-basic"},
  },
};
