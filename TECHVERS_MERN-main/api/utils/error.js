export const errorHandler = (errorStatus, errorMessage) => {
  const error = new Error();
  error.message = errorMessage;
  error.statusCode = errorStatus;
  return error;
};
