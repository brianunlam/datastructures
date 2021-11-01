class Queue {
  row: number[];
  constructor(){
  this.row=[];
  }
  
  enQueue(element: number):void{
    this.row.push(element);
  }

}

module.exports= Queue;