import React from 'react'
import {Container} from './styled'

const Card = ({newItem}) => {
    const {title, source_name, img_url, url, category} = newItem
    return(
        <Container>
            <a href= {url} target="_blank">
            <img src={img_url} alt={title}/>
            <div className="info">
                <h3>{category}</h3>
                <h2>{title}</h2>
                <h4>{source_name}</h4>
            </div>
            </a>
        </Container>
    )

}

export default Card