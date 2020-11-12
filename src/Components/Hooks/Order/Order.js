import React,{useContext} from 'react';
import styled from 'styled-components';
import {CheckButton} from '../Style/CheckButton';
import {OrderListItem} from './OrderListItem';
import {totalPriceItems, formatCurrency} from '../../Functions/secondaryFunction';
import {OrderTitle, Total, TotalPrice} from '../Style/StyleOrderModal';
import { Context } from '../../Functions/context';


const OrderStyled = styled.section`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 80px;
    left: 0;
    background-color: #fff;
    max-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, .25);
    padding: 20px;
`;



const OrderContent = styled.div`
    flex-grow: 1;
`;
const OrderList = styled.ul`

`;



const EmptyList = styled.p`
    text-align: center;
`;




export const Order = () => {
    
        const {orders:{orders, setOrders}, openItem:{setOpenItem}, auth:{authentification, logIn}, orderConfirm:{setOpenOrderConfirm}} = useContext(Context);
    

    const total = orders.reduce((result, order)=>
        totalPriceItems(order) + result, 0);

    const deleteItem = (item) => {
        const newOrders = [...orders];
        newOrders.splice(item, 1);
        setOrders(newOrders);
        }
        
   
    const totalCounter = orders.reduce((result, order)=>
        order.count + result, 0);
    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
                {orders.length ? 
                <OrderList>
                    {orders.map((order, index )=> <OrderListItem 
                        key={index} 
                        deleteItem={deleteItem}  
                        order={order}
                        setOpenItem={setOpenItem}
                        index={index}
                    />)}
                </OrderList> :
                <EmptyList>Список заказов пуст</EmptyList>}
            </OrderContent>    
            {!orders.length ? null : <Total hidden={!orders.length ? true : false}>
                <span>ИТОГО</span>
                <span>{totalCounter}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>}
            {!orders.length ? null : <CheckButton onClick={() =>  authentification ? setOpenOrderConfirm(true) : logIn()}>Оформить</CheckButton>}
            
            
        </OrderStyled>
    )
}