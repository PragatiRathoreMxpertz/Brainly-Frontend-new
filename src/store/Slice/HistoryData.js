
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../helper/axiosconfig';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const HistoryfetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    try {
      const response = await axios.get("historyfiction");
      // console.log(response.data)
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const HistoryDataSlice= createSlice({
  name: 'Historyedata',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(HistoryfetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(HistoryfetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(HistoryfetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



export default HistoryDataSlice.reducer;
