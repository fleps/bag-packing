import { useItemsStore } from '../stores/itemsStore';
import Button from './Button';

const ButtonGroup = () => {
  const markAllAsComplete = useItemsStore(state => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(state => state.markAllAsIncomplete);
  const resetToInitial = useItemsStore(state => state.resetToInitial);
  const removeAllItems = useItemsStore(state => state.removeAllItems);

  const secondaryButtons = [
    {
      label: 'Mark all as complete',
      onClick: markAllAsComplete,
    },
    {
      label: 'Mark all as incomplete',
      onClick: markAllAsIncomplete,
    },
    {
      label: 'Reset to initial',
      onClick: resetToInitial,
    },
    {
      label: 'Remove all items',
      onClick: removeAllItems,
    },
  ];
  return (
    <section className='button-group'>
      {secondaryButtons.map(button => (
        <Button key={button.label} style={'btn--secondary'} onClick={button.onClick}>
          {button.label}
        </Button>
      ))}
    </section>
  );
};

export default ButtonGroup;
