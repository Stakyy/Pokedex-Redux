import React from 'react';

type nextUrl = {
  onLoad: () => void;
};

const ButtonNext: React.FC<nextUrl> = ({ onLoad }) => {
  return (
    <div className="button-next" onClick={onLoad}>
      Загрузить еще
    </div>
  );
};

export default ButtonNext;
