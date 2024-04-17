
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../helper/axiosconfig';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const SciencefetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    try {
      const response = await axios.get("/sciencefiction");
      // console.log(response.data)
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const ScienceDataSlice= createSlice({
  name: 'Sciencedata',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SciencefetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(SciencefetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(SciencefetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



export default ScienceDataSlice.reducer;
