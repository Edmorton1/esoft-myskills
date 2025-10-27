Promise.resolve('message')
  .then(message => {
    console.log('THEN', message)
    return message
  })
  .finally(() => console.log('FINALY'))
  .then(message => console.log('THEN 2', message))
  .catch(err => console.log('CATCH', err));