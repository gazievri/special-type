class specialPeopleApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getCompanies() {
    return fetch(`${this._baseUrl}/companies/`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getNews() {
    return fetch(`${this._baseUrl}/news/`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getFeedback() {
    return fetch(`${this._baseUrl}/feedback/`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getPeople() {
    return fetch(`${this._baseUrl}/people/`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getSchedule() {
    return fetch(`${this._baseUrl}/schedule/`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getPlaybill() {
    return fetch(`${this._baseUrl}/playbill/`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  postFeedback(feedback){
    console.log(feedback)
    return fetch(`${this._baseUrl}/feedback/`, {
      method: "POST",
      body: feedback,
    }).then(this._checkResponse);
  }

  postCaptcha(){
    return fetch("http://135.181.198.180:8080/captcha/", {
      method: "POST",
    }).then(this._checkResponse);
  }

  checkCaptcha(data){
    return fetch("http://135.181.198.180:8080/checker/", {
      method: "POST",
      headers: this._headers,
      body:JSON.stringify(data)
    }).then(this._checkResponse);
  }

}
export const mainApi = new specialPeopleApi({
  baseUrl: "http://135.181.198.180:8080/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
