import React, { Component } from 'react';
import './App.css';
import ProductItem from './ProductItem';
import Fatty from './Fatty';
import News from './News';
import mapopo from './news.json';

const products = [
  {
    name: 'apple',
    price: 70,
  },
  {
    name: 'ulefone',
    price: 30,
  },
];

localStorage.setItem('products', JSON.stringify(products));


export default class App extends Component {
  state = {
    products: [],
    sex: 'sex default',
    feeds: mapopo,
    baba: 'baba'
  }
  getProducts() {
    this.setState({
      products: JSON.parse(localStorage.getItem('products')),
    })
  }
  componentWillMount() {
   this.getProducts(); 
  }
  render() {
    return (
      <div className='App'>
        <input onChange={this.onChangeSex}/>
        <h1>Product Manager</h1>
        {this.state.products.map((pro, i) => {
          return (
           <ProductItem 
           key={i}
           {...pro}
           onDelete={this.onDel}
           />
          )
        })}
        <Fatty name='abu' ref='ok' />
        <News sex={this.state.sex} 
        feeds={this.state.feeds}
        self={this}
        change={this.state.baba}/>
      </div>
    )
  }
  onChangeSex = (e) => {
    // console.log(e.target.value, this);
    // this.setState({sex: e.target.value})
  }
  onDel = (name) => {
   return ('delete me', name);
  }
}








// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// const App = () => {
//   <Router>
//     <div>
//       <ul>
//         <li><Link to='/'>Home</Link></li>
//         <li><Link to='/about'>About</Link></li>
//         <li><Link to='/topics'>Topics</Link></li>
//       </ul>

//       <hr />

//       <Route exact path='/' component={Home} />
//       {/* <Route path='/about' component={About} />
//       <Route path='/topics' component={Topics} /> */}
//     </div>

//   </Router>
// }

// const Home = () => {
//     <div>
//       <h2>Home</h2>
//     </div>
// }
// export default App;





// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         hi
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react';
// import logo from './logo.svg';
// // import './App.css';
// import PropType from 'prop-types';

// const propTypes = {
//   tit: PropType.string.isRequired,
// }
// const defaultProps = {
//   tit: 'this is a default prop',
// }
// class App extends Component {
//   state = {
//     title: 'This is a title',
//     body: {name: 'subName'},
//     name: true,
//     isTitle: true,
//   }
//   componentWillMount(){
//     console.log('component will mount')
//   }
//   componentDidMount(){
//     console.log('component did mount');
//   }
//   componentWillUpdate(newProp, newState){
//     console.log(this.props, this.state,newProp,newState);
//   }
//   componentDidUpdate(newProp, newState){
//     console.log(this.props, this.state,newProp,newState);
//   }
//   shouldComponentUpdate(pr,st) {
//     return true;
//   }
//   renderTitle() {
//     if (!this.state.isTitle) return undefined;
//     console.log(this)
//     return (<h2>This is my h2 header</h2>);
//   }
//   render() {
//     const list = [
//       'name',
//       'age',
//       'sex',
//     ]
//     return (
//       <div className="App">
//         {this.renderTitle()}
//         <h1>{this.state.title}</h1>
//         <ul>
//           {list.map( (l,i) => (<li onClick={this.onClick} key={i} style={{color: 'red', cursor: 'pointer',padding: '20px'}}>{l}</li>))}
          
//         </ul>
//         <button onClick={this.changeTitle}>Change Title</button>
//         <p ref={ n => this.pa = n} >Get this ref</p>
//         <MyComponent tit={this.state.body.name}
//         mark={this.onClick}
//         />
//         <button onClick={this.pa}>Change prop</button>
//         <input type='checkbox' name='myText'  
//         onChange={this.updateName} 
//         checked={this.state.name} />
//       </div>
//     );
//   }
//   pa = () => {
//     this.setState({body: {name: 'sex'}})
//   }
//   changeTitle = e => {
//     this.setState({
//       title: 'This is a new title',
//       // body: 'my body',
//     })
//   }
//   updateName = (e) => {
//     this.setState({
//       // name: e.target.value,
//       name: !this.state.name
//     })
//   }

//   onClick = (e) => {
//     // alert(e.target.textContent);
//     // alert(this.pa.innerHTML);
//     // e.target.textContent = this.pa.textContent;
//     alert('okay');
//   }
// }

// class MyComponent extends Component {
//   render() {
//     const { tit, mark } = this.props;
//     console.log(mark)
//     return (
//       <div>
//         <h1>This is a componeent that is dropped into another component</h1>
//         <p>{tit}</p>
//         <button onClick={mark}>Click me here</button>
//       </div>
//     )
//   }
// }
// MyComponent.propTypes = propTypes;
// MyComponent.defaultProps = defaultProps;

// export default App;
