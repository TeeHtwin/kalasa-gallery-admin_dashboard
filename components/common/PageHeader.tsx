import React from 'react';

type PageHeaderProps = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="grow py-6 flex flex-col gap-14">
      <div className="flex flex-col gap-4">
        <h1
          className="text-heading font-heading text-primary text-3xl"
          style={{ fontFamily: 'cardo' }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
