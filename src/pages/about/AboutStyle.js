import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;
background: silver;
.body{
    .image{
        display: flex;
        justify-content: center;
        img{
            width: 15%;
            border-radius: 50%;
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
            background: #252079;
            color: white;
        }
    }
}
.write{
    width: 80%;
    border: 3px solid black;
    h2{
        text-align: center;
    }
}
`