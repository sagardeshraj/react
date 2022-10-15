import React from "react";
import { createContext } from "react";

const UserContext = createContext('default value');

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider , UserConsumer, UserContext }










