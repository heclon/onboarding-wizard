import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step2 = (props) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { state, actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    navigate("/result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2</h2>
      <label>
        Age:
        <input {...register("age")} defaultValue={state.age} />
      </label>
      <label>
        Years of experience:
        <input {...register("yearsOfExp")} defaultValue={state.yearsOfExp} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Step2;
