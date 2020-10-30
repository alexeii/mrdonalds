import styled from 'styled-components';

export const CheckButton = styled.button`
    display: block;
    margin: 0 auto;
    font-family: Roboto;
    font-size: 21px;
    line-height: 25px;
    width: 250px;
    height: 65px;
    background-color: #299B01;
    color: #FFFFFF;
    border-color: transparent;
    margin-bottom: 15px;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    &:hover {
        background-color: #fff;
        color: #299B01;
        border-color: #299B01;
    }
`;