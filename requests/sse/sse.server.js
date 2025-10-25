import Express from 'express'

const app = Express()

app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')
  res.setHeader('Access-Control-Allow-Origin', '*')

  let count = 0

  setInterval(() => {
    res.write(`data: count: ${count}\n\n`)
    count++
  }, 1000)
})

app.listen(3000, () => {
  console.log('Express server started on port 3000')
})