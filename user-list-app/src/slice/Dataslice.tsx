import {
  Action,
  AnyAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { Users } from "react-feather";

interface DummyDataInter {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  owner: boolean;
  role: string;
  removable: string;
  createdAt: string;
  _v: number;
}

interface Statetype {
  data: DummyDataInter;
  showCard: boolean;
  pageData: DummyDataInter[];
  pending: boolean;
  error: string;
}
const initialState = {
  data: {},
  showcard: false,
  pageData: [],
  pending: false,
  error: "",
};

export const getUser = createAsyncThunk("getusers", async (pageid: number) => {
  try {
    const data = await axios.get(
      `https://servers-omega.vercel.app/users/p?limit=8&page=${pageid}`
    );

    return data.data.users;
  } catch (error) {
    return "Error Occured";
  }
});

const user = createSlice({
  name: "user-data",
  initialState,
  reducers: {
    showCard(state, action) {
      state.showcard = true;
      state.pageData.map((userdata: DummyDataInter) => {
        if (userdata._id == action.payload) {
          state.data = userdata;
        }
      });
    },
    hideCard(state) {
      state.showcard = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.pageData = action.payload;
        state.pending = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.pending = false;
      });
  },
});
export const { showCard, hideCard } = user.actions;
export default user.reducer;
