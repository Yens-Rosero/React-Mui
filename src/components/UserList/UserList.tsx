import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { apiUserService } from "../services/ApiUserService";
import { apiService } from "../services/apiService";
import UserCard from "../UserCard/UserCard";

interface UserListProps {
  searchTerm: string;
}

const UserList: React.FC<UserListProps> = ({ searchTerm }) => {
  const [users, setUsers] = useState<any[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]); // Nuevo estado para usuarios filtrados

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiUserService("https://api.github.com/search/users?q=YOUR_NAME");

        const userDetailsPromises = data.items.map(async (user) => {
          const userDetailResponse = await apiService(user.url);
          const userDetailFollowersResponse = await apiService(user.followers_url);
          return {
            name: userDetailResponse.items.name,
            avatar_url: user.avatar_url,
            followers: userDetailFollowersResponse.items,
            html_url: user.html_url,
            createdAt: userDetailResponse.items.created_at,
          };
        });

        const userDetailsName = await Promise.all(userDetailsPromises);
        setUsers(userDetailsName);
        setFilteredUsers(userDetailsName); // Inicialmente, todos los usuarios son filtrados
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <Grid container spacing={2} columns={12}>
      {filteredUsers.map((user, index) => (
        <Grid item xs={5} md={3} key={index}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserList;
