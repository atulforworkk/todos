export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string | undefined;
  touched: boolean | undefined;
}

const PreAuthInput = ({
  label,
  name,
  error,
  touched,
  ...props
}: InputProps) => {
  return (
    <div>
      <div className="flex flex-col">
        <label className="ml-2 text-sm font-semibold text-[#212529]">
          {label}
        </label>
        <input
          type="text"
          className="px-2 py-2 border rounded-md "
          id={name}
          {...props}
        />
      </div>
    </div>
  );
};

export default PreAuthInput;
