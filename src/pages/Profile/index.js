import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import RoundedItem from '../../components/RoundedItem/RoundedItem';
const cx = classNames.bind(styles);
function Profile() {
    return (
        <div>
            <div className={cx('user_profile_head')}>
                <div className={cx('user_profile_back_img_wrap')}>
                    <div className={cx('user_profile_back_img')}>
                        <div className={cx('user_profile-chose_back_img')}></div>
                    </div>
                </div>
                <div className={cx('user_profile_avt_wrap')}>
                    <div className={cx('user_profile_avt')}>
                        <div className={cx('user_profile_avt_img_wrap')}>
                            <img
                                src="/images/7fe2f43c07284c892375dbb80d0ca93d.jpg"
                                className={cx('user_profile_avt_img')}
                            />
                            <div className={cx('user_profile_avt_cam_rounded')}>
                                <FontAwesomeIcon icon={faCamera} className={cx('user_profile_avt_cam')} />
                            </div>
                        </div>
                        <div className={cx('user_profile_avt_fake')}></div>
                        <div className={cx('user_profile_name')}>
                            <span className={cx('user_profile_name_')}>Nam Hoàng</span>
                            <div className={cx('user_profile_friend_amout')}>64 bạn bè</div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Profile;
