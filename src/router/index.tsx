import {
    Navigate,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import App from 'components/App';
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
import {
    allDecksPath,
    authPath,
    deckCreatePath,
    deckEditPath,
    deckPath,
    loginPath,
    profilePath,
    profilePathEdit,
    registerPath,
} from './constants';
import { ProtectedRoute } from './components/ProtectedRoute';
import CardCreate from 'pages/CardCreate';
import BankCards from 'pages/additional/BankCards';
// import { history } from 'redux';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<Home />}>
                <Route index element={<Navigate to="/decks" />} />
                <Route
                    path={allDecksPath}
                    element={
                        <ProtectedRoute>
                            <DecksInfo />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={deckPath(':id')}
                    element={
                        <ProtectedRoute>
                            <DeckInfo />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={deckCreatePath}
                    element={
                        <ProtectedRoute>
                            <DeckCreate />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={deckEditPath(':id')}
                    element={
                        <ProtectedRoute>
                            <DeckEdit />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="decks/:deckId/cards"
                    element={<Navigate to=".." relative="path" />}
                />
                <Route
                    path="decks/:deckId/cards/create"
                    element={
                        <ProtectedRoute>
                            <CardCreate />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="decks/:deckId/cards/:cardId"
                    element={
                        <ProtectedRoute>
                            <CardInfo />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="decks/:deckId/cards/:cardId/edit"
                    element={
                        <ProtectedRoute>
                            <CardPageEdit />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="decks/:deckId/play"
                    element={
                        <ProtectedRoute>
                            <Game />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="decks/:deckId/play/finish"
                    element={
                        <ProtectedRoute>
                            <GameFinish />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="rating"
                    element={
                        <ProtectedRoute>
                            <Rating />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Navigate to="day" />} />
                    <Route
                        path="day"
                        element={
                            <ProtectedRoute>
                                <RatingList tab="today" />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="week"
                        element={
                            <ProtectedRoute>
                                <RatingList tab="week" />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="all-time"
                        element={
                            <ProtectedRoute>
                                <RatingList tab="allTime" />
                            </ProtectedRoute>
                        }
                    />
                </Route>
                <Route
                    path="statistic"
                    element={
                        <ProtectedRoute>
                            <Statistic />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Navigate to="day" />} />
                    <Route
                        path="day"
                        element={
                            <ProtectedRoute>
                                <StatisticList tab="today" />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="week"
                        element={
                            <ProtectedRoute>
                                <StatisticList tab="week" />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="all-time"
                        element={
                            <ProtectedRoute>
                                <StatisticList tab="allTime" />
                            </ProtectedRoute>
                        }
                    />
                </Route>
                <Route
                    path={profilePath}
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                ></Route>
                <Route
                    path={profilePathEdit}
                    element={
                        <ProtectedRoute>
                            <ProfileEdit />
                        </ProtectedRoute>
                    }
                ></Route>

                {/* ADDITIONAL */}
                <Route
                    path={'bankCards'}
                    element={
                        <ProtectedRoute>
                            <BankCards />
                        </ProtectedRoute>
                    }
                ></Route>
            </Route>
            <Route path={authPath} element={<Auth />}></Route>
            <Route path={loginPath} element={<Login />}></Route>
            <Route path={registerPath} element={<Register />}></Route>
            <Route path="/*" element={<Error />}></Route>
        </Route>
    )
);

export default router;
