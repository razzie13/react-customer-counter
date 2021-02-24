import './App.css';

import Counter from './components/Counter'
import CurrentTime from './components/CurrentTime'
import CallForHelp from './components/CallForHelp/CallForHelp'

export default function App() {

      return (
        <div>
          <Counter />
          <CallForHelp />
          <CurrentTime />
        </div>
      );
  
}
