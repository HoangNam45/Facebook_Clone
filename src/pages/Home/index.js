import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { LoginForm } from '../../components/LoginForm';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('fb_entry')}>
            <div className={cx('fb_entry_')}>
                <div>
                    <img
                        className={cx('fb_entry_logo')}
                        src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                        alt="Facebook"
                    />
                </div>
                <div className={cx('fb_entry_text')}>
                    Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
                </div>
            </div>
            <LoginForm />
        </div>
    );
}

export default Home;
