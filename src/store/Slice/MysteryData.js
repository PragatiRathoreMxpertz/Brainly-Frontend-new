
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../helper/axiosconfig';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const MysteryfetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    try {
      const response = await axios.get("/mystery");
      // console.log(response.data)
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const MysteryDataSlice= createSlice({
  name: 'Mydata',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(MysteryfetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(MysteryfetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(MysteryfetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



export default MysteryDataSlice.reducer;
