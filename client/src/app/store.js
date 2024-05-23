import { configureStore } from '@reduxjs/toolkit';
import  propertySlice  from '../features/properties/propertySlice'

export const store = configureStore({
  reducer: {
    properties: propertySlice
  },
});
