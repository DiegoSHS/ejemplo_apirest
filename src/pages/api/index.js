import { connect } from "@/models"

const handler = async (req, res) => {
    const collection = connect('saci', 'medidas')
    const data = await collection.find().toArray()
    console.log(data)
    const { body,body:{sens}, method } = req
    switch (method) {
        case 'GET':{
            const result = await collection.find({}).toArray()
            return res.status(200).json(result)
        }
        case 'POST': {
            await collection.insertOne(body)
            return res.status(200).json({ msj: 'created' })
        }
        case 'PUT':{
            await collection.updateMany({},{$set: {sensor:sens}})
            return res.status(200).json({ msj: 'updated' })
        }
        case 'DELETE':{
            await collection.deleteMany({})
            return res.status(200).json({ msj: 'deleted' })
        }
        default:
            return res.status(405).json({ msj: 'method not allowed' })
    }
}
export default handler