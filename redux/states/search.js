import { createSlice } from "@reduxjs/toolkit";

const emptyState = {
  driver_id: null,
};

const SearchSlice = createSlice({
  name: "search",
  initialState: emptyState,
  reducers: {
    createSearch: ({ action }) => action.payload,
    setSearch: (state, action) => ({ ...state, ...action.payload }),
    resetSearch: () => emptyState,
  },
});

const { createSearch, setSearch, resetSearch } = SearchSlice.actions;
const SearchReducer = SearchSlice.reducer;

export { createSearch, setSearch, resetSearch, SearchReducer };
