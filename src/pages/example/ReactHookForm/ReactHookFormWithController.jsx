import React, { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";
import { ToggleButton } from "primereact/togglebutton";
import { InputText } from "primereact/inputtext";

export default function ReactHookFormWithController() {
  const toast = useRef(null);
  const defaultValues = { value: false, firstName: "" };
  const form = useForm({ defaultValues });
  const errors = form.formState.errors;

  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "Form Submitted",
      detail: `${form.getValues("value").toString()} ${form
        .getValues("firstName")
        .toString()} `,
    });
  };

  const onSubmit = (data) => {
    data.value && show();
    form.reset();
  };

  const getFormErrorMessage = (name) => {
    return errors[name] ? (
      <small className="p-error">{errors[name].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  return (
    <div className="card flex-column align-items-center gap-2justify-content-center flex">
      <Toast ref={toast} />
      <Controller
        name="value"
        control={form.control}
        rules={{ required: "Value is required." }}
        render={({ field, fieldState }) => (
          <div className="flex-column align-items-center flex gap-2">
            <ToggleButton
              id={field.name}
              checked={field.value}
              onChange={field.onChange}
              className={classNames("w-6rem", {
                "p-invalid": fieldState.error,
              })}
            />
            {getFormErrorMessage(field.name)}
          </div>
        )}
      />
      <Controller
        name="firstName"
        control={form.control}
        rules={{ required: "First Name is required." }}
        render={({ field, fieldState }) => (
          <div className="flex-column align-items-center flex gap-2">
            <InputText
              id={field.name}
              value={field.value}
              onChange={field.onChange}
              className={classNames("w-6rem", {
                "p-invalid": fieldState.error,
              })}
            />
            {getFormErrorMessage(field.name)}
          </div>
        )}
      />
      <Button
        label="Submit"
        type="submit"
        icon="pi pi-check"
        className="p-button-outlined"
      />
    </div>
  );
}
