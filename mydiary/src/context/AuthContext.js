import { Children, createContext, useReducer } from "react";

// context 객체를 생성합니다.
const AuthContext = createContext;

// react 에서 chidren : 컴포넌트 태그의 사이에 위치한 내용을 가르킨다.
const AuthContextProvider = ({ chidren }) => {
  const authReducer = (state, action) => {
    switch (action.type) {
      case "login":
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(authReducer, { user: null });

  return <AuthContext.Provider value={{ ...state, dispatch }}>{Children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
