import './App.css';
import SectionWrapper from './components/atoms/SectionWrapper';
import DisplayFeature from './components/Card/FeatureCard/DisplayFeature';
import FeatureLists from './components/Card/FeatureCard/FeatureLists';

// const appJsx = (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
// )

// const free = [
//   [true, 'Email Marketing Module'],
//   [true, 'User Control Management'],
//   [false, 'List Building And Cleaning'],
//   [false, 'Collected Data Reports'],
//   [false, 'Planning And Evaluation'],
// ]

// const heading = {
//   title: 'Basic',
//   price: 'Free',
//   frequency: 'lifetime'
// }

function App() {
  return (
    <SectionWrapper id="features" classes="tabs">
      <FeatureLists>
        {(activeFeature) => <DisplayFeature feature={activeFeature} />}
      </FeatureLists>
    </SectionWrapper>
  )
}

export default App;
