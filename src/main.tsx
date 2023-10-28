import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import {
    Navigate,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import Auth from 'pages/Auth';
import CardInfo from 'pages/CardInfo';
import CardPageEdit from 'pages/CardEdit';
import DeckInfo from 'pages/DeckInfo';
import DeckCreate from 'pages/DeckCreate';
import DeckEdit from 'pages/DeckEdit';
import DecksInfo from 'pages/DecksInfo';
import Error from 'pages/Error';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import ProfileEdit from 'pages/ProfileEdit';
import Rating from 'pages/Rating';
import Register from 'pages/Register';
import Statistic from 'pages/Statistic';
import StatisticList from 'features/statistic/components/StatisticList';
import RatingList from 'features/rating/components/RatingList';
import Game from 'pages/Game';
import GameFinish from 'pages/GameFinish';

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
