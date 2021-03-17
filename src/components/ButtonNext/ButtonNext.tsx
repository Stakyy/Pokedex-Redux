import React from 'react';
import s from './button.module.scss';

type nextUrl = {
  onLoad: () => void;
};

const ButtonNext: React.FC<nextUrl> = ({ onLoad }) => {
  return (
    <div className={s.button} onClick={onLoad}>
      Загрузить еще
    </div>
  );
};

export default ButtonNext;
