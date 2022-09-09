const stories = [
  { name: "Conheça a ledthinking", url: "https://ledthinking.app" },
  { name: "Me adicione no linkedin", url: "https://www.linkedin.com/in/fclebson/" }
];

export default {
  type: "div",
  props: {
    children: [
      {
        type: "ul",
        props: {
          children: stories.map(storyElement)
        }
      }
    ]
  }
};

function storyElement({ name, url }) {
  const likes = Math.ceil(Math.random() * 100);
  const buttonElement = {
    type: "button",
    props: {
      children: [
        { type: "TEXT ELEMENT", props: { nodeValue: likes } },
        { type: "TEXT ELEMENT", props: { nodeValue: "❤️" } }
      ]
    }
  };
  const linkElement = {
    type: "a",
    props: {
      href: url,
      children: [{ type: "TEXT ELEMENT", props: { nodeValue: name } }]
    }
  };

  return {
    type: "li",
    props: {
      children: [buttonElement, linkElement]
    }
  };
}