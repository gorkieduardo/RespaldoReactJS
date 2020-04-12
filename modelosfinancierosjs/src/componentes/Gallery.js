import React from "react";
import { MDBContainer, MDBRow, MDBCol,MDBIcon } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox.css";

class LightboxPage extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
    'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(63).jpg',
    'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(66).jpg',
    'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(65).jpg',
    'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(67).jpg','https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(68).jpg',
    'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(64).jpg',
    'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(69).jpg',
    'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(59).jpg',
    'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(70).jpg'
  ]
}

renderImages = () => {
  let photoIndex = -1;
  const { images } = this.state;

return images.map(imageSrc => {
  photoIndex++;
  const privateKey = photoIndex;
  return (
    <MDBCol md="4" key={photoIndex}>
      <figure>
        <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={()=>
        this.setState({ photoIndex: privateKey, isOpen: true })
        }
        />
      </figure>
    </MDBCol>
    );
  })
}

render() {
const { photoIndex, isOpen, images } = this.state;
  return (
      <MDBContainer className="mt-5">
      
        <h2 className="font-weight-bold my-5 text-center">
        <MDBIcon icon="line-chart" size="1.5x" className="blue-text"/>
        Matemáticas Financieras en imágenes
        </h2>
        <div className="mdb-lightbox">
          <MDBRow>
            {this.renderImages()}
          </MDBRow>
        </div>
        {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          imageTitle={photoIndex + 1 + "/" + images.length}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length
            })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default LightboxPage;