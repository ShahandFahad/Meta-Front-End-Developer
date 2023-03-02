import InputComponent from './Components/Example';
import Counter from './Components/Count';
import RegisterForm from './Components/RegisterForm';
import TextInputWithFocusButton from './Components/TextInputWithFocusButton';
import StateExample1 from './Components/StateExample1'
function App() {



 return (
     <div>
      <h1>useState Hook</h1>
      <div><InputComponent /></div>
      <div><Counter /></div>
      <div>
        <RegisterForm/>
      </div>
      <div>
        <TextInputWithFocusButton />
      </div>
      
      <div>
        <h1>State</h1>
        <StateExample1 />
      </div>
     </div>
 );
}

export default App;