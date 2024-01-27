import one from "../image/one.jpg"
import two from "../image/two.jpg"
import three from "../image/three.jpg"

function Products(){
    return(
      <div className="image-container">
        <div className="image">
          <img src={one} alt=""/>
          <p>Fogg Wood Extreme,Eau de Parfum,</p>
          <p>100ml</p>
        </div>
        <div className="image">
          <img src={two} alt=""/>
          <p>Fogg Wood Extreme,Eau de Parfum,</p>
          <p>100ml</p>
        </div>
        <div className="image">
          <img src={three} alt=""/>
          <p>Fogg Wood Extreme,Eau de Parfum,</p>
          <p>100ml</p>
        </div>
      </div>
    )
  }

  export default Products