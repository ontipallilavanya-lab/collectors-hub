```markdown
# Product Collection App

A React-based Product Collection application built using **React + Vite**.  
This project allows users to browse products, view product details, add products to their collection, manage quantities, and calculate the total collection value.

---

## 🚀 Features

- Display a list of available products
- View detailed information about each product
- Add products to collection
- Increase and decrease product quantity
- Remove products from collection
- Display total number of items
- Calculate total price dynamically
- Navigate between pages using React Router
- Clean and responsive user interface

---

## 🛠️ Technologies Used

- **React.js**
- **Vite**
- **JavaScript (ES6+)**
- **React Router DOM**
- **HTML5**
- **CSS3**

---

## 📂 Project Structure

```

src
│
├── components
│   ├── Navbar.jsx
│   └── ProductCard.jsx
│
├── pages
│   ├── Home.jsx
│   ├── ProductDetails.jsx
│   └── Collection.jsx
│
├── data
│   └── products.js
│
├── styles
│   ├── home.css
│   ├── productdetails.css
│   └── collection.css
│
├── App.jsx
├── main.jsx
└── index.css

````

---

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
````

### 2. Navigate to the project folder

```bash
cd product-collection-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173/
```

---

## 📱 Application Pages

### 🏠 Home Page

* Displays all available products
* Shows product name, price, and basic details
* Allows users to open product details

### 📦 Product Details Page

* Displays complete product information
* Shows product price and description
* Allows adding products to the collection

### ❤️ Collection Page

* Displays selected products
* Shows quantity of each product
* Calculates subtotal for each product
* Displays total collection price

---

## 🔄 Application Flow

```
Home Page
    |
    ↓
Select Product
    |
    ↓
Product Details
    |
    ↓
Add To Collection
    |
    ↓
Collection Page
    |
    ↓
Manage Quantity & View Total Price

