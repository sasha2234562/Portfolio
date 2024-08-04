import styled from "@emotion/styled";
interface Section{
    openForm: boolean
}
export const Section = styled.div<Section>`
    top: 0;
    left: ${props=> props.openForm ? '0' : '100%'};
    right: 0;
    bottom: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    transition: 1s;
`
export const FormContainer = styled.div<Section>`
    position: absolute;
    background-color: var(--color-dark);
    width: min(100%, 400px);
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px;
    border-radius: 16px;
    margin: 10px;
    left: 50%;
    top: 50%;
    transition: 1s;
    transform: translate(${props=> props.openForm ? '-50%' : '100%'}, -50%);
`
export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 26px;
    width: min(100%, 532px);
    margin: auto;
`
export const ExitButton = styled.button`
    border: none;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
`
export const ExitIcon = styled.img`
    position: absolute;
    top: 16px;
    right: 16px;
`