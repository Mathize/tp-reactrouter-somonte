import React from 'react'
import {Container} from './styled'
import Card from '../Card'

const Grilla = ({news}) => {
    const items = news.slice(7, 63);
    const destacadas = news.slice(5,7);

    return(
        <Container>
            <div className='notDest'>
            {destacadas.map(newItem => <Card newItem={newItem} key={newItem.news_id}/>)}
            </div>
            <div className='lista'>
            {items.map(newItem => <Card newItem={newItem} key={newItem.news_id}/>)}
            </div>
        </Container>
    )

}

export default Grilla