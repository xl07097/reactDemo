import React from "react";
import G2 from "@antv/g2";

class Chart extends React.Component {
    constructor(state) {
        super(state);
        this.myRef = React.createRef();
        this.chart = "";
    }

    componentDidMount() {
        this.chart = new G2.Chart({
            container: this.myRef.current,
            forceFit: true,
            width: this.myRef.current.clientWidth - 20,
            height: 300,
        });

        const data = [
            { collect: "第一季", grade: 9.4 },
            { collect: "第二季", grade: 9.5 },
            { collect: "第三季", grade: 9.5 },
            { collect: "第四季", grade: 9.6 },
            { collect: "第五季", grade: 9.3 },
            { collect: "第六季", grade: 9.5 },
            { collect: "第七季", grade: 9.3 },
            { collect: "第八季", grade: 9.8 },
        ];

        this.chart.source(data, {
            collect: {
                alias: "季", //定义别名
            },
            grade: {
                alias: "豆瓣评分",
            },
        });
        this.chart.tooltip({
            crosshairs: {
                type: "line",
            },
        });
        this.chart.line().position("collect*grade").color("red");
        // this.chart.interval().position('collect*grade').color('genre');
        this.chart.render();
    }

    render() {
        return (
            <>
                <h2>权利的游戏八季评分</h2>
                <div style={{ padding: 10 }} id="chart2" ref={this.myRef}></div>
            </>
        );
    }
}

export default Chart;
