export default function Button({ children }){
    return <button onClick={() => alert('You clicked the button!')}>{ children }</button>
}