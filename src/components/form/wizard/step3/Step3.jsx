import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction.js";
import WizardContainer from "../WizardContainer.jsx";
import AbnResult from "./AbnResult.jsx";
import { fetchMockedFeed } from "../../../../service/MockedFeedService.jsx";

const Step3 = () => {
  // TODO: Get Full details about this entity from APIs
  // TODO: Just switch entity to test all cases
  const mockedEntity = {
    name: "FOUNDATION FOR THE VICTOR SMORGON INSTITUTE FOR EDUCATION AND RESEARCH AT EPWORTH",
    type: "Discretionary Investment Trust",
    abn: 93667529294,
    matchedType: true,
    existsInDB: true,
    userIsOwner: false,
    admins: ["Macks, Simone", "McAuley, John"],
  };
  // TODO: ABN matched
  // const mockedEntity = {
  //   name: "FOUNDATION FOR THE VICTOR SMORGON INSTITUTE FOR EDUCATION AND RESEARCH AT EPWORTH",
  //   type: "Discretionary Investment Trust",
  //   abn: 93667529294,
  //   matchedType: true,
  //   existsInDB: false,
  //   userIsOwner: false,
  //   admins: ["Macks, Simone", "McAuley, John"],
  // };
  // TODO: Account exists and you are the owner
  // const mockedEntity = {
  //   name: "FOUNDATION FOR THE VICTOR SMORGON INSTITUTE FOR EDUCATION AND RESEARCH AT EPWORTH",
  //   type: "Discretionary Investment Trust",
  //   abn: 93667529294,
  //   matchedType: true,
  //   existsInDB: true,
  //   userIsOwner: true,
  //   admins: ["Macks, Simone", "McAuley, John"],
  // };
  // TODO: ABN found but
  // const mockedEntity = {
  //   name: "FOUNDATION FOR THE VICTOR SMORGON INSTITUTE FOR EDUCATION AND RESEARCH AT EPWORTH",
  //   type: "Discretionary Investment Trust",
  //   abn: 93667529294,
  //   matchedType: false,
  //   existsInDB: false,
  //   userIsOwner: false,
  //   admins: ["Macks, Simone", "McAuley, John"],
  // };

  const [entity, setEntity] = useState(mockedEntity);
  // TODO: Not found case
  // const [entity, setEntity] = useState(null);

  //TODO: load from cache, session or context
  const user = {
    advisorName: "Luke Skywalker",
    email: "luke.skywalker@tls.org",
    profile: "Financial Advisor",
  };

  const [feed, setFeed] = useState({});

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const defaultValues = { entityType: "" };
  const form = useForm({ defaultValues });
  const errors = form.formState.errors;
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    data = { user, ...data };
    actions.updateAction(data);
    navigate("/select-role");
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
        <AbnResult feed={feed} entity={entity} setEntity={setEntity} />
      </WizardContainer>
    </form>
  );
};

export default Step3;
