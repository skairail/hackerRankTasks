// PAIRS (MEDIUM)  https://www.hackerrank.com/challenges/pairs/submissions/code/276600756


function pairs(k, arr) {
    let numberofpairs = 0;
    for (let i = arr.length - 1; i >= 0; i-- ) {
       for(let j = 0; j < arr.length ; j++) {
           if ((arr[i] - arr[j]) === k)
           numberofpairs++; 
       }
    }
   return numberofpairs;
}


// BALANCED BRACKETS (MEDIUM) https://www.hackerrank.com/challenges/balanced-brackets/submissions/code/276699909

function isBalanced(s) {
    let arr = [];
    for(let i = 0; i < s.length; i++) {
        let x = s[i];
        if (x == '(' || x == '[' || x == '{') {
            arr.push(x);
            continue;
        }
        if (arr.length == 0)
            return "NO";
              
        let check;
        switch (x) {
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

function aVeryBigSum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}


//DRAWING BOOK (EASY) https://www.hackerrank.com/challenges/drawing-book/submissions/code/278637194

function pageCount(n, p) {
    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2);

    return Math.min(pageTurns, totalTurns - pageTurns);
}

//SPARSE ARRAYS (MEDIUM) https://www.hackerrank.com/challenges/sparse-arrays/problem?h_r=profile

function matchingStrings(strings, queries) {   
    let arrofinstances = []
     for(let i = 0; i < queries.length;i++) {
         let instances = 0
         for(let j = 0; j < strings.length ; j++) {
             if ((strings[j] === queries[i])) {
             instances++; 
             }    
         }
         arrofinstances[i] = instances;  
     }
     return(arrofinstances)
 }

 

 // EXTRA LONG FACTORIALS(MEDIUM) https://www.hackerrank.com/challenges/extra-long-factorials/problem

 function extraLongFactorials(n) {
    let bigInt = BigInt(n);
    let factorial = 1n;

    for (let i = 0n; i < bigInt ; i++) {
        factorial *= bigInt - i;
    }
    console.log(factorial.toString());
}


// STAIRCASE (EASY) https://www.hackerrank.com/challenges/staircase/problem

function staircase (n) {
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i).padStart(n));
    }
}

// ENCRYPTION (MEDIUM) https://www.hackerrank.com/challenges/encryption/problem

function encryption(s) {
    let sqrtOfStr = Math.sqrt(s.length)
    let ceilofSqrt = Math.ceil(sqrtOfStr)
    let strArr = [...s];
    let globalArr = [];
        while(strArr.length != 0 || strArr < 0) {   
            if (strArr.length < ceilofSqrt) {
                let splicedStr = strArr.splice(0,strArr.length)
                globalArr.push(splicedStr.join(''))
            }
            else {
                globalArr.push(strArr.splice(0,ceilofSqrt).join(''))
            }
     }
        let joindeStr =  globalArr.join(' ')
        return joindeStr
}

// The Power Sum (Medium https://www.hackerrank.com/challenges/the-power-sum/problem?h_r=profile

function powerSum(X, N, exponentIncrement = 1) {
    let exponentVal = X - Math.pow(exponentIncrement, N);
    if (exponentVal < 0){ 
        return 0;
    }
    else if(exponentVal === 0){
         return 1;
    } 
    else return powerSum(exponentVal, N, exponentIncrement + 1) + powerSum(X, N, exponentIncrement + 1);
}


// Gaming Array (MEDIUM) https://www.hackerrank.com/challenges/an-interesting-game-1/submissions/code/280944594

function gamingArray(arr) {
    let maxInt = arr[0];
    let counter = 1;
    if(arr.length === 1){
        return "BOB";
    }
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > maxInt){
            maxInt = arr[i];
            counter++
        }
    }

    if(counter%2 === 0) {
        return "ANDY";
    }
    else {
        return "BOB"
    }
}

class LinkedListNode {
        constructor(value, next = null)
        {
            this.value = value;
            this.next = next;
        }


        toString () {
            return `${this.value}`
        }
    }


// Linked list implementation

class LinkedList 
{
    constructor () {
        this.head = null
        this.tail = null
    }
    append(value)
    {
        const newNode = LinkedListNode(value);

        if (!this.head || !this.tail)
        {
            this.head = newNode;
            this.tail = newNode;

            return this
        }

        this.tail.text = newNode;

        this.tail = newNode;

        return this;
    }
    toArray ()
    {
        const nodes = [];

        let currentNode = this.head;

        while(currentNode)
        {
            nodes.push(currentNode)
            currentNode = currentNode.next;
        }
        return nodes;
        1
    }
}

// Stack implementation 


class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      return this.top;
    }
    push(value){
      const newNode = new Node(value);
      if (this.length === 0) {
        this.top = newNode;
        this.bottom = newNode;
      } else {
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
      }
      this.length++;
      return this;
    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.botom = null;
        }
        // const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
}   


// Stack implementation with array 

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.array = [];
    }
    peek() {
      return this.array[this.array.length-1];
    }
    push(value) {
      this.array.push(value)
      return this;
    }
    pop() {
        this.array.pop()
        return this;
    }
}   

// Binary tree implementation 

class Node {
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor()
    {
        this.root = null;
    }
        add(value){

    }     

    preOrder (node,callback)
    {
        if(!node)
        {
            return
        }
        if (callback)
        {
            callback(node);
        }

        this.preOrder(node.left, callback)
        this.preOrder(node.right, callback)
    }



    traverseDFS(callback,method) {
        if(method = 'preOrder')
        {
            return this.preOrder(this.root,callback)
        }
        if (method = 'inOrder')
        {
            return this.inOrder(this.root,callback)
        }

        return this.postOrder(this.root,callback)
    } 

}


// Selection sort 


function selectionSort(array) {
  const length = array.length;
  for(let i = 0; i < length; i++){
    let min = i;
    let temp = array[i];
    for(let j = i+1; j < length; j++){
      if (array[j] < array[min]){
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

// Merge sort \


function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  const right = array.slice(middle)

  
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Insertion sort 

function insertionSort(array) {
  const length = array.length;
	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
      array.unshift(array.splice(i,1)[0]);
    } else {
      if (array[i] < array[i-1]) {
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j-1] && array[i] < array[j]) {
            array.splice(j,0,array.splice(i,1)[0]);
          }
        }
      }
    }
	}
}
