import React from 'react';
import { useAppSelector } from 'hooks';
import { user, IUser } from 'store/userSlice';
import { Spinner } from 'components';

interface UserProps {
    renderContent: (props: IUser) => JSX.Element;
}

const Container: React.VoidFunctionComponent<UserProps> = (props) => {
    const { data, status } = useAppSelector(user);
    return (
        <React.Fragment>
            {status === 'pending' && <Spinner />}
            {status === 'fulfilled' && props.renderContent(data as IUser)}
        </React.Fragment>
    );
};

export default Container;
