const ButtonAddFile = () => {
  return (
    <label
      htmlFor="file-upload"
      className="w-1/6 cursor-pointer flex-col space-y-2 resize-none rounded-md p-2 lg:p-4 h-20 text-neutral-100 bg-neutral-900 border border-neutral-800 bg-opacity-80 shadow-md focus:ring-offset focus:ring-offset-violet-500 focus:ring-opacity-40 hover:border-violet-500 transition-all duration-200 ease-in-out focus:border-violet-500 placeholder-violet-500"
    >
      Add File
      <input
        id="file-upload"
        placeholder="Upload File"
        type="file"
        accept="image/jpeg, image/png, image/gif"
        className="hidden flex-col space-y-2 resize-none w-full rounded-md p-2 lg:p-4 bg-neutral-900 border border-neutral-800 bg-opacity-80 shadow-md focus:ring-offset focus:ring-offset-violet-500 focus:ring-opacity-40 focus:border-violet-500 placeholder-violet-500"
      ></input>
    </label>
  );
};

export default ButtonAddFile;
