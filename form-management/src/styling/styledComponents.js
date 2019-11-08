import styled from "styled-components"
import { Field } from "formik"

export const Input = styled(Field)`
    align-self: flex-start;
    width: 80%;
    margin-top: 10px;
    padding: 10px 5px;
    font-size: 1.2rem;
    background: transparent;
    border: 1px solid white;
    border-radius: 10px;
    color: white;
`
export const SubmitButton = styled.button`
    padding: 10px 0;
    width: 100%;
    text-align: center;
    align-self: flex-start;
    background: #589F5A;
    color: white;
    border: none;
    font-size: 1.2rem;
    margin-top: 10px;
    border-radius: 10px;
`
export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s ease-in-out;
    background: #589F5A;
    height: 50px;
    width: 200px;
    border-radius: 10px;
    margin-bottom: 40px;
    :hover {
        transform: scale(1.1)
    }
`
export const Wrapper = styled.div`
        width: 400px;
        display: flex;
        flex-flow: column wrap;
        justify-content: left;
        text-align: center;
        margin: 0 auto;
        background: #FCEE21;
        border-radius: 7px;
        `