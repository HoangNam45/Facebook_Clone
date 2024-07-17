import { Button } from '../Button';
import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';
import '../../styles/AuthForm.scss';
import React, { useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function LoginForm() {
    const [formData, setFormData] = useState({
        account: '',
        password: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login', formData);
    };
    return (
        <form className={cx('auth_form_fill')} onSubmit={handleSubmit}>
            <div>
                <div className={cx('auth_form_fill_header')}>Đăng nhập Facebook</div>
                <div className={cx('auth_form_fill_content')}>
                    <div className={cx('auth_form_input_wrap')}>
                        <input
                            name="account"
                            type="text"
                            placeholder="Email hoặc số điện thoại"
                            className={cx('auth_form_input')}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={cx('auth_form_input_wrap')}>
                        <input
                            name="password"
                            type="password"
                            placeholder="Mật khẩu"
                            className={cx('auth_form_input')}
                            onChange={handleChange}
                        />
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
        </form>
    );
}

export default LoginForm;
