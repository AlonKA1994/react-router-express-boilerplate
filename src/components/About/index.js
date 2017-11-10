// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';

import './style.css';

export default class About extends Component {

    constructor() {
        super();
        this.state = { items: new Array()};

        this.getAllExample      = this.getAllExample.bind(this);
        this.postExample        = this.postExample.bind(this);
        this.getOneExample      = this.getOneExample.bind(this);
        this.putOneExample      = this.putOneExample.bind(this);
        this.deleteOneExample   = this.deleteOneExample.bind(this);
    }


    componentWillMount() {
        // this.getAllExample();
        // this.postExample();
        // this.getOneExample(ID_NUMBER);
        // this.putOneExample(ID_NUMBER);
        // this.deleteOneExample(ID_NUMBER)
    }

    getAllExample(){
        let axiosInstance = axios.create({
            baseURL: 'http://localhost:8080/api',
            timeout: 10000,
            // withCredentials: true,
            //transformRequest: [(data) => JSON.stringify(data.data)],
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })

        axiosInstance.get('/logs')
            .then( (response) => {
                // response = Array of JSON objects
                this.setState({items:response.data});
                console.log("set items");
            })
            .catch( (error) =>{
                console.log(error)
            });
    }

    postExample(){
        let axiosInstance = axios.create({
            baseURL: 'http://localhost:8080/api',
            timeout: 10000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })

        axiosInstance.post('/logs',{
                name: 'Client',
                path: 'made it!!'
            })
            .then( (response) => {
                // response = JSON object
                console.log(response.data.message);
            })
            .catch( (error) =>{
                console.log(error)
            });
    }

    getOneExample(id){
        let axiosInstance = axios.create({
            baseURL: 'http://localhost:8080/api',
            timeout: 10000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        axiosInstance.get('/logs/' + id)
            .then( (response) => {
                // response = JSON object
                console.log(response.data.name);
            })
            .catch( (error) =>{
                console.log(error)
            });
    }

    putOneExample(id){
        let axiosInstance = axios.create({
            baseURL: 'http://localhost:8080/api',
            timeout: 10000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })

            axiosInstance.put('/logs/'+ id,{
                    name: 'changed',
                    path: 'From client!!'
                })
                .then( (response) => {
                    // response = JSON object
                    console.log(response.data.message);
                })
                .catch( (error) =>{
                    console.log(error)
                });
    }

    deleteOneExample(id){
        let axiosInstance = axios.create({
            baseURL: 'http://localhost:8080/api',
            timeout: 10000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })

        axiosInstance.delete('/logs/'+ id)
            .then( (response) => {
                // response = JSON object
                console.log(response.data.message);
            })
            .catch( (error) =>{
                console.log(error)
            });
    }

    render() {
        const { className, ...props } = this.props;
        const items =  this.state.items.map((item)=>
                       <div key={item.id}>*</div>
                    );
        return (
            <div className={classnames('About', className)} {...props}>
                <h1>
                    {items}
                </h1>
            </div>
        );
    }
}