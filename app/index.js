function addToWindow(obj){
  document.getElementById('root')
  .innerHTML = `<h3> ${obj} </h3>`
  console.log(obj);
}

addToWindow('hello world!!!!')
