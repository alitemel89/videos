import React from 'react';


class SearchBar extends React.Component {
    state = {term: ''};

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
        
    };

    onFormSubmit = (event) => {
        event.preventDefault(); // With this method text in search bar will not disappear after hitting enter.

        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment" style={{marginTop: 10}}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;