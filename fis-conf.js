// npm install -g fis3-postpackager-loader
fis.match('::package', {
  postpackager: fis.plugin('loader', {})
});

// widget 目录下为组件
fis.match('/widget/**.js', {
  isMod: true
});

fis.match('/modules/**.js', {
  isMod: true
});