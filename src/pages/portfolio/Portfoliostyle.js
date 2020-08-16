import styled from 'styled-components'

export const Div = styled.div`
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    max-width: 450px;
    height: 300px;
    margin: 1em;
    .layout{
        position: relative;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        box-sizing: border-box;
        width: 100%;
        height: 100%;

            :hover .freediv{
                filter: blur(3px);
                -webkit-filter: blur(3px);
                backdrop-filter: blur(3px);                
                transition: 0.5s;
            }

            .freediv{
                display: flex;
                align-content: center;
                justify-content: space-around;
                flex-wrap: wrap;
                text-align: center;
                background-image: url(${props => props.img});
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                margin: auto;        
            }
                @media (min-width: 1024px){
                    :hover .card_text .caption button {
                        visibility: visible;
                        opacity:  1;
                        transition: 0.6s;
                    }
                }
            .card_text{
                position: absolute;
                width: 100%;
                height: 100%;

                .caption{
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: column;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 2;
                    width: 90%;
                    font-weight: bold;
                    font-size: 20px;
                    line-height: 30px;
                    color: white;
                    text-align: center;
                    margin: auto;

                    button{
                        margin: 1em auto;
                        margin-top: 80px;
                        padding: 0.5em 2em 0.5em;
                        visibility: hidden;
                        opacity: 0;
                        font-weight: bold;
                        font-size:15px;
                        color: white;
                        background: #252079;
                        border: none;
                        border-radius: 2px;
                        cursor: pointer;

                        @media (max-width: 1024px){
                            visibility: visible;
                            opacity: 1;
                        }
                    }
                }
            }
    }
`

export const Flex = styled.div`
overflow: hidden;
.text{
    h1{
        text-align: center;
        font-size: 50px;
        padding: 0;
        margin: 0;
    }
    p{
        text-align: center;
    }
}

.flex{
    margin-top: -80px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
`