import { Request, Response } from 'express'
// DB
import { connect } from '../database'
// Interfaces
import { Jornada } from '../interface/Jornada'

export async function getJornadas (req: Request, res: Response): Promise<Response | void> {
    const conn = await connect();
    try {
        const id = req.params.id;
        const conn = await connect();
        const sql = "SELECT * FROM t_jornadas ";
        const where = " WHERE co_sede = ? ORDER BY 1 ASC ";
        const resp = await conn.query(sql + where, [id]);
        return res.status(200).send(resp[0]);
    }
    catch (e) {
        return res.status(500).send('Error listando jornada : ' + e);
    }
    finally {
        conn.end();
    }
}

export async function getJornadasActivas (req: Request, res: Response): Promise<Response | void> {
    const conn = await connect();
    try {
        const id = req.params.id;
        const conn = await connect();
        const sql = "SELECT * FROM t_jornadas ";
        const where = " WHERE in_activa = 1 AND co_sede = ? ORDER BY 1 ASC ";
        const resp = await conn.query(sql + where, [id]);
        return res.status(200).send(resp[0]);
    }
    catch (e) {
        return res.status(500).send('Error listando jornada Activas : ' + e);
    }
    finally {
        conn.end();
    }
}

export async function createJornada (req: Request, res: Response) {
    const conn = await connect();
    try {
        const newJornada: Jornada = req.body;
        const conn = await connect();
        const sql = "INSERT INTO  t_jornadas SET ? ";
        await conn.query(sql, [newJornada]);
        return res.status(200).send('Jornada creada con éxito');
    }
    catch (e) {
        return res.status(500).send('Error creando jornada : ' + e);
    }
    finally {
        conn.end();
    }
}
export async function updateJornada (req: Request, res: Response) {
    const conn = await connect();
    try {
        const id = req.params.id;
        const { in_activa } = req.body;
        const conn = await connect();
        const update = "UPDATE t_jornadas ";
        const set = " SET in_activa = ? WHERE co_jornada = ? ";
        await conn.query(update + set, [in_activa, id]);
        return res.status(200).send('Jornada editada con éxito');
    }
    catch (e) {
        return res.status(500).send('Error editando jornada : ' + e);
    }
    finally {
        conn.end();
    }
}