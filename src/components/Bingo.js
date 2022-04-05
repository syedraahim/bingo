import React from "react";
import Tiles from "./Tiles";
import "./index.css";

// titles content
const content = [ 
  "Someone Getting Trampled",
  "Shoppers Fighting Over Item",
  "Unattended Child",
  "Parking Lot Fender Bender",
  "People Camping Outside Store",
  "Declined Credit Card",
  "Shopping Cart With A Janky Wheel",
  "Missing Price Tag",
  "Ridiculously Long Line",
  "Shoplifters",
  "People Cutting In Line",
  "Crowd Booing Someone",
  "Angry Store Worker",
  "Annoying Christmas Music",
  "Screaming Child",
  "No More Shopping Carts",
  "Credit Card Machine Goes Down",
  "Cash Register Runs Out Of Tape",
  "Empty Sale Rack",
  "Arms Full Of Items",
  "Shopping Bag Rips",
  "Shopper In Pajamas And Slippers",
  "Someone Buying A Bunch Of Gift Cards",
  "Someone Crying",
  "Full Car"
];

content.sort(() => Math.random() - 0.5) //to shuffle the tiles

function Bingo() {
    content[12] = 'Free Black Friday Bingo'
  return (
    <div>
      <h1 className="heading">Black Friday Bingo</h1>
        <Tiles data={content}/>
    </div>
  );
}

export default Bingo;
