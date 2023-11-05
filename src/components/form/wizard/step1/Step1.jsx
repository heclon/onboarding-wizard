import { useEffect, useState } from "react";
import WizardContainer from "../WizardContainer.jsx";
import GetStarted from "./GetStarted.jsx";
import { fetchMockedUser } from "../../../../service/MockedUserService.js";
import LoadingSpinner from "../../../spinner/LoadingSpinner.jsx";
import { fetchMockedProduct } from "../../../../service/MockProductService.js";
import { fetchMockedFeed } from "../../../../service/MockedFeedService.jsx";
import { ConnexianButton } from "../../../button/ConnexianButton.jsx";
// import { fetchProduct } from "../../../../service/ProductService.js";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [product, setProduct] = useState({});
  const [feed, setFeed] = useState({});

  const hideSpinner = () => {
    setIsLoading(false);
  };

  const getProduct = async () => {
    // 2.1 GET call to /environment/get for product data
    // const result = await fetchProduct(urlElements);
    const result = await fetchMockedProduct();
    setProduct(result);
  };
  const getUser = async () => {
    const user = await fetchMockedUser();
    // const user = null;
    if (user !== null) {
      setIsUserLoggedIn(true);
      setUser(user);
      setIsLoading(false);
    } else {
      console.log("User is not logged in! ");
      setIsUserLoggedIn(false);
      setIsLoading(false);
    }
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
    getUser();
    getProduct();
    getFeed();
    console.log("isUserLoggedIn: ", isUserLoggedIn);
    console.log("isLoading: ", isLoading);
    console.log("user: ", user);
    return () => {};
  }, []);

  const getStartedSteps = (
    <>
      <div className="h-fit border-b-2 border-gray-300 p-2 pb-4 text-lg font-bold">
        Get started with a free Professional Account
      </div>

      {/*LIST*/}
      <div className="p-2">
        <div className="flex w-auto items-center gap-4 rounded p-2">
          <div className="flex h-8 w-8 shrink-0 grow-0 items-center justify-center rounded-full bg-blue-500 font-bold text-white lg:h-10 lg:w-10">
            1
          </div>
          <div>
            <h2 className="text-sm font-medium">
              Create a <b>Professional Account</b> in seconds, all you need is
              your ABN.
            </h2>
          </div>
        </div>

        <div className="flex w-auto items-center gap-4 rounded p-2">
          <div className="flex h-8 w-8 shrink-0 grow-0 items-center justify-center rounded-full bg-blue-500 font-bold text-white lg:h-10 lg:w-10">
            2
          </div>
          <div>
            <h2 className="text-sm font-medium">
              <b>Professional Accounts</b> use <b>Teams</b> to group staff by
              function. Give your <b>Team</b> a name to finish your setup.
            </h2>
          </div>
        </div>

        <div className="flex w-auto items-center gap-4 rounded p-2">
          <div className="flex h-8 w-8 shrink-0 grow-0 items-center justify-center rounded-full bg-blue-500 font-bold text-white lg:h-10 lg:w-10">
            3
          </div>
          <div>
            <h2 className="text-sm font-medium">
              Your <b>Professional Account</b> will be assigned with default{" "}
              <b>Modules. </b>
              For more info, please{` `}
              <a
                className="font-semibold underline"
                href="https://connexian.zendesk.com/hc/en-us/requests/new"
                target="_blank"
                rel="noreferrer"
              >
                contact us.
              </a>
            </h2>
          </div>
        </div>
      </div>

      {/*BUTTONS*/}
      <div className="grid grid-flow-col items-end justify-center gap-2 pb-4">
        <div>
          <ConnexianButton
            colorScheme="white"
            onClick={() => {
              console.log("Redirect to GATEWAY");
            }}
            label="Not now"
          />
        </div>
        <div>
          <ConnexianButton
            colorScheme="blue"
            label="Let's go"
            onClick={() => {
              navigate("/abn-search");
            }}
          />
        </div>
      </div>
    </>
  );

  const loginIframe = (
    <div className="scaled-iframe">
      <iframe
        src="https://account.fundsflow.digital/?ui_codename=gateway"
        className="h-screen w-full"
        onLoad={() => {
          hideSpinner();
        }}
      />
    </div>
  );

  return (
    <div id="invitation-wizard">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="">
          {isUserLoggedIn ? (
            <WizardContainer
              title="Professional Account Quick Start"
              subTitle="Boost your business with a Free Professional Account."
              user={user}
              feed={feed}
            >
              <GetStarted
                product={product}
                feed={feed}
                isUserLoggedIn={isUserLoggedIn}
              >
                {getStartedSteps}
              </GetStarted>
            </WizardContainer>
          ) : (
            <WizardContainer
              title="Professional Account Quick Start"
              subTitle="Boost your business with a Free Professional Account."
              user={{}}
              feed={{}}
            >
              <GetStarted
                product={product}
                feed={feed}
                isUserLoggedIn={isUserLoggedIn}
              >
                {loginIframe}
              </GetStarted>
            </WizardContainer>
          )}
        </div>
      )}
    </div>
  );
};

export default Step1;
