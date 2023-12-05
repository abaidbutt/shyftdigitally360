import update from "immutability-helper";
import { useCallback, useState } from "react";
import Card from "./Card";
import { Typography, Box, Button, IconButton, Divider } from "@mui/material";
import { ModeEdit, DragIndicator, Delete, Contacts } from "@mui/icons-material";
const style = {
  width: 400,
};
const Dnd = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <DragIndicator />
              <Typography> Name</Typography>
            </Box>
            <Box>
              <Delete />
              <ModeEdit />
            </Box>
          </Box>
        ),
      },
      {
        id: 2,
        text: (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <DragIndicator />
              <Typography> Email</Typography>
            </Box>
            <Box>
              <Delete />
              <ModeEdit />
            </Box>
          </Box>
        ),
      },
      {
        id: 3,
        text: (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <DragIndicator />
              <Typography> Phone</Typography>
            </Box>
            <Box>
              <Delete />
              <ModeEdit />
            </Box>
          </Box>
        ),
      },
      {
        id: 4,
        text: (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <DragIndicator />
              <Typography> How Can we help you?</Typography>
            </Box>
            <Box>
              <Delete />
              <ModeEdit />
            </Box>
          </Box>
        ),
      },
      {
        id: 5,
        text: (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <DragIndicator />
              <Typography> May we email you about this?</Typography>
            </Box>
            <Box>
              <Delete />
              <ModeEdit />
            </Box>
          </Box>
        ),
      },
    ]);
    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        })
      );
    }, [setCards]);
    const renderCard = useCallback((card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      );
    }, [moveCard]);
    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    );
  }
};
export default Dnd;
