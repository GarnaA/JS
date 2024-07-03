class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}
  
async function loadJson(url) {
  let response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    }
    else {
        throw new HttpError(response);
    }
}
  
async function demoGithubUser() {
  let user;
  while(true) {
    let name = prompt("Enter login", "iliakan");
      
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // ошибок не было, выходим из цикла
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        console.log("There's no such user. Please try again");
      } 
      else {
        throw err;
      }
    }
  }
  console.log(`Полное имя: ${user.name}.`);
  return user;
}
  
demoGithubUser();