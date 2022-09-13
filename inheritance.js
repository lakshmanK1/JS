class User{

 constructor(name, mail_id, password){

  this.name=name;

  this.mail_id=mail_id;

  this.password=password;

 }

 newUser(){

  console.log("User Name :" + this.name + " ,Mail id :" + this.mail_id);

 }

 static UserCount(){

  console.log("Refer your friends, already 150 members registered");

 }

}
class Member extends User{
  constructor(name, mail_id, password, ModuleType, membershipactive){
  super(name, mail_id, password);
  this.ModuleType=ModuleType;
  this.membershipactive=membershipactive;
 }
 getModuleType(){
  console.log(this.name+" successfully subscribed to "+this.ModuleType);
 }
 activetilldate(){
  console.log("your free trail ends at :"+activeuntil);
 }
 membershipactivetilldate(){
  console.log("Hey! Congratulations!! your Module expire date extended upto :"+expiredate.getFullYear());
 }
}
let per1 = new User("Krishna","krishna1@gmail.com","Krishna123");

let per2 = new User("Balarama","balarama12@gmail.com","balarama123");

per1.newUser() + User.UserCount();



let mod1 = new Member("Ramu","ramu@gmail.com","ramu123","Standard-JavaScript Language Module");

mod1.getModuleType();



let activeuntil = new Date(2022,09,20,11,30,00);

mod1.activetilldate();



let expiredate = new Date(2023,11,30);

mod1.membershipactivetilldate();
