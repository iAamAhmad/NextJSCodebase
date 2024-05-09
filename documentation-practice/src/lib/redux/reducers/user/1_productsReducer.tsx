import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.productId
        );
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      });
  },
});

export default productsSlice.reducer;

// Async Thunks
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await axios.get(`${url}products`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    try {
      const response = await axios.delete(`${url}products/${productId}`);
      return { productId };
    } catch (error) {
      console.error("Error deleting product:", error);
      return { error };
    }
  }
);

export const addProduct = createAsyncThunk("products/addProduct", async () => {
  try {
    const response = await axios.post(`${url}products`, {
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      category: "electronic",
    });
    return response.data;
  } catch (error) {
    console.error("Error adding new product:", error);
    return { error };
  }
});

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (productId) => {
    try {
      const response = await axios.patch(`${url}products/${productId}`, {
        title: "Updated product title",
        price: 20.99,
        description: "Updated product description",
        image: "https://fakestoreapi.com/img/updated-image.jpg",
        category: "updated-category",
      });
      return response.data;
    } catch (error) {
      console.error("Error updating product:", error);
      return { error };
    }
  }
);
