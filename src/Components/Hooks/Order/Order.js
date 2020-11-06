import React from 'react';
import styled from 'styled-components';
import {CheckButton} from '../Style/CheckButton';
import {OrderListItem} from './OrderListItem';
import {totalPriceItems, formatCurrency} from '../../Functions/secondaryFunction';


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

const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;
const OrderList = styled.ul`

`;
const Total = styled.div`
    display: flex;
    margin: 0 35px 30px;
    & span:first-child{
        flex-grow: 1;
    }
`;
const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;


export const Order = ({orders, setOrders, setOpenItem}) => {
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
            <Total>
                <span>ИТОГО</span>
                <span>{totalCounter}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <CheckButton>Оформить</CheckButton>
            
            
        </OrderStyled>
    )
}