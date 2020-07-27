import React from "react"

const Work = () => {
  return (
    <div id="work" uk-scrollspy="cls: uk-animation-slide-top; delay: 300">
      <h3 className="section-title">WORK</h3>
      <div className="card-container we-card-container">
        <div className="uk-card uk-card-default uk-card-body uk-width-1@m card">
          <h3>Sales Operations Manager</h3>
          <span
            uk-icon="more-vertical"
            className="dot-menu"
            uk-toggle="target: #modal-close-default-a"
          ></span>
          <p>
            @{" "}
            <a
              href="https://www.warnermediagroup.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WarnerMedia
            </a>
          </p>
          <p>2015 - 2020</p>

          <div id="modal-close-default-a" uk-modal="true">
            <div className="uk-modal-dialog uk-modal-body">
              <button
                className="uk-modal-close-default"
                type="button"
                uk-close="true"
              ></button>
              <h4 className="uk-modal-title">Sales Operations Manager</h4>
              <ul className="work-description-ul">
                <li>Lead teams in México, Colombia & Panamá offices.</li>
                <li>
                  Redesigned the team's structure & dynamic, creating both a
                  goals and people oriented group.
                </li>
                <li>
                  Built a process to optimize revenue & ad inventory, saving
                  millions of dollars per year.
                </li>
                <li>
                  Migrated the digital operation from Buenos Aires to México,
                  making the office Latam's central digital hub.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="uk-card uk-card-default uk-card-body uk-width-1@m card">
          <h3 className="uk-card-title">Ad Sales Supervisor</h3>
          <span
            uk-icon="more-vertical"
            className="dot-menu"
            uk-toggle="target: #modal-close-default-b"
          ></span>
          <p>
            @{" "}
            <a
              href="https://www.warnermediagroup.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WarnerMedia
            </a>
          </p>
          <p>2009 - 2015</p>

          <div id="modal-close-default-b" uk-modal="true">
            <div className="uk-modal-dialog uk-modal-body">
              <button
                className="uk-modal-close-default"
                type="button"
                uk-close="true"
              ></button>
              <h4 className="uk-modal-title">Ad Sales Supervisor</h4>
              <ul className="work-description-ul">
                <li>
                  Was responsible for the team that booked, managed and billed
                  TV campaigns on TNT, Space, Warner, Cartoon Network & CNN.
                </li>
                <li>
                  Through booking and billing accuracy we reduced the usual
                  billing delays more than 40%, making the company & clients
                  save time and thousands of dollars.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
