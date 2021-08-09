import { Fragment } from 'react';
import styles from './MeetupItem.module.css';

function MeetupDetail({ image, title, address, description }) {
  const { images, content } = styles;

  return (
    <Fragment>
      <div className={images}>
        <img src={image} alt={title} />
      </div>
      <div className={content}>
        <h3>{title}</h3>
        <address>{address}</address>
        <p>{description}</p>
      </div>
    </Fragment>
  );
}

export default MeetupDetail;
