import React from 'react';
import { CTAButton } from '..';

interface IModalBox {
  cn: string;
  ques: string;
  warning: string;
  closeFun?: () => void;
  confirmFun?: () => void;
}

const ModalBox = ({ ques, warning, cn, confirmFun, closeFun }: IModalBox) => {
  return (
    <div onClick={closeFun} className={`modal_box ${cn}`}>
      <article className="w-4/12 p-3 bg-white rounded-md">
        <p className="text-primary text-medium font-primary">{ques}</p>
        <p className="text-black-100 text-small font-ariel leading-6">
          {warning}
        </p>

        <div className="flex gap-5 mt-4">
          <CTAButton title="Go Back" fun={closeFun} />
          <CTAButton title="Confirm" fun={confirmFun} />
        </div>
      </article>
    </div>
  );
};

export default ModalBox;
