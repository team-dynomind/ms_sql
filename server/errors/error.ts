import { Request, Response } from 'express';

export default async(err: Error, req: Request, res: Response, next: any) => {
    res.status(500).send(err.message);
}