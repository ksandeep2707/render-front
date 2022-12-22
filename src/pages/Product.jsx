import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { publicRequest } from '../requestMethods'
import {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {addProduct} from '../redux/cartRedux'
const Container=styled.div`

`
const Wrapper=styled.div`
 padding:50px;
 display: flex;

`
const ImgContainer=styled.div`
 flex:1;
 padding-left: 60px;
`

const Image=styled.img`
  width:80%;
  height:80vh;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;

`

const InfoContainer=styled.div`
flex: 1;
padding:0px 50px;
`
const Title=styled.h1`
 font-weight: bold;
 font-size: 50px;
`

const Des=styled.p`
   margin: 20px 0px;
   font-size: 20px;
`

const Price=styled.span`
 font-weight:bold ;
 font-size:35px;
`
const FilterContainer=styled.div`
  width:50%;
  display:flex;
  justify-content: space-between;
  margin:20px 0px;
`
const Filter=styled.div`
  display: flex;
  align-items:center;
`
const FilterTitle=styled.span  `
  font-size: 25px;
  font-weight: 500;
`
const FilterColor=styled.div`
  width:20px;
  height:20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin:0px 7px;
  cursor:pointer;
  border: ${props=>props.active?"solid 3px teal":""};
`
const FilterSize=styled.select`
 margin:12px;
 padding:8px;
 font-size: 20px;
 border:3px solid teal;
 color:teal;
`
const FilterSizeOption=styled.option`
 color:teal;
`
const AddContainer=styled.div`
 display:flex;
 width:50%;
 align-items: center;
 justify-content: space-between;
`
const AmountContainer=styled.div`
   display:flex;
   align-items: center;
   font-weight: 700;
`
const  Amount=styled.span`
width:30px;
height:30px;
font-size: 20px;
border:3px solid teal;
display:flex;
align-items:center;
justify-content: center;
margin :0px 7px;
`
const Button=styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  border: 3px solid teal;
  background-color: transparent;
  color:teal;
  cursor: pointer;
  transition:all 0.5s ease ;
  &:hover{
     background-color: teal;
     color:white;
     transform: scale(1.1);
  }

`


const Product = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch =useDispatch();
  const cart=useSelector(state=>state.cart)
  
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        setColor(res.data.color[0]);
        setSize(res.data.size[0]);
      } catch(err){
         console.log(err);
      }
    };
    getProduct();
  }, [id]);





  const [colorState, setcolorState] = useState([true]);
  

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };




  const handleColor=(color,idx)=>
  {
    setColor(color);
    const state=[];
    for(let i=0;i<product.color.length;i++)
       state[i]=false;
    state[idx]=true;
     setcolorState(state);       
   // console.log(state);

  }

  const handleClick=()=>{
    
     dispatch(addProduct({...product,quantity,color,size}));
     
     console.log(cart);

  }

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src={product.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Des>{product.desc}</Des>
                <Price>₹{product.price}</Price>
              <FilterContainer>
              <Filter>
                    <FilterTitle>Color</FilterTitle>
                    {
                      product.color?.map((c,idx) => (
                        <FilterColor active={colorState[idx]} color={c} key={c} onClick={()=>handleColor(c,idx)} />
                     ))}
                                     
              </Filter>
              <Filter>
                     <FilterTitle>Size</FilterTitle>
                     <FilterSize onChange={(e) => setSize(e.target.value)}>
                     {product.size?.map((s) => (
                      <FilterSizeOption key={s}>{s}</FilterSizeOption>
                     ))}
                     </FilterSize>
              </Filter>
              </FilterContainer>
              <AddContainer>
                 <AmountContainer>
                    <Remove  onClick={() => handleQuantity("dec")} />
                    <Amount>{quantity}</Amount>
                    <Add  onClick={() => handleQuantity("inc")}/>
                 </AmountContainer>
                 <Button onClick={handleClick}>ADD TO CART</Button>
              </AddContainer>

            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product