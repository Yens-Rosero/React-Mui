import { useState } from "react";
import Box from "@mui/material/Box";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FollowersModal from "../modals/FollowersModal";

export function Author({
  authors,
}: {
  authors: { name: string; avatar: string; followers: any[] };
}) {
  interface Follower {
    login: string;
    avatar_url: string;
    html_url: string;
  }

  const [selectedFollowers, setSelectedFollowers] = useState<Follower[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (followers: Follower[]) => {
    setSelectedFollowers(followers);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        paddingLeft: "0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      >
        <AvatarGroup max={3}>
          <Avatar
            alt={authors.name}
            src={authors.avatar}
            sx={{ width: 24, height: 24 }}
          />
        </AvatarGroup>
        <Typography variant="caption">{authors.name}</Typography>
      </Box>
      <Typography
        sx={{
          cursor: "pointer",
          "&:hover": {
            fontWeight: "bold",
            color: "primary.main",
          },
        }}
        variant="caption"
        onClick={() => handleOpenModal(authors.followers)}
      >
        Followers: {authors.followers.length}{" "}
      </Typography>

      <FollowersModal
        open={modalOpen}
        onClose={handleCloseModal}
        followers={selectedFollowers}
      />
    </Box>
  );
}
