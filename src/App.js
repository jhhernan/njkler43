import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor(){
    super();
    this.state = {
      query: "",
    }
  }

  handleQuery = (event) => {
    this.setState({
      query: event.target.value,
    })
  }

  render() {
    let modPosts=posts.filter(post => (post.title.toLowerCase().includes(this.state.query.toLowerCase())));
    return (
      <div>
        <div className="filter">
          <input value={this.state.query} onChange={this.handleQuery} type="text" placeholder="Ingresa el término de búsqueda" />
        </div>
        <ul>
          {modPosts.map((post,idx)=>
            <li key={idx}>
              <a href={post.url}><img src={post.image } /></a>
              <p>{ post.title }</p>
            </li>          
          )}
        </ul>
      </div>
    )
  }
}


export default App


