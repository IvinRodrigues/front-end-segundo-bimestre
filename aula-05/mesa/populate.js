const postsContainerRef = document.querySelector("#postsContainer");
const posts = [
  {
    image: "./imagens/tiger.jpg",
    title: "O tigre",
    description:
      "O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.",
  },
  {
    image: "./imagens/leon.jpg",
    title: "O leão",
    description:
      "O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero",
  },
];

for (let post of posts) {
  postsContainerRef.innerHTML += `
          <div class="item">
              <img src="${post.image}">
              <h2>${post.title}</h2>
              <p>${post.description}</p>
          </div>
      `;
}