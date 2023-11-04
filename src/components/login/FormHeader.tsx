type FormHeaderType = {
  title: string;
  description: string;
};

const FormHeader = ({ title, description }: FormHeaderType) => {
  return (
    <div className="flex flex-col gap-1 text-medium">
      <legend className="text-[30px] font-bold text-primary font-primary">
        {title}
      </legend>
      <p>{description}</p>
    </div>
  );
};
export default FormHeader;
