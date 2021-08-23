module.exports = function solveSudoku(matrix) {
  
  const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let resultMatrix = matrix;

  function isZero(element, index, array) {
    return element === 0;
  }

  function isCountZero(matrix) {
    let count = 0;
    for (let rowMatrix = 0; rowMatrix < 9; rowMatrix++) {
      let rowArray = resultMatrix[ rowMatrix ];
      count = count + rowArray.map( function(num) { if (num > 0 ) { return null; } else { return num; } } ).join('').length
    }
  }

  function getRowArray( matrix, rownumber) {
    let array = [];
    let collumArray = [];
    for (let row = 0; row < 9; row ++) {

      collumArray = matrix[ row ];
      array.push(collumArray[ rownumber ])

    }
    return array.filter( function(e) {return e > 0; });
  }
  
  function getCollumArray( matrix, collumnumber ) {
    let array = [];
    let collumArray = [];
    for (let collum = 0; collum < 9; collum ++) {
      collumArray = matrix[ collum ];           
      array.push(collumArray[ collumnumber])

    }
    return array.filter( function(e) {return e > 0; });
  }

  function getArray33( matrix, rownumber, collumnumber ) {
    let array33 = [];
    let collumArray = [];
    let rowIndex = 0;
    let collumIndex = 0;
    switch (rownumber) {
        case 0: rowIndex = 0; break;
        case 1: rowIndex = 0; break;
        case 2: rowIndex = 0; break;
        case 3: rowIndex = 3; break;
        case 4: rowIndex = 3; break;
        case 5: rowIndex = 3; break;
        case 6: rowIndex = 6; break;
        case 7: rowIndex = 6; break;
        case 8: rowIndex = 6; break;
    }
        switch (collumnumber) {
        case 0: collumIndex = 0; break;
        case 1: collumIndex = 0; break;
        case 2: collumIndex = 0; break;
        case 3: collumIndex = 3; break;
        case 4: collumIndex = 3; break;
        case 5: collumIndex = 3; break;
        case 6: collumIndex = 6; break;
        case 7: collumIndex = 6; break;
        case 8: collumIndex = 6; break;
    }
    
    for ( let row = rowIndex ; row < ( rowIndex  + 3 ); row ++ ) {
      collumArray = matrix[ row ];
      for  ( let collum = collumIndex ; collum < (collumIndex + 3); collum ++ ) {
            
        array33.push(collumArray[ collum ])

      }
    }
    return array33.filter( function(e) {return e > 0; });
  }

  function searchElements( arrayFromMatrix, arrayRes ){
    arrayFromMatrix = arrayFromMatrix.filter( function(e) {return e > 0; });    
    let result = [];
    for (let i = 0; i < arrayRes.length; i ++) {   
      let element = arrayRes[i];
      if ( arrayFromMatrix.indexOf( element ) === -1) {
        result.push( element );
      }
    }
    return result
  }

  while ( isCountZero(matrix) > 0 ) {
  for (let rowMatrix = 0; rowMatrix < 9; rowMatrix++) {
    let rowArray = resultMatrix[ rowMatrix ];
    
    for (let i = 0; i  < 9; i ++) {
      if (rowArray[i] === 0){
      rowArray.filter( function(e) {return e > 0 }) ;
      let tempDIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let collumArray  = getCollumArray( resultMatrix, i);
      let array33   = getArray33( resultMatrix, rowMatrix, i );
      tempDIGITS    = searchElements( collumArray , tempDIGITS  );  
      tempDIGITS    = searchElements( rowArray, tempDIGITS  );   
      tempDIGITS    = searchElements( array33 , tempDIGITS  );
            
      if ( tempDIGITS.length === 1) {
        resultMatrix[rowMatrix][i] = tempDIGITS[0];
      }
      }
    }      
  }  
  }
  return resultMatrix;
  // your solution
}
