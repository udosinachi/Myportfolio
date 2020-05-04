import styled from 'styled-components'

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
background: grey;
background-image: url('/Asset/Img/h.jpg');
background-size: 100%;
position: fixed;
width: 100%;
top: 0;
.Nav_link{
    text-decoration: none;
    color: black;
    padding: 25px;
}
.activeRoute{
    border-bottom: 0.3em solid white;
}
A:Hover{
    background-color: white;
    color: black;
  }
`
export const Ul = styled.ul`
margin-right: 2em;
`
export const P = styled.p`
font-size: 20px;
`