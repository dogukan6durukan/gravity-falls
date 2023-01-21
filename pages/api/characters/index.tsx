import { NextApiRequest, NextApiResponse } from "next";
import { Characters, Prisma, PrismaClient } from "@prisma/client";


const client = new PrismaClient();

interface QueryConfig {
    take? : number,
    skip? : number,
    where? : Prisma.CharactersWhereInput
}


export default async function handler(req : NextApiRequest , res : NextApiResponse<Characters[] | { err : string }>) {

    if(req.method === 'GET') {

        try {
            const query = req.query;
            // TODO : Apply 
            const { take, skip, name, episode } = query;

            const takeStr = take as string
            const skipStR = skip as string

            const queryConifg : QueryConfig = {};

            if(takeStr) {
                const take = parseInt(takeStr);

                if(isNaN(take)) {
                    return res.status(400).json({ err : "Please enter a valid number!" });
                }

                queryConifg.take = take;

            }

            if(skipStR) {
                const skip = parseInt(skipStR);

                if(isNaN(skip)) {
                    return res.status(400).json({ err : "Please enter a valid number!" });
                }

                queryConifg.skip = skip

            }
            

            if(name) {
                if(!String(name)) {
                    return res.status(400).json({ err : 'Please enter a valid name!' });
                }

                queryConifg.where = { name : { contains : name as string } };

            }

            if(episode) {
                if(!String(episode)) {
                    return res.status(400).json({ err : 'Please enter a valid name!' });
                }

                const quoteResult = { episode : { contains : episode as string } }

                queryConifg.where = { ...queryConifg.where!,  ...quoteResult}

            }

        
            const characters = await client.characters.findMany(queryConifg);
            if(characters.length < 1) {
                return res.send({ err : 'There is nothing here'});
            } 

            return res.json(characters);



        } catch(err) {
            res.status(500).json({ err : "Something went wrong!" })
        }

    }

}