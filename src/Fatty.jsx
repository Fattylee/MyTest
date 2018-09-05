import React, { Component } from 'react';
class Fatty extends Component {
  state = { title: 'my title'  }
  render() { 
    const styles = {
      myHeader: {
        background: 'skyblue',
        color: 'white',
      },
      'myHeader:hover': {
        background: 'red',
        color: 'skyblue',
      }
    }
    return ( 
      <div>
        <input type="text" onChange={this.onChange.bind(this)}/>
        <h1 style={styles["myHeader:hover"]}>Allaahu Akbar! {this.state.title}</h1>
        <h2 className='some-header' onClick={this.onClick.bind(this)}>Some text</h2>
      </div>
     );
  }
  onClick(e) {
    console.log('u clicked!', e.target, this.state.title, this.refs)
  }
  onChange(e) {
    this.setState({title: e.target.value,})
    // this.state.title = e.target.value;
  }
}
 
export default Fatty;