import React from 'react';
import TeamMembersCard from '../../../../components/TeamMembersCard';

function TeamMembers(props) {
    const TeamMembersData = [
        {
            id: 1,
            membername: 'Sunil Kutanoor'
        },
        {
            id: 2,
            membername: 'Tushar Sengar'
        },
        {
            id: 3,
            membername: 'Tushar Devaliya'
        },
        {
            id: 4,
            membername: 'Akram Dev'
        },
        {
            id: 5,
            membername: 'Sunil Kutanoor'
        },
        {
            id: 6,
            membername: 'Tushar Sengar'
        },
    ]
    return (
        <div>
            <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-2 gap-6 max-lg:text-center">
                {TeamMembersData.map((blg) => (
                    <TeamMembersCard
                        membername={blg.membername}
                    />
                ))}
            </div>
        </div>
    );
}

export default TeamMembers;