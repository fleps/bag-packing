import { useMemo, useState } from 'react';
import EmptyView from './EmptyView';
import Select from 'react-select';
import { useItemsStore } from '../stores/itemsStore';

const sortingOptions = [
  { label: 'Sort by default', value: 'default' },
  { label: 'Sort by packed', value: 'packed' },
  { label: 'Sort by unpacked', value: 'unpacked' },
];

const ItemList = () => {
  const items = useItemsStore(state => state.items);
  const deleteItem = useItemsStore(state => state.deleteItem);
  const toggleItem = useItemsStore(state => state.toggleItem);
  const [sortBy, setSortBy] = useState('default');

  const sotedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === 'packed') {
          return b.packed - a.packed;
        }

        if (sortBy === 'unpacked') {
          return a.packed - b.packed;
        }

        return;
      }),
    [items, sortBy],
  );

  return (
    <ul className='item-list'>
      {items.length === 0 && <EmptyView />}

      {items.length > 0 && (
        <li className='sorting'>
          <Select
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            onChange={option => setSortBy(option.value)}
            theme={theme => ({
              ...theme,
              colors: { ...theme.colors, primary: '#217993', primary25: '#b6dde7' },
            })}
          />
        </li>
      )}

      {sotedItems.map(item => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={deleteItem}
          onToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
};

export default ItemList;

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li className='item'>
      <label>
        <input
          type='checkbox'
          checked={item?.packed}
          onChange={() => onToggleItem(item.id)}
        />
        {item?.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};
