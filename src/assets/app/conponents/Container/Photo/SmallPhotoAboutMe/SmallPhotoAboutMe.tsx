import * as SC from './SmallPhotoAboutMe.style.ts'
import photo from '../../../../../images/photo_2023-12-17_23-44-02.jpg'


const SmallPhotoAboutMe = () => {
  return (
    <SC.PhotosStyle>
      <SC.SmallPhoto src={photo} alt="" />
    </SC.PhotosStyle>
  );
};
 export default SmallPhotoAboutMe
