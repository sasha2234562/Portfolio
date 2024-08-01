import styled from "@emotion/styled";

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