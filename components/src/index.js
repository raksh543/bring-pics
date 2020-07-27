import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Alex"
                timeAgo="Today at 4:45PM"
                comment="This is a nice blog!!"
                imgSrc={faker.image.avatar()}
            />
            <CommentDetail author="Sam" timeAgo="Today at 3:45PM" comment="Fantastic!!" imgSrc={faker.image.avatar()} />
            <CommentDetail author="Joye" timeAgo="Today at 2:45PM" comment="Amazing!!" imgSrc={faker.image.avatar()} />
            <CommentDetail author="Tom" timeAgo="Today at 1:45PM" comment="Nice blog.." imgSrc={faker.image.avatar()} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));