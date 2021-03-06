//classes can have static methods
//they can't be called on class objects, because they are not instantiating.
//they are only called from class itself.
//they are mostly used to provide some helper functions.
//it's a good practice to create static methods for accepting few objects (or object properties) of same type and do any stuff with them
class Books{
  constructor(name,date){
    this.name = name;
    this.date = date;
  };
  static getEarlierPublished(b1,b2){
    let earlier_name = b2.name;
    if(b1.date-b2.date<0){
      earlier_name = b1.name;
    }
    console.log(b1.name+" was published earlier");
  }
}
let book1 = new Books("book1",1980);
let book2 = new Books("book2",1990);
Books.getEarlierPublished(book1,book2);
