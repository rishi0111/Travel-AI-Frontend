// @ts-expect-error error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const logger = (store) => (next) => (action) => {
     const result = next(action);
     return result;
};
