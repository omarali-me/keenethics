import React from 'react';
import ListNews from './listNews';

export default class SlideNews extends React.Component {
  render() {
    console.log(this.props.Posts);
    return (
      <div className="slide slide-partners" id="slide-5">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3 className="title -text-center">
                <span className="-color-black">Keen</span>
                <span className="-color-red">news.</span>
              </h3>
            </div>
          </div>
          <ListNews Posts={this.props.Posts} Users={this.props.Users} />
        </div>
      </div>
    );
  }
}

SlideNews.propTypes = {
  Posts: React.PropTypes.object.isRequired,
  Users: React.PropTypes.object.isRequired,
};
