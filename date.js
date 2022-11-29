
//module.exports = getDate; //the reason why we dont use () because we dont want to call function geDate now


exports.getDate = function () {
  const today = new Date();
  
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  
  return today.toLocaleDateString("en-US", options);
}

exports.getDay = function () {
    const today = new Date();
    
    const options = {
      weekday: "long" 
    };
    
    return today.toLocaleDateString("en-US", options);
  }

console.log(module.exports);