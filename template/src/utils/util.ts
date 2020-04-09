export const MODULE_NAME = 'util';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getENV(): any {
  let envData = {};
  try {
    envData = process.env.ENV_DATA;
  } catch (e) {
    console.log(e);
  }
  return envData;
}
