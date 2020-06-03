import React from "react"
import profilePic from "../images/tomasFreire.png"

const About = () => (
  <div>
    <div className="section" id="cover">
      <img src={profilePic} alt="TomasFreire" />
      <div id="cover-info">
        <h1>Tomás Freire Knight</h1>
        <p>MERN Stack Web Developer</p>
        <ul id="social-list">
          <li>
            <a href="https://github.com/tomasfrancizco" target="_blank">
              <img src="../../icons/github.png" alt="github" title="github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tomas-f-freire-knight-376b0219/"
              target="_blank"
            >
              <img src="../../icons/linkedin.png" alt="linkedin" title="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tomasfrancizco/" target="_blank">
              <img src="../../icons/instagram.png" alt="instagram" title="instagram" />
            </a>
          </li>
          {/* <li>
            <a href="mailto:tomasfreire@gmail.com" target="_blank">
              <img src="../../icons/gmail.png" alt="gmail" title="gmail" />
            </a>
          </li>
          <li>
            <a href="https://wa.link/x0nbkf" target="_blank">
              <img src="../../icons/whatsapp.png" alt="whatsapp" title="whatsapp" />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
    <div className="section" id="about">
      <h3 className="section-title">About</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
        vestibulum diam, nec placerat dolor. Morbi porta, lacus vitae pharetra
        facilisis, felis augue placerat enim, ac tempus mi augue vehicula odio.
        Suspendisse nec neque pharetra, hendrerit justo elementum, venenatis
        tellus. Sed egestas, turpis a luctus aliquet, erat ligula viverra nunc,
        a porttitor urna ipsum ut nisi. Fusce et libero eget metus ullamcorper
        varius. Suspendisse potenti. Donec lobortis, eros et tristique posuere,
        turpis ante pellentesque dui, sit amet placerat erat tellus ac purus.
        Praesent eu ante malesuada nibh volutpat porttitor vel eu mi.<br></br><br/>
        Pellentesque erat massa, mollis et hendrerit non, tempor vel velit.
        Maecenas semper libero sit amet turpis pharetra, eu viverra sapien
        luctus. Phasellus eu metus aliquam, semper augue sed, varius odio.
        Aliquam dignissim posuere ante sit amet vestibulum. Aenean nec massa
        risus. Pellentesque semper tincidunt eleifend. Ut rhoncus rutrum
        sollicitudin. Aliquam eget nisl justo. Nulla ultricies commodo ipsum
        rutrum fermentum. Cras ex eros, euismod id tempus ut, imperdiet a ipsum.
        Quisque viverra pharetra sapien, et ullamcorper dui rutrum eget. Fusce
        leo lacus, facilisis nec mi ac, varius dictum dui. Nunc malesuada, lacus
        vitae egestas mollis, sem justo euismod mi, vel auctor nibh nisi non
        lorem. Fusce nec libero in ipsum pharetra eleifend quis hendrerit metus.
        Sed consequat lorem vel libero ullamcorper elementum. Nam blandit massa
        vel augue semper ultricies. Pellentesque quis massa ut tellus dignissim
        interdum quis et tellus. Morbi ac metus ac velit tempus euismod vel id
        nisi.
      </p>
    </div>
  </div>
)

export default About
