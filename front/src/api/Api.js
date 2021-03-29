import router from '../router/index'

class Api {
  constructor () {
    this.baseUrl = 'http://localhost:3000/'
  }

  headers (options = {}) {
    const contentType = options.isFormData
      ? {}
      : {
          'Content-Type': 'application/json'
        }

    return {
      ...contentType,
      Authorization: 'Bearer ' + localStorage.getItem('userToken')
    }
  }

  get (path) {
    return fetch(this.baseUrl + path, {
      headers: this.headers()
    })
      .then(response => {
        if (response.status === 401) {
          localStorage.clear()
          router.push({ name: 'Login' })
        }
        return response.json()
      })
      .catch(() => alert("Impossible de récupérer les données de l'API"))
  }

  post (path, body, options = {}) {
    return fetch(this.baseUrl + path, {
      method: 'POST',
      body: options.isFormData ? body : JSON.stringify(body),
      headers: this.headers(options)
    }).then(response => this.handleResponse(response))
  }

  delete (path) {
    return fetch(this.baseUrl + path, {
      method: 'DELETE',
      headers: this.headers()
    }).then(response => this.handleResponse(response))
  }

  put (path, body, options = {}) {
    return fetch(this.baseUrl + path, {
      method: 'PUT',
      body: options.isFormData ? body : JSON.stringify(body),
      headers: this.headers(options)
    }).then(response => this.handleResponse(response))
  }

  async handleResponse (response) {
    if (!response.status.toString().match(/20[01]/)) throw await response.json()
    return response.json()
  }
}

export const api = new Api()