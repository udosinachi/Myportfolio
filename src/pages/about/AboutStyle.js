import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;
.body{
    .image{
        display: grid;
        justify-content: center;
        img{
            width: 180px;
            border-radius: 50%;
        }
        h4{
            text-align: center;
        }
    }
    .resume{
        display: flex;
        justify-content: center;
        button{
            width: 100px;
            padding: 10px;
            cursor: pointer;
            border: none;
            background: black;
            color: white;
            :hover{
                background: silver;
                color: black;
                transition: 0.5s;
            }
        }
    }
}

.icons{
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    margin: auto;
    @media (max-width: 650px){
        flex-wrap: wrap;
    }
    .icon1{
        text-align: center;
        @media (max-width: 650px){
            margin: 20px;
        }
        img{
            width: 60px;
        }
    }
    .icon2{
        text-align: center;
        @media (max-width: 650px){
            margin: 20px;
        }
        img{
            width: 70px;
        }
    }
    .icon3{
        text-align: center;
        @media (max-width: 650px){
            margin: 20px;
        }
        img{
            width: 65px;
        }
    }
    .icon4{
        text-align: center;
        @media (max-width: 650px){
            margin: 20px;
        }
        img{
            width: 70px;
        }
    }
    .icon5{
        text-align: center;
        @media (max-width: 650px){
            margin: 20px;
        }
        img{
            width: 70px;
        }
    }
}

.write{
    width: 80%;
    margin: auto;
    text-align: center;
}
`