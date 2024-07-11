// import { Button } from '../Button';
import classNames from 'classnames/bind';
import styles from './RegisterForm.module.scss';
import '../../styles/AuthForm.scss';
import { Form, Row, Col } from 'react-bootstrap';

const cx = classNames.bind(styles);

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

function RegisterForm() {
    return (
        <div className={cx('auth_form_fill', 'customForm')}>
            <div>
                <div className={cx('auth_form_fill_header')}>
                    <div className={cx('auth_form_fill_header_text')}>Tạo tài khoản mới</div>
                    <div className={cx('auth_form_fill_header_sub_text')}>Nhanh chóng và dễ dàng</div>
                </div>
                <div className={cx('auth_form_fill_content')}>
                    <div className={cx('auth_form_input_name_wrap')}>
                        <input type="text" placeholder="Họ" className={cx('auth_form_input_name')} />
                        <input type="text" placeholder="Tên" className={cx('auth_form_input_name')} />
                    </div>
                    <input type="text" placeholder="Số di động hoặc email" className={cx('auth_form_input_account')} />
                    <input type="password" placeholder="Mật khẩu" className={cx('auth_form_input_account')} />
                    <div className={cx('auth_form_des')}>Ngày sinh</div>
                    <div className={cx('auth_form_input_date-of-birth_wrap')}>
                        <Form>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Select className={cx('auth_form_input_date-of-birth')}>
                                            <option value="">Ngày</option>
                                            {days.map((d) => (
                                                <option key={d} value={d}>
                                                    {d}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select className={cx('auth_form_input_date-of-birth')}>
                                            <option value="">Tháng</option>
                                            {months.map((m) => (
                                                <option key={m} value={m}>
                                                    {m}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select className={cx('auth_form_input_date-of-birth')}>
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
                        </Form>
                    </div>
                    <div className={cx('auth_form_des')}>Giới tính</div>
                    <div className={cx('auth_form_input_sex_wrap')}>
                        <div className={cx('auth_form_input_sex')}>
                            <label className={cx('auth_form_input_sex_select')} for="auth_form_input_sex_select_1">
                                Nữ
                            </label>
                            <input
                                type="radio"
                                className={cx('auth_form_input_sex_select_')}
                                id="auth_form_input_sex_select_1"
                                name="auth_form_input_sex"
                            />
                        </div>
                        <div className={cx('auth_form_input_sex')}>
                            <label className={cx('auth_form_input_sex_select')} for="auth_form_input_sex_select_2">
                                Nam
                            </label>
                            <input
                                type="radio"
                                className={cx('auth_form_input_sex_select_')}
                                id="auth_form_input_sex_select_2"
                                name="auth_form_input_sex"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
