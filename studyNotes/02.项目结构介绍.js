// 1.所有的页面都放在 pages 中
// 2.每个页面都是以文件夹的形式存在，里面包括四个文件：js json wxml wxss
// 3.app.js 整个项目的通用 js 文件，用来写通用的逻辑
// 4.app.wxss 整个项目的通用 css 文件，用来写通用的样式
// 5.app.json 整个项目的通用配置，用来写 所有页面路径、界面表现、网络超时时间、底部tab等
// 6.project.config.json 文件，对应 右边点击 工具栏的详情按钮 -> 项目配置
//   作用：每个人拿到项目以后，会根据 project.config.json 文件自动配置，保证每个人的配置都是一致的
// 7.一般会在根目录下创建 assets 文件夹，用来存放资源文件

// app.json 配置(全局配置)
// 1.pages 
// 用来配置页面，配置一条 路径 就能自动 创建 一个文件夹(页面)，里面包括 js json wxml wxss
// 因此创建 页面 就在 app.json 里配置就行了，如果删除了某个文件夹，app.json 里对应的也得删除
// 小程序加载的第一个页面是 app.json 里 pages 中的第一条(首页，启动页)
// 2.window
// 用来配置 导航栏背景色 标题字体颜色 标题 等
// 3.tabBar
// 如果小程序是多tab应用，用tabBar来配置 底部最少2个最多5个的 tab

// index.json 配置(页面配置)
// 可以覆盖 全局配置 里的 window