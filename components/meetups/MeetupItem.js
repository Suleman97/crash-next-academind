import { useRouter } from 'next/router';
import Card from '../ui/Card';
import styles from './MeetupItem.module.css';

function MeetupItem({ id, image, title, address }) {
  const router = useRouter();
  function showDetailHandler() {
    router.push('/' + id);
  }
  const { item, images, content, actions } = styles;
  return (
    <li className={item}>
      <Card>
        <div className={images}>
          <img src={image} alt={title} />
        </div>
        <div className={content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={actions}>
          <button onClick={showDetailHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
