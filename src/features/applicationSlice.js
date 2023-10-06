import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  signUp: false,
  signIn: false,
  token: localStorage.getItem("token"),
};

export const authSignUp = createAsyncThunk(
  "user/signUp",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/user/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const json = await res.json();

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error);
      }
      return json;
    } catch (error) {
      thunkAPI.rejectWithValue();
    }
  }
);
export const authSignIn = createAsyncThunk(
  "user/signIn",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/user/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const token = await res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }
      return token;
    } catch (error) {
      return error;
    }
  }
);

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authSignUp.pending, (state) => {
        state.signUp = true;
        state.error = null;
      })
      .addCase(authSignUp.rejected, (state, action) => {
        state.signUp = false;
        state.error = action.payload;
      })
      .addCase(authSignUp.fulfilled, (state) => {
        state.signUp = true;
        state.error = null;
      })
      .addCase(authSignIn.pending, (state) => {
        state.signIn = true;
        state.error = null;
      })
      .addCase(authSignIn.rejected, (state, action) => {
        state.signIn = false;
        state.error = action.payload;
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        state.signIn = false;
        state.error = null;
        state.token = action.payload.token;
      });
  },
});

export default applicationSlice.reducer