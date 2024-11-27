//Express

import express from 'express';

class Server {
    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
    }

    start(callback: () => void) {
        this.app.listen(this.port, callback);
    }
}
export default Server;