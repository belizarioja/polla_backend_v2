import { Request, Response } from 'express'
// DB
import { connect } from '../database'
// Interfaces
import { Resultado } from '../interface/Resultado'

export async function getResultados (req: Request, res: Response): Promise<Response | void> {
    try {
        const id = req.params.id;
        const conn = await connect();
        const sql = "SELECT * FROM t_resultados ";
        const where = " WHERE co_jornada = ? ORDER BY 1 ASC ";
        const resp = await conn.query(sql + where, [id]);
        return res.status(200).send(resp[0]);
    }
    catch (e) {
        return res.status(500).send('Error listando resultados : ' + e);
    }
}

export async function createResultado (req: Request, res: Response) {
    try {
        const newResultado: Resultado = req.body;
        const conn = await connect();
        const sql = "INSERT INTO  t_resultados SET ? ";
        await conn.query(sql, [newResultado]);
        return res.status(200).send('Resultado creado con éxito');
    }
    catch (e) {
        return res.status(500).send('Error creando resultado : ' + e);
    }
}
export async function updateResultado (req: Request, res: Response) {
    try {
        const id = req.params.id;
        const { lugar, resultado } = req.body;
        const conn = await connect();
        const update = "UPDATE t_resultados ";
        let set = ""
        if (lugar === 1) {
            set = " set nu_lugar1 = ? "
        }
        if (lugar === 2) {
            set = " set nu_lugar2 = ? "
        }
        if (lugar === 3) {
            set = " set nu_lugar3 = ? "
        }
        const where = " where co_resultado = ? "
        await conn.query(update + set + where, [resultado, id]);
        return res.status(200).send('Resultado editado con éxito');
    }
    catch (e) {
        return res.status(500).send('Error editando resultado : ' + e);
    }
}

export async function deleteResultado (req: Request, res: Response) {
    try {
        const id = req.params.id;
        const conn = await connect();
        await conn.query('DELETE FROM t_resultados WHERE co_resultado = ?', [id]);
        return res.status(200).send('Resultado eliminado con éxito');
    }
    catch (e) {
        return res.status(500).send('Error creando resultado : ' + e);
    }
}