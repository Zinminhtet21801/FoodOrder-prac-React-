import axios from "axios";

function getTopRated() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=dd1e29b0819562639ec85b8cb254c35f&language=en-US&page=1"
  );
}

function getPopular() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=dd1e29b0819562639ec85b8cb254c35f&language=en-US&page=1"
  );
}

function getUpcoming() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=dd1e29b0819562639ec85b8cb254c35f&language=en-US&page=1"
  );
}

// export async function getApiCall() {
//     let data = ""
//     try{
//         data = await Promise.all([getTopRated(), getPopular(), getUpcoming()])
//     }catch(e){
//         console.log(e);
//     }
//     console.log(data);
//     return data ? data : null
// }

export async function getApiCall() {
  let data ;
  try{
   data = await Promise.all([getTopRated(), getPopular(), getUpcoming()])
  }catch(e){
    console.log(e);
  }
  // console.log(data);
  return data ? data : null
}

// export const address = fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => response.json())
//   .then((user) => {
//     return user.address;
//   });
