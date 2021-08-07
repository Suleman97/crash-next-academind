import MainNavigation from './MainNavigation';
import styles from './Layout.module.css';

function Layout({ children }) {
  const { main } = styles;
  return (
    <div>
      <MainNavigation />
      <main className={main}>{children}</main>
    </div>
  );
}

export default Layout;
