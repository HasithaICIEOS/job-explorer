import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await axios.get("http://localhost:5000/api/jobs");
  return response.data;
});

const jobSlice = createSlice({
  name: "jobs",
  initialState: { jobs: [], loading: false },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      });
  },
});

export default jobSlice.reducer;
