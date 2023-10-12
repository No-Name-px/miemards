import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import StatisticPage from './pages/StatisticPage';
import ProfilePage from './pages/ProfilePage';
import RatingPage from './pages/RatingPage';
import DecksPage from './pages/DecksPage';
import Layout from './pages/Layout';
import AuthPage from './pages/AuthPage';
import RegisterPage from './pages/RegisterPage';
import ErrorPage from './pages/ErrorPage';

function App() {
    return (
        <div className={styles.main}>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<Navigate to="/decks" />} />
                    <Route path="decks" element={<DecksPage />} />
                    <Route path="rating" element={<RatingPage />} />
                    <Route path="statistic" element={<StatisticPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                </Route>
                <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
                <Route
                    path="/register"
                    element={<RegisterPage></RegisterPage>}
                ></Route>
                <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
            </Routes>
        </div>
    );
}

export default App;
