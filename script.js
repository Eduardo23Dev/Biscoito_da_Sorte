// Captura de elementos
const screen_1 = document.querySelector(".screen_1");
const screen_2 = document.querySelector(".screen_2");
const userLuck = document.querySelector(".userLuck p");
const cookinClick = document.querySelector(".screen_1 img");
const randowPhrases = [
  "Acredite em si mesmo e todo o resto irá se encaixar. Tenha fé em seus próprios talentos, habilidades e potencial.",
  "A vida é 10% do que acontece com você e 90% como você reage a isso.",
  "Nós podemos enfrentar qualquer desafio se tivermos a coragem de enfrentá-lo juntos.",
  "O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso. Se você ama o que faz, terá sucesso.",
  "Você é mais forte do que acredita. Mais corajoso do que parece. E mais talentoso do que imagina.",
  "Não deixe que os desafios da vida o desanimem. Enfrente-os com coragem e otimismo, sabendo que cada obstáculo é uma oportunidade de crescimento.",
  "Cada dia é uma nova chance de ser feliz. Aproveite ao máximo e não deixe que os pequenos problemas o impeçam de ver a beleza da vida.",
  "Não é sobre ter tempo, é sobre fazer tempo.",
  "Não espere por oportunidades, crie-as.",
  "Se você não sabe para onde está indo, qualquer caminho serve.",
  "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
  "Você é capaz de mais do que imagina. Acredite em si mesmo e comece a agir.",
  "Se você quer ter uma vida feliz, pratique a gratidão diariamente. Agradeça pelas coisas simples e encontre alegria nas pequenas conquistas.",
  "Não importa quantas vezes você caia, o importante é sempre se levantar. Lembre-se de que você é forte o suficiente para superar qualquer desafio.",
  "Nunca subestime o poder da positividade. Mantenha uma atitude otimista, mesmo nas situações mais difíceis, e você encontrará soluções onde outros veem problemas.",
];
let randowPhrasesIndice = Math.floor(Math.random() * 15);
//Função para gerar uma frase aleatoria
function randowPhrasesGerator() {
  screen_1.style.display = "none";
  screen_2.style.display = "flex";
  userLuck.innerHTML = randowPhrases[randowPhrasesIndice];
}

//Adicionando o evento para gerar as frases
cookinClick.addEventListener("click", randowPhrasesGerator);
