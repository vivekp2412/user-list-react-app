
import { createSlice } from "@reduxjs/toolkit";

// import {createSlice } from "@reduxjs/toolkit";


interface DummyDataInter {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  active: boolean;
  owner: boolean;
  role: string;
  removable: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

 export const DummyData: DummyDataInter[] = [
  {
    _id: "641c3407f8c26a9cb62a4c8e",
    first_name: "Charles",
    last_name: "Morris",
    email: "charles.morris@reqres.in",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
    active: false,
    owner: false,
    role: "Read",
    removable: "true",
    createdAt: "2023-03-23T11:12:07.559Z",
    updatedAt: "2023-03-23T11:12:07.559Z",
    __v: 0,
  },
  {
    _id: "641c3407f8c26a9cb62a4c90",
    first_name: "George",
    last_name: "Edwards",
    email: "george.edwards@reqres.in",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    active: false,
    owner: false,
    role: "Read",
    removable: "true",
    createdAt: "2023-03-23T11:12:07.575Z",
    updatedAt: "2023-03-23T11:12:07.575Z",
    __v: 0,
  },
  {
    _id: "641c3407f8c26a9cb62a4c92",
    first_name: "Janet",
    last_name: "Weaver",
    email: "janet.weaver@reqres.in",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    active: true,
    owner: false,
    role: "Manager",
    removable: "true",
    createdAt: "2023-03-23T11:12:07.595Z",
    updatedAt: "2023-03-23T11:12:07.595Z",
    __v: 0,
  },
  {
    _id: "641c3407f8c26a9cb62a4c94",
    first_name: "Eve",
    last_name: "Holt",
    email: "eve.holt@reqres.in",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
    active: false,
    owner: false,
    role: "Manager",
    removable: "true",
    createdAt: "2023-03-23T11:12:07.612Z",
    updatedAt: "2023-03-23T11:12:07.612Z",
    __v: 0,
  },
  {
    _id: "641c3407f8c26a9cb62a4c96",
    first_name: "Emma",
    last_name: "Wong",
    email: "emma.wong@reqres.in",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    active: false,
    owner: false,
    role: "Read",
    removable: "true",
    createdAt: "2023-03-23T11:12:07.629Z",
    updatedAt: "2023-03-23T11:12:07.629Z",
    __v: 0,
  },
  {
    _id: "641c3407f8c26a9cb62a4c98",
    first_name: "George",
    last_name: "Edwards",
    email: "george.edwards@reqres.in",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    active: false,
    owner: false,
    role: "Read",
    removable: "true",
    createdAt: "2023-03-23T11:12:07.645Z",
    updatedAt: "2023-03-23T11:12:07.645Z",
    __v: 0,
  },
  {
    _id: "641c3407f8c26a9cb62a4c9a",
    first_name: "Janet",
    last_name: "Weaver",
    email: "janet.weaver@reqres.in",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    active: false,
    owner: false,
    role: "Manager",
    removable: "true",
    createdAt: "2023-03-23T11:12:07.661Z",
    updatedAt: "2023-03-23T11:12:07.661Z",
    __v: 0,
  },
  {
    _id: "641c3407f8c26a9cb62a4c9c",
    first_name: "Eve",
    last_name: "Holt",
    email: "eve.holt@reqres.in",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
    active: false,
    owner: false,
    role: "Manager",
    removable: "true",
    createdAt: "2023-03-23T11:12:07.676Z",
    updatedAt: "2023-03-23T11:12:07.676Z",
    __v: 0,
  },
  {
    _id: "641c3407f8c26a9cb62a4c9e",
    first_name: "George",
    last_name: "Edwards",
    email: "george.edwards@reqres.in",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    active: false,
    owner: false,
    role: "Read",
    removable: "true",
    createdAt: "2023-03-23T11:12:07.693Z",
    updatedAt: "2023-03-23T11:12:07.693Z",
    __v: 0,
  },
  {
    _id: "641c3407f8c26a9cb62a4ca0",
    first_name: "Janet",
    last_name: "Weaver",
    email: "janet.weaver@reqres.in",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    active: false,
    owner: false,
    role: "Manager",
    removable: "true",
    createdAt: "2023-03-23T11:12:07.709Z",
    updatedAt: "2023-03-23T11:12:07.709Z",
    __v: 0,
  },
];
const initialState={
   data:{}
}
const user = createSlice({
  name:"user-data",
  initialState,
  reducers:{
       showCard(state,action){
        console.log("hh");
         DummyData.map((userdata)=>{
          if(userdata._id==action.payload){
            state.data=userdata;
            console.log(state.data);
            
          }
         })
        //  console.log(state);
         
       }
      
        

  }
})
export const {showCard} = user.actions;
export default user.reducer;
