// console.log('Hallo kita akan membuat RESTful API');
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    // host: '192.168.18.44',
    routes: {
        cors: {
            // origin: ['*'],
        origin: ['http://notesapp-v1.dicodingacademy.com'], // Domain yang diizinkan
            credentials: true, 
        },
      },
  });
 
  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();