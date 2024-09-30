import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Author } from "../Author/author";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  border: "none",
}));

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
});

interface UserCardProps {
  user: {
    name: string;
    avatar_url: string;
    followers: any;
    html_url: string;
    createdAt: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <StyledCard variant="outlined">
      <CardMedia
        component="img"
        alt={`${user.name}'s avatar`}
        image={user.avatar_url}
        sx={{
          maxWidth: "50%",
          height: "auto",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          objectFit: "cover",
          display: "block",
          margin: "0 auto",
        }}
      />
      <StyledCardContent>
        <Author
          authors={{
            name: user.name,
            avatar: user.avatar_url,
            followers: user.followers,
          }}
        />
        <Typography gutterBottom variant="caption" component="div">
          {new Date(user.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
          })}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Link bio GitHub: {user.name}
          </a>
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default UserCard;
