import styled from 'styled-components'

const Container = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 2% 5%;
    background-color: #000000;

    div{
        color:#fff;
        text-decoration: none;
    }

    a:first-child{
        padding-right: 30px;
    }

    a{
        text-decoration: none;
        color: white;
        padding-right: 20px;
    }

    input{
        padding: 8px 120px 8px 20px;
        border-radius: 2em;
        border: none;
        flex-grow: 2;
    }

    input:focus{
        outline: none;
    }


   
`
export {Container}