import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export type posts = {
    title: string;
    post: string;
    author: string;
}

type postsState = {
    posts: posts[];
    options: {
        numberCards: number,
        heightCount: number,
        widthCount: number,
    }
}

const initialState: postsState = {
    posts: [],
    options: {
        numberCards: 0,
        heightCount: 0,
        widthCount: 0,
    }
}

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async ({ limit, offset }: { limit?: number, offset?: number }) => {
        const response = await axios.get(`/api/posts?limit=${limit ?? 0}&offset=${offset ?? 0}`)
            .then(response => {
                return response.data
            })
            .catch(error => console.log(error));
        
        return response;
    }
)


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setQueryOptions(state, action){
            state.options = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.fulfilled, (state, action) => {
                if (action.payload) {
                    state.posts = action.payload;
                }
            })
    },
});

export const { setQueryOptions } = postsSlice.actions;

export default postsSlice.reducer;