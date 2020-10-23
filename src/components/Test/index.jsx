import React from 'react';
import { loadUsers } from '../../api';
import withData from '../HOCs/withData';

const TestComponent = (props) => {
  console.log(props);

  return (
    <div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
        tenetur quam doloribus delectus soluta officiis, laboriosam, beatae
        molestiae ab voluptatum placeat, minima odit aliquid accusamus quibusdam
        expedita asperiores commodi. Neque.
      </div>
    </div>
  );
};

export default withData({getData: loadUsers})(TestComponent);
