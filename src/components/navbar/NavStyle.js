import styled from 'styled-components'

export const Div = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
background: ${props => props.navcolor};
nav{
    display: flex;
    height: 100%;
    padding: 0 1.5rem;
    align-items: center;
    h1{
        margin-left: .5rem;
        font-size: 20px;
    }
    .h1{
        text-decoration: none;
        color: ${props => props.textcolor};
        cursor: pointer;
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
                color: ${props => props.textcolor};
                text-decoration: none;
                padding-bottom: 5px;
                :hover{
                    border-bottom: 3px solid ${props => props.hovercolor};
                }
                @media (max-width: 800px){
                    display: none;
                }
            }
            .active{
                border-bottom: 3px solid ${props => props.hovercolor};
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