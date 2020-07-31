import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component{
state = { images : []}

    // async onSearchSubmit(term){
        //we need to convert it into arrow function coz we got same error on 'this' object
    onSearchSubmit = async (term) =>{
        // console.log(term);
        const response = await unsplash.get('/search/photos',{
            params:{ query : term},
        });

        // console.log(response)
        this.setState({ images: response.data.results });
    }
    // OR
    // onSearchSubmit(term){
    //     console.log(term);
    //     axios.get('https://api.unsplash.com/search/photos',{
    //         params:{ query : term},
    //         headers:{
    //             Authorization:'Client-ID HYHgI9Gi2G6awGjdHxBYheUNh01ZFpxjZRaw60wV1QU'
    //         }

    //     }).then((response) => { //the arrow function in then() is called at some point of time when we have received the response
    //          console.log(response.data.results)
    //     })
    // }
    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        )
    }
};

export default App;