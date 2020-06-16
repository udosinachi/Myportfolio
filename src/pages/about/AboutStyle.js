import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;

.body{
    display: flex;
    justify-content: space-evenly;
    .image{
        img{
            width: 20%;
            border-radius: 3em;
        }
    }
    .text{
        p{
            font-size: 30px;
        }
    }
}
`