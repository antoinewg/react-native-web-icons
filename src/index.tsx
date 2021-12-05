import 'react-native-get-random-values'; // required for `uuid` module to work

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export { Flash } from './icons/Flash';
