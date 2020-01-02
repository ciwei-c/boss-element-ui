module.exports = [
  {
    data: {
      'list':[{
        'label':'一级 1'
      },{
        'label':'一级 2'
      },{
        'label':'二级 1-1'
      }]
    },
    enableMock: true,
    name: 'test',
    url: '/trees',
    method: 'post',
  },{
    data: {
      data:{
        "list|10": [
          {
            "id|+1": 1,
            "name":"@cname",
            "age|1-100":10,
            "date":"@date",
            "address":"@city(true)"
          }
        ]
      },
      total:50
    },
    enableMock: true,
    name: 'table',
    url: '/tables',
    method: 'post',
  },
];
