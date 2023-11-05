import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction.js";
import WizardContainer from "../WizardContainer.jsx";
import SelectUserRole from "./SelectUserRole.jsx";
import { fetchMockedFeed } from "../../../../service/MockedFeedService.jsx";
import { roleOptions } from "./roleOptions.jsx";
const Step4 = () => {
  const [role, setRole] = useState("Financial Advisor");

  //TODO: load from cache, session or context
  const user = {
    advisorName: "Luke Skywalker",
    email: "luke.skywalker@tls.org",
    profile: "Financial Advisor",
  };

  const [feed, setFeed] = useState({});

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const defaultValues = { role: "Financial Advisers and Accountants" };
  const form = useForm({ defaultValues });
  const errors = form.formState.errors;
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    data = { user, ...data };
    actions.updateAction(data);
    navigate("/complete-details");
  };

  const getFeed = async () => {
    const result = await fetchMockedFeed();
    // const advisor = null
    if (result !== null) {
      setFeed(result);
    } else {
      console.log("Feed is not loaded! ");
    }
  };

  useEffect(() => {
    getFeed();
    console.log("feed: ", feed);
    return () => {};
  }, []);

  return (
    <form
      id="confirmAbnForm"
      onSubmit={form.handleSubmit(onSubmit)}
      // className="flex-column align-items-center flex gap-2"
    >
      <WizardContainer
        title="Professional Account Quick Start"
        subTitle="Boost your business with a Free Professional Account."
        user={user}
      >
        <SelectUserRole feed={feed} role={role} setRole={setRole} form={form} />
      </WizardContainer>
    </form>
  );
};

export default Step4;
