import React, { Component } from "react";
import Title from "../Title";
import CardColumns from "./CardColumns";
import EmptyCard from "./EmptyCard";
import { ProductConsumer } from "../../Context";
import CardList from "./CardList";
import CardTotal from "./CardTotal";
class Card extends Component {
  state = {};
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="card" />
                  <CardColumns />
                  <CardList value={value} />
                  <CardTotal value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCard />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Card;
