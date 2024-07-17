import { Button } from '../Button';
import classNames from 'classnames/bind';
import styles from './RegisterForm.module.scss';
import '../../styles/AuthForm.scss';
import { Form, Row, Col } from 'react-bootstrap';
import { days, months, years } from '../../utils/DateOption';
import { useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function RegisterForm() {
    const [formData, setFormData] = useState({
        surname: '',
        name: '',
        account: '',
        password: '',
        day: '',
        month: '',
        year: '',
        gender: '',
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let newValue;

        if (type === 'radio') {
            if (checked) {
                newValue = value;
            } else {
                newValue = formData[name];
            }
        } else {
            newValue = value;
        }

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { day, month, year, ...rest } = formData;
        const dateOfBirth = `${day}-${month}-${year}`;
        const newFormData = { ...rest, dateOfBirth };
        console.log(newFormData);

        // try {
        axios.post('http://localhost:5000/register', newFormData);
        // console.log(response.data);
        // } catch (error) {
        //     console.error('Error registering user', error);
        // }
    };

    return (
        <Form className={cx('auth_form_fill', 'customForm')} onSubmit={handleSubmit}>
            <div>
                <div className={cx('auth_form_fill_header')}>
                    <div className={cx('auth_form_fill_header_text')}>Tạo tài khoản mới</div>
                    <div className={cx('auth_form_fill_header_sub_text')}>Nhanh chóng và dễ dàng</div>
                </div>
                <div className={cx('auth_form_fill_content')}>
                    <div className={cx('auth_form_input_name_wrap')}>
                        <input
                            type="text"
                            placeholder="Họ"
                            className={cx('auth_form_input_name')}
                            name="surname"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Tên"
                            className={cx('auth_form_input_name')}
                            name="name"
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Số di động hoặc email"
                        className={cx('auth_form_input_account')}
                        name="account"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        className={cx('auth_form_input_account')}
                        name="password"
                        onChange={handleChange}
                    />
                    <div className={cx('auth_form_des')}>Ngày sinh</div>
                    <div className={cx('auth_form_input_date-of-birth_wrap')}>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Select
                                        className={cx('auth_form_input_date-of-birth')}
                                        name="day"
                                        onChange={handleChange}
                                    >
                                        <option value="">Ngày</option>
                                        {days.map((d) => (
                                            <option key={d} value={d}>
                                                {d}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Select
                                        className={cx('auth_form_input_date-of-birth')}
                                        name="month"
                                        onChange={handleChange}
                                    >
                                        <option value="">Tháng</option>
                                        {months.map((m) => (
                                            <option key={m} value={m}>
                                                {m}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Select
                                        className={cx('auth_form_input_date-of-birth')}
                                        name="year"
                                        onChange={handleChange}
                                    >
                                        <option value="">Năm</option>
                                        {years.map((y) => (
                                            <option key={y} value={y}>
                                                {y}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form.Group>
                    </div>
                    <div className={cx('auth_form_des')}>Giới tính</div>
                    <div className={cx('auth_form_input_sex_wrap')}>
                        <div className={cx('auth_form_input_sex')}>
                            <label className={cx('auth_form_input_sex_select')} htmlFor="auth_form_input_sex_select_1">
                                Nữ
                            </label>
                            <input
                                type="radio"
                                className={cx('auth_form_input_sex_select_')}
                                id="auth_form_input_sex_select_1"
                                name="gender"
                                value="female"
                                onChange={handleChange}
                            />
                        </div>
                        <div className={cx('auth_form_input_sex')}>
                            <label className={cx('auth_form_input_sex_select')} htmlFor="auth_form_input_sex_select_2">
                                Nam
                            </label>
                            <input
                                type="radio"
                                className={cx('auth_form_input_sex_select_')}
                                id="auth_form_input_sex_select_2"
                                name="gender"
                                value="male"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <span className={cx('auth_form_policy')}>
                        Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Facebook.
                    </span>
                    <span className={cx('auth_form_policy')}>
                        Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách quyền riêng tư và Chính sách
                        cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ
                        lúc nào.
                    </span>
                    <div className={cx('auth_form_register_button')}>
                        <Button green medium>
                            Đăng ký
                        </Button>
                    </div>
                </div>
            </div>
        </Form>
    );
}

export default RegisterForm;
