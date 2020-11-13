import React, {useContext} from 'react';
import styled from 'styled-components';
import {Context} from '../../Functions/context';
import {CheckButton} from '../Style/CheckButton';
import {CountItem} from './CountItem';
import {UseCount} from '../UseCount';
import {totalPriceItems, formatCurrency} from '../../Functions/secondaryFunction';
import {Toppings} from './Toppings';
import {Choices} from './Choices';
import {useToppings} from '../useTopping';
import {useChoices} from '../useChoices';
import {Overlay} from '../Style/StyleOrderModal';
import {ContextItem} from '../../Functions/contextItem';


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

`;
const Content = styled.section`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
`;
const PriceBlock = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Pacifico;
    font-size: 30px;
    line-height: 53px;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;



export const ModalItem = () => {
    const{openItem:{openItem, setOpenItem},  orders:{orders, setOrders}} = useContext(Context);
    const counter = UseCount(openItem.count);
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem);
    const isEdit = openItem.index > -1;

    const closeModal = e => {
        if(e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice,
    };

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    }

    

    const addToOrder = () => {
        setOrders([...orders, order])
        setOpenItem(null);
    }

    return (
         <Overlay id="overlay" onClick={closeModal}>
        
        <Modal>
            <Banner img={openItem.img}/>
            <Content>
                <PriceBlock>
                    <div>{openItem.name}</div>  
                    <div>{formatCurrency(openItem.price)}</div>
                </PriceBlock>
                <ContextItem.Provider value={{
                    ...counter,
                    ...toppings,
                    choices,
                    openItem
                }}>
                    <CountItem />
                    {openItem.toppings && <Toppings/>}
                    {openItem.choices && <Choices/>}
                </ContextItem.Provider>
                <TotalPriceItem>
                    <span>Цена:</span>
                    <span>{formatCurrency(totalPriceItems(order))}</span>
                </TotalPriceItem>
               
                <CheckButton onClick={isEdit ? editOrder : addToOrder}
                    disabled={order.choices && !order.choice}
                >{isEdit ? 'Редактировать' : 'Добавить'}</CheckButton>
            </Content>
            
            
           
        </Modal>

    </Overlay>
    )
};
    
