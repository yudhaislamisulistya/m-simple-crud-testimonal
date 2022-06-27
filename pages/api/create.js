import { connect } from "../../util/mongodb"

export default async function(req, res){

    if(req.method !== 'POST'){
        return res.status(405).json({
            code: 405,
            message: 'Method not allowed'
        })
    }
    const {name, comment, star} = req.body
    if(!name || !comment || !star){
        return res.status(400).json({
            code: 400,
            message: 'Bad request'
        })
    }
    const { db } = await connect()

    const collection = db.collection('testimonials')
    const result = await collection.insertOne({name, comment, star})

    res.status(200).send({
        success: true,
        code: 200,
        data: {
            id: result.insertedId,
            name,
            comment,
            star
        }
    })
}