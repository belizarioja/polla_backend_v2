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
exports.updateJornada = exports.createJornada = exports.getJornadasActivas = exports.getJornadas = void 0;
// DB
const database_1 = require("../database");
function getJornadas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            const id = req.params.id;
            const conn = yield (0, database_1.connect)();
            const sql = "SELECT * FROM t_jornadas ";
            const where = " WHERE co_sede = ? ORDER BY 1 ASC ";
            const resp = yield conn.query(sql + where, [id]);
            return res.status(200).send(resp[0]);
        }
        catch (e) {
            return res.status(500).send('Error listando jornada : ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.getJornadas = getJornadas;
function getJornadasActivas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            const id = req.params.id;
            const conn = yield (0, database_1.connect)();
            const sql = "SELECT * FROM t_jornadas ";
            const where = " WHERE in_activa = 1 AND co_sede = ? ORDER BY 1 ASC ";
            const resp = yield conn.query(sql + where, [id]);
            return res.status(200).send(resp[0]);
        }
        catch (e) {
            return res.status(500).send('Error listando jornada Activas : ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.getJornadasActivas = getJornadasActivas;
function createJornada(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            const newJornada = req.body;
            const conn = yield (0, database_1.connect)();
            const sql = "INSERT INTO  t_jornadas SET ? ";
            yield conn.query(sql, [newJornada]);
            return res.status(200).send('Jornada creada con éxito');
        }
        catch (e) {
            return res.status(500).send('Error creando jornada : ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.createJornada = createJornada;
function updateJornada(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            const id = req.params.id;
            const { in_activa } = req.body;
            const conn = yield (0, database_1.connect)();
            const update = "UPDATE t_jornadas ";
            const set = " SET in_activa = ? WHERE co_jornada = ? ";
            yield conn.query(update + set, [in_activa, id]);
            return res.status(200).send('Jornada editada con éxito');
        }
        catch (e) {
            return res.status(500).send('Error editando jornada : ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.updateJornada = updateJornada;
//# sourceMappingURL=jornada.controller.js.map