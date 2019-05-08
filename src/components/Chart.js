import React from 'react';
import G2 from '@antv/g2';

class Chart extends React.Component{
    constructor(state){
        super(state);
        this.myRef = React.createRef();
        this.chart = '';
    }

    componentDidMount(){
        console.log(this.myRef)
        this.chart = new G2.Chart({
            container: this.myRef.current,
            width: 600,
            height: 300
        });

        const data = [
            { genre: 'Sports', sold: 275 },
            { genre: 'Strategy', sold: 115 },
            { genre: 'Action', sold: 120 },
            { genre: 'Shooter', sold: 350 },
            { genre: 'Other', sold: 150 }
        ];

        this.chart.source(data);
        this.chart.interval().position('genre*sold').color('genre');
        this.chart.render();
    }

    render(){
        return (
            <div>
                <div id='chart' ref={this.myRef}>
                
                </div>
            
            </div>
        )
    }
}

export default Chart;