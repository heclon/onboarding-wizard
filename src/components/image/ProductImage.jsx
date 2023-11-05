export const ProductImage = ({ productImageUrl }) => {
  if (productImageUrl) {
    return (
      <img
        className="
        border-round
        w-8rem
        sm:w-8rem
        xl:w-10rem
        block
        object-scale-down"
        src={`${productImageUrl}`}
        alt=""
      />
    );
  }
  return "";
};
