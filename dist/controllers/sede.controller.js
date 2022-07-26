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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSede = exports.createSede = exports.getSedes = void 0;
// import moment from 'moment'
// DB
const database_1 = require("../database");
function getSedes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            const sql = "SELECT * FROM t_sedes ";
            const resp = yield conn.query(sql);
            return res.json(resp[0]);
        }
        catch (e) {
            return res.status(500).send('Error listando sedes: ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.getSedes = getSedes;
function createSede(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            const newSede = req.body;
            yield conn.query('INSERT INTO t_sedes SET ?', [newSede]);
            return res.status(200).send('Sede creado con éxito');
        }
        catch (e) {
            return res.status(500).send('Error Creando sede: ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.createSede = createSede;
function updateSede(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            const id = req.params.postId;
            const updateSede = req.body;
            yield conn.query('UPDATE t_sedes set ? WHERE id = ?', [updateSede, id]);
        }
        catch (e) {
            return res.status(500).send('Error Actualizando sede: ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.updateSede = updateSede;
//# sourceMappingURL=sede.controller.js.map