import styled from "styled-components";
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 70px;
    margin-bottom: 25px;
`;


export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const OptionsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
    height: 100%;
    align-items: center;
`;

export const OptionLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`;
