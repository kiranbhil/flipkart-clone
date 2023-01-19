import React from 'react'
import { Box,Img,Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box id='footer' color="#212121" bg="black"  w="100%" margin="auto" border="1px solid white" boxSize={['xs','md','lg']}>
    <Box id="Upper box" display={["block","block","flex"]} border="1px solid white">

    <Box id="Subbox1" display={["block","block","flex"]} gap="10%" w="60%"  mt="20px" mb="20px" >

      <Box id="box1" ml="10%" boxSize={['xs','md','lg']}>
        <Box color="rgb(135, 135, 135)">
          <Text fontSize={["5px", "10px", "12px"]}>ABOUT</Text>
        </Box>
        <Box fontSize={["5px", "10px", "12px"]} color="rgb(255, 255, 255)"  _hover={{cursor: "pointer"}}>
          <Text>Contact Us</Text>
          <Text>About Us</Text>
          <Text>Careers</Text>
          <Text>Flipkart Stories</Text>
          <Text>Press</Text>
          <Text>Flipkart Wholesale</Text>
          <Text>Corporate Information</Text>
        </Box>
      </Box>

      <Box id="box2">
        <Box color="rgb(135, 135, 135)">
          <Text fontSize={["5px", "10px", "12px"]}>HELP</Text>
        </Box>
        <Box fontSize={["5px", "10px", "12px"]} color="rgb(255, 255, 255)" _hover={{cursor: "pointer"}}>
          <Text>Payments</Text>
          <Text>Shippings</Text>
          <Text>Cancellation & Returns</Text>
          <Text>FAQ</Text>
          <Text>Report Infringement</Text>
        </Box>
      </Box>

      <Box id="box3">
        <Box color="rgb(135, 135, 135)">
          <Text fontSize={["5px", "10px", "12px"]}>POLICY</Text>
        </Box>
        <Box fontSize={["5px", "10px", "12px"]} color="rgb(255, 255, 255)" _hover={{cursor: "pointer"}}>
          <Text>Return Policy</Text>
          <Text>Terms Of Use</Text>
          <Text>Security</Text>
          <Text>Privacy</Text>
          <Text>Sitemap</Text>
          <Text>EPR Compliance</Text>
        </Box>
      </Box>

      <Box id="box4" mr="10%">
        <Box color="rgb(135, 135, 135)">
          <Text fontSize={["5px", "10px", "12px"]}>SOCIAL</Text>
        </Box>
        <Box fontSize={["5px", "10px", "12px"]} color="rgb(255, 255, 255)" _hover={{cursor: "pointer"}}>
          <Text>Facebook</Text>
          <Text>Twitter</Text>
          <Text>YouTube</Text>
        </Box>
      </Box>

      </Box>

      {/* <Box border="0px" borderTop="2px" borderColor="white.200" m="auto" mt="35px" id="Subbox2"></Box> */}

      <Box id="Subbox3" w="40%" display="flex" gap="10%" mt="20px">

      <Box id="box1" ml="10%">
        <Box color="rgb(135, 135, 135)">
          <Text fontSize={["5px", "10px", "12px"]}>Mail Us:</Text>
        </Box>
        <Box fontSize={["5px", "10px", "12px"]} color="rgb(255, 255, 255)">
          <Text>Flipkart Internet Private Limited,Buildings Alyssa, Begonia &Clove Embassy Tech Village,Outer Ring Road, Devarabeesanahalli Village,Bengaluru, 560103,Krnataka, India</Text>
        </Box>
      </Box>

      <Box id="box2" mr="10%">
        <Box color="rgb(135, 135, 135)">
          <Text fontSize="12px">Registered Office Address:</Text>
        </Box>
        <Box fontSize="12px" color="rgb(255, 255, 255)">
          <Text>Flipkart Internet Private Limited,Buildings Alyssa, Begonia &Clove Embassy Tech Village,Outer Ring Road, Devarabeesanahalli Village,Bengaluru, 560103,Karnataka, IndiaCIN : U51109KA2012PTC066107Telephone: 044-45614700</Text>
        </Box>
      </Box>

      </Box>


      </Box>

      {/* <Box id="Middle box" border="0px" borderTop="2px" borderColor="grey.200" m="auto" mt="35px" w="100%"></Box>  */}

      <Box id="Lower box" display="flex" ml="5%" gap={["15px", "30px", "40px"]} >

        <Box id="box1" display="flex" gap={["2px", "7px", "10px"]}>
            <Img sizes={['xs','md','lg']} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTJoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTUuOTMgNS42MTRoLTIuOTQ4VjQuMTRjMC0uODE4LS42NTUtMS40NzMtMS40NzMtMS40NzNIOC41NmMtLjgxNyAwLTEuNDczLjY1NS0xLjQ3MyAxLjQ3M3YxLjQ3NEg0LjE0Yy0uODE4IDAtMS40NjYuNjU2LTEuNDY2IDEuNDc0bC0uMDA3IDguMTA1YzAgLjgxOC42NTUgMS40NzQgMS40NzMgMS40NzRoMTEuNzljLjgxOCAwIDEuNDc0LS42NTYgMS40NzQtMS40NzRWNy4wODhjMC0uODE4LS42NTYtMS40NzQtMS40NzQtMS40NzR6bS00LjQyMSAwSDguNTZWNC4xNGgyLjk0OHYxLjQ3NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPgogICAgPC9nPgo8L3N2Zz4K" />
            <Text color="white">Become a Seller</Text>
        </Box>

        <Box id="box2" display="flex" gap={["2px", "7px", "10px"]} >
            <Img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0zLTNoMjB2MjBILTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuNDkyIDNDNi4zNTMgMyAzIDYuMzYgMyAxMC41YzAgNC4xNCAzLjM1MyA3LjUgNy40OTIgNy41QzE0LjY0IDE4IDE4IDE0LjY0IDE4IDEwLjUgMTggNi4zNiAxNC42NCAzIDEwLjQ5MiAzem0zLjE4IDEyTDEwLjUgMTMuMDg4IDcuMzI3IDE1bC44NC0zLjYwN0w1LjM3IDguOTdsMy42OS0uMzE1TDEwLjUgNS4yNWwxLjQ0IDMuMzk4IDMuNjkuMzE1LTIuNzk4IDIuNDIyLjg0IDMuNjE1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" />
            <Text color="white">Advertise</Text>
        </Box>

        <Box id="box3" display="flex" gap={["2px", "7px", "10px"]}>
            <Img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE4IDE3Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLTFoMjB2MjBILTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNjY3IDVIMTQuODVjLjA5Mi0uMjU4LjE1LS41NDIuMTUtLjgzM2EyLjQ5NyAyLjQ5NyAwIDAgMC00LjU4My0xLjM3NUwxMCAzLjM1bC0uNDE3LS41NjdBMi41MSAyLjUxIDAgMCAwIDcuNSAxLjY2N2EyLjQ5NyAyLjQ5NyAwIDAgMC0yLjUgMi41YzAgLjI5MS4wNTguNTc1LjE1LjgzM0gzLjMzM2MtLjkyNSAwLTEuNjU4Ljc0Mi0xLjY1OCAxLjY2N2wtLjAwOCA5LjE2NkExLjY2IDEuNjYgMCAwIDAgMy4zMzMgMTcuNWgxMy4zMzRhMS42NiAxLjY2IDAgMCAwIDEuNjY2LTEuNjY3VjYuNjY3QTEuNjYgMS42NiAwIDAgMCAxNi42NjcgNXptMCA2LjY2N0gzLjMzM3YtNWg0LjIzNEw1LjgzMyA5LjAyNWwxLjM1Ljk3NSAxLjk4NC0yLjdMMTAgNi4xNjdsLjgzMyAxLjEzMyAxLjk4NCAyLjcgMS4zNS0uOTc1LTEuNzM0LTIuMzU4aDQuMjM0djV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
            <Text color="white">Gift Cards</Text>
        </Box>

        <Box id="box4" display="flex" gap={["2px", "7px", "10px"]}>
            <Img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTNoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS41IDNDNS4zNiAzIDIgNi4zNiAyIDEwLjUgMiAxNC42NCA1LjM2IDE4IDkuNSAxOGM0LjE0IDAgNy41LTMuMzYgNy41LTcuNUMxNyA2LjM2IDEzLjY0IDMgOS41IDN6bS43NSAxMi43NWgtMS41di0xLjVoMS41djEuNXptMS41NTMtNS44MTNsLS42NzYuNjljLS41NC41NDgtLjg3Ny45OTgtLjg3NyAyLjEyM2gtMS41di0uMzc1YzAtLjgyNS4zMzgtMS41NzUuODc3LTIuMTIzbC45My0uOTQ1Yy4yNzgtLjI3LjQ0My0uNjQ1LjQ0My0xLjA1NyAwLS44MjUtLjY3NS0xLjUtMS41LTEuNVM4IDcuNDI1IDggOC4yNUg2LjVhMyAzIDAgMSAxIDYgMGMwIC42Ni0uMjcgMS4yNi0uNjk3IDEuNjg4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" />
            <Text color="white">Help Center</Text>
        </Box>

        <Box id="box5">
            <Text color="white">© 2007-2023 Flipkart.com</Text>
        </Box>

        <Box id="box6" margin="auto">
            <Img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg"/>
        </Box>

      </Box>
    </Box>
  )
}

export default Footer;