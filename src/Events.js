import React from 'react';
import Chart from './Chart';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      events: [],
      ids: []
     };
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  componentDidMount() {
    fetch(`https://frames.free.beeceptor.com/`)
    .then(response => response.json())
    .then(data => {
      const uniqueTags = [];
      data.map(item => {
        if (uniqueTags.indexOf(item.frame_id) === -1) {
          uniqueTags.push(item.frame_id)
        }
      });
        this.setState({
      events: data,
      ids: uniqueTags
    });
  });
  }

  onClearClicked(event) {
    event.preventDefault();

    this.setState({ events: [] });
  }

  getChartData(id){
      const tempData = this.state.events.filter(f=>f.frame_id === id);
      const chartData = {
        name: tempData.map(m=>m.data).map(m=>Object.keys(m)[0])[0],
        labels: tempData.map(m=>m.timestamp),
        datasets:[
          {
            label: id,
            data: tempData.map(m=>m.data).map(m=>Object.values(m)[0]),
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      };

      return chartData;
    }

  render() {
    return (
      <div>
        <ul>
          {this.state.ids.map(item=>
            {return (<Chart chartData={this.getChartData(item)} legendPosition="bottom" key={item}/>);})
          } 
        </ul>
      </div>
    );
  }
};

export default Events;
