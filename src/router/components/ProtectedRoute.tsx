import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'redux-state';
import { authPath } from 'router/constants';

interface ProtectedRouteProps {}

export const ProtectedRoute = ({
    children,
}: PropsWithChildren<ProtectedRouteProps>) => {
    const auth = useAppSelector((state) => state.auth);

    if (!auth) {
        return <Navigate to={authPath} replace />;
    }

    return children;
};
