import styled from "@emotion/styled";

export const Link = styled.a`
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: var(--color-light);
    padding: 8px;
    border-radius: 6px;
    color: var(--color-dark);
    transition: 0.7s;
    &:hover{
        color: var(--color-light);
        background-color: var(--background);
    }
`
export const ProjectLogo = styled.img`
    object-fit: cover;
    aspect-ratio: 16 / 9;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`
export const TitleProject = styled.h3`
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0;
    text-align: left;
`
export const Stack = styled.span`
    padding: 8px 16px;
    border-radius: 4px;
    color: rgb(31, 38, 38);
    font-family: Montserrat, sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 12%;
    text-align: center;
    text-transform: uppercase;
    background: linear-gradient(90.00deg, rgb(0, 245, 160),rgb(0, 217, 245) 100%);
`
export const StackContainer = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`
export const Description = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 4%;
    text-align: left;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 6px;
    background: rgb(34, 37, 37);
    position: relative;
`
export const TextContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
`