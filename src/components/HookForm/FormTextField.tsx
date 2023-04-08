import { Controller, useFormContext } from 'react-hook-form';
import { Rules, validateField } from '@shared';
import { TextField, TextFieldProps } from '@component';

export type FormTextFieldProps = {
  name: string;
  rules?: Rules;
} & TextFieldProps;

export default function FromTextField({ name, rules, ...other }: FormTextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: (value) => validateField<any>(name, value, rules),
      }}
      render={({ field: { name, onBlur, onChange, ref, value }, fieldState: { error } }) => {
        return (
          <TextField
            fullWidth
            helperText={error && error.message}
            error={!!error}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
            value={value}
            {...other}
          />
        );
      }}
    />
  );
}
