import React, { useState } from 'react';
import AvatarCropper from '../../components/Cropper';

const Test = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => setImageSrc(reader.result);
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {imageSrc && (
                <AvatarCropper imageSrc={imageSrc} onCropComplete={(croppedImage) => setCroppedImage(croppedImage)} />
            )}
            {croppedImage && <img src={croppedImage} alt="Cropped" style={{ marginTop: '20px' }} />}
        </div>
    );
};

export default Test;
