const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
];

const capitalize = function(str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase();
  capitalizedStr += str.slice(1);
  return capitalizedStr;
};

const getAge = function(age) {
  if (age < 21) {
      return "an Underage";
  }
   else if (age > 55) {
      return "a 55+";
  }
   else {
      return `${age} year old`;
  }
};

const capitalizeProfession = function(profession) {
  let words = profession.split(" ");
  for (let i = 0; i < words.length; i++) {
      words[i] = capitalize(words[i]);
  }
  return words.join(" ");
};

const getLocation = function(city, country) {
  return `${capitalize(city)}, ${capitalize(country)}`;
};

const getCatchphrase = function(name, catchphrase) {
  return `${capitalize(name)} loves to say "${capitalize(catchphrase)}"`;
};

const getSummary = function(person){
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} `;
  summary += `${capitalizeProfession(person.profession)} `;
  summary += `from ${getLocation(person.city, person.country)}. `;
  summary += `${getCatchphrase(person.name, person.catchphrase)}.`;
  return summary;
};

for (let person of people_info) {
    console.log(getSummary(person));
}