import React from 'react';

function ChartCard(props) {
    return (
        <div class="dashboard-stat blue">
            <div class="visual">
                <i class="fa fa-comments"></i>.
            </div>
            <div class="details">
                <div class="number">
                    <span data-counter="counterup" data-value="1349">1349</span>
                </div>
                <div class="desc"> New Feedbacks</div>
            </div>
            <props.More></props.More>
        </div>
    )
}

export default ChartCard;