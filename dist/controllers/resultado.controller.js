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
exports.deleteResultado = exports.updateResultado = exports.createResultado = exports.getResultados = void 0;
// DB
const database_1 = require("../database");
function getResultados(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            const id = req.params.id;
            const conn = yield (0, database_1.connect)();
            const sql = "SELECT * FROM t_resultados ";
            const where = " WHERE co_jornada = ? ORDER BY 1 ASC ";
            const resp = yield conn.query(sql + where, [id]);
            return res.status(200).send(resp[0]);
        }
        catch (e) {
            return res.status(500).send('Error listando resultados : ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.getResultados = getResultados;
function createResultado(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            const newResultado = req.body;
            const conn = yield (0, database_1.connect)();
            const sql = "INSERT INTO  t_resultados SET ? ";
            yield conn.query(sql, [newResultado]);
            return res.status(200).send('Resultado creado con éxito');
        }
        catch (e) {
            return res.status(500).send('Error creando resultado : ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.createResultado = createResultado;
function updateResultado(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            const id = req.params.id;
            const { lugar, resultado } = req.body;
            const conn = yield (0, database_1.connect)();
            const update = "UPDATE t_resultados ";
            let set = "";
            if (lugar === 1) {
                set = " set nu_lugar1 = ? ";
            }
            if (lugar === 2) {
                set = " set nu_lugar2 = ? ";
            }
            if (lugar === 3) {
                set = " set nu_lugar3 = ? ";
            }
            const where = " where co_resultado = ? ";
            yield conn.query(update + set + where, [resultado, id]);
            return res.status(200).send('Resultado editado con éxito');
        }
        catch (e) {
            return res.status(500).send('Error editando resultado : ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.updateResultado = updateResultado;
function deleteResultado(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            const id = req.params.id;
            const conn = yield (0, database_1.connect)();
            yield conn.query('DELETE FROM t_resultados WHERE co_resultado = ?', [id]);
            return res.status(200).send('Resultado eliminado con éxito');
        }
        catch (e) {
            return res.status(500).send('Error creando resultado : ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.deleteResultado = deleteResultado;
//# sourceMappingURL=resultado.controller.js.map