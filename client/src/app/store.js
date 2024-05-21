import { configureStore } from '@reduxjs/toolkit';
import second, { propertiySlice } from '../features/properties/propertySlice'

export const store = configureStore({
  reducer: {
    properties: propertiySlice
  },
});
