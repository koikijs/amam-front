import React, { Component, PropTypes } from 'react'
//        <div>
//          <button onClick={getAbsents}>getAbsents</button>
//          <ul>
//            {items.map((x, i) =>
//              <li key={i}>{x.id}</li>
//            )}
//          </ul>
//        </div>

class Counter extends Component {
  constructorkj
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { getAbsents } = this.props
    getAbsents()
  }

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter, getAbsents, items } = this.props
    return (
      <div>
        <div className="wrapper">
          <div className="logo">
            <img src="images/logo.png" alt="Attendance mamnagement system" />
          </div>
          <div className="gridmaster">
            <p>{console.log(items)}</p>
            <form id="search-area" method="get" action="index.html">
              <input type="text" name="condition" id="search-box" placeholder="Please Input Team, Name, Date" />
            </form>
            <span className="filter-conditon">2015/12/21</span>
            <span className="filter-conditon">Development Group</span>
          </div>
          {/* /.gridmaster */}
        </div>
        <div className="clear" />
        <div className="gridmaster">
          <div className="grid">
            <p className="title">Paid leave off</p>
            <hr className="fancy-line" />
            {items.map((x, i) =>
              <section className="item">
                <a href="#">
                  <img className="thumbnail" src="images/thumbnail1.png" alt="thumbnail" />
                  <div className="name">Takahiro Fujii</div>
                  <p className="department">Development Group</p>
                </a>
              </section>
            )}
            <div className="btn">
              <a href="#entry-modal">+ ADD INFORMATION</a>
            </div>
          </div>
          <div className="grid">
            <p className="title">Late</p>
            <hr className="fancy-line" />
            <div className="bar" />
            <section className="item">
              <a href="#">
                <img className="thumbnail" src="images/thumbnail1.png" alt="thumbnail" />
                <div className="name">Takahiro Fujii</div>
                <p className="department">Development Group</p>
              </a>
            </section>
            <section className="item">
              <a href="#">
                <img className="thumbnail" src="images/thumbnail1.png" alt="thumbnail" />
                <div className="name">Takahiro Fujii</div>
                <p className="department">Development Group</p>
              </a>
            </section>
            <section className="item">
              <a href="#">
                <img className="thumbnail" src="images/thumbnail1.png" alt="thumbnail" />
                <div className="name">Takahiro Fujii</div>
                <p className="department">Development Group</p>
              </a>
            </section>
            <section className="item">
              <a href="#">
                <img className="thumbnail" src="images/thumbnail1.png" alt="thumbnail" />
                <div className="name">Takahiro Fujii</div>
                <p className="department">Development Group</p>
              </a>
            </section>
            <section className="item">
              <a href="#">
                <img className="thumbnail" src="images/thumbnail1.png" alt="thumbnail" />
                <div className="name">Takahiro Fujii</div>
                <p className="department">Development Group</p>
              </a>
            </section>
            <section className="item">
              <a href="#">
                <img className="thumbnail" src="images/thumbnail1.png" alt="thumbnail" />
                <div className="name">Takahiro Fujii</div>
                <p className="department">Development Group</p>
              </a>
            </section>
            <div className="balloon">Half-Day off</div>
            <section className="item">
              <a href="#">
                <img className="thumbnail" src="images/thumbnail1.png" alt="thumbnail" />
                <div className="name">Takahiro Fujii</div>
                <p className="department">Development Group</p>
              </a>
            </section>
            <section className="item">
              <a href="#">
                <img className="thumbnail" src="images/thumbnail1.png" alt="thumbnail" />
                <div className="name">Takahiro Fujii</div>
                <p className="department">Development Group</p>
              </a>
            </section>
            <section className="item">
              <a href="#">
                <img className="thumbnail" src="images/thumbnail1.png" alt="thumbnail" />
                <div className="name">Takahiro Fujii</div>
                <p className="department">Development Group</p>
              </a>
            </section>
            <div className="btn">
              <a href="#entry-modal">+ ADD INFORMATION</a>
            </div>
          </div>
          <div className="grid">
            <p className="title">Business Event</p>
            <hr className="fancy-line" />
            <section className="item">
              <a href="#">
                <img className="thumbnail" src="images/thumbnail1.png" alt="thumbnail" />
                <div className="name">Takahiro Fujii</div>
                <p className="department">Development Group</p>
              </a>
            </section>
            <section className="item">
              <a href="#">
                <img className="thumbnail" src="images/thumbnail1.png" alt="thumbnail" />
                <div className="name">Takahiro Fujii</div>
                <p className="department">Development Group</p>
              </a>
            </section>
            <div className="rounded">
              <span className="reason">Overseas Conference</span>
            </div>
            <section className="item">
              <a href="#">
                <img className="thumbnail" src="images/thumbnail1.png" alt="thumbnail" />
                <div className="name">Takahiro Fujii</div>
                <p className="department">Development Group</p>
              </a>
            </section>
            <div className="btn">
              <a href="#entry-modal">+ ADD INFORMATION</a>
            </div>
          </div>
        </div>{/* /.gridmaster */}
        <section id="entry-modal" className="modal">
          <div className="modal-inner">
            <div className="circle-wrapper">
              <div className="circle" />
            </div>
            <h2>Attendance Information</h2>
            <form className="entry-form" method="get" action="#">
              <input type="text" name="name" placeholder="please input target name" />
              <p>please choose status</p>
              <div className="stat-icon-list">
                <input type="radio" name="icon" id="select1" defaultValue={1} defaultChecked />
                <label htmlFor="select1">
                  <img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
                </label>
                <input type="radio" name="icon" id="select2" defaultValue={2} defaultChecked />
                <label htmlFor="select2">
                  <img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
                </label>
                <input type="radio" name="icon" id="select3" defaultValue={3} defaultChecked />
                <label htmlFor="select3">
                  <img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
                </label>
                <input type="radio" name="icon" id="select4" defaultValue={4} defaultChecked />
                <label htmlFor="select4">
                  <img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
                </label>
                <input type="radio" name="icon" id="select5" defaultValue={5} defaultChecked />
                <label htmlFor="select5">
                  <img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
                </label>
                <input type="radio" name="icon" id="select6" defaultValue={6} defaultChecked />
                <label htmlFor="select6">
                  <img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
                </label>
                <input type="radio" name="icon" id="select7" defaultValue={7} defaultChecked />
                <label htmlFor="select7">
                  <img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
                </label>
                <input type="radio" name="icon" id="select8" defaultValue={8} defaultChecked />
                <label htmlFor="select8">
                  <img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
                </label>
              </div>
              <div className="date">
                DATE
                <input type="date" name="date" autoComplete="on" required />
              </div>
              <div className="time">
                TIME
                <input type="time" name="start" autoComplete="on" defaultValue="09:00" required />
                <span className="seperator">-</span>
                <input type="time" name="end" autoComplete="on" required />
              </div>
              REASON<textarea name="reason" placeholder="please input reason" defaultValue={""} />
              <input type="submit" defaultValue="SEND" />
            </form>
          </div>
          <a href="#" className="close"><span>close</span></a>
        </section>
      </div>
    )
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default Counter
