import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const InvestmentAmount = (props) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { state, actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    navigate("/confirm-application");
  };

  return (
    <div className="card justify-content-center flex">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-column align-items-center flex gap-2"
      >
        <h2>How much would you like to invest?</h2>
        <label>
          Investment Amount:
          <input
            {...register("investment-amount")}
            defaultValue={state.amount}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default InvestmentAmount;
