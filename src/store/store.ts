import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export interface RequestState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface SugarRushState {
  bookingState: RequestState;
  contactState: RequestState;
}

const initialContactState: RequestState = {
  status: "idle",
  error: null,
};

const initialBookingState: RequestState = {
  status: "idle",
  error: null,
};

const initialSugarRushState: SugarRushState = {
  bookingState: initialBookingState,
  contactState: initialContactState,
};

const mainSlice = createSlice({
  name: "main",
  initialState: initialSugarRushState,
  reducers: {
    setBookingStatus: (
      state,
      action: PayloadAction<RequestState["status"]>,
    ) => {
      state.bookingState.status = action.payload;
    },
    setBookingError: (state, action: PayloadAction<string | null>) => {
      state.bookingState.error = action.payload;
    },
    setContactStatus: (
      state,
      action: PayloadAction<RequestState["status"]>,
    ) => {
      state.contactState.status = action.payload;
    },
    setContactError: (state, action: PayloadAction<string | null>) => {
      state.contactState.error = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
  },
});

export const {
  setBookingStatus,
  setBookingError,
  setContactStatus,
  setContactError,
} = mainSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const selectBookingState = (state: RootState) => state.main.bookingState;
export const selectContactState = (state: RootState) => state.main.contactState;

export default store;
