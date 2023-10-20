import { Outlet } from 'react-router-dom';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.main}>
            <Outlet></Outlet>
        </div>
    );
}

export default App;
