import React from 'react';
import styled from 'styled-components';
import {Banner} from './BannerMenu'
import DBMenu from './DBMenu';
import {ListItem} from './ListItem';


const MenuStyled = styled.main`
    margin-top: 80px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

export const Menu = ({setOpenItem}) => (
    <MenuStyled>
        <Banner/>
    <SectionMenu>
        <h2>Бургеры</h2>
        <ListItem 
            itemList={DBMenu.burger}
            setOpenItem={setOpenItem}    
        />
    </SectionMenu>
    <SectionMenu>
        <h2>Закуски / Напитки</h2>
        <ListItem 
            itemList={DBMenu.other}
            setOpenItem={setOpenItem}
        />
    </SectionMenu>
        
        
    </MenuStyled>

);