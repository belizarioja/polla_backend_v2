import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'

// Routes
import IndexRoutes from './routes/index.routes'
import UsuarioRoutes from './routes/usuario.routes'
import JornadaRoutes from './routes/jornada.routes'
import ResultadoRoutes from './routes/resultado.routes'
import JugadaRoutes from './routes/jugada.routes'
import SedeRoutes from './routes/sede.routes'

export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings () {
        this.app.set('port', this.port || process.env.PORT || 5001);
        this.app.set('server', process.env.SERVER || '');
        // this.app.set('server', process.env.SERVER || '/polla_backend_v2');
    }

    private middlewares () {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors({
            origin: '*'
        }));
    }

    private routes () {
        this.app.use(this.app.get('server'), IndexRoutes);
        this.app.use(this.app.get('server') + '/usuario', UsuarioRoutes);
        this.app.use(this.app.get('server') + '/jornada', JornadaRoutes);
        this.app.use(this.app.get('server') + '/resultado', ResultadoRoutes);
        this.app.use(this.app.get('server') + '/jugada', JugadaRoutes);
        this.app.use(this.app.get('server') + '/sede', SedeRoutes);
    }

    async listen () {
        await this.app.listen(this.app.get('port'));
        console.log('Servidor en puerto ', this.app.get('port'));
        console.log('Servidor en carpeta ', this.app.get('server'));
    }

}