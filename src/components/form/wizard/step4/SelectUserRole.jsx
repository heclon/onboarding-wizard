import "primeicons/primeicons.css";
import { useNavigate } from "react-router-dom";
import { RadioButtonGroup } from "../../../radiogroup/RadioButtonGroup.jsx";
import { roleOptions } from "./roleOptions.jsx";
import { ConnexianButton } from "../../../button/ConnexianButton.jsx";
const SelectUserRole = ({ form, feed, role, setRole }) => {
  console.log("Pre-selected: ", role);
  const navigate = useNavigate();
  return (
    <>
      <div className="grid w-full lg:inline-flex lg:h-[470px] lg:grid-flow-col">
        {/*LEFT PANEL => DYNAMIC CONTENT*/}
        <div className="w-full p-3 lg:w-2/3">{feed.step4_select_role}</div>

        {/*GRAY BOX*/}
        <div className="grid rounded-lg bg-gray-200 p-2 text-gray-600 lg:w-1/3">
          {/*HEADER*/}
          <div className="h-fit border-b-2 border-gray-300 p-2 pb-4 text-lg font-bold">
            Which role best describes you?
          </div>

          {/*RADIO BUTTON TO SELECT ROLE*/}
          <div className="p-2">
            <RadioButtonGroup
              value={role}
              name="role"
              defaultValues={1}
              setExternalValue={setRole}
              form={form}
              options={roleOptions}
            />
          </div>

          {/*DISCLAIMER*/}
          <div className="p-4 text-sm font-normal text-gray-600">
            For your privacy, we will not allow anyone to access your
            professional account whose email address is not from the following
            domain (show listed domain).
            <br />
            If you do not own your own domain name, you will be required to add
            users manually. You can provide other team members settings in
            relation to advisers and non-advisers within your account, including
            adding users from outside of your domain.
          </div>

          {/*BUTTONS*/}
          <div className="grid grid-flow-col items-end justify-center gap-2 pb-4">
            <div>
              <ConnexianButton
                colorScheme="white"
                label="Go back"
                onClick={() => {
                  console.log("Redirect to GATEWAY");
                  navigate("/abn-result");
                }}
              />
            </div>
            <div>
              <ConnexianButton
                type="submit"
                colorScheme="green"
                label="Confirm"
                onClick={() => {
                  navigate("/complete-details", {
                    // state: {
                    //   productInfoUrl: product.info,
                    //   campaign_footprint: product.campaign_footprint,
                    // },
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectUserRole;
