import luna from './images/luna.jpg';
import './style.css';
import './styleCat.css';

const About = () => {
  return (
    <div className="container">
      <section className="container__Name">
        <h1 className="container__owner">Yulany Andrea Munévar</h1>
      </section>

      <section className="container__description">
        <p className="container__paragrahp">Soy ingeniera de sonido y soy muy apasionada por la
          música, amo tocar piano, guitarra y ukelele .
          Ahora tambien hago parte del mundo de la tecnologia
          y me encuentro en preparación para ser algún dia una
          desarrolladora de software. Con esto me
          gustaria aprender programación para video juegos y tambien
          enfocado en programas para la manipulación
          del sonido tales como Protools, Cubase, Logic entre otros.
          Tambien soy apasionada por el diseño sonoro y se que en el mundo de la
          programación puede existir un equilibrio entre ambas areas.
        </p>
      </section>
      <section className="container__myPicture">
        <img src={luna} alt="" className="container__imageMe" />
      </section>
      <section className="container__learn">
        <h3 className="container__title">Cosas que he aprendido</h3>
        <ol type="text/css" className="container__list">
          <li className="container_list-padding">He aprendido hacer paciente conmigo misma cuando se aprende algo nuevo</li>
          <li className="container_list-padding">He aprendido mucho más sobre Javascript y React </li>
          <li className="container_list-padding">Ha sido muy dificil pero aun sigo tratando de entender Create context y Redux</li>
          <li className="container_list-padding">He conocido personas que de verdad estan dispuestas ayudarte aprender, algo que
            no se encuentra facilmente.
          </li>
        </ol>
      </section>
      <section className="container__data">
        <p className="container__email"><strong>Correo:</strong> andra_852@hotmail.com</p>
        <a href="https://github.com/Yulanyandrea?tab=repositories" target="_blank" rel="noreferrer">Github</a>
      </section>

      {/* This code was made by : https://codingartistweb.com/ */}
      <section className="animation">
        <div className="containerCat">
          <div className="kitty">
            <div className="face">
              <div className="ear" />
              <div className="eye" />
              <div className="mouth">
                <div className="nose" />
                <div className="whisker-1" />
                <div className="whisker-2" />
              </div>
              <div className="body">
                <div className="hand">
                  <div className="hand-l" />
                  <div className="hand-r" />
                </div>
              </div>
              <div className="tail" />
            </div>
            <div className="laptop">
              <div className="logo" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
export default About;
