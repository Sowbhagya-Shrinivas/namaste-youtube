const Button = ({ name }) => {
  return (
    <div>
      <button className="flex flex-wrap px-5 py-2 m-2 bg-gray-200 rounded-lg w-30">
        {name}
      </button>
    </div>
  );
};

export default Button;
