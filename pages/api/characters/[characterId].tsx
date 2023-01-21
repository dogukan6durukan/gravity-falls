import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { Characters } from "@prisma/client";

const client = new PrismaClient();

export default async function handler(req : NextApiRequest,  res : NextApiResponse<Characters | { err : string }>) {

    if(req.method === 'GET') {

        try {

            const id = req.query.characterId as string;
            const idNum = parseInt(id);
            const character = await client.characters.findUnique({ where : { id : idNum } });

            res.send(character!);

            
        }catch(err) {
            res.status(500).json({ err : "Something went wrong!" });
            console.log(err);
        }

    }

}