import config from './config';

export default class Data {

  api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
    const url = config.apiBaseUrl + path;
  
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    if (requiresAuth) {    
      const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);
      options.headers['Authorization'] = `Basic ${encodedCredentials}`;
    }

    return fetch(url, options);
  }

  async getUser(emailAddress, password) {
    const response = await this.api(`/users`, 'GET', null, true, { emailAddress, password });
    if (response.status === 200) {
      return response.json().then(data => data);
    }
    else if (response.status === 401) {
      return null;
    }
    else {
      throw new Error();
    }
  }
  
  async createUser(user) {
    const response = await this.api('/users', 'POST', user);
    if (response.status === 201) {
      return 201;
    } else if (response.status === 501) {
      return response.json().then(errors => errors);
    } else if (response.status === 400 ) {
      return response.json().then(errors => errors);
    } else if (response.status === 500) {
      return 500;
    } else {
      throw new Error();
    }
  }

  async createCourse(courseInformation, emailAddress, password) {

    password=atob(password);

    const response = await this.api('/courses', 'POST', courseInformation, true, { emailAddress, password });
    if (response.status === 201) {
      return [];
    }
    else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      });
    }
    else {
      throw new Error('Uh oh! We can not create that course — check that log.');
    }
  }

  async updateCourse(id, courseInformation, emailAddress, password) {

    password=atob(password);

    const response = await this.api(`/courses/${id}`, 'PUT', courseInformation, true, { emailAddress, password });
    if (response.status === 204) {
      return [];
    }
    else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      });
    }
    else {
      throw new Error('Uh oh! We can not edit that course.');
    }
  }
  
  async removeCourse(id, emailAddress, password) {

    password=atob(password);

    const response = await this.api(`/courses/${id}`, 'DELETE', null, true, { emailAddress, password });
    if (response.status === 204) {
      return 204;
    } else if (response.status === 403 || response.status === 404){
      return response.json();
    }
    else {
      throw new Error('Uh oh! We can not delete that course.');
    }
  }

}
