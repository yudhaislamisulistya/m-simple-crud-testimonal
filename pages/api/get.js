import { connect } from "../../lib/mongodb";

export default async function(req, res){
    if(req.method !== 'GET'){
        res.status(403).send('Method Not Allowed')
        return
    }
    try {
        const { db } = await connect()
        const data = await db
            .collection("testimonials")
            .find({})
            .sort({'_id': -1})
            .toArray();

        res.status(200).json({
            data: data,
            status: 'success',
            code: 200
        })
    } catch (error) {
        res.status(500).send({
            error: error
        })
    }
}