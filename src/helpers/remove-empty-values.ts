/* eslint-disable @typescript-eslint/no-explicit-any */
type AcceptedRecordType = string | number | boolean | null;

export const removeEmptyValues = ({
  obj,
  excludeValidation = [],
}: {
  obj: any; // need any
  excludeValidation?: Array<
    | 'null'
    | 'undefined'
    | 'empty-string'
    | 'empty-object'
    | 'empty-string-object'
  >;
}) => {
  const rules: Array<(value: AcceptedRecordType) => boolean> = [];

  if (!excludeValidation.includes('undefined')) {
    rules.push((v) => v === undefined);
  }

  if (!excludeValidation.includes('null')) {
    rules.push((v) => v === null);
  }

  if (!excludeValidation.includes('empty-string')) {
    rules.push((v) => v === '');
  }

  if (!excludeValidation.includes('empty-object')) {
    rules.push(
      (v) =>
        typeof v === 'object' &&
        v !== null &&
        !Array.isArray(v) &&
        Object.keys(v).length === 0
    );
  }

  if (!excludeValidation.includes('empty-string-object')) {
    rules.push(
      (v) =>
        typeof v === 'object' &&
        v !== null &&
        !Array.isArray(v) &&
        Object.entries(v).length > 0 &&
        Object.values(v).every((val) => val === '')
    );
  }

  const shouldKeep = (value: any) => !rules.some((rule) => rule(value));

  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => shouldKeep(value))
  );
};
