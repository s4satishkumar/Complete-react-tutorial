import { useState } from 'react';
import './App.css';
import Card from './Card';
import Card2 from './Card2';

function App() {

  // let title = "This is before change ";


  let [title, setTitle] = useState("This is before change");

  const onChangeTitle = () => {

    // this will not work so we will use useState to change the title
    // title="hey buddy this is after change";
    // title="hey buddy this is after change";


    setTitle("hey buddy this is after change");

  }

  return (


    <div className="App">

      <div className='App-header'>
        <div className='cards'>
          {/* passing the data without using props */}
          {/* <Card/> */}

          {/* passing the data with help of props */}
          <Card title="Hey Students " description="Let's see props in action " />
          <Card title="Hey devloper " description="let's learn react " />
          <Card title="hi react dev " description="welcome to react course" />

          {/* this is default props if you don't pass any value it will take value from default value defined */}
          <Card title="hi react dev " />
          <Card />



          <Card2 title={title} description=" cahnge parent on click child elements"
            changeTitle={onChangeTitle} />
          <Card2  />
          <Card2 title="hey fellow" />

        </div>
      </div>
    </div>
  );
}

export default App;
