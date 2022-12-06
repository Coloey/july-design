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
          "title": "Alert 警告提示",
          "group": {
            "title": "组件",
            "order": 1,
            "__fallback": true,
            "path": "/alert"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Alert 警告提示",
              "heading": "alert-警告提示"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Alert 警告提示 - july design"
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
            "title": "组件",
            "order": 2,
            "__fallback": true,
            "path": "/button"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Button 按钮",
              "heading": "button-按钮"
            },
            {
              "depth": 3,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
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
          "title": "Image 图片",
          "group": {
            "title": "组件",
            "order": 3,
            "__fallback": true,
            "path": "/image"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Image 图片",
              "heading": "image-图片"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 4,
              "value": "图片加载失败",
              "heading": "图片加载失败"
            },
            {
              "depth": 4,
              "value": "预览图片,图片部分加载失败",
              "heading": "预览图片图片部分加载失败"
            },
            {
              "depth": 4,
              "value": "当网络速度较慢时，设置加载中占位",
              "heading": "当网络速度较慢时设置加载中占位"
            },
            {
              "depth": 4,
              "value": "预览一组图片",
              "heading": "预览一组图片"
            },
            {
              "depth": 3,
              "value": "previewType",
              "heading": "previewtype"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Image 图片 - july design"
      },
      {
        "path": "/upload",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'upload__index.md' */'D:/MyReactComponents/src/upload/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/upload/index.md",
          "updatedTime": 1666535040957,
          "title": "Upload",
          "group": {
            "title": "组件",
            "order": 5,
            "__fallback": true,
            "path": "/upload"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Upload 上传文件组件",
              "heading": "upload-上传文件组件"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
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
            "title": "组件",
            "order": 4,
            "__fallback": true,
            "path": "/vitual-list"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "VirtualList 虚拟列表",
              "heading": "virtuallist-虚拟列表"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
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
