import React from 'react';

class SearchBar extends React.Component {
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    state ={ term: ''};

    onFormSubmit = (event) => {
        event.preventDefault(); //to prevent form from getting submittef automatically

        // console.log(this.state.term)
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                {/* //or we can do
                <form onSubmit={(event)=>this.onFormSubmit(event) className...}> */}
                    <div className="ui field">
                        <label>Image Search</label>
                        {/* we do not use onInputChange() */}
                        <input type="text" value={this.state.term} onChange={(e)=> this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;