import { useState } from 'react';
import { Box } from "@mui/material";

const AvailableUsers: React.FC = () => {
    const dummyUsers = [
        { name: "user1", id: "1" },
        { name: "user2", id: "2" },
        { name: "user3", id: "3" },
        { name: "user4", id: "4" },
        { name: "user5", id: "5" },
        { name: "user6", id: "6" },
        { name: "user7", id: "7" },
        { name: "user8", id: "8" },
        { name: "user9", id: "9" },
        { name: "user10", id: "10" },
        { name: "user11", id: "11" },
        { name: "user12", id: "12" },
        { name: "user13", id: "13" },
        { name: "user14", id: "14" },
        { name: "user15", id: "15" },
        { name: "user16", id: "16" },
        { name: "user17", id: "17" },
        { name: "user18", id: "18" },
        { name: "user19", id: "19" },
        { name: "user20", id: "20" },
        { name: "user21", id: "21" },
        { name: "user22", id: "22" },
        { name: "user23", id: "23" },
        { name: "user24", id: "24" },
        { name: "user25", id: "25" },
        { name: "user26", id: "26" },
        { name: "user27", id: "27" },
        { name: "user28", id: "28" },
        { name: "user29", id: "29" },
        { name: "user30", id: "30" },
    ];

    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

    const handleClick = (id: string) => {
        setSelectedUserId(id);
    };

    return (
        <Box sx={{ cursor: "pointer", border: "1px solid black", width: "35%", overflowY: 'auto' }}>
            {dummyUsers.map((user) => (
                <div
                    key={user.id}
                    onClick={() => handleClick(user.id)}
                    className={selectedUserId === user.id ? "active" : ""}
                >
                    {user.name}
                </div>
            ))}
        </Box>
    );
};

export default AvailableUsers;
