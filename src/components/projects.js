import React from "react"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"

const Projects = () => {
  const query = useStaticQuery(graphql`
    query ProjectsQuery {
      allFile(filter: { relativeDirectory: { eq: "projects" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  console.log(query)
  return (
    <div
      className="section full-height"
      id="projects"
      uk-scrollspy="cls: uk-animation-fade; delay: 200; offset-top: -200"
    >
      <h3 className="section-title">PROYECTOS</h3>
      <div uk-slider="true; autoplay: true; center: true">
        <div className="uk-position-relative">
          <div className="uk-slider-container uk-light">
            <ul className="uk-slider-items uk-child-width-1-3@s uk-grid projects-card-container">
              <div>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <Img
                      fluid={query.allFile.edges[3].node.childImageSharp.fluid}
                      alt="app logo"
                      className="projects-img"
                    />
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">morfApp</h3>
                    <p>
                      Julio 2019 -{" "}
                      <a
                        href="https://gist.github.com/tomasfrancizco/2f024b14f675226e57ad50cd1ea16ba2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link al repo
                      </a>
                    </p>
                    <p>
                      morfApp es una red social gastronómica en la que los
                      usuarios pueden compartir sus recetas, guardar sus
                      favoritas y buscar otras de acuerdo a los ingredientes con
                      los que cuentan en el momento.
                    </p>
                    <footer className="blockquote-footer">
                      <svg viewBox="0 0 512 512" style={{ width: "1.5em" }}>
                        <path
                          d="m352 422h-192-24l-10.001 80h260.001l-10-80z"
                          fill="#c68a65"
                        />
                        <path
                          d="m231.585 320.75c-10.948 42.315-35.605 101.25-71.585 101.25h192c-35.979 0-60.637-58.935-71.585-101.25z"
                          fill="#ffda8f"
                        />
                        <path
                          d="m231.585 320.75h48.829 5.586c11 0 20-8.999 20-20 0-3.29-.805-6.402-2.229-9.147-3.335-6.432-10.062-10.853-17.771-10.853h-60c-7.71 0-14.437 4.421-17.771 10.853-1.423 2.745-2.229 5.857-2.229 9.148 0 11 9 20 20 20h5.585z"
                          fill="#ffc144"
                        />
                        <path
                          d="m226 280.751h60c7.71 0 14.436 4.421 17.77 10.853 48.045-19.14 82.23-66.197 82.23-120.854v-120.75h-260v120.75c0 54.656 34.185 101.714 82.228 120.853 3.335-6.432 10.062-10.852 17.772-10.852z"
                          fill="#ffda8f"
                        />
                        <path
                          d="m126 50h260c11 0 20-8.999 20-20 0-11-9-20-20-20h-260c-11 0-20 8.999-20 20 0 11 9 20 20 20z"
                          fill="#ffc144"
                        />
                        <path d="m276.806 452h-41.613c-5.523 0-10 4.478-10 10s4.477 10 10 10h41.613c5.523 0 10-4.478 10-10s-4.477-10-10-10z" />
                        <path d="m456 80.001h-60v-21.721c11.639-4.128 20-15.243 20-28.28 0-16.542-13.458-30-30-30h-260c-16.542 0-30 13.458-30 30 0 13.036 8.361 24.152 20 28.28v21.721h-60c-5.523 0-10 4.478-10 10v70c0 44.112 35.888 80 80 80h8.455c1.922 3.35 3.976 6.639 6.186 9.848 14.155 20.547 33.259 36.792 55.57 47.393-.135 1.152-.212 2.322-.212 3.51 0 14.012 9.657 25.807 22.664 29.088-12.016 40.035-33.369 82.16-58.663 82.16h-24c-5.043 0-9.297 3.755-9.923 8.76l-10 80c-.356 2.846.528 5.708 2.426 7.858s4.629 3.382 7.497 3.382h260c2.868 0 5.599-1.231 7.497-3.382 1.898-2.15 2.782-5.013 2.426-7.858l-10-80c-.625-5.005-4.879-8.76-9.923-8.76h-24c-15.309 0-28.244-16.075-36.399-29.562-10.48-17.331-17.799-37.745-22.262-52.6 13.005-3.282 22.661-15.077 22.661-29.088 0-1.188-.077-2.357-.212-3.51 22.315-10.602 41.421-26.851 55.576-47.401 2.208-3.206 4.259-6.492 6.18-9.838h8.456c44.112 0 80-35.888 80-80v-70c0-5.522-4.477-10-10-10zm-390 80v-60h50v70.749c0 16.98 3.08 33.595 8.997 49.226-32.621-.54-58.997-27.227-58.997-59.975zm308.672 331.999h-237.345l7.5-60h222.345zm-62.094-80h-113.156c4.859-5.326 9.545-11.705 14.045-19.137 12.782-21.11 21.174-45.982 25.762-62.113h33.54c4.593 16.148 12.967 40.955 25.716 62.038 4.515 7.464 9.217 13.868 14.093 19.212zm-26.578-101.25h-60c-5.514 0-10-4.486-10-10s4.486-9.999 10-9.999h60c5.514 0 10 4.486 10 10s-4.486 9.999-10 9.999zm20.948-31.447c-5.411-5.286-12.803-8.552-20.948-8.552h-60c-8.144 0-15.536 3.267-20.947 8.553-42.16-19.852-69.053-61.743-69.053-108.554v-110.75h74.997c5.523 0 10-4.478 10-10s-4.477-10-10-10h-84.997c-5.514 0-10-4.486-10-10s4.486-10 10-10h260c5.514 0 10 4.486 10 10s-4.486 10-10 10h-85.003c-5.523 0-10 4.478-10 10s4.477 10 10 10h75.003v110.75c0 46.808-26.893 88.701-69.052 108.553zm139.052-119.302c0 32.748-26.376 59.435-58.997 59.975 5.917-15.631 8.997-32.246 8.997-49.226v-70.749h50z" />
                        <path d="m256 60c5.523 0 10-4.478 10-10s-4.477-10-10-10h-.008c-5.523 0-9.996 4.478-9.996 10s4.481 10 10.004 10z" />
                        <path d="m267.087 190.8h-1.087v-69.998c0-3.572-1.906-6.874-5-8.66-3.093-1.786-6.905-1.787-10 0l-11.087 6.4c-4.783 2.761-6.422 8.877-3.661 13.66 2.044 3.541 5.926 5.354 9.748 4.943v53.655h-1.087c-5.523 0-10 4.478-10 10s4.477 10 10 10h22.173c5.523 0 10-4.478 10-10s-4.476-10-9.999-10z" />
                      </svg>
                      Ganadora del 1er lugar en{" "}
                      <cite title="Source Title">
                        Ironhack Mexico City Web Dev Hackshow (2019)
                      </cite>
                    </footer>
                  </div>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <Img
                      fluid={query.allFile.edges[1].node.childImageSharp.fluid}
                      alt="app logo"
                      className="projects-img"
                    />
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">La Roma Wars</h3>
                    <p>
                      Febrero 2019 -{" "}
                      <a
                        href="https://github.com/tomasfrancizco/La-Roma-Wars-Videogame"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link al repo
                      </a>
                    </p>
                    <p>
                      Un juego de plataformas creado con HTML Canvas y
                      Javascript.
                      <br />
                      Localizado en el barrio de "La Roma" en la Ciudad de
                      México.
                      <br />
                      Cuenta la historia de una lucha entre personajes típicos
                      de la colonia, teniendo como Jefa final a la niña conocida
                      por ser la voz del camión que recoge electrodomésticos.
                      <br />
                      Cuenta con opción de uno y dos jugadores.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <Img
                      fluid={query.allFile.edges[0].node.childImageSharp.fluid}
                      alt="app logo"
                      className="projects-img"
                    />
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">Denuncia Chilanga</h3>
                    <p>
                      Abril 2019 -{" "}
                      <a
                        href="https://github.com/ironhack-proyecto-2-fullstack-app/denuncia-chilanga"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link al repo
                      </a>
                    </p>
                    <p>
                      Una plataforma en la que los usuarios, luego de
                      registrarse y acceder, pueden realizar denuncias y/u
                      observaciones acerca de situaciones o problemas con los
                      que se cruzan en la ciudad.
                      <br />
                      El objetivo es generar conciencia y un sentido de
                      pertenencia a la comunidad, impulsando de esta manera el
                      cuidado de los espacios comunes.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <Img
                      fluid={query.allFile.edges[4].node.childImageSharp.fluid}
                      alt="app logo"
                      className="projects-img"
                    />
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">Pomodoro</h3>
                    <p>
                      Junio 2020 -{" "}
                      <a
                        href="https://github.com/tomasfrancizco/pomodoro"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link al repo
                      </a>
                    </p>
                    <p>
                      Una simple web app con un cronómetro para aplicar la
                      técnica Pomodoro.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <Img
                      fluid={query.allFile.edges[2].node.childImageSharp.fluid}
                      alt="app logo"
                      className="projects-img"
                    />
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">Javascript Calculator</h3>
                    <p>
                      Julio 2020 -{" "}
                      <a
                        href="https://github.com/tomasfrancizco/Javascript-calculator"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link al repo
                      </a>
                    </p>
                    <p>
                      Una calculadora con diseño neomorfista y funcionalidad con
                      Javascript.
                    </p>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <div className="uk-hidden@s uk-light">
            <a
              className="uk-position-center-left uk-position-small"
              href="#"
              uk-slidenav-previous="true"
              uk-slider-item="previous"
            ></a>
            <a
              className="uk-position-center-right uk-position-small"
              href="#"
              uk-slidenav-next="true"
              uk-slider-item="next"
            ></a>
          </div>

          <div className="uk-visible@s">
            <a
              className="uk-position-center-left-out uk-position-small"
              href="#"
              uk-slidenav-previous="true"
              uk-slider-item="previous"
            ></a>
            <a
              className="uk-position-center-right-out uk-position-small"
              href="#"
              uk-slidenav-next="true"
              uk-slider-item="next"
            ></a>
          </div>
        </div>

        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
      </div>
    </div>
  )
}

export default Projects
