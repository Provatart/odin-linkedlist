class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  append(value) {
    const newNode = new Node(value);
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
  }
 toString(){
    let current = this.head;
    let res = '';
    while (current != null) {
      res+=`( ${current.value} ) -> `
      current = current.next;
    }
    res += `null`;
    return res;

  }
  printList() {
    let current = this.head;
    while (current != null) {
      console.log(current.value);
      current = current.next;
    }
  }
  get size() {
    let current = this.head;
    let counter = 0;
    while (current != null) {
      counter++;
      current = current.next;
    }
    return counter;
  }
  get getHead() {
    return this.head;
  }
  get getTail() {
    let current = this.head;

    while (current.next != null) {
      current = current.next;
    }
    return current;
  }
  at(index) {
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      counter++;
      current = current.next;
    }
    return current;
  }
  insertAt(value, index){
    const newNode = new Node (value);
    let current = this.head;
    if (index === 0){newNode.next = current; this.head = newNode}else{
   
    let counter = 0;
    
    while (counter+1 !== index) {
      counter++;
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    }
  }
  pop() {
    const currentSize = this.size;
    if (currentSize <= 1) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
  }
  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  find(value) {
    let current = this.head;
    let counter = 0;
    while (current !== null) {
      if (current.value === value) {
        return counter;
      }
      counter++;
      current = current.next;
    }
    return null;
  }
  removeAt(index){
    if (index === 0 ){
this.head=this.head.next;
    }else{
        let current = this.head;
        let counter = 1;
        while (counter !== index) {
            counter++;
            current = current.next;
          }
        current.next = current.next.next;
        

    }
  }
}
class Node {
  constructor(val, next = null) {
    this.value = val;
    this.next = next;
  }
}

const oneNode = new Node(2);
const myList = new LinkedList();
console.log(oneNode);
console.log(myList);
myList.prepend("secondNode");
console.log(myList);
myList.prepend("headNode");
console.log(myList);
myList.append("thirdNode");
myList.append("fourthNode");
myList.append("tailNode");
myList.printList();
console.log(myList.size);
console.log(myList.getHead);
console.log(myList.getTail);
console.log(myList.at(2));
myList.pop();
myList.printList();
myList.pop();

myList.printList();
console.log(myList.contains("thirdNode"));
console.log(myList.find("thiredNode"));
myList.insertAt('additionalNode',3);
console.log(myList.toString());
myList.removeAt(3);
console.log(myList.toString());
