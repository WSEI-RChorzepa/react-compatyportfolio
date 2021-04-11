import React from 'react';
import styled from 'styled-components';
import { faUsers, faUserPlus, faPlus, faFolder } from '@fortawesome/free-solid-svg-icons';
import Container from './Container';
import Icon from '../Icon';

const Grid = styled.div`
    position: relative;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
    padding: 0.5rem 0;
    display: grid;
    grid-template-rows: 0.5fr 1px auto;
    width: 100%;
`;

const UserDetails = styled.div`
    grid-row: 1;
    height: 100%;
    padding: 0.5rem 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`;

const Navigation = styled.div`
    grid-row: 3;
    padding: 2rem 1.5rem 0 1.5rem;
`;

const Divider = styled.hr`
    grid-row: 2;
    width: 100%;
    border: none;
    border-bottom: 1px solid rgba(236, 240, 241, 1);
`;

const Thumbnail = styled.img`
    border-radius: 50%;
    height: 30px;
    background-size: contain;
`;

const Name = styled.h5`
    color: rgba(52, 152, 219, 1);
    font-weight: 400;
    font-size: 1.2rem;
    margin: 0.5rem 0 0.2rem 0;
`;

const Company = styled.p`
    color: #7f8c8d;
    font-size: 1.1rem;
`;

const LinkWrapper = styled.div`
    display: grid;
    grid-template-columns: 20px auto 20px;
    margin-bottom: 1rem;

    & svg:nth-child(1) {
        grid-column: 1;
    }

    & span {
        grid-column: 2;
        font-weight: 400;
        font-size: 1.3rem;
        color: rgba(52, 73, 94, 1);
    }

    & svg:nth-child(2) {
        grid-column: 3;
    }
`;

const Panel: React.VoidFunctionComponent<{ name: string; company: string; thumbnail: string }> = (props) => (
    <Grid>
        <UserDetails>
            <Thumbnail src={props.thumbnail} />
            <Name>{props.name}</Name>
            <Company>{props.company}</Company>
        </UserDetails>
        <Divider />
        <Navigation>
            <LinkWrapper>
                <Icon icon={faUsers} />
                <span>Your network</span>
                <Icon icon={faUserPlus} />
            </LinkWrapper>
            <LinkWrapper>
                <Icon icon={faFolder} />
                <span>Your publications</span>
                <Icon icon={faPlus} />
            </LinkWrapper>
        </Navigation>
    </Grid>
);

const UserPanel: React.VoidFunctionComponent = () => (
    <Container
        renderContent={(props) => (
            <Panel name={props.name} company={props.company.name} thumbnail={props.photo.thumbnailUrl} />
        )}
    />
);

export default UserPanel;
