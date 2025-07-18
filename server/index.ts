// This is a simple wrapper to run standard Vite dev server
process.chdir(process.cwd());
import('vite').then(({ createServer }) => {
  createServer({
    server: {
      host: '0.0.0.0',
      port: 5000
    }
  }).then(server => {
    server.listen();
    console.log('Vite dev server running on port 5000');
  });
}).catch(console.error);