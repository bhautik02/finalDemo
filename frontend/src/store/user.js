import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const userRegisterAsync = createAsyncThunk(
  "user/userRegister",
  async ({ name, email, password }) => {
    try {
      const response = await axios.post(
        `users/signup`,
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      );
      toast.success("user created");
      const user = response.data.user;
      return user;
    } catch (error) {
      return toast.error(error.response.data.message);
    }
  }
);

export const fetchUserAsync = createAsyncThunk("user/fetchUser", async () => {
  try {
    const response = await axios.get(`users/profile`, {
      withCredentials: true,
    });

    console.log("RESPONSE ---->", response.data);
    const user = response.data.user;

    console.log(user, "Sdffffffffffff");
    // alert("dfsdgsgsdgsdgg", user);
    return user;
  } catch (error) {
    toast.error(error.response.data.message);
    return;
  }
});

export const userLoginAsync = createAsyncThunk(
  "user/userLogin",
  async ({ email, password }) => {
    try {
      const response = await axios.post(
        `users/login`,
        { email, password },
        { withCredentials: true }
      );
      const user = response.data.user;
      toast.success("user logged.");
      return user;
    } catch (error) {
      toast.error(error.response.data.message);
      return;
    }
  }
);

export const userLogoutAsync = createAsyncThunk("user/userLogout", async () => {
  try {
    await axios.get(`users/logout`);
    document.cookie = `token=${""}; expires=${new Date().getTime() - 1000}`;
    toast.success("use logged out.");
    return null;
  } catch (error) {
    toast.error(error.response.data.message);
    return;
  }
});

const userInitialState = { user: null, isUserLoggedIn: false, isReady: false };

const userSlice = createSlice({
  name: "User",
  initialState: userInitialState,
  reducers: {
    userData(state, action) {
      state.user = action.payload;
    },
    ready(state) {
      state.isReady = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegisterAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userRegisterAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isUserLoggedIn = true;
        state.isReady = true;
      })
      .addCase(userRegisterAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isUserLoggedIn = true;
        state.isReady = true;
      })
      .addCase(fetchUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(userLoginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLoginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isUserLoggedIn = true;
        state.isReady = true;
      })
      .addCase(userLoginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(userLogoutAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogoutAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.isUserLoggedIn = false;
        state.user = null;
        state.isReady = false;
      })
      .addCase(userLogoutAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
// Toastify__progress-bar-theme--dark
