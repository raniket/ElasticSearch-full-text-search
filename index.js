const elasticsearch = require('elasticsearch');
const dotenv = require('dotenv');

if (process.env.NODE_ENV = 'test') {
  dotenv.config();
}

const client = new elasticsearch.Client({
  host: `${process.env.HOST}`,
  log: 'trace'
});


// PING TO MY CLUSTAR
  // client.ping({
  //   requestTimeout: 30000,
  // }, function (error) {
  //   if (error) {
  //     console.error('elasticsearch cluster is down!');
  //   } else {
  //     console.log('All is well');
  //   }
  // });

// CREATE INDEX AND DATA INTO THE CLUSTOR
  // client.create({
  //   index: 'myindex',
  //   type: 'mytype',
  //   id: '2',
  //   body: {
  //     title: 'Test 2',
  //     tags: ['r', 'a'],
  //     published: true,
  //     published_at: '2013-01-02',
  //     counter: 3
  //   }
  // }).then((response) => {
  //   console.log('response: ', response);
  // }).catch((error) => {
  //   console.log('error : ', error);
  // })

// SEARCH DATA FROM THE CLUSTOR.
// client.search({
//     index: 'myindex',
//     body: {
//       query: {
//         match: {
//           title: 'Test 2'
//         }
//       }
//     }
//   })
//   .then((result) => {
//     console.log('result : ', result.hits.hits);
//   })
//   .catch((error) => {
//     console.log('error : ', error);
//   });

// GET A PARTICULAR ITEM BY ID
// client.get({
//   index: 'myindex',
//   type: 'mytype',
//   id: '1'
// })
//   .then((response) => {
//     console.log('response : ', response);
//   })
//   .catch((error) => {
//     console.log('error : ', error);
//   });

// GET INFORMATION ABOUT A INDEX OR MANY INDEX
client.indices.get({
  index: 'myindex'
})
  .then((response) => {
    console.log('response :', response);
  })
  .catch((error) => {
    console.log('error : ', error);
  });

