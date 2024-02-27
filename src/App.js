import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { styled, Box, Typography } from '@mui/material';
import { alpha, InputBase } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
const apiKey = "c2f46938";
function App() {
  const [query,setQuery]=useState([])
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
  const ResultsContainer = styled("div")(({theme})=>({
    display:"flex",
    flexDirection:"row",
    gap:theme.spacing(3),
    justifyContent:"center",
    alignItems:"center",
    flexWrap:"wrap",
    minHeight:"55.8vh",
    padding:theme.spacing(2)
  }))
  const ResultCard = styled("div")(({theme})=> ({
    display:"flex",
    flexDirection:"column",
    height:500,
    width:300,
    cursor:"pointer",
    boxShadow: theme.shadows[3],
    borderRadius:theme.spacing(1),
    backgroundColor:theme.palette.primary.main,
    color:theme.palette.primary.textColor,
    [theme.breakpoints.down("sm")]:{
      height:400,
      width:200,
    }
  }))
  const ImageWrapper = styled("img")(({theme})=> ({
    height:"70%",
    width:"100%",
    objectFit:"fill"
  }))
  const TextWrapper = styled("div")(({theme}) =>({
    display:"flex",
    flexDirection:"column",
    alignItems:"start",
    padding:theme.spacing(2),
    gap:theme.spacing(1)
  }))
  const resultsMapped = query?.map((e, index) => (
    <ResultCard key={index}>
      <ImageWrapper src={`${e?.Poster}`} />
      <TextWrapper>
        <Typography variant="body3">{e?.Type}</Typography>
        <Typography variant="h6">{e?.Title}</Typography>
      </TextWrapper>
    </ResultCard>
  ));
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
        <ResultsContainer>
          {resultsMapped}
        </ResultsContainer>
      </Box> responsation
    </>
  );
}

export default App;
