//Print all the subset of an Array 
function subset(arr,ans,i){
    if(i===arr.length){
 console.log(ans)
        return
    }
    ans.push(arr[i]);
    subset(arr,ans,i+1);
    ans.pop();
    subset(arr,ans,i+1);
}

console.log("subset===>",subset([1,2,3],[],0))


//N -queue 
var solveNQueens = function (n) {
    let board = Array.from({ length: n }, () => Array(n).fill('.'));
       let ans = [];
       let row = 0;
   
       function quene(board, row) {
           if (row == n) {
       ans.push(board.map(r => r.join('')));
               return;
           }
           for (let j = 0; j<n; j++) {
               if (isSafe(board, row, j, n)) {
                   board[row][j] = 'Q';
                   quene(board, row + 1);
                   board[row][j] = '.';
               }
   
           }
       }
       quene(board,row);
       return ans;
   };
   const isSafe = (board, row , column, n) => {
       //Column vertical check
       for (let i = 0; i < row; i++) {
           if (board[i][column] == 'Q') {
               return false;
           }
       }
       //Left diagonal check
       for (let r1 = row - 1, c1 = column - 1; r1 >= 0 && c1 >= 0; r1--, c1--) {
           if (board[r1][c1] == 'Q') {
               return false;
           }
       }
       //Right diagonal check
       for (let r1 = row - 1, c1 = column + 1; r1 >= 0 && c1 < n; r1--, c1++) {
           if (board[r1][c1] == 'Q') {
               return false;
           }
       }
       return true;
   }