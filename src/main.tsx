import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
    Navigate,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage.tsx';
import CardPage from './pages/CardPage/CardPage.tsx';
import CardPageEdit from './pages/CardPageEdit/CardPageEdit.tsx';
import DeckPage from './pages/DeckPage/DeckPage.tsx';
import DeckPageCreate from './pages/DeckPageCreate/DeckPageCreate.tsx';
import DeckPageEdit from './pages/DeckPageEdit/DeckPageEdit.tsx';
import DecksPage from './pages/DecksPage/DecksPage.tsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';
import Layout from './pages/Layout/Layout.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.tsx';
import ProfilePageEdit from './pages/ProfilePageEdit/ProfilePageEdit.tsx';
import RatingPage from './pages/RatingPage/RatingPage.tsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.tsx';
import StatisticPage from './pages/StatisticPage/StatisticPage.tsx';
import StatisticPageInner from './pages/StatisticPage/StatisticPageInner';
import RatingPageInner from './pages/RatingPage/RatingPageInner/RatingPageInner.tsx';
import PlayPage from './pages/PlayPage/PlayPage.tsx';
import FinishPage from './pages/FinishPage/FinishPage.tsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App></App>}>
            <Route path="/" element={<Layout></Layout>}>
                <Route index element={<Navigate to="/decks" />} />
                <Route path="decks" element={<DecksPage />} />
                <Route path="decks/:deckId" element={<DeckPage />} />
                <Route path="decks/create" element={<DeckPageCreate />} />
                <Route path="decks/:deckId/edit" element={<DeckPageEdit />} />
                <Route
                    path="decks/:deckId/cards"
                    element={<Navigate to=".." relative="path" />}
                />
                <Route
                    path="decks/:deckId/cards/:cardId"
                    element={<CardPage />}
                />
                <Route
                    path="decks/:deckId/cards/:cardId/edit"
                    element={<CardPageEdit />}
                />
                <Route path="decks/:deckId/play" element={<PlayPage />} />
                <Route
                    path="decks/:deckId/play/finish"
                    element={<FinishPage />}
                />
                <Route path="rating" element={<RatingPage />}>
                    <Route index element={<Navigate to="day"></Navigate>} />
                    <Route path="day" element={<RatingPageInner tab="day" />} />
                    <Route
                        path="week"
                        element={<RatingPageInner tab="week" />}
                    />
                    <Route
                        path="all-time"
                        element={<RatingPageInner tab="allTime" />}
                    />
                </Route>
                <Route path="statistic" element={<StatisticPage />}>
                    <Route index element={<Navigate to="day"></Navigate>} />
                    <Route
                        path="day"
                        element={<StatisticPageInner tab="day" />}
                    />
                    <Route
                        path="week"
                        element={<StatisticPageInner tab="week" />}
                    />
                    <Route
                        path="all-time"
                        element={<StatisticPageInner tab="allTime" />}
                    />
                </Route>
                <Route path="profile" element={<ProfilePage />}></Route>
                <Route
                    path="profile/edit"
                    element={<ProfilePageEdit />}
                ></Route>
            </Route>
            <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
            <Route path="/auth/login" element={<LoginPage></LoginPage>}></Route>
            <Route
                path="/auth/register"
                element={<RegisterPage></RegisterPage>}
            ></Route>
            <Route path="/*" element={<ErrorPage></ErrorPage>}></Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
