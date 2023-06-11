import { defineConfig } from 'dumi';
let base = '/july-design/';
let publicPath = '/july-design/';
//通过环境变量区分本地环境，实现本地环境正常预览
if(process.env.SITE_BUID_ENV === 'PREVIEW'){
  base = undefined;
  publicPath = undefined;
}
export default defineConfig({
  title: 'july design', // 站点名称
   // ...
   themeConfig: {
    name: 'dumi2-demo',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '组件', link: '/components/Alert' }, // components会默认自动对应到src文件夹
    ],
  },
  outputPath: 'dist', // 输出文件夹
  exportStatic: false, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  base,
  publicPath,
});