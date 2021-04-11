import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: ICompany;
    photo: IPhoto;
}

interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface IPhoto {
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

interface IUserState {
    data?: IUser;
    status: null | 'pending' | 'fulfilled' | 'failed';
}

const initialState: IUserState = {
    status: null,
};

export const fetchUserDataAsync = createAsyncThunk<IUser>('user/fetch', async () => {
    const randomId = Math.floor(Math.random() * (10 - 1)) + 1;

    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`);
    const photo = await fetch(`https://jsonplaceholder.typicode.com/photos/${randomId}`);

    const { id, name, username, email, phone, website, company } = await data.json();
    const { albumId, title, url, thumbnailUrl } = await photo.json();

    const user: IUser = {
        id,
        name,
        username,
        email,
        phone,
        website,
        company,
        photo: {
            albumId,
            title,
            url,
            thumbnailUrl,
        },
    };

    return user;
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserDataAsync.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchUserDataAsync.fulfilled, (state, action) => {
                console.info('user payload', action.payload);

                state.status = 'fulfilled';
                state.data = action.payload;
            });
    },
});

export const user = (state: RootState) => state.user;
export default userSlice.reducer;
