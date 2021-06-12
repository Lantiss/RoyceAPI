const errorMiddleware = (err, req, res, next) => {
  console.error("err: ", err);
  const errorMessage = {
    status: false,
    message: err.message || "Oops, something went wrong",
  };
  (process.env.NODE_ENV == "DEV") && (errorMessage.data = err);
  res.status(err.status || 500).json(errorMessage);
};

module.exports = { errorMiddleware };
