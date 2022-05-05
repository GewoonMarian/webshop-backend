"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        title: "Electronics",
        imgUrl:
          "https://ecommerce.ccc2020.fr/wp-content/uploads/2020/10/electronic-gadgets.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Jewelery",
        imgUrl:
          "https://static01.nyt.com/images/2022/04/13/t-magazine/13tmag-raymond-slide-K086/13tmag-raymond-slide-K086-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Men's Clothing",
        imgUrl:
          "https://thumbs.dreamstime.com/z/men-s-clothing-store-interior-view-fashion-shop-hongkong-central-china-asia-51415650.jpg",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Women's Clothing",
        imgUrl:
          "https://static.independent.co.uk/2021/02/18/15/tall%20clothing%20brands.jpg?quality=75&width=1200&auto=webp",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
