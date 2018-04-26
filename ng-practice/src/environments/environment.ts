// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  demoList: [{
    link: 'muuri',
    displayValue: 'Muuri Demo',
    module: './muuri-demo/muuri-demo.module#MuuriDemoModule'
  }, {
    link: 'demo1',
    displayValue: 'Demo1',
    module: './muuri-demo/muuri-demo.module#MuuriDemoModule'
  }, {
    link: 'demo2',
    displayValue: 'Demo2',
    module: './muuri-demo/muuri-demo.module#MuuriDemoModule'
  }, {
    link: 'demo3',
    displayValue: 'Demo3',
    module: './muuri-demo/muuri-demo.module#MuuriDemoModule'
  }]
};
