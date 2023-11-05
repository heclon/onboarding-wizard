import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import { Button } from "primereact/button";

const CreateOrSelectInvestorProfile = (props) => {
  const navigate = useNavigate();
  const defaultValues = { entityType: "" };
  const form = useForm({ defaultValues });
  const errors = form.formState.errors;
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    // TODO clarify if we need to reset the form upon submit or not, and a back button?
    // form.reset();
    // Any other actions here

    navigate("/confirm-profile");
  };

  return (
    <div className="card justify-content-center flex">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-column align-items-center flex gap-2"
      >
        {/*<SelectInvestorType*/}
        {/*  title="Investor type"*/}
        {/*  subTitle="Tell us which type of legal entity will be making the investment"*/}
        {/*  investorName="Hector Longarte"*/}
        {/*  email="hector.longarte@connexian.com"*/}
        {/*  profile="Investor"*/}
        {/*  form={form}*/}
        {/*  errors={errors}*/}
        {/*/>*/}
      </form>
    </div>
  );
};

export default CreateOrSelectInvestorProfile;
