import React, { useEffect } from 'react';
import { PageLayout } from 'components';

import { useAppDispatch, useAppSelector } from 'hooks';
import { user, fetchUserDataAsync } from 'store/userSlice';

export const Dashboard: React.FunctionComponent = () => {
    const { data, status } = useAppSelector(user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUserDataAsync());
    }, []);

    return (
        <PageLayout>
            <h1>Dashboard</h1>
            <div style={{ padding: '2rem' }}>
                {status === 'pending' && <p>Loading data...</p>}
                {status === 'fulfilled' && <pre>{JSON.stringify(data, null, 2)}</pre>}
            </div>
        </PageLayout>
    );
};
