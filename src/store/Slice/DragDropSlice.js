import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../helper/axiosconfig';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const Create_Drag_and_Drop_Data = createAsyncThunk(
  'data/Create_Drag_and_Drop_Data',
  async (formData) => {
    console.log(formData)
    try {
      const response = await axios.post("Create_Drag_and_Drop_Data" , formData);
      console.log(response.data)
      return response.data;
    } catch (error) {
      throw error;
    }
}
);


export const Get_Drag_and_Drop_Data = createAsyncThunk(
  'data/Get_Drag_and_Drop_Data',
  async (GetData) => {
    console.log(GetData)
    try {
      const response = await axios.post("Get_Drag_and_Drop_Data" ,  GetData);
      console.log(response.data)
      return response.data;
    } catch (error) {
      throw error;
    }
}
);


const DragDropSlice= createSlice({
  name: 'DragDrop',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Create_Drag_and_Drop_Data.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(Create_Drag_and_Drop_Data.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(Create_Drag_and_Drop_Data.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(Get_Drag_and_Drop_Data.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(Get_Drag_and_Drop_Data.fulfilled, (state, action) => {
        state.data = action.payload.FoundedData;
        state.loading = false;
      })
      .addCase(Get_Drag_and_Drop_Data.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



export default DragDropSlice.reducer;