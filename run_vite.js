
import { createServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    try {
        const server = await createServer({
            // any valid user config options, plus `mode` and `configFile`
            root: __dirname,
            server: {
                port: 3000,
                host: '0.0.0.0'
            }
        });
        await server.listen();
        server.printUrls();
        console.log('Server is running and listening for connections...');
    } catch (e) {
        console.error('Vite failed to start:', e);
        process.exit(1);
    }
})();
