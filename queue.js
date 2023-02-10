class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}
class Queue{
    constructor(head){
        this.head=null;
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
         front(){
            let temp=this.head;
            console.log("front--->"+temp.data);
         }
         tail(){
            let temp=this.head;
            while(temp.next !=null){
                temp=temp.next;
            }
            console.log("tail--->"+temp.data)
         }
         removeFirst(){
            let temp=this.head; 
             this.head=temp.next;
          }
          printdisplay(){
            let cur=this.head;
            while(cur){
                console.log(cur.data);
                cur=cur.next;
            }
        }

    }
    let ll=new Queue();
    ll.insertlast("Aravind");
    ll.insertlast("vinoth");
    ll.insertlast("srini");
    ll.insertlast("fazila");
    ll.insertlast("raju");
    ll.removeFirst();
    ll.printdisplay();
    ll.tail();
    ll.front();
