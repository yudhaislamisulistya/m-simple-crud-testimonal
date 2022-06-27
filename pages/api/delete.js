import { ObjectId } from "mongodb"
import { connect } from "../../util/mongodb"

export default async function(req, res){
    if(req.method !== 'DELETE'){
        return res.status(405).json({
            code: 405,
            message: 'Method not allowed'
        })
    }
    const { id } = req.body
    const { db } = await connect()

    const collection = db.collection('testimonials')
    // query get by id mongo db
    const data = await collection.findOne({_id: ObjectId(id)})
    
    if(!data){
        res.status(400).send({
            success: 'error',
            code: 400,
            message: 'Data not found'
        })
    }

    const result = await collection.deleteOne({_id: ObjectId(id)})

    res.status(200).send({
        success: true,
        code: 200,
        data: result,
        dataDeleted:data
    })
}