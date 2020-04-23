var rangeBitwiseAnd = function(m, n) {
    let trailingZero = 0;
    while(m !== n) {
      m >>= 1;
      n >>= 1;
      trailingZero++;
    }
    
    return m << trailingZero;
  };


  let m = 5,
    n = 7;

    console.log(rangeBitwiseAnd(m, n));
