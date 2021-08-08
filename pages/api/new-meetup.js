// url is /new-new-meetup

// import { MongoClient } from 'mongodb';
import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://meetup-app:s12345@meetupapp.d2qh5.mongodb.net/meetups?retryWrites=true&w=majority'
    );

    const db = await client.db();

    const meetupsCollection = await db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: 'successfully done insertion' });
  }
}

export default handler;
