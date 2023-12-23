const errorHandler = (err, req, res, next) => {
  console.error(err)
  const statusCode = res.statusCode ? res.statusCode : 500
  console.log('Response Format:', res.get('Content-Type'))
  res.status(statusCode)

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : null,
  })
}

module.exports = errorHandler
