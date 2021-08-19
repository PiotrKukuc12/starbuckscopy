import styled from "styled-components";

export const FooterContainer = styled.div`


    .footer{
        height: 600px;
        width: 100%;
        margin-top: 20px;
        border-top: 2px solid lightgrey;
    }

    .footer .title{
        font-size: 1.4rem;
        margin-bottom: 24px;
    }

    .footer .first-col,
    .footer .sec-col,
    .footer .third-col,
    .footer .four-col,
    .footer .five-col{

        margin-left:20px;
    }

    .footer .footer-items{
        display: flex;
        justify-content: flex-start;
        margin: 20px 20px;
        text-decoration: none;
    }

    .footer .footer-items ul{
        list-style: none;
        padding: 0;
    }

    .footer .footer-items ul li{
        padding-top: 20px;
        padding-top: 8px;
        padding-bottom: 8px;
        margin-bottom: 8px;
    }

    .footer .stoper{
        border-top: 2px solid lightgrey;
        display: flex;
        padding: 32px 0px;
        margin: 0px 50px;
    }

    .footer .social-items{
        display: flex;
        margin-left: 30px;
    }

    .footer .item img{
        height: 32px;
        width: 32px;
        margin-left: 20px;
    }

    .footer .policy{
        margin:40px;
    }
`

export const LinkHover = styled.a`
    color: rgba(0, 0, 0, 0.56);
    text-decoration: none;
    cursor: pointer;

    &:hover{
        color:black;
        transition: .3s ease;
    }
`
