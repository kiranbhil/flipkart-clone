import { InputBase,Box,styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
   background:#fff;
   width:38%;
   border-radius:4px;
   margin-left:10px;
   display:flex;
`;

const InputSearchBase = styled(InputBase)`
  padding-left:20px;
  width:100%;
  font-size:unset;
`;

const SearchIconWrapper= styled(Box)`
  color:#2874f0;
  // color:purple;
  padding:5px;
  display:flex;
`

const Search = () => {
    return(
        <SearchContainer>
              <InputSearchBase
                placeholder='Serch for products,brands and more'
              />
              <SearchIconWrapper>
                <SearchIcon/>
              </SearchIconWrapper>
        </SearchContainer>
        
    )
}

export default Search;