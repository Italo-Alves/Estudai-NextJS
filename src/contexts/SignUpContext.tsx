import { createContext, Dispatch, SetStateAction, useState } from "react";

interface SignUpContextData {
  isTeacher: boolean;
  setIsTeacher: Dispatch<SetStateAction<Boolean>>;
}

export const SignUpContext = createContext({} as SignUpContextData);

export function SignUpProvider({ children }) {
  const [isTeacher, setIsTeacher] = useState(false);

  return (
    <SignUpContext.Provider value={{ isTeacher, setIsTeacher }}>
      {children}
    </SignUpContext.Provider>
  );
}
