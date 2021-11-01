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
}

module.exports= Queue;