class ProductService {
  static productsList = [
    {
      sno: "AA001",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDoxN16m9q-QfsNWcGDMGi4cq_sTAvLezfw&s",
      name: "Mi Watch",
      price: 1500,
      qty: 25,
    },
    {
      sno: "AA002",
      image:
        "https://www.bhphotovideo.com/images/images2500x2500/apple_mj2x2ll_a_watch_sport_smartwatch_38mm_1187194.jpg",
      name: "Samsung Watch",
      price: 1200,
      qty: 15,
    },
    {
      sno: "AA003",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.MA0K5qaYbpJ0EJzrPFn2MQHaJj&pid=Api",
      name: "Apple Watch",
      price: 1800,
      qty: 3,
    },
    {
      sno: "AA004",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.cN-CNdniz8nNDidi5-tX9QHaIW&pid=Api",
      name: "Boat Watch",
      price: 1300,
      qty: 0,
    },
    {
      sno: "AA005",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.6kyf7u8bFkL99z8vLiGgbQHaIj&pid=Api",
      name: "LG Watch",
      price: 1900,
      qty: 12,
    },
  ];

  static getAllProducts() {
    return this.productsList;
  }
}

export default ProductService;
