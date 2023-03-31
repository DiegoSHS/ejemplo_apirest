import { connect } from "@/models"
import { ObjectId } from "mongodb"

const handler = async (req, res) => {
    const collection = connect('saci', 'medidas')
    const { body, method, query:{id} } = req
    switch (method) {
        case 'GET': {
            try {
                const result = await collection.findOne({ _id: new ObjectId(id) })
                return res.status(200).json(result)
            } catch (error) {
                console.log(error)
                return
            }
        }
        case 'PUT':{
            try {
                await collection.updateOne({ _id: new ObjectId(id) }, { $set: body })
                return res.status(200).json({ msj: 'updated' })
            } catch (error) {
                console.log(error)
                return
            }
        }
        case 'DELETE':{
            try {
                await collection.deleteOne({ _id: new ObjectId(id) })
                return res.status(200).json({ msj: 'deleted' })
            } catch (error) {
                console.log(error)
                return
            }
        }
        default:
            return res.status(405).json({ msj: 'method not allowed' })
    }
}
export default handler