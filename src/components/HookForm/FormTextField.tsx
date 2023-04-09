import React, { ReactElement, memo, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField, { TextFieldProps } from '../TextField';
import { Rules, validateField } from '../../shared';
import InputAdornment from '../InputAdornment';
import IconButton from '../IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export type FormTextFieldProps = {
  name: string;
  rules?: Rules;
  visibility?: boolean;
  visibilityOffIcon?: ReactElement;
  visibilityIcon?: ReactElement;
} & TextFieldProps;

const FromTextField = ({
  name,
  rules,
  size,
  visibility,
  visibilityIcon,
  visibilityOffIcon,

  ...other
}: FormTextFieldProps) => {
  const { control } = useFormContext();
  const [showPass, setShowPass] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: (value) => validateField<unknown>(name, value, rules),
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
            size={size}
            {...(visibility && {
              type: showPass ? 'text' : 'password',
              InputProps: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton size={size} onClick={() => setShowPass((prev) => !prev)}>
                      {showPass ? visibilityOffIcon || <VisibilityOff /> : visibilityIcon || <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            })}
            {...other}
          />
        );
      }}
    />
  );
};

export default FromTextField;
