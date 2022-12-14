// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'D:/MyReactComponents/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ 'D:/MyReactComponents/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'D:/MyReactComponents/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'README.md' */'D:/MyReactComponents/README.md')}),
        "exact": true,
        "meta": {
          "locale": "en-US",
          "order": null,
          "filePath": "README.md",
          "updatedTime": 1665320727000,
          "slugs": [
            {
              "depth": 1,
              "value": "july-design",
              "heading": "july-design"
            },
            {
              "depth": 3,
              "value": "https://coloey.github.io/july-design/",
              "heading": "httpscoloeygithubiojuly-design"
            }
          ],
          "title": "july-design"
        },
        "title": "july-design"
      },
      {
        "path": "/alert",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'alert__index.md' */'D:/MyReactComponents/src/alert/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/alert/index.md",
          "updatedTime": 1663683957000,
          "componentName": "alert",
          "title": "Alert ????????????",
          "group": {
            "title": "??????",
            "order": 1,
            "__fallback": true,
            "path": "/alert"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Alert ????????????",
              "heading": "alert-????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 3,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Alert ???????????? - july design"
      },
      {
        "path": "/button",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'button__index.md' */'D:/MyReactComponents/src/button/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/button/index.md",
          "updatedTime": 1663683957000,
          "componentName": "button",
          "title": "Button",
          "group": {
            "title": "??????",
            "order": 2,
            "__fallback": true,
            "path": "/button"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Button ??????",
              "heading": "button-??????"
            },
            {
              "depth": 3,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 3,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Button - july design"
      },
      {
        "path": "/image",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'image__index.md' */'D:/MyReactComponents/src/image/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/image/index.md",
          "updatedTime": 1665759106000,
          "componentName": "image",
          "title": "Image ??????",
          "group": {
            "title": "??????",
            "order": 3,
            "__fallback": true,
            "path": "/image"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Image ??????",
              "heading": "image-??????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 3,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 4,
              "value": "??????????????????",
              "heading": "??????????????????"
            },
            {
              "depth": 4,
              "value": "????????????,????????????????????????",
              "heading": "????????????????????????????????????"
            },
            {
              "depth": 4,
              "value": "????????????????????????????????????????????????",
              "heading": "?????????????????????????????????????????????"
            },
            {
              "depth": 4,
              "value": "??????????????????",
              "heading": "??????????????????"
            },
            {
              "depth": 3,
              "value": "previewType",
              "heading": "previewtype"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Image ?????? - july design"
      },
      {
        "path": "/upload",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'upload__index.md' */'D:/MyReactComponents/src/upload/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/upload/index.md",
          "updatedTime": 1670299275000,
          "title": "Upload",
          "group": {
            "title": "??????",
            "order": 5,
            "__fallback": true,
            "path": "/upload"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Upload ??????????????????",
              "heading": "upload-??????????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 3,
              "value": "????????????",
              "heading": "????????????"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Upload - july design"
      },
      {
        "path": "/vitual-list",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'vitual-list__index.md' */'D:/MyReactComponents/src/vitual-list/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/vitual-list/index.md",
          "updatedTime": 1665759106000,
          "componentName": "vitual-list",
          "title": "VitualList",
          "group": {
            "title": "??????",
            "order": 4,
            "__fallback": true,
            "path": "/vitual-list"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "VirtualList ????????????",
              "heading": "virtuallist-????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "VitualList - july design"
      }
    ],
    "title": "july design",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
