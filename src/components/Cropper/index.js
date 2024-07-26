import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import Slider from '@mui/material/Slider';

import { Button } from '../Button';

import { styled } from '@mui/system';

import { getCroppedImg } from '../../utils/cropImage'; // Hàm phụ trợ để cắt ảnh
import classNames from 'classnames/bind';
import styles from './Cropper.module.scss';
import '../../styles/CustomCropper.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const CustomSlider = styled(Slider)({
    // color: '#FF5733', // Thay đổi màu của Slider
    width: 400,
    height: 4,
    borderRadius: 5,
    '& .MuiSlider-thumb': {
        height: 20,
        width: 20,
        backgroundColor: '#FFF', // Màu của thumb (nút kéo)
        boxShadow: 'none', // Loại bỏ hiệu ứng boxShadow mặc định
        '&:hover': {
            boxShadow: 'none', // Bỏ hiệu ứng khi hover
        },
        '&.Mui-active': {
            boxShadow: 'none', // Bỏ hiệu ứng khi bấm vào
        },
        '&:focus, &:active': {
            boxShadow: 'none', // Bỏ hiệu ứng khi được focus hoặc active
            outline: 'none', // Bỏ hiệu ứng outline
        },
        '&.Mui-focusVisible': {
            boxShadow: 'none', // Bỏ hiệu ứng khi focus visible
        },
    },
    '& .MuiSlider-track': {
        backgroundColor: '#0866FF', // Màu của track (đường đã đi qua)
    },
    '& .MuiSlider-rail': {
        backgroundColor: '#c7c8c9', // Màu của rail (đường chưa đi qua)
    },
});

const AvatarCropper = ({ imageSrc, onCropComplete }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const onCropCompleteHandler = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleCrop = async () => {
        const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
        onCropComplete(croppedImage);
    };

    return (
        <div>
            <div className={cx('cropper_wrap')}>
                <Cropper
                    image={imageSrc}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropCompleteHandler}
                    cropShape="round"
                    showGrid={false}
                />
            </div>
            <div className={cx('slider_wrap')}>
                <CustomSlider
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    aria-labelledby="Zoom"
                    onChange={(e, zoom) => setZoom(zoom)}
                />
            </div>
            <div className={cx('text_wrap')}>
                <FontAwesomeIcon icon={faEarthAmericas} className={cx('text_icon')} />
                <span className={cx('text')}>Ảnh đại diện của bạn sẽ được hiển thị công khai</span>
            </div>
            <div className={cx('button_wrap')}>
                <Button small primary onClick={handleCrop} className={cx('save_button')}>
                    Lưu
                </Button>
                <Button small text>
                    Hủy
                </Button>
            </div>
        </div>
    );
};

export default AvatarCropper;
