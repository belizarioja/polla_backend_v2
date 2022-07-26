"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// Routes
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const usuario_routes_1 = __importDefault(require("./routes/usuario.routes"));
const jornada_routes_1 = __importDefault(require("./routes/jornada.routes"));
const resultado_routes_1 = __importDefault(require("./routes/resultado.routes"));
const jugada_routes_1 = __importDefault(require("./routes/jugada.routes"));
const sede_routes_1 = __importDefault(require("./routes/sede.routes"));
class App {
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 5001);
        // this.app.set('server', process.env.SERVER || '');
        this.app.set('server', process.env.SERVER || '/polla_backend_v2');
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)({
            origin: '*'
        }));
    }
    routes() {
        this.app.use(this.app.get('server'), index_routes_1.default);
        this.app.use(this.app.get('server') + '/usuario', usuario_routes_1.default);
        this.app.use(this.app.get('server') + '/jornada', jornada_routes_1.default);
        this.app.use(this.app.get('server') + '/resultado', resultado_routes_1.default);
        this.app.use(this.app.get('server') + '/jugada', jugada_routes_1.default);
        this.app.use(this.app.get('server') + '/sede', sede_routes_1.default);
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log('Servidor en puerto ', this.app.get('port'));
            console.log('Servidor en carpeta ', this.app.get('server'));
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map