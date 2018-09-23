(async function(){
  const memoize = require("memoizee");
  const maxAge = 60 * 60 * 1000
  
  const sleep = (x, y, z) => new Promise((resolve, reject)=>{
    setTimeout(() => {
      return resolve(x+y+z)
    }, 1000);
  })

  memoized = memoize(sleep, { maxAge });

  await memoized("foo", 3, "bar")
  await memoized("foo", 3, "bar"); //cache without waiting
})()