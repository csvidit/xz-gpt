import { ChangeEventHandler } from "react";

const HumanizeToggle = (props: {onChange: ChangeEventHandler<HTMLInputElement>, checked: boolean}) => {
  return (
    <div className="form-control">
      <label className="cursor-pointer label flex-row space-x-1 items-center">
        <span className="label-text text-neutral-100 text-base">humanize?</span>
        <input
          data-theme="dracula"
          type="checkbox"
          className="toggle toggle-primary bg-neutral-200 checked:bg-violet-500"
          onChange={props.onChange}
          checked={props.checked}
        />
      </label>
    </div>
  );
};
export default HumanizeToggle;
