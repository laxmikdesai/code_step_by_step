// import logo from './logo.svg';
import './App.css';
import StateInFunction from './FunctionalComponent/StateInFunction';
import React, { Component, PureComponent, useEffect, useState } from 'react'
import UpdatePropsWithStateinFunctionalComp from './FunctionalComponent/UpdatePropsWithStateinFunctionalComp';
import InputBoxValue from './FunctionalComponent/InputBoxValue';
import HideShow from './FunctionalComponent/HideShow';
import FormSbmit from './FunctionalComponent/FormSbmit';
import IfElse from './FunctionalComponent/IfElse';
import FormValidation from './FunctionalComponent/FormValidation';
import CmponentDidMoutn from './ClassComponent/CmponentDidMount';
import FunctionAsProps from './FunctionalComponent/FunctionAsProps';
import ComponentClass from './ClassComponent/ComponentClass';
import ComponentDidUpdate from './ClassComponent/ComponentDidUpdate';
import ShouldComponentUpdate from './ClassComponent/ShouldComponentUpdate';
import ComponentWillUnmount from './ClassComponent/ComponentWillUnmount';
import Hooks from './FunctionalComponent/Hooks';
import UseEffect from './FunctionalComponent/UseEffect';
import PropsWithUseEffect from './FunctionalComponent/PropsWithUseEffect';
import Map from './FunctionalComponent/Map';
import NesteadMap from './FunctionalComponent/NesteadMap';
import ReuseComponent from './FunctionalComponent/ReuseComponent';
import FormValidationPractice from './Practice/FormValidationPractice'; 
import Toggle from './Practice/Toggle';
import ClassComponent from './Practice/ClassComponent';
import Fragment from './FunctionalComponent/Fragment';
import ExampleOfPure from './ClassComponent/ExampleOfPure';
import UseMemo from './FunctionalComponent/UseMemo';
import RefComponent from './ClassComponent/RefComponent';
import UseRefHook from './FunctionalComponent/UseRefHook';
import ForwordRef from './FunctionalComponent/ForwordRef';
import ControlledComponent from './ControlledComponent';
// import Parent from './FunctionalComponent/Parent';
import ControlledInClass from "./ClassComponent/ControlledInClass";
import Uncontrol from './FunctionalComponent/Uncontrol';
import HOC from './FunctionalComponent/HOC';
import Main from './ReactRouterDom/Main';
import FunctionMain from './FunctionalComponent/FunctionMain';
import MainFile from './RouterWebsite/MainFile';
function App()
   {
// const[name,Updatename]=useState("Laxmi");    
// const Update=()=>{
//   Updatename("Amruta");
// }

// function getData()
// {
//   return alert("Welcome in App component");
// }

// useEffect(()=>{
//   fetch("http://localhost:5002/home").then((result)=>{result.json().then((resp)=>{
//   console.log("result",resp)
// })})

// },[])
 return(
 <>
 {/* <StateInFunction></StateInFunction> */}
{/* <div> <UpdatePropsWithStateinFunctionalComp data={name} hobby={{game:"khoko",game2:"kabadi"}} />
 <button onClick={Update}>save</button> */}
 {/* <InputBoxValue/> */}
 {/* <HideShow/> */}
 {/* <FormSbmit/> */}
{/* <IfElse/> */}
{/* <FormValidation/> */}

{/* We can pass value in consructor as props in state */}
{/* <CmponentDidMoutn data="laxmi"/>  */}


 {/* <FunctionAsProps data={getData}/> */}
{/* <ComponentClass/> */}
{/* <ComponentDidUpdate/> */}
 {/* <ShouldComponentUpdate/> */}
{/* <ComponentWillUnmount/> */}
{/* <Hooks/> */}
{/* <UseEffect/> */}
 {/* <PropsWithUseEffect /> */}
 {/* <Map/> */}
 {/* <NesteadMap/> */}
 {/* <ReuseComponent/> */}
 {/* <FormValidationPractice/> */}
{/* <Toggle/> */}
{/* <ClassComponent/> */}
{/* <Fragment/> */}
 {/* <Parent/> */}
{/* <ExampleOfPure/> */}
{/* <UseMemo/> */}
{/* <RefComponent/> */}
 {/* <UseRefHook/> */}
 {/* <ForwordRef/> */}
 {/* <ControlledComponent/> */}
 {/* <ControlledInClass/> */}
{/* <Uncontrol/> */}
{/* <HOC/> */}
{/* <Main/> */}
<FunctionMain/>
{/* <MainFile/> */}


<div>
  <h1>Get Api call</h1>
</div>
 </>
 )
}

export default App;
