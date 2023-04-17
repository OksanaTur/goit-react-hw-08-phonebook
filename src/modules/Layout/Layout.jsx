import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
    return (
        <>
            <main>
                <div className={css.container}>
                    <Outlet />

                </div>
            </main>
        </>
    )
};

export default Layout;