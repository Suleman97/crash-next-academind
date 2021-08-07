import Link from 'next/link';

import styles from './MainNavigation.module.css';

function MainNavigation() {
  const { header, logo } = styles;
  return (
    <header className={header}>
      <div className={logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
