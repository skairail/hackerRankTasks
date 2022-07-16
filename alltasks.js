// PAIRS (MEDIUM)  https://www.hackerrank.com/challenges/pairs/submissions/code/276600756


function pairs(k, arr) {
    let numberofpairs = 0;
    for (let i = arr.length - 1; i >= 0; i-- )    
     {
       for(let j = 0; j < arr.length ; j++)
       {
           if ((arr[i] - arr[j]) === k)
           numberofpairs++; 
       }
    }
   return numberofpairs;
}


// BALANCED BRACKETS (MEDIUM) https://www.hackerrank.com/challenges/balanced-brackets/submissions/code/276699909

function isBalanced(s) {
    let arr = [];
    for(let i = 0; i < s.length; i++)
    {
        let x = s[i];
        if (x == '(' || x == '[' || x == '{')
        {
            arr.push(x);
            continue;
        }
        if (arr.length == 0)
            return "NO";
              
        let check;
        switch (x){
        case ')':
            check = arr.pop();
            if (check == '{' || check == '[')
                return "NO";
            break;
  
        case '}':
            check = arr.pop();
            if (check == '(' || check == '[')
                return "NO";
            break;
  
        case ']':
            check = arr.pop();
            if (check == '(' || check == '{')
                return "NO";
            break;
        }
    }
    return "YES";
}


// COMPARE THE TRIPLETS (EASY) https://www.hackerrank.com/challenges/compare-the-triplets/problem

function comp areTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
    } else if (a[i] === b[i]) {
      continue;
    } else {
      bobScore++;
    }
  }
  let finalResult = [aliceScore, bobScore];
  let str = finalResult.join(" ");
  return [str];

}

// A VERY BIG SUM (EASY)   https://www.hackerrank.com/challenges/a-very-big-sum/problem?h_r=profile

function aVeryBigSum(ar)
{
  let sum = 0;
  for (let i = 0; i < ar.length; i++)
  {
    sum += ar[i];
  }
  return sum;
}


//DRAWING BOOK (EASY) https://www.hackerrank.com/challenges/drawing-book/submissions/code/278637194

function pageCount(n, p)
{
    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2);

    return Math.min(pageTurns, totalTurns - pageTurns);
}

//SPARSE ARRAYS (MEDIUM) https://www.hackerrank.com/challenges/sparse-arrays/problem?h_r=profile

function matchingStrings(strings, queries) 
{   
    let arrofinstances = []
     for(let i = 0; i < queries.length;i++)
     {
         let instances = 0
         for(let j = 0; j < strings.length ; j++)
         {
             if ((strings[j] === queries[i]))
             {
             instances++; 
             }    
         }
         arrofinstances[i] = instances;  
     }
     return(arrofinstances)
 }

 

 // EXTRA LONG FACTORIALS(MEDIUM) https://www.hackerrank.com/challenges/extra-long-factorials/problem

 function extraLongFactorials(n) 
{
    var bigInt = BigInt(n);
    var factorial = 1n;

    for (let i = 0n; i < bigInt ; i++)
    {
        factorial *= bigInt - i;
    }
    console.log(factorial.toString());
}


// STAIRCASE (EASY) https://www.hackerrank.com/challenges/staircase/problem

function staircase (n)
{
    for (let i = 1; i <= n; i++)
    {
        console.log("#".repeat(i).padStart(n));
    }
}
