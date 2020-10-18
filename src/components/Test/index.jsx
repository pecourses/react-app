import React from 'react';

const TestComponent = (props) => {
  const { children } = props;

  return (
    <div >
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
        tenetur quam doloribus delectus soluta officiis, laboriosam, beatae
        molestiae ab voluptatum placeat, minima odit aliquid accusamus quibusdam
        expedita asperiores commodi. Neque.
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TestComponent;
