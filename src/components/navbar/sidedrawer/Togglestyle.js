import styled from 'styled-components'

export const Button = styled.button`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 24px;
width: 30px;
background: transparent;
border: none;
padding: 0;
box-sizing: border-box;
cursor: pointer;
:focus{
    outline: none;
}
.line{
    width: 30px;
    height: 3px;
    background: white;
}
`
