module.exports = [
  {
    _id: 'ab05527d-4829-42ed-86d9-b93a6e5c1890',
    data: {
      name: 'boss soft',
    },
    enableMock: true,
    name: 'test',
    url: '/test/getInfo',
    method: 'get',
  },{
    _id: 'ab05527d-4829-42ed-86d9-b93a6e5c1890',
    data: {
      data:{
        "list|10": [
          {
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
    method: 'get',
  },
];
