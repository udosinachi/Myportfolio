import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;
background: silver;
.body{
    .image{
        display: grid;
        justify-content: center;
        img{
            width: 150px;
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
    width: 100%;
    h2{
        text-align: center;
    }
}
`