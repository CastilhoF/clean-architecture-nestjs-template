interface PreValidatorInterface<T> {
  isValid(value: T): boolean;
}

export default PreValidatorInterface;
