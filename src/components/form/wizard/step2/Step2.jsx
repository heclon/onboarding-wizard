import { useEffect, useState } from "react";
import WizardContainer from "../WizardContainer.jsx";
import AbnSearch from "./AbnSearch.jsx";
import { fetchMockedFeed } from "../../../../service/MockedFeedService.jsx";

const Step2 = () => {
  const [feed, setFeed] = useState({});
  const [abn, setAbn] = useState("");

  //TODO: load from cache, session or context
  const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    email: "luke.skywalker@tls.org",
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
    <WizardContainer
      title="Professional Account Quick Start"
      subTitle="Boost your business with a Free Professional Account."
      user={user}
    >
      <AbnSearch feed={feed} abn={abn} setAbn={setAbn} />
    </WizardContainer>
  );
};

export default Step2;
