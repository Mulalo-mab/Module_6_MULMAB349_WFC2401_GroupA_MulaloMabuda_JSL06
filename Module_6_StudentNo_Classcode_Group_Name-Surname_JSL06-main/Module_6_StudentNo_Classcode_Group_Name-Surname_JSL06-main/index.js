/*
document.addEventListener("DOMContentLoaded", function() {
    // Sample menu data
    const menu = {
        Starters: ["Garlic Bread", "Bruschetta"],
        MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
        Desserts: ["Tiramisu", "Cheesecake"]
    };

    // Define the order of categories
    const categoryOrder = ["Starters", "MainCourses", "Desserts"];

    // Function to display menu items by category
    function displayMenuItems(menu) {
        const menuContainer = document.getElementById("menu-container");
        categoryOrder.forEach(category => {
            const categoryHeading = document.createElement("h2");
            categoryHeading.textContent = category;
            menuContainer.appendChild(categoryHeading);

            // Add space between category heading and items
            categoryHeading.style.marginBottom = "10px";


            const itemListElement = document.createElement("ul");
            menu[category].forEach(item => {
                const listItemElement = document.createElement("li");
                listItemElement.textContent = item;
                listItemElement.addEventListener("click", () => {
                    addToOrder(item);
                });
                itemListElement.appendChild(listItemElement);
            });
            menuContainer.appendChild(itemListElement);
        });
    }

    // Call the displayMenuItems function to display the menu items
    displayMenuItems(menu);

    // Callback function for adding an item to the order
    function addToOrder(itemName) {
        const orderList = document.getElementById("order-items");
        const listItemElement = document.createElement("li");
        listItemElement.textContent = itemName;
        listItemElement.addEventListener("click", () => {
            orderList.removeChild(listItemElement);
            updateTotal(-60);
        });
        orderList.appendChild(listItemElement);
        updateTotal(60);
    }

    // Function to update the total price
    function updateTotal(amount) {
        const totalElement = document.getElementById("order-total");
        let currentTotal = parseFloat(totalElement.textContent);
        currentTotal += amount;
        totalElement.textContent = currentTotal.toFixed(2);
    }
});
*/

// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu");

    // Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) {
        // Create an h2 element for the category name
        const categoryHeading = document.createElement("h2");
        categoryHeading.textContent = category;

        // Append the h2 element to the menu container
        menuContainer.appendChild(categoryHeading);

        // Insert a line break element to add space between the h2 element and the list of items
        menuContainer.appendChild(document.createElement("br"));

        // Create an element to represent a list of items
        const itemListElement = document.createElement("ul");

        // Append a list of items element to the menu container
        menuContainer.appendChild(itemListElement);

        // Loop through the items in the category and create list items
        items.forEach(item => {
            // Create a list item element
            const listItemElement = document.createElement("li");

            // Set the text content of the list item element to the item name
            listItemElement.textContent = item;

            // Attach a click event listener to the list item to add it to the order
            listItemElement.addEventListener("click", () => {
                addToOrder(item);
            });

            // Append the list item to the list of items
            itemListElement.appendChild(listItemElement);
        });
    }
}


// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderList = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");

    // Create a list item for the order
    const orderItem = document.createElement("li");

    // Set the text content of the list item to the item name
    orderItem.textContent = itemName;

    // Attach a click event listener to the order item to remove it and reduce the total price
    orderItem.addEventListener("click", () => {
        orderItem.remove();

        // Reduce the total price by 60
        const currentTotal = parseFloat(orderTotalElement.textContent);
        orderTotalElement.textContent = (currentTotal - 60).toFixed(2);
    });

    // Append the list item to the order items list
    orderList.appendChild(orderItem);

    // Calculate and update the total price
    const currentTotal = parseFloat(orderTotalElement.textContent);
    orderTotalElement.textContent = (currentTotal + 60).toFixed(2); // Add 60 to the current total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
