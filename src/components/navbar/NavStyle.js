import styled from 'styled-components'

export const Div = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
background: transparent;
nav{
    display: flex;
    height: 100%;
    padding: 0 1.5rem;
    align-items: center;
    h1{
        margin-left: .5rem;
    }
    .spacer{
        flex: 1;
    }
    ul{
        display: flex;
        
        li{
            list-style: none;
            padding: 0 1rem;
            
            .link{
                color: black;
                text-decoration: none;
                padding-bottom: 5px;
                :hover{
                    border-bottom: 3px solid black;
                }
                @media (max-width: 800px){
                    display: none;
                }
            }
            .active{
                border-bottom: 3px solid black;
            }
        }
    }
}
.hamburger{
    @media (min-width: 800px){
        display: none;
    }
}
`