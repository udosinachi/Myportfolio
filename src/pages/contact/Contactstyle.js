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
        form{
            input, textarea, button{
                width: 500px;
                padding: 20px 5px;
                margin: 5px;
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
            }
        }
        .social{
            width: 500px;
            margin-top: 60px;
            p{
                font-size: 20px;
            }
            .icons{
                width: 200px;
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