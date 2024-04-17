import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { callFetchUser } from '@/config/api';
import { IUser } from '@/types/backend';

interface IState {
  isFetching: boolean;
  meta: {
    current: number;
    pageSize: number;
    pages: number;
    total: number;
  };
  result: IUser[];
}
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async ({ query }: { query: string }) => {
    const response = await callFetchUser(query);
    return response;
  }
);

const initialState: IState = {
  isFetching: true,
  meta: {
    current: 1,
    pageSize: 10,
    pages: 0,
    total: 0,
  },
  result: [],
};

export const userSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isFetching = true;
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isFetching = false;
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      if (action.payload && action.payload.data) {
        state.isFetching = false;
        state.meta = action.payload.data.meta;
        state.result = action.payload.data.result;
      }
    });
  },
});

export const { setActiveMenu } = userSlide.actions;

export default userSlide.reducer;
