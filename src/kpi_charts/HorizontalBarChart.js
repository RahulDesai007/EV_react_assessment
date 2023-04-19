import React from 'react';
import {
    VictoryTheme,
    VictoryGroup,
    VictoryChart,
    VictoryBar
} from 'victory';
import Typography from '@mui/material/Typography';
const HorizontalBarChart = () => {
    return <div>
        <Typography>Sample Horizontal Bar Chart</Typography>
        <VictoryChart
            theme={VictoryTheme.material}
            domain={{ y: [0.5, 5.5] }}
            width={740}
            height={400}
        >
            <VictoryGroup horizontal
                offset={10}
                style={{ data: { width: 6 } }}
                colorScale={["brown", "tomato", "gold"]}
            >
                <VictoryBar
                    data={[
                        { x: 1, y: 1 },
                        { x: 2, y: 2 },
                        { x: 3, y: 3 },
                        { x: 4, y: 2 },
                        { x: 5, y: 1 }
                    ]}
                />
                <VictoryBar
                    data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 4 },
                        { x: 4, y: 5 },
                        { x: 5, y: 5 }
                    ]}
                />
                <VictoryBar
                    data={[
                        { x: 1, y: 1 },
                        { x: 2, y: 2 },
                        { x: 3, y: 3 },
                        { x: 4, y: 4 },
                        { x: 5, y: 4 }
                    ]}
                />
            </VictoryGroup>
        </VictoryChart></div>;
};
export default HorizontalBarChart;
