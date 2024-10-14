function getStatus(age)
{ console.log(age)
//age = prompt('How old are you?', 18);
if ((age < 1)
|| (age > 120 )
|| (typeof age === "undefined")
|| (typeof age === "object")
|| (isNaN(Number(age)))
|| (isNaN(age) || age % 1 !== 0)){
return "Wrong Data"
}
let message = (age < 18) ? 'Pupil' :
(age < 22) ? 'Student' :
( age < 60) ? 'Worker' :
 'Retiree';
 return message;
 }
 console.log(getStatus(13))

 const status = getStatus

 module.exports = {status} 


 