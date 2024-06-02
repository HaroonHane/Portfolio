import styled from "styled-components";
import {motion} from "framer-motion"



// Nav Bar Section
export const StyleNavbar=styled(motion.div)`
background:#2a2a2af8;
position: sticky;
top: 0;
height: 10dvh;
overflow: hidden;
.head-Nav-title-section{
 width: 80dvw;
 margin-inline: calc((100dvw - 80dvw)/2);
 height: 100%;
 color:#fff;
display: flex;
align-items: center;
justify-content: space-between;

}


.title{
    cursor: pointer;
    font-size: 0.8rem;
    font-style: italic;
    transition: all 200ms;
    &:hover{
        font-weight: 600;

    }
}
.nav-list-menu{
    display: flex;
    width: 40%;
    justify-content: space-evenly;
    @media (max-width:700px) {
      width: 60%;
        }
    p{ 
        position: relative;
        cursor: pointer;
        font-size: 0.8rem;
      a{
        text-decoration: none;
        color: #fff;
      }  
    }

}
`
// Nav Line
export const NavLine = styled(motion.div)`
  position: absolute;
  width: 50%;
  height: 0.2rem;
  bottom: -0.3rem;
  left: 0;
  background: #23d997;
`;




//Styling the component
export const StyleAboutUs = styled(motion.div)`
  display: flex;
  height: 80dvh;
  width: 100dvw;
  padding: 0 10dvw;
  margin-bottom: calc((100dvh - 80dvh) / 2);
  align-items: center;
  justify-content: space-between;
  img {
    width: 350px;
    object-fit: cover;
  }
  @media (max-width:900px) {
          display:block;
          height: auto;
        }
`;

export const StyleTitle = styled.div`
  margin:7rem  0 0 0;
  h4 {
    font-weight: 200;
    font-size: 2.5rem;
    line-height: 1.4;
    span {
      font-weight: bold;
      color: #23d997;
    }
  }
`;


export const StyleServiceTitle = styled(StyleTitle)`
padding-left: 3rem;
h4 {
    font-weight: 200;
    font-size: 2.5rem;
    line-height: 1.4;
 
    span {
      font-weight: bold;
      color: purple;
    }
  }
`;
export const Description = styled.div`
  p {
    width: 70%;
    font-size: 0.7rem;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
export const Button = styled(motion.button)`
  color: #fff;
  border: 3px solid #23d997;
  background: transparent;
  padding: 0.5rem 0.9rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    background: #13c080;
    border-color: #ffff;
    color: #111111;
    font-weight: 500;
    
  }
`;


//Services Section
export const StyleServices=styled(StyleAboutUs)`
  height: 90vh;
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
overflow: hidden;
@media (max-width:900px) {
          display: block;
          height: auto;
        }
`
export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2 ,auto);
padding-left: 2rem;

`;
export const Card = styled.div`
margin: 0.5rem;
  .icon {
    display: flex;
    align-items: center;
    img {
        margin:0 0.5rem;
      width: 30px;
    }
    h3 {
      font-size: 1rem;
      padding: 0.2rem 0.3rem;
      color: #000;
      background: #fff;
    }
  }
  p {
    width: 60%;
    font-weight: lighter;
    font-size: 0.7rem;
    margin: 0.2rem 0.4rem;


  }
`;


// FAQ SECTION
export const FaqSectionWrapper=styled.div`
   width: 80dvw;
   margin-inline: calc((100dvw - 80dvw) / 2);
  color:#ffff;
 margin-bottom: 20dvh;
 .faq-wrapper{
  margin-top: 1rem;
 }
  
`
export const StyleFAQTitle=styled.div`
  h4{
    font-weight: 200;
    font-size: 2.5rem;
    line-height: 1.4;
  }
  span{
    color: #13c080;
    font-weight: bold;
    font-size: 2.5rem;
  }
`


// Our Work Section
export const MoviesWholeWrapper=styled(motion.div)`
    /* background-color: #ffffffdf; */
    color:#ffffffdf;
    display: block;
    margin: 0;
    min-height: 90vh;
   overflow:hidden;

`
export const EachMovieWrapper=styled(StyleAboutUs)`

flex-direction: column;
height: 90dvh;
justify-content: initial;
align-items: initial;
padding: 0 calc((100dvw - 80dvw)/2);
padding-top:5dvh;
overflow: hidden;

.movie-title{
    font-size: 1.5rem;
    margin: 0;
    padding:0;
    padding-top: 1rem;
}
.movie-img-wrapper{
  overflow: hidden;
}
.movie-img-wrapper img{
    width: 100%;
    height: 65dvh;
    object-fit: cover;
    cursor: pointer;
}
.line{
      width: 100%;
      background-color: #e1dada;
      height: 0.3rem;
      
    
    }
`

// Styling Award Section
export const Details = styled(motion.div)`
  color: #ffff;
  overflow: hidden;
  h2{
    font-size: 2rem;
    text-align: center;
    margin-block: 1.5rem;
    font-weight: 400;
  }
`;

export const Awards = styled.div`
  display: flex;
  height: 30vh;
 width: 100dvw;
 padding-inline: 10dvw;
   @media (max-width:900px) {
          display: block;
          height: auto;
        }
`;


export const AwardDetails=styled(motion.div)`
margin: 1rem 2rem;
overflow: hidden;

h4{
    font-size: 1rem;
    font-weight: 400;
}
.line{
    width: 100%;
    height: 0.2rem;
    margin: 0.5rem 0 1.4rem 0;
    background: #13c080;
}
    p{
         font-size: 0.7rem;
         font-weight: 100;
         color:#cccccc;
        
    }
`
export const Headline = styled.div`
  min-height: 90dvh;

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-block: 1.5rem;
    font-weight: 400;
  }
  img {
    width: 100%;
    height: 70dvh;
    object-fit: cover;
    @media (max-width:900px) {
      object-fit: contain;
        }
    
  }
`;


export const IMG=styled.div`
min-height: 50dvh;

     img {
    width: 100%;
    height: 100dvh;
    object-fit: cover;
     @media (max-width:900px) {
      object-fit: contain;
        }
  } 
`


export const WaveSvg=styled.svg`
position: absolute;
width: 100%;
left:0;
@media (max-width:900px) {
          bottom:20%;
          z-index: -1;
        }
z-index: 1;
`
// Scale About Us Image
export const Scale=styled(motion.div)`
  overflow: hidden;
  margin-top: 10dvh;
  width: 50dvw;
  z-index: 5;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width:900px) {
       width: 80dvw;
        }
`

// Contact Us Section
export const ContactStyle = styled(motion.div)`
  display: block;
  width: 100dvw;
  min-height: 90dvh;
  padding-inline: 10dvw;
  color: #fff;
  padding-top: 3rem;
  
`;
export const Circle = styled.div`
  background: #353535;
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.5rem;
  @media (max-width:600px) {
    display: none;
  }
`;
export const Title = styled.div`
  color: #fff;
  h2 {
    font-weight: 200;
    font-size: 2rem;
    font-family: "Lobster";
    
  }
`;

export const Hide = styled.div`
  margin-block: 2rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
`;
export const Social = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  h2 {
    white-space: break-spaces;
    font-weight: 200;
    font-size: 2rem;
    
    font-family: "Lobster";
  }
  small {
    font-size: 1.3rem;
    font-weight: 100;
    color: #23d997;

  }
  h3 {
    display: grid;
    place-items: center;
    margin-inline: 1rem;
    font-weight: 300;
    font-size: 0.6rem;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    color: #23d997;
    border: 1px solid #ffff;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    &:hover {
      background: #23d9966b;
      color: #ffffff;
      font-size: 1rem;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  padding: 1rem 2rem;
`;