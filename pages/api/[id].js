import { ObjectId } from "mongodb"
import { connect } from "../../lib/mongodb"

export default async function(req, res){
    if(req.method !== 'GET'){
        return res.status(405).json({
            code: 405,
            message: 'Method not allowed'
        })
    }
    const { id } = req.query
    const { db } = await connect()

    const collection = db.collection('testimonials')
    const result = await collection.findOne({_id: ObjectId(id)})


    res.status(200).send({
        success: true,
        code: 200,
        data: !result ? 'Data not found' : result
    })
}