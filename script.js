//Data

const beers = {
  id: "beers",
  logo: "Best Beers",
  button: "details",
  cards: [
    {
      title: "Mango Bay",
      sub: "Mad Scientist Beer",
      text: "Pale Ale - American",
    },
    {
      title: "Távoli Galaxis",
      sub: "Rothbeer Brewery",
      text: "IPA - American",
    },
    {
      title: "Flying Rabbit AIPA",
      sub: "MONYO Brewing Co.",
      text: "IPA - American",
    },
    {
      title: "Liquid Cocaine",
      sub: "Mad Scientist Beer",
      text: "IPA - Imperial",
    },
    {
      title: "Organic Chocolate Stout",
      sub: "Samuel Smith Old Brewery",
      text: "Stout - English",
    },
    {
      title: "Bracia",
      sub: "Thornbridge Brewery",
      text: "Strong Ale - English",
    },
    {
      title: "Oatmeal Stout",
      sub: "Samuel Smith Old Brewery",
      text: "Stout - Oatmeal",
    },
    {
      title: "Black Tokyo Horizon",
      sub: "BrewDog",
      text: "Stout - American Imperial",
    },
    {
      title: "Vintage Ale",
      sub: "Fuller's",
      text: "Old Ale",
    },
    {
      title: "All the Leaves are Brown",
      sub: "Tempest Brewing Company",
      text: "Brown Ale - American",
    },
  ],
};

//utils

const createEl = (tag, options) => {
  const el = document.createElement(tag);

  for (key in options) {
    el[key] = options[key];
  }

  return el;
};

const createCardTitle = (beerTitle) => {
  const titleEl = createEl("h2", {
    className: "card-title",
    innerText: beerTitle,
  });

  return titleEl;
};

const createBeerSub = (beerSub) => {
  const beerSubEl = createEl("h3", {
    className: "beer-sub",
    innerText: beerSub,
  });

  return beerSubEl;
};

const createBeerDesc = (beerDesc) => {
  const beerDescEl = createEl("h2", {
    className: "beer-desc",
    innerText: beerDesc,
  });

  return beerDescEl;
};

const createDetailsBtn = (btnText) => {
  const btnEl = createEl("button", {
    className: "details-btn",
    innerText: btnText,
  });

  const btnIconEl = createEl("span", {
    className: "material-symbols-outlined",
    innerText: "arrow_forward",
  });

  btnEl.append(btnIconEl);

  return btnEl;
};

const createCardNum = (cardNum) => {
  const cardNumEl = createEl("div", {
    className: "card-number",
    innerText: cardNum,
  });

  return cardNumEl;
};

const createCard = (beer, index) => {
  const cardEl = createEl("div", { className: "card" });

  const titleEl = createCardTitle(beer.title);
  const subTitEl = createBeerSub(beer.sub);
  const descEl = createBeerDesc(beer.text);
  const btnEl = createDetailsBtn(beers.button);
  const cardNumEl = createCardNum(index + 1);

  cardEl.append(titleEl, subTitEl, descEl, btnEl, cardNumEl);
  return cardEl;
};

const createBeerContainer = () => {
  const containerEl = createEl("div", { className: "container" });

  const cards = beers.cards.map((beer, i) => createCard(beer, i));
  cards.forEach((card) => containerEl.append(card));
  return containerEl;
};

const createMenuIcon = () => {
  const menuIconEl = createEl("span", {
    className: "material-symbols-outlined",
    innerText: "menu",
  });
  return menuIconEl;
};

const createHeaderTitle = (title) => {
  const titleEl = createEl("h1", { innerText: title });

  return titleEl;
};

const createHeader = () => {
  const headerEl = createEl("header");
  const headerTitleEl = createHeaderTitle(beers.logo);
  const menuIconEl = createMenuIcon();

  headerEl.append(headerTitleEl, menuIconEl);
  return headerEl;
};

const main = () => {
  const rootEl = document.getElementById("root");
  const headerEl = createHeader();
  const beerContainerEl = createBeerContainer();

  rootEl.append(headerEl, beerContainerEl);
};

main();
