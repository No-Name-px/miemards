import { Route, Routes } from 'react-router-dom';
import ActionButton from './ActionButton';
import Plus from '../../assets/icons/plus.svg?react';
// import Start from '../../assets/icons/media-play.svg?react';

export default function ActionButtonProvider() {
    return (
        <Routes>
            <Route
                path="decks"
                element={<ActionButton title="Add deck" icon={Plus} />}
            />
            <Route path="rating" element={<ActionButton />} />
            <Route path="statistic" element={<ActionButton />} />
            <Route path="profile" element={<ActionButton />}></Route>
            <Route path="profile/edit" element={<ActionButton />}></Route>
        </Routes>
    );
}
