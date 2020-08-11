import React from "react"

const Work = () => {
  return (
    <div
      id="work"
      uk-scrollspy="cls: uk-animation-slide-top; delay: 400; offset-top: -200"
    >
      <h3 className="section-title">EXPERIENCIA</h3>
      <div className="card-container we-card-container">
        <div className="uk-card uk-card-default uk-card-body uk-width-1@m card">
          <h3 className="uk-card-title">Sales Operations Manager</h3>
          <span
            uk-icon="plus"
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
                <li>
                  Lideré los equipos de Operaciones Comerciales de las oficinas
                  de México, Colombia y Panamá.
                </li>
                {/* <li>Lead teams in México, Colombia & Panamá offices.</li> */}
                <li>
                  Rediseñé la estructura y dinámica de mis equipos, creando
                  grupos orientados a los objetivos y a las personas.
                </li>
                {/* <li>
                  Redesigned the team's structure & dynamic, creating both a
                  goals and people oriented group.
                </li> */}
                <li>
                  Ideé un proceso para optimizar los ingresos y el inventario
                  comercial, ahorrando con éste millones de dólares por año.
                </li>
                {/* <li>
                  Built a process to optimize revenue & ad inventory, saving
                  millions of dollars per year.
                </li> */}
                <li>
                  Lideré la migración de la operación digital desde la oficina
                  de Buenos Aires hacia la de México, convirtiendo a esta última
                  en la central digital de Latinoamérica.
                </li>
                {/* <li>
                  Migrated the digital operation from Buenos Aires to México,
                  making the office Latam's central digital hub.
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="uk-card uk-card-default uk-card-body uk-width-1@m card">
          <h3 className="uk-card-title">Ad Sales Supervisor</h3>
          <span
            uk-icon="plus"
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
                  Responsable de liderar el equipo que ingresaba, gestionaba y
                  facturaba las campañas publicitarias en TNT, Space, Warner
                  Channel, Cartoon Network y CNN.
                </li>
                {/* <li>
                  Was responsible for the team that booked, managed and billed
                  TV campaigns on TNT, Space, Warner, Cartoon Network & CNN.
                </li> */}
                <li>
                  Eficiencia: a través de la precisión en el ingreso y
                  facturación de las campañas, redujimos el tiempo de respuesta
                  a los clientes en un 40%, colaborando con su fidelización y
                  ahorrándole a la compañía millones de dólares.
                </li>
                {/* <li>
                  Through booking and billing accuracy we reduced the usual
                  billing delays more than 40%, making the company & clients
                  save time and thousands of dollars.
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
