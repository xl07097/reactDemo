import React from "react";
import { Chart } from "@antv/g2";

class BaseChart extends React.Component {
  constructor(props) {
    super();
    this.myRef = React.createRef();
    this.chart = "";
  }

  componentDidMount() {
    console.dir(this.myRef.current);
    // this.chart = new Chart({
    //     container: this.myRef.current,
    //     width: this.myRef.current.clientWidth - 20,
    //     height: 300,
    // });

    // const data = [
    //     { genre: "Sports", sold: 275 },
    //     { genre: "Strategy", sold: 115 },
    //     { genre: "Action", sold: 120 },
    //     { genre: "Shooter", sold: 350 },
    //     { genre: "Other", sold: 150 }
    // ];

    // this.chart.source(data);
    // this.chart.interval().position("genre*sold").color("genre");
    // this.chart.render();

    var data1 = [
      {
        name: "London",
        月份: "Jan.",
        月均降雨量: 18.9,
      },
      {
        name: "London",
        月份: "Feb.",
        月均降雨量: 28.8,
      },
      {
        name: "London",
        月份: "Mar.",
        月均降雨量: 39.3,
      },
      {
        name: "London",
        月份: "Apr.",
        月均降雨量: 81.4,
      },
      {
        name: "London",
        月份: "May",
        月均降雨量: 47,
      },
      {
        name: "London",
        月份: "Jun.",
        月均降雨量: 20.3,
      },
      {
        name: "London",
        月份: "Jul.",
        月均降雨量: 24,
      },
      {
        name: "London",
        月份: "Aug.",
        月均降雨量: 35.6,
      },
      {
        name: "Berlin",
        月份: "Jan.",
        月均降雨量: 12.4,
      },
      {
        name: "Berlin",
        月份: "Feb.",
        月均降雨量: 23.2,
      },
      {
        name: "Berlin",
        月份: "Mar.",
        月均降雨量: 34.5,
      },
      {
        name: "Berlin",
        月份: "Apr.",
        月均降雨量: 99.7,
      },
      {
        name: "Berlin",
        月份: "May",
        月均降雨量: 52.6,
      },
      {
        name: "Berlin",
        月份: "Jun.",
        月均降雨量: 35.5,
      },
      {
        name: "Berlin",
        月份: "Jul.",
        月均降雨量: 37.4,
      },
      {
        name: "Berlin",
        月份: "Aug.",
        月均降雨量: 42.4,
      },
    ];
    var chart = new Chart({
      container: "chart1",
      forceFit: true,
      width: this.myRef.current.clientWidth - 20,
      height: 300,
    });
    chart.data(data1);
    chart
      .interval()
      .position("月份*月均降雨量")
      .color("name")
      .adjust([
        {
          type: "dodge",
          marginRatio: 1 / 32,
        },
      ]);
    chart.render();
  }

  render() {
    return <div style={{ padding: 10, width: "100%" }} id="chart1" ref={this.myRef}></div>;
  }
}

export default BaseChart;
