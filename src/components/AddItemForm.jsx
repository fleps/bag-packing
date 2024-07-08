import { useRef, useState } from 'react';
import Button from './Button';

const AddItemForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const inputRef = useRef();

  const handleFormSumit = e => {
    e.preventDefault();

    if (!itemName) {
      inputRef.current.focus();
      return;
    }

    onAddItem(itemName);
    setItemName('');
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleFormSumit}>
      <h2>Add an Item</h2>
      <input
        ref={inputRef}
        type='text'
        id='new-item'
        value={itemName}
        onChange={e => setItemName(e.target.value)}
      />
      <Button>Add to List</Button>
    </form>
  );
};

export default AddItemForm;
