import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

interface Props<T> extends UseControllerProps<T> {
  error: FieldError | undefined;
}

const ControllerInput = <T extends FieldValues>({
  name,
  control,
  error,
}: Props<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: "This is required",
      }}
      render={({ field: { onChange } }) => (
        <>
          <input
            onChange={(text) => {
              onChange(text);
            }}
          />
          {error && <span style={{ color: "red" }}>{error?.message}</span>}
        </>
      )}
    />
  );
};

export default ControllerInput;
