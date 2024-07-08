const Counter = ({ numberOfItemsPacked, totalNumberOfItems }) => {
  return (
    <div className='counter'>
      <b>{numberOfItemsPacked}</b> of {totalNumberOfItems} items packed
    </div>
  );
};

export default Counter;
