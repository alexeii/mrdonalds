import React, {useContext} from 'react';
import styled from 'styled-components';
import { ContextItem } from '../../Functions/contextItem';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CountInput = styled.input`
    width: 50px;
    font-size: 20px;
`;

const ButtonCount = styled.button`
    background-color: transparent;

`;

export function CountItem() {
    const {count, setCount, onChange} = useContext(ContextItem);
    return (
        <CountWrapper>
            <span>Количество</span>
            <div>
                <ButtonCount disabled={count <= 1} onClick={()=> setCount(count - 1)}>-</ButtonCount>
                <CountInput readOnly type='number' min='1' max='100' value={count < 1 ? 1 : count} onChange={onChange}/>
                <ButtonCount onClick={()=> setCount(count + 1)}>+</ButtonCount>
            </div>
        </CountWrapper>
    )
}