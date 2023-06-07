import "./NavigationBar.css";

const NavigationBar = (props) => {

  const clickHandler = () => {
     
  };

  return (
    <div className="navigation-bar">
      <button onClick={clickHandler}>DashBoard</button>
      <button>Second</button>
      <button>Third</button>
      <button>Fourth</button>
    </div>
  );
}

export default NavigationBar;
