
function LandingPage() {
  return (
    <div className="whiteboard landing" style={{
      backgroundImage: 'url(../assets/bg-signup.jpg)',
      height: "100vh",
      backgroundRepeat: "no-repeat"
    }}>
      <div id="icon">
        <h1 id="morre">M<span id="big-o">O</span>RRE</h1>
        <p id="icon-desc">INSTITUTION OF THE ART OF CODING</p>
      </div>
      <h1 id="yourself">BE YOURSELF</h1>
      <p className="land">
        Located in the heart of Nairobi. Morre institute aims at maintaing the tradition of providing individuals with the tools, access and opportunities needed to become leaders. We offer students a supportive, career-focused environment designed to help you achieve your goals and eventually success.
      </p>
      <p>
        Signup <a href="/signup" className="arrow">here ➔</a>
      </p>
    </div>
  )
}

export default LandingPage