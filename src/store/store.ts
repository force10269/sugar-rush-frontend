import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export interface ContactState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialContactState: ContactState = {
  status: "idle",
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState: initialContactState,
  reducers: {
    setStatus: (state, action: PayloadAction<ContactState["status"]>) => {
      state.status = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    contact: contactSlice.reducer,
  },
});

export const { setStatus, setError } = contactSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
