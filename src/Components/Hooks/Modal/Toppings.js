import React from 'react';
import styled from 'styled-components';

const ToppingWrap = styled.div`
    column-count: 2;
    max-width: 500px;
    margin: 0 auto;
    column-gap: 15px; 
`;
const ToppingLabel = styled.label`
    cursor: pointer;
    display: block;
    width: 220px;
`;
const ToppingCheckbox = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;



export function Toppings({toppings, checkToppings}) {
    return (
        <>
            <h3>Добавки</h3>
            <ToppingWrap>
                {toppings.map((item, i) => (
                    <ToppingLabel key={i}>
                        <ToppingCheckbox 
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => checkToppings(i)}
                        />
                        {item.name}
                    </ToppingLabel>
                ))}
                
            </ToppingWrap>
        </>
    )
}