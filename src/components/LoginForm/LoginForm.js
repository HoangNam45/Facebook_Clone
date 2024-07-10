import { Button } from '../Button';
import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';
import '../../styles/AuthForm.scss';

const cx = classNames.bind(styles);

function LoginForm() {
    return (
        <div className={cx('auth_form_fill')}>
            <div>
                <div className={cx('auth_form_fill_header')}>Đăng nhập Facebook</div>
                <div className={cx('auth_form_fill_content')}>
                    <div className={cx('auth_form_input_wrap')}>
                        <input type="text" placeholder="Email hoặc số điện thoại" className={cx('auth_form_input')} />
                    </div>
                    <div className={cx('auth_form_input_wrap')}>
                        <input type="password" placeholder="Mật khẩu" className={cx('auth_form_input')} />
                    </div>

                    <Button primary large>
                        Đăng nhập
                    </Button>
                    <div className={cx('auth_form_forget_acc')}>
                        <a href="1">Quên tài khoản?</a>
                    </div>
                    <div className={cx('auth_form_text')}>
                        <span>hoặc</span>
                    </div>
                    <Button green medium>
                        Tạo tài khoản mới
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
