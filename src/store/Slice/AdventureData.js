import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../helper/axiosconfig';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const AdventurefetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    try {
      const response = await axios.get("adventure");
      console.log(response.data)
      return response.data;
    } catch (error) {
      throw error;
    }
}
);

const AdventureDataSlice= createSlice({
  name: 'Adventuredata',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AdventurefetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AdventurefetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(AdventurefetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



export default AdventureDataSlice.reducer;