export const successHandler = (
  res,
  successStatusCode,
  successMessage,
  data,
) => {
  const statusCode = successStatusCode ?? 200;
  const message = successMessage ?? "Request Successful.";
  const successData = data ?? null;

  return res.status(statusCode).json({
    success: true,
    error: false,
    message,
    data: successData,
  });
};

export const errorHandler = (res, errorStatusCode, errorMessage) => {
  const statusCode = errorStatusCode ?? 500;
  const message = errorMessage ?? "Internal Server Error.";

  return res.status(statusCode).json({
    success: false,
    error: true,
    message,
    data: null,
  });
};
