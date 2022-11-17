import axios from 'axios';
// take a look on type declaration files .d.ts
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// axios
//   .get<User>('https://jsonplaceholder.typicode.com/users/1')
//   .then((res) => {
//     console.log('wooo!!');

//     printUser(res.data);
//   })
//   .catch((e) => {
//     console.log('Error', e);
//   });
axios
  .get<User[]>('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    console.log('wooo!!');

    res.data.forEach(printUser);
  })
  .catch((e) => {
    console.log('Error', e);
  });
// https://jsonplaceholder.typicode.com/users/1

function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
  console.log("\n");
}
