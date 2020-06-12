import styled from 'styled-components'

export const Div = styled.div`

.home{
    padding: 20px 60px;
    h1{
        font-size: 55px;
    }
    .buttons{
        
        width: 350px;

        .button1{
            width: 150px;
            padding: 20px;
            font-size: 16px;
            color: white;
            background: black;
            border: none;
            cursor: pointer;
            :hover{
                color: black;
                background: silver;
            }
        }
        .button2{
            width: 150px;
            margin-left: 20px;
            padding: 20px;
            font-size: 16px;
            color: white;
            background: grey;
            border: none;
            cursor: pointer;
            :hover{
                color: black;
                background: silver;
            }
        }
    }
    .icons{
        img{
            width: 10%;
        }
    }
}
`