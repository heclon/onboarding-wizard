import "primeicons/primeicons.css";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction.js";
import { InputMask } from "primereact/inputmask";
import { Controller, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import { useNavigate } from "react-router-dom";
import { ConnexianButton } from "../../../button/ConnexianButton.jsx";

const AbnSearch = ({ feed, abn, setAbn }) => {
  const navigate = useNavigate();

  const defaultValues = {
    abn: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm({ defaultValues });

  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    data = { ...data };
    //TODO: integrate API call to search by ABN
    //https://api.fundsflow.digital/v2/organisation/search?query=93667529294&match_list%5B0%5D=abn_code&extend_with%5B0%5D=raw&do_lock_ui=true&_nocache=1690769940121
    console.log(
      "Call API https://api.fundsflow.digital/v2/organisation/search?query=93667529294&match_list%5B0%5D=abn_code&extend_with%5B0%5D=raw&do_lock_ui=true&_nocache=1690769940121",
    );
    actions.updateAction(data);
    navigate("/abn-result");
  };

  return (
    <>
      <form id="abnSearchForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full lg:inline-flex lg:h-[470px] lg:grid-flow-col">
          {/*LEFT PANEL => DYNAMIC CONTENT*/}
          <div className="w-full p-3 lg:w-2/3">{feed.step2_search_abn}</div>

          {/*GRAY BOX*/}
          <div className="grid rounded-lg bg-gray-200 p-2 text-gray-600 lg:w-1/3">
            {/*HEADER*/}
            <div className="h-fit border-b-2 border-gray-300 p-2 pb-4 text-lg font-bold">
              Find my business
            </div>

            {/*INSTRUCTIONS*/}
            <div className="p-2">
              For a simple setup, we use ABN data to prefill{" "}
              <b>Professional Account </b>
              details.
            </div>

            {/*ABN FIELD*/}
            <div>
              <Controller
                name="abn"
                control={control}
                rules={{ required: true, minLength: 11 }}
                render={({ field, fieldState }) => (
                  <div className="col-12 flex-col	font-normal text-gray-600">
                    {/*LABEL*/}
                    <div className="w-full pb-2 pt-8 text-center">
                      <label
                        htmlFor={field.name}
                        className={classNames({ "p-error": errors.abn })}
                      >
                        Please enter your ABN here
                      </label>
                    </div>

                    {/*FIELD*/}
                    <div className="grid w-full place-items-center py-2">
                      <div className="flex justify-center">
                        <InputMask
                          id={field.name}
                          value={field.value}
                          className={classNames({
                            "p-invalid": fieldState.error,
                          })}
                          onChange={(e) => {
                            field.onChange(e.target.value);
                          }}
                          mask="99 999 999 999"
                          placeholder="99 999 999 999"
                        />
                      </div>
                      <div className="col-12 h-5 justify-end py-0 text-center">
                        {errors.abn && errors.abn.type === "required" && (
                          <small className="p-error">
                            Please enter a valid ABN
                          </small>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>

            {/*BUTTONS*/}
            <div className="grid grid-flow-col items-end justify-center gap-2 pb-4">
              <div>
                <ConnexianButton
                  colorScheme="white"
                  onClick={() => {
                    console.log("Go back to step 1");
                    navigate("/get-started");
                  }}
                  label="Go back"
                />
              </div>
              <div>
                <ConnexianButton
                  colorScheme="blue"
                  label="Search ABN"
                  type="submit"
                  // onClick={onSubmit}
                  // onClick={() => {
                  //   navigate("/abn-result", {
                  //     // state: {
                  //     //   abn: product.info,
                  //     // },
                  //   });
                  // }}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AbnSearch;
