import classNames from 'classnames/bind';
import styles from './AvtChosen.module.scss';
import '../../styles/AuthForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Cropper from '../Cropper';
import { useState } from 'react';

// import AvatarCropper from '../../components/Cropper';
const cx = classNames.bind(styles);
function AvtChosen({ imageSrc }) {
    const [croppedImage, setCroppedImage] = useState(null);
    return (
        <div className={cx('auth_form_fill', 'form_custom')}>
            <div className={cx('drop_avt_head')}>
                <span className={cx('drop_avt_head_text')}>Chọn ảnh đại diện</span>
                <div className={cx('drop_avt_head_close')}>
                    <FontAwesomeIcon icon={faXmark} className={cx('drop_avt_head_close_icon')} />
                </div>
            </div>

            <div className={cx('drop_avt_description')}>
                <textarea placeholder="Mô tả" className={cx('drop_avt_description_input')}></textarea>
            </div>

            <div>
                <Cropper imageSrc={imageSrc} onCropComplete={(croppedImage) => setCroppedImage(croppedImage)} />
            </div>
        </div>
    );
}

export default AvtChosen;
