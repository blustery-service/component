import { ChipTypeMap, AutocompleteProps as MuiAutocompleteProps, Autocomplete as MuiAutocomplete } from '@mui/material';
import React, { memo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> extends MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent> {}

function Autocomplete<
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false
>(props: MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  return <MuiAutocomplete {...props} />;
}

export default memo(Autocomplete);
