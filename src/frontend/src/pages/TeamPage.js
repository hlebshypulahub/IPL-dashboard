import "./TeamPage.scss";
import { PieChart } from "react-minimal-pie-chart";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {
    const [team, setTeam] = useState({ matches: [] });
    const { teamName } = useParams();

    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(
                `http://localhost:8081/team/${teamName}`
            );

            const data = await response.json();

            // console.log(data);

            setTeam(data);
        };

        fetchMatches();
    }, [teamName]);

    if (!team || !team.teamName) {
        return <h1>Team not found!</h1>;
    }

    return (
        <div className="TeamPage">
            <div className="team-name-section">
                <h1 className="team-name">{team.teamName}</h1>
            </div>
            <div className="win-loss-section">
                Wins / Losses
                <PieChart
                    data={[
                        {
                            title: "Wins",
                            value: team.totalWins,
                            color: "rgb(92, 163, 92)",
                        },
                        {
                            title: "Losses",
                            value: team.totalMatches - team.totalWins,
                            color: "rgb(209, 87, 87)",
                        },
                    ]}
                />
            </div>
            <div className="match-detail-section">
                <h3>Lates Matches</h3>
                <MatchDetailCard
                    teamName={team.teamName}
                    match={team.matches[0]}
                />
            </div>
            {team.matches.slice(1).map((match) => (
                <MatchSmallCard teamName={team.teamName} match={match} />
            ))}
            <div className="more-section">
                <a href="#">More ></a>
            </div>
        </div>
    );
};
