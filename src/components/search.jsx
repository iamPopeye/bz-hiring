import React from 'react';

class Search extends React.Component {
 state = {
  input: '',
 }

 handleChange = event => {
  this.setState({
   input: event.target.value
  })
 }

 handleClick = event => {
  alert(`SEARCHING FOR ${this.state.input} ...`)
 }

 render() {
  return (
   <div className='flex justify-center space-x-3 pt-6'>
    <label htmlFor="header-search" />
    <input className='p-2 pr-80 shadow-lg rounded-lg bg-gray-300'
     type='text'
     placeholder={this.state.placeholder}
     onChange={(event => this.handleChange(event))}
    />
    <button className='ml-6 p-2 bg-purple-300 rounded-lg shadow-lg' onClick={(event => this.handleClick(event))}>Search</button>
   </div>
  )
 }
}

export default Search;
