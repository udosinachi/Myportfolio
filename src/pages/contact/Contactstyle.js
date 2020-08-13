import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;
.body{
    .text{
        text-align: center;
        h1{
            font-size: 50px;
            margin: 0;
            padding: 0;
        }
    }
    .bodyform{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin: 50px 100px;
        @media (max-width: 1250px){
            margin: 40px;
        }
        form{
            input, textarea, button{
                width: 500px;
                padding: 20px 5px;
                margin: 5px;
                @media (max-width: 550px){
                    width: 400px;
                }
                @media (max-width: 420px){
                    width: 340px;
                }
                @media (max-width: 350px){
                    width: 300px;
                }
            }
            textarea{
                height: 100px;
            }
            button{
                width: 510px;
                color: white;
                background: black;
                outline: none;
                border: none;
                @media (max-width: 550px){
                    width: 410px;
                }
                @media (max-width: 420px){
                    width: 360px;
                }
                @media (max-width: 350px){
                    width: 310px;
                }
            }
        }
        .social{
            width: 500px;
            margin-top: 60px;
            p{
                font-size: 20px;
            }
            .icons{
                width: 300px;
                display: flex;
                justify-content: space-evenly;
                img{
                    width: 30px;
                    cursor: pointer;
                }
            }
        }
    }
}
`