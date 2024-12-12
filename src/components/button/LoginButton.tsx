type Props = {
  label: string;
};

const LoginButton = ({ label }: Props) => {
  return (
    <button className="bg-pink-600 text-black text-lg px-4 py-2 shadow-md transition-all rounded-2xl font-semibold duration-300 hover:shadow-none">
      {label}
    </button>
  );
};

export default LoginButton;
