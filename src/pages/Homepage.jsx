import Footer from "../components/Footer";
import HomePageHeader from "../components/HomePageHeader";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";

const cards = [
  {
    image:
      "https://somosmuyperros.com/wp-content/uploads/2017/02/Pit-Bull-Terrier.jpg",
    title: "Amor de perro",
    description: "El mejor amigo del hombre.",
  },
  {
    image:
      "https://www.ngenespanol.com/wp-content/uploads/2022/12/cual-es-el-origen-del-arbol-de-navidad-y-como-se-hizo-una-costumbre.jpg",
    title: "¡Feliz Navidad!",
    description: "Que tengas unas felices fiestas.",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Dorada_Piwo.JPG/1200px-Dorada_Piwo.JPG",
    title: "Haz un parón!",
    description: "La cerveza de Tenerife.",
  },
  {
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/cnne-1699347-gettyimages-2150879290.jpg?q=w_1110,c_fill",
    title: "Hey Jude",
    description: "Nuevo gol del inglés.",
  },
];

const HomePage = () => {
  return (
    <div className="text-center">
      <HomePageHeader />
      <Jumbotron />
      <div className="container">
        <div className="row">
          {cards.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <Card cards={item} />
            </div>
          ))}
          ;
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
