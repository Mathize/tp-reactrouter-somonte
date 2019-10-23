import styled from 'styled-components'

const Container = styled.div`
    background-color: white;
    color:#fff;
    border-radius: 1em;

    img{
        width:100%;
        border-top-left-radius: 1em;
        border-top-right-radius: 1em;
        height: 200px;
        object-fit:cover;
    }
    .info{
        padding: 0px 20px 10px 20px;
        color:#2c2c2c;
    }

    .info:hover{
        color:#089cba
    }

    .info h2{
        font-weight: 600;
        font-size: 1.3em;
        margin-top: 0;
    }

    .info h3{
        font-size: 1em;
        color: #089cba;
        margin-bottom: 5px;
    }

    .info h4{
        color: #a7a7a7;
        font-size: 1em;
        font-weight: 400;
    }

    a{
        text-decoration: none;
    }


`
export {Container}