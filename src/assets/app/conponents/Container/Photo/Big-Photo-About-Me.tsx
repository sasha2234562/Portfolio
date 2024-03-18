import styled from "styled-components";
import photo from '../../../../images/photo_2023-12-17_23-44-02.jpg'


export const BigPhotoAboutMe = () => {
  return (
    <PhotosStyle>
      <BigPhoto src={photo} alt=""/>
    </PhotosStyle>
  );
};
const BigPhoto = styled.img`
  width: 100%;
  object-fit: cover;
  // @media {theme.media.tablet} {
  //   margin: 20px auto;
  //   width: 80%;
  //   height: auto;
  // }
`;
const PhotosStyle = styled.div`
  max-width: 100%;
`;
