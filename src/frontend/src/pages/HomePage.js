import "./HomePage.scss";
import { React, useEffect, useState } from "react";
import { TeamTile } from "../components/TeamTile";

export const HomePage = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchAllTeams = async () => {
            const response = await fetch(`http://localhost:8081/team`);
            const data = await response.json();
            setTeams(data);
        };

        fetchAllTeams();
    }, [teams]);

    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name">IPL Dashboard</h1>
            </div>
            <div className="team-grid">
                {teams.map((team) => (
                    <TeamTile teamName={team.teamName}></TeamTile>
                ))}
            </div>
        </div>
    );
};