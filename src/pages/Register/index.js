import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { RegisterForm } from '../../components/RegisterForm';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('auth_form')}>
            <div>
                <img
                    src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                    className={cx('logo_facebook')}
                    alt="fb_logo"
                />
            </div>
            <RegisterForm></RegisterForm>
        </div>
    );
}

export default Register;