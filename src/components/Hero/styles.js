import styled from 'styled-components'
import  heroImage from '../../../static/hero_image.png'


export const HeroSearch = styled.div`
  background-image:url(${heroImage});
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center center;
  height:700px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;
  & h1{
    text-shadow: 2px 2px #777777;;
    color:#F8F8F8;
    text-align:center;
  }
  & h2{
    text-shadow: 2px 2px #777777;;
    color:#F8F8F8;
    text-align:center;
    font-size:42px;
  }
`


export const Search= styled.div`
  border-radius:20px;
  height:39px;
  width:481px;
  background-color:#F8F8F8;
  display:flex;
  justify-content:center;
  align-items:center;
  & input{
    border:none;
    height:30px;
    width:430px;
  }
  & input:focus{
    outline:none;
    outline-width:0;
  }
`
export const ButtonContainer =styled.div`
  display:flex;
  width:80vw;
  justify-content:space-around;
  & a{
    display:flex;
    align-items:center;
    border:#028090 solid 1px;
    height:41px;
    width:330px;
    justify-content:center;
    background-color:#F8F8F8;
    color:#028090;
    text-decoration:none;
  }
  & a.host__button{
    color:#F8F8F8;
    background-color:#028090;
  }
`