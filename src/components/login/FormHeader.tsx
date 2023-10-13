type FormHeaderType = {
  title: string;
  description: string;
};

const FormHeader = ({ title, description }: FormHeaderType) => {
  return (
    <div className="flex flex-col gap-1">
      <legend
        className="text-[30px] font-bold text-primary"
        style={{
          // * just temporary
          fontFamily: 'cardo',
        }}
      >
        {title}
      </legend>
      <p>{description}</p>
    </div>
  );
};
export default FormHeader;
