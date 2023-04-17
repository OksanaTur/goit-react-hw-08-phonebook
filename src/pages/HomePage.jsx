import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/auth/auth-selectors';

const HomePage = () => {
    const { isLogin, token } = useSelector(getAuth);

    return (
        <>
            {isLogin && token && <p>Home page</p>}
            {!isLogin && !token && (
                <>
                    <p>Welcome page</p>{' '}
                    <Link to="/login">I already have an account</Link>
                </>
            )}
        </>
    )
};

export default HomePage;