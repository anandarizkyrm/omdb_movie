import { Input } from 'antd';
import React from 'react';

const InputSearch = ({
  handleChange,
}: {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="w-72">
      <Input size="large" onChange={handleChange} placeholder="input search text" />
    </div>
  );
};

export default InputSearch;
