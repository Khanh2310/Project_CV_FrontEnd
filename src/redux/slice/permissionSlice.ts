/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { callFetchPermission } from '@/config/api';
import { IPermission } from '@/types/backend';

interface IState {
  isFetching: boolean;
  meta: {
    current: number;
    pageSize: number;
    pages: number;
    total: number;
  };
  result: IPermission[];
}
export const fetchPermission = createAsyncThunk(
  'permission/fetchPermission',
  async ({ query }: { query: string }) => {
    const response = await callFetchPermission(query);
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

export const permissionSlide = createSlice({
  name: 'permission',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    builder.addCase(fetchPermission.pending, (state, action) => {
      state.isFetching = true;
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    builder.addCase(fetchPermission.rejected, (state, action) => {
      state.isFetching = false;
    });

    builder.addCase(fetchPermission.fulfilled, (state, action) => {
      if (action.payload && action.payload.data) {
        state.isFetching = false;
        state.meta = action.payload.data.meta;
        state.result = action.payload.data.result;
      }
    });
  },
});

export const {} = permissionSlide.actions;

export default permissionSlide.reducer;
