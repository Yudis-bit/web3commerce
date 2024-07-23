import React from 'react';
import '../index.css';
import product1 from '../images/r.png';
import product2 from '../images/q.png';
import product3 from '../images/e.png';
import product4 from '../images/w.png';
import product5 from '../images/t.png';
import product6 from '../images/y.png';
import product7 from '../images/7.png';
import product8 from '../images/8.png';
import product9 from '../images/9.png';
import product10 from '../images/10.png';
import product11 from '../images/11.png';
import product12 from '../images/12.png';
import product13 from '../images/13.png';
import product14 from '../images/14.png';
import product15 from '../images/15.png';
import product16 from '../images/16.png';
import product17 from '../images/17.png';
import product18 from '../images/18.png';
import product19 from '../images/19.png';
import product20 from '../images/20.png';

const HomePage = ({ web3, account, adminAddress, handleShowModal }) => {
  const handleBuy = async () => {
    if (!web3 || !account) {
      handleShowModal(); // Tampilkan modal login jika belum login
      return;
    }

    const amount = web3.utils.toWei('5', 'ether'); // 5 MATIC dalam Wei

    try {
      const balance = await web3.eth.getBalance(account);
      const balanceInMatic = web3.utils.fromWei(balance, 'ether'); // Konversi saldo dari Wei ke MATIC

      if (parseFloat(balanceInMatic) < 5) {
        console.error("Saldo MATIC tidak mencukupi");
        alert('Saldo MATIC tidak mencukupi untuk melakukan transaksi!');
        return;
      }

      console.log('Memulai transaksi');
      console.log('Dari akun:', account);
      console.log('Ke akun:', adminAddress);
      console.log('Jumlah (dalam Wei):', amount);

      const transactionParameters = {
        from: account,
        to: adminAddress,
        value: amount,
        gas: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'gwei')),
      };

      console.log('Parameter transaksi:', transactionParameters);

      await web3.eth.sendTransaction(transactionParameters);
      alert('Transaksi berhasil!');
    } catch (error) {
      console.error("Transaksi gagal", error);
      alert('Transaksi gagal! Periksa konsol untuk detail.');
    }
  };


  return (
    <div className="home container-fluid">
      <div className="hero-section container-fluid">
        <div className="container text-center">
          <h1 className="display-4">Welcome to DisByte</h1>
          <p className="lead">The decentralized marketplace for unique designs</p>
          <a className="btn btn-primary btn-lg" href="/" role="button">Explore Designs</a>
        </div>
      </div>
      <div className="products-section mt-5 container-fluid">
        <div className="container">
          <h2 className="judul section-title">Digital Product</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src={product1} className="card-img-top" alt="Product 1" />
                <div className="card-body">
                  <h5 className="card-title">Sci-fi</h5>
                  <p className="card-text">a sci-fi male adventurer pilot in a cinematic pose in front of a massive</p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={product2} className="card-img-top" alt="Product 2" />
                <div className="card-body">
                  <h5 className="card-title">Cyborg</h5>
                  <p className="card-text">Clocks ticking, time and tide, futuristic cyborg modern technology</p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={product3} className="card-img-top" alt="Product 3" />
                <div className="card-body">
                  <h5 className="card-title">Superhero</h5>
                  <p className="card-text">a white American male superhero in a superhero outfit with short red hair </p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={product4} className="card-img-top" alt="Product 4" />
                <div className="card-body">
                  <h5 className="card-title">Barbarian</h5>
                  <p className="card-text">male satyr barbarian character from dungeons and dragons, aries horns</p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src={product5} className="card-img-top" alt="Product 5" />
                <div className="card-body">
                  <h5 className="card-title"> Nature and Technology</h5>
                  <p className="card-text">depicts the face of a woman covered by both organic elements</p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={product6} className="card-img-top" alt="Product 6" />
                <div className="card-body">
                  <h5 className="card-title">NSX concept car</h5>
                  <p className="card-text">Combine A 2040 futuristic wide-body Acura NSX concept car with a 2025</p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={product7} className="card-img-top" alt="Product 7" />
                <div className="card-body">
                  <h5 className="card-title">Avant-Garde Cyber Couture</h5>
                  <p className="card-text">Model adorned in a futuristic and avant-garde outfit that combines</p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={product8} className="card-img-top" alt="Product 8" />
                <div className="card-body">
                  <h5 className="card-title">Vibrant Water Splash</h5>
                  <p className="card-text">The splash is beautifully illuminated with vibrant colors of purple</p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src={product9} className="card-img-top" alt="Product 9" />
                <div className="card-body">
                  <h5 className="card-title">Ancient Egyptian Cat</h5>
                  <p className="card-text"> a black cat adorned with ornate gold jewelry, including a collar, necklaces</p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={product10} className="card-img-top" alt="Product 10" />
                <div className="card-body">
                  <h5 className="card-title">Vintage Car in Bloom</h5>
                  <p className="card-text">showcases a classic red convertible car parked on a street</p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={product11} className="card-img-top" alt="Product 11" />
                <div className="card-body">
                  <h5 className="card-title">Monks at the Monastery</h5>
                  <p className="card-text">group of monks in red robes walking towards a distant monastery</p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={product12} className="card-img-top" alt="Product 12" />
                <div className="card-body">
                  <h5 className="card-title">Regal Dinosaur</h5>
                  <p className="card-text">This whimsical and imaginative image depicts a dinosaur dressed</p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src={product13} className="card-img-top" alt="Product 13" />
                <div className="card-body">
                  <h5 className="card-title">Abstract Pink and Black</h5>
                  <p className="card-text">Modern abstract painting with horizontal stripes in varying shades</p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={product14} className="card-img-top" alt="Product 14" />
                <div className="card-body">
                  <h5 className="card-title">Neo-Gothic Cat Lady</h5>
                  <p className="card-text">This vibrant, comic-style illustration portrays a young woman </p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={product15} className="card-img-top" alt="Product 15" />
                <div className="card-body">
                  <h5 className="card-title">Futuristic Corridor</h5>
                  <p className="card-text">a mesmerizing corridor with a blue and white checkered pattern</p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={product16} className="card-img-top" alt="Product 16" />
                <div className="card-body">
                  <h5 className="card-title">Neon Musical Note</h5>
                  <p className="card-text">The vibrant pink and purple hues of the neon light create a striking </p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src={product17} className="card-img-top" alt="Product 17" />
                <div className="card-body">
                  <h5 className="card-title">Gourmet Mint Chocolate</h5>
                  <p className="card-text">This mouth-watering image showcases a stack of dark chocolate</p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={product18} className="card-img-top" alt="Product 18" />
                <div className="card-body">
                  <h5 className="card-title">Sunset Over the Fields</h5>
                  <p className="card-text">This picturesque image captures a serene agricultural landscape</p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={product19} className="card-img-top" alt="Product 19" />
                <div className="card-body">
                  <h5 className="card-title">City Under Siege</h5>
                  <p className="card-text">This dramatic image depicts a city engulfed in chaos as helicopters</p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={product20} className="card-img-top" alt="Product 20" />
                <div className="card-body">
                  <h5 className="card-title">Cycling in Paris</h5>
                  <p className="card-text">retro-styled illustration features two bicycles parked along a pink path</p>
                  <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="features" className="features-section">
        <div className="container mt-5">
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" className="bi bi-shield-lock" viewBox="0 0 16 16">
                  <path d="M5.4 2h5.2c.5 0 1 .4 1.1 1l.3 2.8c.1 1.2-.1 2.4-.7 3.5-.6 1.1-1.6 1.9-2.7 2.2-.8.2-1.7.2-2.5 0-1.1-.3-2.1-1.1-2.7-2.2-.6-1.1-.8-2.3-.7-3.5L4.3 3c.1-.5.5-1 1-1z"/>
                  <path d="M8 4.2c.7 0 1.3.6 1.3 1.3v.7H6.7v-.7c0-.7.6-1.3 1.3-1.3z"/>
                  <path d="M7 7.7h2v1H7v-1z"/>
                </svg>
              </div>
              <div>
                <h3 className="fs-2">Secure Transactions</h3>
                <p>Our platform ensures secure transactions using blockchain technology.</p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" className="bi bi-wallet2" viewBox="0 0 16 16">
                  <path d="M3.5 3h9A1.5 1.5 0 0 1 14 4.5V6H2V4.5A1.5 1.5 0 0 1 3.5 3z"/>
                  <path d="M2 7v4.5A1.5 1.5 0 0 0 3.5 13h9a1.5 1.5 0 0 0 1.5-1.5V7H2zm11 3.5a.5.5 0 0 1-.5.5H5.9a1.5 1.5 0 0 1-1.4-1.5c0-.83.67-1.5 1.5-1.5H13v2.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="fs-2">Crypto Payments</h3>
                <p>Accept and make payments in various cryptocurrencies seamlessly.</p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.732.593l4.39-2.256 4.389 2.256c.372.198.81-.149.732-.593l-.83-4.73 3.522-3.356c.329-.314.158-.888-.283-.95l-4.898-.696-2.083-4.253c-.17-.347-.73-.347-.9 0l-2.083 4.253-4.898.696c-.441.062-.612.636-.283.95l3.522 3.356-.83 4.73zM8 12.396l-3.688 1.895.7-3.991-2.937-2.799 4.056-.576L8 2.223l1.869 3.702 4.056.576-2.936 2.8.699 3.99L8 12.396z"/>
                </svg>
              </div>
              <div>
                <h3 className="fs-2">High-Quality Products</h3>
                <p>All digital products are vetted for quality and authenticity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="testimonials mt-5 container-fluid">
        <div className="container">
          <h2 className="section-title">What our customers are saying</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial">
                <p>"Disbyte secure transactions give me peace of mind when buying digital products."</p>
                <h4>- Dika AS</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
                <p>"Paying with cryptocurrency on Disbyte has never been easier or faster. Highly recommended!"</p>
                <h4>- Yudi Riswandi</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
                <p>"The seamless crypto payment options on Disbyte make transactions quick and hassle-free."</p>
                <h4>- Kobeng</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer container-fluid">
        <div className="container text-center">
          <p>&copy; 2024 DesignHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
