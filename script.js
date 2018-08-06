class Search extends React.Component {
   constructor(props){
      super(props);
      this.changeHandler = this.changeHandler.bind(this);
      this.clickHandler = this.clickHandler.bind(this);
      console.log("here is ", props);
   }

   state ={
      query: "",
      input: "",
      results: false,
      hasSearched: false
   }

   changeHandler(event){
      this.setState (
         {
            input: event.target.value,
            query: event.target.value
         }
      )
   }

   clickHandler(event){
      this.setState (
         {
            //query: event.target.value,
            input: "",
            //results: true,
            hasSearched: true
         }
      )
      
   }

   render(){
      console.log('hi');
      console.log("query inside render", this.state.query);
      let results;
      
      if (this.state.hasSearched) {

      console.log("query inside render ifelse", this.state.query); 
         results = <Results queryProps={this.state.query}/>
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
  constructor(props){
    super(props);
    // console.log("Results", props.queryProps)
  }

  render(){
    // search for movies titles that contain query string
    // console.log("results.js", results[0].show.name)
    // console.log("this.props.queryProps, outside map ", this.props.queryProps);
    // console.log("typeof girls", typeof results[0].show.name);
    // console.log("typeof this.props.queryProps ", typeof this.props.queryProps);
    // console.log(results)
    
    let queryString = this.props.queryProps.charAt(0).toUpperCase()+this.props.queryProps.substr(1); // uppercase first letter.
    // console.log(queryString);
    let searchResults = results.map(function(result) {
      if (result.show.name.includes(queryString)) {
        return <li>{result.show.name}</li>
      } else {
        console.log("blehhhh");
      }
    });
   
      return(
         <div>
           <ul>
             {searchResults}
            </ul>
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