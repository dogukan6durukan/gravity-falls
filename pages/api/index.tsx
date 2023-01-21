import { NextApiRequest, NextApiResponse } from "next";
import { Routes } from "../../types/routeTypes";

type Route = Routes['server'];

const route : Route = { 
    base : `${process.env.NEXT_PUBLIC_BASE_URL}/api/characters`
}

export default function handler(req : NextApiRequest, res : NextApiResponse) {
    if(req.method === "GET") {
        res.send({ characters : route.base });
    }
}