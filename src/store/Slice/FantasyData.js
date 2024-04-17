
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../helper/axiosconfig';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const FantasyfetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    try {
      const response = await axios.get("fantasy");
    //   console.log(response.data)
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const FantasyDataSlice= createSlice({
  name: 'Fantasydata',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FantasyfetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FantasyfetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FantasyfetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



export default FantasyDataSlice.reducer;