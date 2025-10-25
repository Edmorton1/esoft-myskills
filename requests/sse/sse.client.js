const eventSource = new EventSource('http://localhost:3000/events')

eventSource.onmessage = (message) => {
  console.log('Received message', message.data)
}
