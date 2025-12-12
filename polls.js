const poll =new Map();
const addOption=(option)=>{
  if(!option||option.trim()===""){
    return "Option can't be empty."
  }
 if(poll.has(option)){
   return `${option} already exists.`
 }
 poll.set(option,new Set())
 return `${option} has been added to the polls.` 
}
const vote =(option,voterId)=>{
  if(!poll.has(option)){
    return `${option} does not exist.`
  }
  const voters=poll.get(option);
  if(voters.has(voterId)){
    return `Voter ${voterId} has alreay voted for ${option}`
  }
  voters.add(voterId)
  return`Voter ${voterId} voted for ${option}.`
}
const displayResults=()=>{
  let result=""
  for(const[option,voters]of poll.entries()){
    result += `${option}:${voters.size} votes\n`
  }
  return result.trim();
}
console.log(addOption("Kagame"))
console.log(addOption("Twizeyimana"))
console.log(addOption("Habimana"))

console.log(vote("Kagame","101"))
console.log(vote("Habimana","67"))

console.log(displayResults())