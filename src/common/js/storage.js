
let getStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

let setStorage = (key,value) => {
  return localStorage.setItem(key, JSON.stringify(value))
}

export {getStorage,setStorage}
