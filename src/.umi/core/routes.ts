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
        "path": "/alert",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'alert__index.md' */'D:/MyReactComponents/src/alert/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/alert/index.md",
          "updatedTime": 1662867725000,
          "componentName": "alert",
          "title": "Alert 警告提示",
          "group": {
            "title": "反馈",
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
          "updatedTime": 1663243199907,
          "componentName": "button",
          "title": "Button",
          "group": {
            "title": "反馈",
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
