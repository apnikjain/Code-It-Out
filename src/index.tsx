import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
import TextEditor from './components/text-editor';
import CodeCell from './components/code-cell';

const App = () => {
  return (
    <div>
      <TextEditor />
      <br/>
      <br/>
      <CodeCell />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
