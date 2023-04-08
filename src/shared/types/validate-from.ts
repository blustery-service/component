export type ValidatorRulesNumber = {
  number: number;
};
export interface Validator {
  validate: boolean;
  isArray?: boolean;
  message?: string;
}

export interface Rules {
  min?: number | (Validator & ValidatorRulesNumber);
  max?: number | (Validator & ValidatorRulesNumber);
  length?: number | (Validator & ValidatorRulesNumber);
  required?: boolean | Validator;
  matches?: RegExp;
  email?: boolean | Validator;
  validate?: <T>(field: string, value: T) => boolean | string;
}
