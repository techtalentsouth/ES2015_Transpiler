function addToWindow(obj, ...args){
  const output = document.getElementById('root')
  console.log(args);
  if (!args.length){
    output.innerHTML = `<h3> ${obj} </h3>`
  }else {
    args.forEach((arg) => {
      console.log(arg);
      let item = document.createElement("h3")
      item.innerHTML = ` ${arg}, `
      output.appendChild(item)
    })

  }
}

addToWindow('hello world')
