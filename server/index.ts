import { spawn } from 'child_process';
import { resolve } from 'path';

const isDev = process.env.NODE_ENV === 'development';

async function startServer() {
  if (isDev) {
    // In development, use Vite's dev server from the client directory
    const viteProcess = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
      cwd: resolve(process.cwd(), 'client'),
      stdio: 'inherit'
    });

    viteProcess.on('error', (err) => {
      console.error('Failed to start Vite dev server:', err);
    });

    console.log('Starting Vite dev server...');
  } else {
    // In production, you would serve the built files
    console.log('Production mode not implemented yet');
  }
}

startServer().catch(console.error);