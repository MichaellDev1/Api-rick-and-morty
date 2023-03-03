import styled from "styled-components";
import './items.css'

const Item = styled.div`
    position: relative;
    display: block;
`

const ImgBackground = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export default function ItemCarrousel ({data}) {
    const { image, gender, species, status, name } = data;

    return <Item className="item-carrousel">
        <ImgBackground src={image} alt={name}/>
    </Item>
}