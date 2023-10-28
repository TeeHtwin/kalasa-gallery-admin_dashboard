import cn from 'classnames';

export const ModalBoxStyleFun = (value: boolean) => {
  const modalBoxStyle = cn({
    'opacity-0 scale-0 invisible': !value,
    'opacity-100 scale-100 visible': value,
  });

  return modalBoxStyle;
};

export const FilterBoxStyle = (value: boolean) => {
  const modalBoxStyle = cn({
    'opacity-0 invisible': !value,
    'opacity-100 visible': value,
  });

  return modalBoxStyle;
};
