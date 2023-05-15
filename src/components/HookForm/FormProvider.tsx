/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, memo } from 'react';
import { FormProvider as Provider, UseFormReturn } from 'react-hook-form';

interface FormProviderProps {
  methods: UseFormReturn<any>;
  onSubmit: () => void;
  children: ReactNode;
}

const FormProvider = ({ methods, onSubmit, children }: FormProviderProps) => {
  return (
    <Provider {...methods}>
      <form onSubmit={onSubmit} style={{ width: '100%' }}>
        {children}
      </form>
    </Provider>
  );
};

export default FormProvider;
