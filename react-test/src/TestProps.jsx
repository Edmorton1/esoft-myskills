import React, {memo} from 'react';

function TestProps(props) {
  const {object} = props
  console.log('ререндер пропс', object)

  return (
    <>
      <div>{object.id}</div>
      <div>{object.name}</div>
    </>
  );
}

export default memo(TestProps);
