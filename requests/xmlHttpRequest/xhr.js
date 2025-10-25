const fetchUrl = 'https://jsonplaceholder.typicode.com/posts'

const xhr = new XMLHttpRequest()

const sendRequest = async () => {
  return new Promise((res, rej) => {
    xhr.open('POST', fetchUrl)

    xhr.responseType = 'json'
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () =>  {
      if (xhr.status >= 400) {
        res(xhr.response)
      }
      res(xhr.response)
    }

    xhr.onerror = () => {
      rej(xhr.response)
    }

    xhr.send(JSON.stringify({
      name: 'vasya',
      status: 'sds',
    }))
  })
}

const res = await sendRequest()
console.log(res)