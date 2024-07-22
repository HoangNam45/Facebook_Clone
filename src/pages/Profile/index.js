import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useRef } from 'react';
import AvtChosen from '../../components/AvtChosen/AvtChosen';

const cx = classNames.bind(styles);
function Profile() {
    const [imageSrc, setImageSrc] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => setImageSrc(reader.result);
        reader.readAsDataURL(file);
    };

    const handleIconClick = () => {
        fileInputRef.current.click();
    };
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
                                alt="avatar"
                            />
                            <div className={cx('user_profile_avt_cam_rounded')} onClick={handleIconClick}>
                                <FontAwesomeIcon icon={faCamera} className={cx('user_profile_avt_cam')} />
                            </div>
                            <input
                                type="file"
                                id="user_profile_avt_input"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                style={{ display: 'none' }}
                            />
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
            {imageSrc && <AvtChosen imageSrc={imageSrc} />}
        </div>
    );
}

export default Profile;
