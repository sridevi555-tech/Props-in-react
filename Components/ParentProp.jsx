import ChildComponent from "./Childprops";

function ParentComponent() {
  // Define a data object to pass as props
  const data = {
    name: "Welcome to MygoMinds",
    gmail: "mygominds123@gmail.com"
  };

  return (
    <div>
      <h2>Parent Component</h2>
      {/* Render the ChildComponent and pass 'data' as props */}
      <ChildComponent person={data}/> 
    </div>
  );
}
export default ParentComponent;




