const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener("rideTicketPurchased", customEvent => {
    console.log("click")
    contentTarget.innerHTML = `
        <div class="rider person"></div>
        `
})

export const RideTicketHolders = () => {
        
}