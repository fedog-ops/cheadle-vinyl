import { loadStripe } from '@stripe/stripe-js';
let stripePromise;
const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe("pk_test_51Mo6B1AxFO48megvxjcl2bh46HCxlimzeZJnaIe7OGpC2dlPhIwrMJ5nb7Uu4BUMiKiIuN4u0lRGrDEgqUMgwkO400V1R9j8Mo");
  }
  return stripePromise;
}
export default getStripe;