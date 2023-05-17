// Exemplo de Objeto
//   const user = {
//     name: "Ivin",
//     age: false,
//     email: "ioasuuid@oauisdu",
//   };

// Exemplo de Array Complexo
//   const users = [
//     {
//       name: "Ivin",
//       age: false,
//       email: "ioasuuid@oauisdu",
//     },
//     {
//       name: "Ivin 2",
//       age: false,
//       email: "ioasuuid@oauisdu",
//     },
//     {
//       name: "Ivin 3",
//       age: false,
//       email: "ioasuuid@oauisdu",
//       car: {
//         code: '37qwds-asda'
//       }
//     },
//     {
//       name: "Ivin 4",
//       age: false,
//       email: "ioasuuid@oauisdu",
//     },
//   ];

//   console.log(user);
//   console.log(users);

// Obtendo um elemento do DOM da pior maneira possival
const valorTitulo = document.children[0].children[1].children[0];

// Obtendo o mesmo elemento do DOM de uma maneira bem mais facil
const titulo = document.getElementById("tituloPrincipal");

// Simplificando ainda mais a obtencao de elementos do DOM

// Obtendo a primeira Tag H1 que estiver presente no HTML
const tituloRef = document.querySelector("h1");

// Obtendo todos os elementos que tiverem a classe Card
const cardsRef = document.querySelectorAll(".card");

// Obtendo o elemento que tiver o id igual a tituloPrincipal
const tituloIdRef = document.querySelector("#tituloPrincipal");


// Mostrando todas as ocorrencias no console
console.log(tituloRef);
console.log(cardsRef);
console.log(tituloIdRef);
