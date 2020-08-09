import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;
height: 100vh;
background: url('/asset/img/h.jpg');
.home{
    padding: 20px 60px;
        @media (max-width: 801px){
            padding: 10px 30px;
        }
    h1{
        font-size: 55px;
        @media (max-width: 1060px){
            font-size: 50px;
        }
        @media (max-width: 960px){
            font-size: 40px;
        }
        @media (max-width: 460px){
            font-size: 30px;
        }
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
        width: 200px;
        display: flex;
        justify-content: space-evenly;
        img{
            width: 30px;
            cursor: pointer;
        }
    }
}
`