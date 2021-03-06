import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDteails(props) {
  const { image, title, address, description } = props.meetupData;
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <MeetupDetail
        image={image}
        title={title}
        address={address}
        description={description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://meetup-app:s12345@meetupapp.d2qh5.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = await client.db();

  const meetupsCollection = await db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://meetup-app:s 12345@meetupapp.d2qh5.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = await client.db();

  const meetupsCollection = await db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();
  // fetch data for single meetup
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        image: selectedMeetup.image,
      },
    },
  };
}

export default MeetupDteails;
