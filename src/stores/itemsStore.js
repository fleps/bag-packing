import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { initialItems } from '../utils/constants';

export const useItemsStore = create(
  persist(
    set => ({
      items: initialItems,

      addItem: newItemName => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemName,
          packed: false,
        };

        set(state => ({ items: [...state.items, newItem] }));
      },

      deleteItem: id => {
        set(state => ({ items: [...state.items].filter(item => item.id !== id) }));
      },

      toggleItem: id => {
        set(state => {
          const newItems = state.items.map(item => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }
            return item;
          });

          return { items: newItems };
        });
      },

      removeAllItems: () => {
        set(() => ({ items: [] }));
      },

      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },

      markAllAsIncomplete: () => {
        set(state => {
          const newItems = state.items.map(item => {
            return { ...item, packed: false };
          });
          return { items: newItems };
        });
      },

      markAllAsComplete: () => {
        set(state => {
          const newItems = state.items.map(item => {
            return { ...item, packed: true };
          });
          return { items: newItems };
        });
      },
    }),
    {
      name: 'items',
    },
  ),
);
