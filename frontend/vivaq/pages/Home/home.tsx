import Questions from './Questions'
import SubjectList from './SubjectList'
import Subject from '../Subject'
import Header from './Header'

const Home = () => {
  return(
    <div className="p-4">
      <Header/>
      <SubjectList />
    </div>
  )
}

export default Home;