/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { callFetchJob, callFetchResume } from '@/config/api';
import { IResume } from '@/types/backend';

interface IState {
  isFetching: boolean;
  meta: {
    current: number;
    pageSize: number;
    pages: number;
    total: number;
  };
  result: IResume[];
}
// First, create the thunk
export const fetchResume = createAsyncThunk(
  'resume/fetchResume',
  async ({ query }: { query: string }) => {
    const response = await callFetchResume(query);
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

export const resumeSlide = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setActiveMenu: (state, action) => {},
  },
  extraReducers: (builder) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    builder.addCase(fetchResume.pending, (state, action) => {
      state.isFetching = true;
    });

    builder.addCase(fetchResume.rejected, (state, action) => {
      state.isFetching = false;
    });

    builder.addCase(fetchResume.fulfilled, (state, action) => {
      if (action.payload && action.payload.data) {
        state.isFetching = false;
        state.meta = action.payload.data.meta;
        state.result = action.payload.data.result;
      }
    });
  },
});

export const { setActiveMenu } = resumeSlide.actions;

export default resumeSlide.reducer;
