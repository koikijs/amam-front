import React, { Component, PropTypes } from 'react'
class Counter extends Component {
  constructorkj
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { getAbsents } = this.props
    getAbsents();
  }

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter, getAbsents, items, postAbsent } = this.props
    return (
      <div>
        <div className="wrapper">
          <div className="logo">
            <img src="images/logo.png" alt="Attendance mamnagement system" />
          </div>
          <div className="gridmaster">
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
              <section className="item" key={i}>
                <a href="#">
                  <img className="thumbnail" src={x.icon} alt="thumbnail" />
                  <div className="name">{x.name}</div>
                  <p className="department">{x.group}</p>
                </a>
              </section>
            )}
            <div className="btn" onClick={postAbsent}>
              <a href="#">+ ADD INFORMATION</a>
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
              <a href="#">+ ADD INFORMATION</a>
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
              <a href="#">+ ADD INFORMATION</a>
            </div>
          </div>
        </div>{/* /.gridmaster */}
        <section id="entry-modal" className="modal">
          <div className="modal-inner">
            <h2>Attendance Information</h2>
            <form className="entry-form" method="get" action="#">
              <p>please choose status</p>
              <div className="stat-icon-list">
                <input type="radio" name="icon" id="select1" defaultValue={1} defaultChecked />
                <label htmlFor="select1">
                  <img className="stat-icon" src="images/icons/icon-morning-off.png" alt="train-delay" />
                </label>
                <input type="radio" name="icon" id="select2" defaultValue={2} defaultChecked />
                <label htmlFor="select2">
                  <img className="stat-icon" src="images/icons/icon-afternoon-off.png" alt="train-delay" />
                </label>
                <input type="radio" name="icon" id="select3" defaultValue={3} defaultChecked />
                <label htmlFor="select3">
                  <img className="stat-icon" src="images/icons/icon-paid-leave.png" alt="train-delay" />
                </label>
                <input type="radio" name="icon" id="select4" defaultValue={4} defaultChecked />
                <label htmlFor="select4">
                  <img className="stat-icon" src="images/icons/icon-late.png" alt="train-delay" />
                </label>
                <input type="radio" name="icon" id="select5" defaultValue={5} defaultChecked />
                <label htmlFor="select5">
                  <img className="stat-icon" src="images/icons/icon-business-trip.png" alt="train-delay" />
                </label>
                <input type="radio" name="icon" id="select6" defaultValue={6} defaultChecked />
              </div>
              <div className="input-name">
              </div><div className="date">
              </div><div className="time">
              </div><div className="reason">
              </div><table className="table-form">
                <tbody><tr>
                    <th>NAME</th>
                    <td><input type="text" name="name" placeholder="target name" /></td>
                    {/* /.input-name */}
                  </tr>
                  <tr>
                    <th>DATE</th>
                    <td><input id="input-date" type="date" name="date" autoComplete="on" required /></td>
                    {/* /.date */}
                  </tr>
                  <tr>
                    <th>TIME</th>
                    <td><input type="time" name="start" autoComplete="on" defaultValue="09:00" required />
                      <span className="seperator">-</span>
                      <input type="time" name="end" autoComplete="on" defaultValue="09:15" required />
                    </td>
                    {/* /.time */}
                  </tr>
                  <tr>
                    <th>REASON</th>
                    <td><input type="text" name="reason" placeholder="reason" /></td>
                  </tr>
                </tbody></table>
              <div className="submitbutton">
                <input type="submit" defaultValue="SEND" />
              </div>{/* /.submitbutton */}
            </form>
          </div>
          <a href="#" className="close">
            <div className="btn"><span>close</span></div>
          </a>
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
