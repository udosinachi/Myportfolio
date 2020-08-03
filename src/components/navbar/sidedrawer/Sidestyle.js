import styled from 'styled-components'

export const Div = styled.div`
nav{
    height: 100%;
    background: white;
    box-shadow: 2px 0 5px rgb(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 400px;
    z-index: 200;
        @media (min-width: 800px){
            display: none;
        }
    
    ul{
        list-style: none;
        height: 100%;
        li{
            padding: 1.5rem 2rem;
            background: blue;
        }
        .link{
            color: black;
            text-decoration: none;
            font-size: 1.5rem;
            :hover, :active{
                color: blue;
            }
        }
    }
    .imagesection{
        display: grid;
        justify-content: center;
        margin-top: 5em;
        img{
            width: 120px;
            border-radius: 50%;
        }
    }
}
`