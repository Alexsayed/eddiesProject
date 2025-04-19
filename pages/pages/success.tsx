import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { GetServerSidePropsContext } from "next";
import dbConnect from "../lib/dbConnect";
import Orders, { OrderHistoryInterface } from '../models/orderHistory';
import mongoose, { Schema, Document, Model } from 'mongoose';

type Props = {
  order: OrderHistoryInterface
  orderID?: string;

};
const SuccessPage = ({ order, orderID }: Props) => {
  // if order is null or order has been viewed before.
  if (!order) {
    return <p>Order not found or already viewed.</p>;
  }
  next up: clear localStorage after payment is successful
  return (
    <div>
      <h1>Thank you, {orderID}!</h1>
      <p>An Email has been sent to:  🎉{order.shippingInfo.shippingEmail} address.</p>
      <p>Your payment was successful 🎉{JSON.stringify(order)} </p>
    </div>
  );
};
export async function getServerSideProps(context: GetServerSidePropsContext) {
  await dbConnect();
  const { orderID } = context.query;
  if (!orderID || typeof orderID !== 'string' || !mongoose.Types.ObjectId.isValid(orderID.toString())) {
    return {
      notFound: true,
    };
  }
  // Find order from DB
  const orderResult = await Orders.findById({ _id: orderID });
  // if no orderResult or orderResult.viewed = TRUE, then  we will return nothing. (this way we are not allowing user to visit same again)
  if (!orderResult || orderResult.viewed) {
    return {
      props: {
        order: null,
      },
    };
  }
  // now that user visiting this page for first time, we will mark the orderResult.viewed flag to True. to provent revisiting this page with it's data.
  orderResult.viewed = true;
  // save the DB.
  await orderResult.save();
  const stringifyOrderResult = JSON.parse(JSON.stringify(orderResult));
  // next up: update  Orders viewed to True so user wont be able to visit same page again.
  return {
    props: {
      order: stringifyOrderResult,
      orderID: orderID || null,
    },
  };
};

export default SuccessPage;
