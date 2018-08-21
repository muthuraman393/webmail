/*Prototype pattern*/
console.log('Welcome to Javascript Case Studies');
function classA(name,age,gender){
 this.name = name;
 this.age = age;
 this.gender = gender;


}


classA.prototype = 
{
nidcard: (function(){
    console.log(this.name,this.age,this.gender);
}),
nidcardname :"********"
}
//alternate for prototype values adding

classA.prototype.idcard = (function(){
    console.log(this.name,this.age,this.gender);
}); 
classA.prototype.idcardname = "asdasd";



var human = new classA('Vijay','56','male');  // 1 type of object creation - using prototype condtructor
var human1 = {name:'alien', age:'unknown',Dateofbirth:'Infinity'}; // 2nd type of object creation - object literal method

var person = Object.create(classA.prototype); // 3rd type of object creation  Object.create(consturctorname.prototype)

 Object.defineProperty(person,'name',{value:'Sabari',enumerable:true,writtable:true,configurable:true});
 Object.defineProperty(person,'age',{value:'39'})
 Object.defineProperty(person,'Dateofbirth',{value:'10-02-2014'})



//inheriting properties of one obj to another
var Indian = Object.create(person);
Object.defineProperty(Indian,'relgion',{value:'Hindu',enumerable:true,writtable:true,configurable:true});
//DOB inherited from Praent 

human.gender= 'female';
person.height= '6ft';
console.log('*Human*',human);
console.log('*Human1*',human1);
console.log('*person*', person);
console.log('*Indian*',Indian,'-','Indian.Dateofbirth',Indian.Dateofbirth);
console.log('-----------------------------------------------------------------------');
//End of prototype pattern






/**
 * Rough Section
 */
var TeslaModelS = function() {
    this.numWheels    = 4;
    this.manufacturer = 'Tesla';
    this.make         = 'Model S';
  }
  
  TeslaModelS.prototype.go = function() {
    conole.log('// Rotate wheels');
  }
  
  TeslaModelS.prototype.stop = function() {
   console.log(' // Apply brake pads');
  }

  var teslaobj = Object.create(TeslaModelS);
  console.log('*TeslaModelS*',TeslaModelS);
  console.log('*teslaobj*',teslaobj);
  console.log('*classA*',classA);
var beget = (function () {
 
    function basefuntn() {}
    //var proto = {name:'asdas',asd:'sadas'};
    return function ( proto ) {
        //basefuntn.prototype = proto;
        return new basefuntn();
    };
})();
var accessvalues = function(){
    return (this.name+'--'+this.age);
    }; 
    
 var asasaw= new beget({name:'asdas',asd:'sadas'});

console.log('*beget*',beget({name:'asdas',asd:'sadas',accessvalues:accessvalues}));
console.log('*asasaw*',asasaw);