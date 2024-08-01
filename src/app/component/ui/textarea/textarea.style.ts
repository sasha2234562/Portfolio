import styled from "@emotion/styled";

export const TextareaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const Textarea = styled.textarea`
    height: 164px;
    border: 1px solid rgb(0, 217, 245);
    background-color: transparent;
    border-radius: 6px;
    outline: none;
    width: min(100%, 532px);
    color: rgb(189, 235, 234);
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
`