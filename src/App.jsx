import { Aboutme, Banner, Contact, Footer, Projects, Skills } from './components';

function App() {
  
  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Banner />
        <Aboutme />
        {/* <Experience /> */}
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
  </main>

  )
}

export default App
