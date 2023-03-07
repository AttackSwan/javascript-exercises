const findTheOldest = function(obj) {
    return obj.reduce((oldestPerson, currentPerson) => {
        
        const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    
        return oldestAge < currentAge ? currentPerson : oldestPerson;  
    });
};

const getAge = function(birth, death) {
    if(!death) { 
        death = new Date().getFullYear();
    }
    return death - birth;
};

    // Initial approach using sort
    // const year = new Date().getFullYear();
        
    // const ordered = obj.sort((a, b) => {
    //     if(!b.yearOfDeath){ b.yearOfDeath = year; }
    //     const previous = a.yearOfDeath - a.yearOfBirth;
    //     const next = b.yearOfDeath - b.yearOfBirth;
    //     return previous > next ? -1 : 1;
    // });
    // return ordered.shift();

    // Do not edit below this line
module.exports = findTheOldest;
