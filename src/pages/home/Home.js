import NavBar from "../../components/NavBar.component";
import Card from "../../components/Card.component";
import Footer from "../../components/Footer.component";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="container-card">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  )
}