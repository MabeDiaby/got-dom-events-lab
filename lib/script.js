var characters = [
  {
    name: "Daenerys Targaryen",
    bio: 'The youngest child of King Aerys II — also known as the Mad King — Daenerys is known by many titles, including the Mother of Dragons, or Khaleesi (which simply means "queen" in Dothraki).',
    status: "alive",
  },
  {
    name: "Khal Drogo",
    bio: 'Khal Drogo is the leader of a Dothraki "khalasar" (tribe). He and Daenerys eventually come to care for one another, but the marriage begins under traumatic circumstances.',
    status: "dead",
  },
  {
    name: "Tyrion Lannister",
    bio: "Joanna Lannister died in childbirth when Tyrion when born. He's known for his cleverness and sharp tongue, though many derisively call him the Imp or Halfman.",
    status: "alive",
  },
  {
    name: "Sansa Stark",
    bio: "Sansa Stark was raised as a highborn lady who would one marry into another great house.",
    status: "alive",
  },
  {
    name: "Arya Stark",
    bio: "Arya has no desire to grow up in the confines of ladyship — she prefers swords to sewing.",
    status: "alive",
  },
  {
    name: "Jon Snow",
    bio: "Said to be the bastard son of Ned Stark and a mystery woman, Jon is slightly ostracized from the rest of the Stark kids.",
    status: "alive",
  },
];

/*

1. Add a button to each character's <div> with the class more-info. When the user clicks the button, the name of the character prints to the console.
2. Add more functionality to the button: when clicked, the bio of the character appears beneath their image.
Add an input field and submit button at the top of the page. When the user types the name of a character and clicks submit, only that character remains visible in the browser.
3. Add another button to each character's <div> with the class alive-or-dead. When the user clicks the button, indicate the character is still on the show with with a green STILL ALIVE! under their image or that they have been killed off with a red SORRY, YOU DEAD under their image.

*/
// assign the character class to character cards
const characterCards = document.querySelectorAll(".character");
// assign submitSearch class to search Submit
const submitSearch = document.querySelector("#submitSearch");
// assign seachBar id to search bar
const searchBar = document.querySelector("#searchBar");

//  created a function to prevent the refresh default
function search(event) {
  event.preventDefault();

// created an arrow function so the search bar can for through each character in array to find a specific character
  characterCards.forEach((card) => {
    const searchBarValue = searchBar.value.toLowerCase();
    const h3Value = card.firstElementChild.innerText.toLowerCase();
// if there is a name in the search it will find that character and present them
    if (searchBarValue === "") {
      card.style.display = "block";
// if there is nothing in the search bar nothing will happen
    } else if (searchBarValue !== h3Value) {
      card.style.display = "none";
// else all the character cards will show
    } else {
      card.style.display = "block";
    }
  });
}

// 
characterCards.forEach((card) => {
  const moreInfoButton = document.createElement("button");
  moreInfoButton.innerText = "More Info";
  moreInfoButton.classList.add("more-info");
  card.appendChild(moreInfoButton);

  const infoPara = document.createElement("p");
  for (let i = 0; i < characters.length; i++) {
    if (characters[i].name === card.firstElementChild.innerText) {
      infoPara.innerText = characters[i].bio;
    }
  }
  infoPara.classList.add("show-hide");
  card.appendChild(infoPara);

  const statusCheck = document.createElement("button");
  statusCheck.innerText = "Dead or Alive";
  statusCheck.classList.add(`more-info`);
  card.appendChild(statusCheck)
  const statusPara = document.createElement("p");
  statusPara.classList.add("show-hide");
  for (let i = 0; i < characters.length; i++) {
    if (characters[i].name === card.firstElementChild.innerText) {
      if (characters[i].status === "alive") {
        statusPara.innerText = "STILL ALIVE"
        statusPara.style.color = "green"
      } else {
        statusPara.innerText = "SORRY, YOU DEAD"
        statusPara.style.color = "red"
      }
    }
  }
  card.appendChild(statusPara);
  moreInfoButton.addEventListener("click", () => {
    infoPara.classList.toggle("show-hide");
  });
  statusCheck.addEventListener("click", () => {
    statusPara.classList.toggle("show-hide");
  })
});

submitSearch.addEventListener("click", search);
