import React from "react";
import { render } from "react-dom";
import fetch from 'node-fetch';
import 'cross-fetch/polyfill';
import { createHttpLink } from 'apollo-link-http';
import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Products from './Products';

import './index.css';
import './title1.css';


export default class Title extends React.Component{
 


    render(){
        return(
          
            <div className="tit">
                
          <h2 className="suni" align="center">Beer Products for Beer Lovers</h2>
          <img className="clickHere" src="https://media1.tenor.com/images/dcb85f2b756c59557186e1632cbb540f/tenor.gif"></img>
                
                
            </div>
            
                 )
        }
    }