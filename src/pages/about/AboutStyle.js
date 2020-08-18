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

.write{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .about{
        width: 500px;
        margin: 10px;
    }
    .skills{
        width: 500px;
    }
}
`