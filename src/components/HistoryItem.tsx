const HistoryItem = (props: {key: any, id: string | null | undefined, label: string, children: any}) => {
  console.log(props.key);
  return (
    <div className="">
      <label htmlFor={"my-modal-"+props.id} className="btn text-slate-100 font-normal capitalize p-4 bg-slate-100 bg-opacity-10 border-0 rounded-full w-full lg:w-1/2">
        {props.label}
      </label>
      <input type="checkbox" id={"my-modal-"+props.id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={"my-modal-"+props.id}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {props.label}
          </h3>
          <p className="py-4">
            {props.children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
