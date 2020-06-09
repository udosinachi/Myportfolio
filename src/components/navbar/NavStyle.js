import styled from 'styled-components'

export const Div = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
background: silver;
nav{
    display: flex;
    height: 100%;
    padding: 0 1.5rem;
    align-items: center;
    h1{
        margin-left: 1rem;
    }
    .spacer{
        flex: 1;
    }
    ul{
        display: flex;
        li{
            list-style: none;
            padding: 0 .5rem;
            .link{
                color: black;
                text-decoration: none;
            }
        }
    }
}
`