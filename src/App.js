import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { styled, Box } from '@mui/material';
import { alpha, InputBase } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
const apiKey = "c2f46938";
function App() {
  const [query,setQuery]=useState('')
  const [search,setSearch]=useState('')
  const fetchData = (movieTitle) =>{
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${movieTitle}`)
    .then(response => response.json())
    .then(data => setQuery(data.Search))
  }
  useEffect(()=>{
    fetchData(search)
  },[search])
  const HeadingWrapper = styled("h1")(({theme})=>({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    fontSize:"48px",
    marginBottom:theme.spacing(4),
    color:theme.palette.primary.textColor,
  }))
  console.log(query)
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
          backgroundColor: "#1f2123",
          color: "#c2bebe",
        }}
      >
        <HeadingWrapper>MovieLand</HeadingWrapper>
        <div className="search">
          <SearchIcon sx={{cursor:'pointer', fontSize:"32px"}}/>
          <input onChange={(e)=> setSearch(e.target.value)} value={search} placeholder='Search for movies ...' />
        </div>
      </Box>
    </>
  );
}

export default App;
