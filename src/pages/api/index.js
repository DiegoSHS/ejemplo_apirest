import { connect } from "@/models"
import { formatter } from "@/utils/formatter"

const handler = async (req, res) => {
    const collection = connect('saci', 'medidas')
    const { body,body:{sens}, method } = req
    switch (method) {
        case 'GET':{
            try {
                const result = await collection.aggregate([{$project:{_id:0}}]).toArray()
                return res.status(200).json(result)
            } catch (error) {
                console.log(error)
                return
            }
        }
        case 'POST': {
            try {
                const date = formatter(new Date(), 'datetime')
                const data = { ...body, date}
                await collection.insertOne(data)
                return res.status(200).json({ msj: 'created' })
            } catch (error) {
                console.log(error)
                return
            }
        }
        case 'PUT':{
            try {
                await collection.updateMany({},{$set: {sensor:sens}})
                return res.status(200).json({ msj: 'updated' })
            } catch (error) {
                console.log(error)
                return
            }
        }
        case 'DELETE':{
            try {
                await collection.deleteMany({})
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