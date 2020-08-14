import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;
.layout{
    width: 400px;
    img{
        width: 400px;
        position: fixed;
        :hover{
            opacity: 0.9;
            transition: 0.5s ease;
        }
    }
    .inside{
        display: flex;
        flex-direction: column;
        margin-top: 55px;
        h3{
        z-index: 200;
        color: white;
        margin: auto;
        }
        button{
            z-index: 200;
            width: 150px;
            padding: 10px 10px;
            margin: auto;
            cursor: pointer;
            background: black;
            color: white;
            border: none;
            outline: none;
            
            :hover{
                color: black;
                background: white;
                transition: 0.9s ease;
            }
        }
    }
}
`