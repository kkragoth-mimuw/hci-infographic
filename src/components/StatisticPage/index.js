import React from 'react';
import styled from "styled-components";
import { Label, LineChart, Line, ResponsiveContainer, CartesianGrid, ReferenceLine, Tooltip, XAxis, YAxis} from "recharts";
import {findIndex, length, max, propEq, slice} from "ramda";

import { actionsCsv, iphoneImgs, specialDates, iphoneStats } from "../../definitions";

function StatisticPage({val}) {
    const iphoneInfo = iphoneStats[val];

    const { startDate, endDate, firstColumn, secondColumn } = iphoneInfo;

    const columnHeight = max(length(firstColumn), length(secondColumn));


    const startDateIndex = findIndex(propEq('Date', startDate), actionsCsv);
    const endDateIndex = findIndex(propEq('Date', endDate), actionsCsv);
    const data = slice(startDateIndex, endDateIndex, actionsCsv);

    return (
        <StatisticPageWrapper>
            <div style={{display: 'flex', flexDirection: 'row', width: '100vw', flex: 3}}>
                <div>Timeline</div>
                <IPhoneInfoWrapper>
                    <div style={{height: '350px'}}>
                        <img src={iphoneImgs[val]} style={{height: '100%'}} />
                    </div>
                    <InfoTextWrapper>
                    <span className="noselect" style={{fontFamily: 'Inter', color: "white", fontSize: '2rem'}}>
                        {iphoneInfo.title}
                    </span>
                        <InfoWrapper>
                            <InfoColumn>
                                {
                                    [...Array(columnHeight).keys()].map((i) =>
                                        <span style={{fontFamily: 'Inter', fontWeight: 'bold', color: "#63636E", opacity: 1, marginTop: '1.25rem', fontSize: '1rem'}}>
                                            {firstColumn[i] || ''}
                                        </span>
                                    )
                                }
                            </InfoColumn>
                            <InfoColumn>
                                {
                                    [...Array(columnHeight).keys()].map((i) =>
                                        <span style={{fontFamily: 'Inter', color: "#63636E", opacity: 0.6, marginTop: '1.25rem', fontSize: '1rem'}}>
                                            {secondColumn[i] || ''}
                                        </span>
                                    )
                                }
                            </InfoColumn>
                        </InfoWrapper>
                    </InfoTextWrapper>
                </IPhoneInfoWrapper>
            </div>

            <ChartWrapper>
                <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="100">
                            <stop offset="5%" stopColor="#0071E3" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#0071E3" stopOpacity={1}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid  vertical={false} opacity={0.2}/>
                    <XAxis dataKey="Date" />
                    <YAxis type="number" domain={[0, 120]} label="Close in dollars"/>
                    <Tooltip />

                    <Line type="monotone" dataKey="Close" stroke="#0071E3" fill="url(#colorUv)" dot={false}/>
                    {/*<ReferenceLine x="2008-06-09" isFront={true} label="3gs release date" stroke="red" label={<CustomLabel label={"3gs release date"}/>}/>*/}
                    {/*https://github.com/recharts/recharts/issues/720*/}
                    { specialDates.map(({date, label}) => (
                        <ReferenceLine x={date} isFront stroke="red" label={<Label position="top" offset={-20} value={label} fill="white" />} />
                        )
                    )}
                    {/*<ReferenceLine x="2008-06-09" isFront={true} stroke="red" label={<Label value="3gs release date*/}
                    {/*12.04.5" fill={'white'} />}/>*/}
                </LineChart>
                </ResponsiveContainer>
            </ChartWrapper>
        </StatisticPageWrapper>
    )
}

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


export default StatisticPage
