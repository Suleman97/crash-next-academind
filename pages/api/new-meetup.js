// url is /new-new-meetup

import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    MongoClient.connect(
      'mongodb+srv://meetup-app:s12345@cluster0.16oys.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    );

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne({ data });
    console.log(result);

    client.close();

    res.status(201).json({ message: 'successfully done insertion' });
  }
}

export default handler;
