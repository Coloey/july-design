import { defineConfig } from 'dumi';
let base = '/july-design';
let publicPath = '/july-design/';
if(process.env.SITE_BUID_ENV === 'PREVIEW'){
  base = undefined;
  publicPath = undefined;
}
export default defineConfig({
  title: 'july design', // 站点名称
  mode: 'doc',
  outputPath: 'doc-site', // 输出文件夹
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  base,
  publicPath,
  "sass":{},
});