import { useItemsStore } from '../stores/itemsStore';
import Counter from './Counter';

const TopBar = () => {
  const items = useItemsStore(state => state.items);
  const numberOfItemsPacked = items.filter(item => item.packed).length;

  return (
    <header>
      <h1>Bag Packing</h1>
      <Counter
        numberOfItemsPacked={numberOfItemsPacked}
        totalNumberOfItems={items.length}
      />
    </header>
  );
};

export default TopBar;
