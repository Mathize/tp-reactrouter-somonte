import styled from 'styled-components'

const Container = styled.div`

.notDest{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 1em;
    padding: 50px 50px 0px;
}

.lista{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 1em;
    padding: 50px;
}
`
export {Container}