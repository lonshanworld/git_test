const chess = document.getElementById("chess");
const allchessbox = document.getElementsByClassName("chessbox");
const instruction = document.getElementById("instruction");
const startbtn = document.getElementById("startbtn");
const reloadbtn = document.getElementById("reloadbtn");

let knight = [];
let target = [];

function chesstap(){
    for(let a = 1; a < 65; a++){
        chess.innerHTML += `
            <div id=${a} class="chessbox">
    
            </div>
        `;
    }
    
    
    
    
    function btncontrol(btn1,btn2){
        startbtn.style.display = btn1;
        reloadbtn.style.display = btn2;
    }
    btncontrol("none","none");
    startbtn.addEventListener("click",function(){
            findpathway(knight,target,8);
            btncontrol("none","block");
    });
        
    reloadbtn.addEventListener("click",function(){
        location.reload();
    });
    
    
    function showknight(num){
        for(let c = 0; c< allchessbox.length; c++){
            if(c === num){
                allchessbox[c].innerHTML = `<i class="fa-solid fa-chess-knight"></i>`;
                // allchessbox[c].classList.add("makegrey");
            }else{
                allchessbox[c].innerHTML = ``;
                // allchessbox[c].classList.remove("makegrey");
            }
        }
    }
    
    function calculatecoordinate (number){
        var x = (number % 8) === 0 ? 8 : (number % 8);
        var y = Math.ceil(number / 8);
        
        return [x,y];
    }
    
    
    
    for(let b = 0; b < allchessbox.length; b++){
        allchessbox[b].addEventListener("click",function(){
            showknight(b);
            let N = 8;
    
            if(knight.length === 0){
                knight = calculatecoordinate(b+1);
                allchessbox[b].classList.add("makegrey");
                instruction.innerText = "Please tap the chess box again to mark the final point."
            }else{
                target = calculatecoordinate(b+1);
                allchessbox[b].classList.add("makegrey");
                btncontrol("block","none");
                instruction.innerText = "";
            }
        });
    }
    
    
    
    
    
    
    
    function findpathway(knightpos, targetpos,N){
        const resultnum = document.getElementById("resultnum");
        resultnum.innerText = minStepToReachTarget(knightpos,targetpos,N);
    }
    
    
    class cell{
        constructor(x,y,dis)
        {
            this.x = x;
            this.y = y;
            this.dis = dis;
        }
    }
    
    
    function isInside(x,y,N){
        if (x >= 1 && x <= N && y >= 1 && y <= N){
            return true;
            
        }
        
        return false;
    }
    
    
    function minStepToReachTarget(knightPos,targetPos,N){
        // x and y direction, where a knight can move
            let dx = [ -2, -1, 1, 2, -2, -1, 1, 2 ];
            let dy = [ -1, -2, -2, -1, 1, 2, 2, 1 ];
    
            // queue for storing states of knight in board
            let q = [];
    
            // push starting position of knight with 0 distance
            q.push(new cell(knightPos[0], knightPos[1], 0));
    
            let t;
            let x, y;
            let visit = new Array(N + 1);
    
            // make all cell unvisited
            for (let i = 1; i <= N; i++)
            {
                visit[i]=new Array(N+1);
                for (let j = 1; j <= N; j++){
                    visit[i][j] = false;
                }
                    
            }
    
            // visit starting state
            visit[knightPos[0]][knightPos[1]] = true;
            // loop until we have one element in queue
            while (q.length!=0) {
                t = q.shift();
                console.log(t);
                // if current cell is equal to target cell,
                // return its distance
                if (t.x == targetPos[0] && t.y == targetPos[1]){
                    return t.dis;
                }
                    
    
                // loop for all reachable states
                for (let i = 0; i < 8; i++) {
                    x = t.x + dx[i];
                    y = t.y + dy[i];
    
                    // If reachable state is not yet visited and
                    // inside board, push that state into queue
                    if (isInside(x, y, N) && !visit[x][y]) {
                        visit[x][y] = true;
                        q.push(new cell(x, y, t.dis + 1));
                    }
                }
            }
            return Number.MAX_VALUE;
    }
}

export default chesstap;