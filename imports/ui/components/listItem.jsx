import React from 'react';

export default class ListItem extends React.Component {
  render() {
    console.log(this.props.Posts);
    console.log(this.props.Users);

    return (
      <li className="col-xs-12 col-sm-6 col-md-3 list-news-item">
        <a href={`https://blog.keenethics.com/${this.props.Posts.uniqueSlug}?source=latest`}>
          <img src={`https://cdn-images-1.medium.com/max/384/${this.props.Posts.virtuals.previewImage.imageId}`} />
          <p className="date-meetup">
            <span className="-color-red meetup">Meetup</span>
            <span>March 12 10:00 AM, Lviv</span>
          </p>
          <h4> { this.props.Posts.title } </h4>
          <p> { this.props.Posts.virtuals.subtitle } </p>
        </a>
      </li>
    );
  }
}

ListItem.propTypes = {
  Posts: React.PropTypes.object.isRequired,
  Users: React.PropTypes.object.isRequired,
};
