import { ObjectId } from "mongodb"
import { connect } from "../../util/mongodb"

export default async function(req, res){
    if(req.method !== 'PUT'){
        return res.status(405).json({
            code: 405,
            message: 'Method not allowed'
        })
    }
    const { id, name, comment, star } = req.body
    const { db } = await connect()

    const collection = db.collection('testimonials')
    const data = await collection.findOne({_id: ObjectId(id)})

    if(!data){
        res.status(400).send({
            success: 'error',
            code: 400,
            message: 'Data not found'
        })
    }
    
    const result = await collection.updateOne({_id: ObjectId(id)}, {$set: {name, comment, star}})

    res.status(200).send({
        success: true,
        code: 200,
        dataBefore: data,
        dataAfter: {
            id, name, comment, star
        },
        result: result,
    })
}