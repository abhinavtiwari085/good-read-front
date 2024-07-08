import axios from 'axios';
//Axios allows you to create instances, which can be configured with default settings and reused across your application.
const instance = axios.create();
instance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export default instance;

//"instance" refers to a specific object created from a class or a template that inherits properties and methods defined within that class or template.