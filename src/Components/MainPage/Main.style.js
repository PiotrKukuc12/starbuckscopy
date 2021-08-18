import styled from "styled-components";

export const MainContainer = styled.div`

img{
     max-width: 100%;
     max-height: 100%;
 }

 .learn-more{
     background-color: rgb(216, 232, 227);
     height: 130px;
     display: flex;
     justify-content: center;
     align-items: center;
     margin-bottom: 30px;
 }

 .text p{
     text-align: center;
     font-size: large;
     font: caption;
     font-size: 1.2rem;
 }

 .first-item{
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100%;
 }

 .first-item .first-left-info{
     width: 100%;
     height: 28vw;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     background-color: rgb(241, 248, 246);
 }

 .first-item .first-left-info h1{
     text-transform: uppercase;
     font-size: 1.5rem;
 }

 .first-item .first-left-info p{
     font: caption;
     font-size: 1.2rem;
     padding-bottom: 30px;
 }

 
 .first-item .first-right-info{
     width: 100%;
     height: 28vw;
 }


 /* Second item */

 .second-item{
     display: flex;
     margin-top: 30px;
     margin-bottom: 30px;
 }

 .second-item .second-left-info{
    width: 100%;
    height: 43vw;
 }

 .second-item .second-right-info{
     width: 100%;
     height: 43vw;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     background-color: rgb(242, 240, 235);
 }
 .second-item .second-right-info h1{
     font-size: 3.2rem;
     letter-spacing: 12px;
     text-align: end;
     color: rgb(30, 57, 50);
     text-transform: uppercase;
 }

.third-item .third-left-info p,
 .second-item .second-right-info p{
     font-size: 1.4rem;
     word-spacing: 5px;
     text-align: center;
     margin-bottom: 40px;
 }

/* third item */
.third-item{
     display: flex;
     margin-bottom: 20px;
 }

 .third-item .third-left-info{
     width: 100%;
     height: 43vw;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     background-color: rgb(242, 240, 235);
 }

 .third-item .third-right-info{
    width: 100%;
    height: 43vw;
}

.third-item .third-left-info h1{
    font-size: 3.2rem;
     letter-spacing: 12px;
     text-align: center;
     color: rgb(30, 57, 50);
     text-transform: uppercase;
}

/* four item */

.four-item{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    min-height: 56vw;
}

.four-item .left-col{
    background-color: rgb(212, 233, 226);
    margin-right: 30px;
}

.four-item .right-col{
    background-color: rgb(212, 233, 226);
}

.four-item .left-col h1,
.four-item .right-col h1{
    margin-top: 5px;
    font-size: 1.7rem;
    text-align: center;
}

.four-item .left-col p,
.four-item .right-col p{
    text-align: center;
    font-size: 1.2rem;
}

.four-item .photo{
}

.four-item .photo-text{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}



`
export const Alink = styled.a`
    text-decoration: underline;
    color: black;

    &:hover{
        text-decoration: none;
    }
`
