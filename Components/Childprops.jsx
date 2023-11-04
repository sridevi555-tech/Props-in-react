
// Child component that receives props
function ChildComponent(props) {
    return (
      <div>
        <h3>Child Component</h3>
        <p>Name: {props.person.name}</p>
        <p>Gmail: {props.person.gmail}</p>
      </div>
    );
  }
  export default ChildComponent;