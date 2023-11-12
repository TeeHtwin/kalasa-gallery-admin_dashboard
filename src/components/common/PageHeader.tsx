import React from 'react';

const Header = ({ title }: { title: string }) => {
  return (
    <h1 className="text-heading font-normal text-primary font-primary">
      {title}
    </h1>
  );
};

export default Header;
