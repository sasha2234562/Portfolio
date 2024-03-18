import * as SC from './BigPhotoAboutMe.style.ts'
import photo from '../../../../../images/photo_2023-12-17_23-44-02.jpg'

const BigPhotoAboutMe = () => {
  return (
    <SC.PhotosStyle>
      <SC.BigPhoto src={photo} alt=""/>
    </SC.PhotosStyle>
  );
};
export default BigPhotoAboutMe;

