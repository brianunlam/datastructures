class Queue {
  row: number[];
  constructor(){
  this.row=[];
  }
  
  enQueue(element: number):void{
    this.row.push(element);
  }

  deQueue():string{
    return `item removed ${this.row.shift()}`;
  }
  
  isEmpty():boolean{
    return this.row.length === 0 ? true : false;
  }
}

module.exports= Queue;