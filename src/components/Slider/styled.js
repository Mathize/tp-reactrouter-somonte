import styled from 'styled-components'

const Container = styled.div`

.contSlider{
    height: 500px;
    overflow: hidden;
    position: relative;
}

.imgSlider{
    width: 100%;
    object-fit: cover;
    filter: brightness(50%);
}

.titleSlider{
    position: absolute;
    bottom: 60px;
    left: 80px;
    color: white;
    font-size: 2em;
    font-weight: 600;
    width: 40%;
}

.titleSlider:hover{
    color: #c1d9de;
}

`
export {Container}