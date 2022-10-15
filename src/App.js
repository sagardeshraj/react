import "./App.css";
import React , {Profiler, Suspense} from "react";
import styles from "./components/App.module.css";
import StateClass from "./components/StateClass";
import Event from "./Event";
import MethodProp from "./components/MethodProp";
import ConditionalRendering from "./components/ConditionalRendering";
import ListRendering from "./components/ListRendering";
import ListRenderingObj from "./components/ListRenderingObj";
import Form from "./components/Form";
import LifeMounting from "./components/LifeMounting";
import LifeUpdating from "./components/LifeUpdating";
import PureComp from "./components/PureComp";
import ReactMemo from "./components/ReactMemo";
import Refs from "./components/Refs";
import ParentRefToClass from "./components/ParentRefToClass";
import ParentForwaedRef from "./components/ParentForwaedRef";
import Portal from "./components/Portal";
import ErrorFile from "./components/ErrorFile";
import ErrorBoundry from "./components/ErrorBoundry"; // provides the whole children tree below it
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import RPclickCounter from "./components/RPclickCounter";
import RPhoverCounter from "./components/RPhoverCounter";
import RPcommonCode from "./components/RPcommonCode";
import { UserProvider } from "./components/UserContext";
import ComponentC from "./components/ComponentC";
import HttpGetClass from "./components/HttpGetClass";
import HttpPostClass from "./components/HttpPostClass";
import HookCounter from "./components/HookCounter";
import HookUSwithPrePrps from "./components/HookUSwithPrePrps";
import HookUSobject from "./components/HookUSobject";
import HookUSarray from "./components/HookUSarray";
import UseEffectOne from "./components/UseEffectOne";
import UseAffectTwo from "./components/UseAffectTwo";
import UseEffectThree from "./components/UseEffectThree";
import UseEffectFour from "./components/UseEffectFour";
import UseEffectFive from "./components/UseEffectFive";
import UseEffectFetching from "./components/UseEffectFetching";
import HookContext from "./components/HookContext";
import UseReducerOne from "./components/UseReducerOne";
import UseReducerTwo from "./components/UseReducerTwo";
import UseReducerThree from "./components/UseReducerThree";
import Parent from "./components/Parent";
import UseReducerFetching from "./components/UseReducerFetching";
import UseCallbackParent from "./components/UseCallbackParent";
import UseMemoHook from "./components/UseMemoHook";
import UseRefHook from "./components/UseRefHook";
import UseRefWithClass from "./components/UseRefWithClass";
import UseRefWithFunctional from "./components/UseRefWithFunctional";
import UseDocumentCustomHookOne from "./components/UseDocumentCustomHookOne";
import UseDocumentCustomHookTwo from "./components/UseDocumentCustomHookTwo";
import UseCounterCustomHookOne from "./components/UseCounterCustomHookOne";
import UseCounterCustomHookTwo from "./components/UseCounterCustomHookTwo";
import UseInputCustomHooks from "./components/UseInputCustomHooks";
import ProfilerReact from "./components/ProfilerReact";
// import LazyFIle from "./components/LazyFIle";  // dyanmic import is needed;
const LazyFIle = React.lazy(()=>import('./components/LazyFIle'))



function App() {
  return (
    <div className="App">
      <h1 className={styles.x}>App Component</h1>

      {/* <StateClass /> */}
      {/* <Event /> */}
      {/* <MethodProp /> */}
      {/* <ConditionalRendering /> */}
      {/* <ListRendering /> */}
      {/* <ListRenderingObj /> */}
      {/* <Form /> */}
      {/* <LifeMounting x = {2} /> */}
      {/* <LifeUpdating count ={7}/> */}
      {/* <PureComp /> */}
      {/* <ReactMemo /> */}
      {/* <Refs /> */}
      {/* <ParentRefToClass /> */}
      {/* < ParentForwaedRef /> */}
      {/* <Portal /> */}

      {/* --------ErrorBoundry--------- */}
      {/* <ErrorBoundry> everything inside this will show fallback ui, so u can cheak any specific in nesting */}
      {/* <ErrorFile heroname='batman' /> */}
      {/* <ErrorFile heroname='superman' /> */}
      {/* <ErrorFile heroname='joker' /> */}
      {/* </ErrorBoundry> */}

      {/*--------- hoc--------- */}
      {/* <ClickCounter />        here given props will be recieved in the hoc not this component so destructure there   */}
      {/* <HoverCounter /> */}

      {/* --------RenderProp--------- */}
      {/* <RPcommonCode
        render={(count, incrementCount) => (
          <RPclickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <RPcommonCode
        render={(count, incrementCount) => (
          <RPhoverCounter count={count} incrementCount={incrementCount} />
        )}
      />   */}

    {/*-------------- context----------- */}
      {/* <UserProvider value="sagar">
        <ComponentC />
      </UserProvider> */}
      

      {/* ------------API---------------- */}
       {/* <HttpGetClass /> */}
       {/* <HttpPostClass /> */}


      {/* ------code spliting-------- */}
        {/* <Suspense fallback={ <h4>Loading....</h4> }>
          <LazyFIle />
        </Suspense>  */}

      {/* -----------1).useState Hooks------------*/}
      {/* <HookCounter /> */}
      {/* <HookUSwithPrePrps />  */}
      {/* <HookUSobject /> */}
      {/* <HookUSarray /> */}

      {/* -----------2).useEffect Hooks------------*/}
      {/* <UseEffectOne /> */}
      {/* <UseAffectTwo /> */}
      {/* <UseEffectThree /> */}
      {/* <UseEffectFour /> */}
      {/* <UseEffectFive /> */}
      {/* <UseEffectFetching /> */}


      {/* -----------3).useContext Hooks------------*/}
      {/* <HookContext /> */}


      {/* -----------4).useReducer Hooks------------*/}
      <UseReducerOne />
      {/* <UseReducerTwo /> */}
      {/* <UseReducerThree /> */}

      {/* ------useReducer with useContext------ */}
      {/* <Parent /> */}

      {/* ------useReducer fetching data------ */}
      {/* <UseReducerFetching /> */}

      {/* -----------5).useCallback Hooks------------*/}
      {/* <UseCallbackParent /> */}

      {/* -----------6).useMemo Hooks------------*/}
      {/* <UseMemoHook /> */}

      {/* -----------7).useRef Hooks------------*/}
      {/* <UseRefHook /> */}
      {/* <UseRefWithClass /> */}
      {/* <UseRefWithFunctional /> */}

      {/* ---------custom Hooks--------- */}
      {/* <UseDocumentCustomHookOne /> */}
      {/* <UseDocumentCustomHookTwo />        with custom Hook */}

      {/* <UseCounterCustomHookOne /> */}
      {/* <UseCounterCustomHookTwo />         with custom Hook */}

      {/* <UseInputCustomHooks />             with custom Hook */}

      {/* -------profiler--------- */}
      {/* <ProfilerReact /> */}


    </div>
  )
}

export default App;
