import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice'; // Імпортуємо як експорт за замовчуванням
import filtersReducer from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
