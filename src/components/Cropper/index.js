import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import { getCroppedImg } from '../../utils/cropImage'; // Hàm phụ trợ để cắt ảnh
import classNames from 'classnames/bind';
import styles from './Cropper.module.scss';
import '../../styles/CustomCropper.scss';
const cx = classNames.bind(styles);

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
            <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                onChange={(e, zoom) => setZoom(zoom)}
            />
            <Button variant="contained" color="primary" onClick={handleCrop}>
                Lưu
            </Button>
        </div>
    );
};

export default AvatarCropper;
