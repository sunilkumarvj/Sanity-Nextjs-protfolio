import React from "react";
import { render } from "react-dom";
import fetch from 'node-fetch';
import 'cross-fetch/polyfill';
import { createHttpLink } from 'apollo-link-http';
import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import './Products.css'
import Link from 'next/link';

const client = new ApolloClient({
  uri: 'http://localhost:8001/__graphql',
});

function Products() {
  const { loading, error, data } = useQuery(gql`
  {
    allSanityBeerProducts {
      edges {
        node {
          _id
          price
          title
          description
          image {
            asset {
              url
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
  `);
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
 
  return <div className="bodyCont">  
  
  <h1 align="center" className="beer">Hitchhiker Galaxy Beer Store</h1>
    <div className="header">
      <div className="logo"><Link href="/"><img className="i" src="https://media.glassdoor.com/sqll/152333/the-beer-store-squarelogo-1573434493086.png"></img></Link></div>
      
      <div className="ytube"><Link href="/Products">Beer Products</Link></div>
      <div className="home"><Link href="/Blovers">Beer Lovers</Link></div>
      <div className="quot"><a href="https://en.wikipedia.org/wiki/The_Beer_Store">About Us</a></div>
      <div className="gif"><img className="gifimg" src="https://i.imgur.com/OOsfinU.jpg"></img></div>
    </div>
   <img className="page2img" src="https://storage.googleapis.com/zagat-article-ss/FermentationLab-fb-sf.jpg"></img>
  <div className="enemi">
    <h2 className="h31">Drink Beer..Want More??</h2>
   <p>Whoever drinks beer, he is quick to sleep; whoever sleeps long, does not sin; whoever does not sin, enters Heaven! Thus, let us drink beer!</p>
   <p>“A man who lies about beer makes enemies”</p>
   <h2 className="Buy"> Buy your Products... Please say Cheers!!!</h2>
    </div> 

  <div className="mainprodp">  
  
  {data.allSanityBeerProducts.edges.map(({node: project}) => (
        
    <div className="s1" key={project.slug.current}>
      
       <img className="imgbeers" src={project.image.asset.url} alt={project.title}></img>
       <div className="bttn"> <button  className="buy-button snipcart-add-item" data-item-id={project._id} 
                               data-item-price="100" 
                               
                               data-item-name={project.title} 
                               data-item-image={project.image.asset.url}
                               data-item-description={project.description}
                               data-item-custom1-name="Quantity"
                               data-item-custom1-options="60ml|90ml[+100.00]|Full[+300.00]"
                               ><span>Add Item</span></button><br /></div>
          <div className="desc">
              <div className="title"><b>Title:</b> {project.title}</div>
              <div className="price clayer-price" data-sku-code="1"><b>Price:</b> <span class="amount"></span></div>
              <div className="description"><b>Description:</b> {project.description}</div>

                               
        </div>

  </div>



      
  ))
  
  }
  </div>
  </div>
}
 
const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>Beer Store 🚀</h2>
      <Products />
    </div>
  </ApolloProvider>
);
 
export default App