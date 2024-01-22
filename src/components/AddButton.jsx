function AddButton({ type }) {
  return (
    <button
      type={type}
      className="flex justify-center items-center text-black border rounded-full w-[60px] h-[50px] bg-neomorphism hover:bg-green-500 hover:text-white transition-all duration-300"
    >
      <span className="font-extrabold text-3xl ">+</span>
    </button>
  );
}

export default AddButton;
