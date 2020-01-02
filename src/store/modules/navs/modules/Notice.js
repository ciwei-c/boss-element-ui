export default {
  Notice: [
    {
      route: "/alert",
      title: "Alert 警告",
      desc: "用于页面中展示重要的提示信息。",
      fileSource: "Notice/Alert"
    },
    {
      route: "/loading",
      title: "Loading 加载",
      desc: "加载数据时显示动效。",
      fileSource: "Notice/Loading"
    },
    {
      route: "/message",
      title: "Message 消息提示",
      desc: "常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。",
      fileSource: "Notice/Message"
    },
    {
      route: "/messagebox",
      title: "MessageBox 弹框",
      desc: "模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。",
      fileSource: "Notice/MessageBox"
    },
    {
      route: "/notification",
      title: "Notification 通知",
      desc: "悬浮出现在页面角落，显示全局的通知提醒消息。",
      fileSource: "Notice/Notification"
    }]
}