import React from 'react';
import styled from "styled-components";
import { Label, LineChart, Line, ResponsiveContainer, CartesianGrid, ReferenceLine, Tooltip, XAxis, YAxis} from "recharts";
import {findIndex, length, max, propEq, slice, filter, isNil} from "ramda";
import { useLocation, withRouter } from 'react-router-dom';

import { actionsCsv, iphoneImgs, specialDates, iphoneStats } from "../../definitions";

function StatisticPage({val}) {
    const location = useLocation();
    const iphoneInfo = iphoneStats[val];

    const { startDate, endDate, firstColumn, secondColumn } = iphoneInfo;

    const columnHeight = max(length(firstColumn), length(secondColumn));

    const startDateIndex = findIndex(propEq('Date', startDate), actionsCsv);
    const endDateIndex = findIndex(propEq('Date', endDate), actionsCsv);
    const data = slice(startDateIndex, endDateIndex, actionsCsv);
    const events = filter(propEq('showOn', location.pathname), specialDates);

    return (
        <StatisticPageWrapper>
            <div style={{display: 'flex', flexDirection: 'row', width: '100vw', flex: 3}}>
                <IPhoneInfoWrapper>
                    <div style={{height: '400px', marginTop: '2.5rem'}}>
                        <img src={iphoneImgs[val]} style={{height: '100%'}} />
                    </div>
                    <InfoTextWrapper>
                    <span className="noselect" style={{fontFamily: 'Inter', color: "white", fontSize: '2rem', marginBottom: '1rem'}}>
                        {iphoneInfo.title}
                    </span>
                        <InfoWrapper>
                            <InfoColumn>
                                {
                                    [...Array(columnHeight).keys()].map((i) =>
                                        <div style={{marginTop: '1.5rem'}}>
                                            <span style={{fontFamily: 'Inter', fontWeight: 'bold', color: "#63636E", opacity: 1, fontSize: '1.5rem'}}>
                                                {isNil(firstColumn[i]) || isNil(firstColumn[i])[0] ? '' : firstColumn[i][0]}
                                            </span>
                                            <span style={{fontFamily: 'Inter', fontWeight: 'bold', color: "#63636E", opacity: 1, marginLeft: '0.25rem', fontSize: '1rem'}}>
                                                {isNil(firstColumn[i]) || isNil(firstColumn[i])[1] ? '' : firstColumn[i][1]}
                                            </span>
                                        </div>
                                    )
                                }
                            </InfoColumn>
                            <InfoColumn style={{marginLeft: '2.5rem'}}>
                                {
                                    [...Array(columnHeight).keys()].map((i) =>
                                        <span style={{fontFamily: 'Inter', color: "#63636E", opacity: 0.70, marginTop: '2rem', fontSize: '1rem'}}>
                                            {secondColumn[i] || ''}
                                        </span>
                                    )
                                }
                            </InfoColumn>
                        </InfoWrapper>
                    </InfoTextWrapper>
                </IPhoneInfoWrapper>
                <TimelineWrapper>
                    <TimelineHeader>
                    </TimelineHeader>
                    { events.map(event => (
                        <TimelineEntry>
                            <TimelineEntryDate>{event.date}</TimelineEntryDate>
                            <TimelineEntryLabel>{event.label}</TimelineEntryLabel>
                        </TimelineEntry>
                    ))}
                </TimelineWrapper>
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
                    <YAxis type="number" domain={[0, 120]} />
                    <Tooltip />

                    <Line type="monotone" dataKey="Close" stroke="#0071E3" fill="url(#colorUv)" dot={false}/>
                    {/*https://github.com/recharts/recharts/issues/720*/}
                    { specialDates.filter(propEq('showOnChart', true)).map(({date, label}) => (
                        <ReferenceLine x={date} isFront stroke="red" label={<Label position="top" offset={-20} value={label} fill="white" />} />
                        )
                    )}
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
    align-items: flex-start;
    justify-content: center;
    width: 100vw;
    flex:3;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`;

const InfoTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4rem;
    padding-top: 4.5rem;
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const ChartWrapper = styled.div`
    display: flex;
    width: 100vw;
    flex:1;
`;

const TimelineWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2.5rem;
    
    width: 24rem;
`

const TimelineHeader = styled.div`
    color: white;
    font-size: 1rem;
    opacity: 0.4;
`;

const TimelineEntry = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TimelineEntryDate = styled.span`
    color: white;
    font-weight: bold;
    opacity: 0.7;
    font-family: Inter;
`;

const TimelineEntryLabel = styled.span`
    margin-left: 0.45rem;
    color: #63636E;
    font-family: Inter;
`;

export default withRouter(StatisticPage);
