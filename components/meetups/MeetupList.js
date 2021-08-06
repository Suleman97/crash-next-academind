import MeetupItem from './MeetupItem';
import styles from './MeetupList.module.css';

function MeetupList({ meetups }) {
  const { list } = styles;
  return (
    <ul className={list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
