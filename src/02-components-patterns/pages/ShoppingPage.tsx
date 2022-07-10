import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffe Mug",
  img: "./coffee-mug.png",
};
export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle
            title={"Coffee Mug Web Developer"}
            className="text-white text-bold"
          />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        {/* otra forma de hacer Compound Component Parent */}
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#125f8f" }}>
          <ProductImage
            style={{
              borderRadius: "20px",
              padding: "10px",
              width: "calc(100% - 20px)",
            }}
          />
          <ProductTitle style={{ color: "#fff", fontWeight: "bold" }} />
          <ProductButtons style={{ color: "#fff", borderColor: "#fff" }} />
        </ProductCard>
      </div>
    </div>
  );
};
