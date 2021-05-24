import './app.css';
import Header from './components/header';
import HeaderChild from './components/header-child';
import HomePage from './components/homePage';
import StudyPlans from   './components/study-plans';
import CompetitiveExams from './components/competitiveExams';
import PreviousExams from './components/previousExams';
import LinkageChapter from './components/linkageChapterAnalysis';
import PerformanceAnalysis from './components/PerformanceAnalysis';
import RivisionMaterial from './components/rivisonMaterial';
import MockTest from './components/mockTest';
import StudyLifeCycle from './components/studyLifeCycle';
/*
import Fingertips from './components/fingertips';  */

function App() {
  return (
    <div className="App">
      <Header />
       <HeaderChild />
      <HomePage />
      <StudyPlans />
       <CompetitiveExams />
      <PreviousExams />
      <RivisionMaterial />
       <LinkageChapter />
       <MockTest />
       <PerformanceAnalysis /> 
       <StudyLifeCycle />
{     /*    
      <Fingertips />  */}
    </div>
  );
}
export default App;
