var axios = require('axios');
var res = [];
async function getData() {
    var users = [];
    var age = [];
    const url = "http://localhost:3000/api/users";
    try {
      const response=await axios.get(url);
      const data = response.data;
      console.log(data);

      users = data.map(obj =>  obj.username);

      age = data.filter(obj =>  obj.age>0.6);

      //tap for homework

      console.log(users);
      console.log(age);
    } catch (error) {
      console.error(error.message);
    }
  }

  getData();