import React from 'react';

const CTAButton = ({ icon, title, fun }: ICTAButton) => {
  return (
    <button
      onClick={fun}
      className="gap-2 bg-primary text-btnText font-semibold rounded py-1.5 px-3 text-white"
    >
      {icon && <span>i</span>}
      <span>{title}</span>
    </button>
  );
};

export default CTAButton;
