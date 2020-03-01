//获取应用实例
const app = getApp()

// 调用 Page() 来注册一个页面，接受一个 Object 类型的参数
// 参数用来指定页面的 初始数据 生命周期回调 事件处理函数 等
Page({
  // 类似于 vue 中的 data
  data: {
   msg: "Hello 小程序",
   msg2: "Hello 小程序2",
   imgUrl: "/assets/home.png",
   age: 18,
   list: [
     { id: 1, name: "我是1" },
     { id: 2, name: "我是2" },
     { id: 3, name: "我是3" }
   ]
  },
  // vue 中的方法在 methods 中，微信小程序不需要，直接写就行
  // 取出传递过来的参数 通过 event.currentTarget.dataset 获取到自定义属性
  testFn(event){
    console.log(event.currentTarget.dataset.id)
    // 获取 data 里的值通过 this.data.msg
    // 在小程序中数据不是双向数据绑定，当 data 中的数据发生改变，视图中的数据并没有跟着改变
    // this.data.msg = "我是消息啊"; // 不会改变视图中的数据，只是修改了 逻辑层 的数据
    // 通过 setData 将数据从 逻辑层 发送到 视图层(异步) 同时改变 this.data 的值(同步) 
    // 方式一
    // this.setData({
    //   msg: "我是消息啊"
    // })
    // 方式二
    // this.data.msg = "我是消息啊";
    // this.setData(this.data);
    console.log(this.data.msg)
  },
  changeMsg(e){
    // setData只是实现了单向数据绑定，从 逻辑层 到 视图层 的绑定
    // 如何实现双向数据绑定，给 视图层的 组件绑定事件，通过事件来修改 逻辑层 的数据
    // 先获取到输入框的值，再调用setData方法
    // 获取输入框的值不通过 自定义属性 通过 e.detail.value
    this.data.msg = e.detail.value
    this.setData(this.data)
  },

  // 生命周期相关函数(5个)
  
  // 页面 加载 的时候，只会调用一次
  onLoad(){

  },

  // 页面 显示 的时候
  onShow(){

  },

  // 页面 初次渲染完成 的时候，只会调用一次
  onReady(){
    // 这里代表 页面 已经准备妥当，可以和 视图层 进行交互
    // 例如 设置导航栏 标题
    wx.setNavigationBarTitle({
      title: '我是首页',
    })
  },

  // 页面 隐藏 的时候
  onHide(){

  },

  // 页面 卸载 的时候，如 redirectTo 或 navigateBack 到其他页面时  
  onUnload(){

  }

})
