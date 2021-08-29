import React, { useRef, useEffect } from "react";
import { OptionTypeBase } from "react-select";
import Select, { Props as AsyncProps } from "react-select/async";
import { useField } from "@unform/core";

interface Props extends AsyncProps<OptionTypeBase, boolean> {
  name: string;
  label?: string;
  instanceId?: string;
}

const ASyncSelect: React.FC<Props> = ({
  name,
  label,
  instanceId = "react-select",
  ...rest
}) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }

          return ref.select.state.value.map(
            (option: OptionTypeBase) => option.value
          );
        }
        if (!ref.select.state.value) {
          return "";
        }

        return ref.select.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <Select
        cacheOptions
        ref={selectRef}
        instanceId={instanceId}
        defaultValue={defaultValue}
        classNamePrefix="react-select"
        {...rest}
      />

      {error && (
        <span>
          {error}
          <br />
        </span>
      )}
    </>
  );
};

export default ASyncSelect;
