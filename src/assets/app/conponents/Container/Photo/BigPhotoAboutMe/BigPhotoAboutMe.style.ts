import styled from "styled-components";

export const BigPhoto = styled.img`
    width: 100%;
    object-fit: cover;
    transition: 4s;
    &:hover {
        transform: rotateX(180deg);
    }
`;
export const PhotosStyle = styled.div`
  max-width: 100%;
`;