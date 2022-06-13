import { MongoClient } from 'mongodb';

async function handler (req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://Swetha_Ravipati:BujjiRaj%4009@cluster0.gheo2uo.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log('Result: ', result);

        client.close();

        res.status(201).json({message: 'Meetups inserted!'});
    }
}

export default handler;