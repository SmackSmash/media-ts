import type { FC, ReactNode } from 'react';

const Button: FC<{ children: ReactNode; [x: string]: unknown }> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className='mr-[4px] cursor-pointer border-4 bg-green-300 px-4 py-2 font-bold uppercase shadow-[5px_5px_0_black] transition-colors duration-300 hover:bg-green-50 active:translate-[4px] active:shadow-[1px_1px_0_black]'
    >
      {children}
    </button>
  );
};

export default Button;
