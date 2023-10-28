import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar';
import styles from './Home.module.css';

export default function Layout() {
    return (
        <>
            <div className={styles.content}>
                <Outlet></Outlet>
            </div>
            <Navbar className={styles.navbar}></Navbar>
        </>
    );
}
