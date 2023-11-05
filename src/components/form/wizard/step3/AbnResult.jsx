import "primeicons/primeicons.css";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction.js";
import { useNavigate } from "react-router-dom";
import { ConnexianButton } from "../../../button/ConnexianButton.jsx";

const AbnResult = ({ feed, entity, setEntity }) => {
  const { actions, state } = useStateMachine({ updateAction });
  const navigate = useNavigate();
  console.log(entity);

  const linkAbnSearch = "/abn-search";
  return (
    <>
      <div className="grid w-full lg:inline-flex lg:h-[470px] lg:grid-flow-col">
        {/*LEFT PANEL => DYNAMIC CONTENT*/}
        <div className="w-full p-3 lg:w-2/3">{feed.step3_abn_results}</div>

        {/*GRAY BOX*/}
        <div className="grid rounded-lg bg-gray-200 p-2 text-gray-600 lg:w-1/3">
          <>
            {entity === null ? (
              <>
                {/*HEADER*/}
                <div className="h-fit border-b-2 border-gray-300 p-2 text-lg font-bold">
                  <i
                    className="pi pi-exclamation-circle pr-1 text-red-600"
                    style={{ fontSize: "2em", verticalAlign: "middle" }}
                  />{" "}
                  ABN not found
                </div>

                {/*INSTRUCTIONS*/}
                <div className="p-2">
                  <div className="text-md flex justify-center py-2 font-normal text-gray-600">
                    Would you like to try a different ABN?
                  </div>
                </div>

                {/*BUTTONS*/}
                <div className="grid grid-flow-col items-end justify-center gap-2 pb-4">
                  <div>
                    <ConnexianButton
                      colorScheme="blue"
                      label="Yes, please"
                      onClick={() => {
                        navigate(linkAbnSearch);
                      }}
                    />
                  </div>
                </div>
              </>
            ) : entity.matchedType === true &&
              entity.existsInDB === false &&
              entity.userIsOwner === false ? (
              <>
                {/*HEADER*/}
                <div className="h-fit border-b-2 border-gray-300 p-2 text-lg font-bold">
                  <i
                    className="pi pi-exclamation-circle pr-1 font-normal text-[#6AC12B]"
                    style={{ fontSize: "2rem", verticalAlign: "middle" }}
                  />{" "}
                  ABN matched
                </div>

                {/*INSTRUCTIONS*/}
                <div className="p-2">
                  {/*<div className="text-md pt-2 font-normal text-gray-600">*/}
                  {/*  Company name*/}
                  {/*</div>*/}
                  <div className="text-md pt-2 font-semibold text-gray-600">
                    {entity.name}
                  </div>
                  <div className="text-md pt-2 font-semibold text-gray-600">
                    ABN: {entity.abn}
                  </div>
                  {/*<div className="text-md pt-2 font-normal text-gray-600">*/}
                  {/*  Type: {entity.type}*/}
                  {/*</div>*/}
                  <div className="pt-4 text-sm font-normal text-gray-600">
                    If you have a business domain, please ensure you are logged
                    in under your business email address. If you have a publicly
                    available domain e.g. Gmail, you will be required to
                    manually invite your team members into the account.
                  </div>
                  <div className="text-md pt-4 font-normal text-gray-600">
                    Is this the one you are looking for?
                  </div>
                </div>

                {/*BUTTONS*/}
                <div className="grid grid-flow-col items-end justify-center gap-2 pb-4">
                  <div>
                    <ConnexianButton
                      label="No, retype ABN"
                      colorScheme="white"
                      onClick={() => {
                        navigate(linkAbnSearch);
                      }}
                    />
                  </div>
                  <div>
                    <ConnexianButton
                      label="Yes, that's the one"
                      colorScheme="green"
                      onClick={() => {
                        console.log("Call API to Join create account and team");
                        navigate("/select-role");
                      }}
                    />
                  </div>
                </div>
              </>
            ) : entity.matchedType === true &&
              entity.existsInDB === true &&
              entity.userIsOwner === true ? (
              <>
                {/*HEADER*/}
                <div className="h-fit border-b-2 border-gray-300 p-2 text-lg font-bold">
                  <i
                    className="pi pi-exclamation-circle pr-1 text-blue-500"
                    style={{ fontSize: "2em", verticalAlign: "middle" }}
                  />{" "}
                  ABN found
                </div>

                {/*INSTRUCTIONS*/}
                <div className="p-2">
                  <div className="text-md font-normal text-gray-600">
                    You are the account owner of:
                  </div>
                  <div className="text-md pt-3 font-semibold text-gray-600">
                    {entity.name}
                  </div>
                  <div className="text-md pt-3 font-semibold text-gray-600">
                    ABN: {entity.abn}
                  </div>
                  <div className="text-md pt-2 font-semibold text-gray-600">
                    Type: {entity.type}
                  </div>
                  <div className="text-md pt-3 font-normal text-gray-600">
                    which is already registered with Connexian.
                  </div>
                </div>

                {/*BUTTONS*/}
                <div className="grid grid-flow-col items-end justify-center gap-2 pb-4">
                  <div>
                    <ConnexianButton
                      colorScheme="blue"
                      label="Got it"
                      onClick={() => {
                        console.log("Redirect to dashboard?");
                      }}
                    />
                  </div>
                </div>
              </>
            ) : entity.matchedType === true &&
              entity.existsInDB === true &&
              entity.userIsOwner === false ? (
              <>
                {/*HEADER*/}
                <div className="h-fit border-b-2 border-gray-300 p-2 text-lg font-bold">
                  <i
                    className="pi pi-exclamation-circle pr-1 text-[#6AC12B]"
                    style={{ fontSize: "2em", verticalAlign: "middle" }}
                  />{" "}
                  Existing account
                </div>

                {/*INSTRUCTIONS*/}
                <div className="p-2">
                  <div className="text-md font-normal text-gray-600">
                    We found an existing Account for:
                  </div>
                  <div className="text-md pt-2 font-semibold text-gray-600">
                    {entity.name}
                  </div>
                  <div className="text-md pt-2 font-semibold text-gray-600">
                    ABN: {entity.abn}
                  </div>
                  <div className="text-md pt-2 font-semibold text-gray-600">
                    Type: {entity.type}
                  </div>
                  {/*<div className="text-md pt-4 font-normal text-gray-600">*/}
                  {/*  The account administrators are:*/}
                  {/*</div>*/}
                  {/*<div className="text-md pt-1 font-normal text-gray-600">*/}
                  {/*  {entity.admins &&*/}
                  {/*    entity.admins.map((admin) => (*/}
                  {/*      <div key={admin}> {admin}</div>*/}
                  {/*    ))}*/}
                  {/*</div>*/}
                  <div className="text-md pt-2 font-normal text-gray-600">
                    Would you like to join this account?
                  </div>
                </div>

                {/*BUTTONS*/}
                <div className="grid grid-flow-col items-end justify-center gap-2 pb-4">
                  <div>
                    <ConnexianButton
                      colorScheme="white"
                      label="No, retype ABN"
                      onClick={() => {
                        navigate(linkAbnSearch);
                      }}
                    />
                  </div>
                  <div>
                    <ConnexianButton
                      type="submit"
                      colorScheme="green"
                      label="Join this account"
                      onClick={(event) => {
                        // event.preventDefault();
                        console.log(
                          "Save form details and proceed to step 4: select-role ",
                        );
                        navigate("/select-role");
                      }}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/*HEADER*/}
                <div className="h-fit border-b-2 border-gray-300 p-2 text-lg font-bold">
                  <i
                    className="pi pi-exclamation-circle pr-1 text-red-500"
                    style={{ fontSize: "2em", verticalAlign: "middle" }}
                  />{" "}
                  ABN found but
                </div>

                {/*INSTRUCTIONS*/}
                <div className="p-2">
                  <div className="text-md py-2 font-normal text-gray-600">
                    A legal entity:
                  </div>
                  <div className="text-md font-semibold text-gray-600">
                    {entity.name}
                  </div>
                  <div className="text-md pt-2 font-semibold text-gray-600">
                    ABN: {entity.abn}
                  </div>
                  <div className="text-md pt-2 font-normal text-gray-600">
                    has been found in the ABR database, but its type is:
                  </div>
                  <div className="text-md pt-2 font-semibold text-gray-600">
                    {entity.type}
                  </div>
                  <div className="text-md pt-2 font-normal text-gray-600">
                    Would you like to try a different ABN?
                  </div>
                </div>

                {/*BUTTONS*/}
                <div className="grid grid-flow-col items-end justify-center gap-2 pb-4">
                  <div>
                    <ConnexianButton
                      colorScheme="blue"
                      label="Yes, please"
                      onClick={() => {
                        navigate(linkAbnSearch);
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default AbnResult;
