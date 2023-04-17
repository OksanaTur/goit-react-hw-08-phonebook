import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth-operations';
import Loader from 'shared/components/Loader/Loader';
import NavBar from 'modules/NavBar/NavBar';
import css from './App.module.css';

const Layout = lazy(() => import('./modules/Layout/Layout'));
const PublicRoute = lazy(() => import('./modules/PublicRoute/PublicRoute'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const PrivateRoute = lazy(() => import('./modules/PrivateRoute/PrivateRoute'));

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(current())
    }, [dispatch]);

    return (
        <div className={css.wrapper}>
            <BrowserRouter basename='/goit-react-hw-08-phonebook'>
                <NavBar />
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<HomePage />} />
                            <Route element={<PublicRoute />}>
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/register" element={<RegisterPage />} />
                                            
                            </Route>
                            <Route element={<PrivateRoute />}>
                                <Route path="/contacts" element={<ContactsPage />} />

                            </Route>
                        </Route>
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>

                </Suspense>
            </BrowserRouter>

        </div>
    )
};

export default App;