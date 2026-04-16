        import Header from './components/Header'
        import LessonList from './components/LessonList'
        import Supplies from './components/Supplies'
        import Footer from './components/Footer'

        export default function App() {
          return (
            <div className="app-shell">
              <Header />
              <section className="card">
                <h2>Course Overview</h2>
                <p>In this class, students will learn the fundamentals of React.js and build their first single-page application.</p>
                
              </section>
              <LessonList />
              <Supplies />
              <Footer />
            </div>
          )
        }
        