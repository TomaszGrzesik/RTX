import React from 'react';
import EventItem from './EventItem';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/frames`)
    .then(response => response.json())
    .then(data => {
        this.setState({
      events: data
    });
  });
  }

  onClearClicked(event) {
    event.preventDefault();

    this.setState({ events: [] });
  }


  render() {
    return (
      <div>
        <ul>
          {this.state.events.map(item => {

              return (
                <EventItem {...item} key={item.id} />
              );


            //return null;
          })}
        </ul>

      </div>
    );
  }
};

export default Events;
