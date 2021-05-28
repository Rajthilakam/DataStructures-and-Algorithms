function minStepsToOne(n) {
  
    function recurse(curr) {
      // Base case
      if(curr === 1) {
        return 0;
      }
      
      // Recursive relations
      // sub1 
      let steps = recurse(curr-1);
      
      // divby2
      if(curr % 2 === 0) {
        let divby2 = recurse(curr/2);
        steps = Math.min(steps, divby2);  
      }
      
      // divby3
      if(curr % 3 === 0) {
        let divby3 = recurse(curr/3);
        steps = Math.min(steps, divby3);  
      }
      
      
      // return min # steps to 1 from `curr`
      let result = 1+steps;
      
      return result;
    }
    
    let res = recurse(n);
    
    return res;
    
  }
  
  function minStepsToOneMemo(n) {
    let cache = {};
    // let count = 0;
    function recurse(curr) {
      // Base case
      if(curr === 1) {
        return 0;
      }
      // check cache for repeated state
      if(curr in cache) {
        // count++;
        return cache[curr];
      }
      
      // Recursive relations
      // sub1 
      let steps = recurse(curr-1);
      
      // divby2
      if(curr % 2 === 0) {
        let divby2 = recurse(curr/2);
        steps = Math.min(steps, divby2);  
      }
      
      // divby3
      if(curr % 3 === 0) {
        let divby3 = recurse(curr/3);
        steps = Math.min(steps, divby3);  
      }
      
      
      // return min # steps to 1 from `curr`
      let result = 1+steps;
      // insert intermediate result into cache
      cache[curr] = result;
      return result;
    }
    
    let res = recurse(n);
    // console.log(cache)
    // console.log("Cache access count: "+count);
    return res;
    
  }
  
  function minStepsToOneTab(n) {
    // init table
    let tab = new Array(n+1);
    
    // apply base case to table
    tab[1] = 0;
    
    // loop table filling in subproblem solutions
    for(let curr = 2; curr <= n; curr++) {
       // sub1 
      let steps = tab[curr-1]; // 0
      
      // divby2
      if(curr % 2 === 0) {
        let divby2 = tab[curr/2]; //0
        steps = Math.min(steps, divby2);  //0
      }
      
      // divby3
      if(curr % 3 === 0) {
        let divby3 = tab[curr/3];
        steps = Math.min(steps, divby3);  
      }
      
      
      // return min # steps to 1 from `curr`
      let result = 1+steps; //1
      // insert intermediate result into cache
      tab[curr] = result; //1
    }
    
    
    return tab[n]
  }
  
  
  // console.time("Brute Force Recursion: ");
  // console.log(minStepsToOne(405));
  // console.timeEnd("Brute Force Recursion: ");
  
  // console.time("Memoization: ");
  // console.log(minStepsToOneMemo(405));
  // console.timeEnd("Memoization: ");
  
  console.time("Tabulation: ");
  console.log(minStepsToOneTab(10000000));
  console.timeEnd("Tabulation: ");
  
  