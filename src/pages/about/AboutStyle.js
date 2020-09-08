import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;
.body{
    .image{
        display: grid;
        justify-content: center;
        img{
            width: 200px;
            border-radius: 15em;
        }
        P{
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
    .icon1{
        img{
            width: 100px;
        }
    }
    .icon2{
        img{
            width: 90px;
        }
    }
    .icon3{
        img{
            width: 95px;
        }
    }
    .icon4{
        img{
            width: 110px;
        }
    }
    .icon5{
        img{
            width: 100px;
        }
    }
}
`