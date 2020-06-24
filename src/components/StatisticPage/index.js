import React from 'react';
import styled from "styled-components";
import {Area, AreaChart, LineChart, Line, ResponsiveContainer, CartesianGrid, CartesianAxis, Tooltip, XAxis, YAxis} from "recharts";

import { iphoneImgs } from "../../definitions";

const StatisticPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100vw;
    background: #121213;
`;

const IPhoneInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
    flex:3;
`;

const InfoTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
`;

const ChartWrapper = styled.div`
    display: flex;
    width: 100vw;
    flex:1;
`;

const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];


function StatisticPage({val}) {
    return (
        <StatisticPageWrapper>
            <IPhoneInfoWrapper>
                <div style={{height: '350px'}}>
                    <img src={iphoneImgs[val]} style={{height: '100%'}} />
                </div>
                <InfoTextWrapper>
                    <span style={{fontFamily: 'Inter', color: "white", fontSize: '2rem'}}>
                        {val}
                </span>
                    <InfoWrapper>
                        <InfoColumn>
                        <span style={{fontFamily: 'Inter', color: "white", opacity: 0.5, marginTop: '1.25rem', fontSize: '1rem'}}>
                        2gb ram
                    </span>
                            <span style={{fontFamily: 'Inter', color: "white", opacity: 0.5, marginTop: '0.5rem', fontSize: '1rem'}}>
                        16gb
                    </span>
                        </InfoColumn>
                        <InfoColumn>

                        <span style={{fontFamily: 'Inter', color: "white", opacity: 0.5, marginTop: '1.25rem', fontSize: '1rem'}}>
                        2gb ram
                    </span>
                            <span style={{fontFamily: 'Inter', color: "white", opacity: 0.5, marginTop: '0.5rem', fontSize: '1rem'}}>
                        16gb
                    </span>
                        </InfoColumn>
                    </InfoWrapper>
                </InfoTextWrapper>


            </IPhoneInfoWrapper>
            <ChartWrapper>
                <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0071E3" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#0071E3" stopOpacity={1}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid  vertical={false} opacity={0.2}/>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="uv" stroke="#0071E3" fill="url(#colorUv)" />
                </LineChart>
                </ResponsiveContainer>
            </ChartWrapper>
        </StatisticPageWrapper>
    )
}

export default StatisticPage
