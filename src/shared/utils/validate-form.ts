import { isArray, isEmpty } from 'lodash';
import { Rules } from '../types/validate-from';
import { format } from './format-string';

export const string = {
  length: '{0} must be exactly {1} characters',
  min: '{0} must be at least {1} characters',
  max: '{0} must be at most {1} characters',
  matches: '{0} must match the following: ""',
  email: '{0} must be a valid email',
  url: '{0} must be a valid URL',
  uuid: '{0} must be a valid UUID',
  trim: '{0} must be a trimmed string',
  lowercase: '{0} must be a lowercase string',
  uppercase: '{0} must be a upper case string',
  required: '{0} is a required field',
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
      message: !isEmail ? format(string.email, name) : '',
    };
  } else if (!rules?.validate) {
    return { isVerify: true, message: '' };
  } else if (rules.isArray) {
    if (!isArray(value)) {
      return {
        isVerify: false,
        message: rules?.message || format(string.email, name),
      };
    } else {
      const isValid = value.every((item) => {
        const { isVerify } = validateMail(name, item, { ...rules, isArray: false });
        return isVerify;
      }) as boolean;

      return {
        isVerify: isValid,
        message: !isValid ? rules?.message || format(string.email, name) : '',
      };
    }
  } else {
    const isEmail = emailRegex.test(value as string);
    return {
      isVerify: isEmail,
      message: !isEmail ? rules?.message || format(string.email, name) : '',
    };
  }
}

export function validateRequired<T = unknown>(name: string, value: T, rules: Rules['required']) {
  if (!rules) {
    return { isVerify: true, message: '' };
  }

  if (typeof rules === 'boolean') {
    const isMatch = !isEmpty(value);
    return { isVerify: isMatch, message: !isMatch ? format(string.required, name) : '' };
  } else if (!rules?.validate) {
    return { isVerify: true, message: '' };
  } else if (rules.isArray) {
    if (!isArray(value)) {
      return {
        isVerify: false,
        message: rules?.message || format(string.required, name),
      };
    } else {
      const isValid = value.every((item) => {
        const { isVerify } = validateRequired(name, item, { ...rules, isArray: false });
        return isVerify;
      }) as boolean;

      return {
        isVerify: isValid,
        message: !isValid ? rules?.message || format(string.required, name) : '',
      };
    }
  } else {
    const isMatch = isEmpty(value);
    return { isVerify: isMatch, message: !isMatch ? rules?.message || format(string.required, name) : '' };
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
      message: !isMin ? format(string.min, name, rules.toString()) : '',
    };
  } else if (!rules?.validate) {
    return { isVerify: true, message: '' };
  } else if (rules.isArray) {
    if (!isArray(value)) {
      return {
        isVerify: false,
        message: rules?.message || format(string.min, name, rules.number.toString()),
      };
    } else {
      const isValid = value.every((item) => {
        const { isVerify } = validateMin(name, item, { ...rules, isArray: false });
        return isVerify;
      }) as boolean;

      return {
        isVerify: isValid,
        message: !isValid ? rules?.message || format(string.min, name, rules.number.toString()) : '',
      };
    }
  } else {
    const isMin = (value as string).length >= rules.number;
    return {
      isVerify: isMin,
      message: !isMin ? rules?.message || format(string.min, name, rules.number.toString()) : '',
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
      message: !isMax ? format(string.max, name, rules.toString()) : '',
    };
  } else if (!rules?.validate) {
    return { isVerify: true, message: '' };
  } else if (rules.isArray) {
    if (!isArray(value)) {
      return {
        isVerify: false,
        message: rules?.message || format(string.max, name, rules.number.toString()),
      };
    } else {
      const isValid = value.every((item) => {
        const { isVerify } = validateMax(name, item, { ...rules, isArray: false });
        return isVerify;
      }) as boolean;

      return {
        isVerify: isValid,
        message: !isValid ? rules?.message || format(string.max, name, rules.number.toString()) : '',
      };
    }
  } else {
    const isMax = (value as string).length <= rules?.number;
    return {
      isVerify: isMax,
      message: isMax ? rules?.message || format(string.max, name, rules.number.toString()) : '',
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
      message: !isLength ? format(string.length, name, rules.toString()) : '',
    };
  } else if (!rules?.validate) {
    return { isVerify: true, message: '' };
  } else if (rules.isArray) {
    if (!isArray(value)) {
      return {
        isVerify: false,
        message: rules?.message || format(string.length, name, rules.number.toString()),
      };
    } else {
      const isValid = value.every((item) => {
        const { isVerify } = validateLength(name, item, { ...rules, isArray: false });
        return isVerify;
      }) as boolean;

      return {
        isVerify: isValid,
        message: !isValid ? rules?.message || format(string.length, name, rules.number.toString()) : '',
      };
    }
  } else {
    const isLength = (value as string).length === rules?.number;
    return {
      isVerify: isLength,
      message: !isLength ? rules?.message || format(string.length, name, rules.number.toString()) : '',
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
    message: !isMatches ? format(string.matches, name) : '',
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
