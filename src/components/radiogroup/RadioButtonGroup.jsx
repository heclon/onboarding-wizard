import { RadioGroup } from "@headlessui/react";
import { Controller } from "react-hook-form";

export const RadioButtonGroup = ({
  name,
  options,
  setExternalValue,
  form,
  groupLabel,
  groupLabelStyle,
}) => {
  return (
    <div className="grid-flow-row pt-1">
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <>
            <RadioGroup {...field}>
              {groupLabel !== "" ?? (
                <RadioGroup.Label className={groupLabelStyle}>
                  {groupLabel}
                </RadioGroup.Label>
              )}
              <div className="align-items-end space-y-2">
                {options.map((option) => (
                  <RadioGroup.Option
                    disabled={true}
                    key={option.name}
                    value={option.name}
                    active={option.id === 1}
                    checked={option.id === 1}
                    className={({ active, checked }) =>
                      `
                    ${
                      checked
                        ? "border-2 border-sky-300 bg-blue-500 bg-opacity-75 text-white"
                        : "bg-blue-200 text-gray-500  hover:ring-2 hover:ring-offset-sky-300"
                    }
                      relative flex h-16 cursor-pointer rounded-lg px-5 shadow-sm`
                    }
                    onClick={() => {
                      form.setValue(name, option.name);
                      setExternalValue(option.name);
                    }}
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex place-items-center">
                          <div className="mt-1 w-6 text-gray-600">
                            {checked && (
                              <CheckIcon className="h-6 text-gray-600" />
                            )}
                          </div>
                          <div className="mt-2 pl-3 text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`lg:text-md flex-wrap text-sm font-semibold ${
                                checked
                                  ? "text-white"
                                  : "border-gray-200 text-gray-600"
                              }`}
                            >
                              {option.name}
                            </RadioGroup.Label>
                          </div>
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </>
        )}
      />
    </div>
  );
};

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
