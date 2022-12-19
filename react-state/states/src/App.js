import React,{Component} from 'react'
// import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props)
  this.state = {
    Person : { fullName:"Idowu Toluwani Bukola", bio:"23 years old, Frontend Developer", imgSrc:"wanny.JPG" , profession:"Makeup Artist"},
    show : true,
    count: 0
  };
  } 
  render(){
    const  count  = this.state.count
    return (
    <div className="App">
      {
        this.state.show?
      <div>
        <h1>{this.state.Person.fullName}</h1>
        <h3>{this.state.Person.bio}</h3>
        <h3>{this.state.Person.profession}</h3>
        <div><img src={this.state.Person.imgSrc} alt={"Nysc"} width={250} height={250}></img></div>
        <h5>Time interval : {count}</h5>
      </div>
      :null
      }
      <button onClick={()=>this.setState({...this.state,show:!this.state.show})} id="myButton" >Hide/Show Data</button>
    </div>)
  }

  componentDidMount() {
    this.myInterval = setInterval (()=>{
      this.setState(prevState => ({
        count: prevState.count + 1
    }))
  }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

}


export default App;