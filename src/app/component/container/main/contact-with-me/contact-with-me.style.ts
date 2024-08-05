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
    left: 50%;
    top: 50%;
    transition: 1s;
    transform: translate(${props=> props.openForm ? '-50%' : '100%'}, -50%);
    @media screen and (max-width: 500px){
        padding: 20px;
        width: min(100%, 300px);
    }
`
export const InputsContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 26px;
    width: min(100%, 300px);
    margin: auto;
`
export const ExitButton = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    width: fit-content;
    height: fit-content;
    position: absolute;
    top: 20px;
    right: 20px;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
`
export const Label = styled.label`
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0;
    text-align: left;
`
export const Input = styled.input`
    width: min(100%, 532px);
    box-sizing: border-box;
    border: 1px solid var(--color);
    border-radius: 6px;
    background-color: transparent;
    padding: 10px 14px;
    outline: none;
    color: rgb(189, 235, 234);
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
`
export const TextareaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const Textarea = styled.textarea`
    height: 100px;
    border: 1px solid rgb(0, 217, 245);
    background-color: transparent;
    border-radius: 6px;
    outline: none;
    width: min(100%, 280px);
    color: rgb(189, 235, 234);
    padding: 10px;
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
`