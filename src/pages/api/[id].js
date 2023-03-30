import { connect } from "@/models"
import { ObjectId } from "mongodb"

const handler = async (req, res) => {
    const collection = connect('saci', 'medidas')
    const data = await collection.find().toArray()
    const { body, method, query:{id} } = req
    switch (method) {
        case 'GET': {
            const result = await collection.findOne({ _id: new ObjectId(id) })
            return res.status(200).json(result)
        }
        case 'PUT':{
            await collection.updateOne({ _id: new ObjectId(id) }, { $set: body })
            return res.status(200).json({ msj: 'updated' })
        }
        case 'DELETE':{
            await collection.deleteOne({ _id: new ObjectId(id) })
            return res.status(200).json({ msj: 'deleted' })
        }
        default:
            return res.status(405).json({ msj: 'method not allowed' })
    }
}
export default handler