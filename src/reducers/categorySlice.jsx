import { createSlice } from "@reduxjs/toolkit";

const initialState = { loading: false, categories: [] };

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },

    setCategories(state, action) {
      state.categories = action.payload;
    },

    addCategory(state, action) {
      state.categories = [...state.categories, action.payload];
    },

    deleteCategory(state, action) {
      state.categories = state.categories.filter(
        (c) => c.id !== action.payload
      );
    },

    updateCategory(state, action) {
      state.categories = state.categories.map((c) => {
        if (c.id === action.payload.id) {
          return action.payload;
        }
        return c;
      });
    },
  },
});

export const {
  setLoading,
  setCategories,
  addCategory,
  deleteCategory,
  updateCategory,
} = categorySlice.actions;

export default categorySlice.reducer;
