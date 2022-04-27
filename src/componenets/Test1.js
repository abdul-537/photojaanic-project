import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from '../componenets/Image1.jpg';
import Image2 from '../componenets/Image2.jpg';
import Image3 from '../componenets/Image3.jpg';
import Image4 from '../componenets/Image4.jpg';
import Image5 from '../componenets/Image5.jpg';
import "./Style.css";
import { Button } from 'react-bootstrap';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
// import Button from '@material-ui/core/Button';






function Test1() {
  const [size, setSize] = useState("6x6");

  const sizeChanger = (selectedSize) => {
    setSize(selectedSize)
  }

  const getImageBySize = (selectedSize) => {
    switch (selectedSize) {
      case "6x6":
        return Image1
      case "12x12":
        return Image2
      case "12x18":
        return Image3
      case "18x12":
        return Image4
      case "16x20":
        return Image5
    }
  }

  

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <nav class="navbar Header navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Photojaanic</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>

              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contact</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <div>
        <h1 className='heading-1 text-center'> Canvas Lite </h1>
        <Carousel className='main-slider'>
          <div>
            <img src={Image2} />

          </div>
          <div>
            <img src={Image5} />

          </div>
          <div>
            <img src={Image3} />

          </div>
          <div>
            <img src={Image4} />

          </div>
        </Carousel>
        <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className='img-size'>
        <div className="row">
        <div className="col-md-4">
        <div className='size'>
              <input type="radio" id="huey" name="drone" checked={size === "6x6"} onClick={(e) => sizeChanger("6x6")} />
              <label htmlFor="huey">6"x 6"  |₹599</label>
            </div>

            <div>
              <input type="radio" id="dewey" name="drone" checked={size === "12x12"} onClick={(e) => sizeChanger("12x12")} />
              <label htmlFor="dewey">12"x12" |₹799</label>
            </div>

            <div>
              <input type="radio" id="louie-1" name="drone" checked={size === "12x18"} onClick={(e) => sizeChanger("12x18")} />
              <label htmlFor="louie-1"> 12"x 18" |₹999</label>
            </div>

            <div>
              <input type="radio" id="louie-2" name="drone" checked={size === "18x12"} onClick={(e) => sizeChanger("18x12")} />
              <label htmlFor="louie-2">18"x 12"  |₹799</label>
            </div>

            <div>
              <input type="radio" id="louie-3" name="drone" checked={size === "16x20"} onClick={(e) => sizeChanger("16x20")} />
              <label htmlFor="louie-3">16"x 20" |₹1,399</label>
            </div>

        </div>
        <div className="col-md-4">

        <div>
          
          <img src={ getImageBySize(size) } alt="" />
        </div>

        </div>

          
        </div>

        <div className='text2 text-center'>
          <h2 >GET 20% Offer</h2>
          <p>Use Code:FBGC</p>




          <Button variant="outlined"
            className="create" onClick={handleClickOpen}>
            CREATE
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>

            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Hello
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>

      </div>
  </div>





    </div>
  )
}

export default Test1