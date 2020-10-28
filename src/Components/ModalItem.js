import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    background-color: #fff;
    width: 580px;
    height: 560px;
    
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;

`;
const PriceBlock = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Pacifico;
    font-size: 30px;
    line-height: 53px;
`;
const NamePrice = styled.p`
    margin-left: 37px;
`;
const Price = styled.p`
    margin-right: 53px;
`;
const AddBtn = styled.button`
    
    
    font-family: Roboto;
    font-size: 21px;
    line-height: 25px;
    width: 250px;
    height: 65px;
    background: #299B01;
    color: #FFFFFF;
`;

export const ModalItem = ({openItem, setOpenItem}) => {

    function closeModal(e) {
        if(e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    if(!openItem) return null;
    return (
         <Overlay id="overlay" onClick={closeModal}>
        
        <Modal>
            <Banner img={openItem.img}/>
            <PriceBlock>
              <NamePrice>{openItem.name}</NamePrice>  
              <Price>{openItem.price.toLocaleString('ru-RU',
               {style: 'currency', currency:'RUB'})}</Price>
            </PriceBlock>
            <AddBtn>Добавить</AddBtn>
            
           
        </Modal>

    </Overlay>
    )
};
    
