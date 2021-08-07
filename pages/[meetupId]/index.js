// import { Fragment } from 'react';

function MeetupDteails() {
  return (
    <>
      <img
        src="https://www.nationsonline.org/gallery/Germany/Reichstag-Parliament-Berlin.jpg"
        alt="first"
      />
      <h1>first Meetup</h1>
      <address>some street 125, </address>
      <p>the meetup descriptions will go there</p>
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
      {
        params: {
          meetupId: 'm3',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);
  //fetch data for single meetup
  return {
    props: {
      meetupData: {
        image:
          'https://www.nationsonline.org/gallery/Germany/Reichstag-Parliament-Berlin.jpg',
        id: meetupId,
        title: 'First meetup',
        address: 'some street 125, sandego',
        description: 'the meetup descriptions will go there',
      },
    },
  };
}

export default MeetupDteails;
