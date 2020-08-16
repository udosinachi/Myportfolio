import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;
.layout{
    width: 400px;
    img{
        width: 400px;
        :hover{
            opacity: 0.9;
            transition: 0.5s ease;
        }
    }
    .inside{
        display: flex;
        flex-direction: column;
        h3{
        z-index: 100;
        color: black;
        margin: auto;
        }
        button{
            z-index: 100;
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

export const Flex = styled.div`

.div{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
`