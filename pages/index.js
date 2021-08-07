import MeetupList from '../components/meetups/MeetupList';

const Dummy = [
  {
    id: 'm1',
    title: 'A first Meetup',
    image:
      'https://www.nationsonline.org/gallery/Germany/Reichstag-Parliament-Berlin.jpg',
    address: 'Some Adress 125 1455 ',
    description: 'this is our meetup',
  },
  {
    id: 'm2',
    title: 'A 2nd Meetup',
    image:
      'https://ewscripps.brightspotcdn.com/dims4/default/7c78021/2147483647/strip/true/crop/4862x2735+0+456/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Ff3%2F79%2Fcc02ea984560b1e12d9d9f1d0707%2Fandrew-coop-r82eni3j0bi-unsplash.jpg',
    address: 'Some Adress house 125 ',
    description: 'this is our 2nd meetup',
  },
  {
    id: 'm3',
    title: 'A 3rd Meetup',
    image:
      'https://mk0uncovercolor8845v.kinstacdn.com/wp-content/uploads/2017/11/Colfax-Avenue-Denver-Colorado-1600x800-1600x800.jpg',
    address: 'Some Adress 125 hotel ',
    description: 'this is our 3rd meetup',
  },
];

function HomePage(props) {
  const { meetups } = props;
  return <MeetupList meetups={meetups} />;
}

export async function getStaticProps() {
  //fetch data from API
  return {
    props: {
      meetups: Dummy,
    },
    revalidate: 1,
  };
}

export default HomePage;
