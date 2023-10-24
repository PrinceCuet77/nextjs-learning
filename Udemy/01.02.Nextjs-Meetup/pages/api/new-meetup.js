// /api/new-meetup
// POST /api/new-meetup

import { MongoClient } from 'mongodb'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body

    // Connect with the MongoDB
    // Return a 'Promise'
    const client = await MongoClient.connect(
      'mongodb+srv://prince77:prince@cluster0.4qkcpn3.mongodb.net/meetups?retryWrites=true&w=majority'
    )

    // To hold the database which connected with
    // If database does not exist, it will create one database named 'meetups'
    const db = client.db()

    // Use same as database name. But can use different name as collection or table
    const meetupCollection = db.collection('meetups')

    // Query command
    // Passing an object
    // Return an object i.e. the automatically generated ID
    const result = await meetupCollection.insertOne(data)

    console.log(result)

    // Close the database
    client.close()

    // Use 'res' object to send back a response
    // 'status' method to set a HTTP status code
    // 201 - inserted successfully
    // 'json' method adds a outgoing response
    res.status(201).json({message: 'Meetup inserted'})
  }
}

export default handler
