import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;

.body{
    .image{
        display: flex;
        justify-content: center;
        img{
            width: 15%;
            border-radius: 30em;
        }
    }
    .resume{
        display: flex;
        justify-content: center;
        button{
            width: 100px;
            padding: 10px;
        }
    }
}
`