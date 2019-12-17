module.exports = [
  {
    _id: '956f709154e74eb18c9938cc6c600838',
    data: {
      code: 20000,
      data: {
        token: 'admin-token'
      }
    },
    enableMock: true,
    method: 'post',
    name: 'login',
    url: '/user/login'
  },
  {
    _id: '956f709154e74eb18c9938cc6c600839',
    data: {
      code: 20000,
      data: {
        avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        introduction: "I am a super administrator",
        name: "Super Admin",
        roles: ["admin"]
      }
    },
    enableMock: true,
    method: 'get',
    name: 'getInfo',
    url: '/user/:id/:name/info'
  },
  {
    _id: '956f709154e74eb18c9938cc6c600840',
    data: {
      code: 20000,
      data: 'success'
    },
    enableMock: true,
    method: 'post',
    name: 'logout',
    url: '/user/logout'
  }
];
