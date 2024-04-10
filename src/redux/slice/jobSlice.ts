import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { callFetchJob } from '@/config/api';
import { IJob } from '@/types/backend';

interface IState {
  isFetching: boolean;
  meta: {
    current: number;
    pageSize: number;
    pages: number;
    total: number;
  };
  result: IJob[];
}
// First, create the thunk
export const fetchJob = createAsyncThunk(
  'job/fetchJob',
  async ({ query }: { query: string }) => {
    const response = await callFetchJob(query);
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

export const jobSlide = createSlice({
  name: 'job',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setActiveMenu: (state, action) => {},
  },
  extraReducers: (builder) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    builder.addCase(fetchJob.pending, (state, action) => {
      state.isFetching = true;
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    builder.addCase(fetchJob.rejected, (state, action) => {
      state.isFetching = false;
    });

    builder.addCase(fetchJob.fulfilled, (state, action) => {
      if (action.payload && action.payload.data) {
        state.isFetching = false;
        state.meta = action.payload.data.meta;
        state.result = action.payload.data.result;
      }
    });
  },
});

export const { setActiveMenu } = jobSlide.actions;

export default jobSlide.reducer;
