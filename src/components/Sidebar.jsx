import { useItemsStore } from '../stores/itemsStore';
import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

const Sidebar = () => {
  const addItem = useItemsStore(state => state.addItem);
  return (
    <aside className='sidebar'>
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </aside>
  );
};

export default Sidebar;
