import './index.css'
import Description from '../Description'
import RegistrationForm from '../RegistrationForm'

const Services = () => (
  <>
    <Description />
    <div className="min-container">
      <h1>Services</h1>
      <div className="color">
        <div className="card-container">
          <h1>Art Sales</h1>
          <p className="des">
            Display a gallery of available artworks for purchase, allowing
            visitors to browse, select, and buy art directly through the website
          </p>
        </div>
        <div className="card-container">
          <h1>Custom Art Commissions</h1>
          <p className="des">
            Highlight the option for customers to request and commission custom
            artwork, with details on the process and pricing.
          </p>
        </div>
        <div className="card-container">
          <h1>Art Rental</h1>
          <p className="des">
            Showcase any rental services, where individuals or businesses can
            lease artwork for temporary display.
          </p>
        </div>
        <div className="card-container">
          <h1>Art Consulting</h1>
          <p className="des">
            Promote art advisory services for individuals or organizations
            seeking guidance in art selection and investment
          </p>
        </div>
        <div className="card-container">
          <h1>Art Restoration and Conservation</h1>
          <p className="des">
            Describe the art restoration and conservation services offered,
            emphasizing expertise in preserving valuable pieces
          </p>
        </div>
        <div className="card-container">
          <h1>Framing and Display</h1>
          <p className="des">
            Present framing options and display services to enhance the
            presentation of art in various settings.
          </p>
        </div>
        <div className="card-container">
          <h1>E-commerce Platform</h1>
          <p className="des">
            Integrate an e-commerce platform for online sales, including
            features for secure transactions, reviews, and tracking
          </p>
        </div>
      </div>
    </div>
    <RegistrationForm />
  </>
)

export default Services
