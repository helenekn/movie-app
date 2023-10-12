import React from 'react';

class InputSearch extends React.Component {
    state = { search: '', type: 'all' }

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter = (e) => {
        this.setState(() => ({ type: e.target.dataset.type }), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        });
        
    }

    render() {
        return <div className="row">
            <div className="input-field">
                <input id="email_inline"
                    type="search"
                    className="validate"
                    placeholder="Enter movie title"
                    value={this.state.search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                    onKeyDown={this.handleKey} />

                <button onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
            </div>
            <label className='label-radio'>
                <input className="with-gap" 
                type="radio" 
                name="type" 
                data-type="all" 
                onChange={this.handleFilter} 
                checked={this.state.type === 'all'} />
                <span>All</span>
            </label>
            <label className='label-radio'>
                <input className="with-gap"
                    type="radio" name="type"
                    data-type="movie"
                    onChange={this.handleFilter}
                    checked={this.state.type === 'movie'} />
                <span>Movies</span>
            </label>
            <label className='label-radio'>
                <input className="with-gap"
                    type="radio"
                    name="type"
                    data-type="series"
                    onChange={this.handleFilter}
                    checked={this.state.type === 'series'} />
                <span>Series</span>
            </label>
        </div>
    }
}
export { InputSearch };