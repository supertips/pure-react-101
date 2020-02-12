const Title = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.title)
  ]);
};

const Card = props => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.title),
    React.createElement("span", {}, props.description)
  ]);
};

// Function declaration
/*
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "React is working!")
  );
};
*/

// Class declaration
class App extends React.Component {
  render() {
    return React.createElement("div", {}, [
      React.createElement(Title, { title: "React is working!" }),
      React.createElement(Card, {
        title: "My first card!",
        description: "This is my first card ever!"
      }),
      React.createElement(Card, {
        title: "My second card",
        description: "This is my second card :)"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("app"));
