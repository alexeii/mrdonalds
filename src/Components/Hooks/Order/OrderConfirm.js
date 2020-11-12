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


export const OrderConfirm = () => {
        const {orders:{orders, setOrders},auth:{authentification}, orderConfirm:{setOpenOrderConfirm}, firebaseDatabase} = useContext(Context);
    const dataBase = firebaseDatabase();
    const total = orders.reduce((result, order)=>
        totalPriceItems(order) + result, 0);
    
    return (
        <Overlay>
            <Modal>
                <OrderTitle>{authentification.displayName}</OrderTitle>
                <Text>Осталось только подтвердить ваш заказ</Text>
                <Total>
                    <span>Итого</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <CheckButton
                    onClick={() => {
                        sendOrder(dataBase, orders, authentification);
                        setOrders([]);
                        setOpenOrderConfirm(false);
                    }}>
                    Подтвердить
                </CheckButton>
            </Modal>
        </Overlay>
    )
}
