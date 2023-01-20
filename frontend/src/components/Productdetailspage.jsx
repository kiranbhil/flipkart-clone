import React, { useState } from 'react'
import {Box, Button, Center,Flex,FormControl,Image, Link, Popover, PopoverContent, PopoverTrigger, Select, Slider, Text} from "@chakra-ui/react"
import "../css/Productdetailspage.css"
import Carousel from './Crousal'
let data=[
  "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/b/q/u/-original-imaghvb3rb8ucbuq.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/shoe/a/j/j/195110-11-puma-gray-violet-white-original-imafzfgffzxb6zhq.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/shoe/c/5/o/195110-11-puma-gray-violet-white-original-imafzfgfp8mfvtxv.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/shoe/q/q/9/195110-11-puma-gray-violet-white-original-imafzfgfbj7up93k.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/shoe/u/p/c/195110-11-puma-gray-violet-white-original-imafzfgfhehyvapy.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/shoe/a/l/x/195110-11-puma-gray-violet-white-original-imafzfgfebg49ava.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/shoe/j/i/e/195110-11-puma-gray-violet-white-original-imafzfgfbdnkhqfv.jpeg?q=70"
]

const Productdetailspage = () => {

  // $.getJSON("https://api.postalpincode.in/pincode/" + pin, function (data) {
  //   createHTML(data);
  // })

  const handlesubmit=(e)=>
  {
    console.log(e.target.value)
  }
  const handlechange=(e)=>
  {
    console.log(e.target.value)
  }
  return (
    <>
    <Center>
      <Box className='productdetailspage_container'>
        <div className='productdetailspage_container_first_child'>
          <div className='productdetailspage_container_first_child_firstdiv'>
            <div className='productdetailspage_container_first_child_firstdiv_fdiv'>
            <Carousel
               data={data}
              />
            </div>
            <div className='productdetailspage_container_first_child_firstdiv_sdiv'>
              <Image width={"100%"} height={"100%"} src="https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/b/q/u/-original-imaghvb3rb8ucbuq.jpeg?q=70"/>
            </div>
          </div>
          <div className='productdetailspage_container_first_child_seconddiv'>
            <Center>
              <Button width={"45%"} height={"55"} margin={"auto"} backgroundColor={"orange"} color={"white"}>ADD TO CART</Button>
              <Button width={"45%"} height={"55"} margin={"auto"} backgroundColor={"#ff5722"} color={"white"}>BUY NOW</Button>
            </Center>
          </div>
        </div>


        <div className='productdetailspage_container_second_child'>
        <Text margin={'20px'} fontSize={'20px'} fontWeight={'bold'}>title</Text>
        <Text margin={'20px'}>subtitle</Text>
        <Text margin={'20px'} color={"green"}>Special price</Text>
        <Flex><Text marginLeft={'20px'} fontWeight={'bold'}>price</Text><Text marginLeft={'20px'} textDecorationLine={'line-through'}>original price</Text></Flex>
        <Text color={'green'} margin={'20px'}>discount</Text>
        <Text margin={'20px'} fontSize={'14px'}>Ratings -</Text>
        <select className='option' style={{margin:"20px"}} >
        <option>Choose Size</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        </select>
        <Popover>
        <PopoverTrigger>
        <Text margin={'20px'}>{'> Size Chart'}</Text>
        </PopoverTrigger>
        <PopoverContent>
        <Image  />
        </PopoverContent>
        </Popover>
        <FormControl margin="20px" onSubmit={handlesubmit} >
            <div class="form-group">
              <label for="text">Enter Indian Pincode</label>
              <br />
              <input type="text" class="form-control" className="text" placeholder="Enter Pincode" maxlength="6"
                onkeypress="return event.charCode >= 48 && event.charCode <= 57" onChange={handlechange} />
            </div>
            <Button className="submit" type="submit" >
              Submit
            </Button>
          </FormControl>
        <Text margin={'20px'}>Free Shipping avaliable</Text>
        <Box marginLeft={'20px'}>
          <Text >Product Material Details</Text>
          <Text>Cotton</Text>
        </Box>
        </div>
      </Box>
    </Center>
    </>
  )
}

export default Productdetailspage