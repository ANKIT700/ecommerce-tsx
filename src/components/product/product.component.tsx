import * as React from "react";
import { connect } from "react-redux";
import Loader from "react-ts-loaders";
import "../../styles/product/product.styles.css"
import { Sephora } from "../../api/api";

interface eccomerceProps {
  state: any;
}

const ProductDetail: React.FC<eccomerceProps> = (props) => {
  const [loader, setLoader] = React.useState(false);

  const [products, setProducts] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (props.state.search !== "") {
      setLoader(true);
      Sephora.autoComplete(props.state.search).then((res) => {
        setProducts(res.typeAheadTerms);
        setLoader(false);
      });
    }
  }, [props?.state?.search]);

  return (
    <div>
      {loader ? (
        <Loader
          type="roller"
          color="blue"
          altColor="lightblue"
          size={200}
          className="dark-loader "
        />
      ) : null}
      <ul className="product-list">
        {products?.map((product, index) => {
          return (
              <li key={`prdt-lst${index} `}>
                {product.productName ? (
                  // <div>
                  //   Brand Name: {product.brandName}
                  //   <br />
                  //   Product Name: {product.productName}
                  //   <br />
                  //   Thumbnail:{" "}
                  //   <img src={product.defaultSku.skuImages.image50} />
                  // </div>
                  <div className="card" style={{ width: "12rem" }}>
                  <img
                    className="card-img-top"
                    src={product.defaultSku.skuImages.image50}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                  Brand Name: {product.brandName}
                    <p className="card-text">
                    Product Name: {product.productName}
                    </p>
                    {product.productName ? product.productName : product.term}

                  </div>
                </div>
                ) : (
                  product.term
                )}
              </li>
          );
        })}
      </ul>
    </div>
  );
};

function mapStateToProps(state: any) {
  return { state: state };
}

export default connect(mapStateToProps)(ProductDetail);
