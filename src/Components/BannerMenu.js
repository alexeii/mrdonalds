import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
    width: 1060px;
    height: 210px;
    background-image: url(/banner.png);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 17px;
`;

export const BannerMenu = () => (
    <Banner/>
);