import React,{Component} from 'react';
import './App.css';

class App extends Component{
   handleSubmit=async event=> {
    var a=document.getElementById('url').value;
    if(a)
    {
    const url = a;
    const response = await fetch(url);
    const data = await response.json();
    var newdata=JSON.stringify(data);
    console.log(newdata);
    document.getElementById('printapidata').innerHTML=newdata;
    }
    else{
      alert("Exter api url inside the text box");
    }
    }
    render(){
      return(
        <div>
          
          
          <div className="container">
          <div className="row">
            <div className="col-12">
             <center>
             <h1>Check your Api</h1>
             <br/>
             </center>
            </div>
            </div>
  <div className="row">
    <div className="col-lg-3 .col-sm-12">
    <input type="text" id="url" placeholder="Enter your api link"/>
    <br/>
    <input type="submit" onClick={this.handleSubmit} id="but" />
    </div>
    <br/><br/>
    <br/><br/>
    <div className="col-lg-9 .col-sm-12"  id="printapidata">
      
    </div>
  </div>
</div>
        </div>
      )
    }
}

export default App;
