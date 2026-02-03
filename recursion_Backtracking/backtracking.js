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



   // M-Coloring Graph
var graphColoring = function (V, edges, M) {

    // Build adjacency list
    let adj = Array.from({ length: V }, () => []);
  
    for (let [u, w] of edges) {
      adj[u].push(w);
      adj[w].push(u);
    }
  
    function safeVertex(node, colors, color) {
      for (let neighbor of adj[node]) {
        if (colors[neighbor] === color) {
          return false;
        }
      }
      return true;
    }
  
    function dfs(node, colors) {
      if (node === V) {
        return true;
      }
  
      for (let color = 1; color <= M; color++) {
        if (safeVertex(node, colors, color)) {
          colors[node] = color;
  
          if (dfs(node + 1, colors)) {
            return true;
          }
  
          colors[node] = 0; // backtrack
        }
      }
  
      return false;
    }
    let colors = new Array(V).fill(0);
    return dfs(0, colors) ;
  };





  
//Rat in the Maze 
function checkRat(maze , r , c, path,ans){
  let n=maze.length;
  if(r==n-1 && c==n-1){
    ans.push(path);
    return 
  }
if(r<0 || c<0 || r>=n || c>= n || maze[r][c]===0){
  return false;
}
maze[r][c]=0;
checkRat(maze,r-1,c,path+"U",ans);
checkRat(maze,r+1,c,path+"D",ans);
checkRat(maze,r,c+1,path+"R",ans);
checkRat(maze,r,c-1,path+"L",ans);
maze[r][c]=1;
}

  function ratInMaze(maze) {
    let ans=[]
    if(maze[0][0]==0) return ans 
   checkRat(maze,0,0,"",ans);
   return ans;

}


function checkExpected(grid, r, c, n, expt) {
  if (r < 0 || c < 0 || r >= n || c >= n || grid[r][c] !== expt) {
return false;
}


     if (expt == n * n - 1) {
       return true;
     }
     let ans1 = checkExpected(grid , r-1,c-2,n,expt+1);
     let ans2 = checkExpected(grid , r-2,c-1,n,expt+1);
     let ans3 = checkExpected(grid , r-2,c+1,n,expt+1);
     let ans4 = checkExpected(grid , r-1,c+2,n,expt+1);
     let ans5 = checkExpected(grid , r+1,c+2,n,expt+1);
     let ans6 = checkExpected(grid , r+2,c+1,n,expt+1);
     let ans7 = checkExpected(grid , r+2,c-1,n,expt+1);
     let ans8 = checkExpected(grid , r+1,c-2,n,expt+1);

     return ans1||ans2||ans3||ans4||ans5||ans6||ans7||ans8;
   }
   var checkValidGrid = function (grid) {
return checkExpected(grid,0,0,grid.length,0 )
   };