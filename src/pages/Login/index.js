import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { LoginForm } from '../../components/LoginForm';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('auth_form')}>
            <div>
                <img
                    src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                    className={cx('logo_facebook')}
                    alt="fb_logo"
                />
            </div>
            <LoginForm></LoginForm>
        </div>
    );
}

export default Login;
