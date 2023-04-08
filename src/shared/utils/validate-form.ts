import { isArray, isEmpty } from 'lodash';
import { Rules } from '../types/validate-from';

export const string = {
  length: (name: string, length: number) => `${name} must be exactly ${length} characters`,
  min: (name: string, min: number) => `${name} must be at least ${min} characters`,
  max: (name: string, max: number) => `${name} must be at most ${max} characters`,
  matches: (name: string) => `${name} must match the following: ""`,
  email: (name: string) => `${name} must be a valid email`,
  url: (name: string) => `${name} must be a valid URL`,
  uuid: (name: string) => `${name} must be a valid UUID`,
  trim: (name: string) => `${name} must be a trimmed string`,
  lowercase: (name: string) => `${name} must be a lowercase string`,
  uppercase: (name: string) => `${name} must be a upper case string`,
  required: (name: string) => `${name} is a required field`,
};

export function validateMail<T = unknown>(name: string, value: T, rules?: Rules['email']) {
  if (!rules) {
    return {
      isVerify: true,
      message: '',
    };
  }

  /*eslint-disable*/
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (typeof rules === 'boolean') {
    const isEmail = emailRegex.test(value as string);
    return {
      isVerify: isEmail,
      message: !isEmail ? string.email(name) : '',
    };
  } else if (!rules?.validate) {
    return { isVerify: true, message: '' };
  } else if (rules.isArray) {
    if (!isArray(value)) {
      return {
        isVerify: false,
        message: rules?.message || string.email(name),
      };
    } else {
      const isValid = value.every((item) => {
        const { isVerify } = validateMail(name, item, { ...rules, isArray: false });
        return isVerify;
      }) as boolean;

      return {
        isVerify: isValid,
        message: !isValid ? rules?.message || string.email(name) : '',
      };
    }
  } else {
    const isEmail = emailRegex.test(value as string);
    return {
      isVerify: isEmail,
      message: !isEmail ? rules?.message || string.email(name) : '',
    };
  }
}

export function validateRequired<T = unknown>(name: string, value: T, rules: Rules['required']) {
  if (!rules) {
    return { isVerify: true, message: '' };
  }

  if (typeof rules === 'boolean') {
    const isMatch = !isEmpty(value);
    return { isVerify: isMatch, message: !isMatch ? string.required(name) : '' };
  } else if (!rules?.validate) {
    return { isVerify: true, message: '' };
  } else if (rules.isArray) {
    if (!isArray(value)) {
      return {
        isVerify: false,
        message: rules?.message || string.required(name),
      };
    } else {
      const isValid = value.every((item) => {
        const { isVerify } = validateRequired(name, item, { ...rules, isArray: false });
        return isVerify;
      }) as boolean;

      return {
        isVerify: isValid,
        message: !isValid ? rules?.message || string.required(name) : '',
      };
    }
  } else {
    const isMatch = isEmpty(value);
    return { isVerify: isMatch, message: !isMatch ? rules?.message || string.required(name) : '' };
  }
}

export function validateMin<T = unknown>(name: string, value: T, rules: Rules['min']) {
  if (!rules) {
    return {
      isVerify: true,
      message: '',
    };
  }
  if (typeof rules === 'number') {
    const isMin = (value as string).length >= rules;
    return {
      isVerify: isMin,
      message: !isMin ? string.min(name, rules) : '',
    };
  } else if (!rules?.validate) {
    return { isVerify: true, message: '' };
  } else if (rules.isArray) {
    if (!isArray(value)) {
      return {
        isVerify: false,
        message: rules?.message || string.min(name, rules.number),
      };
    } else {
      const isValid = value.every((item) => {
        const { isVerify } = validateMin(name, item, { ...rules, isArray: false });
        return isVerify;
      }) as boolean;

      return {
        isVerify: isValid,
        message: !isValid ? rules?.message || string.min(name, rules.number) : '',
      };
    }
  } else {
    const isMin = (value as string).length >= rules.number;
    return {
      isVerify: isMin,
      message: !isMin ? rules?.message || string.min(name, rules.number) : '',
    };
  }
}

export function validateMax<T = unknown>(name: string, value: T, rules: Rules['max']) {
  if (!rules) {
    return {
      isVerify: true,
      message: '',
    };
  }

  if (typeof rules === 'number') {
    const isMax = (value as string).length <= rules;
    return {
      isVerify: isMax,
      message: !isMax ? string.max(name, rules) : '',
    };
  } else if (!rules?.validate) {
    return { isVerify: true, message: '' };
  } else if (rules.isArray) {
    if (!isArray(value)) {
      return {
        isVerify: false,
        message: rules?.message || string.max(name, rules.number),
      };
    } else {
      const isValid = value.every((item) => {
        const { isVerify } = validateMax(name, item, { ...rules, isArray: false });
        return isVerify;
      }) as boolean;

      return {
        isVerify: isValid,
        message: !isValid ? rules?.message || string.max(name, rules.number) : '',
      };
    }
  } else {
    const isMax = (value as string).length <= rules?.number;
    return {
      isVerify: isMax,
      message: isMax ? rules?.message || string.min(name, rules?.number) : '',
    };
  }
}

export function validateLength<T = unknown>(name: string, value: T, rules: Rules['length']) {
  if (!rules) {
    return {
      isVerify: true,
      message: '',
    };
  }

  if (typeof rules == 'number') {
    const isLength = (value as string).length === rules;
    return {
      isVerify: isLength,
      message: !isLength ? string.length(name, rules) : '',
    };
  } else if (!rules?.validate) {
    return { isVerify: true, message: '' };
  } else if (rules.isArray) {
    if (!isArray(value)) {
      return {
        isVerify: false,
        message: rules?.message || string.length(name, rules.number),
      };
    } else {
      const isValid = value.every((item) => {
        const { isVerify } = validateLength(name, item, { ...rules, isArray: false });
        return isVerify;
      }) as boolean;

      return {
        isVerify: isValid,
        message: !isValid ? rules?.message || string.length(name, rules.number) : '',
      };
    }
  } else {
    const isLength = (value as string).length === rules?.number;
    return {
      isVerify: isLength,
      message: !isLength ? rules?.message || string.length(name, rules?.number) : '',
    };
  }
}

export function validateMatches<T = unknown>(name: string, value: T, rules: Rules['matches']) {
  if (!rules) {
    return {
      isVerify: true,
      message: '',
    };
  }

  const isMatches = rules.test(value as string);
  return {
    isVerify: isMatches,
    message: !isMatches ? string.matches(name) : '',
  };
}

export function validateField<T = unknown>(name: string, value: T, rules?: Rules): boolean | string {
  if (!rules) {
    return true;
  }

  if (rules.validate) {
    return rules.validate(name, value);
  }

  let isVerify = true;
  let message = '';

  const sortRules = Object.keys(rules).sort((n1, n2) => {
    if (n1 > n2) return -1;
    if (n1 < n2) return 1;
    return 0;
  }) as Array<keyof typeof rules>;

  sortRules.every((current) => {
    switch (current) {
      case 'email':
        ({ isVerify, message } = validateMail(name, value, rules.email));
        return isVerify;
      case 'length': {
        ({ isVerify, message } = validateLength(name, value, rules.length));
        return isVerify;
      }
      case 'min':
        ({ isVerify, message } = validateMin(name, value, rules.min));
        return isVerify;
      case 'max':
        ({ isVerify, message } = validateMax(name, value, rules.max));
        return isVerify;
      case 'required':
        ({ isVerify, message } = validateRequired(name, value, rules.required));
        return isVerify;
      case 'matches':
        ({ isVerify, message } = validateMatches(name, value, rules.matches));
        return isVerify;
      default:
        return true;
    }
  });

  return !isEmpty(message) ? message : true;
}
