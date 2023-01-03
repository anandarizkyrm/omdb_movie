import React, { ReactNode } from 'react';

function Button({ name, icon }: { name: string; icon: ReactNode }) {
  return (
    <div className="btn gap-2 ">
      {icon}
      {name}
    </div>
  );
}

export default Button;
