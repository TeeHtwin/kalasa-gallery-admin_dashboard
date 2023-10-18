import React from 'react';

const PagiBtn = ({ title, fun, containerStyle }: IPagiBtn) => {
  return (
    <button
      onClick={fun}
      className={`w-7 h-7 text-btnText center border rounded-md ${containerStyle}`}
    >
      {title}
    </button>
  );
};

export default PagiBtn;
