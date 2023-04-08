import { ReactNode } from 'react';
import { FormProvider as Provider, UseFormReturn } from 'react-hook-form';

interface FormProviderProps<T extends Record<string, any>> {
  methods: UseFormReturn<T>;
  onSubmit: () => void;
  children: ReactNode;
}

export default function FormProvider<T extends Record<string, any>>({
  methods,
  onSubmit,
  children,
}: FormProviderProps<T>) {
  return (
    <Provider {...methods}>
      <form onSubmit={onSubmit} style={{ width: '100%' }}>
        {children}
      </form>
    </Provider>
  );
}
