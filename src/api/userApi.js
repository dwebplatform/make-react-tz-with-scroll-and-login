export class UserApi {
  constructor(url) {
    this.url = url;
  }
  async deleteFriend(id) {
    try {
      const response = await fetch(`${this.url}/users/${id}`, { method: 'DELETE', });
      return [null, { status: response.status }];
    } catch (e) {
      return [e, {}];
    }
  }
  async editFriend({ first_name, email, id }) {
    try {
      const response = await fetch(`${this.url}/users/${id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: first_name, job: email + 'job' })
      });
      const data = await response.json();
      return [null, data];
    } catch (e) {
      return [e, {}];
    }
  }
  async addFriend({ job, name }) {
    try {
      const response = await fetch(`${this.url}/users`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ job, name })
      });
      const data = await response.json();
      return [null, data];
    } catch (e) {
      return [e, {}];
    }
  }
  async getFriends(page) {
    try {
      const response = await fetch(`${this.url}/users?page=${page}`);
      const data = await response.json();
      return [null, data];
    } catch (e) {
      return [e, {}];
    }
  }
  async login({ email, password }) {
    try {
      const response = await fetch(`${this.url}/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      console.log(data)
      return [null, data];
    } catch (e) {
      return [e, { error: 'Ошибка при попытке регистрации' }];
    }
  }
}