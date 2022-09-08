import '../styles/course.css';

function Course(props) {
  // console.log(props);
  return (
    <section>
      <div className="container">
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-white card-has-bg" style={{backgroundImage: "url(https://source.unsplash.com/600x900/?tech,street)"}}>
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <h2 className="card-title mt-0 mb-2">{props.courseName}</h2>
                  </div>
                  <div className="card-footer">
                    <div className="media">
                      <div className="media-body">
                        <h6 className="my-0 text-white d-block">This course takes</h6>
                        <small>{props.period} weeks</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>

  )
}

export default Course