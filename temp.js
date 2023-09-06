    // Without rest parameter
    function fun(a, b){
        return a + b;
    }
    
    function fun1(...args)
    {
        console.log('args :- ', args);
        console.log('***');
      for(const arg of args)
      {
      	console.log("for of :- ",arg)
      }
      console.log('*******************');
      for(const arg in args)
      {
      	console.log("for in :- ",arg)
      }
    }
    /* console.log(fun(1, 2)); // 3
    console.log(fun(1, 2, 3, 4, 5)); // 3      */
    /* console.log(fun1(1, 2)); // 3 */
    console.log(fun1(1, 2, 3, 4, 5)); // 3  