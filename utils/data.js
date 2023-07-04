import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "John",
      email: "fluid@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Le Classique",
      slug: "Le-Classique",
      category: "Shirts",
      image: "/images/Recto-min.png",
      isFeatured: true,
      featuredImage: "/images/Recto-min.png",
      price: 39.99,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "L’intrépide",
      slug: "L-intrépide",
      category: "Shirts",
      image: "/images/sweat2-Recto-min.png",
      price: 39.99,
      brand: "Raymond",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "T-shirt",
      slug: "t-shirt",
      category: "Shirts",
      image: "/images/Modele-min.png",
      price: 24.99,
      brand: "Raymond",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    }
  ],
};
export default data;
