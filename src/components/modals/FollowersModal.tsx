import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

interface Follower {
  login: string;
  avatar_url: string;
  html_url: string;
}

interface FollowersModalProps {
  open: boolean;
  onClose: () => void;
  followers: Follower[];
}

const ModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw", 
  maxWidth: 500,
  maxHeight: "80vh", 
  overflowY: "auto", 
  bgcolor: "background.paper",
  borderRadius: 8, 
  boxShadow: 24,
  p: 2,
  outline: "none", 
};

const FollowersModal: React.FC<FollowersModalProps> = ({ open, onClose, followers }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="followers-modal-title" aria-describedby="followers-modal-description">
      <Box sx={ModalStyle}>
        <Typography id="followers-modal-title" variant="h6" component="h2" gutterBottom>
          Followers:
        </Typography>
        {followers.length === 0 ? (
          <Typography variant="body1">No hay followers</Typography>
        ) : (
          <List sx={{ width: "100%", maxWidth: 360 }}>
            {followers.map((follower, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar alt={follower.login} src={follower.avatar_url} />
                </ListItemAvatar>
                <ListItemText
                  primary={follower.login}
                  secondary={
                    <a href={follower.html_url} target="_blank" rel="noopener noreferrer">
                      View GitHub Profile
                    </a>
                  }
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Modal>
  );
};

export default FollowersModal;
