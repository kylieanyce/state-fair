// Import and invoke the ticket booth component function
import { foodTicketHolder } from "./food/FoodTicketHolder.js";
import { gameTicketHolder } from "./games/GameTicketHolder.js";
import "./rides/RideTicketHolders.js"
import { SideshowTicketHolder } from "./sideshows/SideshowTicketHolder.js";
import { TicketBooth } from "./TicketBooth.js";

TicketBooth()
foodTicketHolder()
gameTicketHolder()
SideshowTicketHolder()
