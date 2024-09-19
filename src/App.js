import "./App.css";
import menu1 from "./images/menu1.jpg"
import menu2 from "./images/menu2.jpg"
import menu3 from "./images/menu3.jpg"
import menu4 from "./images/menu4.jpg"
import pizza1 from "./images/pizza1.jpg"
import pizza2 from "./images/pizza2.jpg"
import pizza3 from "./images/pizza3.jpg"
import pizza4 from "./images/pizza4.jpg"
import pizza5 from "./images/pizza5.jpg"
import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <div className="app">

      <nav className="navbar navbar-expand-lg navbar-dark all">
        <a className="navbar-brand" href="#">Pizza House</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Contact</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><FiSearch className="search-icon" /></button>
          </form>
        </div>
      </nav>

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={pizza1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pizza2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pizza3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
        <div className="carousel-title">
          <h1>Neapolian Pizza</h1>
          <p>If you are looking for a traditional pizza the Neapolian is the best option!</p>
        </div>
      </div>

      <div className="menu-card all">
        <h1 className="menu-title">Our Menu</h1>
        <div class="card-group">
          <div class="card">
            <div className="sale">Sale</div>
            <img src={menu1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Margherita Pizza</h5>
              <p class="card-text"><span className="older-price"> $40.00</span> <span className="new-price"> $24.00</span></p>
              <button type="button" class="btn-dark btn-lg btn-block">Buy</button>
            </div>
          </div>
          <div class="card">
            <img src={menu2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Mushroom Pizza</h5>
              <p class="card-text">$40.00</p>
              <button type="button" class="btn-lg btn-block btn-dark">Buy</button>
            </div>
          </div>
          <div class="card">
            <div className="sale">New</div>
            <img src={menu3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Hawaiian Pizza</h5>
              <p class="card-text">$40.00</p>
              <button type="button" class="btn-lg btn-block btn-dark">Buy</button>
            </div>
          </div>
          <div class="card">
            <div className="sale">Sale</div>
            <img src={menu4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Pesto Pizza</h5>
              <p class="card-text"><span className="older-price">$40.00</span> <span className="new-price"> $30.00</span></p>
              <button type="button" class="btn-lg btn-block btn-dark">Buy</button>
            </div>
          </div>
        </div>
      </div>

      <div className="form-footer all">
        <h1 className="form-title">Book Your Table</h1>
        <form class="needs-validation" novalidate>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <input type="text" class="form-control" id="validationTooltip03" placeholder="Your Name *" required />
              <div class="invalid-tooltip">
                Please provide a Name.
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <input type="email" class="form-control" id="validationTooltip05" placeholder="Your Email *" required />
              <div class="invalid-tooltip">
                Please provide a valid mail.
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <select class="custom-select" id="validationTooltip04" required>
                <option selected disabled value="">Select a Service</option>
                <option>...</option>
              </select>
              <div class="invalid-tooltip">
                Please select a Service.
              </div>
            </div>
            <div class="col-md-12 mb-3 mt-3 text-area">
              <textarea type="text" className="form-control form-control-lg text-footer" id="validationTooltip03" placeholder="Please write a comment" required />
            </div>
          </div>
          <button className="form-btn btn-warning" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default App;
