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
import Auth from './pages/Auth/Auth.tsx';
import CardInfo from './pages/CardInfo/CardInfo.tsx';
import CardPageEdit from './pages/CardEdit/CardEdit.tsx';
import DeckInfo from './pages/DeckInfo/DeckInfo.tsx';
import DeckCreate from './pages/DeckCreate/DeckCreate.tsx';
import DeckEdit from './pages/DeckEdit/DeckEdit.tsx';
import DecksInfo from './pages/DecksInfo/DecksInfo.tsx';
import Error from './pages/Error/Error.tsx';
import Home from './pages/Home/Home.tsx';
import Login from './pages/Login/Login.tsx';
import Profile from './pages/Profile/Profile.tsx';
import ProfileEdit from './pages/ProfileEdit/ProfileEdit.tsx';
import Rating from './pages/Rating/Rating.tsx';
import Register from './pages/Register/Register.tsx';
import Statistic from './pages/Statistic/Statistic.tsx';
import StatisticList from './components/StatisticList/index.ts';
import RatingList from './components/RatingList/RatingList.tsx';
import Game from './pages/Game/Game.tsx';
import GameFinish from './pages/GameFinish/GameFinish.tsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<Home />}>
                <Route index element={<Navigate to="/decks" />} />
                <Route path="decks" element={<DecksInfo />} />
                <Route path="decks/:deckId" element={<DeckInfo />} />
                <Route path="decks/create" element={<DeckCreate />} />
                <Route path="decks/:deckId/edit" element={<DeckEdit />} />
                <Route
                    path="decks/:deckId/cards"
                    element={<Navigate to=".." relative="path" />}
                />
                <Route
                    path="decks/:deckId/cards/:cardId"
                    element={<CardInfo />}
                />
                <Route
                    path="decks/:deckId/cards/:cardId/edit"
                    element={<CardPageEdit />}
                />
                <Route path="decks/:deckId/play" element={<Game />} />
                <Route
                    path="decks/:deckId/play/finish"
                    element={<GameFinish />}
                />
                <Route path="rating" element={<Rating />}>
                    <Route index element={<Navigate to="day" />} />
                    <Route path="day" element={<RatingList tab="day" />} />
                    <Route path="week" element={<RatingList tab="week" />} />
                    <Route
                        path="all-time"
                        element={<RatingList tab="allTime" />}
                    />
                </Route>
                <Route path="statistic" element={<Statistic />}>
                    <Route index element={<Navigate to="day" />} />
                    <Route path="day" element={<StatisticList tab="day" />} />
                    <Route path="week" element={<StatisticList tab="week" />} />
                    <Route
                        path="all-time"
                        element={<StatisticList tab="allTime" />}
                    />
                </Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="profile/edit" element={<ProfileEdit />}></Route>
            </Route>
            <Route path="/auth" element={<Auth />}></Route>
            <Route path="/auth/login" element={<Login />}></Route>
            <Route path="/auth/register" element={<Register />}></Route>
            <Route path="/*" element={<Error />}></Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
