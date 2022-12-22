import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import StripeCheckout from 'react-stripe-checkout'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router'
import { userRequest } from '../requestMethods'

const KEY=process.env.REACT_APP_STRIPE

const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 20px;
`
const Title = styled.h1`
 font-weight: 600;
 text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:20px;
`
const TopButton = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  border: 3px solid teal;
  color:teal;
  background-color: transparent;
  cursor: pointer;
  transition:all 0.5s ease ;
  &:hover{
     background-color: teal;
     color:white;
     transform: scale(1.05);
  }
  margin: 10px;
`
const TopTexts = styled.div`

`
const TopText = styled.span`
 text-decoration: underline;
 cursor: pointer;
 margin: 0px 10px;
 font-size: 25px;
`






const Bottom = styled.div`
display: flex;
justify-content: space-between;
`
const Info = styled.div`
flex:3;
`



const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 220px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  font-size: 24px;
`;

const ProductId = styled.span`
 font-size: 24px;
`;

const ProductColor = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 24px;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
 font-size: 24px;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  border:3px solid teal;
  padding: 5px 10px;
  border-radius: 10%;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 3px solid teal;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;

`;

const SummaryTitle = styled.h1`
  font-weight: bold;
  text-align: center;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "27px"};
`;

const SummaryItemText = styled.span`
     font-size: 22px;
`;

const SummaryItemPrice = styled.span`
    font-size: 22px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  border: 3px solid teal;
  color:teal;
  background-color: transparent;
  cursor: pointer;
  transition:all 0.5s ease ;
  &:hover{
     background-color: teal;
     color:white;
     transform: scale(1.05);
  }
  
  margin: 10px;
  margin-left:25%;
`;

const B=styled.b`
font-size: 24px;
font-weight: 600;
padding-right: 5px;
`

const Cart = () => {


 const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();
  
  console.log(KEY,process.env.REACT_APP_STRIPE);

  const onToken = (token) => {
    setStripeToken(token);
  };

  console.log(cart);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total,
          token:stripeToken
        });
       
        history("/success",{state:{
          stripeData: res.data,
          cart: cart}});

      } catch {

      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({cart.quantity})</TopText>
            <TopText>Your WishList(0)</TopText>
          </TopTexts>
          <TopButton>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
          {cart.products.map((product)=>(
            <>
            <Product>
              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <B>Product:</B> {product.title}
                  </ProductName>
                  <ProductId>
                    <B>ID:</B> {product._id}
                  </ProductId>
                  <ProductColor color={product.color} />
                  <ProductSize>
                    <B>Size:</B> {product.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>{product.quantity*product.price}</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            </>
            
          ))}
            

          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹100.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>- ₹100.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="SHOPIFY"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart