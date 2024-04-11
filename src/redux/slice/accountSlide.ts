import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from '@/config/axios-customize';
import { callFetchAccount } from '@/config/api';

export const fetchAccount = createAsyncThunk(
  'account/fetchAccount',
  async () => {
    const response = await callFetchAccount();
    return response.data;
  }
);

const initialState = {
  // isAuthenticated: false,
  isAuthenticated: true,
  isLoading: true,
  isRefreshToken: false,
  errorRefreshToken: '',
  user: {
    email: '',
    name: '',
    phone: '',
    _id: '',
    role: 'ADMIN',
  },
  activeMenu: 'home',
};

export const accountSlide = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
    setUserLoginInfo: (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setLogoutAction: (state, action) => {
      localStorage.removeItem('access_token');
      state.isAuthenticated = false;
      state.user = {
        email: '',
        phone: '',
        _id: '',
        role: '',
        name: '',
      };
    },
    setRefreshTokenAction: (state, action) => {
      state.isRefreshToken = action.payload?.status ?? false;
      state.errorRefreshToken = action.payload?.message ?? '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAccount.pending, (state, action) => {
      if (action.payload) {
        state.isAuthenticated = false;
        state.isLoading = true;
      }
    });

    builder.addCase(fetchAccount.fulfilled, (state, action) => {
      if (action.payload) {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = { ...state.user, ...action.payload.user };
      }
    });

    builder.addCase(fetchAccount.rejected, (state, action) => {
      if (action.payload) {
        state.isAuthenticated = false;
        state.isLoading = false;
      }
    });
  },
});

export const {
  setActiveMenu,
  setUserLoginInfo,
  setLogoutAction,
  setRefreshTokenAction,
} = accountSlide.actions;

export default accountSlide.reducer;
