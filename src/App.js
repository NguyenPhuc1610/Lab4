import { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";

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

const products = [
  {
    name: 'Margherita Pizza',
    image: menu1,
    Price: 40,
    salePrice: 24,
  },
  {
    name: 'Mushroom Pizza',
    image: menu2,
    price: 40,
  }, {
    name: 'Hawaiian Pizza',
    image: menu3,
    price: 40,
  },
  {
    name: 'Pesto Pizza',
    image: menu4,
    price: 40,
    salePrice: 30
  },
]


function App() {

  const [cart, setCart] = useState([]);
  const [flag, setFlag] = useState(false);
  const [quantityProduct, setQuantityProduct] = useState(0);

  console.log(cart);

  const sumQuantityProduct = (arr) => {
    return arr.reduce((quantity, item) => {
      return quantity = quantity + item.count;
    }, 0);
  }

  useEffect(() => {
    const quantity = sumQuantityProduct(cart);
    setQuantityProduct(quantity)
  }, [cart]);

  const addProductToCart = (product) => {
    if (!product) return null;
    if (cart.indexOf(product) !== -1) {
      const index = cart.indexOf(product);
      const arr = [...cart];
      arr[index].count = arr[index].count + 1;
      setCart(arr);
    }
    else {
      const arr = [...cart];
      product.count = 1;
      arr.push(product);
      setCart(arr);
    }

  };

  const handleIncrease = (product) => {
    const index = cart.indexOf(product);
    const arr = [...cart];
    arr[index].count = arr[index].count + 1;
    setCart(arr);
  };

  const handleDecrease = (product) => {
    const index = cart.indexOf(product);
    const arr = [...cart];
    arr[index].count = arr[index].count - 1;

    const newArr = arr.filter((product) => {
      return product.count !== 0;
    });

    console.log('arr', newArr)
    setCart(newArr);
  };


  const handleBuy = (product) => {
    addProductToCart(product);
  };

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
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
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
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><FiSearch className="search-icon" /></button>
          </form>
          <button type="button" className="btn btn-primary ml-2" data-toggle="modal" data-target="#exampleModal">
            Items: <span className="badge badge-secondary badge-dark">{quantityProduct}</span>
          </button>

        </div>
      </nav>

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pizza1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pizza2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pizza3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pizza4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pizza5} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </button>
        <div className="carousel-title">
          <h1>Neapolian Pizza</h1>
          <p>If you are looking for a traditional pizza the Neapolian is the best option!</p>
        </div>
      </div>

      <div className="menu-card all">
        <h1 className="menu-title">Our Menu</h1>
        <div className="card-group">

          {products.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="sale">New</div>
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text"><span className="older-price">${item.price}.00</span>
                    {item.salePrice ? (<span className="new-price"> ${item?.salePrice}.00</span>) : <></>}
                  </p>
                  <button className="btn-lg btn-block btn-dark" onClick={() => { handleBuy(item) }}>Buy</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="form-footer all">
        <h1 className="form-title">Book Your Table</h1>
        <form className="needs-validation" noValidate>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <input type="text" className="form-control" id="validationTooltip03" placeholder="Your Name *" required />
              <div className="invalid-tooltip">
                Please provide a Name.
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <input type="email" className="form-control" id="validationTooltip05" placeholder="Your Email *" required />
              <div className="invalid-tooltip">
                Please provide a valid mail.
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <select className="custom-select" id="validationTooltip04" required>
                <option selected disabled value="">Select a Service</option>
                <option>...</option>
              </select>
              <div className="invalid-tooltip">
                Please select a Service.
              </div>
            </div>
            <div className="col-md-12 mb-3 mt-3 text-area">
              <textarea type="text" className="form-control form-control-lg text-footer" id="validationTooltip03" placeholder="Please write a comment" required />
            </div>
          </div>
          <button className="form-btn btn-warning" type="submit">Send Message</button>
        </form>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body container">
              {cart.map((product, index) => {
                return (
                  <div className='row cart-item' key={index}>
                    <div className="card mb-3 col-md-4 cart-item-card">
                      <div className="row no-gutters cart-item-detail ">
                        <div className="col-md-3">
                          <img src={product.image} alt="..." />
                        </div>
                        <div className="col-md-9">
                          <div className="card-body">
                            <p className="card-title">{product.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='cart-item-addition-quantity col-md-3'>{product.count}</div>
                    <div className='cart-item-addition col-md-3'>
                      <button className='cart-item-addition-increase btn btn-primary' onClick={() => { handleIncrease(product) }}> + </button>
                      <button className='cart-item-addition-decrease btn btn-danger' onClick={() => { handleDecrease(product) }}> - </button>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
