import styled from "@emotion/styled";

export const MeContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        gap: 30px;
    }
`;
export const MeTextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const Name = styled.h2`
    background: linear-gradient(90.00deg, rgb(0, 245, 160), rgb(0, 217, 245));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 72px;
    font-weight: 600;
    line-height: 88px;
    letter-spacing: 0;
    text-align: left;
`
export const Avatar = styled.img`
    width: 416px;
`;