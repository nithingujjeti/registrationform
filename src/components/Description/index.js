import './index.css'
import Header from '../Header'

const Description = () => (
  <>
    <Header />
    <div className="main">
      <div>
        <p className="paragraph">
          "Art is the language of the heart, a silent conversation that
          transcends borders and speaks to the soul."
        </p>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dcklprkyl/image/upload/v1697367487/istockphoto-1483773680-1024x1024_smc0yl.jpg"
          alt="work"
          className="image"
        />
      </div>
    </div>
  </>
)

export default Description
