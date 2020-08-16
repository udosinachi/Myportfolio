import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;
.layout{
    width: 500px;
    @media (max-width: 520px){
        width: 400px;
    }
    @media (max-width: 350px){
        width: 350px;
    }
    .background{
        height: 300px;
        background-image: linear-gradient(rgba(8, 1, 43, 0.63), rgba(8, 1, 43, 0.63)), url(${props => props.img});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        box-sizing: border-box;
        @media (max-width: 520px){
            height: 250px;
        }
        .inside{
            display: flex;
            flex-direction: column;
            position: relative;
            top: 90px;
            h3{
            color: white;
            margin: auto;
            }
            button{
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
}
`

export const Flex = styled.div`
overflow: hidden;
.div{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    border: 5px solid yellow;
}
`