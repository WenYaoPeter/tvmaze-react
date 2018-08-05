class Search extends React.Component {
   constructor(props){
      super(props);
      this.changeHandler = this.changeHandler.bind(this);
      this.clickHandler = this.clickHandler.bind(this);
      
   }

   state ={
      input: "",
      results: false,
      query: ""
   }

   changeHandler(event){
      this.setState (
         {
            input: event.target.value,
            query: this.state.input
         }
      )
      console.log("query", this.state.query)
   }

   clickHandler(){
      this.setState (
         {
            input: "",
            results: true
         }
      )
      
   }

   render(){

      let results;
      
      if (this.state.results) {
         results = <Results />
      } else {
         results = <div></div>
      }

      return(
         <div id="search">
            <input onChange={this.changeHandler} value={this.state.input}/>
            <button type="button" onClick={this.clickHandler}>Search</button>
            {results}
         </div>
      )
   }
}

class Results extends React.Component {
   render(){
      // console.log("this is results", results[0].score)
      // let testing = results[0];
     // console.log(this.state.results);
      return(
         <div>
           searched
         </div>
      )
   }
}



class Home extends React.Component {
   render() {
     return (
       <div id="home">
         <h1>Tv Maze</h1>
         <Search />
       </div>
     )
   }
}


ReactDOM.render(
   <Home/>,
   document.getElementById('root')
);