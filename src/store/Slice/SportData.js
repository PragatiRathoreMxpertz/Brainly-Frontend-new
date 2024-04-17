
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../helper/axiosconfig';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const SportfetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    try {
      const response = await axios.get("/sportfiction");
      // console.log(response.data)
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const SportDataSlice= createSlice({
  name: 'Sportedata',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SportfetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(SportfetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(SportfetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



export default SportDataSlice.reducer;
