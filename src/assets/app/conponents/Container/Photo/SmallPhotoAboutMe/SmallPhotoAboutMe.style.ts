import styled from "styled-components";

export const BigPhoto = styled.img`
  width: 100%;
  object-fit: cover
`;
export const PhotosStyle = styled.div`
    max-width: 100%;

    img {
        &:hover {
            animation: flip 2s;
        }
        @keyframes flip {
            0%, 100% {
                transform: rotateX(0);
            }
            50% {
                transform: rotateX(-180deg);
            }
        }
    }

`;
