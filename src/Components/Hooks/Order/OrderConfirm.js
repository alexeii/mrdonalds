import React,{useContext} from 'react';
import styled from 'styled-components';
import {Context} from '../../Functions/context';
import {Overlay, OrderTitle, Total, TotalPrice} from '../Style/StyleOrderModal';
import {CheckButton} from '../Style/CheckButton';
import {totalPriceItems, formatCurrency, projection} from '../../Functions/secondaryFunction';

const Modal = styled.div`
    background-color: white;
    width: 600px;
    padding: 30px;
`;
const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`;
const rulesData = {
    itemName: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', item => item.filter( obj => obj.checked).map(obj => obj.name),
        arr => arr.length ? arr : 'no topping'],
    choice: ['choice', item => item ? item : 'no choices'],
}



const sendOrder = (dataBase, orders, authentification) => {
     
        const newOrder = orders.map(projection(rulesData));
        dataBase.ref('orders').push().set({
            nameClient: authentification.displayName,
            email: authentification.email,
            order: newOrder
        });
        
    }
let bulTh = false;

export const OrderConfirm = () => {
        const {orders:{orders, setOrders},auth:{authentification}, orderConfirm:{setOpenOrderConfirm}, firebaseDatabase} = useContext(Context);
    const dataBase = firebaseDatabase();
    const total = orders.reduce((result, order)=>
        totalPriceItems(order) + result, 0);
        
        const thanks = () => {
            setTimeout(()=> {setOpenOrderConfirm(false); bulTh = false},2000);
        }
    return (
        <Overlay>
            <Modal>
                <OrderTitle>{authentification.displayName}</OrderTitle>
                <Text>{!bulTh ? 'Осталось только подтвердить ваш заказ' : 'Спасибо за заказ!'}</Text>
                {!bulTh && <Total>
                    <span>Итого</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>}
                {!bulTh && <CheckButton
                    onClick={() => {
                        sendOrder(dataBase, orders, authentification);
                        setOrders([]);
                        bulTh=true;
                        thanks();
                    }}>
                    Подтвердить
                </CheckButton>}
            </Modal>
        </Overlay>
    )
}
