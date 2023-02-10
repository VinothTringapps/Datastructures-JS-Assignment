class Node{
     constructor(data,next=null){
        this.data=data;
        this.next=next;
     }
   }
class LinkedList{
   constructor(){
      this.head=null;
      this.size=0;
   }

insertFirst(data){
let node=new Node(data);
if(this.head==null){
   this.head=node;
}
else{
   node.next=this.head;
   this.head=node;
}
   
}
insertlast(data){
   let node=new Node(data);
   let current;
   if(this.head==null){
      this.head=node;
   }
   else{
      current=this.head;
      while(current.next !=null){
         current=current.next;
      }
      current.next=node;
      this.size++;
   }
}
insertat(data,index){
   let node=new Node(data,index);
   let temp=this.head;
  
   for(let i=1;i<index;i++){
         temp=temp.next;
   }
   node.next=temp.next;
   temp.next=node;

}
removeFirst(){
  let temp=this.head; 
   this.head=temp.next;
}
removeLast(){
   let temp=this.head;
   let pre;
   while(temp.next){
      pre=temp;
      temp=temp.next;
   }
   pre.next=null;
}
removeat(index){
   let temp=this.head;
   let pre;
   for(let i=0;i<index;i++){
      pre=temp;
      temp=temp.next;
   }
   pre.next=temp.next;
}

printListData(){
   let current=this.head;
   while(current){
      console.log(current.data);
      current=current.next;
   }
}

}
let ll=new LinkedList();
ll.insertFirst('a');
ll.insertFirst('b');
ll.insertFirst('c');
ll.insertlast('d');
ll.insertat('e',2);
ll.removeFirst();
ll.removeLast();
ll.removeat(1);
ll.printListData();