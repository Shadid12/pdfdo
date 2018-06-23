import React, { Component } from 'react';
import './App.css';

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Button from '@material-ui/core/Button';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      highlight: 'p1-high'
    }
  }


  printDocument = () => {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'png', 0, 0);
        pdf.save("download.pdf");
      });
  }

  render() {
    return (
      <div>
        <div id="divToPrint" className="toPrint">
          <h1>Hello PDF</h1>
          <div className="para-holder">
            <p className='para'>
              Lorem Ipsum is simply dummy text of the printing and 
            </p>
            <p className={`para ${this.state.highlight}`}>
              Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. 
            </p>
          </div>
        </div>
        <div className="buttons">
          <div className='button'>
            <Button variant="contained" 
                    onClick={this.printDocument}
                    >
              Print pdf
            </Button>
          </div>
          <div className='button'>
            <Button variant="contained" 
                    color="primary"
                    onClick={() => {
                      if(this.state.highlight === 'p1-high'){
                        this.setState({highlight: ''})
                      }else{
                        this.setState({highlight: 'p1-high'})
                      }
                    }}
                    >
              Highlight
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
