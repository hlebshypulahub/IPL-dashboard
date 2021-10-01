import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { YearSelector } from "../components/YearSelector";

import "./MatchPage.scss";

export const MatchPage = () => {
    const [matches, setMatches] = useState([]);
    const { teamName, year } = useParams();

    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(
                `http://localhost:8081/team/${teamName}/matches?year=${year}`
            );
            const data = await response.json();
            setMatches(data);
        };
        fetchMatches();
    }, [teamName, year]);

    if (matches.length === 0) {
        return <h1>Matches not found!</h1>;
    }

    return (
        <div className="MatchPage">
            <div className="year-selector">
                <h3>Select year</h3>
                <YearSelector teamName={teamName} />
            </div>
            <div>
                <h1 className="page-heading">
                    {teamName} matches in {year}
                </h1>
                <div>
                    {matches.map((match) => (
                        <MatchDetailCard teamName={teamName} match={match} />
                    ))}
                </div>
            </div>
        </div>
    );
};
